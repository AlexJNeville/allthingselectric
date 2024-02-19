function copyElement(element) {
    const clone = element.cloneNode(true);
    element.parentNode.insertBefore(clone, element.nextSibling);
    alert('Element copied! Scroll down to see the new element.');
}
