

let arrayContactos=[];
const formulario = document.querySelector('#formulario');
const listarHTML = document.querySelector('#listar');
const btnListarHTML = document.querySelector('#btnlistar');
arrayContactos.push({id:1,nombre:"Jose Najera"},{id:2,nombre:"Robert Guerra"},{id:3,nombre:"Jose Najera"});
console.table(arrayContactos);

//-----------------------------------------------------------------------------------------------------------------
//--------------------------------------TAMBIEN SE EJECUTA EN CONSOLA----------------------------------------------
//-----------------------------------------------------------------------------------------------------------------
//está imprimiendo pero tiene un problema en el agregar y no se como arreglarlo si me puede ayudar por favor
//eventos
formulario.addEventListener('submit',(e)=>{
    e.preventDefault()
    let nombre = document.getElementById('nombre').value;
    crearItem(nombre);
    pintar();
    formulario.reset();
    let newarray = arrayContactos;
    
    
    const eliminarItem = (datoId,array) => {
        array.map((element,i)=>{
            if(element.id === datoId){
                array.splice(i,1);
            }
       }) 
      
       
    }
    eliminarItem(2,newarray)
    console.table(newarray);
})



//funciones
const crearItem = (dataNombre)=>{
    let contador = 1;
    arrayContactos.forEach((_,index)=>{
        contador = index + 1 
        return contador = contador + 1;
    })
    const contactos={
        id: contador,
        nombre: dataNombre
    };
    arrayContactos.push(contactos);
    console.table(arrayContactos);
    return contactos;
}
const pintar = ()=>{
    arrayContactos.forEach((element, index)=>{
        listarHTML.innerHTML+=`<td>${element.nombre}</td><td><button id="${element.id}" type="button">Editar</button><button id="${element.id}" type="button">Eliminar</button></td>`
       
    })
}



pintar()



