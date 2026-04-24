const body = document.querySelector('body');


for(let i = 1; i < 20; i++){
    const img = document.createElement('img');
    img.src = `portfolio-images/Artboard ${i}.png`;
    body.append(img);
}