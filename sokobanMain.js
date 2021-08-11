var x;
var y;
// var currentPosition;
// var newPosition;

function createBoard(){

    document.getElementById("gameBoard").innerHTML = null;
    var myBoard = document.getElementById("gameBoard");   
    
    for(var i = 0; i<tileMap01.mapGrid.length;i++)
    {
 
        for(var j = 0; j< tileMap01.mapGrid[i].length;j++)
        {
            
            var div = document.createElement("div");
            div.id = `${i},${j}`;
            div.classList.add("block");

            if(tileMap01.mapGrid[i][j][0] === " ")
            { div.classList.add(Tiles.Space)}
            else if (tileMap01.mapGrid[i][j][0] === "W")
            { div.classList.add(Tiles.Wall)}
            else if (tileMap01.mapGrid[i][j][0] === "P")
            { div.classList.add(Entities.Character)
            //    x = i;
            //    y = j;
            }
            else if (tileMap01.mapGrid[i][j][0] === "G")
            { div.classList.add(Tiles.Goal)}
            else if (tileMap01.mapGrid[i][j][0] === "B")
            { div.classList.add(Entities.Block)}

           
            myBoard.appendChild(div);
        }
     
    }
   
}

createBoard();

document.addEventListener('keydown',HandelpressKey);


function playerMove(fromElement, Toelement)
{
            
    fromElement.classList.remove("entity-player");
    fromElement.classList.add("tile-space");
    Toelement.classList.remove("tile-space");
    Toelement.classList.add("entity-player");    
}

function HandelpressKey(e)
{  
    e.preventDefault();
    player = document.getElementsByClassName("entity-player")[0]
    const [x,y] = player.id.split(",").map(Number)
    console.log(x,y)

    if(e.keyCode == "38" )
    {  
        // let  currentPosition = [x,y];
       
        const fromElement = document.getElementById(`${x},${y}`);
        console.log(fromElement) 
        let newPosition =  [x-1,y]; 
      
        const Toelement = document.getElementById(`${x-1},${y}`);
        console.log(Toelement)
                    
        if(Toelement.classList.contains("tile-space") && !Toelement.classList.contains("tile-wall"))
        {               
            playerMove(fromElement, Toelement);
        }
    }
    else if(e.keyCode == "40")
    {
        
        let  currentPosition = [x,y];
       
        console.log(currentPosition);
       const  fromElement = document.getElementById(`${x},${y}`);
        console.log(fromElement) 
        let newPosition =  [x+1,y]; 
      
        const Toelement = document.getElementById(`${x+1},${y}`);
        console.log(Toelement)
                    
        if(Toelement.classList.contains("tile-space") && !Toelement.classList.contains("tile-wall"))
        {               
            playerMove(fromElement, Toelement);
        }


    }
    else if(e.keyCode == "37")
    {
        let  currentPosition = [x,y];
       
        console.log(currentPosition);
       const  fromElement = document.getElementById(`${x},${y}`);
        console.log(fromElement) 
        let newPosition =  [x,y-1]; 
      
        const Toelement = document.getElementById(`${x},${y-1}`);
        console.log(Toelement)
                    
        if(Toelement.classList.contains("tile-space") && !Toelement.classList.contains("tile-wall"))
        {               
            playerMove(fromElement, Toelement);
        }

    }
    else if(e.keyCode == "39")
    {
        let  currentPosition = [x,y];
       
        console.log(currentPosition);
        const  fromElement = document.getElementById(`${x},${y}`);
         console.log(fromElement) 
         let newPosition =  [x,y+1]; 
       
         const Toelement = document.getElementById(`${x},${y+1}`);
         console.log(Toelement)
                     
         if(Toelement.classList.contains("tile-space") && !Toelement.classList.contains("tile-wall"))
         {               
             playerMove(fromElement, Toelement);
         }
    }
}

