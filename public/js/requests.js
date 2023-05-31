const btEnviar = document.getElementById('btEnviar');
const txtAreaStories = document.getElementById('txtAreaStories');
const dataLoader = new DataLoader();

var dados;

btEnviar.onclick = ()=>{
    enviar();
}

window.onload = ()=>{
    get_stories();
}

async function requisicao(METHOD, URL, dados) {
    return new Promise((resolve, reject) => {
        fetch(URL, {
            method: METHOD,
            headers: {
                "Content-Type": "application/json"
            },
            //request with GET/HEAD method cannot have body.
            body: dados == undefined ? undefined : JSON.stringify(dados)
        })
        .then(function (resposta) {
            resolve(resposta);
        })
        .catch(function (resposta) {
            show_msg('Algo Deu Errado! Tente Novamente mais Tarde.');
            reject(resposta);
        });
    });
}

async function enviar(){
    var stories = txtAreaStories.value;
    
    if(stories.length == 0){
        //Stories Vazio
        btEnviar.className = 'bt-enviar-error';

        show_msg('Você deve digitar um texto para compartilhá-lo');

        setTimeout(()=>{
            btEnviar.className = 'bt-enviar';
        }, 800);
    }else{
        var dados = {
            storiesServer: stories,
        }

        var req = await requisicao('POST', '/reality/cadastrar', dados);;

        if(req.ok){
            show_msg('Stories Enviado');

            txtAreaStories.value = '';
        }

    }
}

async function get_stories(){
    var req = await requisicao('GET', '/reality/listar', undefined);

    if(req.ok){
        dados = await req.json();

        // ./dataLoader.js
        dataLoader.realitys(dados);
    }
}