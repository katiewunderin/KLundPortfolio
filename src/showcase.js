/* showcase.js — the expanding project cards on the homepage.
   One card is open at a time. Hovering a card opens it on a desktop;
   clicking or tapping it works everywhere, and the round title bubble is
   a real button so keyboard users can open cards too. */

(function () {
  var cards = document.querySelectorAll(".showcase-card");
  if (!cards.length) return;

  var canHover = window.matchMedia("(hover: hover)").matches;

  function open(card) {
    cards.forEach(function (c) {
      var isOpen = c === card;
      c.classList.toggle("is-open", isOpen);
      c.querySelector(".card-toggle").setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  cards.forEach(function (card) {
    if (canHover) {
      card.addEventListener("mouseenter", function () {
        open(card);
      });
    }

    card.addEventListener("click", function () {
      if (!card.classList.contains("is-open")) open(card);
    });
  });
})();
