async function getItemById(id) {
  const res = await fetch(`https://675b7fd49ce247eb1936ac87.mockapi.io/items/${id}`);
  const data = await res.json();
  return data;
}

export {
  getItemById,
}