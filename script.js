var currentDay = moment()
var eightAm = document.getElementById('8')
var nineAm = document.getElementById('9')
var tenAm = document.getElementById('10')
var elevenAm = document.getElementById('11')
var twelvePm = document.getElementById('12')
var onePm = document.getElementById('13')
var twoPm = document.getElementById('14')
var threePm = document.getElementById('15')
var fourPm = document.getElementById('16')
var fivePm = document.getElementById('17')

$("#currentTime").text(currentDay.format("dddd, MMMM Do YYYY"));

console.log(moment().format("H"))


var currentTime = moment().format('H');

console.log(currentTime)


for (let i = 8; i < 18; i++) {

    for (let i = 8; i < 18; i++) {
        if (currentTime > i)

        $(`#${i}`).addClass('past');

        else if (currentTime < i)

        $(`#${i}`).addClass('future');
        
        else $(`#${i}`).addClass('present');
    }

}




