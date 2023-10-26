function calcularPrecioTotal(costoBasico) {
    var precioTotal;

    if (costoBasico <= 20) {
        precioTotal = costoBasico;
    } else if (costoBasico <= 40) {
        precioTotal = costoBasico + (costoBasico - 20) * 0.3;
    } else if (costoBasico <= 500) {
        precioTotal = costoBasico + 20 * 0.3 + (costoBasico - 40) * 0.4;
    } else {
        precioTotal = costoBasico + 20 * 0.3 + 460 + (costoBasico - 500) * 0.5;
    }

    return [precioTotal.toFixed(2)];
}