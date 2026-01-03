let db;
const DB_NAME = 'expiredDB';
const STORE = 'expired';

function openDB(callback) {
  const request = indexedDB.open(DB_NAME, 1);

  request.onupgradeneeded = e => {
    db = e.target.result;
    if (!db.objectStoreNames.contains(STORE)) {
      db.createObjectStore(STORE, { keyPath: 'id' });
    }
  };

  request.onsuccess = e => {
    db = e.target.result;
    callback && callback();
  };

  request.onerror = () => {
    alert('Gagal membuka database');
  };
}

function getAllTemplates(cb) {
  const tx = db.transaction(STORE, 'readonly');
  const store = tx.objectStore(STORE);
  const req = store.getAll();
  req.onsuccess = () => cb(req.result || []);
}

function getTemplateById(id, cb) {
  const tx = db.transaction(STORE, 'readonly');
  const store = tx.objectStore(STORE);
  const req = store.get(id);
  req.onsuccess = () => cb(req.result);
}

function saveTemplate(data, cb) {
  const tx = db.transaction(STORE, 'readwrite');
  tx.objectStore(STORE).put(data);
  tx.oncomplete = () => cb && cb();
}

function deleteTemplate(id, cb) {
  const tx = db.transaction(STORE, 'readwrite');
  tx.objectStore(STORE).delete(id);
  tx.oncomplete = () => cb && cb();
}
