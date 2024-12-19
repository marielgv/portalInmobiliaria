const propiedades_ventas = [
    {
    id: 1,
    nombre: 'Apartamento de lujo en zona exclusiva',
    src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
    descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
    ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
    habitaciones: '4 Habitaciones',
    baños: '4 Baños',
    costo: '5.000',
    smoke: false,
    pets: false
    },
    {
    id: 2,
    nombre: 'Apartamento acogedor en la montaña',
    src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
    descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
    ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
    habitaciones: '2 Habitaciones',
    baños: '1 Baño',
    costo: '1.200',
    smoke: true,
    pets: true
    },
    {
    id: 3,
    nombre: 'Penthouse de lujo con terraza panorámica',
    src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
    descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
    ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
    habitaciones: '3 Habitaciones',
    baños: '3 Baños',
    costo: '4.500',
    smoke: false,
    pets: true
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




