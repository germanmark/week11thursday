let count = Cookies.get(`clickCount`);
let count2 = Cookies.get(`secondCount`);
let count3 = Cookies.get(`thirdCount`);

if (count != undefined){
    // Inject the value if cookie is defined
    // document.body.innerHTML = `<h1>You clicked the button ${count} times</h1>`
    // Equivalent:
    document.body.insertAdjacentHTML(`beforeend`,`<h1>You clicked the first button ${count} times</h1>`);
}else{
    // Otherwise, default to 0
    document.body.insertAdjacentHTML(`beforeend`, `<h1>You never clicked the first button</h1>`);
}

if (count2 != undefined){
    // Inject the value if cookie is defined
    // document.body.innerHTML = `<h1>You clicked the button ${count2} times</h1>`
    // Equivalent:
    document.body.insertAdjacentHTML(`beforeend`,`<h1>You clicked the second button ${count2} times</h1>`);
}else{
    // Otherwise, default to 0
    document.body.insertAdjacentHTML(`beforeend`, `<h1>You never clicked the second button</h1>`);
}

if (count3 != undefined){
    // Inject the value if cookie is defined
    // document.body.innerHTML = `<h1>You clicked the button ${count3} times</h1>`
    // Equivalent:
    document.body.insertAdjacentHTML(`beforeend`,`<h1>You clicked the third button ${count3} times</h1>`);
}else{
    // Otherwise, default to 0
    document.body.insertAdjacentHTML(`beforeend`, `<h1>You never clicked the third button</h1>`);
}