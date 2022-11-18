let selectionJson = Cookies.get(`phoneSelection`);
let selection = JSON.parse(selectionJson);
selection.price *= 0.8;

document.body.insertAdjacentHTML(`afterbegin`, `<p>${selection.description}</p>`);
document.body.insertAdjacentHTML(`afterbegin`, `<p>Price: ${selection.price}</p>`);
document.body.insertAdjacentHTML(`afterbegin`,`<img src="${selection.imageUrl}" alt="Samsung Galaxy">`);
document.body.insertAdjacentHTML(`afterbegin`,`<h2>${selection.title}</h2>`);