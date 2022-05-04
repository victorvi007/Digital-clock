const time = document.getElementById('time');
const clock = document.getElementById('clock');
const animation = document.getElementById('animation');
const details = document.getElementById('moreDetails');

 


setInterval(() => {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    const miliSecond = date.getMilliseconds();
    const meridiem = (hour<12)? 'AM':'PM';
    const day = date.getUTCDay();
    const todaysDate = date.getUTCDate();
    const month = date.getUTCMonth();
    const year = date.getUTCFullYear();

    // console.log(year);


    

    const weekDays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    const monthName = ["January","February","March","April","May","June","July","August","September","October","November","December"];
// console.log(todaysDate);

time.innerHTML = `<span>${(hour%12<10)?'0'+hour%12: hour%12}</span>:<span>${(minute<10)?'0'+minute:minute}</span>:<span>${(second<10)?'0'+second:second}</span><span class="meridiem">${(Math.round(miliSecond/100)<'10')? '0'+Math.round(miliSecond/100) : Math.round(miliSecond/100)}</span>`;
details.innerHTML = `<span>${meridiem}</span> | <span>${weekDays[day]}</span> | <span>${    
    (todaysDate ==1)? 
    todaysDate+'<span>st</span>':''}
 ${(todaysDate ==2)? 
    todaysDate+'<span>nd</span>':''}
 ${(todaysDate ==3)? 
     todaysDate+'<span>rd</span>': ''}
 ${(todaysDate>3) ? 
     todaysDate+'<span>th</span>':''}</span> <span>${monthName[month]}</span> </span>${year}</span> `
}, 100);