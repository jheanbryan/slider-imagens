let count = 1;

setInterval( function(){
    nextImg();
}, 2500);

function nextImg(){
    count++;
    if (count == 5){
        count = 1;
    }
    document.getElementById(`radio${count}`).checked = true;
}