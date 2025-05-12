// script.js
// Time display
function updateTime() {
  const timeElement = document.getElementById('current-time');
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  if (isNaN(hours) || isNaN(minutes) || isNaN(seconds)) return;

  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  let currentTime = `${hours}:${minutes}:${seconds}`;
  timeElement.textContent = currentTime;
}

// Toggle dropdowns
function toggleMenu() {
  document.getElementById('menu-dropdown').classList.toggle('hidden');
  document.getElementById('profile-dropdown').classList.add('hidden');
}

function toggleProfile() {
  document.getElementById('profile-dropdown').classList.toggle('hidden');
  document.getElementById('menu-dropdown').classList.add('hidden');
}

document.addEventListener('DOMContentLoaded', function () {
  setInterval(updateTime, 1000);
  updateTime();

  // Optional: Close dropdowns on outside click
  document.addEventListener('click', function (e) {
    const inside = e.target.closest('.icons') || e.target.closest('.dropdown');
    if (!inside) {
      document.getElementById('menu-dropdown').classList.add('hidden');
      document.getElementById('profile-dropdown').classList.add('hidden');
    }
  });
});
function logout() {
  localStorage.removeItem('userEmail');
  // You might want to remove other user-related data as well
  // localStorage.removeItem('otherUserData');

  // Redirect to login page
  window.location.href = 'login.html';
}



