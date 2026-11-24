// A static page (vite copies public/ into dist/, the API serves it): greets ?name= and waves at it.
(function () {
  var name = new URLSearchParams(window.location.search).get("name") || "stranger";
  document.getElementById("greeting").textContent = "Hi " + name;
  document.getElementById("wave").addEventListener("click", function () {
    var li = document.createElement("li");
    li.textContent = "Waved to " + name;
    document.getElementById("waves").appendChild(li);
  });
})();
