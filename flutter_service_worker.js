'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "fbda372e42bb263e702740f4f12df871",
".git/config": "bac6a7359ada31b137660b0e8c57abf6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "84bde417a32f5ce451bcb04bd97fc168",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9f81d3755682781f086a3920fbc02d1e",
".git/logs/refs/heads/master": "9f81d3755682781f086a3920fbc02d1e",
".git/objects/02/f23b571a7ddad9e63b487f4730980bcadbb04c": "2634943bcbad8d97e602ba2c2fb8dd7b",
".git/objects/06/dc0ba87cb197eb9b36e49f79bc0a0c39793603": "2bef629434b9f2c1238e1fe176639914",
".git/objects/07/5770ef9efd889efc957ac71eb69f443d198c34": "32826931cb9eee674d357fc66385b982",
".git/objects/18/19e586b3b07c36fb17b127b2c00020a3b9ddef": "ed73ab9ee53938320ad3ed63dad8ea6b",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/1e/01618802d3b90bad240686f4a873b2ea296082": "1bdc4d93abfba43a7bee4be7aceba708",
".git/objects/2f/78b950ccf2e918a094493225a904ebfdc1fbf4": "7e04ff9a18a2620a24ebf61100c9b892",
".git/objects/44/78084c782dfe8784733bd492a2f6766379686d": "ac41c9e9ef94cc6fe75deaef98549dda",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/4f/5f89dd544c78616927a1c74dc088aad80ea433": "316dcacd5f2d2c70ba9d1d1171f48f9d",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/5e/89bf8963270ed8c83cbd4ec9ff0d5f755aa344": "c96180217975e48cb2dd3678ba0d2713",
".git/objects/63/c1371010393e3c34a84042876364d96ef0640c": "c618976ad3a22e3ee924328b046acc25",
".git/objects/69/4f7f8e9442addb98543f1c334d089af6016de5": "54cec60275dfe6aa3d4f6bdd3e38da36",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6c/b773ad91c19b4338c3ce6bbc873cf0d13d034f": "032fb1f1c98d11d8485f64d79584f570",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/73/1bde79a33ded2112fbf953614e43c89107d89a": "b67113516945ec98ade572366bd602e8",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/7c/162962384e9156e0aeaa56ae0df3d0fa370c40": "91a52b06970d3cf24bbd161a1a990949",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/8f/008189056e05b2ca9d3b84cf72283f861d2d33": "17cb95578f292a329112e254dc5f8328",
".git/objects/93/02e1dc02bc5ca9b7f10981af530c744b6cedb7": "c2bc148b67d29508518edc2aaccf5567",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/ad/185860e22eea0884ecf38b9876a17d71e67a0f": "ca574ba06271bf88e3c816c0ebe1530e",
".git/objects/b0/a9f7a51f9911b3e197c510a365ade9902006f8": "76db772cfd939ba156278caf3e84e61d",
".git/objects/b8/9f6ac29d2d3771290e3a9711bcf430e868800b": "9cc803c9df44b82ccf8cb667934affb7",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/c0/b908454abfd5a9b1828aadd32b5b891bae43c3": "0f484210776ed02684536df6648f5519",
".git/objects/c2/302c04b6cb5e8e2082a1676cce36d0a3981d76": "d94c01bbfd8f0ae74d7ff39b6cebc380",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/ca/d5e9efde41591fe673b22cdc2010bd5f2904c9": "46641926f4cb53cf5719713f9fd6e21d",
".git/objects/d2/238d5e44ce50b92a78a48d695076f20907af98": "6cf55e99574ac7cc3c5dba00b5432e1d",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb326f5836b1dc9a14e5988dca7c3494baa3c6": "fca9bb36ad04bf28c3c62e3c04b1ba7e",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/df/5d402c7b19f022ae73310825aae6383b7e9ee5": "e2a6d66deea9fd519de16ea3dd01b6a8",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e0/995eebcbed857dfe6be43adb07f487220ff95e": "c4ed75930102bd16278fdfef6795eb6c",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/e38ac81109e1827c51a1385b1562466fbcfe67": "06ce6767e1d29c8733797e58f0392f9f",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f8/cb0c17b51940d3643c7f8134639a7d0a8f4902": "e4a07467dafbad02868b3295d15ed997",
".git/objects/fb/6d94f307b2aeda7d791a140fca76816949708e": "7e5f68567eee98efea54dc2151ec5715",
".git/refs/heads/master": "d630e5ca1bd46e6bb4cd2361dd517bdc",
"assets/AssetManifest.bin": "b16907578f8e1c5ce969926d4059e8dd",
"assets/AssetManifest.bin.json": "7c07eec10f28dedb0109e3d346d5fbfd",
"assets/AssetManifest.json": "17225032db6ff0f6e38cb45f92332d8f",
"assets/assets/app_icon.png": "941734354d3d0f8e1c16742dad1d7517",
"assets/assets/logo.png": "9a4a2e24035d9af951dfcfa28faaa654",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "435482bbfdf56fc911ef5ebb9974f4f5",
"assets/NOTICES": "68278dca4cf4e6b73d3c3657334136fc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "941734354d3d0f8e1c16742dad1d7517",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "2a75bc3d81e409c07a42c74d113e254f",
"icons/Icon-192.png": "68541c32030e87ad13de633d935fdad4",
"icons/Icon-512.png": "d2649e7af1835ebdb7671e2bc89befdf",
"icons/Icon-maskable-192.png": "e3472d10e029014d439aef1e0eeae1c4",
"icons/Icon-maskable-512.png": "bc8da9fe3a783407199e261aec3ee963",
"index.html": "9f491bce60935e22b4c42dda8fc6493f",
"/": "9f491bce60935e22b4c42dda8fc6493f",
"main.dart.js": "8e72ac5969597da9d849c8c0c88e2379",
"manifest.json": "8cab1422c9475aa6327b0a5f57518b13",
"version.json": "6edcc0552f78da3f0ce64c3603d706c4"};
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
