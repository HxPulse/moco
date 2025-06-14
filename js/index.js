document.addEventListener('DOMContentLoaded', () => {
  const backgrounds = ['bg3.png', 'bg5.png', 'bg7.png'];
  const chosenBg = backgrounds[Math.floor(Math.random() * backgrounds.length)];     /* Random bg on each reload */
  document.body.style.backgroundImage = `url('../assets/images/backgrounds/${chosenBg}')`;

  const gif = document.getElementById('leftGif');         /* Random gifs */
  const gifs = [
      'assets/images/gifs/heart.gif',
      'assets/images/gifs/happy.gif',
      'assets/images/gifs/like.gif',
      'assets/images/gifs/fire.gif'
    ];
  const randomGif = gifs[Math.floor(Math.random() * gifs.length)];
  function playRandomGif() {
    const randomGif = gifs[Math.floor(Math.random() * gifs.length)];
    gif.style.display = 'block';
    gif.src = ''; // reset to force restart
    setTimeout(() => { gif.src = randomGif;}, 20);
    setTimeout(() => {gif.style.display = 'none';}, 2500);  /* Hide after 2.5s so it doesn't double animation */
  }

  setInterval(playRandomGif, 6000); /* Every X ms play gif */
});
