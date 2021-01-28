const talkingCalendar = function(date) {
  let friendlyDate = '';
  let year = date.slice(0,4);
  let month = date.slice(5,7);
  let day = date.slice(8,10)
  if (month === '01') {
    resultString = 'January ';
  } else if (month === '02') {
    resultString = 'February ';
  } else if (month === '03') {
    resultString = 'March ';
  } else if (month === '04') {
    resultString = 'April ';
  } else if (month === '05') {
    resultString = 'May ';
  } else if (month === '06') {
    resultString = 'June ';
  } else if (month === '07') {
    resultString = 'July ';
  } else if (month === '08') {
    resultString = 'August ';
  } else if (month === '09') {
    resultString = 'September ';
  } else if (month === '10') {
    resultString = 'October ';
  } else if (month === '11') {
    resultString = 'November ';
  } else if (month === '12') {
    resultString = 'December ';
  } if (day === '01') {
      resultString += day[1] + 'st, ' + year;
    } else if (day === '02') {
      resultString += day[1] + 'nd, ' + year;
    } else if (day === '03') {
      resultString += day[1] + 'rd, ' + year;
    } else if (day >= '04' && day <= '09') {
      resultString += day[1] + 'th, ' + year;
    } else if ((day >= '10' && day <= '20') || (day >= '24' && day <= '30')) {
      resultString += day + 'th, ' + year;
    } else if (day === '21' || day === '31') {
      resultString += day + 'st, ' + year;
    } else if (day === '22') {
      resultString += day + 'nd, ' + year;
    } else if (day === '23') {
      resultString += day + 'rd, ' + year;
    }
  return resultString;
};


console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));

