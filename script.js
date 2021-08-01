setInterval(currentDate,1000);

// const current = moment().format('h:mm:ss a');

$('#8 .text').val(localStorage.getItem('8'))
$('#9 .text').val(localStorage.getItem('9'))
$('#10 .text').val(localStorage.getItem('10'))
$('#11 .text').val(localStorage.getItem('11'))
$('#12 .text').val(localStorage.getItem('12'))
$('#13 .text').val(localStorage.getItem('13'))
$('#14 .text').val(localStorage.getItem('14'))
$('#15 .text').val(localStorage.getItem('15'))
$('#16 .text').val(localStorage.getItem('16'))
$('#17 .text').val(localStorage.getItem('17'))
$('#18 .text').val(localStorage.getItem('18'))


function currentDate() {
    const currentDay = document.getElementById('currentDay');
    const date = moment().format('MMM Do YY');
    const today = moment().format('dddd');
    currentDay.textContent = today + ','+ ' ' + date;
}

$(document).ready(function() {

$('.saveBtn').on('click', function () {
    const timeID = $(this).parent().attr('id');
    const inputEl = $(this).siblings('.text').val();

    localStorage.setItem(timeID, inputEl);
})
})

