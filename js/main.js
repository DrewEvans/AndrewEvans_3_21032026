//trigger event when window is loaded
window.addEventListener("load", () => {
  // select class loading wrapper from html
  const loadingScreen = document.querySelector(".loading-wrapper");
  //once loaded change .loading-wrappers orginal css style with .loading-finshed style
  loadingScreen.classList.add("loading-finished");
});
