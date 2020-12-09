export default () => {
    const views = "<h1>Esto es la home</h1>";
  
    const divElement = document.createElement("div");
    divElement.innerHTML = views;
  
    return divElement;
  };
  