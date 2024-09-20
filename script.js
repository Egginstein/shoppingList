let allItems = [];

fetch('data.json')
    .then(response => response.json())
    .then(data => {
        allItems = data;
        displayItems(allItems);
    });

function displayItems(items) {
    const itemList = document.getElementById('itemList');
    itemList.innerHTML = '';
    items.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'item';
        itemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h2>${item.name}</h2>
            <p>${item.description}</p>
        `;
        itemList.appendChild(itemDiv);
    });
}

function searchItems() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const filteredItems = allItems.filter(item => 
        item.name.toLowerCase().includes(searchTerm) || 
        item.description.toLowerCase().includes(searchTerm)
    );
    displayItems(filteredItems);
}