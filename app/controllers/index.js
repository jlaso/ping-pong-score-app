var pounctuation = 21;
var players = [
    { name: 'player 1', count: 0 },
    { name: 'player 2', count: 0 }
];

function showPounctuationOptions(){
    $.pounctuationOptions.show();
}

function pounctuationDialogClick(e){
    switch(e.index){
        case 0:
            pounctuation = 7;
            break;
        case 1:
            pounctuation = 11;
            break;
        case 2:
            pounctuation = 21;
            break;
        default: return;
    }
    $.pounctuation.setText( pounctuation );
}

function playerwins(player){
    var contrary = (player==0) ? 1 : 0;

    var count = players[player].count++;
    if(count >= pounctuation){
        alert('Player ' + players[player].name + ' wins the game');
    }

    switch(player){
        case 0:
            $.player1_count.setText(count);
            break;
        case 1:
            $.player2_count.setText(count);
            break;
    }
}

function player1wins(){
    playerwins(0);
}

function player2wins(){
    playerwins(1);
}

function changePlayer1Name(){

}

function changePlayer2Name(){

}

$.pounctuation.setText( pounctuation );
$.player1_name.setText( players[0].name );
$.player2_name.setText( players[1].name );

$.index.open();