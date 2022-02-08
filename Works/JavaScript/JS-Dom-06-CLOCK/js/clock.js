const deg = 6;
const hourhand = document.querySelector('#hourhand');
const minutehand = document.querySelector('#minutehand');
const secondhand = document.querySelector('#secondhand');

setInterval(() => {



    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;

    hourhand.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
    minutehand.style.transform = `rotateZ(${mm}deg)`;
    secondhand.style.transform = `rotateZ(${ss}deg)`;

})