const check = () => {const Username = document.querySelector('#name').value
const question = document.querySelector('#question').value
console.log(Username + " Asked the question, " + question);




/* These console logs are purely for dev. to set up break points to make sure code is doing intended result before showing end user*/


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const randomNum = getRandomInt(1, 11);
/*console.log(randomNum);*/


let decicionStatements = randomNum;

switch (decicionStatements) {

    case 1:
      decicionStatements = 'Yes you should do that!';
        break;
    case 2:
      decicionStatements = 'Thats a bad idea!';
        break;
    case 3:
      decicionStatements = 'Signs point to unexpected opportunities';
        break;   
    case 4:
      decicionStatements = 'Take a step back and reassess before moving forward';
        break;
    case 5:
      decicionStatements = 'Trust your instincts and take the leap'
        break;
    case 6:
      decicionStatements = 'Outlook is bright, proceed with confidence'
        break;
    case 7:
      decicionStatements = 'Hmm, better try again later.'
        break;  
    case 8:
      decicionStatements = 'Not the right time, patience will bring better results'
        break;
    case 9:
      decicionStatements = 'Seek advice from a trusted friend before deciding'
        break;
    case 10:
      decicionStatements = "Don't do that shit"
        break;      


    default:
      decicionStatements = 'No answer here';
        break;
}

answer.textContent = (Username + ", you have asked the question, " + question + ". The gods decided your fate shall be that        " + decicionStatements)
}












  

  









