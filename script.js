const pokeInput = document.querySelector('#pokeName');
const NamePokemon = document.querySelector('.namePokemon');
const imgPokemon = document.querySelector('.left-display img');
const idPokemon = document.querySelector('.left-display b');

const type1 = document.querySelector('.type-1');
const type2 = document.querySelector('.type-2');
const ability = document.querySelector('.name-ability');

pokeInput.addEventListener('change', function(){
    const promiseResposta = fetch(`https://pokeapi.co/api/v2/pokemon/${pokeInput.value}/`);

    promiseResposta.then(function(resposta){
        if(!resposta.ok){
            console.log('ERRO');
            return;
        }
        const promiseBody = resposta.json();

        promiseBody.then(function(body){
            NamePokemon.textContent = body.name;
            imgPokemon.src = body.sprites.front_default
            idPokemon.textContent = body.id;
            ability.textContent = body.abilities[0].ability.name

            type1.textContent = body.types[0].type.name;
            type1.classList.remove('escondido');
            if(body.types[1]){
                type2.textContent = body.types[1].type.name;
                type2.classList.remove('escondido');
            }else{
                type2.classList.add('escondido');
            }
        })

    })
})