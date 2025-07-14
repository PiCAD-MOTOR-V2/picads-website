// Logic for toggling the active class on scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });
  
  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

//Docs download
function downloadPDF(buttonId, fileName) {
  const button = document.querySelector(buttonId);
  
  // Ensure the cursor is always a pointer
  button.style.cursor = "pointer";

  button.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default navigation

    const link = document.createElement("a");
    link.href = `/pdf/${fileName}`;
    // link.download = fileName;
    link.setAttribute("download", fileName);

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}

// Attach event listeners for each button
downloadPDF("#overviewpdf", "MotormojoOverview.pdf");
downloadPDF("#Vehiclepdf", "VehicleGuide.pdf");
downloadPDF("#Motorpdf", "MotorGuide.pdf");
downloadPDF("#OtherFeatures", "OtherFeatures.pdf");



// document.querySelectorAll('.nav-link').forEach(link => {
//     link.addEventListener('click', () => {
//     var offcanvas = document.getElementById('offcanvasNavbar');
//     // var bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
//     offcanvas.className = 'offcanvas offcanvas-end';
//     offcanvas.removeAttribute('aria-modal');
//     offcanvas.removeAttribute('role');
//     // Select the div by its id and remove it from the DOM
//     const div = document.getElementsByClassName('offcanvas-backdrop');
//     console.log(div[0]);
//     div[0].remove(); // This completely removes the div from the DOM
//     });
// });

// function disableButtonsBasedOnTime() {
//   const now = new Date();
//   const hours = now.getHours();
//   const minutes = now.getMinutes();

//   // Define time range for disabling (10:00 PM to 8:30 AM)
//   const disableStart = 9 * 60; // 10:00 PM in minutes
//   const disableEnd = 8 * 60 + 30; // 8:30 AM in minutes
//   const currentTime = hours * 60 + minutes; // Convert current time to minutes

//   const disableButtons = (currentTime >= disableStart || currentTime < disableEnd);

//   const message = "The online servers will ONLY be available from 8:30 AM to 10:00 PM daily. Please make sure that you login during these hours. Thank you!!";

//   const signinBtn = document.getElementById("signin-btn");
//   const signupBtn = document.getElementById("signup-btn");

//   signinBtn.disabled = disableButtons;
//   signupBtn.disabled = disableButtons;

//   if (disableButtons) {
//       signinBtn.setAttribute("title", message);
//       signupBtn.setAttribute("title", message);
//   } else {
//       signinBtn.removeAttribute("title");
//       signupBtn.removeAttribute("title");
//   }
// }

// // Run on page load
// disableButtonsBasedOnTime();

function disableButtonsBasedOnTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();

  // Define time range for disabling (10:00 PM to 8:30 AM)
  const disableStart = 22 * 60; // 10:00 PM in minutes
  const disableEnd = 8 * 60 + 30; // 8:30 AM in minutes
  const currentTime = hours * 60 + minutes; // Convert current time to minutes

  const disableButtons = (currentTime >= disableStart || currentTime < disableEnd);
  const message = "The online servers will ONLY be available from 8:30 AM to 10:00 PM daily. Please make sure that you login during these hours. Thank you!!";

  // Get buttons
  const signInBtn = document.getElementById("signin-btn");
  const signUpBtn = document.getElementById("signup-btn");

  // Apply disable logic
  if (disableButtons) {
      signInBtn.disabled = true;
      signUpBtn.disabled = true;
      signInBtn.title = message;
      signUpBtn.title = message;
  } else {
      signInBtn.disabled = false;
      signUpBtn.disabled = false;
      signInBtn.title = "";
      signUpBtn.title = "";
  }
}

// Run on page load
disableButtonsBasedOnTime();