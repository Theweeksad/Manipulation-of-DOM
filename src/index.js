/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const baseUrl = "https://platzi-avo.vercel.app";

const appNode = document.querySelector('#app');

appNode.addEventListener("click", () => {
    if (event.target.nodeName === 'H2"') {
        window.alert("hola");
    }
});

const formatPrice = (price) => {

    const newPrice = new window.Intl.NumberFormat('en-EN', {
        style: 'currency',
        currency: 'USD'
    }).format(price)

    return newPrice
};

//api intl
//1-- formato a fechas 2--- formato a fechas
//web API fetch
//conectarnos al servidor
window
.fetch('${baseUrl}/api/avo')
.then((response) => response.json())
.then((responseJson) => {
    const allItems = []
    responseJson.data.forEach((item) => {
        const image = document.createElement('img');
        //URL de la imagen
        image.src = `${baseUrl}{item.img}`;

        const title = document.createElement('tile');
        title.className = 'text-xl'
        title.textContent = item.name;
        

        const price = document.createElement('price');
        price.className = 'text-gray-600'
        price.textContent = formatPrice (item.price);

        const priceAndTitle = document.createElement("div");
        priceAndTitle.className = " text-center md:text-left";
        priceAndTitle.appendChild(title);
        priceAndTitle.appendChild(price);

        const container = document.createElement('div');
        container.append(image, title, price);

        allItems.push(container)
    });

    document.body.append(...allItems)
});
//procesar answer y convertir en JSON
//json -> Data -> renderizar
