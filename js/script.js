function taskOne(){
	console.group("---------- 1 ----------");
	
		var name = "Sasha"; 
		var time = "19:00"; 
		var place = "meeting room"; 
		var event = prompt("Please enter event", "js lesson");	
		console.log(name +" has a "+ event +" today at " + time + " in "+ place);
	
	console.groupEnd();
};

function taskTwo(){
	console.group("---------- 2 ----------");

	var x1 = 4;	
	var y1 = 5;

	var x2 = prompt("Please enter X2", "2");
	var y2 = prompt("Please enter Y2", "3");

	var result = Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2));

	alert("The distance between points A("+x1+","+y1+") and B("+x2+","+y2+") is "+result);
	console.log("The distance between points A("+x1+","+y1+") and B("+x2+","+y2+") is "+result);

	console.groupEnd();
};

function taskThree(){
	console.group("---------- 3 ----------");

	var text = "#";
	var result = "";
	for(var i = 1; i <= 10; i++){			
		console.log(result += text);		
	}
	console.groupEnd();
};

function taskFour(){
	console.group("---------- 4 ----------");	

	var col = 7; 
	var row = 5;
	var text = '# ';
	var result = rowAll = '';

	while(row > 0){
	 	rowAll += text;
	 row--;
	}

	while(col > 0){
	 	col%2 == 0 ? result = text.slice(-1) + rowAll.slice(0, row-1) : result = rowAll;
	 	console.log(result + '\n'); 
	 col--;
	}

	console.groupEnd();
};

function taskFive(){
	console.group("---------- 5 ----------");

	var num = parseInt(Math.random() * 100, 10);		
	var ask; 
	console.log("number is "+ num);
	do{
		ask = prompt('Вгадай номер :)', '0');
		if(ask < num) { 
			alert("Our number is higher, try again"); 
		}
		else if (ask > num) {
			alert("Our number is lower, try again");
		}
		else{	
			ask == num ? alert("You are right, the number is "+ num) : alert("error");
		}	
	} while(ask != num);
	console.log("You are right, the number is "+ num);
	
	console.groupEnd();
};
	