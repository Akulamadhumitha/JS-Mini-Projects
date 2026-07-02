const iteminput = document.querySelector('input[type="text"]');
const form = document.querySelector('form');
const select = document.querySelector('select');
// iteminput.addEventListener("keydown",runEvent);
// iteminput.addEventListener("keyup",runEvent);
// iteminput.addEventListener("keypress",runEvent);

// iteminput.addEventListener("focus",runEvent); // when click inside the input box its focus.
// iteminput.addEventListener("blur",runEvent); // when click outside the input box its blur.

// iteminput.addEventListener("cut",runEvent); // if we cut in input box there occurs cut event
// iteminput.addEventListener("paste",runEvent); //if we paste into input box there occurs paste event.

// iteminput.addEventListener("input",runEvent); //what we are typing will be noted in the input box.

// select.addEventListener("change",runEvent)
form.addEventListener('submit',runEvent);
function runEvent(e){
    e.preventDefault()
//    console.log("enter: "+e.type);
//    console.log(e.target.value)
//    document.getElementById('output').innerHTML = "<h3>"+e.target.value+"</h3>"
}