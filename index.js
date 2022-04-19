console.log('funguju');

const zmenaBarvy = () => {
  const svgElm = document.querySelector('#product-image');
  svgElm.style.fill = 'white';
};

const bilaKosile = document.querySelector('.white');
bilaKosile.addEventListener('click', zmenaBarvy);
