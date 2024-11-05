document
  .getElementById("mobile-menu-toggle")
  .addEventListener("click", function () {
    const navbarList = document.getElementById("navbar-list");
    navbarList.classList.toggle("show");
  });

// Close the mobile navbar when a menu item is clicked
const navbarLinks = document.querySelectorAll("#navbar-list li a");
navbarLinks.forEach(link => {
  link.addEventListener("click", function () {
    const navbarList = document.getElementById("navbar-list");
    navbarList.classList.remove("show");
  });
});

window.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('section');
  const scrollPos = window.scrollY + window.innerHeight;
  
  sections.forEach(section => {
    if (section.offsetTop < scrollPos - 100) {
      section.classList.add('active');
    }
  });
});

// Close navbar and scroll with offset
document.querySelectorAll(".navbar ul li a").forEach(link => {
  link.addEventListener("click", function(event) {
    event.preventDefault();
    
    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    const navbarHeight = document.querySelector(".navbar").offsetHeight;

    // Scroll with offset
    window.scrollTo({
      top: targetSection.offsetTop - navbarHeight,
      behavior: "smooth"
    });

    // Close the navbar on link click
    document.getElementById("navbar-list").classList.remove("show");
  });
});
