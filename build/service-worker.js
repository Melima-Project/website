"use strict";var precacheConfig=[["/index.html","71bfc20f781f686229a07f7398d98384"],["/static/js/main.fb70dd47.js","04190a865f4d01b5b2b362c7fe469131"],["/static/media/ad-free-streaming.6c7ee93a.png","6c7ee93a4c2bc59ed9e0704212f0408b"],["/static/media/bg.a3d4b4e6.svg","a3d4b4e6de68d03bba154a72db45d4c3"],["/static/media/bg.a5d772e7.svg","a5d772e786f11a5eef8edeed9e91561e"],["/static/media/contracts.2bdfe15f.png","2bdfe15fc88e9eb67ef6f806357a1861"],["/static/media/currency.8ae4b684.png","8ae4b684c11af82c807265b85da286bc"],["/static/media/how-it-works.88f57359.png","88f57359af2a67b6685d5eee5aeac11c"],["/static/media/logo.f741c074.svg","f741c074244bc81573d7debf9d7c8a5f"],["/static/media/microphone.b22ca3ce.jpg","b22ca3cef0a0d8283982dbbdce7e83ed"],["/static/media/musician.e6382812.jpg","e63828121360d4118e7e851997df69bf"],["/static/media/musicoin-for-musicians.bdac60a0.png","bdac60a0b6274e6c4844baa3ef231944"],["/static/media/resources.3fd3b619.png","3fd3b61909b33a218ff49bfcc89fd686"],["/static/media/revolution.e0ec2049.png","e0ec20495c0d8e6dd03e2f0017f17937"],["/static/media/sharism.4027f8bf.png","4027f8bf9e1310dc454f7339afde1608"],["/static/media/streaming.eab5c2a3.png","eab5c2a3238d38b10609f1bf7961ab6d"],["/static/media/support-musicians.28d73f06.png","28d73f06ce34f796b7785e46968e6011"],["/static/media/support.705a0ca9.png","705a0ca95dbc027987b7d3fb105a1806"],["/static/media/technology.e805eae7.png","e805eae7b34725a5d7d4f3aab1a087ec"],["/static/media/ubi.86bdc639.png","86bdc639da1a88bfd78bc9b1fc256ed1"],["/static/media/ubuntu-bold.f890a863.woff","f890a86312cc757aca513f4c8edaec14"],["/static/media/ubuntu-regular.771375b2.woff","771375b2bc77956eb55fb0e10334d6ad"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});