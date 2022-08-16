var userContainer = document.getElementById('art');

//Testing the API with a proxy



//tying the API with the form 

document.querySelector('#form').addEventListener('submit', function(event){
    event.preventDefault(); 
    let userinput = document.querySelector('#form-input').value; 
    console.log(userinput); 
    fetch (`https://api.allorigins.win/raw?url=https://tastedive.com/api/similar?q=${userinput}&type=music`).then(function(res){
            return res.json();
        
        })
        .then(function(data){

            for( var i = 0; i < 5; i++){
            console.log(data.Similar.Results[i].Name);
            // var element = document.createElement('li');
            document.querySelector('#art'+i).textContent=data.Similar.Results[i].Name;
        
            
            
             }
        })

    // fetch ()

});




