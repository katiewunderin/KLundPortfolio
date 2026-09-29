/* theme.js — light and dark toggle.
   Load this at the END of the body, with defer or not, on every page.
   The small inline script in the <head> is separate and still needed:
   it applies the saved theme before the first paint so there is no flash. */

   (function () {
    var root = document.documentElement;
    var btn = document.getElementById("themeToggle");
    var label = document.getElementById("themeLabel");
  
    if (!btn) return;
  
    function sync() {
      var isLight = root.getAttribute("data-theme") === "light";
      if (label) label.textContent = isLight ? "Dark mode" : "Light mode";
      btn.setAttribute("aria-pressed", isLight ? "true" : "false");
      btn.setAttribute("aria-label", isLight ? "Switch to dark mode" : "Switch to light mode");
    }
  
    btn.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
      root.setAttribute("data-theme", next);
      try {
        localStorage.setItem("kl-theme", next);
      } catch (e) {
        /* storage blocked in this browser: the toggle still works for this visit */
      }
      sync();
    });
  
    sync();
  })();