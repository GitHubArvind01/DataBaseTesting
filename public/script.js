async function addUser() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    const response = await fetch('/addUser', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
    });

    const result = await response.json();
    document.getElementById('response').innerText = result.message;
}
