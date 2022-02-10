const allProjects = "https://api.npoint.io/5cb14c2bd9bb34dcdab5";

 const myprojects =async() => {
    const raw = await fetch(allProjects)
    const projects = await raw.json();
    for(var i=0;i<projects.length;i++){
        addproject(projects[i])
    }
}

const addproject =(x) =>{
    const outputfield = document.getElementById("all-projects");
    var card=document.createElement("div");
    card.classList.add("cards")
    card.classList.add("g-3")
    card.classList.add("col-lg-4")
    card.classList.add("col-md-6")
    card.innerHTML=`<img src="${x.img}" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">${x.title}</h5>
                    <p class="card-text">${x.description}</p>
                    <div class="button">
                        <a href="#" class="btn "><i class="fas fa-link"></i>LIVE PROJECT</a>
                        <a href="#" class="btn align-items-end"><i class="fab fa-github"></i>VIEW CODE</a>
                    </div>
                    </div>`;
    console.log(card)
    outputfield.appendChild(card);
    console.log(outputfield)
}

myprojects();





