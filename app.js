

let arrayContactos=[
    {
        id:1,
        nombre:"Jose",
        apellidos:"Najera",
        Telefono: 3014845035,
        ubicacion:{
            ciudad: "quilla",
            direccion: "kr 34 #54-35"
        }
    },
    {
        id:2,
        nombre:"Robert ",
        apellidos:"Guerra",
        Telefono: 3014845035,
        ubicacion:{
            ciudad: "quilla",
            direccion: "kr 34 #54-35"
        }
    },
    {
        id:3,
        nombre:"Jose ",
        apellidos:"Najera",
        Telefono: 3014845035,
        ubicacion:{
            ciudad: "quilla",
            direccion: "kr 34 #54-35"
        }
    }
];
const formulario = document.querySelector('#formulario');
const listarHTML = document.querySelector('#listar');
const btnListarHTML = document.querySelector('#btnEditar button[type="submit"]');
const formularioLista = document.querySelector('#btnEliminar');
const formularioUpDate = document.querySelector('#formupdate');
console.table(arrayContactos);

//-----------------------------------------------------------------------------------------------------------------
//--------------------------------------TAMBIEN SE EJECUTA EN CONSOLA----------------------------------------------
//-----------------------------------------------------------------------------------------------------------------
//está imprimiendo pero tiene un problema en el agregar y no se como arreglarlo si me puede ayudar por favor
//eventos
formulario.addEventListener('submit',(e)=>{
    e.preventDefault();
    let nombre = document.getElementById('nombre').value;
    let apellidos = document.getElementById('apellidos').value;
    let tel = document.getElementById('tel').value;
    let ciudad = document.getElementById('ciudad').value;
    let direccion = document.getElementById('direccion').value;
    crearItem(nombre,apellidos,tel,ciudad,direccion);
    pintar(arrayContactos)
    formulario.reset();
})


//funciones
const crearItem = (dataNombre,dataApellidos,dataTel,dataCiudad,dataDireccion)=>{
    let contador = 1;
    arrayContactos.forEach(()=>{
        return contador = contador + 1;
    })
    const contactos={
        id: contador,
        nombre: dataNombre, 
        apellidos: dataApellidos,
        Telefono: Number(dataTel),
        ubicacion:{
            ciudad: dataCiudad,
            direccion: dataDireccion
        }

    };
    arrayContactos.push(contactos);
    console.table(arrayContactos);
    return contactos;
}
const pintar = (arr)=>{
    listarHTML.innerHTML = "";

    arr.forEach((element)=>{
        listarHTML.innerHTML+=`<tr><td hidden>${element.id}</td><td>${element.nombre}</td><td>${element.apellidos}</td><td>${element.Telefono}</td><td>${element.ubicacion.ciudad}</td><td>${element.ubicacion.direccion}</td><td><button onclick= "pintarUpDate(${element.id})" type="submit">Editar</button><button onclick = "eliminarItem(${element.id})" type="button">Eliminar</button></td><br></tr>`
        
    })
}

const pintarUpDate = (id)=>{
    
    arrayContactos.forEach((element)=>{
        if (element.id === id) {
            formularioUpDate.innerHTML+=`<form id="upDateForm"><label for="" hidden>id</label>
            <input type="number" value="${element.id}" id="datoid" hidden><label for="">Nombres</label>
            <input type="text" value="${element.nombre}" id="datonombre"><label for="">Apellidos</label>
            <input type="text" value="${element.apellidos}" id="datoapellidos"><label for="">Telefono</label>
            <input type="number" value="${element.Telefono}" id="datotel"><label for="">ciudad</label>
            <input type="text" value="${element.ubicacion.ciudad}" id="datociudad"><label for="">Direccion</label>
            <input type="text" value="${element.ubicacion.direccion}" id="datodireccion">
            <button type="submit">Save</button></form>`
        }    
    })

    const eventUpDate = document.getElementById('upDateForm');
    eventUpDate.addEventListener('submit', (e)=>{
        e.preventDefault();
        const datoId = document.getElementById('datoid').value;
        const datoNombre = document.getElementById('datonombre').value;
        const datoApellidos = document.getElementById('datoapellidos').value;
        const datoTel = document.getElementById('datotel').value;
        const datoCiudad = document.getElementById('datociudad').value;
        const datoDireccion = document.getElementById('datodireccion').value;
        editar(datoId,datoNombre,datoApellidos,datoTel,datoCiudad,datoDireccion);
        
        eventUpDate.reset()
    })
}


function editar(datoId, datoNombre, datoApellido, datoTel, datoCiudad, datoDireccion) {
    
    const obj = {
        id:datoId,
        nombre: datoNombre,
        apellidos:datoApellido,
        Telefono: datoTel,
        ubicacion:{
            ciudad: datoCiudad,
            direccion: datoDireccion
        }
    }
    arrayContactos.forEach((element, index)=>{
        if (element.id == datoId) {
            console.log(index);
            arrayContactos.splice(index,1,obj);
            return
        }
    })
    formularioUpDate.innerHTML="";
    pintar(arrayContactos);
}
function eliminarItem (datoId) {
    arrayContactos.forEach((element,i)=>{
        if(element.id === datoId){
            arrayContactos.splice(i,1);
        }
    }) 
   console.table(arrayContactos);
   pintar(arrayContactos)  
}
pintar(arrayContactos)



/* const factorial=(n)=>{
    if (n==0) {
        return 1
    }else{
      return  factorial(n - 1) * n;
    }
}
console.log(factorial(5)); */

