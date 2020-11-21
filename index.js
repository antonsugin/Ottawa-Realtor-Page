
var now = new Date();
var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ];

function listedDate (curDate) {

    var month = months[curDate.getMonth()];
    return curDate.getDate() + ' ' +  month + ' ' + curDate.getFullYear()
}


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

setDate();
setOpenHouseDate ();

// var day = now.getDate();
// var curDay = day + 22;
// console.log(curDay);


// var changeColor = document.getElementById("name"); 
//         changeColor.onchange = function (e) { 
//             if (changeColor.value !== '') { 
//                 e.target.style.backgroundColor  
//                         = " green";
//                 e.target.style.color  
//                 = "white"; 
//             } 
//         }; 

// var kony = document.getElementsByTagName("input")
// console.log(kony)



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






var kony = document.getElementById("name");

kony.onchange = function (e) { 
    if (kony.value !== '') { 
        // e.target.style.backgroundColor  = " chartreuse";
        // e.target.style.color = "blue";
        e.target.style.color = "white";
        e.target.style.background = 'linear-gradient(to top, #11998e, #38ef7d)'
    } 

    else {
        // e.target.style.backgroundColor  = "white";
        e.target.style.background  = "white";
    }
}; 

// background: linear-gradient(to top, #11998e, #38ef7d);

var lony = document.getElementById("property");

lony.onchange = function (e) { 
    if (lony.value !== '' && lony.value !== 'other') { 
        e.target.style.backgroundColor  = "chartreuse";
        e.target.style.color = "blue"
    } 

    else {
        e.target.style.backgroundColor  = "white";
        e.target.style.color = "#4F545F"
    }
}; 




var dony = document.getElementById("email");

dony.onchange = function (e) { 
    if (dony.value !== '') { 
        e.target.style.backgroundColor  = " chartreuse";
        e.target.style.color = "blue"
    } 

    else {
        e.target.style.backgroundColor  = "white";
    }
}; 


function changeInputColor (id) {
    
    // console.log(id)
    
        
        var pony = document.getElementById(id);

        pony.onchange = function (e) { 
            if (pony.value !== '') { 
                e.target.style.backgroundColor  = " chartreuse";
                e.target.style.color = "blue"
            } 

            else {
                e.target.style.background  = "white";
            }
        }; 
    } 











// var allInputs = document.getElementsByTagName("input");
// console.log(allInputs[2].id)

// var ghj = document.getElementById(allInputs[2].id);
// console.log(ghj)

// ghj.onchange = function (e) { 
//     if (ghj.value !== '') { 
//         e.target.style.backgroundColor  
//                 = " chartreuse";
//     } 

//     else {
//         e.target.style.backgroundColor  
//                 = "white";
//     }
// }; 

// var allInputs = document.getElementsByTagName("input");


    // else {
    //     e.target.style.backgroundColor  
    //             = "white";
    // }
    // console.log(kony)
    // kony.onchange = function (e) { 
    //                 if (kony.value !== '') { 
    //                     e.target.style.backgroundColor  
    //                             = " chartreuse";
                        
    //                 } 

    //                 else {
    //                     e.target.style.backgroundColor  
    //                             = "white";
    //                 }
    // }; 
    
// }


// for (var i = 0; allInputs.length > 0; allInputs++) {
//     var ghj = document.getElementById(allInputs[i].id);
//     ghj.onchange = function (e) { 
//         if (ghj.value !== '') { 
//             e.target.style.backgroundColor  
//                     = " chartreuse";
//         } 

//         else {
//             e.target.style.backgroundColor  
//                     = "white";
//         }
//     }; 
// }

// changeInputColor ();

// if (kony.value !== '' ) {
//     kony.classList.add("chan-color");
// }

        