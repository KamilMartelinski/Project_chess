function createPlayableChessBoard(){

    createChessBoard();
}  

function createChessBoard(){

    let rowNumber = 1;
     
    for(rowNumber; rowNumber <= 8; rowNumber++){

        let columnNumber = 1;

        for(columnNumber; columnNumber <= 8; columnNumber++){

            let columnCharacter = `a`;
            
            for(let i = 1; i <= columnNumber - 1; i++){
                const nextCharacter = character => String.fromCharCode(character.charCodeAt(0) + 1);
                columnCharacter = nextCharacter(columnCharacter);
            }

            console.log(columnCharacter);
            console.log(rowNumber);
        }
    }
}

function addPaces(){

}

createPlayableChessBoard();