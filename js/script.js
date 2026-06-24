document.querySelector('.search-input').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase().trim();
    const cards = document.querySelectorAll('.card-wrapper .card-item');

    cards.forEach(card => {
        const flowerName = card.querySelector('.card-content h3').textContent.toLowerCase();

        // Verifica se bate com a pesquisa
        if (searchTerm === "" || flowerName.includes(searchTerm)) {
            card.style.display = ""; // Mostra
        } else {
            card.style.display = "none"; // Esconde
        }
    });
});

// ==========================================
// 2. SISTEMA DO POPUP (Modal de Informações)
// ==========================================
const modal = document.getElementById('flower-modal');
const closeButton = document.querySelector('.close-button');
const orderButtons = document.querySelectorAll('.card-item button');

orderButtons.forEach(button => {
    button.addEventListener('click', function() {
        const card = this.closest('.card-item');
        
        document.getElementById('modal-img').src = card.querySelector('img').src;
        document.getElementById('modal-title').textContent = card.querySelector('.card-content h3').textContent;
        document.getElementById('modal-description').textContent = card.querySelector('.card-content p').textContent;

       
        document.getElementById('spec-cientifico').textContent = card.getAttribute('data-cientifico');
        document.getElementById('spec-origem').textContent = card.getAttribute('data-origem');
        document.getElementById('spec-altura').textContent = card.getAttribute('data-altura');
        document.getElementById('spec-epoca').textContent = card.getAttribute('data-epoca');
        document.getElementById('spec-ciclo').textContent = card.getAttribute('data-ciclo');
        document.getElementById('spec-luminosidade').textContent = card.getAttribute('data-luminosidade');
        document.getElementById('spec-toxicidade').textContent = card.getAttribute('data-toxicidade');
        document.getElementById('spec-dificuldade').textContent = card.getAttribute('data-dificuldade');
        document.getElementById('spec-rega').textContent = card.getAttribute('data-rega');
        document.getElementById('spec-significado').textContent = card.getAttribute('data-significado');

        modal.classList.add('active');
    });
});

closeButton.addEventListener('click', () => {
    modal.classList.remove('active');
});

modal.addEventListener('click', (e) => { 
    if (e.target === modal) {
        modal.classList.remove('active'); 
    }
});