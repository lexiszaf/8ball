
var listofanswers = ["It is certain.",
 "It is decidedly so.",
  "Without a doubt.",
  "Yes, definitely.",
  "You may rely on it.",
   "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
     "Yes.",
     "Signs point to yes.",
      "Reply hazy, try again.",
      "Ask again later.",
       "Better not tell you now.",
       "Cannot predict now.",
       "Concentrate and ask again.",
        "Don't count on it.",
         "My reply is no.",
         "My sources say no.",
         "Outlook not so good.",
         "Very doubtful.",
       "Get out of my room, mom",
     "I'm busy go away"];



function newmessage(){
  event.preventDefault();
  var randomDecimal = Math.random()* listofanswers.length; //randomDecimal returns a random index with decimal
  var randomNumber=Math.floor(randomDecimal); //randomNumber returns the random index whole number
  var answer = listofanswers[randomNumber]; //access an element from array with randon number

  var message = $('p');
  message.text(answer);
}

var button = $('button');
button.on("click", newmessage);
