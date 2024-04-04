'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "3843e997b9ad177b04d1f63069a99d08",
"index.html": "3137eed482929e9daa1b2228d181dd9b",
"/": "3137eed482929e9daa1b2228d181dd9b",
"main.dart.js": "687b8a648b0d1142c2a1eb25b361f9c1",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"README.md": "9096ec7731be141ec3ade45041e16d99",
"favicon.png": "9f4fb03b9229d1c698ec33c5ce9a1f46",
"icons/Icon-192.png": "e9a13609851937cc445046e53ce5bcd5",
"icons/Icon-maskable-192.png": "e9a13609851937cc445046e53ce5bcd5",
"icons/Icon-maskable-512.png": "debe0dc701b0b222e9d3071a4f9aa1a1",
"icons/Icon-512.png": "debe0dc701b0b222e9d3071a4f9aa1a1",
"manifest.json": "9bc1e4be2dc1b553a70415f8a59ff82c",
".git/config": "807e1a37a617946fbba284ddd9bd62d5",
".git/objects/9b/67e7e915c69322d7fb3f539a9dbd8fa7bee393": "12c0ef69dff04d1ec732a5bb8d81f6d7",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/69/d4dd373b3dd6b370f7e12be1d8e88c005d5092": "48080cf0dee4ff1f15511bbea0bbce04",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/33/7a48d0116c67a3462fefe45635a959e0972b1c": "a81b168f03092cd87c2746f1de453585",
".git/objects/b5/5d7fdaf5142b81e392fbcd4951752342039782": "7a45bac1e7adaebf176d9a6d64d4d278",
".git/objects/ac/0b6abc9d30d84c285d1e35add53f54e363b55d": "80bf971815466a1da8a0eb7509fa4898",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/b3/2788084689a6b02a05b24615748da1a0256ee6": "ff3c646693f3e897e72465e296e5d89a",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/4b/08c92a6448f807045994c6de22d8ee9093aaab": "73d0aae290bed3c22142aa1a7a3ba56f",
".git/objects/8f/50e585de21c7682c2ed454b697bb92f2ce8402": "a766c9ae43498fed9cccca1e8342ea9d",
".git/objects/8f/9af0d208f702cca4f73d776b9ec2dd6afcf72a": "8e24263735d13e50d4430120ecae7637",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/21/95f0712a1d59fa1e715c7cbb75424da6843c1b": "2ee6f29bcbc8e0b7bb83963a04b8adc1",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/1250bd615011aca03e5bc4e7ac1f78c7bca786": "9b5a85e8568a8cb5a9790975ab998e0f",
".git/objects/36/4fdbfbf4123c2bba620b0c367f240c27ace33d": "322e328484f6fb4a93fdfd97c19c3814",
".git/objects/5c/c6b490a6d2abcb3104cd22d8091b93110b3719": "d4c8ffaa5603b7e1787b74cceb0cd761",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/d4/130001cb80c285f7aab039faba4019ea7f05a3": "4e129b7c0c7b14977b55c67ea2571bf0",
".git/objects/d4/1d246b818c324f791721d26a12015b183d73c7": "3612d9270bf1143c0f7f3c7c3564a008",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/dd/993e906b947f7fffb790ff53797ecf0861026e": "65cce08b65d9f46108f8499da0257484",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c4/d111828a800d19c348183fd67366d137df121f": "001657190f05ec9f9189fc746c8ac96a",
".git/objects/ea/f49f333b801b381356e566aadb83b2d045aca9": "4594efbaf55ffabba5b2b1add71b5dff",
".git/objects/e1/df5e97112284b66ddc165108c8d83ff5ca78fe": "e825e755008c748afa0d750b3750ad07",
".git/objects/cd/10f8114bc1361c02c187f1cc072fb3cafdf74a": "3494254237e601c83a6da6f7db8c7560",
".git/objects/f7/71e3b5822bb66364fc0e29ba7252ffbedc56f1": "3261d45d19241162d4f33590d9ed6351",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/23/c15aa7c2ed7ed4a12ae016883fead4f9f98af4": "f7fcd73eba96def455b072a71522561e",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/40/7d800cef2e0197c81faf3e8269dd3b865da6f3": "0938cdd91958d9e81fa239e00fb2376a",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/78/237d48c86835f937b8730d631bb9711120d32a": "cfefbe34fab68d08277d1142077c4866",
".git/objects/8b/4dbe715fb87664e1be98bcc75c3584c8604e13": "f2c174ae11291c4d2d751a9ecb8d1e8b",
".git/objects/8e/5f60f18916f8ddbe2e7de7986e828dabfa0189": "1997a4f49f0a226d44c1e84866f33f78",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c9c3cab2ceb13f5c1ca8692c3b164534",
".git/logs/refs/heads/main": "f3743edd933ef7a3472441168476d1e3",
".git/logs/refs/remotes/origin/main": "b09ab9b0e13ed327a9c2ec4f15002823",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "de4e9291d95a1b9aea69ed2a306f1fa7",
".git/refs/remotes/origin/main": "de4e9291d95a1b9aea69ed2a306f1fa7",
".git/index": "3c020db939d86020b1c5a5073840abee",
".git/COMMIT_EDITMSG": "c6479685089d19729b3653360e6438bd",
"assets/AssetManifest.json": "370eeb526c31d0127f3803a61b2cbff5",
"assets/NOTICES": "74d6ab3d7a83fc9361145c7eab8f1195",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/AssetManifest.bin.json": "b64e102e0e38b8078101ae557b72387a",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "4e8f7be7acb464a962e7442ce3f133fb",
"assets/fonts/MaterialIcons-Regular.otf": "59dc753eb3f6abf35f15e4b432d78d5c",
"assets/assets/VAJRA.png": "0264be629dd3373b24f966393d315537",
"assets/assets/RUDRA.png": "9ab165596e3e0c940a2bfd9609c1afd7",
"assets/assets/AGNI.png": "8da677924b1746f4c86fdda0d2e09560",
"assets/assets/ASTRA.png": "678a2b0a3d74c2326d07ab4325d1973e",
"assets/assets/icons.png": "29547203b0107da98edf0ad099bdd3fb",
"assets/assets/rank.png": "2fb8be26cd16e492134587e90060bcff",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
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
