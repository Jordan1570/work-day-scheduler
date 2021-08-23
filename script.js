var currentDay = moment()

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




