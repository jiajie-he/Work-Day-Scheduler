// display current day
var today = moment();

function displayTime (){
    var time = moment().format(`dddd, MMMM Do YYYY, h:mm:ss a`);
    $(`#currentDay`).text(time)

}

setInterval(displayTime, 1000);

// color-code past, present, future
// grab textarea give them value
var nineAmEl = $(`#nineAm`)
nineAmEl = 09
// create condition for present future past
if (nineAmEl == today.format(`HH`)) {
    $(`#nine`).addClass(`present`)
} else if (nineAmEl > today.format(`HH`)) {
    $(`#nine`).addClass(`future`)
} else {
    $(`#nine`).addClass(`past`)
}

var tenAmEl = $(`#tenAm`)
tenAmEl = 10

if (tenAmEl == today.format(`HH`)) {
    $(`#ten`).addClass(`present`)
} else if (tenAmEl > today.format(`HH`)) {
    $(`#ten`).addClass(`future`)
} else {
    $(`#ten`).addClass(`past`)
}

var elevenAmEl = $(`#elevenAm`)
elevenAmEl = 11

if (elevenAmEl == today.format(`HH`)) {
    $(`#eleven`).addClass(`present`)
} else if (elevenAmEl > today.format(`HH`)) {
    $(`#eleven`).addClass(`future`)
} else {
    $(`#eleven`).addClass(`past`)
}

var twelvePmEl = $(`#twelvePm`)
twelvePmEl = 12

if (twelvePmEl == today.format(`HH`)) {
    $(`#twelve`).addClass(`present`)
} else if (twelvePmEl > today.format(`HH`)) {
    $(`#twelve`).addClass(`future`)
} else {
    $(`#twelve`).addClass(`past`)
}

var onePmEl = $(`#onePm`)
onePmEl = 13

if (onePmEl == today.format(`HH`)) {
    $(`#thirteen`).addClass(`present`)
} else if (onePmEl > today.format(`HH`)) {
    $(`#thirteen`).addClass(`future`)
} else {
    $(`#thirteen`).addClass(`past`)
}

var twoPmEl = $(`#twoPm`)
twoPmEl = 14

if (twoPmEl == today.format(`HH`)) {
    $(`#fourteen`).addClass(`present`)
} else if (twoPmEl > today.format(`HH`)) {
    $(`#fourteen`).addClass(`future`)
} else {
    $(`#fourteen`).addClass(`past`)
}

var threePmEl = $(`#threePm`)
threePmEl = 15

if (threePmEl == today.format(`HH`)) {
    $(`#fifteen`).addClass(`present`)
} else if (threePmEl > today.format(`HH`)) {
    $(`#fifteen`).addClass(`future`)
} else {
    $(`#fifteen`).addClass(`past`)
}

var fourPmEl = $(`#fourPm`)
fourPmEl = 16

if (fourPmEl == today.format(`HH`)) {
    $(`#sixteen`).addClass(`present`)
} else if (fourPmEl > today.format(`HH`)) {
    $(`#sixteen`).addClass(`future`)
} else {
    $(`#sixteen`).addClass(`past`)
}

var fivePmEl = $(`#fivePm`)
fivePmEl = 17

if (fivePmEl == today.format(`HH`)) {
    $(`#seventeen`).addClass(`present`)
} else if (fivePmEl > today.format(`HH`)) {
    $(`#seventeen`).addClass(`future`)
} else {
    $(`#seventeen`).addClass(`past`)
}

// save input to local storage
// grab element from html
var nineEl = document.querySelector(`#nine`);
var tenEl = document.querySelector(`#ten`);
var elevenEl = document.querySelector(`#eleven`);
var twelveEl = document.querySelector(`#twelve`);
var thirteenEl = document.querySelector(`#thirteen`);
var fourteenEl = document.querySelector(`#fourteen`);
var fifteenEl = document.querySelector(`#fifteen`);
var sixteenEl = document.querySelector(`#sixteen`);
var seventeenEl = document.querySelector(`#seventeen`);

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
        
        // grab the content from each textarea
        var nineEl = document.querySelector(`#nine`).value;
        var tenEl = document.querySelector(`#ten`).value;
        var elevenEl = document.querySelector(`#eleven`).value;
        var twelveEl = document.querySelector(`#twelve`).value;
        var thirteenEl = document.querySelector(`#thirteen`).value;
        var fourteenEl = document.querySelector(`#fourteen`).value;
        var fifteenEl = document.querySelector(`#fifteen`).value;
        var sixteenEl = document.querySelector(`#sixteen`).value;
        var seventeenEl = document.querySelector(`#seventeen`).value;
        
        // set name and value to local storage
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