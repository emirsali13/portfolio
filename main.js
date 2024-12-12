let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  navbar.classList.toggle("open-menu");
  menu.classList.toggle("move");
};

window.onscroll = () => {
  navbar.classList.remove("open-menu");
  menu.classList.remove("move");
};

// function changeBG() {
//   let element = document.body;
//   element.classList.toggle("white");
//   let navCol = document.getElementById("nav");
//   navCol.classList.toggle("navbarColChange");
// }

function clearMessage() {
  document.querySelector(".name").value = "";
  document.querySelector(".email").value = "";
  document.querySelector(".topic").value = "";
  document.querySelector(".message").value = "";
}

// Skills Swiper
var swiper = new Swiper(".skills-content", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Email Js
function validate() {
  let name = document.querySelector(".name");
  let email = document.querySelector(".email");
  let msg = document.querySelector(".message");
  let topic = document.querySelector(".topic");
  let sendBtn = document.querySelector(".send-btn");

  sendBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (
      name.value == "" ||
      email.value == "" ||
      msg.value == "" ||
      topic.value == ""
    ) {
      emptyerror();
    } else {
      sendmail(name.value, email.value, msg.value, topic.value);
      success();
    }
  });
}

validate();

function sendmail(name, email, msg, topic) {
  emailjs.send("service_u7lxqex", "template_2vml65u", {
    to_name: "Emir",
    from_name: name + ", " + " email: " + email + ", " + " topic: " + topic,
    message: msg,
  });
}

function emptyerror() {
  swal({
    title: "Oops...",
    text: "Fields cannot be empty",
    icon: "error",
    button: "OK",
  });
}

function success() {
  swal({
    title: "Message sent successfully",
    text: "Thank you for your feedback!",
    icon: "success",
    button: "OK",
  });
}

// Header Background change on scroll
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
  header.classList.toggle("header-active", window.scrollY > 150);
});

// Scroll Top
let scrollTop = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {
  scrollTop.classList.toggle("scroll-active", window.scrollY > 150);
});
