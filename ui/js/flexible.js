!function(e){function t(){e.rem=16*i,l.innerHTML="html{font-size:"+e.rem+"px!important;}"}var i,n,a,d=document.documentElement,r=document.querySelector('meta[name="viewport"]'),l=document.createElement("style");if(r){var m=r.getAttribute("content").match(/initial\-scale=(["']?)([\d\.]+)\1?/);m&&(n=parseFloat(m[2]),i=1/n)}if(i||n||(i=e.devicePixelRatio||1,/iphone|android|windows phone|nokia/.test(navigator.userAgent.toLowerCase())||(i=2),n=1/i),d.setAttribute("data-dpr",i),d.firstElementChild.appendChild(l),!r){r=document.createElement("meta"),r.setAttribute("name","viewport");var s=navigator.userAgent.match(/Android[\S\s]+AppleWebkit\/(\d{3})/i),o=navigator.userAgent.match(/U3\/((\d+|\.){5,})/i);if(!s||s&&s[1]>534||o&&parseInt(o[1].split(".").join(""),10)>=80){if(r.setAttribute("content","width=device-width,user-scalable=no,initial-scale="+n+",maximum-scale="+n+", minimum-scale="+n),d.firstElementChild)d.firstElementChild.appendChild(r);else{var c=document.createElement("div");c.appendChild(r),document.write(c.innerHTML)}(980==d.clientWidth||1024==d.clientWidth)&&r.setAttribute("content","target-densitydpi=device-dpi,width=device-width,user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1")}else{if(r.setAttribute("content","width=device-width,user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1"),d.firstElementChild)d.firstElementChild.appendChild(r);else{var u=document.createElement("div");u.appendChild(r),document.write(u.innerHTML)}i=1}}e.dpr=i,e.addEventListener("resize",function(){clearTimeout(a),a=setTimeout(t,300)},!1),e.addEventListener("pageshow",function(e){e.persisted&&(clearTimeout(a),a=setTimeout(t,300))},!1),t()}(window),/(iphone|ipad|ipod|ios|android|iemobile)/i.test(navigator.userAgent);