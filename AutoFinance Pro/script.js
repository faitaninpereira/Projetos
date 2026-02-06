let inputName= document.getElementById('inputName')
let btnName= document.getElementById('btnName')
let selectName= document.getElementById('selectName')
let btnRemoveName= document.getElementById('btnRemoveName')
let btnNameGastos= document.getElementById('btnNameGastos')
let selectNameGastos= document.getElementById('selectNameGastos')

let inputValue= document.getElementById('inputValue')
let btnValue= document.getElementById('btnValue')
let selectValue= document.getElementById('selectValue')
let btnRemoveValue= document.getElementById('btnRemoveValue')
let btnValueGastos= document.getElementById('btnValueGastos')
let selectValueGastos= document.getElementById('selectValueGastos')


function insertName() {
    const num= Number(inputName.value)

    if (inputName.value.trim() === '' || !isNaN(num)) {
        alert('Insert a name')
        return
    }

    let item= document.createElement('option')
    item.text= inputName.value
    selectName.appendChild(item)

    inputName.value=''
    inputName.focus()

    save()
}


function removeName() {
    if (selectName.selectedIndex === -1 && selectNameGastos.selectedIndex === -1) {
        alert('Selected a name')
        return
    }

    if (selectName.selectedIndex !== -1) {
        selectName.remove(selectName.selectedIndex)
    }
        else if (selectName !== -1) {
        selectNameGastos.remove(selectNameGastos.selectedIndex)
        }

    save()
}


function insertNameGastos() {
    const num= Number(inputName.value)

    if (inputName === '' || !isNaN(num)) {
        alert('Insert a name')
        return
    }

    let item= document.createElement('option')
    item.text= inputName.value
    selectNameGastos.appendChild(item)

    inputName.value= ''
    inputName.focus()

    save()
}

function insertValue() {
    if (inputValue.value.trim() === '') {
        alert('Insert a value')
        return
    }

    let item= document.createElement('option')
    item.value= inputValue.value
    item.textContent= inputValue.value
    selectValue.appendChild(item)

    inputValue.value=''
    inputValue.focus()

    save()
}

function removeValue() {
    if (selectValue.selectedIndex === -1 && selectValueGastos.selectedIndex === -1) {
        alert('Selected a value')
        return
    } 
    
        if (selectValue.selectedIndex !== -1) {
            selectValue.remove(selectValue.selectedIndex)
        }
            else if (selectValue !== -1) {
                selectValueGastos.remove(selectValueGastos.selectedIndex)
            }
            
    save()
}


function insertValueGastos() {
    if (inputValue.value.trim() === '') {
        alert('Insert a value')
        return
    }

    let item = document.createElement('option')
    item.value= inputValue.value
    item.textContent= inputValue.value
    selectValueGastos.appendChild(item)

    inputValue.value= ''
    inputValue.focus()

    salvar()
}


function save() {
    let data= {
        names: [],
        values: []
    }

    for (let option of selectName.options) {
        data.names.push(option.textContent)
    }

    for (let option of selectValue.options) {
        data.values.push(option.textContent)
    }

    localStorage.setItem('autoFinanceData', JSON.stringify(data))
}

function load() {
    let data= localStorage.getItem('autoFinanceData')

    if (!data) return

    data = JSON.parse(data)

    data.names.forEach(name => {
        let item= document.createElement('option')
        item.textContent= name
        selectName.appendChild(item)
    })

    data.values.forEach(value => {
        let item= document.createElement('option')
        item.textContent= value
        selectValue.appendChild(item)
    })
}


btnName.addEventListener('click', insertName)
btnValue.addEventListener('click', insertValue)
btnRemoveName.addEventListener('click', removeName)
btnRemoveValue.addEventListener('click', removeValue)
btnNameGastos.addEventListener('click', insertNameGastos)
btnValueGastos.addEventListener('click', insertValueGastos)

load