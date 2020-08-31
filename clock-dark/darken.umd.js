!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.darken=t()}(this,function(){var e=function(e,t){var r=this;"function"==typeof e&&(t=e,e={}),e=Object.assign({container:null,default:"light",toggle:null,remember:"darken-mode",usePrefersColorScheme:!0,class:"darken",variables:{}},e),this.dark=!1,e.remember?localStorage.getItem(e.remember)?e.default=localStorage.getItem(e.remember):e.usePrefersColorScheme&&(e.default=this.__checkMatchMedia()||e.default):e.usePrefersColorScheme&&(e.default=this.__checkMatchMedia()||e.default,window.matchMedia("(prefers-color-scheme: dark)").addListener(function(e){e.matches&&r.on()}),window.matchMedia("(prefers-color-scheme: light)").addListener(function(e){e.matches&&r.off()})),e.toggle&&document.querySelector(e.toggle).addEventListener("click",this.__handleClick.bind(this)),document.addEventListener("darken-dark",this.__handleDarkenEvent(e,t,"add"),!1),document.addEventListener("darken-light",this.__handleDarkenEvent(e,t,"remove"),!1),"light"===e.default?this.off():"dark"===e.default&&this.on()};return e.prototype.__handleDarkenEvent=function(e,t,r){var n=this;return function(){e.container?document.querySelector(e.container).classList[r](e.class):document.body.classList[r](e.class);for(var o=e.container?document.querySelector(e.container):document.documentElement,a=0,d=Object.entries(e.variables);a<d.length;a+=1){var i=d[a],c=i[0],s=i[1];s&&"object"==typeof s&&(Array.isArray(s)?o.style.setProperty(c,n.dark?s[1]:s[0]):o.style.setProperty(c,s[n.dark?"dark":"light"]))}e.remember&&localStorage.setItem(e.remember,n.dark?"dark":"light"),"function"==typeof t&&t(n.dark)}},e.prototype.__handleClick=function(e){e.preventDefault(),this.toggle()},e.prototype.__checkMatchMedia=function(){return window.matchMedia("(prefers-color-scheme: dark)")?"dark":window.matchMedia("(prefers-color-scheme: light)")?"light":void 0},e.prototype.toggle=function(){this.dark=!this.dark,this.dark?document.dispatchEvent(new Event("darken-dark")):document.dispatchEvent(new Event("darken-light"))},e.prototype.on=function(){this.dark=!0,document.dispatchEvent(new Event("darken-dark"))},e.prototype.off=function(){this.dark=!1,document.dispatchEvent(new Event("darken-light"))},e});
