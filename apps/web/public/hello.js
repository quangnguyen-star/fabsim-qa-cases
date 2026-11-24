// A static page (vite copies public/ into dist/, the API serves it): greets ?name= and waves at it.
(function () {
  var name = new URLSearchParams(window.location.search).get("name") || "stranger";
  document.getElementById("greeting").textContent = "Hello " + name;
  document.getElementById("wave").addEventListener("click", function () {
    var li = document.createElement("li");
    li.textContent = "Waved at " + name;
    document.getElementById("waves").appendChild(li);
  });
})();
