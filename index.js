// Your code goes here

let paragraph = document.querySelector("#text")
document.addEventListener("DOMContentLoaded", function () {
    console.log(paragraph)
    paragraph.textContent = "This is really cool!"
    console.log(paragraph)
})

console.log("DOM not yet loaded.")