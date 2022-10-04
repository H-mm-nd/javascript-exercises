const getTheTitles = function(booklist) {
    let titles = [];
    for (let i = 0; i < booklist.length; i++) {
        titles.push(booklist[i].title);
    }
    return titles;
};


// Do not edit below this line
module.exports = getTheTitles;
