var userContainer = document.getElementById('art');
let eventsEl = document.querySelector('.events');
let card = document.querySelector('#slider');
let carouselEl = document.querySelector('.carousel-container');
let artistsEl = document.querySelector('#simArt');
let noartistsEl = document.getElementById('noartists');


//Testing the API with a proxy

//tying the API with the form 

document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    
    carouselEl.setAttribute('class', 'displaycontents');
    artistsEl.setAttribute('class', 'displaycontents flex justify-center mt-20');
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
                document.querySelector('#art' + i).setAttribute('data-artist',data.Similar.Results[i].Name);
                document.querySelector('#art' + i).classList.add('similar');
            }
        })
    // fetch();

    getDates(userinput, cityinput);

});

document.getElementById('simArt').addEventListener('click',function(event){
    if(!event.target.matches('.similar')){
        return //if it does not match

    }
    else {
        var btn = event.target;
        var artist = btn.getAttribute('data-artist');
        getDates(artist,"");

    }
})


function getDates(userinput, cityinput) {
    fetch(`https://api.seatgeek.com/2/events?q=${userinput}&venue.city=${cityinput}&client_id=Mjg0ODA1NTR8MTY2MDYxNjUyOS42NDkyNzcy`).then(function (res) {
        return res.json();
    }).then(function (data) {
        console.log(cityinput);
        
        console.log(data.events);

        if(!data.events.length) {
            carouselEl.setAttribute('class', 'hidden');
            noartistsEl.setAttribute('class', ' text-center text-white mt-10px pt-10 text-xl')
            noartistsEl.classList.remove("hidden")
            document.getElementById('noartists').textContent = `There are no events by ${userinput}! Check out one of the recommended artists below based on your music taste`
            return;
        }

            carouselEl.classList.remove("hidden")
            noartistsEl.classList.add("hidden")

        for (var i = 0; i < data.events.length; i++) {

        

            var popEvents = document.createElement('div');
            // popEvents.setAttribute("class", "my-5 justify-center mx-auto relative w-full sm:w- max-w-lg bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700");
            popEvents.setAttribute("class", " carousel-item relative p-5px bg-white mx-3 h-96 w-40 rounded-lg")
            eventsEl.append(popEvents);

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
            makeimage.setAttribute('class', "rounded-lg")
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

            //getting and appending the price 
            let getprice = data.events[i].stats.lowest_price;
            let makeprice = document.createElement('p');
            makeprice.textContent = "From $" + getprice;
            ticketlink.appendChild(makeprice);
        };

       

    });
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



