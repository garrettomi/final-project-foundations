'use strict'
// Please don't delete the 'use strict' line above

let imgArray = [
    'beer1.jpg',
    'beer2.jpg',
    'beer3.jpg',
    'beer4.jpg',
    'beer5.jpg',
    'beer6.jpg',
]

function getRandomImage () {
    let randomIndex = Math.floor(Math.random() * imgArray.length);
    let selectedImage = imgArray[randomIndex];
    document.getElementById('image_shower').src = `./img/${selectedImage}`

}