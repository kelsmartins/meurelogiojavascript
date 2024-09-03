
hour = document.getElementById('hours')
minute = document.getElementById('minutes')
second = document.querySelector('#seconds')

const clock = setInterval(function time(){
    let date = new Date()
    var hours = date.getHours()
    var minutes = date.getMinutes()
    var seconds = date.getSeconds()

    if (hours <10) hours = '0' + hours;
    if (minutes<10) minutes = '0' + minutes
    if(seconds<10) seconds = '0' + seconds

    hour.innerText = hours;
    minute.innerText = minutes;
    second.innerText = seconds

})
