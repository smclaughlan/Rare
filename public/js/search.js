import { handleErrors, generateArticleHtml } from "./utils.js";

document.addEventListener("DOMContentLoaded", async (e) => {
  const articlesSearchContainer = document.querySelector(".articles-search-container");
  const usersSearchContainer = document.querySelector(".users-search-container");
  const searchButton = document.querySelector(".site-button");
  const searchBox = document.querySelector(".search-box");

  searchButton.addEventListener("click", async (e) => {
    const searchTerm = searchBox.value;
    console.log(searchTerm);
    try {
      const res = await fetch(`http://localhost:8080/story/${searchTerm}`, { headers: { Authorization: `Bearer ${localStorage.getItem("RARE_ACCESS_TOKEN")}` } });
      const data = await res.json();
      const { stories } = data;
      console.log(stories);
      let articlesHTML = `<div class="heading-text text-style1">Found stories</div>` + generateArticleHtml(stories);
      articlesSearchContainer.innerHTML = articlesHTML;
    } catch (e) {
      handleErrors(e);
    }

  });


});
