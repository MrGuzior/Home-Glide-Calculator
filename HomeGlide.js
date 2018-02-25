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
		let glideRacio = 0;

		function changeGlider(event){
			glideRacio=event.value;
			console.log(glideRacio);
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

		function result(){
		let result = document.getElementById("result")
		result.innerHTML = homeComing(glideRacio, glideHeight, glideDistance, result, homeHeight);
		}