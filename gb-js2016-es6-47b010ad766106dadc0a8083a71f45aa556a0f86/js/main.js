'use strict';

class Main {
  static createConsole(width, height) {
    this.places = [];
    
    let container = document.body.appendChild(document.createElement('div'));
    container.style.width = width * 10 + 'px';
    container.style.height = height * 15 + 'px';
    container.style.outline = '1px solid black';
    container.style.background = 'black';
    document.body.appendChild(container);
    
    for (let x = 0; x < width; x++) {
      this.places[x] = [];
      for (let y = 0; y < height; y++) {
        let place = document.createElement('span');
        place.className = 'place';
        place.style.left = 10 * x + 'px';
        place.style.top = 15 * y + 'px';
        place.style.color = 'white';
        this.places[x][y] = place;
        container.appendChild(this.places[x][y]);
      }
    }
  }
  
  static writeSymbol(x, y, char) {
    this.places[x][y].innerText = char[0];
  }
}