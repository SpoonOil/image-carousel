class ImageCarousel {
  constructor(node) {
    this.parent = node;
    this.indexDisplay = this.createIndexDisplay();
    this.imageNodes = [...node.querySelectorAll('img')];
    this.indexes = this.imageNodes.length - 1;
    this.currentIndex = 0;
    this.updateDisplay();

  }

  createIndexDisplay() {
    const indexDisplay = document.createElement('p');
    indexDisplay.classList.add('absolute')
    this.parent.prepend(indexDisplay);
    return indexDisplay;
  }

  hideAllImages() {
    this.imageNodes.forEach((image) => {
      image.classList.add('hidden');
    });
  }

  next() {
    this.currentIndex += 1;
    this.updateDisplay();
  }

  updateDisplay() {
    this.indexDisplay.innerText = this.currentIndex;
    this.hideAllImages();
    this.imageNodes[this.currentIndex].classList.remove('hidden');
  }
}

export { ImageCarousel };
