
window.onload = function () {
    chooseLocation();
    choosePrice ();
    setDate();
    setOpenHouseDate ();
}



var now = new Date();
var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ];

function listedDate (curDate) {
    var month = months[curDate.getMonth()];
    return curDate.getDate() + ' ' +  month + ' ' + curDate.getFullYear()
}

// Set current date
function setDate () {
    var date = document.getElementsByClassName('house-description__date-current');
    for ( var i = 0; i < date.length; i++) {
        date[i].innerHTML = listedDate(now);
    }
}


function setOpenHouseDate () {
    var openHouseDate = document.getElementsByClassName('open-house');
    var openHouseStr = 'Open House on: ' + listedDate(now) + ' 3PM';
    for ( var i = 0; i < openHouseDate.length; i++) {
        openHouseDate[i].innerHTML = openHouseStr;
    }
}

// Return current House Data
function setHouseData (arr) {
    var ind = Math.floor(Math.random(0, 10) * arr.length);
    return arr[ind]
}


// Set House Location
function chooseLocation () {
    var locations = ['Kanata', 'Stittsville', 'Westboro', 'Orléans', 'Barrhaven'];

    var location = document.getElementsByClassName('house-description__area-location');
    for ( var i = 0; i < location.length; i++) {
        location[i].innerHTML = setHouseData(locations);
    }
}



// Set House Price
function choosePrice () {
        var prices = ['1,200,000', '5,000,000', '600,000', '900,000', '2,000,000'];

        var price = document.getElementsByClassName('house-description__price-amount');
        for ( var i = 0; i < price.length; i++) {
            price[i].innerHTML = setHouseData(prices);
    }

}

var mybutton = document.getElementById("toTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > (0,20) || document.documentElement.scrollTop > (0,20)) {
    mybutton.style.display = "block";
    }

    else {
    mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = (0,0);
  document.documentElement.scrollTop = (0,0);
}


// Changed input colors 
function changeInputColor (id, type) {
        
    var curInput = document.getElementById(id);

    curInput.onchange = function (e) { 

        if (type === 'email' || type === 'name') {

            if (type === 'email' && curInput.value.includes('@') && curInput.value.includes('.')) {
                e.target.style.backgroundColor  = "limegreen";
                e.target.style.color = "whitesmoke"
                curInput.classList.remove('required');
                
            }
            else if (type === 'name' && curInput.value !== '' ) {
                e.target.style.backgroundColor  = "limegreen";
                e.target.style.color = "whitesmoke"
            } 
            else {
                curInput.classList.add('required');
                e.target.style.backgroundColor  = "white";
                e.target.style.color = "black"
            }
        }

        else if (curInput.value !== '' && curInput.value !== 'other') { 
            e.target.style.backgroundColor  = "limegreen";
            e.target.style.color = "whitesmoke"
        } 
        else {
            e.target.style.background  = "white";
            e.target.style.color  = "#4F545F";
        }
    }; 
} 

// Menu nav bar visibility
var humToggle = document.querySelector('.menu');

humToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});



