$(document).ready(function () {
  $(".navbar-toggler").on("click", function () {
    // Toggle the "show" class on the navbar-nav element
    $(".navbar-nav").toggleClass("show");
  });
  // Add a click event listener to the document
  $(document).on("click", function (event) {
    // Check if the clicked element is not part of the navbar
    if (!$(event.target).closest(".navbar").length) {
      // Remove the "show" class from the navbar-nav element
      $(".navbar-nav").removeClass("show");
    }
  });
  //navbar ainmation
  $(window).scroll(function () {
    var appScroll = $(document).scrollTop();
    if (appScroll >= 1) {
      $("header").addClass("headerAnimate");
    } else {
      $("header").removeClass("headerAnimate");
    }
  });
  ////////////////////////////// ///////////////////////
  // Text Animation
  ////////////////////////////// ///////////////////////
  // lines
  const animate_lines = document.querySelectorAll(".animate_lines");
  animate_lines.forEach((areveal) => {
    var duration_value = 0.75;
    var onscroll_value = 1;
    var stagger_value = 0.08;
    var data_delay = 0.5;
    if (areveal.getAttribute("data-duration")) {
      duration_value = areveal.getAttribute("data-duration");
    }
    if (areveal.getAttribute("data-on-scroll")) {
      onscroll_value = areveal.getAttribute("data-on-scroll");
    }
    if (areveal.getAttribute("data-stagger")) {
      stagger_value = areveal.getAttribute("data-stagger");
    }
    if (areveal.getAttribute("data-delay")) {
      data_delay = areveal.getAttribute("data-delay");
    }
    areveal.split = new SplitText(areveal, {
      // type: "lines,words,chars",
      type: "lines,words",
      linesClass: "anim-reveal-line",
    });
    if (onscroll_value == 1) {
      areveal.anim = gsap.from(areveal.split.lines, {
        scrollTrigger: {
          trigger: areveal,
          start: "top 95%",
        },
        duration: duration_value,
        delay: data_delay,
        ease: "circ.out",
        y: 40,
        stagger: stagger_value,
        opacity: 0,
      });
    } else {
      areveal.anim = gsap.from(areveal.split.lines, {
        duration: duration_value,
        delay: data_delay,
        ease: "circ.out",
        y: 40,
        stagger: stagger_value,
        opacity: 0,
      });
    }
  });
  // words
  const animate_words = document.querySelectorAll(".animate_words");
  animate_words.forEach((areveal) => {
    var duration_value = 0.75;
    var onscroll_value = 1;
    var stagger_value = 0.02;
    var data_delay = 0.5;
    if (areveal.getAttribute("data-duration")) {
      duration_value = areveal.getAttribute("data-duration");
    }
    if (areveal.getAttribute("data-on-scroll")) {
      onscroll_value = areveal.getAttribute("data-on-scroll");
    }
    if (areveal.getAttribute("data-stagger")) {
      stagger_value = areveal.getAttribute("data-stagger");
    }
    if (areveal.getAttribute("data-delay")) {
      data_delay = areveal.getAttribute("data-delay");
    }
    areveal.split = new SplitText(areveal, {
      // type: "lines,words,chars",
      type: "lines,words",
      linesClass: "anim-reveal-line",
    });
    if (onscroll_value == 1) {
      areveal.anim = gsap.from(areveal.split.words, {
        scrollTrigger: {
          trigger: areveal,
          start: "top 95%",
        },
        duration: duration_value,
        delay: data_delay,
        ease: "circ.out",
        y: 40,
        stagger: stagger_value,
        opacity: 0,
      });
    } else {
      areveal.anim = gsap.from(areveal.split.words, {
        duration: duration_value,
        delay: data_delay,
        ease: "circ.out",
        y: 40,
        stagger: stagger_value,
        opacity: 0,
      });
    }
  });
  // chars
  const animate_chars = document.querySelectorAll(".animate_chars");
  animate_chars.forEach((areveal) => {
    var duration_value = 0.75;
    var onscroll_value = 1;
    var stagger_value = 0.003;
    var data_delay = 0.5;
    if (areveal.getAttribute("data-duration")) {
      duration_value = areveal.getAttribute("data-duration");
    }
    if (areveal.getAttribute("data-on-scroll")) {
      onscroll_value = areveal.getAttribute("data-on-scroll");
    }
    if (areveal.getAttribute("data-stagger")) {
      stagger_value = areveal.getAttribute("data-stagger");
    }
    if (areveal.getAttribute("data-delay")) {
      data_delay = areveal.getAttribute("data-delay");
    }
    areveal.split = new SplitText(areveal, {
      type: "lines,words,chars",
      linesClass: "anim-reveal-line",
    });
    if (onscroll_value == 1) {
      areveal.anim = gsap.from(areveal.split.chars, {
        scrollTrigger: {
          trigger: areveal,
          start: "top 95%",
        },
        duration: duration_value,
        delay: data_delay,
        ease: "circ.out",
        y: 40,
        stagger: stagger_value,
        opacity: 0,
      });
    } else {
      areveal.anim = gsap.from(areveal.split.chars, {
        duration: duration_value,
        delay: data_delay,
        ease: "circ.out",
        y: 40,
        stagger: stagger_value,
        opacity: 0,
      });
    }
  });
  // Text Invert With Scroll
  const split = new SplitText(".text_invert", { type: "lines" });

  split.lines.forEach((target) => {
    gsap.to(target, {
      backgroundPositionX: 0,
      ease: "none",
      scrollTrigger: {
        trigger: target,
        scrub: 1,
        start: "top 70%",
        end: "bottom center",
      },
    });
  });
  // scroll
  const sections = document.querySelectorAll(".active-nav-class");
  $(window).on("scroll", function () {
    let current = "";
    const scrollPosition = $(window).scrollTop();
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (scrollPosition >= sectionTop - 300) {
        current = section.getAttribute("id") + "-nav";
      }
    });
    if (current == "") {
      current = "home-nav";
    }
    $(".navbar-nav .navLink.active").removeClass("active");
    $("#" + current).addClass("active");
  });
  $(".navbar-nav .navLink").on("click", function () {
    $(".navbar-nav .navLink.active").removeClass("active");
    $(this).addClass("active");
  });
  const url = window.location.href;
  $(".navbar-nav .navLink").each(function () {
    if (url.includes($(this).attr("href"))) {
      $(this).addClass("active");
    } else {
      $(this).removeClass("active");
    }
  });
  // zoom
  document.addEventListener("keydown", function (e) {
    if (e.ctrlKey && (e.key === "-" || e.key === "+")) {
      e.preventDefault();
    }
  });
  document.addEventListener("wheel", function (e) {
    if (e.ctrlKey) {
      e.preventDefault();
    }
  });
  //clients Slider
  var clients = new Swiper(".clients .swiper", {
    // centeredSlides: true,
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 12,
    speed: 1000,
    pagination: {
      el: ".partnersPagination",
      clickable: true,
    },
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 4,
      },
      991: {
        slidesPerView: 5,
      },
      1400: {
        slidesPerView: 6,
      },
    },
  });
  // ourWork
  var ourWork = new Swiper(".ourWork .swiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    loop: true,
    spaceBetween: 12,
    speed: 1000,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  });
  //clients Slider
  var clients = new Swiper(".clients .swiper", {
    // centeredSlides: true,
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 12,
    speed: 1000,
    pagination: {
      el: ".partnersPagination",
      clickable: true,
    },
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 4,
      },
      991: {
        slidesPerView: 5,
      },
      1400: {
        slidesPerView: 6,
      },
    },
  });
  $(".ourWork .swiper").hover(
    function () {
      this.swiper.autoplay.stop();
    },
    function () {
      this.swiper.autoplay.start();
    }
  );
  $(".cardBack .limet").each(function () {
    var text = $(this).text();
    if (text.length > 200) {
      var truncatedText =
        $.trim(text).substring(0, 200).split(" ").slice(0, -1).join(" ") +
        "...";
      $(this).text(truncatedText);
    }
  });
});
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
$(document).ready(function () {
  //spinner
  $(".spinerLoader").delay(500).fadeOut(300);
  //aos Delay
  $("section").each(function () {
    const sectionDivs = $(this).find("[data-aos]");
    sectionDivs.each(function (index) {
      // Check if data-aos-delay is not already set
      if (!$(this).attr("data-aos-delay")) {
        $(this).attr("data-aos-delay", (index + 1) * 100);
      }
    });
  });
  // aos
  AOS.init({
    offset: 20,
    delay: 50,
    duration: 750,
    once: true,
  });
  // lozad
  const observer = lozad(".lazy", {
    loaded: function (el) {
      el.parentNode.classList.add("loaded");
    },
  });
  observer.observe();
  // parallax
  var parallaxImage = document.getElementsByClassName("parallax");
  new simpleParallax(parallaxImage, {
    delay: 1,
    transition: "cubic-bezier(0,0,0,1)",
  });
  // tooltip
  const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
  );
  const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
  );
  // counter up
  const counterUp = window.counterUp.default;
  const callback = (entries) => {
    entries.forEach((entry) => {
      const el = entry.target;
      if (entry.isIntersecting && !el.classList.contains("is-visible")) {
        counterUp(el, {
          duration: 3000,
          delay: 16,
        });
        el.classList.add("is-visible");
      }
    });
  };
  const IO = new IntersectionObserver(callback, { threshold: 1 });
  const elements = document.querySelectorAll(".counterUp");
  elements.forEach((el) => IO.observe(el));
});

function highlight(el) {
  el.previousElementSibling.classList.add("h");
}
function dehighlight(el) {
  if (el.value === "") {
    el.previousElementSibling.classList.remove("h");
  }
}
