const propiedades_ventas = [
    {
    id: 1,
    nombre: 'Apartamento en el centro de la ciudad',
    src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
    descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
    ubicacion: '123 Main Street, Anytown, CA 91234',
    habitaciones: '2 Habitaciones',
    baños: '2 Baños',
    costo: '2.000',
    smoke: false,
    pets: true
    },
    {
    id: 2,
    nombre: 'Apartamento luminoso con vista al mar',
    src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
    ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
    habitaciones: '3 Habitaciones',
    baños: '3 Baños',
    costo: '2.500',
    smoke: true,
    pets: true
    },
    {
    id: 3,
    nombre: 'Condominio moderno en zona residencial',
    src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
    descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
    ubicacion: '123 Main Street, Anytown, CA 91234',
    habitaciones: '2 Habitaciones',
    baños: '2 Baños',
    costo: '2.200',
    smoke: false,
    pets: false
    },
    {
        id: 4,
        nombre: 'Zona 11 - Apartamento en Venta ',
        src: './assets/img/p1.png',
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        ubicacion: 'Zonas Capitalinas567 Skyline Avenue, Skyview City, CA 56789',
        habitaciones: '2 Habitaciones',
        baños: '2.5 Baños',
        costo: '3.500',
        smoke: true,
        pets: true
        }
]   
    
    let html= ''

    const propiedad = document.querySelector('.propiedades')

    for (const propiedad_venta of propiedades_ventas){
        html += `
        <div class="col-md-4 mb-3">
            <div class="card">
                <div class="card-body">
            <img src="${propiedad_venta.src}" class="card-img-top" alt="${propiedad_venta.nombre}">
            <h5 class="card-title">${propiedad_venta.nombre}   </h5>
            <p class="card-text">${propiedad_venta.descripcion} </p>
            <p><i class="fas fa-map-marker-alt"></i> ${propiedad_venta.ubicacion}</p>
            <p class='habitaciones'><i class="fas fa-bed"></i> ${propiedad_venta.habitaciones} <i class="fas fa-bath"></i> ${propiedad_venta.baños}</p>
            <p><i class="fas fa-map-marker-alt"></i> ${propiedad_venta.ubicacion}</p>
            <p class="${propiedad_venta.smoke? 'text-success': 'text-danger'}">${propiedad_venta.smoke? '<i class="fas fa-smoking"></i> Puede fumar' : '<i class="fas fa-smoking-ban"></i>No puede fumar'} </p>
            <p class="${propiedad_venta.pets? 'text-success': 'text-danger'}">${propiedad_venta.pets? '<i class="fas fa-paw"></i> Se permiten mascotas' : '<i class="fas fa-ban"></i> No se permiten mascotas'} </p>
            </div>
              </div>
            </div>`
            
}

propiedad.innerHTML = html




