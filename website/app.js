const data = {};

const feelings = document.getElementById('feelings');

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

const getDate = () => {
    const date = new Date();
    return date.toDateString();
  }

http://api.openweathermap.org/data/2.5/weather?id=30740&appid=47685c1768bc1734f701bbf9140c7875
// Personal API Key for OpenWeatherMap API

var baseURL = 'http://api.openweathermap.org/data/2.5/weather?id=';
let apiKey = '47685c1768bc1734f701bbf9140c7875';
let addApi = '&APPID=';

// Event listener to add function to existing HTML DOM element

document.getElementById('generate').addEventListener('click', performAction);

function performAction(e){
  const newid =  document.getElementById('id').value;
  getWeather(baseURL,newid, addApi, apiKey)
  saveData();
  }

  /* Function called by event listener */

const getWeather = async (baseURL, newid, addApi, apiKey)=>{

  const res = await fetch(baseURL+newid+addApi+apiKey)
  try {
    const data = await res.json();
    console.log(data)
    return data;
  }  catch(error) {
    console.log("error", error);
  }
}

/* Function to GET Web API Data*/
const saveData = async () => {
    data.date = getDate();
    data.feelings = feelings.value;
    data.temp = await getTemp();
    updateUI();
  }

  const getTemp = async () => {
    const id = document.getElementById('id').value;
    const endpoint = baseURL + id + addApi + apiKey;
    try {
      const response = await fetch(endpoint);
      if(response.ok) {
        const jsonResponse = await response.json();
        return jsonResponse.main.temp;
      }
    } catch(error) {
      console.log(error.message);
    }
  }

/* Function to POST data */

const postData = async (url = '', data = {}) => {
    const response = await fetch('/addWeather', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type':'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data),
    });

    try {
        const newData = await response.json();
        return newData;
    } catch(error) {
        console.log('error', error);
    };
};

/*Function to update UI*/
const updateUI = async (url = '', data = {}) => {
    const request = await fetch ('/weatherData')

    try{
        const allData = await request.json();
        date.innerHTML = 'Today is ' + data.date;
        temp.innerHTML = data.temp + '&deg;C';
        content.innerHTML = 'Feelings: ' + data.feelings;

        document.getElementById("entryHolder").style.display = "block"
        document.getElementById('id').value = "";
        document.getElementById('feelings').value = "";
    } catch (error){
        console.log("error", error);
    }
}
