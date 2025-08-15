document.addEventListener('DOMContentLoaded', function() {
  cargarEntidades();
  cargarQuejas();

  // Evento para el botón "Escribir"
  const btnEscribir = document.querySelector('.write-btn');
  if (btnEscribir) {
    btnEscribir.addEventListener('click', function() {
      console.log('recibido');
    });
  }
});

async function cargarEntidades() {
  const res = await fetch('/api/entidades');
  const entidades = await res.json();
  const aside = document.querySelector('.filters');
  aside.innerHTML = '<h3>ENTIDADES</h3>';
  aside.innerHTML += `<label><input type="radio" name="filtro" value="todas" checked> Todas</label>`;
  entidades.forEach(entidad => {
    aside.innerHTML += `<label><input type="radio" name="filtro" value="${entidad.id}"> ${entidad.nombre}</label>`;
  });
  // Evento para recargar quejas al cambiar filtro
  aside.querySelectorAll('input[name="filtro"]').forEach(radio => {
    radio.addEventListener('change', cargarQuejas);
  });
}

async function cargarQuejas() {
  const filtro = document.querySelector('input[name="filtro"]:checked').value;
  let url = '/api/quejas';
  if (filtro !== 'todas') url += `?entidad_id=${filtro}`;
  const res = await fetch(url);
  const quejas = await res.json();
  const section = document.querySelector('.complaints');
  section.innerHTML = '';
  if (quejas.length === 0) {
    section.innerHTML = '<p>No hay quejas registradas.</p>';
    return;
  }
  quejas.forEach(q => {
    section.innerHTML += `
      <details>
        <summary>
          <img src="${q.logo}" class="entity-icon">
          ${q.titulo} <span style="font-size:12px;color:#888;">(${q.entidad_nombre})</span>
        </summary>
        <p>${q.descripcion}</p>
      </details>
    `;
  });
}