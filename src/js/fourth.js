
const input = document.querySelector(".ipt");
const btn = document.querySelector(".button");
btn.addEventListener("click", ()=>{
    let value = input.value * 1000
    console.log(value);
    setTimeout(()=>{
alert(`Your value: ${value}`)
    }, value)
    
})