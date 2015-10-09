// library fine exercise
//
// max volz 10-9-15

var rentalCost = function(f){
	// i is dates
	// a is actual return date
	// e is expected return date
	var i = f.split("\n"),
		a = i[0].split(" "),
		e = i[1].split(" "),
		aY = parseInt(a[2]),
		eY = parseInt(e[2]);

	console.log("aY: " + aY + " eY: " + eY);
	if(aY <= eY){
		var aM = parseInt(a[1]),
			eM = parseInt(e[1]);

		console.log("year np");
		if(aM >= eM){
			var aD = parseInt(a[0]),
				aM = parseInt(e[0]);
				
			console.log("month np")
			if(aD <= aM){
				console.log("day np");
				return 0;
			}
			else{
				return ((aD - aM)*15);
			}

		}	
		else{return ((eM - aM)*500)};	
	}	
	else{return 10000};
}
console.log("Head Librarian says " 
	+ rentalCost("2 6 2016\n6 6 2015") 
	+ "hackos, please");
console.log("Head Librarian says " 
	+ rentalCost("9 4 2015\n6 6 2015") 
	+ "hackos, please");
console.log("Head Librarian says " 
	+ rentalCost("9 6 2015\n6 6 2015") 
	+ "hackos, please");
console.log("Head Librarian says " 
	+ rentalCost("3 6 2015\n6 6 2015") 
	+ "hackos, please");
