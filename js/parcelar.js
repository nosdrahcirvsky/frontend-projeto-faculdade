var preco = document.getElementById("varPreco").value;

function parcelar(numero) {
    
    var total = preco / numero;

    if (numero === 1) {
        document.getElementById("totalParcelado").innerHTML = "R$ " + preco + " (à vista)";
        document.getElementById("inputTotal").value = "pago à vista";
        document.getElementById("numeroParcelas").value = numero;
    } else {
        document.getElementById("totalParcelado").innerHTML = "R$ " + preco + " (dividido em " + numero + "x de R$ " + total.toFixed(2) + ")";
        document.getElementById("inputTotal").value = numero + "x de R$ " + total.toFixed(2);
        document.getElementById("numeroParcelas").value = numero;
    }

}