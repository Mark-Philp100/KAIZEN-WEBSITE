(function () {
  function closeMenu(menu) {
    var trigger = menu.querySelector(".projects-trigger");
    menu.classList.remove("is-open");
    if (trigger) trigger.setAttribute("aria-expanded", "false");
  }

  document.querySelectorAll(".projects-menu").forEach(function (menu) {
    var trigger = menu.querySelector(".projects-trigger");
    if (!trigger) return;

    trigger.addEventListener("click", function (event) {
      event.stopPropagation();
      var willOpen = !menu.classList.contains("is-open");

      document.querySelectorAll(".projects-menu.is-open").forEach(function (openMenu) {
        if (openMenu !== menu) closeMenu(openMenu);
      });

      menu.classList.toggle("is-open", willOpen);
      trigger.setAttribute("aria-expanded", String(willOpen));
    });

    menu.addEventListener("focusout", function (event) {
      if (!menu.contains(event.relatedTarget)) closeMenu(menu);
    });
  });

  document.addEventListener("click", function (event) {
    document.querySelectorAll(".projects-menu.is-open").forEach(function (menu) {
      if (!menu.contains(event.target)) closeMenu(menu);
    });
  });

  document.addEventListener("keydown", function (event) {
    if (event.key !== "Escape") return;
    document.querySelectorAll(".projects-menu.is-open").forEach(function (menu) {
      var trigger = menu.querySelector(".projects-trigger");
      closeMenu(menu);
      if (trigger) trigger.focus();
    });
  });

  var mobileMenuButton = document.getElementById("menuButton");
  var siteHeader = document.getElementById("siteHeader");
  if (mobileMenuButton && siteHeader) {
    mobileMenuButton.addEventListener("click", function () {
      if (!siteHeader.classList.contains("menu-open")) {
        document.querySelectorAll(".projects-menu.is-open").forEach(closeMenu);
      }
    });
  }
})();
