/*Set up the dummy element that all other elements will be based off*/
var container = document.createElement("div");
container.classList.add("color_block");
let colorArea = document.createElement("div");
colorArea.classList.add("color_display");
colorArea.style.backgroundColor = "#FAFA21";
let textArea = document.createElement("div");
textArea.classList.add("color_title");
let plainTitle = document.createElement("p");
plainTitle.classList.add("plaintext");
plainTitle.appendChild(document.createTextNode("[word]") );
let hexTitle = document.createElement("p");
hexTitle.classList.add("hexcode");
hexTitle.appendChild(document.createTextNode("#[word]") );
let linkPart = document.createElement("a");
linkPart.classList.add("def_link");
var theURL = "https://en.wiktionary.org/wiki/";
linkPart.setAttribute("href", theURL);
linkPart.setAttribute("target", "_blank");
linkPart.appendChild(document.createTextNode("Definition") );
textArea.appendChild(plainTitle);
textArea.appendChild(hexTitle);
container.appendChild(colorArea);
container.appendChild(textArea);
container.appendChild(linkPart);

function colorize(name){
	let hexVersion = "#";
	let index = 0;
	while(index < name.length){
		/* because the keys of the hexMapping object are single letters,
		 we can access the values using this simple syntax!
		 */
		let hexValue = hexMapping[name[index] ];
		/* Can't use the default operator because "O" maps to 0.
		 So if we fail to access an appropriate value in the mapping,
		 we just use the letter that was given by the name*/
		if(hexValue == undefined || hexValue == null ){
			hexValue = name[index];
		}
		hexVersion += hexValue;
		++index;
	}
	return hexVersion;
}

function renderColor(givenColor){
	let namedColor = givenColor.toUpperCase();
	let hexColor = colorize(namedColor);
	let newInstance = container.cloneNode(true);
	newInstance.children[0].style.background = hexColor;
	newInstance.children[1].children[0].textContent = namedColor;
		newInstance.children[1].children[1].textContent = hexColor;
	newInstance.children[2].href += givenColor;
	return newInstance;
}

function loadRandom(){
	let targetArea = document.getElementById("display_area");
	let count = 0;
	while(count < 10){
		let currentIndex = Math.floor(Math.random() * cheekyDictionary.length);
		let infinityCounter = 0;
		while(referenceSet[currentIndex]){
			currentIndex = Math.floor(Math.random() * cheekyDictionary.length);
			++infinityCounter;
			if(infinityCounter > cheekyDictionary.length){
				/*console.log("Couldn't find a new random word.");*/
				let availableWord = cheekyDictionary.lastIndexOf(false);
				/*console.log("Look at what index was available: "+availableWord);*/
				if(availableWord > -1){
					currentIndex = availableWord;
				}
				else{
					currentIndex = -1;
					/*Destroy the loading button*/
					document.getElementById("loader").remove();
				}
				break;
			}
		}
		/*console.log("We randomly picked this color: "+cheekyDictionary[currentIndex]+" at index "+currentIndex);*/
		if(currentIndex > -1){
			targetArea.appendChild(renderColor(cheekyDictionary[currentIndex]));
			referenceSet[currentIndex] = true;
			++count;
		}
		else{
			break;
		}
	}
}