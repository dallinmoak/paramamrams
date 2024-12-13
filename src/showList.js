import { getItemById } from './dataSource';
import './style.css'

const myItemIds = new URL(window.location.href).searchParams.get('items').split(',');

document.querySelector("#app").insertAdjacentHTML(
  'beforeEnd',
  `
    <h1>shared Items</h1>
    <ul id="item-list"></ul>
  `
)

myItemIds.forEach(async (id) => {
  const data = await getItemById(id);
  document.querySelector("#item-list").insertAdjacentHTML(
    'beforeEnd',
    `
      <li>${data.first_name} ${data.last_name}</li>
    `
  )
});