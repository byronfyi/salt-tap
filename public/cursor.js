const customCursor = document.querySelector('.custom-cursor');
const menuLinks = document.querySelectorAll('#menu a');
const menu = document.querySelector('#menu ul');

const moveCursor = (e) => {
  const mouseY = e.clientY - 200;
  const mouseX = e.clientX - 300;
   
  customCursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
}

const handleCursorImage = (e) => {
  customCursor.style.backgroundImage = `url(/${e.target.dataset.image})`;
}

menu.addEventListener('mouseleave', () => {
  customCursor.style.backgroundImage = ``;
})

menuLinks.forEach(link => link.addEventListener('mouseenter', handleCursorImage));

window.addEventListener('mousemove', moveCursor);

