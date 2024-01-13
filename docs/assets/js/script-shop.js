const produtos = document.querySelectorAll('.produto');

produtos.forEach((produto, index) => {
  produto.addEventListener('click', () => {
    produto.focus();
  });

  produto.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
      const nextIndex = (index + 1) % produtos.length;
      produtos[nextIndex].focus();
    } else if (e.key === 'ArrowLeft') {
      const prevIndex = (index - 1 + produtos.length) % produtos.length;
      produtos[prevIndex].focus();
    }
  });
});
