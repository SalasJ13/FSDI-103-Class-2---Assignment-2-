//Varibles
let nameProd;
let quantity=0;
let price=0;
let total=0;
let totalIVA=0;


//Funciones
function sales(){
    nameProd=prompt("Enter the product name: ");
    quantity=prompt("Enter the product quantity: ");
    price=prompt("Enter the price of the product:");

    //operacion
    oper();
    //impresion consola
    console.log(nameProd,quantity,price,total,totalIVA);
    print(nameProd,quantity,price,total,totalIVA)
}

function oper(){
    total=quantity*price;
    totalIVA=(total*0.16)+total;
}

function print(a,b,c,d,e){
    document.write(`
    <p>Name Product: ${a}</p>
    <p>Quantity: ${b}</p>
    <p>Price: ${c}</p>
    <p>Total: ${d}</p>
    <p>Total IVA: ${e}</p>
    `)

}

//mostrar funcion
sales();