const horarios = [
    { cod: "0413", nombre: "PROG. WEB", dia: "MARTES", hora: "10:00", aula: "E201", color: "bg-primary" },
    { cod: "0413", nombre: "PROG. WEB", dia: "JUEVES", hora: "15:00", aula: "E201", color: "bg-primary" },
    { cod: "0402", nombre: "INTRO. ING", dia: "LUNES", hora: "08:00", aula: "D104", color: "bg-info" },
    { cod: "0402", nombre: "INTRO. ING", dia: "MIÉRCOLES", hora: "08:00", aula: "D104", color: "bg-info" },
    { cod: "0402", nombre: "INTRO. ING", dia: "LUNES", hora: "10:00", aula: "E201", color: "bg-success" },
    { cod: "0402", nombre: "INTRO. ING", dia: "JUEVES", hora: "08:00", aula: "E201", color: "bg-success" },
    { cod: "0402", nombre: "INTRO. ING", dia: "LUNES", hora: "15:00", aula: "D104", color: "bg-danger" },
    { cod: "0402", nombre: "INTRO. ING", dia: "JUEVES", hora: "13:00", aula: "D104", color: "bg-danger" },
    { cod: "0402", nombre: "INTRO. ING", dia: "MARTES", hora: "15:00", aula: "D104", color: "bg-primary" },
    { cod: "0402", nombre: "INTRO. ING", dia: "MIÉRCOLES", hora: "13:00", aula: "D104", color: "bg-primary" }
 ]

 const dias = ["HORA", "LUNES", "MARTES", "MIÉRCOLES", "JUEVES", "VIERNES"];
const horas = ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"];


function generarCalendario() {
    const header = document.getElementById('header-calendario');
    const body = document.getElementById('body-calendario');

    header.innerHTML = dias.map(d => `<th>${d}</th>`).join('');

    body.innerHTML = horas.map(h => `
        <tr>
            <td class="hora-col">${h}</td>
            ${dias.slice(1).map(d => {
                const materia = horarios.find(m => m.dia === d && m.hora === m.hora.split(' ')[0] && h.startsWith(m.hora.substring(0,2)));
                // Nota: La lógica de búsqueda puede ajustarse según el formato exacto de tu hora
                const m = horarios.find(item => item.dia === d && item.hora.startsWith(h.substring(0,2)));
                
                return m 
                    ? `<td class="${m.color} text-white small align-middle"><b>${m.nombre}</b><br>${m.aula}</td>` 
                    : `<td></td>`;
            }).join('')}
        </tr>
    `).join('');
}