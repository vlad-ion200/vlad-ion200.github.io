function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

function loadPage(url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.body.innerHTML = data;
            // Poți adăuga aici orice scripturi suplimentare sau manipulări DOM necesare
        })
        .catch(error => console.error('Eroare la încărcarea paginii:', error));
}

// Exemple de utilizare
document.querySelector('a[href="vanzare-ambarcațiuni.html"]').addEventListener('click', (event) => {
    event.preventDefault(); // Previi comportamentul implicit
    loadPage('vanzare.html');
});

document.addEventListener('DOMContentLoaded', function() {
    emailjs.init("oDu7vhaKBhat3zzI5"); // Înlocuiește cu User ID-ul tău

    document.getElementById('submitBtn').addEventListener('click', function(event) {
        event.preventDefault(); // Previi comportamentul implicit al butonului

        // Preia valorile din formular
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const telefon = document.getElementById('telefon').value;
        const message = document.getElementById('message').value;

        // Validare simplă
        if (!name || !email || !telefon || !message) {
            alert('Te rog completează toate câmpurile.');
            return;
        }

        // Configurarea mesajului email
        const emailParams = {
            from_name: name,
            from_email: email,
            from_phone: telefon,
            message: message
        };

        // Trimite emailul folosind EmailJS
        emailjs.send('service_lvx56o9', 'template_your_template_id', emailParams)
        .then(function(response) {
            console.log('Success:', response);
            alert('Formularul a fost trimis cu succes!');
        }, function(error) {
            console.error('Error:', error);
            alert('A apărut o eroare. Te rog încearcă din nou.');
        });
    });
});
