// 1. Pegar o formulário e os inputs para o JS
const enviarForm = document.getElementById('form');
// 2. Criar o método de evento para o formulário && envio com prevenção de double-click
enviarForm.addEventListener('submit', function (event) {
  event.preventDefault();
  // 3. Coletar os valores pelo 'id' para armazenar no escopo da função do formulário && popup para confirmar o envio com sucesso
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const tel = document.getElementById('tel').value;
  const text = document.getElementById('text').value;
  const popup = document.getElementById('popup-confirmacao');
  // 4. Se todos os campos foram preenchidos, resetar o formulário e mostrar o popup de confirmacao.
  enviarForm.reset();
  popup.classList.add('popup--exibir');
  setTimeout(function () {
    popup.classList.remove('popup--exibir');
  }, 3000);
}
);
