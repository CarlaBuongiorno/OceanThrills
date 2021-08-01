class Fetch {
  async getCurrent(input) {
    const myKey = "34e22afccfc4b08c18eac6367d9a1721";

    // Make request to url
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}`);

    const data = await response.json();

    console.log(data);

    return data;
  }
}



// Credit: LearnWebCode -> https://www.youtube.com/watch?v=AVmGmLFcukM
// async function start(_type) {
//   const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=Port%20Louis,mauritius&units=metric&appid=34e22afccfc4b08c18eac6367d9a1721");
//   const data = await response.json();
//   console.log(data);
//   getTemp(data.object);
// }



// function getTemp(temperature) {
//   start(temperature, function (data) {
//     document.getElementById("weather").innerHTML = data;
//   });
// }