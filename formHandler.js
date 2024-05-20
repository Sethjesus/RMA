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
        method: 'POST', // 确保使用的方法与服务器支持的一致
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.text())
    .then(data => alert('Form submitted successfully: ' + data))
    .catch(error => console.error('Error:', error));
    
});
