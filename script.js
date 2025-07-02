document.getElementById('formCompra').addEventListener('submit', function(e) {
  e.preventDefault();

  const nome = e.target.nome.value;
  const email = e.target.email.value;
  const telefone = e.target.telefone.value;
  const plano = e.target.plano.value;
  const pagamento = e.target.pagamento.value;

  const msg = document.getElementById('mensagem');

  if (pagamento === 'pix') {
    msg.innerHTML = `
      <p><strong>Olá ${nome}!</strong><br>Você escolheu o plano <strong>${plano.toUpperCase()}</strong> com pagamento via <strong>PIX</strong>.</p>
      <p>Use a chave PIX: <strong>tvmegaplus@pix.com.br</strong></p>
      <p>Após o pagamento, envie o comprovante para nosso WhatsApp: (11) 99999-9999</p>
    `;
  } else {
    msg.innerHTML = `
      <p><strong>Olá ${nome}!</strong><br>Você escolheu o plano <strong>${plano.toUpperCase()}</strong> com pagamento via <strong>Cartão de Crédito</strong>.</p>
      <p>Estamos redirecionando para o ambiente seguro de pagamento...</p>
    `;
  }

  e.target.reset();
});