export default () => {
  const views = "<h1>404. Not found</h1>";

  const divElement = document.createElement("div");
  divElement.innerHTML = views;

  return divElement;
};
