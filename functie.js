let button = document.querySelector('button');
let ul = document.querySelector('ul');
let input = document.querySelector('input');
let i;
let listItem = document.querySelectorAll('li');



function codeCompact() {
    let li = document.createElement('li');
    let textNode = document.createTextNode(input.value); 
    li.appendChild(textNode);
    ul.appendChild(li);
    input.value = '';}

button.addEventListener('click', function() {
    if (input.value.length > 0) {
        codeCompact();}})

input.addEventListener('keypress', function(event) {
    if (input.value.length > 0 && event.which /*keyCode*/=== 13) {
        codeCompact();}})



/*
listItem[0].addEventListener('click', function() {
        function listItemDone(listItem) { 
    
            switch (listItem[i]) {
                case i = 0:                  
                     listItem[i].classList.toggle('.done');
                break;
                case i = 1:                  
                     listItem[i].classList.toggle('.done');
                break;
                case i = 2:                  
                     listItem[i].classList.toggle('.done');
                break;
                case i = 3:                  
                     listItem[i].classList.toggle('.done');
                break;
                case i = 4:                  
                     listItem[i].classList.toggle('.done');
                break;
                case i = 5:                  
                     listItem[i].classList.toggle('.done');
                break;
                case i = 6:                  
                     listItem[i].classList.toggle('.done');
                break;
                case i = 7:                  
                     listItem[i].classList.toggle('.done');
                break;
                case i = 8:                  
                     listItem[i].classList.toggle('.done');
                break;
                case i = 9:                  
                     listItem[i].classList.toggle('.done');
                break;
                default: listItemDone();
                     
            }
            
            }});
*/
            


let Color1 = document.querySelector('.color1');
let Color2 = document.querySelector('.color2');
let Body = document.getElementById('x');
let CSScode = document.querySelector('h2');

let gradient = function() {
    Body.style.background = 'linear-gradient(to right, '
                        + Color1.value + ', ' 
                        + Color2.value + ')';
    CSScode.textContent = Body.style.background + ';';
}

Color1.addEventListener('input', gradient);
Color2.addEventListener('input', gradient);        
        
window.addEventListener('load', function() {gradient();});