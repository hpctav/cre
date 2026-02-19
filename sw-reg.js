if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js')
      .then(reg => console.log('SW đã chạy!'))
      .catch(err => console.log('Lỗi SW:', err));
  });
}
