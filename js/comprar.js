//Obtenemos el contenedor del dibujo del carrito, el cual será un boton
const btnCart = document.querySelector('.container-cart-icon');
//Obtenemos el contenedor de los productos del carrito
const containerCartProducts = document.querySelector('.container-cart-products');

/*Añadimos un listener al boton del carrito que esté a la espera de que se le dé click, cuando esto suceda, se cambiará el estado de la clase hidden-cart*/
btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('hidden-cart');
})

/*Obtenemos los elementos con la clase cart-product y row-product*/
const cartInfo=document.querySelector('.cart-product');
const rowProduct=document.querySelector('.row-product');

//lista de todos los contenedores de producto
const productsList=document.querySelector('.container-items')

/*variable de arreglos de productos*/
let allProducts=[];

//Creamos unas variables para llevar el control del carrito
const valorTotal=document.querySelector('.total-pagar');
const countProducts=document.querySelector('#contador-productos');

//Esperamos a que se de click en algun producto de la lista de productos
productsList.addEventListener('click', e=>{
	if(e.target.classList.contains('btn-add-cart')){
		//Obtenemos la informacion del producto
		const product=e.target.parentElement
		
		//Creamos una variable para almacenar ahí la informacion del producto que se va a agregar al carrito
		const infoProduct={
			quantity:1,
			title: product.querySelector('h2').textContent,
			price: product.querySelector('p').textContent,
		};
		
		//la función some() va a recorrer todos los objetos que tenga un vector
		const exits=allProducts.some(product=>product.title===infoProduct.title)
		//console.log(exits)
		
		/*aqui se comprueba si el producto ya existe en el
		  carrito de compras, si existe entonces se va ir sumando
		  la cantidad que sea del mismo producto, de lo 
		  contrario se agrega
		*/
		
		if(exits){
			const products=allProducts.map(product=>{
				if(product.title===infoProduct.title){
					product.quantity++;
					return product
				}
				else{
					return product
				}
			})
			
			//Concatenamos al arreglo de productos los productos nuevos
			allProducts=[...products]
		}
		else{
			
			allProducts=[...allProducts,infoProduct];
		}

		showHTML();
	}	
		
	
});

/*e es el evento, en esta sección se podra definir la opción
  de eliminar un producto del carrito de compras*/
  
rowProduct.addEventListener('click',(e)=>{
	if(e.target.classList.contains('icon-close')){
		const product=e.target.parentElement
		const title=product.querySelector('p').textContent
		
		allProducts=allProducts.filter(
		   product=>product.title !== title);
	
	console.log(allProducts)
	showHTML()
	
	}
});





/*función para mostrar en html lo del carrito de compras*/

const showHTML=()=>{
	
	if(!allProducts.length){
		containerCartProducts.innerHTML=`<p class="cart-empty">El carrito esta vacio</p>`
	}
	
	//limpiar carrito de compras en html
	rowProduct.innerHTML="";
	
	//se crea la variables
	let total=0;
	let totalOfProducts=0;
	
	//Recorremos el arreglo de productos para ir creando una columna por cada uno en el carrito
	allProducts.forEach(product=>{
		const containerProduct=document.createElement('div')
		containerProduct.classList.add('cart-product')
		
		containerProduct.innerHTML=`
			<div class="info-cart-product">
				<span class="cantidad-producto-carrito">${product.quantity}</span>
				<p class="titulo-producto-carrito">${product.title}</p>
				<span class="precio-producto-carrito">$${parseInt(product.quantity*product.price.slice(1))}</span>
			</div>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="icon-close"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M6 18L18 6M6 6l12 12"
				/>
			</svg>
			</div>
		`;
		
		rowProduct.append(containerProduct);
		
		/*cada vez que se 
		  le de click al botón se estará actualizando
		  el contador de productos se hace la conversión
		  de la cadena o string que recibe a enteros,
		  se multiplica la cantidad de producto por el valorTotal
		  del mismo
		*/
		
		total=total+parseInt(product.quantity*product.price.slice(1))
		totalOfProducts=totalOfProducts+product.quantity;
		
		
	});
	
	//Se actualiza el valor total y el conteo de productos
	valorTotal.innerText=`$${total}`
	countProducts.innerText=totalOfProducts;
};