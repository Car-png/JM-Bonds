const ren = RENIEC.poblacion;
const dni = document.getElementById('dni');
console.log(ren);


function showPerson(all) {
    const result = document.getElementById('result');
    result.innerHTML = `
        ${all.map((poblacion)=>`
            <div class="border-img">
            <p>${poblacion.appaterno}</p>
            <p>${poblacion.nombre}</p>
            <p>${poblacion.apmaterno}</p>
            </div>
        `)}
    `;
}
showPerson(ren);

function searchOnLive(all, key, condicion) {
    return all.filter(e => e[key].includes(condicion));
}
dni.addEventListener('input', (e)=>{
   showPerson(searchOnLive(ren,"dni", dni.value.charAt(0).toUpperCase() + dni.value.slice(1))); 
});