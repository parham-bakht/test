function get_weather(){
    let city = document.querySelector("input").value
    const url = `https://one-api.ir/weather/?token=993228:688a82b1bd11a&action=current&city=${city}`
    // call --> response --> json 
    // data-->result-->weather-->0-->description
    //data -->result-->main--->temp
    fetch(url)
    .then(res => res.json())
    .then(data =>{
        console.log(data)
        // data-->result-->weather-->0-->description
        let description = data["result"]["weather"][0]["description"]
        let temp = data["result"]["main"]["temp"]
        console.log(description)
        let wDiv = document.querySelector(".city")
        wDiv.innerHTML = `<h1>وضعیت کلی: ${description} </h1>`
        let tempDiv = document.querySelector(".current")
        tempDiv.innerHTML =  `${temp}&deg;`
    })
}
