var strftime = require('strftime') // not required in browsers
    var es_ES = {
        days: [ 'Sunday','Monday', 'Tuesday', 'Thursday', 'Wednesday', 'Friday', 'Saturday'],
        shortDays: [ 'sun','mon', 'tue', 'wed', 'thurs', 'fri', 'sat'],
        months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        shortMonths: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'],
        AM: 'AM',
        PM: 'PM',
        am: 'am',
        pm: 'pm',
    }
    var strftimeES = strftime.localize(es_ES)
    console.log(strftimeES('today is %A  %d %B of %Y, %H:%M:%S')) // => mayo 09, 2017 18:21:08