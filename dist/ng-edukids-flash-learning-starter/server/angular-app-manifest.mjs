
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-7VLEUEG2.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-RXWYPZN4.js"
    ],
    "route": "/english"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-RXWYPZN4.js"
    ],
    "route": "/arabic"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-RXWYPZN4.js"
    ],
    "route": "/numbers"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-NY642PGC.js"
    ],
    "route": "/bedtime"
  },
  {
    "renderMode": 2,
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23625, hash: 'f979855961761cf4b80e956559d8a30aaa507e0f9e9f7cf51f1caa3cf3d6fa41', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17244, hash: '061f9838308b2f6d77a2b04cb381382ead8788ccf42c11e412c4453ccd592822', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'english/index.html': {size: 44664, hash: 'e471454771d903c08a00bfb23b59d3eaed3afe3cf3aed298997903564fa3ae6c', text: () => import('./assets-chunks/english_index_html.mjs').then(m => m.default)},
    'bedtime/index.html': {size: 59423, hash: '25d9ca05fd03476706b854d2a2c1a10ae9fa7dcfe53a20be558dc088796e932b', text: () => import('./assets-chunks/bedtime_index_html.mjs').then(m => m.default)},
    'arabic/index.html': {size: 44670, hash: '7bf200e918c2e2d38cfc1a73d01790d5bf41d87a84ea4f857fc175fa5c9da60c', text: () => import('./assets-chunks/arabic_index_html.mjs').then(m => m.default)},
    'numbers/index.html': {size: 44656, hash: 'e5743f10e9f187a8adeb39f0f720a6858816f1844897d95f97e7c7543eee6eb8', text: () => import('./assets-chunks/numbers_index_html.mjs').then(m => m.default)},
    'index.html': {size: 33153, hash: '19478ada926f677a7f157dfe02ad0eed47271d8897c7ec072c259c804adc4655', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-RAAS3IB4.css': {size: 6934, hash: 'EEncqnFKz04', text: () => import('./assets-chunks/styles-RAAS3IB4_css.mjs').then(m => m.default)}
  },
};
