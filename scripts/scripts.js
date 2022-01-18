
const alldata=[]
fetch("../data/projects.json")
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        for(var i=0;i<data.length;i++){
            alldata.push(data[i])
            console.log(data[i].title);
        }
        alldata.push(data)
    })

    console.log(alldata)