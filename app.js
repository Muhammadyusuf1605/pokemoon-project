const PokemoonId = document.getElementById('pokemoonId')
const PokemoonImg = document.getElementById('pokemoonImg')
const PokemoonName = document.getElementById('Pokemoon-name')
const TypeEl = document.getElementById('Type')
const Attact = document.getElementById('attact')
const Defense = document.getElementById('defense')
const Speed = document.getElementById('speed')
const ButtonEl = document.getElementById('butEl')


async function Data() {
    const pokemoonId = Math.floor(Math.random() * 100)
    const req = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemoonId}`)
    const que = await req.json()
    console.log(que);
    const image = que.sprites.other.dream_world.front_default
    console.log(image);
    PokemoonId.textContent = que.order
    PokemoonImg.src = image
    PokemoonName.textContent = que.name
    TypeEl.textContent = que.types[0].type.name
    Attact.textContent = que.stats[1].base_stat
    Defense.textContent = que.stats[2].base_stat
    Speed.textContent = que.stats[5].base_stat
}

ButtonEl.addEventListener("click", Data);


