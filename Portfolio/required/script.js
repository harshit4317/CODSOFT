document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");
  
    function changeSection() {
      let index = 0;
      sections.forEach(function(section, i) {
        if (section.getBoundingClientRect().top < window.innerHeight / 2) {
          index = i;
        }
      });
  
      sections.forEach(function(section) {
        section.classList.remove("active");
      });
  
      navLinks.forEach(function(link) {
        link.classList.remove("active");
      });
  
      sections[index].classList.add("active");
      navLinks[index].classList.add("active");
    }
  
    window.addEventListener("scroll", changeSection);
  
    const form = document.getElementById("contact-form");
  
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;
      console.log(name, email, message);
      form.reset();
      alert("Message sent successfully!");
    });
  });
  