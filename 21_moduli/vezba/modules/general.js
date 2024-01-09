let generateImage = src => {
    let img = document.createElement('img');
    img.src = src;
    img.alt = 'Alternativni tekst';
    return img;
}

export {generateImage}