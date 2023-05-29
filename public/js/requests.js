const btEnviar = document.getElementById('btEnviar');
const txtAreaStories = document.getElementById('txtAreaStories');

btEnviar.onclick = ()=>{
    enviar();
}

async function requisicao(METHOD, URL, dados) {
    return new Promise((resolve, reject) => {
        fetch(URL, {
        method: METHOD,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dados)
        })
        .then(function (resposta) {
            resolve(resposta);
        })
        .catch(function (resposta) {
            reject(resposta);
        });
    });
}

async function enviar(){
    var stories = txtAreaStories.innerText;
    
    if(stories.length == 0){
        //Stories Vazio
        
    }else{
        var dados = {
            storiesServer: stories,
        }

        var req = requisicao('POST', '/reality/cadastrar', dados);


    }
}