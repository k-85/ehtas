'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"manifest.json": "e641bd713557aa014a547dd853b8a069",
"rmap/index.html": "fdd062c4120a58dc7784fdf489ab0b4a",
"/": "d0ecb15bd525dfb17ac2b2b2c8e826a5",
"favicon.png": "cf4a2879579521273c23389fb5173639",
"privacy-policy/index.html": "993b9888cb2c26ddd917af13d86f40d1",
"error.webp": "9fddc94d9899249703779699fd26c0db",
"503.html": "07207a6e90c1182ca1b4e544d7b830d0",
"version.json": "0e91604db951c5c6466ef1dbd2248e42",
"403.html": "6564f76e333e8e4bd30527c263a42cce",
"icons/Icon-192.png": "b74b5251808cfd977e2eda486a1dd762",
"icons/Icon-512.png": "838528695fa25cf1b340a6fa53a01a34",
"401.html": "8dc37f24d224ee4ea8a13ce079e998a3",
"assets/AssetManifest.json": "54fba9e8b49f5b79225708821d618f7f",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "e8abdb079dc1cdaf9ad5d352e2a549d3",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a5d7457fda15b7622c14f432ba63039a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "c291d71c1c2900a12d29e3bcc4e8e82f",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/assets/website/ehtas_hd.webp": "45ce688a858f39969bf7d6d3706bb9bb",
"assets/assets/website/releases/cfr.webp": "ce6b2cf3f05e3c674f9a01f893d8c3c9",
"assets/assets/website/releases/shag.webp": "98593e211a502d547299ad2dcdb60d4a",
"assets/assets/website/releases/atn.webp": "88ca1cb1031fb87a378b0a32aa5d8af8",
"assets/assets/website/releases/mc.webp": "8debabae1555157d71c87ff1e650ed92",
"assets/assets/website/releases/rmap.webp": "13b613b41973358584707418cbd74069",
"assets/assets/website/releases/memo.webp": "3e22d4803a5472cf5229054f7fcab1a4",
"assets/assets/website/releases/memo_plus.webp": "da9a35795f36086d8c573e2fbca6acdf",
"assets/assets/website/latest/slide5.webp": "6c94982caf7971076f6967686f7a4be1",
"assets/assets/website/latest/slide1.webp": "607db3a1e6644d54acbd2ff7f4a6094c",
"assets/assets/website/latest/slide3l.webp": "0974d0da7ab22c39c3d870c0ae517966",
"assets/assets/website/latest/slide2l.webp": "c9ec33364e59991ddefeab2b6e7bd0e9",
"assets/assets/website/latest/slide6l.webp": "0adcd5e80cbbf73f6acc04fab7b38580",
"assets/assets/website/latest/slide4.webp": "67b0674ce1253f06624a382a9c3366f6",
"assets/assets/website/latest/slide3.webp": "3f3c198f90a5af49e62d2e994b027fb5",
"assets/assets/website/latest/slide5l.webp": "72b9502e24939b0e9a5c3e30e750dbda",
"assets/assets/website/latest/slide2.webp": "171846ccbb4a3acca4a78cbd276bf4c6",
"assets/assets/website/latest/slide1l.webp": "ee27b472429608847dc48e1a629ff278",
"assets/assets/website/latest/slide6.webp": "7a6ebdd8d45dc5426fe6459ce774878e",
"assets/assets/website/latest/slide4l.webp": "c71c16692b936f0d5cf0d97a35483690",
"assets/assets/website/header.webp": "9b408e1dc311085bf1577a1f1586558d",
"assets/assets/website/artwork.webp": "e47115e67dd7672a43b54360a7f80975",
"assets/assets/website/contents/latests.json": "74156264ce6f420a9cace9372774add1",
"assets/assets/website/contents/releases.json": "fd03e2b275159aca400fb73ec54a0eaf",
"assets/NOTICES": "d819702d8d42a7578c7a356121a21f63",
"assets/fonts/MaterialIcons-Regular.otf": "10c97c03d41864f576985b52f84ebaad",
"assets/AssetManifest.bin": "d4ef328c62b36d0c10c4c466e77680a8",
"main.dart.js": "1ffef4e6b15e0c7dabf9c07427a6dc3f",
"index.html": "d0ecb15bd525dfb17ac2b2b2c8e826a5",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"400.html": "90a989e7bf50497eedf052c0150c29ea",
"404.html": "46ceafa67a3b9418b7d761b1e3d60461",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
