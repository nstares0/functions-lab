function maxOfTwoNumbers(a, b) {
   if (a>b){
   return a    ;
   }
   
   else {
    return b;   
   }
   

    
}

maxOfTwoNumbers(3, 2) ;

// --------------------------------------------------------------------------------------------------------------------

function maxOfThreeNumbers(a, b, c) {

if (a > b && a > c) {
console.log (a);
}

else if (c > b && c > a) {
console.log (c);
}

else if (b > a && b > c) {
	console.log (b);
}

}

maxOfThreeNumbers(4, 5, 6);


// --------------------------------------------------------------------------------------------------------------------

function vowels (b) {
    if (b.indexOf("a" || "e" || "i" || "o" || "u") != -1) {
	return true;
    }


else {
    return false;
}

}
vowels ("a");

// --------------------------------------------------------------------------------------------------------------------
//this needs to take in an array, then add each number in the array, then return the sum
// first find the length (.length)
// have a variable you are adding to
// for (var i = 0; i < {the length of the array}; i++) {
	// i (a + b + c)
	// a needs to be index 0 ; b needs to be index 1; so on
// the number in the array needs to be assinged to a variable. then, the next time the code runs, the 
bat = [ 1, 2,]

function sumArray (bat) {
var sum = 1
	for (var i = 0; i < bat.length; i++) {	
		
		sum *= bat[i]
	};
return sum

};

sumArray(bat)

// --------------------------------------------------------------------------------------------------------------------

bat = [ 1, 2,]

function sumArray (bat) {
var sum = 0
	for (var i = 0; i < bat.length; i++) {	
		
		sum += bat[i]
	};
return sum

};

sumArray(bat)

// --------------------------------------------------------------------------------------------------------------------



