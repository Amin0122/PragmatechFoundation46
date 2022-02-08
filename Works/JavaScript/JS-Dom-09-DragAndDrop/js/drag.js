const ball = document.querySelector('.ball');
const empties = document.querySelectorAll('.box');

ball.addEventListener('dragstart', dragStart);
ball.addEventListener('dragend', dragEnd);

for (const box of empties) {
  box.addEventListener('dragover', dragOver);
  box.addEventListener('dragenter', dragEnter);
  box.addEventListener('dragleave', dragLeave);
  box.addEventListener('drop', dragDrop);
}


function dragStart() {
  this.className += ' hold';
  setTimeout(() => (this.className = 'invisible'), 0);
}

function dragEnd() {
  this.className = 'ball';
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.className += ' hovered';
}

function dragLeave() {
  this.className = 'box';
}

function dragDrop() {
  this.className = 'box';
  this.append(ball);
}
