
//document.write('<h2>Algorithm</h2>')

let count = 0

function naivaString(main=[], sub=[]) {
    let count = 0
    for(let i = 0; i < main.length; i++) {
        for(let j = 0; j < sub.length; j++) {
            if(sub[j] !== main[i+j]) {}
        }
    }
}

naivaString(['godwin'], ['win'])