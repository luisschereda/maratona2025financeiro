const searchBar = document.getElementById("searchBar");
const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", () => {
  const query = searchBar.value.toLowerCase();
  if (query.includes("imposto")) {
    window.location.href = "pages/imposto.html";
  } else if (query.includes("fgts")) {
    window.location.href = "pages/fgts.html";
  } else if (query.includes("direitos")) {
    window.location.href = "pages/direitos.html";
  } else if (query.includes("inss")) {
    window.location.href = "pages/inss.html";
  } else if (query.includes("aposentadoria")) {
    window.location.href = "pages/aposentadoria.html";
  } else if (query.includes("saque")) {
    window.location.href = "pages/saques.html";
  } else if (query.includes("banco")) {
    window.location.href = "pages/bancos.html";
  } else {
    window.location.href = "pages/outros.html";
  }
});
