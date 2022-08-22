var userContainer = document.getElementById('art');
let eventsEl = document.querySelector('.events');
let card = document.querySelector('#slider');


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
        //let name = document.querySelector('.showname');
        //let events = data.value

        for (var i = 0; i < data.events.length; i++) {

            // let card = [data.events.length]; 
            //card.forEach('div', i => {
            //console.log(element);
            var popEvents = document.createElement('div');
            popEvents.setAttribute("class", "my-5 flex justify-center mx-auto relative w-full sm:w-auto max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700");
            popEvents.setAttribute("class", "carousel-item relative float-left w-full")
            eventsEl.append(popEvents);
            //popEvents.setAttribute("class", card); 

            //for getting and appending the ticketlink and appending it to the image to make the image a link
            var getticket = data.events[i].url;
            let ticketlink = document.createElement('a');
            ticketlink.setAttribute("href", getticket);
            ticketlink.setAttribute("target", "_blank");
            popEvents.append(ticketlink);

            //getting and appending the image
            let getimage = data.events[i].performers[0].image;
            let makeimage = document.createElement('img');
            makeimage.setAttribute('src', getimage);
            makeimage.setAttribute('class', "rounded-lg w-full")
            ticketlink.appendChild(makeimage);

            //getting and appending the concert title 
            var getname = data.events[i].short_title;
            console.log(getname);
            let artistName = document.createElement('h5');
            artistName.textContent = getname;
            artistName.setAttribute('class', 'text-center px-3 mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white');
            ticketlink.appendChild(artistName);

            //getting the date, formatting and appending it to the
            var getDate = data.events[i].datetime_local;
            let showdate = document.createElement("p");
            showdate.setAttribute("class", "my-3 px-3 font-normal text-gray-700 dark:text-gray-400");
            let test = dayjs(getDate).format('dddd, MMMM D');
            showdate.textContent = test;
            ticketlink.appendChild(showdate);

            //for getting the venue and appending it to the card 
            let getvenue = data.events[i].venue.name;
            let makevenue = document.createElement('p');
            makevenue.textContent = getvenue;
            makevenue.setAttribute('class', 'mb-3 font-normal px-3 text-gray-700 dark:text-gray-400')
            ticketlink.appendChild(makevenue);

            //getting and appending the 
            let getprice = data.events[i].stats.lowest_price;
            let makeprice = document.createElement('p');
            makeprice.textContent = "From $" + getprice;
            ticketlink.appendChild(makeprice);
        };

        //artistName = setAttribute("h4", getname); 
        //ticketlink.setAttribute("value", getticket);


        //getDate.JSON
        //let formatdate = dayjs(getDate).format('dddd, MMMM D'); 
        //console.log(getDate);
        //console.log(formatdate);
        //ticketlink.append();
    });

}

if (!navigator.geolocation) {
    console.error(`Your browser doesn't support Geolocation`);
  } else {
    console.log("OK!")
  }
  

let defaultTransform = 0;
function goNext() {
    defaultTransform = defaultTransform - 398;
    var slider = document.getElementById("slider");
    if (Math.abs(defaultTransform) >= slider.scrollWidth / 1.7) defaultTransform = 0;
    slider.style.transform = "translateX(" + defaultTransform + "px)";
}
next.addEventListener("click", goNext);
function goPrev() {
    var slider = document.getElementById("slider");
    if (Math.abs(defaultTransform) === 0) defaultTransform = 0;
    else defaultTransform = defaultTransform + 398;
    slider.style.transform = "translateX(" + defaultTransform + "px)";
}
prev.addEventListener("click", goPrev);




// API KEY for Seat Geek
// 6f3c33672e892fdaaf54cf553ce147687a9af04ed735671115da281bd83912e2


//CLient ID 
//Mjg0ODA1NTR8MTY2MDYxNjUyOS42NDkyNzcy


