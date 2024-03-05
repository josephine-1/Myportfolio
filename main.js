document.addEventListener('DOMContentLoaded', function() {
    const text = document.querySelector('.typed-text');
    const cursor = document.querySelector('.cursor');
  
    const textContent = "Je suis une développeuse d'application et de site web";
    let index = 0;
  
    function type() {
      text.textContent = textContent.substring(0, index);
      index++;
      if (index > textContent.length) {
        index = 0;
      }
      setTimeout(type, 200); // ajustez la vitesse de frappe ici (en millisecondes)
    }
  
    type();
  
    // pour positionner le curseur à côté du texte
    function moveCursor() {
      const textRect = text.getBoundingClientRect();
      cursor.style.top = `${textRect.top}px`;
      cursor.style.left = `${textRect.left + text.offsetWidth}px`;
    }
  
    moveCursor();
  });
  