function rectangulo(b, a) {

    let perimetro = 0;
    let superficie = 0;

    perimetro = (b * 2) + (a * 2);
    superficie = (b * a);

    return [perimetro, superficie]
}

// console.log(rectangulo(2, 5));