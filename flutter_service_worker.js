'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "b020e106866c2392691cbf428de7e440",
"version.json": "7177c6b472b5938cc591fe1bc4944d62",
"index.html": "d69652bd5ddac596500a1fad3d859a10",
"/": "d69652bd5ddac596500a1fad3d859a10",
"main.dart.js": "2c6db29659e9816aee3ac6f9a0e93d6b",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "3a98a496517f6b473b5805a8e7982885",
"icons/Icon-192.png": "c6a602fd75f03e4e9bd5b41e4a4f5fae",
"icons/Icon-maskable-192.png": "05f03c460cce3c785b34d5e6447bcdc2",
"icons/Icon-maskable-512.png": "bd88aed1343c8c4178f396cba7fa6639",
"icons/Icon-512.png": "ca4378f9038047ce656ddce7b22fd864",
"manifest.json": "262a8dab69bc3d58bdc0fed4152109b9",
"assets/AssetManifest.json": "afbb9fdad8513acf8f0d85acd7defac2",
"assets/NOTICES": "0b0313ffee9d1b725b1de20c8c8b636f",
"assets/FontManifest.json": "58e6ad0cde1b51bd671d8b3bd52b7d96",
"assets/AssetManifest.bin.json": "d0cbfa38a02f05d951db32038591bb34",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "25be3edad30ac50c11220f42b7ebf2b0",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/svg/triangle.svg": "78a96d506e7da16854958716d046cf35",
"assets/assets/svg/search.svg": "6aa3e4064861971f82b05bc19ec0af59",
"assets/assets/svg/locationFill.svg": "009cc7f28ca8a3456c91e6b672ebe4e3",
"assets/assets/svg/accelerate.svg": "5be1fd9606a0f294d3bb9692c5dbb977",
"assets/assets/svg/ldm_logo.svg": "7b9302ba70c5217cbfac3bdb1fa8f759",
"assets/assets/svg/derivation.svg": "759c25e38fd55e9c3a0dd3b801237181",
"assets/assets/svg/export.svg": "65cc9912fd48065589cf52fe70036454",
"assets/assets/svg/arrowDown.svg": "1b0a7a9778e732a5bfcbba9c948f7549",
"assets/assets/svg/moonpay.svg": "c590883eb13c762c55982ef53a883b92",
"assets/assets/svg/dangerTriangle.svg": "057df419746bed7a755f0cb57b9d3115",
"assets/assets/svg/touchIdSolid.svg": "b3c76aff463284aa37391a37cc9eded2",
"assets/assets/svg/paybis.svg": "5af3827c280fa3991c3febbb1add16a6",
"assets/assets/svg/touchId.svg": "b746d41c0933598fd7c5b99b7c62dcb2",
"assets/assets/svg/token.svg": "81773e29cae12bbde7af3010de9eb5b2",
"assets/assets/svg/import.svg": "cd92f28a32f23b7093ef512d330952bc",
"assets/assets/svg/arrowDecrease.svg": "75157fe0f60ae64d02cc354c9af99233",
"assets/assets/svg/walletSmall.svg": "808c15f7f675e629b974b55bc2f05d21",
"assets/assets/svg/wallet.svg": "151ba9253af969b26bc49247e7078b11",
"assets/assets/svg/tick.svg": "0c209a3897f2cd4f94f43938890801ae",
"assets/assets/svg/exchange.svg": "8bf6712aed6f519fec8664f8a4cef477",
"assets/assets/svg/walletGradient.svg": "261d46e1de1e333a66396916eec711d1",
"assets/assets/svg/arrowIncrease.svg": "81da2c72c7f4e181ff09e39e9fef1741",
"assets/assets/svg/plus.svg": "f80d1c1819be14c2071d32d495f2d3d9",
"assets/assets/svg/receive.svg": "f9f1baef578a78aeda4e7d16fa0bd81d",
"assets/assets/svg/chevronRight.svg": "1b16f8899b12d6d5533c4f9f918f732c",
"assets/assets/svg/btcDirect.svg": "5b1e797f426eed1ebf3e743077b798a2",
"assets/assets/svg/info.svg": "f86fc842cd594d4cc5b0e43a5931be95",
"assets/assets/svg/close.svg": "bd76e3c07212895e684445eb13cc16c8",
"assets/assets/svg/copy.svg": "87a042d6c982f35ed13dc099a488ee7a",
"assets/assets/svg/coins.svg": "c8a65793dbbe0aab753f4769e6823c37",
"assets/assets/svg/trailing.svg": "4562a78cdbc0eeabe70465b59fa36fde",
"assets/assets/svg/refresh.svg": "27ca5a0bf62fa7d465551a2be6788f3e",
"assets/assets/svg/onramper.svg": "9dd7bc22da354b006f3d6df6376cd89a",
"assets/assets/svg/guardarian.svg": "bf12303135fed108ce4d1a38321244cd",
"assets/assets/svg/send.svg": "3117ff50a8ffd485246fe01a135b0224",
"assets/assets/svg/faceId.svg": "1b09a76328f18c194111a21d33b2dd1d",
"assets/assets/svg/paste.svg": "30624e0a85aab4e00612401936976309",
"assets/assets/svg/kebab.svg": "037b1472c2739a87fa616c8c079c1ffb",
"assets/assets/svg/edit.svg": "f6b19889cb25190094a8a323cfe164c6",
"assets/assets/svg/changelly.svg": "a2e749672b000a2a6593d08ef27d8ffc",
"assets/assets/svg/bitnovo.svg": "db34a2f5e5792a825944e72ae42599bf",
"assets/assets/svg/qr.svg": "b640b7884f21a02e774c83818d4bce50",
"assets/assets/svg/delete.svg": "3d8263cfbb688a49dacd7ae434b51f0f",
"assets/assets/svg/location.svg": "f02c491ead46abdaebbbad54e269e8e5",
"assets/assets/svg/share.svg": "1448c17710ff917316d5708a86b51ac7",
"assets/assets/svg/successTick.svg": "eb6a7d691f7cc20b79250c249a189fc5",
"assets/assets/svg/logo.svg": "3458e181e6682a36b1a8602099455d8e",
"assets/assets/svg/arrowLeft.svg": "84706703b021eb64af711ce6be1eaae2",
"assets/assets/svg/chevronLeft.svg": "12db9eca184f3c00cc0ee5e7dbbd12ae",
"assets/assets/svg/history.svg": "ea91f659f1f729d77badd45cd35faff9",
"assets/assets/svg/faceIdSolid.svg": "b46badd040312c8e21a31d1ce631a38b",
"assets/assets/svg/failCross.svg": "13254d82556c99f5e3cb761d0ea3dfea",
"assets/assets/crypto/dash.png": "ce0624d144e14ec4042e23482dd766d7",
"assets/assets/crypto/uni.png": "b893741797ad3247ba2edae9cb26946e",
"assets/assets/crypto/snx.png": "178c4300ecee24e034588e772158a079",
"assets/assets/crypto/zec.png": "d9476af7db05813dd9fdd7aa39fe7977",
"assets/assets/crypto/sol.png": "0bf2916a9c679e99dc9060ee1cc2dde5",
"assets/assets/crypto/band.png": "757ae44ca0cd57aedb27d14e6f1a4ad8",
"assets/assets/crypto/zrx.png": "8f8a618b98c94edb6a348924cd3024d3",
"assets/assets/crypto/doge.png": "1938a5ea7cbe7458795a834563258ced",
"assets/assets/crypto/matic.png": "2b7938b1654a5c4987d9e7f07e692dc3",
"assets/assets/crypto/bal.png": "d1ec449218a7e29e793bbf8248db78b1",
"assets/assets/crypto/ren.png": "807ae3460ca7b6120b23dfd60c135765",
"assets/assets/crypto/bnb.png": "fefe5d0b26806c858130f0eb454e1106",
"assets/assets/crypto/ltc.png": "95507ffd15fb458032339c7dc775ed70",
"assets/assets/crypto/dai.png": "cc486869001b8ad3ad2896e4b47493af",
"assets/assets/crypto/ada.png": "b46b7cf5e660032d28bffdd8a46683ad",
"assets/assets/crypto/uma.png": "316f33cebfecedf8b4f081f2ac7b357e",
"assets/assets/crypto/link.png": "29ae853fe2eb20ad9fd78abdd8c13090",
"assets/assets/crypto/wbtc.png": "80c79ff27b488d66f195ed5bf1f39758",
"assets/assets/crypto/dot.png": "f272c9cc7e4ce5cf95d5318496ff1de0",
"assets/assets/crypto/omg.png": "70d1c74f57cdfcbc69f2214b26c7f9fe",
"assets/assets/crypto/eos.png": "289c10f3f02d5596abd1c1730128df1a",
"assets/assets/crypto/algo.png": "54fa5002d0f60970864f0d155547c16a",
"assets/assets/crypto/xlm.png": "faa1daf737e198d7bfd3c92a6e8e5351",
"assets/assets/crypto/eth.png": "174b0414fece541456d82f84a296e380",
"assets/assets/crypto/oxt.png": "9df95e184a120ac829831f2ed5b12386",
"assets/assets/crypto/xtz.png": "b358cadc5a02ec7b7e2e2d571a650f0e",
"assets/assets/crypto/rvn.png": "d3de678e71fba0454716fdda4ea81397",
"assets/assets/crypto/theta.png": "0b607e7ca7d6fe0e3c5a59ab1af5b1fa",
"assets/assets/crypto/yfi.png": "de56cd35c5eb91c8c907503daa99e381",
"assets/assets/crypto/usdt.png": "1209268b2a9b376e08bdcfb12b98aaf9",
"assets/assets/crypto/usdc.png": "7dfa6cbc7537f528327e421ff3527656",
"assets/assets/crypto/ont.png": "e2714271ed4e129a7c90639e3d2c7f34",
"assets/assets/crypto/atom.png": "f0fe5873ebbeca55d55757ba1d7b8b0c",
"assets/assets/crypto/fil.png": "ae1e7cfc80cf80068460c001e709b5b7",
"assets/assets/crypto/ankr.png": "6a455ec5aef626908d679daf5832abc6",
"assets/assets/crypto/aave.png": "2d86d7490b90ec8a63046f42ece2e5d7",
"assets/assets/crypto/xmr.png": "d5b4ef9b0226fb8b3cd8359efc6fb6cb",
"assets/assets/crypto/one.png": "a3e4418eabc42ae975ae2c63c112bd6f",
"assets/assets/crypto/waves.png": "aa69e2d445bb27ff3099306af3509253",
"assets/assets/crypto/mana.png": "4bb3faf8617f5a6cedb5f6783c4c3ac4",
"assets/assets/crypto/etc.png": "e4c7bf01ef77a896f872687847be7ad1",
"assets/assets/crypto/dgb.png": "057366f60c64c24f6389f9b7b8d1e3d2",
"assets/assets/crypto/skl.png": "7484aa4e4f8a4c119efc20281d3dcad6",
"assets/assets/crypto/trx.png": "4485ad0ffccf92c98a17fbc03505699a",
"assets/assets/crypto/hot.png": "6f991de7766f4a6924f85aa64fe37468",
"assets/assets/crypto/sushi.png": "b16f3b00c708cb8f57891c9bf02108eb",
"assets/assets/crypto/bat.png": "7705cca3b932d4ca5992d252f1f0065d",
"assets/assets/crypto/btt.png": "638862559761aac8acf6d1770ad88f03",
"assets/assets/crypto/btc.png": "8f8d12b8691a706a99e7544bd33527c2",
"assets/assets/crypto/crv.png": "e1784437a402fc3b7357ffc28acd32f1",
"assets/assets/crypto/bch.png": "fcec74d4529f678d785181c021bdd39d",
"assets/assets/crypto/zil.png": "e604427346bc1474e1d871f6f14eb677",
"assets/assets/crypto/xrp.png": "2308acc5cb079e77004f6ae91cc7b051",
"assets/assets/empty_porfolio.png": "1d7a0ffe857e938e13fdb0249ecefa08",
"assets/assets/social_icons/ic_login_google.png": "0f06463df63276b7fa6fcc54843eeb87",
"assets/assets/social_icons/ic_fb.png": "31b521817d72df081117d4d925be37ed",
"assets/assets/nft/nft_result.png": "08a0ac81bd1e448685a9701b345dd3c2",
"assets/assets/nft/nft6.png": "a35280694be5bd81f01ff54cc7b8c0db",
"assets/assets/nft/nft5.png": "e6879619ece7e947b71dea37dd2c9263",
"assets/assets/nft/nft4.png": "35a9ee1621a70a7ed8c0ea768fdcbc9b",
"assets/assets/nft/nft1.png": "8e6587f970ef60e05928342099636067",
"assets/assets/nft/nft3.png": "363502eb3f241f8944579a90cae7c624",
"assets/assets/nft/nft2.png": "f834fadca9893653f2976697ee9dbe8d",
"assets/assets/exchanges/ftx.png": "e6c44270d1322b8984ce801e1dc2a39f",
"assets/assets/exchanges/kraken.png": "87a8494940f23d18262b649e55c316cc",
"assets/assets/exchanges/binance.png": "8c32666270b6563773bc22e6f1dd0b79",
"assets/assets/exchanges/huobi.png": "4bded2464f926a765036780c03d1a688",
"assets/assets/exchanges/gate_io.png": "235f0cddf0026012503b0ecdc7e398e9",
"assets/assets/exchanges/coinbase.png": "6dbf782d2d7a4fcc844819fd35e0d004",
"assets/assets/exchanges/bithumb.png": "22ca1bd1989872259f66a7ed31bcf45f",
"assets/assets/images/cyborg-upgrade-circles.png": "1cb8eb393f0aedd06c507fe0a041bcc6",
"assets/assets/images/cyborg-web-browser-searching-man.png": "5714a82a001d943eebdd8a53d08b9e65",
"assets/assets/images/cyborg-delete.png": "d90a123ee4376c6ef53e81485aa96bb0",
"assets/assets/images/cyborg-network.png": "cfb1224da8f040616a49d0e241db7102",
"assets/assets/images/loading.gif": "54b0effbffa93a27e65a50000242046d",
"assets/assets/images/cyborg-cosmonaut.png": "36bccbfa9ebd8a7c7a3b072164e0572a",
"assets/assets/images/error.png": "e98b6ae5b078468e82154d1e0aef0b95",
"assets/assets/images/cyborg-semicircle-background.png": "e359c45010c36ca7d8e380243f6ae680",
"assets/assets/images/flutter_favorite.png": "ec648fa0b65c68593b2534fb5b88a9a8",
"assets/assets/images/cyborg-deliveryman-1.png": "2331afec70b3a667f1b6d400281ab3b6",
"assets/assets/images/cyborg-remote-working-1.png": "effefcff25ac5ee25a056c12f334b798",
"assets/assets/images/cyborg-planet-1.png": "a14e46c4b157f8d610648ad2f1e07e59",
"assets/assets/images/cyborg-exam-preparation.png": "dd050fb36aa0de80ab320b086ce511bd",
"assets/assets/images/cyborg-planet.png": "9ee30e595214b493ce20be57d143efd8",
"assets/assets/CountryCodes.json": "dd167026d8118b792b53b0e86427a4d0",
"assets/assets/logos/social-logo.png": "8b279583f740079c8ad0c3ba0da37050",
"assets/assets/coins/bnb.png": "b972b8a4154c57599dca8d8113558a0f",
"assets/assets/coins/eth.png": "68eed52e1fe4e74aa43a8621ff404780",
"assets/assets/coins/btc.png": "bbcd0eecb9bb00a3ba8e7214b2a2d63c",
"assets/assets/coins/xrp.png": "c1ca48db79dac7b7b1bd9e969256cddb",
"assets/assets/blog/christian/trump_atempted_assassination3.png": "d69e536a129032fc2110930456b6b12c",
"assets/assets/blog/christian/lastdays_trump_prediction1.png": "6f98a15c48fe6cc0b733e2b7e0851a58",
"assets/assets/data.json": "7030097ef2877c02e6ae5acf1e05fe5a",
"assets/assets/social/telegram.png": "2d343edb583cf29037045c7383524ef8",
"assets/assets/backgrounds/ldm_banner.png": "8a1828eab904dab40e79955437c014aa",
"assets/assets/backgrounds/mock_header.png": "9e89c791e0401570631dcb1113936cc3",
"assets/assets/backgrounds/reading-newspaper.png": "8ad5b0bb41d2d3985d52e3c755b487bd",
"assets/assets/backgrounds/last_dayz_logo.png": "5d30ff4e24a6d738170c21a6e260b7c5",
"assets/assets/bottom_icons/ic_portfolio.png": "583f8529c9c27701742463c49344945f",
"assets/assets/bottom_icons/ic_wishlist.png": "9ec813fce9d57fb9b47ff61a9fdaac47",
"assets/assets/videos/AppSampl1.mp4": "f647dddd2ac4bd9c2901a621dfced38d",
"assets/assets/news/news1.png": "f341cc31ff893fd58ae0a565569e7773",
"assets/assets/news/news2.png": "a0060aef7af61df9bbcec44c18d908b1",
"assets/assets/news/news3.png": "4313d9982833d995ad77fafb6f7cec2a",
"assets/assets/news/news6.png": "23a4fadc0817ca5b13bc72133a9c7945",
"assets/assets/news/news4.png": "b72ac9efe07e0593d3e13d40fc764ca4",
"assets/assets/news/news5.png": "1db39bcdaafc391709c8f53e01a15706",
"assets/assets/news/news_header.png": "ce62a698c008a929cbe8fd73f0283849",
"assets/assets/icons/cyborg-science-1.png": "74c4520ce04f1c897f0dfa62c7ddd642",
"assets/assets/icons/cyborg-speedometer.png": "604f6ad1de0dbee4e353b514ec0b9ef4",
"assets/assets/icons/play_record.png": "07888c23930cfa47d8cdbef633e8aea8",
"assets/assets/icons/bible1.png": "c03232ed02cdbb5f3a703572b0ea357d",
"assets/assets/icons/cross_asteroid.png": "062bbe20647ce29600ef36b882d6e04f",
"assets/assets/icons/air_pods.png": "6f1794dceda25b2b196f8666e612630d",
"assets/assets/icons/cryptocurrency-512.png": "258b07982abff99ce5759c090b74708d",
"assets/assets/icons/cyborg-megaphone.png": "1b6d3ccf7f692bafc9da4cbe95058f6a",
"assets/assets/icons/white_cross.png": "f8b57b79a851323a1a589e2b2423c8e7",
"assets/assets/icons/cyborg-rocket.png": "cff6f482b69193c16ff12e70ccb256cc",
"assets/assets/icons/fish1.png": "d46f980417e7ea8493fdd87be3f4793a",
"assets/assets/icons/Microphone.png": "32826a759a4e9dfe89875ca7d1c2100b",
"assets/assets/icons/cyborg-speedometer-1.png": "e7b773a464e997c223df251ee0367476",
"assets/assets/icons/user.png": "5f40046745e1004ab15df9e6f6b5de12",
"assets/assets/icons/cyborg-robot-head-1.png": "cfd43312feaf5509a1f4812b141710e3",
"assets/assets/icons/cyborg-recycling-sign.png": "f535b10622294d90e89e55a51be94464",
"assets/assets/icons/cyborg-cash-1.png": "480dda1adaf6ada23726f90b1c46ae52",
"assets/assets/icons/cyborg-light-bulb-1.png": "8a2ee497928ba92b1533ac2d5e7010ec",
"assets/assets/icons/cyborg-wheel.png": "a43b3ce6854034a3b37b17cf48389f5b",
"assets/assets/icons/cyborg-skull-boy.png": "2a456a441d8a7cb640f3b9e6a6ac820c",
"assets/assets/icons/cyborg-id-3.png": "21cf80d793260bb0ab006135cedaaf94",
"assets/assets/icons/cyborg-protection-shield-with-gear-5%2520(1).png": "5cefe23d1d7e7f33f4a5a197264c2127",
"assets/assets/icons/cyborg-protection-shield-with-gear-5.png": "5cefe23d1d7e7f33f4a5a197264c2127",
"assets/assets/icons/cyborg-chart-5.png": "235ed98ed688420bdc8f37e452f66071",
"assets/assets/icons/cyborg-science.png": "1b37de68d2d7cc6a94f84e29c93b7e0a",
"assets/assets/icons/cyborg-security-sign.png": "5384c47b652e92b4deb599452e8f7da2",
"assets/assets/icons/cyborg-shopping-cart.png": "51de575ec4c617884bf4cccb98b9c66f",
"assets/assets/icons/cyborg-moon.png": "70a961c12ab9b20f2dd674ca0dd28735",
"assets/assets/icons/btc_moneybag.png": "eb7a8b2edf4e0ae1c28a5815c6bc4ee6",
"assets/assets/icons/cyborg-popcorn.png": "00f56f8a3132a02b608ebf825451e1ca",
"assets/assets/icons/cyborg-number-sign.png": "91bf4422d2d1b40e257f7c9812570fcd",
"assets/assets/icons/read-news.jpg": "edacdfd1d885519162c374f1af09f073",
"assets/assets/icons/cyborg-fish.png": "0fa0a75ada664da2d240f0cb83d887a1",
"assets/assets/icons/music_video.png": "29ed22c3113792d733cd7b5d9a8c390a",
"assets/assets/icons/cyborg-shawarma.png": "015f8d39a1b131ca3845b4b9ae0e7d85",
"assets/assets/icons/cyborg-electronic-board.png": "d89c98ec9b66d2c357d9c9ac3a10135c",
"assets/assets/icons/voice.png": "9e326c931674a4aafee4d48ffcbfa0c9",
"assets/assets/icons/cyborg-lightning-2.png": "35ae0832a2e71696a176c514cae32906",
"assets/assets/crypto_icons/busd.png": "782e095602f11fdb33d772714c8692e2",
"assets/assets/crypto_icons/bal.png": "dfc83a4fcedc1b3b5bd6781e9dbd8744",
"assets/assets/crypto_icons/bnb.png": "1885143e5be8fa138ff68771de5bf55a",
"assets/assets/crypto_icons/ada.png": "f034acdec95672fd97d826cebdc16ad2",
"assets/assets/crypto_icons/algo.png": "ecf57d0b1ee1ac4aa9b8bc3a8ca44e39",
"assets/assets/crypto_icons/avax.png": "0c3650984ec45fb784222daf4e10e048",
"assets/assets/crypto_icons/eth.png": "c69e1ffc26953d503315fc467f216bbb",
"assets/assets/crypto_icons/anc.png": "8ffdaa938a30af91996f46a6b140b611",
"assets/assets/crypto_icons/bsv1.png": "aae669fb3253ee02e9ec139d79f32cec",
"assets/assets/crypto_icons/bake.png": "a351b64f40c826f691d155a4f414f0e6",
"assets/assets/crypto_icons/atom.png": "34f2bc7a1956731b30b19159e7a7676d",
"assets/assets/crypto_icons/aave.png": "577b5c41db35da0a231fdb9b4a324f57",
"assets/assets/crypto_icons/amp.png": "4bc28e6da04760d064826f1c6c0041b5",
"assets/assets/crypto_icons/best.png": "a959e26c24dcf066918fdbe7dc34acdf",
"assets/assets/crypto_icons/axs.png": "5bc526c907922e00af8584117bc1fb36",
"assets/assets/crypto_icons/btt.png": "549e2f9ca234e568424432443155c1e6",
"assets/assets/crypto_icons/btc.png": "b038ee4cf7b4a4787b8e9fb793c60aee",
"assets/assets/crypto_icons/bch.png": "6a74f0badd53869032ef496b1e33213c",
"assets/assets/crypto_icons/xrp.png": "8ea89c8839b7982ad8a79244defe3b3c",
"assets/assets/fonts/VT323-Regular.ttf": "034de38c65e202c1cc838e7d014385fd",
"assets/assets/fonts/Roboto-Regular.ttf": "327362a7c8d487ad3f7970cc8e2aba8d",
"assets/assets/fonts/OpenSans.ttf": "3ed9575dcc488c3e3a5bd66620bdf5a4",
"assets/assets/fonts/MaterialIcons-Regular.otf": "e8072bb4a634d29a447163e7ee8917bb",
"assets/assets/candlestick.png": "1061d09c1947421c212dd78fc854da10",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
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
