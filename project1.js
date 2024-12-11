// Variables


let btn = document.querySelector('#btn');
let quote = document.querySelector('.quote');
let person= document.querySelector('.person');


const quotes = [{
    quote: `"I will be Hookage One Day."`,
    person: `Naruto`
    
},
{
    quote: `"Huhhhhh!!! Such a Drag"`,
    person: `Shikamaru `
},
{
    quote: `"I wish I was a cloud"`,
    person: `Shikamaru `
},
{
    quote: `"Saaaasssskeeeeeeeeee"`,
    person: `Naruto` 
},
{
    quote: `"Those who do not understand the true pain can never understand the true peace "`,
    person: `Pain`
},
{
    quote:`" I m not gonna run away, I never go back on my word! That’s my nindo: my ninja way."`,
    person:  `Naruto`
},
{
    quote:`" This world is rotten, and those who are making it rot deserve to die. Someone has to do it, so why not me?"`,
    person:  `Light Yagami `
},
{
   quote:`"When you die, I'll be the one writing your name in my Death Note."`,
   person: `Ryuk`
},];


btn.addEventListener('click',function(){
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText= quotes[random].person;
})