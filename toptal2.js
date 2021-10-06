

function getNeighbours({row,col,rows,cols}){
    let nghbrs = [ [-1,-1],[0,-1],[1,-1] , [-1,0],[1,0] , [-1,1],[0,1],[1,1] ]
    
    let res = []
    nghbrs.forEach(ix=>{
        res.push({ x: row+ix[1], y: col+ix[0] })
    })
    
    res = res.filter((ix)=> (ix.x>=0) && (ix.x<cols) && (ix.y>=0) && (ix.y<=rows) )
    console.log(res)
    return res;
}

function minesweeper(input){

    const matrix = input.map((row)=>row.split(''))
    console.log({input,matrix})

    // [row][col]

    for(let r=0;r<matrix.length;r++){
        let row = matrix[r]
        for(let c=0;c<row.length;c++){
            getNeighbours({row: r, col: c, cols: row.length, rows: matrix.length })
            
        }
    }
}

minesweeper(["XOO", "OOO", "XXO"]) 
const test1 = ["XOOXXXOO", "OOOOXOXX", "XXOXXOOO", "OXOOOXXX", "OOXXXXOX", "XOXXXOXO", "OOOXOXOX", "XOXXOXOX"]
// minesweeper(test1)