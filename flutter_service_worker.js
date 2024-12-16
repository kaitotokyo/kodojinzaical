'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "7d97f834c30eff16672017dbd59ee2ac",
"version.json": "cb6600a97859cd473ea5f49a9737cb19",
"favicon.ico": "31429ac0898a4243da00af1e68233acf",
"index.html": "395c59fbca8f6c946ad3f819351131d8",
"/": "395c59fbca8f6c946ad3f819351131d8",
"main.dart.js": "69ac667bbdabfe22d1e2c0df3ef1d39a",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"icons/Icon-192.png": "9ddce6a3e16c94e185ebd94d874d800d",
"icons/Icon-maskable-192.png": "9ddce6a3e16c94e185ebd94d874d800d",
"icons/Icon-maskable-512.png": "4353e6e7bb6a1210056b38d58ee67ba2",
"icons/Icon-512.png": "4353e6e7bb6a1210056b38d58ee67ba2",
"manifest.json": "37461af41f42800109f000bbdda0f941",
".git/config": "9075a22b91f5d535dcd35e3efbf3bec0",
".git/objects/95/97016b4b8ea51caa61876b416d64921297eb99": "8e9284fde81b73836465f4d8882bbbc5",
".git/objects/6f/066440e83e4b2a631e77e260a1c23868507230": "3ee638f514435a6545cbc473214e8616",
".git/objects/9e/54516b9593a104417d44f79e5c51683abf418f": "d3879cd51e1329605f05a83b9e6d11ed",
".git/objects/6a/49db55dfc6fb5218faa0843eba23a524c5c5fe": "eaebbcdc3b37fbe2f0a19cbc9de77c13",
".git/objects/58/d4b83b2dfdee133c2b7484eb04096fa2b4d880": "67358eb74c4e85014b3cad279f3c37b3",
".git/objects/bd/069ef340fec3b164987424cef2d8046c760efc": "e58ea3a55221599f9661f09cb3763c7e",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/cdaaa74607830786da8d71b10127c54ca6deb8": "3a3cc2bbf9494273e13454f7b58de981",
".git/objects/d8/093bfe2c9be999cb46e583641c040a7da8206c": "807eb48b4f7e8bf18d2286eab427b592",
".git/objects/e2/979da797e1d145f93aaf4b587197fa96637c3f": "3f6b819a2ee52e233f80c821d0f75567",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c9/997264503f6ea151e9a7951cc3d2c6b7a2abc8": "2817fe205d7b069037729d309ef99f55",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/cf/00e8208ea57a905a18c597bebcb4894a516c0c": "f8eab62d4b953f632cd5cee33e2bd43c",
".git/objects/cf/23f41eba9ae8070869bdcaab829955ddce6935": "fd53098190ca72a0d17867652baf42c3",
".git/objects/ed/02cc0c04a0b7581898169b3375df290c852805": "cfc05c2e7daae9dd8481497421ec956c",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/18/6bec1ddaba4937f5cd8d74cc47dc409b10e288": "99ff7ea72479826613cdd9e0195d7a9e",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/89/f119c6a976d968c680c00eb22b3ab2a73c69b5": "a43d8fca2a30b701306e1765b0f6f550",
".git/objects/1f/6dabc09933c30a574d597e2be8804895ab129f": "2bfd56086d390c04fafc4af79cbb9434",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/74/206d9edd95fbb9b270e7875f9636339b335b71": "19b743d05eb9e3fc83794a467c06188b",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/a3dd26bbfaa8dfe080ba4025c4f669cef9d46f": "22883c6c68469fe514ec2244fcb032c2",
".git/objects/7e/73c94ac94d2072a6479db6c2a7abe5078a8be5": "f1609aa2895789ea598333c549024039",
".git/objects/81/6ac4ca24e84044a8c72530ef195cb4b853873b": "2b21beb6fc42ed488c65cf96ae7d4ad6",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/65/ad97f536078c639c8ce667e3b0d9e378590170": "d124917574710d9dfc99c5b994693c59",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/64/6672f93042ee7e1493fd74a3020d000a28e709": "94a1d8463b9d0da39edc48e8d95fc9f8",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/a7/b67744fcb15960641e9888a762c9c5f37caed3": "04132118465967cc55cc472e04005c9f",
".git/objects/b8/18b19dde40f813004a5bdf6f24101345d39d5a": "79ec2da2a5700557d11f60b72c4c937e",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/dc/74ec994f3af2ab155795ee4406d8702e7b39c4": "3e7b5ea6a51c7eb9f28c560a4e99652c",
".git/objects/a9/73abfa8abb6c08a4b9d79edf318d2cc36da8d1": "a76fd65d5310e47f06a863930117aff3",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/f8e11d561924c18324a0b918708c9cb5afd808": "04a5396e3a5cb6f7a640fd1181a679fc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ef/6bc68a2983b1264da753e6a5ac5294e7cb2530": "472a6c97fc2bc85e185432f018e46aaf",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/ff/95d38f54ffecda0c3695cf7ddceae9274c4f3e": "0596c0179ee2ce0bd491fc349134a83d",
".git/objects/c2/d63681a010161ba1d4f46ca0db21b79154f8b1": "82aac533566c14e6fd2cc60d522f7b29",
".git/objects/f1/e4531e9ae431aff8165b76b14c443943c91bea": "c02160f30f1a89a2cf8e5e51fe4721be",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/5d7b71eb304f74819a3d99f850b82a9896193b": "01042ba79a62224e65e0a82ebdc4a455",
".git/objects/2d/fcdbe9f2df0332cee24295b9c0a4cdbf2478b7": "b40637ed7a305a7a7296f4f96b139cc1",
".git/objects/48/b1fe66803ed00c51df58c5f51db01676cee05f": "e30f2544f087386be36f14880d5f23ad",
".git/objects/4f/346c3e43f95e778d7cef3cb6ceede9cd2bf1c8": "99981890f1649c8ef95c28d9e5a27d4e",
".git/objects/12/79f9d94932f800549923d7934b552cfe74c211": "2d1cfcc1b9d87a97d5e32292cf14a2ad",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/7a/1bfdcfdce90b4316aaeaab094c04efa42c66bd": "c00d4340aea766fe946ed8674cf25473",
".git/objects/8e/8ecfa4bb03d5ba258e21afda63fc29514600ae": "2812ebc122a5ebc4b1e9181f5737e704",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "02bf59894433a3d5474bb13b236e2028",
".git/logs/refs/heads/main": "d2b063ab217dd2fdd595892f04477760",
".git/logs/refs/remotes/origin/main": "214e46d3647defff99cdcb1284895261",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
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
".git/refs/heads/main": "c1c191947b012bdd73ce8398c1175cef",
".git/refs/remotes/origin/main": "c1c191947b012bdd73ce8398c1175cef",
".git/index": "229c68409836657931eeb47c5733b2a1",
".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
".git/FETCH_HEAD": "891496ad8ad3046796fc3b545a4824c5",
"assets/AssetManifest.json": "6f21a80f7422f5123538007ba7207159",
"assets/NOTICES": "6a518d4df3d47101a00d28be4ed72d27",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "d1a8314a6509b6319604649d9b97f4bb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "fd898a82656de9f1e56e3db39302a1fa",
"assets/fonts/MaterialIcons-Regular.otf": "a30276ed22dbe1598c017c475f449198",
"assets/assets/academe.webp": "08ef0e9dfa36565644c7a254ad329ee3",
"assets/assets/manage.webp": "32c2b60c64edbc378be40a18f7b91e96",
"assets/assets/tech.webp": "d275cb955229e01f62be66657e8999c0",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
".idea/vcs.xml": "8c9c0403ab0f6457841c605f08a3340c",
".idea/workspace.xml": "e4b767c56e461ece601efcd81ca54a17",
".idea/modules.xml": "1eb3b065c55895e347308e50cd717dee",
".idea/web.iml": "52db5efd0fe9f576a1302b8c4b5eac6c",
".idea/misc.xml": "dd99d68e9eecd09ad6667609ff8e9862",
".idea/caches/deviceStreaming.xml": "cc9fbe78c71cf5b0d56f0357ecc3a12d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
