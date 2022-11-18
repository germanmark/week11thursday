function choiceHandler(event){
    let parent = event.target.parentElement;
    if (parent.id == "choice1"){
        let phoneJson = JSON.stringify(phone1);
        Cookies.set('phoneSelection', phoneJson)
    } else if (parent.id == "choice2"){
        let phoneJson = JSON.stringify(phone2);
        Cookies.set('phoneSelection', phoneJson)
    } else if (parent.id == "choice3"){
        let phoneJson = JSON.stringify(phone3);
        Cookies.set('phoneSelection', phoneJson)
    }
}


let user = {
    username : "John",
    birthdate : "1989/03/03",
    level : 20,
    isSubscribed : true,
    favouriteColors : ["Red", "White", "Gold"],
    pet : {
        name : "Thor",
        age : 12
    }
}

let userJson = JSON.stringify(user);
Cookies.set(`user`, userJson);

let phone1 = {
    title : "Galaxy S22",
    price : 1900,
    imageUrl : "https://images.samsung.com/is/image/samsung/p6pim/ca/sm-s901wlvaxac/gallery/ca-galaxy-s22-s901-410114-sm-s901wlvaxac-533488436",
    description : "Samsung's latest and greatest"
}

let phone2 = {
    title : "iPhone 14 PRO MAX",
    price : 1700,
    imageUrl : "https://ghost-armor.com/media/catalog/product/cache/f9b262cccfc4db316b94156ff62f9953/i/p/iphone_14_pro_max.png",
    description : "Apple's latest and greatest"
}

let phone3 = {
    title : "Google Pixel 7",
    price : 1500,
    imageUrl : "https://fizz.ca/sites/default/files/styles/large/public/pixel-7-pro-obsidian-carousel-3.png",
    description : "Google's latest and greatest"
}

// let selectionJson = JSON.stringify(selection);
// Cookies.set(`userSelection`, selectionJson);

let selection1 = document.getElementById(`choice1`);
selection1.insertAdjacentHTML(`afterbegin`, `<p>${phone1.description}</p>`);
selection1.insertAdjacentHTML(`afterbegin`, `<p>Price: ${phone1.price}</p>`);
selection1.insertAdjacentHTML(`afterbegin`,`<img src="${phone1.imageUrl}" alt="Samsung Galaxy">`);
selection1.insertAdjacentHTML(`afterbegin`,`<h2>${phone1.title}</h2>`);

let selection2 = document.getElementById(`choice2`);
selection2.insertAdjacentHTML(`afterbegin`, `<p>${phone2.description}</p>`);
selection2.insertAdjacentHTML(`afterbegin`, `<p>Price: ${phone2.price}</p>`);
selection2.insertAdjacentHTML(`afterbegin`,`<img src="${phone2.imageUrl}" alt="Apple iPhone">`);
selection2.insertAdjacentHTML(`afterbegin`,`<h2>${phone2.title}</h2>`);

let selection3 = document.getElementById(`choice3`);
selection3.insertAdjacentHTML(`afterbegin`, `<p>${phone3.description}</p>`);
selection3.insertAdjacentHTML(`afterbegin`, `<p>Price: ${phone3.price}</p>`);
selection3.insertAdjacentHTML(`afterbegin`,`<img src="${phone3.imageUrl}" alt="Google Pixel">`);
selection3.insertAdjacentHTML(`afterbegin`,`<h2>${phone3.title}</h2>`);

let choices = []
selection1.querySelector(`button`).addEventListener(`click`, choiceHandler);
selection2.querySelector(`button`).addEventListener(`click`, choiceHandler);
selection3.querySelector(`button`).addEventListener(`click`, choiceHandler);




