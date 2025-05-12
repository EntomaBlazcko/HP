//rentscript.js
// Get car name from URL
const urlParams = new URLSearchParams(window.location.search);
const carKey = urlParams.get("car");

// Car database
const carList = {
 ToyotaGR86: {
    name: "Toyota GR86",
    year: "2024",
    engine: "2.4L Petrol",
    speed: "6.1 S",
    power: "228 HP",
    topSpeed: "216 KM/h",
    torque: "250 NM",
    price: "$35,000",
    rentPerDay: 3500,
    image: "/ITHCI ASSETS/1.svg", // used your image src from HTML
    description: "Lightweight sports coupe made for driving purists. Designed for balance and rear-wheel excitement.",
    features: [
      "Rear-Wheel Drive",
      "6-Speed Manual",
      "Touchscreen Infotainment",
      "Lane Assist"
    ],
    terms: "Must be 21+, valid driver’s license. ₱5,000 deposit required. Insurance optional."
  },ToyotaGT86: {
    name: "Toyota GT86",
    year: "2023",
    engine: "2.0L Petrol",
    speed: "7.6 S",
    power: "197 HP",
    topSpeed: "225 KM/h",
    torque: "205 NM",
    price: "$30,000",
    rentPerDay: 3000,
    image: "/ITHCI ASSETS/TOYOTA-GT86.png",
    description: "A classic lightweight sports car with sharp handling and a responsive chassis. Predecessor to the GR86.",
    features: [
      "Rear-Wheel Drive",
      "6-Speed Manual",
      "Stability Control",
      "Bluetooth Connectivity"
    ],
    terms: "Must be 21+, valid driver’s license. ₱4,000 deposit required. Insurance optional."
  },ToyotaSupraMK4: {
  name: "Toyota Supra MK4",
  year: "1998",
  engine: "3.0L Petrol",
  speed: "4.9 S",
  power: "326 HP",
  topSpeed: "277 KM/h",
  torque: "440 NM",
  price: "$60,000",
  rentPerDay: 6000,
  image: "/ITHCI ASSETS/4.svg",
  description: "Iconic 90s Japanese sports car, known for its 2JZ engine and immense tuning potential. A true legend among enthusiasts.",
  features: [
    "Twin-Turbocharged 2JZ Engine",
    "Rear-Wheel Drive",
    "6-Speed Manual",
    "Iconic Pop-Up Headlights"
  ],
  terms: "Must be 25+, valid driver’s license. ₱10,000 deposit required. Insurance required."
},ToyotaSupraMK5: {
  name: "Toyota Supra MK5",
  year: "2023",
  engine: "3.0L Petrol",
  speed: "3.9 S",
  power: "382 HP",
  topSpeed: "250 KM/h",
  torque: "500 NM",
  price: "$65,000",
  rentPerDay: 6500,
  image: "/ITHCI ASSETS/TOYOTA SUPRA MK5.png",
  description: "Modern performance icon co-developed with BMW, offering cutting-edge tech and blistering performance in a sleek coupe.",
  features: [
    "Turbocharged Inline-6",
    "Rear-Wheel Drive",
    "Adaptive Suspension",
    "8.8-inch Touchscreen"
  ],
  terms: "Must be 25+, valid driver’s license. ₱10,000 deposit required. Full coverage insurance required."
},BMW135i: {
  name: "BMW 135i",
  year: "2022",
  engine: "3.0L Petrol",
  speed: "5.3 S",
  power: "306 HP",
  topSpeed: "250 KM/h",
  torque: "400 NM",
  price: "$45,000",
  rentPerDay: 4500,
  image: "/ITHCI ASSETS/BMW 135i.png",
  description: "A compact German performance car with strong turbocharged power and refined driving dynamics.",
  features: [
    "Turbocharged Inline-6",
    "Rear-Wheel Drive",
    "M Sport Suspension",
    "iDrive Infotainment"
  ],
  terms: "Must be 23+, valid driver’s license. ₱7,000 deposit required. Insurance optional."
},BMWi8: {
  name: "BMW i8",
  year: "2021",
  engine: "1.5L Hybrid",
  speed: "4.4 S",
  power: "369 HP",
  topSpeed: "250 KM/h",
  torque: "320 NM",
  price: "$120,000",
  rentPerDay: 12000,
  image: "/ITHCI ASSETS/BMW I8.png",
  description: "A futuristic plug-in hybrid sports car that combines efficiency with exotic design and all-wheel-drive performance.",
  features: [
    "Plug-in Hybrid",
    "All-Wheel Drive",
    "Carbon Fiber Chassis",
    "Digital Cockpit Display"
  ],
  terms: "Must be 25+, valid driver’s license. ₱15,000 deposit required. Insurance required."
},ChevroletCorvetteC8: {
  name: "Chevrolet Corvette C8",
  year: "2023",
  engine: "6.2L Petrol",
  speed: "3.0 S",
  power: "495 HP",
  topSpeed: "312 KM/h",
  torque: "637 NM",
  price: "$85,000",
  rentPerDay: 8500,
  image: "/ITHCI ASSETS/CHEVROLLETE CORVET-C8.png",
  description: "America’s first mid-engine Corvette with supercar performance, stunning design, and track-ready capabilities.",
  features: [
    "Mid-Engine Layout",
    "8-Speed Dual-Clutch",
    "Magnetic Ride Control",
    "Bose Premium Audio"
  ],
  terms: "Must be 25+, valid driver’s license. ₱12,000 deposit required. Insurance required."
},DodgeHellcat: {
  name: "Dodge Hellcat",
  year: "2023",
  engine: "6.2L Petrol",
  speed: "3.6 S",
  power: "717 HP",
  topSpeed: "327 KM/h",
  torque: "881 NM",
  price: "$95,000",
  rentPerDay: 9500,
  image: "/ITHCI ASSETS/DODGE HELLCAT.png",
  description: "An American muscle legend packed with raw power, supercharged performance, and aggressive styling.",
  features: [
    "Supercharged V8",
    "Launch Control",
    "Performance Suspension",
    "Touchscreen Infotainment"
  ],
  terms: "Must be 25+, valid driver’s license. ₱15,000 deposit required. Insurance required."
},FordBronco: {
  name: "Ford Bronco",
  year: "2023",
  engine: "2.3L Petrol",
  speed: "7.0 S",
  power: "300 HP",
  topSpeed: "161 KM/h",
  torque: "441 NM",
  price: "$40,000",
  rentPerDay: 4000,
  image: "/ITHCI ASSETS/FORD BRONCO.png",
  description: "A rugged off-road SUV with modern tech and retro styling. Built to take on tough terrain with ease.",
  features: [
    "4x4 Capability",
    "Terrain Management System",
    "Removable Doors and Roof",
    "Apple CarPlay/Android Auto"
  ],
  terms: "Must be 23+, valid driver’s license. ₱5,000 deposit required. Off-road insurance optional."
},LamborghiniHuracan: {
  name: "Lamborghini Huracan",
  year: "2023",
  engine: "5.2L Petrol",
  speed: "2.9 S",
  power: "631 HP",
  topSpeed: "325 KM/h",
  torque: "600 NM",
  price: "$250,000",
  rentPerDay: 25000,
  image: "/ITHCI ASSETS/LAMBORGHINI-HURACAN.png",
  description: "An Italian supercar that defines luxury and performance with aggressive styling and blistering speed.",
  features: [
    "All-Wheel Drive",
    "Dual-Clutch Transmission",
    "Adaptive Suspension",
    "Premium Leather Interior"
  ],
  terms: "Must be 25+, valid driver’s license. ₱20,000 deposit required. Full insurance required."
},LamborghiniUrus: {
  name: "Lamborghini Urus",
  year: "2023",
  engine: "4.0L Petrol",
  speed: "2.3 S",
  power: "657 HP",
  topSpeed: "305 KM/h",
  torque: "850 NM",
  price: "$220,000",
  rentPerDay: 22000,
  image: "/ITHCI ASSETS/LAMBORGHINI-URUS.png",
  description: "A luxury SUV that combines Lamborghini's signature performance with the versatility of an off-road vehicle.",
  features: [
    "All-Wheel Drive",
    "8-Speed Automatic",
    "Panoramic Sunroof",
    "Adaptive Cruise Control"
  ],
  terms: "Must be 25+, valid driver’s license. ₱25,000 deposit required. Full insurance required."
},ToyotaLandCruiser: {
  name: "Toyota Land Cruiser",
  year: "2023",
  engine: "3.3L Diesel",
  speed: "7.0 S",
  power: "304 HP",
  topSpeed: "200 KM/h",
  torque: "700 NM",
  price: "$80,000",
  rentPerDay: 8000,
  image: "/ITHCI ASSETS/LAND CRUISER.png",
  description: "A powerful and rugged off-road SUV built to tackle the toughest terrains, combining luxury with capability.",
  features: [
    "Four-Wheel Drive",
    "Automatic Transmission",
    "LED Headlights",
    "Adaptive Cruise Control"
  ],
  terms: "Must be 25+, valid driver’s license. ₱10,000 deposit required. Full insurance required."
},LexusLX600: {
  name: "Lexus LX600",
  year: "2023",
  engine: "3.5L Petrol",
  speed: "6.9 S",
  power: "409 HP",
  topSpeed: "210 KM/h",
  torque: "650 NM",
  price: "$95,000",
  rentPerDay: 9500,
  image: "/ITHCI ASSETS/LEXUS LX600.png",
  description: "Luxury meets performance with the Lexus LX600, a premium SUV designed for both urban roads and off-road adventures.",
  features: [
    "Adaptive Suspension",
    "Premium Leather Interior",
    "Mark Levinson Audio System",
    "Quad-zone Climate Control"
  ],
  terms: "Must be 25+, valid driver’s license. ₱15,000 deposit required. Full insurance required."
},MazdaMX5: {
  name: "Mazda MX5",
  year: "2023",
  engine: "2.0L Petrol",
  speed: "5.7 S",
  power: "181 HP",
  topSpeed: "220 KM/h",
  torque: "205 NM",
  price: "$32,000",
  rentPerDay: 3200,
  image: "/ITHCI ASSETS/MAZDA MX-5.png",
  description: "The Mazda MX5 is a fun, lightweight roadster that combines sporty handling and a timeless design.",
  features: [
    "Rear-wheel Drive",
    "Leather Upholstery",
    "7-inch Infotainment Screen",
    "Bluetooth Connectivity"
  ],
  terms: "Must be 25+, valid driver’s license. ₱10,000 deposit required. Full insurance required."
},McLaren720sSpider: {
  name: "McLaren 720S Spider",
  year: "2023",
  engine: "4.0L Petrol",
  speed: "2.9 S",
  power: "710 HP",
  topSpeed: "341 KM/h",
  torque: "770 NM",
  price: "$300,000",
  rentPerDay: 30000,
  image: "/ITHCI ASSETS/MCLAREN-720S-SPIDER.png",
  description: "The McLaren 720S Spider is a high-performance supercar offering breathtaking speed, precision handling, and stunning looks.",
  features: [
    "Convertible Roof",
    "Carbon Fiber Elements",
    "Premium Sound System",
    "Advanced Driver Assistance"
  ],
  terms: "Must be 30+, valid driver’s license. ₱20,000 deposit required. Full insurance required."
},MercedesG63: {
  name: "Mercedes G63",
  year: "2023",
  engine: "4.0L Petrol",
  speed: "4.5 S",
  power: "577 HP",
  topSpeed: "240 KM/h",
  torque: "850 NM",
  price: "$180,000",
  rentPerDay: 18000,
  image: "/ITHCI ASSETS/MERCEDEZ-BENZ-Z-G63.png",
  description: "The Mercedes G63 is a luxury SUV that combines rugged performance with high-end sophistication, delivering exceptional power and comfort.",
  features: [
    "Luxury Leather Interior",
    "Advanced Driver Assistance Systems",
    "Off-road Capabilities",
    "Premium Audio System"
  ],
  terms: "Must be 30+, valid driver’s license. ₱20,000 deposit required. Full insurance required."
},MitsubishiLancerGT: {
  name: "Mitsubishi Lancer GT",
  year: "2022",
  engine: "2.4L Petrol",
  speed: "7.5 S",
  power: "168 HP",
  topSpeed: "205 KM/h",
  torque: "226 NM",
  price: "$25,000",
  rentPerDay: 2500,
  image: "/ITHCI ASSETS/MITSUBISHI LANCER GT.png",
  description: "The Mitsubishi Lancer GT is a compact sedan that delivers sporty performance, reliability, and fuel efficiency, making it a great choice for daily driving.",
  features: [
    "Sporty Performance",
    "Advanced Safety Features",
    "Fuel Efficient",
    "Stylish Design"
  ],
  terms: "Must be 25+, valid driver’s license. ₱10,000 deposit required. Full insurance required."
},NissanGTRR35: {
  name: "Nissan GTR R35",
  year: "2023",
  engine: "3.8L Petrol",
  speed: "2.9 S",
  power: "600 HP",
  topSpeed: "315 KM/h",
  torque: "652 NM",
  price: "$120,000",
  rentPerDay: 12000,
  image: "/ITHCI ASSETS/NISSAN GTR-33.png",
  description: "The Nissan GTR R35 is a legendary high-performance sports car designed for thrill-seekers. With its turbocharged engine and precision handling, it's built for speed.",
  features: [
    "All-Wheel Drive",
    "Advanced Performance",
    "Turbocharged Engine",
    "Iconic Design"
  ],
  terms: "Must be 25+, valid driver’s license. ₱15,000 deposit required. Full insurance required."
},SubaruSTI: {
  name: "Subaru STI",
  year: "2021",
  engine: "2.5L Petrol",
  speed: "4.9 S",
  power: "310 HP",
  topSpeed: "250 KM/h",
  torque: "393 NM",
  price: "$40,000",
  rentPerDay: 4000,
  image: "/ITHCI ASSETS/SUBARU STI.png",
  description: "The Subaru STI is built for driving enthusiasts, offering all-wheel drive performance and aggressive styling. It’s a true rally-inspired car ready for any road.",
  features: [
    "All-Wheel Drive",
    "Sporty Handling",
    "Turbocharged Engine",
    "Rally-Inspired Design"
  ],
  terms: "Must be 25+, valid driver’s license. ₱10,000 deposit required. Full insurance required."
},SuzukiGMini: {
  name: "Suzuki G Mini",
  year: "2023",
  engine: "1.5L Petrol",
  speed: "12.5 S",
  power: "101 HP",
  topSpeed: "145 KM/h",
  torque: "130 NM",
  price: "$15,000",
  rentPerDay: 1500,
  image: "/ITHCI ASSETS/SUZUKI-G-MINI.png",
  description: "The Suzuki G Mini is a compact, fuel-efficient car perfect for city driving. With its small size and easy maneuverability, it offers a simple and practical driving experience.",
  features: [
    "Compact and Fuel-Efficient",
    "Easy to Park",
    "Affordable",
    "City-Friendly Design"
  ],
  terms: "Must be 21+, valid driver’s license. ₱5,000 deposit required. Full insurance required."
}
};

// Show car info
const carInfo = document.getElementById("car-info");
const car = carList[carKey];

// Get car name from URL

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Initialize time
  updateTime();
  setInterval(updateTime, 1000);

  // Load car data if available
  const car = carList[carKey];
  if (car) {
    loadCarData(car);
    setupEventListeners(car);
  } else {
    document.getElementById("car-info").innerHTML = "<p>Car not found.</p>";
  }
});

// Load car data into the page
function loadCarData(car) {
  document.title = `Rent ${car.name} | Hyper Rents`;
  
  // Update the page content
  document.querySelector('.car-display img').src = car.image;
  document.querySelector('.car-display img').alt = car.name;
  document.querySelector('.car-title').textContent = car.name;
  document.querySelector('.car-year').textContent = `${car.year} Model`;
  
  // Update specs
  document.querySelector('.specs-grid').innerHTML = `
    <div class="spec-item">
      <div class="spec-label">Engine</div>
      <div class="spec-value">${car.engine}</div>
    </div>
    <div class="spec-item">
      <div class="spec-label">0-100 km/h</div>
      <div class="spec-value">${car.speed}</div>
    </div>
    <div class="spec-item">
      <div class="spec-label">Power</div>
      <div class="spec-value">${car.power}</div>
    </div>
    <div class="spec-item">
      <div class="spec-label">Top Speed</div>
      <div class="spec-value">${car.topSpeed}</div>
    </div>
  `;
  
  // Update description and features
  document.querySelector('.description p').textContent = car.description;
  document.querySelector('.features-grid').innerHTML = car.features.map(f => 
    `<div class="feature-item">${f}</div>`
  ).join('');
  
  // Update rental info
  document.getElementById('estimated-total').textContent = `₱${car.rentPerDay}`;
  document.getElementById('total-amount').textContent = `₱${car.rentPerDay}`;
}

// Setup event listeners
function setupEventListeners(car) {
  // Dynamic price calculation
  document.getElementById('days').addEventListener('input', function() {
    const days = parseInt(this.value) || 1;
    const estimatedTotal = days * car.rentPerDay;
    
    document.getElementById('estimated-total').textContent = `₱${estimatedTotal}`;
    document.getElementById('total-amount').textContent = `₱${estimatedTotal}`;
  });

  // Single rent confirmation handler
  document.getElementById("confirm-rent").addEventListener("click", function() {
    const days = parseInt(document.getElementById("days").value);
    if (!days || days < 1) {
      alert("Please enter a valid number of days.");
      return;
    }

    const totalCost = days * car.rentPerDay;
    const rented = {
      name: car.name,
      days: days,
      total: totalCost,
      timestamp: new Date().toISOString(),
      image: car.image
    };

    // Save to user data
    const userData = JSON.parse(localStorage.getItem("userData")) || {};
    if (!userData.rentals) userData.rentals = [];
    userData.rentals.push(rented);
    localStorage.setItem("userData", JSON.stringify(userData));

    alert(`Successfully rented ${car.name} for ${days} day(s).\nTotal: ₱${totalCost}`);
    window.location.href = "profile.html";
  });
}

// Time update function
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
  // Redirect to index.html for section navigation
  if (sectionId === 'home-section' || sectionId === 'vehicles-section') {
    window.location.href = `index.html#${sectionId}`;
  } else {
    window.location.href = `index.html`;
  }
}
