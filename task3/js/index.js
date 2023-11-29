let mark = Number(prompt('Enter Your mark: '))
if (mark >= 80 && mark <= 100){
    console.log(mark,'Grage is A+')
}else if(mark >= 70 && mark <= 80){
    console.log(mark,'Grage is A')
}else if(mark >= 60 && mark <= 70){
    console.log(mark,'Grage is A-')
}else if(mark >= 50 && mark <= 60){
    console.log(mark,'Grage is B')
}else if(mark >= 40 && mark <= 50){
    console.log(mark,'Grage is B-')
}else if(mark >= 30 && mark <= 40){
    console.log(mark,'Grage is F')
}else{
    console.log('Your are not inupt')
}