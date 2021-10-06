// 1c, 5c, 10c, 25c, 50c, and $1.

const change = [0.01,0.05,0.1,0.25,0.5,1]

const coins = [1,0.5,0.25,0.1,0.05,0.01]

function getLargest(change){
    return coins.find((x)=>x<=change)
}

function fixChange(ch){
    return Math.round(ch*100)/100
}
function getChange(M,P){
    let ch = M-P

    let coins = []
    let _ch = ch
    while(_ch>0){
        let coin = getLargest(_ch)
        coins.push(coin)
        _ch -= coin
        _ch = fixChange(_ch)
    }

    let coindex = Array(6).fill(0)

    //  = coins.map((c,i)=>change.find((x)=> (x===c) ))
    coins.forEach((coin)=>{
        let i = change.indexOf(coin)
        coindex[i]++;
    })
    console.log(coindex)

    return coindex
}


getChange(5, 0.99) // should return [1,0,0,0,0,4]
getChange(3.14, 1.99) // should return [0,1,1,0,0,1]
getChange(3, 0.01) // should return [4,0,2,1,1,2]
getChange(4, 3.14) // should return [1,0,1,1,1,0]
getChange(0.45, 0.34) // should return [1,0,1,0,0,0]
