/* ============================================================
   MAR — Datos de propiedades (vista pública)
   Fotos: referencias de alta calidad (reemplazables por fotos
   reales de cada propiedad de Mar del Plata).
   ============================================================ */

const MAR_DATA = {
  properties: [
    {
      id: "playa-grande",
      name: "Casa Playa Grande",
      zone: "Playa Grande",
      type: "casa",
      address: "A pasos de Playa Grande, Mar del Plata",
      guests: 8,
      bedrooms: 4,
      beds: 5,
      bathrooms: 3,
      price: 180,
      featured: true,
      amenities: ["vistaMar", "pileta", "parrilla", "cochera", "aire", "wifi"],
      description:
        "Una casa luminosa y espaciosa a metros del mar, pensada para disfrutar el verano en familia o entre amigos. Ambientes amplios, mucha luz natural y una galería que invita a las tardes largas frente a la costa.",
      rules: "No se permiten fiestas ni eventos. Ideal para familias. Se admiten mascotas previa consulta.",
      checkin: "14:00",
      checkout: "10:00",
      photos: [
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1200&auto=format&fit=crop"
      ]
    },
    {
      id: "varese",
      name: "Departamento Varese",
      zone: "Varese",
      type: "departamento",
      address: "Frente a Playa Varese, Mar del Plata",
      guests: 4,
      bedrooms: 2,
      beds: 3,
      bathrooms: 1,
      price: 110,
      featured: true,
      amenities: ["vistaMar", "aire", "wifi", "cochera"],
      description:
        "Departamento moderno con vista directa al mar en una de las zonas más elegantes de la ciudad. Terminaciones cuidadas, balcón al frente y todo lo necesario para una estadía tranquila cerca del centro.",
      rules: "No se permiten fiestas. No apto para mascotas.",
      checkin: "14:00",
      checkout: "10:00",
      photos: [
        "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1560185008-a33f5c7b1844?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200&auto=format&fit=crop"
      ]
    },
    {
      id: "guemes",
      name: "Loft Güemes",
      zone: "Güemes",
      type: "departamento",
      address: "Corazón de Güemes, Mar del Plata",
      guests: 2,
      bedrooms: 1,
      beds: 1,
      bathrooms: 1,
      price: 75,
      featured: true,
      amenities: ["aire", "wifi", "mascotas"],
      description:
        "Un loft de diseño en el barrio más vivo de Mar del Plata, rodeado de cafés, restaurantes y tiendas. Perfecto para una escapada en pareja, con estilo y ubicación inmejorable para caminar todo.",
      rules: "Ideal para parejas. Se admiten mascotas pequeñas.",
      checkin: "15:00",
      checkout: "10:00",
      photos: [
        "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1502672023488-70e25813eb80?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1560448075-bb485b067938?q=80&w=1200&auto=format&fit=crop"
      ]
    },
    {
      id: "los-troncos",
      name: "Casa Los Troncos",
      zone: "Los Troncos",
      type: "casa",
      address: "Barrio Los Troncos, Mar del Plata",
      guests: 6,
      bedrooms: 3,
      beds: 4,
      bathrooms: 2,
      price: 150,
      featured: true,
      amenities: ["parrilla", "cochera", "wifi", "aire", "mascotas"],
      description:
        "Casa de estilo clásico en el tradicional barrio de Los Troncos, entre árboles añosos y calles tranquilas. Un jardín con parrilla, ambientes cálidos y la calma de una de las zonas residenciales más lindas de la ciudad.",
      rules: "No se permiten fiestas. Se admiten mascotas.",
      checkin: "14:00",
      checkout: "10:00",
      photos: [
        "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?q=80&w=1200&auto=format&fit=crop"
      ]
    },
    {
      id: "chauvin",
      name: "PH Chauvin",
      zone: "Chauvin",
      type: "departamento",
      address: "Barrio Chauvin, Mar del Plata",
      guests: 4,
      bedrooms: 2,
      beds: 3,
      bathrooms: 1,
      price: 95,
      featured: false,
      amenities: ["parrilla", "wifi", "aire"],
      description:
        "PH luminoso con patio propio en Chauvin, una zona tranquila y bien conectada. Espacios cómodos, mucha luz y un patio ideal para desayunar al aire libre en las mañanas de verano.",
      rules: "No se permiten fiestas. No apto para mascotas.",
      checkin: "14:00",
      checkout: "10:00",
      photos: [
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=1200&auto=format&fit=crop"
      ]
    },
    {
      id: "rumenco",
      name: "Casa Rumencó",
      zone: "Rumencó",
      type: "casa",
      address: "Barrio Rumencó, Mar del Plata",
      guests: 10,
      bedrooms: 5,
      beds: 6,
      bathrooms: 3,
      price: 240,
      featured: true,
      amenities: ["pileta", "parrilla", "cochera", "wifi", "aire", "mascotas"],
      description:
        "Amplia casa con pileta y parque en el exclusivo barrio Rumencó, pensada para grupos grandes y estadías inolvidables. Naturaleza, privacidad y espacio de sobra para disfrutar sin apuros.",
      rules: "No se permiten fiestas ni eventos. Se admiten mascotas.",
      checkin: "15:00",
      checkout: "10:00",
      photos: [
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1600607687644-c7171b42498b?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1200&auto=format&fit=crop"
      ]
    }
  ],

  /* Reservas de ejemplo para pintar la disponibilidad en la ficha.
     (En producción vienen del panel / base de datos.) */
  bookings: [
    { id: "b1", propertyId: "playa-grande", checkin: "2026-01-05", checkout: "2026-01-15", status: "confirmada" },
    { id: "b2", propertyId: "playa-grande", checkin: "2026-02-01", checkout: "2026-02-08", status: "ocupada" },
    { id: "b3", propertyId: "varese", checkin: "2026-01-10", checkout: "2026-01-20", status: "confirmada" },
    { id: "b4", propertyId: "los-troncos", checkin: "2026-01-02", checkout: "2026-01-09", status: "ocupada" },
    { id: "b5", propertyId: "rumenco", checkin: "2026-02-10", checkout: "2026-02-20", status: "confirmada" },
    { id: "b6", propertyId: "guemes", checkin: "2026-01-18", checkout: "2026-01-25", status: "confirmada" }
  ],

  amenityLabels: {
    pileta: "Pileta",
    parrilla: "Parrilla",
    cochera: "Cochera",
    mascotas: "Pet friendly",
    vistaMar: "Vista al mar",
    aire: "Aire acondicionado",
    wifi: "Wi-Fi"
  },
  amenityIcons: {
    pileta: "🌊",
    parrilla: "🔥",
    cochera: "🚗",
    mascotas: "🐾",
    vistaMar: "🏖️",
    aire: "❄️",
    wifi: "📶"
  }
};
