// Check authentication and redirect if not logged in
if (localStorage.getItem("loggedIn") !== "true") {
  window.location.href = "login.html";
}

// Utility function to format currency
function formatCurrency(amount) {
  return new Intl.NumberFormat('en-PH', {
    style: 'currency',
    currency: 'PHP'
  }).format(amount).replace('PHP', '₱');
}

document.addEventListener("DOMContentLoaded", function() {
  // Initialize time
  updateTime();
  setInterval(updateTime, 60000);
  
  // Get user data
  const userData = JSON.parse(localStorage.getItem("userData")) || {};
  const emailSpan = document.getElementById("user-email");
  const rentalList = document.getElementById("rental-list");
  const logoutBtn = document.getElementById("logout-btn");
  const totalRentalsSpan = document.getElementById("total-rentals");
  const activeRentalsSpan = document.getElementById("active-rentals");

  // Display user email
  emailSpan.textContent = userData.email || "Guest";

  // Display rentals
  displayRentals(userData.rentals || []);

  // Logout functionality
  logoutBtn.addEventListener("click", function(e) {
    e.preventDefault();
    localStorage.setItem("loggedIn", "false");
    window.location.href = "login.html";
  });

  function displayRentals(rentals) {
    rentalList.innerHTML = ""; // Clear existing content
    
    // Update stats
    totalRentalsSpan.textContent = rentals.length;
    const activeRentals = rentals.filter(rental => {
      const rentalDate = new Date(rental.timestamp);
      const returnDate = new Date(rentalDate);
      returnDate.setDate(rentalDate.getDate() + rental.days);
      return new Date() < returnDate;
    }).length;
    activeRentalsSpan.textContent = activeRentals;
    
    if (rentals.length === 0) {
      rentalList.innerHTML = `
        <div class="no-rentals">
          <i class="fas fa-car"></i>
          <h3>No rentals yet</h3>
          <p>Start your adventure by renting your dream car</p>
        </div>
      `;
      return;
    }

    rentals.forEach((rental, index) => {
      const rentalDate = new Date(rental.timestamp);
      const returnDate = new Date(rentalDate);
      returnDate.setDate(rentalDate.getDate() + rental.days);
      
      const isActive = new Date() < returnDate;
      
      const card = document.createElement("div");
      card.className = "rental-card";
      card.innerHTML = `
        <div class="rental-image">
          <img src="${rental.image || '/ITHCI ASSETS/default-car.png'}" alt="${rental.name}">
        </div>
        <div class="rental-details">
          <h3>${rental.name || 'Unknown Car'}</h3>
          <div class="rental-meta">
            <span>${rental.days || 0} day(s)</span>
            <span class="rental-price">${formatCurrency(rental.total || 0)}</span>
          </div>
          <div class="rental-meta">
            <span>Rented: ${rentalDate.toLocaleDateString()}</span>
            <span>${isActive ? 'Active' : 'Completed'}</span>
          </div>
          <p class="rental-date">Due: ${returnDate.toLocaleDateString()}</p>
        </div>
        <button class="return-btn" data-index="${index}" title="Return vehicle">
          <i class="fas fa-undo"></i>
        </button>
      `;
      
      rentalList.appendChild(card);
    });

    // Add event listeners to return buttons
    document.querySelectorAll('.return-btn').forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.stopPropagation();
        const index = parseInt(this.getAttribute('data-index'));
        returnRental(index);
      });
    });
  }

  function returnRental(index) {
    const userData = JSON.parse(localStorage.getItem("userData")) || {};
    if (!userData.rentals || !userData.rentals[index]) return;
    
    if (confirm(`Are you sure you want to return ${userData.rentals[index].name}?`)) {
      userData.rentals.splice(index, 1);
      localStorage.setItem("userData", JSON.stringify(userData));
      displayRentals(userData.rentals);
    }
  }
});

// Time function
function updateTime() {
  const now = new Date();
  const timeElement = document.getElementById('current-time');
  const options = { hour: '2-digit', minute: '2-digit', hour12: true };
  if (timeElement) {
    timeElement.textContent = now.toLocaleTimeString('en-US', options);
  }
}

// Mobile menu toggle
function toggleMenu() {
  const menu = document.getElementById('mobile-menu');
  if (menu) {
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
  }
}

// Navigation function
function navigateTo(sectionId) {
  window.location.href = `index.html#${sectionId}`;
}

// Logout function (for mobile menu)
function logout() {
  localStorage.setItem("loggedIn", "false");
  window.location.href = "login.html";
}