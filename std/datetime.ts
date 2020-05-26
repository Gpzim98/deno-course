import { parseDate, parseDateTime, dayOfYear, currentDayOfYear, } from 'https://deno.land/std/datetime/mod.ts';

var a = parseDate("20-01-2019", "dd-mm-yyyy") // output : new Date(2019, 0, 20)
console.log(a);

parseDate("2019-01-20", "yyyy-mm-dd") // output : new Date(2019, 0, 20)

var b = parseDateTime("01-20-2019 16:34", "dd-mm-yyyy hh:mm") // output : new Date(2019, 0, 20, 16, 34)
console.log(b);

parseDateTime("16:34 01-20-2019", "hh:mm mm-dd-yyyy") // output : new Date(2019, 0, 20, 16, 34)


  
var c = dayOfYear(new Date("2019-03-11T03:24:00")); // output: 70
console.log(c);

var d = currentDayOfYear(); // output: ** depends on when you run it :) **
console.log(d);
