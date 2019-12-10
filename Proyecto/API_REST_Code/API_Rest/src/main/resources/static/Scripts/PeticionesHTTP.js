

function getUsers() {
    $.ajax({
        url: "/users"
    }).done(function (users) {
        console.log("Loaded Users: " + JSON.stringify(users));
        that.usuariosConectados.setText("");
        that.numeroUsuariosConectados.setText("");
        var numUsers = 0;
        for (var i = 0; i < users.length; i++) {
        	if ((i + 1) == idJugador) {
        		that.usuariosConectados.setText(that.usuariosConectados.text + "\n---------------------");
        	};
        	that.usuariosConectados.setText(that.usuariosConectados.text + "\nID: " + users[i].id + "\nNombre: " + users[i].name + "\nConectado: " + users[i].connected + "\n");
        	if ((i + 1) == idJugador) {
        		that.usuariosConectados.setText(that.usuariosConectados.text + "---------------------\n");
        	};
        	if (users[i].connected) {
        		numUsers ++;
        	};
        };
        that.numeroUsuariosConectados.setText("Usuarios conectados: " + numUsers + "\nPulsa 'u' para verlos");
    })
}

function getUser(userId) {
    $.ajax({
        url: "/users/" + userId
    }).done(function (user) {
        console.log("Loaded User: " + JSON.stringify(user));
    })
}

function postUser(user) {
    $.ajax({
        method: "POST",
        url: "/users",
        data: JSON.stringify(user),
        processData: false,
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (user) {
        console.log("Created User: " + JSON.stringify(user));
        idJugador = user.id;
        nombreJugador = user.name;
    })
}

function putUser(user) {
    $.ajax({
        method: "PUT",
        url: "/users/" + user.id,
        data: JSON.stringify(user),
        processData: false,
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (user) {
        console.log("Updated user: " + JSON.stringify(user))
        idJugador = user.id;
        nombreJugador = user.name;
    })
}

function deleteUser(userId) {
    $.ajax({
        method: "DELETE",
        url: "/users/" + userId
    }).done(function (user) {
        console.log("Deleted User: " + JSON.stringify(user))
    })
}
