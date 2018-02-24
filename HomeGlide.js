function glideR(distance, height, modell){
		let glideRacio = modell * height;
		

		if (glideRacio>= distance) {
			console.log("Go home!");
					}
		else if (glideRacio< distance) {
			console.log("No Home!");
		}
}
glideR(79, 2, 40);



