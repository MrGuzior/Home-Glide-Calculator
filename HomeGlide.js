										/////////////////////////////
										//////////MrGuzior///////////
										///////////2018//////////////


										// Getting the information
import * from "gliderlist.js";

		let glideRatio = 0;

		function changeGlider(event){
			glideRatio=event.value;
		}

		let glideHeight = 0;

		function heightGlider(event){
			glideHeight=event.value;
		}

		let glideDistance = 0;

		function distanceGlider(event){
			glideDistance=event.value;
		}

		let glideSpeed = 0;

		function speedGlider(event){
			glideSpeed=event.value;
		}

		let glideWind = 0;

		function windGlider(event){
			glideWind=event.value;
		}


										//Calculating information

		let homeHeight = 0;
		glideRatio = 38;
		glideHeight = 1500;
		glideDistance =100;


		function homeComing(glideRatio, glideHeight, glideDistance, result, homeHeight){
			homeHeight = 0;
			homeHeight = glideDistance / glideRatio;
			homeHeight = glideHeight-(homeHeight * 1000);
			return homeHeight.toFixed(0)+"m";
		}
										//Showing the results
		function result(){
		let result = document.getElementById("result")
		result.innerHTML = homeComing(glideRatio, glideHeight, glideDistance, result, homeHeight);
		}
