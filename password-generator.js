var generator = require('generate-password');
var password=generator.generate({
    length:15,
    numbers:true,
    uppercase:true,





})
console.log(password)