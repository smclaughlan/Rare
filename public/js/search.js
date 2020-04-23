import { handleErrors, generateArticleHtml, generateUserHtml } from "./utils.js";

document.addEventListener("DOMContentLoaded", async (e) => {
  const articlesSearchContainer = document.querySelector(".articles-search-container");
  const usersSearchContainer = document.querySelector(".users-search-container");
  const searchButton = document.querySelector(".site-button");
  const searchBox = document.querySelector(".search-box");
  const mainSearchContainer = document.querySelector(".main-search-container");

  searchButton.addEventListener("click", async (e) => {
    const searchTerm = searchBox.value;
    console.log(searchTerm);

    try {
      mainSearchContainer.classList.remove("hidden");
      const res = await fetch(`http://localhost:8080/story/${searchTerm}`, { headers: { Authorization: `Bearer ${localStorage.getItem("RARE_ACCESS_TOKEN")}` } });
      const data = await res.json();
      const { stories, readTimes } = data;
      console.log(stories);
      // console.log(readTimes);
      let articlesHTML = `<div class="heading-text text-style1">Found stories</div>` + generateArticleHtml(stories, readTimes);
      articlesSearchContainer.innerHTML = articlesHTML;
    } catch (e) {
      handleErrors(e);
    }


    //get users by search term
    try {
      const res = await fetch(`http://localhost:8080/user/${searchTerm}`, { headers: { Authorization: `Bearer ${localStorage.getItem("RARE_ACCESS_TOKEN")}` } });
      const data = await res.json();
      const { users } = data;
      usersSearchContainer.innerHTML = `<div class="heading-text text-style1">Found users</div>` + generateUserHtml(users);
    } catch (e) {
      handleErrors(e);
    }

  });


});
