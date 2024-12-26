let userscore=0;
let compscore=0;
const choices =document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorep= document.querySelector("#userscore");
const compscorep = document.querySelector("#compscore");
choices.forEach((choice) =>{
    console.log(choice);
    const gencompchoice= ()=>{
       const options = ["stone","papper","secissor"];
       const random = Math.floor(Math.random()*3)//*3 coz generate indx from 0 to 2
       return options[random];
    }
     const showwinner=(userwin,userchoice,compchoice) =>{
        if(userwin)
        {
            userscore++;
            userscorep.innerText =userscore;
            msg.innerText = `You win your ${userchoice} beats ${compchoice} `;
            msg.style.backgroundColor="green";
            msg.style.color="black";
        }
        else{
            compscore++;
            compscorep.innerText =compscore;
            msg.innerText = `You Loose Computer's ${compchoice} beats your's ${userchoice} `;
             msg.style.backgroundColor="red";
             msg.style.color="black";
        }
    }
                
      const draw = () =>{ 
        msg.innerText ="Game was Draw";
         msg.style.backgroundColor="yellow";
         msg.style.color="black";
      }

    const playgame =(userchoice)=> {
          console.log("user choice = ",userchoice);
        const compchoice=gencompchoice();
        console.log("comp choice = ",compchoice);
        if(userchoice=== compchoice){
            draw()
        }
        else{
            let userwin=true;
            if(userchoice==="stone"){
               //comp choice is paper or sesisor
               userwin =compchoice==="paper"?false:true; 
            }
            else if(userchoice==="paper")
            {
                userwin=compchoice==="secissor"?false:true;
            }
            else
            {
                userwin=compchoice ==="stone"?false:true;
            }
            showwinner(userwin,userchoice,compchoice);
        }
    };



    choice.addEventListener("click",() =>{
        const userchoice = choice.getAttribute("id");//user kya input dega S/P/S
         playgame(userchoice);
    })
});