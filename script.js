function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'Teke_Love' && password === 'Romagei') {
        document.getElementById('auth-container').style.display = 'none';
        document.getElementById('generate-panel').style.display = 'flex';
    } else {
        alert('Неправильный ник или пароль.');
    }
}

function generateKey() {
    var key = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < 50; i++) {
        key += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    document.getElementById('key').value = key;
}