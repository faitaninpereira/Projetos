const atividade = document.getElementById('atividade')
const select = document.getElementById('select')
const btnAdicionar = document.getElementById('btnAdicionar')
const btnRemover = document.getElementById('btnRemover')
const btnConcluir = document.getElementById('btnConcluir')

/* ======================
   ADICIONAR TAREFA
====================== */
function adicionar() {
    if (atividade.value.trim() === '') {
        alert('Digite uma tarefa válida')
        return
    }

    const item = document.createElement('option')
    item.text = atividade.value
    select.appendChild(item)

    salvar()
    atividade.value = ''
    atividade.focus()
}

/* ======================
   REMOVER TAREFA
====================== */
function remover() {
    if (select.selectedIndex === -1) {
        alert('Selecione uma tarefa para remover')
        return
    }

    select.remove(select.selectedIndex)
    salvar()
}

/* ======================
   CONCLUIR TAREFA
====================== */
function concluir() {
    if (select.selectedIndex === -1) {
        alert('Selecione uma tarefa')
        return
    }

    const item = select.options[select.selectedIndex]
    item.classList.toggle('concluido')
    salvar()
}

/* ======================
   SALVAR NO localStorage
====================== */
function salvar() {
    const tarefas = []

    for (let i = 0; i < select.options.length; i++) {
        tarefas.push({
            texto: select.options[i].text,
            concluida: select.options[i].classList.contains('concluido')
        })
    }

    localStorage.setItem('tarefas', JSON.stringify(tarefas))
}

/* ======================
   CARREGAR DO localStorage
====================== */
function carregar() {
    const dados = localStorage.getItem('tarefas')

    if (dados) {
        const tarefas = JSON.parse(dados)

        tarefas.forEach(tarefa => {
            const item = document.createElement('option')
            item.text = tarefa.texto

            if (tarefa.concluida) {
                item.classList.add('concluido')
            }

            select.appendChild(item)
        })
    }
}

/* ======================
   EVENTOS
====================== */
btnAdicionar.addEventListener('click', adicionar)
btnRemover.addEventListener('click', remover)
btnConcluir.addEventListener('click', concluir)

atividade.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        adicionar()
    }
})

window.onload = carregar
