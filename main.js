const addBtn = document.getElementById("add-btn");
const itemInput = document.getElementById("item-input");
const list = document.getElementById("list");

addBtn.addEventListener("click", () => {
  const item = document.createElement("li");
  item.textContent = itemInput.value;

  list.appendChild(item);
});
