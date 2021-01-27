export default () => {
  function aboutContent() {
    return `
    <img
      src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c44ee19d-57cb-4fcb-adce-011ffb002fef/ddlbym1-a5e59044-03c3-4a01-bcfa-3f6e757a1c20.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvYzQ0ZWUxOWQtNTdjYi00ZmNiLWFkY2UtMDExZmZiMDAyZmVmXC9kZGxieW0xLWE1ZTU5MDQ0LTAzYzMtNGEwMS1iY2ZhLTNmNmU3NTdhMWMyMC5naWYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.XSSAPWdpABAzVq2bjOkD2MnYUDSUTGq-OWs__tNRsm0"
      alt="pikachu"
    />

    <h3>Introduction</h3>
    <p>
      Hi there! I'm Sami Khalaf, and I've developed this app with plain HTML +
      CSS + Javascript ES6.
    </p>
    <p>
      This is mainly an exercise for me to polish my skills as a front-end
      developer, so I hope you check this out and enjoy it as much as I did
      programming it.
    </p>

    <h3>Key features</h3>

    <ul>
      <li>
        Plain JavaScript ES6 programming, no frameworks and no crazy libraries
        💪🏿.
      </li>
      <li>Basic routing system with native ES6 methods, split in modules</li>
      <li>
        Web Responsive design, with SCSS as main language, compiled into CSS.
      </li>
      <li>Usage of BEM methodology for organising styles.</li>
      <li>
        Data consumed from the http://pokeapi.co/, as it's a great RESTful API
        with tons of features and really well managed data.
      </li>
      <li>
        Therefore, the app deals constantly with async code and multiple threads
        of execution.
      </li>
    </ul>

    <h3>Cool new features for the future</h3>
    <ol>
      <li>Dark theme toggle button? That would be nice.</li>
      <li>
        Filter for the Pokémon main list, with types: fire, water, electric,
        etc.
      </li>
    </ol>`;
  }

  const views = aboutContent();

  const divElement = document.createElement("div");
  divElement.innerHTML = views;

  return divElement;
};
