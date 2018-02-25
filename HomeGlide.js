										/////////////////////////////
										//////////MrGuzior///////////
										///////////2018//////////////

										
										// Getting the information
		let glideRacio = 0;

		function changeGlider(event){
			glideRacio=event.value;
		}

		let glideHeight = 0;

		function heightGlider(event){
			glideHeight=event.value;
		}

		let glideDistance = 0;

		function distanceGlider(event){
			glideDistance=event.value;
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
			return homeHeight.toFixed(0)+"m";
		}
										//Showing results
		function result(){
		let result = document.getElementById("result")
		result.innerHTML = homeComing(glideRacio, glideHeight, glideDistance, result, homeHeight);
		}