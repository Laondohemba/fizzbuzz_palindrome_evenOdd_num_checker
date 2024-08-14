// function to check if a number is fizz, buzz or fizz buzz

document.getElementById('btn').addEventListener('click', ()=>{
    let num = document.getElementById('num');
    let result = document.getElementById('result');

    if(num.value.length == 0){
        result.innerHTML = 'Input a number';
    }
        else{
        if(num.value % 5 === 0 && num.value % 3 === 0){
            result.innerHTML = num.value + ' is fizz buzz';
        }
        else if(num.value % 3 === 0){
            result.innerHTML = num.value + ' is buzz';
        }
        else if(num.value % 5 === 0){
            result.innerHTML = num.value + ' is fizz';
        }
        else if(num % 5 !== 0 && num % 3 !== 0){
            result.innerHTML = num.value + ' is neither fizz nor buzz';
        }
    }
    result.style.display = 'block';
    num.value = "";
})

// function to store a range of nunmbers in an array
function allNum(min, max){
    let num = [];

    for(let i = min; i <= max; i++){
        num.push(i);
    }
    return num;
}
let numResult = document.getElementById('result2');
let allNumbers = allNum(1, 100);

// function to select even numbers from 1 to 100 fromm the range
document.getElementById('evenBtn').addEventListener('click', ()=>{
    let evenNum = [];
    numResult.innerHTML = "";
    for(let i = 0; i <= 100; i++){

        if(allNumbers[i] % 2 === 0){
            evenNum = allNumbers[i];
                    
            let span = document.createElement('span');
            span.innerHTML = evenNum + ", ";
            numResult.appendChild(span);
        }
    }
    numResult.style.display = 'block';
})

// function to select odd numbers from 1 to 100 from the range
document.getElementById('OddBtn').addEventListener('click', ()=>{
    let oddNum = [];
    numResult.innerHTML = "";
    for(let i = 0; i < 100; i++){
        
        if(allNumbers[i] % 2 !== 0){
            oddNum = allNumbers[i];
            
            let span = document.createElement('span');
            span.innerHTML = oddNum + ", ";
            numResult.appendChild(span);
        }
    }
    numResult.style.display = 'block';
})

// function to check palindromes

function checkPalindrome(){
    let inputText = document.getElementById('input');

    let inputToLower = inputText.value.toLowerCase();
    let splitWord = inputToLower.split("");

    let newWord = splitWord.reverse();
    let reverseWord = newWord.join("");

    document.getElementById('reverse_spelling').innerHTML = "Reverse word: " + reverseWord;
    
    let palindromeResult = document.getElementById('palindrome_result');

    if(inputToLower.length == 0){
        palindromeResult.innerHTML = "Input the word you want to check";
    }else if(inputToLower == reverseWord) {
        palindromeResult.innerHTML = inputText.value + " is a palindrome";
    }
    else{
        palindromeResult.innerHTML= inputText.value + " is not a palindrome";
    }
    palindromeResult.style.display = "block";
    document.getElementById('reverse_spelling').style.display = "block";
    inputText.value = "";
}

document.getElementById('palindrome_btn').addEventListener('click', ()=>{;
    checkPalindrome();
});