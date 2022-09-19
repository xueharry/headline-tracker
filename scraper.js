const results = document.querySelectorAll(".reusable-search__result-container ");

if (results) {
    for (i=0; i < results.length; ++i) {
        t =  results[i].innerText;
        name = t.split('\n')[0];
        title = t.split('\n')[5];
        console.log(name, title);
    }
}

// TODO: Figure out how to get around delayed loading of this
//pageList = document.getElementsByClassName("artdeco-pagination__pages artdeco-pagination__pages--number");
//lastPageNumber = pageList[0].lastElementChild.textContent.trim();
//console.log(lastPageNumber);
//console.log('Done');

// TODO: Pass this to service worker, who will handle reloading with &page=2 etc.
baseURL = window.location.toString();
console.log(baseURL);

var timeToWait = 10000; // in miliseconds.
var pageNumber = 1;

function loadNewPage() {
    window.location.replace(baseURL + '&page=' + String(pageNumber));
    pageNumber += 1;
 }

setTimeout(function(){ loadNewPage(); }, timeToWait);








