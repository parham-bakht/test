function get_weather(){
    let city = document.querySelector("input").value
    const url = `https://one-api.ir/weather/?token=993228:688a82b1bd11a&action=current&city=${city}`
    // call --> response --> json 
    // data-->result-->weather-->0-->description
    //data -->result-->main--->temp
    fetch(url)
    .then(res => res.json())
    .then(data => {
        let desc = data["result"]["weather"][0]["description"]
        let temp = data["result"]["main"]["temp"]
        let body = document.querySelector("div")
        body.innerHTML = `
            <h1> وضعیت کلی : ${desc}</h1>
            <h1> دمای هوا : ${temp}</h1>
        `
    })
}
