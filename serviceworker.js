var cacheName = 'kabbeleka-cache';
var cacheWhitelist = ['kabbeleka-cache'];
var urlsToCache = [
  '/',
  '/index.html',
  '/style.css',

  '/kabbeleka.js',
  '/main.js',
  '/ink.js',
  '/swregistration.js',
  '/serviceworker.js',

  '/Algtorn.jpg',
  '/Arrow.png',
  '/eld-i-skogen.jpg',
  '/frilagd-alg.png',
  '/Fyrhjuling-vid-jaktstuga.jpg',
  '/Logotyp.png',
  '/Logotyp-kabbeleka.png',
  '/Till-jaktstugan.jpg',
  '/Zombie.png',

  '/Bilresa.mp4'

];

self.addEventListener('install', function(event) {
    // Perform install steps
    event.waitUntil(
        caches.open(cacheName)
            .then(function(cache) {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('activate', function(event) {
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
          return Promise.all(
            cacheNames.map(function(cacheName) {
              if (cacheWhitelist.indexOf(cacheName) === -1) {
                return caches.delete(cacheName);
              }
            })
          );
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          // Cache hit - return response
          if (response) {
            return response;
          }
          return fetch(event.request);
        }
      )
    );
});

