let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');
const quotes = [
    {
      quote:`Life Is Either A Daring Adventure Or Nothing At All`,
      person:`helen keller`
    },
    {
      quote:`Whatever you are, be a good one`,
      person:`abraham lincoln`
    },
    {
      quote:`Once we accept our limits, we go beyond them`,
      person:`albert einstein`
    },
    {
      quote:`Small steps are better than NO steps`,
      person:`mark twain`
    },
    {
      quote:`May your choices reflect your hopes, not your FEARS`,
      person:`nelson mandela`
    },
    {
      quote:`The trouble is, you think you have time`,
      person:`buddha`
    }
];
btn.addEventListener('click',function(){
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})