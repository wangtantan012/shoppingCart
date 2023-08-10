
//top btn change country
let wrapper = document.querySelector('.wrapper');
let dropdownBox = document.querySelector('.dropdownbox');
let dropdownMenu = document.querySelector('.dropdownMenu');
let dropdownBoxli1 = document.querySelector('.li1')
let dropdownBoxli2 = document.querySelector('.li2')
console.log(dropdownMenu);
dropdownBox.addEventListener('click', () => {
    dropdownMenu.style.display = 'block';
});
dropdownBoxli1.addEventListener('click', () => {
    dropdownBox.querySelector('span').innerText = 'English';
    dropdownBox.querySelector('img').src = './img/britishFlag.svg.png';
    dropdownMenu.style.display = 'none';
});
dropdownBoxli2.addEventListener('click', () => {
    dropdownBox.querySelector('span').innerText = 'Deutsch';
    dropdownBox.querySelector('img').src = './img/deutschFlag.svg.png';
    dropdownMenu.style.display = 'none';
});

//
