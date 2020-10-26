var socket = io.connect('http://localhost:8080', { 'forceNew': true });
var users = []

socket.on('messages', (data) => {
    console.log(data);

    render(data);
});

var inputText = document.getElementById("text")
inputText.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("btnSend").click();
    }
  });

function render (data) {
    verifyUsers(data)
    let html = data.map((elem) => {
        if (elem.author!=` `) {
            return (
                `<div>
                    <strong>${elem.author}</strong>:
                    <em>${elem.text}</em>
                </div>`
            );
        }
    }).join(' ');

    let elem = document.getElementById('messages');

    elem.innerHTML = html;
    elem.scrollTop = elem.scrollHeight;
}

function addMessage(form) {
    let inputAuthor = document.getElementById('username')
    let inputText = document.getElementById('text')
    let text = inputText.value
    text = text.replace(/\s+/g, '')

    if (!(inputAuthor.value && text)) {
        alert("Faltan campos por llenar")
        return false
    }

    let payload = {
        author: inputAuthor.value,
        text: inputText.value
    };

    socket.emit('new-message', payload);

    inputText.value = ``;
    inputText.focus();
    return false;
}

function verifyUsers(data){
    data.map((elem)=>{
        if (users.indexOf(elem.author==-1)) {
            users.push(elem.author);
        }
    })

    let elem = document.getElementById('users')
    let html = ``

    var uniqs = users.filter(function(item, index, array) {
        return array.indexOf(item) === index;
      })

    uniqs.forEach((user)=>{
        if(user!=undefined)
            html += `<strong>${user}</strong>`
    })

    elem.innerHTML = html;
}
