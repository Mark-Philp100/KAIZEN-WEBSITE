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

  var comingSoonTimer;

  function createComingSoonPopover() {
    var popover = document.getElementById("kaizen-invitations-coming-soon");
    if (popover) return popover;

    popover = document.createElement("div");
    popover.id = "kaizen-invitations-coming-soon";
    popover.className = "coming-soon-popover";
    popover.setAttribute("role", "status");
    popover.setAttribute("aria-live", "polite");
    popover.setAttribute("aria-atomic", "true");
    popover.setAttribute("aria-hidden", "true");

    var card = document.createElement("div");
    card.className = "coming-soon-card";

    var confetti = document.createElement("div");
    confetti.className = "coming-soon-confetti";
    confetti.setAttribute("aria-hidden", "true");

    var label = document.createElement("span");
    label.textContent = "COMING SOON";

    var giftIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    giftIcon.setAttribute("class", "coming-soon-gift-icon");
    giftIcon.setAttribute("viewBox", "0 0 24 24");
    giftIcon.setAttribute("fill", "none");
    giftIcon.setAttribute("stroke", "currentColor");
    giftIcon.setAttribute("stroke-width", "1.8");
    giftIcon.setAttribute("stroke-linecap", "round");
    giftIcon.setAttribute("stroke-linejoin", "round");
    giftIcon.setAttribute("aria-hidden", "true");
    giftIcon.innerHTML = '<rect x="3" y="8" width="18" height="4" rx="1"></rect><path d="M12 8v13M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7"></path><path d="M7.5 8A2.5 2.5 0 1 1 10 5.5L12 8H7.5ZM16.5 8A2.5 2.5 0 1 0 14 5.5L12 8h4.5Z"></path>';

    card.appendChild(confetti);
    card.appendChild(giftIcon);
    card.appendChild(label);
    popover.appendChild(card);
    document.body.appendChild(popover);
    return popover;
  }

  function fillConfetti(popover) {
    var confetti = popover.querySelector(".coming-soon-confetti");
    confetti.replaceChildren();

    for (var index = 0; index < 28; index += 1) {
      var angle = (Math.PI * 2 * index) / 28;
      var distance = 82 + (index % 5) * 9;
      var piece = document.createElement("span");
      piece.className = "coming-soon-confetti-piece " + (index % 2 ? "is-black" : "is-gold");
      piece.style.setProperty("--x", Math.cos(angle) * distance + "px");
      piece.style.setProperty("--y", Math.sin(angle) * distance * 0.72 + "px");
      piece.style.setProperty("--rotation", 180 + index * 37 + "deg");
      piece.style.setProperty("--delay", (index % 7) * 24 + "ms");
      confetti.appendChild(piece);
    }
  }

  function showComingSoon() {
    var popover = createComingSoonPopover();
    window.clearTimeout(comingSoonTimer);
    popover.classList.remove("is-visible");
    fillConfetti(popover);

    window.requestAnimationFrame(function () {
      window.requestAnimationFrame(function () {
        popover.classList.add("is-visible");
        popover.setAttribute("aria-hidden", "false");
      });
    });

    comingSoonTimer = window.setTimeout(function () {
      popover.classList.remove("is-visible");
      popover.setAttribute("aria-hidden", "true");
    }, 2200);
  }

  document.querySelectorAll('a.project-link[href*="kaizen-invitations"]').forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      var menu = link.closest(".projects-menu");
      if (menu) closeMenu(menu);
      showComingSoon();
    });
  });
})();
