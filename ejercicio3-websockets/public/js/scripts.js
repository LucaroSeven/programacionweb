socket = io.connect("https://localhost:8080", {"forceNew": true});

socket.on("messeges", (data)=>{
    console.log(data);
    render(data);
});

function render(data){
    let html = `
    <div>
        <strong>${data.author}</strong>
        <em>${data.text}</em>
    </div>
    `;

    document.getElementById("messeges").innerHTML = html;
}

function addMessages(form){
    let payload = {
        author: document.getElementById("username").value,
        text: document.getElementById("text").value
    };

    socket.emit("new-message", payload);
    return false;
}