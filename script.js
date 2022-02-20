const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');
const day = document.getElementById('day');
const date = document.getElementById('date');
const myGat = document.getElementById('m');

function myTimes(){
    const myDate = new Date();
    const dateArr = ['Sunday','Monday','TuesDay','WednesDay','ThursDay','FriDay','SaturDay']

    let h = myDate.getHours()<10 ?`0${myDate.getHours()}`:myDate.getHours();
    let m = myDate.getMinutes()<10?`0${myDate.getMinutes()}`:myDate.getMinutes();
    let s = myDate.getSeconds()<10?`0${myDate.getSeconds()}`:myDate.getSeconds();
    let amPm = myDate.getHours()<=12?`AM`:`PM`;
    



    hour.innerHTML = h;
    minute.innerHTML = m;
    second.innerHTML = s;
    myGat.innerHTML = amPm;
    date.innerHTML = `${myDate.getDate()}/${myDate.getMonth()+1}/${myDate.getFullYear()}`;
    day.innerHTML = dateArr[`${myDate.getDay()}`]
    
}
myTimes();
setInterval(()=>{
    myTimes()
},1000)