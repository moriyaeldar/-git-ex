'use strict';

// NOTE: This is a global used only in the controller
var gLastRes = null;

$(document).ready(init);
$('.btn-start').click(onStartGuessing);
$('.btn-yes').click({ ans: 'yes' }, onUserResponse);
$('.btn-no').click({ ans: 'no' }, onUserResponse);
$('.btn-add-guess').click(onAddGuess);

function init() {
    console.log('Started...');
    createQuestsTree();

}

function onStartGuessing() {
    $('.game-start').hide()
    renderQuest();
    $('.quest').show()
}

function renderQuest() {
    var currQuest = getCurrQuest()
    $('h2').text(currQuest.txt)
    $('h2').show()
}

function onUserResponse(ev) {
    var res = ev.data.ans;
    console.log(res);
    // If this node has no children
    if (isChildless(getCurrQuest())) {
        $('.quest').hide()
        if (res === 'yes') {
            alert('Yes, I knew it!')
            onRestartGame()
        } else {
            alert('I dont know...teach me!');
            $('h2').hide()
            $('.new-quest').show()
        }
    } else {
        gLastRes = res
        moveToNextQuest(res);
        renderQuest();
    }
}

function onAddGuess(ev) {
    ev.preventDefault();
    var newGuess = $('#newGuess').val();
    var newQuest = $('#newQuest').val();
    // TODO: Get the inputs' values
    // TODO: Call the service addGuess
    addGuess(newQuest, newGuess, gLastRes)
    onRestartGame();
}

function onRestartGame() {
    $('.new-quest').hide();
    $('.game-start').show();
    gLastRes = null;
    init()
}