# MAR — Web + Panel de administración

Sitio para la agencia de alquileres temporarios **MAR** (Mar del Plata): web pública para clientes + panel privado de administración.

## ⚠️ Nota importante sobre la versión entregada

El prompt original pedía Next.js + TypeScript + Tailwind + Supabase. Esta primera
versión está construida en **HTML + CSS + JavaScript puro (sin build ni
dependencias)**, porque el entorno donde se generó este proyecto no tuvo acceso
al registro de npm para instalar esos paquetes. Funcionalmente implementa **todo
lo pedido en el prompt** (web pública, buscador, filtros, ficha con calendario,
formulario de consulta, WhatsApp, panel admin completo con calendario,
reservas, propiedades, clientes, pagos, contratos y estadísticas), usando
`localStorage` del navegador como base de datos de demo.

Es 100% funcional para mostrar y probar el producto ya mismo, y sirve como
especificación visual y de comportamiento exacta para migrarlo a Next.js +
Supabase (incluyo el schema SQL listo en `/supabase/schema.sql`). Ver la
sección **"Migrar a Next.js + Supabase"** más abajo.

## Cómo verlo

No requiere instalar nada. Necesita levantarse con un servidor local simple
(no abrir los `.html` con doble click, porque `localStorage` no persiste bien
entre páginas si se abren como `file://`):

```bash
cd mar
python3 -m http.server 8080
# abrir http://localhost:8080/index.html
```

También funciona subiéndolo tal cual a cualquier hosting estático (Netlify,
Vercel "static", GitHub Pages, Cloudflare Pages): es solo HTML/CSS/JS, no
necesita build step.

**Admin:** `/admin/login.html` — usuario `admin`, contraseña `mar2026`
(login de demo en el navegador, ver advertencia de seguridad más abajo).

## Estructura

```
mar/
├── index.html              Home (hero + buscador + propiedades destacadas)
├── propiedades.html         Catálogo con filtros
├── propiedad.html           Ficha de propiedad (?id=...)
├── contacto.html             Formulario de consulta general
├── admin/
│   ├── login.html
│   ├── index.html            Dashboard
│   ├── calendario.html       Calendario tipo timeline (crear reservas/bloqueos)
│   ├── reservas.html / reserva.html
│   ├── propiedades.html / propiedad.html
│   ├── clientes.html / cliente.html
│   ├── pagos.html
│   ├── contratos.html
│   └── estadisticas.html
├── assets/
│   ├── css/style.css         Sistema visual MAR (fucsia, arena, beige, crema)
│   └── js/
│       ├── data.js           Datos de prueba (6 propiedades + reservas dic/ene/feb)
│       ├── store.js          "Base de datos" con localStorage + anti-superposición
│       ├── main.js           Utilidades del sitio público (WhatsApp flotante, etc.)
│       └── admin.js          Utilidades del panel (sidebar, búsqueda, badges)
└── supabase/schema.sql       Schema SQL para migrar a Supabase
```

## Qué incluye

**Web pública**
- Home con buscador (fechas, personas, zona) y propiedades destacadas.
- Catálogo con filtros por zona, tipo, huéspedes, habitaciones, precio, fechas y servicios (pileta, parrilla, cochera, mascotas, vista al mar, aire, wifi).
- Ficha de propiedad: galería, descripción, specs, calendario visual de disponibilidad (disponible/reservado/ocupado), formulario de consulta y botones de reservar / consultar / WhatsApp con mensaje prearmado.
- Botón de WhatsApp flotante en toda la web.
- Toda consulta enviada (desde la ficha o `/contacto`) crea automáticamente el cliente y queda visible en el panel.

**Panel admin** (`/admin`)
- Login simple, buscador global (cliente, propiedad, reserva, teléfono, DNI).
- Dashboard: reservas activas, check-ins/check-outs de hoy y mañana, ocupadas/disponibles, dinero por cobrar, consultas nuevas, próximas reservas.
- Calendario: grilla por propiedad y día (verde/naranja/rosa/gris), clickeando y arrastrando se crea una reserva o un bloqueo de fechas.
- Reservas: listado filtrable por estado + ficha con cambio de estado, registro de pagos (actualiza saldo automáticamente) y contrato (pendiente/enviado/firmado).
- Propiedades: alta/edición completa (datos, servicios, fotos por URL, bloqueo de fechas) + estadísticas por propiedad.
- Clientes: alta automática desde consultas, ficha con historial de reservas y gasto total.
- Pagos y Contratos: vistas globales con el estado de todas las reservas.
- Estadísticas: selector de período (hoy / semana / mes / temporada / rango custom), KPIs, facturación por mes, ranking de propiedades y zonas.

La disponibilidad es una sola fuente de verdad: crear/cancelar una reserva o
un bloqueo desde el admin bloquea o libera esas fechas también en la web
pública, y el sistema impide reservas superpuestas para la misma propiedad.

## Seguridad — leer antes de usar en producción

El login de `/admin` es una demo: la contraseña vive en el código del
navegador y no hay backend que la valide. **No lo uses así con datos reales.**
Para producción hace falta Supabase Auth (o similar) protegiendo `/admin` en
un servidor real. Del mismo modo, todos los datos hoy viven en el
`localStorage` del navegador de quien lo usa: no se comparten entre
dispositivos ni personas hasta que se conecte una base de datos real.

## Migrar a Next.js + Supabase

El modelo de datos de `assets/js/store.js` fue diseñado 1 a 1 sobre
`supabase/schema.sql`, para que migrarlo sea mecánico:

1. Crear un proyecto en Supabase y correr `supabase/schema.sql` en el SQL Editor.
2. Activar Supabase Auth para proteger `/admin` (reemplaza el login de demo).
3. Crear un proyecto Next.js (`npx create-next-app@latest --typescript --tailwind --app`) y migrar cada página `.html` a una ruta de `app/` (los nombres de rutas ya coinciden: `/propiedades`, `/propiedad/[id]`, `/admin/calendario`, etc.).
4. Reemplazar las funciones de `store.js` (`getProperties`, `createBooking`, `addPayment`, etc.) por llamadas al cliente de Supabase (`supabase-js`) contra las tablas homónimas — las firmas de las funciones ya están pensadas para eso.
5. Subir las fotos de propiedades a Supabase Storage y guardar las URLs en `properties.photos`.
6. Los datos de prueba de `data.js` se pueden insertar como seed con un script o directamente desde el SQL Editor.

## Datos de prueba

6 propiedades ficticias (Casa Playa Grande, Departamento Güemes, Casa Los
Troncos, Departamento Varese, PH Chauvin, Casa Rumencó) con reservas
distribuidas en diciembre, enero y febrero, más algunas reservas cercanas a
"hoy" para que el dashboard tenga check-ins/check-outs desde el primer
vistazo. El botón de reset de datos de demo es `MAR._resetDemo()` desde la
consola del navegador.

## Personalización rápida

- **Número de WhatsApp:** `assets/js/main.js`, constante `MAR_WHATSAPP_NUMBER`.
- **Usuario/contraseña admin de demo:** `assets/js/data.js`, array `users`.
- **Colores de marca:** variables CSS al inicio de `assets/css/style.css` (`--fucsia`, `--arena`, `--beige`, `--crema`).
- **Fotos:** hoy son URLs de Unsplash de referencia; reemplazalas por las fotos reales de cada propiedad en `assets/js/data.js` o desde `/admin/propiedad.html`.
