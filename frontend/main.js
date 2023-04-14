const url = "http://localhost:3001/products"

//------------------ GET -----------------------
function getProducts(){
    //Use fetch OU axios
    
    //fetch(url)
    //    .then(response => response.json())
    //    .then(data => renderProducts.textContent = JSON.stringify(data))
    //    .catch(error => console.error(error))
    
    axios.get(url)
        .then(response => renderProducts.textContent = JSON.stringify(response.data))
        .catch(error => console.error(error))
}

function getProduct(id){
    //Use fetch OU axios

    //fetch(`${url}/${id}`)
    //    .then(response => response.json())
    //    .then(data => {
    //        renderProduct.textContent = JSON.stringify(data)
    //        productId.textContent = data.id
    //        productName.textContent = data.name
    //    })
    //    .catch(error => console.error(error))
    
    axios.get(`${url}/${id}`)
        .then(response => {
            renderProduct.textContent = JSON.stringify(response.data)
            productId.textContent = response.data.id
            productName.textContent = response.data.name
        })
        .catch(error => console.error(error))
}

getProducts()
getProduct(3)

//------------------ POST ----------------------
const newProduct = {
    "name": "Giz azul",
    "price": 3.98
}

function addProduct(newProduct) {
   //Use fetch OU axios

   // fetch(url, {
   //     method: "POST",
   //     headers: {
   //         'Content-Type': 'application/json'
   //     },
   //     body: JSON.stringify(newProduct)
   // })
   // .then(response => response.json())
   // .then(data => responsePost.textContent = JSON.stringify(data))
   // .catch(error => console.error(error))

    axios.post(url, newProduct)
        .then(response => responsePost.textContent = JSON.stringify(response.data))
        .catch(error => console.error(error))
}

//addProduct(newProduct)

//------------------ PUT ----------------------
const upProduct = {
    "name": "Caneta azul",
    "price": 3.21
}

function updateProduct(id, upProduct){
    //Use fetch OU axios (comente um dos dois)

    //fetch(`${url}/${id}`, {
    //    method: "PUT",
    //    headers: {
    //        'Content-Type': 'application/json'
    //    },
    //    body: JSON.stringify(upProduct)
    //})
    //.then(response => response.json())
    //.then(data => {
    //    responsePut.textContent = JSON.stringify(data)
    //    infoUpdate.textContent = `Atualizando o item ${id}:`
    //})
    //.catch(error => console.error(error))

    axios.put(`${url}/${id}`, upProduct)
        .then(response => {
            responsePut.textContent = JSON.stringify(response.data)
            infoUpdate.textContent = `Atualizando o item ${id}:`
        })
        .catch(error => console.error(error))

}

updateProduct(1, upProduct)