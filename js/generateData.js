function generateData(data, selector) {
    console.log(data);
    console.log(selector);
    let HTML = '';
    for (let i = 0; i < data.length; i++) {
        const maistas = data[i];
        HTML += `<div class="service">
            <h3>${maistas.label}</h3>
            <p>${maistas.description}</p>
            <div class="price">${maistas.price} Eur</div>
            <a href="${maistas.link}">Placiau ></a>
            </div>`
    }

    // console.log(HTML);

    const DOM = document.querySelector(selector);
    DOM.innerHTML = HTML

    return HTML;
}
export { generateData }