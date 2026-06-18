
    const apiUrl = 'https://fakestoreapi.com/products';
    async function fetchProducts(apiUrl) {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
        return data;
    }

    let products = [];
    async function displayProducts() {
        products = JSON.parse(localStorage.getItem('products') || '[]');
        // if(products.length === 0 ) {
        //       products = await fetchProducts(apiUrl);
        //     // products = await fetchProducts(apiUrl);
        //     localStorage.setItem('products', JSON.stringify(products));
        //     // products = storedProducts;

        // }
    

     
        // localStorage.setItem('products', JSON.stringify(products));
            // const products = JSON.parse(
            // localStorage.getItem('products'));


        //     for(let i = 1; i <= 10; i++) {
        //         await new Promise(resolve =>setTimeout(resolve, 30));
        //         progressBar.value = i * 10;
        //     }  
        // }

        
        // console.log(JSON.parse(localStorage.getItem("products")));
        // const storedProducts = JSON.parse(localStorage.getItem('products'));
        const container = document.getElementById('productList');
        container.style.marginBottom = '20px';
        container.innerHTML = '';
        if(products.length === 0) {
            container.textContent = 'No products available. Sync to fetch products.';
            return;
        }
        products.forEach((product, index) => {
            const productList = document.createElement('p');
            productList.textContent = product.title;
            container.appendChild(productList);
            
            const EditBtn = document.createElement('button');
            EditBtn.textContent = 'Edit';
            container.appendChild(EditBtn).addEventListener('click', () => {
                const newTitle = prompt('edit product' , product.title);
                console.log("old title: " + product.title);
                console.log("updated title: " + newTitle);
                
                if(newTitle != null && newTitle != "") {
                    product.title = newTitle;
                    localStorage.setItem('products', JSON.stringify(products));
                    displayProducts();
                }else { 
                    product.title = product.title;
                
                }
            });
            // localStorage.setItem(`product_${index}`, JSON.stringify(product));
            // displayProducts();
            
            const DeleteBtn = document.createElement('button');
            DeleteBtn.textContent = 'Delete';
            container.appendChild(DeleteBtn).addEventListener('click', () => {
            container.appendChild(document.createElement('hr'));

                let storedProducts = JSON.parse(localStorage.getItem('products'));
                
                storedProducts = storedProducts.filter(p => p.id !== product.id);
                console.log("deleted product: " + product.title);
                
                localStorage.setItem('products',JSON.stringify(storedProducts));
                products = storedProducts;
                displayProducts();
            });
        });
    }
    
        
          async function syncProducts() {
              const progressBar =document.getElementById('progressBar');
           progressBar.value = 20;
           
           const fetchedProducts = await fetchProducts(apiUrl);
           progressBar.value = 60;
           localStorage.setItem('products', JSON.stringify(fetchedProducts));
            progressBar.value = 80;
            displayProducts();
            progressBar.value = 100;
            
        };
        
        document.getElementById('syncBtn').addEventListener('click',syncProducts);
        displayProducts();  