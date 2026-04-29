const textRef = document.querySelector(".text");
let count = 0;
let id = null;
id = setInterval(()=>{
    count += 1; 
    textRef.textContent = count;
    if (count > 5) {
    clearInterval(id);
    textRef.textContent = `0, interval stoped`;
}
}, 1000)