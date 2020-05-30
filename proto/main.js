(function(){
    const domLoc = document.querySelectorAll(".location");
    const domTemp = document.querySelectorAll(".temp");
    const domDesc = document.querySelectorAll(".description");
    const domCoun = document.querySelectorAll(".country");
    const domData = document.querySelectorAll(".data");
    const domErrMsg = document.querySelectorAll(".errMsg");
    const zipInput = document.getElementById("zipInput");

    let location = '';
    let country = '';
    let description = '';
    let temp = 0;
    let result;

    function fetchWeather(zip){
        const appid = "8bd333d4762ef5d6f7d19be0325fc401";
        if (zip == undefined) {
            alert("Provide proper zip code!");
        }else if(zip.length !== 5){
            alert("Provide proper zip code!");
        }
        else{
            return fetch(
                `https://api.oPenweathermap.org/data/2.5/weather?zip=${zip},us&appid=${appid}`
                )
                .then(response => response.json())
                .catch(function (err) {
                    // There was an error
                    alert("ERROR!");
                    console.warn('Something went wrong.', err);
                });
        }
    };

    function getData(){
        // console.log(zipInput.value);
        return Promise.all([fetchWeather(zipInput.value)]);
    }

    document.getElementById("submitBtn").addEventListener("click", function(){
        getData()
        .then(([data]) => {
            console.log(data);
            result = data;
            if(data.cod === 200){
                location = data.name;
                country = data.sys.country;
                description = data.weather[0].description.toUpperCase();
                temp = (((data.main.temp - 273.15) * 9) / 5 + 32).toFixed();
            }else{
                
                
            }
            
        })
       .then(e =>{
        console.log({description, location, country, temp});
        if(result.cod == 200){
            domCoun[0].innerHTML = country;
            domDesc[0].innerHTML = description;
            domLoc[0].innerHTML = location;
            domTemp[0].innerHTML = temp + "F";
            domErrMsg[0].innerHTML = '';
            // console.log({domCoun, domDesc, domLoc, domTemp});
        }else{
            domCoun[0].innerHTML = "";
            domDesc[0].innerHTML = "";
            domLoc[0].innerHTML = "";
            domTemp[0].innerHTML = "";
            domErrMsg[0].innerHTML = `
                    <h3>Error: ${404}</h3>
                    <p>Zip code: ${zipInput.value} was not found! Try another one</p>
                `;
        }

       })
        
       
    });
})();