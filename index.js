// code your solution here
function superbowlWin(record) {
    // Use the find() method to search for a win
    let win = record.find(game => game.result === "W");

    //A win is found, return the year
    if (win) {
        return win.year;
    } else {
        // No win is found, return undefined
        return undefined;
    }
}

module.exports = {
    superbowlWin
};
