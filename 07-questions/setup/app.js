//using selectors inside the element
const questions = document.querySelectorAll('.question');

questions.forEach(function(question){
    const btn = question.querySelector('.question-btn');

    btn.addEventListener('click',function(){
       questions.forEach(function(item){
          if(item!==question){
            item.classList.remove('show-text');
          }
       });
       question.classList.toggle('show-text');
    });
});


// traversing the dom

// const btns = document.querySelectorAll('.question-btn');
// // console.log(btns);
// btns.forEach(function(btn){
//     btn.addEventListener('click',function(e){
//         // console.log(e.currentTarget);
//         //who is the parent of the current clicked target element
//        const question = e.currentTarget.parentElement.parentElement;
//        question.classList.toggle('show-text');
//     });
// });
