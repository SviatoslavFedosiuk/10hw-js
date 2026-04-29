
const input = document.querySelector(".ipt");
const btn = document.querySelector(".button");
btn.addEventListener("click", ()=>{
    let values = input.value * 1000
    setTimeout(()=>{
alert(`Your value: ${values}`)
    }, values)
    
})