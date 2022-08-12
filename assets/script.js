

//Testing the API with a proxy

fetch ("https://api.allorigins.win/raw?url=https://tastedive.com/api/similar?q=red+hot+chili+peppers%2C+pulp+fiction").then(function(res){
            return res.json();
        
        })
        .then(function(data){
            console.log(data);
        })