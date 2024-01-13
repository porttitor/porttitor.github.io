let fontSize = 16;
let isHighContrast = false;

function changeFontSize(change) {
  fontSize += change;
  document.body.style.fontSize = `${fontSize}px`;
}

function toggleContrast() {
  isHighContrast = !isHighContrast;
  const body = document.body;
  
  if (isHighContrast) {
    body.style.backgroundColor = '#000';
    body.style.color = '#fff';
  } else {
    body.style.backgroundColor = '#f4f4f4';
    body.style.color = '#000';
  }
}
