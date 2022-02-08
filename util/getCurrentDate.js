export default function getCurrentDate(separator=' : ', timeSeparator=' | ') {

let newDate = new Date()
let date = newDate.getDate();
let month = newDate.getMonth() + 1;
let year = newDate.getFullYear();
let day = newDate.getDay();
let hours = newDate.getHours();

return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`
}