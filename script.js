// 模拟商品数据，能正常显示
const products = [
    { id: 1, name: 'Item1', image: 'https://timvandevall.com/wp-content/uploads/Microscope-Diagram-Labeled.jpg' },
    { id: 2, name: 'Item2', image: 'https://timvandevall.com/wp-content/uploads/Microscope-Diagram-Labeled.jpg' },
    { id: 3, name: 'Item3', image: 'https://via.placeholder.com/150' },
    // 添加更多商品...
];


function displayProducts() {
    const productGrid = document.getElementById('productGrid');
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product';
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <p>${product.name}</p>
            <input type="checkbox" id="product${product.id}" name="product" value="${product.id}">
        `;
        productGrid.appendChild(productElement);
    });
}

function generateList() {
    const selectedItems = document.querySelectorAll('input[name="product"]:checked');
    const selectedList = document.getElementById('selectedItems');
    selectedList.innerHTML = '';
    selectedItems.forEach(item => {
        const product = products.find(p => p.id == item.value);
        const li = document.createElement('li');
        li.textContent = product.name;
        selectedList.appendChild(li);
    });
    document.getElementById('selectedList').style.display = 'block';
}

window.onload = function() {
    displayProducts();
    document.getElementById('generateList').addEventListener('click', generateList);
};