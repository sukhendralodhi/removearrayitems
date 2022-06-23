const list = document.querySelector(".output ul");
const searchInput = document.querySelector(".output input");
const searchBtn = document.querySelector("#btn1");
const clearBtn = document.querySelector("#btn2");

list.innerHTML = "";

const myHistory = [];
const maxHistory = 5;



searchBtn.onclick = () => {
  if (searchInput.value !== "") {
    myHistory.unshift(searchInput.value);
    list.innerHTML = "";

    // loop
    for (const itemText of myHistory) {
      const listItem = document.createElement("li");
      listItem.textContent = itemText;
      list.appendChild(listItem);
    }

    // if history length is greater than five than it remove automatically
    if (myHistory.length >= maxHistory) {
      myHistory.pop();
    }
    searchInput.value = "";
    searchInput.focus();
  }
};

clearBtn.onclick = () => {
    while(myHistory.length) {
        myHistory.pop();
        list.innerHTML = "";
    }
}
