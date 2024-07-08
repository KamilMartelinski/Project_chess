function createPlayableChessBoard(){

    generateSquareInformation()
    addPieces();
}  

function generateSquareInformation(){

    let rowNumber = 1;
     
    for(rowNumber; rowNumber <= 8; rowNumber++){

        let columnNumber = 1;

        for(columnNumber; columnNumber <= 8; columnNumber++){

            let columnCharacter = `a`;
            
            for(let i = 1; i <= columnNumber - 1; i++){
                const nextCharacter = character => String.fromCharCode(character.charCodeAt(0) + 1);
                columnCharacter = nextCharacter(columnCharacter);  
            }

            console.log(columnCharacter);0    
            console.log(rowNumber);
        }
    }
}

function addPieces(){

}

createPlayableChessBoard();