username = prompt('Username:')
password = prompt('Password')
if (username == 'admin') {
    if (password == '123456') {
        alert('Tebrikler siz sisteme daxil oldunuz')
    } else {
        alert('sifre yanlisdir')
    }
} else {
    alert('username  sefdir')
}