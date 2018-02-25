										/////////////////////////////
										//////////MrGuzior///////////
										///////////2018//////////////


										// Getting the information
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

										//Creating glider values

/*		let jantarStandard2={
			glideRatio:39;,		//Maximum glide ratio
			optSpeed:97;,		//Best glide speed without ballast
			optSpeed2:123;,		//Best glide speed with ballast
			rateSink:0.77;,		//Rate of sink
		}
		let duoDiscus={
			glideRatio:45;,
			optSpeed:105;,		//Needs correction
			optSpeed2:139;,		//Needs correction
			rateSink:0.58;,
		}
		let ask21={
			glideRatio:34;,
			optSpeed:90;,
			optSpeed2:90;,
			rateSink:0.64;,
		}
		let pilatusB4={
			glideRatio:35;,
			optSpeed:84;,		//Needs correction
			optSpeed2:84;,		//Needs correction
			rateSink:0.63;,
		}
		let ls4={
			glideRatio:39.5;,
			optSpeed:100;,		
			optSpeed2:115;,		//Needs correction
			rateSink:0.61;,
		}
		let asw15={
			glideRatio:37.5;,
			optSpeed:95;,		//Needs correction
			optSpeed2:115;,		//Needs correction
			rateSink:0.59;,	
		}
		let asw19={
			glideRatio:38.5;,
			optSpeed:96;,		//Needs correction
			optSpeed2:118;,		//Needs correction
			rateSink:0.62;,	
		}
		let asw20={
			glideRatio:42.5;,
			optSpeed:100;,		
			optSpeed2:120;,		
			rateSink:0.59;,	
		}
		let dg600={
			glideRatio:45.5;,
			optSpeed:105;,		//Needs correction
			optSpeed2:139;,		//Needs correction
			rateSink:0.56;,	
		}
		let pik20={
			glideRatio:42;,
			optSpeed:99;,		//Needs correction
			optSpeed2:114;,		//Needs correction
			rateSink:0.66;,	
		}
		let ka6={
			glideRatio:32;,
			optSpeed:80;,		
			optSpeed2:80;,		
			rateSink:0.65;,	
		}
		let bergfalke2={
			glideRatio:28;,
			optSpeed:72;,		
			optSpeed2:72;,		
			rateSink:0.72;,	
		}
		let sg38={
			glideRatio:10;,
			optSpeed:52;,		
			optSpeed2:52;,		
			rateSink:1.5;,		//Needs correction
		}
*/

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