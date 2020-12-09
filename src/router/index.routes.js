import Home from "../views/home.js";
import Favorites from "../views/favorites.js";
import About from "../views/about.js";
import NotFound from "../views/404.js";

let content = document.getElementById("content");

const router = (route) => {
  // This cleans the content of the page, if were not there
  // will accumulate with the user's navigation
  content.innerHTML = "";

  switch (route) {
    case "#/" || "": {
      return content.appendChild(Home());
    }
    case "#/favorites": {
      return content.appendChild(Favorites());
    }
    case "#/about": {
      return content.appendChild(About());
    }
    default: {
      return content.appendChild(NotFound());
    }
  }
};

export { router };
