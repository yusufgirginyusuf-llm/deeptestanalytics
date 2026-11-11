// Screenshots open over the whole page when clicked.
//
// Each screenshot is a plain link to its full-size image (a.shot-link), so it
// works without this script. With it, the image opens in a modal <dialog>:
// the browser keeps keyboard focus inside, Escape closes it, and focus goes
// back to the screenshot that was opened. A click outside the picture or on
// Close closes it too.
(function () {
  "use strict";
  if (typeof HTMLDialogElement !== "function") return; // old browser: the link opens the image

  var dialog, image, caption;

  function build() {
    dialog = document.createElement("dialog");
    dialog.className = "lightbox";
    dialog.setAttribute("aria-label", "Enlarged screenshot");

    var close = document.createElement("button");
    close.type = "button";
    close.className = "lightbox-close";
    close.textContent = "Close";
    close.addEventListener("click", function () { dialog.close(); });

    image = document.createElement("img");
    image.className = "lightbox-image";

    caption = document.createElement("p");
    caption.className = "lightbox-caption";

    dialog.append(close, image, caption);
    // a click on the dark area around the picture (the dialog itself) closes it
    dialog.addEventListener("click", function (event) {
      if (event.target === dialog) dialog.close();
    });
    document.body.appendChild(dialog);
  }

  document.addEventListener("click", function (event) {
    // leave new-tab / new-window clicks to the browser
    if (event.defaultPrevented || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    var link = event.target && event.target.closest ? event.target.closest("a.shot-link") : null;
    if (!link) return;
    var small = link.querySelector("img");
    var figure = link.closest("figure");
    var text = figure ? figure.querySelector("figcaption") : null;
    event.preventDefault();
    if (!dialog) build();
    image.src = link.href;
    image.alt = small ? small.alt : "";
    caption.textContent = text ? text.textContent : "";
    dialog.showModal();
  });
})();
