const elDarkModeToggle = document.querySelector(".dark-mode-toggle");
const elSiteHeader = document.querySelector(".site-header");
const elFlagCardsItem = document.querySelector(".flag-cards-item");
const elFlagcardsInfo = document.querySelector(".flag-cards-info");
const elRegionPicker = document.querySelector(".region-picker");
const elSiteSearch = document.querySelector(".site-search");


elDarkModeToggle.addEventListener("click", function()
{
  document.body.classList.toggle("dark-mode");
  elSiteHeader.classList.toggle("site-header-dark");
  elFlagCardsItem.classList.toggle("flag-cards-item-dark");
  elFlagcardsInfo.classList.toggle("flag-cards-info-dark");
  elRegionPicker.classList.toggle("region-picker-dark");
  elSiteSearch.classList.toggle("site-search-dark");
  elDarkModeToggle.classList.toggle("dark-mode-toggle-dark");
})