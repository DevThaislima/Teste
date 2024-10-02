document.addEventListener("DOMContentLoaded", function () {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    // Função para mostrar o slide atual
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    // Função para ir ao próximo slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    // Inicialize mostrando o primeiro slide
    showSlide(currentSlide);

    // Alterne para o próximo slide automaticamente a cada 5 segundos
    setInterval(nextSlide, 5000);
});
