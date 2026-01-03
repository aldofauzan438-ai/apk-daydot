let db;
const DB_NAME = 'expiredDB';
const STORE = 'expired';

function openDB(callback) {
  const req = indexedDB.open(DB_NAME, 1);

  req.onupgradeneeded = e => {
    db = e.target.result;
    if (!db.objectStoreNames.contains(STORE)) {
      db.createObjectStore(STORE, { keyPath: 'id' });
    }
  };

  req.onsuccess = e => {
    db = e.target.result;
    callback && callback();
  };

  req.onerror = () => alert('IndexedDB gagal dibuka');
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
