document.querySelector(".envelope").addEventListener("click", function () {
    this.classList.toggle("fold");
  });
  
  setTimeout(function () {
    document.querySelector(".envelope").classList.add("fold");
  }, 2000);

  document.getElementById('click-me').addEventListener('click', function() {
    const numberOfBubbles = 50; // Change this number to adjust the number of bubbles
    for (let i = 0; i < numberOfBubbles; i++) {
        createBubble();
    }
  });
  
  function createBubble() {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    bubble.style.left = Math.random() * window.innerWidth + 'px';
    bubble.style.top = Math.random() * window.innerHeight + 'px';
    document.querySelector('.bubble-container').appendChild(bubble);
  
    // Remove bubble after animation ends
    bubble.addEventListener('animationend', function() {
      bubble.remove();
    });
  }
  
  