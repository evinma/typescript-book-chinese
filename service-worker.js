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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "87335ea576492019b5fdc83d92322d23"
  },
  {
    "url": "assets/css/0.styles.f45e872f.css",
    "revision": "0d08ddf63bb9f21642c12addc4f4c5ef"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.b635c98c.js",
    "revision": "484368cc1f8538ce33bd5b2825f1b0a4"
  },
  {
    "url": "assets/js/11.8a46b40c.js",
    "revision": "15a431d9c905055f4231968698badce7"
  },
  {
    "url": "assets/js/12.bf312ac7.js",
    "revision": "1ba9b3e4b7f8c44c56caff59f2bcf03f"
  },
  {
    "url": "assets/js/13.9f481ce6.js",
    "revision": "670699d9e24dd5c8a74bc9da51dd0bda"
  },
  {
    "url": "assets/js/14.f5b86f8b.js",
    "revision": "e26ad8ab9ab7e69cb4f66f9661973cf8"
  },
  {
    "url": "assets/js/15.30721a43.js",
    "revision": "0681c5903e43fbc429537072037d34a7"
  },
  {
    "url": "assets/js/16.f7c33f85.js",
    "revision": "119e378f767d2dad47fea3be040c45ae"
  },
  {
    "url": "assets/js/17.1621d6f8.js",
    "revision": "17f73096b46c66eba74807e4328775f1"
  },
  {
    "url": "assets/js/18.fb850ea8.js",
    "revision": "377556b6dba11e966793e5e1146a1512"
  },
  {
    "url": "assets/js/19.ba778aa2.js",
    "revision": "f548800b1056eaf91a278cc817e6d690"
  },
  {
    "url": "assets/js/2.2a274f30.js",
    "revision": "8c020448baae9acd1c366afd506966dd"
  },
  {
    "url": "assets/js/20.1a5762e2.js",
    "revision": "ad3926bb2856c31fb4a5118a0dbe56c2"
  },
  {
    "url": "assets/js/21.a566f335.js",
    "revision": "90837c67d5b4826ae7ca1ea09f28ee37"
  },
  {
    "url": "assets/js/22.24fc3f5c.js",
    "revision": "f004473c41767a82034064e4baedacc5"
  },
  {
    "url": "assets/js/23.7a2ca6d4.js",
    "revision": "c6fe347412202e4d06bfa0f0cf653053"
  },
  {
    "url": "assets/js/24.340c13c5.js",
    "revision": "077c0176427b4cf5657e473c471b127b"
  },
  {
    "url": "assets/js/25.4fce9f89.js",
    "revision": "c6b933ba8a926d92a0cf92fc09a05701"
  },
  {
    "url": "assets/js/26.274a0bb6.js",
    "revision": "723292e840a5b19fd99284c61e8dd7a0"
  },
  {
    "url": "assets/js/27.cec41180.js",
    "revision": "ab981aeeb2586eac9e89036ef3ff4289"
  },
  {
    "url": "assets/js/28.8b723ad9.js",
    "revision": "245b02ce7d183ce41e0b5c875de81ae4"
  },
  {
    "url": "assets/js/29.ac262497.js",
    "revision": "c4f9f68fa03e0b08e20b2b78f3946dc9"
  },
  {
    "url": "assets/js/3.0b6855f4.js",
    "revision": "6005a10f1a81d256ac1c96f8866a0a5a"
  },
  {
    "url": "assets/js/30.d0f509d8.js",
    "revision": "43c4ce999b8322cf0f785be298e149b9"
  },
  {
    "url": "assets/js/31.ad4777a3.js",
    "revision": "093ad2b6c1a83c2d8c2d92d0ab728437"
  },
  {
    "url": "assets/js/32.faf0b55c.js",
    "revision": "967e837522777ea136914495ec8576ec"
  },
  {
    "url": "assets/js/33.2bd91d60.js",
    "revision": "ae141187160f2f1f6d232aecde6a476a"
  },
  {
    "url": "assets/js/34.445dcc5f.js",
    "revision": "7cc92e8fe4738989e06586be54ad8803"
  },
  {
    "url": "assets/js/35.da265bd7.js",
    "revision": "bdf7d27848a498e08b6251baeafc24db"
  },
  {
    "url": "assets/js/36.aac9c9ad.js",
    "revision": "7996797c6f390a652d4d6183e45afd26"
  },
  {
    "url": "assets/js/37.78f01aa5.js",
    "revision": "d60892cd572ce39259d63d297f35f8b8"
  },
  {
    "url": "assets/js/38.2470c62a.js",
    "revision": "1cec55678b13ea069f6b850d622885be"
  },
  {
    "url": "assets/js/39.92498efe.js",
    "revision": "2944efe25d7c09d3f6b41edf4ec10607"
  },
  {
    "url": "assets/js/4.f7fc35f8.js",
    "revision": "3e147c93f683a033d6006e7e59949cdd"
  },
  {
    "url": "assets/js/40.4993285d.js",
    "revision": "bdbe483b47e09d0a794586c7960c3ea6"
  },
  {
    "url": "assets/js/41.c19000ad.js",
    "revision": "a33c753e075c1445cdd9b110cc320cf4"
  },
  {
    "url": "assets/js/42.6b8e90d0.js",
    "revision": "09060804ef3c9a51b48e8e889a6e5ce7"
  },
  {
    "url": "assets/js/43.25dde793.js",
    "revision": "4d7221fa9da376d42fb0dca87d312180"
  },
  {
    "url": "assets/js/44.56f9412c.js",
    "revision": "ba657ebd647334433c96afd0ba0b5e1f"
  },
  {
    "url": "assets/js/45.6b0c3c83.js",
    "revision": "9567d39071e466a6394ca0ff5addb32e"
  },
  {
    "url": "assets/js/46.6ccfdccf.js",
    "revision": "4911ecb952361a1e73863e1b291002f0"
  },
  {
    "url": "assets/js/47.fc817602.js",
    "revision": "45713ef949ad634bdc8cd925aaa0e321"
  },
  {
    "url": "assets/js/48.62d5bf94.js",
    "revision": "f371511b22150f4ec9f39712fd7be072"
  },
  {
    "url": "assets/js/49.eef7b561.js",
    "revision": "8f32a5bf2de0300a45fa9edfd08cc239"
  },
  {
    "url": "assets/js/5.81bc92c4.js",
    "revision": "a81b964f4278dae1aaf06c13a7c57641"
  },
  {
    "url": "assets/js/50.194f9c89.js",
    "revision": "83b5a1a5fb2a5ab871abd6532904e446"
  },
  {
    "url": "assets/js/51.3b20fe23.js",
    "revision": "1b77f527584a65f2256c8ddb9811a3ef"
  },
  {
    "url": "assets/js/52.1d836884.js",
    "revision": "363c829ea0f5713f5f1ad6742d516b71"
  },
  {
    "url": "assets/js/53.b35c8a45.js",
    "revision": "7dac7c1c6415364fcb295e966323ee34"
  },
  {
    "url": "assets/js/54.039460a5.js",
    "revision": "c15d95cca2d39d887c0734c5ed693615"
  },
  {
    "url": "assets/js/55.8cd68b29.js",
    "revision": "b8a1971fe1840d0c2e02a1a29d298a66"
  },
  {
    "url": "assets/js/56.edfa8a73.js",
    "revision": "8b2a5802d79aa275efd91116683af30d"
  },
  {
    "url": "assets/js/57.3403c17b.js",
    "revision": "03091c942bfea3859d1e2b31a73658ea"
  },
  {
    "url": "assets/js/58.ee44192b.js",
    "revision": "62fdcd9dfa58f99e3c08586b561167aa"
  },
  {
    "url": "assets/js/59.29aa6e54.js",
    "revision": "f9f2db9dc6f0bae720198fdd6e3251aa"
  },
  {
    "url": "assets/js/6.cffe5692.js",
    "revision": "32c4228908feb9cd1d62a0cd1c4db5ca"
  },
  {
    "url": "assets/js/60.3ecc7cd1.js",
    "revision": "70fe4c17173093046999358e07b300e9"
  },
  {
    "url": "assets/js/61.ff3840cc.js",
    "revision": "3e8d3537a00b1e09e1d5328f250d19d8"
  },
  {
    "url": "assets/js/62.010d029e.js",
    "revision": "2acfc7437737c9f0ac003065a9f6f371"
  },
  {
    "url": "assets/js/63.9bfff661.js",
    "revision": "ed25bc31a853c263f4e5b45f732e04d0"
  },
  {
    "url": "assets/js/64.f59193e7.js",
    "revision": "b84764a39b289bf7289ba3baca981058"
  },
  {
    "url": "assets/js/65.a408e868.js",
    "revision": "4a56793916cc9882dd5eb558062d4a16"
  },
  {
    "url": "assets/js/66.2e889447.js",
    "revision": "93fff1497735a2e5cf082fb17d4d2d73"
  },
  {
    "url": "assets/js/67.95329b50.js",
    "revision": "e3d98a2a0d19c5e55d18838ce2cdeec4"
  },
  {
    "url": "assets/js/68.ee7a85d1.js",
    "revision": "2a61d05088ed919302956ca0cf3d6bfe"
  },
  {
    "url": "assets/js/69.587a0d39.js",
    "revision": "6d0f7cd75305374c5413b526eeefa0ed"
  },
  {
    "url": "assets/js/7.3b40b39b.js",
    "revision": "cf9306e8b6853a2d0c307e2381ab5628"
  },
  {
    "url": "assets/js/70.088781d5.js",
    "revision": "34644db54bab7d4939bc5251b6cddfac"
  },
  {
    "url": "assets/js/71.b48ad246.js",
    "revision": "1d5ee42148292f6cdcec47d865ef153e"
  },
  {
    "url": "assets/js/72.581c1da2.js",
    "revision": "8e70bcd44046f651506d6272653073e6"
  },
  {
    "url": "assets/js/73.6b5cc346.js",
    "revision": "cf5690178266c0e9347b66490912faf2"
  },
  {
    "url": "assets/js/74.f2c6daf2.js",
    "revision": "b65f8e2b05a964cc2ec9d7a269527d11"
  },
  {
    "url": "assets/js/75.877caa02.js",
    "revision": "bb097210deaa63f203e2ae5ac9ed83ba"
  },
  {
    "url": "assets/js/76.d9184990.js",
    "revision": "a6b5370e9e7f432df7104640601ad56f"
  },
  {
    "url": "assets/js/77.22a41c87.js",
    "revision": "c273b60d167d85ccc24c33cc57958ef7"
  },
  {
    "url": "assets/js/78.aa7f73bb.js",
    "revision": "1ff018ee8de2dc7dc96c7f16e5be7357"
  },
  {
    "url": "assets/js/79.aa76a8f8.js",
    "revision": "cd07097e7d2f24c47c72674b261ee292"
  },
  {
    "url": "assets/js/8.04152986.js",
    "revision": "30293805cacac2114ea340316137590d"
  },
  {
    "url": "assets/js/80.10be7626.js",
    "revision": "4ae5f2527c27effb3176919d19587cce"
  },
  {
    "url": "assets/js/81.7d863e9c.js",
    "revision": "df4d4cf233b8a43ce40ab7ebe5a44305"
  },
  {
    "url": "assets/js/82.502ae9e4.js",
    "revision": "2039ad7305673c564f8905f8cc18eef1"
  },
  {
    "url": "assets/js/83.5f198f7a.js",
    "revision": "9ecb60f84664147c7eb65241bf455530"
  },
  {
    "url": "assets/js/84.9ff1f804.js",
    "revision": "8486308450ce81084f158434736674e3"
  },
  {
    "url": "assets/js/85.b67e79f2.js",
    "revision": "0e776990766e1159ab3bd171ad1e905e"
  },
  {
    "url": "assets/js/86.b18662d1.js",
    "revision": "ea47882d21f0e366c9c64290a790af50"
  },
  {
    "url": "assets/js/87.adee741f.js",
    "revision": "393f6e405769b16e66db2edd1635ca41"
  },
  {
    "url": "assets/js/9.da06d019.js",
    "revision": "8d884c09dc6dced1cd23d04e5b0d6fe6"
  },
  {
    "url": "assets/js/app.a7269b2d.js",
    "revision": "4e2bdacdb7dcb69854e92e27258f11fc"
  },
  {
    "url": "compiler/ast.html",
    "revision": "ec7b2e3cfda0d34c5bb2ce2296b14fc4"
  },
  {
    "url": "compiler/binder.html",
    "revision": "c9c20b771eeb46b3cfbdd798d7c7794e"
  },
  {
    "url": "compiler/checker.html",
    "revision": "d912314d26504cb799b27d17d0e29b5d"
  },
  {
    "url": "compiler/emitter.html",
    "revision": "07bec0f2a33d1a7395fb63d1ef34cf5a"
  },
  {
    "url": "compiler/overview.html",
    "revision": "8f32d7c02342c99bc4530a602af31dcc"
  },
  {
    "url": "compiler/parser.html",
    "revision": "e61ed8ba1cb3b499826db190781e1764"
  },
  {
    "url": "compiler/program.html",
    "revision": "1bf5279bda7f4791fca1adc53fc18749"
  },
  {
    "url": "compiler/scanner.html",
    "revision": "31fec49e932763ed63da04375a8e00dc"
  },
  {
    "url": "contact.png",
    "revision": "de36f2215c396bf6f74409c047520234"
  },
  {
    "url": "error/common.html",
    "revision": "140423a3c4ceaae576e634d1a5ee6cf4"
  },
  {
    "url": "error/interpreting.html",
    "revision": "2cce8100a88d04bbfc45eadc01654a17"
  },
  {
    "url": "faqs/class.html",
    "revision": "c46ca214fa5c042c417a5b01fc8f6dd5"
  },
  {
    "url": "faqs/commandline-behavior.html",
    "revision": "832fcb1750eb2c8b3fcbf9ed3bc0b62c"
  },
  {
    "url": "faqs/comments.html",
    "revision": "8da430b39762c64b1d6d09a01a8f1836"
  },
  {
    "url": "faqs/common-bug-not-bugs.html",
    "revision": "c6f4b698e39fe50ddc75b75ed7a976d3"
  },
  {
    "url": "faqs/common-feature-request.html",
    "revision": "614fcbd82a0fc6d8d53d356172f6d238"
  },
  {
    "url": "faqs/decorators.html",
    "revision": "58b0f8ae6d182b675c6d8bcf7c9400e1"
  },
  {
    "url": "faqs/enums.html",
    "revision": "c114a128d78f2319e4799b7ea3779068"
  },
  {
    "url": "faqs/function.html",
    "revision": "b5911c0c7355b3b8272a0ac131055775"
  },
  {
    "url": "faqs/generics.html",
    "revision": "5aa525e8263ebc8b1b6f5366e83d7690"
  },
  {
    "url": "faqs/glossary-and-terms.html",
    "revision": "8fd353ca22335112000b911d018650ad"
  },
  {
    "url": "faqs/jsx-and-react.html",
    "revision": "849e3d380422c47238b6ece226e569fc"
  },
  {
    "url": "faqs/modules.html",
    "revision": "19e6ba8fd374e2427d0dca965fa1fc63"
  },
  {
    "url": "faqs/thing-that-dont-work.html",
    "revision": "ab5450d6e2d6b2ff805b0ea10a8cf792"
  },
  {
    "url": "faqs/tsconfig-behavior.html",
    "revision": "c384ac06bb17faf806ee7bbd5831339d"
  },
  {
    "url": "faqs/type-guards.html",
    "revision": "132fd29ac546b3ebc23865b288f9e9d5"
  },
  {
    "url": "faqs/type-system-behavior.html",
    "revision": "97b4a26ad1427edddba3a160f24a3048"
  },
  {
    "url": "ide.png",
    "revision": "0552400adbb2b3fcbed10a98a02e2516"
  },
  {
    "url": "index.html",
    "revision": "d1f82dd8664e87878e4cdfc335fb7e6f"
  },
  {
    "url": "jsx/nonReactJSX.html",
    "revision": "61567f035c5d3abfc672605ff960a5b0"
  },
  {
    "url": "jsx/reactJSX.html",
    "revision": "aee586ae2d08a3e0a93532802e3ece57"
  },
  {
    "url": "jsx/support.html",
    "revision": "9072212816000b200e59a1b63e7b7d30"
  },
  {
    "url": "logo.png",
    "revision": "166813938a8a65cf3197fa7da1d131f4"
  },
  {
    "url": "project/compilationContext.html",
    "revision": "c4c8ac4e35eab543dea8cbb9db59d55e"
  },
  {
    "url": "project/declarationspaces.html",
    "revision": "c24c46ac8d5d073def48976b49529ad2"
  },
  {
    "url": "project/dynamicImportExpressions.html",
    "revision": "5bfbd25805df59504901b2bc8b25304b"
  },
  {
    "url": "project/modules.html",
    "revision": "0327284ff3cd4c7a4fb9ab1ee9ffbeba"
  },
  {
    "url": "project/namespaces.html",
    "revision": "d09ef44e74f3923290d92a32dd7f1043"
  },
  {
    "url": "tips/avoidExportDefault.html",
    "revision": "0f995ddac3382e783229d4dcffac4002"
  },
  {
    "url": "tips/barrel.html",
    "revision": "433d0b7515a4f613bca3e75e86be1701"
  },
  {
    "url": "tips/bind.html",
    "revision": "7824c091850749b59e7e8ed9de768746"
  },
  {
    "url": "tips/buildToggles.html",
    "revision": "66743cf99532e2147d2c131f97f8c782"
  },
  {
    "url": "tips/classAreUseful.html",
    "revision": "8af96b9d10bff99a610631e1a2f8b6cd"
  },
  {
    "url": "tips/covarianceAndContravariance.html",
    "revision": "ce21571c5d03bbc111711bb17e787fad"
  },
  {
    "url": "tips/createArrays.html",
    "revision": "f9c24f330931bd0e4c7cc0c8edde94b2"
  },
  {
    "url": "tips/curry.html",
    "revision": "a359178e73a86655fc58f7d6efc0c408"
  },
  {
    "url": "tips/functionParameters.html",
    "revision": "5a75c116f0eb9bd010a75eb72e106006"
  },
  {
    "url": "tips/infer.html",
    "revision": "ae075a28b2593417e0c295dc1b444097"
  },
  {
    "url": "tips/lazyObjectLiteralInitialization.html",
    "revision": "4bd2915f9773c184ab4603c5ab55c1b0"
  },
  {
    "url": "tips/limitPropertySetters.html",
    "revision": "a351475547418da307d8af0d780171a5"
  },
  {
    "url": "tips/metadata.html",
    "revision": "6b5de758c41bad5ad7f467acf9f9999e"
  },
  {
    "url": "tips/nominalTyping.html",
    "revision": "fe3af79fa98cb9cf0eb9f0cbf6d1c9b3"
  },
  {
    "url": "tips/outFileCaution.html",
    "revision": "12f8d78a5371351d4965e6fe47430f7a"
  },
  {
    "url": "tips/singletonPatern.html",
    "revision": "0598ce82cda0c8180c8301f515991e2a"
  },
  {
    "url": "tips/statefulFunctions.html",
    "revision": "ecee98bda8476afa9697904d2ab2db3f"
  },
  {
    "url": "tips/staticConstructors.html",
    "revision": "8c6bcbbcea1cb04475253893f8a0e3c1"
  },
  {
    "url": "tips/stringBasedEmuns.html",
    "revision": "3bc60e5bc903d6b896ae0cb802f0a5da"
  },
  {
    "url": "tips/truthy.html",
    "revision": "5ff3c44a3dde230df92867c714a7907a"
  },
  {
    "url": "tips/typeInstantiation.html",
    "revision": "0266ed76d93fa9c1d78cd71cb4a30777"
  },
  {
    "url": "tips/typesafeEventEmitter.html",
    "revision": "1874a9d29b2feca2f12253e0dc5d0b94"
  },
  {
    "url": "typescript-downloads.jpg",
    "revision": "c820bb267e14bd6881db03696f3ae603"
  },
  {
    "url": "typings/ambient.html",
    "revision": "e13524fb0ced58274982ef9f25a902e6"
  },
  {
    "url": "typings/callable.html",
    "revision": "039183805263cc3fb759f270fdc9d03d"
  },
  {
    "url": "typings/discrominatedUnion.html",
    "revision": "508c6c9a4ebbddf17231352807821e8c"
  },
  {
    "url": "typings/enums.html",
    "revision": "58cd8e83d77253a4f3fe35386a34529e"
  },
  {
    "url": "typings/exceptionsHanding.html",
    "revision": "48fa097a62df33a5b0f8120c4f70175f"
  },
  {
    "url": "typings/freshness.html",
    "revision": "b488356327432b831e8d812c887e6bbb"
  },
  {
    "url": "typings/functions.html",
    "revision": "a551646961312f9807433cd33150ffe0"
  },
  {
    "url": "typings/generices.html",
    "revision": "1464b01bd6daa31caf5b155f1a54a151"
  },
  {
    "url": "typings/indexSignatures.html",
    "revision": "7088765b4f27914d264ba78671c6af71"
  },
  {
    "url": "typings/interfaces.html",
    "revision": "ef53db0e634aee02fc38c31b46a0dc2c"
  },
  {
    "url": "typings/lib.html",
    "revision": "88255ffcc47f72cea6144e18e3f991c1"
  },
  {
    "url": "typings/literals.html",
    "revision": "7c778e9e13db2f50a0f5478814fd1779"
  },
  {
    "url": "typings/migrating.html",
    "revision": "5b3e94b2a6880ae9d4cece4538596e1c"
  },
  {
    "url": "typings/mixins.html",
    "revision": "381e69cef6ba43fb76b04613b19fbaae"
  },
  {
    "url": "typings/movingTypes.html",
    "revision": "918995c540c4480ad629045ea963d9f6"
  },
  {
    "url": "typings/neverType.html",
    "revision": "7f5bf5ba6e6170ca53bf8d717d6e764f"
  },
  {
    "url": "typings/overview.html",
    "revision": "28f268fd85468baf5425969ef5766177"
  },
  {
    "url": "typings/readonly.html",
    "revision": "c68b6ff0c9d021acc417329f65b5fea1"
  },
  {
    "url": "typings/thisType.html",
    "revision": "81da3f7e5243dff310c38d2273a08b4d"
  },
  {
    "url": "typings/typeAssertion.html",
    "revision": "c685541238b84cd4b305b53d01df7f31"
  },
  {
    "url": "typings/typeCompatibility.html",
    "revision": "bba3c37cd726571b564aa918e06fcbac"
  },
  {
    "url": "typings/typeGuard.html",
    "revision": "d9422a604837791adca30c8f9adaeef6"
  },
  {
    "url": "typings/typeInference.html",
    "revision": "8ad523f218dd3e41712d34acb4be83de"
  },
  {
    "url": "typings/types.html",
    "revision": "401e10da02106d4f735a2250743e562e"
  },
  {
    "url": "wechat.jpg",
    "revision": "36c771d59ed899617f1e6c49f9ee812f"
  },
  {
    "url": "zhifubao.jpg",
    "revision": "2a94b23f0d0d6d55befc332742849b67"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
