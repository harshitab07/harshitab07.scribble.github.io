const msg = document.querySelector('.msg');
const guess = document.querySelector('input');
const btn = document.querySelector('.btn');
let play = false;
let newWord = "";
let jumbled = "";
let words = ['cell', 'tissue', 'muscle', 'bone', 'kidney', 'liver', 'brain', 'knee', 'wrist', 'nerve' ];

const createNewWords = () => {
    let random = Math.floor(Math.random()*words.length);
    let word = words[random];
    return word;
}

const scramble = (arr) => {
    for(let i=arr.length-1; i>=0; i--){
        let temp = arr[i];
        let j = Math.floor(Math.random()*(i+1));
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}

btn.addEventListener('click', function(){
if(!play){
    play=true;
    btn.innerHTML = "GUESS";
    guess.classList.toggle('hidden');
   newWord = createNewWords();
    jumbled = scramble(newWord.split("")).join("");
    msg.innerHTML = `Guess the word : ${jumbled}`;
}
else {
    let user = guess.value;
    if(user===newWord) {
        
        play = false;
        msg.innerHTML = `Awesome ${newWord} is correct!!`;
        btn.innerHTML = "Start Again";
        guess.classList.toggle('hidden');
        guess.value="";
    }
    else {
        msg.innerHTML = `Opps!! Try Again`;
    }
}
})