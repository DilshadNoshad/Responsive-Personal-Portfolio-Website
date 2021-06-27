//hamburger nav
  var open = document.getElementById('hamburger');
  var changeIcon = true;

  open.addEventListener("click", function () {

    var overlay = document.querySelector('.overlay');
    var nav = document.querySelector('nav');
    var icon = document.querySelector('.menu-toggle i');

    overlay.classList.toggle("menu-open");
    nav.classList.toggle("menu-open");

    if (changeIcon) {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-times");

      changeIcon = false;
    }
    else {
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
      changeIcon = true;
    }
  });

//ripple button
  const rippleButtons = document.querySelectorAll(".ripple-button");

  function makeRipple(event) {
    const { currentTarget } = event;

    const rippleEffect = document.createElement("span"); rippleEffect.classList.add("ripple");

    const diameter = Math.max(currentTarget.clientWidth, currentTarget.clientHeight);
    const radius = diameter / 2;

    rippleEffect.style.width = rippleEffect.style.height = `${diameter}px`;
    rippleEffect.style.left = `${event.clientX - currentTarget.offsetLeft - radius}px`;
    rippleEffect.style.top = `${event.clientY - currentTarget.offsetTop - radius}px`;
    currentTarget.appendChild(rippleEffect);
  }

  rippleButtons.forEach(rippleButton => rippleButton.addEventListener("click", makeRipple));

// typewriter script 

  const typedTextSpan = document.querySelector(".typed-text");
  const cursorSpan = document.querySelector(".cursor");

  const textArray = ["I'm Dilshad Noshad"];
  const typingDelay = 200;
  const erasingDelay = 100;
  const newTextDelay = 2000; // Delay between current and next text
  let textArrayIndex = 0;
  let charIndex = 0;

  function type() {
    if (charIndex < textArray[textArrayIndex].length) {
      if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
      typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingDelay);
    }
    else {
      cursorSpan.classList.remove("typing");
      setTimeout(erase, newTextDelay);
    }
  }

  function erase() {
    if (charIndex > 0) {
      if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
      typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, erasingDelay);
    }
    else {
      cursorSpan.classList.remove("typing");
      textArrayIndex++;
      if (textArrayIndex >= textArray.length) textArrayIndex = 0;
      setTimeout(type, typingDelay + 1100);
    }
  }

  document.addEventListener("DOMContentLoaded", function () { // On DOM Load initiate the effect
    if (textArray.length) setTimeout(type, newTextDelay + 250);
  });

  //preloader
    var loader = document.getElementById("preloader");
    window.addEventListener("load", function(){
      loader.style.display = "none";
    })
  