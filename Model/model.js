let openBtn = document.getElementById('open-btn');
let modelBox = document.getElementById('model-container');
let closeBtn = document.getElementById('close-btn');

openBtn.addEventListener('click',function(){

    modelBox.style.display = 'block';
});
closeBtn.addEventListener('click',function(){
 
    modelBox.style.display = 'none';
});
window.addEventListener('click',function(e){

    if(e.target === modelBox){
        modelBox.style.display = 'none';
    }
});