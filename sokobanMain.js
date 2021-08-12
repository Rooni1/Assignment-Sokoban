function createBoard(){

    document.getElementById("gameBoard").innerHTML = null;
    var myBoard = document.getElementById("gameBoard");   
    
    for(var i = 0; i<tileMap01.mapGrid.length;i++)
    {
 
        for(var j = 0; j< tileMap01.mapGrid[i].length;j++)
        {
            
            var div = document.createElement("div");
            div.id = `${j},${i}`;
            div.classList.add("block");

            if(tileMap01.mapGrid[i][j][0] === " ")
            { div.classList.add(Tiles.Space)}
            else if (tileMap01.mapGrid[i][j][0] === "W")
            { div.classList.add(Tiles.Wall)}
            else if (tileMap01.mapGrid[i][j][0] === "P")
            { div.classList.add(Entities.Character)}
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
    
    if (!Toelement.classList.contains("tile-wall"))
    {
        
        if(Toelement.classList.contains("tile-goal") && !fromElement.classList.contains("entity-block" ))
        {   
            fromElement.classList.remove("entity-player");
            fromElement.classList.add("tile-space", "block"); 
            Toelement.classList.add("entity-player");
            
        }
        else if(fromElement.classList.contains("entity-block") && Toelement.classList.contains("tile-goal"))
        {
           
            fromElement.classList.remove("entity-block");
            fromElement.classList.add("entity-player");
            Toelement.classList.add("entity-block");
         
        }
           
        else if(fromElement.classList.contains("entity-block")){
            Toelement.classList.remove(... Toelement.classList.values());
            Toelement.classList.add(Entities.Block, "block"); 

            fromElement.classList.remove("entity-block");
            fromElement.classList.add("tile-space", "block");
             
        }
        else if(fromElement.classList.contains("entity-player"))
        {
            Toelement.classList.remove(... Toelement.classList.values());
            Toelement.classList.add(Entities.Character, "block"); 
            fromElement.classList.remove("entity-player");
            fromElement.classList.add("tile-space", "block");

        }
    }
      
}

function HandelpressKey(e)
{  
    e.preventDefault();
    player = document.getElementsByClassName("entity-player")[0]
    const [x,y] = player.id.split(",").map(Number)

    if(e.keyCode == "38" )
    {  
              
        const fromElement = document.getElementById(`${x},${y}`);
        const Toelement = document.getElementById(`${x},${y-1}`);
        if (Toelement.classList.contains("entity-block"))
        {
            const moveBlockElement = document.getElementById(`${x},${y-2}`);
            const movePlayerElement = Toelement;
            playerMove(movePlayerElement, moveBlockElement);
        }
    
        playerMove(fromElement, Toelement);
        
    }
    else if(e.keyCode == "40")
    {
       const  fromElement = document.getElementById(`${x},${y}`);
           
       const Toelement = document.getElementById(`${x},${y+1}`);
       
                    
       if (Toelement.classList.contains("entity-block"))
       {
            const moveBlockElement = document.getElementById(`${x},${y+2}`);
            const movePlayerElement = Toelement;
            playerMove(movePlayerElement, moveBlockElement);
       }
   
       playerMove(fromElement, Toelement);
       


    }
    else if(e.keyCode == "37")
    {
    
       const  fromElement = document.getElementById(`${x},${y}`);              
       const Toelement = document.getElementById(`${x-1},${y}`);
                     
       if (Toelement.classList.contains("entity-block"))
       {
            const moveBlockElement = document.getElementById(`${x-2},${y}`);
            const movePlayerElement = Toelement;
            playerMove(movePlayerElement, moveBlockElement);
       }
   
       playerMove(fromElement, Toelement);

    }
    else if(e.keyCode == "39")
    {
       
        const  fromElement = document.getElementById(`${x},${y}`);
        const Toelement = document.getElementById(`${x+1},${y}`);
        
                     
        if (Toelement.classList.contains("entity-block"))
        {
            const moveBlockElement = document.getElementById(`${x+2},${y}`);
            const movePlayerElement = Toelement;
            playerMove(movePlayerElement, moveBlockElement);
        }
    
        playerMove(fromElement, Toelement);
    }
}

