/* ============================================================
   MAR — Capa de datos de la vista pública.
   Lee las propiedades/reservas de MAR_DATA y expone helpers.
   Las consultas se guardan en localStorage (demo).
   ============================================================ */

const MAR = (function () {
  const INQUIRY_KEY = "mar_inquiries";

  function getProperties() {
    return MAR_DATA.properties.slice();
  }

  function getProperty(id) {
    return MAR_DATA.properties.find((p) => p.id === id) || null;
  }

  function getFeatured() {
    return MAR_DATA.properties.filter((p) => p.featured);
  }

  function getZones() {
    return [...new Set(MAR_DATA.properties.map((p) => p.zone))];
  }

  function getBookingsForProperty(id) {
    return MAR_DATA.bookings.filter((b) => b.propertyId === id);
  }

  function isRangeAvailable(id, checkin, checkout) {
    if (!checkin || !checkout || checkout <= checkin) return false;
    const bookings = getBookingsForProperty(id).filter((b) => b.status !== "cancelada");
    // Solapamiento: (startA < endB) && (endA > startB)
    return !bookings.some((b) => checkin < b.checkout && checkout > b.checkin);
  }

  function todayISO() {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  }

  function fmtDate(iso) {
    if (!iso) return "";
    const [y, m, d] = iso.split("-");
    return `${d}/${m}`;
  }

  function createInquiry(data) {
    let list = [];
    try {
      list = JSON.parse(localStorage.getItem(INQUIRY_KEY) || "[]");
    } catch (e) {
      list = [];
    }
    const inquiry = { id: "inq_" + Date.now(), createdAt: new Date().toISOString(), ...data };
    list.push(inquiry);
    try {
      localStorage.setItem(INQUIRY_KEY, JSON.stringify(list));
    } catch (e) {
      /* almacenamiento no disponible: la consulta igual sigue por WhatsApp */
    }
    return inquiry;
  }

  return {
    getProperties,
    getProperty,
    getFeatured,
    getZones,
    getBookingsForProperty,
    isRangeAvailable,
    todayISO,
    fmtDate,
    createInquiry,
    AMENITY_LABELS: MAR_DATA.amenityLabels,
    AMENITY_ICONS: MAR_DATA.amenityIcons
  };
})();
