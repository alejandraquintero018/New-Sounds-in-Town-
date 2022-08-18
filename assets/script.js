var userContainer = document.getElementById('art');
var link = document.querySelector('.url');
var date = document.querySelector('.showdate');
let name = document.querySelector('.showname'); 

//Testing the API with a proxy

//tying the API with the form 

document.querySelector('#form').addEventListener('submit', function (event) {
    event.preventDefault();
    let userinput = document.querySelector('#form-input').value;
    console.log(userinput);
    fetch(`https://api.allorigins.win/raw?url=https://tastedive.com/api/similar?q=${userinput}&type=music`).then(function (res) {
        return res.json();
    })
        .then(function (data) {

            for (var i = 0; i < 5; i++) {
                console.log(data.Similar.Results[i].Name);
                // var element = document.createElement('li');
                document.querySelector('#art' + i).textContent = data.Similar.Results[i].Name;


            }
        })
    // fetch();
    getDates(userinput);
   
});

function getDates(userinput) {
    fetch(`https://api.seatgeek.com/2/events?q=${userinput}&client_id=Mjg0ODA1NTR8MTY2MDYxNjUyOS42NDkyNzcy`).then(function (res) {
        return res.json();
    }).then(function (data) {
        console.log(data.events);
        let name = document.querySelector('.showname');
        //let events = data.value
        for (var i = 0; i < data.events.length; i++) {
            console.log(data.events[i].url);
            
            
            var getticket = data.events[i].url;
            let ticketlink = document.createElement('a');
            ticketlink.setAttribute("href", getticket);
            ticketlink.textContent = getticket;
            link.append(ticketlink); 

            var getname = data.events[i].shortname;
            let artistName = document.createElement('li');
           // artistName.setAttribute("h4", getname);
            artistName.textContent = getname;
            name.append(artistName); 


            //var getDate = data.events[i].datetime_local;
            //let showdate = document.createElement("div");
            //artistName.textContent = getDate;
            //showdate.append(getDate);
    
            //artistName = setAttribute("h4", getname); 
            //ticketlink.setAttribute("value", getticket);
        
            

            //ticketlink.append();
        }


    })
}






// API KEY for Seat Geek
// 6f3c33672e892fdaaf54cf553ce147687a9af04ed735671115da281bd83912e2


//CLient ID 
//Mjg0ODA1NTR8MTY2MDYxNjUyOS42NDkyNzcy


