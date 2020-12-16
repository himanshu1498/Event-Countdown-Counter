
const daysEl =  document.getElementById('days');
const hoursEl= document.getElementById('hours');
const minsEl= document.getElementById('min');
const secondsEl= document.getElementById('seconds');





const chirtmas = '25 Dec 2020';

function countdown()
{

const christmasdate = new Date(chirtmas);
const currentdate = new Date();

const totalseconds = (christmasdate-currentdate) / 1000;

const days = Math.floor(totalseconds/3600/24);
const hours = Math.floor(totalseconds/3600)%24;
const mins = Math.floor(totalseconds/60)%60;
const seconds = Math.floor(totalseconds)%60; 
console.log(days , hours , mins , seconds);

daysEl.innerHtml = days;
hoursEl.innerHtml = hours;
minsEl.innerHtml = mins;
secondsEl.innerHtml = seconds;

}

countdown();

setInterval(countdown, 1000);