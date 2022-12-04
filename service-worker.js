/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "b5c4a4282ca0d45d2c7d582550eec647"
  },
  {
    "url": "assets/css/0.styles.121133b5.css",
    "revision": "29b02f3f3ea850219cb4f4d76e61474a"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/claw.f886b8d5.svg",
    "revision": "f886b8d5021c8af029e2cd4dea609bcc"
  },
  {
    "url": "assets/img/sakura.5e4a2cfb.png",
    "revision": "5e4a2cfbc3aae83420146d71ee06ba17"
  },
  {
    "url": "assets/js/1.17aa9421.js",
    "revision": "94ea9781d372dfca9cfebb9a2dad11af"
  },
  {
    "url": "assets/js/10.02dae30a.js",
    "revision": "ba07c45ef506e872a66ce106ad6cfe60"
  },
  {
    "url": "assets/js/11.42a78baf.js",
    "revision": "85afb939726e0538094a448cc50c6190"
  },
  {
    "url": "assets/js/12.414adf11.js",
    "revision": "3c9661840a98e263be8cb90728a3b421"
  },
  {
    "url": "assets/js/13.a6398ecd.js",
    "revision": "ad2c849372c828dfdc02a73b68c0c0ea"
  },
  {
    "url": "assets/js/14.752c2cee.js",
    "revision": "d6ce35dd9a482226a5b2a59b41051dfe"
  },
  {
    "url": "assets/js/15.a3fe7430.js",
    "revision": "4c3018279587cf2b2f777fc4de6c342a"
  },
  {
    "url": "assets/js/16.375d944c.js",
    "revision": "eccd6ec75702f3f418d4916ca4149ddb"
  },
  {
    "url": "assets/js/17.e50e3ea6.js",
    "revision": "3746c2a05c462f2f0b45aabe69426e84"
  },
  {
    "url": "assets/js/18.ac8a2185.js",
    "revision": "214f06bfef0f1aa3607a76e804718ceb"
  },
  {
    "url": "assets/js/19.a05bdaf7.js",
    "revision": "6188cc5c5c90d3a19cd7a08f3d542c3f"
  },
  {
    "url": "assets/js/20.48a1a64c.js",
    "revision": "41475292474cd3650e6ae3ad143fe114"
  },
  {
    "url": "assets/js/21.069da357.js",
    "revision": "d2ceee797dca3fa0494f28c7e9137e67"
  },
  {
    "url": "assets/js/22.093228b3.js",
    "revision": "f627b8df7a9ba4cb5e023384ae69fb33"
  },
  {
    "url": "assets/js/23.93263c32.js",
    "revision": "b9fab51330e1eabc458816d6bbd54d09"
  },
  {
    "url": "assets/js/24.31b4fc66.js",
    "revision": "b8063adfef63a8e73d94a61823762c70"
  },
  {
    "url": "assets/js/25.e2f8d46c.js",
    "revision": "c4aa8f61d6b4411511858c99b4a34d84"
  },
  {
    "url": "assets/js/26.f5b30f07.js",
    "revision": "da019dde7a880af041d8a7fc553430c5"
  },
  {
    "url": "assets/js/27.a5d66ee6.js",
    "revision": "768d86f064968ff8689d05568bb1c178"
  },
  {
    "url": "assets/js/28.a2458af0.js",
    "revision": "e6768ff74bf15c30dde71fc47747d021"
  },
  {
    "url": "assets/js/29.6dc361f3.js",
    "revision": "2e947b7c397ecc28c2f1a65e58fcbc60"
  },
  {
    "url": "assets/js/3.385c8dae.js",
    "revision": "9c05e86a97b3e73d8d00d5744ac8cac9"
  },
  {
    "url": "assets/js/30.35959338.js",
    "revision": "6a0e517cce895612bee5b9b00daaab95"
  },
  {
    "url": "assets/js/31.d9caf32b.js",
    "revision": "57744410904679b00012ebce28324846"
  },
  {
    "url": "assets/js/32.510774cd.js",
    "revision": "7480f1b1b45f6938e6e09b6214395563"
  },
  {
    "url": "assets/js/33.ea54f06d.js",
    "revision": "40adacdd11ecf67c66c7551e2cf7447f"
  },
  {
    "url": "assets/js/34.df7b41df.js",
    "revision": "5d4dc2c2992d055cd8407b2b799fce0d"
  },
  {
    "url": "assets/js/35.3d42f0bb.js",
    "revision": "8559388422acf7bdbd97b66a43f6aa67"
  },
  {
    "url": "assets/js/36.7c49a19e.js",
    "revision": "92548c1ee2bb0f624304a2b278c08cf7"
  },
  {
    "url": "assets/js/37.a3bc2d7c.js",
    "revision": "b762a978cad42a58b5d314d8b1489ca6"
  },
  {
    "url": "assets/js/38.90965a9d.js",
    "revision": "baa42a19710e598d247ee6c13ac21f37"
  },
  {
    "url": "assets/js/39.f2abe310.js",
    "revision": "8bbf75c89b3568a6a671625b248c0418"
  },
  {
    "url": "assets/js/4.dc204c6a.js",
    "revision": "b4be0493c2802214e9b2fcb257087c29"
  },
  {
    "url": "assets/js/40.a76ad0b2.js",
    "revision": "604fb18144a05792c940c7a144893b71"
  },
  {
    "url": "assets/js/41.00e10bf4.js",
    "revision": "32756151614f576dbf1eec7ee71bcda5"
  },
  {
    "url": "assets/js/42.a72cbdc5.js",
    "revision": "7b547269dc24dec6789bfea6bfdb0435"
  },
  {
    "url": "assets/js/43.22d40f5a.js",
    "revision": "8cb7f6c4de03a93600c08feef6aa4ca9"
  },
  {
    "url": "assets/js/44.7009b0ac.js",
    "revision": "6a58d5762da501057474e23e01e685ad"
  },
  {
    "url": "assets/js/45.e19f40e4.js",
    "revision": "01a4f9a658a699c7d68ec6ae0285e3db"
  },
  {
    "url": "assets/js/46.85255cdc.js",
    "revision": "c8c8cc7bd268588a69bb81e60dcdc505"
  },
  {
    "url": "assets/js/47.0ffd1521.js",
    "revision": "10c37b8a227f61f23a780659e36fa266"
  },
  {
    "url": "assets/js/48.b22bd73b.js",
    "revision": "1b8ccf2e2d6bef54b662136d16f94f8f"
  },
  {
    "url": "assets/js/49.e862a680.js",
    "revision": "291ba472f25b94f0cf49cddcc5dc2978"
  },
  {
    "url": "assets/js/5.16e053cb.js",
    "revision": "82536708da9b3e8ce16469298a714087"
  },
  {
    "url": "assets/js/50.7c210405.js",
    "revision": "9a2d7aa05a11d30b43cf88877d8c08d4"
  },
  {
    "url": "assets/js/51.646c320f.js",
    "revision": "759bdc49786c090f555b0ed6fbf1b955"
  },
  {
    "url": "assets/js/52.5ae6db1e.js",
    "revision": "0458cfb87a168cc1fee43d11820bf7bf"
  },
  {
    "url": "assets/js/53.9643b691.js",
    "revision": "abd40595f9735631bfe6cce4201fecca"
  },
  {
    "url": "assets/js/54.d978ed69.js",
    "revision": "43529d33711c44e9f39289fb3f829cfd"
  },
  {
    "url": "assets/js/55.fe20e640.js",
    "revision": "dd18f5017bd14e7787a9db4640eb2f59"
  },
  {
    "url": "assets/js/56.8fefa4cb.js",
    "revision": "92462f6944c10f3c1cfdc33c597281ae"
  },
  {
    "url": "assets/js/57.a1f2addc.js",
    "revision": "e457b03aa09572206fab626ac2433e57"
  },
  {
    "url": "assets/js/58.04851039.js",
    "revision": "dcb213994a7134e739b7cab141d2590f"
  },
  {
    "url": "assets/js/59.2552c448.js",
    "revision": "f8dbc730e42e0b43c7d61639ce19c8ac"
  },
  {
    "url": "assets/js/6.1e15eb58.js",
    "revision": "b027af5c567e48007c8e79ebf51bf352"
  },
  {
    "url": "assets/js/60.fdcbeff3.js",
    "revision": "a3c5a61f2e555583d5f5d33819da0323"
  },
  {
    "url": "assets/js/61.1bd8d3e9.js",
    "revision": "1d465679c9d3bd302725ba08cd194456"
  },
  {
    "url": "assets/js/7.ffba2910.js",
    "revision": "26df9d181b6477bab99cddfeca651781"
  },
  {
    "url": "assets/js/8.c8536361.js",
    "revision": "992f624947246ac4a24af8260fcbc7d9"
  },
  {
    "url": "assets/js/9.a5f70f0b.js",
    "revision": "07e0378df543c5b478023d9864b8c6af"
  },
  {
    "url": "assets/js/app.22545c6f.js",
    "revision": "75b4df460b53de6b778b2a916157651c"
  },
  {
    "url": "base/domin.html",
    "revision": "9701e2687a750dd426a545c76db7b339"
  },
  {
    "url": "categories/index.html",
    "revision": "cb6be6bf3f4da3539576aacbfea06800"
  },
  {
    "url": "categories/源码分析/index.html",
    "revision": "b22eff0cbeeddb1e658859d9f49504aa"
  },
  {
    "url": "categories/源码分析/page/2/index.html",
    "revision": "5d8f2bb971e763dca365a9f98b8c910a"
  },
  {
    "url": "categories/进阶/index.html",
    "revision": "4641afcf94dcfffeb1e46426fd7ca34a"
  },
  {
    "url": "categories/零碎点/index.html",
    "revision": "549b350e7911aee0fc3e27e53bbf34b4"
  },
  {
    "url": "categories/零碎点/page/2/index.html",
    "revision": "36185bfba8186896f3f5907f7a1c0183"
  },
  {
    "url": "config.html",
    "revision": "cdd5baac1b638226fd72d620a0402fe0"
  },
  {
    "url": "dataStructure/deque.html",
    "revision": "0d520f785df196408de10647103ebf57"
  },
  {
    "url": "dataStructure/doublyLinkList.html",
    "revision": "b8e676d0af8cbe3fd64db9d9e1c734b4"
  },
  {
    "url": "dataStructure/linkedList.html",
    "revision": "dae45742681ccb62e28c10ef3111363a"
  },
  {
    "url": "dataStructure/queue.html",
    "revision": "b850784bdcfd64a24753c569f043c151"
  },
  {
    "url": "dataStructure/sortAlgorithm.html",
    "revision": "27e54c29b842c7cbc839194bbc596a2e"
  },
  {
    "url": "dataStructure/stack.html",
    "revision": "15193b6a1e703f4811847c005458063c"
  },
  {
    "url": "guide/index.html",
    "revision": "d76b865556b9dafe7bef143a633fef4f"
  },
  {
    "url": "img/avatar.jpg",
    "revision": "b820cfda200d881097ac62e56043e03e"
  },
  {
    "url": "img/avatar1.jpg",
    "revision": "855c9cd0b4001f87a328aa91d58e6438"
  },
  {
    "url": "img/bubble.gif",
    "revision": "33a947c71ad62b254cab62e5364d2813"
  },
  {
    "url": "img/depCollection1.png",
    "revision": "161fdc112673cb26367f98a908c369d2"
  },
  {
    "url": "img/depCollection2.png",
    "revision": "1eab249273d47e4f9804b01b5bb591fa"
  },
  {
    "url": "img/depCollection3.png",
    "revision": "2d6baacd2de7cae1a9c4ba16fee6d14b"
  },
  {
    "url": "img/depCollection4.png",
    "revision": "83c1376742cb56ffb58c6293ab06bb2f"
  },
  {
    "url": "img/doublyLinkedList1.jpg",
    "revision": "98631431d60e2c9eb736518c5f71571d"
  },
  {
    "url": "img/insert.gif",
    "revision": "91b76e8e4dab9b0cad9a017d7dd431e2"
  },
  {
    "url": "img/linkedList1.jpg",
    "revision": "29793bbf9a6056f896ac8f39986c7ac2"
  },
  {
    "url": "img/logo.png",
    "revision": "d80f0c002434e99d0752f85860bebbb2"
  },
  {
    "url": "img/main-bg.jpg",
    "revision": "6048dbd23a35727bcfa1b64f4e9eff0d"
  },
  {
    "url": "img/main-bg1.jpeg",
    "revision": "f3cfc40ae292cf1496f31f55e0f8ef1a"
  },
  {
    "url": "img/merge.jpg",
    "revision": "a15a4fe29b8b4245c6a30f329cc5592a"
  },
  {
    "url": "img/offset.png",
    "revision": "cbf8d01bafae3c57218e1889cd326ab8"
  },
  {
    "url": "img/renderProcess.png",
    "revision": "da6353399e099d729a3e5728898b959c"
  },
  {
    "url": "img/selection.gif",
    "revision": "1c7e20f306ddc02eb4e3a50fa7817ff4"
  },
  {
    "url": "index.html",
    "revision": "b3225899bd314cac13014531104788bc"
  },
  {
    "url": "javascript/__proto__.html",
    "revision": "7641e9e6e4ec831e42258ba08dc55b32"
  },
  {
    "url": "javascript/bitwiseOperators.html",
    "revision": "a5e6ed7d5c29af9d5016d05933232e86"
  },
  {
    "url": "javascript/function.html",
    "revision": "5c3c9025a66d2a62de6ffd581bbfc7ea"
  },
  {
    "url": "javascript/index.html",
    "revision": "0d5172f448b537982a545d9cf964e0ce"
  },
  {
    "url": "javascript/json.html",
    "revision": "ce410ab0ced9511a01b64bf235a7b1b4"
  },
  {
    "url": "javascript/letLoopAndClosure.html",
    "revision": "3a238c33eafdd29cd96c649df785f69b"
  },
  {
    "url": "javascript/objectWrapper.html",
    "revision": "443af2d91fdf7087703ee34d270eedf1"
  },
  {
    "url": "javascript/offset.html",
    "revision": "a1c77720b6f27bdd50f45ee69ad75db0"
  },
  {
    "url": "javascript/promise.html",
    "revision": "c31ebc3d37c6f929b7c1de67dafdbc84"
  },
  {
    "url": "javascript/runner.html",
    "revision": "48b6cef34baf104e8d1400fbe252a651"
  },
  {
    "url": "javascript/scope.html",
    "revision": "c33b0ae6c85a82b82265563c261aedb5"
  },
  {
    "url": "javascript/typeConversion.html",
    "revision": "facd0a4b154371bc4d4b59f1b24393c7"
  },
  {
    "url": "javascript/typedArray.html",
    "revision": "e1702519cf8ee8ae05bc4bc1fc60c125"
  },
  {
    "url": "javascript/typeof.html",
    "revision": "3fa2eeb4b0b12f31d2c5b565d1b536da"
  },
  {
    "url": "live2d/koharu/assets/moc/koharu.2048/texture_00.png",
    "revision": "495eea8d906c2b03abfe3fa9de2f2a8b"
  },
  {
    "url": "node/buffer.html",
    "revision": "372a9c319544a12b01a5af1182d43daf"
  },
  {
    "url": "tag/index.html",
    "revision": "9f416fefed7972809cb9a17e912fc0fb"
  },
  {
    "url": "tag/js/index.html",
    "revision": "64bbb3436e70d36efa987909a19424b6"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "cf8323fed26e2cc7a356ba8d93060713"
  },
  {
    "url": "tag/json/index.html",
    "revision": "deeff721001100283fde8fb811007f42"
  },
  {
    "url": "tag/node/index.html",
    "revision": "b2efb53d6c36f919cb132ca4d7755767"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "7ce8f91e1bbd27906bb537e43f434590"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "dee07c2d152e9555a57127eae5ce0bf7"
  },
  {
    "url": "tag/vue/page/2/index.html",
    "revision": "3756250f4617053c064e57fa459454b1"
  },
  {
    "url": "tag/计算机基础/index.html",
    "revision": "097fe81c12a549f2967050fd86005e40"
  },
  {
    "url": "timeline/index.html",
    "revision": "77b1680c952eb3d070c5457f3f7a88b4"
  },
  {
    "url": "typescript/asConst.html",
    "revision": "7e4e71041a59dd580019c05f4ccce0bd"
  },
  {
    "url": "typescript/enum.html",
    "revision": "162f392ced81e511947162b228e1aca8"
  },
  {
    "url": "typescript/never.html",
    "revision": "6ca91e37f36d4396922b4eb8adc47798"
  },
  {
    "url": "typescript/this.html",
    "revision": "08de326a0c1f8155f19490c8e1c23bd1"
  },
  {
    "url": "typescript/typeAssertionVSTypeDeclaration.html",
    "revision": "1523675b1e075f979ed68db6b8502dab"
  },
  {
    "url": "typescript/unknown.html",
    "revision": "fb2fbebaae687f5f8d6330c7b639adcf"
  },
  {
    "url": "vConsole.js",
    "revision": "34f483bd35ae6b23478d55ff18becd77"
  },
  {
    "url": "vue/componentRegistry.html",
    "revision": "82989ff1412a944783fea78e8d001824"
  },
  {
    "url": "vue/computed.html",
    "revision": "ebb01994ecb988b9eb7463bcfda36c97"
  },
  {
    "url": "vue/createComponent.html",
    "revision": "ae94140674f9172e3b93496a883ab9fc"
  },
  {
    "url": "vue/del.html",
    "revision": "d3ef8eb7b316b3db5e4cb797b154db80"
  },
  {
    "url": "vue/depCollection.html",
    "revision": "6da562d3f65a6fb8ff73c1bb7f1a2d4c"
  },
  {
    "url": "vue/domDiff.html",
    "revision": "f0227e9ae87c737cf13ef25e141fd6b3"
  },
  {
    "url": "vue/fncCallComponent.html",
    "revision": "32049d78b6d07f5985b6ce982bb31d7e"
  },
  {
    "url": "vue/mergeOption.html",
    "revision": "cbeb15625601205b4d67269d2939937e"
  },
  {
    "url": "vue/newVue.html",
    "revision": "cfb074949a18f6ca2cb074d05ca3924c"
  },
  {
    "url": "vue/nextTick.html",
    "revision": "4dd660c195a05fa5041883d7e88cd695"
  },
  {
    "url": "vue/notifyUpdate.html",
    "revision": "e07f5305ac31b8dcfcb3352b3517de15"
  },
  {
    "url": "vue/observe.html",
    "revision": "993c55a870d98b7634915389ec2ef666"
  },
  {
    "url": "vue/patch.html",
    "revision": "1e5ca0fb7880d88b52d32f84a107e87d"
  },
  {
    "url": "vue/props.html",
    "revision": "649c71be2ff767fa290b727c654cfc9b"
  },
  {
    "url": "vue/render.html",
    "revision": "a2330e32fe2ec33b62e62046a20c76ac"
  },
  {
    "url": "vue/set.html",
    "revision": "14558b5759c7ed18b8509534a2109399"
  },
  {
    "url": "vue/update.html",
    "revision": "c0b7eb677a619a1f7b49594ad0f7aec7"
  },
  {
    "url": "vue/watch.html",
    "revision": "66d46c141117d5d1885404c6da054f48"
  },
  {
    "url": "vue/watcher.html",
    "revision": "4e6e39eeb8c1ddf06160eb4775c39915"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
