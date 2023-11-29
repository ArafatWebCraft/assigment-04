let radius = Number(prompt('Enter Your radius'))
let total_radius = 3.1416*(radius**2)
document.write('Area of radius: ' + total_radius + "</br>")
let squre = radius**2
document.write('Area of squre: ' + squre + "</br>")
let width = Number(prompt('Enter Your widht'))
let height = Number(prompt('Enter Your height'))
let ractangle = width * height
document.write('Area of ractangle: ' + ractangle + "</br>")
let apothem = Number(prompt('Enter Your apothem'))
let perimeter = Number(prompt('Enter Your perimeter'))
let pentagon = 0.5 * apothem * perimeter
document.write('Area of pentagon: ' + pentagon + "</br>")
let base = Number(prompt('Enter Your base'))
let t_height = Number(prompt('Enter Your height'))
let triangle = 0.5 * base * t_height
document.write('Area of trialgle: ' + triangle + "</br>")

let temp = Number(prompt('Enter fahrenheit: '))
let farcalc = (temp - 32) * 5/9
document.write('Celcius is :' + farcalc)


let c_temp = Number(prompt('Enter celcius: '))
let celciusCalc = c_temp * 9/5 + 32
document.write('<br> Farenheit is :' + celciusCalc)



