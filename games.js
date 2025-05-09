  // Función para validar si el juego existe o está disponible
    function validarId(id) {
      return id <= 8; // Por ahora solo hay 4 juegos válidos
    }

    // Asignar evento a cada tarjeta
    document.querySelectorAll(".game-card").forEach(card => {
      card.addEventListener("click", () => {
        const id = card.dataset.id;
        if (validarId(id)) {
          window.location.href = `file.html?id=${id}`;
        } else {
          alert("Este juego aún no está disponible.");
        }
      });
    });

