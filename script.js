const titulo = document.getElementById('titulo');

const descricao = document.getElementById('descricao');

const btnAdicionar = document.getElementById('btn-adicionar');

const lista = document.getElementById('lista');

const detalheTitulo = document.getElementById('detalhe-titulo');

const detalheDescricao = document.getElementById('detalhe-descricao');

const detalheStatus = document.getElementById('detalhe-status');

const status = document.getElementById('status');

const tarefas = [];

let tarefaEmEdicao = null;

let itemEmEdicao = null;

btnAdicionar.addEventListener('click', function() {
    
    const valorTitulo = titulo.value;

    if (valorTitulo.trim() === '') {
     
        alert('O título é obrigatório');
     
        return;
    
    }

    if (tarefaEmEdicao !== null) {
    
        tarefaEmEdicao.titulo = valorTitulo;
    
        tarefaEmEdicao.descricao = descricao.value;
    
        tarefaEmEdicao.status = status.value;
    
        itemEmEdicao.querySelector('span').textContent = valorTitulo;
        
        tarefaEmEdicao = null;
    
        itemEmEdicao = null;
    
        btnAdicionar.textContent = 'Adicionar';
    
        status.style.display = 'none';

        titulo.value = '';
        
        descricao.value = '';
    
        return;
    }

    const novaTarefa = {
    
        titulo: valorTitulo,
    
        descricao: descricao.value,
    
        status: 'pendente'
    
    };
    
    tarefas.push(novaTarefa);

    const novoItem = document.createElement('li');
    
    const spanTitulo = document.createElement('span');

    spanTitulo.textContent = valorTitulo;

    novoItem.appendChild(spanTitulo);

    const btnExcluir = document.createElement('button');
    
    btnExcluir.textContent = 'Excluir';

    btnExcluir.addEventListener('click', function(evento) {
    
        evento.stopPropagation();

        lista.removeChild(novoItem);

        detalheTitulo.textContent = '';
        
        detalheDescricao.textContent = '';
        
        detalheStatus.textContent = '';
    
    });

    const btnEditar = document.createElement('button');

    btnEditar.textContent = 'Editar';

    btnEditar.addEventListener('click', function(evento) {
     
        evento.stopPropagation();
     
        tarefaEmEdicao = novaTarefa;
     
        itemEmEdicao = novoItem;
     
        titulo.value = novaTarefa.titulo;
     
        descricao.value = novaTarefa.descricao;
     
        status.value = novaTarefa.status;
     
        status.style.display = 'block';
     
        btnAdicionar.textContent = 'Salvar';
    
    });

novoItem.appendChild(btnEditar);
    
    novoItem.appendChild(btnExcluir);
    
    lista.appendChild(novoItem);

    novoItem.addEventListener('click', function() {
        
        detalheTitulo.textContent = novaTarefa.titulo;

        detalheDescricao.textContent = novaTarefa.descricao;

        detalheStatus.textContent = novaTarefa.status;

    });
    
    titulo.value = '';

    descricao.value = '';

})
