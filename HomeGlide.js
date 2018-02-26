<<<<<<< HEAD
/*function glideR(distance, height, modell){
		let glideRacio = modell * height;
		

		if (glideRacio>= distance) {
			console.log("Go home!");
					}
		else if (glideRacio< distance) {
			console.log("No Home!");
		}
}
glideR(79, 2, 40);
*/
										// Getting the information
import * from "gliderlist.js";

		let glideRatio = 0;
=======
										/////////////////////////////
										//////////MrGuzior///////////
										///////////2018//////////////

										
										// Getting the information
>>>>>>> parent of 5c263cb... 1.2.2.2
		let glideRacio = 0;

		function changeGlider(event){
			glideRacio=event.value;
<<<<<<< HEAD
			console.log(glideRacio);
=======
>>>>>>> parent of 5c263cb... 1.2.2.2
		}

		let glideHeight = 0;

		function heightGlider(event){
			glideHeight=event.value;
			console.log(glideHeight);
		}

		let glideDistance = 0;

		function distanceGlider(event){
			glideDistance=event.value;
			console.log(glideDistance);
		}
<<<<<<< HEAD

		let glideSpeed = 0;

		function speedGlider(event){
			glideSpeed=event.value;
		}

		let glideWind = 0;

		function windGlider(event){
			glideWind=event.value;
		}


<<<<<<< HEAD
		function heightGliderReturn(event){
			glideHeightReturn=event.value;
		}



		function distanceGliderReturn(event){
			glideDistanceReturn=event.value;
		}



		function speedGliderReturn(event){
			glideSpeedReturn=event.value;
		}



		function windGliderReturn(event){
			glideWindReturn=event.value;
		}

///
=======
>>>>>>> parent of 5c263cb... 1.2.2.2
=======
>>>>>>> parent of 66a6c2a... 1.2.3.3
										//Calculating information

		let homeHeight = 0;
		glideRacio = 38;
		glideHeight = 1500;
		glideDistance =100;


		function homeComing(glideRacio, glideHeight, glideDistance, result, homeHeight){
			homeHeight = 0;
			homeHeight = glideDistance / glideRacio;
			homeHeight = glideHeight-(homeHeight * 1000);
			console.log(homeHeight.toFixed(0)+"m");
			return homeHeight.toFixed(0)+"m";
		}
<<<<<<< HEAD

		function result(){
		let result = document.getElementById("result")
		result.innerHTML = homeComing(glideRatio, glideHeight, glideDistance, result, homeHeight);
		}
		result.innerHTML = homeComing(glideRacio, glideHeight, glideDistance, result, homeHeight);
		}
=======
										//Showing results
		function result(){
		let result = document.getElementById("result")
		result.innerHTML = homeComing(glideRacio, glideHeight, glideDistance, result, homeHeight);
		}
>>>>>>> parent of 5c263cb... 1.2.2.2
