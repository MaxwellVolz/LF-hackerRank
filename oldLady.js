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

	if(aY > eY){
		return 10000;
	}
	else{
		var aM = parseInt(a[1]),
			eM = parseInt(e[1]);
		
		if(aM > eM){
			return ((aM - eM)*500);
		}
		else if(aM == eM){
			var aD = parseInt(a[0]),
				eD = parseInt(e[0]);
		
			if(aD > eD){
				return ((aD - eD)*15);
			}
			else{
				return 0;
			} 

		}
		else{
			return 0;
		}
	}	
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
	+ rentalCost("2 7 1014\n1 1 1014") 
	+ "hackos, please");
