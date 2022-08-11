/* .js files add interaction to your website */
var displayScript = document.getElementById("scriptReturned");
var scriptButton = document.getElementById("scriptButton");

if (scriptButton) {
  scriptButton.addEventListener("click", generateScript);
}

function generateScript () {
  var name = document.getElementById("name").value;
  var location = document.getElementById("location").value;

  displayScript.innerHTML = "Hello, my name is " + name + " and I live in " + location + ". I am sending this letter regarding the climate crisis. If we do not take action now, global temperatures will only continue to rise and put millions of others at risk of potential respiratory issues and natural disasters. Environments are being destroyed at the cost of rising industries, and nothing is being done to stop them. I am asking you to do something about the gigatons of carbon that are being emitted before it is too late to take any further action. Thank you.";
}

var factList = [
 "We lose about 1.2 trillion tons of ice each year due to global warming.", 
 "If we were to cut off all global net emissions, global warming would eventually reverse over a very long period of time.",
 "In 2019, 302.4 billion work hours were lost to excessive heat.",
 "Today, CO2 levels stand at 420 ppm (parts per million), which is its highest in 20 million years.",
 "Air pollution kills more than 9 million people per year."
];

var fact = document.getElementById("fact");
var factButton = document.getElementById("factButton");
var count = 0;

factButton.addEventListener("click", displayFact);

function displayFact () {
  fact.innerHTML = factList[count];
  count ++;
  if (count == factList.length){
    count = 0;
  }
}
