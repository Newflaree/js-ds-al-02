let instructor = {
	firstName: 'kelly',
	isIntructor: true,
	favoriteNumbers: [1,2,3,4]
}

// O(n)
console.log( Object.keys(instructor) );
// O(n)
console.log( Object.entries(instructor) );
// O(1)
console.log( instructor.hasOwnProperty('firstName') );
