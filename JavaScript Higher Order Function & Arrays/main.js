const companies = [
	{name: "company one", category:"Finance" ,start: 1981, end: 2003},	
	{name: "company two", category:"Retail" ,start: 1992, end: 2008},	
	{name: "company Three", category:"Auto" ,start: 1989, end: 2007},	
	{name: "company four", category:"Finance" ,start: 2009, end: 2014},	
	{name: "company five", category:"Technology" ,start: 1987, end: 1996},	
	{name: "company six", category:"Retail" ,start: 1986, end: 2017},	
	{name: "company seven", category:"Finance" ,start: 2011, end: 2016}	
];

const ages = [33,12,20,16,5,54,21,44,61,13,15,45,25,63,32];

//forEach

// for(let i =0; i < companies.length;i++) {
// 	console.log(companies[i]);
// }

// companies.forEach(function(company, index,companies))
// companies.forEach(function(company) {
// 	console.log(company.name);
// });

//filter

//get 21 and older

// let canDrink = [];
// for (let i = 0;i<ages.length;i++) {
// 	if(ages[i] >= 21) {
// 		canDrink.push(ages[i]);
// 	}
// }

// const canDrink = ages.filter(function(age){
// 	if(age >= 21) {
// 		return true;
// 	}
// });

// const canDrink = ages.filter(age => age >= 21);
// console.log(canDrink);

// filter retail companies 

// const retailCompanies = companies.filter(function(company){
// 	if(company.category === 'Retail') {
// 		return true;
// 	}

// });

// const retailCompanies = companies.filter(company => company.category === 'Retail');


// const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start <1990));
// const lastedCompanies = companies.filter(company => (company.end - company.start >= 10));

// console.log(lastedCompanies);


//map

//create array of company name

// const companyNames = companies.map(function(company){
// 	return company.name;
// });

// const test = companies.map(function(company){
// 	return `${company.name} [${company.start} - ${company.end}]`;
// });

// const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}] `);

// const squareroot = ages.map(age => Math.sqrt(age));

// const square = ages.map(age => Math.pow(age,2)); 

// const squareroot = ages
// .map(age => Math.sqrt(age))
// .map(age => Math.pow(age,2)); 

// console.log(squareroot);

//sort
// const sortedCompanies = companies.sort(function(c1, c2){
//  if(c1.start > c2.start) {
//  	return 1;
//  }
//  else {
//  	return -1;
//  }
// });

// const sortedCompanies = companies.sort((a,b) => (a.start > b.start ? 1 :-1))

// console.log(sortedCompanies);


//sort ages
// const sortAges = ages.sort((a,b) => b - a);
// console.log(sortAges);


//reduce

// let ageSum = 0;
// for(let i = 0; i<ages.length;i++){
// 	ageSum += ages[i];
// }

// const ageSum = ages.reduce(function(total,age){
// 	return total + age;
// },0);

// const ageSum = ages.reduce((total,age) => total + age,0);

// //Get total years for all companies

// const totalYears = companies.reduce(function(total,company){
// 	return total + (company.end - company.start);
// },0);

// const totalYears = companies.reduce((total,company) => total + (company.end-company.start),0);

// console.log(totalYears);

//combine methods 

const combined = ages
.map(age => age * 2)
.filter(age => age >= 40)
.sort((a,b) => a - b)
.reduce((total,age) => total + age);

console.log(combined);

