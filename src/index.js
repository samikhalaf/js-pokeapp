const api_base_url = "http://pokeapi.co/api/v2/";

window.onload = function () {
  fetch(`${api_base_url}pokemon`)
    .then((res) => {
      data = res.json();
      console.log(data);
      return data;
    })
    .catch((err) => {
      return console.log(err, "Follón");
    });
};
