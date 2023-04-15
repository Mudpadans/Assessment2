const restaurants = ['Alpha Gyro Grill', 'Atlanta Highway Seafood', 'Atlas Pizza', 'Bluefin Hibachi & Sushi', 'El Sombrero']
let button = document.querySelector('button');

button.addEventListener('click', () => {
    const random = Math.floor(Math.random() * restaurants.length);
    alert(restaurants[random]);
})