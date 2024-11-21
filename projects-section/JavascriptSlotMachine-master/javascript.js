let doing = false;
let spin = [new Audio("res/sounds/spin.mp3"),new Audio("res/sounds/spin.mp3"),new Audio("res/sounds/spin.mp3"),new Audio("res/sounds/spin.mp3"),new Audio("res/sounds/spin.mp3"),new Audio("res/sounds/spin.mp3"),new Audio("res/sounds/spin.mp3")];
let coin = [new Audio("res/sounds/coin.mp3"),new Audio("res/sounds/coin.mp3"),new Audio("res/sounds/coin.mp3")]
let win = new Audio("res/sounds/win.mp3");
let lose = new Audio("res/sounds/lose.mp3");
let audio = false;
let status = document.getElementById("status")
let info = true;
let optionsSection = document.getElementById('options');
let creditSection = document.getElementById('credit');
let creditLeft = 100;
let numberOfSpins = 0;

function doSlot(){
	creditLeft--;
	creditSection.innerHTML = `Credit left: £${creditLeft}`;
	if (doing){return null;}
	doing = true;
	let numChanges = randomInt(1,4)*7;
	let numberSlot1 = numChanges+randomInt(1,7);
	let numberSlot2 = numChanges+2*7+randomInt(1,7);
	let numberSlot3 = numChanges+4*7+randomInt(1,7);

	let i1 = 0;
	let i2 = 0;
	let i3 = 0;
	let sound = 0
	status.innerHTML = `<p id="spinning">SPINNING</p>`
	slot1 = setInterval(spin1, 50);
	slot2 = setInterval(spin2, 50);
	slot3 = setInterval(spin3, 50);
	function spin1(){
		i1++;
		if (i1>=numberSlot1){
			coin[0].play()
			clearInterval(slot1);
			return null;
		}
		slotTile = document.getElementById("slot1");
		if (slotTile.className=="a7"){
			slotTile.className = "a0";
		}
		slotTile.className = "a"+(parseInt(slotTile.className.substring(1))+1)
	}
	function spin2(){
		i2++;
		if (i2>=numberSlot2){
			coin[1].play()
			clearInterval(slot2);
			return null;
		}
		slotTile = document.getElementById("slot2");
		if (slotTile.className=="a7"){
			slotTile.className = "a0";
		}
		slotTile.className = "a"+(parseInt(slotTile.className.substring(1))+1)
	}
	function spin3(){
		i3++;
		if (i3>=numberSlot3){
			coin[2].play()
			clearInterval(slot3);
			testWin();
			return null;
		}
		slotTile = document.getElementById("slot3");
		if (slotTile.className=="a7"){
			slotTile.className = "a0";
		}
		sound++;
		if (sound==spin.length){
			sound=0;
		}
		spin[sound].play();
		slotTile.className = "a"+(parseInt(slotTile.className.substring(1))+1)
	}
}

function testWin(){
	let slot1 = document.getElementById("slot1").className
	let slot2 = document.getElementById("slot2").className
	let slot3 = document.getElementById("slot3").className

	if (((slot1 == slot2 && slot2 == slot3) ||
		(slot1 == slot2 && slot3 == "a7") ||
		(slot1 == slot3 && slot2 == "a7") ||
		(slot2 == slot3 && slot1 == "a7") ||
		(slot1 == slot2 && slot1 == "a7") ||
		(slot1 == slot3 && slot1 == "a7") ||
		(slot2 == slot3 && slot2 == "a7") ) && !(slot1 == slot2 && slot2 == slot3 && slot1=="a7")){
		status.innerHTML = `<p class="spinResult youWon">YOU WON!</p>`;
		win.play();
		creditLeft+=8;
	}else{
		status.innerHTML = `<p class="spinResult youLost">YOU LOST!</p>`
		lose.play();
	}
	creditSection.innerHTML = `Credit left: £${creditLeft}`;
	console.log(++numberOfSpins);
	doing = false;
}

function toggleAudio(){
	if (!audio){
		audio = !audio;
		for (let x of spin){
			x.volume = 0.5;
		}
		for (let x of coin){
			x.volume = 0.5;
		}
		win.volume = 1.0;
		lose.volume = 1.0;
	}else{
		audio = !audio;
		// for (let x of spin){
		// 	x.volume = 0;
		// }
		for (i=0; i<spin.length ;i++) {
			spin[i].volume = 0;
		}
		// for (let x of coin){
		// 	x.volume = 0;
		// }
		for (i=0; i<coin.length ;i++) {
			coin[i].volume = 0;
		}
		win.volume = 0;
		lose.volume = 0;
	}
	document.getElementById("audio").src = "res/icons/audio"+(audio?"On":"Off")+".png";
	
}

function randomInt(min, max){
	return Math.floor((Math.random() * (max-min+1)) + min);
}

optionsSection.addEventListener('click', function () {
	optionsSection.classList.toggle('clicked');
})

//odds calculation
//-----------------
//number of possible combinations = 7*7*7 = 343 combinations
//
// winning combinations:
// 3 of a kind = 6 combinations 
// 2 jokers + 1 fruit = (1 × 1 × 6) + (1 × 6 × 1) + (6 × 1 × 1) = 18 combinations
// 1 joker + 2 equal fruits = 18 combinations
// 
// total winning combinations = 6 + 18 + 18 = 42
// 
// total winning combinations x payoff for 1£ / total possible combinations = (42*8)/343 = 0.979591836734694
// 
// 
// joker 1	1
// joker 2	2
// joker 3	3
// joker 4	4
// joker 5	5
// joker 6	6
// 
// 1 	joker	1
// 2 	joker 	2
// 3	joker	3
// 4	joker	4
// 5	joker	5
// 6	joker	6
// 
// 1 	1	joker
// 2 	2	joker
// 3	3	joker
// 4	4	joker
// 5	5	joker
// 6	6	joker
// 
// 
// 
// 1	joker	joker
// 2	joker	joker
// 3	joker	joker
// 4	joker	joker
// 5	joker	joker
// 6	joker	joker
// 
// joker-1-joker	
// 	joker-2-joker
// 	joker-3-joker
// 	joker-4-joker
// 	joker-5-joker
// 	joker-6-joker
// 
// joker-joker-1
// joker-joker-2
// joker-joker-3
// joker-joker-4
// joker-joker-5
// joker-joker-6