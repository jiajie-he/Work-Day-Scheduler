// display current day
var today = moment();
$(`#currentDay`).text(today.format(`dddd, MMMM Do`))

// save input to local storage
// grab element from html
var nineEl = document.querySelector(`#nine`)
var tenEl = document.querySelector(`#ten`)
var elevenEl = document.querySelector(`#eleven`)
var twelveEl = document.querySelector(`#twelve`)
var thirteenEl = document.querySelector(`#thirteen`)
var fourteenEl = document.querySelector(`#fourteen`)
var fifteenEl = document.querySelector(`#fifteen`)
var sixteenEl = document.querySelector(`#sixteen`)
var seventeenEl = document.querySelector(`#seventeen`)

// grab value from local storage
var nine = localStorage.getItem(`nine`);
var ten = localStorage.getItem(`ten`);
var eleven = localStorage.getItem(`eleven`);
var twelve = localStorage.getItem(`twelve`);
var thirteen = localStorage.getItem(`thirteen`);
var fourteen = localStorage.getItem(`fourteen`);
var fifteen = localStorage.getItem(`fifteen`);
var sixteen = localStorage.getItem(`sixteen`);
var seventeen = localStorage.getItem(`seventeen`);

// display local storage value
nineEl.textContent = nine;
tenEl.textContent = ten;
elevenEl.textContent = eleven;
twelveEl.textContent = twelve;
thirteenEl.textContent = thirteen;
fourteenEl.textContent = fourteen;
fifteenEl.textContent = fifteen;
sixteenEl.textContent = sixteen;
seventeenEl.textContent = seventeen;

// grab save button from html
var saveBtn = document.querySelectorAll(`.saveBtn`)

// add event listener to each save buttons
// forEach() - https://www.w3schools.com/jsref/jsref_foreach.asp
saveBtn.forEach(btn => {
    btn.addEventListener(`click`, (event) => {
        
        var nineEl = document.querySelector(`#nine`).value;
        var tenEl = document.querySelector(`#ten`).value;
        var elevenEl = document.querySelector(`#eleven`).value;
        var twelveEl = document.querySelector(`#twelve`).value;
        var thirteenEl = document.querySelector(`#thirteen`).value;
        var fourteenEl = document.querySelector(`#fourteen`).value;
        var fifteenEl = document.querySelector(`#fifteen`).value;
        var sixteenEl = document.querySelector(`#sixteen`).value;
        var seventeenEl = document.querySelector(`#seventeen`).value;
        
        localStorage.setItem(`nine`, nineEl);
        localStorage.setItem(`ten`, tenEl);
        localStorage.setItem(`eleven`, elevenEl);
        localStorage.setItem(`twelve`, twelveEl);
        localStorage.setItem(`thirteen`, thirteenEl);
        localStorage.setItem(`fourteen`, fourteenEl);
        localStorage.setItem(`fifteen`, fifteenEl);
        localStorage.setItem(`sixteen`, sixteenEl);
        localStorage.setItem(`seventeen`, seventeenEl);
            
    
    })

})







//TODO: color-code past, present, future

// if (hour == today.format(`h a`)) {
//     $(`textarea`).addClass(`present`)
// } else if (hour > today.format(`h`)) {
//     $(`textarea`).addClass(`future`)
// } else {
//     $(`textarea`).addClass(`past`)
// }
