const grid = document.querySelector('#container');
for (let i = 0; i < 256; i++){
    const divvie = document.createElement('div');
      divvie.classList.add('box');
      grid.appendChild(divvie); 
  }

  // Sets every box background to black, or sketched
  const divs = document.getElementsByClassName('box');
  for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener('mouseover', element => element.currentTarget.classList.toggle('sketched'));
}
