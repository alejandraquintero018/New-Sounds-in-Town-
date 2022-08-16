

//Testing the API with a proxy

fetch ("https://api.allorigins.win/raw?url=https://tastedive.com/api/similar?q=red+hot+chili+peppers%2C+pulp+fiction").then(function(res){
            return res.json();
        })
        .then(function(data){
            console.log(data);

        })

        })
    fetch ()
    getDates(userinput);
});

function getDates(userinput) {
    fetch(`https://api.seatgeek.com/2/events?q=${userinput}&client_id=Mjg0ODA1NTR8MTY2MDYxNjUyOS42NDkyNzcy`).then(function(res){
        return res.json();
    }).then(function(data){
        console.log(data);
    })
};

// API KEY for Seat Geek
// 6f3c33672e892fdaaf54cf553ce147687a9af04ed735671115da281bd83912e2


//CLient ID 
//Mjg0ODA1NTR8MTY2MDYxNjUyOS42NDkyNzcy


