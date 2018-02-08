function luckyseven(){
	var initialbet=
	document.getElementById("initialbet").value;
	var die1=0;
	var die2=0;
	var diec=0;
    var rollTally = 0;
    var unLuckyCounter = 0;
    var money = initialbet;
    var moneyHeld = [initialbet];
    var loss = 1;
    var win = 4;

    do{
    	rollTally++;
    	die1 = Math.floor(Math.random()*6) + 1;
    	die2 = Math.floor(Math.random()*6) + 1;
    	diec = die1 + die2;
    	if(diec == 7)
    	{
    	    money = money + win;
            var last_element = moneyHeld[moneyHeld.length -1];
            var update = last_element + win;
            moneyHeld.push(update);
        }
        else{
        	money--;
        	var last_element = moneyHeld[moneyHeld.length -1];
        	var update = last_element - loss;
        	moneyHeld.push(update);
        	rollTally++;

        }
        } while(money>0);
        	var totalmax = 0;
        	totalmax = Math.max.apply(Math, moneyHeld);
        	maxHeld = moneyHeld.indexOf(totalmax);
        	if (maxHeld<1) {
        		maxHeld = 0;
        	}

    
   document.getElementById("p1").innerHTML=("<center><br><br><table style=\"width: 100% height: 100%;color:blue;font-weight:600;margin-top:-100px\"><th colspan=\"2\"; class=\"th1\">Results</th><tr><th class=\"th2\">Starting Bet</th><th class=\"th2\">Rs." + initialbet + ".00</th></tr><tr><td>Total Rolls Before Going Broke</td><td>"+ rollTally +"</td></tr><tr><td>Highes Amount Won</td><td>"+totalmax+"</td></tr><tr><td>Roll Count at Highest Amount Held</td><td>"+ maxHeld + "</td></tr></table></center>");
	document.getElementById("p2").innerHTML="Play Again";

} // end of lucky sevens function