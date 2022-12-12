// Your challenge is to build out this advice generator app using the [Advice Slip API](https://api.adviceslip.com) and get it looking as close to the design as possible.
const advice=document.querySelector(".advice")
const id =document.getElementById("id");
const btn =document.getElementById("btn");

let p = fetch("https://api.adviceslip.com/advice")
p.then((response)=>{

    return response.json()
}).then((data)=>{
    let data1 = data
    console.log(data1.slip.id)
    console.log(data1.slip.advice)
    advice.innerHTML=data1.slip.advice
    id.innerHTML=`"${data1.slip.id} "`
})
btn.addEventListener("click",()=>{
    location.reload();
    console.log("btn clicked")
})
