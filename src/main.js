import { getItemById } from './dataSource';
import './style.css'
import { copyToClipboard } from './util';

const myItemIds = [
  '1', '2', '3', '4', '5'
]

document.querySelector("#app").insertAdjacentHTML(
  'beforeEnd',
  `
    <h1>My Items</h1>
    <ul id="item-list"></ul>
    <button id="share">Share</button>
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



function handleShare() {
  let url = new URL(`${window.location.origin}/showList.html`);
  url.searchParams.append('items', myItemIds.join(','));
  copyToClipboard(url.href);
  alert(`link ${url.href} copied to clipboard`);
}

document.querySelector("#share").addEventListener('click', handleShare);