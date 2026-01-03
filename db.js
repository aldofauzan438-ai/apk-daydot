let db;
const DB_NAME = 'daydotDB';
const DB_VERSION = 3;
;

function openDB(callback) {
  const request = indexedDB.open(DB_NAME, DB_VERSION);

  request.onupgradeneeded = e => {
    db = e.target.result;

    if (!db.objectStoreNames.contains('templates')) {
      db.createObjectStore('templates', { keyPath: 'id' });
    }

    if (!db.objectStoreNames.contains('expired')) {
      db.createObjectStore('expired', { keyPath: 'id' });
    }
    if (!db.objectStoreNames.contains('expired_items')) {
    db.createObjectStore('expired_items', { keyPath: 'id' });
}
  };

  request.onsuccess = e => {
    db = e.target.result;
    callback && callback();
  };

  request.onerror = () => {
    alert('Gagal membuka IndexedDB');
  };
}

/* GENERIC HELPERS */
function getAll(storeName, cb) {
  const tx = db.transaction(storeName, 'readonly');
  const store = tx.objectStore(storeName);
  const req = store.getAll();
  req.onsuccess = () => cb(req.result || []);
}

function addData(storeName, data, cb) {
  const tx = db.transaction(storeName, 'readwrite');
  tx.objectStore(storeName).put(data);
  tx.oncomplete = () => cb && cb();
}

function deleteData(storeName, id, cb) {
  const tx = db.transaction(storeName, 'readwrite');
  tx.objectStore(storeName).delete(id);
  tx.oncomplete = () => cb && cb();
}
