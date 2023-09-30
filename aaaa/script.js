const imagens = document.querySelectorAll(".grid-item img");
imagens.forEach((img, index) => {
  img.src = `https://source.unsplash.com/400x400/?dog/${index}`;
});
