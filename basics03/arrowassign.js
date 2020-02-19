const places = [{
    visit: 'Kerala',
    suggestion: true,
},{
    visit: 'Banglore',
    suggestion: true,
},{
    visit: 'Rajastan',
    suggestion: false,
},{
    visit: 'Punjab',
    suggestion: false,
},{
    visit: 'jammu',
    suggestion: false,
},{
    visit: 'Goa',
    suggestion: false,
}];

const placeVisited = places.filter((negative) => negative.suggestion === false);
console.log(placeVisited);
