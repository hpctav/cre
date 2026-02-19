const CACHE_NAME = 'editor-v1';
const ASSETS = [
  'index.html',
  'style.css',
  'app.js',
  'manifest.json',
  'https://fonts.googleapis.com'
];

// Cài đặt và lưu trữ các file vào bộ nhớ máy
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Lấy dữ liệu từ bộ nhớ đệm khi không có mạng
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
