const titulo = document.getElementById('titulo');

const descricao = document.getElementById('descricao');

const btnAdicionar = document.getElementById('btn-adicionar');

const lista = document.getElementById('lista');

const detalheTitulo = document.getElementById('detalhe-titulo');

const detalheDescricao = document.getElementById('detalhe-descricao');

const detalheStatus = document.getElementById('detalhe-status');

const tarefas = [];

btnAdicionar.addEventListener('click', function() {
    
    const valorTitulo = titulo.value;

    if (valorTitulo.trim() === '') {
     
        alert('O título é obrigatório');
     
        return;
    
    }

    const novaTarefa = {
    
        titulo: valorTitulo,
    
        descricao: descricao.value,
    
        status: 'pendente'
    
    };
    
    tarefas.push(novaTarefa);

    const novoItem = document.createElement('li');
    
    novoItem.textContent = valorTitulo;
    
    lista.appendChild(novoItem);

    novoItem.addEventListener('click', function() {
        
        detalheTitulo.textContent = novaTarefa.titulo;

        detalheDescricao.textContent = novaTarefa.descricao;

        detalheStatus.textContent = novaTarefa.status;

    });
    
    titulo.value = '';

    descricao.value = '';

})
