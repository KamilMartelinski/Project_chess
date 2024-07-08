function createPlayableChessBoard(){

    generateSquareInformation()
    addPieces();
}  

function generateSquareInformation(){


    generateSquareIds()
    class squareInformation{
        constructor(color, where){
            this.color = color;
            this.where = where;
        }
    }

    for(let row = 1; row <= 8; row++){

        for(let column = 1; column <= 8; column++){

            switch(row){
                case column % 2 === 0:
                    if(column % 2 === 0){
                
                    }
                    else{
        
                    }
                    break;
                case !column % 2 === 0:
                    if(column % 2 === 0){
                
                    }
                    else{
        
                    }
                    break;
            }
        }
    }
}

function generateSquareIds(){

    class squareInformation{

        constructor(row, column, color, contains){
            this.row = row;
            this.column = column;
            this.color = color;
            this.contains = contains;
        }
    }

    let squareInformationArray = [];
     
    for(let row = 1; row <= 8; row++){

        for(let column = 1; column <= 8; column++){

            let columnCharacter = `a`;
            
            for(let i = 1; i <= column - 1; i++){
                const nextCharacter = character => String.fromCharCode(character.charCodeAt(0) + 1);
                columnCharacter = nextCharacter(columnCharacter);  
            }

            let color = "";

            switch(row % 2){
                case 0:
                    if(column % 2 === 0){
                        color = "black";
                    }
                    else{
                        color = "white";
                    }
                    break;
                case 1:
                    if(column % 2 === 0){
                        color = "white";
                    }
                    else{
                        color = "black";
                    }
                    break;
            }

            let ${columnCharacter + row} = new squareInformation(row, columnCharacter, color, "empty")

            squareInformationArray.push((columnCharacter + row));
        }
    }
    console.log(squareInformationArray);
}

function addPieces(){

}

createPlayableChessBoard();