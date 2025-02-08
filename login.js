document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const modalMessage = document.getElementById('modalMessage');
    const modalButton = document.getElementById('modalButton');
    const options = document.querySelectorAll('.option-btn');

    const showModal = (message, buttonText, isAngry = false) => {
        modalMessage.textContent = message;
        modalButton.textContent = buttonText;
        modal.classList.remove('hidden');
        setTimeout(() => modal.classList.add('show'), 10);

        if (isAngry) {
            modalButton.addEventListener('click', () => {
                modal.classList.remove('show');
                setTimeout(() => modal.classList.add('hidden'), 300);
            }, { once: true });
        } else {
            modalButton.addEventListener('click', () => {
                window.location.href = 'valentine.html';
            }, { once: true });
        }
    };

    options.forEach(button => {
        button.addEventListener('click', () => {
            const name = button.getAttribute('data-name');
            
            if (name === 'Munchkin') {
                showModal(
                    "That's like my boy! 🥰 Ready for a surprise?",
                    "Show me! 💝"
                );
            } else {
                showModal(
                    "Why are you angry? 😢 Please click the button and try again with your cute name!",
                    "I'll try again 🥺",
                    true
                );
            }
        });
    });

    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
            setTimeout(() => modal.classList.add('hidden'), 300);
        }
    });
});