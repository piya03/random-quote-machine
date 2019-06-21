const arrayOfQuotes = [{name: '-APJ Abdul Kalam',
                       quote : "If you want to shine like the sun, first burn like the sun."},
                       {
                         name : "-Anton Chekhov",
                         quote : 'Don’t tell me the moon is shining; show me the glint of light on broken glass.',
                       },{
                         name : '-William Shakespeare',
                         quote : "A friend is one that knows you as you are, understands where you have been, accepts what you have become, and still, gently allows you to grow."
                       },{
                         name : '-Theodore Roosevelt',
                         quote : 'It is hard to fail, but it is worse never to have tried to succeed.'
                       
                       },{
                         name : '-Thomas A. Edison',
                         quote : 'Many of life’s failures are people who did not realize how close they were to success when they gave up'
                       }];
const quoteBtn = document.querySelector('#quoteBtn');
const quoteSection = document.querySelector('#quoteSection');
const authorSection = document.querySelector('#authorSection');
const bodyBg = document.querySelector('body');
  const hexNumber = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

quoteBtn.addEventListener('click', displayQuote);
function displayQuote() {
  let number = Math.floor(Math.random()*arrayOfQuotes.length);
  quoteSection.innerHTML = arrayOfQuotes[number].quote
  authorSection.innerHTML = arrayOfQuotes[number].name
  
  ///////////////////////////////////////////
  
  let hex = '#';
  for (let i=0; i <6; i++){
    let randomColor = Math.floor(Math.random()*hexNumber.length)
    hex+=hexNumber[randomColor]
    console.log(hex)
  }
  if (quoteSection.style.color ==='#FFFFFF'){
    quoteSection.style.color = '#000'
  } else {
    quoteSection.style.color = hex;
  }
  bodyBg.style.backgroundColor = hex;
  authorSection.style.color = hex;
  quoteBtn.style.backgroundColor = hex;
  quoteSection.animate([{opacity: '0.2'},
                       {opacity: '1.0'}], {
                       duration : 500, fill : 'forwards'
                       });
  authorSection.animate([{opacity: '0.2'},
                       {opacity: '1.0'}], {
                       duration : 500, fill : 'forwards'
                       });
}