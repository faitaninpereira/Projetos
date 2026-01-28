let btnAddWa= document.getElementById('btnWater')
let btnRemoveWa= document.getElementById('btnRemoveWa')
let btnConcludeWa= document.getElementById('btnConcludeWa')
let listaW= document.getElementById('listaW')
let msgW= document.getElementById('msgW')

let btnAddCo= document.getElementById('btnCoffee')
let btnRemoveCo= document.getElementById('btnRemoveCo')
let btnConcludeCo= document.getElementById('btnConcludeCo')
let listaC= document.getElementById('listaC')
let msgC= document.getElementById('msgC')

let btnAddRe= document.getElementById('btnRefrigerator')
let btnRemoveRe= document.getElementById('btnRemoveRe')
let btnConcludeRe= document.getElementById('btnConcludeRe')
let listaR= document.getElementById('listaR')
let msgR= document.getElementById('msgR')

let btnAddVi= document.getElementById('btnVitamins')
let btnRemoveVi= document.getElementById('btnRemoveVi')
let btnConcludeVi= document.getElementById('btnConcludeVi')
let listaV= document.getElementById('listaV')
let msgV= document.getElementById('msgV')



function addWa() {
    let input= document.getElementById('water')
    let water= Number(input.value)

        if (isNaN(water) || water <= 0) {
        alert('Insira um valor válido')
        input.value= ''
        input.focus()
        return
        }

    let item= document.createElement('option')
    item.textContent = water + 'ml'
    listaW.appendChild(item)

        input.value=''
        input.focus()

        salvar ('water', listaW)
}

function remWa(){

    if (listaW.selectedIndex === -1) {
        alert('Favor selecionar uma item da lista')
        return
    }

    listaW.remove(listaW.selectedIndex)

    salvar ('water', listaW)
}

function concWa() {
    let soma= 0

    for (let i= 0; i < listaW.length; i++) {

        let texto= listaW.options[i].text
        let valor= Number(texto.replace('ml', ''))
        
        soma += valor
    }
        
    msgW.innerHTML= `Total de água: ${soma/1000} L`
}







function addCo() {
    let input= document.getElementById('coffee')
    let coffee= Number(input.value)

        if (isNaN(coffee) || coffee <= 0) {
        alert('Insira um valor válido')
        input.value= ''
        input.focus()
        return
    }

    let item= document.createElement('option')
    item.textContent = coffee + 'ml'
    listaC.appendChild(item)

    input.value= ''
    input.focus()

    salvar ('coffee', listaC)
}


function remCo() {
    
    if (listaC.selectedIndex === -1) {
        alert('Favor selecionar uma item da lista')
        return
    }

    listaC.remove(listaC.selectedIndex)

    salvar ('coffee', listaC)
}


function concCo() {
    let soma= 0

    for (let i= 0; i < listaC.length; i++) {
        

        let texto= listaC.options[i].text
        let valor= Number(texto.replace('ml', ''))

        soma += valor
    }
    msgC.innerHTML= `Total de café: ${soma/1000} L`
}








function addRe() {
    let input= document.getElementById('refrigerator')
    let refrigerator= Number(input.value)

        if (isNaN(refrigerator) || refrigerator <= 0) {
        alert('Insira um valor válido')
        input.value= ''
        input.focus()
        return
    }

    

    let item= document.createElement('option')
    item.textContent= refrigerator + 'ml'
    listaR.appendChild(item)

    input.value= ''
    input.focus()

    salvar ('refrigerator', listaR)
}


function remRe() {
    
    if (listaR.selectedIndex === -1) {
        alert('Favor selecionar uma item da lista')
        return
    }

    listaR.remove(listaR.selectedIndex)

    salvar ('refrigerator', listaR)
}


function concRe() {
    let soma= 0
    
    for (let i= 0; i < listaR.length; i++) {

        let texto= listaR.options[i].text
        let valor= Number(texto.replace('ml', ''))

        soma += valor
    }
    msgR.innerHTML= `Total de refrigerante: ${soma/1000} L`
}








function addVi() {
    let input= document.getElementById('vitamins')
    let vitamins= Number(input.value)

        if (isNaN(vitamins) || vitamins <= 0) {
        alert('Insira um valor válido')
        input.value= ''
        input.focus()
        return
    }
    

    let item= document.createElement('option')
    item.textContent= vitamins + 'ml'
    listaV.appendChild(item)

    input.value= ''
    input.focus()

    salvar('vitamins', listaV)
}


function remVi() {
    if (listaV.selectedIndex === -1){
        alert('Favor selecionar uma item da lista')
        return
    }
    listaV.remove(listaV.selectedIndex)

    salvar('vitamins', listaV)
}


function concVi() {
    let soma= 0
    
    for (let i= 0; i < listaV.length; i++) {

        let texto= listaV.options[i].text
        let valor= Number(texto.replace('ml', ''))

        soma += valor
    }
    msgV.innerHTML= `Total de vitaminas: ${soma/1000} L`
}






function salvar(chave, lista) {
    let dados= []

    for (let i= 0; i < lista.length; i++) {
        
        let texto= lista.options[i].text
        let valor= Number(texto.replace('ml', ''))
        dados.push(valor)
    }
        localStorage.setItem(chave, JSON.stringify(dados))
}


function carregar (chave, lista) {
    let dados= JSON.parse(localStorage.getItem(chave))

    if (!dados) return

    lista.innerHTML= ''

    for (let valor of dados) {

        let item= document.createElement('option')
        item.textContent= valor + 'ml'
        lista.appendChild(item)
    }
}




btnAddWa.addEventListener('click', addWa)
btnRemoveWa.addEventListener('click', remWa)
btnConcludeWa.addEventListener('click', concWa)
water.addEventListener('keydown', function(event){
    if (event.key === 'Enter') {
        addWa()
    }
})

btnAddCo.addEventListener('click', addCo)
btnRemoveCo.addEventListener('click', remCo)
btnConcludeCo.addEventListener('click', concCo)
coffee.addEventListener('keydown', function(event){
    if (event.key === 'Enter') {
        addCo()
    }
})

btnAddRe.addEventListener('click', addRe)
btnRemoveRe.addEventListener('click', remRe)
btnConcludeRe.addEventListener('click', concRe)
refrigerator.addEventListener('keydown', function(event){
    if (event.key === 'Enter') {
        addRe()
    }
})

btnAddVi.addEventListener('click', addVi)
btnRemoveVi.addEventListener('click', remVi)
btnConcludeVi.addEventListener('click', concVi)
vitamins.addEventListener('keydown', function(event){
    if (event.key === 'Enter') {
        addVi()
    }
})



carregar('water', listaW)
carregar('coffee', listaC)
carregar('refrigerator', listaR)
carregar('vitamins', listaV)