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

    document.getElementById("message").innerHTML = html;
}