function first(){
document.getElementById('button1').disabled = false;
document.getElementById('button2').disabled = false;
document.getElementById('button3').disabled = false;
document.getElementById('button4').disabled = false;
document.getElementById('start').disabled = true;

  switch(story){
    case 0:
      switch(event){
        case 0:
          txt = "choose your character: Dave, Bill, Frank, or Steve"
          document.getElementById('sploorg').innerHTML = txt;
          
          document.getElementById('button1') .innerHTML = "Dave";
          document.getElementById('button2') .innerHTML = "Bill";
          document.getElementById('button3') .innerHTML = "Frank";
          document.getElementById('button4') .innerHTML = "Steve";
        break;
        case 1:
          username = "Dave";
          dave = true;
          story++;
          event = 0;
          first();
        break;
        case 2:
          username = "Bill";
          bill = true;
          story++;
          event = 0;
          first();
        break;
        case 3:
          username = 'Frank';
          frank = true;
          story++;
          event = 0;
          first();
        break;
        case 4:
          username = "Steve";
          story++;
          steve = true;
          event = 0;
          first();
        break;
        default:
          alert("something went wrong")
        break;
      }
    break;
    case 1:
      switch(event){
        case 0:
          document.getElementById('playerName').innerHTML = "character: " + username
          console.log(username)
          txt = `what one tool will ${username} bring with them: a lock pick, a small sword, a shield, or a rope.  warning: this will effect gameplay.` 
          document.getElementById('sploorg').innerHTML = txt;
          document.getElementById('button1') .innerHTML = "lock pick";
          document.getElementById('button2') .innerHTML = "small sword";
          document.getElementById('button3') .innerHTML = "shield";
          document.getElementById('button4') .innerHTML = "rope";
        break;
        case 1:
          thievesTools = true;
          tool = "lock pick";
          story++;
          event = 0;
          first();
        break;
        case 2:
          smallSword = true;
          tool = "small sword";
          story++;
          event = 0;
          first();
        break;
        case 3:
          shield = true;
          tool = "shield";
          story++;
          event = 0;
          first();
        break;
        case 4:
          rope = true;
          tool = "rope";
          story++;
          event = 0;
          first();
        break;
      }
    break;
    case 2:

      

      switch(event){
        case 0:
          console.log(tool)
          document.getElementById('tool').innerHTML = "tool: " + tool
          txt = `${username} was a humble man who wanted very little from life. all was peaceful, until monsters started emerging from the garkkest dungon. now it's ${username} job to save his village because the adventurer's guild didn't put a high enough reward for actual heros to care. ${username} grabbed his trusty ${tool} and enterterd the garkkest dungon. (select any option to continue)`;
          document.getElementById('sploorg').innerHTML = txt;
          choiceReset()
        break;
        default:
          story++;
          event = 0;
          first();
        break;
      }

      
    break;
    case 3: // the first room
      switch(door){
        case 0:
          switch(event){
        case 0:
          txt = `as ${username} entered the garkkest dungon, the doors sealed behind him. he looked around the room and saw four doors. which door will ${username} go through.`;
          document.getElementById('sploorg').innerHTML = txt;
          doorPreset()
        break;
        case 1:
          event = 0;
          door = 1;
          story++;
          first();
        break;
        case 2:
          event = 0;
          door = 2;
          story++;
          first();
        break;
        case 3:
          event = 0;
          door = 3;
          story++;
          first();
        break;
        case 4:
          event = 0;
          door = 4;
          story++;
          first();
        break;
      }
        break;
        case 1: //door 1
          switch(event){
            case 0:
              switch(tool){
                case "small sword":
                 txt = `${username} entered the door and it closed and locked behind him. as his eyes adjusted to the darkness of the room he heard a violent roar. he saw in the dark there was a lion. luckly, ${username} brought a ${tool}. with it he was able to kill the lion and continue his adventure. (press any button to continue)`;
                 document.getElementById('sploorg').innerHTML = txt;
                 choiceReset();
                break;
                case "shield":
                  txt = `${username} entered the door and it closed and locked behind him. as his eyes adjusted to the darkness of the room he heard a violent roar. he saw in the dark there was a lion. luckly, ${username} brought a ${tool}. with it he was able to defend himself long enough to escape and move on to the next room. (press any button to continue)`;
                 document.getElementById('sploorg').innerHTML = txt;
                 choiceReset();
                break;
                default:
                  txt = `${username} entered the door and it closed and locked behind him. as his eyes adjusted to the darkness of the room he heard a violent roar. he saw in the dark there was a lion. Unfortunately, he couldn't defend himself and was eaten by the lion.`;
                  dead()
                break;
              }
            break;
            default:
              story++;
              event = 0;
              door=0;
              first();
            break;
          }
        break;
        case 2: //door 2
          switch(riddle){
            case 0:
              switch(event){
                  case 0:
                    txt = `${username} walked into the second door, and it sealed closed behind him. they look around the  room and see a stone pillar. on the  pillar there was text that read "if  you wish to leave this place alive,  you must answer my question  correctly. What’s always in front of you but can never be seen?"`;
                    document.getElementById('sploorg') .innerHTML = txt;
                   document.getElementById('button1') .innerHTML = "the future";
                    document.getElementById('button2') .innerHTML = "freedom";
                    document.getElementById('button3') .innerHTML = "knowledge";
                   document.getElementById('button4') .innerHTML = "An invisible man with  a knife";
                  break;
                  case 1:
                    riddle=1;
                    event=0;
                    first();
                  break;
                  case 2:
                    riddle=2;
                    event=0;
                    first();
                  break;
                  case 3:
                    riddle=3;
                    event=0;
                    first();
                  break;
                  case 4:
                    riddle=4;
                    event=0;
                    first();
                  break;
              }
            break;
            case 1:
              switch(event){
                case 0:
                  riddle=0;
                  txt=`${username} says the words, and the room shakes. giant stone doors slowly swing open revealing a slightly smaller stone door. ${username} walks through the slightly smaller stone doors into the next room. (press any button to continue.)`
                  document.getElementById('sploorg') .innerHTML = txt;
                  choiceReset()
                break;
                default:
                  event=0;
                  story++;
                  first();
                break;
              }
            break;
            case 2:
                  riddle=0;
                  txt = `${username} speaks the words and the room around him shakes. the giant stone doors seal shut, denying him his freedom. (you died, try again.)`
                  dead()
            break;
            case 3:
                  riddle=0
                  txt = `${username} speaks the words and the room around him shakes. the giant stone doors seal in front of him, giving him the knowledge that he is doomed. (you died, try again)`
                  dead()
            break;
            case 4:
              riddle=0;
              txt = `${username} speaks the words and the room around him shakes. the giant stone doors seal infront of him as a invisible man with a knife stabs him repeatedly. (you died, try agian)`
                  dead()
            break;
          }
        break;
        case 3: //door 3
          switch(event){
            case 0:
              event=0;
              story++;
              door=0;
              first();
            break;
          }
        break;
        case 4: //door 4
          switch(tool){
            case "rope":
              switch(event){
                case 0:
                  txt=`${username} walk into the room and the door seals behind him. ${username} stumbled around for a while until he fell into a deep pit. luckly, he brought a rope with him. he used it to climb his way back out of the hole. (press any button to continue)`;
                  document.getElementById('sploorg').innerHTML = txt;
                break;
                default:
                  event=0;
                  story++;
                  first();
                break;
              }
            break;
            default:
            txt=`${username} walk into the room and the door seals behind him. ${username} stumbled around for a while until he fell into a deep pit. being trapped at the bottom, he slowly parished. (you died, try again)`;
            dead();
            break;
          }
        break;
      }
    break;
    case 4:
      switch(door){
        case 0:
          switch(event){
            case 0:
            txt = `as ${username} entered the next room of the garkkest dungon, the doors sealed behind him. he looked around the room and saw four new doors. which door will ${username} go through.`;
            document.getElementById('sploorg').innerHTML = txt;
            doorPreset()
             break;
             case 1:
              event = 0;
              door = 1;
              first();
             break;
            case 2:
              event = 0;
              door = 2;
              first();
            break;
            case 3:
              event = 0;
              door = 3;
              first();
           break;
           case 4:
              event = 0;
              door = 4;
              first();
           break;
          }
        break;
        case 1: //door 1: death
          txt=`${username} walk into the room and the door seals behind him. He stumbled around for a while until he found a small pile of dirt. he inspected the dirt pile and discovered it was an ant hill. before he know what was happening, the ants crawled out of the ant hill and started eating him piece by piece. being trapped in a room with millions of ants devouring him, ${username} quickly parished. (you died, try again)`;
          dead();
        break;
        case 2: //door 2: safe >=(
          alert('choice 2')
        break;
        case 3: //door 3: lock pick trap
        switch(tool){
            case "lock pick":
              switch(event){
                case 0:
                  txt=`${username} walk into the room and the door seals behind him. He stumbled around for a while until he found a locked door. luckly for him, he brought a lock picking set. he used the tool to unlock the door and continue his adventure. (press any button to continue)`;
                  document.getElementById('sploorg').innerHTML = txt;
                  doorPreset();
                  door=0;
                break;
                default:
                  event=0;
                  story++;
                  door=0;
                  first();
                break;
              }
            break;
            default:
              txt=`${username} walk into the room and the door seals behind him. He stumbled around for a while until he found a locked door. being trapped in a room behind two locked doors, ${username} slowly parished. (you died, try again)`;
              dead();
            break;
          }
        break;
        case 4: //door 4: echo riddle
          switch(riddle){
            case 0:
              switch(event){
                  case 0:
                    txt = `${username} walked into the second door, and it sealed closed behind him. they look around the  room and see a stone pillar. on the  pillar there was text that read "if  you wish to leave this place alive,  you must answer my question  correctly. What can’t talk but will reply when spoken to?"`;
                    document.getElementById('sploorg') .innerHTML = txt;
                   document.getElementById('button1') .innerHTML = "a parrot ";
                    document.getElementById('button2') .innerHTML = "an invisible man holding a knife";
                    document.getElementById('button3') .innerHTML = "an echo";
                   document.getElementById('button4') .innerHTML = "A mime";
                  break;
                  case 1:
                    riddle=1;
                    event=0;
                    first();
                  break;
                  case 2:
                    riddle=2;
                    event=0;
                    first();
                  break;
                  case 3:
                    riddle=3;
                    event=0;
                    first();
                  break;
                  case 4:
                    riddle=4;
                    event=0;
                    first();
                  break;
              }
            break;
            case 3:
              riddle=0;
                  txt = `${username} speaks the words and the room around him shakes. the giant stone doors seal infront of him as a invisible man with a knife stabs him repeatedly. (you died, try agian)`
                  dead()
            break;
            case 2:
                  riddle=0;
                  txt = `${username} speaks the words and the room around him shakes. the giant stone doors seal infront of him as a invisible man with a knife stabs him repeatedly. (you died, try agian)`
                  dead()
            break;
            case 1:
                  riddle=0
                  txt = `${username} speaks the words and the room around him shakes. the giant stone doors seal in front of him, as a parrot flies down from the rafters informing him he is doomed. (you died, try again)`
                  dead()
            break;
            case 4:
              riddle=0;
              txt = `${username} speaks the words and the room around him shakes. the giant stone doors seal infront of him as a mime walks up to him and informs him he is doomed through an interpretive dance. (you died, try agian)`
                  dead()
            break;
          }
        break;
      }
    break;
    case 5:
      alert("if you are seeing this, whatever you tryed didn't work. unless it did, then good job.")
    break;
  }
}


var event = 0;
var story = 0;
var door = 0;
var riddle = 0;
var gameStart = false;
var username;
var thievesTools, smallSword, shield, rope = false;
var tool;
var dave, bill, frank, steve = false;


document.getElementById('button1').disabled = true;
document.getElementById('button2').disabled = true;
document.getElementById('button3').disabled = true;
document.getElementById('button4').disabled = true;


function button1(){
  event = 1;
  first();
  
      
}

function button2(){
  event = 2;
  first();
  
}

function button3(){
  event = 3;
  first();
  
}

function button4(){
  event = 4;
  first();
}






function dead(){
  document.getElementById('playerName').innerHTML = "character:"
  document.getElementById('tool').innerHTML = "tool:"
  document.getElementById('sploorg').innerHTML = txt;
  event=0;
  story=0;
  door=0;
  riddle=0;
  choiceReset();
  document.getElementById('button1').disabled = true
  document.getElementById('button2').disabled = true;
  document.getElementById('button3').disabled = true;
  document.getElementById('button4').disabled = true;
  document.getElementById('start').disabled = false;
}

function restart(){
  document.getElementById('playerName').innerHTML = "character:"
  document.getElementById('tool').innerHTML = "tool:"
  document.getElementById('sploorg').innerHTML = "";
  event=0;
  story=0;
  door=0;
  riddle=0;
  choiceReset();
  document.getElementById('button1').disabled = true
  document.getElementById('button2').disabled = true;
  document.getElementById('button3').disabled = true;
  document.getElementById('button4').disabled = true;
  document.getElementById('start').disabled = false;
}

function choiceReset(){
  document.getElementById('button1') .innerHTML = "choice 1";
  document.getElementById('button2') .innerHTML = "choice 2";
  document.getElementById('button3') .innerHTML = "choice 3";
  document.getElementById('button4') .innerHTML = "choice 4";
}

function doorPreset(){
  document.getElementById('button1') .innerHTML = "door 1";
  document.getElementById('button2') .innerHTML = "door 2";
  document.getElementById('button3') .innerHTML = "door 3";
  document.getElementById('button4') .innerHTML = "door 4";
}
