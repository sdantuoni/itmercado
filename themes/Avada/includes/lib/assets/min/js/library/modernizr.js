!function(a,b,c){function d(a,b){return typeof a===b}function e(a){var b=x.className,c=v._config.classPrefix||"";if(y&&(b=b.baseVal),v._config.enableJSClass){var d=new RegExp("(^|\\s)"+c+"no-js(\\s|$)");b=b.replace(d,"$1"+c+"js$2")}v._config.enableClasses&&(b+=" "+c+a.join(" "+c),y?x.className.baseVal=b:x.className=b)}function f(a,b){if("object"==typeof a)for(var c in a)B(a,c)&&f(c,a[c]);else{a=a.toLowerCase();var d=a.split("."),g=v[d[0]];if(2==d.length&&(g=g[d[1]]),void 0!==g)return v;b="function"==typeof b?b():b,1==d.length?v[d[0]]=b:(!v[d[0]]||v[d[0]]instanceof Boolean||(v[d[0]]=new Boolean(v[d[0]])),v[d[0]][d[1]]=b),e([(b&&0!=b?"":"no-")+d.join("-")]),v._trigger(a,b)}return v}function g(){return"function"!=typeof b.createElement?b.createElement(arguments[0]):y?b.createElementNS.call(b,"http://www.w3.org/2000/svg",arguments[0]):b.createElement.apply(b,arguments)}function h(a){return a.replace(/([a-z])-([a-z])/g,function(a,b,c){return b+c.toUpperCase()}).replace(/^-/,"")}function i(a,b){return!!~(""+a).indexOf(b)}function j(){var a=b.body;return a||(a=g(y?"svg":"body"),a.fake=!0),a}function k(a,c,d,e){var f,h,i,k,l="modernizr",m=g("div"),n=j();if(parseInt(d,10))for(;d--;)i=g("div"),i.id=e?e[d]:l+(d+1),m.appendChild(i);return f=g("style"),f.type="text/css",f.id="s"+l,(n.fake?n:m).appendChild(f),n.appendChild(m),f.styleSheet?f.styleSheet.cssText=a:f.appendChild(b.createTextNode(a)),m.id=l,n.fake&&(n.style.background="",n.style.overflow="hidden",k=x.style.overflow,x.style.overflow="hidden",x.appendChild(n)),h=c(m,a),n.fake?(n.parentNode.removeChild(n),x.style.overflow=k,x.offsetHeight):m.parentNode.removeChild(m),!!h}function l(a,b){return function(){return a.apply(b,arguments)}}function m(a,b,c){var e;for(var f in a)if(a[f]in b)return c===!1?a[f]:(e=b[a[f]],d(e,"function")?l(e,c||b):e);return!1}function n(a){return a.replace(/([A-Z])/g,function(a,b){return"-"+b.toLowerCase()}).replace(/^ms-/,"-ms-")}function o(b,d){var e=b.length;if("CSS"in a&&"supports"in a.CSS){for(;e--;)if(a.CSS.supports(n(b[e]),d))return!0;return!1}if("CSSSupportsRule"in a){for(var f=[];e--;)f.push("("+n(b[e])+":"+d+")");return f=f.join(" or "),k("@supports ("+f+") { #modernizr { position: absolute; } }",function(a){return"absolute"==getComputedStyle(a,null).position})}return c}function p(a,b,e,f){function j(){l&&(delete Q.style,delete Q.modElem)}if(f=!d(f,"undefined")&&f,!d(e,"undefined")){var k=o(a,e);if(!d(k,"undefined"))return k}for(var l,m,n,p,q,r=["modernizr","tspan"];!Q.style;)l=!0,Q.modElem=g(r.shift()),Q.style=Q.modElem.style;for(n=a.length,m=0;m<n;m++)if(p=a[m],q=Q.style[p],i(p,"-")&&(p=h(p)),Q.style[p]!==c){if(f||d(e,"undefined"))return j(),"pfx"!=b||p;try{Q.style[p]=e}catch(a){}if(Q.style[p]!=q)return j(),"pfx"!=b||p}return j(),!1}function q(a,b,c,e,f){var g=a.charAt(0).toUpperCase()+a.slice(1),h=(a+" "+N.join(g+" ")+g).split(" ");return d(b,"string")||d(b,"undefined")?p(h,b,e,f):(h=(a+" "+A.join(g+" ")+g).split(" "),m(h,b,c))}function r(a,b,d){return q(a,c,c,b,d)}var s=[],t=[],u={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(a,b){var c=this;setTimeout(function(){b(c[a])},0)},addTest:function(a,b,c){t.push({name:a,fn:b,options:c})},addAsyncTest:function(a){t.push({name:null,fn:a})}},v=function(){};v.prototype=u,v=new v,v.addTest("applicationcache","applicationCache"in a),v.addTest("geolocation","geolocation"in navigator),v.addTest("history",function(){var b=navigator.userAgent;return(b.indexOf("Android 2.")===-1&&b.indexOf("Android 4.0")===-1||b.indexOf("Mobile Safari")===-1||b.indexOf("Chrome")!==-1||b.indexOf("Windows Phone")!==-1)&&(a.history&&"pushState"in a.history)}),v.addTest("postmessage","postMessage"in a),v.addTest("websockets","WebSocket"in a&&2===a.WebSocket.CLOSING),v.addTest("localstorage",function(){var a="modernizr";try{return localStorage.setItem(a,a),localStorage.removeItem(a),!0}catch(a){return!1}}),v.addTest("sessionstorage",function(){var a="modernizr";try{return sessionStorage.setItem(a,a),sessionStorage.removeItem(a),!0}catch(a){return!1}}),v.addTest("websqldatabase","openDatabase"in a),v.addTest("webworkers","Worker"in a);var w=u._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];u._prefixes=w;var x=b.documentElement,y="svg"===x.nodeName.toLowerCase(),z="Moz O ms Webkit",A=u._config.usePrefixes?z.toLowerCase().split(" "):[];u._domPrefixes=A;var B;!function(){var a={}.hasOwnProperty;B=d(a,"undefined")||d(a.call,"undefined")?function(a,b){return b in a&&d(a.constructor.prototype[b],"undefined")}:function(b,c){return a.call(b,c)}}(),u._l={},u.on=function(a,b){this._l[a]||(this._l[a]=[]),this._l[a].push(b),v.hasOwnProperty(a)&&setTimeout(function(){v._trigger(a,v[a])},0)},u._trigger=function(a,b){if(this._l[a]){var c=this._l[a];setTimeout(function(){var a;for(a=0;a<c.length;a++)(0,c[a])(b)},0),delete this._l[a]}},v._q.push(function(){u.addTest=f});var C=function(){function a(a,b){var e;return!!a&&(b&&"string"!=typeof b||(b=g(b||"div")),a="on"+a,e=a in b,!e&&d&&(b.setAttribute||(b=g("div")),b.setAttribute(a,""),e="function"==typeof b[a],b[a]!==c&&(b[a]=c),b.removeAttribute(a)),e)}var d=!("onblur"in b.documentElement);return a}();u.hasEvent=C,v.addTest("hashchange",function(){return C("hashchange",a)!==!1&&(b.documentMode===c||b.documentMode>7)}),v.addTest("audio",function(){var a=g("audio"),b=!1;try{(b=!!a.canPlayType)&&(b=new Boolean(b),b.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),b.mp3=a.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/,""),b.opus=a.canPlayType('audio/ogg; codecs="opus"')||a.canPlayType('audio/webm; codecs="opus"').replace(/^no$/,""),b.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),b.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(a){}return b}),v.addTest("canvas",function(){var a=g("canvas");return!(!a.getContext||!a.getContext("2d"))}),v.addTest("canvastext",function(){return v.canvas!==!1&&"function"==typeof g("canvas").getContext("2d").fillText}),v.addTest("video",function(){var a=g("video"),b=!1;try{(b=!!a.canPlayType)&&(b=new Boolean(b),b.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),b.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),b.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""),b.vp9=a.canPlayType('video/webm; codecs="vp9"').replace(/^no$/,""),b.hls=a.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/,""))}catch(a){}return b}),v.addTest("webgl",function(){var b=g("canvas"),c="probablySupportsContext"in b?"probablySupportsContext":"supportsContext";return c in b?b[c]("webgl")||b[c]("experimental-webgl"):"WebGLRenderingContext"in a}),v.addTest("cssgradients",function(){for(var a,b="background-image:",c="",d=0,e=w.length-1;d<e;d++)a=0===d?"to ":"",c+=b+w[d]+"linear-gradient("+a+"left top, #9f9, white);";v._config.usePrefixes&&(c+=b+"-webkit-gradient(linear,left top,right bottom,from(#9f9),to(white));");var f=g("a"),h=f.style;return h.cssText=c,(""+h.backgroundImage).indexOf("gradient")>-1}),v.addTest("multiplebgs",function(){var a=g("a").style;return a.cssText="background:url(https://),url(https://),red url(https://)",/(url\s*\(.*?){3}/.test(a.background)}),v.addTest("opacity",function(){var a=g("a").style;return a.cssText=w.join("opacity:.55;"),/^0.55$/.test(a.opacity)}),v.addTest("rgba",function(){var a=g("a").style;return a.cssText="background-color:rgba(150,255,150,.5)",(""+a.backgroundColor).indexOf("rgba")>-1}),v.addTest("inlinesvg",function(){var a=g("div");return a.innerHTML="<svg/>","http://www.w3.org/2000/svg"==("undefined"!=typeof SVGRect&&a.firstChild&&a.firstChild.namespaceURI)});var D=g("input"),E="autocomplete autofocus list placeholder max min multiple pattern required step".split(" "),F={};v.input=function(b){for(var c=0,d=b.length;c<d;c++)F[b[c]]=!!(b[c]in D);return F.list&&(F.list=!(!g("datalist")||!a.HTMLDataListElement)),F}(E);var G="search tel url email datetime date month week time datetime-local number range color".split(" "),H={};v.inputtypes=function(a){for(var d,e,f,g=a.length,h=0;h<g;h++)D.setAttribute("type",d=a[h]),f="text"!==D.type&&"style"in D,f&&(D.value="1)",D.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(d)&&D.style.WebkitAppearance!==c?(x.appendChild(D),e=b.defaultView,f=e.getComputedStyle&&"textfield"!==e.getComputedStyle(D,null).WebkitAppearance&&0!==D.offsetHeight,x.removeChild(D)):/^(search|tel)$/.test(d)||(f=/^(url|email)$/.test(d)?D.checkValidity&&D.checkValidity()===!1:"1)"!=D.value)),H[a[h]]=!!f;return H}(G),v.addTest("hsla",function(){var a=g("a").style;return a.cssText="background-color:hsla(120,40%,100%,.5)",i(a.backgroundColor,"rgba")||i(a.backgroundColor,"hsla")});var I="CSS"in a&&"supports"in a.CSS,J="supportsCSS"in a;v.addTest("supports",I||J);var K={}.toString;v.addTest("svgclippaths",function(){return!!b.createElementNS&&/SVGClipPath/.test(K.call(b.createElementNS("http://www.w3.org/2000/svg","clipPath")))}),v.addTest("smil",function(){return!!b.createElementNS&&/SVGAnimate/.test(K.call(b.createElementNS("http://www.w3.org/2000/svg","animate")))});var L=function(){var b=a.matchMedia||a.msMatchMedia;return b?function(a){var c=b(a);return c&&c.matches||!1}:function(b){var c=!1;return k("@media "+b+" { #modernizr { position: absolute; } }",function(b){c="absolute"==(a.getComputedStyle?a.getComputedStyle(b,null):b.currentStyle).position}),c}}();u.mq=L;var M=u.testStyles=k;v.addTest("touchevents",function(){var c;if("ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch)c=!0;else{M(["@media (",w.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=9===a.offsetTop})}return c}),function(){var a=navigator.userAgent,b=a.match(/applewebkit\/([0-9]+)/gi)&&parseFloat(RegExp.$1),c=a.match(/w(eb)?osbrowser/gi),d=a.match(/windows phone/gi)&&a.match(/iemobile\/([0-9])+/gi)&&parseFloat(RegExp.$1)>=9,e=b<533&&a.match(/android/gi);return c||e||d}()?v.addTest("fontface",!1):M('@font-face {font-family:"font";src:url("https://")}',function(a,c){var d=b.getElementById("smodernizr"),e=d.sheet||d.styleSheet,f=e?e.cssRules&&e.cssRules[0]?e.cssRules[0].cssText:e.cssText||"":"",g=/src/i.test(f)&&0===f.indexOf(c.split(" ")[0]);v.addTest("fontface",g)}),M('#modernizr{font:0/0 a}#modernizr:after{content:":)";visibility:hidden;font:7px/1 a}',function(a){v.addTest("generatedcontent",a.offsetHeight>=7)});var N=u._config.usePrefixes?z.split(" "):[];u._cssomPrefixes=N;var O=function(b){var d,e=w.length,f=a.CSSRule;if(void 0===f)return c;if(!b)return!1;if(b=b.replace(/^@/,""),(d=b.replace(/-/g,"_").toUpperCase()+"_RULE")in f)return"@"+b;for(var g=0;g<e;g++){var h=w[g];if(h.toUpperCase()+"_"+d in f)return"@-"+h.toLowerCase()+"-"+b}return!1};u.atRule=O;var P={elem:g("modernizr")};v._q.push(function(){delete P.elem});var Q={style:P.elem.style};v._q.unshift(function(){delete Q.style});var R=u.testProp=function(a,b,d){return p([a],c,b,d)};v.addTest("textshadow",R("textShadow","1px 1px")),u.testAllProps=q;var S,T=u.prefixed=function(a,b,c){return 0===a.indexOf("@")?O(a):(a.indexOf("-")!=-1&&(a=h(a)),b?q(a,b,c):q(a,"pfx"))};try{S=T("indexedDB",a)}catch(a){}v.addTest("indexeddb",!!S),S&&v.addTest("indexeddb.deletedatabase","deleteDatabase"in S),u.testAllProps=r,v.addTest("cssanimations",r("animationName","a",!0)),v.addTest("backgroundsize",r("backgroundSize","100%",!0)),v.addTest("borderimage",r("borderImage","url() 1",!0)),v.addTest("borderradius",r("borderRadius","0px",!0)),v.addTest("boxshadow",r("boxShadow","1px 1px",!0)),v.addTest("flexbox",r("flexBasis","1px",!0)),v.addTest("cssreflections",r("boxReflect","above",!0)),v.addTest("csstransforms",function(){return navigator.userAgent.indexOf("Android 2.")===-1&&r("transform","scale(1)",!0)}),v.addTest("csstransforms3d",function(){var a=!!r("perspective","1px",!0),b=v._config.usePrefixes;if(a&&(!b||"webkitPerspective"in x.style)){var c;v.supports?c="@supports (perspective: 1px)":(c="@media (transform-3d)",b&&(c+=",(-webkit-transform-3d)")),c+="{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}",M("#modernizr{width:0;height:0}"+c,function(b){a=7===b.offsetWidth&&18===b.offsetHeight})}return a}),v.addTest("csstransitions",r("transition","all",!0)),function(){var a,b,c,e,f,g,h;for(var i in t)if(t.hasOwnProperty(i)){if(a=[],b=t[i],b.name&&(a.push(b.name.toLowerCase()),b.options&&b.options.aliases&&b.options.aliases.length))for(c=0;c<b.options.aliases.length;c++)a.push(b.options.aliases[c].toLowerCase());for(e=d(b.fn,"function")?b.fn():b.fn,f=0;f<a.length;f++)g=a[f],h=g.split("."),1===h.length?v[h[0]]=e:(!v[h[0]]||v[h[0]]instanceof Boolean||(v[h[0]]=new Boolean(v[h[0]])),v[h[0]][h[1]]=e),s.push((e?"":"no-")+h.join("-"))}}(),e(s),delete u.addTest,delete u.addAsyncTest;for(var U=0;U<v._q.length;U++)v._q[U]();a.Modernizr=v}(window,document);