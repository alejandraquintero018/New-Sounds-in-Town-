var userContainer = document.getElementById('art');
let eventsEl = document.querySelector('.events'); 


//Testing the API with a proxy

//tying the API with the form 

document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    let userinput = document.querySelector('#form-input').value;
    console.log(userinput);
    let cityinput = document.querySelector('#city-search').value;
    console.log(cityinput); 
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
    getDates(userinput, cityinput);
});



function getDates(userinput, cityinput) {
    fetch(`https://api.seatgeek.com/2/events?q=${userinput}&venue.city=${cityinput}&client_id=Mjg0ODA1NTR8MTY2MDYxNjUyOS42NDkyNzcy`).then(function (res) {
        return res.json();
    }).then(function (data) {
        console.log(data.events);
        let name = document.querySelector('.showname');
        //let events = data.value
        for (var i = 0; i < data.events.length; i++) {
            console.log(data.events[i].url);
     
            var popEvents = document.createElement('div');
            //eventsEl.append(popEvents); 
            //popEvents.setAttribute("class", card); 

            var getticket = data.events[i].url;
            let ticketlink = document.createElement('a');
            ticketlink.setAttribute("href", getticket);
            ticketlink.setAttribute("target", "_blank")
            popEvents.appendChild(ticketlink); 


            var getname = data.events[i].short_title;
            console.log(getname);
            let artistName = document.createElement('h1');
    
            artistName.textContent = getname;
            popEvents.appendChild(artistName); 

            let getimage = data.events[i].performers[0].image;
            let makeimage = document.createElement('img'); 
            makeimage.setAttribute('src', getimage); 
            makeimage.setAttribute
            ticketlink.appendChild(makeimage); 
            console.log(getimage);

            var getDate = data.events[i].datetime_local;
            let showdate = document.createElement("h3");
            showdate.textContent = getDate;
            popEvents.appendChild(showdate);

            dayjs(getDate).format('DD/MM/YYY');
            


            eventsEl.append(popEvents); 
    
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


