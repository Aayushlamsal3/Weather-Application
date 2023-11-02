 <script>
        let api="{Your api key}"
        let apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q="


        let searchinp=document.querySelector("#search-input")
        let searchbtn=document.querySelector("#search-btn")

        async function checkweather(city){
            let response = await fetch(apiUrl + city + `&appid=${api}` )
            let data = await response.json();

            console.log(data)

            document.querySelector(".city").innerHTML=data.name;
            document.querySelector(".temp").innerHTML=data.main.temp;
            document.querySelector(".per").innerHTML=data.main.humidity;
            document.querySelector(".per2").innerHTML=data.wind.speed;
        }
            searchbtn.addEventListener("click",()=>{
                checkweather(searchinp.value)
            })
        
    </script>
