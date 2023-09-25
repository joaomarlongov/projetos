function buscarCEP(){
    let input = document.getElementById('input').value;

    const ajax = new XMLHttpRequest();
    ajax.open('GET', `https://viacep.com.br/ws/${input}/json/`);
    ajax.send();

    ajax.onload = function (){
        
        let obj = JSON.parse(this.responseText)

        let logradouro = obj.logradouro
        let bairro = obj.bairro
        let localidade = obj.localidade
        let uf = obj.uf
        let ddd = obj.ddd

        document.getElementById('logradouro').innerHTML = `Logradouro: ` + obj.logradouro
        document.getElementById('bairro').innerHTML = `Bairro: ` + obj.bairro
        document.getElementById('cidade').innerHTML = `Cidade: ` + obj.localidade
        document.getElementById('uf').innerHTML = `UF: ` + obj.uf
        document.getElementById('ddd').innerHTML = `DDD: ` + obj.ddd 

    }

}

/* Bairro: ${obj.bairro}
Cidade: ${obj.localidade}
UF: ${obj.uf} 
DDD: ${obj.ddd} */