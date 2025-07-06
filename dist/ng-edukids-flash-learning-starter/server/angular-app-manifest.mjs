
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
      "chunk-W7GHHXHD.js"
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
    'index.csr.html': {size: 23625, hash: '1f6720477bf76dd949aafaf68659ef8061d07da863831a509e1c549cad6dc917', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17244, hash: 'b2e69d819f8b3c4970a3c62c0ec998e9a3d474f4acf059592dcfc5033798c209', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'english/index.html': {size: 44664, hash: 'd613e76742d529db66668e46d653b0c7d2b0499c7162d4683421242c2cada98f', text: () => import('./assets-chunks/english_index_html.mjs').then(m => m.default)},
    'bedtime/index.html': {size: 60024, hash: '6912efb2c0d5cff6e3737c1d40bb5f01a1587d53e267ab0aaa4523d6f44542a2', text: () => import('./assets-chunks/bedtime_index_html.mjs').then(m => m.default)},
    'arabic/index.html': {size: 44670, hash: 'b216212398b6654a155aa562a9be4f0b2941e526b3c6accb68446e734cdf012f', text: () => import('./assets-chunks/arabic_index_html.mjs').then(m => m.default)},
    'index.html': {size: 33153, hash: '0857e7a5de9fe50d6651910dff73c208fa769f3f7a9c45a595c4f17dee553440', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'numbers/index.html': {size: 44656, hash: 'aa58faff7538acb5af3b84e195ec50121bbbcb9b9b3489ad42c4216ae47dcf6e', text: () => import('./assets-chunks/numbers_index_html.mjs').then(m => m.default)},
    'styles-RAAS3IB4.css': {size: 6934, hash: 'EEncqnFKz04', text: () => import('./assets-chunks/styles-RAAS3IB4_css.mjs').then(m => m.default)}
  },
};
