function loadContent(url) {
  // fetch the content for the given URL and update the page
  fetch(url)
    .then((response) => response.text())
    .then((html) => {
      const contentDiv = document.getElementById("bookContent");
      contentDiv.innerHTML = html;
    });
}

function handleNavigation() {
  const path = window.location.pathname;
  console.log(path);
  loadContent(path);
}

// listen for changes to the URL
window.onpopstate = handleNavigation;

// load the initial content based on the current URL
handleNavigation();
