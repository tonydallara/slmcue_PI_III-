// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
var loki = require('lokijs');
var db = new loki('db.json')
var clientes = db.addCollection('clientes');
/*clientes.insert({
    nome:'Jao',
    email:'jao@gmail.com'
});
db.save()*/

function ready(fn) {
    if(document.readyState != 'loading'){
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}
ready(function () {
    document.querySelector('#salvar').addEventListener('click', function(e){
        e.preventDefault();
        let data = {
            nome: document.querySelector('#nome').value,
            cpf: document.querySelector('#cpf').value,
            tel: document.querySelector('#tel').value,
        };
        /*console.log(data);*/
        clientes.insert(data);
        db.save();
        alert('Salvo com sucesso');
        document.querySelector('#cadastro-cliente').reset()
    })
})