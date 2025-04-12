(function() {
    emailjs.init("KY9gRqt35YF_eCCKA");
  })();

  function sendRecoveryCode() {
    var email = document.getElementById('email').value;
    var recoveryCode = Math.floor(10000 + Math.random() * 90000); // Código de 5 dígitos

    var templateParams = {
      email: email,
      recovery_code: recoveryCode
    };

    emailjs.send('service_o28uckr', 'template_4oh2668', templateParams)
      .then(function(response) {
        alert('Código de recuperación enviado correctamente a ' + email);
      }, function(error) {
        alert('Error al enviar el correo electrónico: ' + JSON.stringify(error));
      });
  }