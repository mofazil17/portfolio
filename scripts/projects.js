function alldata(){
    fetch("../data/projects.json")
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        for(var i=0;i<data.length;i++){
            console.log(data[i]);
            addproject(data[i])
        }
    })
}

const addproject =(x) =>{
    const outputfield = document.getElementById("all-projects");
    var card=document.createElement("div");
    card.classList.add("col-lg-4")
    card.classList.add("col-md-6")
    card.innerHTML=`<img src="https://picsum.photos/200" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">${x.title}</h5>
                    <p class="card-text">${x.description}</p>
                    <a href="#" class="btn mr-2"><i class="fas fa-link"></i>${x.viewcode}</a>
                    <a href="#" class="btn "><i class="fab fa-github"></i>${x.liveproject}</a>
                    </div>`;
    console.log(card)
    outputfield.appendChild(card);
    console.log(outputfield)
}

alldata();





