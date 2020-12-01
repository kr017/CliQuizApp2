var readLine=require("readline-sync");
const chalk = require('chalk');

var userLogged=readLine.question(chalk.yellow("Please enter your name "));

console.log(
  chalk.blue.bold("Hey "+chalk.blueBright(userLogged))
  );


var score=0,scoreLevel2=0;

function quizCheck(question,answer){
  var userAnswer=readLine.question(question);
//console.log(userAnswer);
//console.log(answer);

  if(userAnswer==answer){
    console.log(chalk.green("You are right"));
    score=score+1;
  }else{
    console.log(chalk.red("Wrong Answer"));
    score=score-0.33;
  }

  console.log(chalk.blue("Your Score ",score.toFixed(2)));

  
}


function quizCheckLevel2(question,answer){
  var userAnswer=readLine.question(question);

  if(userAnswer==answer){
    console.log(chalk.green("You are right"));
    scoreLevel2=scoreLevel2+4;
  }else{
    console.log(chalk.red("Wrong Answer"));
    scoreLevel2=scoreLevel2-2;
  }
  console.log(chalk.blue("Your Score ",scoreLevel2.toFixed(2))) 
}

var questionsList=[
  {question:
  "1. who are Aamir khan's friends name in this movie? \n1]Raj and Farhan \n2]Raju and Fredick \n3]Chatur and Raju \n4]Raju and Farhan\n", 
    answer:"4"
  },
  {question:
  "2. What was the actual name of Rancho? \n1]Kunsunk Wangadu \n2]Phunsukh Wangdu \n3]Raj Sharma \n4]Frahan Rastogi\n", 
    answer:"2"
  },
  {
  question:
  "3. What was Farhan's passion \n1]Cinematography \n2]Choreography \n3]Wildlife Photography \n4]Singing\n", 
    answer:"3"
  },
  {question:"4. What did people called Chatur ? \n1]Creator \n2]Looser \n3]Rancho \n4]Silencer\n", 
    answer:"4"
  },
 {question:"5. What was the actual name of Virus ? \n1]Viru Sahastrabuddhe \n2]Viru Shastri \n3]Viru Kadam \n4]Viru Sahakari\n", 
    answer:"1"
  },
]


var questionsListLevel2=[
  {question:
  "1. Who is the director of Three Idiots? \n1]Rajkumar Hirani \n2]Raj Hirani \n3]Raj Chopra\n4]Farhan Akhtar\n", 
    answer:"1"
  },
   {question:
  "1. Who is the producer of Three Idiots? \n1]Vinod Chopra \n2]Yash Chopra \n3]Anurag Kashyap\n4]Farhan Akhtar\n",  
    answer:"1"
  }, {question:
  "1. who played role of Farhan in this movie? \n1]Aamir Khan \n2]Sharman Joshi \n3]R. Madhavan \n4]Boman Irani\n", 
    answer:"3"
  },
];  


if(readLine.keyInYN("Are you fan of The Movie Three Idiots")){
console.log(chalk.bold.bgRed("Rules:"));

console.log(chalk.red("\n For each correct answer score will be increased by 1. \n For each wrong answer score will be reduced by 0.33\n"));
console.log(chalk.greenBright("Enjoy!!!"));
console.log(chalk.green("-----------------------------"));
let i=0;
while(i<questionsList.length){
  quizCheck(questionsList[i].question,questionsList[i].answer);
i++;
}console.log(chalk.green("-------------------------------------------"));
console.log(
chalk.bold.greenBright("Your final score in Level 1 is " + score.toFixed(2))
);
        checkForLevel2();
}else{
  console.log("This quiz is only for fans of Three Idiots")
  console.log("bye 👋")
  console.log("Good Day 😀")
}


function checkForLevel2(){
    
      if(score==5)
      {
        console.log("\n");
      console.log("wow!!! You have answered all questions correctly.\n");

      console.log(chalk.cyan
      ("Now you will enter in Level 2 🚀\n"));
      console.log(chalk.red
      ("Rules:\n For each correct answer score will be increased by 4. \n For each wrong answer score will be reduced by 2.\n"));
      console.log(chalk.greenBright("Enjoy!!!"));
      console.log(chalk.green("-------------------------------------------"));
      let i=0;
      while(i<questionsListLevel2.length){
        quizCheckLevel2(questionsListLevel2[i].question,questionsListLevel2[i].answer);
      i++;
      }
      console.log(chalk.green("-------------------------------------------"));
      console.log(
      chalk.bold.greenBright("Your final score in Level 2 is" + scoreLevel2.toFixed(2)));

      console.log("\n");

      if(scoreLevel2==12)
      console.log(
      chalk.bold.red("You are true fan of Three Idiots"));

      console.log(
      chalk.bold.greenBright("Thank you for playing See you soon" ));

      console.log("\n");

      }else{
        console.log("Ohh! You didn't made it to Level 2, it's Time to watch the Movie again.");
        console.log("Thank you for playing :)");
      }
}