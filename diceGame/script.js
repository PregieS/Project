//DICE ROLLER PROGRAM

function rollDice(){
    const numOfDice = document.getElementById("numOfDice").value; //input
    const diceResult = document.getElementById("diceResult"); // div 1
    const diceImages = document.getElementById("diceImages"); // div 2
    const values = [];
    const images = [];

    for(let i = 0; i < numOfDice; i++) //for loop
        {
const value = Math.floor(Math.random() * 6) + 1;
values.push(value);
images.push(`<img src="files/${value}.png">`);
    }
    
    diceResult.textContent = `dice: ${values.join(', ')}`;
    diceImages.innerHTML = images.join(' ');
}