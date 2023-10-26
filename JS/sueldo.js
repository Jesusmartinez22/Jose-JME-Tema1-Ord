function sueldo(sueldos, categoria) {

    if (categoria = 1) {
        let sueldot1 = (sueldos + (sueldos * .15));
        return [categoria, sueldot1.toFixed(2)]
    } else if (categoria = 2) {
        let sueldot2 = (sueldos + (sueldos * .10));
        return [categoria, sueldot2.toFixed(2)]
    } else if (categoria = 3) {
        let sueldot3 = (sueldos + (sueldos * .8));
        return [categoria, sueldot3.toFixed(2)]
    } else if (categoria = 4) {
        let sueldot4 = (sueldos + (sueldos * .7));
        return [categoria, sueldot4.toFixed(2)]
    } else {
        return "no valid"
    }
}

// console.log(sueldo(1000, 1));