let date;
let date1;
let time;
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
setInterval(() => {
  date = new Date();
  date1 = date.toLocaleDateString(undefined, options);
  time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  document.getElementById("time").innerHTML = time + " on " + date1;
}, 1000);
