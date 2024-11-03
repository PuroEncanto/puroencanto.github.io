$(document).ready(function () {
	
	$('.slider').on('afterChange', function (event, slick, currentSlide) {
        const indicators = $(this).siblings('.slider-indicators').find('.indicator');
        indicators.removeClass('active');
        $(indicators[currentSlide]).addClass('active');
    });
	
  // Initialize slick slider for each product section
  $('#conjuntosSlider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false, // Hide default arrows to use custom ones
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  });

  $('#bombachasSlider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false, // Hide default arrows to use custom ones
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  });
});

// Función para abrir el modal de Bootstrap y generar el enlace de WhatsApp
function openModal(imageSrc, productTitle) {
    var modalImage = document.getElementById('modalImage');
    var modalTitle = document.getElementById('productModalLabel');
    var whatsappLink = document.getElementById('whatsappLink');

    // Número de teléfono de WhatsApp (con el prefijo del país, por ejemplo, para Argentina: +549XXXXXXXXX)
    var phoneNumber = "N";  // Sustituye 'N' por el número de WhatsApp deseado

    // Mensaje por defecto
    var defaultMessage = "Quiero más información sobre " + productTitle;

    // Actualizamos la imagen y el título del modal
    modalImage.src = imageSrc;
    modalTitle.innerHTML = productTitle;

    // Enlace dinámico para abrir WhatsApp con el mensaje predefinido
    var whatsappUrl = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(defaultMessage) + "%20" + encodeURIComponent(imageSrc);
    whatsappLink.href = whatsappUrl;

    // Mostramos el modal
    var myModal = new bootstrap.Modal(document.getElementById('productModal'));
    myModal.show();
}
