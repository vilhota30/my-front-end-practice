const imageNames = ['photo1.jpg', 'photo2..jpg', 'photo3..jpg', 'photo4..jpg', 'photo5.jpg', 'photo6.jpg', 'photo7.jpg', 'photo8.jpg', 'photo9.jpg'];

const randomImageName = imageNames[Math.floor(Math.random() * imageNames.length)];

const imagePath = `../assets/${randomImageName}`;

const image = document.getElementById('image');

image.src = imagePath;
image.className = 'randomPhoto';
image.style.width = '300px';
image.style.height = '288px';
