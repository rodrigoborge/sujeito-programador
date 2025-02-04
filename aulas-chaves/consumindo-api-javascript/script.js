// URL: https://sujeitoprogramador.com/rn-api/?api=posts

let listElement = document.querySelector('#app');

let posts = [];

function nutriApp() {
    fetch('https://sujeitoprogramador.com/rn-api/?api=posts')
        .then((resposta) => resposta.json())
        .then((json) => {
            posts = json;

            posts.map((item) => {
                console.log(item.titulo);
            });
        })
        .catch(() => {
            console.log('Erro ao buscar dados');
        });
}

nutriApp();
