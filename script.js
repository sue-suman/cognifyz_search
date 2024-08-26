document.addEventListener("DOMContentLoaded", function () {
  let query = document.querySelector(".query");
  let searchBtn = document.querySelector(".search_btn");
  let iframe = document.querySelector(".frame");

  searchBtn.addEventListener("click", function () {
    let searchQuery = query.value;
    let url = `https://cognifyz.com/search?q=${encodeURIComponent(
      searchQuery
    )}`;
    iframe.src = url;
    iframe.style.display = "block"; // Show the iframe
  });
});
