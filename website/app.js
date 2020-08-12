const data = {};

const feelings = document.getElementById('feelings');

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+1 +'.'+ d.getDate()+'.'+ d.getFullYear();

// http://api.openweathermap.org/data/2.5/weather?id=30740&appid=47685c1768bc1734f701bbf9140c7875
// Personal API Key for OpenWeatherMap API

var baseURL = 'http://api.openweathermap.org/data/2.5/weather?id=';
let apiKey = '&appid=47685c1768bc1734f701bbf9140c7875';

// Event listener to add function to existing HTML DOM element

document.getElementById("generate").addEventListener("click", generateWeather);
function generateWeather(){
  addData()
    .then(displayData);
};

const addData = async() => {
  const weather = await getApi();
  const feeling = document.getElementById("feelings").value;
  postData("/data", {date:newDate, temp:weather, feelings:feeling});
};

const displayData = async() => {
  const allD = await getData("/all");
  try {
    document.getElementById('date').innerHTML = `Date: ${allD.date}`;
    document.getElementById('temp').innerHTML = `Temperature is : ${allD.temp}&#8451;`;
    document.getElementById('content').innerHTML = `You are feeling: ${allD.feelings}`;
    } catch(error) {
      console.log('error on displayData', error);
    };
};

/* Function to GET Web API Weather Data*/
const getApi = async () => {
  const zip = document.getElementById("zip").value;
  const weatherApi = await fetch(`${baseURL}${zip}&units=metric${apiKey}`);
  try {
      const weather = await weatherApi.json();
      const temp = weather.main.temp;
      return temp;
  } catch(error) {
      console.log('error in getAPI', error);
  };
};
/* Function to GET weather Data */

const getData = async (url='')=>{
    const response = await fetch(url);
    try {
      const data = await response.json();
      return data;
    }catch(error) {
    console.log("error in getData", error);
    }
};


/* Function to POST weather data */
const postData = async ( url = '', data = {})=>{
      const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
      try {
        const newData = await response.json();
        console.log(newData);
        return newData;
      }catch(error) {
      console.log("error in postData", error);
      }
  };
