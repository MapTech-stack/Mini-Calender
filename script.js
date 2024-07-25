const monthNameEl = document.getElementById("month-name");

const dayNameEl = document.getElementById("day-name");

const dayNum = document.getElementById("day-number");

const yearEl = document.getElementById("year");




const date = new Date();

const month = date.getMonth();
const day = date.getDay();
const year = date.getFullYear();

monthNameEl.innerText = date.toLocaleDateString("en", { month: "long" });
dayNameEl.innerText = date.toLocaleDateString("en", { weekday: "long" });

dayNum.innerText = date.getDate();
yearEl.innerText = date.getFullYear();
