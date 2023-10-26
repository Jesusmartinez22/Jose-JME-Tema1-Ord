function dinosaurio(nombre, peso, longuitud) {
    peso = peso / 1000
    longuitud = longuitud * 0.3047

    return [nombre + " " + peso.toFixed(2) + " " + longuitud.toFixed(2)];

}