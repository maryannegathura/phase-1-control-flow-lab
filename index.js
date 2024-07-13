function scuberGreetingForFeet(distance){
  // Write your code here!
  //using if else statement
  if (distance <= 400) {
    return 'This one is on me!';
  }else if(distance > 400 && distance <= 2000){
    return 'That will be twenty bucks.';
  }else if (distance > 2000 && distance <= 2500){
    return 'I will gladly take your thirty bucks.';
  }else{
    return 'No can do.';
  }
}
function ternaryCheckCity(city){
  // Write your code here!
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  // using switch statement
switch (tip){
  case 'generous':
    return 'Thank you so much.';
    case 'not as generous':
    return 'Thank you.';
    default:
      return 'Bye.';
}
}
module.exports = {scuberGreetingForFeet, ternaryCheckCity, switchOnCharmFromTip};