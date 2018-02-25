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

		function homeComing(glideRacio, glideHeight, glideDistance){
			homeHeight = 0;
			homeHeight = glideRacio*(glideHeight/1000);
			if(homeHeight > glideDistance){
				homeHeight = glideDistance - homeHeight;
				homeHeight = homeHeight * 100;
				console.log("You will make it! "+ homeHeight.toFixed(0)+"m");
				return homeHeight.toFixed(0)+"m";
			}
			else{
				homeHeight = homeHeight - glideDistance;
				homeHeight = (homeHeight * 100) * -1;
			console.log("Not enough height! " + homeHeight.toFixed(0)+"m");
			return homeHeight.toFixed(0)+"m";
		}
		}

		function changeResult(homeComing){
			var result = document.getElementById("result");
			result.innerHTML = homeComing()
		}