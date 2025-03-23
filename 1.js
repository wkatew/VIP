document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем отправку формы по умолчанию

    const form = event.target;
    const formData = new FormData(form);
    const formMessage = document.getElementById('form-message');

    fetch('YOUR_FORM_SUBMISSION_URL', { // Замените на URL для отправки данных формы (например, обработчик на сервере)
        method: 'POST',
        body: formData,
    })
    .then(response => {
        if (response.ok) {
            formMessage.textContent = 'Спасибо! Ваше сообщение отправлено.';
            formMessage.style.color = 'green';
            form.reset(); // Очищаем форму
        } else {
            formMessage.textContent = 'Произошла ошибка. Попробуйте еще раз позже.';
            formMessage.style.color = 'red';
        }
    })
    .catch(error => {
        console.error('Ошибка:', error);
        formMessage.textContent = 'Произошла ошибка. Попробуйте еще раз позже.';
        formMessage.style.color = 'red';
    });
});
function changeImage(form) {
    form.pic.src = form.imagename.value;
}

const images = document.querySelectorAll('.gallery-images img');
const modal = document.createElement('div');
modal.classList.add('modal');

let currentImage;

images.forEach((image, index) => {
  image.addEventListener('click', () => {
    currentImage = index + 1;
    modal.innerHTML = `
      <div class="modal-background"></div>
      <div class="modal-image">
        <img src="${image.src}" alt="${image.alt}">
        <button class="modal-close">&times;</button>
        <div class="modal-counter">${currentImage}/${images.length}</div>
      </div>
    `;

    document.body.appendChild(modal);

    modal.querySelector('.modal-background').addEventListener('click', closeModal);
    modal.querySelector('.modal-close').addEventListener('click', closeModal);
  });
});

function closeModal() {
  modal.style.display = 'none';
}

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeModal();
  }
});