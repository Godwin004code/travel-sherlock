const data = [
    {
        id: 1,
        name: 'Grass',
    }, 
    {
        id: 2,
        name: 'Fire',
    },
    {
        id: 3,
        name: 'Sun',
    },
    {
        id: 4,
        name: 'Sky',
    },
    {
        id: 5,
        name: 'Cloth',
    },
]

const container = document.getElementById('container')
//const box = document.getElementById('box')
const title = document.getElementById('name')

data.forEach((item) => {
   
   const box = document.createElement('div')
   box.innerText = item.name
   box.setAttribute('class', `${item.name.toLowerCase()} box`)
   container.appendChild(box)
   console.log(box);
})