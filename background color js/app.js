const colors = ["green", "red", "rgba(133,122,200)", "#f15025"]

const btn = window.document.getElementById('btn')
const color = window.document.querySelector('.color')

btn.addEventListener('click', function(){
    //get randow number between 0-3 

    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}