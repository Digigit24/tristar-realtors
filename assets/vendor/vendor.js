/* https://demo2.wpopal.com/spaciaz/wp-includes/js/dist/hooks.min.js?ver=dd5603f07f9220ed27f1 */
/*! This file is auto-generated */
(()=>{var t={507:(t,e,r)=>{"use strict";r.d(e,{A:()=>A});var n=function(t){return"string"!=typeof t||""===t?(console.error("The namespace must be a non-empty string."),!1):!!/^[a-zA-Z][a-zA-Z0-9_.\-\/]*$/.test(t)||(console.error("The namespace can only contain numbers, letters, dashes, periods, underscores and slashes."),!1)};var i=function(t){return"string"!=typeof t||""===t?(console.error("The hook name must be a non-empty string."),!1):/^__/.test(t)?(console.error("The hook name cannot begin with `__`."),!1):!!/^[a-zA-Z][a-zA-Z0-9_.-]*$/.test(t)||(console.error("The hook name can only contain numbers, letters, dashes, periods and underscores."),!1)};var o=function(t,e){return function(r,o,s,c=10){const l=t[e];if(!i(r))return;if(!n(o))return;if("function"!=typeof s)return void console.error("The hook callback must be a function.");if("number"!=typeof c)return void console.error("If specified, the hook priority must be a number.");const a={callback:s,priority:c,namespace:o};if(l[r]){const t=l[r].handlers;let e;for(e=t.length;e>0&&!(c>=t[e-1].priority);e--);e===t.length?t[e]=a:t.splice(e,0,a),l.__current.forEach((t=>{t.name===r&&t.currentIndex>=e&&t.currentIndex++}))}else l[r]={handlers:[a],runs:0};"hookAdded"!==r&&t.doAction("hookAdded",r,o,s,c)}};var s=function(t,e,r=!1){return function(o,s){const c=t[e];if(!i(o))return;if(!r&&!n(s))return;if(!c[o])return 0;let l=0;if(r)l=c[o].handlers.length,c[o]={runs:c[o].runs,handlers:[]};else{const t=c[o].handlers;for(let e=t.length-1;e>=0;e--)t[e].namespace===s&&(t.splice(e,1),l++,c.__current.forEach((t=>{t.name===o&&t.currentIndex>=e&&t.currentIndex--})))}return"hookRemoved"!==o&&t.doAction("hookRemoved",o,s),l}};var c=function(t,e){return function(r,n){const i=t[e];return void 0!==n?r in i&&i[r].handlers.some((t=>t.namespace===n)):r in i}};var l=function(t,e,r,n){return function(i,...o){const s=t[e];s[i]||(s[i]={handlers:[],runs:0}),s[i].runs++;const c=s[i].handlers;if(!c||!c.length)return r?o[0]:void 0;const l={name:i,currentIndex:0};return(n?async function(){try{s.__current.add(l);let t=r?o[0]:void 0;for(;l.currentIndex<c.length;){const e=c[l.currentIndex];t=await e.callback.apply(null,o),r&&(o[0]=t),l.currentIndex++}return r?t:void 0}finally{s.__current.delete(l)}}:function(){try{s.__current.add(l);let t=r?o[0]:void 0;for(;l.currentIndex<c.length;){t=c[l.currentIndex].callback.apply(null,o),r&&(o[0]=t),l.currentIndex++}return r?t:void 0}finally{s.__current.delete(l)}})()}};var a=function(t,e){return function(){const r=t[e],n=Array.from(r.__current);return n.at(-1)?.name??null}};var d=function(t,e){return function(r){const n=t[e];return void 0===r?n.__current.size>0:Array.from(n.__current).some((t=>t.name===r))}};var u=function(t,e){return function(r){const n=t[e];if(i(r))return n[r]&&n[r].runs?n[r].runs:0}};class h{actions;filters;addAction;addFilter;removeAction;removeFilter;hasAction;hasFilter;removeAllActions;removeAllFilters;doAction;doActionAsync;applyFilters;applyFiltersAsync;currentAction;currentFilter;doingAction;doingFilter;didAction;didFilter;constructor(){this.actions=Object.create(null),this.actions.__current=new Set,this.filters=Object.create(null),this.filters.__current=new Set,this.addAction=o(this,"actions"),this.addFilter=o(this,"filters"),this.removeAction=s(this,"actions"),this.removeFilter=s(this,"filters"),this.hasAction=c(this,"actions"),this.hasFilter=c(this,"filters"),this.removeAllActions=s(this,"actions",!0),this.removeAllFilters=s(this,"filters",!0),this.doAction=l(this,"actions",!1,!1),this.doActionAsync=l(this,"actions",!1,!0),this.applyFilters=l(this,"filters",!0,!1),this.applyFiltersAsync=l(this,"filters",!0,!0),this.currentAction=a(this,"actions"),this.currentFilter=a(this,"filters"),this.doingAction=d(this,"actions"),this.doingFilter=d(this,"filters"),this.didAction=u(this,"actions"),this.didFilter=u(this,"filters")}}var A=function(){return new h}},8770:()=>{}},e={};function r(n){var i=e[n];if(void 0!==i)return i.exports;var o=e[n]={exports:{}};return t[n](o,o.exports,r),o.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var n={};(()=>{"use strict";r.r(n),r.d(n,{actions:()=>x,addAction:()=>s,addFilter:()=>c,applyFilters:()=>m,applyFiltersAsync:()=>v,createHooks:()=>t.A,currentAction:()=>y,currentFilter:()=>F,defaultHooks:()=>o,didAction:()=>b,didFilter:()=>k,doAction:()=>f,doActionAsync:()=>p,doingAction:()=>_,doingFilter:()=>g,filters:()=>w,hasAction:()=>d,hasFilter:()=>u,removeAction:()=>l,removeAllActions:()=>h,removeAllFilters:()=>A,removeFilter:()=>a});var t=r(507),e=r(8770),i={};for(const t in e)["default","actions","addAction","addFilter","applyFilters","applyFiltersAsync","createHooks","currentAction","currentFilter","defaultHooks","didAction","didFilter","doAction","doActionAsync","doingAction","doingFilter","filters","hasAction","hasFilter","removeAction","removeAllActions","removeAllFilters","removeFilter"].indexOf(t)<0&&(i[t]=()=>e[t]);r.d(n,i);const o=(0,t.A)(),{addAction:s,addFilter:c,removeAction:l,removeFilter:a,hasAction:d,hasFilter:u,removeAllActions:h,removeAllFilters:A,doAction:f,doActionAsync:p,applyFilters:m,applyFiltersAsync:v,currentAction:y,currentFilter:F,doingAction:_,doingFilter:g,didAction:b,didFilter:k,actions:x,filters:w}=o})(),(window.wp=window.wp||{}).hooks=n})();
/* https://demo2.wpopal.com/spaciaz/wp-includes/js/dist/i18n.min.js?ver=c26c3dc7bed366793375 */
/*! This file is auto-generated */
(()=>{"use strict";var t={d:(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},o:(t,n)=>Object.prototype.hasOwnProperty.call(t,n),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},n={};t.r(n),t.d(n,{__:()=>F,_n:()=>L,_nx:()=>D,_x:()=>w,createI18n:()=>h,defaultI18n:()=>b,getLocaleData:()=>g,hasTranslation:()=>O,isRTL:()=>P,resetLocaleData:()=>x,setLocaleData:()=>v,sprintf:()=>l,subscribe:()=>m});var e,r,a,i,o=/%(((\d+)\$)|(\(([$_a-zA-Z][$_a-zA-Z0-9]*)\)))?[ +0#-]*\d*(\.(\d+|\*))?(ll|[lhqL])?([cduxXefgsp%])/g;function l(t,...n){return function(t,...n){var e=0;return Array.isArray(n[0])&&(n=n[0]),t.replace(o,(function(){var t,r,a,i,o;return t=arguments[3],r=arguments[5],"%"===(i=arguments[9])?"%":("*"===(a=arguments[7])&&(a=n[e],e++),void 0===r?(void 0===t&&(t=e+1),e++,o=n[t-1]):n[0]&&"object"==typeof n[0]&&n[0].hasOwnProperty(r)&&(o=n[0][r]),"f"===i?o=parseFloat(o)||0:"d"===i&&(o=parseInt(o)||0),void 0!==a&&("f"===i?o=o.toFixed(a):"s"===i&&(o=o.substr(0,a))),null!=o?o:"")}))}(t,...n)}e={"(":9,"!":8,"*":7,"/":7,"%":7,"+":6,"-":6,"<":5,"<=":5,">":5,">=":5,"==":4,"!=":4,"&&":3,"||":2,"?":1,"?:":1},r=["(","?"],a={")":["("],":":["?","?:"]},i=/<=|>=|==|!=|&&|\|\||\?:|\(|!|\*|\/|%|\+|-|<|>|\?|\)|:/;var s={"!":function(t){return!t},"*":function(t,n){return t*n},"/":function(t,n){return t/n},"%":function(t,n){return t%n},"+":function(t,n){return t+n},"-":function(t,n){return t-n},"<":function(t,n){return t<n},"<=":function(t,n){return t<=n},">":function(t,n){return t>n},">=":function(t,n){return t>=n},"==":function(t,n){return t===n},"!=":function(t,n){return t!==n},"&&":function(t,n){return t&&n},"||":function(t,n){return t||n},"?:":function(t,n,e){if(t)throw n;return e}};function u(t){var n=function(t){for(var n,o,l,s,u=[],d=[];n=t.match(i);){for(o=n[0],(l=t.substr(0,n.index).trim())&&u.push(l);s=d.pop();){if(a[o]){if(a[o][0]===s){o=a[o][1]||o;break}}else if(r.indexOf(s)>=0||e[s]<e[o]){d.push(s);break}u.push(s)}a[o]||d.push(o),t=t.substr(n.index+o.length)}return(t=t.trim())&&u.push(t),u.concat(d.reverse())}(t);return function(t){return function(t,n){var e,r,a,i,o,l,u=[];for(e=0;e<t.length;e++){if(o=t[e],i=s[o]){for(r=i.length,a=Array(r);r--;)a[r]=u.pop();try{l=i.apply(null,a)}catch(t){return t}}else l=n.hasOwnProperty(o)?n[o]:+o;u.push(l)}return u[0]}(n,t)}}var d={contextDelimiter:"",onMissingKey:null};function c(t,n){var e;for(e in this.data=t,this.pluralForms={},this.options={},d)this.options[e]=void 0!==n&&e in n?n[e]:d[e]}c.prototype.getPluralForm=function(t,n){var e,r,a,i=this.pluralForms[t];return i||("function"!=typeof(a=(e=this.data[t][""])["Plural-Forms"]||e["plural-forms"]||e.plural_forms)&&(r=function(t){var n,e,r;for(n=t.split(";"),e=0;e<n.length;e++)if(0===(r=n[e].trim()).indexOf("plural="))return r.substr(7)}(e["Plural-Forms"]||e["plural-forms"]||e.plural_forms),a=function(t){var n=u(t);return function(t){return+n({n:t})}}(r)),i=this.pluralForms[t]=a),i(n)},c.prototype.dcnpgettext=function(t,n,e,r,a){var i,o,l;return i=void 0===a?0:this.getPluralForm(t,a),o=e,n&&(o=n+this.options.contextDelimiter+e),(l=this.data[t][o])&&l[i]?l[i]:(this.options.onMissingKey&&this.options.onMissingKey(e,t),0===i?e:r)};const p={plural_forms:t=>1===t?0:1},f=/^i18n\.(n?gettext|has_translation)(_|$)/,h=(t,n,e)=>{const r=new c({}),a=new Set,i=()=>{a.forEach((t=>t()))},o=(t,n="default")=>{r.data[n]={...r.data[n],...t},r.data[n][""]={...p,...r.data[n]?.[""]},delete r.pluralForms[n]},l=(t,n)=>{o(t,n),i()},s=(t="default",n,e,a,i)=>(r.data[t]||o(void 0,t),r.dcnpgettext(t,n,e,a,i)),u=t=>t||"default",d=(t,n,r)=>{let a=s(r,n,t);return e?(a=e.applyFilters("i18n.gettext_with_context",a,t,n,r),e.applyFilters("i18n.gettext_with_context_"+u(r),a,t,n,r)):a};if(t&&l(t,n),e){const t=t=>{f.test(t)&&i()};e.addAction("hookAdded","core/i18n",t),e.addAction("hookRemoved","core/i18n",t)}return{getLocaleData:(t="default")=>r.data[t],setLocaleData:l,addLocaleData:(t,n="default")=>{r.data[n]={...r.data[n],...t,"":{...p,...r.data[n]?.[""],...t?.[""]}},delete r.pluralForms[n],i()},resetLocaleData:(t,n)=>{r.data={},r.pluralForms={},l(t,n)},subscribe:t=>(a.add(t),()=>a.delete(t)),__:(t,n)=>{let r=s(n,void 0,t);return e?(r=e.applyFilters("i18n.gettext",r,t,n),e.applyFilters("i18n.gettext_"+u(n),r,t,n)):r},_x:d,_n:(t,n,r,a)=>{let i=s(a,void 0,t,n,r);return e?(i=e.applyFilters("i18n.ngettext",i,t,n,r,a),e.applyFilters("i18n.ngettext_"+u(a),i,t,n,r,a)):i},_nx:(t,n,r,a,i)=>{let o=s(i,a,t,n,r);return e?(o=e.applyFilters("i18n.ngettext_with_context",o,t,n,r,a,i),e.applyFilters("i18n.ngettext_with_context_"+u(i),o,t,n,r,a,i)):o},isRTL:()=>"rtl"===d("ltr","text direction"),hasTranslation:(t,n,a)=>{const i=n?n+""+t:t;let o=!!r.data?.[a??"default"]?.[i];return e&&(o=e.applyFilters("i18n.has_translation",o,t,n,a),o=e.applyFilters("i18n.has_translation_"+u(a),o,t,n,a)),o}}},_=window.wp.hooks,y=h(void 0,void 0,_.defaultHooks);var b=y;const g=y.getLocaleData.bind(y),v=y.setLocaleData.bind(y),x=y.resetLocaleData.bind(y),m=y.subscribe.bind(y),F=y.__.bind(y),w=y._x.bind(y),L=y._n.bind(y),D=y._nx.bind(y),P=y.isRTL.bind(y),O=y.hasTranslation.bind(y);(window.wp=window.wp||{}).i18n=n})();
/* https://demo2.wpopal.com/spaciaz/wp-content/plugins/contact-form-7/includes/swv/js/index.js?ver=6.1.4 */
(()=>{"use strict";var t={d:(e,i)=>{for(var s in i)t.o(i,s)&&!t.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:i[s]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};function i(t){if(this.formData={},this.tree={},!(t instanceof FormData))return this;this.formData=t;const e=()=>{const t=new Map;return t.largestIndex=0,t.set=function(e,i){""===e?e=t.largestIndex++:/^[0-9]+$/.test(e)&&(e=parseInt(e),t.largestIndex<=e&&(t.largestIndex=e+1)),Map.prototype.set.call(t,e,i)},t};this.tree=e();const i=/^(?<name>[a-z][-a-z0-9_:]*)(?<array>(?:\[(?:[a-z][-a-z0-9_:]*|[0-9]*)\])*)/i;for(const[t,s]of this.formData){const o=t.match(i);if(o)if(""===o.groups.array)this.tree.set(o.groups.name,s);else{const t=[...o.groups.array.matchAll(/\[([a-z][-a-z0-9_:]*|[0-9]*)\]/gi)].map((([t,e])=>e));t.unshift(o.groups.name);const i=t.pop();t.reduce(((t,i)=>{if(/^[0-9]+$/.test(i)&&(i=parseInt(i)),t.get(i)instanceof Map)return t.get(i);const s=e();return t.set(i,s),s}),this.tree).set(i,s)}}}t.r(e),t.d(e,{all:()=>D,any:()=>M,date:()=>m,dayofweek:()=>u,email:()=>r,enum:()=>h,file:()=>d,maxdate:()=>z,maxfilesize:()=>j,maxitems:()=>v,maxlength:()=>x,maxnumber:()=>y,mindate:()=>A,minfilesize:()=>$,minitems:()=>w,minlength:()=>g,minnumber:()=>b,number:()=>c,required:()=>n,requiredfile:()=>a,stepnumber:()=>I,tel:()=>l,time:()=>f,url:()=>p}),i.prototype.entries=function(){return this.tree.entries()},i.prototype.get=function(t){return this.tree.get(t)},i.prototype.getAll=function(t){if(!this.has(t))return[];const e=t=>{const i=[];if(t instanceof Map)for(const[s,o]of t)i.push(...e(o));else""!==t&&i.push(t);return i};return e(this.get(t))},i.prototype.has=function(t){return this.tree.has(t)},i.prototype.keys=function(){return this.tree.keys()},i.prototype.values=function(){return this.tree.values()};const s=i;function o({rule:t,field:e,error:i,...s}){this.rule=t,this.field=e,this.error=i,this.properties=s}const n=function(t){if(0===t.getAll(this.field).map((t=>t.trim())).filter((t=>""!==t)).length)throw new o(this)},a=function(t){if(0===t.getAll(this.field).length)throw new o(this)},r=function(t){if(!t.getAll(this.field).map((t=>t.trim())).filter((t=>""!==t)).every((t=>{if(t.length<6)return!1;if(-1===t.indexOf("@",1))return!1;if(t.indexOf("@")!==t.lastIndexOf("@"))return!1;const[e,i]=t.split("@",2);if(!/^[a-zA-Z0-9!#$%&\'*+\/=?^_`{|}~\.-]+$/.test(e))return!1;if(/\.{2,}/.test(i))return!1;if(/(?:^[ \t\n\r\0\x0B.]|[ \t\n\r\0\x0B.]$)/.test(i))return!1;const s=i.split(".");if(s.length<2)return!1;for(const t of s){if(/(?:^[ \t\n\r\0\x0B-]|[ \t\n\r\0\x0B-]$)/.test(t))return!1;if(!/^[a-z0-9-]+$/i.test(t))return!1}return!0})))throw new o(this)},p=function(t){const e=t.getAll(this.field).map((t=>t.trim())).filter((t=>""!==t));if(!e.every((t=>{try{return(t=>-1!==["http","https","ftp","ftps","mailto","news","irc","irc6","ircs","gopher","nntp","feed","telnet","mms","rtsp","sms","svn","tel","fax","xmpp","webcal","urn"].indexOf(t))(new URL(t).protocol.replace(/:$/,""))}catch{return!1}})))throw new o(this)},l=function(t){if(!t.getAll(this.field).map((t=>t.trim())).filter((t=>""!==t)).every((t=>(((t=(t=t.replace(/[#*].*$/,"")).replaceAll(/[()/.*#\s-]+/g,"")).startsWith("+")||t.startsWith("00"))&&(t=`+${t.replace(/^[+0]+/,"")}`),!!/^[+]?[0-9]+$/.test(t)&&5<t.length&&t.length<16))))throw new o(this)},c=function(t){if(!t.getAll(this.field).map((t=>t.trim())).filter((t=>""!==t)).every((t=>!!/^[-]?[0-9]+(?:[eE][+-]?[0-9]+)?$/.test(t)||!!/^[-]?(?:[0-9]+)?[.][0-9]+(?:[eE][+-]?[0-9]+)?$/.test(t))))throw new o(this)},m=function(t){if(!t.getAll(this.field).map((t=>t.trim())).filter((t=>""!==t)).every((t=>{if(!/^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(t))return!1;const e=new Date(t);return!Number.isNaN(e.valueOf())})))throw new o(this)},f=function(t){if(!t.getAll(this.field).map((t=>t.trim())).filter((t=>""!==t)).every((t=>{const e=t.match(/^([0-9]{2})\:([0-9]{2})(?:\:([0-9]{2}))?$/);if(!e)return!1;const i=parseInt(e[1]),s=parseInt(e[2]),o=e[3]?parseInt(e[3]):0;return 0<=i&&i<=23&&0<=s&&s<=59&&0<=o&&o<=59})))throw new o(this)},d=function(t){if(!t.getAll(this.field).every((t=>t instanceof File&&this.accept?.some((e=>/^\.[a-z0-9]+$/i.test(e)?t.name.toLowerCase().endsWith(e.toLowerCase()):(t=>{const e=[],i=t.match(/^(?<toplevel>[a-z]+)\/(?<sub>[*]|[a-z0-9.+-]+)$/i);if(i){const t=i.groups.toplevel.toLowerCase(),s=i.groups.sub.toLowerCase();for(const[o,n]of(()=>{const t=new Map;return t.set("jpg|jpeg|jpe","image/jpeg"),t.set("gif","image/gif"),t.set("png","image/png"),t.set("bmp","image/bmp"),t.set("tiff|tif","image/tiff"),t.set("webp","image/webp"),t.set("ico","image/x-icon"),t.set("heic","image/heic"),t.set("asf|asx","video/x-ms-asf"),t.set("wmv","video/x-ms-wmv"),t.set("wmx","video/x-ms-wmx"),t.set("wm","video/x-ms-wm"),t.set("avi","video/avi"),t.set("divx","video/divx"),t.set("flv","video/x-flv"),t.set("mov|qt","video/quicktime"),t.set("mpeg|mpg|mpe","video/mpeg"),t.set("mp4|m4v","video/mp4"),t.set("ogv","video/ogg"),t.set("webm","video/webm"),t.set("mkv","video/x-matroska"),t.set("3gp|3gpp","video/3gpp"),t.set("3g2|3gp2","video/3gpp2"),t.set("txt|asc|c|cc|h|srt","text/plain"),t.set("csv","text/csv"),t.set("tsv","text/tab-separated-values"),t.set("ics","text/calendar"),t.set("rtx","text/richtext"),t.set("css","text/css"),t.set("htm|html","text/html"),t.set("vtt","text/vtt"),t.set("dfxp","application/ttaf+xml"),t.set("mp3|m4a|m4b","audio/mpeg"),t.set("aac","audio/aac"),t.set("ra|ram","audio/x-realaudio"),t.set("wav","audio/wav"),t.set("ogg|oga","audio/ogg"),t.set("flac","audio/flac"),t.set("mid|midi","audio/midi"),t.set("wma","audio/x-ms-wma"),t.set("wax","audio/x-ms-wax"),t.set("mka","audio/x-matroska"),t.set("rtf","application/rtf"),t.set("js","application/javascript"),t.set("pdf","application/pdf"),t.set("swf","application/x-shockwave-flash"),t.set("class","application/java"),t.set("tar","application/x-tar"),t.set("zip","application/zip"),t.set("gz|gzip","application/x-gzip"),t.set("rar","application/rar"),t.set("7z","application/x-7z-compressed"),t.set("exe","application/x-msdownload"),t.set("psd","application/octet-stream"),t.set("xcf","application/octet-stream"),t.set("doc","application/msword"),t.set("pot|pps|ppt","application/vnd.ms-powerpoint"),t.set("wri","application/vnd.ms-write"),t.set("xla|xls|xlt|xlw","application/vnd.ms-excel"),t.set("mdb","application/vnd.ms-access"),t.set("mpp","application/vnd.ms-project"),t.set("docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"),t.set("docm","application/vnd.ms-word.document.macroEnabled.12"),t.set("dotx","application/vnd.openxmlformats-officedocument.wordprocessingml.template"),t.set("dotm","application/vnd.ms-word.template.macroEnabled.12"),t.set("xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"),t.set("xlsm","application/vnd.ms-excel.sheet.macroEnabled.12"),t.set("xlsb","application/vnd.ms-excel.sheet.binary.macroEnabled.12"),t.set("xltx","application/vnd.openxmlformats-officedocument.spreadsheetml.template"),t.set("xltm","application/vnd.ms-excel.template.macroEnabled.12"),t.set("xlam","application/vnd.ms-excel.addin.macroEnabled.12"),t.set("pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"),t.set("pptm","application/vnd.ms-powerpoint.presentation.macroEnabled.12"),t.set("ppsx","application/vnd.openxmlformats-officedocument.presentationml.slideshow"),t.set("ppsm","application/vnd.ms-powerpoint.slideshow.macroEnabled.12"),t.set("potx","application/vnd.openxmlformats-officedocument.presentationml.template"),t.set("potm","application/vnd.ms-powerpoint.template.macroEnabled.12"),t.set("ppam","application/vnd.ms-powerpoint.addin.macroEnabled.12"),t.set("sldx","application/vnd.openxmlformats-officedocument.presentationml.slide"),t.set("sldm","application/vnd.ms-powerpoint.slide.macroEnabled.12"),t.set("onetoc|onetoc2|onetmp|onepkg","application/onenote"),t.set("oxps","application/oxps"),t.set("xps","application/vnd.ms-xpsdocument"),t.set("odt","application/vnd.oasis.opendocument.text"),t.set("odp","application/vnd.oasis.opendocument.presentation"),t.set("ods","application/vnd.oasis.opendocument.spreadsheet"),t.set("odg","application/vnd.oasis.opendocument.graphics"),t.set("odc","application/vnd.oasis.opendocument.chart"),t.set("odb","application/vnd.oasis.opendocument.database"),t.set("odf","application/vnd.oasis.opendocument.formula"),t.set("wp|wpd","application/wordperfect"),t.set("key","application/vnd.apple.keynote"),t.set("numbers","application/vnd.apple.numbers"),t.set("pages","application/vnd.apple.pages"),t})())("*"===s&&n.startsWith(t+"/")||n===i[0])&&e.push(...o.split("|"))}return e})(e).some((e=>(e="."+e.trim(),t.name.toLowerCase().endsWith(e.toLowerCase())))))))))throw new o(this)},h=function(t){if(!t.getAll(this.field).map((t=>t.trim())).filter((t=>""!==t)).every((t=>this.accept?.some((e=>t===String(e))))))throw new o(this)},u=function(t){if(!t.getAll(this.field).map((t=>t.trim())).filter((t=>""!==t)).every((t=>{const e=0===(i=new Date(t).getDay())?7:i;var i;return this.accept?.some((t=>e===parseInt(t)))})))throw new o(this)},w=function(t){if(t.getAll(this.field).map((t=>t.trim())).filter((t=>""!==t)).length<parseInt(this.threshold))throw new o(this)},v=function(t){const e=t.getAll(this.field).map((t=>t.trim())).filter((t=>""!==t));if(parseInt(this.threshold)<e.length)throw new o(this)},g=function(t){const e=t.getAll(this.field).map((t=>t.trim())).filter((t=>""!==t));let i=0;if(e.forEach((t=>{"string"==typeof t&&(i+=t.length)})),0!==i&&i<parseInt(this.threshold))throw new o(this)},x=function(t){const e=t.getAll(this.field).map((t=>t.trim())).filter((t=>""!==t));let i=0;if(e.forEach((t=>{"string"==typeof t&&(i+=t.length)})),parseInt(this.threshold)<i)throw new o(this)},b=function(t){if(!t.getAll(this.field).map((t=>t.trim())).filter((t=>""!==t)).every((t=>!(parseFloat(t)<parseFloat(this.threshold)))))throw new o(this)},y=function(t){if(!t.getAll(this.field).map((t=>t.trim())).filter((t=>""!==t)).every((t=>!(parseFloat(this.threshold)<parseFloat(t)))))throw new o(this)},A=function(t){if(!t.getAll(this.field).map((t=>t.trim())).filter((t=>""!==t)).every((t=>!(/^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(t)&&/^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(this.threshold)&&t<this.threshold))))throw new o(this)},z=function(t){if(!t.getAll(this.field).map((t=>t.trim())).filter((t=>""!==t)).every((t=>!(/^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(t)&&/^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(this.threshold)&&this.threshold<t))))throw new o(this)},$=function(t){const e=t.getAll(this.field);let i=0;if(e.forEach((t=>{t instanceof File&&(i+=t.size)})),i<parseInt(this.threshold))throw new o(this)},j=function(t){const e=t.getAll(this.field);let i=0;if(e.forEach((t=>{t instanceof File&&(i+=t.size)})),parseInt(this.threshold)<i)throw new o(this)},I=function(t){const e=t.getAll(this.field).map((t=>t.trim())).filter((t=>""!==t)),i=parseFloat(this.base),s=parseFloat(this.interval);if(!(0<s))return!0;if(!e.every((t=>{const e=(parseFloat(t)-i)%s;return"0.000000"===Math.abs(e).toFixed(6)||"0.000000"===Math.abs(e-s).toFixed(6)})))throw new o(this)},O=({ruleObj:t,options:i})=>{const{rule:s,...o}=t;return"function"==typeof e[s]&&("function"!=typeof e[s].matches||e[s].matches(o,i))},E=({ruleObj:t,formDataTree:i,options:s})=>{const{rule:o}=t;e[o].call(t,i,s)},k=[],F=t=>[...k].reduce(((t,e)=>i=>e(i,t)),t),D=function(t,e={}){const i=(this.rules??[]).filter((t=>O({ruleObj:t,options:e}))),s=F(E);if(!i.every((i=>{try{s({ruleObj:i,formDataTree:t,options:e})}catch(t){if(!(t instanceof o))throw t;if(void 0!==t.error)throw t;return!1}return!0})))throw new o(this)},M=function(t,e={}){const i=(this.rules??[]).filter((t=>O({ruleObj:t,options:e}))),s=F(E);if(!i.some((i=>{try{s({ruleObj:i,formDataTree:t,options:e})}catch(t){if(!(t instanceof o))throw t;return!1}return!0})))throw new o(this)};var L;window.swv={validators:e,validate:(t,e,i={})=>{const n=(t.rules??[]).filter((t=>O({ruleObj:t,options:i})));if(!n.length)return new Map;const a=F(E),r=new s(e),p=n.reduce(((t,e)=>{try{a({ruleObj:e,formDataTree:r,options:i})}catch(e){if(!(e instanceof o))throw e;if(void 0!==e.field&&!t.has(e.field)&&void 0!==e.error)return t.set(e.field,e)}return t}),new Map);for(const t of r.keys())p.has(t)||p.set(t,{validInputs:r.getAll(t)});return p},use:t=>{k.push(t)},...null!==(L=window.swv)&&void 0!==L?L:{}}})();
/* https://demo2.wpopal.com/spaciaz/wp-content/plugins/contact-form-7/includes/js/index.js?ver=6.1.4 */
(()=>{"use strict";const e=window.wp.i18n,t=e=>Math.abs(parseInt(e,10)),a=(e,t,a)=>{const n=new CustomEvent(`wpcf7${t}`,{bubbles:!0,detail:a});"string"==typeof e&&(e=document.querySelector(e)),e.dispatchEvent(n)},n=(e,t)=>{const n=new Map([["init","init"],["validation_failed","invalid"],["acceptance_missing","unaccepted"],["spam","spam"],["aborted","aborted"],["mail_sent","sent"],["mail_failed","failed"],["submitting","submitting"],["resetting","resetting"],["validating","validating"],["payment_required","payment-required"]]);n.has(t)&&(t=n.get(t)),Array.from(n.values()).includes(t)||(t=`custom-${t=(t=t.replace(/[^0-9a-z]+/i," ").trim()).replace(/\s+/,"-")}`);const r=e.getAttribute("data-status");if(e.wpcf7.status=t,e.setAttribute("data-status",t),e.classList.add(t),r&&r!==t){e.classList.remove(r);const t={contactFormId:e.wpcf7.id,pluginVersion:e.wpcf7.pluginVersion,contactFormLocale:e.wpcf7.locale,unitTag:e.wpcf7.unitTag,containerPostId:e.wpcf7.containerPost,status:e.wpcf7.status,prevStatus:r};a(e,"statuschanged",t)}return t},r=e=>{const{root:t,namespace:a="contact-form-7/v1"}=wpcf7.api;return c.reduceRight(((e,t)=>a=>t(a,e)),(e=>{let n,r,{url:c,path:o,endpoint:s,headers:i,body:l,data:p,...d}=e;"string"==typeof s&&(n=a.replace(/^\/|\/$/g,""),r=s.replace(/^\//,""),o=r?n+"/"+r:n),"string"==typeof o&&(-1!==t.indexOf("?")&&(o=o.replace("?","&")),o=o.replace(/^\//,""),c=t+o),i={Accept:"application/json, */*;q=0.1",...i},delete i["X-WP-Nonce"],p&&(l=JSON.stringify(p),i["Content-Type"]="application/json");const f={code:"fetch_error",message:"You are probably offline."},u={code:"invalid_json",message:"The response is not a valid JSON response."};return window.fetch(c||o||window.location.href,{...d,headers:i,body:l}).then((e=>Promise.resolve(e).then((e=>{if(e.status>=200&&e.status<300)return e;throw e})).then((e=>{if(204===e.status)return null;if(e&&e.json)return e.json().catch((()=>{throw u}));throw u}))),(()=>{throw f}))}))(e)},c=[];function o(e,t={}){const{target:a,scope:r=e,...c}=t;if(void 0===e.wpcf7?.schema)return;const o={...e.wpcf7.schema};if(void 0!==a){if(!e.contains(a))return;if(!a.closest(".wpcf7-form-control-wrap[data-name]"))return;if(a.closest(".novalidate"))return}const p=r.querySelectorAll(".wpcf7-form-control-wrap"),d=Array.from(p).reduce(((e,t)=>(t.closest(".novalidate")||t.querySelectorAll(":where( input, textarea, select ):enabled").forEach((t=>{if(t.name)switch(t.type){case"button":case"image":case"reset":case"submit":break;case"checkbox":case"radio":t.checked&&e.append(t.name,t.value);break;case"select-multiple":for(const a of t.selectedOptions)e.append(t.name,a.value);break;case"file":for(const a of t.files)e.append(t.name,a);break;default:e.append(t.name,t.value)}})),e)),new FormData),f=e.getAttribute("data-status");Promise.resolve(n(e,"validating")).then((n=>{if(void 0!==swv){const n=swv.validate(o,d,t);for(const t of p){if(void 0===t.dataset.name)continue;const c=t.dataset.name;if(n.has(c)){const{error:t,validInputs:a}=n.get(c);i(e,c),void 0!==t&&s(e,c,t,{scope:r}),l(e,c,null!=a?a:[])}if(t.contains(a))break}}})).finally((()=>{n(e,f)}))}r.use=e=>{c.unshift(e)};const s=(e,t,a,n)=>{const{scope:r=e,...c}=null!=n?n:{},o=`${e.wpcf7?.unitTag}-ve-${t}`.replaceAll(/[^0-9a-z_-]+/gi,""),s=e.querySelector(`.wpcf7-form-control-wrap[data-name="${t}"] .wpcf7-form-control`);(()=>{const t=document.createElement("li");t.setAttribute("id",o),s&&s.id?t.insertAdjacentHTML("beforeend",`<a href="#${s.id}">${a}</a>`):t.insertAdjacentText("beforeend",a),e.wpcf7.parent.querySelector(".screen-reader-response ul").appendChild(t)})(),r.querySelectorAll(`.wpcf7-form-control-wrap[data-name="${t}"]`).forEach((e=>{const t=document.createElement("span");t.classList.add("wpcf7-not-valid-tip"),t.setAttribute("aria-hidden","true"),t.insertAdjacentText("beforeend",a),e.appendChild(t),e.querySelectorAll("[aria-invalid]").forEach((e=>{e.setAttribute("aria-invalid","true")})),e.querySelectorAll(".wpcf7-form-control").forEach((e=>{e.classList.add("wpcf7-not-valid"),e.setAttribute("aria-describedby",o),"function"==typeof e.setCustomValidity&&e.setCustomValidity(a),e.closest(".use-floating-validation-tip")&&(e.addEventListener("focus",(e=>{t.setAttribute("style","display: none")})),t.addEventListener("click",(e=>{t.setAttribute("style","display: none")})))}))}))},i=(e,t)=>{const a=`${e.wpcf7?.unitTag}-ve-${t}`.replaceAll(/[^0-9a-z_-]+/gi,"");e.wpcf7.parent.querySelector(`.screen-reader-response ul li#${a}`)?.remove(),e.querySelectorAll(`.wpcf7-form-control-wrap[data-name="${t}"]`).forEach((e=>{e.querySelector(".wpcf7-not-valid-tip")?.remove(),e.querySelectorAll("[aria-invalid]").forEach((e=>{e.setAttribute("aria-invalid","false")})),e.querySelectorAll(".wpcf7-form-control").forEach((e=>{e.removeAttribute("aria-describedby"),e.classList.remove("wpcf7-not-valid"),"function"==typeof e.setCustomValidity&&e.setCustomValidity("")}))}))},l=(e,t,a)=>{e.querySelectorAll(`[data-reflection-of="${t}"]`).forEach((e=>{if("output"===e.tagName.toLowerCase()){const t=e;0===a.length&&a.push(t.dataset.default),a.slice(0,1).forEach((e=>{e instanceof File&&(e=e.name),t.textContent=e}))}else e.querySelectorAll("output").forEach((e=>{e.hasAttribute("data-default")?0===a.length?e.removeAttribute("hidden"):e.setAttribute("hidden","hidden"):e.remove()})),a.forEach((a=>{a instanceof File&&(a=a.name);const n=document.createElement("output");n.setAttribute("name",t),n.textContent=a,e.appendChild(n)}))}))};function p(e,t={}){if(wpcf7.blocked)return d(e),void n(e,"submitting");const c=new FormData(e);t.submitter&&t.submitter.name&&c.append(t.submitter.name,t.submitter.value);const o={contactFormId:e.wpcf7.id,pluginVersion:e.wpcf7.pluginVersion,contactFormLocale:e.wpcf7.locale,unitTag:e.wpcf7.unitTag,containerPostId:e.wpcf7.containerPost,status:e.wpcf7.status,inputs:Array.from(c,(e=>{const t=e[0],a=e[1];return!t.match(/^_/)&&{name:t,value:a}})).filter((e=>!1!==e)),formData:c};r({endpoint:`contact-forms/${e.wpcf7.id}/feedback`,method:"POST",body:c,wpcf7:{endpoint:"feedback",form:e,detail:o}}).then((t=>{const r=n(e,t.status);return o.status=t.status,o.apiResponse=t,["invalid","unaccepted","spam","aborted"].includes(r)?a(e,r,o):["sent","failed"].includes(r)&&a(e,`mail${r}`,o),a(e,"submit",o),t})).then((t=>{t.posted_data_hash&&(e.querySelector('input[name="_wpcf7_posted_data_hash"]').value=t.posted_data_hash),"mail_sent"===t.status&&(e.reset(),e.wpcf7.resetOnMailSent=!0),t.invalid_fields&&t.invalid_fields.forEach((t=>{s(e,t.field,t.message)})),e.wpcf7.parent.querySelector('.screen-reader-response [role="status"]').insertAdjacentText("beforeend",t.message),e.querySelectorAll(".wpcf7-response-output").forEach((e=>{e.innerText=t.message}))})).catch((e=>console.error(e)))}r.use(((e,t)=>{if(e.wpcf7&&"feedback"===e.wpcf7.endpoint){const{form:t,detail:r}=e.wpcf7;d(t),a(t,"beforesubmit",r),n(t,"submitting")}return t(e)}));const d=e=>{e.querySelectorAll(".wpcf7-form-control-wrap").forEach((t=>{t.dataset.name&&i(e,t.dataset.name)})),e.wpcf7.parent.querySelector('.screen-reader-response [role="status"]').innerText="",e.querySelectorAll(".wpcf7-response-output").forEach((e=>{e.innerText=""}))};function f(e){const t=new FormData(e),c={contactFormId:e.wpcf7.id,pluginVersion:e.wpcf7.pluginVersion,contactFormLocale:e.wpcf7.locale,unitTag:e.wpcf7.unitTag,containerPostId:e.wpcf7.containerPost,status:e.wpcf7.status,inputs:Array.from(t,(e=>{const t=e[0],a=e[1];return!t.match(/^_/)&&{name:t,value:a}})).filter((e=>!1!==e)),formData:t};r({endpoint:`contact-forms/${e.wpcf7.id}/refill`,method:"GET",wpcf7:{endpoint:"refill",form:e,detail:c}}).then((t=>{e.wpcf7.resetOnMailSent?(delete e.wpcf7.resetOnMailSent,n(e,"mail_sent")):n(e,"init"),c.apiResponse=t,a(e,"reset",c)})).catch((e=>console.error(e)))}r.use(((e,t)=>{if(e.wpcf7&&"refill"===e.wpcf7.endpoint){const{form:t,detail:a}=e.wpcf7;d(t),n(t,"resetting")}return t(e)}));const u=(e,t)=>{for(const a in t){const n=t[a];e.querySelectorAll(`input[name="${a}"]`).forEach((e=>{e.value=""})),e.querySelectorAll(`img.wpcf7-captcha-${a.replaceAll(":","")}`).forEach((e=>{e.setAttribute("src",n)}));const r=/([0-9]+)\.(png|gif|jpeg)$/.exec(n);r&&e.querySelectorAll(`input[name="_wpcf7_captcha_challenge_${a}"]`).forEach((e=>{e.value=r[1]}))}},m=(e,t)=>{for(const a in t){const n=t[a][0],r=t[a][1];e.querySelectorAll(`.wpcf7-form-control-wrap[data-name="${a}"]`).forEach((e=>{e.querySelector(`input[name="${a}"]`).value="",e.querySelector(".wpcf7-quiz-label").textContent=n,e.querySelector(`input[name="_wpcf7_quiz_answer_${a}"]`).value=r}))}};function w(e){const a=new FormData(e);e.wpcf7={id:t(a.get("_wpcf7")),status:e.getAttribute("data-status"),pluginVersion:a.get("_wpcf7_version"),locale:a.get("_wpcf7_locale"),unitTag:a.get("_wpcf7_unit_tag"),containerPost:t(a.get("_wpcf7_container_post")),parent:e.closest(".wpcf7"),get schema(){return wpcf7.schemas.get(this.id)}},wpcf7.schemas.set(e.wpcf7.id,void 0),e.querySelectorAll(".has-spinner").forEach((e=>{e.insertAdjacentHTML("afterend",'<span class="wpcf7-spinner"></span>')})),(e=>{e.querySelectorAll(".wpcf7-exclusive-checkbox").forEach((t=>{t.addEventListener("change",(t=>{const a=t.target.getAttribute("name");e.querySelectorAll(`input[type="checkbox"][name="${a}"]`).forEach((e=>{e!==t.target&&(e.checked=!1)}))}))}))})(e),(e=>{e.querySelectorAll(".has-free-text").forEach((t=>{const a=t.querySelector("input.wpcf7-free-text"),n=t.querySelector('input[type="checkbox"], input[type="radio"]');a.disabled=!n.checked,e.addEventListener("change",(e=>{a.disabled=!n.checked,e.target===n&&n.checked&&a.focus()}))}))})(e),(e=>{e.querySelectorAll(".wpcf7-validates-as-url").forEach((e=>{e.addEventListener("change",(t=>{let a=e.value.trim();a&&!a.match(/^[a-z][a-z0-9.+-]*:/i)&&-1!==a.indexOf(".")&&(a=a.replace(/^\/+/,""),a="http://"+a),e.value=a}))}))})(e),(e=>{if(!e.querySelector(".wpcf7-acceptance")||e.classList.contains("wpcf7-acceptance-as-validation"))return;const t=()=>{let t=!0;e.querySelectorAll(".wpcf7-acceptance").forEach((e=>{if(!t||e.classList.contains("optional"))return;const a=e.querySelector('input[type="checkbox"]');(e.classList.contains("invert")&&a.checked||!e.classList.contains("invert")&&!a.checked)&&(t=!1)})),e.querySelectorAll(".wpcf7-submit").forEach((e=>{e.disabled=!t}))};t(),e.addEventListener("change",(e=>{t()})),e.addEventListener("wpcf7reset",(e=>{t()}))})(e),(e=>{const a=(e,a)=>{const n=t(e.getAttribute("data-starting-value")),r=t(e.getAttribute("data-maximum-value")),c=t(e.getAttribute("data-minimum-value")),o=e.classList.contains("down")?n-a.value.trim().length:a.value.trim().length;e.setAttribute("data-current-value",o),e.innerText=o,r&&r<a.value.length?e.classList.add("too-long"):e.classList.remove("too-long"),c&&a.value.length<c?e.classList.add("too-short"):e.classList.remove("too-short")},n=t=>{t={init:!1,...t},e.querySelectorAll(".wpcf7-character-count").forEach((n=>{const r=n.getAttribute("data-target-name"),c=e.querySelector(`[name="${r}"]`);c&&(c.value=c.defaultValue,a(n,c),t.init&&c.addEventListener("keyup",(e=>{a(n,c)})))}))};n({init:!0}),e.addEventListener("wpcf7reset",(e=>{n()}))})(e),window.addEventListener("load",(t=>{wpcf7.cached&&e.reset()})),e.addEventListener("reset",(t=>{wpcf7.reset(e)})),e.addEventListener("submit",(t=>{wpcf7.submit(e,{submitter:t.submitter}),t.preventDefault()})),e.addEventListener("wpcf7submit",(t=>{t.detail.apiResponse.captcha&&u(e,t.detail.apiResponse.captcha),t.detail.apiResponse.quiz&&m(e,t.detail.apiResponse.quiz)})),e.addEventListener("wpcf7reset",(t=>{t.detail.apiResponse.captcha&&u(e,t.detail.apiResponse.captcha),t.detail.apiResponse.quiz&&m(e,t.detail.apiResponse.quiz)})),e.addEventListener("change",(t=>{t.target.closest(".wpcf7-form-control")&&wpcf7.validate(e,{target:t.target})})),e.addEventListener("wpcf7statuschanged",(t=>{const a=t.detail.status;e.querySelectorAll(".active-on-any").forEach((e=>{e.removeAttribute("inert"),e.classList.remove("active-on-any")})),e.querySelectorAll(`.inert-on-${a}`).forEach((e=>{e.setAttribute("inert","inert"),e.classList.add("active-on-any")}))}))}document.addEventListener("DOMContentLoaded",(t=>{var a;if("undefined"!=typeof wpcf7)if(void 0!==wpcf7.api)if("function"==typeof window.fetch)if("function"==typeof window.FormData)if("function"==typeof NodeList.prototype.forEach)if("function"==typeof String.prototype.replaceAll){wpcf7={init:w,submit:p,reset:f,validate:o,schemas:new Map,...null!==(a=wpcf7)&&void 0!==a?a:{}},document.querySelectorAll("form .wpcf7[data-wpcf7-id]").forEach((t=>{const a=document.createElement("p");a.setAttribute("class","wpcf7-form-in-wrong-place");const n=document.createElement("strong");n.append((0,e.__)("Error:","contact-form-7"));const r=(0,e.__)("This contact form is placed in the wrong place.","contact-form-7");a.append(n," ",r),t.replaceWith(a)})),document.querySelectorAll(".wpcf7 > form").forEach((e=>{wpcf7.init(e),e.closest(".wpcf7").classList.replace("no-js","js")}));for(const e of wpcf7.schemas.keys())r({endpoint:`contact-forms/${e}/feedback/schema`,method:"GET"}).then((t=>{wpcf7.schemas.set(e,t)}))}else console.error("Your browser does not support String.replaceAll().");else console.error("Your browser does not support NodeList.forEach().");else console.error("Your browser does not support window.FormData().");else console.error("Your browser does not support window.fetch().");else console.error("wpcf7.api is not defined.");else console.error("wpcf7 is not defined.")}))})();
/* https://demo2.wpopal.com/spaciaz/wp-content/plugins/elementor/assets/js/webpack.runtime.min.js?ver=3.33.4 */
(()=>{"use strict";var e,r,_,t,a,n={},i={};function __webpack_require__(e){var r=i[e];if(void 0!==r)return r.exports;var _=i[e]={exports:{}};return n[e].call(_.exports,_,_.exports,__webpack_require__),_.exports}__webpack_require__.m=n,e=[],__webpack_require__.O=(r,_,t,a)=>{if(!_){var n=1/0;for(b=0;b<e.length;b++){for(var[_,t,a]=e[b],i=!0,c=0;c<_.length;c++)(!1&a||n>=a)&&Object.keys(__webpack_require__.O).every(e=>__webpack_require__.O[e](_[c]))?_.splice(c--,1):(i=!1,a<n&&(n=a));if(i){e.splice(b--,1);var o=t();void 0!==o&&(r=o)}}return r}a=a||0;for(var b=e.length;b>0&&e[b-1][2]>a;b--)e[b]=e[b-1];e[b]=[_,t,a]},_=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,__webpack_require__.t=function(e,t){if(1&t&&(e=this(e)),8&t)return e;if("object"==typeof e&&e){if(4&t&&e.__esModule)return e;if(16&t&&"function"==typeof e.then)return e}var a=Object.create(null);__webpack_require__.r(a);var n={};r=r||[null,_({}),_([]),_(_)];for(var i=2&t&&e;"object"==typeof i&&!~r.indexOf(i);i=_(i))Object.getOwnPropertyNames(i).forEach(r=>n[r]=()=>e[r]);return n.default=()=>e,__webpack_require__.d(a,n),a},__webpack_require__.d=(e,r)=>{for(var _ in r)__webpack_require__.o(r,_)&&!__webpack_require__.o(e,_)&&Object.defineProperty(e,_,{enumerable:!0,get:r[_]})},__webpack_require__.f={},__webpack_require__.e=e=>Promise.all(Object.keys(__webpack_require__.f).reduce((r,_)=>(__webpack_require__.f[_](e,r),r),[])),__webpack_require__.u=e=>216===e?"lightbox.d1799e507b570f6b0496.bundle.min.js":30===e?"text-path.40daa5c51142207a70f2.bundle.min.js":131===e?"accordion.8b0db5058afeb74622f5.bundle.min.js":707===e?"alert.42cc1d522ef5c60bf874.bundle.min.js":457===e?"counter.12335f45aaa79d244f24.bundle.min.js":234===e?"progress.0ea083b809812c0e3aa1.bundle.min.js":575===e?"tabs.18344b05d8d1ea0702bc.bundle.min.js":775===e?"toggle.2a177a3ef4785d3dfbc5.bundle.min.js":180===e?"video.86d44e46e43d0807e708.bundle.min.js":177===e?"image-carousel.6167d20b95b33386757b.bundle.min.js":212===e?"text-editor.45609661e409413f1cef.bundle.min.js":211===e?"wp-audio.c9624cb6e5dc9de86abd.bundle.min.js":215===e?"nested-tabs.a2401356d329f179475e.bundle.min.js":915===e?"nested-accordion.10705241212f7b6c432b.bundle.min.js":1===e?"contact-buttons.e98d0220ce8c38404e7e.bundle.min.js":336===e?"floating-bars.740d06d17cea5cebdb61.bundle.min.js":557===e?"shared-frontend-handlers.03caa53373b56d3bab67.bundle.min.js":396===e?"shared-editor-handlers.a182e3f9ce3b8b1e4b74.bundle.min.js":768===e?"container-editor-handlers.d0dce3d8a908f0ef65fe.bundle.min.js":77===e?"section-frontend-handlers.d85ab872da118940910d.bundle.min.js":220===e?"section-editor-handlers.53ffedef32043348b99b.bundle.min.js":304===e?"nested-title-keyboard-handler.2a67d3cc630e11815acc.bundle.min.js":void 0,__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),t={},a="elementorFrontend:",__webpack_require__.l=(e,r,_,n)=>{if(t[e])t[e].push(r);else{var i,c;if(void 0!==_)for(var o=document.getElementsByTagName("script"),b=0;b<o.length;b++){var u=o[b];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==a+_){i=u;break}}i||(c=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,__webpack_require__.nc&&i.setAttribute("nonce",__webpack_require__.nc),i.setAttribute("data-webpack",a+_),i.src=e),t[e]=[r];var onScriptComplete=(r,_)=>{i.onerror=i.onload=null,clearTimeout(d);var a=t[e];if(delete t[e],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach(e=>e(_)),r)return r(_)},d=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=onScriptComplete.bind(null,i.onerror),i.onload=onScriptComplete.bind(null,i.onload),c&&document.head.appendChild(i)}},__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;__webpack_require__.g.importScripts&&(e=__webpack_require__.g.location+"");var r=__webpack_require__.g.document;if(!e&&r&&(r.currentScript&&"SCRIPT"===r.currentScript.tagName.toUpperCase()&&(e=r.currentScript.src),!e)){var _=r.getElementsByTagName("script");if(_.length)for(var t=_.length-1;t>-1&&(!e||!/^http(s?):/.test(e));)e=_[t--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/^blob:/,"").replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),__webpack_require__.p=e})(),(()=>{var e={76:0};__webpack_require__.f.j=(r,_)=>{var t=__webpack_require__.o(e,r)?e[r]:void 0;if(0!==t)if(t)_.push(t[2]);else if(76!=r){var a=new Promise((_,a)=>t=e[r]=[_,a]);_.push(t[2]=a);var n=__webpack_require__.p+__webpack_require__.u(r),i=new Error;__webpack_require__.l(n,_=>{if(__webpack_require__.o(e,r)&&(0!==(t=e[r])&&(e[r]=void 0),t)){var a=_&&("load"===_.type?"missing":_.type),n=_&&_.target&&_.target.src;i.message="Loading chunk "+r+" failed.\n("+a+": "+n+")",i.name="ChunkLoadError",i.type=a,i.request=n,t[1](i)}},"chunk-"+r,r)}else e[r]=0},__webpack_require__.O.j=r=>0===e[r];var webpackJsonpCallback=(r,_)=>{var t,a,[n,i,c]=_,o=0;if(n.some(r=>0!==e[r])){for(t in i)__webpack_require__.o(i,t)&&(__webpack_require__.m[t]=i[t]);if(c)var b=c(__webpack_require__)}for(r&&r(_);o<n.length;o++)a=n[o],__webpack_require__.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return __webpack_require__.O(b)},r=self.webpackChunkelementorFrontend=self.webpackChunkelementorFrontend||[];r.forEach(webpackJsonpCallback.bind(null,0)),r.push=webpackJsonpCallback.bind(null,r.push.bind(r))})()})();
/* https://demo2.wpopal.com/spaciaz/wp-content/plugins/elementor/assets/js/frontend-modules.min.js?ver=3.33.4 */
(self.webpackChunkelementorFrontend=self.webpackChunkelementorFrontend||[]).push([[941],{1:(t,e,r)=>{"use strict";var n=r(5578),i=r(7255),s=r(5755),o=r(1866),a=r(6029),c=r(5022),l=n.Symbol,u=i("wks"),d=c?l.for||l:l&&l.withoutSetter||o;t.exports=function(t){return s(u,t)||(u[t]=a&&s(l,t)?l[t]:d("Symbol."+t)),u[t]}},41:t=>{"use strict";t.exports=function(t){return{iterator:t,next:t.next,done:!1}}},169:(t,e,r)=>{"use strict";var n=r(4762),i=r(8473),s=r(1483),o=r(5755),a=r(382),c=r(2048).CONFIGURABLE,l=r(7268),u=r(4483),d=u.enforce,p=u.get,h=String,f=Object.defineProperty,g=n("".slice),m=n("".replace),v=n([].join),y=a&&!i(function(){return 8!==f(function(){},"length",{value:8}).length}),_=String(String).split("String"),b=t.exports=function(t,e,r){"Symbol("===g(h(e),0,7)&&(e="["+m(h(e),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),r&&r.getter&&(e="get "+e),r&&r.setter&&(e="set "+e),(!o(t,"name")||c&&t.name!==e)&&(a?f(t,"name",{value:e,configurable:!0}):t.name=e),y&&r&&o(r,"arity")&&t.length!==r.arity&&f(t,"length",{value:r.arity});try{r&&o(r,"constructor")&&r.constructor?a&&f(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(t){}var n=d(t);return o(n,"source")||(n.source=v(_,"string"==typeof e?e:"")),t};Function.prototype.toString=b(function toString(){return s(this)&&p(this).source||l(this)},"toString")},274:(t,e,r)=>{"use strict";var n=r(8473);t.exports=!n(function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")})},348:(t,e,r)=>{"use strict";var n=r(1807),i=r(1483),s=r(1704),o=TypeError;t.exports=function(t,e){var r,a;if("string"===e&&i(r=t.toString)&&!s(a=n(r,t)))return a;if(i(r=t.valueOf)&&!s(a=n(r,t)))return a;if("string"!==e&&i(r=t.toString)&&!s(a=n(r,t)))return a;throw new o("Can't convert object to primitive value")}},382:(t,e,r)=>{"use strict";var n=r(8473);t.exports=!n(function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]})},555:(t,e,r)=>{"use strict";var n=r(6784);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,r(4846),r(7458),r(9655);var i=function _interopRequireWildcard(t,e){if("function"==typeof WeakMap)var r=new WeakMap,n=new WeakMap;return function(t,e){if(!e&&t&&t.__esModule)return t;var i,s,o={__proto__:null,default:t};if(null===t||"object"!=typeof t&&"function"!=typeof t)return o;if(i=e?n:r){if(i.has(t))return i.get(t);i.set(t,o)}for(const e in t)"default"!==e&&{}.hasOwnProperty.call(t,e)&&((s=(i=Object.defineProperty)&&Object.getOwnPropertyDescriptor(t,e))&&(s.get||s.set)?i(o,e,s):o[e]=t[e]);return o}(t,e)}(r(3827)),s=n(r(6349));const o=".e-admin-top-bar",a=".e-admin-top-bar__bar-button",c=".e-admin-top-bar__bar-button-title";class TopBarTracking extends s.default{static init(){this.waitForTopBar()}static waitForTopBar(){const t=document.querySelector(o);if(t)return void this.attachTopBarTracking(t);const e=this.addObserver(document.body,{childList:!0,subtree:!0},()=>{const t=document.querySelector(o);t&&(this.attachTopBarTracking(t),e.disconnect(),clearTimeout(r))}),r=setTimeout(()=>{e.disconnect()},1e4)}static attachTopBarTracking(t){t.querySelectorAll(a).forEach(t=>{this.addEventListenerTracked(t,"click",t=>{this.handleTopBarClick(t)})}),this.observeTopBarChanges(t)}static observeTopBarChanges(t){this.addObserver(t,{childList:!0,subtree:!0},t=>{t.forEach(t=>{"childList"===t.type&&t.addedNodes.forEach(t=>{if(1===t.nodeType)if(t.matches&&t.matches(a))this.addEventListenerTracked(t,"click",t=>{this.handleTopBarClick(t)});else{(t.querySelectorAll?t.querySelectorAll(a):[]).forEach(t=>{this.addEventListenerTracked(t,"click",t=>{this.handleTopBarClick(t)})})}})})})}static handleTopBarClick(t){const e=t.currentTarget,r=this.extractItemId(e);i.default.trackNavClicked(r,null,i.NAV_AREAS.TOP_BAR)}static extractItemId(t){const e=t.querySelector(c);if(e&&e.textContent.trim())return e.textContent.trim();const r=t.textContent.trim();if(r)return r;const n=t.getAttribute("href");if(n){const t=new URLSearchParams(n.split("?")[1]||"").get("page");if(t)return t;if(n.includes("/wp-admin/")){const t=n.split("/wp-admin/")[1];if(t)return t.split("?")[0]}try{const t=new URL(n,window.location.origin);return t.pathname.split("/").filter(Boolean).pop()||t.hostname}catch(t){return n}}const i=t.getAttribute("data-info");if(i)return i;const s=t.className.split(" ").filter(t=>t&&"e-admin-top-bar__bar-button"!==t);return s.length>0?s.join("-"):"unknown-top-bar-button"}}e.default=TopBarTracking},641:(t,e,r)=>{"use strict";r(5724),r(4846),r(7458),r(9655);const Module=function(){const t=jQuery,e=arguments,r=this,n={};let i;this.getItems=function(t,e){if(e){const r=e.split("."),n=r.splice(0,1);if(!r.length)return t[n];if(!t[n])return;return this.getItems(t[n],r.join("."))}return t},this.getSettings=function(t){return this.getItems(i,t)},this.setSettings=function(e,n,s){if(s||(s=i),"object"==typeof e)return t.extend(s,e),r;const o=e.split("."),a=o.splice(0,1);return o.length?(s[a]||(s[a]={}),r.setSettings(o.join("."),n,s[a])):(s[a]=n,r)},this.getErrorMessage=function(t,e){let r;if("forceMethodImplementation"===t)r=`The method '${e}' must to be implemented in the inheritor child.`;else r="An error occurs";return r},this.forceMethodImplementation=function(t){throw new Error(this.getErrorMessage("forceMethodImplementation",t))},this.on=function(e,i){if("object"==typeof e)return t.each(e,function(t){r.on(t,this)}),r;return e.split(" ").forEach(function(t){n[t]||(n[t]=[]),n[t].push(i)}),r},this.off=function(t,e){if(!n[t])return r;if(!e)return delete n[t],r;const i=n[t].indexOf(e);return-1!==i&&(delete n[t][i],n[t]=n[t].filter(t=>t)),r},this.trigger=function(e){const i="on"+e[0].toUpperCase()+e.slice(1),s=Array.prototype.slice.call(arguments,1);r[i]&&r[i].apply(r,s);const o=n[e];return o?(t.each(o,function(t,e){e.apply(r,s)}),r):r},r.__construct.apply(r,e),t.each(r,function(t){const e=r[t];"function"==typeof e&&(r[t]=function(){return e.apply(r,arguments)})}),function(){i=r.getDefaultSettings();const n=e[0];n&&t.extend(!0,i,n)}(),r.trigger("init")};Module.prototype.__construct=function(){},Module.prototype.getDefaultSettings=function(){return{}},Module.prototype.getConstructorID=function(){return this.constructor.name},Module.extend=function(t){const e=jQuery,r=this,child=function(){return r.apply(this,arguments)};return e.extend(child,r),(child.prototype=Object.create(e.extend({},r.prototype,t))).constructor=child,child.__super__=r.prototype,child},t.exports=Module},670:(t,e,r)=>{"use strict";var n=r(382),i=r(5835),s=r(7738);t.exports=function(t,e,r){n?i.f(t,e,s(0,r)):t[e]=r}},751:(t,e,r)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,r(5724),r(4846),r(9655);class InstanceType{static[Symbol.hasInstance](t){let e=super[Symbol.hasInstance](t);if(t&&!t.constructor.getInstanceType)return e;if(t&&(t.instanceTypes||(t.instanceTypes=[]),e||this.getInstanceType()===t.constructor.getInstanceType()&&(e=!0),e)){const e=this.getInstanceType===InstanceType.getInstanceType?"BaseInstanceType":this.getInstanceType();-1===t.instanceTypes.indexOf(e)&&t.instanceTypes.push(e)}return!e&&t&&(e=t.instanceTypes&&Array.isArray(t.instanceTypes)&&-1!==t.instanceTypes.indexOf(this.getInstanceType())),e}static getInstanceType(){elementorModules.ForceMethodImplementation()}constructor(){let t=new.target;const e=[];for(;t.__proto__&&t.__proto__.name;)e.push(t.__proto__),t=t.__proto__;e.reverse().forEach(t=>this instanceof t)}}e.default=InstanceType},1091:t=>{"use strict";var e=TypeError;t.exports=function(t){if(t>9007199254740991)throw e("Maximum allowed index exceeded");return t}},1265:(t,e,r)=>{"use strict";var n=r(6784);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(r(641)),s=n(r(2425)),o=n(r(2946)),a=n(r(3980)),c=n(r(2970)),l=n(r(8685)),u=r(9031),d=r(1462),p=r(5454),h=n(r(3827));e.default=window.elementorModules={Module:i.default,ViewModule:s.default,ArgsObject:o.default,ForceMethodImplementation:l.default,utils:{Masonry:a.default,Scroll:c.default},importExport:{createGetInitialState:u.createGetInitialState,customizationDialogsRegistry:d.customizationDialogsRegistry},appsEventTracking:{AppsEventTracking:p.AppsEventTracking},wpDashboardTracking:{WpDashboardTracking:h.default}}},1278:(t,e,r)=>{"use strict";var n=r(4762),i=n({}.toString),s=n("".slice);t.exports=function(t){return s(i(t),8,-1)}},1409:(t,e,r)=>{"use strict";var n=r(5578),i=r(1483);t.exports=function(t,e){return arguments.length<2?(r=n[t],i(r)?r:void 0):n[t]&&n[t][e];var r}},1423:(t,e,r)=>{"use strict";var n=r(1409),i=r(1483),s=r(4815),o=r(5022),a=Object;t.exports=o?function(t){return"symbol"==typeof t}:function(t){var e=n("Symbol");return i(e)&&s(e.prototype,a(t))}},1434:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default={triggers:{click:"Click",accordionClick:"Accordion Click",toggleClick:"Toggle Click",dropdownClick:"Click Dropdown",editorLoaded:"Editor Loaded",visible:"Visible",pageLoaded:"Page Loaded"},locations:{widgetPanel:"Widget Panel",topBar:"Top Bar",elementorEditor:"Elementor Editor",templatesLibrary:{library:"Templates Library"},app:{import:"Import Kit",export:"Export Kit",kitLibrary:"Kit Library",cloudKitLibrary:"Cloud Kit Library"},variables:"Variables Panel",admin:"WP admin"},secondaryLocations:{layout:"Layout Section",basic:"Basic Section","pro-elements":"Pro Section",general:"General Section","theme-elements":"Site Section","theme-elements-single":"Single Section","woocommerce-elements":"WooCommerce Section",wordpress:"WordPress Section",categories:"Widgets Tab",global:"Globals Tab","whats-new":"What's New","document-settings":"Document Settings icon","preview-page":"Preview Page","publish-button":"Publish Button","widget-panel":"Widget Panel Icon",finder:"Finder",help:"Help",elementorLogoDropdown:"top_bar_elementor_logo_dropdown",elementorLogo:"Elementor Logo",eLogoMenu:"E-logo Menu",notes:"Notes",siteSettings:"Site Settings",structure:"Structure",documentNameDropdown:"Document Name dropdown",responsiveControls:"Responsive controls",launchpad:"launchpad",checklistHeader:"Checklist Header",checklistSteps:"Checklist Steps",userPreferences:"User Preferences",contextMenu:"Context Menu",templateLibrary:{saveModal:"Save to Modal",moveModal:"Move to Modal",bulkMoveModal:"Bulk Move to Modal",copyModal:"Copy to Modal",bulkCopyModal:"Bulk Copy to Modal",saveModalSelectFolder:"Save to Modal - select folder",saveModalSelectConnect:"Save to Modal - connect",saveModalSelectUpgrade:"Save to Modal - upgrade",importModal:"Import Modal",newFolderModal:"New Folder Modal",deleteDialog:"Delete Dialog",deleteFolderDialog:"Delete Folder Dialog",renameDialog:"Rename Dialog",createFolderDialog:"Create Folder Dialog",applySettingsDialog:"Apply Settings Dialog",cloudTab:"Cloud Tab",siteTab:"Site Tab",cloudTabFolder:"Cloud Tab - Folder",cloudTabConnect:"Cloud Tab - Connect",cloudTabUpgrade:"Cloud Tab - Upgrade",morePopup:"Context Menu",quotaBar:"Quota Bar"},kitLibrary:{cloudKitLibrary:"kits_cloud_library",cloudKitLibraryConnect:"kits_cloud_library_connect",cloudKitLibraryUpgrade:"kits_cloud_library_upgrade",kitExportCustomization:"kit_export_customization",kitExport:"kit_export",kitExportCustomizationEdit:"kit_export_customization_edit",kitExportSummary:"kit_export_summary",kitImportUploadBox:"kit_import_upload_box",kitImportCustomization:"kit_import_customization",kitImportSummary:"kit_import_summary"},variablesPopover:"Variables Popover",admin:{pluginToolsTab:"plugin_tools_tab",pluginWebsiteTemplatesTab:"plugin_website_templates_tab"}},elements:{accordionSection:"Accordion section",buttonIcon:"Button Icon",mainCta:"Main CTA",button:"Button",link:"Link",dropdown:"Dropdown",toggle:"Toggle",launchpadChecklist:"Checklist popup"},names:{v1:{layout:"v1_widgets_tab_layout_section",basic:"v1_widgets_tab_basic_section","pro-elements":"v1_widgets_tab_pro_section",general:"v1_widgets_tab_general_section","theme-elements":"v1_widgets_tab_site_section","theme-elements-single":"v1_widgets_tab_single_section","woocommerce-elements":"v1_widgets_tab_woocommerce_section",wordpress:"v1_widgets_tab_wordpress_section",categories:"v1_widgets_tab",global:"v1_globals_tab"},topBar:{whatsNew:"top_bar_whats_new",documentSettings:"top_bar_document_settings_icon",previewPage:"top_bar_preview_page",publishButton:"top_bar_publish_button",widgetPanel:"top_bar_widget_panel_icon",finder:"top_bar_finder",help:"top_bar_help",history:"top_bar_elementor_logo_dropdown_history",userPreferences:"top_bar_elementor_logo_dropdown_user_preferences",keyboardShortcuts:"top_bar_elementor_logo_dropdown_keyboard_shortcuts",exitToWordpress:"top_bar_elementor_logo_dropdown_exit_to_wordpress",themeBuilder:"top_bar_elementor_logo_dropdown_theme_builder",notes:"top_bar_notes",siteSettings:"top_bar_site_setting",structure:"top_bar_structure",documentNameDropdown:"top_bar_document_name_dropdown",responsiveControls:"top_bar_responsive_controls",launchpadOn:"top_bar_checklist_icon_show",launchpadOff:"top_bar_checklist_icon_hide",elementorLogoDropdown:"open_e_menu",connectAccount:"connect_account",accountConnected:"account_connected"},elementorEditor:{checklist:{checklistHeaderClose:"checklist_header_close_icon",checklistFirstPopup:"checklist popup triggered"},userPreferences:{checklistShow:"checklist_userpreferences_toggle_show",checklistHide:"checklist_userpreferences_toggle_hide"}},variables:{open:"open_variables_popover",add:"add_new_variable",connect:"connect_variable",save:"save_new_variable"}}}},1462:(t,e,r)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.customizationDialogsRegistry=void 0;var n=r(7958);e.customizationDialogsRegistry=new n.BaseRegistry},1483:t=>{"use strict";var e="object"==typeof document&&document.all;t.exports=void 0===e&&void 0!==e?function(t){return"function"==typeof t||t===e}:function(t){return"function"==typeof t}},1506:(t,e,r)=>{"use strict";var n=r(2914),i=r(1807),s=r(2293),o=r(8761),a=r(5299),c=r(6960),l=r(4815),u=r(4887),d=r(6665),p=r(6721),h=TypeError,Result=function(t,e){this.stopped=t,this.result=e},f=Result.prototype;t.exports=function(t,e,r){var g,m,v,y,_,b,w,S=r&&r.that,E=!(!r||!r.AS_ENTRIES),k=!(!r||!r.IS_RECORD),T=!(!r||!r.IS_ITERATOR),C=!(!r||!r.INTERRUPTED),O=n(e,S),stop=function(t){return g&&p(g,"normal"),new Result(!0,t)},callFn=function(t){return E?(s(t),C?O(t[0],t[1],stop):O(t[0],t[1])):C?O(t,stop):O(t)};if(k)g=t.iterator;else if(T)g=t;else{if(!(m=d(t)))throw new h(o(t)+" is not iterable");if(a(m)){for(v=0,y=c(t);y>v;v++)if((_=callFn(t[v]))&&l(f,_))return _;return new Result(!1)}g=u(t,m)}for(b=k?t.next:g.next;!(w=i(b,g)).done;){try{_=callFn(w.value)}catch(t){p(g,"throw",t)}if("object"==typeof _&&_&&l(f,_))return _}return new Result(!1)}},1507:t=>{"use strict";t.exports={}},1703:t=>{"use strict";var e=Math.ceil,r=Math.floor;t.exports=Math.trunc||function trunc(t){var n=+t;return(n>0?r:e)(n)}},1704:(t,e,r)=>{"use strict";var n=r(1483);t.exports=function(t){return"object"==typeof t?null!==t:n(t)}},1799:(t,e,r)=>{"use strict";var n=r(382),i=r(8473),s=r(3145);t.exports=!n&&!i(function(){return 7!==Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a})},1807:(t,e,r)=>{"use strict";var n=r(274),i=Function.prototype.call;t.exports=n?i.bind(i):function(){return i.apply(i,arguments)}},1831:(t,e,r)=>{"use strict";var n=r(9557),i=r(5578),s=r(2095),o="__core-js_shared__",a=t.exports=i[o]||s(o,{});(a.versions||(a.versions=[])).push({version:"3.43.0",mode:n?"pure":"global",copyright:"© 2014-2025 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.43.0/LICENSE",source:"https://github.com/zloirock/core-js"})},1851:(t,e,r)=>{"use strict";var n,i,s,o=r(8473),a=r(1483),c=r(1704),l=r(5290),u=r(3181),d=r(7914),p=r(1),h=r(9557),f=p("iterator"),g=!1;[].keys&&("next"in(s=[].keys())?(i=u(u(s)))!==Object.prototype&&(n=i):g=!0),!c(n)||o(function(){var t={};return n[f].call(t)!==t})?n={}:h&&(n=l(n)),a(n[f])||d(n,f,function(){return this}),t.exports={IteratorPrototype:n,BUGGY_SAFARI_ITERATORS:g}},1866:(t,e,r)=>{"use strict";var n=r(4762),i=0,s=Math.random(),o=n(1.1.toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+o(++i+s,36)}},1975:(t,e,r)=>{"use strict";var n=r(8612),i=r(1807),s=r(8120),o=r(2293),a=r(41),c=r(8660),l=r(8901),u=r(9557),d=r(6721),p=r(7486),h=r(5267),f=!u&&!p("filter",function(){}),g=!u&&!f&&h("filter",TypeError),m=u||f||g,v=c(function(){for(var t,e,r=this.iterator,n=this.predicate,s=this.next;;){if(t=o(i(s,r)),this.done=!!t.done)return;if(e=t.value,l(r,n,[e,this.counter++],!0))return e}});n({target:"Iterator",proto:!0,real:!0,forced:m},{filter:function filter(t){o(this);try{s(t)}catch(t){d(this,"throw",t)}return g?i(g,this,t):new v(a(this),{predicate:t})}})},1983:(t,e,r)=>{"use strict";var n=r(6721);t.exports=function(t,e,r){for(var i=t.length-1;i>=0;i--)if(void 0!==t[i])try{r=n(t[i].iterator,e,r)}catch(t){e="throw",r=t}if("throw"===e)throw r;return r}},2048:(t,e,r)=>{"use strict";var n=r(382),i=r(5755),s=Function.prototype,o=n&&Object.getOwnPropertyDescriptor,a=i(s,"name"),c=a&&"something"===function something(){}.name,l=a&&(!n||n&&o(s,"name").configurable);t.exports={EXISTS:a,PROPER:c,CONFIGURABLE:l}},2095:(t,e,r)=>{"use strict";var n=r(5578),i=Object.defineProperty;t.exports=function(t,e){try{i(n,t,{value:e,configurable:!0,writable:!0})}catch(r){n[t]=e}return e}},2121:(t,e,r)=>{"use strict";var n=r(4762),i=r(8473),s=r(1278),o=Object,a=n("".split);t.exports=i(function(){return!o("z").propertyIsEnumerable(0)})?function(t){return"String"===s(t)?a(t,""):o(t)}:o},2278:(t,e,r)=>{"use strict";var n=r(6742),i=r(4741).concat("length","prototype");e.f=Object.getOwnPropertyNames||function getOwnPropertyNames(t){return n(t,i)}},2293:(t,e,r)=>{"use strict";var n=r(1704),i=String,s=TypeError;t.exports=function(t){if(n(t))return t;throw new s(i(t)+" is not an object")}},2313:(t,e,r)=>{"use strict";var n=r(7914);t.exports=function(t,e,r){for(var i in e)n(t,i,e[i],r);return t}},2347:(t,e,r)=>{"use strict";var n=r(3312),i=Object;t.exports=function(t){return i(n(t))}},2355:(t,e,r)=>{"use strict";var n=r(1807),i=r(1704),s=r(1423),o=r(2564),a=r(348),c=r(1),l=TypeError,u=c("toPrimitive");t.exports=function(t,e){if(!i(t)||s(t))return t;var r,c=o(t,u);if(c){if(void 0===e&&(e="default"),r=n(c,t,e),!i(r)||s(r))return r;throw new l("Can't convert object to primitive value")}return void 0===e&&(e="number"),a(t,e)}},2425:(t,e,r)=>{"use strict";var n=r(6784);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(r(641));e.default=i.default.extend({elements:null,getDefaultElements:()=>({}),bindEvents(){},onInit(){this.initElements(),this.bindEvents()},initElements(){this.elements=this.getDefaultElements()}})},2564:(t,e,r)=>{"use strict";var n=r(8120),i=r(5983);t.exports=function(t,e){var r=t[e];return i(r)?void 0:n(r)}},2811:(t,e,r)=>{"use strict";var n=r(1409);t.exports=n("document","documentElement")},2890:(t,e,r)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,r(4846),r(6211);class _default extends elementorModules.ViewModule{getDefaultSettings(){return{selectors:{elements:".elementor-element",nestedDocumentElements:".elementor .elementor-element"},classes:{editMode:"elementor-edit-mode"}}}getDefaultElements(){const t=this.getSettings("selectors");return{$elements:this.$element.find(t.elements).not(this.$element.find(t.nestedDocumentElements))}}getDocumentSettings(t){let e;if(this.isEdit){e={};const t=elementor.settings.page.model;jQuery.each(t.getActiveControls(),r=>{e[r]=t.attributes[r]})}else e=this.$element.data("elementor-settings")||{};return this.getItems(e,t)}runElementsHandlers(){this.elements.$elements.each((t,e)=>setTimeout(()=>elementorFrontend.elementsHandler.runReadyTrigger(e)))}onInit(){this.$element=this.getSettings("$element"),super.onInit(),this.isEdit=this.$element.hasClass(this.getSettings("classes.editMode")),this.isEdit?elementor.on("document:loaded",()=>{elementor.settings.page.model.on("change",this.onSettingsChange.bind(this))}):this.runElementsHandlers()}onSettingsChange(){}}e.default=_default},2914:(t,e,r)=>{"use strict";var n=r(3786),i=r(8120),s=r(274),o=n(n.bind);t.exports=function(t,e){return i(t),void 0===e?t:s?o(t,e):function(){return t.apply(e,arguments)}}},2946:(t,e,r)=>{"use strict";var n=r(6784);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(r(751)),s=n(r(5213));class ArgsObject extends i.default{static getInstanceType(){return"ArgsObject"}constructor(t){super(),this.args=t}requireArgument(t,e=this.args){if(!Object.prototype.hasOwnProperty.call(e,t))throw Error(`${t} is required.`)}requireArgumentType(t,e,r=this.args){if(this.requireArgument(t,r),typeof r[t]!==e)throw Error(`${t} invalid type: ${e}.`)}requireArgumentInstance(t,e,r=this.args){if(this.requireArgument(t,r),!(r[t]instanceof e||(0,s.default)(r[t],e)))throw Error(`${t} invalid instance.`)}requireArgumentConstructor(t,e,r=this.args){if(this.requireArgument(t,r),r[t].constructor.toString()!==e.prototype.constructor.toString())throw Error(`${t} invalid constructor type.`)}}e.default=ArgsObject},2970:(t,e,r)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,r(5724);e.default=class Scroll{static scrollObserver(t){let e=0;const r={root:t.root||null,rootMargin:t.offset||"0px",threshold:((t=0)=>{const e=[];if(t>0&&t<=100){const r=100/t;for(let t=0;t<=100;t+=r)e.push(t/100)}else e.push(0);return e})(t.sensitivity)};return new IntersectionObserver(function handleIntersect(r){const n=r[0].boundingClientRect.y,i=r[0].isIntersecting,s=n<e?"down":"up",o=Math.abs(parseFloat((100*r[0].intersectionRatio).toFixed(2)));t.callback({sensitivity:t.sensitivity,isInViewport:i,scrollPercentage:o,intersectionScrollDirection:s}),e=n},r)}static getElementViewportPercentage(t,e={}){const r=t[0].getBoundingClientRect(),n=e.start||0,i=e.end||0,s=window.innerHeight*n/100,o=window.innerHeight*i/100,a=r.top-window.innerHeight,c=0-a+s,l=r.top+s+t.height()-a+o,u=Math.max(0,Math.min(c/l,1));return parseFloat((100*u).toFixed(2))}static getPageScrollPercentage(t={},e){const r=t.start||0,n=t.end||0,i=e||document.documentElement.scrollHeight-document.documentElement.clientHeight,s=i*r/100,o=i+s+i*n/100;return(document.documentElement.scrollTop+document.body.scrollTop+s)/o*100}}},3005:(t,e,r)=>{"use strict";var n=r(1703);t.exports=function(t){var e=+t;return e!=e||0===e?0:n(e)}},3025:(t,e,r)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.DashboardUtils=void 0,r(4846),r(5568);e.DashboardUtils={isElementorPage(){const t=new URLSearchParams(window.location.search),e=t.get("page");if(e&&(e.startsWith("elementor")||e.includes("elementor")))return!0;const r=t.get("post_type");if("elementor_library"===r||"e-floating-buttons"===r)return!0;return document.body.className.split(" ").some(t=>t.includes("elementor")&&(t.includes("page")||t.includes("post-type")))}}},3145:(t,e,r)=>{"use strict";var n=r(5578),i=r(1704),s=n.document,o=i(s)&&i(s.createElement);t.exports=function(t){return o?s.createElement(t):{}}},3181:(t,e,r)=>{"use strict";var n=r(5755),i=r(1483),s=r(2347),o=r(5409),a=r(9441),c=o("IE_PROTO"),l=Object,u=l.prototype;t.exports=a?l.getPrototypeOf:function(t){var e=s(t);if(n(e,c))return e[c];var r=e.constructor;return i(r)&&e instanceof r?r.prototype:e instanceof l?u:null}},3242:(t,e,r)=>{"use strict";var n=r(8612),i=r(1807),s=r(1506),o=r(8120),a=r(2293),c=r(41),l=r(6721),u=r(5267)("find",TypeError);n({target:"Iterator",proto:!0,real:!0,forced:u},{find:function find(t){a(this);try{o(t)}catch(t){l(this,"throw",t)}if(u)return i(u,this,t);var e=c(this),r=0;return s(e,function(e,n){if(t(e,r++))return n(e)},{IS_RECORD:!0,INTERRUPTED:!0}).result}})},3312:(t,e,r)=>{"use strict";var n=r(5983),i=TypeError;t.exports=function(t){if(n(t))throw new i("Can't call method on "+t);return t}},3392:(t,e,r)=>{"use strict";var n=r(3005),i=Math.max,s=Math.min;t.exports=function(t,e){var r=n(t);return r<0?i(r+e,0):s(r,e)}},3617:(t,e,r)=>{"use strict";var n=r(8612),i=r(5578),s=r(6021),o=r(2293),a=r(1483),c=r(3181),l=r(3864),u=r(670),d=r(8473),p=r(5755),h=r(1),f=r(1851).IteratorPrototype,g=r(382),m=r(9557),v="constructor",y="Iterator",_=h("toStringTag"),b=TypeError,w=i[y],S=m||!a(w)||w.prototype!==f||!d(function(){w({})}),E=function Iterator(){if(s(this,f),c(this)===f)throw new b("Abstract class Iterator not directly constructable")},defineIteratorPrototypeAccessor=function(t,e){g?l(f,t,{configurable:!0,get:function(){return e},set:function(e){if(o(this),this===f)throw new b("You can't redefine this property");p(this,t)?this[t]=e:u(this,t,e)}}):f[t]=e};p(f,_)||defineIteratorPrototypeAccessor(_,y),!S&&p(f,v)&&f[v]!==Object||defineIteratorPrototypeAccessor(v,E),E.prototype=f,n({global:!0,constructor:!0,forced:S},{Iterator:E})},3658:(t,e,r)=>{"use strict";var n=r(6742),i=r(4741);t.exports=Object.keys||function keys(t){return n(t,i)}},3786:(t,e,r)=>{"use strict";var n=r(1278),i=r(4762);t.exports=function(t){if("Function"===n(t))return i(t)}},3815:(t,e,r)=>{"use strict";var n=r(2355),i=r(1423);t.exports=function(t){var e=n(t,"string");return i(e)?e:e+""}},3827:(t,e,r)=>{"use strict";var n=r(6784);Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.SCREEN_TYPES=e.NAV_AREAS=e.CONTROL_TYPES=void 0,r(5724),r(4846),r(9655);var i=n(r(6336)),s=n(r(7011)),o=n(r(4077)),a=n(r(7670)),c=n(r(555)),l=n(r(8285)),u=n(r(4543));const d=18e5,p="elementor_wpdash_session",h="elementor_wpdash_pending_nav",f=(e.CONTROL_TYPES={BUTTON:"button",CHECKBOX:"checkbox",RADIO:"radio",LINK:"link",SELECT:"select",TOGGLE:"toggle",FILTER:"filter"},e.NAV_AREAS={LEFT_MENU:"left_menu",SUBMENU:"submenu",HOVER_MENU:"hover_menu",TOP_BAR:"top_bar"}),g=e.SCREEN_TYPES={TAB:"tab",POPUP:"popup",APP_SCREEN:"app_screen"};class WpDashboardTracking{static sessionStartTime=Date.now();static lastActivityTime=Date.now();static sessionEnded=!1;static navItemsVisited=new Set;static activityCheckInterval=null;static initialized=!1;static navigationListeners=[];static isNavigatingToElementor=!1;static init(){this.initialized||(this.restoreOrCreateSession(),this.isEventsManagerAvailable()&&(this.startSessionMonitoring(),this.attachActivityListeners(),this.attachNavigationListener(),this.initialized=!0))}static restoreOrCreateSession(){const t=this.getStoredSession();t?(this.sessionStartTime=t.sessionStartTime,this.navItemsVisited=new Set(t.navItemsVisited),this.lastActivityTime=Date.now(),this.sessionEnded=!1):(this.sessionStartTime=Date.now(),this.lastActivityTime=Date.now(),this.sessionEnded=!1,this.navItemsVisited=new Set),this.processPendingNavClick(),this.saveSessionToStorage()}static processPendingNavClick(){try{const t=sessionStorage.getItem(h);if(t){const{itemId:e,rootItem:r,area:n}=JSON.parse(t);this.navItemsVisited.add(e);const i={wpdash_nav_item_id:e,wpdash_nav_area:n};r&&(i.wpdash_nav_item_root=r),this.dispatchEvent("wpdash_nav_clicked",i,{send_immediately:!0}),sessionStorage.removeItem(h)}}catch(t){sessionStorage.removeItem(h)}}static getStoredSession(){try{const t=sessionStorage.getItem(p);return t?JSON.parse(t):null}catch(t){return null}}static saveSessionToStorage(){const t={sessionStartTime:this.sessionStartTime,navItemsVisited:Array.from(this.navItemsVisited)};sessionStorage.setItem(p,JSON.stringify(t))}static clearStoredSession(){sessionStorage.removeItem(p)}static isEventsManagerAvailable(){return elementorCommon?.eventsManager&&"function"==typeof elementorCommon.eventsManager.dispatchEvent}static canSendEvents(){return elementorCommon?.config?.editor_events?.can_send_events||!1}static dispatchEvent(t,e={},r={}){this.isEventsManagerAvailable()&&this.canSendEvents()&&elementorCommon.eventsManager.dispatchEvent(t,e,r)}static updateActivity(){this.lastActivityTime=Date.now()}static startSessionMonitoring(){this.activityCheckInterval=setInterval(()=>{this.checkSessionTimeout()},6e4),window.addEventListener("beforeunload",()=>{this.sessionEnded||this.isNavigatingToElementor||this.trackSessionEnd("tab_closed")}),document.addEventListener("visibilitychange",()=>{if(!this.sessionEnded&&document.hidden){Date.now()-this.lastActivityTime>d&&this.trackSessionEnd("tab_inactive")}})}static isElementorPage(t){try{const e=new URL(t,window.location.origin).searchParams,r=e.get("page"),n=e.get("post_type"),i=e.get("action"),s=["elementor_library","e-floating-buttons"];return r&&["elementor","go_knowledge_base_site","e-form-submissions"].some(t=>r.includes(t))||n&&s.includes(n)||i&&i.includes("elementor")}catch(t){return!1}}static isPluginsPage(t){try{return new URL(t,window.location.origin).pathname.includes("plugins.php")}catch(t){return!1}}static isNavigatingAwayFromElementor(t){return!!t&&(!t.startsWith("#")&&!this.isElementorPage(t))}static isLinkOpeningInNewTab(t){const e=t.getAttribute("target");return"_blank"===e||"_new"===e}static attachNavigationListener(){const handleLinkClick=t=>{const e=t.target.closest("a");if(e&&e.href){if(this.isLinkOpeningInNewTab(e))return;!this.sessionEnded&&this.isNavigatingAwayFromElementor(e.href)?this.trackSessionEnd("navigate_away"):this.isElementorPage(e.href)&&(this.isNavigatingToElementor=!0)}},handleFormSubmit=t=>{const e=t.target;e.action&&(!this.sessionEnded&&this.isNavigatingAwayFromElementor(e.action)?this.trackSessionEnd("navigate_away"):this.isElementorPage(e.action)&&(this.isNavigatingToElementor=!0))};document.addEventListener("click",handleLinkClick,!0),document.addEventListener("submit",handleFormSubmit,!0),this.navigationListeners.push({type:"click",handler:handleLinkClick},{type:"submit",handler:handleFormSubmit})}static checkSessionTimeout(){Date.now()-this.lastActivityTime>d&&!this.sessionEnded&&this.trackSessionEnd("timeout")}static attachActivityListeners(){["mousedown","keydown","scroll","touchstart","click"].forEach(t=>{document.addEventListener(t,()=>{this.updateActivity()},{capture:!0,passive:!0})})}static formatDuration(t){const e=Math.floor(t/1e3);return Number(e.toFixed(2))}static trackNavClicked(t,e=null,r=f.LEFT_MENU){if(!this.initialized){const n={itemId:t,rootItem:e,area:r};return void sessionStorage.setItem(h,JSON.stringify(n))}this.updateActivity(),this.navItemsVisited.add(t),this.saveSessionToStorage();const n={wpdash_nav_item_id:t,wpdash_nav_area:r};e&&(n.wpdash_nav_item_root=e),this.dispatchEvent("wpdash_nav_clicked",n)}static trackScreenViewed(t,e=g.TAB){this.updateActivity();const r={wpdash_screen_id:t,wpdash_screen_type:e};this.dispatchEvent("wpdash_screen_viewed",r)}static trackActionControl(t,e){this.updateActivity();const r={wpdash_action_control_interacted:t,wpdash_control_type:e};this.dispatchEvent("wpdash_action_control",r)}static trackPromoClicked(t,e,r){this.updateActivity();const n={wpdash_promo_name:t,wpdash_promo_destination:e,wpdash_promo_clicked_path:r};this.dispatchEvent("wpdash_promo_clicked",n)}static trackSessionEnd(t="timeout"){if(this.sessionEnded)return;this.sessionEnded=!0,this.activityCheckInterval&&(clearInterval(this.activityCheckInterval),this.activityCheckInterval=null);const e=Date.now()-this.sessionStartTime,r={wpdash_endstate_nav_summary:Array.from(this.navItemsVisited),wpdash_endstate_nav_count:this.navItemsVisited.size,wpdash_endstate_duration:this.formatDuration(e),reason:t};this.dispatchEvent("wpdash_session_end_state",r),this.clearStoredSession()}static destroy(){this.activityCheckInterval&&clearInterval(this.activityCheckInterval),this.navigationListeners.forEach(({type:t,handler:e})=>{document.removeEventListener(t,e,!0)}),this.navigationListeners=[],c.default.destroy(),a.default.destroy(),o.default.destroy(),l.default.destroy(),u.default.destroy(),this.initialized=!1}}e.default=WpDashboardTracking,window.addEventListener("elementor/admin/init",()=>{const t=window.location.href,e=WpDashboardTracking.isPluginsPage(t),r=WpDashboardTracking.isElementorPage(t);e&&s.default.init(),i.default.init(),r&&(WpDashboardTracking.init(),c.default.init(),a.default.init(),o.default.init(),l.default.init(),u.default.init())}),window.addEventListener("beforeunload",()=>{i.default.destroy(),s.default.destroy(),WpDashboardTracking.destroy()})},3864:(t,e,r)=>{"use strict";var n=r(169),i=r(5835);t.exports=function(t,e,r){return r.get&&n(r.get,e,{getter:!0}),r.set&&n(r.set,e,{setter:!0}),i.f(t,e,r)}},3896:(t,e,r)=>{"use strict";var n=r(382),i=r(8473);t.exports=n&&i(function(){return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype})},3980:(t,e,r)=>{"use strict";var n=r(6784);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,r(5724);var i=n(r(2425));e.default=i.default.extend({getDefaultSettings:()=>({container:null,items:null,columnsCount:3,verticalSpaceBetween:30}),getDefaultElements(){return{$container:jQuery(this.getSettings("container")),$items:jQuery(this.getSettings("items"))}},run(){var t=[],e=this.elements.$container.position().top,r=this.getSettings(),n=r.columnsCount;e+=parseInt(this.elements.$container.css("margin-top"),10),this.elements.$items.each(function(i){var s=Math.floor(i/n),o=jQuery(this),a=o[0].getBoundingClientRect().height+r.verticalSpaceBetween;if(s){var c=o.position(),l=i%n,u=c.top-e-t[l];u-=parseInt(o.css("margin-top"),10),u*=-1,o.css("margin-top",u+"px"),t[l]+=a}else t.push(a)})}})},3991:(t,e,r)=>{"use strict";var n=r(8612),i=r(1807),s=r(8120),o=r(2293),a=r(41),c=r(8660),l=r(8901),u=r(6721),d=r(7486),p=r(5267),h=r(9557),f=!h&&!d("map",function(){}),g=!h&&!f&&p("map",TypeError),m=h||f||g,v=c(function(){var t=this.iterator,e=o(i(this.next,t));if(!(this.done=!!e.done))return l(t,this.mapper,[e.value,this.counter++],!0)});n({target:"Iterator",proto:!0,real:!0,forced:m},{map:function map(t){o(this);try{s(t)}catch(t){u(this,"throw",t)}return g?i(g,this,t):new v(a(this),{mapper:t})}})},4077:(t,e,r)=>{"use strict";var n=r(6784);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(r(3827)),s=n(r(6349));const o=".e-feature-promotion, .elementor-settings-form-page, #elementor-element-manager-wrap",a=".elementor-blank_state",c=".go-pro",l="h3";class PromotionTracking extends s.default{static init(){this.attachDelegatedTracking()}static attachDelegatedTracking(){this.addEventListenerTracked(document,"click",t=>{const e=t.target;if(!e)return;const r=e.closest(`a${c}`);if(!r)return;const n=r.closest(`${o}, ${a}`);n&&this.handlePromoClick(r,n)},{capture:!0})}static handlePromoClick(t,e){const r=this.extractPromoTitle(e,t),n=t.getAttribute("href"),s=this.extractPromoPath();i.default.trackPromoClicked(r,n,s)}static extractPromoTitle(t,e){const r=t.querySelector(l);return r?r.textContent.trim():e.textContent.trim()}static extractPromoPath(){const t=new URLSearchParams(window.location.search).get("page");return t?t.replace("elementor_","").replace(/_/g,"/"):"elementor"}}e.default=PromotionTracking},4338:(t,e,r)=>{"use strict";var n={};n[r(1)("toStringTag")]="z",t.exports="[object z]"===String(n)},4347:(t,e)=>{"use strict";e.f=Object.getOwnPropertySymbols},4364:(t,e,r)=>{"use strict";r(3991)},4483:(t,e,r)=>{"use strict";var n,i,s,o=r(4644),a=r(5578),c=r(1704),l=r(9037),u=r(5755),d=r(1831),p=r(5409),h=r(1507),f="Object already initialized",g=a.TypeError,m=a.WeakMap;if(o||d.state){var v=d.state||(d.state=new m);v.get=v.get,v.has=v.has,v.set=v.set,n=function(t,e){if(v.has(t))throw new g(f);return e.facade=t,v.set(t,e),e},i=function(t){return v.get(t)||{}},s=function(t){return v.has(t)}}else{var y=p("state");h[y]=!0,n=function(t,e){if(u(t,y))throw new g(f);return e.facade=t,l(t,y,e),e},i=function(t){return u(t,y)?t[y]:{}},s=function(t){return u(t,y)}}t.exports={set:n,get:i,has:s,enforce:function(t){return s(t)?i(t):n(t,{})},getterFor:function(t){return function(e){var r;if(!c(e)||(r=i(e)).type!==t)throw new g("Incompatible receiver, "+t+" required");return r}}}},4543:(t,e,r)=>{"use strict";var n=r(6784);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,r(4846),r(9655);var i=function _interopRequireWildcard(t,e){if("function"==typeof WeakMap)var r=new WeakMap,n=new WeakMap;return function(t,e){if(!e&&t&&t.__esModule)return t;var i,s,o={__proto__:null,default:t};if(null===t||"object"!=typeof t&&"function"!=typeof t)return o;if(i=e?n:r){if(i.has(t))return i.get(t);i.set(t,o)}for(const e in t)"default"!==e&&{}.hasOwnProperty.call(t,e)&&((s=(i=Object.defineProperty)&&Object.getOwnPropertyDescriptor(t,e))&&(s.get||s.set)?i(o,e,s):o[e]=t[e]);return o}(t,e)}(r(3827)),s=r(3025),o=n(r(6349));const a={ADMIN_MENU:"#adminmenu",TOP_BAR:".e-admin-top-bar",WP_ADMIN_BAR:"#wpadminbar",SUBMENU:".wp-submenu",PROMO_PAGE:".e-feature-promotion",PROMO_BLANK_STATE:".elementor-blank_state",APP:".e-app"};class ActionControlTracking extends o.default{static init(){s.DashboardUtils.isElementorPage()&&(this.attachDelegatedHandlers(),this.addTrackingAttributesToFilterButtons(),this.initializeLinkDataIds())}static initializeLinkDataIds(){const initializeLinks=()=>{document.querySelectorAll("a[href]").forEach(t=>{if(this.isExcludedElement(t)||this.isNavigationLink(t)||t.hasAttribute("data-id"))return;const e=t.getAttribute("href");if(!e)return;const r=this.removeNonceFromUrl(e);r&&t.setAttribute("data-id",r)})};"loading"===document.readyState?document.addEventListener("DOMContentLoaded",initializeLinks):initializeLinks()}static addTrackingAttributesToFilterButtons(){const t=document.body;if(!t)return;let e="";switch(!0){case t.classList.contains("post-type-elementor_library"):e="elementor_library-library";break;case t.classList.contains("post-type-e-floating-buttons"):e="e-floating-buttons";break;default:return}const addDataIdToListTableButtons=()=>{[{id:"post-query-submit",suffix:"filter"},{id:"search-submit",suffix:"search"},{id:"doaction",suffix:"apply"},{id:"doaction2",suffix:"apply-bottom"}].forEach(t=>{const r=document.getElementById(t.id);r&&!r.hasAttribute("data-id")&&r.setAttribute("data-id",`${e}-button-${t.suffix}`)})};"loading"===document.readyState?document.addEventListener("DOMContentLoaded",addDataIdToListTableButtons):addDataIdToListTableButtons()}static isExcludedElement(t){for(const e of Object.values(a))if(t.closest(e))return!0;return!!t.classList.contains("go-pro")}static attachDelegatedHandlers(){const t=["search-submit","post-query-submit"];this.addEventListenerTracked(document,"click",e=>{const r=e.target&&1===e.target.nodeType?e.target:e.target?.parentElement;if(!r)return;const n=r.closest('button, input[type="submit"], input[type="button"], .button, .e-btn');if(n&&!this.isExcludedElement(n))return t.includes(n.id)?void this.trackControl(n,i.CONTROL_TYPES.FILTER):void this.trackControl(n,i.CONTROL_TYPES.BUTTON);const s=r.closest("a");!s||this.isExcludedElement(s)||this.isNavigationLink(s)||this.trackControl(s,i.CONTROL_TYPES.LINK)},{capture:!1}),this.addEventListenerTracked(document,"change",t=>{const e=t.target&&1===t.target.nodeType?t.target:t.target?.parentElement;if(!e)return;const r=e.closest(".components-toggle-control");if(r&&!this.isExcludedElement(r))return void this.trackControl(r,i.CONTROL_TYPES.TOGGLE);const n=e.closest('input[type="checkbox"]');if(n&&!this.isExcludedElement(n))return void this.trackControl(n,i.CONTROL_TYPES.CHECKBOX);const s=e.closest('input[type="radio"]');if(s&&!this.isExcludedElement(s))return void this.trackControl(s,i.CONTROL_TYPES.RADIO);const o=e.closest("select");o&&!this.isExcludedElement(o)&&this.trackControl(o,i.CONTROL_TYPES.SELECT)})}static isNavigationLink(t){const e=t.getAttribute("href");if(!e)return!1;if(e.startsWith("#")&&e.includes("tab"))return!0;if(t.classList.contains("nav-tab"))return!0;return!!t.closest(".wp-submenu, #adminmenu, .e-admin-top-bar, #wpadminbar")}static trackControl(t,e){const r=this.extractControlIdentifier(t,e);r&&i.default.trackActionControl(r,e)}static extractControlIdentifier(t,e){if(i.CONTROL_TYPES.RADIO===e){const e=t.getAttribute("name"),r=t.value||t.getAttribute("value");if(e&&r)return`${e}-${r}`;if(e)return e}if(i.CONTROL_TYPES.SELECT===e){const e=t.getAttribute("name");if(e)return e}if(i.CONTROL_TYPES.CHECKBOX===e){const e=t.getAttribute("name");if(e){if(document.querySelectorAll(`input[type="checkbox"][name="${CSS.escape(e)}"]`).length>1){const r=t.value||t.getAttribute("value");if(r)return`${e}-${r}`}return e}}if(i.CONTROL_TYPES.LINK===e){const e=t.getAttribute("data-id");if(e)return e;const r=t.getAttribute("href");if(r)return this.removeNonceFromUrl(r)}if(i.CONTROL_TYPES.BUTTON===e||i.CONTROL_TYPES.TOGGLE===e||i.CONTROL_TYPES.FILTER===e){const e=t.getAttribute("data-id");if(e)return e;const r=this.extractClassId(t);if(r)return r}return""}static extractClassId(t){const e=t.className;if(!e||"string"!=typeof e)return"";const r=e.split(" ");for(const t of r)if(t.startsWith("e-id-"))return t.substring(5);return""}static removeNonceFromUrl(t){try{const e=new URL(t,window.location.origin);e.searchParams.delete("_wpnonce");const r=e.searchParams.get("post");return null!==r&&/^[0-9]+$/.test(r)&&e.searchParams.delete("post"),e.pathname+e.search+e.hash}catch(e){return t}}}e.default=ActionControlTracking},4644:(t,e,r)=>{"use strict";var n=r(5578),i=r(1483),s=n.WeakMap;t.exports=i(s)&&/native code/.test(String(s))},4741:t=>{"use strict";t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},4762:(t,e,r)=>{"use strict";var n=r(274),i=Function.prototype,s=i.call,o=n&&i.bind.bind(s,s);t.exports=n?o:function(t){return function(){return s.apply(t,arguments)}}},4815:(t,e,r)=>{"use strict";var n=r(4762);t.exports=n({}.isPrototypeOf)},4846:(t,e,r)=>{"use strict";r(3617)},4887:(t,e,r)=>{"use strict";var n=r(1807),i=r(8120),s=r(2293),o=r(8761),a=r(6665),c=TypeError;t.exports=function(t,e){var r=arguments.length<2?a(t):e;if(i(r))return s(n(r,t));throw new c(o(t)+" is not iterable")}},4914:(t,e,r)=>{"use strict";var n=r(1278);t.exports=Array.isArray||function isArray(t){return"Array"===n(t)}},4946:(t,e,r)=>{"use strict";var n=r(6784),i=n(r(1265)),s=n(r(2890)),o=n(r(7955)),a=n(r(8140)),c=n(r(7224)),l=n(r(5633)),u=n(r(9603));i.default.frontend={Document:s.default,tools:{StretchElement:o.default},handlers:{Base:c.default,StretchedElement:a.default,SwiperBase:l.default,CarouselBase:u.default}}},4961:(t,e,r)=>{"use strict";var n=r(382),i=r(1807),s=r(7611),o=r(7738),a=r(5599),c=r(3815),l=r(5755),u=r(1799),d=Object.getOwnPropertyDescriptor;e.f=n?d:function getOwnPropertyDescriptor(t,e){if(t=a(t),e=c(e),u)try{return d(t,e)}catch(t){}if(l(t,e))return o(!i(s.f,t,e),t[e])}},5022:(t,e,r)=>{"use strict";var n=r(6029);t.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},5213:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default=(t,e)=>{e=Array.isArray(e)?e:[e];for(const r of e)if(t.constructor.name===r.prototype[Symbol.toStringTag])return!0;return!1}},5247:t=>{"use strict";t.exports=function(t,e){return{value:t,done:e}}},5267:(t,e,r)=>{"use strict";var n=r(5578);t.exports=function(t,e){var r=n.Iterator,i=r&&r.prototype,s=i&&i[t],o=!1;if(s)try{s.call({next:function(){return{done:!0}},return:function(){o=!0}},-1)}catch(t){t instanceof e||(o=!1)}if(!o)return s}},5290:(t,e,r)=>{"use strict";var n,i=r(2293),s=r(5799),o=r(4741),a=r(1507),c=r(2811),l=r(3145),u=r(5409),d="prototype",p="script",h=u("IE_PROTO"),EmptyConstructor=function(){},scriptTag=function(t){return"<"+p+">"+t+"</"+p+">"},NullProtoObjectViaActiveX=function(t){t.write(scriptTag("")),t.close();var e=t.parentWindow.Object;return t=null,e},NullProtoObject=function(){try{n=new ActiveXObject("htmlfile")}catch(t){}var t,e,r;NullProtoObject="undefined"!=typeof document?document.domain&&n?NullProtoObjectViaActiveX(n):(e=l("iframe"),r="java"+p+":",e.style.display="none",c.appendChild(e),e.src=String(r),(t=e.contentWindow.document).open(),t.write(scriptTag("document.F=Object")),t.close(),t.F):NullProtoObjectViaActiveX(n);for(var i=o.length;i--;)delete NullProtoObject[d][o[i]];return NullProtoObject()};a[h]=!0,t.exports=Object.create||function create(t,e){var r;return null!==t?(EmptyConstructor[d]=i(t),r=new EmptyConstructor,EmptyConstructor[d]=null,r[h]=t):r=NullProtoObject(),void 0===e?r:s.f(r,e)}},5299:(t,e,r)=>{"use strict";var n=r(1),i=r(6775),s=n("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(i.Array===t||o[s]===t)}},5409:(t,e,r)=>{"use strict";var n=r(7255),i=r(1866),s=n("keys");t.exports=function(t){return s[t]||(s[t]=i(t))}},5454:(t,e,r)=>{"use strict";var n=r(6784);Object.defineProperty(e,"__esModule",{value:!0}),e.appsEventTrackingDispatch=e.AppsEventTracking=void 0;var i=n(r(1434));const s="page_views_website_templates",o="kits_cloud_upgrade_clicked",a="export_kit_customization",c="import_kit_customization",l="kit_import_status",u="kit_cloud_library_apply",d="kit_cloud_library_delete",p="ie_admin_action",h="kit_import_upload_file";e.appsEventTrackingDispatch=(t,e)=>{const objectCreator=(t,r)=>{for(const n of t)e.hasOwnProperty(n)&&null!==e[n]&&(r[n]=e[n]);return r},r=[],n=["layout","site_part","error","document_name","document_type","view_type_clicked","tag","sort_direction","sort_type","action","grid_location","kit_name","page_source","element_position","element","event_type","modal_type","method","status","step","item","category","element_location","search_term","section","site_area"],i={},s={};(()=>{objectCreator(n,s),objectCreator(r,i);const e=t.split("/");i.placement=e[0],i.event=e[1],Object.keys(s).length&&(i.details=s)})(),$e.run(t,i)};e.AppsEventTracking=class AppsEventTracking{static dispatchEvent(t,e){return elementorCommon.eventsManager.dispatchEvent(t,e)}static sendPageViewsWebsiteTemplates(t){return this.dispatchEvent(s,{trigger:i.default.triggers.pageLoaded,page_loaded:t,secondary_location:t})}static sendKitsCloudUpgradeClicked(t){return this.dispatchEvent(o,{trigger:i.default.triggers.click,secondary_location:t,upgrade_location:t})}static sendExportKitCustomization(t){return this.dispatchEvent(a,{trigger:i.default.triggers.click,...t})}static sendImportKitCustomization(t){return this.dispatchEvent(c,{trigger:i.default.triggers.click,...t})}static sendKitImportStatus(t=null){const e=!!t;return this.dispatchEvent(l,{kit_import_status:!e,...e&&{kit_import_error:t.message}})}static sendKitCloudLibraryApply(t,e){return this.dispatchEvent(u,{trigger:i.default.triggers.click,kit_cloud_id:t,...e&&{kit_apply_url:e}})}static sendKitCloudLibraryDelete(){return this.dispatchEvent(d,{trigger:i.default.triggers.click})}static sendImportExportAdminAction(t){return this.dispatchEvent(p,{trigger:i.default.triggers.click,action_type:t})}static sendKitImportUploadFile(t){return this.dispatchEvent(h,{kit_import_upload_file_status:t})}}},5568:(t,e,r)=>{"use strict";r(9217)},5578:function(t,e,r){"use strict";var check=function(t){return t&&t.Math===Math&&t};t.exports=check("object"==typeof globalThis&&globalThis)||check("object"==typeof window&&window)||check("object"==typeof self&&self)||check("object"==typeof r.g&&r.g)||check("object"==typeof this&&this)||function(){return this}()||Function("return this")()},5599:(t,e,r)=>{"use strict";var n=r(2121),i=r(3312);t.exports=function(t){return n(i(t))}},5633:(t,e,r)=>{"use strict";var n=r(6784);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(r(7224));class SwiperHandlerBase extends i.default{getInitialSlide(){const t=this.getEditSettings();return t.activeItemIndex?t.activeItemIndex-1:0}getSlidesCount(){return this.elements.$slides.length}togglePauseOnHover(t){t?this.elements.$swiperContainer.on({mouseenter:()=>{this.swiper.autoplay.stop()},mouseleave:()=>{this.swiper.autoplay.start()}}):this.elements.$swiperContainer.off("mouseenter mouseleave")}handleKenBurns(){const t=this.getSettings();this.$activeImageBg&&this.$activeImageBg.removeClass(t.classes.kenBurnsActive),this.activeItemIndex=this.swiper?this.swiper.activeIndex:this.getInitialSlide(),this.swiper?this.$activeImageBg=jQuery(this.swiper.slides[this.activeItemIndex]).children("."+t.classes.slideBackground):this.$activeImageBg=jQuery(this.elements.$slides[0]).children("."+t.classes.slideBackground),this.$activeImageBg.addClass(t.classes.kenBurnsActive)}}e.default=SwiperHandlerBase},5724:(t,e,r)=>{"use strict";var n=r(8612),i=r(2347),s=r(6960),o=r(9273),a=r(1091);n({target:"Array",proto:!0,arity:1,forced:r(8473)(function(){return 4294967297!==[].push.call({length:4294967296},1)})||!function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(t){return t instanceof TypeError}}()},{push:function push(t){var e=i(this),r=s(e),n=arguments.length;a(r+n);for(var c=0;c<n;c++)e[r]=arguments[c],r++;return o(e,r),r}})},5755:(t,e,r)=>{"use strict";var n=r(4762),i=r(2347),s=n({}.hasOwnProperty);t.exports=Object.hasOwn||function hasOwn(t,e){return s(i(t),e)}},5799:(t,e,r)=>{"use strict";var n=r(382),i=r(3896),s=r(5835),o=r(2293),a=r(5599),c=r(3658);e.f=n&&!i?Object.defineProperties:function defineProperties(t,e){o(t);for(var r,n=a(e),i=c(e),l=i.length,u=0;l>u;)s.f(t,r=i[u++],n[r]);return t}},5835:(t,e,r)=>{"use strict";var n=r(382),i=r(1799),s=r(3896),o=r(2293),a=r(3815),c=TypeError,l=Object.defineProperty,u=Object.getOwnPropertyDescriptor,d="enumerable",p="configurable",h="writable";e.f=n?s?function defineProperty(t,e,r){if(o(t),e=a(e),o(r),"function"==typeof t&&"prototype"===e&&"value"in r&&h in r&&!r[h]){var n=u(t,e);n&&n[h]&&(t[e]=r.value,r={configurable:p in r?r[p]:n[p],enumerable:d in r?r[d]:n[d],writable:!1})}return l(t,e,r)}:l:function defineProperty(t,e,r){if(o(t),e=a(e),o(r),i)try{return l(t,e,r)}catch(t){}if("get"in r||"set"in r)throw new c("Accessors not supported");return"value"in r&&(t[e]=r.value),t}},5983:t=>{"use strict";t.exports=function(t){return null==t}},6021:(t,e,r)=>{"use strict";var n=r(4815),i=TypeError;t.exports=function(t,e){if(n(e,t))return t;throw new i("Incorrect invocation")}},6029:(t,e,r)=>{"use strict";var n=r(6477),i=r(8473),s=r(5578).String;t.exports=!!Object.getOwnPropertySymbols&&!i(function(){var t=Symbol("symbol detection");return!s(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&n&&n<41})},6145:(t,e,r)=>{"use strict";var n=r(4338),i=r(1483),s=r(1278),o=r(1)("toStringTag"),a=Object,c="Arguments"===s(function(){return arguments}());t.exports=n?s:function(t){var e,r,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,e){try{return t[e]}catch(t){}}(e=a(t),o))?r:c?s(e):"Object"===(n=s(e))&&i(e.callee)?"Arguments":n}},6211:(t,e,r)=>{"use strict";r(3242)},6336:(t,e,r)=>{"use strict";var n=r(6784);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=function _interopRequireWildcard(t,e){if("function"==typeof WeakMap)var r=new WeakMap,n=new WeakMap;return function(t,e){if(!e&&t&&t.__esModule)return t;var i,s,o={__proto__:null,default:t};if(null===t||"object"!=typeof t&&"function"!=typeof t)return o;if(i=e?n:r){if(i.has(t))return i.get(t);i.set(t,o)}for(const e in t)"default"!==e&&{}.hasOwnProperty.call(t,e)&&((s=(i=Object.defineProperty)&&Object.getOwnPropertyDescriptor(t,e))&&(s.get||s.set)?i(o,e,s):o[e]=t[e]);return o}(t,e)}(r(3827)),s=n(r(6349));const o="li#toplevel_page_elementor",a="li#menu-posts-elementor_library",c=".wp-submenu",l=".wp-has-submenu";class NavigationTracking extends s.default{static init(){this.attachElementorMenuTracking(),this.attachTemplatesMenuTracking()}static attachElementorMenuTracking(){const t=document.querySelector(o);t&&this.attachMenuTracking(t,"Elementor")}static attachTemplatesMenuTracking(){const t=document.querySelector(a);t&&this.attachMenuTracking(t,"Templates")}static attachMenuTracking(t,e){this.addEventListenerTracked(t,"click",t=>{this.handleMenuClick(t,e)})}static handleMenuClick(t,e){const r=t.target.closest("a");if(!r)return;const n=r.classList.contains("menu-top"),s=this.extractItemId(r),o=this.determineNavArea(r);i.default.trackNavClicked(s,n?null:e,o)}static extractItemId(t){const e=t.textContent.trim();if(e)return e;const r=t.getAttribute("href");if(r){const t=new URLSearchParams(r.split("?")[1]||""),e=t.get("page"),n=t.get("post_type");if(e)return e;if(n)return n}const n=t.getAttribute("id");return n||"unknown"}static determineNavArea(t){if(t.closest("li.menu-top")){if(t.closest(c)){return t.closest(l).classList.contains("wp-not-current-submenu")?i.NAV_AREAS.HOVER_MENU:i.NAV_AREAS.SUBMENU}return i.NAV_AREAS.LEFT_MENU}return i.NAV_AREAS.LEFT_MENU}}e.default=NavigationTracking},6349:(t,e,r)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,r(5724),r(4846),r(9655);e.default=class BaseTracking{static ensureOwnArrays(){Object.prototype.hasOwnProperty.call(this,"observers")||(this.observers=[]),Object.prototype.hasOwnProperty.call(this,"eventListeners")||(this.eventListeners=[])}static destroy(){this.ensureOwnArrays(),this.observers.forEach(t=>t.disconnect()),this.observers=[],this.eventListeners.forEach(({target:t,type:e,handler:r,options:n})=>{t.removeEventListener(e,r,n)}),this.eventListeners=[]}static addObserver(t,e,r){this.ensureOwnArrays();const n=new MutationObserver(r);return n.observe(t,e),this.observers.push(n),n}static addEventListenerTracked(t,e,r,n={}){this.ensureOwnArrays(),t.addEventListener(e,r,n),this.eventListeners.push({target:t,type:e,handler:r,options:n})}}},6477:(t,e,r)=>{"use strict";var n,i,s=r(5578),o=r(9461),a=s.process,c=s.Deno,l=a&&a.versions||c&&c.version,u=l&&l.v8;u&&(i=(n=u.split("."))[0]>0&&n[0]<4?1:+(n[0]+n[1])),!i&&o&&(!(n=o.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=o.match(/Chrome\/(\d+)/))&&(i=+n[1]),t.exports=i},6651:(t,e,r)=>{"use strict";var n=r(5599),i=r(3392),s=r(6960),createMethod=function(t){return function(e,r,o){var a=n(e),c=s(a);if(0===c)return!t&&-1;var l,u=i(o,c);if(t&&r!=r){for(;c>u;)if((l=a[u++])!=l)return!0}else for(;c>u;u++)if((t||u in a)&&a[u]===r)return t||u||0;return!t&&-1}};t.exports={includes:createMethod(!0),indexOf:createMethod(!1)}},6665:(t,e,r)=>{"use strict";var n=r(6145),i=r(2564),s=r(5983),o=r(6775),a=r(1)("iterator");t.exports=function(t){if(!s(t))return i(t,a)||i(t,"@@iterator")||o[n(t)]}},6721:(t,e,r)=>{"use strict";var n=r(1807),i=r(2293),s=r(2564);t.exports=function(t,e,r){var o,a;i(t);try{if(!(o=s(t,"return"))){if("throw"===e)throw r;return r}o=n(o,t)}catch(t){a=!0,o=t}if("throw"===e)throw r;if(a)throw o;return i(o),r}},6726:(t,e,r)=>{"use strict";var n=r(5755),i=r(9497),s=r(4961),o=r(5835);t.exports=function(t,e,r){for(var a=i(e),c=o.f,l=s.f,u=0;u<a.length;u++){var d=a[u];n(t,d)||r&&n(r,d)||c(t,d,l(e,d))}}},6742:(t,e,r)=>{"use strict";var n=r(4762),i=r(5755),s=r(5599),o=r(6651).indexOf,a=r(1507),c=n([].push);t.exports=function(t,e){var r,n=s(t),l=0,u=[];for(r in n)!i(a,r)&&i(n,r)&&c(u,r);for(;e.length>l;)i(n,r=e[l++])&&(~o(u,r)||c(u,r));return u}},6775:t=>{"use strict";t.exports={}},6784:t=>{t.exports=function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}},t.exports.__esModule=!0,t.exports.default=t.exports},6960:(t,e,r)=>{"use strict";var n=r(8324);t.exports=function(t){return n(t.length)}},7011:(t,e,r)=>{"use strict";var n=r(6784);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(r(3827)),s=n(r(6349));const o="core",a="pro";class PluginActions extends s.default{static selectedReason=null;static init(){this.attachCoreDeactivationTracking(),this.attachProDeactivationTracking(),this.attachProDeletionTracking()}static attachCoreDeactivationTracking(){const t=document.querySelector("#elementor-deactivate-feedback-dialog-form");t&&(this.addEventListenerTracked(t,"change",t=>{const e=t.target;e.classList.contains("elementor-deactivate-feedback-dialog-input")&&(this.selectedReason=e.value)}),this.observeModalButtons())}static attachProDeactivationTracking(){const t=document.querySelector(".plugins");t&&this.addEventListenerTracked(t,"click",t=>{const e=t.target.closest("a");e&&"deactivate-elementor-pro"===e.id&&this.trackProDeactivation()},{capture:!0})}static observeModalButtons(){const checkAndAttachDelegation=()=>{const t=document.querySelector("#elementor-deactivate-feedback-modal");return!!t&&(this.addEventListenerTracked(t,"click",t=>{const e=t.target.closest(".dialog-submit"),r=t.target.closest(".dialog-skip");e?this.trackCoreDeactivation("submit&deactivate"):r&&this.trackCoreDeactivation("skip&deactivate")},{capture:!0}),!0)};checkAndAttachDelegation()||this.addObserver(document.body,{childList:!0,subtree:!0},(t,e)=>{checkAndAttachDelegation()&&e.disconnect()})}static getUserInput(){if(!this.selectedReason||!["found_a_better_plugin","other"].includes(this.selectedReason))return null;const t=document.querySelector(`input[name="reason_${this.selectedReason}"]`);return t&&t.value?t.value:null}static trackCoreDeactivation(t){const e={deactivate_form_submit:t,deactivate_plugin_type:o};this.selectedReason&&(e.deactivate_feedback_reason=this.selectedReason);const r=this.getUserInput();r&&(e.deactivate_feedback_reason+=`/${r}`),i.default.dispatchEvent("wpdash_deactivate_plugin",e,{send_immediately:!0})}static trackProDeactivation(){this.trackProAction("deactivate")}static attachProDeletionTracking(){"undefined"!=typeof jQuery&&jQuery(document).on("wp-plugin-deleting",(t,e)=>{"elementor-pro"===e?.slug&&this.trackProAction("delete")})}static destroy(){"undefined"!=typeof jQuery&&jQuery(document).off("wp-plugin-deleting"),s.default.destroy.call(this)}static trackProAction(t){const e={deactivate:{eventName:"wpdash_deactivate_plugin",propertyKey:"deactivate_plugin_type"},delete:{eventName:"wpdash_delete_plugin",propertyKey:"plugin_delete"}}[t];if(!e)return;const r={[e.propertyKey]:a};i.default.dispatchEvent(e.eventName,r,{send_immediately:!0})}}e.default=PluginActions},7224:(t,e,r)=>{"use strict";r(5724),r(4846),r(7458),r(6211),r(9655),t.exports=elementorModules.ViewModule.extend({$element:null,editorListeners:null,onElementChange:null,onEditSettingsChange:null,onPageSettingsChange:null,isEdit:null,__construct(t){this.isActive(t)&&(this.$element=t.$element,this.isEdit=this.$element.hasClass("elementor-element-edit-mode"),this.isEdit&&this.addEditorListeners())},isActive:()=>!0,isElementInTheCurrentDocument(){return!!elementorFrontend.isEditMode()&&elementor.documents.currentDocument.id.toString()===this.$element[0].closest(".elementor").dataset.elementorId},findElement(t){var e=this.$element;return e.find(t).filter(function(){return jQuery(this).parent().closest(".elementor-element").is(e)})},getUniqueHandlerID(t,e){return t||(t=this.getModelCID()),e||(e=this.$element),t+e.attr("data-element_type")+this.getConstructorID()},initEditorListeners(){var t=this;if(t.editorListeners=[{event:"element:destroy",to:elementor.channels.data,callback(e){e.cid===t.getModelCID()&&t.onDestroy()}}],t.onElementChange){const e=t.getWidgetType()||t.getElementType();let r="change";"global"!==e&&(r+=":"+e),t.editorListeners.push({event:r,to:elementor.channels.editor,callback(e,r){t.getUniqueHandlerID(r.model.cid,r.$el)===t.getUniqueHandlerID()&&t.onElementChange(e.model.get("name"),e,r)}})}t.onEditSettingsChange&&t.editorListeners.push({event:"change:editSettings",to:elementor.channels.editor,callback(e,r){if(r.model.cid!==t.getModelCID())return;const n=Object.keys(e.changed)[0];t.onEditSettingsChange(n,e.changed[n])}}),["page"].forEach(function(e){var r="on"+e[0].toUpperCase()+e.slice(1)+"SettingsChange";t[r]&&t.editorListeners.push({event:"change",to:elementor.settings[e].model,callback(e){t[r](e.changed)}})})},getEditorListeners(){return this.editorListeners||this.initEditorListeners(),this.editorListeners},addEditorListeners(){var t=this.getUniqueHandlerID();this.getEditorListeners().forEach(function(e){elementorFrontend.addListenerOnce(t,e.event,e.callback,e.to)})},removeEditorListeners(){var t=this.getUniqueHandlerID();this.getEditorListeners().forEach(function(e){elementorFrontend.removeListeners(t,e.event,null,e.to)})},getElementType(){return this.$element.data("element_type")},getWidgetType(){const t=this.$element.data("widget_type");if(t)return t.split(".")[0]},getID(){return this.$element.data("id")},getModelCID(){return this.$element.data("model-cid")},getElementSettings(t){let e={};const r=this.getModelCID();if(this.isEdit&&r){const t=elementorFrontend.config.elements.data[r],n=t.attributes;let i=n.widgetType||n.elType;n.isInner&&(i="inner-"+i);let s=elementorFrontend.config.elements.keys[i];s||(s=elementorFrontend.config.elements.keys[i]=[],jQuery.each(t.controls,(t,e)=>{(e.frontend_available||e.editor_available)&&s.push(t)})),jQuery.each(t.getActiveControls(),function(t){if(-1!==s.indexOf(t)){let r=n[t];r.toJSON&&(r=r.toJSON()),e[t]=r}})}else e=this.$element.data("settings")||{};return this.getItems(e,t)},getEditSettings(t){var e={};return this.isEdit&&(e=elementorFrontend.config.elements.editSettings[this.getModelCID()].attributes),this.getItems(e,t)},getCurrentDeviceSetting(t){return elementorFrontend.getCurrentDeviceSetting(this.getElementSettings(),t)},onInit(){this.isActive(this.getSettings())&&elementorModules.ViewModule.prototype.onInit.apply(this,arguments)},onDestroy(){this.isEdit&&this.removeEditorListeners(),this.unbindEvents&&this.unbindEvents()}})},7255:(t,e,r)=>{"use strict";var n=r(1831);t.exports=function(t,e){return n[t]||(n[t]=e||{})}},7268:(t,e,r)=>{"use strict";var n=r(4762),i=r(1483),s=r(1831),o=n(Function.toString);i(s.inspectSource)||(s.inspectSource=function(t){return o(t)}),t.exports=s.inspectSource},7458:(t,e,r)=>{"use strict";r(1975)},7486:t=>{"use strict";t.exports=function(t,e){var r="function"==typeof Iterator&&Iterator.prototype[t];if(r)try{r.call({next:null},e).next()}catch(t){return!0}}},7611:(t,e)=>{"use strict";var r={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,i=n&&!r.call({1:2},1);e.f=i?function propertyIsEnumerable(t){var e=n(this,t);return!!e&&e.enumerable}:r},7670:(t,e,r)=>{"use strict";var n=r(6784);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,r(4846),r(7458),r(9655);var i=function _interopRequireWildcard(t,e){if("function"==typeof WeakMap)var r=new WeakMap,n=new WeakMap;return function(t,e){if(!e&&t&&t.__esModule)return t;var i,s,o={__proto__:null,default:t};if(null===t||"object"!=typeof t&&"function"!=typeof t)return o;if(i=e?n:r){if(i.has(t))return i.get(t);i.set(t,o)}for(const e in t)"default"!==e&&{}.hasOwnProperty.call(t,e)&&((s=(i=Object.defineProperty)&&Object.getOwnPropertyDescriptor(t,e))&&(s.get||s.set)?i(o,e,s):o[e]=t[e]);return o}(t,e)}(r(3827)),s=r(3025),o=n(r(6349));const a=".nav-tab-wrapper",c=".nav-tab",l=".nav-tab-active",u=".elementor-settings-form-page",d=".elementor-settings-form-page.elementor-active",p=["#elementor-new-floating-elements-modal","#elementor-new-template-dialog-content"];class ScreenViewTracking extends o.default{static trackedScreens=new Set;static init(){s.DashboardUtils.isElementorPage()&&this.attachTabChangeTracking()}static destroy(){super.destroy(),this.trackedScreens.clear()}static getScreenData(){const t=new URLSearchParams(window.location.search),e=t.get("page"),r=t.get("post_type"),n=window.location.hash;let s="",o="";if(s=e||(r||this.getScreenIdFromBody()),this.isElementorAppPage()){const t=this.getAppScreenData(n);if(t)return t}const c=document.querySelector(a),p=document.querySelectorAll(u).length>1;if(c||p||n&&!this.isElementorAppPage())if(o=i.SCREEN_TYPES.TAB,n){s=`${s}-${n.replace(/^#(tab-)?/,"")}`}else if(c){const t=document.querySelector(l);if(t){const e=t.textContent.trim(),r=t.getAttribute("href");if(e)s=`${s}-${this.sanitizeScreenId(e)}`;else if(r&&r.includes("#")){s=`${s}-${r.split("#")[1]}`}}}else if(p){const t=document.querySelector(d);if(t){const e=t.id;e&&(s=`${s}-${e}`)}}return{screenId:s,screenType:o}}static isElementorAppPage(){return"elementor-app"===new URLSearchParams(window.location.search).get("page")}static getAppScreenData(t){if(!t)return null;const e=t.replace(/^#/,"");if(!e.startsWith("/"))return null;const r=e.split("/").filter(Boolean);if(0===r.length)return null;return{screenId:r.join("/"),screenType:i.SCREEN_TYPES.APP_SCREEN}}static getScreenIdFromBody(){const t=document.body.className.split(" ");for(const e of t)if(e.startsWith("elementor")&&(e.includes("page")||e.includes("post-type")))return e;return"elementor-unknown"}static sanitizeScreenId(t){return t.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")}static attachTabChangeTracking(){this.attachNavTabTracking(),this.attachHashChangeTracking(),this.attachSettingsTabTracking(),this.attachModalTracking()}static attachNavTabTracking(){const t=document.querySelector(a);t&&this.addEventListenerTracked(t,"click",t=>{const e=t.target.closest(c);if(e&&!e.classList.contains("nav-tab-active")){const t=this.getScreenData();t&&this.trackScreen(t.screenId,t.screenType)}})}static attachHashChangeTracking(){this.addEventListenerTracked(window,"hashchange",()=>{const t=this.getScreenData();t&&this.trackScreen(t.screenId,t.screenType)})}static attachSettingsTabTracking(){const t=document.querySelectorAll(u);0!==t.length&&t.forEach(t=>{this.addObserver(t,{attributes:!0,attributeFilter:["class"]},()=>{const t=this.getScreenData();t&&this.trackScreen(t.screenId,t.screenType)})})}static attachModalTracking(){this.addObserver(document.body,{childList:!0,subtree:!0},t=>{for(const e of t)"childList"===e.type&&p.forEach(t=>{const e=document.querySelector(t);if(e&&this.isModalVisible(e)){const e=t.replace("#","");this.trackScreen(e,i.SCREEN_TYPES.POPUP)}})})}static isModalVisible(t){if(!t)return!1;const e=window.getComputedStyle(t);return"none"!==e.display&&0!==parseFloat(e.opacity)}static trackScreen(t,e=i.SCREEN_TYPES.TOP_LEVEL_PAGE){const r=`${t}-${e}`;this.trackedScreens.has(r)||(this.trackedScreens.add(r),i.default.trackScreenViewed(t,e))}}e.default=ScreenViewTracking},7738:t=>{"use strict";t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},7914:(t,e,r)=>{"use strict";var n=r(1483),i=r(5835),s=r(169),o=r(2095);t.exports=function(t,e,r,a){a||(a={});var c=a.enumerable,l=void 0!==a.name?a.name:e;if(n(r)&&s(r,l,a),a.global)c?t[e]=r:o(e,r);else{try{a.unsafe?t[e]&&(c=!0):delete t[e]}catch(t){}c?t[e]=r:i.f(t,e,{value:r,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return t}},7955:t=>{"use strict";t.exports=elementorModules.ViewModule.extend({getDefaultSettings:()=>({element:null,direction:elementorFrontend.config.is_rtl?"right":"left",selectors:{container:window},considerScrollbar:!1,cssOutput:"inline"}),getDefaultElements(){return{$element:jQuery(this.getSettings("element"))}},stretch(){const t=this.getSettings();let e;try{e=jQuery(t.selectors.container)}catch(t){}e&&e.length||(e=jQuery(this.getDefaultSettings().selectors.container)),this.reset();var r=this.elements.$element,n=e.innerWidth(),i=r.offset().left,s="fixed"===r.css("position"),o=s?0:i,a=window===e[0];if(!a){var c=e.offset().left;s&&(o=c),i>c&&(o=i-c)}if(t.considerScrollbar&&a){o-=window.innerWidth-n}s||(elementorFrontend.config.is_rtl&&(o=n-(r.outerWidth()+o)),o=-o),t.margin&&(o+=t.margin);var l={};let u=n;t.margin&&(u-=2*t.margin),l.width=u+"px",l[t.direction]=o+"px","variables"!==t.cssOutput?r.css(l):this.applyCssVariables(r,l)},reset(){const t={},e=this.getSettings(),r=this.elements.$element;"variables"!==e.cssOutput?(t.width="",t[e.direction]="",r.css(t)):this.resetCssVariables(r)},applyCssVariables(t,e){t.css("--stretch-width",e.width),e.left?t.css("--stretch-left",e.left):t.css("--stretch-right",e.right)},resetCssVariables(t){t.css({"--stretch-width":"","--stretch-left":"","--stretch-right":""})}})},7958:(t,e,r)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.BaseRegistry=void 0,r(4846),r(7458),r(9655),r(4364);e.BaseRegistry=class BaseRegistry{constructor(){this.sections=new Map}register(t){if(!t.key||!t.title)throw new Error("Template type must have key and title");const e=this.get(t.key)||this.formatSection(t);if(t.children)if(e.children){const r=new Map(e.children.map(t=>[t.key,t]));t.children.forEach(t=>{const e=this.formatSection(t);r.set(t.key,e)}),e.children=Array.from(r.values())}else e.children=t.children.map(t=>this.formatSection(t));this.sections.set(t.key,e)}formatSection({children:t,...e}){return{key:e.key,title:e.title,description:e.description||"",useParentDefault:!1!==e.useParentDefault,getInitialState:e.getInitialState||null,component:e.component||null,order:e.order||10,isAvailable:e.isAvailable||(()=>!0),...e}}getAll(){return Array.from(this.sections.values()).filter(t=>t.isAvailable()).map(t=>t.children?{...t,children:[...t.children].sort((t,e)=>t.order-e.order)}:t).sort((t,e)=>t.order-e.order)}get(t){return this.sections.get(t)}}},8120:(t,e,r)=>{"use strict";var n=r(1483),i=r(8761),s=TypeError;t.exports=function(t){if(n(t))return t;throw new s(i(t)+" is not a function")}},8140:(t,e,r)=>{"use strict";var n=r(6784);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,r(4846),r(6211);var i=n(r(7224));class StretchedElement extends i.default{getStretchedClass(){return"e-stretched"}getStretchSettingName(){return"stretch_element"}getStretchActiveValue(){return"yes"}bindEvents(){const t=this.getUniqueHandlerID();elementorFrontend.addListenerOnce(t,"resize",this.stretch),elementorFrontend.addListenerOnce(t,"sticky:stick",this.stretch,this.$element),elementorFrontend.addListenerOnce(t,"sticky:unstick",this.stretch,this.$element),elementorFrontend.isEditMode()&&(this.onKitChangeStretchContainerChange=this.onKitChangeStretchContainerChange.bind(this),elementor.channels.editor.on("kit:change:stretchContainer",this.onKitChangeStretchContainerChange))}unbindEvents(){elementorFrontend.removeListeners(this.getUniqueHandlerID(),"resize",this.stretch),elementorFrontend.isEditMode()&&elementor.channels.editor.off("kit:change:stretchContainer",this.onKitChangeStretchContainerChange)}isActive(t){return elementorFrontend.isEditMode()||t.$element.hasClass(this.getStretchedClass())}getStretchElementForConfig(t=null){return t?this.$element.find(t):this.$element}getStretchElementConfig(){return{element:this.getStretchElementForConfig(),selectors:{container:this.getStretchContainer()},considerScrollbar:elementorFrontend.isEditMode()&&elementorFrontend.config.is_rtl}}initStretch(){this.stretch=this.stretch.bind(this),this.stretchElement=new elementorModules.frontend.tools.StretchElement(this.getStretchElementConfig())}getStretchContainer(){return elementorFrontend.getKitSettings("stretched_section_container")||window}isStretchSettingEnabled(){return this.getElementSettings(this.getStretchSettingName())===this.getStretchActiveValue()}stretch(){this.isStretchSettingEnabled()&&this.stretchElement.stretch()}onInit(...t){this.isActive(this.getSettings())&&(this.initStretch(),super.onInit(...t),this.stretch())}onElementChange(t){this.getStretchSettingName()===t&&(this.isStretchSettingEnabled()?this.stretch():this.stretchElement.reset())}onKitChangeStretchContainerChange(){this.stretchElement.setSettings("selectors.container",this.getStretchContainer()),this.stretch()}}e.default=StretchedElement},8285:(t,e,r)=>{"use strict";var n=r(6784);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(r(3827)),s=n(r(6349));const o={go_elementor_pro:"Upgrade"};class MenuPromotionTracking extends s.default{static init(){this.attachDelegatedTracking()}static attachDelegatedTracking(){this.addEventListenerTracked(document,"click",t=>{const e=t.target;if(!e)return;const r=e.closest("a");if(!r)return;const n=r.getAttribute("href");if(!n)return;const i=this.extractPromoMenuKey(n);i&&this.handleMenuPromoClick(r,i)},{capture:!0})}static extractPromoMenuKey(t){for(const e of Object.keys(o))if(t.includes(`page=${e}`))return e;return null}static handleMenuPromoClick(t,e){const r=t.getAttribute("href"),n=o[e],s=e.replace("elementor_","").replace(/_/g,"/");i.default.trackPromoClicked(n,r,s)}}e.default=MenuPromotionTracking},8324:(t,e,r)=>{"use strict";var n=r(3005),i=Math.min;t.exports=function(t){var e=n(t);return e>0?i(e,9007199254740991):0}},8473:t=>{"use strict";t.exports=function(t){try{return!!t()}catch(t){return!0}}},8612:(t,e,r)=>{"use strict";var n=r(5578),i=r(4961).f,s=r(9037),o=r(7914),a=r(2095),c=r(6726),l=r(8730);t.exports=function(t,e){var r,u,d,p,h,f=t.target,g=t.global,m=t.stat;if(r=g?n:m?n[f]||a(f,{}):n[f]&&n[f].prototype)for(u in e){if(p=e[u],d=t.dontCallGetSet?(h=i(r,u))&&h.value:r[u],!l(g?u:f+(m?".":"#")+u,t.forced)&&void 0!==d){if(typeof p==typeof d)continue;c(p,d)}(t.sham||d&&d.sham)&&s(p,"sham",!0),o(r,u,p,t)}}},8660:(t,e,r)=>{"use strict";var n=r(1807),i=r(5290),s=r(9037),o=r(2313),a=r(1),c=r(4483),l=r(2564),u=r(1851).IteratorPrototype,d=r(5247),p=r(6721),h=r(1983),f=a("toStringTag"),g="IteratorHelper",m="WrapForValidIterator",v="normal",y="throw",_=c.set,createIteratorProxyPrototype=function(t){var e=c.getterFor(t?m:g);return o(i(u),{next:function next(){var r=e(this);if(t)return r.nextHandler();if(r.done)return d(void 0,!0);try{var n=r.nextHandler();return r.returnHandlerResult?n:d(n,r.done)}catch(t){throw r.done=!0,t}},return:function(){var r=e(this),i=r.iterator;if(r.done=!0,t){var s=l(i,"return");return s?n(s,i):d(void 0,!0)}if(r.inner)try{p(r.inner.iterator,v)}catch(t){return p(i,y,t)}if(r.openIters)try{h(r.openIters,v)}catch(t){return p(i,y,t)}return i&&p(i,v),d(void 0,!0)}})},b=createIteratorProxyPrototype(!0),w=createIteratorProxyPrototype(!1);s(w,f,"Iterator Helper"),t.exports=function(t,e,r){var n=function Iterator(n,i){i?(i.iterator=n.iterator,i.next=n.next):i=n,i.type=e?m:g,i.returnHandlerResult=!!r,i.nextHandler=t,i.counter=0,i.done=!1,_(this,i)};return n.prototype=e?b:w,n}},8685:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.ForceMethodImplementation=void 0;class ForceMethodImplementation extends Error{constructor(t={},e={}){super(`${t.isStatic?"static ":""}${t.fullName}() should be implemented, please provide '${t.functionName||t.fullName}' functionality.`,e),Object.keys(e).length&&console.error(e),Error.captureStackTrace(this,ForceMethodImplementation)}}e.ForceMethodImplementation=ForceMethodImplementation;e.default=t=>{const e=Error().stack.split("\n")[2].trim(),r=e.startsWith("at new")?"constructor":e.split(" ")[1],n={};if(n.functionName=r,n.fullName=r,n.functionName.includes(".")){const t=n.functionName.split(".");n.className=t[0],n.functionName=t[1]}else n.isStatic=!0;throw new ForceMethodImplementation(n,t)}},8730:(t,e,r)=>{"use strict";var n=r(8473),i=r(1483),s=/#|\.prototype\./,isForced=function(t,e){var r=a[o(t)];return r===l||r!==c&&(i(e)?n(e):!!e)},o=isForced.normalize=function(t){return String(t).replace(s,".").toLowerCase()},a=isForced.data={},c=isForced.NATIVE="N",l=isForced.POLYFILL="P";t.exports=isForced},8761:t=>{"use strict";var e=String;t.exports=function(t){try{return e(t)}catch(t){return"Object"}}},8901:(t,e,r)=>{"use strict";var n=r(2293),i=r(6721);t.exports=function(t,e,r,s){try{return s?e(n(r)[0],r[1]):e(r)}catch(e){i(t,"throw",e)}}},9031:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.createGetInitialState=function createGetInitialState(t,e={}){return(r,n)=>{let i=n;if(r.hasOwnProperty("uploadedData")){i=!1;const e=r.uploadedData.manifest.templates,n=elementorAppConfig?.["import-export-customization"]?.exportGroups||{};for(const r in e){if(n[e[r].doc_type]===t){i=!0;break}}}return{enabled:i,...e}}}},9037:(t,e,r)=>{"use strict";var n=r(382),i=r(5835),s=r(7738);t.exports=n?function(t,e,r){return i.f(t,e,s(1,r))}:function(t,e,r){return t[e]=r,t}},9217:(t,e,r)=>{"use strict";var n=r(8612),i=r(1807),s=r(1506),o=r(8120),a=r(2293),c=r(41),l=r(6721),u=r(5267)("some",TypeError);n({target:"Iterator",proto:!0,real:!0,forced:u},{some:function some(t){a(this);try{o(t)}catch(t){l(this,"throw",t)}if(u)return i(u,this,t);var e=c(this),r=0;return s(e,function(e,n){if(t(e,r++))return n()},{IS_RECORD:!0,INTERRUPTED:!0}).stopped}})},9273:(t,e,r)=>{"use strict";var n=r(382),i=r(4914),s=TypeError,o=Object.getOwnPropertyDescriptor,a=n&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}();t.exports=a?function(t,e){if(i(t)&&!o(t,"length").writable)throw new s("Cannot set read only .length");return t.length=e}:function(t,e){return t.length=e}},9441:(t,e,r)=>{"use strict";var n=r(8473);t.exports=!n(function(){function F(){}return F.prototype.constructor=null,Object.getPrototypeOf(new F)!==F.prototype})},9461:(t,e,r)=>{"use strict";var n=r(5578).navigator,i=n&&n.userAgent;t.exports=i?String(i):""},9497:(t,e,r)=>{"use strict";var n=r(1409),i=r(4762),s=r(2278),o=r(4347),a=r(2293),c=i([].concat);t.exports=n("Reflect","ownKeys")||function ownKeys(t){var e=s.f(a(t)),r=o.f;return r?c(e,r(t)):e}},9557:t=>{"use strict";t.exports=!1},9603:(t,e,r)=>{"use strict";var n=r(6784);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,r(4846),r(6211),r(9655);var i=n(r(5633));class CarouselHandlerBase extends i.default{getDefaultSettings(){return{selectors:{carousel:".swiper",swiperWrapper:".swiper-wrapper",slideContent:".swiper-slide",swiperArrow:".elementor-swiper-button",paginationWrapper:".swiper-pagination",paginationBullet:".swiper-pagination-bullet",paginationBulletWrapper:".swiper-pagination-bullets"}}}getDefaultElements(){const t=this.getSettings("selectors"),e={$swiperContainer:this.$element.find(t.carousel),$swiperWrapper:this.$element.find(t.swiperWrapper),$swiperArrows:this.$element.find(t.swiperArrow),$paginationWrapper:this.$element.find(t.paginationWrapper),$paginationBullets:this.$element.find(t.paginationBullet),$paginationBulletWrapper:this.$element.find(t.paginationBulletWrapper)};return e.$slides=e.$swiperContainer.find(t.slideContent),e}getSwiperSettings(){const t=this.getElementSettings(),e=+t.slides_to_show||3,r=1===e,n=elementorFrontend.config.responsive.activeBreakpoints,i={mobile:1,tablet:r?1:2},s={slidesPerView:e,loop:"yes"===t.infinite,speed:t.speed,handleElementorBreakpoints:!0,breakpoints:{}};let o=e;Object.keys(n).reverse().forEach(e=>{const r=i[e]?i[e]:o;s.breakpoints[n[e].value]={slidesPerView:+t["slides_to_show_"+e]||r,slidesPerGroup:+t["slides_to_scroll_"+e]||1},t.image_spacing_custom&&(s.breakpoints[n[e].value].spaceBetween=this.getSpaceBetween(e)),o=+t["slides_to_show_"+e]||r}),"yes"===t.autoplay&&(s.autoplay={delay:t.autoplay_speed,disableOnInteraction:"yes"===t.pause_on_interaction}),r?(s.effect=t.effect,"fade"===t.effect&&(s.fadeEffect={crossFade:!0})):s.slidesPerGroup=+t.slides_to_scroll||1,t.image_spacing_custom&&(s.spaceBetween=this.getSpaceBetween());const a="arrows"===t.navigation||"both"===t.navigation,c="dots"===t.navigation||"both"===t.navigation||t.pagination;return a&&(s.navigation={prevEl:".elementor-swiper-button-prev",nextEl:".elementor-swiper-button-next"}),c&&(s.pagination={el:`.elementor-element-${this.getID()} .swiper-pagination`,type:t.pagination?t.pagination:"bullets",clickable:!0,renderBullet:(t,e)=>`<span class="${e}" role="button" tabindex="0" data-bullet-index="${t}" aria-label="${elementorFrontend.config.i18n.a11yCarouselPaginationBulletMessage} ${t+1}"></span>`}),"yes"===t.lazyload&&(s.lazy={loadPrevNext:!0,loadPrevNextAmount:1}),s.a11y={enabled:!0,prevSlideMessage:elementorFrontend.config.i18n.a11yCarouselPrevSlideMessage,nextSlideMessage:elementorFrontend.config.i18n.a11yCarouselNextSlideMessage,firstSlideMessage:elementorFrontend.config.i18n.a11yCarouselFirstSlideMessage,lastSlideMessage:elementorFrontend.config.i18n.a11yCarouselLastSlideMessage},s.on={slideChange:()=>{this.a11ySetPaginationTabindex(),this.handleElementHandlers(),this.a11ySetSlideAriaHidden()},init:()=>{this.a11ySetPaginationTabindex(),this.a11ySetSlideAriaHidden("initialisation")}},this.applyOffsetSettings(t,s,e),s}getOffsetWidth(){const t=elementorFrontend.getCurrentDeviceMode();return elementorFrontend.utils.controls.getResponsiveControlValue(this.getElementSettings(),"offset_width","size",t)||0}applyOffsetSettings(t,e,r){const n=t.offset_sides;if(!(elementorFrontend.isEditMode()&&"NestedCarousel"===this.constructor.name)&&n&&"none"!==n)switch(n){case"right":this.forceSliderToShowNextSlideWhenOnLast(e,r),this.addClassToSwiperContainer("offset-right");break;case"left":this.addClassToSwiperContainer("offset-left");break;case"both":this.forceSliderToShowNextSlideWhenOnLast(e,r),this.addClassToSwiperContainer("offset-both")}}forceSliderToShowNextSlideWhenOnLast(t,e){t.slidesPerView=e+.001}addClassToSwiperContainer(t){this.getDefaultElements().$swiperContainer[0].classList.add(t)}async onInit(...t){if(super.onInit(...t),!this.elements.$swiperContainer.length||2>this.elements.$slides.length)return;await this.initSwiper();"yes"===this.getElementSettings().pause_on_hover&&this.togglePauseOnHover(!0)}async initSwiper(){const t=elementorFrontend.utils.swiper;this.swiper=await new t(this.elements.$swiperContainer,this.getSwiperSettings()),this.elements.$swiperContainer.data("swiper",this.swiper)}bindEvents(){this.elements.$swiperArrows.on("keydown",this.onDirectionArrowKeydown.bind(this)),this.elements.$paginationWrapper.on("keydown",".swiper-pagination-bullet",this.onDirectionArrowKeydown.bind(this)),this.elements.$swiperContainer.on("keydown",".swiper-slide",this.onDirectionArrowKeydown.bind(this)),this.$element.find(":focusable").on("focus",this.onFocusDisableAutoplay.bind(this)),elementorFrontend.elements.$window.on("resize",this.getSwiperSettings.bind(this))}unbindEvents(){this.elements.$swiperArrows.off(),this.elements.$paginationWrapper.off(),this.elements.$swiperContainer.off(),this.$element.find(":focusable").off(),elementorFrontend.elements.$window.off("resize")}onDirectionArrowKeydown(t){const e=elementorFrontend.config.is_rtl,r=t.originalEvent.code,n=e?"ArrowLeft":"ArrowRight";if(!(-1!==["ArrowLeft","ArrowRight"].indexOf(r)))return!0;(e?"ArrowRight":"ArrowLeft")===r?this.swiper.slidePrev():n===r&&this.swiper.slideNext()}onFocusDisableAutoplay(){this.swiper.autoplay.stop()}updateSwiperOption(t){const e=this.getElementSettings()[t],r=this.swiper.params;switch(t){case"autoplay_speed":r.autoplay.delay=e;break;case"speed":r.speed=e}this.swiper.update()}getChangeableProperties(){return{pause_on_hover:"pauseOnHover",autoplay_speed:"delay",speed:"speed",arrows_position:"arrows_position"}}onElementChange(t){if(0===t.indexOf("image_spacing_custom"))return void this.updateSpaceBetween(t);if(this.getChangeableProperties()[t])if("pause_on_hover"===t){const t=this.getElementSettings("pause_on_hover");this.togglePauseOnHover("yes"===t)}else this.updateSwiperOption(t)}onEditSettingsChange(t){"activeItemIndex"===t&&this.swiper.slideToLoop(this.getEditSettings("activeItemIndex")-1)}getSpaceBetween(t=null){const e=elementorFrontend.utils.controls.getResponsiveControlValue(this.getElementSettings(),"image_spacing_custom","size",t);return Number(e)||0}updateSpaceBetween(t){const e=t.match("image_spacing_custom_(.*)"),r=e?e[1]:"desktop",n=this.getSpaceBetween(r);"desktop"!==r&&(this.swiper.params.breakpoints[elementorFrontend.config.responsive.activeBreakpoints[r].value].spaceBetween=n),this.swiper.params.spaceBetween=n,this.swiper.update()}getPaginationBullets(t="array"){const e=this.$element.find(this.getSettings("selectors").paginationBullet);return"array"===t?Array.from(e):e}a11ySetPaginationTabindex(){const t=this.swiper?.params?.pagination.bulletClass,e=this.swiper?.params?.pagination.bulletActiveClass;this.getPaginationBullets().forEach(t=>{t.classList?.contains(e)||t.removeAttribute("tabindex")});const r="ArrowLeft"===event?.code||"ArrowRight"===event?.code;event?.target?.classList?.contains(t)&&r&&this.$element.find(`.${e}`).trigger("focus")}getSwiperWrapperTranformXValue(){let t=this.elements.$swiperWrapper[0]?.style.transform;return t=t.replace("translate3d(",""),t=t.split(","),t=parseInt(t[0].replace("px","")),t||0}a11ySetSlideAriaHidden(t=""){if("number"!=typeof("initialisation"===t?0:this.swiper?.activeIndex))return;const e=this.getSwiperWrapperTranformXValue(),r=this.elements.$swiperWrapper[0].clientWidth;this.elements.$swiperContainer.find(this.getSettings("selectors").slideContent).each((t,n)=>{0<=n.offsetLeft+e&&r>n.offsetLeft+e?(n.removeAttribute("aria-hidden"),n.removeAttribute("inert")):(n.setAttribute("aria-hidden",!0),n.setAttribute("inert",""))})}handleElementHandlers(){}}e.default=CarouselHandlerBase},9655:(t,e,r)=>{"use strict";r(9930)},9930:(t,e,r)=>{"use strict";var n=r(8612),i=r(1807),s=r(1506),o=r(8120),a=r(2293),c=r(41),l=r(6721),u=r(5267)("forEach",TypeError);n({target:"Iterator",proto:!0,real:!0,forced:u},{forEach:function forEach(t){a(this);try{o(t)}catch(t){l(this,"throw",t)}if(u)return i(u,this,t);var e=c(this),r=0;s(e,function(e){t(e,r++)},{IS_RECORD:!0})}})}},t=>{var e;e=4946,t(t.s=e)}]);
/* https://demo2.wpopal.com/spaciaz/wp-includes/js/jquery/ui/core.min.js?ver=1.13.3 */
/*! jQuery UI - v1.13.3 - 2024-04-26
* https://jqueryui.com
* Includes: widget.js, position.js, data.js, disable-selection.js, effect.js, effects/effect-blind.js, effects/effect-bounce.js, effects/effect-clip.js, effects/effect-drop.js, effects/effect-explode.js, effects/effect-fade.js, effects/effect-fold.js, effects/effect-highlight.js, effects/effect-puff.js, effects/effect-pulsate.js, effects/effect-scale.js, effects/effect-shake.js, effects/effect-size.js, effects/effect-slide.js, effects/effect-transfer.js, focusable.js, form-reset-mixin.js, jquery-patch.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/accordion.js, widgets/autocomplete.js, widgets/button.js, widgets/checkboxradio.js, widgets/controlgroup.js, widgets/datepicker.js, widgets/dialog.js, widgets/draggable.js, widgets/droppable.js, widgets/menu.js, widgets/mouse.js, widgets/progressbar.js, widgets/resizable.js, widgets/selectable.js, widgets/selectmenu.js, widgets/slider.js, widgets/sortable.js, widgets/spinner.js, widgets/tabs.js, widgets/tooltip.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */
!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(x){"use strict";var t,e,i,n,W,C,o,s,r,l,a,h,u;function E(t,e,i){return[parseFloat(t[0])*(a.test(t[0])?e/100:1),parseFloat(t[1])*(a.test(t[1])?i/100:1)]}function L(t,e){return parseInt(x.css(t,e),10)||0}function N(t){return null!=t&&t===t.window}x.ui=x.ui||{},x.ui.version="1.13.3",
/*!
 * jQuery UI :data 1.13.3
 * https://jqueryui.com
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license.
 * https://jquery.org/license
 */
x.extend(x.expr.pseudos,{data:x.expr.createPseudo?x.expr.createPseudo(function(e){return function(t){return!!x.data(t,e)}}):function(t,e,i){return!!x.data(t,i[3])}}),
/*!
 * jQuery UI Disable Selection 1.13.3
 * https://jqueryui.com
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license.
 * https://jquery.org/license
 */
x.fn.extend({disableSelection:(t="onselectstart"in document.createElement("div")?"selectstart":"mousedown",function(){return this.on(t+".ui-disableSelection",function(t){t.preventDefault()})}),enableSelection:function(){return this.off(".ui-disableSelection")}}),
/*!
 * jQuery UI Focusable 1.13.3
 * https://jqueryui.com
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license.
 * https://jquery.org/license
 */
x.ui.focusable=function(t,e){var i,n,o,s=t.nodeName.toLowerCase();return"area"===s?(o=(i=t.parentNode).name,!(!t.href||!o||"map"!==i.nodeName.toLowerCase())&&0<(i=x("img[usemap='#"+o+"']")).length&&i.is(":visible")):(/^(input|select|textarea|button|object)$/.test(s)?(n=!t.disabled)&&(o=x(t).closest("fieldset")[0])&&(n=!o.disabled):n="a"===s&&t.href||e,n&&x(t).is(":visible")&&function(t){var e=t.css("visibility");for(;"inherit"===e;)t=t.parent(),e=t.css("visibility");return"visible"===e}(x(t)))},x.extend(x.expr.pseudos,{focusable:function(t){return x.ui.focusable(t,null!=x.attr(t,"tabindex"))}}),x.fn._form=function(){return"string"==typeof this[0].form?this.closest("form"):x(this[0].form)},
/*!
 * jQuery UI Form Reset Mixin 1.13.3
 * https://jqueryui.com
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license.
 * https://jquery.org/license
 */
x.ui.formResetMixin={_formResetHandler:function(){var e=x(this);setTimeout(function(){var t=e.data("ui-form-reset-instances");x.each(t,function(){this.refresh()})})},_bindFormResetHandler:function(){var t;this.form=this.element._form(),this.form.length&&((t=this.form.data("ui-form-reset-instances")||[]).length||this.form.on("reset.ui-form-reset",this._formResetHandler),t.push(this),this.form.data("ui-form-reset-instances",t))},_unbindFormResetHandler:function(){var t;this.form.length&&((t=this.form.data("ui-form-reset-instances")).splice(x.inArray(this,t),1),t.length?this.form.data("ui-form-reset-instances",t):this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset"))}},x.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),
/*!
 * jQuery UI Support for jQuery core 1.8.x and newer 1.13.3
 * https://jqueryui.com
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license.
 * https://jquery.org/license
 *
 */
x.expr.pseudos||(x.expr.pseudos=x.expr[":"]),x.uniqueSort||(x.uniqueSort=x.unique),x.escapeSelector||(e=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,i=function(t,e){return e?"\0"===t?"�":t.slice(0,-1)+"\\"+t.charCodeAt(t.length-1).toString(16)+" ":"\\"+t},x.escapeSelector=function(t){return(t+"").replace(e,i)}),x.fn.even&&x.fn.odd||x.fn.extend({even:function(){return this.filter(function(t){return t%2==0})},odd:function(){return this.filter(function(t){return t%2==1})}}),
/*!
 * jQuery UI Keycode 1.13.3
 * https://jqueryui.com
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license.
 * https://jquery.org/license
 */
x.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38},
/*!
 * jQuery UI Labels 1.13.3
 * https://jqueryui.com
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license.
 * https://jquery.org/license
 */
x.fn.labels=function(){var t,e,i;return this.length?this[0].labels&&this[0].labels.length?this.pushStack(this[0].labels):(e=this.eq(0).parents("label"),(t=this.attr("id"))&&(i=(i=this.eq(0).parents().last()).add((i.length?i:this).siblings()),t="label[for='"+x.escapeSelector(t)+"']",e=e.add(i.find(t).addBack(t))),this.pushStack(e)):this.pushStack([])},x.ui.plugin={add:function(t,e,i){var n,o=x.ui[t].prototype;for(n in i)o.plugins[n]=o.plugins[n]||[],o.plugins[n].push([e,i[n]])},call:function(t,e,i,n){var o,s=t.plugins[e];if(s&&(n||t.element[0].parentNode&&11!==t.element[0].parentNode.nodeType))for(o=0;o<s.length;o++)t.options[s[o][0]]&&s[o][1].apply(t.element,i)}},
/*!
 * jQuery UI Position 1.13.3
 * https://jqueryui.com
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license.
 * https://jquery.org/license
 *
 * https://api.jqueryui.com/position/
 */
W=Math.max,C=Math.abs,o=/left|center|right/,s=/top|center|bottom/,r=/[\+\-]\d+(\.[\d]+)?%?/,l=/^\w+/,a=/%$/,h=x.fn.position,x.position={scrollbarWidth:function(){var t,e,i;return void 0!==n?n:(i=(e=x("<div style='display:block;position:absolute;width:200px;height:200px;overflow:hidden;'><div style='height:300px;width:auto;'></div></div>")).children()[0],x("body").append(e),t=i.offsetWidth,e.css("overflow","scroll"),t===(i=i.offsetWidth)&&(i=e[0].clientWidth),e.remove(),n=t-i)},getScrollInfo:function(t){var e=t.isWindow||t.isDocument?"":t.element.css("overflow-x"),i=t.isWindow||t.isDocument?"":t.element.css("overflow-y"),e="scroll"===e||"auto"===e&&t.width<t.element[0].scrollWidth;return{width:"scroll"===i||"auto"===i&&t.height<t.element[0].scrollHeight?x.position.scrollbarWidth():0,height:e?x.position.scrollbarWidth():0}},getWithinInfo:function(t){var e=x(t||window),i=N(e[0]),n=!!e[0]&&9===e[0].nodeType;return{element:e,isWindow:i,isDocument:n,offset:!i&&!n?x(t).offset():{left:0,top:0},scrollLeft:e.scrollLeft(),scrollTop:e.scrollTop(),width:e.outerWidth(),height:e.outerHeight()}}},x.fn.position=function(f){var c,d,p,g,m,v,y,w,b,_,t,e;return f&&f.of?(v="string"==typeof(f=x.extend({},f)).of?x(document).find(f.of):x(f.of),y=x.position.getWithinInfo(f.within),w=x.position.getScrollInfo(y),b=(f.collision||"flip").split(" "),_={},e=9===(e=(t=v)[0]).nodeType?{width:t.width(),height:t.height(),offset:{top:0,left:0}}:N(e)?{width:t.width(),height:t.height(),offset:{top:t.scrollTop(),left:t.scrollLeft()}}:e.preventDefault?{width:0,height:0,offset:{top:e.pageY,left:e.pageX}}:{width:t.outerWidth(),height:t.outerHeight(),offset:t.offset()},v[0].preventDefault&&(f.at="left top"),d=e.width,p=e.height,m=x.extend({},g=e.offset),x.each(["my","at"],function(){var t,e,i=(f[this]||"").split(" ");(i=1===i.length?o.test(i[0])?i.concat(["center"]):s.test(i[0])?["center"].concat(i):["center","center"]:i)[0]=o.test(i[0])?i[0]:"center",i[1]=s.test(i[1])?i[1]:"center",t=r.exec(i[0]),e=r.exec(i[1]),_[this]=[t?t[0]:0,e?e[0]:0],f[this]=[l.exec(i[0])[0],l.exec(i[1])[0]]}),1===b.length&&(b[1]=b[0]),"right"===f.at[0]?m.left+=d:"center"===f.at[0]&&(m.left+=d/2),"bottom"===f.at[1]?m.top+=p:"center"===f.at[1]&&(m.top+=p/2),c=E(_.at,d,p),m.left+=c[0],m.top+=c[1],this.each(function(){var i,t,r=x(this),l=r.outerWidth(),a=r.outerHeight(),e=L(this,"marginLeft"),n=L(this,"marginTop"),o=l+e+L(this,"marginRight")+w.width,s=a+n+L(this,"marginBottom")+w.height,h=x.extend({},m),u=E(_.my,r.outerWidth(),r.outerHeight());"right"===f.my[0]?h.left-=l:"center"===f.my[0]&&(h.left-=l/2),"bottom"===f.my[1]?h.top-=a:"center"===f.my[1]&&(h.top-=a/2),h.left+=u[0],h.top+=u[1],i={marginLeft:e,marginTop:n},x.each(["left","top"],function(t,e){x.ui.position[b[t]]&&x.ui.position[b[t]][e](h,{targetWidth:d,targetHeight:p,elemWidth:l,elemHeight:a,collisionPosition:i,collisionWidth:o,collisionHeight:s,offset:[c[0]+u[0],c[1]+u[1]],my:f.my,at:f.at,within:y,elem:r})}),f.using&&(t=function(t){var e=g.left-h.left,i=e+d-l,n=g.top-h.top,o=n+p-a,s={target:{element:v,left:g.left,top:g.top,width:d,height:p},element:{element:r,left:h.left,top:h.top,width:l,height:a},horizontal:i<0?"left":0<e?"right":"center",vertical:o<0?"top":0<n?"bottom":"middle"};d<l&&C(e+i)<d&&(s.horizontal="center"),p<a&&C(n+o)<p&&(s.vertical="middle"),W(C(e),C(i))>W(C(n),C(o))?s.important="horizontal":s.important="vertical",f.using.call(this,t,s)}),r.offset(x.extend(h,{using:t}))})):h.apply(this,arguments)},x.ui.position={fit:{left:function(t,e){var i,n=e.within,o=n.isWindow?n.scrollLeft:n.offset.left,n=n.width,s=t.left-e.collisionPosition.marginLeft,r=o-s,l=s+e.collisionWidth-n-o;n<e.collisionWidth?0<r&&l<=0?(i=t.left+r+e.collisionWidth-n-o,t.left+=r-i):t.left=!(0<l&&r<=0)&&l<r?o+n-e.collisionWidth:o:0<r?t.left+=r:0<l?t.left-=l:t.left=W(t.left-s,t.left)},top:function(t,e){var i,n=e.within,n=n.isWindow?n.scrollTop:n.offset.top,o=e.within.height,s=t.top-e.collisionPosition.marginTop,r=n-s,l=s+e.collisionHeight-o-n;o<e.collisionHeight?0<r&&l<=0?(i=t.top+r+e.collisionHeight-o-n,t.top+=r-i):t.top=!(0<l&&r<=0)&&l<r?n+o-e.collisionHeight:n:0<r?t.top+=r:0<l?t.top-=l:t.top=W(t.top-s,t.top)}},flip:{left:function(t,e){var i=e.within,n=i.offset.left+i.scrollLeft,o=i.width,i=i.isWindow?i.scrollLeft:i.offset.left,s=t.left-e.collisionPosition.marginLeft,r=s-i,s=s+e.collisionWidth-o-i,l="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,a="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,h=-2*e.offset[0];r<0?((o=t.left+l+a+h+e.collisionWidth-o-n)<0||o<C(r))&&(t.left+=l+a+h):0<s&&(0<(n=t.left-e.collisionPosition.marginLeft+l+a+h-i)||C(n)<s)&&(t.left+=l+a+h)},top:function(t,e){var i=e.within,n=i.offset.top+i.scrollTop,o=i.height,i=i.isWindow?i.scrollTop:i.offset.top,s=t.top-e.collisionPosition.marginTop,r=s-i,s=s+e.collisionHeight-o-i,l="top"===e.my[1]?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,a="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,h=-2*e.offset[1];r<0?((o=t.top+l+a+h+e.collisionHeight-o-n)<0||o<C(r))&&(t.top+=l+a+h):0<s&&(0<(n=t.top-e.collisionPosition.marginTop+l+a+h-i)||C(n)<s)&&(t.top+=l+a+h)}},flipfit:{left:function(){x.ui.position.flip.left.apply(this,arguments),x.ui.position.fit.left.apply(this,arguments)},top:function(){x.ui.position.flip.top.apply(this,arguments),x.ui.position.fit.top.apply(this,arguments)}}},x.ui.safeActiveElement=function(e){var i;try{i=e.activeElement}catch(t){i=e.body}return i=(i=i||e.body).nodeName?i:e.body},x.ui.safeBlur=function(t){t&&"body"!==t.nodeName.toLowerCase()&&x(t).trigger("blur")},
/*!
 * jQuery UI Scroll Parent 1.13.3
 * https://jqueryui.com
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license.
 * https://jquery.org/license
 */
x.fn.scrollParent=function(t){var e=this.css("position"),i="absolute"===e,n=t?/(auto|scroll|hidden)/:/(auto|scroll)/,t=this.parents().filter(function(){var t=x(this);return(!i||"static"!==t.css("position"))&&n.test(t.css("overflow")+t.css("overflow-y")+t.css("overflow-x"))}).eq(0);return"fixed"!==e&&t.length?t:x(this[0].ownerDocument||document)},
/*!
 * jQuery UI Tabbable 1.13.3
 * https://jqueryui.com
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license.
 * https://jquery.org/license
 */
x.extend(x.expr.pseudos,{tabbable:function(t){var e=x.attr(t,"tabindex"),i=null!=e;return(!i||0<=e)&&x.ui.focusable(t,i)}}),
/*!
 * jQuery UI Unique ID 1.13.3
 * https://jqueryui.com
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license.
 * https://jquery.org/license
 */
x.fn.extend({uniqueId:(u=0,function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++u)})}),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&x(this).removeAttr("id")})}});
/*!
 * jQuery UI Widget 1.13.3
 * https://jqueryui.com
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license.
 * https://jquery.org/license
 */
var f,c=0,d=Array.prototype.hasOwnProperty,p=Array.prototype.slice;x.cleanData=(f=x.cleanData,function(t){for(var e,i,n=0;null!=(i=t[n]);n++)(e=x._data(i,"events"))&&e.remove&&x(i).triggerHandler("remove");f(t)}),x.widget=function(t,i,e){var n,o,s,r={},l=t.split(".")[0],a=l+"-"+(t=t.split(".")[1]);return e||(e=i,i=x.Widget),Array.isArray(e)&&(e=x.extend.apply(null,[{}].concat(e))),x.expr.pseudos[a.toLowerCase()]=function(t){return!!x.data(t,a)},x[l]=x[l]||{},n=x[l][t],o=x[l][t]=function(t,e){if(!this||!this._createWidget)return new o(t,e);arguments.length&&this._createWidget(t,e)},x.extend(o,n,{version:e.version,_proto:x.extend({},e),_childConstructors:[]}),(s=new i).options=x.widget.extend({},s.options),x.each(e,function(e,n){function o(){return i.prototype[e].apply(this,arguments)}function s(t){return i.prototype[e].apply(this,t)}r[e]="function"!=typeof n?n:function(){var t,e=this._super,i=this._superApply;return this._super=o,this._superApply=s,t=n.apply(this,arguments),this._super=e,this._superApply=i,t}}),o.prototype=x.widget.extend(s,{widgetEventPrefix:n&&s.widgetEventPrefix||t},r,{constructor:o,namespace:l,widgetName:t,widgetFullName:a}),n?(x.each(n._childConstructors,function(t,e){var i=e.prototype;x.widget(i.namespace+"."+i.widgetName,o,e._proto)}),delete n._childConstructors):i._childConstructors.push(o),x.widget.bridge(t,o),o},x.widget.extend=function(t){for(var e,i,n=p.call(arguments,1),o=0,s=n.length;o<s;o++)for(e in n[o])i=n[o][e],d.call(n[o],e)&&void 0!==i&&(x.isPlainObject(i)?t[e]=x.isPlainObject(t[e])?x.widget.extend({},t[e],i):x.widget.extend({},i):t[e]=i);return t},x.widget.bridge=function(s,e){var r=e.prototype.widgetFullName||s;x.fn[s]=function(i){var t="string"==typeof i,n=p.call(arguments,1),o=this;return t?this.length||"instance"!==i?this.each(function(){var t,e=x.data(this,r);return"instance"===i?(o=e,!1):e?"function"!=typeof e[i]||"_"===i.charAt(0)?x.error("no such method '"+i+"' for "+s+" widget instance"):(t=e[i].apply(e,n))!==e&&void 0!==t?(o=t&&t.jquery?o.pushStack(t.get()):t,!1):void 0:x.error("cannot call methods on "+s+" prior to initialization; attempted to call method '"+i+"'")}):o=void 0:(n.length&&(i=x.widget.extend.apply(null,[i].concat(n))),this.each(function(){var t=x.data(this,r);t?(t.option(i||{}),t._init&&t._init()):x.data(this,r,new e(i,this))})),o}},x.Widget=function(){},x.Widget._childConstructors=[],x.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:!1,create:null},_createWidget:function(t,e){e=x(e||this.defaultElement||this)[0],this.element=x(e),this.uuid=c++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=x(),this.hoverable=x(),this.focusable=x(),this.classesElementLookup={},e!==this&&(x.data(e,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===e&&this.destroy()}}),this.document=x(e.style?e.ownerDocument:e.document||e),this.window=x(this.document[0].defaultView||this.document[0].parentWindow)),this.options=x.widget.extend({},this.options,this._getCreateOptions(),t),this._create(),this.options.disabled&&this._setOptionDisabled(this.options.disabled),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:function(){return{}},_getCreateEventData:x.noop,_create:x.noop,_init:x.noop,destroy:function(){var i=this;this._destroy(),x.each(this.classesElementLookup,function(t,e){i._removeClass(e,t)}),this.element.off(this.eventNamespace).removeData(this.widgetFullName),this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),this.bindings.off(this.eventNamespace)},_destroy:x.noop,widget:function(){return this.element},option:function(t,e){var i,n,o,s=t;if(0===arguments.length)return x.widget.extend({},this.options);if("string"==typeof t)if(s={},t=(i=t.split(".")).shift(),i.length){for(n=s[t]=x.widget.extend({},this.options[t]),o=0;o<i.length-1;o++)n[i[o]]=n[i[o]]||{},n=n[i[o]];if(t=i.pop(),1===arguments.length)return void 0===n[t]?null:n[t];n[t]=e}else{if(1===arguments.length)return void 0===this.options[t]?null:this.options[t];s[t]=e}return this._setOptions(s),this},_setOptions:function(t){for(var e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return"classes"===t&&this._setOptionClasses(e),this.options[t]=e,"disabled"===t&&this._setOptionDisabled(e),this},_setOptionClasses:function(t){var e,i,n;for(e in t)n=this.classesElementLookup[e],t[e]!==this.options.classes[e]&&n&&n.length&&(i=x(n.get()),this._removeClass(n,e),i.addClass(this._classes({element:i,keys:e,classes:t,add:!0})))},_setOptionDisabled:function(t){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!t),t&&(this._removeClass(this.hoverable,null,"ui-state-hover"),this._removeClass(this.focusable,null,"ui-state-focus"))},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_classes:function(o){var s=[],r=this;function t(t,e){for(var i,n=0;n<t.length;n++)i=r.classesElementLookup[t[n]]||x(),i=o.add?(function(){var i=[];o.element.each(function(t,e){x.map(r.classesElementLookup,function(t){return t}).some(function(t){return t.is(e)})||i.push(e)}),r._on(x(i),{remove:"_untrackClassesElement"})}(),x(x.uniqueSort(i.get().concat(o.element.get())))):x(i.not(o.element).get()),r.classesElementLookup[t[n]]=i,s.push(t[n]),e&&o.classes[t[n]]&&s.push(o.classes[t[n]])}return(o=x.extend({element:this.element,classes:this.options.classes||{}},o)).keys&&t(o.keys.match(/\S+/g)||[],!0),o.extra&&t(o.extra.match(/\S+/g)||[]),s.join(" ")},_untrackClassesElement:function(i){var n=this;x.each(n.classesElementLookup,function(t,e){-1!==x.inArray(i.target,e)&&(n.classesElementLookup[t]=x(e.not(i.target).get()))}),this._off(x(i.target))},_removeClass:function(t,e,i){return this._toggleClass(t,e,i,!1)},_addClass:function(t,e,i){return this._toggleClass(t,e,i,!0)},_toggleClass:function(t,e,i,n){var o="string"==typeof t||null===t,e={extra:o?e:i,keys:o?t:e,element:o?this.element:t,add:n="boolean"==typeof n?n:i};return e.element.toggleClass(this._classes(e),n),this},_on:function(o,s,t){var r,l=this;"boolean"!=typeof o&&(t=s,s=o,o=!1),t?(s=r=x(s),this.bindings=this.bindings.add(s)):(t=s,s=this.element,r=this.widget()),x.each(t,function(t,e){function i(){if(o||!0!==l.options.disabled&&!x(this).hasClass("ui-state-disabled"))return("string"==typeof e?l[e]:e).apply(l,arguments)}"string"!=typeof e&&(i.guid=e.guid=e.guid||i.guid||x.guid++);var t=t.match(/^([\w:-]*)\s*(.*)$/),n=t[1]+l.eventNamespace,t=t[2];t?r.on(n,t,i):s.on(n,i)})},_off:function(t,e){e=(e||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.off(e),this.bindings=x(this.bindings.not(t).get()),this.focusable=x(this.focusable.not(t).get()),this.hoverable=x(this.hoverable.not(t).get())},_delay:function(t,e){var i=this;return setTimeout(function(){return("string"==typeof t?i[t]:t).apply(i,arguments)},e||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){this._addClass(x(t.currentTarget),null,"ui-state-hover")},mouseleave:function(t){this._removeClass(x(t.currentTarget),null,"ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){this._addClass(x(t.currentTarget),null,"ui-state-focus")},focusout:function(t){this._removeClass(x(t.currentTarget),null,"ui-state-focus")}})},_trigger:function(t,e,i){var n,o,s=this.options[t];if(i=i||{},(e=x.Event(e)).type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),e.target=this.element[0],o=e.originalEvent)for(n in o)n in e||(e[n]=o[n]);return this.element.trigger(e,i),!("function"==typeof s&&!1===s.apply(this.element[0],[e].concat(i))||e.isDefaultPrevented())}},x.each({show:"fadeIn",hide:"fadeOut"},function(s,r){x.Widget.prototype["_"+s]=function(e,t,i){var n,o=(t="string"==typeof t?{effect:t}:t)?!0!==t&&"number"!=typeof t&&t.effect||r:s;"number"==typeof(t=t||{})?t={duration:t}:!0===t&&(t={}),n=!x.isEmptyObject(t),t.complete=i,t.delay&&e.delay(t.delay),n&&x.effects&&x.effects.effect[o]?e[s](t):o!==s&&e[o]?e[o](t.duration,t.easing,i):e.queue(function(t){x(this)[s](),i&&i.call(e[0]),t()})}})});
/* https://demo2.wpopal.com/spaciaz/wp-content/plugins/elementor/assets/js/frontend.min.js?ver=3.33.4 */
"use strict";(self.webpackChunkelementorFrontend=self.webpackChunkelementorFrontend||[]).push([[313],{607:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=class Controls{getControlValue(e,t,n){let r;return r="object"==typeof e[t]&&n?e[t][n]:e[t],r}getResponsiveControlValue(e,t,n="",r=null){const o=r||elementorFrontend.getCurrentDeviceMode(),s=this.getControlValue(e,t,n);if("widescreen"===o){const r=this.getControlValue(e,`${t}_widescreen`,n);return r||0===r?r:s}const i=elementorFrontend.breakpoints.getActiveBreakpointsList({withDesktop:!0});let a=o,l=i.indexOf(o),d="";for(;l<=i.length;){if("desktop"===a){d=s;break}const r=`${t}_${a}`,o=this.getControlValue(e,r,n);if(o||0===o){d=o;break}l++,a=i[l]}return d}}},680:(e,t,n)=>{var r=n(4762),o=n(8120);e.exports=function(e,t,n){try{return r(o(Object.getOwnPropertyDescriptor(e,t)[n]))}catch(e){}}},735:(e,t,n)=>{var r=n(1704);e.exports=function(e){return r(e)||null===e}},1780:e=>{e.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},1953:(e,t,n)=>{var r=n(680),o=n(1704),s=n(3312),i=n(3852);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{(e=r(Object.prototype,"__proto__","set"))(n,[]),t=n instanceof Array}catch(e){}return function setPrototypeOf(n,r){return s(n),i(r),o(n)?(t?e(n,r):n.__proto__=r,n):n}}():void 0)},2126:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(3002);t.default=[()=>n.e(77).then(n.bind(n,2439)),()=>n.e(557).then(n.bind(n,628)),()=>n.e(557).then(n.bind(n,3031)),(0,r.createEditorHandler)(()=>n.e(396).then(n.bind(n,9956))),(0,r.createEditorHandler)(()=>n.e(220).then(n.bind(n,3243)))]},2429:(e,t,n)=>{var r=n(1483),o=n(1704),s=n(1953);e.exports=function(e,t,n){var i,a;return s&&r(i=t.constructor)&&i!==n&&o(a=i.prototype)&&a!==n.prototype&&s(e,a),e}},3002:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.createEditorHandler=function createEditorHandler(e){return()=>new Promise(t=>{elementorFrontend.isEditMode()&&e().then(t)})}},3126:(e,t,n)=>{var r=n(6784);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(8427));class VimeoLoader extends o.default{getApiURL(){return"https://player.vimeo.com/api/player.js"}getURLRegex(){return/^(?:https?:\/\/)?(?:www|player\.)?(?:vimeo\.com\/)?(?:video\/|external\/)?(\d+)([^.?&#"'>]?)/}isApiLoaded(){return window.Vimeo}getApiObject(){return Vimeo}getAutoplayURL(e){const t=e.match(/#t=[^&]*/);return e.replace(t[0],"")+t}}t.default=VimeoLoader},3582:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(6409);class _default extends elementorModules.ViewModule{getDefaultSettings(){return{selectors:{links:'a[href^="%23elementor-action"], a[href^="#elementor-action"]'}}}bindEvents(){elementorFrontend.elements.$document.on("click",this.getSettings("selectors.links"),this.runLinkAction.bind(this))}initActions(){this.actions={lightbox:async e=>{const t=await elementorFrontend.utils.lightbox;e.slideshow?t.openSlideshow(e.slideshow,e.url):(e.id&&(e.type="image"),t.showModal(e))}}}addAction(e,t){this.actions[e]=t}runAction(e,...t){e=decodeURI(e);const n=(e=decodeURIComponent(e)).match(/action=(.+?)&/);if(!n)return;const r=this.actions[n[1]];if(!r)return;let o={};const s=e.match(/settings=(.+)/);s&&(o=JSON.parse(atob(s[1]))),o.previousEvent=event,r(o,...t)}runLinkAction(e){e.preventDefault(),this.runAction(jQuery(e.currentTarget).attr("href"),e)}runHashAction(){if(!location.hash)return;const e=document.querySelector(`[data-e-action-hash="${location.hash}"], a[href*="${location.hash}"]`);e&&this.runAction(e.getAttribute("data-e-action-hash"))}createActionHash(e,t){return encodeURIComponent(`#elementor-action:action=${e}&settings=${btoa(JSON.stringify(t))}`)}onInit(){super.onInit(),this.initActions(),elementorFrontend.on("components:init",this.runHashAction.bind(this))}}t.default=_default},3678:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(3002);t.default=[()=>n.e(557).then(n.bind(n,628)),()=>n.e(557).then(n.bind(n,3031)),(0,r.createEditorHandler)(()=>n.e(396).then(n.bind(n,9956))),(0,r.createEditorHandler)(()=>n.e(768).then(n.bind(n,8847))),(0,r.createEditorHandler)(()=>n.e(768).then(n.bind(n,3323)))]},3852:(e,t,n)=>{var r=n(735),o=String,s=TypeError;e.exports=function(e){if(r(e))return e;throw new s("Can't set "+o(e)+" as a prototype")}},4047:(e,t,n)=>{var r=n(6784);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(2890));class _default extends elementorModules.ViewModule{constructor(...e){super(...e),this.documents={},this.initDocumentClasses(),this.attachDocumentsClasses()}getDefaultSettings(){return{selectors:{document:".elementor"}}}getDefaultElements(){const e=this.getSettings("selectors");return{$documents:jQuery(e.document)}}initDocumentClasses(){this.documentClasses={base:o.default},elementorFrontend.hooks.doAction("elementor/frontend/documents-manager/init-classes",this)}addDocumentClass(e,t){this.documentClasses[e]=t}attachDocumentsClasses(){this.elements.$documents.each((e,t)=>this.attachDocumentClass(jQuery(t)))}attachDocumentClass(e){const t=e.data(),n=t.elementorId,r=t.elementorType,o=this.documentClasses[r]||this.documentClasses.base;this.documents[n]=new o({$element:e,id:n})}}t.default=_default},4252:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(4846),n(6211);class LightboxManager extends elementorModules.ViewModule{static getLightbox(){const e=new Promise(e=>{n.e(216).then(n.t.bind(n,3942,23)).then(({default:t})=>e(new t))}),t=elementorFrontend.utils.assetsLoader.load("script","dialog"),r=elementorFrontend.utils.assetsLoader.load("style","dialog"),o=elementorFrontend.utils.assetsLoader.load("script","share-link"),s=elementorFrontend.utils.assetsLoader.load("style","swiper"),i=elementorFrontend.utils.assetsLoader.load("style","e-lightbox");return Promise.all([e,t,r,o,s,i]).then(()=>e)}getDefaultSettings(){return{selectors:{links:"a, [data-elementor-lightbox]",slideshow:"[data-elementor-lightbox-slideshow]"}}}getDefaultElements(){return{$links:jQuery(this.getSettings("selectors.links")),$slideshow:jQuery(this.getSettings("selectors.slideshow"))}}isLightboxLink(e){if("a"===e.tagName.toLowerCase()&&(e.hasAttribute("download")||!/^[^?]+\.(png|jpe?g|gif|svg|webp|avif)(\?.*)?$/i.test(e.href))&&!e.dataset.elementorLightboxVideo)return!1;const t=elementorFrontend.getKitSettings("global_image_lightbox"),n=e.dataset.elementorOpenLightbox;return"yes"===n||t&&"no"!==n}isLightboxSlideshow(){return 0!==this.elements.$slideshow.length}async onLinkClick(e){const t=e.currentTarget,n=jQuery(e.target),r=elementorFrontend.isEditMode(),o=r&&elementor.$previewContents.find("body").hasClass("elementor-editor__ui-state__color-picker"),s=!!n.closest(".elementor-edit-area").length;if(!this.isLightboxLink(t))return void(r&&s&&e.preventDefault());if(e.preventDefault(),r&&!elementor.getPreferences("lightbox_in_editor"))return;if(o)return;(await LightboxManager.getLightbox()).createLightbox(t)}bindEvents(){elementorFrontend.elements.$document.on("click",this.getSettings("selectors.links"),e=>this.onLinkClick(e))}onInit(...e){super.onInit(...e),elementorFrontend.isEditMode()||this.maybeActivateLightboxOnLink()}maybeActivateLightboxOnLink(){this.elements.$links.each((e,t)=>{if(this.isLightboxLink(t))return LightboxManager.getLightbox(),!1})}}t.default=LightboxManager},4799:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.Events=void 0;class Events{static dispatch(e,t,n=null,r=null){e=e instanceof jQuery?e[0]:e,r&&e.dispatchEvent(new CustomEvent(r,{detail:n})),e.dispatchEvent(new CustomEvent(t,{detail:n}))}}t.Events=Events;t.default=Events},4901:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(4846),n(9655);t.default=class SwiperHandler{constructor(e,t){return this.config=t,this.config.breakpoints&&(this.config=this.adjustConfig(t)),e instanceof jQuery&&(e=e[0]),e.closest(".elementor-widget-wrap")?.classList.add("e-swiper-container"),e.closest(".elementor-widget")?.classList.add("e-widget-swiper"),new Promise(t=>{"undefined"!=typeof Swiper?("function"==typeof Swiper&&void 0===window.Swiper&&(window.Swiper=Swiper),t(this.createSwiperInstance(e,this.config))):elementorFrontend.utils.assetsLoader.load("script","swiper").then(()=>t(this.createSwiperInstance(e,this.config)))})}createSwiperInstance(e,t){const n=window.Swiper;return n.prototype.adjustConfig=this.adjustConfig,new n(e,t)}adjustConfig(e){if(!e.handleElementorBreakpoints)return e;const t=elementorFrontend.config.responsive.activeBreakpoints,n=elementorFrontend.breakpoints.getBreakpointValues();return Object.keys(e.breakpoints).forEach(r=>{const o=parseInt(r);let s;if(o===t.mobile.value||o+1===t.mobile.value)s=0;else if(!t.widescreen||o!==t.widescreen.value&&o+1!==t.widescreen.value){const e=n.findIndex(e=>o===e||o+1===e);s=n[e-1]}else s=o;e.breakpoints[s]=e.breakpoints[r],e.breakpoints[r]={slidesPerView:e.slidesPerView,slidesPerGroup:e.slidesPerGroup?e.slidesPerGroup:1}}),e}}},4970:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class GlobalHandler extends elementorModules.frontend.handlers.Base{getWidgetType(){return"global"}animate(){const e=this.$element,t=this.getAnimation();if("none"===t)return void e.removeClass("elementor-invisible");const n=this.getElementSettings(),r=n._animation_delay||n.animation_delay||0;e.removeClass(t),this.currentAnimation&&e.removeClass(this.currentAnimation),this.currentAnimation=t,setTimeout(()=>{e.removeClass("elementor-invisible").addClass("animated "+t)},r)}getAnimation(){return this.getCurrentDeviceSetting("animation")||this.getCurrentDeviceSetting("_animation")}onInit(...e){if(super.onInit(...e),this.getAnimation()){const e=elementorModules.utils.Scroll.scrollObserver({callback:t=>{t.isInViewport&&(this.animate(),e.unobserve(this.$element[0]))}});e.observe(this.$element[0])}}onElementChange(e){/^_?animation/.test(e)&&this.animate()}}t.default=e=>{elementorFrontend.elementsHandler.addHandler(GlobalHandler,{$element:e})}},5073:(e,t,n)=>{var r=n(6784);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(8427));class YoutubeLoader extends o.default{getApiURL(){return"https://www.youtube.com/iframe_api"}getURLRegex(){return/^(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtu\.be\/|youtube\.com\/(?:(?:watch)?\?(?:.*&)?vi?=|(?:embed|v|vi|user|shorts)\/))([^?&"'>]+)/}isApiLoaded(){return window.YT&&YT.loaded}getApiObject(){return YT}}t.default=YoutubeLoader},5115:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;const matchUserAgent=e=>n.indexOf(e)>=0,n=navigator.userAgent,r=!!window.opr&&!!opr.addons||!!window.opera||matchUserAgent(" OPR/"),o=matchUserAgent("Firefox"),s=/^((?!chrome|android).)*safari/i.test(n)||/constructor/i.test(window.HTMLElement)||"[object SafariRemoteNotification]"===(!window.safari||"undefined"!=typeof safari&&safari.pushNotification).toString(),i=/Trident|MSIE/.test(n)&&!!document.documentMode,a=!i&&!!window.StyleMedia||matchUserAgent("Edg"),l=!!window.chrome&&matchUserAgent("Chrome")&&!(a||r),d=matchUserAgent("Chrome")&&!!window.CSS,c=matchUserAgent("AppleWebKit")&&!d,u={isTouchDevice:"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0,appleWebkit:c,blink:d,chrome:l,edge:a,firefox:o,ie:i,mac:matchUserAgent("Macintosh"),opera:r,safari:s,webkit:matchUserAgent("AppleWebKit")};t.default=u},5896:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(5724),n(4846),n(9655),n(4364);class Breakpoints extends elementorModules.Module{constructor(e){super(),this.responsiveConfig=e}getActiveBreakpointsList(e={}){e={largeToSmall:!1,withDesktop:!1,...e};const t=Object.keys(this.responsiveConfig.activeBreakpoints);if(e.withDesktop){const e=-1===t.indexOf("widescreen")?t.length:t.length-1;t.splice(e,0,"desktop")}return e.largeToSmall&&t.reverse(),t}getBreakpointValues(){const{activeBreakpoints:e}=this.responsiveConfig,t=[];return Object.values(e).forEach(e=>{t.push(e.value)}),t}getDesktopPreviousDeviceKey(){let e="";const{activeBreakpoints:t}=this.responsiveConfig,n=Object.keys(t),r=n.length;return e="min"===t[n[r-1]].direction?n[r-2]:n[r-1],e}getDesktopMinPoint(){const{activeBreakpoints:e}=this.responsiveConfig;return e[this.getDesktopPreviousDeviceKey()].value+1}getDeviceMinBreakpoint(e){if("desktop"===e)return this.getDesktopMinPoint();const{activeBreakpoints:t}=this.responsiveConfig,n=Object.keys(t);let r;if(n[0]===e)r=320;else if("widescreen"===e)r=t[e]?t[e].value:this.responsiveConfig.breakpoints.widescreen;else{const o=n.indexOf(e);r=t[n[o-1]].value+1}return r}getActiveMatchRegex(){return new RegExp(this.getActiveBreakpointsList().map(e=>"_"+e).join("|")+"$")}}t.default=Breakpoints},5956:(e,t,n)=>{n(5724);e.exports=function(){var e,t=Array.prototype.slice,n={actions:{},filters:{}};function _removeHook(e,t,r,o){var s,i,a;if(n[e][t])if(r)if(s=n[e][t],o)for(a=s.length;a--;)(i=s[a]).callback===r&&i.context===o&&s.splice(a,1);else for(a=s.length;a--;)s[a].callback===r&&s.splice(a,1);else n[e][t]=[]}function _addHook(e,t,r,o,s){var i={callback:r,priority:o,context:s},a=n[e][t];if(a){var l=!1;if(jQuery.each(a,function(){if(this.callback===r)return l=!0,!1}),l)return;a.push(i),a=function _hookInsertSort(e){for(var t,n,r,o=1,s=e.length;o<s;o++){for(t=e[o],n=o;(r=e[n-1])&&r.priority>t.priority;)e[n]=e[n-1],--n;e[n]=t}return e}(a)}else a=[i];n[e][t]=a}function _runHook(e,t,r){var o,s,i=n[e][t];if(!i)return"filters"===e&&r[0];if(s=i.length,"filters"===e)for(o=0;o<s;o++)r[0]=i[o].callback.apply(i[o].context,r);else for(o=0;o<s;o++)i[o].callback.apply(i[o].context,r);return"filters"!==e||r[0]}return e={removeFilter:function removeFilter(t,n){return"string"==typeof t&&_removeHook("filters",t,n),e},applyFilters:function applyFilters(){var n=t.call(arguments),r=n.shift();return"string"==typeof r?_runHook("filters",r,n):e},addFilter:function addFilter(t,n,r,o){return"string"==typeof t&&"function"==typeof n&&_addHook("filters",t,n,r=parseInt(r||10,10),o),e},removeAction:function removeAction(t,n){return"string"==typeof t&&_removeHook("actions",t,n),e},doAction:function doAction(){var n=t.call(arguments),r=n.shift();return"string"==typeof r&&_runHook("actions",r,n),e},addAction:function addAction(t,n,r,o){return"string"==typeof t&&"function"==typeof n&&_addHook("actions",t,n,r=parseInt(r||10,10),o),e}},e}},6261:(e,t,n)=>{var r=n(6145),o=String;e.exports=function(e){if("Symbol"===r(e))throw new TypeError("Cannot convert a Symbol value to a string");return o(e)}},6409:(e,t,n)=>{var r=n(8612),o=n(5578),s=n(1409),i=n(7738),a=n(5835).f,l=n(5755),d=n(6021),c=n(2429),u=n(7969),h=n(1780),m=n(8223),f=n(382),g=n(9557),p="DOMException",v=s("Error"),y=s(p),b=function DOMException(){d(this,w);var e=arguments.length,t=u(e<1?void 0:arguments[0]),n=u(e<2?void 0:arguments[1],"Error"),r=new y(t,n),o=new v(t);return o.name=p,a(r,"stack",i(1,m(o.stack,1))),c(r,this,b),r},w=b.prototype=y.prototype,_="stack"in new v(p),E="stack"in new y(1,2),k=y&&f&&Object.getOwnPropertyDescriptor(o,p),A=!(!k||k.writable&&k.configurable),S=_&&!A&&!E;r({global:!0,constructor:!0,forced:g||S},{DOMException:S?b:y});var M=s(p),C=M.prototype;if(C.constructor!==M)for(var L in g||a(C,"constructor",i(1,M)),h)if(l(h,L)){var D=h[L],R=D.s;l(M,R)||a(M,R,i(6,D.c))}},7248:(e,t,n)=>{var r=n(6784);n(4846),n(9655);var o=r(n(4970)),s=r(n(3678)),i=r(n(2126)),a=r(n(8891));e.exports=function(e){const t={};this.elementsHandlers={"accordion.default":()=>n.e(131).then(n.bind(n,9675)),"alert.default":()=>n.e(707).then(n.bind(n,7243)),"counter.default":()=>n.e(457).then(n.bind(n,3905)),"progress.default":()=>n.e(234).then(n.bind(n,9754)),"tabs.default":()=>n.e(575).then(n.bind(n,3485)),"toggle.default":()=>n.e(775).then(n.bind(n,3049)),"video.default":()=>n.e(180).then(n.bind(n,3774)),"image-carousel.default":()=>n.e(177).then(n.bind(n,4315)),"text-editor.default":()=>n.e(212).then(n.bind(n,5362)),"wp-widget-media_audio.default":()=>n.e(211).then(n.bind(n,2793)),container:s.default,section:i.default,column:a.default},elementorFrontendConfig.experimentalFeatures["nested-elements"]&&(this.elementsHandlers["nested-tabs.default"]=()=>n.e(215).then(n.bind(n,4328))),elementorFrontendConfig.experimentalFeatures["nested-elements"]&&(this.elementsHandlers["nested-accordion.default"]=()=>n.e(915).then(n.bind(n,8216))),elementorFrontendConfig.experimentalFeatures.container&&(this.elementsHandlers["contact-buttons.default"]=()=>n.e(1).then(n.bind(n,6285)),this.elementsHandlers["floating-bars-var-1.default"]=()=>n.e(336).then(n.bind(n,5199)));const addElementsHandlers=()=>{e.each(this.elementsHandlers,(e,t)=>{const n=e.split(".");e=n[0];const r=n[1]||null;this.attachHandler(e,t,r)})},isClassHandler=e=>e.prototype?.getUniqueHandlerID,addHandlerWithHook=(e,t,n="default")=>{const r=e+(n=n?"."+n:"");elementorFrontend.hooks.addAction(`frontend/element_ready/${r}`,e=>{if(isClassHandler(t))this.addHandler(t,{$element:e,elementName:r},!0);else{const n=t();if(!n)return;n instanceof Promise?n.then(({default:t})=>{this.addHandler(t,{$element:e,elementName:r},!0)}):this.addHandler(n,{$element:e,elementName:r},!0)}})};this.addHandler=function(n,r){const o=r.$element.data("model-cid");let s;if(o){s=n.prototype.getConstructorID(),t[o]||(t[o]={});const e=t[o][s];e&&e.onDestroy()}const i=new n(r);elementorFrontend.hooks.doAction(`frontend/element_handler_ready/${r.elementName}`,r.$element,e),o&&(t[o][s]=i)},this.attachHandler=(e,t,n)=>{Array.isArray(t)||(t=[t]),t.forEach(t=>addHandlerWithHook(e,t,n))},this.getHandler=function(e){const t=this.elementsHandlers[e];return isClassHandler(t)?t:new Promise(e=>{t().then(({default:t})=>{e(t)})})},this.getHandlers=function(e){return elementorDevTools.deprecation.deprecated("getHandlers","3.1.0","elementorFrontend.elementsHandler.getHandler"),e?this.getHandler(e):this.elementsHandlers},this.runReadyTrigger=function(t){const n=!!t.closest('[data-delay-child-handlers="true"]')&&0!==t.closest('[data-delay-child-handlers="true"]').length;if(elementorFrontend.config.is_static||n)return;const r=jQuery(t),o=r.attr("data-element_type");if(o&&(elementorFrontend.hooks.doAction("frontend/element_ready/global",r,e),elementorFrontend.hooks.doAction(`frontend/element_ready/${o}`,r,e),"widget"===o)){const t=r.attr("data-widget_type");elementorFrontend.hooks.doAction(`frontend/element_ready/${t}`,r,e)}},this.init=()=>{elementorFrontend.hooks.addAction("frontend/element_ready/global",o.default),addElementsHandlers()}}},7603:(e,t,n)=>{var r=n(6784);n(4846),n(6211),n(9655),n(8309);var o=r(n(4047)),s=r(n(8767)),i=r(n(5115)),a=r(n(5073)),l=r(n(3126)),d=r(n(8427)),c=r(n(3582)),u=r(n(4901)),h=r(n(4252)),m=r(n(8422)),f=r(n(5896)),g=r(n(4799)),p=r(n(7842)),v=r(n(607)),y=r(n(9807)),b=n(7672);const w=n(5956),_=n(7248);class Frontend extends elementorModules.ViewModule{constructor(...e){super(...e),this.config=elementorFrontendConfig,this.config.legacyMode={get elementWrappers(){return elementorFrontend.isEditMode()&&window.top.elementorDevTools.deprecation.deprecated("elementorFrontend.config.legacyMode.elementWrappers","3.1.0"),!1}},this.populateActiveBreakpointsConfig()}get Module(){return this.isEditMode()&&parent.elementorDevTools.deprecation.deprecated("elementorFrontend.Module","2.5.0","elementorModules.frontend.handlers.Base"),elementorModules.frontend.handlers.Base}getDefaultSettings(){return{selectors:{elementor:".elementor",adminBar:"#wpadminbar"}}}getDefaultElements(){const e={window,$window:jQuery(window),$document:jQuery(document),$head:jQuery(document.head),$body:jQuery(document.body),$deviceMode:jQuery("<span>",{id:"elementor-device-mode",class:"elementor-screen-only"})};return e.$body.append(e.$deviceMode),e}bindEvents(){this.elements.$window.on("resize",()=>this.setDeviceModeData())}getElements(e){return this.getItems(this.elements,e)}getPageSettings(e){const t=this.isEditMode()?elementor.settings.page.model.attributes:this.config.settings.page;return this.getItems(t,e)}getGeneralSettings(e){return this.isEditMode()&&parent.elementorDevTools.deprecation.deprecated("getGeneralSettings()","3.0.0","getKitSettings() and remove the `elementor_` prefix"),this.getKitSettings(`elementor_${e}`)}getKitSettings(e){return this.getItems(this.config.kit,e)}getCurrentDeviceMode(){return getComputedStyle(this.elements.$deviceMode[0],":after").content.replace(/"/g,"")}getDeviceSetting(e,t,n){if("widescreen"===e)return this.getWidescreenSetting(t,n);const r=elementorFrontend.breakpoints.getActiveBreakpointsList({largeToSmall:!0,withDesktop:!0});let o=r.indexOf(e);for(;o>0;){const e=t[n+"_"+r[o]];if(e||0===e)return e;o--}return t[n]}getWidescreenSetting(e,t){const n=t+"_widescreen";let r;return r=e[n]?e[n]:e[t],r}getCurrentDeviceSetting(e,t){return this.getDeviceSetting(elementorFrontend.getCurrentDeviceMode(),e,t)}isEditMode(){return this.config.environmentMode.edit}isWPPreviewMode(){return this.config.environmentMode.wpPreview}initDialogsManager(){let e;this.getDialogsManager=()=>(e||(e=new DialogsManager.Instance),e)}initOnReadyComponents(){this.utils={youtube:new a.default,vimeo:new l.default,baseVideoLoader:new d.default,get lightbox(){return h.default.getLightbox()},urlActions:new c.default,swiper:u.default,environment:i.default,assetsLoader:new m.default,escapeHTML:b.escapeHTML,events:g.default,controls:new v.default,anchor_scroll_margin:new y.default},this.modules={StretchElement:elementorModules.frontend.tools.StretchElement,Masonry:elementorModules.utils.Masonry},this.elementsHandler.init(),this.isEditMode()?elementor.once("document:loaded",()=>this.onDocumentLoaded()):this.onDocumentLoaded()}initOnReadyElements(){this.elements.$wpAdminBar=this.elements.$document.find(this.getSettings("selectors.adminBar"))}addUserAgentClasses(){for(const[e,t]of Object.entries(i.default))t&&this.elements.$body.addClass("e--ua-"+e)}setDeviceModeData(){this.elements.$body.attr("data-elementor-device-mode",this.getCurrentDeviceMode())}addListenerOnce(e,t,n,r){if(r||(r=this.elements.$window),this.isEditMode())if(this.removeListeners(e,t,r),r instanceof jQuery){const o=t+"."+e;r.on(o,n)}else r.on(t,n,e);else r.on(t,n)}removeListeners(e,t,n,r){if(r||(r=this.elements.$window),r instanceof jQuery){const o=t+"."+e;r.off(o,n)}else r.off(t,n,e)}debounce(e,t){let n;return function(){const r=this,o=arguments,s=!n;clearTimeout(n),n=setTimeout(()=>{n=null,e.apply(r,o)},t),s&&e.apply(r,o)}}muteMigrationTraces(){jQuery.migrateMute=!0,jQuery.migrateTrace=!1}initModules(){const e={shapes:p.default};elementorFrontend.trigger("elementor/modules/init:before"),elementorFrontend.trigger("elementor/modules/init/before"),Object.entries(e).forEach(([e,t])=>{this.modulesHandlers[e]=new t})}populateActiveBreakpointsConfig(){this.config.responsive.activeBreakpoints={},Object.entries(this.config.responsive.breakpoints).forEach(([e,t])=>{t.is_enabled&&(this.config.responsive.activeBreakpoints[e]=t)})}init(){this.hooks=new w,this.breakpoints=new f.default(this.config.responsive),this.storage=new s.default,this.elementsHandler=new _(jQuery),this.modulesHandlers={},this.addUserAgentClasses(),this.setDeviceModeData(),this.initDialogsManager(),this.isEditMode()&&this.muteMigrationTraces(),g.default.dispatch(this.elements.$window,"elementor/frontend/init"),this.initModules(),this.initOnReadyElements(),this.initOnReadyComponents()}onDocumentLoaded(){this.documentsManager=new o.default,this.trigger("components:init"),new h.default}}window.elementorFrontend=new Frontend,elementorFrontend.isEditMode()||jQuery(()=>elementorFrontend.init())},7672:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.isScrollSnapActive=t.escapeHTML=void 0;t.escapeHTML=e=>{const t={"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"};return e.replace(/[&<>'"]/g,e=>t[e]||e)};t.isScrollSnapActive=()=>"yes"===(elementorFrontend.isEditMode()?elementor.settings.page.model.attributes?.scroll_snap:elementorFrontend.config.settings.page?.scroll_snap)},7842:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class _default extends elementorModules.Module{constructor(){super(),elementorFrontend.elementsHandler.attachHandler("text-path",()=>n.e(30).then(n.bind(n,241)))}}t.default=_default},7969:(e,t,n)=>{var r=n(6261);e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:r(e)}},8223:(e,t,n)=>{var r=n(4762),o=Error,s=r("".replace),i=String(new o("zxcasd").stack),a=/\n\s*at [^:]*:[^\n]*/,l=a.test(i);e.exports=function(e,t){if(l&&"string"==typeof e&&!o.prepareStackTrace)for(;t--;)e=s(e,a,"");return e}},8309:(e,t,n)=>{n.p=elementorFrontendConfig.urls.assets+"js/"},8422:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class AssetsLoader{getScriptElement(e){const t=document.createElement("script");return t.src=e,t}getStyleElement(e){const t=document.createElement("link");return t.rel="stylesheet",t.href=e,t}load(e,t){const n=AssetsLoader.assets[e][t];return n.loader||(n.loader=this.isAssetLoaded(n,e)?Promise.resolve(!0):this.loadAsset(n,e)),n.loader}isAssetLoaded(e,t){const n="script"===t?`script[src="${e.src}"]`:`link[href="${e.src}"]`;return!!document.querySelectorAll(n)?.length}loadAsset(e,t){return new Promise(n=>{const r="style"===t?this.getStyleElement(e.src):this.getScriptElement(e.src);r.onload=()=>n(!0),this.appendAsset(e,r)})}appendAsset(e,t){const n=document.querySelector(e.before);if(n)return void n.insertAdjacentElement("beforebegin",t);const r="head"===e.parent?e.parent:"body";document[r].appendChild(t)}}t.default=AssetsLoader;const n=elementorFrontendConfig.urls.assets,r=elementorFrontendConfig.environmentMode.isScriptDebug?"":".min",o=elementorFrontendConfig.version;AssetsLoader.assets={script:{dialog:{src:`${n}lib/dialog/dialog${r}.js?ver=4.9.3`},"share-link":{src:`${n}lib/share-link/share-link${r}.js?ver=${o}`},swiper:{src:`${n}lib/swiper/v8/swiper${r}.js?ver=8.4.5`}},style:{swiper:{src:`${n}lib/swiper/v8/css/swiper${r}.css?ver=8.4.5`,parent:"head"},"e-lightbox":{src:elementorFrontendConfig?.responsive?.hasCustomBreakpoints?`${elementorFrontendConfig.urls.uploadUrl}/elementor/css/custom-lightbox.min.css?ver=${o}`:`${n}css/conditionals/lightbox${r}.css?ver=${o}`},dialog:{src:`${n}css/conditionals/dialog${r}.css?ver=${o}`,parent:"head",before:"#elementor-frontend-css"}}}},8427:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class BaseLoader extends elementorModules.ViewModule{getDefaultSettings(){return{isInserted:!1,selectors:{firstScript:"script:first"}}}getDefaultElements(){return{$firstScript:jQuery(this.getSettings("selectors.firstScript"))}}insertAPI(){this.elements.$firstScript.before(jQuery("<script>",{src:this.getApiURL()})),this.setSettings("isInserted",!0)}getVideoIDFromURL(e){const t=e.match(this.getURLRegex());return t&&t[1]}onApiReady(e){this.getSettings("isInserted")||this.insertAPI(),this.isApiLoaded()?e(this.getApiObject()):setTimeout(()=>{this.onApiReady(e)},350)}getAutoplayURL(e){return e.replace("&autoplay=0","")+"&autoplay=1"}}t.default=BaseLoader},8767:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(4846),n(9655);class _default extends elementorModules.Module{get(e,t){let n;t=t||{};try{n=t.session?sessionStorage:localStorage}catch(t){return e?void 0:{}}let r=n.getItem("elementor");r=r?JSON.parse(r):{},r.__expiration||(r.__expiration={});const o=r.__expiration;let s=[];e?o[e]&&(s=[e]):s=Object.keys(o);let i=!1;return s.forEach(e=>{new Date(o[e])<new Date&&(delete r[e],delete o[e],i=!0)}),i&&this.save(r,t.session),e?r[e]:r}set(e,t,n){n=n||{};const r=this.get(null,n);if(r[e]=t,n.lifetimeInSeconds){const t=new Date;t.setTime(t.getTime()+1e3*n.lifetimeInSeconds),r.__expiration[e]=t.getTime()}this.save(r,n.session)}save(e,t){let n;try{n=t?sessionStorage:localStorage}catch(e){return}n.setItem("elementor",JSON.stringify(e))}}t.default=_default},8891:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=[()=>n.e(557).then(n.bind(n,628))]},9807:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(5724),n(4846),n(7458),n(9655);class _default extends elementorModules.ViewModule{getDefaultSettings(){return{selectors:{links:'.elementor-element a[href*="#"]',stickyElements:".elementor-element.elementor-sticky"}}}onInit(){this.observeStickyElements(()=>{this.initializeStickyAndAnchorTracking()})}observeStickyElements(e){new MutationObserver(t=>{for(const n of t)("childList"===n.type||"attributes"===n.type&&n.target.classList.contains("elementor-sticky"))&&e()}).observe(document.body,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["class","style"]})}initializeStickyAndAnchorTracking(){const e=this.getAllAnchorLinks(),t=this.getAllStickyElements(),n=[];!t.length>0&&!e.length>0||(this.trackStickyElements(t,n),this.trackAnchorLinks(e,n),this.organizeStickyAndAnchors(n))}trackAnchorLinks(e,t){e.forEach(e=>{const n=this.getAnchorTarget(e),r=this.getScrollPosition(n);t.push({element:n,type:"anchor",scrollPosition:r})})}trackStickyElements(e,t){e.forEach(e=>{const n=this.getElementSettings(e);if(!n||!n.sticky_anchor_link_offset)return;const{sticky_anchor_link_offset:r}=n;if(0===r)return;const o=this.getScrollPosition(e);t.push({scrollMarginTop:r,type:"sticky",scrollPosition:o})})}organizeStickyAndAnchors(e){const t=this.filterAndSortElementsByType(e,"sticky"),n=this.filterAndSortElementsByType(e,"anchor");t.forEach((e,r)=>{this.defineCurrentStickyRange(e,r,t,n)})}defineCurrentStickyRange(e,t,n,r){const o=t+1<n.length?n[t+1].scrollPosition:1/0;e.anchor=r.filter(t=>{const n=t.scrollPosition>e.scrollPosition&&t.scrollPosition<o;return n&&(t.element.style.scrollMarginTop=`${e.scrollMarginTop}px`),n})}getScrollPosition(e){let t=0;for(;e;)t+=e.offsetTop,e=e.offsetParent;return t}getAllStickyElements(){const e=document.querySelectorAll(this.getSettings("selectors.stickyElements"));return Array.from(e).filter((e,t,n)=>t===n.findIndex(t=>t.getAttribute("data-id")===e.getAttribute("data-id")))}getAllAnchorLinks(){const e=document.querySelectorAll(this.getSettings("selectors.links"));return Array.from(e).filter((e,t,n)=>t===n.findIndex(t=>t.getAttribute("href")===e.getAttribute("href")))}filterAndSortElementsByType(e,t){return e.filter(e=>t===e.type).sort((e,t)=>e.scrollPosition-t.scrollPosition)}isValidSelector(e){return/^#[A-Za-z_][\w-]*$/.test(e)}getAnchorTarget(e){const t=e?.hash;return this.isValidSelector(t)?document.querySelector(t):null}getElementSettings(e){return JSON.parse(e.getAttribute("data-settings"))}}t.default=_default}},e=>{e.O(0,[941],()=>{return t=7603,e(e.s=t);var t});e.O()}]);
/* https://demo2.wpopal.com/spaciaz/wp-includes/js/underscore.min.js?ver=1.13.7 */
/*! This file is auto-generated */
!function(n,t){var r,e;"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define("underscore",t):(n="undefined"!=typeof globalThis?globalThis:n||self,r=n._,(e=n._=t()).noConflict=function(){return n._=r,e})}(this,function(){var n="1.13.7",t="object"==typeof self&&self.self===self&&self||"object"==typeof global&&global.global===global&&global||Function("return this")()||{},e=Array.prototype,V=Object.prototype,F="undefined"!=typeof Symbol?Symbol.prototype:null,P=e.push,f=e.slice,s=V.toString,q=V.hasOwnProperty,r="undefined"!=typeof ArrayBuffer,u="undefined"!=typeof DataView,U=Array.isArray,W=Object.keys,z=Object.create,L=r&&ArrayBuffer.isView,$=isNaN,C=isFinite,K=!{toString:null}.propertyIsEnumerable("toString"),J=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],G=Math.pow(2,53)-1;function l(u,o){return o=null==o?u.length-1:+o,function(){for(var n=Math.max(arguments.length-o,0),t=Array(n),r=0;r<n;r++)t[r]=arguments[r+o];switch(o){case 0:return u.call(this,t);case 1:return u.call(this,arguments[0],t);case 2:return u.call(this,arguments[0],arguments[1],t)}for(var e=Array(o+1),r=0;r<o;r++)e[r]=arguments[r];return e[o]=t,u.apply(this,e)}}function o(n){var t=typeof n;return"function"==t||"object"==t&&!!n}function H(n){return void 0===n}function Q(n){return!0===n||!1===n||"[object Boolean]"===s.call(n)}function i(n){var t="[object "+n+"]";return function(n){return s.call(n)===t}}var X=i("String"),Y=i("Number"),Z=i("Date"),nn=i("RegExp"),tn=i("Error"),rn=i("Symbol"),en=i("ArrayBuffer"),a=i("Function"),t=t.document&&t.document.childNodes,p=a="function"!=typeof/./&&"object"!=typeof Int8Array&&"function"!=typeof t?function(n){return"function"==typeof n||!1}:a,t=i("Object"),un=u&&(!/\[native code\]/.test(String(DataView))||t(new DataView(new ArrayBuffer(8)))),a="undefined"!=typeof Map&&t(new Map),u=i("DataView");var h=un?function(n){return null!=n&&p(n.getInt8)&&en(n.buffer)}:u,v=U||i("Array");function y(n,t){return null!=n&&q.call(n,t)}var on=i("Arguments"),an=(!function(){on(arguments)||(on=function(n){return y(n,"callee")})}(),on);function fn(n){return Y(n)&&$(n)}function cn(n){return function(){return n}}function ln(t){return function(n){n=t(n);return"number"==typeof n&&0<=n&&n<=G}}function sn(t){return function(n){return null==n?void 0:n[t]}}var d=sn("byteLength"),pn=ln(d),hn=/\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/;var vn=r?function(n){return L?L(n)&&!h(n):pn(n)&&hn.test(s.call(n))}:cn(!1),g=sn("length");function yn(n,t){t=function(t){for(var r={},n=t.length,e=0;e<n;++e)r[t[e]]=!0;return{contains:function(n){return!0===r[n]},push:function(n){return r[n]=!0,t.push(n)}}}(t);var r=J.length,e=n.constructor,u=p(e)&&e.prototype||V,o="constructor";for(y(n,o)&&!t.contains(o)&&t.push(o);r--;)(o=J[r])in n&&n[o]!==u[o]&&!t.contains(o)&&t.push(o)}function b(n){if(!o(n))return[];if(W)return W(n);var t,r=[];for(t in n)y(n,t)&&r.push(t);return K&&yn(n,r),r}function dn(n,t){var r=b(t),e=r.length;if(null==n)return!e;for(var u=Object(n),o=0;o<e;o++){var i=r[o];if(t[i]!==u[i]||!(i in u))return!1}return!0}function m(n){return n instanceof m?n:this instanceof m?void(this._wrapped=n):new m(n)}function gn(n){return new Uint8Array(n.buffer||n,n.byteOffset||0,d(n))}m.VERSION=n,m.prototype.valueOf=m.prototype.toJSON=m.prototype.value=function(){return this._wrapped},m.prototype.toString=function(){return String(this._wrapped)};var bn="[object DataView]";function mn(n,t,r,e){var u;return n===t?0!==n||1/n==1/t:null!=n&&null!=t&&(n!=n?t!=t:("function"==(u=typeof n)||"object"==u||"object"==typeof t)&&function n(t,r,e,u){t instanceof m&&(t=t._wrapped);r instanceof m&&(r=r._wrapped);var o=s.call(t);if(o!==s.call(r))return!1;if(un&&"[object Object]"==o&&h(t)){if(!h(r))return!1;o=bn}switch(o){case"[object RegExp]":case"[object String]":return""+t==""+r;case"[object Number]":return+t!=+t?+r!=+r:0==+t?1/+t==1/r:+t==+r;case"[object Date]":case"[object Boolean]":return+t==+r;case"[object Symbol]":return F.valueOf.call(t)===F.valueOf.call(r);case"[object ArrayBuffer]":case bn:return n(gn(t),gn(r),e,u)}o="[object Array]"===o;if(!o&&vn(t)){var i=d(t);if(i!==d(r))return!1;if(t.buffer===r.buffer&&t.byteOffset===r.byteOffset)return!0;o=!0}if(!o){if("object"!=typeof t||"object"!=typeof r)return!1;var i=t.constructor,a=r.constructor;if(i!==a&&!(p(i)&&i instanceof i&&p(a)&&a instanceof a)&&"constructor"in t&&"constructor"in r)return!1}e=e||[];u=u||[];var f=e.length;for(;f--;)if(e[f]===t)return u[f]===r;e.push(t);u.push(r);if(o){if((f=t.length)!==r.length)return!1;for(;f--;)if(!mn(t[f],r[f],e,u))return!1}else{var c,l=b(t);if(f=l.length,b(r).length!==f)return!1;for(;f--;)if(c=l[f],!y(r,c)||!mn(t[c],r[c],e,u))return!1}e.pop();u.pop();return!0}(n,t,r,e))}function c(n){if(!o(n))return[];var t,r=[];for(t in n)r.push(t);return K&&yn(n,r),r}function jn(e){var u=g(e);return function(n){if(null==n)return!1;var t=c(n);if(g(t))return!1;for(var r=0;r<u;r++)if(!p(n[e[r]]))return!1;return e!==_n||!p(n[wn])}}var wn="forEach",t=["clear","delete"],u=["get","has","set"],U=t.concat(wn,u),_n=t.concat(u),r=["add"].concat(t,wn,"has"),u=a?jn(U):i("Map"),t=a?jn(_n):i("WeakMap"),U=a?jn(r):i("Set"),a=i("WeakSet");function j(n){for(var t=b(n),r=t.length,e=Array(r),u=0;u<r;u++)e[u]=n[t[u]];return e}function An(n){for(var t={},r=b(n),e=0,u=r.length;e<u;e++)t[n[r[e]]]=r[e];return t}function xn(n){var t,r=[];for(t in n)p(n[t])&&r.push(t);return r.sort()}function Sn(f,c){return function(n){var t=arguments.length;if(c&&(n=Object(n)),!(t<2||null==n))for(var r=1;r<t;r++)for(var e=arguments[r],u=f(e),o=u.length,i=0;i<o;i++){var a=u[i];c&&void 0!==n[a]||(n[a]=e[a])}return n}}var On=Sn(c),w=Sn(b),Mn=Sn(c,!0);function En(n){var t;return o(n)?z?z(n):((t=function(){}).prototype=n,n=new t,t.prototype=null,n):{}}function Bn(n){return v(n)?n:[n]}function _(n){return m.toPath(n)}function Nn(n,t){for(var r=t.length,e=0;e<r;e++){if(null==n)return;n=n[t[e]]}return r?n:void 0}function In(n,t,r){n=Nn(n,_(t));return H(n)?r:n}function Tn(n){return n}function A(t){return t=w({},t),function(n){return dn(n,t)}}function kn(t){return t=_(t),function(n){return Nn(n,t)}}function x(u,o,n){if(void 0===o)return u;switch(null==n?3:n){case 1:return function(n){return u.call(o,n)};case 3:return function(n,t,r){return u.call(o,n,t,r)};case 4:return function(n,t,r,e){return u.call(o,n,t,r,e)}}return function(){return u.apply(o,arguments)}}function Dn(n,t,r){return null==n?Tn:p(n)?x(n,t,r):(o(n)&&!v(n)?A:kn)(n)}function Rn(n,t){return Dn(n,t,1/0)}function S(n,t,r){return m.iteratee!==Rn?m.iteratee(n,t):Dn(n,t,r)}function Vn(){}function Fn(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))}m.toPath=Bn,m.iteratee=Rn;var O=Date.now||function(){return(new Date).getTime()};function Pn(t){function r(n){return t[n]}var n="(?:"+b(t).join("|")+")",e=RegExp(n),u=RegExp(n,"g");return function(n){return e.test(n=null==n?"":""+n)?n.replace(u,r):n}}var r={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},qn=Pn(r),r=Pn(An(r)),Un=m.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g},Wn=/(.)^/,zn={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},Ln=/\\|'|\r|\n|\u2028|\u2029/g;function $n(n){return"\\"+zn[n]}var Cn=/^\s*(\w|\$)+\s*$/;var Kn=0;function Jn(n,t,r,e,u){return e instanceof t?(e=En(n.prototype),o(t=n.apply(e,u))?t:e):n.apply(r,u)}var M=l(function(u,o){function i(){for(var n=0,t=o.length,r=Array(t),e=0;e<t;e++)r[e]=o[e]===a?arguments[n++]:o[e];for(;n<arguments.length;)r.push(arguments[n++]);return Jn(u,i,this,this,r)}var a=M.placeholder;return i}),Gn=(M.placeholder=m,l(function(t,r,e){var u;if(p(t))return u=l(function(n){return Jn(t,u,r,this,e.concat(n))});throw new TypeError("Bind must be called on a function")})),E=ln(g);function B(n,t,r,e){if(e=e||[],t||0===t){if(t<=0)return e.concat(n)}else t=1/0;for(var u=e.length,o=0,i=g(n);o<i;o++){var a=n[o];if(E(a)&&(v(a)||an(a)))if(1<t)B(a,t-1,r,e),u=e.length;else for(var f=0,c=a.length;f<c;)e[u++]=a[f++];else r||(e[u++]=a)}return e}var Hn=l(function(n,t){var r=(t=B(t,!1,!1)).length;if(r<1)throw new Error("bindAll must be passed function names");for(;r--;){var e=t[r];n[e]=Gn(n[e],n)}return n});var Qn=l(function(n,t,r){return setTimeout(function(){return n.apply(null,r)},t)}),Xn=M(Qn,m,1);function Yn(n){return function(){return!n.apply(this,arguments)}}function Zn(n,t){var r;return function(){return 0<--n&&(r=t.apply(this,arguments)),n<=1&&(t=null),r}}var nt=M(Zn,2);function tt(n,t,r){t=S(t,r);for(var e,u=b(n),o=0,i=u.length;o<i;o++)if(t(n[e=u[o]],e,n))return e}function rt(o){return function(n,t,r){t=S(t,r);for(var e=g(n),u=0<o?0:e-1;0<=u&&u<e;u+=o)if(t(n[u],u,n))return u;return-1}}var et=rt(1),ut=rt(-1);function ot(n,t,r,e){for(var u=(r=S(r,e,1))(t),o=0,i=g(n);o<i;){var a=Math.floor((o+i)/2);r(n[a])<u?o=a+1:i=a}return o}function it(o,i,a){return function(n,t,r){var e=0,u=g(n);if("number"==typeof r)0<o?e=0<=r?r:Math.max(r+u,e):u=0<=r?Math.min(r+1,u):r+u+1;else if(a&&r&&u)return n[r=a(n,t)]===t?r:-1;if(t!=t)return 0<=(r=i(f.call(n,e,u),fn))?r+e:-1;for(r=0<o?e:u-1;0<=r&&r<u;r+=o)if(n[r]===t)return r;return-1}}var at=it(1,et,ot),ft=it(-1,ut);function ct(n,t,r){t=(E(n)?et:tt)(n,t,r);if(void 0!==t&&-1!==t)return n[t]}function N(n,t,r){if(t=x(t,r),E(n))for(u=0,o=n.length;u<o;u++)t(n[u],u,n);else for(var e=b(n),u=0,o=e.length;u<o;u++)t(n[e[u]],e[u],n);return n}function I(n,t,r){t=S(t,r);for(var e=!E(n)&&b(n),u=(e||n).length,o=Array(u),i=0;i<u;i++){var a=e?e[i]:i;o[i]=t(n[a],a,n)}return o}function lt(f){return function(n,t,r,e){var u=3<=arguments.length;return function(n,t,r,e){var u=!E(n)&&b(n),o=(u||n).length,i=0<f?0:o-1;for(e||(r=n[u?u[i]:i],i+=f);0<=i&&i<o;i+=f){var a=u?u[i]:i;r=t(r,n[a],a,n)}return r}(n,x(t,e,4),r,u)}}var st=lt(1),pt=lt(-1);function T(n,e,t){var u=[];return e=S(e,t),N(n,function(n,t,r){e(n,t,r)&&u.push(n)}),u}function ht(n,t,r){t=S(t,r);for(var e=!E(n)&&b(n),u=(e||n).length,o=0;o<u;o++){var i=e?e[o]:o;if(!t(n[i],i,n))return!1}return!0}function vt(n,t,r){t=S(t,r);for(var e=!E(n)&&b(n),u=(e||n).length,o=0;o<u;o++){var i=e?e[o]:o;if(t(n[i],i,n))return!0}return!1}function k(n,t,r,e){return E(n)||(n=j(n)),0<=at(n,t,r="number"==typeof r&&!e?r:0)}var yt=l(function(n,r,e){var u,o;return p(r)?o=r:(r=_(r),u=r.slice(0,-1),r=r[r.length-1]),I(n,function(n){var t=o;if(!t){if(null==(n=u&&u.length?Nn(n,u):n))return;t=n[r]}return null==t?t:t.apply(n,e)})});function dt(n,t){return I(n,kn(t))}function gt(n,e,t){var r,u,o=-1/0,i=-1/0;if(null==e||"number"==typeof e&&"object"!=typeof n[0]&&null!=n)for(var a=0,f=(n=E(n)?n:j(n)).length;a<f;a++)null!=(r=n[a])&&o<r&&(o=r);else e=S(e,t),N(n,function(n,t,r){u=e(n,t,r),(i<u||u===-1/0&&o===-1/0)&&(o=n,i=u)});return o}var bt=/[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;function mt(n){return n?v(n)?f.call(n):X(n)?n.match(bt):E(n)?I(n,Tn):j(n):[]}function jt(n,t,r){if(null==t||r)return(n=E(n)?n:j(n))[Fn(n.length-1)];for(var e=mt(n),r=g(e),u=(t=Math.max(Math.min(t,r),0),r-1),o=0;o<t;o++){var i=Fn(o,u),a=e[o];e[o]=e[i],e[i]=a}return e.slice(0,t)}function D(o,t){return function(r,e,n){var u=t?[[],[]]:{};return e=S(e,n),N(r,function(n,t){t=e(n,t,r);o(u,n,t)}),u}}var wt=D(function(n,t,r){y(n,r)?n[r].push(t):n[r]=[t]}),_t=D(function(n,t,r){n[r]=t}),At=D(function(n,t,r){y(n,r)?n[r]++:n[r]=1}),xt=D(function(n,t,r){n[r?0:1].push(t)},!0);function St(n,t,r){return t in r}var Ot=l(function(n,t){var r={},e=t[0];if(null!=n){p(e)?(1<t.length&&(e=x(e,t[1])),t=c(n)):(e=St,t=B(t,!1,!1),n=Object(n));for(var u=0,o=t.length;u<o;u++){var i=t[u],a=n[i];e(a,i,n)&&(r[i]=a)}}return r}),Mt=l(function(n,r){var t,e=r[0];return p(e)?(e=Yn(e),1<r.length&&(t=r[1])):(r=I(B(r,!1,!1),String),e=function(n,t){return!k(r,t)}),Ot(n,e,t)});function Et(n,t,r){return f.call(n,0,Math.max(0,n.length-(null==t||r?1:t)))}function Bt(n,t,r){return null==n||n.length<1?null==t||r?void 0:[]:null==t||r?n[0]:Et(n,n.length-t)}function R(n,t,r){return f.call(n,null==t||r?1:t)}var Nt=l(function(n,t){return t=B(t,!0,!0),T(n,function(n){return!k(t,n)})}),It=l(function(n,t){return Nt(n,t)});function Tt(n,t,r,e){Q(t)||(e=r,r=t,t=!1),null!=r&&(r=S(r,e));for(var u=[],o=[],i=0,a=g(n);i<a;i++){var f=n[i],c=r?r(f,i,n):f;t&&!r?(i&&o===c||u.push(f),o=c):r?k(o,c)||(o.push(c),u.push(f)):k(u,f)||u.push(f)}return u}var kt=l(function(n){return Tt(B(n,!0,!0))});function Dt(n){for(var t=n&&gt(n,g).length||0,r=Array(t),e=0;e<t;e++)r[e]=dt(n,e);return r}var Rt=l(Dt);function Vt(n,t){return n._chain?m(t).chain():t}function Ft(r){return N(xn(r),function(n){var t=m[n]=r[n];m.prototype[n]=function(){var n=[this._wrapped];return P.apply(n,arguments),Vt(this,t.apply(m,n))}}),m}N(["pop","push","reverse","shift","sort","splice","unshift"],function(t){var r=e[t];m.prototype[t]=function(){var n=this._wrapped;return null!=n&&(r.apply(n,arguments),"shift"!==t&&"splice"!==t||0!==n.length||delete n[0]),Vt(this,n)}}),N(["concat","join","slice"],function(n){var t=e[n];m.prototype[n]=function(){var n=this._wrapped;return Vt(this,n=null!=n?t.apply(n,arguments):n)}});n=Ft({__proto__:null,VERSION:n,restArguments:l,isObject:o,isNull:function(n){return null===n},isUndefined:H,isBoolean:Q,isElement:function(n){return!(!n||1!==n.nodeType)},isString:X,isNumber:Y,isDate:Z,isRegExp:nn,isError:tn,isSymbol:rn,isArrayBuffer:en,isDataView:h,isArray:v,isFunction:p,isArguments:an,isFinite:function(n){return!rn(n)&&C(n)&&!isNaN(parseFloat(n))},isNaN:fn,isTypedArray:vn,isEmpty:function(n){var t;return null==n||("number"==typeof(t=g(n))&&(v(n)||X(n)||an(n))?0===t:0===g(b(n)))},isMatch:dn,isEqual:function(n,t){return mn(n,t)},isMap:u,isWeakMap:t,isSet:U,isWeakSet:a,keys:b,allKeys:c,values:j,pairs:function(n){for(var t=b(n),r=t.length,e=Array(r),u=0;u<r;u++)e[u]=[t[u],n[t[u]]];return e},invert:An,functions:xn,methods:xn,extend:On,extendOwn:w,assign:w,defaults:Mn,create:function(n,t){return n=En(n),t&&w(n,t),n},clone:function(n){return o(n)?v(n)?n.slice():On({},n):n},tap:function(n,t){return t(n),n},get:In,has:function(n,t){for(var r=(t=_(t)).length,e=0;e<r;e++){var u=t[e];if(!y(n,u))return!1;n=n[u]}return!!r},mapObject:function(n,t,r){t=S(t,r);for(var e=b(n),u=e.length,o={},i=0;i<u;i++){var a=e[i];o[a]=t(n[a],a,n)}return o},identity:Tn,constant:cn,noop:Vn,toPath:Bn,property:kn,propertyOf:function(t){return null==t?Vn:function(n){return In(t,n)}},matcher:A,matches:A,times:function(n,t,r){var e=Array(Math.max(0,n));t=x(t,r,1);for(var u=0;u<n;u++)e[u]=t(u);return e},random:Fn,now:O,escape:qn,unescape:r,templateSettings:Un,template:function(o,n,t){n=Mn({},n=!n&&t?t:n,m.templateSettings);var r,t=RegExp([(n.escape||Wn).source,(n.interpolate||Wn).source,(n.evaluate||Wn).source].join("|")+"|$","g"),i=0,a="__p+='";if(o.replace(t,function(n,t,r,e,u){return a+=o.slice(i,u).replace(Ln,$n),i=u+n.length,t?a+="'+\n((__t=("+t+"))==null?'':_.escape(__t))+\n'":r?a+="'+\n((__t=("+r+"))==null?'':__t)+\n'":e&&(a+="';\n"+e+"\n__p+='"),n}),a+="';\n",t=n.variable){if(!Cn.test(t))throw new Error("variable is not a bare identifier: "+t)}else a="with(obj||{}){\n"+a+"}\n",t="obj";a="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{r=new Function(t,"_",a)}catch(n){throw n.source=a,n}function e(n){return r.call(this,n,m)}return e.source="function("+t+"){\n"+a+"}",e},result:function(n,t,r){var e=(t=_(t)).length;if(!e)return p(r)?r.call(n):r;for(var u=0;u<e;u++){var o=null==n?void 0:n[t[u]];void 0===o&&(o=r,u=e),n=p(o)?o.call(n):o}return n},uniqueId:function(n){var t=++Kn+"";return n?n+t:t},chain:function(n){return(n=m(n))._chain=!0,n},iteratee:Rn,partial:M,bind:Gn,bindAll:Hn,memoize:function(e,u){function o(n){var t=o.cache,r=""+(u?u.apply(this,arguments):n);return y(t,r)||(t[r]=e.apply(this,arguments)),t[r]}return o.cache={},o},delay:Qn,defer:Xn,throttle:function(r,e,u){function o(){l=!1===u.leading?0:O(),i=null,c=r.apply(a,f),i||(a=f=null)}function n(){var n=O(),t=(l||!1!==u.leading||(l=n),e-(n-l));return a=this,f=arguments,t<=0||e<t?(i&&(clearTimeout(i),i=null),l=n,c=r.apply(a,f),i||(a=f=null)):i||!1===u.trailing||(i=setTimeout(o,t)),c}var i,a,f,c,l=0;return u=u||{},n.cancel=function(){clearTimeout(i),l=0,i=a=f=null},n},debounce:function(t,r,e){function u(){var n=O()-i;n<r?o=setTimeout(u,r-n):(o=null,e||(f=t.apply(c,a)),o||(a=c=null))}var o,i,a,f,c,n=l(function(n){return c=this,a=n,i=O(),o||(o=setTimeout(u,r),e&&(f=t.apply(c,a))),f});return n.cancel=function(){clearTimeout(o),o=a=c=null},n},wrap:function(n,t){return M(t,n)},negate:Yn,compose:function(){var r=arguments,e=r.length-1;return function(){for(var n=e,t=r[e].apply(this,arguments);n--;)t=r[n].call(this,t);return t}},after:function(n,t){return function(){if(--n<1)return t.apply(this,arguments)}},before:Zn,once:nt,findKey:tt,findIndex:et,findLastIndex:ut,sortedIndex:ot,indexOf:at,lastIndexOf:ft,find:ct,detect:ct,findWhere:function(n,t){return ct(n,A(t))},each:N,forEach:N,map:I,collect:I,reduce:st,foldl:st,inject:st,reduceRight:pt,foldr:pt,filter:T,select:T,reject:function(n,t,r){return T(n,Yn(S(t)),r)},every:ht,all:ht,some:vt,any:vt,contains:k,includes:k,include:k,invoke:yt,pluck:dt,where:function(n,t){return T(n,A(t))},max:gt,min:function(n,e,t){var r,u,o=1/0,i=1/0;if(null==e||"number"==typeof e&&"object"!=typeof n[0]&&null!=n)for(var a=0,f=(n=E(n)?n:j(n)).length;a<f;a++)null!=(r=n[a])&&r<o&&(o=r);else e=S(e,t),N(n,function(n,t,r){((u=e(n,t,r))<i||u===1/0&&o===1/0)&&(o=n,i=u)});return o},shuffle:function(n){return jt(n,1/0)},sample:jt,sortBy:function(n,e,t){var u=0;return e=S(e,t),dt(I(n,function(n,t,r){return{value:n,index:u++,criteria:e(n,t,r)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(e<r||void 0===r)return 1;if(r<e||void 0===e)return-1}return n.index-t.index}),"value")},groupBy:wt,indexBy:_t,countBy:At,partition:xt,toArray:mt,size:function(n){return null==n?0:(E(n)?n:b(n)).length},pick:Ot,omit:Mt,first:Bt,head:Bt,take:Bt,initial:Et,last:function(n,t,r){return null==n||n.length<1?null==t||r?void 0:[]:null==t||r?n[n.length-1]:R(n,Math.max(0,n.length-t))},rest:R,tail:R,drop:R,compact:function(n){return T(n,Boolean)},flatten:function(n,t){return B(n,t,!1)},without:It,uniq:Tt,unique:Tt,union:kt,intersection:function(n){for(var t=[],r=arguments.length,e=0,u=g(n);e<u;e++){var o=n[e];if(!k(t,o)){for(var i=1;i<r&&k(arguments[i],o);i++);i===r&&t.push(o)}}return t},difference:Nt,unzip:Dt,transpose:Dt,zip:Rt,object:function(n,t){for(var r={},e=0,u=g(n);e<u;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},range:function(n,t,r){null==t&&(t=n||0,n=0),r=r||(t<n?-1:1);for(var e=Math.max(Math.ceil((t-n)/r),0),u=Array(e),o=0;o<e;o++,n+=r)u[o]=n;return u},chunk:function(n,t){if(null==t||t<1)return[];for(var r=[],e=0,u=n.length;e<u;)r.push(f.call(n,e,e+=t));return r},mixin:Ft,default:m});return n._=n});
/* https://demo2.wpopal.com/spaciaz/wp-includes/js/wp-util.min.js?ver=6.9 */
/*! This file is auto-generated */
window.wp=window.wp||{},function(s){var t="undefined"==typeof _wpUtilSettings?{}:_wpUtilSettings;wp.template=_.memoize(function(e){var n,a={evaluate:/<#([\s\S]+?)#>/g,interpolate:/\{\{\{([\s\S]+?)\}\}\}/g,escape:/\{\{([^\}]+?)\}\}(?!\})/g,variable:"data"};return function(t){if(document.getElementById("tmpl-"+e))return(n=n||_.template(s("#tmpl-"+e).html(),a))(t);throw new Error("Template not found: #tmpl-"+e)}}),wp.ajax={settings:t.ajax||{},post:function(t,e){return wp.ajax.send({data:_.isObject(t)?t:_.extend(e||{},{action:t})})},send:function(a,t){var e,n;return _.isObject(a)?t=a:(t=t||{}).data=_.extend(t.data||{},{action:a}),t=_.defaults(t||{},{type:"POST",url:wp.ajax.settings.url,context:this}),(e=(n=s.Deferred(function(n){t.success&&n.done(t.success),t.error&&n.fail(t.error),delete t.success,delete t.error,n.jqXHR=s.ajax(t).done(function(t){var e;"1"!==t&&1!==t||(t={success:!0}),_.isObject(t)&&!_.isUndefined(t.success)?(e=this,n.done(function(){a&&a.data&&"query-attachments"===a.data.action&&n.jqXHR.hasOwnProperty("getResponseHeader")&&n.jqXHR.getResponseHeader("X-WP-Total")?e.totalAttachments=parseInt(n.jqXHR.getResponseHeader("X-WP-Total"),10):e.totalAttachments=0}),n[t.success?"resolveWith":"rejectWith"](this,[t.data])):n.rejectWith(this,[t])}).fail(function(){n.rejectWith(this,arguments)})})).promise()).abort=function(){return n.jqXHR.abort(),this},e}}}(jQuery);
/* https://demo2.wpopal.com/spaciaz/wp-includes/js/imagesloaded.min.js?ver=5.0.0 */
/*! This file is auto-generated */
/*!
 * imagesLoaded PACKAGED v5.0.0
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
!function(t,e){"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}("undefined"!=typeof window?window:this,(function(){function t(){}let e=t.prototype;return e.on=function(t,e){if(!t||!e)return this;let i=this._events=this._events||{},s=i[t]=i[t]||[];return s.includes(e)||s.push(e),this},e.once=function(t,e){if(!t||!e)return this;this.on(t,e);let i=this._onceEvents=this._onceEvents||{};return(i[t]=i[t]||{})[e]=!0,this},e.off=function(t,e){let i=this._events&&this._events[t];if(!i||!i.length)return this;let s=i.indexOf(e);return-1!=s&&i.splice(s,1),this},e.emitEvent=function(t,e){let i=this._events&&this._events[t];if(!i||!i.length)return this;i=i.slice(0),e=e||[];let s=this._onceEvents&&this._onceEvents[t];for(let n of i){s&&s[n]&&(this.off(t,n),delete s[n]),n.apply(this,e)}return this},e.allOff=function(){return delete this._events,delete this._onceEvents,this},t})),
/*!
 * imagesLoaded v5.0.0
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
function(t,e){"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter")):t.imagesLoaded=e(t,t.EvEmitter)}("undefined"!=typeof window?window:this,(function(t,e){let i=t.jQuery,s=t.console;function n(t,e,o){if(!(this instanceof n))return new n(t,e,o);let r=t;var h;("string"==typeof t&&(r=document.querySelectorAll(t)),r)?(this.elements=(h=r,Array.isArray(h)?h:"object"==typeof h&&"number"==typeof h.length?[...h]:[h]),this.options={},"function"==typeof e?o=e:Object.assign(this.options,e),o&&this.on("always",o),this.getImages(),i&&(this.jqDeferred=new i.Deferred),setTimeout(this.check.bind(this))):s.error(`Bad element for imagesLoaded ${r||t}`)}n.prototype=Object.create(e.prototype),n.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)};const o=[1,9,11];n.prototype.addElementImages=function(t){"IMG"===t.nodeName&&this.addImage(t),!0===this.options.background&&this.addElementBackgroundImages(t);let{nodeType:e}=t;if(!e||!o.includes(e))return;let i=t.querySelectorAll("img");for(let t of i)this.addImage(t);if("string"==typeof this.options.background){let e=t.querySelectorAll(this.options.background);for(let t of e)this.addElementBackgroundImages(t)}};const r=/url\((['"])?(.*?)\1\)/gi;function h(t){this.img=t}function d(t,e){this.url=t,this.element=e,this.img=new Image}return n.prototype.addElementBackgroundImages=function(t){let e=getComputedStyle(t);if(!e)return;let i=r.exec(e.backgroundImage);for(;null!==i;){let s=i&&i[2];s&&this.addBackground(s,t),i=r.exec(e.backgroundImage)}},n.prototype.addImage=function(t){let e=new h(t);this.images.push(e)},n.prototype.addBackground=function(t,e){let i=new d(t,e);this.images.push(i)},n.prototype.check=function(){if(this.progressedCount=0,this.hasAnyBroken=!1,!this.images.length)return void this.complete();let t=(t,e,i)=>{setTimeout((()=>{this.progress(t,e,i)}))};this.images.forEach((function(e){e.once("progress",t),e.check()}))},n.prototype.progress=function(t,e,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!t.isLoaded,this.emitEvent("progress",[this,t,e]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,t),this.progressedCount===this.images.length&&this.complete(),this.options.debug&&s&&s.log(`progress: ${i}`,t,e)},n.prototype.complete=function(){let t=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(t,[this]),this.emitEvent("always",[this]),this.jqDeferred){let t=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[t](this)}},h.prototype=Object.create(e.prototype),h.prototype.check=function(){this.getIsImageComplete()?this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.img.crossOrigin&&(this.proxyImage.crossOrigin=this.img.crossOrigin),this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.proxyImage.src=this.img.currentSrc||this.img.src)},h.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},h.prototype.confirm=function(t,e){this.isLoaded=t;let{parentNode:i}=this.img,s="PICTURE"===i.nodeName?i:this.img;this.emitEvent("progress",[this,s,e])},h.prototype.handleEvent=function(t){let e="on"+t.type;this[e]&&this[e](t)},h.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},h.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},h.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},d.prototype=Object.create(h.prototype),d.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url,this.getIsImageComplete()&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},d.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},d.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.element,e])},n.makeJQueryPlugin=function(e){(e=e||t.jQuery)&&(i=e,i.fn.imagesLoaded=function(t,e){return new n(this,t,e).jqDeferred.promise(i(this))})},n.makeJQueryPlugin(),n}));
/* https://demo2.wpopal.com/spaciaz/wp-content/themes/spaciaz/assets/js/elementor/button-mousemove.min.js?ver=1.2.3 */
!function(e){"use strict";e(window).on("elementor/frontend/init",()=>{elementorFrontend.hooks.addAction("frontend/element_ready/spaciaz-button-mousemove.default",t=>{t.find(".movingButton").each(function(){e(this).on("mouseenter",function(){let o=e(this).offset(),n=e(this);n.off("mousemove").on("mousemove",function(t){var e=t.pageX-o.left-n.outerWidth()/2,t=t.pageY-o.top-n.outerHeight()/2,e=Math.max(-20,Math.min(20,e)),t=Math.max(-20,Math.min(20,t));n.css({transform:`translate3d(${e}px, ${t}px, 0px)`})})}),e(this).on("mouseleave",function(){e(this).off("mousemove").css({transform:"translate3d(0px, 0px, 0px)"})})})})})}(jQuery);
/* https://demo2.wpopal.com/spaciaz/wp-content/themes/spaciaz/assets/js/elementor-frontend.js?ver=1.2.3 */
(function ($) {
    "use strict";
    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.elements.$window.on('elementor/nested-tabs/activate', (event, content)=>{
            const swiperElements = content.querySelectorAll(`.${elementorFrontend.config.swiperClass}`);
            for (const element of swiperElements) {
                if (!element.swiper) {
                    return;
                }
                element.swiper = undefined;
            }
        });
    });

})(jQuery);

/* https://demo2.wpopal.com/spaciaz/wp-content/themes/spaciaz/assets/js/vendor/elementor-sticky.js?ver=1.2.3 */
/*
 * By Elementor Team
 */
( function( $ ) {
    var Sticky = function( element, userSettings ) {
        var $element,
            isSticky = false,
            isFollowingParent = false,
            isReachedEffectsPoint = false,
            elements = {},
            settings,
            elementOffsetValue,
            elementWidth;

        var defaultSettings = {
            to: 'top',
            offset: 0,
            effectsOffset: 0,
            parent: false,
            classes: {
                sticky: 'sticky',
                stickyActive: 'sticky-active',
                stickyEffects: 'sticky-effects',
                spacer: 'sticky-spacer',
            },
            isRTL: false,
            handleScrollbarWidth: false,
        };

        var initElements = function() {
            $element = $( element ).addClass( settings.classes.sticky );

            elements.$window = $( window );

            if ( settings.parent ) {
                elements.$parent = $element.parent();

                if ( 'parent' !== settings.parent ) {
                    elements.$parent = elements.$parent.closest( settings.parent );
                }
            }
        };

        var initSettings = function() {
            settings = jQuery.extend( true, defaultSettings, userSettings );
        };

        var bindEvents = function() {
            elements.$window.on( {
                scroll: onWindowScroll,
                resize: onWindowResize,
            } );
        };

        var unbindEvents = function() {
            elements.$window
                .off( 'scroll', onWindowScroll )
                .off( 'resize', onWindowResize );
        };

        var init = function() {
            initSettings();

            initElements();

            bindEvents();

            checkPosition();
        };

        var backupCSS = function( $elementBackupCSS, backupState, properties ) {
            var css = {},
                elementStyle = $elementBackupCSS[ 0 ].style;

            properties.forEach( function( property ) {
                css[ property ] = undefined !== elementStyle[ property ] ? elementStyle[ property ] : '';
            } );

            $elementBackupCSS.data( 'css-backup-' + backupState, css );
        };

        var getCSSBackup = function( $elementCSSBackup, backupState ) {
            return $elementCSSBackup.data( 'css-backup-' + backupState );
        };

        const updateElementSizesData = () => {
            elementWidth = getElementOuterSize( $element, 'width' );
            elementOffsetValue = $element.offset().left;

            if ( settings.isRTL ) {
                // `window.innerWidth` includes the scrollbar while `document.body.offsetWidth` doesn't.
                const documentWidth = settings.handleScrollbarWidth ? window.innerWidth : document.body.offsetWidth;

                elementOffsetValue = Math.max( documentWidth - elementWidth - elementOffsetValue, 0 );
            }
        }

        var addSpacer = function() {
            elements.$spacer = $element.clone()
                .addClass( settings.classes.spacer )
                .css( {
                    visibility: 'hidden',
                    transition: 'none',
                    animation: 'none',
                } );

            $element.after( elements.$spacer );
        };

        var removeSpacer = function() {
            elements.$spacer.remove();
        };

        var stickElement = function() {
            backupCSS( $element, 'unsticky', [ 'position', 'width', 'margin-top', 'margin-bottom', 'top', 'bottom', 'inset-inline-start' ] );

            const css = {
                position: 'fixed',
                width: elementWidth,
                marginTop: 0,
                marginBottom: 0,
            };

            css[ settings.to ] = settings.offset;
            css[ 'top' === settings.to ? 'bottom' : 'top' ] = '';

            if ( elementOffsetValue ) {
                css[ 'inset-inline-start' ] = elementOffsetValue + 'px';
            }

            $element
                .css( css )
                .addClass( settings.classes.stickyActive );
        };

        var unstickElement = function() {
            $element
                .css( getCSSBackup( $element, 'unsticky' ) )
                .removeClass( settings.classes.stickyActive );
        };

        var followParent = function() {
            backupCSS( elements.$parent, 'childNotFollowing', [ 'position' ] );

            elements.$parent.css( 'position', 'relative' );

            backupCSS( $element, 'notFollowing', [ 'position', 'inset-inline-start', 'top', 'bottom' ] );

            const css = {
                position: 'absolute',
            };

            elementOffsetValue = elements.$spacer.position().left;

            if ( settings.isRTL ) {
                const parentWidth = $element.parent().outerWidth(),
                    elementOffsetValueLeft = elements.$spacer.position().left;

                elementWidth = elements.$spacer.outerWidth();
                elementOffsetValue = Math.max( parentWidth - elementWidth - elementOffsetValueLeft, 0 );
            }

            css[ 'inset-inline-start' ] = elementOffsetValue + 'px';

            css[ settings.to ] = '';

            css[ 'top' === settings.to ? 'bottom' : 'top' ] = 0;

            $element.css( css );

            isFollowingParent = true;
        };

        var unfollowParent = function() {
            elements.$parent.css( getCSSBackup( elements.$parent, 'childNotFollowing' ) );

            $element.css( getCSSBackup( $element, 'notFollowing' ) );

            isFollowingParent = false;
        };

        var getElementOuterSize = function( $elementOuterSize, dimension, includeMargins ) {
            var computedStyle = getComputedStyle( $elementOuterSize[ 0 ] ),
                elementSize = parseFloat( computedStyle[ dimension ] ),
                sides = 'height' === dimension ? [ 'top', 'bottom' ] : [ 'left', 'right' ],
                propertiesToAdd = [];

            if ( 'border-box' !== computedStyle.boxSizing ) {
                propertiesToAdd.push( 'border', 'padding' );
            }

            if ( includeMargins ) {
                propertiesToAdd.push( 'margin' );
            }

            propertiesToAdd.forEach( function( property ) {
                sides.forEach( function( side ) {
                    elementSize += parseFloat( computedStyle[ property + '-' + side ] );
                } );
            } );

            return elementSize;
        };

        var getElementViewportOffset = function( $elementViewportOffset ) {
            var windowScrollTop = elements.$window.scrollTop(),
                elementHeight = getElementOuterSize( $elementViewportOffset, 'height' ),
                viewportHeight = innerHeight,
                elementOffsetFromTop = $elementViewportOffset.offset().top,
                distanceFromTop = elementOffsetFromTop - windowScrollTop,
                topFromBottom = distanceFromTop - viewportHeight;

            return {
                top: {
                    fromTop: distanceFromTop,
                    fromBottom: topFromBottom,
                },
                bottom: {
                    fromTop: distanceFromTop + elementHeight,
                    fromBottom: topFromBottom + elementHeight,
                },
            };
        };

        var stick = function() {
            updateElementSizesData();

            addSpacer();

            stickElement();

            isSticky = true;

            $element.trigger( 'sticky:stick' );
        };

        var unstick = function() {
            unstickElement();

            removeSpacer();

            isSticky = false;

            $element.trigger( 'sticky:unstick' );
        };

        var checkParent = function() {
            var elementOffset = getElementViewportOffset( $element ),
                isTop = 'top' === settings.to;

            if ( isFollowingParent ) {
                var isNeedUnfollowing = isTop ? elementOffset.top.fromTop > settings.offset : elementOffset.bottom.fromBottom < -settings.offset;

                if ( isNeedUnfollowing ) {
                    unfollowParent();
                }
            } else {
                var parentOffset = getElementViewportOffset( elements.$parent ),
                    parentStyle = getComputedStyle( elements.$parent[ 0 ] ),
                    borderWidthToDecrease = parseFloat( parentStyle[ isTop ? 'borderBottomWidth' : 'borderTopWidth' ] ),
                    parentViewportDistance = isTop ? parentOffset.bottom.fromTop - borderWidthToDecrease : parentOffset.top.fromBottom + borderWidthToDecrease,
                    isNeedFollowing = isTop ? parentViewportDistance <= elementOffset.bottom.fromTop : parentViewportDistance >= elementOffset.top.fromBottom;

                if ( isNeedFollowing ) {
                    followParent();
                }
            }
        };

        var checkEffectsPoint = function( distanceFromTriggerPoint ) {
            if ( isReachedEffectsPoint && -distanceFromTriggerPoint < settings.effectsOffset ) {
                $element.removeClass( settings.classes.stickyEffects );

                isReachedEffectsPoint = false;
            } else if ( ! isReachedEffectsPoint && -distanceFromTriggerPoint >= settings.effectsOffset ) {
                $element.addClass( settings.classes.stickyEffects );

                isReachedEffectsPoint = true;
            }
        };

        var checkPosition = function() {
            var offset = settings.offset,
                distanceFromTriggerPoint;

            if ( isSticky ) {
                var spacerViewportOffset = getElementViewportOffset( elements.$spacer );

                distanceFromTriggerPoint = 'top' === settings.to ? spacerViewportOffset.top.fromTop - offset : -spacerViewportOffset.bottom.fromBottom - offset;

                if ( settings.parent ) {
                    checkParent();
                }

                if ( distanceFromTriggerPoint > 0 ) {
                    unstick();
                }
            } else {
                var elementViewportOffset = getElementViewportOffset( $element );

                distanceFromTriggerPoint = 'top' === settings.to ? elementViewportOffset.top.fromTop - offset : -elementViewportOffset.bottom.fromBottom - offset;

                if ( distanceFromTriggerPoint <= 0 ) {
                    stick();

                    if ( settings.parent ) {
                        checkParent();
                    }
                }
            }

            checkEffectsPoint( distanceFromTriggerPoint );
        };

        var onWindowScroll = function() {
            checkPosition();
        };

        var onWindowResize = function() {
            if ( ! isSticky ) {
                return;
            }

            unstickElement();

            removeSpacer();

            updateElementSizesData();

            addSpacer();

            stickElement();

            if ( settings.parent ) {
                // Force recalculation of the relation between the element and its parent.
                isFollowingParent = false;

                checkParent();
            }
        };

        this.destroy = function() {
            if ( isSticky ) {
                unstick();
            }

            unbindEvents();

            $element.removeClass( settings.classes.sticky );
        };

        init();
    };

    $.fn.sticky = function( settings ) {
        var isCommand = 'string' === typeof settings;

        this.each( function() {
            var $this = $( this );

            if ( ! isCommand ) {
                $this.data( 'sticky', new Sticky( this, settings ) );

                return;
            }

            var instance = $this.data( 'sticky' );

            if ( ! instance ) {
                throw Error( 'Trying to perform the `' + settings + '` method prior to initialization' );
            }

            if ( ! instance[ settings ] ) {
                throw ReferenceError( 'Method `' + settings + '` not found in sticky instance' );
            }

            instance[ settings ].apply( instance, Array.prototype.slice.call( arguments, 1 ) );

            if ( 'destroy' === settings ) {
                $this.removeData( 'sticky' );
            }
        } );

        return this;
    };

    window.Sticky = Sticky;
} )( jQuery );

/* https://demo2.wpopal.com/spaciaz/wp-content/themes/spaciaz/inc/elementor/motion-fx/assets/main.js?ver=1.2.3 */
/******/ (() => { // webpackBootstrap
    /******/ 	"use strict";
    /******/ 	var __webpack_modules__ = ({});
    /************************************************************************/
    /******/ 	// The module cache
    /******/ 	var __webpack_module_cache__ = {};
    /******/
    /******/ 	// The require function
    /******/ 	function __webpack_require__(moduleId) {
        /******/ 		// Check if module is in cache
        /******/ 		var cachedModule = __webpack_module_cache__[moduleId];
        /******/ 		if (cachedModule !== undefined) {
            /******/ 			return cachedModule.exports;
            /******/ 		}
        /******/ 		// Create a new module (and put it into the cache)
        /******/ 		var module = __webpack_module_cache__[moduleId] = {
            /******/ 			// no module.id needed
            /******/ 			// no module.loaded needed
            /******/ 			exports: {}
            /******/ 		};
        /******/
        /******/ 		// Execute the module function
        /******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
        /******/
        /******/ 		// Return the exports of the module
        /******/ 		return module.exports;
        /******/ 	}
    /******/
    /******/ 	// expose the modules object (__webpack_modules__)
    /******/ 	__webpack_require__.m = __webpack_modules__;
    /******/
    /************************************************************************/
    /******/ 	/* webpack/runtime/chunk loaded */
    /******/ 	(() => {
        /******/ 		var deferred = [];
        /******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
            /******/ 			if(chunkIds) {
                /******/ 				priority = priority || 0;
                /******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
                /******/ 				deferred[i] = [chunkIds, fn, priority];
                /******/ 				return;
                /******/ 			}
            /******/ 			var notFulfilled = Infinity;
            /******/ 			for (var i = 0; i < deferred.length; i++) {
                /******/ 				var [chunkIds, fn, priority] = deferred[i];
                /******/ 				var fulfilled = true;
                /******/ 				for (var j = 0; j < chunkIds.length; j++) {
                    /******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
                        /******/ 						chunkIds.splice(j--, 1);
                        /******/ 					} else {
                        /******/ 						fulfilled = false;
                        /******/ 						if(priority < notFulfilled) notFulfilled = priority;
                        /******/ 					}
                    /******/ 				}
                /******/ 				if(fulfilled) {
                    /******/ 					deferred.splice(i--, 1)
                    /******/ 					var r = fn();
                    /******/ 					if (r !== undefined) result = r;
                    /******/ 				}
                /******/ 			}
            /******/ 			return result;
            /******/ 		};
        /******/ 	})();
    /******/
    /******/ 	/* webpack/runtime/ensure chunk */
    /******/ 	(() => {
        /******/ 		__webpack_require__.f = {};
        /******/ 		// This file contains only the entry chunk.
        /******/ 		// The chunk loading function for additional chunks
        /******/ 		__webpack_require__.e = (chunkId) => {
            /******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
                /******/ 				__webpack_require__.f[key](chunkId, promises);
                /******/ 				return promises;
                /******/ 			}, []));
            /******/ 		};
        /******/ 	})();
    /******/
    /******/ 	/* webpack/runtime/get javascript chunk filename */
    /******/ 	(() => {
        /******/ 		// This function allow to reference async chunks
        /******/ 		__webpack_require__.u = (chunkId) => {
            /******/ 			// return url for filenames not based on template
            /******/ 			if (chunkId === "code-highlight") return "" + chunkId + ".cc6c8eb49e0aff6d419e.bundle.js";
            /******/ 			if (chunkId === "video-playlist") return "" + chunkId + ".5ee0445e2c9b1f2ed68f.bundle.js";
            /******/ 			if (chunkId === "paypal-button") return "" + chunkId + ".a8f3d929735cca75a572.bundle.js";
            /******/ 			if (chunkId === "progress-tracker") return "" + chunkId + ".a7329beb7783748287a5.bundle.js";
            /******/ 			if (chunkId === "animated-headline") return "" + chunkId + ".0ccd23763059df7affcc.bundle.js";
            /******/ 			if (chunkId === "media-carousel") return "" + chunkId + ".b5cf350f530535d64364.bundle.js";
            /******/ 			if (chunkId === "carousel") return "" + chunkId + ".364bbaf018e09f58c819.bundle.js";
            /******/ 			if (chunkId === "countdown") return "" + chunkId + ".6b48da864045c1ea0edd.bundle.js";
            /******/ 			if (chunkId === "hotspot") return "" + chunkId + ".66952182f9ae91b6896c.bundle.js";
            /******/ 			if (chunkId === "form") return "form.23168c11e0d20fa0282b.bundle.js";
            /******/ 			if (chunkId === "gallery") return "" + chunkId + ".e5ba72e3c57da531df85.bundle.js";
            /******/ 			if (chunkId === "lottie") return "" + chunkId + ".dccf7257e6cc366bc6bd.bundle.js";
            /******/ 			if (chunkId === "nav-menu") return "" + chunkId + ".e248eec66bc3d5587cf6.bundle.js";
            /******/ 			if (chunkId === "popup") return "" + chunkId + ".5ddbdd46f21fc221d760.bundle.js";
            /******/ 			if (chunkId === "load-more") return "" + chunkId + ".cd76720206dc6d21abc0.bundle.js";
            /******/ 			if (chunkId === "posts") return "" + chunkId + ".c23c8d29f44afbd62da6.bundle.js";
            /******/ 			if (chunkId === "portfolio") return "" + chunkId + ".71a9b9fb42566ae496bd.bundle.js";
            /******/ 			if (chunkId === "share-buttons") return "" + chunkId + ".d147b71ef798e333e678.bundle.js";
            /******/ 			if (chunkId === "slides") return "" + chunkId + ".6d3f738223ac9b3c9b7a.bundle.js";
            /******/ 			if (chunkId === "social") return "" + chunkId + ".b17f5f1767e41333a1dc.bundle.js";
            /******/ 			if (chunkId === "table-of-contents") return "" + chunkId + ".0744140055afdd9bf411.bundle.js";
            /******/ 			if (chunkId === "archive-posts") return "" + chunkId + ".22a6d49be96f6e1aa290.bundle.js";
            /******/ 			if (chunkId === "search-form") return "" + chunkId + ".fda69e244861c6890e79.bundle.js";
            /******/ 			if (chunkId === "woocommerce-menu-cart") return "" + chunkId + ".cf8829a628c66ec7c688.bundle.js";
            /******/ 			if (chunkId === "woocommerce-checkout-page") return "" + chunkId + ".acd4a2b8bc03ed32111f.bundle.js";
            /******/ 			if (chunkId === "woocommerce-cart") return "" + chunkId + ".39ccd7e510e98f3afb01.bundle.js";
            /******/ 			if (chunkId === "woocommerce-my-account") return "" + chunkId + ".d52e81c74f27be09eb2e.bundle.js";
            /******/ 			// return url for filenames based on template
            /******/ 			return undefined;
            /******/ 		};
        /******/ 	})();
    /******/
    /******/ 	/* webpack/runtime/global */
    /******/ 	(() => {
        /******/ 		__webpack_require__.g = (function() {
            /******/ 			if (typeof globalThis === 'object') return globalThis;
            /******/ 			try {
                /******/ 				return this || new Function('return this')();
                /******/ 			} catch (e) {
                /******/ 				if (typeof window === 'object') return window;
                /******/ 			}
            /******/ 		})();
        /******/ 	})();
    /******/
    /******/ 	/* webpack/runtime/hasOwnProperty shorthand */
    /******/ 	(() => {
        /******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
        /******/ 	})();
    /******/
    /******/ 	/* webpack/runtime/load script */
    /******/ 	(() => {
        /******/ 		var inProgress = {};
        /******/ 		var dataWebpackPrefix = "elementor-pro:";
        /******/ 		// loadScript function to load a script via script tag
        /******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
            /******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
            /******/ 			var script, needAttach;
            /******/ 			if(key !== undefined) {
                /******/ 				var scripts = document.getElementsByTagName("script");
                /******/ 				for(var i = 0; i < scripts.length; i++) {
                    /******/ 					var s = scripts[i];
                    /******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
                    /******/ 				}
                /******/ 			}
            /******/ 			if(!script) {
                /******/ 				needAttach = true;
                /******/ 				script = document.createElement('script');
                /******/
                /******/ 				script.charset = 'utf-8';
                /******/ 				script.timeout = 120;
                /******/ 				if (__webpack_require__.nc) {
                    /******/ 					script.setAttribute("nonce", __webpack_require__.nc);
                    /******/ 				}
                /******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
                /******/ 				script.src = url;
                /******/ 			}
            /******/ 			inProgress[url] = [done];
            /******/ 			var onScriptComplete = (prev, event) => {
                    /******/ 				// avoid mem leaks in IE.
                    /******/ 				script.onerror = script.onload = null;
                    /******/ 				clearTimeout(timeout);
                    /******/ 				var doneFns = inProgress[url];
                    /******/ 				delete inProgress[url];
                    /******/ 				script.parentNode && script.parentNode.removeChild(script);
                    /******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
                    /******/ 				if(prev) return prev(event);
                    /******/ 			}
                /******/ 			;
            /******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
            /******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
            /******/ 			script.onload = onScriptComplete.bind(null, script.onload);
            /******/ 			needAttach && document.head.appendChild(script);
            /******/ 		};
        /******/ 	})();
    /******/
    /******/ 	/* webpack/runtime/publicPath */
    /******/ 	(() => {
        /******/ 		var scriptUrl;
        /******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
        /******/ 		var document = __webpack_require__.g.document;
        /******/ 		if (!scriptUrl && document) {
            /******/ 			if (document.currentScript)
                /******/ 				scriptUrl = document.currentScript.src
            /******/ 			if (!scriptUrl) {
                /******/ 				var scripts = document.getElementsByTagName("script");
                /******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
                /******/ 			}
            /******/ 		}
        /******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
        /******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
        /******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
        /******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
        /******/ 		__webpack_require__.p = scriptUrl;
        /******/ 	})();
    /******/
    /******/ 	/* webpack/runtime/jsonp chunk loading */
    /******/ 	(() => {
        /******/ 		// no baseURI
        /******/
        /******/ 		// object to store loaded and loading chunks
        /******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
        /******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
        /******/ 		var installedChunks = {
            /******/ 			"webpack-pro.runtime": 0
            /******/ 		};
        /******/
        /******/ 		__webpack_require__.f.j = (chunkId, promises) => {
            /******/ 				// JSONP chunk loading for javascript
            /******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
            /******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
                /******/
                /******/ 					// a Promise means "currently loading".
                /******/ 					if(installedChunkData) {
                    /******/ 						promises.push(installedChunkData[2]);
                    /******/ 					} else {
                    /******/ 						if("webpack-pro.runtime" != chunkId) {
                        /******/ 							// setup Promise in chunk cache
                        /******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
                        /******/ 							promises.push(installedChunkData[2] = promise);
                        /******/
                        /******/ 							// start chunk loading
                        /******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
                        /******/ 							// create error before stack unwound to get useful stacktrace later
                        /******/ 							var error = new Error();
                        /******/ 							var loadingEnded = (event) => {
                            /******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
                                /******/ 									installedChunkData = installedChunks[chunkId];
                                /******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
                                /******/ 									if(installedChunkData) {
                                    /******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
                                    /******/ 										var realSrc = event && event.target && event.target.src;
                                    /******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
                                    /******/ 										error.name = 'ChunkLoadError';
                                    /******/ 										error.type = errorType;
                                    /******/ 										error.request = realSrc;
                                    /******/ 										installedChunkData[1](error);
                                    /******/ 									}
                                /******/ 								}
                            /******/ 							};
                        /******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
                        /******/ 						} else installedChunks[chunkId] = 0;
                    /******/ 					}
                /******/ 				}
            /******/ 		};
        /******/
        /******/ 		// no prefetching
        /******/
        /******/ 		// no preloaded
        /******/
        /******/ 		// no HMR
        /******/
        /******/ 		// no HMR manifest
        /******/
        /******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
        /******/
        /******/ 		// install a JSONP callback for chunk loading
        /******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
            /******/ 			var [chunkIds, moreModules, runtime] = data;
            /******/ 			// add "moreModules" to the modules object,
            /******/ 			// then flag all "chunkIds" as loaded and fire callback
            /******/ 			var moduleId, chunkId, i = 0;
            /******/ 			for(moduleId in moreModules) {
                /******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
                    /******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
                    /******/ 				}
                /******/ 			}
            /******/ 			if(runtime) var result = runtime(__webpack_require__);
            /******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
            /******/ 			for(;i < chunkIds.length; i++) {
                /******/ 				chunkId = chunkIds[i];
                /******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
                    /******/ 					installedChunks[chunkId][0]();
                    /******/ 				}
                /******/ 				installedChunks[chunkIds[i]] = 0;
                /******/ 			}
            /******/ 			return __webpack_require__.O(result);
            /******/ 		}
        /******/
        /******/ 		var chunkLoadingGlobal = self["makbetChunkelElementor"] = self["makbetChunkelElementor"] || [];
        /******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
        /******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
        /******/ 	})();
    /******/
    /************************************************************************/
    /******/
    /******/
    /******/ })()
;


(self["makbetChunkelElementor"] = self["makbetChunkelElementor"] || []).push([["frontend"],{

    /***/ "../node_modules/@babel/runtime/helpers/defineProperty.js":
    /*!****************************************************************!*\
      !*** ../node_modules/@babel/runtime/helpers/defineProperty.js ***!
      \****************************************************************/
    /***/ ((module) => {

        function _defineProperty(obj, key, value) {
            if (key in obj) {
                Object.defineProperty(obj, key, {
                    value: value,
                    enumerable: true,
                    configurable: true,
                    writable: true
                });
            } else {
                obj[key] = value;
            }

            return obj;
        }

        module.exports = _defineProperty;
        module.exports.default = module.exports, module.exports.__esModule = true;

        /***/ }),

    /***/ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js":
    /*!***********************************************************************!*\
      !*** ../node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
      \***********************************************************************/
    /***/ ((module) => {

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }

        module.exports = _interopRequireDefault;
        module.exports.default = module.exports, module.exports.__esModule = true;

        /***/ }),

    /***/ "../assets/dev/js/frontend/frontend.js":
    /*!*********************************************!*\
      !*** ../assets/dev/js/frontend/frontend.js ***!
      \*********************************************/
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

        "use strict";


        var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

        __webpack_require__(/*! ../public-path */ "../assets/dev/js/public-path.js");

        var _frontend = _interopRequireDefault(__webpack_require__(/*! ../../../../modules/motion-fx/assets/js/frontend/frontend */ "../modules/motion-fx/assets/js/frontend/frontend.js"));

        class ElementorProFrontend extends elementorModules.ViewModule {
            onInit() {
                super.onInit();
                this.config = {};
                this.modules = {};
            }

            bindEvents() {
                jQuery(window).on('elementor/frontend/init', this.onElementorFrontendInit.bind(this));
            }

            initModules() {
                // Handlers that should be available by default for sections usage.
                let handlers = {
                    motionFX: _frontend.default,
                }; // Keep this line before applying filter on the handlers.

                elementorProFrontend.trigger('elementor-pro/modules/init:before');
                handlers = elementorFrontend.hooks.applyFilters('elementor-pro/frontend/handlers', handlers);
                jQuery.each(handlers, (moduleName, ModuleClass) => {
                    this.modules[moduleName] = new ModuleClass();
                }); // TODO: BC Since 2.9.0

                this.modules.linkActions = {
                    addAction: (...args) => {
                        elementorFrontend.utils.urlActions.addAction(...args);
                    }
                };
            }

            onElementorFrontendInit() {
                this.initModules();
            }

        }

        window.elementorProFrontend = new ElementorProFrontend();

        /***/ }),

    /***/ "../assets/dev/js/public-path.js":
    /*!***************************************!*\
      !*** ../assets/dev/js/public-path.js ***!
      \***************************************/
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

        "use strict";


        /* eslint-disable camelcase */
        __webpack_require__.p = 'js/';

        /***/ }),

    /***/ "../modules/motion-fx/assets/js/frontend/frontend.js":
    /*!***********************************************************!*\
      !*** ../modules/motion-fx/assets/js/frontend/frontend.js ***!
      \***********************************************************/
    /***/ ((__unused_webpack_module, exports, __webpack_require__) => {

        "use strict";


        var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

        Object.defineProperty(exports, "__esModule", ({
            value: true
        }));
        exports.default = void 0;

        var _handler = _interopRequireDefault(__webpack_require__(/*! ./handler */ "../modules/motion-fx/assets/js/frontend/handler.js"));

        class _default extends elementorModules.Module {
            constructor() {
                super();
                elementorFrontend.elementsHandler.attachHandler('global', _handler.default, null);
            }

        }

        exports.default = _default;

        /***/ }),

    /***/ "../modules/motion-fx/assets/js/frontend/handler.js":
    /*!**********************************************************!*\
      !*** ../modules/motion-fx/assets/js/frontend/handler.js ***!
      \**********************************************************/
    /***/ ((__unused_webpack_module, exports, __webpack_require__) => {

        "use strict";


        var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

        Object.defineProperty(exports, "__esModule", ({
            value: true
        }));
        exports.default = void 0;

        var _motionFx = _interopRequireDefault(__webpack_require__(/*! ./motion-fx/motion-fx */ "../modules/motion-fx/assets/js/frontend/motion-fx/motion-fx.js"));
        class _default extends elementorModules.frontend.handlers.Base {
            __construct() {
                super.__construct(...arguments);
                this.toggle = elementorFrontend.debounce(this.toggle, 200);
            }
            getDefaultSettings() {
                return {
                    selectors: {
                        container: '.elementor-widget-container'
                    }
                };
            }
            getDefaultElements() {
                const selectors = this.getSettings('selectors');
                let container = this.$element.find(selectors.container);
                if (0 === container.length) {
                    container = this.$element;
                }
                return {
                    $container: container
                };
            }
            bindEvents() {
                elementorFrontend.elements.$window.on('resize', this.toggle);
            }
            unbindEvents() {
                elementorFrontend.elements.$window.off('resize', this.toggle);
            }
            addCSSTransformEvents() {
                // Remove CSS transition variable that assigned from scroll.js in order to allow the transition of the CSS-Transform.
                const motionFxScrolling = this.getElementSettings('motion_fx_motion_fx_scrolling');
                if (motionFxScrolling && !this.isTransitionEventAdded) {
                    this.isTransitionEventAdded = true;
                    this.elements.$container.on('mouseenter', () => {
                        this.elements.$container.css('--e-transform-transition-duration', '');
                    });
                }
            }
            initEffects() {
                this.effects = {
                    translateY: {
                        interaction: 'scroll',
                        actions: ['translateY']
                    },
                    translateX: {
                        interaction: 'scroll',
                        actions: ['translateX']
                    },
                    rotateZ: {
                        interaction: 'scroll',
                        actions: ['rotateZ']
                    },
                    scale: {
                        interaction: 'scroll',
                        actions: ['scale']
                    },
                    opacity: {
                        interaction: 'scroll',
                        actions: ['opacity']
                    },
                    blur: {
                        interaction: 'scroll',
                        actions: ['blur']
                    },
                    mouseTrack: {
                        interaction: 'mouseMove',
                        actions: ['translateXY']
                    },
                    tilt: {
                        interaction: 'mouseMove',
                        actions: ['tilt']
                    }
                };
            }
            prepareOptions(name) {
                const elementSettings = this.getElementSettings(),
                    type = 'motion_fx' === name ? 'element' : 'background',
                    interactions = {};
                jQuery.each(elementSettings, (key, value) => {
                    const keyRegex = new RegExp('^' + name + '_(.+?)_effect'),
                        keyMatches = key.match(keyRegex);
                    if (!keyMatches || !value) {
                        return;
                    }
                    const options = {},
                        effectName = keyMatches[1];
                    jQuery.each(elementSettings, (subKey, subValue) => {
                        const subKeyRegex = new RegExp(name + '_' + effectName + '_(.+)'),
                            subKeyMatches = subKey.match(subKeyRegex);
                        if (!subKeyMatches) {
                            return;
                        }
                        const subFieldName = subKeyMatches[1];
                        if ('effect' === subFieldName) {
                            return;
                        }
                        if ('object' === typeof subValue) {
                            subValue = Object.keys(subValue.sizes).length ? subValue.sizes : subValue.size;
                        }
                        options[subKeyMatches[1]] = subValue;
                    });
                    const effect = this.effects[effectName],
                        interactionName = effect.interaction;
                    if (!interactions[interactionName]) {
                        interactions[interactionName] = {};
                    }
                    effect.actions.forEach(action => interactions[interactionName][action] = options);
                });
                let $element = this.$element,
                    $dimensionsElement,
                    $childElement;
                const elementType = this.getElementType();
                if ('element' === type && !['section', 'container'].includes(elementType)) {
                    $dimensionsElement = $element;
                    let childElementSelector;
                    if ('column' === elementType) {
                        childElementSelector = '.elementor-widget-wrap';
                    } else {
                        childElementSelector = '.elementor-widget-container';
                    }
                    $childElement = $element.find('> ' + childElementSelector);
                    $element = 0 === $childElement.length ? this.$element : $childElement;
                }
                const options = {
                    type,
                    interactions,
                    elementSettings,
                    $element,
                    $dimensionsElement,
                    refreshDimensions: this.isEdit,
                    range: elementSettings[name + '_range'],
                    classes: {
                        element: 'elementor-motion-effects-element',
                        parent: 'elementor-motion-effects-parent',
                        backgroundType: 'elementor-motion-effects-element-type-background',
                        container: 'elementor-motion-effects-container',
                        layer: 'elementor-motion-effects-layer',
                        perspective: 'elementor-motion-effects-perspective'
                    }
                };
                if (!options.range && 'fixed' === this.getCurrentDeviceSetting('_position')) {
                    options.range = 'page';
                }
                if ('fixed' === this.getCurrentDeviceSetting('_position')) {
                    options.isFixedPosition = true;
                }
                if ('background' === type && 'column' === this.getElementType()) {
                    options.addBackgroundLayerTo = ' > .elementor-element-populated';
                }
                return options;
            }
            activate(name) {
                const options = this.prepareOptions(name);
                if (jQuery.isEmptyObject(options.interactions)) {
                    return;
                }
                this[name] = new _motionFx.default(options);
            }
            deactivate(name) {
                if (this[name]) {
                    this[name].destroy();
                    delete this[name];
                }
            }
            toggle() {
                const currentDeviceMode = elementorFrontend.getCurrentDeviceMode(),
                    elementSettings = this.getElementSettings();
                ['motion_fx', 'background_motion_fx'].forEach(name => {
                    const devices = elementSettings[name + '_devices'],
                        isCurrentModeActive = !devices || -1 !== devices.indexOf(currentDeviceMode);
                    if (isCurrentModeActive && (elementSettings[name + '_motion_fx_scrolling'] || elementSettings[name + '_motion_fx_mouse'])) {
                        if (this[name]) {
                            this.refreshInstance(name);
                        } else {
                            this.activate(name);
                        }
                    } else {
                        this.deactivate(name);
                    }
                });
            }
            refreshInstance(instanceName) {
                const instance = this[instanceName];
                if (!instance) {
                    return;
                }
                const preparedOptions = this.prepareOptions(instanceName);
                instance.setSettings(preparedOptions);
                instance.refresh();
            }
            onInit() {
                super.onInit();
                this.initEffects();
                this.addCSSTransformEvents();
                this.toggle();
            }
            onElementChange(propertyName) {
                if (/motion_fx_((scrolling)|(mouse)|(devices))$/.test(propertyName)) {
                    if ('motion_fx_motion_fx_scrolling' === propertyName) {
                        this.addCSSTransformEvents();
                    }
                    this.toggle();
                    return;
                }
                const propertyMatches = propertyName.match('.*?(motion_fx|_transform)');
                if (propertyMatches) {
                    const instanceName = propertyMatches[0].match('(_transform)') ? 'motion_fx' : propertyMatches[0];
                    this.refreshInstance(instanceName);
                    if (!this[instanceName]) {
                        this.activate(instanceName);
                    }
                }
                if (/^_position/.test(propertyName)) {
                    ['motion_fx', 'background_motion_fx'].forEach(instanceName => {
                        this.refreshInstance(instanceName);
                    });
                }
            }
            onDestroy() {
                super.onDestroy();
                ['motion_fx', 'background_motion_fx'].forEach(name => {
                    this.deactivate(name);
                });
            }
        }

        exports.default = _default;

        /***/ }),

    /***/ "../modules/motion-fx/assets/js/frontend/motion-fx/actions.js":
    /*!********************************************************************!*\
      !*** ../modules/motion-fx/assets/js/frontend/motion-fx/actions.js ***!
      \********************************************************************/
    /***/ ((__unused_webpack_module, exports) => {

        "use strict";


        Object.defineProperty(exports, "__esModule", ({
            value: true
        }));
        exports.default = void 0;

        class _default extends elementorModules.Module {
            getMovePointFromPassedPercents(movableRange, passedPercents) {
                const movePoint = passedPercents / movableRange * 100;
                return +movePoint.toFixed(2);
            }

            getEffectValueFromMovePoint(range, movePoint) {
                return range * movePoint / 100;
            }

            getStep(passedPercents, options) {
                if ('element' === this.getSettings('type')) {
                    return this.getElementStep(passedPercents, options);
                }

                return this.getBackgroundStep(passedPercents, options);
            }

            getElementStep(passedPercents, options) {
                return -(passedPercents - 50) * options.speed;
            }

            getBackgroundStep(passedPercents, options) {
                const movableRange = this.getSettings('dimensions.movable' + options.axis.toUpperCase());
                return -this.getEffectValueFromMovePoint(movableRange, passedPercents);
            }

            getDirectionMovePoint(passedPercents, direction, range) {
                let movePoint;

                if (passedPercents < range.start) {
                    if ('out-in' === direction) {
                        movePoint = 0;
                    } else if ('in-out' === direction) {
                        movePoint = 100;
                    } else {
                        movePoint = this.getMovePointFromPassedPercents(range.start, passedPercents);

                        if ('in-out-in' === direction) {
                            movePoint = 100 - movePoint;
                        }
                    }
                } else if (passedPercents < range.end) {
                    if ('in-out-in' === direction) {
                        movePoint = 0;
                    } else if ('out-in-out' === direction) {
                        movePoint = 100;
                    } else {
                        movePoint = this.getMovePointFromPassedPercents(range.end - range.start, passedPercents - range.start);

                        if ('in-out' === direction) {
                            movePoint = 100 - movePoint;
                        }
                    }
                } else if ('in-out' === direction) {
                    movePoint = 0;
                } else if ('out-in' === direction) {
                    movePoint = 100;
                } else {
                    movePoint = this.getMovePointFromPassedPercents(100 - range.end, 100 - passedPercents);

                    if ('in-out-in' === direction) {
                        movePoint = 100 - movePoint;
                    }
                }

                return movePoint;
            }

            translateX(actionData, passedPercents) {
                actionData.axis = 'x';
                actionData.unit = 'px';
                this.transform('translateX', passedPercents, actionData);
            }

            translateY(actionData, passedPercents) {
                actionData.axis = 'y';
                actionData.unit = 'px';
                this.transform('translateY', passedPercents, actionData);
            }

            translateXY(actionData, passedPercentsX, passedPercentsY) {
                this.translateX(actionData, passedPercentsX);
                this.translateY(actionData, passedPercentsY);
            }

            tilt(actionData, passedPercentsX, passedPercentsY) {
                const options = {
                    speed: actionData.speed / 10,
                    direction: actionData.direction
                };
                this.rotateX(options, passedPercentsY);
                this.rotateY(options, 100 - passedPercentsX);
            }

            rotateX(actionData, passedPercents) {
                actionData.axis = 'x';
                actionData.unit = 'deg';
                this.transform('rotateX', passedPercents, actionData);
            }

            rotateY(actionData, passedPercents) {
                actionData.axis = 'y';
                actionData.unit = 'deg';
                this.transform('rotateY', passedPercents, actionData);
            }

            rotateZ(actionData, passedPercents) {
                actionData.unit = 'deg';
                this.transform('rotateZ', passedPercents, actionData);
            }

            scale(actionData, passedPercents) {
                const movePoint = this.getDirectionMovePoint(passedPercents, actionData.direction, actionData.range);
                this.updateRulePart('transform', 'scale', 1 + actionData.speed * movePoint / 1000);
            }

            transform(action, passedPercents, actionData) {
                if (actionData.direction) {
                    passedPercents = 100 - passedPercents;
                }

                this.updateRulePart('transform', action, this.getStep(passedPercents, actionData) + actionData.unit);
            }

            setCSSTransformVariables(elementSettings) {
                this.CSSTransformVariables = [];
                jQuery.each(elementSettings, (settingKey, settingValue) => {
                    const transformKeyMatches = settingKey.match(/_transform_(.+?)_effect/m);

                    if (transformKeyMatches && settingValue) {
                        if ('perspective' === transformKeyMatches[1]) {
                            this.CSSTransformVariables.unshift(transformKeyMatches[1]);
                            return;
                        }

                        if (this.CSSTransformVariables.includes(transformKeyMatches[1])) {
                            return;
                        }

                        this.CSSTransformVariables.push(transformKeyMatches[1]);
                    }
                });
            }

            opacity(actionData, passedPercents) {
                const movePoint = this.getDirectionMovePoint(passedPercents, actionData.direction, actionData.range),
                    level = actionData.level / 10,
                    opacity = 1 - level + this.getEffectValueFromMovePoint(level, movePoint);
                this.$element.css({
                    opacity,
                    'will-change': 'opacity'
                });
            }

            blur(actionData, passedPercents) {
                const movePoint = this.getDirectionMovePoint(passedPercents, actionData.direction, actionData.range),
                    blur = actionData.level - this.getEffectValueFromMovePoint(actionData.level, movePoint);
                this.updateRulePart('filter', 'blur', blur + 'px');
            }

            updateRulePart(ruleName, key, value) {
                if (!this.rulesVariables[ruleName]) {
                    this.rulesVariables[ruleName] = {};
                }

                if (!this.rulesVariables[ruleName][key]) {
                    this.rulesVariables[ruleName][key] = true;
                    this.updateRule(ruleName);
                }

                const cssVarKey = `--${key}`;
                this.$element[0].style.setProperty(cssVarKey, value);
            }

            updateRule(ruleName) {
                let value = '';
                value += this.concatTransformCSSProperties(ruleName);
                value += this.concatTransformMotionEffectCSSProperties(ruleName);
                this.$element.css(ruleName, value);
            }

            concatTransformCSSProperties(ruleName) {
                let value = '';

                if ('transform' === ruleName) {
                    jQuery.each(this.CSSTransformVariables, (index, variableKey) => {
                        const variableName = variableKey;

                        if (variableKey.startsWith('flip')) {
                            variableKey = variableKey.replace('flip', 'scale');
                        } // Adding default value because of the hover state. if there is no default the transform will break.


                        const defaultUnit = variableKey.startsWith('rotate') || variableKey.startsWith('skew') ? 'deg' : 'px',
                            defaultValue = variableKey.startsWith('scale') ? 1 : 0 + defaultUnit;
                        value += `${variableKey}(var(--e-transform-${variableName}, ${defaultValue}))`;
                    });
                }

                return value;
            }

            concatTransformMotionEffectCSSProperties(ruleName) {
                let value = '';
                jQuery.each(this.rulesVariables[ruleName], variableKey => {
                    value += `${variableKey}(var(--${variableKey}))`;
                });
                return value;
            }

            runAction(actionName, actionData, passedPercents, ...args) {
                if (actionData.affectedRange) {
                    if (actionData.affectedRange.start > passedPercents) {
                        passedPercents = actionData.affectedRange.start;
                    }

                    if (actionData.affectedRange.end < passedPercents) {
                        passedPercents = actionData.affectedRange.end;
                    }
                }

                this[actionName](actionData, passedPercents, ...args);
            }

            refresh() {
                this.rulesVariables = {};
                this.CSSTransformVariables = [];
                this.$element.css({
                    transform: '',
                    filter: '',
                    opacity: '',
                    'will-change': ''
                });
            }

            onInit() {
                this.$element = this.getSettings('$targetElement');
                this.refresh();
            }

        }

        exports.default = _default;

        /***/ }),

    /***/ "../modules/motion-fx/assets/js/frontend/motion-fx/interactions/base.js":
    /*!******************************************************************************!*\
      !*** ../modules/motion-fx/assets/js/frontend/motion-fx/interactions/base.js ***!
      \******************************************************************************/
    /***/ ((__unused_webpack_module, exports, __webpack_require__) => {

        "use strict";


        var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

        Object.defineProperty(exports, "__esModule", ({
            value: true
        }));
        exports.default = void 0;

        var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js"));

        class _default extends elementorModules.ViewModule {
            __construct(options) {
                this.motionFX = options.motionFX;
                if (!this.intersectionObservers) {
                    this.setElementInViewportObserver();
                }
            }
            setElementInViewportObserver() {
                this.intersectionObserver = elementorModules.utils.Scroll.scrollObserver({
                    callback: event => {
                        if (event.isInViewport) {
                            this.onInsideViewport();
                        } else {
                            this.removeAnimationFrameRequest();
                        }
                    }
                });

                // Determine which element we should observe.
                const observedElement = 'page' === this.motionFX.getSettings('range') ? elementorFrontend.elements.$body[0] : this.motionFX.elements.$parent[0];
                this.intersectionObserver.observe(observedElement);
            }
            onInsideViewport = () => {
                this.run();
                this.animationFrameRequest = requestAnimationFrame(this.onInsideViewport);
            };
            runCallback() {
                const callback = this.getSettings('callback');
                callback(...arguments);
            }
            removeIntersectionObserver() {
                if (this.intersectionObserver) {
                    this.intersectionObserver.unobserve(this.motionFX.elements.$parent[0]);
                }
            }
            removeAnimationFrameRequest() {
                if (this.animationFrameRequest) {
                    cancelAnimationFrame(this.animationFrameRequest);
                }
            }
            destroy() {
                this.removeAnimationFrameRequest();
                this.removeIntersectionObserver();
            }
            onInit() {
                super.onInit();
            }
        }

        exports.default = _default;

        /***/ }),

    /***/ "../modules/motion-fx/assets/js/frontend/motion-fx/interactions/mouse-move.js":
    /*!************************************************************************************!*\
      !*** ../modules/motion-fx/assets/js/frontend/motion-fx/interactions/mouse-move.js ***!
      \************************************************************************************/
    /***/ ((__unused_webpack_module, exports, __webpack_require__) => {

        "use strict";


        var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

        Object.defineProperty(exports, "__esModule", ({
            value: true
        }));
        exports.default = void 0;

        var _base = _interopRequireDefault(__webpack_require__(/*! ./base */ "../modules/motion-fx/assets/js/frontend/motion-fx/interactions/base.js"));

        class MouseMoveInteraction extends _base.default {
            bindEvents() {
                if (!MouseMoveInteraction.mouseTracked) {
                    elementorFrontend.elements.$window.on('mousemove', MouseMoveInteraction.updateMousePosition);
                    MouseMoveInteraction.mouseTracked = true;
                }
            }

            run() {
                const mousePosition = MouseMoveInteraction.mousePosition,
                    oldMousePosition = this.oldMousePosition;

                if (oldMousePosition.x === mousePosition.x && oldMousePosition.y === mousePosition.y) {
                    return;
                }

                this.oldMousePosition = {
                    x: mousePosition.x,
                    y: mousePosition.y
                };
                const passedPercentsX = 100 / innerWidth * mousePosition.x,
                    passedPercentsY = 100 / innerHeight * mousePosition.y;
                this.runCallback(passedPercentsX, passedPercentsY);
            }

            onInit() {
                this.oldMousePosition = {};
                super.onInit();
            }

        }

        exports.default = MouseMoveInteraction;
        MouseMoveInteraction.mousePosition = {};

        MouseMoveInteraction.updateMousePosition = event => {
            MouseMoveInteraction.mousePosition = {
                x: event.clientX,
                y: event.clientY
            };
        };

        /***/ }),

    /***/ "../modules/motion-fx/assets/js/frontend/motion-fx/interactions/scroll.js":
    /*!********************************************************************************!*\
      !*** ../modules/motion-fx/assets/js/frontend/motion-fx/interactions/scroll.js ***!
      \********************************************************************************/
    /***/ ((__unused_webpack_module, exports, __webpack_require__) => {

        "use strict";


        var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

        Object.defineProperty(exports, "__esModule", ({
            value: true
        }));
        exports.default = void 0;

        var _base = _interopRequireDefault(__webpack_require__(/*! ./base */ "../modules/motion-fx/assets/js/frontend/motion-fx/interactions/base.js"));

        class _default extends _base.default {
            run() {
                if (pageYOffset === this.windowScrollTop) {
                    return false;
                }

                this.onScrollMovement();
                this.windowScrollTop = pageYOffset;
            }

            onScrollMovement() {
                this.updateMotionFxDimensions();
                this.updateAnimation();
                this.resetTransitionVariable();
            }

            resetTransitionVariable() {
                this.motionFX.$element.css('--e-transform-transition-duration', '100ms');
            }

            updateMotionFxDimensions() {
                const motionFXSettings = this.motionFX.getSettings();

                if (motionFXSettings.refreshDimensions) {
                    this.motionFX.defineDimensions();
                }
            }

            updateAnimation() {
                let passedRangePercents;

                if ('page' === this.motionFX.getSettings('range')) {
                    passedRangePercents = elementorModules.utils.Scroll.getPageScrollPercentage();
                } else if (this.motionFX.getSettings('isFixedPosition')) {
                    passedRangePercents = elementorModules.utils.Scroll.getPageScrollPercentage({}, window.innerHeight);
                } else {
                    passedRangePercents = elementorModules.utils.Scroll.getElementViewportPercentage(this.motionFX.elements.$parent);
                }

                this.runCallback(passedRangePercents);
            }

        }

        exports.default = _default;

        /***/ }),

    /***/ "../modules/motion-fx/assets/js/frontend/motion-fx/motion-fx.js":
    /*!**********************************************************************!*\
      !*** ../modules/motion-fx/assets/js/frontend/motion-fx/motion-fx.js ***!
      \**********************************************************************/
    /***/ ((__unused_webpack_module, exports, __webpack_require__) => {

        "use strict";


        var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

        Object.defineProperty(exports, "__esModule", ({
            value: true
        }));
        exports.default = void 0;

        var _scroll = _interopRequireDefault(__webpack_require__(/*! ./interactions/scroll */ "../modules/motion-fx/assets/js/frontend/motion-fx/interactions/scroll.js"));

        var _mouseMove = _interopRequireDefault(__webpack_require__(/*! ./interactions/mouse-move */ "../modules/motion-fx/assets/js/frontend/motion-fx/interactions/mouse-move.js"));

        var _actions = _interopRequireDefault(__webpack_require__(/*! ./actions */ "../modules/motion-fx/assets/js/frontend/motion-fx/actions.js"));

        class _default extends elementorModules.ViewModule {
            getDefaultSettings() {
                return {
                    type: 'element',
                    $element: null,
                    $dimensionsElement: null,
                    addBackgroundLayerTo: null,
                    interactions: {},
                    refreshDimensions: false,
                    range: 'viewport',
                    classes: {
                        element: 'motion-fx-element',
                        parent: 'motion-fx-parent',
                        backgroundType: 'motion-fx-element-type-background',
                        container: 'motion-fx-container',
                        layer: 'motion-fx-layer',
                        perspective: 'motion-fx-perspective'
                    }
                };
            }

            bindEvents() {
                this.onWindowResize = this.onWindowResize.bind(this);
                elementorFrontend.elements.$window.on('resize', this.onWindowResize);
            }

            unbindEvents() {
                elementorFrontend.elements.$window.off('resize', this.onWindowResize);
            }

            addBackgroundLayer() {
                const settings = this.getSettings();
                this.elements.$motionFXContainer = jQuery('<div>', {
                    class: settings.classes.container
                });
                this.elements.$motionFXLayer = jQuery('<div>', {
                    class: settings.classes.layer
                });
                this.updateBackgroundLayerSize();
                this.elements.$motionFXContainer.prepend(this.elements.$motionFXLayer);
                const $addBackgroundLayerTo = settings.addBackgroundLayerTo ? this.$element.find(settings.addBackgroundLayerTo) : this.$element;
                $addBackgroundLayerTo.prepend(this.elements.$motionFXContainer);
            }

            removeBackgroundLayer() {
                this.elements.$motionFXContainer.remove();
            }

            updateBackgroundLayerSize() {
                const settings = this.getSettings(),
                    speed = {
                        x: 0,
                        y: 0
                    },
                    mouseInteraction = settings.interactions.mouseMove,
                    scrollInteraction = settings.interactions.scroll;

                if (mouseInteraction && mouseInteraction.translateXY) {
                    speed.x = mouseInteraction.translateXY.speed * 10;
                    speed.y = mouseInteraction.translateXY.speed * 10;
                }

                if (scrollInteraction) {
                    if (scrollInteraction.translateX) {
                        speed.x = scrollInteraction.translateX.speed * 10;
                    }

                    if (scrollInteraction.translateY) {
                        speed.y = scrollInteraction.translateY.speed * 10;
                    }
                }

                this.elements.$motionFXLayer.css({
                    width: 100 + speed.x + '%',
                    height: 100 + speed.y + '%'
                });
            }

            defineDimensions() {
                const $dimensionsElement = this.getSettings('$dimensionsElement') || this.$element,
                    elementOffset = $dimensionsElement.offset();
                const dimensions = {
                    elementHeight: $dimensionsElement.outerHeight(),
                    elementWidth: $dimensionsElement.outerWidth(),
                    elementTop: elementOffset.top,
                    elementLeft: elementOffset.left
                };
                dimensions.elementRange = dimensions.elementHeight + innerHeight;
                this.setSettings('dimensions', dimensions);

                if ('background' === this.getSettings('type')) {
                    this.defineBackgroundLayerDimensions();
                }
            }

            defineBackgroundLayerDimensions() {
                const dimensions = this.getSettings('dimensions');
                dimensions.layerHeight = this.elements.$motionFXLayer.height();
                dimensions.layerWidth = this.elements.$motionFXLayer.width();
                dimensions.movableX = dimensions.layerWidth - dimensions.elementWidth;
                dimensions.movableY = dimensions.layerHeight - dimensions.elementHeight;
                this.setSettings('dimensions', dimensions);
            }

            initInteractionsTypes() {
                this.interactionsTypes = {
                    scroll: _scroll.default,
                    mouseMove: _mouseMove.default
                };
            }

            prepareSpecialActions() {
                const settings = this.getSettings(),
                    hasTiltEffect = !!(settings.interactions.mouseMove && settings.interactions.mouseMove.tilt);
                this.elements.$parent.toggleClass(settings.classes.perspective, hasTiltEffect);
            }

            cleanSpecialActions() {
                const settings = this.getSettings();
                this.elements.$parent.removeClass(settings.classes.perspective);
            }

            runInteractions() {
                const settings = this.getSettings();
                this.actions.setCSSTransformVariables(settings.elementSettings);
                this.prepareSpecialActions();
                jQuery.each(settings.interactions, (interactionName, actions) => {
                    this.interactions[interactionName] = new this.interactionsTypes[interactionName]({
                        motionFX: this,
                        callback: (...args) => {
                            jQuery.each(actions, (actionName, actionData) => this.actions.runAction(actionName, actionData, ...args));
                        }
                    });
                    this.interactions[interactionName].run();
                });
            }

            destroyInteractions() {
                this.cleanSpecialActions();
                jQuery.each(this.interactions, (interactionName, interaction) => interaction.destroy());
                this.interactions = {};
            }

            refresh() {
                this.actions.setSettings(this.getSettings());

                if ('background' === this.getSettings('type')) {
                    this.updateBackgroundLayerSize();
                    this.defineBackgroundLayerDimensions();
                }

                this.actions.refresh();
                this.destroyInteractions();
                this.runInteractions();
            }

            destroy() {
                this.destroyInteractions();
                this.actions.refresh();
                const settings = this.getSettings();
                this.$element.removeClass(settings.classes.element);
                this.elements.$parent.removeClass(settings.classes.parent);

                if ('background' === settings.type) {
                    this.$element.removeClass(settings.classes.backgroundType);
                    this.removeBackgroundLayer();
                }
            }

            onInit() {
                super.onInit();
                const settings = this.getSettings();
                this.$element = settings.$element;
                this.elements.$parent = this.$element.parent();
                this.$element.addClass(settings.classes.element);
                this.elements.$parent = this.$element.parent();
                this.elements.$parent.addClass(settings.classes.parent);

                if ('background' === settings.type) {
                    this.$element.addClass(settings.classes.backgroundType);
                    this.addBackgroundLayer();
                }

                this.defineDimensions();
                settings.$targetElement = 'element' === settings.type ? this.$element : this.elements.$motionFXLayer;
                this.interactions = {};
                this.actions = new _actions.default(settings);
                this.initInteractionsTypes();
                this.runInteractions();
            }

            onWindowResize() {
                this.defineDimensions();
            }

        }

        exports.default = _default;

        /***/ }),

},
    /******/ __webpack_require__ => { // webpackRuntimeModules
        /******/ "use strict";
        /******/
        /******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
        /******/ var __webpack_exports__ = (__webpack_exec__("../assets/dev/js/frontend/frontend.js"));
        /******/ }
]);
//# sourceMappingURL=frontend.js.map


/* https://demo2.wpopal.com/spaciaz/wp-content/themes/spaciaz/inc/elementor/background-shape/background-shape.js?ver=1.2.3 */
(function ($, elementorFrontend, elementorModules) {
    'use strict';
    var _decor = elementorModules.frontend.handlers.Base.extend({
        onInit() {
            const elementSettings = this.getElementSettings();
            if (elementSettings.spaciaz_decor_top_left === 'yes') {
                this.$element.append(`<div class="spaciaz-border-shape top-left"></div>`);
            }
            if (elementSettings.spaciaz_decor_top_right === 'yes') {
                this.$element.append(`<div class="spaciaz-border-shape top-right"></div>`);
            }
            if (elementSettings.spaciaz_decor_bottom_right === 'yes') {
                this.$element.append(`<div class="spaciaz-border-shape bottom-right"></div>`);
            }
            if (elementSettings.spaciaz_decor_bottom_left === 'yes') {
                this.$element.append(`<div class="spaciaz-border-shape bottom-left"></div>`);
            }
        }
    });

    $(window).on('elementor/frontend/init', () => {
        const addHandler = ($element) => {
            elementorFrontend.elementsHandler.addHandler(_decor, {
                $element,
            });
        };

        elementorFrontend.hooks.addAction('frontend/element_ready/section', addHandler);
        elementorFrontend.hooks.addAction('frontend/element_ready/container', addHandler);
        elementorFrontend.hooks.addAction('frontend/element_ready/widget', addHandler);
    });

}(jQuery, window.elementorFrontend, window.elementorModules));
