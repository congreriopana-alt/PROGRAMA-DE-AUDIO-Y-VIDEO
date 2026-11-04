// Sonido · El Río Panajachel — sincronización entre aparatos
// 1) Cambia el CODIGO por una clave tuya (la misma que pondrás en la app).
// 2) Implementar > Nueva implementación > Aplicación web
//    Ejecutar como: Yo   |   Quién tiene acceso: Cualquier persona
// 3) Copia la URL que termina en /exec y pégala en la app (botón "Sincronizar").
var CODIGO = 'sonido2026';
var ARCHIVO = 'sonido-el-rio-datos.json';

function leer_() {
  var it = DriveApp.getFilesByName(ARCHIVO);
  if (it.hasNext()) {
    try { var d = JSON.parse(it.next().getBlob().getDataAsString()); d.months = d.months || {}; return d; } catch (e) {}
  }
  return { months: {}, cfg: null };
}
function guardar_(d) {
  var txt = JSON.stringify(d), it = DriveApp.getFilesByName(ARCHIVO);
  if (it.hasNext()) it.next().setContent(txt);
  else DriveApp.createFile(ARCHIVO, txt, MimeType.PLAIN_TEXT);
}
function mezclar_(srv, inc) {
  var out = { months: srv.months || {}, cfg: srv.cfg || null };
  var im = (inc && inc.months) || {};
  Object.keys(im).forEach(function (k) {
    var a = im[k], b = out.months[k];
    if (a && a.updated && (!b || !b.updated || String(a.updated) > String(b.updated))) out.months[k] = a;
  });
  var c = inc && inc.cfg;
  if (c && c.updated && (!out.cfg || !out.cfg.updated || String(c.updated) > String(out.cfg.updated))) out.cfg = c;
  return out;
}
function salida_(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}
function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(25000);
  try {
    var b = JSON.parse((e && e.postData && e.postData.contents) || '{}');
    if (b.code !== CODIGO) return salida_({ ok: false, error: 'Código incorrecto' });
    var m = mezclar_(leer_(), b);
    guardar_(m);
    return salida_({ ok: true, data: m });
  } catch (err) {
    return salida_({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}
function doGet() { return salida_({ ok: true, mensaje: 'Sonido El Río: sincronización activa' }); }
