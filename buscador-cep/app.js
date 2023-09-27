function buscarCEP() {
  let input = document.getElementById("input").value
  let btnAdd = document.getElementById("btn-add")
  let cepOut = document.getElementById("cepOut")

  const ajax = new XMLHttpRequest()
  ajax.open("GET", `https://viacep.com.br/ws/${input}/json/`)
  ajax.send()

  ajax.onload = function () {
    let obj = JSON.parse(this.responseText)

    let logradouro = obj.logradouro
    let bairro = obj.bairro
    let localidade = obj.localidade
    let uf = obj.uf
    let ddd = obj.ddd

    let cepOut = document.getElementById("cepOut")

    cepOut.innerHTML = `
    <p id="logradouro">Logradouro: ${logradouro}</p>
    <p id="bairro">Bairro: ${bairro}</p>
    <p id="cidade">Cidade: ${localidade}</p>
    <p id="uf">UF: ${uf}</p>
    <p id="ddd">DDD: ${ddd}</p>
    `
  }
}

function apagar() {
  let cepOut = document.getElementById("cepOut")
  cepOut.innerHTML = ``

  input.value = ""
}

input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault()
    btnAdd.click()
  }
})

/* Bairro: ${obj.bairro}
Cidade: ${obj.localidade}
UF: ${obj.uf} 
DDD: ${obj.ddd} */
