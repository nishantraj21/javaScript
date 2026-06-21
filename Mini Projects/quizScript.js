const form = document.querySelector('form');

const answer = {
    q1: "Mendal",
    q2: "Venus",
    q3: "Nehru",
}

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const data = new FormData(form);

    let finalScore = 0;
    for(let [name,value] of data.entries()){
        //console.log(name,value);

       if(answer[name] == value)
        finalScore++;   
    }
    const result = document.getElementById("result");
    result.textContent = `Score: ${finalScore}`;
    form.reset();
})