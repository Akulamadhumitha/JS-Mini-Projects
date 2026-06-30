//set initial count
let count = 0;

const value = document.getElementById('value');
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn){
    btn.addEventListener('click',function(e){
       const styles = e.currentTarget.classList;
       if(styles.value==='btn decrease') {
        count--;
       }
       else if(styles.value==='btn increase') {
        count++;
       }
       else {
        count = 0;
       }
       if(count < 0) value.style.color = "red";
       else if(count === 0) value.style.color = "yellow";
       else value.style.color = "blue";
        value.textContent = count;
    });
});