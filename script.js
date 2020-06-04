const ren = RENIEC.poblacion;
const dnis = document.getElementById('dni');
const btnConsultar = document.getElementById('btnConsultar');
const sn = document.getElementById('sn');
console.log(ren);


function showPerson(all) {
    const result = document.getElementById('result');
    result.innerHTML = `${all.map((poblacion)=>`
            <div class="cont-person">
                <p class"p-dni">${poblacion.dni}</p>
                <p class"p-num">${poblacion.num}</p>
                <p class"p-nombre">${poblacion.nombre}</p>
                <p class"p-appaterno">${poblacion.appaterno}</p>
                <p class"p-apmaterno">${poblacion.apmaterno}</p>
                <p class"p-condicion">${poblacion.condicion}</p>
                <div class"div-img">${poblacion.img}</div>
                <p class"p-cobra">${poblacion.cobra}</p>
            </div>
        `)}
    `;
}
showPerson(ren);

function searchOnLive(all, key, condicion) {
    return all.filter(e => e[key].includes(condicion));
}
btnConsultar.addEventListener('click', (e)=>{
    // if(dnis!=poblacion.dni)
    // {
    //      sn.innerHTML="Lo siento el número que ha ingresado no es correcto!";
    // }
    // else if(dnis==poblacion.dni && poblacion.dni=="2"){
    //      sn.innerHTML="Usted no recibe bono";
    // }
   showPerson(searchOnLive(ren,"dni", dnis.value.charAt(0).toUpperCase() + dnis.value.slice(1)));

});