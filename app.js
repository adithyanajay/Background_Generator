const color1 = document.getElementById("color1")
const color2 = document.getElementById("color2")
const backgroundColor = document.getElementById("backgroud_color")
console.log(color1.value)

console.log(document.body.style.backgroundColor)
const colorChange = ()=>{
    const color_1 = color1.value
    const color_2 = color2.value
    document.body.style.background = `linear-gradient(to right, ${color_1}, ${color_2})`;
    backgroundColor.innerHTML = `linear-gradient(to right, ${color_1}, ${color_2})`;
}

color1.addEventListener("input",colorChange)
color2.addEventListener("input",colorChange)

