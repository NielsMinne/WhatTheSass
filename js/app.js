const searchButton = document.querySelector('.nav__button');
const searchBar = document.querySelector('.nav-search');
const navRight = document.querySelector('.nav-right-wrap');



//Search Toggle
searchButton.addEventListener('click',() =>{
    if(searchBar.className=== "nav-search hide"){
    searchBar.classList.remove('hide');
    navRight.classList.add('hide');
    }
    else{
    searchBar.classList.add('hide');
    navRight.classList.remove('hide');
    }
});

