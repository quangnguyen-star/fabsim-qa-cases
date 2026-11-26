// A static page (vite copies public/ into dist/, the API serves it): echoes ?name=.
(function () {
  var name = new URLSearchParams(window.location.search).get("name") || "nobody";
  document.getElementById("echo").textContent = "Echo " + name;
})();
