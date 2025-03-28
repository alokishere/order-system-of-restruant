// Project restruant
console.log("welcome to restruant"); 
console.log("what we can do for you")
do {
   var work = prompt("What do you want to do , press 1 for continue or 2 for exit");
 switch(work) {
  case "1":
    console.log("1. Order drinks");
    console.log("2. View menu");
    console.log("3. Sign up for newsletter");
    console.log("4. Check out");
    var action = Number(prompt("Enter 1,2 ,3 or 4 for continue"))
    switch(action) {
       case 1:
        console.log("Ordered drinks , please select your drinks");
        var drink = prompt("Enter your drink type, press 1 for coffee, 2 for tea, 3 for soda");
        switch(drink) {
          case "1":
            console.log("You ordered coffee");
            break;
          case "2":
            console.log("You ordered tea");
            break;
          case "3":
            console.log("You ordered soda");
            break;
          default:
            console.log("Invalid choice");
            continue;
        }
        break;
      case 2:
        console.log("Our menu:");
        console.log("1. Pasta dish");
        console.log("2. Pizza");
        console.log("3. Sandwich");
        var food = Number(prompt("Enter 1,2,3 for continue"))
        switch(food) {
          case 1:
            console.log("You ordered pasta dish");
            break;
          case 2:
            console.log("You ordered pizza");
            break;
          case 3:
            console.log("You ordered sandwich");
            break;
          default:
            console.log("Invalid choice");
            continue;
        }
        break;
      case 3:
        console.log("Sign up for newsletter");
        var email = prompt("Enter your email");
        console.log("Thanks for signing up for our newsletter, you will receive updates soon")
        break;
      case 4:
         console.log("Checking out");
        var total = 0;
        break;
        default:
          console.log("Invalid choice,try again")
          continue;
    }
    break;
  case "2":
    console.log("Thanks for visiting")
    break;
    default:
      console.log("Invalid choice,try again")
      continue;
 }
} while (work === "2");