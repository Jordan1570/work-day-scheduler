var currentDay = moment()
var eightAm = $('#8');
var nineAm = $('#9');
var tenAm = $('#10');
var elevenAm = $('#11');
var twelvePm = $('#12');
var onePm = $('#13');
var twoPm = $('#14');
var threePm = $('#15');
var fourPm = $('#16');
var fivePm = $('#17');

$("#currentTime").text(currentDay.format("dddd, MMMM Do YYYY"));

console.log(moment().format("H"))


var currentTime = moment().format('H');

console.log(currentTime)

var saveBtn = $(".saveBtn").on('click', function () {
    console.log($(this).siblings().eq(1).attr('id'))

var hour = $(this).siblings().eq(1).attr('id')

var value = $(this).siblings().eq(1).val()
console.log(value)

localStorage.setItem(hour, value)


})

function init() {
    //localStorage.getItem('8')


for (let i=8; i < 18; i++) {

    var eight = localStorage.getItem(i)
    console.log(eight)
    
    $('#' + i ).val(eight)  
    console.log($("#" + i))

}
}

init()


for (let i = 8; i < 18; i++) {

    for (let i = 8; i < 18; i++) {
        if (currentTime > i)

        $(`#${i}`).addClass('past');

        else if (currentTime < i)

        $(`#${i}`).addClass('future');
        
        else $(`#${i}`).addClass('present');
    }

}






