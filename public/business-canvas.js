// business-canvas.js
const canvas = document.getElementById('business-canvas');
const context = canvas.getContext('2d');

const image = new Image();
image.src = 'path_to_image_from_another_page.jpg';

image.onload = () => {
    canvas.width = image.width;
    canvas.height = image.height;
    context.drawImage(image, 0, 0);
};