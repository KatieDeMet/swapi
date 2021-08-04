// const { default: axios } = require("axios");

const button = document.querySelector('button');

function clickButton() {
    console.log("Button clicked")
    axios.get('https://swapi.dev/api/planets/2')
    .then(res => {
        const resList = res.data.residents;
        for(let i = 0; i < resList.length; i++) {
            axios.get(resList[i])
            .then(res2 => {
                let name = res2.data.name
                let newElement = document.createElement('h2')
                newElement.innerText = name
                console.log(name)
                document.body.appendChild(newElement)
            })
            .catch(err => console.log(err))
        }
    })
    .catch(err => console.log(err))
}

button.addEventListener('click', clickButton);