alert("Welcome to my website!");
var userColor = prompt('What is your favorite color?: ');
alert("Great, " + userColor + " is my favorite color too!");


var rentalPerDayDollars = prompt("How much was each rental per day?: ");
var littleMermaidDays = prompt("How many days did you have The Little Mermaid?");
var brotherBearDays = prompt("How many day did you have Brother Bear?");
var herculesDays = prompt("How many days did you have Hercules?");
var totalRentalCost;
totalRentalCost =
    (parseInt(littleMermaidDays)
        + parseInt(brotherBearDays)
        + parseInt(herculesDays))
    * parseInt(rentalPerDayDollars);
alert("You spent $" + totalRentalCost + " on movie rentals!")

var googleHourlyRateDollars = prompt("How much did Google pay per hour?");
var amazonHourlyRateDollars = prompt("How much did Amazon pay per hour?");
var facebookHourlyRateDollars = prompt("How much did Facebook pay per hour?");
var googleHours = prompt("How many hours did you work for Google?");
var amazonHours = prompt("How many hours did you work for Amazon?");
var facebookHours = prompt("How many hours did you work for Facebook?");
var totalPayment;
totalPayment = googleHours * googleHourlyRateDollars;
totalPayment += amazonHours * amazonHourlyRateDollars;
totalPayment += facebookHours * facebookHourlyRateDollars;
alert("In one week, you were paid " + totalPayment);

var classIsNotFull = confirm("Is there room in the class?"); // boolean
var classSchedulesCheck = confirm("Are there no schedule conflicts?"); // boolean
var studentEnrolled = classIsNotFull && classSchedulesCheck;
alert("The student got in if the result is true and he didnt if it is false..." + studentEnrolled);

var numberOfItemsForDiscount = prompt("How many items do you need for the discount?");
var numberOfItems = prompt("How many items do you have?"); // number
var offerIsNotExpired = confirm("Is the offer not expired?"); // boolean
var isPremiumMember = confirm("Are you a premium member?"); // boolean
var productDiscountApplied = offerIsNotExpired && isPremiumMember || (numberOfItems >= numberOfItemsForDiscount);
alert("You got to use the discount if the answer is true..." + productDiscountApplied );
