    // accept request and add friends number
    function add(element) {
    // remove request
    element.remove();

    // increment friends number
    document.querySelector("#friend-num").innerText++;

    // decrement request number
    document.querySelector("#request-num").innerText--;
}

    // function to change name
    function changeName(element) {
    // catch user choice
    let newName = prompt("Enter new first and last name: ");
    // replace inner text with user choice
    element.innerText = newName;
    }

