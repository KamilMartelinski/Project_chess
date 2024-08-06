const createChessBoard = {

    getSquareColor: (row, column) => { //picks a color for a square

        switch(row % 2){
            case 0:
                if(column % 2 === 0) return "white";
                else return "black";
                break;
            default:
                if(column % 2 === 0) return "black";
                else return "white";
                break;
        };
    },

    convertNumberToCharacter: (number) => {

        switch (number) {
            case 0:
                return "a";
                break;
            case 1:
                return "b";
                break;
            case 2:
                return "c";
                break;
            case 3:
                return "d";
                break;
            case 4:
                return "e";
                break;
            case 5:
                return "f";
                break;
            case 6:
                return "g";
                break;
            case 7:
                return "h";
                break;
        };
    },

    addPieces: (row, column) => {

        if(row === 1 || row === 6) return "pawn";
        
        if(column === 3 || row === 0 && row === 7) return "queen";
        if(column === 4 || row === 0 && row === 7) return "king";

        if(row === 0 || row === 7){

            switch(column){
                case 0:
                    return "rook";
                    break;
                case 7:
                    return "rook";
                    break;
                case 1:
                    return "knight";
                    break;
                case 6:
                    return "knight";
                    break;
                case 2:
                    return "bishop";
                    break;
                case 5:
                    return "bishop";
                    break;
            }
        }

        else return "nothing";
    },

    getPieceColor: (row) => {

        if(row === 0 || row === 1) return "white";
        if(row === 6 || row === 7) return "black";
        
        else return "none";
    },

    createChessBoard: () => {

        class squareInformation{

            constructor(row, column, squareColor, contains, pieceColor){
                this.coordinates = column + (row + 1);
                this.row = row + 1;
                this.column = column;
                this.squareColor = squareColor;
                this.contains = contains;
                this.pieceColor = pieceColor;
            }
        };

        const chessBoardArray = [[],[],[],[],[],[],[],[],]; //array representing chess board

        for(let row = 0; row <= 7; row++){
            
            for(let column = 0; column <= 7; column++){

                chessBoardArray[row].push(new squareInformation(
                    row, createChessBoard.convertNumberToCharacter(column), createChessBoard.getSquareColor(row, column), createChessBoard.addPieces(row, column), createChessBoard.getPieceColor(row)
                )); //output
            }
        };
        
        return chessBoardArray;
    },
};

console.log(createChessBoard.createChessBoard());