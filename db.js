let db;

const DB_NAME = 'expiredDB';
const DB_VERSION = 1;
const STORE_NAME = 'templates';

function openDB(callback) {
  const request = indexedDB.open(DB_NAME, DB_VERSION);

  request.onupgradeneeded = e => {
    db = e.target.result;
    if (!db.objectStoreNames.contains(STORE_NAME)) {
      db.createObjectStore(STORE_NAME, { keyPath: 'id' });
    }
  };

  request.onsuccess = e => {
    db = e.target.result;
    callback && callback();
  };

  request.onerror = () => {
    alert('IndexedDB error');
  };
}

function getAllTemplates(cb) {
  const tx = db.transaction(STORE_NAME, 'readonly');
  const req = tx.objectStore(STORE_NAME).getAll();
  req.onsuccess = () => cb(req.result || []);
}

function getTemplateById(id, cb) {
  const tx = db.transaction(STORE_NAME, 'readonly');
  const req = tx.objectStore(STORE_NAME).get(id);
  req.onsuccess = () => cb(req.result);
}

function saveTemplate(data, cb) {
  const tx = db.transaction(STORE_NAME, 'readwrite');
  tx.objectStore(STORE_NAME).put(data);
  tx.oncomplete = () => cb && cb();
}

function deleteTemplate(id, cb) {
  const tx = db.transaction(STORE_NAME, 'readwrite');
  tx.objectStore(STORE_NAME).delete(id);
  tx.oncomplete = () => cb && cb();
}