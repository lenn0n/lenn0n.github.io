if(!self.define){let e,l={};const n=(n,i)=>(n=new URL(n+".js",i).href,l[n]||new Promise((l=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=l,document.head.appendChild(e)}else e=n,importScripts(n),l()})).then((()=>{let e=l[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,r)=>{const b=e||("document"in self?document.currentScript.src:"")||location.href;if(l[b])return;let u={};const d=e=>n(e,b),c={module:{uri:b},exports:u,require:d};l[b]=Promise.all(i.map((e=>c[e]||d(e)))).then((e=>(r(...e),u)))}}define(["./workbox-38fc4dfc"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"058e83cf1aade96964e5.webp",revision:null},{url:"092ed80233d1a286b291.svg",revision:null},{url:"0accf629ef53955f58e3.webp",revision:null},{url:"0cfd6489536ec0987466.png",revision:null},{url:"0edc57ccafb3ea818597.png",revision:null},{url:"11cc407c6be4588552a2.svg",revision:null},{url:"15f872c54d6bf321a698.webp",revision:null},{url:"1d97964e485a22fdf776.webp",revision:null},{url:"25efdb5648bf3756c9d5.webp",revision:null},{url:"268ae75ac489e5443c2d.webp",revision:null},{url:"26c835acaa2ecc473f88.webp",revision:null},{url:"29e1b5a8ec2a11fe2cdc.webp",revision:null},{url:"3596967aab1dc0b8ebc1.webp",revision:null},{url:"37accb54e551471bab05.webp",revision:null},{url:"404.html",revision:"693c0da983da96389f30893589476dff"},{url:"42b261a5493e9abb23c5.webp",revision:null},{url:"42eafbbd62a9cbdea0c0.webp",revision:null},{url:"4611f234bb7629109dc6.webp",revision:null},{url:"4a147efcb88d6563c150.webp",revision:null},{url:"4e2a4ace9d28d17ff5f3.webp",revision:null},{url:"51b4644d9327460e1802.webp",revision:null},{url:"5534d1644b83cce03cbc.webp",revision:null},{url:"56054ab06aada6597d77.webp",revision:null},{url:"56580385e46ce057c13c.webp",revision:null},{url:"59afcc219ebaf05c1e59.webp",revision:null},{url:"59e48fc67e5a2a93ddf0.webp",revision:null},{url:"61922e33bbc73cc6c762.webp",revision:null},{url:"62074ac70bd3cfc10445.png",revision:null},{url:"64ced720cec2f08e2b72.webp",revision:null},{url:"66126ec7fc2f5bb3f4c3.ttf",revision:null},{url:"67e25d2a0025e333a7a8.webp",revision:null},{url:"6826908d5c2bf3ffcd80.webp",revision:null},{url:"6a85e327ff649ebee53e.webp",revision:null},{url:"6f851b6fbf346e1de8c1.webp",revision:null},{url:"7393043e9fd94b4eb391.webp",revision:null},{url:"7a3ef861a87818c70436.webp",revision:null},{url:"80fbbe8a1e29cb9eb9d1.webp",revision:null},{url:"8297583d8d66b1ab3e57.webp",revision:null},{url:"83446d89542d907a6cf7.svg",revision:null},{url:"83f903d6ac45202a95e3.webp",revision:null},{url:"8a4a613de2b6981634d2.webp",revision:null},{url:"8c9ab9c3dda6f9f9458b.webp",revision:null},{url:"8df6751e1015e23e6ceb.webp",revision:null},{url:"900d7d9ed0dff608edbe.webp",revision:null},{url:"91fdbd5109dbc6eee086.webp",revision:null},{url:"a257239cc9564eb4d07b.webp",revision:null},{url:"a4dbb78609e9b6d45cba.webp",revision:null},{url:"a9c079a0cf1188bf6c37.webp",revision:null},{url:"android-chrome-192x192.png",revision:"00e03ef748dda6c554e997c601f65ab6"},{url:"android-chrome-512x512.png",revision:"14e7d467c7f6851a191a46e1bb470af6"},{url:"b3152baabfbd7cd5b9e6.webp",revision:null},{url:"b6f21df054634e762628.webp",revision:null},{url:"b8ffe29e7d5dd7d2799d.webp",revision:null},{url:"bb0402536748c5ad5d8c.webp",revision:null},{url:"bb329ae4c0b823e0e1f0.webp",revision:null},{url:"c9209f5e283fdd8dcd7f.webp",revision:null},{url:"d286bf3b26a81f4eaa7f.webp",revision:null},{url:"d6f01409c06cd728162f.webp",revision:null},{url:"d81de6e618c5a022ebcc.ttf",revision:null},{url:"d84cadff14e92964be4e.webp",revision:null},{url:"d926729fce896d0f290f.webp",revision:null},{url:"d9c4b33c3b7355f3746a.webp",revision:null},{url:"db8883e277c3c0f5dbc4.webp",revision:null},{url:"dd6e5ac8bd0850abbcce.webp",revision:null},{url:"de87f61a172d7188bdff.webp",revision:null},{url:"e6fc6b6118416add2bb1.webp",revision:null},{url:"e76d4c81b9989d30b272.webp",revision:null},{url:"eaa62801da1f2932ba89.webp",revision:null},{url:"ed009e51f5450e909d2a.webp",revision:null},{url:"ee6734ad0ead20bf7feb.webp",revision:null},{url:"f298231841f6a9a8a0f8.webp",revision:null},{url:"f657825a2eeed04632b0.gif",revision:null},{url:"f82af72c45701a255b01.webp",revision:null},{url:"f96db804c4b3ba611e9f.webp",revision:null},{url:"fb5a3ea88a4b2dc9e902.webp",revision:null},{url:"index.html",revision:"693c0da983da96389f30893589476dff"},{url:"locales/en/common.json",revision:"b4e34c00ed58f91acea8068d4fd18e44"},{url:"locales/en/translation.json",revision:"2cf5cd7e9011735f2c96326425e73584"},{url:"locales/jp/common.json",revision:"8973a31a2d567823fe51b368a2334d9f"},{url:"locales/jp/translation.json",revision:"efed283e7ea56d2d6021f9798b43cdb7"},{url:"main.js",revision:"ede4a6293bd154b66d9f59016aa773e4"},{url:"main.js.LICENSE.txt",revision:"a5fdc5d367d74c5952f69ed8b7a934ef"},{url:"manifest.json",revision:"740207dea6e004b56efefaab21a36f4d"}],{})}));
