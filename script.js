const btnEl=document.querySelector('.btn')
const hourEl=document.querySelector('.hour')
const minEl=document.querySelector('.min')
const secEl=document.querySelector('.sec')
const timeEl=document.querySelector('.time')
const dateEl=document.querySelector('.date')
const days=[ 'Saturday','Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
const months=['Jan','Feb','March','April','May','June','July','August','Sep','Oct','Nov','Dec' ]

btnEl.addEventListener('click', (e) =>{
    const html = document.querySelector('html')
    if(html.classList.contains('dark')){
        html.classList.remove('dark')
        e.target.innerHTML='Dark mode'
    }
    else{
        html.classList.add('dark')
        e.target.innerHTML ='Light mode'
    }

})

function setTime(){
    const scale = (num,in_min,in_max,out_min,out_max) =>{
        return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min
    }
    const time = new Date()
    const month = time.getMonth()
    const day = time.getDay()
    const date = time.getDate()
    const hours = time.getHours() 
    const clockHours = hours % 12
    const min = time.getMinutes()
    const sec = time.getSeconds()
    const ampm = hours >=12 ? 'PM' : 'AM'
    console.log(clockHours);

    hourEl.style.transform =` translate(-50%, -100%) rotate(${scale(clockHours,0,11,0,360)}deg)`
    minEl.style.transform =` translate(-50%, -100%) rotate(${scale(min,0,59,0,360)}deg)`
    secEl.style.transform =` translate(-50%, -100%) rotate(${scale(sec,0,59,0,360)}deg)`
    hourEl.style.transform =` translate(-50%, -100%) rotate(${scale(clockHours,0,11,0,360)}deg)`

    // timeEl.innerHTML= `${clockHours} : ${min < 10 ? `0${min}` : min} ${ampm} `
    timeEl.innerHTML = `${clockHours} : ${min < 10 ? `0${min}` : min} : ${sec < 10 ? `0${sec}` : sec} ${ampm}`;
    dateEl.innerHTML =`${days[day]},${months[month]} ${date}`

}

setTime()
setInterval(setTime,1000)



// SOCIAL PANEL JS..
const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
	social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
	social_panel_container.classList.remove('visible')
});
