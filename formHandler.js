// formHandler.js
document.getElementById('rmaForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        product: document.getElementById('product').value,
        reason: document.getElementById('reason').value
    };

    fetch('/submit-form', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.text())
    .then(data => alert(data))
    .catch(error => console.error('Error:', error));
});
