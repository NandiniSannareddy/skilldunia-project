let data = [
    {id: 1, name: "Panchatantra", author: "Vishnu Sharma"},
    {id: 2, name: "The Little Prince", author: "Antoine de Saint"}
];

function readAll() {
    localStorage.setItem("object", JSON.stringify(data));
    var tabledata = document.querySelector(".data_table");

    var object = localStorage.getItem('object');
    var objectdata = JSON.parse(object);
    var elements = "";

    objectdata.map(record => {
        elements += `<tr>
            <td>${record.name}</td>
            <td>${record.author}</td>
            <td>
                <button class="edit" onclick="edit(${record.id})">Edit</button>
                <button class="delete" onclick="remove(${record.id})">Delete</button>
            </td>
        </tr>`;
    });

    tabledata.innerHTML = elements;
}

function remove(id) {
    data = data.filter(rec => rec.id !== id);
    readAll();
}

function create() {
    document.querySelector(".create").style.display = "block";
    document.querySelector(".add_div").style.display = "none";
}

function add() {
    var name = document.querySelector(".name").value;
    var author = document.querySelector(".author").value;

    var newObj = {id: data.length + 1, name: name, author: author};
    data.push(newObj);

    document.querySelector(".create").style.display = "none";
    document.querySelector(".add_div").style.display = "block";

    readAll();
}

function edit(id) {
    document.querySelector('.update').style.display = "block";
    var obj = data.find(rec => rec.id === id);
    document.querySelector('.uname').value = obj.name;
    document.querySelector('.uauthor').value = obj.author;
    document.querySelector('.id').value = obj.id;
}

function update() {
    var id = parseInt(document.querySelector('.id').value);
    var name = document.querySelector('.uname').value;
    var author = document.querySelector('.uauthor').value;

    var index = data.findIndex(rec => rec.id === id);
    data[index] = {id, name, author};

    document.querySelector('.update').style.display = "none";
    readAll();
}