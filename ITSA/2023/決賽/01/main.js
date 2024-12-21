const title = document.querySelector("#title");
const content = document.querySelector("#content");
const date = document.querySelector("#date");

const pending = document.querySelector("#pending");
const finish = document.querySelector("#finish");

let id = 0;
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function formateDate(second) {
  const date = new Date(second);
  const month = date.getMonth();
  const formatMonth = monthNames[month - 1];
  const day = date.getDate();
  const year = date.getFullYear();
  const m = date.getHours() % 12;
  const s = date.getMinutes();
  const last = date.getHours() > 12 ? "PM" : "AM";
  return `${formatMonth} ${day}, ${year} at ${m}:${s} ${last}`;
}

function addItem() {
  if (
    title.value.trim() == "" ||
    content.value.trim() == "" ||
    date.value.trim() == ""
  ) {
    alert("請填寫全部欄位");
    return;
  }
  pending.innerHTML += `
    <li data-id="${++id}">
        <b>${title.value}</b><br>
        ${content.value}<br>
        <i data-time="${date.value}">${formateDate(date.value)}</i><br>
        <button class="finishBtn" onclick="finishItem(${id})">完成</button>
        <button class="removeBtn" onclick="removeItem(${id})">刪除</button>
    </li>
  `;
  sortByItem(pending);
  sortByItem(finish);
}

function removeItem(removeId) {
  const li = document.querySelector(`[data-id="${removeId}"]`);
  li.remove();
}

function finishItem(finishId) {
  const li = document.querySelector(`[data-id="${finishId}"]`);
  const finishBtn = li.querySelector(".finishBtn");
  console.log(finishBtn);

  finishBtn.remove();
  finish.appendChild(li);

  sortByItem(pending);
  sortByItem(finish);
}

function sortByItem(ul) {
  const lis = [...ul.querySelectorAll("li")]; // [li,li,li]
  lis.sort((a, b) => {
    const texta = a.querySelector("i").dataset.time;
    const textb = b.querySelector("i").dataset.time;
    const seconda = new Date(texta).getTime();
    const secondb = new Date(textb).getTime();
    return seconda - secondb;
  });
  ul.innerHTML = "";
  ul.append(...lis);
}
