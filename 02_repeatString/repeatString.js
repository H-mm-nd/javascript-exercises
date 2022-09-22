let echo = ''
const repeatString = function(string, num) {
    if (num >=0) {
        echo = '';
        for (let i = num ; i > 0; i--) {
            echo = echo+string;
        }
        return echo;
    } else {
        echo = 'ERROR';
        return echo;
    }
};


// Do not edit below this line
module.exports = repeatString;
