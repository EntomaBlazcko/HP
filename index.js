//index.js
        // Combined JavaScript
        function updateTime() {
            const now = new Date();
            const timeElement = document.getElementById('current-time');
            const options = { hour: '2-digit', minute: '2-digit', hour12: true };
            timeElement.textContent = now.toLocaleTimeString('en-US', options);
        }
        
        function toggleMenu() {
            const menu = document.getElementById('mobile-menu');
            menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
        }
        
        function navigateTo(sectionId) {
            // Hide all sections
            document.querySelectorAll('.page-section').forEach(section => {
                section.classList.remove('active');
            });
            
            // Show the selected section
            document.getElementById(sectionId).classList.add('active');
            
            // Close mobile menu if open
            document.getElementById('mobile-menu').style.display = 'none';
            
            // Scroll to top
            window.scrollTo(0, 0);
        }
        
        // Dropdown Filter Functions
        function toggleDropdown(dropdownId) {
            // Close all other dropdowns first
            document.querySelectorAll('.filter-dropdown').forEach(dropdown => {
                if (dropdown.id !== dropdownId) {
                    dropdown.classList.remove('show');
                }
            });
            
            // Toggle the clicked dropdown
            const dropdown = document.getElementById(dropdownId);
            dropdown.classList.toggle('show');
        }
        
        // Close dropdowns when clicking outside
        window.onclick = function(event) {
            if (!event.target.matches('.filter-btn')) {
                document.querySelectorAll('.filter-dropdown').forEach(dropdown => {
                    dropdown.classList.remove('show');
                });
            }
        }
        
        // Filter selection
        const currentFilters = {
            make: '',
            model: '',
            year: '',
            price: '',
            engine: ''
        };
        
        function selectFilter(type, value, label) {
            currentFilters[type] = value;
            document.getElementById(`${type}-label`).textContent = label;
            
            // If make changes, update models dropdown
            if (type === 'make') {
                updateModelsDropdown(value);
                // Reset model filter
                currentFilters.model = '';
                document.getElementById('model-label').textContent = 'All Models';
            }
            
            // Close the dropdown
            document.getElementById(`${type}-dropdown`).classList.remove('show');
        }
        
        function updateModelsDropdown(make) {
            const modelDropdown = document.getElementById('model-dropdown');
            // Clear existing options except the first one
            modelDropdown.innerHTML = '<div class="filter-option" onclick="selectFilter(\'model\', \'\', \'All Models\')">All Models</div>';
            
            // Add models based on make
            if (make === 'toyota') {
                addModelOption('GR86');
                addModelOption('Supra');
                addModelOption('Camry');
            } else if (make === 'honda') {
                addModelOption('Civic');
                addModelOption('Accord');
            } else if (make === 'bmw') {
                addModelOption('M3');
                addModelOption('M5');
            } else if (make === 'audi') {
                addModelOption('RS5');
                addModelOption('RS7');
            } else if (make === 'mercedes') {
                addModelOption('AMG');
            } else if (make === 'tesla') {
                addModelOption('Model 3');
                addModelOption('Model S');
            }
            
            function addModelOption(modelName) {
                const option = document.createElement('div');
                option.className = 'filter-option';
                option.onclick = function() {
                    selectFilter('model', modelName.toLowerCase(), modelName);
                };
                option.textContent = modelName;
                modelDropdown.appendChild(option);
            }
        }
        
        // Apply filters
        function applyFilters() {
            const cars = document.querySelectorAll('.car-card');
            let hasResults = false;
            
            cars.forEach(car => {
                const carMake = car.dataset.make;
                const carModel = car.dataset.model;
                const carYear = car.dataset.year;
                const carPrice = parseInt(car.dataset.price);
                const carEngine = car.dataset.engine;
                
                // Check each filter
                const makeMatch = !currentFilters.make || carMake === currentFilters.make;
                const modelMatch = !currentFilters.model || carModel.includes(currentFilters.model);
                const yearMatch = !currentFilters.year || carYear === currentFilters.year;
                const engineMatch = !currentFilters.engine || carEngine === currentFilters.engine;
                
                // Price range matching
                let priceMatch = true;
                if (currentFilters.price === 'under30') {
                    priceMatch = carPrice < 30000;
                } else if (currentFilters.price === '30-50') {
                    priceMatch = carPrice >= 30000 && carPrice <= 50000;
                } else if (currentFilters.price === '50-80') {
                    priceMatch = carPrice >= 50000 && carPrice <= 80000;
                } else if (currentFilters.price === 'over80') {
                    priceMatch = carPrice > 80000;
                }
                
                if (makeMatch && modelMatch && yearMatch && priceMatch && engineMatch) {
                    car.style.display = 'block';
                    hasResults = true;
                } else {
                    car.style.display = 'none';
                }
            });
            
            // Show no results message if needed
            const noResults = document.getElementById('no-results');
            if (noResults) {
                noResults.remove();
            }
            
            if (!hasResults) {
                const carsContainer = document.getElementById('cars-container');
                const message = document.createElement('div');
                message.id = 'no-results';
                message.className = 'no-results';
                message.textContent = 'No cars match your filters. Try adjusting your criteria.';
                carsContainer.appendChild(message);
            }
        }
        
        function resetFilters() {
            // Reset filter labels
            document.getElementById('make-label').textContent = 'All Makes';
            document.getElementById('model-label').textContent = 'All Models';
            document.getElementById('year-label').textContent = 'All Years';
            document.getElementById('price-label').textContent = 'All Prices';
            document.getElementById('engine-label').textContent = 'All Engines';
            
            // Reset current filters
            currentFilters.make = '';
            currentFilters.model = '';
            currentFilters.year = '';
            currentFilters.price = '';
            currentFilters.engine = '';
            
            // Reset model dropdown
            updateModelsDropdown('');
            
            // Show all cars
            const cars = document.querySelectorAll('.car-card');
            cars.forEach(car => {
                car.style.display = 'block';
            });
            
            // Remove no results message if it exists
            const noResults = document.getElementById('no-results');
            if (noResults) {
                noResults.remove();
            }
        }
        
        // Initialize
        document.addEventListener('DOMContentLoaded', function() {
            updateTime();
            setInterval(updateTime, 1000);
            
            // Set home as default section
            navigateTo('home-section');
            
            // Initialize models dropdown
            updateModelsDropdown('');
        });
        document.addEventListener("DOMContentLoaded", function () {
  const rentBtn = document.getElementById("homepage-rent-btn");

  if (rentBtn) {
    rentBtn.addEventListener("click", function () {
      const isLoggedIn = localStorage.getItem("loggedIn") === "true";

      if (isLoggedIn) {
        // Scroll to vehicles section on the same page
        const vehiclesSection = document.getElementById("vehicles-section");
        if (vehiclesSection) {
          vehiclesSection.scrollIntoView({ behavior: 'smooth' });
          
          // Optional: If you need to show the section (in case it's hidden)
          vehiclesSection.style.display = 'block'; // Or whatever makes it visible
        }
      } else {
        // Redirect to signup (if it's a separate page)
        window.location.href = "signin.html";
        
        // OR if signup is also on the same page:
        // document.getElementById("signup-section").scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
});
// Unified navigation function
function navigateTo(sectionId) {
    // Hide all sections
    document.querySelectorAll('.page-section').forEach(section => {
        section.classList.remove('active');
        section.style.display = 'none';
    });
    
    // Show the selected section
    document.getElementById(sectionId).classList.add('active');
    document.getElementById(sectionId).style.display = 'block';
    
    // Close mobile menu if open
    document.getElementById('mobile-menu').style.display = 'none';
    
    // Scroll to top of the section
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Rent button now uses the same navigateTo function
document.addEventListener("DOMContentLoaded", function() {
    const rentBtn = document.getElementById("homepage-rent-btn");
    
    if (rentBtn) {
        rentBtn.addEventListener("click", function() {
            const isLoggedIn = localStorage.getItem("loggedIn") === "true";
            
            if (isLoggedIn) {
                navigateTo('vehicles-section'); // Same behavior as navbar link
            } else {
                window.location.href = "signin.html";
            }
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.slides img');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  const dotsContainer = document.querySelector('.slider-dots');
  let currentIndex = 0;
  let slideInterval;

  // Create dots
  slides.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => {
      goToSlide(index);
    });
    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll('.slider-dots .dot');

  function showSlide(index) {
    // Hide all slides
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Show current slide
    slides[index].classList.add('active');
    dots[index].classList.add('active');
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  }

  function goToSlide(index) {
    currentIndex = index;
    showSlide(currentIndex);
    resetInterval();
  }

  function startSlider() {
    slideInterval = setInterval(nextSlide, 5000);
  }

  function pauseSlider() {
    clearInterval(slideInterval);
  }

  function resetInterval() {
    pauseSlider();
    startSlider();
  }

  // Event listeners
  nextBtn.addEventListener('click', () => {
    nextSlide();
    resetInterval();
  });

  prevBtn.addEventListener('click', () => {
    prevSlide();
    resetInterval();
  });

  // Pause on hover
  const slider = document.querySelector('.gallery-slider');
  slider.addEventListener('mouseenter', pauseSlider);
  slider.addEventListener('mouseleave', startSlider);

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
      nextSlide();
      resetInterval();
    } else if (e.key === 'ArrowLeft') {
      prevSlide();
      resetInterval();
    }
  });

  // Initialize
  showSlide(currentIndex);
  startSlider();
});