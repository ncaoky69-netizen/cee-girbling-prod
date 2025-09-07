src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=66c7e4a5fff376e4c942eaaf"
type="text/javascript"
integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
crossorigin="anonymous"
src="https://cdn.prod.website-files.com/66c7e4a5fff376e4c942eaaf/js/webflow.10cc74c9f.js"
type="text/javascript"
$(
  "a.list-parent, a.menu-link-parent, a.logo-parent, a.n-p-link, a.btn-parent-s, a.img-parent-link"
).click(function (e) {
  e.preventDefault(); // prevent default anchor behavior
  var goTo = this.getAttribute("href"); // store anchor href

  setTimeout(function () {
    window.location = goTo;
  }, 1100);
});
(function (d) {
  var config = {
      kitId: "vqw1kwc",
      scriptTimeout: 1100,
      async: true,
    },
    h = d.documentElement,
    t = setTimeout(function () {
      h.className =
        h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive";
    }, config.scriptTimeout),
    tk = d.createElement("script"),
    f = false,
    s = d.getElementsByTagName("script")[0],
    a;
  h.className += " wf-loading";
  tk.src = "https://use.typekit.net/" + config.kitId + ".js";
  tk.async = true;
  tk.onload = tk.onreadystatechange = function () {
    a = this.readyState;
    if (f || (a && a != "complete" && a != "loaded")) return;
    f = true;
    clearTimeout(t);
    try {
      Typekit.load(config);
    } catch (e) {}
  };
  s.parentNode.insertBefore(tk, s);
})(document);

$(".open").on("tap", function () {
  $("body").toggleClass("no-scroll");
});

$(window).bind("pageshow", function (event) {
  if (event.originalEvent.persisted) {
    window.location.reload();
  }
});
!(function (o, c) {
  var n = c.documentElement,
    t = " w-mod-";
  (n.className += t + "js"),
    ("ontouchstart" in o ||
      (o.DocumentTouch && c instanceof DocumentTouch)) &&
      (n.className += t + "touch");
})(window, document);