var currentTime = moment()
var note = document.querySelectorAll('.note');

$("#currentTime").text(currentTime.format("dddd, MMMM Do YYYY"));

console.log(moment().format("H"))
console.log(note);

for (var i = 0; i < note.length;i++) {
    var time = $(`#${i+1}`).html();
    console.log('time',time);

    if (time < parseInt(moment().format('H'))) {
        console.log('past');

      $(`#text${i+1}`).css('background-color', 'red');
      
    } else if (time > parseInt(moment().format('H'))) {
        $(`#text${i+1}`).css('background-color', 'green');


    } else {
        console.log('currentTime');
    }

}

console.log(document.getElementById('1').innerHTML)


