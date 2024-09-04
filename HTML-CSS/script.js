(function(){
  emailjs.init("Gud6ydccxW258fzw_"); // Substitua "SUA_CHAVE_PUBLICA" pela sua chave pública do EmailJS
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  emailjs.sendForm('service_tsg9tbl', 'template_ub4gxmc', this)
      .then(function() {
          alert('E-mail enviado com sucesso!');
      }, function(error) {
          alert('Falha ao enviar o e-mail: ' + JSON.stringify(error));
      });
});