// const productArr = []
// const product = document.querySelector('.product ul')
// function addProductToProductArr(imageUrl, title, price, id, description) {
//     const product = {
//         imageUrl : '',
//         title : '',
//         price : 0,
//         id : '',
//         description: ''
//     }
//     product.imageUrl = imageUrl;
//     product.title = title;
//     product.price = price;
//     product.id = id;
//     product.description = description;
//     productArr.push(product)
// }
const body = document.querySelector('body')
const modalYes = document.querySelector('.btn-yes')
const modalNo = document.querySelector('.btn-no')
const modal = document.querySelector('.modal-container')
const ul = document.querySelector('.product ul')
const product = JSON.parse(localStorage.getItem('products'))
function load(arr) {
    ul.innerHTML = ''
    for(let i = 0; i < arr.length; i++) {
        const item = arr[i]
        ul.innerHTML += `
        <li> 
        <img src="${arr[i].imglink}">
        <h5>Name: ${arr[i].productname}</h5>
        <p>Price: ${arr[i].productprice} $</p>
        <button type="Submit">Add to cart</button>
        <button type="Submit" class="button-remove">Remove</button>
        </li>
        `
    }
}
if(product.length === 0) {
    ul.innerHTML = '<p>Danh sách sản phẩm trống, hãy thêm nó trong phần Admin</p>'
}
else {
    load(product)
    const remove = document.querySelectorAll('.button-remove')
    for(let i= 0; i < remove.length; i++) {
        remove[i].addEventListener('click', () => {
                modal.style.display = 'flex'
                modalYes.addEventListener('click', () => {
                    product.splice(i,1)
                    localStorage.setItem("products", JSON.stringify(product))
                    load(product)
                    location.reload()
                })
                modalNo.addEventListener('click', () => {
                    modal.style.display = 'none'
                })
            }
        )
    }
}


