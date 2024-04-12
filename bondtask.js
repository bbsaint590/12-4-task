
// document.querySelector('button').addEventListener;('click', () =>{})

// fetch('https://dev.io-academy.uk/resources/bond.php')
//     .then((response) => {
//         return response.json()
//     }).then((data) => {
//         console.log(data)
// })



// document.querySelector('button').addEventListener;('click', () =>{})

// fetch('https://dev.io-academy.uk/resources/bond.php')
//     .then((response) => {
//         return response.json()
//     }).then((data) => {
//         document.querySelector('.output').innerHTML = '<h1>${data.name}</h1><p>${data.release_date}</p>'
// })

document.querySelector('button').addEventListener('click', () =>{
    fetch('https://dev.io-academy.uk/resources/bond.php')
      .then(response => {
        return response.json()
      })
      .then(data => {
        document.querySelector('.output').innerHTML = `<h1>${data.name}</h1><p>Height${data.release_date}</p>`
      })
  })
  


    //         document.querySelector('.output').innerHTML = `
    //
    //             <h1>${data.items[0].name}</h1>






    //             <p>Price: &pound;${item.price}</p>
    //             <button data-key="${item.id}">Add to cart</button>
    //         </div>
    //     `
    //     })

    //     document.querySelectorAll('button').forEach((button) => {
    //         button.addEventListener('click', () => {
    //             console.log(button.dataset.key)
    //         })
    //     })

        
    // })


    // fetch('example.json')
    // .then((response) => {
    //     return response.json()
    // }).then((data) => {
    //     data.items.forEach((item) => {
    //         document.querySelector('.output').innerHTML += `
    //         <div>
    //             <h1>${item.name}</h1>
    //             <p>Price: &pound;${item.price}</p>
    //             <button class="cart" data-key="${item.id}">Add to cart</button>
    //             <button class="image" data-image=${item.image}>View image</button>
    //         </div>
    //     `
    //     })

    //     document.querySelectorAll('.image').forEach((button) => {
    //         button.addEventListener('click', () => {
    //             document.querySelector('#imageContainer').innerHTML = `<img src="${button.dataset.image}" />`
    //         })
    //     })

    //     document.querySelectorAll('.cart').forEach((button) => {
    //         button.addEventListener('click', () => {
    //             console.log(button.dataset.key)
    //         })
    //     })

        
    // })