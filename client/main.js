var socket = io.connect('http://192.168.8.102:3000', { 'forceNew': true });

socket.on('messages', data => {
    console.log(data);
    render(data);
});

function render(data) {
    var html = data.map(function(message, index) {
        return (`
            <div class="message">
                <strong>${message.nickname}</strong> dice:
                <p>${message.text}</p>
            </div>
        `);
    }).join(' ');

    let div = document.getElementById("message");
    div.innerHTML = html;
    div.scrollTop = div.scrollHeight;
}

let form = document.querySelector('#formSubmit');

form.addEventListener('click', function(e) {
    e.preventDefault();
    let message = {
        nickname: document.getElementById('nickname').value,
        text: document.getElementById('text').value
    };

    document.getElementById('nickname').style.display = 'none';

    socket.emit('add-message', message);

    document.getElementById('text').value = '';
    return false;
});