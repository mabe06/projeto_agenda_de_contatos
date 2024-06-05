const form = document.getElementById('form-contato');
const nome = [];
const phone = [];

let linhas = '';


form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-Contato');
    const inputPhone = document.getElementById('numero_Phone');
    let text = inputNomeContato.value.toUpperCase();
    let inputNomeContatoUpperCase = inputNomeContato.value.toUpperCase();
    
    if (phone.includes(inputPhone.value) && nome.map(n => n.toUpperCase()).includes(inputNomeContatoUpperCase)) {
        alert(`Contato: ${inputNomeContato.value} - Telefone: ${inputPhone.value} já foi cadastrado.`);
        }  
        else {
        nome.push(inputNomeContato.value);
        phone.push(inputPhone.value);
    
        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputPhone.value}</td>`;
        linha += '</tr>';
        
        linhas += linha;
    }
        inputNomeContato.value = ''; 
        inputPhone.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}



