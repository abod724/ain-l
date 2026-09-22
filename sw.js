self.addEventListener('install', (event) => {
  console.log('Service Worker installed');
});

self.addEventListener('fetch', (event) => {
  // يمكنك إضافة كود التخزين المؤقت هنا لاحقاً
});
