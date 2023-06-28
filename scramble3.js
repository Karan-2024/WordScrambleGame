const msg=document.querySelector('.msg');
/* we are accessing class msg from html in javascript*/ 
const guess=document.querySelector('input');
/* we are accessing input tag from html in javascript*/ 
const btn=document.querySelector('.btn');
/* we are accessing btn class from html in javascript*/ 

/*Now in the start play value is false on button press , no playing of game  */
let play=false;
let newWords="";
let randWords="";
let sWords=['Angular', 'ReactJs','Android', 'Javascript' ,'Ruby','Kotlin','Matlab','MongoDb','Kernel','Bandwidth','Boolean','Debugging','Ethernet','Protocol','Algorithm','Encryption','Flowchart','Gigabyte','Iteration','Internet'];



const createNewWords = () =>{

    let ranNum=Math.floor(Math.random()*sWords.length);
    let newTempSwords =sWords[ranNum];

    return newTempSwords;
}


const scrambleWords = (arr) =>
{
   for(let i=arr.length-1; i>=0;i--)
   {
    let temp=arr[i];
    //console.log(temp);
    let j=Math.floor(Math.random()*(i));
    //console.log(i);
    //console.log(j);

    arr[i]=arr[j];
    arr[j]=temp;
}
return arr;
}
/* once butoon is pressed of click here to go then here we use addeventListener  and inside it if play value if true means user wants to play then , he 
    will first press the click here to button then button values changes to "GUESS" and input box appears now as we used toggle function*/
    /* we used classList in javascript to access the toggle property in javascript  , inside brackets we wrote class of input block i.e is hidden
    */ 
btn.addEventListener('click', function()
{
    if(!play)
    {
        play=true;
        btn.innerHTML="GUESS";
        guess.classList.toggle('hidden');
         newWords=createNewWords();
         randWords=scrambleWords(newWords.split(""));
         randWords=randWords.join("");
         msg.innerHTML= "Guess the word - "+randWords;
    }

    else
    {
         let tempWord =  guess.value;
         
         if(tempWord === newWords)
         {
            play= false;
            
            msg.innerHTML='Great ! It is correct .';
            btn.innerHTML ="Start Again";
            guess.classList.toggle('hidden');
            guess.value="";

         }

          else{
             
            play=false;
            msg.innerHTML='Sorry My Friend, It is incorrect .<br> Correct Answer is '+newWords;
            guess.classList.toggle('hidden');
            guess.value="";

        } 
    } 
})