var deferredPrompt;

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/sw.js')
    .then(function () {
      console.log('Service Worker registerd');
    });
}

window.addEventListener('beforeinstallprompt', function(evnet) {
  console.log('beforeinstallprompt fired');
  event.preventDefault();
  return false;
});
