var gQuestsTree;
var gCurrQuest;
var gPrevQuest = null;

function createQuestsTree() {
    gQuestsTree = loadFromStorage('guessMeDB')
    if (!gQuestsTree) {
        gQuestsTree = createQuest('Male?');
        gQuestsTree.yes = createQuest('Gandhi');
        gQuestsTree.no = createQuest('Rita');
        gCurrQuest = gQuestsTree;
        gPrevQuest = null;
        _saveToStorage()
    }
    gCurrQuest = gQuestsTree;

}

function createQuest(txt) {
    return {
        txt: txt,
        yes: null,
        no: null
    }
}

function isChildless(node) {
    return (node.yes === null && node.no === null)
}

function moveToNextQuest(res) {
    gPrevQuest = gCurrQuest
    gCurrQuest = gCurrQuest[res]

}

function addGuess(newQuestTxt, newGuessTxt, lastRes) {
    gPrevQuest[lastRes] = createQuest(newQuestTxt);
    gPrevQuest[lastRes].yes = createQuest(newGuessTxt);
    gPrevQuest[lastRes].no = gCurrQuest;
    _saveToStorage()
}

function getCurrQuest() {
    return gCurrQuest
}

function _saveToStorage() {
    saveToStorage('guessMeDB', gQuestsTree)
}