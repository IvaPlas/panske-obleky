console.log('funguju');

const zmenaBarvy = () => {
  const svgElm = document.querySelector('svg');
  svgElm.style.color = 'white';
};

const bilaKosile = document.querySelector('.bila');
bilaKosile.addEventListener('click', zmenaBarvy);
