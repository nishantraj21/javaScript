

setInterval(()=>{
    const clock = document.querySelector('#time');

    let time = new Date();
    //console.log(time.toLocaleTimeString);

    clock.textContent = `Date: ${time.toLocaleDateString()}, Time: ${time.toLocaleTimeString()}`;

    const currentTime =Date.now();
    const newYearTime = new Date(2027, 1, 1).getTime();
    let timer = newYearTime - currentTime;

    const day = Math.floor((timer)/(1000*60*60*24));
    timer%=(1000*60*60*24);
    const hour = Math.floor((timer)/(1000*60*60));
    timer%=(1000*60*60);
    const minute = Math.floor((timer)/(1000*60));
    timer%=(1000*60)
    const second = Math.floor((timer)/(1000));
    timer%=1000;

    const result = document.getElementById("newYear");
    result.textContent = `${day}:Days ${hour}:Hour ${minute}:Minute ${second}:Seconds`
},1000)

