const cameras = {
    price: '750',
    brand: 'Nikon',

    // here you can use arrow function, but it'll cause you error
    // "arrow function" is used instead of declaring "function"
    
    desc: function(){
        return `This camera is of the price ${this.price}$`
    }
};

console.log(cameras.desc());

