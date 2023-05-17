function createWarrantyPage(){
    let element;
    let label;

    element = document.createElement('h3');
    element.innerHTML = '<h3>Whirlwind Warranty Registration<h3>'
    document.body.appendChild(element);

    element = document.createElement('p');
    element.innerHTML=
    '<p>Streamline the repair process by completing your warranty registration today.<p>'
    document.body.appendChild(element);

    element = document.createElement('h2');
    element.innerHTML = 'Contact Information'
    document.body.appendChild(element);

    label = document.createElement('label');
    label.innerHTML = "First Name"
    document.body.appendChild(label);
    element = document.createElement('input');
    element.setAttribute("type", "text")
    document.body.appendChild(element);

    label = document.createElement('label');
    label.innerHTML = "Last Name"
    document.body.appendChild(label);
    element = document.createElement('input');
    element.setAttribute("type", "text")
    document.body.appendChild(element);
    
}