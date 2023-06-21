// export default: usamos para exportar uma função como padrão para ser usada em outro arquivo js.


function area(raio){
    return Math.PI * raio * raio
}

function numeroAleatorio() {
  return Math.random();
}

const Circulo = {
    area,
    numeroAleatorio
}


export default Circulo;