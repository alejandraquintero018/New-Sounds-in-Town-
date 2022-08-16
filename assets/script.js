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

    fetch ()
    getDates(userinput);
});

function getDates(userinput) {
    fetch(`https://api.seatgeek.com/2/events?q=${userinput}&client_id=Mjg0ODA1NTR8MTY2MDYxNjUyOS42NDkyNzcy`).then(function(res){
        return res.json();
    }).then(function(data){
        console.log(data);
    })
}

let events = data.value
for (var i = 0; i = events.length; i++) {

}

// API KEY for Seat Geek
// 6f3c33672e892fdaaf54cf553ce147687a9af04ed735671115da281bd83912e2


//CLient ID 
//Mjg0ODA1NTR8MTY2MDYxNjUyOS42NDkyNzcy


