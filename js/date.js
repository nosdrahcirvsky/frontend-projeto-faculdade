const data = new Date();

let data_pedido = data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getUTCFullYear();

if (data.getMinutes() < 10) {
    var hora_pedido = data.getHours() + "h0" + data.getMinutes();
} else {
    var hora_pedido = data.getHours() + "h" + data.getMinutes();
}

document.getElementById("dataPedido").value = data_pedido + ", às " + hora_pedido;