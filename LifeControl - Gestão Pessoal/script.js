let input= document.getElementById('input') //input

let btnInsertHabits= document.getElementById('btnInsertHabits') //button
let btnInsertHealth= document.getElementById('btnInsertHealth') //button
let btnInsertFinance= document.getElementById('btnInsertFinance') //button
let btnInsertSpiritual= document.getElementById('btnInsertSpiritual') //button
let btnInsertGoals= document.getElementById('btnInsertGoals') //button

let btnRemove= document.getElementById('btnRemove') //button


function Habits(){
    const value= input.value.trim()
    const num= Number(value)

    if (value === ''|| !isNaN(num)) {
        alert('Insira um valor válido')
        return
    }  
        for (let i= 0; i < selectHabits.options.length; i++) {
            if (input.value.trim() == selectHabits.options[i].value) {
                alert('Valor já inserido!')
                return
            }
        } 
        
        let item= document.createElement('option')
        item.text= input.value
        selectHabits.appendChild(item)

    input.value= ''
    input.focus()

}

function Health() {
    const valueStr= input.value.trim() //string limpa
    const valueNum= Number(valueStr) //converte pra Number

    if (valueStr === '' || isNaN(valueNum)) {
        alert('Insira um valor válido')
        return
    }

        for (let i = 0; i < selectHealth.options.length; i++) {
            if (Number(selectHealth.options[i].value) === valueNum) {
            alert('Valor já inserido')
            return
        }
    }

        let item= document.createElement('option')
        item.value= valueNum // valor interno (Number convertido em String)
        item.textContent= valueNum + ' ml' // o que aparece no select
        selectHealth.appendChild(item )

        input.value= '' // limpa input
        input.focus()
}

function Finance() {
    const valueStr= input.value.trim()
    const valueNum= Number(valueStr)
 
    if (valueStr === '' || isNaN(valueNum)) {
        alert('Insira um valor válido')
        return
    }

        for (let i = 0; i < selectFinance.options.length; i++) {
            if (Number(selectFinance.options[i].value) === valueNum) {
            alert('Valor já inserido')
            return
        }
    }

        let item= document.createElement('option')
        item.value= valueNum
        item.textContent= valueNum
        selectFinance.appendChild(item)

    input.value= ''
    input.focus()
}

function Spiritual() {
    const valueStr= input.value.trim()
    const valueNum= Number(valueStr)

    if (valueStr === '' || !isNaN(valueNum)) {
        alert('Inserir um valor válido')
        return
    }

        for (let i = 0; i < selectSpiritual.options.length; i++) {
            if (selectSpiritual.options[i].value === valueStr) {
            alert('Valor já inserido')
            return
        }
    }

    let item= document.createElement('option')
    item.text= input.value
    selectSpiritual.appendChild(item)

    input.value = ''
    input.focus()
}

function Goals() {
    const valueStr= input.value.trim()
    const valueNum= Number(valueStr)

    if (valueStr === '' || !isNaN(valueNum)) {
        alert('Insira um valor válido')
        return
    }

        for (let i = 0; i < selectGoals.options.length; i++) {
            if (selectGoals.options[i].value === valueStr) {
            alert('Valor já inserido')
            return
            }
        }

    let item= document.createElement('option')
    item.text= input.value
    selectGoals.appendChild(item)

    input.value= ''
    input.focus()
}

function Remove() {
    const select= document.querySelectorAll('.select')

    select.forEach(lista => {
        if (select.selectedIndex !== -1) {
        lista.remove(lista.selectedIndex)    
        }
    })
}



btnInsertHabits.addEventListener('click', Habits)
btnInsertHealth.addEventListener('click', Health)
btnInsertFinance.addEventListener('click', Finance)
btnInsertSpiritual.addEventListener('click', Spiritual)
btnInsertGoals.addEventListener('click', Goals)

btnRemove.addEventListener('click', Remove)