/* ////////////////////////////////////// */

/*! jQuery v1.11.0 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */

/* ////////////////////////////////////// */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k="".trim,l={},m="1.11.0",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(n.isPlainObject(c)||(b=n.isArray(c)))?(b?(b=!1,f=a&&n.isArray(a)?a:[]):f=a&&n.isPlainObject(a)?a:{},g[d]=n.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray||function(a){return"array"===n.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return a-parseFloat(a)>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(l.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&n.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:k&&!k.call("\ufeff\xa0")?function(a){return null==a?"":k.call(a)}:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),n.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||n.guid++,e):void 0},now:function(){return+new Date},support:l}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s="sizzle"+-new Date,t=a.document,u=0,v=0,w=eb(),x=eb(),y=eb(),z=function(a,b){return a===b&&(j=!0),0},A="undefined",B=1<<31,C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=D.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",M=L.replace("w","w#"),N="\\["+K+"*("+L+")"+K+"*(?:([*^$|!~]?=)"+K+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+M+")|)|)"+K+"*\\]",O=":("+L+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+N.replace(3,8)+")*)|.*)\\)|)",P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(O),U=new RegExp("^"+M+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L.replace("w","w*")+")"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=/'|\\/g,ab=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),bb=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{G.apply(D=H.call(t.childNodes),t.childNodes),D[t.childNodes.length].nodeType}catch(cb){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function db(a,b,d,e){var f,g,h,i,j,m,p,q,u,v;if((b?b.ownerDocument||b:t)!==l&&k(b),b=b||l,d=d||[],!a||"string"!=typeof a)return d;if(1!==(i=b.nodeType)&&9!==i)return[];if(n&&!e){if(f=Z.exec(a))if(h=f[1]){if(9===i){if(g=b.getElementById(h),!g||!g.parentNode)return d;if(g.id===h)return d.push(g),d}else if(b.ownerDocument&&(g=b.ownerDocument.getElementById(h))&&r(b,g)&&g.id===h)return d.push(g),d}else{if(f[2])return G.apply(d,b.getElementsByTagName(a)),d;if((h=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(h)),d}if(c.qsa&&(!o||!o.test(a))){if(q=p=s,u=b,v=9===i&&a,1===i&&"object"!==b.nodeName.toLowerCase()){m=ob(a),(p=b.getAttribute("id"))?q=p.replace(_,"\\$&"):b.setAttribute("id",q),q="[id='"+q+"'] ",j=m.length;while(j--)m[j]=q+pb(m[j]);u=$.test(a)&&mb(b.parentNode)||b,v=m.join(",")}if(v)try{return G.apply(d,u.querySelectorAll(v)),d}catch(w){}finally{p||b.removeAttribute("id")}}}return xb(a.replace(P,"$1"),b,d,e)}function eb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function fb(a){return a[s]=!0,a}function gb(a){var b=l.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function hb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function ib(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||B)-(~a.sourceIndex||B);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function jb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function kb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function lb(a){return fb(function(b){return b=+b,fb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function mb(a){return a&&typeof a.getElementsByTagName!==A&&a}c=db.support={},f=db.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},k=db.setDocument=function(a){var b,e=a?a.ownerDocument||a:t,g=e.defaultView;return e!==l&&9===e.nodeType&&e.documentElement?(l=e,m=e.documentElement,n=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){k()},!1):g.attachEvent&&g.attachEvent("onunload",function(){k()})),c.attributes=gb(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=gb(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(e.getElementsByClassName)&&gb(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=gb(function(a){return m.appendChild(a).id=s,!e.getElementsByName||!e.getElementsByName(s).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==A&&n){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ab,bb);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ab,bb);return function(a){var c=typeof a.getAttributeNode!==A&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==A?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==A&&n?b.getElementsByClassName(a):void 0},p=[],o=[],(c.qsa=Y.test(e.querySelectorAll))&&(gb(function(a){a.innerHTML="<select t=''><option selected=''></option></select>",a.querySelectorAll("[t^='']").length&&o.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||o.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll(":checked").length||o.push(":checked")}),gb(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&o.push("name"+K+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||o.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),o.push(",.*:")})),(c.matchesSelector=Y.test(q=m.webkitMatchesSelector||m.mozMatchesSelector||m.oMatchesSelector||m.msMatchesSelector))&&gb(function(a){c.disconnectedMatch=q.call(a,"div"),q.call(a,"[s!='']:x"),p.push("!=",O)}),o=o.length&&new RegExp(o.join("|")),p=p.length&&new RegExp(p.join("|")),b=Y.test(m.compareDocumentPosition),r=b||Y.test(m.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},z=b?function(a,b){if(a===b)return j=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===t&&r(t,a)?-1:b===e||b.ownerDocument===t&&r(t,b)?1:i?I.call(i,a)-I.call(i,b):0:4&d?-1:1)}:function(a,b){if(a===b)return j=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],k=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:i?I.call(i,a)-I.call(i,b):0;if(f===g)return ib(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)k.unshift(c);while(h[d]===k[d])d++;return d?ib(h[d],k[d]):h[d]===t?-1:k[d]===t?1:0},e):l},db.matches=function(a,b){return db(a,null,null,b)},db.matchesSelector=function(a,b){if((a.ownerDocument||a)!==l&&k(a),b=b.replace(S,"='$1']"),!(!c.matchesSelector||!n||p&&p.test(b)||o&&o.test(b)))try{var d=q.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return db(b,l,null,[a]).length>0},db.contains=function(a,b){return(a.ownerDocument||a)!==l&&k(a),r(a,b)},db.attr=function(a,b){(a.ownerDocument||a)!==l&&k(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!n):void 0;return void 0!==f?f:c.attributes||!n?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},db.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},db.uniqueSort=function(a){var b,d=[],e=0,f=0;if(j=!c.detectDuplicates,i=!c.sortStable&&a.slice(0),a.sort(z),j){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return i=null,a},e=db.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=db.selectors={cacheLength:50,createPseudo:fb,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ab,bb),a[3]=(a[4]||a[5]||"").replace(ab,bb),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||db.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&db.error(a[0]),a},PSEUDO:function(a){var b,c=!a[5]&&a[2];return V.CHILD.test(a[0])?null:(a[3]&&void 0!==a[4]?a[2]=a[4]:c&&T.test(c)&&(b=ob(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ab,bb).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=w[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&w(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==A&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=db.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),t=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&t){k=q[s]||(q[s]={}),j=k[a]||[],n=j[0]===u&&j[1],m=j[0]===u&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[u,n,m];break}}else if(t&&(j=(b[s]||(b[s]={}))[a])&&j[0]===u)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(t&&((l[s]||(l[s]={}))[a]=[u,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||db.error("unsupported pseudo: "+a);return e[s]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?fb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:fb(function(a){var b=[],c=[],d=g(a.replace(P,"$1"));return d[s]?fb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:fb(function(a){return function(b){return db(a,b).length>0}}),contains:fb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:fb(function(a){return U.test(a||"")||db.error("unsupported lang: "+a),a=a.replace(ab,bb).toLowerCase(),function(b){var c;do if(c=n?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===m},focus:function(a){return a===l.activeElement&&(!l.hasFocus||l.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:lb(function(){return[0]}),last:lb(function(a,b){return[b-1]}),eq:lb(function(a,b,c){return[0>c?c+b:c]}),even:lb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:lb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:lb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:lb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=jb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=kb(b);function nb(){}nb.prototype=d.filters=d.pseudos,d.setFilters=new nb;function ob(a,b){var c,e,f,g,h,i,j,k=x[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=Q.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?db.error(a):x(a,i).slice(0)}function pb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function qb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=v++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[u,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[s]||(b[s]={}),(h=i[d])&&h[0]===u&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function rb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function sb(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function tb(a,b,c,d,e,f){return d&&!d[s]&&(d=tb(d)),e&&!e[s]&&(e=tb(e,f)),fb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||wb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:sb(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=sb(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=sb(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ub(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],i=g||d.relative[" "],j=g?1:0,k=qb(function(a){return a===b},i,!0),l=qb(function(a){return I.call(b,a)>-1},i,!0),m=[function(a,c,d){return!g&&(d||c!==h)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>j;j++)if(c=d.relative[a[j].type])m=[qb(rb(m),c)];else{if(c=d.filter[a[j].type].apply(null,a[j].matches),c[s]){for(e=++j;f>e;e++)if(d.relative[a[e].type])break;return tb(j>1&&rb(m),j>1&&pb(a.slice(0,j-1).concat({value:" "===a[j-2].type?"*":""})).replace(P,"$1"),c,e>j&&ub(a.slice(j,e)),f>e&&ub(a=a.slice(e)),f>e&&pb(a))}m.push(c)}return rb(m)}function vb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,i,j,k){var m,n,o,p=0,q="0",r=f&&[],s=[],t=h,v=f||e&&d.find.TAG("*",k),w=u+=null==t?1:Math.random()||.1,x=v.length;for(k&&(h=g!==l&&g);q!==x&&null!=(m=v[q]);q++){if(e&&m){n=0;while(o=a[n++])if(o(m,g,i)){j.push(m);break}k&&(u=w)}c&&((m=!o&&m)&&p--,f&&r.push(m))}if(p+=q,c&&q!==p){n=0;while(o=b[n++])o(r,s,g,i);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=E.call(j));s=sb(s)}G.apply(j,s),k&&!f&&s.length>0&&p+b.length>1&&db.uniqueSort(j)}return k&&(u=w,h=t),r};return c?fb(f):f}g=db.compile=function(a,b){var c,d=[],e=[],f=y[a+" "];if(!f){b||(b=ob(a)),c=b.length;while(c--)f=ub(b[c]),f[s]?d.push(f):e.push(f);f=y(a,vb(e,d))}return f};function wb(a,b,c){for(var d=0,e=b.length;e>d;d++)db(a,b[d],c);return c}function xb(a,b,e,f){var h,i,j,k,l,m=ob(a);if(!f&&1===m.length){if(i=m[0]=m[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&c.getById&&9===b.nodeType&&n&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(ab,bb),b)||[])[0],!b)return e;a=a.slice(i.shift().value.length)}h=V.needsContext.test(a)?0:i.length;while(h--){if(j=i[h],d.relative[k=j.type])break;if((l=d.find[k])&&(f=l(j.matches[0].replace(ab,bb),$.test(i[0].type)&&mb(b.parentNode)||b))){if(i.splice(h,1),a=f.length&&pb(i),!a)return G.apply(e,f),e;break}}}return g(a,m)(f,b,!n,e,$.test(a)&&mb(b.parentNode)||b),e}return c.sortStable=s.split("").sort(z).join("")===s,c.detectDuplicates=!!j,k(),c.sortDetached=gb(function(a){return 1&a.compareDocumentPosition(l.createElement("div"))}),gb(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||hb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&gb(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||hb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),gb(function(a){return null==a.getAttribute("disabled")})||hb(J,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),db}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return n.inArray(a,b)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;e>b;b++)if(n.contains(d[b],this))return!0}));for(b=0;e>b;b++)n.find(a,d[b],c);return c=this.pushStack(e>1?n.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=a.document,A=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,B=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:A.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:z,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=z.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return y.find(a);this.length=1,this[0]=d}return this.context=z,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};B.prototype=n.fn,y=n(z);var C=/^(?:parents|prev(?:Until|All))/,D={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!n(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b,c=n(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(n.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?n.inArray(this[0],n(a)):n.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function E(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return E(a,"nextSibling")},prev:function(a){return E(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return n.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(D[a]||(e=n.unique(e)),C.test(a)&&(e=e.reverse())),this.pushStack(e)}});var F=/\S+/g,G={};function H(a){var b=G[a]={};return n.each(a.match(F)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?G[a]||H(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&n.each(arguments,function(a,c){var d;while((d=n.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){if(a===!0?!--n.readyWait:!n.isReady){if(!z.body)return setTimeout(n.ready);n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(z,[n]),n.fn.trigger&&n(z).trigger("ready").off("ready"))}}});function J(){z.addEventListener?(z.removeEventListener("DOMContentLoaded",K,!1),a.removeEventListener("load",K,!1)):(z.detachEvent("onreadystatechange",K),a.detachEvent("onload",K))}function K(){(z.addEventListener||"load"===event.type||"complete"===z.readyState)&&(J(),n.ready())}n.ready.promise=function(b){if(!I)if(I=n.Deferred(),"complete"===z.readyState)setTimeout(n.ready);else if(z.addEventListener)z.addEventListener("DOMContentLoaded",K,!1),a.addEventListener("load",K,!1);else{z.attachEvent("onreadystatechange",K),a.attachEvent("onload",K);var c=!1;try{c=null==a.frameElement&&z.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!n.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}J(),n.ready()}}()}return I.promise(b)};var L="undefined",M;for(M in n(l))break;l.ownLast="0"!==M,l.inlineBlockNeedsLayout=!1,n(function(){var a,b,c=z.getElementsByTagName("body")[0];c&&(a=z.createElement("div"),a.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",b=z.createElement("div"),c.appendChild(a).appendChild(b),typeof b.style.zoom!==L&&(b.style.cssText="border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1",(l.inlineBlockNeedsLayout=3===b.offsetWidth)&&(c.style.zoom=1)),c.removeChild(a),a=b=null)}),function(){var a=z.createElement("div");if(null==l.deleteExpando){l.deleteExpando=!0;try{delete a.test}catch(b){l.deleteExpando=!1}}a=null}(),n.acceptData=function(a){var b=n.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(O,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}n.data(a,b,c)}else c=void 0}return c}function Q(a){var b;for(b in a)if(("data"!==b||!n.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function R(a,b,d,e){if(n.acceptData(a)){var f,g,h=n.expando,i=a.nodeType,j=i?n.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||n.guid++:h),j[k]||(j[k]=i?{}:{toJSON:n.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=n.extend(j[k],b):j[k].data=n.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[n.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[n.camelCase(b)])):f=g,f
}}function S(a,b,c){if(n.acceptData(a)){var d,e,f=a.nodeType,g=f?n.cache:a,h=f?a[n.expando]:n.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){n.isArray(b)?b=b.concat(n.map(b,n.camelCase)):b in d?b=[b]:(b=n.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!Q(d):!n.isEmptyObject(d))return}(c||(delete g[h].data,Q(g[h])))&&(f?n.cleanData([a],!0):l.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}n.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?n.cache[a[n.expando]]:a[n.expando],!!a&&!Q(a)},data:function(a,b,c){return R(a,b,c)},removeData:function(a,b){return S(a,b)},_data:function(a,b,c){return R(a,b,c,!0)},_removeData:function(a,b){return S(a,b,!0)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=n.data(f),1===f.nodeType&&!n._data(f,"parsedAttrs"))){c=g.length;while(c--)d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d]));n._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){n.data(this,a)}):arguments.length>1?this.each(function(){n.data(this,a,b)}):f?P(f,a,n.data(f,a)):void 0},removeData:function(a){return this.each(function(){n.removeData(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=n._data(a,b),c&&(!d||n.isArray(c)?d=n._data(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return n._data(a,c)||n._data(a,c,{empty:n.Callbacks("once memory").add(function(){n._removeData(a,b+"queue"),n._removeData(a,c)})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=n._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var T=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,U=["Top","Right","Bottom","Left"],V=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},W=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},X=/^(?:checkbox|radio)$/i;!function(){var a=z.createDocumentFragment(),b=z.createElement("div"),c=z.createElement("input");if(b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a>",l.leadingWhitespace=3===b.firstChild.nodeType,l.tbody=!b.getElementsByTagName("tbody").length,l.htmlSerialize=!!b.getElementsByTagName("link").length,l.html5Clone="<:nav></:nav>"!==z.createElement("nav").cloneNode(!0).outerHTML,c.type="checkbox",c.checked=!0,a.appendChild(c),l.appendChecked=c.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,a.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,l.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){l.noCloneEvent=!1}),b.cloneNode(!0).click()),null==l.deleteExpando){l.deleteExpando=!0;try{delete b.test}catch(d){l.deleteExpando=!1}}a=b=c=null}(),function(){var b,c,d=z.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(l[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),l[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var Y=/^(?:input|select|textarea)$/i,Z=/^key/,$=/^(?:mouse|contextmenu)|click/,_=/^(?:focusinfocus|focusoutblur)$/,ab=/^([^.]*)(?:\.(.+)|)$/;function bb(){return!0}function cb(){return!1}function db(){try{return z.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=n.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof n===L||a&&n.event.triggered===a.type?void 0:n.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(F)||[""],h=b.length;while(h--)f=ab.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=n.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=n.event.special[o]||{},l=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},i),(m=g[o])||(m=g[o]=[],m.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,l):m.push(l),n.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n.hasData(a)&&n._data(a);if(r&&(k=r.events)){b=(b||"").match(F)||[""],j=b.length;while(j--)if(h=ab.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=m.length;while(f--)g=m[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(m.splice(f,1),g.selector&&m.delegateCount--,l.remove&&l.remove.call(a,g));i&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(k)&&(delete r.handle,n._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,m,o=[d||z],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||z,3!==d.nodeType&&8!==d.nodeType&&!_.test(p+n.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[n.expando]?b:new n.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),k=n.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!n.isWindow(d)){for(i=k.delegateType||p,_.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||z)&&o.push(l.defaultView||l.parentWindow||a)}m=0;while((h=o[m++])&&!b.isPropagationStopped())b.type=m>1?i:k.bindType||p,f=(n._data(h,"events")||{})[b.type]&&n._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&n.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&n.acceptData(d)&&g&&d[p]&&!n.isWindow(d)){l=d[g],l&&(d[g]=null),n.event.triggered=p;try{d[p]()}catch(r){}n.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(n._data(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((n.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?n(c,this).index(i)>=0:n.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=$.test(e)?this.mouseHooks:Z.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||z),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||z,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==db()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===db()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return n.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=z.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===L&&(a[d]=null),a.detachEvent(d,c))},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&(a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault())?bb:cb):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:cb,isPropagationStopped:cb,isImmediatePropagationStopped:cb,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=bb,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=bb,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=bb,this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.submitBubbles||(n.event.special.submit={setup:function(){return n.nodeName(this,"form")?!1:void n.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=n.nodeName(b,"input")||n.nodeName(b,"button")?b.form:void 0;c&&!n._data(c,"submitBubbles")&&(n.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),n._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&n.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return n.nodeName(this,"form")?!1:void n.event.remove(this,"._submit")}}),l.changeBubbles||(n.event.special.change={setup:function(){return Y.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(n.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),n.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),n.event.simulate("change",this,a,!0)})),!1):void n.event.add(this,"beforeactivate._change",function(a){var b=a.target;Y.test(b.nodeName)&&!n._data(b,"changeBubbles")&&(n.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||n.event.simulate("change",this.parentNode,a,!0)}),n._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return n.event.remove(this,"._change"),!Y.test(this.nodeName)}}),l.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=n._data(d,b);e||d.addEventListener(a,c,!0),n._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=n._data(d,b)-1;e?n._data(d,b,e):(d.removeEventListener(a,c,!0),n._removeData(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=cb;else if(!d)return this;return 1===e&&(g=d,d=function(a){return n().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=cb),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});function eb(a){var b=fb.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var fb="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gb=/ jQuery\d+="(?:null|\d+)"/g,hb=new RegExp("<(?:"+fb+")[\\s/>]","i"),ib=/^\s+/,jb=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,kb=/<([\w:]+)/,lb=/<tbody/i,mb=/<|&#?\w+;/,nb=/<(?:script|style|link)/i,ob=/checked\s*(?:[^=]|=\s*.checked.)/i,pb=/^$|\/(?:java|ecma)script/i,qb=/^true\/(.*)/,rb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,sb={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:l.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},tb=eb(z),ub=tb.appendChild(z.createElement("div"));sb.optgroup=sb.option,sb.tbody=sb.tfoot=sb.colgroup=sb.caption=sb.thead,sb.th=sb.td;function vb(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==L?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==L?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||n.nodeName(d,b)?f.push(d):n.merge(f,vb(d,b));return void 0===b||b&&n.nodeName(a,b)?n.merge([a],f):f}function wb(a){X.test(a.type)&&(a.defaultChecked=a.checked)}function xb(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function yb(a){return a.type=(null!==n.find.attr(a,"type"))+"/"+a.type,a}function zb(a){var b=qb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ab(a,b){for(var c,d=0;null!=(c=a[d]);d++)n._data(c,"globalEval",!b||n._data(b[d],"globalEval"))}function Bb(a,b){if(1===b.nodeType&&n.hasData(a)){var c,d,e,f=n._data(a),g=n._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)n.event.add(b,c,h[c][d])}g.data&&(g.data=n.extend({},g.data))}}function Cb(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!l.noCloneEvent&&b[n.expando]){e=n._data(b);for(d in e.events)n.removeEvent(b,d,e.handle);b.removeAttribute(n.expando)}"script"===c&&b.text!==a.text?(yb(b).text=a.text,zb(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),l.html5Clone&&a.innerHTML&&!n.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&X.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}n.extend({clone:function(a,b,c){var d,e,f,g,h,i=n.contains(a.ownerDocument,a);if(l.html5Clone||n.isXMLDoc(a)||!hb.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(ub.innerHTML=a.outerHTML,ub.removeChild(f=ub.firstChild)),!(l.noCloneEvent&&l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(d=vb(f),h=vb(a),g=0;null!=(e=h[g]);++g)d[g]&&Cb(e,d[g]);if(b)if(c)for(h=h||vb(a),d=d||vb(f),g=0;null!=(e=h[g]);g++)Bb(e,d[g]);else Bb(a,f);return d=vb(f,"script"),d.length>0&&Ab(d,!i&&vb(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k,m=a.length,o=eb(b),p=[],q=0;m>q;q++)if(f=a[q],f||0===f)if("object"===n.type(f))n.merge(p,f.nodeType?[f]:f);else if(mb.test(f)){h=h||o.appendChild(b.createElement("div")),i=(kb.exec(f)||["",""])[1].toLowerCase(),k=sb[i]||sb._default,h.innerHTML=k[1]+f.replace(jb,"<$1></$2>")+k[2],e=k[0];while(e--)h=h.lastChild;if(!l.leadingWhitespace&&ib.test(f)&&p.push(b.createTextNode(ib.exec(f)[0])),!l.tbody){f="table"!==i||lb.test(f)?"<table>"!==k[1]||lb.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)n.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}n.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),l.appendChecked||n.grep(vb(p,"input"),wb),q=0;while(f=p[q++])if((!d||-1===n.inArray(f,d))&&(g=n.contains(f.ownerDocument,f),h=vb(o.appendChild(f),"script"),g&&Ab(h),c)){e=0;while(f=h[e++])pb.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=n.expando,j=n.cache,k=l.deleteExpando,m=n.event.special;null!=(d=a[h]);h++)if((b||n.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)m[e]?n.event.remove(d,e):n.removeEvent(d,e,g.handle);j[f]&&(delete j[f],k?delete d[i]:typeof d.removeAttribute!==L?d.removeAttribute(i):d[i]=null,c.push(f))}}}),n.fn.extend({text:function(a){return W(this,function(a){return void 0===a?n.text(this):this.empty().append((this[0]&&this[0].ownerDocument||z).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=xb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=xb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(vb(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&Ab(vb(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&n.cleanData(vb(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&n.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return W(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(gb,""):void 0;if(!("string"!=typeof a||nb.test(a)||!l.htmlSerialize&&hb.test(a)||!l.leadingWhitespace&&ib.test(a)||sb[(kb.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(jb,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(vb(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(vb(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,k=this.length,m=this,o=k-1,p=a[0],q=n.isFunction(p);if(q||k>1&&"string"==typeof p&&!l.checkClone&&ob.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(k&&(i=n.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=n.map(vb(i,"script"),yb),f=g.length;k>j;j++)d=i,j!==o&&(d=n.clone(d,!0,!0),f&&n.merge(g,vb(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,n.map(g,zb),j=0;f>j;j++)d=g[j],pb.test(d.type||"")&&!n._data(d,"globalEval")&&n.contains(h,d)&&(d.src?n._evalUrl&&n._evalUrl(d.src):n.globalEval((d.text||d.textContent||d.innerHTML||"").replace(rb,"")));i=c=null}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=0,e=[],g=n(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),n(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Db,Eb={};function Fb(b,c){var d=n(c.createElement(b)).appendTo(c.body),e=a.getDefaultComputedStyle?a.getDefaultComputedStyle(d[0]).display:n.css(d[0],"display");return d.detach(),e}function Gb(a){var b=z,c=Eb[a];return c||(c=Fb(a,b),"none"!==c&&c||(Db=(Db||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Db[0].contentWindow||Db[0].contentDocument).document,b.write(),b.close(),c=Fb(a,b),Db.detach()),Eb[a]=c),c}!function(){var a,b,c=z.createElement("div"),d="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";c.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=c.getElementsByTagName("a")[0],a.style.cssText="float:left;opacity:.5",l.opacity=/^0.5/.test(a.style.opacity),l.cssFloat=!!a.style.cssFloat,c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===c.style.backgroundClip,a=c=null,l.shrinkWrapBlocks=function(){var a,c,e,f;if(null==b){if(a=z.getElementsByTagName("body")[0],!a)return;f="border:0;width:0;height:0;position:absolute;top:0;left:-9999px",c=z.createElement("div"),e=z.createElement("div"),a.appendChild(c).appendChild(e),b=!1,typeof e.style.zoom!==L&&(e.style.cssText=d+";width:1px;padding:1px;zoom:1",e.innerHTML="<div></div>",e.firstChild.style.width="5px",b=3!==e.offsetWidth),a.removeChild(c),a=c=e=null}return b}}();var Hb=/^margin/,Ib=new RegExp("^("+T+")(?!px)[a-z%]+$","i"),Jb,Kb,Lb=/^(top|right|bottom|left)$/;a.getComputedStyle?(Jb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)},Kb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Jb(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),Ib.test(g)&&Hb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):z.documentElement.currentStyle&&(Jb=function(a){return a.currentStyle},Kb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Jb(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Ib.test(g)&&!Lb.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Mb(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h=z.createElement("div"),i="border:0;width:0;height:0;position:absolute;top:0;left:-9999px",j="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";h.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",b=h.getElementsByTagName("a")[0],b.style.cssText="float:left;opacity:.5",l.opacity=/^0.5/.test(b.style.opacity),l.cssFloat=!!b.style.cssFloat,h.style.backgroundClip="content-box",h.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===h.style.backgroundClip,b=h=null,n.extend(l,{reliableHiddenOffsets:function(){if(null!=c)return c;var a,b,d,e=z.createElement("div"),f=z.getElementsByTagName("body")[0];if(f)return e.setAttribute("className","t"),e.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=z.createElement("div"),a.style.cssText=i,f.appendChild(a).appendChild(e),e.innerHTML="<table><tr><td></td><td>t</td></tr></table>",b=e.getElementsByTagName("td"),b[0].style.cssText="padding:0;margin:0;border:0;display:none",d=0===b[0].offsetHeight,b[0].style.display="",b[1].style.display="none",c=d&&0===b[0].offsetHeight,f.removeChild(a),e=f=null,c},boxSizing:function(){return null==d&&k(),d},boxSizingReliable:function(){return null==e&&k(),e},pixelPosition:function(){return null==f&&k(),f},reliableMarginRight:function(){var b,c,d,e;if(null==g&&a.getComputedStyle){if(b=z.getElementsByTagName("body")[0],!b)return;c=z.createElement("div"),d=z.createElement("div"),c.style.cssText=i,b.appendChild(c).appendChild(d),e=d.appendChild(z.createElement("div")),e.style.cssText=d.style.cssText=j,e.style.marginRight=e.style.width="0",d.style.width="1px",g=!parseFloat((a.getComputedStyle(e,null)||{}).marginRight),b.removeChild(c)}return g}});function k(){var b,c,h=z.getElementsByTagName("body")[0];h&&(b=z.createElement("div"),c=z.createElement("div"),b.style.cssText=i,h.appendChild(b).appendChild(c),c.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%",n.swap(h,null!=h.style.zoom?{zoom:1}:{},function(){d=4===c.offsetWidth}),e=!0,f=!1,g=!0,a.getComputedStyle&&(f="1%"!==(a.getComputedStyle(c,null)||{}).top,e="4px"===(a.getComputedStyle(c,null)||{width:"4px"}).width),h.removeChild(b),c=h=null)}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Nb=/alpha\([^)]*\)/i,Ob=/opacity\s*=\s*([^)]*)/,Pb=/^(none|table(?!-c[ea]).+)/,Qb=new RegExp("^("+T+")(.*)$","i"),Rb=new RegExp("^([+-])=("+T+")","i"),Sb={position:"absolute",visibility:"hidden",display:"block"},Tb={letterSpacing:0,fontWeight:400},Ub=["Webkit","O","Moz","ms"];function Vb(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Ub.length;while(e--)if(b=Ub[e]+c,b in a)return b;return d}function Wb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=n._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&V(d)&&(f[g]=n._data(d,"olddisplay",Gb(d.nodeName)))):f[g]||(e=V(d),(c&&"none"!==c||!e)&&n._data(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Xb(a,b,c){var d=Qb.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Yb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+U[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+U[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+U[f]+"Width",!0,e))):(g+=n.css(a,"padding"+U[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+U[f]+"Width",!0,e)));return g}function Zb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Jb(a),g=l.boxSizing()&&"border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Kb(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ib.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Yb(a,b,c||(g?"border":"content"),d,f)+"px"}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Kb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":l.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;if(b=n.cssProps[h]||(n.cssProps[h]=Vb(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Rb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]="",i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Vb(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Kb(a,b,d)),"normal"===f&&b in Tb&&(f=Tb[b]),""===c||c?(e=parseFloat(f),c===!0||n.isNumeric(e)?e||0:f):f}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?0===a.offsetWidth&&Pb.test(n.css(a,"display"))?n.swap(a,Sb,function(){return Zb(a,b,d)}):Zb(a,b,d):void 0},set:function(a,c,d){var e=d&&Jb(a);return Xb(a,c,d?Yb(a,b,d,l.boxSizing()&&"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),l.opacity||(n.cssHooks.opacity={get:function(a,b){return Ob.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=n.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===n.trim(f.replace(Nb,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Nb.test(f)?f.replace(Nb,e):f+" "+e)}}),n.cssHooks.marginRight=Mb(l.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},Kb,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+U[d]+b]=f[d]||f[d-2]||f[0];return e}},Hb.test(a)||(n.cssHooks[a+b].set=Xb)}),n.fn.extend({css:function(a,b){return W(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Jb(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)
},a,b,arguments.length>1)},show:function(){return Wb(this,!0)},hide:function(){return Wb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){V(this)?n(this).show():n(this).hide()})}});function $b(a,b,c,d,e){return new $b.prototype.init(a,b,c,d,e)}n.Tween=$b,$b.prototype={constructor:$b,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=$b.propHooks[this.prop];return a&&a.get?a.get(this):$b.propHooks._default.get(this)},run:function(a){var b,c=$b.propHooks[this.prop];return this.pos=b=this.options.duration?n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):$b.propHooks._default.set(this),this}},$b.prototype.init.prototype=$b.prototype,$b.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},$b.propHooks.scrollTop=$b.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=$b.prototype.init,n.fx.step={};var _b,ac,bc=/^(?:toggle|show|hide)$/,cc=new RegExp("^(?:([+-])=|)("+T+")([a-z%]*)$","i"),dc=/queueHooks$/,ec=[jc],fc={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=cc.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&cc.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function gc(){return setTimeout(function(){_b=void 0}),_b=n.now()}function hc(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=U[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function ic(a,b,c){for(var d,e=(fc[b]||[]).concat(fc["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function jc(a,b,c){var d,e,f,g,h,i,j,k,m=this,o={},p=a.style,q=a.nodeType&&V(a),r=n._data(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,m.always(function(){m.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=n.css(a,"display"),k=Gb(a.nodeName),"none"===j&&(j=k),"inline"===j&&"none"===n.css(a,"float")&&(l.inlineBlockNeedsLayout&&"inline"!==k?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",l.shrinkWrapBlocks()||m.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],bc.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||n.style(a,d)}if(!n.isEmptyObject(o)){r?"hidden"in r&&(q=r.hidden):r=n._data(a,"fxshow",{}),f&&(r.hidden=!q),q?n(a).show():m.done(function(){n(a).hide()}),m.done(function(){var b;n._removeData(a,"fxshow");for(b in o)n.style(a,b,o[b])});for(d in o)g=ic(q?r[d]:0,d,m),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function kc(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function lc(a,b,c){var d,e,f=0,g=ec.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=_b||gc(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:_b||gc(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(kc(k,j.opts.specialEasing);g>f;f++)if(d=ec[f].call(j,a,k,j.opts))return d;return n.map(k,ic,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(lc,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],fc[c]=fc[c]||[],fc[c].unshift(b)},prefilter:function(a,b){b?ec.unshift(a):ec.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(V).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=lc(this,n.extend({},a),f);(e||n._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=n._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&dc.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=n._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(hc(b,!0),a,d,e)}}),n.each({slideDown:hc("show"),slideUp:hc("hide"),slideToggle:hc("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=n.timers,c=0;for(_b=n.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||n.fx.stop(),_b=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){ac||(ac=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(ac),ac=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e=z.createElement("div");e.setAttribute("className","t"),e.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=e.getElementsByTagName("a")[0],c=z.createElement("select"),d=c.appendChild(z.createElement("option")),b=e.getElementsByTagName("input")[0],a.style.cssText="top:1px",l.getSetAttribute="t"!==e.className,l.style=/top/.test(a.getAttribute("style")),l.hrefNormalized="/a"===a.getAttribute("href"),l.checkOn=!!b.value,l.optSelected=d.selected,l.enctype=!!z.createElement("form").enctype,c.disabled=!0,l.optDisabled=!d.disabled,b=z.createElement("input"),b.setAttribute("value",""),l.input=""===b.getAttribute("value"),b.value="t",b.setAttribute("type","radio"),l.radioValue="t"===b.value,a=b=c=d=e=null}();var mc=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(mc,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.text(a)}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(l.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)if(d=e[g],n.inArray(n.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var nc,oc,pc=n.expr.attrHandle,qc=/^(?:checked|selected)$/i,rc=l.getSetAttribute,sc=l.input;n.fn.extend({attr:function(a,b){return W(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===L?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?oc:nc)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(F);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)?sc&&rc||!qc.test(c)?a[d]=!1:a[n.camelCase("default-"+c)]=a[d]=!1:n.attr(a,c,""),a.removeAttribute(rc?c:d)},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),oc={set:function(a,b,c){return b===!1?n.removeAttr(a,c):sc&&rc||!qc.test(c)?a.setAttribute(!rc&&n.propFix[c]||c,c):a[n.camelCase("default-"+c)]=a[c]=!0,c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=pc[b]||n.find.attr;pc[b]=sc&&rc||!qc.test(b)?function(a,b,d){var e,f;return d||(f=pc[b],pc[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,pc[b]=f),e}:function(a,b,c){return c?void 0:a[n.camelCase("default-"+b)]?b.toLowerCase():null}}),sc&&rc||(n.attrHooks.value={set:function(a,b,c){return n.nodeName(a,"input")?void(a.defaultValue=b):nc&&nc.set(a,b,c)}}),rc||(nc={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},pc.id=pc.name=pc.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},n.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:nc.set},n.attrHooks.contenteditable={set:function(a,b,c){nc.set(a,""===b?!1:b,c)}},n.each(["width","height"],function(a,b){n.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),l.style||(n.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var tc=/^(?:input|select|textarea|button|object)$/i,uc=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return W(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return a=n.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):tc.test(a.nodeName)||uc.test(a.nodeName)&&a.href?0:-1}}}}),l.hrefNormalized||n.each(["href","src"],function(a,b){n.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this}),l.enctype||(n.propFix.enctype="encoding");var vc=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(F)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(vc," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(F)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(vc," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(F)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===L||"boolean"===c)&&(this.className&&n._data(this,"__className__",this.className),this.className=this.className||a===!1?"":n._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(vc," ").indexOf(b)>=0)return!0;return!1}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var wc=n.now(),xc=/\?/,yc=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;n.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=n.trim(b+"");return e&&!n.trim(e.replace(yc,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():n.error("Invalid JSON: "+b)},n.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var zc,Ac,Bc=/#.*$/,Cc=/([?&])_=[^&]*/,Dc=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Ec=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Fc=/^(?:GET|HEAD)$/,Gc=/^\/\//,Hc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Ic={},Jc={},Kc="*/".concat("*");try{Ac=location.href}catch(Lc){Ac=z.createElement("a"),Ac.href="",Ac=Ac.href}zc=Hc.exec(Ac.toLowerCase())||[];function Mc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(F)||[];if(n.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Nc(a,b,c,d){var e={},f=a===Jc;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Oc(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&n.extend(!0,a,c),a}function Pc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Qc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ac,type:"GET",isLocal:Ec.test(zc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Kc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Oc(Oc(a,n.ajaxSettings),b):Oc(n.ajaxSettings,a)},ajaxPrefilter:Mc(Ic),ajaxTransport:Mc(Jc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Dc.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||Ac)+"").replace(Bc,"").replace(Gc,zc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(F)||[""],null==k.crossDomain&&(c=Hc.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===zc[1]&&c[2]===zc[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(zc[3]||("http:"===zc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),Nc(Ic,k,b,v),2===t)return v;h=k.global,h&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Fc.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(xc.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Cc.test(e)?e.replace(Cc,"$1_="+wc++):e+(xc.test(e)?"&":"?")+"_="+wc++)),k.ifModified&&(n.lastModified[e]&&v.setRequestHeader("If-Modified-Since",n.lastModified[e]),n.etag[e]&&v.setRequestHeader("If-None-Match",n.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Kc+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Nc(Jc,k,b,v)){v.readyState=1,h&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Pc(k,v,c)),u=Qc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(n.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){if(n.isFunction(a))return this.each(function(b){n(this).wrapAll(a.call(this,b))});if(this[0]){var b=n(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!l.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||n.css(a,"display"))},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var Rc=/%20/g,Sc=/\[\]$/,Tc=/\r?\n/g,Uc=/^(?:submit|button|image|reset|file)$/i,Vc=/^(?:input|select|textarea|keygen)/i;function Wc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||Sc.test(a)?d(a,e):Wc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Wc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Wc(c,a[c],b,e);return d.join("&").replace(Rc,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Vc.test(this.nodeName)&&!Uc.test(a)&&(this.checked||!X.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(Tc,"\r\n")}}):{name:b.name,value:c.replace(Tc,"\r\n")}}).get()}}),n.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&$c()||_c()}:$c;var Xc=0,Yc={},Zc=n.ajaxSettings.xhr();a.ActiveXObject&&n(a).on("unload",function(){for(var a in Yc)Yc[a](void 0,!0)}),l.cors=!!Zc&&"withCredentials"in Zc,Zc=l.ajax=!!Zc,Zc&&n.ajaxTransport(function(a){if(!a.crossDomain||l.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Xc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Yc[g],b=void 0,f.onreadystatechange=n.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Yc[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function $c(){try{return new a.XMLHttpRequest}catch(b){}}function _c(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=z.head||n("head")[0]||z.documentElement;return{send:function(d,e){b=z.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var ad=[],bd=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=ad.pop()||n.expando+"_"+wc++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(bd.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&bd.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(bd,"$1"+e):b.jsonp!==!1&&(b.url+=(xc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,ad.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||z;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var cd=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&cd)return cd.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=a.slice(h,a.length),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&n.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var dd=a.document.documentElement;function ed(a){return n.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&n.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,n.contains(b,e)?(typeof e.getBoundingClientRect!==L&&(d=e.getBoundingClientRect()),c=ed(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===n.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(c=a.offset()),c.top+=n.css(a[0],"borderTopWidth",!0),c.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-n.css(d,"marginTop",!0),left:b.left-c.left-n.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||dd;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||dd})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);n.fn[a]=function(d){return W(this,function(a,d,e){var f=ed(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?n(f).scrollLeft():e,c?e:n(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Mb(l.pixelPosition,function(a,c){return c?(c=Kb(a,b),Ib.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return W(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var fd=a.jQuery,gd=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=gd),b&&a.jQuery===n&&(a.jQuery=fd),n},typeof b===L&&(a.jQuery=a.$=n),n});

/* ////////////////////////////////////// */

/*! jQuery Migrate v1.2.1 | (c) 2005, 2013 jQuery Foundation, Inc. and other contributors | jquery.org/license */

/* ////////////////////////////////////// */
jQuery.migrateMute===void 0&&(jQuery.migrateMute=!0),function(e,t,n){function r(n){var r=t.console;i[n]||(i[n]=!0,e.migrateWarnings.push(n),r&&r.warn&&!e.migrateMute&&(r.warn("JQMIGRATE: "+n),e.migrateTrace&&r.trace&&r.trace()))}function a(t,a,i,o){if(Object.defineProperty)try{return Object.defineProperty(t,a,{configurable:!0,enumerable:!0,get:function(){return r(o),i},set:function(e){r(o),i=e}}),n}catch(s){}e._definePropertyBroken=!0,t[a]=i}var i={};e.migrateWarnings=[],!e.migrateMute&&t.console&&t.console.log&&t.console.log("JQMIGRATE: Logging is active"),e.migrateTrace===n&&(e.migrateTrace=!0),e.migrateReset=function(){i={},e.migrateWarnings.length=0},"BackCompat"===document.compatMode&&r("jQuery is not compatible with Quirks Mode");var o=e("<input/>",{size:1}).attr("size")&&e.attrFn,s=e.attr,u=e.attrHooks.value&&e.attrHooks.value.get||function(){return null},c=e.attrHooks.value&&e.attrHooks.value.set||function(){return n},l=/^(?:input|button)$/i,d=/^[238]$/,p=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,f=/^(?:checked|selected)$/i;a(e,"attrFn",o||{},"jQuery.attrFn is deprecated"),e.attr=function(t,a,i,u){var c=a.toLowerCase(),g=t&&t.nodeType;return u&&(4>s.length&&r("jQuery.fn.attr( props, pass ) is deprecated"),t&&!d.test(g)&&(o?a in o:e.isFunction(e.fn[a])))?e(t)[a](i):("type"===a&&i!==n&&l.test(t.nodeName)&&t.parentNode&&r("Can't change the 'type' of an input or button in IE 6/7/8"),!e.attrHooks[c]&&p.test(c)&&(e.attrHooks[c]={get:function(t,r){var a,i=e.prop(t,r);return i===!0||"boolean"!=typeof i&&(a=t.getAttributeNode(r))&&a.nodeValue!==!1?r.toLowerCase():n},set:function(t,n,r){var a;return n===!1?e.removeAttr(t,r):(a=e.propFix[r]||r,a in t&&(t[a]=!0),t.setAttribute(r,r.toLowerCase())),r}},f.test(c)&&r("jQuery.fn.attr('"+c+"') may use property instead of attribute")),s.call(e,t,a,i))},e.attrHooks.value={get:function(e,t){var n=(e.nodeName||"").toLowerCase();return"button"===n?u.apply(this,arguments):("input"!==n&&"option"!==n&&r("jQuery.fn.attr('value') no longer gets properties"),t in e?e.value:null)},set:function(e,t){var a=(e.nodeName||"").toLowerCase();return"button"===a?c.apply(this,arguments):("input"!==a&&"option"!==a&&r("jQuery.fn.attr('value', val) no longer sets properties"),e.value=t,n)}};var g,h,v=e.fn.init,m=e.parseJSON,y=/^([^<]*)(<[\w\W]+>)([^>]*)$/;e.fn.init=function(t,n,a){var i;return t&&"string"==typeof t&&!e.isPlainObject(n)&&(i=y.exec(e.trim(t)))&&i[0]&&("<"!==t.charAt(0)&&r("$(html) HTML strings must start with '<' character"),i[3]&&r("$(html) HTML text after last tag is ignored"),"#"===i[0].charAt(0)&&(r("HTML string cannot start with a '#' character"),e.error("JQMIGRATE: Invalid selector string (XSS)")),n&&n.context&&(n=n.context),e.parseHTML)?v.call(this,e.parseHTML(i[2],n,!0),n,a):v.apply(this,arguments)},e.fn.init.prototype=e.fn,e.parseJSON=function(e){return e||null===e?m.apply(this,arguments):(r("jQuery.parseJSON requires a valid JSON string"),null)},e.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||0>e.indexOf("compatible")&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},e.browser||(g=e.uaMatch(navigator.userAgent),h={},g.browser&&(h[g.browser]=!0,h.version=g.version),h.chrome?h.webkit=!0:h.webkit&&(h.safari=!0),e.browser=h),a(e,"browser",e.browser,"jQuery.browser is deprecated"),e.sub=function(){function t(e,n){return new t.fn.init(e,n)}e.extend(!0,t,this),t.superclass=this,t.fn=t.prototype=this(),t.fn.constructor=t,t.sub=this.sub,t.fn.init=function(r,a){return a&&a instanceof e&&!(a instanceof t)&&(a=t(a)),e.fn.init.call(this,r,a,n)},t.fn.init.prototype=t.fn;var n=t(document);return r("jQuery.sub() is deprecated"),t},e.ajaxSetup({converters:{"text json":e.parseJSON}});var b=e.fn.data;e.fn.data=function(t){var a,i,o=this[0];return!o||"events"!==t||1!==arguments.length||(a=e.data(o,t),i=e._data(o,t),a!==n&&a!==i||i===n)?b.apply(this,arguments):(r("Use of jQuery.fn.data('events') is deprecated"),i)};var j=/\/(java|ecma)script/i,w=e.fn.andSelf||e.fn.addBack;e.fn.andSelf=function(){return r("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),w.apply(this,arguments)},e.clean||(e.clean=function(t,a,i,o){a=a||document,a=!a.nodeType&&a[0]||a,a=a.ownerDocument||a,r("jQuery.clean() is deprecated");var s,u,c,l,d=[];if(e.merge(d,e.buildFragment(t,a).childNodes),i)for(c=function(e){return!e.type||j.test(e.type)?o?o.push(e.parentNode?e.parentNode.removeChild(e):e):i.appendChild(e):n},s=0;null!=(u=d[s]);s++)e.nodeName(u,"script")&&c(u)||(i.appendChild(u),u.getElementsByTagName!==n&&(l=e.grep(e.merge([],u.getElementsByTagName("script")),c),d.splice.apply(d,[s+1,0].concat(l)),s+=l.length));return d});var Q=e.event.add,x=e.event.remove,k=e.event.trigger,N=e.fn.toggle,T=e.fn.live,M=e.fn.die,S="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",C=RegExp("\\b(?:"+S+")\\b"),H=/(?:^|\s)hover(\.\S+|)\b/,A=function(t){return"string"!=typeof t||e.event.special.hover?t:(H.test(t)&&r("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),t&&t.replace(H,"mouseenter$1 mouseleave$1"))};e.event.props&&"attrChange"!==e.event.props[0]&&e.event.props.unshift("attrChange","attrName","relatedNode","srcElement"),e.event.dispatch&&a(e.event,"handle",e.event.dispatch,"jQuery.event.handle is undocumented and deprecated"),e.event.add=function(e,t,n,a,i){e!==document&&C.test(t)&&r("AJAX events should be attached to document: "+t),Q.call(this,e,A(t||""),n,a,i)},e.event.remove=function(e,t,n,r,a){x.call(this,e,A(t)||"",n,r,a)},e.fn.error=function(){var e=Array.prototype.slice.call(arguments,0);return r("jQuery.fn.error() is deprecated"),e.splice(0,0,"error"),arguments.length?this.bind.apply(this,e):(this.triggerHandler.apply(this,e),this)},e.fn.toggle=function(t,n){if(!e.isFunction(t)||!e.isFunction(n))return N.apply(this,arguments);r("jQuery.fn.toggle(handler, handler...) is deprecated");var a=arguments,i=t.guid||e.guid++,o=0,s=function(n){var r=(e._data(this,"lastToggle"+t.guid)||0)%o;return e._data(this,"lastToggle"+t.guid,r+1),n.preventDefault(),a[r].apply(this,arguments)||!1};for(s.guid=i;a.length>o;)a[o++].guid=i;return this.click(s)},e.fn.live=function(t,n,a){return r("jQuery.fn.live() is deprecated"),T?T.apply(this,arguments):(e(this.context).on(t,this.selector,n,a),this)},e.fn.die=function(t,n){return r("jQuery.fn.die() is deprecated"),M?M.apply(this,arguments):(e(this.context).off(t,this.selector||"**",n),this)},e.event.trigger=function(e,t,n,a){return n||C.test(e)||r("Global events are undocumented and deprecated"),k.call(this,e,t,n||document,a)},e.each(S.split("|"),function(t,n){e.event.special[n]={setup:function(){var t=this;return t!==document&&(e.event.add(document,n+"."+e.guid,function(){e.event.trigger(n,null,t,!0)}),e._data(this,n,e.guid++)),!1},teardown:function(){return this!==document&&e.event.remove(document,n+"."+e._data(this,n)),!1}}})}(jQuery,window);

//jquery visible plugin
!function(t){var i=t(window);t.fn.visible=function(t,e,o){if(!(this.length<1)){var r=this.length>1?this.eq(0):this,n=r.get(0),f=i.width(),h=i.height(),o=o?o:"both",l=e===!0?n.offsetWidth*n.offsetHeight:!0;if("function"==typeof n.getBoundingClientRect){var g=n.getBoundingClientRect(),u=g.top>=0&&g.top<h,s=g.bottom>0&&g.bottom<=h,c=g.left>=0&&g.left<f,a=g.right>0&&g.right<=f,v=t?u||s:u&&s,b=t?c||a:c&&a;if("both"===o)return l&&v&&b;if("vertical"===o)return l&&v;if("horizontal"===o)return l&&b}else{var d=i.scrollTop(),p=d+h,w=i.scrollLeft(),m=w+f,y=r.offset(),z=y.top,B=z+r.height(),C=y.left,R=C+r.width(),j=t===!0?B:z,q=t===!0?z:B,H=t===!0?R:C,L=t===!0?C:R;if("both"===o)return!!l&&p>=q&&j>=d&&m>=L&&H>=w;if("vertical"===o)return!!l&&p>=q&&j>=d;if("horizontal"===o)return!!l&&m>=L&&H>=w}}}}(jQuery);

/*
 * Responsive Tables plugin 2.0.0
 * Ryan Wells 
 * Copyright 2017, Ryan Wells (http://ryanwells.com)
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/
try{
$.extend({responsiveTables:function(a){a=a||"800px",$(".responsiveTable table").length>0&&$(".responsiveTable table").each(function(b){b++;var c="jrt-instance-"+b,d=$(this);d.addClass("jrt"),d.addClass(c);var e='<style type="text/css">\n';e+="@media only screen and (max-width:"+a+")  {\n";var f=[];d.find("thead th").each(function(a,b){b=$(this).text(),a++,f.push(b),e+="\t."+c+">tbody>tr>td.jrt-cell-"+a+':before { content: "'+b+'"; }\n'}),d.find("tbody > tr").each(function(a){var b=$(this);a++;var c=[],d=[];b.find("td").each(function(a,b,e){var f=$(this);a++,d>0&&(d[0],a++),c>0&&(e=a+c.shift()-1,d.splice(0,1),d.push(e),a=e),f.is("[colspan]")&&(b=parseInt($(this).prop("colspan"),10),c.push(b)),f.addClass("jrt-cell-"+a)})}),e+="}\n",e+="</style>",d.before(e)})}});
}catch(err) {}
$('tdiv').remove();


var popupHeader = [{
"signup": "<i class=\"ico-user-plus white\"></i><span><h3>Quick Sign-Up</h3><p>Complete the 30 second sign-up below and gain exclusive access to all available listings in the market</p></span>",
"signin": "<i class=\"ico-user white\"></i><span><h3>Sign In Required</h3><p>TREB regulations require a user to login to view all available properties in the market.</p></span>",
"validate": "<i class=\"ico-at white\"></i><span><h3>Validate Email</h3><p>To get access to all listing you must validate your email</p></span>",
"update": "<i class=\"ico-user-info white\"></i><span><h3>Update Information</h3><p>Complete the 30 second sign-up below and gain exclusive access to all available listings in the market</p></span>",
"forgotpin": "<i class=\"ico-forgot-pin white\"></i><span><h3>FORGOT PIN?</h3></span>" 
}];

var popMessage = [{
"signup": "With an account you can get full access to the complete database of properties available in the market.",
"signin": "With an account you can get full access to the complete database of properties available in the market.",
"validate": "You must validate your email before you are able to browse listings. <br>An email has been sent to you.",
"update": "empty",
"forgotpin": "Please enter your email address. <br>We will send you an email with instructions to reset your pin." 
}];

$(document).ready(function () {
	$('.imgBlock img').removeAttr('style');
    try{
	$.responsiveTables();
	}catch(err) {}
	setTimeout(function(){
	$('tdiv').remove();
	},100);
	
	$('.w4rFrontend #contentId_18726141138403').removeAttr('data-type')
	.removeAttr('data-value')
	.removeAttr('role')
	.removeAttr('data-array')
	.removeAttr('data-action-type')
	.removeAttr('data-class')
	.removeAttr('data-width');
	$('.w4rFrontend .c-action').remove();
	$('.w4rFrontend #contentId_18726141138403').find('.ui-droppable').removeClass('ui-droppable');
	
	$('.fbc_blogdetail_spans p,.fbc_blogdetail_spans span,.fbc_blogdetail_spans div').removeAttr('style')
}); 

// remap jQuery to $
(function($) {
	$.fn.clickToggle = function(func1, func2) {
		var funcs = [func1, func2];
		this.data('toggleclicked', 0);
		this.click(function() {
			var data = $(this).data();
			var tc = data.toggleclicked;
			$.proxy(funcs[tc], this)();
			data.toggleclicked = (tc + 1) % 2;
			console.log('W4RTeam: clickToggle')
		});
		return this;
	};
}(jQuery));

(function($){
	$(document).ready(function (){
		moveMobileFirstCol();
		// click toggle function 
		
		// loader on page load 
		//window.onload = function() {
			//$('.pageLoader').fadeOut();
			//$('.wrapper').fadeIn();
		//}		
		$(window).load(function() {
			$('.pageLoader').fadeOut();
		});
		//responsive nav button 			
		$('.navBtn').clickToggle(function() {
				var dataType = $(this).attr('data-type');
				if(dataType == 'left'){
					$('.top-nav').animate({left:"0px"});
					$('.wrapper').animate({left:"250px"});
				}else{
					$('.top-nav').animate({right:"0px"});
					$('.wrapper').animate({left:"-250px"});
				}
				$('html,body').addClass('blocked');
				$('html').addClass('mm-opening ');
		}, function() {
				var dataType = $(this).attr('data-type');
				if(dataType == 'left'){
					$('.top-nav').animate({left:"-250px"});
					$('.wrapper').animate({left:"0px"});
				}else {
					$('.top-nav').animate({right:"-250px"});
					$('.wrapper').animate({left:"0px"});
				}
				$('html,body').removeClass('blocked');
				$('html').removeClass('mm-opening ');
		});		
		// on mobile subnave toggle 		
		$( ".nav_ul_top > li.drop-menu > i" ).on( "click", function() {
			$('.nav_ul_top > li.drop-menu').removeClass('on');
			$('.nav_ul_top > li.drop-menu ul').slideUp('normal');
			$( ".nav_ul_top > li.drop-menu > i" ).removeClass('ico-down-arrow-thin').addClass('ico-right-arrow-thin');
			if($(this).next().is(':hidden') == true) {
				$(this).removeClass('ico-right-arrow-thin').addClass('ico-down-arrow-thin');
				$(this).parents('li').addClass('on');
				$(this).next().slideDown('normal');
			} 
		});	
		
		// on mobile subnave toggle 
		if ($(window).width() < 1002){			
			$( ".nocallbackClass" ).on( "click", function() {
				$('.nav_ul_top > li.drop-menu').removeClass('on');
				$('.nav_ul_top > li.drop-menu ul').slideUp('normal');
				$( ".nav_ul_top > li.drop-menu > i" ).removeClass('ico-down-arrow-thin').addClass('ico-right-arrow-thin');
				if($(this).next().next().is(':hidden') == true) {
					$(this).next().removeClass('ico-right-arrow-thin').addClass('ico-down-arrow-thin');
					$(this).parents('li').addClass('on');
					$(this).next().next().slideDown('normal');
				} 
			});
		}
		
		$(function () {
			if ($(window).width() > 1002){	
				$(".nav_ul_top > li").on('mouseenter mouseleave', function (e) {
					if ($('ul', this).length) {
						var _this = $(this)
						var elm = $('ul:first', this);
						var off = elm.offset();
						var l = off.left;
						var w = elm.outerWidth();
						var docH = $(".container").height();
						var docW = $("#main").width();
						//console.log('left '+l)
						//console.log('ul width '+w)
						//console.log('docW '+docW)
						var isEntirelyVisible = (l + w <= docW);
						if (!isEntirelyVisible) {
							$(this).addClass('edge');
						}else if(l < 0){
							//console.log(Math.abs(l))
							var n = w/2-Math.abs(l)
							$(elm).css('margin-left', '-'+n+'px');
						}
					}
				});
			}
		});
		
		
		
		// make header divs equal height
		equalheight = function(container){
			var currentTallest = 0,
				 currentRowStart = 0,
				 rowDivs = new Array(),
				 $el,
				 topPosition = 0;
			 $(container).each(function() {
			
			   $el = $(this);
			   $($el).height('auto')
			   topPostion = $el.position().top;
			
			   if (currentRowStart != topPostion) {
				 for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
				   rowDivs[currentDiv].height(currentTallest);
				 }
				 rowDivs.length = 0; // empty the array
				 currentRowStart = topPostion;
				 currentTallest = $el.height();
				 rowDivs.push($el);
			   } else {
				 rowDivs.push($el);
				 currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
			  }
			   for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
				 rowDivs[currentDiv].height(currentTallest);
			   }
			 });
			}
			equalheight('.brand-area .col-4');
			equalheight('.custom-footer-row .col-4');
			$(window).resize(function(){
				equalheight('.brand-area .col-4');
				equalheight('.custom-footer-row .col-4');
				contentBlockEqual();
			});
			
			contentBlockEqual();
			
		// fix top nav on window scroll 
		// window scroll function
		var tn = $('#main > header.row').height()+50; 
		$(window).scroll(function() {
			buttonfixed();
			stickyNam();
		});
		$(window).load(function() {
			stickyNam();
			$('.w4r-sectionbg-video').removeClass('noVisibility');
			$('.goog-te-menu-value span:first').html('Translate');
			$('.google-lang').removeClass('hidden');
			moveMobileFirstCol();
			//check live chat status
			//checkLiveChat();
		});
		$( ".image_hover" ).removeClass('_imgHovr_onmobile');
		$(window).resize(function() {
			stickyNam();
			fitMenuheightOnmobile();
			$( ".image_hover" ).removeClass('_imgHovr_onmobile');
			moveMobileFirstCol();
		});
		if ($(window).width() > 1002){
			jQuery(".sticky-container").clone().removeClass('sticky-container').attr('id', 'StickyNav').prependTo('body');
			$('#StickyNav').find('.gt_wrapper').remove();
			setTimeout(function(){
				$('#StickyNav').find('img').each(function(index, element) {
					var src = $(this).attr('data-original');
					$(this).attr('src', src).removeAttr('data-original');
				});
			},50);
		}
		function buttonfixed() {
					if ($('.main-header2').visible( 'partial' )) {
						$('.pageUp').hide(); 
					}
					if (!$('.main-header2').visible( 'partial' )) { 
						$('.pageUp').fadeIn();
					} 
		}
		function stickyNam() {				
				if ($(window).width() > 1002){
					var sticky = $('body').find('.sticky-container').length
					//console.log('sticky '+sticky)
					if(sticky > 0){
						if ($('.sticky-container').visible( 'partial' )) {
							$('#StickyNav').removeClass('nav-fixed');
							$('html').removeClass('w4r_nav_fixed');
						}
						if (!$('.sticky-container').visible( 'partial' )) { 
							$('#StickyNav').addClass('nav-fixed');
							$('html').addClass('w4r_nav_fixed');
						}
					}
				}
		}
		//go page up
		$( ".pageUp" ).on( "click", function() {
				$('html,body').animate({ scrollTop: 0 }, '');
				return false; 			
		});
		
		fitMenuheightOnmobile();
	});
})(window.jQuery);

function contentBlockEqual(){
	try{
		$('.contentBlock').each(function() {
			$(this).removeAttr('style');
		});
		if ($(window).width() > 981){
			//$(window).load(function() { i remove it coz it causing with this it only work on pageload -> fasy
				var maxHeight = -1;
				$('.equal_content').each(function() {
					var elemID = $(this).attr('id');
					$('#'+elemID).find('.contentBlock').not('.dont_equalHeight').each(function() {
						maxHeight = maxHeight > $(this).outerHeight() ? maxHeight : $(this).outerHeight();
					});
					$('#'+elemID).find('.contentBlock').not('.dont_equalHeight').each(function() {
						$(this).css('min-height', maxHeight+'px');
					});
				});
				/*$('.equal_content').find('.contentBlock').each(function() {
					maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
					
				});*/
				/*$('.equal_content').find('.contentBlock').each(function() {
					$(this).css('min-height', maxHeight+'px');
				});*/
			//});
		}
	}
	catch(err) {}
}

function fitMenuheightOnmobile(){
	if ($(window).width() <= 1002){
		if($('.nav_ul_top').hasClass('w4r_navWidthImg')){
			var navImageHeight = $('.navImage').height();
			$('.nav_ul_top').css('top', navImageHeight+'px')
		}
		var bodyPadTop = $('body').css('padding-top')
		var bodyPadBot = $('body').css('padding-bottom')
		//console.log(bodyPadTop+'--'+bodyPadBot)
		$('.wraperIng').remove();
		var styleIng = '<style class="wraperIng">.blocked.mm-opening .wrapper{top:'+bodyPadTop+';bottom:'+bodyPadBot+'}</style>';
		$('head').append(styleIng);
	}else{
		$('.nav_ul_top').removeAttr('style');
		$('.wraperIng').remove();
	}
}
var loaderDiv = '<span class="cLoaderP"><div class="loader">Loading...</div></span>';

//custom checkbox design 
$('input[type="checkbox"],input[type="radio"]').not('.rating_star').parent().each(function(){
	$(this).addClass('w4r_'+$(this).children('input').attr('type'));
});

$('.w4r_checkbox input[type="checkbox"][checked],.w4r_radio input[type="radio"][checked]').each(function(){ 
	$(this).attr('checked',true).parent('label').addClass('active'); 
});
$('.w4r_checkbox input[type="checkbox"]:not([checked]),.w4r_radio input[type="radio"]:not([checked])').attr('checked',false);
$('.w4r_radio,.w4r_checkbox').prepend('<i class="ico-checkmark"></i>');	

$('.w4r_checkbox input[type="checkbox"],.w4r_radio input[type="radio"]').addClass('hidden');

$(document.body).on('click', '.w4r_checkbox input[type="checkbox"],.w4r_radio input[type="radio"]' ,function(){
	if($(this).parent().hasClass('radio')) { 
		$(this).parents('p,ul,table,.fs-radio-group').find('label.radio').removeClass('active');
	}
	$(this).parent('label').toggleClass('active'); 
});

var xContent = '<h4>General Terms of Use</h4><p>Welcome to our website. If you continue to browse and use this website, you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern this site’s owner’s relationship with you in relation to this website. If you disagree with any part of these terms and conditions, please do not use our website.</p><p>The term ‘us’ or ‘we’ refers to the owner of the website. The term ‘you’ refers to the user or viewer of our website.</p><ul><li>The content of the pages of this website is for your general information and use only. It is subject to change without notice.</li><li>Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.</li><li>Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services or information available through this website meet your specific requirements.</li><li>This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.</li><li>All trademarks reproduced in this website, which are not the property of, or licensed to the operator, are acknowledged on the website.</li><li>Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offence.</li><li>From time to time, this website may also include links to other websites. These links are provided for your convenience to provide further information. They do not signify that we endorse the website(s). We have no responsibility for the content of the linked website(s).</li><li>Your use of this website and any dispute arising out of such use of the website is subject to the laws of Canada.</li></ul><h4>TREB Terms of Use</h4><ul><li>This representation is based in whole or in part on data generated by the Toronto Real Estate Board (TREB) which assumes no responsibility for its accuracy. The information provided herein must only be used by consumers that have a bona fide interest in the purchase, sale or lease of real estate and may not be used for any commercial purpose or any other purpose.</li><li>All MLS data obtained from this Virtual Office Website (‘VOW’) is intended only for the your personal, non-commercial use.</li><li>You have a bona fide interest in the purchase, sale, or lease of real estate of the type being offered through this VOW.</li><li>That you will not copy, redistribute, retransmit, or otherwise use any of the data or Listing Information provided, except in connection with your consideration of the purchase, sale, or lease of an individual property.</li><li>Toronto Real Estate Boards’ (‘TREB’) ownership of and the validity of TREB’s proprietary rights and copyright in the MLS database, MLS data, TREB’s MLS System, and Listing Information.</li><li>You will not, directly or indirectly, display, post, disseminate, distribute, publish, broadcast, transfer, sell or sublicense any Listing Information to another individual or entity. The prohibited uses expressly include ‘scraping’ (including ‘screen scraping’ and ‘database scraping’), ‘data mining’ or any other activity intended to collect, store, re-organize, summarize or manipulate any Listing Information or any related data.</li><li>The Terms of Use agreement also expressly authorizes TREB, and other TREB Members or their duly authorized representatives, to access the VOW for the purposes of verifying compliance with MLS Rules and Policies (including the VOW Rules) and monitoring the display of Members’ Listings by the VOW.</li><li>Consent to the fact that your Personal Information, including first and last name, email address, and phone number may be collected, used or disclosed. The personal information may be shared with TREB for auditing and/or legal purposes.</li></ul><h4>Privacy</h4><ul><li>My website automatically gathers certain usage information like the numbers and frequency of visitors. This data helps me determine how many visitors use parts of the website, so I can improve my website to assure that it is as appealing as I can make it for as many of you as possible.</li><li>We use a technology called “cookies” that tells us how and when pages in our website are visited, and by how many people. These cookies do not collect personally identifiable information and we do not combine information collected through these cookies with other personally identifiable information to tell us who you are or even what your email address is.</li><li>We may provide statistical “ratings” information, never information about you personally, to our partners about how our clients and visitors, collectively. We do this so they too can understand how much people use their areas and our website in order for them to provide you with the best possible Web experience.</li><li>We will only transmit or ask for personal information over secure Internet connections, using SSL (Secure Sockets Layer) encryption, the currently accepted standard for online security, and security keys.</li><li>We may use your information to let you know of additional products and services which you might be interested. We may ask you for information about your interests so that both you and we can take advantage of the interactivity of the online medium, but you may always choose to respond or not, or opt out of future mailings.</li><li>We will not share your personal information to any third party, unless requested in response to legal processes, such as a court order or subpoena.</li><li>Whenever personal information about you is stored on our computers, that information is password-protected from unauthorized access or use. In addition, this information is kept on servers that are located behind a firewall.</li><li>This website may contain links to other websites. We are not responsible for the privacy practices or the content of such websites.</li><li>If we elect to change our privacy policy, you will be notified, and we will post those changes here so that you will always know what information we gather, how we might use that information and whether we will disclose it to anyone.</li></ul>';

function termsFun(){
	$('#_privacy h3').html('Terms of Use & Privacy');
        var board_website_terms=$('#board_website_terms').html();
        //console.log(board_website_terms);
        if(board_website_terms!=''){
           $('#privacycontent').html(board_website_terms); 
        }else{
            $('#privacycontent').html(xContent);
        }
	$('.myOverlay').fadeIn();
	$('#_privacy').delay(200).fadeIn();
	$('body').addClass('fancybox-lock');
	$('body').addClass('w4r_terms_open');
}

$( "._termsOfUse a" ).on( "click", function() {
	termsFun();
	return false; 			
});

if($('#termsTrigger').val() == 'on'){
	termsFun();
}

$( ".pclose,.myOverlay" ).on( "click", function() {
	$('#_privacy').fadeOut();
	$('.myOverlay').delay(200).fadeOut();
	$('body').removeClass('fancybox-lock');
	$('body').removeClass('w4r_terms_open');
	setTimeout(function(){
	 	$('#_privacy h3').html('');
		$('#privacycontent').html('');
	}, 1000);
	return false; 			
});

$( "#pfullScreen" ).on( "click", function() {
	$(this).hide();
	$('#exitFscreen').show();
	$('#_privacy').addClass('fullMode');
	return false; 			
});
$( "#exitFscreen" ).on( "click", function() {
	$(this).hide();
	$('#pfullScreen').show();
	$('#_privacy').removeClass('fullMode');
	return false; 			
});

$('img').each(function(index, element) {
	var a = $(this).parent().innerWidth();
	var b = $(this).width();
	if($(this).parent().is('a'))
	var a = $(this).parent().parent().innerWidth();
	if(a>b){
		$(this).addClass('imgautoWH');
	}
    
});


//phone mask 

$(document).ready(function(){
	$( ".phoneMask" ).fsPhonemask();
	equalTeamroster();
});
//.parascroll.w4r-sectionbg-video

// This is a functions that scrolls to #{blah}link
function goToByScroll(id){
    $('html,body').animate({
        scrollTop: $(id).offset().top},
        'slow');
}

///- plz discuss with me before uncomment these below link listing back to search stop working - as per below code dnt have logic to add generic condiotion - SHAM
//https://trello.com/c/qPIVqmRM/2522-back-to-search-button-not-working-andrew-gibson
//$(document.body).on('click', 'a[href*=#]' ,function(e){
//      // Prevent a page reload when a link is pressed
//    e.preventDefault(); 
//      // Call the scroll function
//	  var $href = $(this).attr('href')
//	  	  $splitHref = $href.split('#');
//	console.log($splitHref[1])
//	if($splitHref[1] != ''){
//    	goToByScroll($(this).attr('href'));
//	}
//});

function fitvideobg() {
		if ($(window).width() < 768){
			$('.parascroll.w4r-sectionbg-video').each(function(index, element) {
				var sectHeight = $(this).parents('.mainWrapper').outerHeight()+150;
				$(this).find('video').css('height', sectHeight);
			});
		}
}
fitvideobg();

$(window).resize(function() {
	fitvideobg();
	//adjustDropMenuHeight();
	equalTeamroster();
	mobileNavheight();
	footerLinkEllipsis();
	dropdownColumns();
	setTopMenuLocation();
});	


//adjustDropMenuHeight();



/*function getMaxLiWidth(li){ // not using this function
  var maxWidth = 0;
  $(li).each(function(i){
    if(this.offsetWidth > maxWidth)
      maxWidth = this.offsetWidth;
  });
  return maxWidth;
}*/

function mobileNavheight(){
	if($(window).width() <= 1002){
		var a = $('.navImage').outerHeight();
		var b = $('.social_wraper').outerHeight();
		var c = $('.gt_wrapper').outerHeight();
		var w	= $(window).height();
		var t = a + b + c
		var menuHeight = w - t - 20;
		$('.nav_ul_top').css('height', menuHeight+'px');
	}
}
mobileNavheight();
///
// team roster page only
function equalTeamroster(){
	var maxHeight = -1;
	var maxHeight2 = -1;
	var maxHeight3 = -1;
	var maxHeight4 = -1;
	if($(window).width() >= 768){
		$('.t_roster.thumb-view .contact_info').each(function() {
		 	maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
		});
		$('.t_roster.thumb-view .contact_info').each(function() {
			$(this).height(maxHeight);
		});
		$('.t_roster.thumb-view .contact_info .agent_info h2 span').each(function() {
		 	maxHeight2 = maxHeight2 > $(this).height() ? maxHeight2 : $(this).height();
		});
		$('.t_roster.thumb-view .contact_info .agent_info h2 span').each(function() {
		 	$(this).height(maxHeight2);
		});
		$('.t_roster.thumb-view .contact_info .cme-bio').each(function() {
		 	maxHeight3 = maxHeight3 > $(this).height() ? maxHeight3 : $(this).height();
		});
		$('.t_roster.thumb-view .contact_info .cme-bio').each(function() {
		 	$(this).height(maxHeight3);
		});
		$('.t_roster.thumb-view .contact_info .agent_info span ul').each(function() {
		 	maxHeight4 = maxHeight4 > $(this).height() ? maxHeight4 : $(this).height();
		});
		$('.t_roster.thumb-view .contact_info .agent_info span ul').each(function() {
		 	$(this).height(maxHeight4);
		});
	}
}

$(document).ready(function() {
    // Configure/customize these variables.
   	try {
		var showChar = 300;  // How many characters are shown by default
		var ellipsestext = "...";
		var moretext = "[read more]";
		var lesstext = "[ x ]";
		
	
		$('.fcTesti').find('.testi_content').each(function() {
			var content = $(this).html();
	 
			if(content.length > showChar) {
	 
				var c = content.substr(0, showChar);
				var h = content.substr(showChar, content.length - showChar);
	 
				var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';
	 
				$(this).html(html);
			}
	 
		});
 
		$(".morelink").click(function(){
			if($(this).hasClass("less")) {
				$(this).removeClass("less");
				$(this).html(moretext);
			} else {
				$(this).addClass("less");
				$(this).html(lesstext);
			}
			$(this).parent().prev().toggle();
			$(this).prev().toggle();
			return false;
		});
		
		
		$(".moreText").click(function(){
			if($(this).hasClass("less")) {
				$(this).removeClass("less");
				$(this).html(moretext);
			} else {
				$(this).addClass("less");
				$(this).html(lesstext);
			}
			$(this).parents('.moreLessTxt').toggleClass('showMoretxt');
			
			return false;
		});
		
		
		///image_hover 
		$('.check_animAttr').each(function(index, element) {
    		var anim = $(this).attr('data-animation');
			$(this).mouseenter(function(e) {
    			testAnim(anim,$(this));
			});
		});
		
		///image_hover 
		$('.hoverAnchor').each(function(index, element) {
    		var anim = $(this).attr('data-animation');
			$(this).mouseenter(function(e) {
    			navanimationDone(anim,$(this).find('.navimgHover'));
			});
		});
	}
	catch(err) {}
});

function navanimationDone(x,y) { 
	$(y).removeClass().addClass(x + ' animated navimgHover').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
	  $(y).removeClass(x);
	});
};

function testAnim(x,y) { 
	$(y).removeClass().addClass(x + ' animated check_animAttr image_hover').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
	  $(y).removeClass(x);
	});
};	

//to make google translate responsive 
try{
	function changeGoogleStyles() {
		if($('.goog-te-menu-frame').contents().find('.goog-te-menu2').length) {
			$('.goog-te-menu-frame').contents().find('.goog-te-menu2').css({
			'max-width':'100%',
			'overflow':'scroll',
			'box-sizing':'border-box',
			'height':'auto'
			});
			//$('.goog-te-menu-frame').contents().find( "span:contains('Select Language')" ).html('Language');
			
		} else {
			setTimeout(changeGoogleStyles, 50);
		}
	}
	changeGoogleStyles();
}catch(err) {}

// page init
jQuery(function(){
	initFitVids();
});

// handle flexible video size
function initFitVids() {
	if($('body').hasClass('web4realty-wrap')){
		jQuery('.video-block').fitVids();
	}
}

function footerLinkEllipsis(){
	try{
		$('.footer-nav li a').each(function(index, element) {
			var element = this;
			var elementText = $(element).text();
				elementText = elementText.replace('›', '')
			var $c = $(element)
					   .clone()
					   .css({display: 'inline', width: 'auto', visibility: 'hidden'})
					   .appendTo('body');
			var $elementWidth = $(element).width() - 15;
			if( $c.width() > $elementWidth ) {
				// text was truncated. 
				// do what you need to do
				$(element).addClass('elem_ellipsis').attr('title', elementText);
				
				//$(".elem_tipTip").tipTip({defaultPosition:"top",maxWidth: $(element).width()+"px",}); 
			}
			
			//console.log($(element).width())
			
			$c.remove();
		});
	}catch(err) {}
}
footerLinkEllipsis();


if($(window).width() < 761){
	try{
		var timeoutHandler = null;
		$( ".image_hover" ).click(function() 
		{
			$( ".image_hover" ).removeClass('_imgHovr_onmobile');
			$(this).addClass('_imgHovr_onmobile'); 
			if (timeoutHandler) clearTimeout(timeoutHandler);
		
			timeoutHandler = setTimeout(function()
			{
				$( ".image_hover" ).removeClass('_imgHovr_onmobile');
		
			}, 4000);
		});
	}catch(err) {}	
}else{
	$( ".image_hover" ).removeClass('_imgHovr_onmobile');
}


try{
	
	// above navimg end here
	
	function replaceWords(el) {
		el.innerHTML = el.innerHTML
						.replace('undefined', '');
	}
	$('.pmForms').each(function(index, element) {
		var id = $(this).find('form').attr('id')
    	replaceWords(document.getElementById(id));
	});
	
	
	
}catch(err){}

$(window).load(function(e) {
	dropdownColumns();
});

$(document).ready(function(e) {
    dropdownColumns();
});

function dropdownColumns(){
	try{
		if($(window).width() > 1002 && !$('html').hasClass('smartDevices')){
			var dropMenu = $(".drop-menu ul");
			if(!$(dropMenu).parents('nav').hasClass('wall_nav')){
				$(dropMenu).each(function(index, element) {
				$(this).addClass('noFloat');
				var _this = $(this)
				var lis = $(this).find('li');
				var _total = $(lis).length
				var count = 10;
				if(_total > 10){
					count = 2;
				}
				if(_total > 20){
					count =3
				}
				if(_total > 30){
					count =4
				}
				//console.log(count)
				if(_total>10){
					$(_this).addClass('columnList').css('column-count', count);
					setTimeout(function(){
						var a = count * 300,b = a/2
						$(_this).css('width', a+'px');
						if(_total > 20 && $(_this).offset().left > 230){
							$(_this).addClass('ulCenterAlign');
							$(_this).css('margin-left', '-'+b+'px');
						}
					},100);
				}
			});
			}
		}else{
			$(".drop-menu ul").removeClass('columnList').removeAttr('style').removeClass('ulCenterAlign');//.hide();
		}
	}catch(err){}
}

//nav image in middle of menu .nav_ul_top
function setMiddleMenuImage(){
	if($('.nav_ul_top').hasClass('__topnaveImg_middle')){
		if($(window).width() > 1002){
			var span = $('.__topnaveImg_middle.nav_ul_top > li'),
				widest = 0,
				thisWidth = 0;
			setEqWidth = function(elem) {
				widest = 0;
				elem.each(function() {
					thisWidth = $(this).outerWidth();
					if (thisWidth > widest) {
						widest = thisWidth;
					}
				});
			}
			setEqWidth(span);
			var tPages = Math.round($('.nav_ul_top').children('li').length /2 -1)
			if($('.nav_ul_top').hasClass('navimage_inside_menu')){}else{
				var navImage = $('body').find('.navImage').clone();
				$(navImage).insertAfter($('.__topnaveImg_middle.nav_ul_top > li').eq(tPages));
				$('.nav_ul_top').addClass('navimage_inside_menu');
			}
		}
	}
}
setMiddleMenuImage();

function setMiddleoverlay_wig(){
	var tPages = Math.round($('.nav_ul_top').children('li').length /2 -1);
	var navImage = $('.menuMiddle_widgets');
	$(navImage).insertAfter($('.nav_ul_top > li').eq(tPages));
	$(navImage).removeClass('hidden');
}
setMiddleoverlay_wig();
function setMiddleoverlay_vwig(){
	var tPages = Math.round($('.wall_nav_ul').children('li').length /2 -1);
	var navImage = $('.menuMiddle_widgets');
	$(navImage).insertAfter($('.wall_nav_ul > li').eq(tPages));
	$(navImage).removeClass('hidden');
}
setMiddleoverlay_vwig();
//w4r-liveChat-wrap
function checkLiveChat(){
	if($('.w4r-liveChat-wrap').length == 1 && $('.w4r-chatTrigger').hasClass('right') && $('.w4r-chatTrigger').hasClass('bottom')){
		$('.pageUp').css('margin-right', '80px');
	}else{
		$('.pageUp').css('margin-right', '0px')
	}
}

if($('html').hasClass('tabletonly_class')){
	$('.nav_ul_top a,.wall_nav_ul a').on('mouseenter',function(e) {
		var _href = $(this).attr('href');
		window.location = _href;
	});
}
function setTopMenuLocation(){
	if($(window).width() <= 1002 || $('html').hasClass('tabletonly_class')){
		$('.main-header2 .top-nav').prependTo($('body'));
	}else{
		$('body > .top-nav').removeAttr('style').insertAfter($('.main-header2').find('.navBtn'));
	}
}
setTopMenuLocation();


function moveMobileFirstCol(){
	/*$('#pageManager').find('.onmobileTop').each(function(index, element) {
		$item = $(this);			
		prev = $item.prev();
		$item.insertBefore(prev);
	});*/
	$('.col_child_right.onmobileTop').each(function(index, element) {
		var gridRow = $(this).parent('.grid-row');
		//if($(window).width() <= 680){
			$(this).prependTo(gridRow);
		//}else{
			//$(this).appendTo(gridRow);
		//}
	});
};

/*!
* FitVids 1.0.3
*
* Copyright 2013, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
* Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*
* Date: Thu Sept 01 18:00:00 2011 -0500
*/
;(function(a){a.fn.fitVids=function(b){var c={customSelector:null};if(!document.getElementById("fit-vids-style")){var f=document.createElement("div"),d=document.getElementsByTagName("base")[0]||document.getElementsByTagName("script")[0],e="&shy;<style>.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>";f.className="fit-vids-style";f.id="fit-vids-style";f.style.display="none";f.innerHTML=e;d.parentNode.insertBefore(f,d)}if(b){a.extend(c,b)}return this.each(function(){var g=["iframe[src*='player.vimeo.com']","iframe[src*='youtube.com']","iframe[src*='youtube-nocookie.com']","iframe[src*='kickstarter.com'][src*='video.html']","object","embed"];if(c.customSelector){g.push(c.customSelector)}var h=a(this).find(g.join(","));h=h.not("object object");h.each(function(){var m=a(this);if(this.tagName.toLowerCase()==="embed"&&m.parent("object").length||m.parent(".fluid-width-video-wrapper").length){return}var i=(this.tagName.toLowerCase()==="object"||(m.attr("height")&&!isNaN(parseInt(m.attr("height"),10))))?parseInt(m.attr("height"),10):m.height(),j=!isNaN(parseInt(m.attr("width"),10))?parseInt(m.attr("width"),10):m.width(),k=i/j;if(!m.attr("id")){var l="fitvid"+Math.floor(Math.random()*999999);m.attr("id",l)}m.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",(k*100)+"%");m.removeAttr("height").removeAttr("width")})})}})(window.jQuery||window.Zepto);

$(document).ready(function (e) {
	$('.textiLoadMore').on('click', function () {
		var elm = $(this)
		var page = elm.data("page")+1;
		var reviewdata = elm.data("reviewdata");
		elm.data('page', page);
		var parentDivID = elm.parent().parent("div").eq(0).attr("id");

		console.log("page", page);
		console.log("parentDivID", parentDivID);
		console.log(reviewdata);
		reviewdata["page"] = page;
		reviewdata["isfromfront"] = 1;
		//show loader here
		$.ajax({
			type: 'POST',
			url: 'getsocialreviewwithpagination',
			data: reviewdata,
			success: function (res) {
				res = JSON.parse(res);
				if (res.data.last_page) {
					elm.hide();
				}
				if(res.data.data.length > 0){
					$("#" + parentDivID + " div.row:last").before(res.html_data);
				}
				// hide loader here
			},
			error: function (xhr, ajaxOptions, thrownError) {
			// hide loader here
			}
		});
	});
});


try {
	// navimg
	$.fn.getmaxHeight = function() {
	  var maxHeight = this.map(function( i, e ) {
		return $( e ).height();
	  }).get();
	  return Math.max.apply( this, maxHeight );
	};
	// this function should place in iframePage.js to generate relevant css rule 
	function setnavimgSpanheight(){
		var maxHeightimgYes='',maxHeightimgNot='',setimgNotLineheight='',tpMargin='',tp='',btMargin='',bt='';
		var mainArr = [];
		$('.navIn_body').remove();
		if($('.top-nav').hasClass('has-parent-navimg') && $('body').hasClass('w4rMenuImgYes') && ($('body').hasClass('mnMenu_postion_above') || $('body').hasClass('mnMenu_postion_below'))){
			$('body').addClass('navTransition_nont');
			setTimeout(function(){
				$('.nav_ul_top > li.imgYes').each(function(index, element) {
						mainArr.push(parseInt($(this).children('a').children('.w4r_menuImg').children('span').children('img').height()));
				});
				//console.log('mainArr '+Math.max.apply(Math, mainArr))
				$('.nav_ul_top > li.imgYes').not('.__not').children('a').children('.w4r_menuImg')
				.css('height', Math.max.apply(Math, mainArr)+'px')
				.children('span');
				maxHeightimgYes = $('.nav_ul_top > li.imgYes').not('.__not').getmaxHeight();
				//maxHeightimgNot = $('.nav_ul_top > li.imgNot').not('.__not').getmaxHeight();
				maxHeightimgNot = $('.main-header2 .top-nav > .nav_ul_top').find('.imgNot').not('.__not').height();
				setimgNotLineheight = maxHeightimgYes - maxHeightimgNot;
				
				//console.log('maxHeightimgYes > '+maxHeightimgYes);
				//console.log('maxHeightimgNot > '+maxHeightimgNot);
				
				tpMargin = parseInt($('.nav_ul_top > li.imgYes').find('.w4r_menuImg').css('margin-top'), 10);
				tp = Math.max.apply(Math, mainArr) + tpMargin
				btMargin = parseInt($('.nav_ul_top > li.imgYes').find('.w4r_menuImg').css('margin-bottom'), 10);
				bt = Math.max.apply(Math, mainArr) + btMargin
				$('.nav_ul_top > li.imgNot').not('.__not').each(function(index, element) {
					if($(this).parent().parent().hasClass('has-parent-above')){
						$(this).children('a').css('padding-top', tp+'px');
					}
					if($(this).parent().parent().hasClass('has-parent-below')){
						$(this).children('a').css('padding-bottom', bt+'px');
					}
					if($(this).parent().parent().hasClass('has-parent-left') || $(this).parent().parent().hasClass('has-parent-right')){
						$(this).children('a').css('line-height', maxHeightimgYes+'px');
					}
				});
				$('body').removeClass('navTransition_nont');
			},300);
		}
	}
	if($('.top-nav').hasClass('has-sub-navimg') && $('body').hasClass('w4rMenuImgYes')){
		setTimeout(function(){
		var subArr = [];
		$('.nav_ul_top li ul').each(function(index, element) {
			subArr = [];
			$(this).find('li.imgYes').each(function(index, element) {
					subArr.push(parseInt($(this).children('a').children('.w4r_menuImg').children('span').height()));
			});
			if(($('.top-nav').hasClass('has-sub-left') || $('.top-nav').hasClass('has-sub-right')) && !$(this).hasClass('sub_menuImg_one')){
					$(this).find('li.imgYes').children('a').css('line-height', Math.max.apply(Math, subArr)+'px');
					$(this).find('li.imgYes').children('a').children('.w4r_menuImg').css('height', Math.max.apply(Math, subArr)+'px');
			}
			var subImgLength = $(this).find('li.imgYes').length
			//alert('subImgLength '+subImgLength)
			if($(this).hasClass('sub_menuImg_one') && subImgLength > 0){
					$subnav__bgimage='';
					$subnav__bgimageClass='';
					if($(this).hasClass('cover')){
						imgsrc = "'"+$(this).find('li.imgYes:eq(0)').find('.w4r_menuImg >span').find('img:eq(0)').attr('src')+"'";
						$subnav__bgimage = 'style="background-image:url('+imgsrc+')"';
						$subnav__bgimageClass='subnav__bgimage';
					}
					var firstLiImage = $(this).find('li.imgYes:eq(0)').find('.w4r_menuImg >span').html();
					//alert('firstLiImage '+firstLiImage)
					var posType = $(this).attr('data-type');
					var phtml_ = '<span class="oneMenuImg '+$subnav__bgimageClass+' on'+$(this).attr('data-type')+'"><span '+$subnav__bgimage+'>'+firstLiImage+'</span></span>';
					if(posType == 'right' || posType == 'below'){
						$(this).append(phtml_);
					}
					if(posType == 'left' || posType == 'above'){
						$(this).prepend(phtml_);
					}
					
				}
		});
		if($(window).width() >= 1024){
			$('.sub_menuImg_one li').hover(function(e) {
				if($(this).hasClass('imgYes')){
    				var firstLiImage = $(this).find('.w4r_menuImg').html();
					$(this).parent().find('.oneMenuImg').html(firstLiImage);
					imgsrc = "'"+$(this).find('img:eq(0)').attr('src')+"'";
					if($(this).parent().hasClass('cover')){
						$(this).parent().find('.oneMenuImg > span').css('background-image', 'url('+imgsrc+')')
					}
					
				}else{
					//$(this).parent().find('.oneMenuImg').html('');
				}
			});
			$('.nav_ul_top > li > a').hover(function(e) {
				//console.log('parent a hover')
				/*var firstLiImage = $(this).parent().find('ul').find('li.imgYes:eq(0)').find('.w4r_menuImg>span').html();
				if($(this).hasClass('cover')){
					$subnav__bgimage = 'style="background-image:url('+$(this).find('img:eq(0)').attr('src')+')"';
					$subnav__bgimageClass='subnav__bgimage';
				}
				$(this).parent().find('.oneMenuImg').html('<span '+$subnav__bgimage+'>'+firstLiImage+'</span>');*/
			});
		}
		},300);
	}
	
	function resizeMenu(){ // stop this function for now
		//set top nav main li width if uploaded image are wide --> due to this menu can be crash
		//this function will run only if menu has images
		if($('.top-nav').hasClass('has-parent-navimg') && $('body').hasClass('w4rMenuImgYes') && ($('body').hasClass('mnMenu_postion_above') || $('body').hasClass('mnMenu_postion_below'))){
			topNavwidth = $('.nav_ul_top').width();
			navLength = $('.nav_ul_top>li').length;
			var f = navLength+1
			w_ = 100 / f; 
			var totalWidth = 0; 
			$('.nav_ul_top > li').each(function(index) {
				totalWidth += parseInt($(this).width(), 10); // get sum of each main nav li width
				if (!--navLength) { 
					//run below function when loop done. 
					$('.topNav_resize').remove();
					$('.nav_ul_top > li').removeAttr('style').removeClass('liquid_nav');
					if(totalWidth >= topNavwidth){
							$('.nav_ul_top > li').each(function(index, element) {
								$(this).addClass('liquid_nav');
							});
							styleInjection = 	'<style class="topNav_resize">'+
														'@media screen and (min-width: 1002px) and (max-width:5000px) {'+
															'.nav_ul_top > li.liquid_nav'+
															'{'+
																'width:'+w_+'vw;'+
															'}'+
														'}'+
													'</style>';
							$('head').append(styleInjection);
						}
						//assign height on each span 
						setTimeout(function(){
						setnavimgSpanheight();
						},300);
						
				}
			});
			
		}
	}
	
	
	setTimeout(function(){
		//resizeMenu();
		setnavimgSpanheight();
	},100);
}catch(err){}

////set menu dropdow scroll navimg

function adjustDropMenuHeight(){
	if($('body').hasClass('no_menu_images')){
		$('.prehNav').attr('class', 'prehNav').removeAttr('data-type')
		.removeAttr('data-space').removeAttr('data-imgwidth');
		$('.nav_ul_top li').removeClass('imgYes').removeClass('imgNot');
	}else{
	setTimeout(function(){
	//console.log('scrolling')
	$('.nav_ul_top > li.drop-menu').each(function(index, element) {
		var element = $(this).find('.prehNav');
		var subOne_imgSpace = $(this).find('.prehNav').attr('data-space').split('_');
		var elementFont = $(element).find('a').css('font-size');
		var elementTransform = $(element).find('a').css('text-transform');
		var headerHeight = $('#main > header').height();
		var windowHeight = $(window).height() -120;
		
		var newWidth=0;
		var liWidth = 0;
		var space_leftRight=0;
		var imgWidth=0;
		var imgautowidth = $(element).attr('data-imgwidth')
		
		//console.log('resize check');
		$('.w4rfs_dummy_ul').remove();
		var $c = $(element)
				   .clone()
				   .css({
					   display: 'inline', width: 'auto', float: 'none', display: 'inline-block'
					}).css('font-size', elementFont).css('text-transform', elementTransform).addClass('w4rfs_dummy_ul')
				   .appendTo('body');
				   $c.find('a').css({display: 'block'}).css('font-size', elementFont).css('text-transform', elementTransform);
		//return false
		newWidth = $c.width();
		if(imgautowidth == 'auto' && $(element).hasClass('cover')){
			var imgnatWidth = $c.children('.w4r_menuImg').find('img').width();
			if(!imgnatWidth){
				imgnatWidth = $c.children('.oneMenuImg').find('img').width();
			}
			if(imgnatWidth > 400){
				imgnatWidth = 400;
			}
			//alert(imgnatWidth)
			if($(element).hasClass('_left') || $(element).hasClass('_right')){
				$(element).children('.w4r_menuImg,.oneMenuImg').width(imgnatWidth)
			}
			//for height
			var imgnatHeight = $c.children('.w4r_menuImg').find('img').height();
			if(!imgnatHeight){
				imgnatHeight = $c.children('.oneMenuImg').find('img').height();
			}
			if(imgnatHeight > 400){
				imgnatHeight = 400;
			}
			//alert(imgnatHeight)
			if($(element).hasClass('_above') || $(element).hasClass('_below')){
				$(element).children('.w4r_menuImg,.oneMenuImg').height(imgnatHeight)
			}
		}
		//return false;
		if($c.hasClass('sub_menuImg_one') || $c.hasClass('w4r_subnavroot_ul')){  
			$c.find('li').wrapAll( '<span class="root_li" style="display:inline-block;"></span>' );
			liWidth = $c.find('.root_li').width();
			newWidth = liWidth;
			space_leftRight = parseInt(subOne_imgSpace[2]) + parseInt(subOne_imgSpace[3]);
			var imgnatWidth = $c.children('.w4r_menuImg').find('img').width();
			if(!imgnatWidth){
				imgnatWidth = $c.children('.oneMenuImg').find('img').width();
			}
			imgWidth = imgnatWidth;
			if(!imgWidth){
				imgWidth = $c.children('.w4r_menuImg').width();
			}
			
			if(imgautowidth == 'auto'){}else{
				imgWidth = parseInt(imgautowidth)
			}
			rootimgspace = imgWidth + space_leftRight;
			if($(element).hasClass('_left') || $(element).hasClass('_right')){
				if(rootimgspace > 400){
					rootimgspace = 400;
					imgWidth = 400;
					$(element).children('.w4r_menuImg,.oneMenuImg').width(imgWidth)
				}
			}
			//console.log(rootimgspace)
			if($(element).children('.oneMenuImg').length > 0 || $(this).find('.prehNav > .w4r_menuImg').length > 0){
				if($(element).hasClass('_right')){
					$(element).css('padding-right', rootimgspace+'px');
				}
				if($(element).hasClass('_left')){
					$(element).css('padding-left', rootimgspace+'px');
				}
			}
			//return false;
			//if(($(element).hasClass('w4r_subnavroot_ul') || $(element).hasClass('sub_menuImg_one')) && ($(element).hasClass('_left') || $(element).hasClass('_right'))){
				newWidth = newWidth + imgWidth + 100;
			//}
			//console.log('newWidth--> '+newWidth)
				$(element).attr('data-width', newWidth).css({
					"max-width": newWidth+"px",
					"min-width": imgWidth+"px",
				});
		}else{
			newWidth = newWidth + 100
			if( newWidth > $(element).width() ) {
				$(element).css('max-width', newWidth+'px').css('min-width', imgWidth+'px').attr('data-width', newWidth);
			}
		}
		if($(element).height() > windowHeight) {
			$(element).css('max-height', windowHeight+'px').css('overflow-y', 'auto');
		}
		
		var totalchildLI = $(element).find('li').length
		var totalchildimageNot = $(element).find('li.imgNot').length
		if(totalchildLI == totalchildimageNot){
			$(element).removeClass('cover')
			.removeClass('sub_menuImg_one')
			.removeClass('_left')
			.removeClass('_right')
			.removeClass('_above')
			.removeClass('_below');
		}
		//return false;
		$c.remove();
		//return false;
	});
	},500);
	}
}

$(document).ready(function(e) {
	adjustDropMenuHeight();
});

$(window).resize(function() {
	adjustDropMenuHeight();
	
});

/*
Web4Realty phone mask
Author: fasy chaudhary
LeadCoder: Web4Realty.com 
*/
$.fn.fsPhonemask = function() {
	this.attr('maxlength', '16');
	$(this).each(function(index, element) {
		var Vphone = $(this);
		setTimeout(function(){
			try {
				var x = $(Vphone).val();
				//console.log(x)
				var	y = x.replace('-','');
					y = x.replace(/ /g,'');
					y = y.replace('-','');
					y = y.replace('(','');
					y = y.replace(')','');
				if (y.length === 3) {
					var a = y.substr(0, 3);
					aa = '('+a+') ';
					$(Vphone).val(aa);
				}
				if (y.length === 6) {
					var a = y.substr(0, 3);
					var b = y.substr(3, 3);
					aa = '('+a+') ';
					$(Vphone).val(aa + b + '-');
				}
		
				if (y.length === 10) {
					var a = y.substr(0, 3);
					var b = y.substr(3, 3);
					var c = y.substr(6, 4);
					aa = '('+a+') ';
					$(Vphone).val(aa + b + '-' + c);
				}
				if (y.length === 11) {
					var a = y.charAt(0)
					var b = y.substr(1, 3);
					var c = y.substr(4, 3);
					var d = y.substr(7, 4);
					aa = '('+b+') ';
					$(Vphone).val(a +' '+aa + c + '-' + d);
				}
			}
			catch(err) {}
		  }, 120);
	});
    this
	.on('keypress blur paste', function(e) {
			var key = e.charCode || e.keyCode || 0;
			$phone = $(this);
			  setTimeout(function(){
				var x = $phone.val();
				var y = x.replace('-','');
				  y = x.replace(/ /g,'');
				  y = y.replace('-','');
				  y = y.replace('(','');
				  y = y.replace(')','');
				if (y.length === 3) {
					var a = y.substr(0, 3);
					aa = '('+a+') ';
					$phone.val(aa);
				}
				if (y.length === 6) {
					var a = y.substr(0, 3);
					var b = y.substr(3, 3);
					aa = '('+a+') ';
					$phone.val(aa + b + '-');
				}
		
				if (y.length === 10) {
					var a = y.substr(0, 3);
					var b = y.substr(3, 3);
					var c = y.substr(6, 4);
					aa = '('+a+') ';
					$phone.val(aa + b + '-' + c);
				}
				if (y.length === 11) {
					var a = y.charAt(0)
					var b = y.substr(1, 3);
					var c = y.substr(4, 3);
					var d = y.substr(7, 4);
					aa = '('+b+') ';
					$phone.val(a +' '+aa + c + '-' + d);
				}
			  }, 100);
		})
	.keydown(function(e) {
			var key = e.charCode || e.keyCode || 0;
			$phone = $(this);
			if(key == 8){
				setTimeout(function(){
				var x = $phone.val();
				var y = x.replace('-','');
				  y = x.replace(/ /g,'');
				  y = y.replace('-','');
				  y = y.replace('(','');
				  y = y.replace(')','');
				if (x.length === 6) {
					var a = y.substr(0, 3);
					aa = '('+a+') ';
					$phone.val(aa);
				}
				if (x.length === 10) {
					var a = y.substr(0, 3);
					var b = y.substr(3, 3);
					aa = '('+a+') ';
					$phone.val(aa + b + '-');
				}
		
				if (y.length === 10) {
					var a = y.substr(0, 3);
					var b = y.substr(3, 3);
					var c = y.substr(6, 4);
					aa = '('+a+') ';
					$phone.val(aa + b + '-' + c);
				}
				if (y.length === 11) {
					var a = y.charAt(0)
					var b = y.substr(1, 3);
					var c = y.substr(4, 3);
					var d = y.substr(7, 4);
					aa = '('+b+') ';
					$phone.val(a +' '+aa + c + '-' + d);
				}
			  }, 100);
			}
			
			// Allow: backspace, delete, tab, escape, enter and .
			if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
			  // Allow: Ctrl+A,Ctrl+C,Ctrl+V,Ctrl+X, Command+A
			  ((e.keyCode == 65 || e.keyCode == 86 || e.keyCode == 67 || e.keyCode == 88) && (e.ctrlKey === true || e.metaKey === true)) ||
			  // Allow: home, end, left, right, down, up
			  (e.keyCode >= 35 && e.keyCode <= 40)) {
			  // let it happen, don't do anything
			  return;
			}
			// Ensure that it is a number and stop the keypress
			if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
			  e.preventDefault();
			}
			//console.log(e.keyCode)
		})
	.blur(function(e) {
			$phone = $(this);
			var x = $phone.val();
			var y = x.replace('-','');
			y = x.replace(/ /g,'');
			y = y.replace('(','');
			y = y.replace(')','');
			setTimeout(function(){
			  if(y.length < 10) {
				  $phone.val('');
			  }
			}, 100);
		})
	.bind('paste', function(e) {
		var $this = $(this);  
		setTimeout(function () {  
			$this.val($this.val().replace(/[^0-9]/g, ''));  
		}, 5); 
	});
};
$.fn.numberonly = function() {
    this
	.keydown(function(e) {
			// Allow: backspace, delete, tab, escape, enter and .
			if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
			  // Allow: Ctrl+A,Ctrl+C,Ctrl+V, Command+A
			  ((e.keyCode == 65 || e.keyCode == 86 || e.keyCode == 67 || e.keyCode == 88) && (e.ctrlKey === true || e.metaKey === true)) ||
			  // Allow: home, end, left, right, down, up
			  (e.keyCode >= 35 && e.keyCode <= 40)) {
			  // let it happen, don't do anything
			  return;
			}
			// Ensure that it is a number and stop the keypress
			if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105) || e.keyCode > 189) {
			  e.preventDefault();
			}
		});
};
$( ".w4r_phoneMask" ).fsPhonemask();
$( ".numberonly" ).numberonly();

////
// Restricts input for each element in the set of matched elements to the given inputFilter.
(function($) {
  $.fn.inputFilter = function(inputFilter) {
    return this.on("input keydown keyup mousedown mouseup select contextmenu drop", function() {
      if (inputFilter(this.value)) {
        this.oldValue = this.value;
        this.oldSelectionStart = this.selectionStart;
        this.oldSelectionEnd = this.selectionEnd;
      } else if (this.hasOwnProperty("oldValue")) {
        this.value = this.oldValue;
        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
      }
    });
  };
}(jQuery));

// Restrict input to digits by using a regular expression filter.
$(".numberonlyInput").inputFilter(function(value) {
  return /^\d*$/.test(value);
});

$.fn.phonewithEXT = function() {
	this.bind('keypress blur paste change keydown input', function(e) {
		setofficephone($(this).attr('data-type'));
	});
};

$('.officePhone').phonewithEXT();

function setofficephone(e){
	setTimeout(function(){
		var val1 = $('#'+e).parents('.offcMask').find('.officePhone.a').val();
		var val2 = $('#'+e).parents('.offcMask').find('.officePhone.c').val();
		var ext	= ' x'+val2;
		if(val2 == ''){
			ext = '';
		}
		if(val1 !=''){
			$('#'+e).val(val1+ext);
		}else{
			$('#'+e).parents('.offcMask').find('.officePhone.c').val('');
			$('#'+e).val('');
		}
	},100);
}
//if (!System.Text.RegularExpressions.Regex.IsMatch(textbox.Text, "^[0-9]*$"))

(function($) {
	$.fn.currencyFormat = function() {
		this.each( function( i ) {
			$(this).change( function( e ){
				if( isNaN( parseInt( this.value ) ) ) return;
				//this.value = parseInt(this.value);
				this.value = parseFloat(this.value).toFixed(2);
			});
		});
		return this;
	}
})( jQuery );
$( function() {
	$('.decimelonly').currencyFormat();
});    
$(document).on('keyup', '.priceonly', function() {
	var x = $(this).val();
	$(this).val(x.toString().replace(/,/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ","));
});

/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.5.7
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
/* global window, document, define, jQuery, setInterval, clearInterval */
(function(factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }

}(function($) {
    'use strict';
    var Slick = window.Slick || {};

    Slick = (function() {

        var instanceUid = 0;

        function Slick(element, settings) {

            var _ = this, dataSettings;

            _.defaults = {
                accessibility: true,
                adaptiveHeight: false,
                appendArrows: $(element),
                appendDots: $(element),
                arrows: true,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev slick-prev-Btn" aria-label="Previous" tabindex="0" role="button"><i class="ico-left-arrow-thin white"></i></button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next slick-next-Btn" aria-label="Next" tabindex="0" role="button"><i class="ico-right-arrow-thin white"></i></button>',
                autoplay: false,
                autoplaySpeed: 3000,
                centerMode: false,
                centerPadding: '50px',
                cssEase: 'ease',
                customPaging: function(slider, i) {
                    return '<button type="button" data-role="none" role="button" aria-required="false" tabindex="0">' + (i + 1) + '</button>';
                },
                dots: false,
                dotsClass: 'slick-dots',
                draggable: true,
                easing: 'linear',
                edgeFriction: 0.35,
                fade: false,
                focusOnSelect: false,
                infinite: true,
                initialSlide: 0,
                lazyLoad: 'ondemand',
                mobileFirst: false,
                pauseOnHover: true,
                pauseOnDotsHover: false,
                respondTo: 'window',
                responsive: null,
                rows: 1,
                rtl: false,
                slide: '',
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: true,
                swipeToSlide: false,
                touchMove: true,
                touchThreshold: 5,
                useCSS: true,
                variableWidth: false,
                vertical: false,
                verticalSwiping: false,
                waitForAnimate: true,
                zIndex: 1000
            };

            _.initials = {
                animating: false,
                dragging: false,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: false,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: false,
                unslicked: false
            };

            $.extend(_, _.initials);

            _.activeBreakpoint = null;
            _.animType = null;
            _.animProp = null;
            _.breakpoints = [];
            _.breakpointSettings = [];
            _.cssTransitions = false;
            _.hidden = 'hidden';
            _.paused = false;
            _.positionProp = null;
            _.respondTo = null;
            _.rowCount = 1;
            _.shouldClick = true;
            _.$slider = $(element);
            _.$slidesCache = null;
            _.transformType = null;
            _.transitionType = null;
            _.visibilityChange = 'visibilitychange';
            _.windowWidth = 0;
            _.windowTimer = null;

            dataSettings = $(element).data('slick') || {};

            _.options = $.extend({}, _.defaults, dataSettings, settings);

            _.currentSlide = _.options.initialSlide;

            _.originalSettings = _.options;

            if (typeof document.mozHidden !== 'undefined') {
                _.hidden = 'mozHidden';
                _.visibilityChange = 'mozvisibilitychange';
            } else if (typeof document.webkitHidden !== 'undefined') {
                _.hidden = 'webkitHidden';
                _.visibilityChange = 'webkitvisibilitychange';
            }

            _.autoPlay = $.proxy(_.autoPlay, _);
            _.autoPlayClear = $.proxy(_.autoPlayClear, _);
            _.changeSlide = $.proxy(_.changeSlide, _);
            _.clickHandler = $.proxy(_.clickHandler, _);
            _.selectHandler = $.proxy(_.selectHandler, _);
            _.setPosition = $.proxy(_.setPosition, _);
            _.swipeHandler = $.proxy(_.swipeHandler, _);
            _.dragHandler = $.proxy(_.dragHandler, _);
            _.keyHandler = $.proxy(_.keyHandler, _);
            _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);

            _.instanceUid = instanceUid++;

            // A simple way to check for HTML strings
            // Strict HTML recognition (must start with <)
            // Extracted from jQuery v1.11 source
            _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;


            _.registerBreakpoints();
            _.init(true);
            _.checkResponsive(true);

        }

        return Slick;

    }());

    Slick.prototype.addSlide = Slick.prototype.slickAdd = function(markup, index, addBefore) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            addBefore = index;
            index = null;
        } else if (index < 0 || (index >= _.slideCount)) {
            return false;
        }

        _.unload();

        if (typeof(index) === 'number') {
            if (index === 0 && _.$slides.length === 0) {
                $(markup).appendTo(_.$slideTrack);
            } else if (addBefore) {
                $(markup).insertBefore(_.$slides.eq(index));
            } else {
                $(markup).insertAfter(_.$slides.eq(index));
            }
        } else {
            if (addBefore === true) {
                $(markup).prependTo(_.$slideTrack);
            } else {
                $(markup).appendTo(_.$slideTrack);
            }
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slides.each(function(index, element) {
            $(element).attr('data-slick-index', index);
        });

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.animateHeight = function() {
        var _ = this;
        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.animate({
                height: targetHeight
            }, _.options.speed);
        }
    };

    Slick.prototype.animateSlide = function(targetLeft, callback) {

        var animProps = {},
            _ = this;

        _.animateHeight();

        if (_.options.rtl === true && _.options.vertical === false) {
            targetLeft = -targetLeft;
        }
        if (_.transformsEnabled === false) {
            if (_.options.vertical === false) {
                _.$slideTrack.animate({
                    left: targetLeft
                }, _.options.speed, _.options.easing, callback);
            } else {
                _.$slideTrack.animate({
                    top: targetLeft
                }, _.options.speed, _.options.easing, callback);
            }

        } else {

            if (_.cssTransitions === false) {
                if (_.options.rtl === true) {
                    _.currentLeft = -(_.currentLeft);
                }
                $({
                    animStart: _.currentLeft
                }).animate({
                    animStart: targetLeft
                }, {
                    duration: _.options.speed,
                    easing: _.options.easing,
                    step: function(now) {
                        now = Math.ceil(now);
                        if (_.options.vertical === false) {
                            animProps[_.animType] = 'translate(' +
                                now + 'px, 0px)';
                            _.$slideTrack.css(animProps);
                        } else {
                            animProps[_.animType] = 'translate(0px,' +
                                now + 'px)';
                            _.$slideTrack.css(animProps);
                        }
                    },
                    complete: function() {
                        if (callback) {
                            callback.call();
                        }
                    }
                });

            } else {

                _.applyTransition();
                targetLeft = Math.ceil(targetLeft);

                if (_.options.vertical === false) {
                    animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
                } else {
                    animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
                }
                _.$slideTrack.css(animProps);

                if (callback) {
                    setTimeout(function() {

                        _.disableTransition();

                        callback.call();
                    }, _.options.speed);
                }

            }

        }
		w4rlazyload();

    };

    Slick.prototype.asNavFor = function(index) {

        var _ = this,
            asNavFor = _.options.asNavFor;

        if ( asNavFor && asNavFor !== null ) {
            asNavFor = $(asNavFor).not(_.$slider);
        }

        if ( asNavFor !== null && typeof asNavFor === 'object' ) {
            asNavFor.each(function() {
                var target = $(this).slick('getSlick');
                if(!target.unslicked) {
                    target.slideHandler(index, true);
                }
            });
        }

    };

    Slick.prototype.applyTransition = function(slide) {

        var _ = this,
            transition = {};

        if (_.options.fade === false) {
            transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
        } else {
            transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
        }

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.autoPlay = function() {

        var _ = this;

        if (_.autoPlayTimer) {
            clearInterval(_.autoPlayTimer);
        }

        if (_.slideCount > _.options.slidesToShow && _.paused !== true) {
            _.autoPlayTimer = setInterval(_.autoPlayIterator,
                _.options.autoplaySpeed);
        }

    };

    Slick.prototype.autoPlayClear = function() {

        var _ = this;
        if (_.autoPlayTimer) {
            clearInterval(_.autoPlayTimer);
        }

    };

    Slick.prototype.autoPlayIterator = function() {

        var _ = this;

        if (_.options.infinite === false) {

            if (_.direction === 1) {

                if ((_.currentSlide + 1) === _.slideCount -
                    1) {
                    _.direction = 0;
                }

                _.slideHandler(_.currentSlide + _.options.slidesToScroll);

            } else {

                if ((_.currentSlide - 1 === 0)) {

                    _.direction = 1;

                }

                _.slideHandler(_.currentSlide - _.options.slidesToScroll);

            }

        } else {

            _.slideHandler(_.currentSlide + _.options.slidesToScroll);

        }

    };

    Slick.prototype.buildArrows = function() {

        var _ = this;

        if (_.options.arrows === true ) {

            _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
            _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');

            if( _.slideCount > _.options.slidesToShow ) {

                _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
                _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
				
				// this condition only for banner slider 
				var dnslider = _.$slider.parent().attr('id');
				if(dnslider != '' && dnslider!=undefined) {
					dnslider = dnslider.split('_');
					if(dnslider[0] == 'dynSlider') {
						//console.log('dynSlider');
						$('#'+_.$slider.parent().attr('id')).addClass('banner-outside-arrows');
						if (_.htmlExpr.test(_.options.prevArrow)) {
							_.$prevArrow.prependTo(_.$slider.parent());
						}
		
						if (_.htmlExpr.test(_.options.nextArrow)) {
							_.$nextArrow.appendTo(_.$slider.parent());
						}
						
					}
					
				}else {
					if (_.htmlExpr.test(_.options.prevArrow)) {
						_.$prevArrow.prependTo(_.options.appendArrows);
					}
	
					if (_.htmlExpr.test(_.options.nextArrow)) {
						_.$nextArrow.appendTo(_.options.appendArrows);
					}
				}
				

                if (_.options.infinite !== true) {
                    _.$prevArrow
                        .addClass('slick-disabled')
                        .attr('aria-disabled', 'true');
                }

            } else {

                _.$prevArrow.add( _.$nextArrow )

                    .addClass('slick-hidden')
                    .attr({
                        'aria-disabled': 'true',
                        'tabindex': '-1'
                    });

            }

        }

    };

    Slick.prototype.buildDots = function() {

        var _ = this,
            i, dotString;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            dotString = '<ul class="' + _.options.dotsClass + '">';

            for (i = 0; i <= _.getDotCount(); i += 1) {
                dotString += '<li>' + _.options.customPaging.call(this, _, i) + '</li>';
            }

            dotString += '</ul>';

            _.$dots = $(dotString).appendTo(
                _.options.appendDots);

            _.$dots.find('li').first().addClass('slick-active').attr('aria-hidden', 'false');

        }

    };

    Slick.prototype.buildOut = function() {

        var _ = this;

        _.$slides =
            _.$slider
                .children( _.options.slide + ':not(.slick-cloned)')
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        _.$slides.each(function(index, element) {
            $(element)
                .attr('data-slick-index', index)
                .data('originalStyling', $(element).attr('style') || '');
        });

        _.$slidesCache = _.$slides;

        _.$slider.addClass('slick-slider');

        _.$slideTrack = (_.slideCount === 0) ?
            $('<div class="slick-track"/>').appendTo(_.$slider) :
            _.$slides.wrapAll('<div class="slick-track"/>').parent();

        _.$list = _.$slideTrack.wrap(
            '<div aria-live="polite" class="slick-list"/>').parent();
        _.$slideTrack.css('opacity', 0);

        if (_.options.centerMode === true || _.options.swipeToSlide === true) {
            _.options.slidesToScroll = 1;
        }

        $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');

        _.setupInfinite();

        _.buildArrows();

        _.buildDots();

        _.updateDots();


        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);
		/*//console.log('ss');
		setTimeout(function(){
		  $('span.b').each(function(index, element) {
				$(this).css('width', $(this).parent('.parentSpan').find('span.a').find('h2').width());
			});
			$('span.c').each(function(index, element) {
				$(this).css('width', $(this).parent('.parentSpan').find('span.a').find('h2').width());
			});
		}, 350);*/
		

        if (_.options.draggable === true) {
            _.$list.addClass('draggable');
        }

    };

    Slick.prototype.buildRows = function() {

        var _ = this, a, b, c, newSlides, numOfSlides, originalSlides,slidesPerSection;

        newSlides = document.createDocumentFragment();
        originalSlides = _.$slider.children();

        if(_.options.rows > 1) {

            slidesPerSection = _.options.slidesPerRow * _.options.rows;
            numOfSlides = Math.ceil(
                originalSlides.length / slidesPerSection
            );

            for(a = 0; a < numOfSlides; a++){
                var slide = document.createElement('div');
                for(b = 0; b < _.options.rows; b++) {
                    var row = document.createElement('div');
                    for(c = 0; c < _.options.slidesPerRow; c++) {
                        var target = (a * slidesPerSection + ((b * _.options.slidesPerRow) + c));
                        if (originalSlides.get(target)) {
                            row.appendChild(originalSlides.get(target));
                        }
                    }
                    slide.appendChild(row);
                }
                newSlides.appendChild(slide);
            }

            _.$slider.html(newSlides);
            _.$slider.children().children().children()
                .css({
                    'width':(100 / _.options.slidesPerRow) + '%',
                    'display': 'inline-block'
                });
				

        }

    };

    Slick.prototype.checkResponsive = function(initial, forceUpdate) {

        var _ = this,
            breakpoint, targetBreakpoint, respondToWidth, triggerBreakpoint = false;
        var sliderWidth = _.$slider.width();
        var windowWidth = window.innerWidth || $(window).width();

        if (_.respondTo === 'window') {
            respondToWidth = windowWidth;
        } else if (_.respondTo === 'slider') {
            respondToWidth = sliderWidth;
        } else if (_.respondTo === 'min') {
            respondToWidth = Math.min(windowWidth, sliderWidth);
        }

        if ( _.options.responsive &&
            _.options.responsive.length &&
            _.options.responsive !== null) {

            targetBreakpoint = null;

            for (breakpoint in _.breakpoints) {
                if (_.breakpoints.hasOwnProperty(breakpoint)) {
                    if (_.originalSettings.mobileFirst === false) {
                        if (respondToWidth < _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    } else {
                        if (respondToWidth > _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    }
                }
            }

            if (targetBreakpoint !== null) {
                if (_.activeBreakpoint !== null) {
                    if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
                        _.activeBreakpoint =
                            targetBreakpoint;
                        if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                            _.unslick(targetBreakpoint);
                        } else {
                            _.options = $.extend({}, _.originalSettings,
                                _.breakpointSettings[
                                    targetBreakpoint]);
                            if (initial === true) {
                                _.currentSlide = _.options.initialSlide;
                            }
                            _.refresh(initial);
                        }
                        triggerBreakpoint = targetBreakpoint;
                    }
                } else {
                    _.activeBreakpoint = targetBreakpoint;
                    if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                        _.unslick(targetBreakpoint);
                    } else {
                        _.options = $.extend({}, _.originalSettings,
                            _.breakpointSettings[
                                targetBreakpoint]);
                        if (initial === true) {
                            _.currentSlide = _.options.initialSlide;
                        }
                        _.refresh(initial);
                    }
                    triggerBreakpoint = targetBreakpoint;
                }
            } else {
                if (_.activeBreakpoint !== null) {
                    _.activeBreakpoint = null;
                    _.options = _.originalSettings;
                    if (initial === true) {
                        _.currentSlide = _.options.initialSlide;
                    }
                    _.refresh(initial);
                    triggerBreakpoint = targetBreakpoint;
                }
            }

            // only trigger breakpoints during an actual break. not on initialize.
            if( !initial && triggerBreakpoint !== false ) {
                _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
            }
        }

    };

    Slick.prototype.changeSlide = function(event, dontAnimate) {
		

        var _ = this,
            $target = $(event.target),
            indexOffset, slideOffset, unevenOffset;

        // If target is a link, prevent default action.
        if($target.is('a')) {
            event.preventDefault();
        }

        // If target is not the <li> element (ie: a child), find the <li>.
        if(!$target.is('li')) {
            $target = $target.closest('li');
        }

        unevenOffset = (_.slideCount % _.options.slidesToScroll !== 0);
        indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;

        switch (event.data.message) {

            case 'previous':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
                }
                break;

            case 'next':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
                }
                break;

            case 'index':
                var index = event.data.index === 0 ? 0 :
                    event.data.index || $target.index() * _.options.slidesToScroll;

                _.slideHandler(_.checkNavigable(index), false, dontAnimate);
                $target.children().trigger('focus');
                break;

            default:
                return;
        }

    };

    Slick.prototype.checkNavigable = function(index) {

        var _ = this,
            navigables, prevNavigable;

        navigables = _.getNavigableIndexes();
        prevNavigable = 0;
        if (index > navigables[navigables.length - 1]) {
            index = navigables[navigables.length - 1];
        } else {
            for (var n in navigables) {
                if (index < navigables[n]) {
                    index = prevNavigable;
                    break;
                }
                prevNavigable = navigables[n];
            }
        }

        return index;
    };

    Slick.prototype.cleanUpEvents = function() {

        var _ = this;

        if (_.options.dots && _.$dots !== null) {

            $('li', _.$dots).off('click.slick', _.changeSlide);

            if (_.options.pauseOnDotsHover === true && _.options.autoplay === true) {

                $('li', _.$dots)
                    .off('mouseenter.slick', $.proxy(_.setPaused, _, true))
                    .off('mouseleave.slick', $.proxy(_.setPaused, _, false));

            }

        }

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
            _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);
        }

        _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);
        _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);
        _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);
        _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);

        _.$list.off('click.slick', _.clickHandler);

        $(document).off(_.visibilityChange, _.visibility);

        _.$list.off('mouseenter.slick', $.proxy(_.setPaused, _, true));
        _.$list.off('mouseleave.slick', $.proxy(_.setPaused, _, false));

        if (_.options.accessibility === true) {
            _.$list.off('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().off('click.slick', _.selectHandler);
        }

        $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);

        $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);

        $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);

        $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(document).off('ready.slick.slick-' + _.instanceUid, _.setPosition);
    };

    Slick.prototype.cleanUpRows = function() {

        var _ = this, originalSlides;

        if(_.options.rows > 1) {
            originalSlides = _.$slides.children().children();
            originalSlides.removeAttr('style');
            _.$slider.html(originalSlides);
        }

    };

    Slick.prototype.clickHandler = function(event) {

        var _ = this;

        if (_.shouldClick === false) {
            event.stopImmediatePropagation();
            event.stopPropagation();
            event.preventDefault();
        }

    };

    Slick.prototype.destroy = function(refresh) {

        var _ = this;

        _.autoPlayClear();

        _.touchObject = {};

        _.cleanUpEvents();

        $('.slick-cloned', _.$slider).detach();

        if (_.$dots) {
            _.$dots.remove();
        }

        if ( _.options.arrows === true ) {

            if ( _.$prevArrow && _.$prevArrow.length ) {

                _.$prevArrow
                    .removeClass('slick-disabled slick-arrow slick-hidden')
                    .removeAttr('aria-hidden aria-disabled tabindex')
                    .css("display","");

                if ( _.htmlExpr.test( _.options.prevArrow )) {
                    _.$prevArrow.remove();
                }
            }

            if ( _.$nextArrow && _.$nextArrow.length ) {

                _.$nextArrow
                    .removeClass('slick-disabled slick-arrow slick-hidden')
                    .removeAttr('aria-hidden aria-disabled tabindex')
                    .css("display","");

                if ( _.htmlExpr.test( _.options.nextArrow )) {
                    _.$nextArrow.remove();
                }
            }

        }

        if (_.$slides) {

            _.$slides
                .removeClass('slick-slide slick-active slick-center slick-visible slick-current')
                .removeAttr('aria-hidden')
                .removeAttr('data-slick-index')
                .each(function(){
                    $(this).attr('style', $(this).data('originalStyling'));
                });

            _.$slideTrack.children(this.options.slide).detach();

            _.$slideTrack.detach();

            _.$list.detach();

            _.$slider.append(_.$slides);
        }

        _.cleanUpRows();

        _.$slider.removeClass('slick-slider');
        _.$slider.removeClass('slick-initialized');

        _.unslicked = true;

        if(!refresh) {
            _.$slider.trigger('destroy', [_]);
        }

    };

    Slick.prototype.disableTransition = function(slide) {

        var _ = this,
            transition = {};

        transition[_.transitionType] = '';

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.fadeSlide = function(slideIndex, callback) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).css({
                zIndex: _.options.zIndex
            });

            _.$slides.eq(slideIndex).animate({
                opacity: 1
            }, _.options.speed, _.options.easing, callback);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 1,
                zIndex: _.options.zIndex
            });

            if (callback) {
                setTimeout(function() {

                    _.disableTransition(slideIndex);

                    callback.call();
                }, _.options.speed);
            }

        }

    };

    Slick.prototype.fadeSlideOut = function(slideIndex) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).animate({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            }, _.options.speed, _.options.easing);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            });

        }

    };

    Slick.prototype.filterSlides = Slick.prototype.slickFilter = function(filter) {

        var _ = this;

        if (filter !== null) {

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.filter(filter).appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function() {

        var _ = this;
        return _.currentSlide;

    };

    Slick.prototype.getDotCount = function() {

        var _ = this;

        var breakPoint = 0;
        var counter = 0;
        var pagerQty = 0;

        if (_.options.infinite === true) {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToShow;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        } else if (_.options.centerMode === true) {
            pagerQty = _.slideCount;
        } else {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToShow;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        }

        return pagerQty - 1;

    };

    Slick.prototype.getLeft = function(slideIndex) {
        var _ = this,
            targetLeft,
            verticalHeight,
            verticalOffset = 0,
            targetSlide;

        _.slideOffset = 0;
        verticalHeight = _.$slides.first().outerHeight(true);

        if (_.options.infinite === true) {
            if (_.slideCount > _.options.slidesToShow) {
                _.slideOffset = (_.slideWidth * _.options.slidesToShow) * -1;
                verticalOffset = (verticalHeight * _.options.slidesToShow) * -1;
            }
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
                    if (slideIndex > _.slideCount) {
                        _.slideOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth) * -1;
                        verticalOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight) * -1;
                    } else {
                        _.slideOffset = ((_.slideCount % _.options.slidesToScroll) * _.slideWidth) * -1;
                        verticalOffset = ((_.slideCount % _.options.slidesToScroll) * verticalHeight) * -1;
                    }
                }
            }
        } else {
            if (slideIndex + _.options.slidesToShow > _.slideCount) {
                _.slideOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * _.slideWidth;
                verticalOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * verticalHeight;
            }
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.slideOffset = 0;
            verticalOffset = 0;
        }

        if (_.options.centerMode === true && _.options.infinite === true) {
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
        } else if (_.options.centerMode === true) {
            _.slideOffset = 0;
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
        }

        if (_.options.vertical === false) {
            targetLeft = ((slideIndex * _.slideWidth) * -1) + _.slideOffset;
        } else {
            targetLeft = ((slideIndex * verticalHeight) * -1) + verticalOffset;
        }

        if (_.options.variableWidth === true) {

            if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
            } else {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
            }

            targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;

            if (_.options.centerMode === true) {
                if (_.options.infinite === false) {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
                } else {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
                }
                targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
                targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
            }
        }

        return targetLeft;

    };

    Slick.prototype.getOption = Slick.prototype.slickGetOption = function(option) {

        var _ = this;

        return _.options[option];

    };

    Slick.prototype.getNavigableIndexes = function() {

        var _ = this,
            breakPoint = 0,
            counter = 0,
            indexes = [],
            max;

        if (_.options.infinite === false) {
            max = _.slideCount;
        } else {
            breakPoint = _.options.slidesToScroll * -1;
            counter = _.options.slidesToScroll * -1;
            max = _.slideCount * 2;
        }

        while (breakPoint < max) {
            indexes.push(breakPoint);
            breakPoint = counter + _.options.slidesToScroll;
            counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
        }

        return indexes;

    };

    Slick.prototype.getSlick = function() {

        return this;

    };

    Slick.prototype.getSlideCount = function() {

        var _ = this,
            slidesTraversed, swipedSlide, centerOffset;

        centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;

        if (_.options.swipeToSlide === true) {
            _.$slideTrack.find('.slick-slide').each(function(index, slide) {
                if (slide.offsetLeft - centerOffset + ($(slide).outerWidth() / 2) > (_.swipeLeft * -1)) {
                    swipedSlide = slide;
                    return false;
                }
            });

            slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;

            return slidesTraversed;

        } else {
            return _.options.slidesToScroll;
        }

    };

    Slick.prototype.goTo = Slick.prototype.slickGoTo = function(slide, dontAnimate) {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'index',
                index: parseInt(slide)
            }
        }, dontAnimate);

    };

    Slick.prototype.init = function(creation) {

        var _ = this;

        if (!$(_.$slider).hasClass('slick-initialized')) {

            $(_.$slider).addClass('slick-initialized');

            _.buildRows();
            _.buildOut();
            _.setProps();
            _.startLoad();
            _.loadSlider();
            _.initializeEvents();
            _.updateArrows();
            _.updateDots();

        }

        if (creation) {
            _.$slider.trigger('init', [_]);
        }

        if (_.options.accessibility === true) {
            _.initADA();
        }
		setTimeout(function(){
			var __nextSlide = _.$slider.find('.video-block').parent().next().height();
			var __prevtSlide = _.$slider.find('.video-block').parent().prev().height();
			
			var vidBlock__h = '';
			if(__nextSlide){
				vidBlock__h = __nextSlide;
				console.log('AA--> '+vidBlock__h)
			}else{
				vidBlock__h = __prevtSlide;
				console.log('BB--> '+__prevtSlide)
			}
			console.log(__nextSlide);
			console.log(__prevtSlide);
			if(__nextSlide || __prevtSlide){
			
				_.$slider.find('.video-block').css('height', vidBlock__h+'px');
				_.$slider.find('.video-block').parent().css('height', vidBlock__h+'px');
			}
				console.log('vidBlock--> '+vidBlock__h)
		},600);
					
		_.$slider.parents('.dynSlider_').find('.sliderAgentImg').find('img').load(function(e) {
			var delayTime = parseInt(_.$slider.parents('.dynSlider_').find('.sliderAgentImg').attr('data-time'));
			var delayTime_ = delayTime*1000+1500;
			if(delayTime == '' || delayTime == 0){
				delayTime_ = 300;
			}
			setTimeout(function(){
				var agentImgAnim = _.$slider.parents('.dynSlider_').find('.sliderAgentImg').attr('data-animate');
				_.$slider.parents('.dynSlider_').find('.sliderAgentImg').parent().removeClass('animHidden').show();
				_.$slider.parents('.dynSlider_').find('.sliderAgentImg').addClass(agentImgAnim);
				var imgWidthSlider = _.$slider.parents('.dynSlider_').find('.sliderAgentImg').find('img').width(),
					imgHeightSlider = _.$slider.parents('.dynSlider_').find('.sliderAgentImg').find('img').height(),
					sliderHeight = _.$slider.parents('.dynSlider_').height(),
					fasy = sliderHeight - imgHeightSlider;
				_.$slider.parents('.dynSlider_').find('.sliderAgentImg').css('width', imgWidthSlider+'px');
				//Percent
				if(!_.$slider.parents('.dynSlider_').find('.sliderAgentImg').hasClass('Percent')){
					_.$slider.parents('.dynSlider_').find('.sliderAgentImg').find('img').css('top', fasy+'px');
				}
				isObjOnObj(_.$slider.parents('.dynSlider_'),_.$slider.parents('.dynSlider_').find('.slick-active'));
				//console.log('loaded img--> '+imgWidthSlider);
				var ar = imgWidthSlider - 20;
				var ag1 = _.$slider.parents('.dynSlider_').find('.sliderAgentImg').length;
				var ag2 = _.$slider.parents('.dynSlider_').find('.sliderAgentImg2').length
				if(($(window).width() < 1002 || $('html').hasClass('tabletonly_class')) && ag1 > 0 && ag2 == 0){
					if(_.$slider.parents('.dynSlider_').find('.banner-slider').hasClass('ag1_left')){
						_.$slider.parents('.dynSlider_').find('.slide-caption div.a').css('padding-left', ar+'px');
					}
					if(_.$slider.parents('.dynSlider_').find('.banner-slider').hasClass('ag1_right')){
						_.$slider.parents('.dynSlider_').find('.slide-caption div.a').css('padding-right', ar+'px');
					}
				}
				
				
				
			}, delayTime_);
			
			
			

		});
		_.$slider.parents('.dynSlider_').find('.sliderAgentImg2').find('img').load(function(e) {
			var delayTime2 = parseInt(_.$slider.parents('.dynSlider_').find('.sliderAgentImg2').attr('data-time'));
			var delayTime2_ = delayTime2*1000;
			if(delayTime2 == '' || delayTime2 == 0){
				delayTime2_ = 300;
			}
			setTimeout(function(){
				var agentImgAnim = _.$slider.parents('.dynSlider_').find('.sliderAgentImg2').attr('data-animate');
				_.$slider.parents('.dynSlider_').find('.sliderAgentImg2').parent().removeClass('animHidden').show();
				_.$slider.parents('.dynSlider_').find('.sliderAgentImg2').addClass(agentImgAnim);
				var imgWidthSlider = _.$slider.parents('.dynSlider_').find('.sliderAgentImg2').find('img').width(),
					imgHeightSlider = _.$slider.parents('.dynSlider_').find('.sliderAgentImg2').find('img').height(),
					sliderHeight = _.$slider.parents('.dynSlider_').height(),
					fasy = sliderHeight - imgHeightSlider;
				_.$slider.parents('.dynSlider_').find('.sliderAgentImg2').css('width', imgWidthSlider+'px');
				//Percent
				if(!_.$slider.parents('.dynSlider_').find('.sliderAgentImg2').hasClass('Percent')){
					_.$slider.parents('.dynSlider_').find('.sliderAgentImg2').find('img').css('top', fasy+'px');
				}
				isObjOnObj(_.$slider.parents('.dynSlider_'),_.$slider.parents('.dynSlider_').find('.slick-active'));
				//console.log('loaded img--> '+imgWidthSlider);
				var ar = imgWidthSlider - 20;
				var ag1 = _.$slider.parents('.dynSlider_').find('.sliderAgentImg').length
				var ag2 = _.$slider.parents('.dynSlider_').find('.sliderAgentImg2').length
				if($(window).width() < 760 && ag2 > 0 && ag1 == 0){
					if(_.$slider.parents('.dynSlider_').find('.banner-slider').hasClass('ag2_left')){
						_.$slider.parents('.dynSlider_').find('.slide-caption div.a').css('padding-left', ar+'px');
					}
					if(_.$slider.parents('.dynSlider_').find('.banner-slider').hasClass('ag2_right')){
						_.$slider.parents('.dynSlider_').find('.slide-caption div.a').css('padding-right', ar+'px');
					}
				}
				
			}, delayTime2_);
			

		});
		/*setTimeout(function(){
			//console.log('remove style from head');
			$('style.slider-dummy-style').remove();
			console.log('remove style tag');
		}, 1500);*/

    };

    Slick.prototype.initArrowEvents = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow.on('click.slick', {
                message: 'previous'
            }, _.changeSlide);
            _.$nextArrow.on('click.slick', {
                message: 'next'
            }, _.changeSlide);
        }

    };

    Slick.prototype.initDotEvents = function() {

        var _ = this;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            $('li', _.$dots).on('click.slick', {
                message: 'index'
            }, _.changeSlide);
        }

        if (_.options.dots === true && _.options.pauseOnDotsHover === true && _.options.autoplay === true) {
            $('li', _.$dots)
                .on('mouseenter.slick', $.proxy(_.setPaused, _, true))
                .on('mouseleave.slick', $.proxy(_.setPaused, _, false));
        }

    };

    Slick.prototype.initializeEvents = function() {

        var _ = this;

        _.initArrowEvents();

        _.initDotEvents();

        _.$list.on('touchstart.slick mousedown.slick', {
            action: 'start'
        }, _.swipeHandler);
        _.$list.on('touchmove.slick mousemove.slick', {
            action: 'move'
        }, _.swipeHandler);
        _.$list.on('touchend.slick mouseup.slick', {
            action: 'end'
        }, _.swipeHandler);
        _.$list.on('touchcancel.slick mouseleave.slick', {
            action: 'end'
        }, _.swipeHandler);

        _.$list.on('click.slick', _.clickHandler);

        $(document).on(_.visibilityChange, $.proxy(_.visibility, _));

        _.$list.on('mouseenter.slick', $.proxy(_.setPaused, _, true));
        _.$list.on('mouseleave.slick', $.proxy(_.setPaused, _, false));

        if (_.options.accessibility === true) {
            _.$list.on('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));

        $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));

        $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);

        $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(document).on('ready.slick.slick-' + _.instanceUid, _.setPosition);

    };

    Slick.prototype.initUI = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.show();
            _.$nextArrow.show();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.show();

        }

        if (_.options.autoplay === true) {

            _.autoPlay();

        }

    };

    Slick.prototype.keyHandler = function(event) {

        var _ = this;
         //Dont slide if the cursor is inside the form fields and arrow keys are pressed
        if(!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
            if (event.keyCode === 37 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: 'previous'
                    }
                });
            } else if (event.keyCode === 39 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: 'next'
                    }
                });
            }
        }

    };

    Slick.prototype.lazyLoad = function() {

        var _ = this,
            loadRange, cloneRange, rangeStart, rangeEnd;

        function loadImages(imagesScope) {
            $('img[data-lazy]', imagesScope).each(function() {

                var image = $(this),
                    imageSource = $(this).attr('data-lazy'),
                    imageToLoad = document.createElement('img');

                imageToLoad.onload = function() {
                    image
                        .animate({ opacity: 0 }, 100, function() {
                            image
                                .attr('src', imageSource)
                                .animate({ opacity: 1 }, 200, function() {
                                    image
                                        .removeAttr('data-lazy')
                                        .removeClass('slick-loading');
                                });
                        });
                };

                imageToLoad.src = imageSource;

            });
        }

        if (_.options.centerMode === true) {
            if (_.options.infinite === true) {
                rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
                rangeEnd = rangeStart + _.options.slidesToShow + 2;
            } else {
                rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
                rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
            }
        } else {
            rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
            rangeEnd = rangeStart + _.options.slidesToShow;
            if (_.options.fade === true) {
                if (rangeStart > 0) rangeStart--;
                if (rangeEnd <= _.slideCount) rangeEnd++;
            }
        }

        loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);
        loadImages(loadRange);

        if (_.slideCount <= _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-slide');
            loadImages(cloneRange);
        } else
        if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
            loadImages(cloneRange);
        } else if (_.currentSlide === 0) {
            cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
            loadImages(cloneRange);
        }

    };

    Slick.prototype.loadSlider = function() {

        var _ = this;

        _.setPosition();

        _.$slideTrack.css({
            opacity: 1
        });

        _.$slider.removeClass('slick-loading');

        _.initUI();

        if (_.options.lazyLoad === 'progressive') {
            _.progressiveLazyLoad();
        }
		setTimeout(function(){
			try{
				_.$slider.find('.tpOrbt').each(function(index, element) {
					//console.log('fun to set slide img height')
					var _innerH = $(this).height() - 21;
					//console.log('_innerH > '+_innerH)
					$(this).find('img').css('height', _innerH+'px');
				});
			}catch(err) {}
		}, 500);
		////console.log('load slider');
		setTimeout(function(){
			////console.log('remove style from head');
			$('style.slider-dummy-style').remove();
			//console.log('remove style tag');
		}, 5000);

    };

    Slick.prototype.next = Slick.prototype.slickNext = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'next'
            }
        });

    };

    Slick.prototype.orientationChange = function() {

        var _ = this;

        _.checkResponsive();
        _.setPosition();

    };

    Slick.prototype.pause = Slick.prototype.slickPause = function() {

        var _ = this;

        _.autoPlayClear();
        _.paused = true;

    };

    Slick.prototype.play = Slick.prototype.slickPlay = function() {

        var _ = this;

        _.paused = false;
        _.autoPlay();

    };

    Slick.prototype.postSlide = function(index) {

        var _ = this;

        _.$slider.trigger('afterChange', [_, index]);

        _.animating = false;

        _.setPosition();

        _.swipeLeft = null;

        if (_.options.autoplay === true && _.paused === false) {
            _.autoPlay();
        }
        if (_.options.accessibility === true) {
            _.initADA();
        }

    };

    Slick.prototype.prev = Slick.prototype.slickPrev = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'previous'
            }
        });

    };

    Slick.prototype.preventDefault = function(e) {
        e.preventDefault();
    };

    Slick.prototype.progressiveLazyLoad = function() {

        var _ = this,
            imgCount, targetImage;

        imgCount = $('img[data-lazy]', _.$slider).length;

        if (imgCount > 0) {
            targetImage = $('img[data-lazy]', _.$slider).first();
            targetImage.attr('src', targetImage.attr('data-lazy')).removeClass('slick-loading').load(function() {
                    targetImage.removeAttr('data-lazy');
                    _.progressiveLazyLoad();

                    if (_.options.adaptiveHeight === true) {
                        _.setPosition();
                    }
                })
                .error(function() {
                    targetImage.removeAttr('data-lazy');
                    _.progressiveLazyLoad();
                });
        }

    };

    Slick.prototype.refresh = function( initializing ) {

        var _ = this,
            currentSlide = _.currentSlide;

        _.destroy(true);

        $.extend(_, _.initials, { currentSlide: currentSlide });

        _.init();

        if( !initializing ) {

            _.changeSlide({
                data: {
                    message: 'index',
                    index: currentSlide
                }
            }, false);

        }

    };

    Slick.prototype.registerBreakpoints = function() {

        var _ = this, breakpoint, currentBreakpoint, l,
            responsiveSettings = _.options.responsive || null;

        if ( $.type(responsiveSettings) === "array" && responsiveSettings.length ) {

            _.respondTo = _.options.respondTo || 'window';

            for ( breakpoint in responsiveSettings ) {

                l = _.breakpoints.length-1;
                currentBreakpoint = responsiveSettings[breakpoint].breakpoint;

                if (responsiveSettings.hasOwnProperty(breakpoint)) {

                    // loop through the breakpoints and cut out any existing
                    // ones with the same breakpoint number, we don't want dupes.
                    while( l >= 0 ) {
                        if( _.breakpoints[l] && _.breakpoints[l] === currentBreakpoint ) {
                            _.breakpoints.splice(l,1);
                        }
                        l--;
                    }

                    _.breakpoints.push(currentBreakpoint);
                    _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;

                }

            }

            _.breakpoints.sort(function(a, b) {
                return ( _.options.mobileFirst ) ? a-b : b-a;
            });

        }

    };

    Slick.prototype.reinit = function() {

        var _ = this;

        _.$slides =
            _.$slideTrack
                .children(_.options.slide)
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
            _.currentSlide = _.currentSlide - _.options.slidesToScroll;
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.currentSlide = 0;
        }

        _.registerBreakpoints();

        _.setProps();
        _.setupInfinite();
        _.buildArrows();
        _.updateArrows();
        _.initArrowEvents();
        _.buildDots();
        _.updateDots();
        _.initDotEvents();

        _.checkResponsive(false, true);

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        _.setSlideClasses(0);

        _.setPosition();

        _.$slider.trigger('reInit', [_]);

        if (_.options.autoplay === true) {
            _.focusHandler();
        }

    };

    Slick.prototype.resize = function() {

        var _ = this;

        if ($(window).width() !== _.windowWidth) {
            clearTimeout(_.windowDelay);
            _.windowDelay = window.setTimeout(function() {
                _.windowWidth = $(window).width();
                _.checkResponsive();
                if( !_.unslicked ) { _.setPosition(); }
            }, 50);
        }
    };

    Slick.prototype.removeSlide = Slick.prototype.slickRemove = function(index, removeBefore, removeAll) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            removeBefore = index;
            index = removeBefore === true ? 0 : _.slideCount - 1;
        } else {
            index = removeBefore === true ? --index : index;
        }

        if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
            return false;
        }

        _.unload();

        if (removeAll === true) {
            _.$slideTrack.children().remove();
        } else {
            _.$slideTrack.children(this.options.slide).eq(index).remove();
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.setCSS = function(position) {

        var _ = this,
            positionProps = {},
            x, y;

        if (_.options.rtl === true) {
            position = -position;
        }
        x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
        y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';

        positionProps[_.positionProp] = position;

        if (_.transformsEnabled === false) {
            _.$slideTrack.css(positionProps);
        } else {
            positionProps = {};
            if (_.cssTransitions === false) {
                positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
                _.$slideTrack.css(positionProps);
            } else {
                positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
                _.$slideTrack.css(positionProps);
            }
        }

    };

    Slick.prototype.setDimensions = function() {

        var _ = this;

        if (_.options.vertical === false) {
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: ('0px ' + _.options.centerPadding)
                });
            }
        } else {
            _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: (_.options.centerPadding + ' 0px')
                });
            }
        }

        _.listWidth = _.$list.width();
        _.listHeight = _.$list.height();


        if (_.options.vertical === false && _.options.variableWidth === false) {
            _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
            _.$slideTrack.width(Math.ceil((_.slideWidth * _.$slideTrack.children('.slick-slide').length)));

        } else if (_.options.variableWidth === true) {
            _.$slideTrack.width(5000 * _.slideCount);
        } else {
            _.slideWidth = Math.ceil(_.listWidth);
            _.$slideTrack.height(Math.ceil((_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length)));
        }

        var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
        if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);

    };

    Slick.prototype.setFade = function() {

        var _ = this,
            targetLeft;

        _.$slides.each(function(index, element) {
            targetLeft = (_.slideWidth * index) * -1;
            if (_.options.rtl === true) {
                $(element).css({
                    position: 'relative',
                    right: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            } else {
                $(element).css({
                    position: 'relative',
                    left: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            }
        });

        _.$slides.eq(_.currentSlide).css({
            zIndex: _.options.zIndex - 1,
            opacity: 1
        });

    };

    Slick.prototype.setHeight = function() {

        var _ = this;

        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.css('height', targetHeight);// fasy
        }

    };

    Slick.prototype.setOption = Slick.prototype.slickSetOption = function(option, value, refresh) {

        var _ = this, l, item;

        if( option === "responsive" && $.type(value) === "array" ) {
            for ( item in value ) {
                if( $.type( _.options.responsive ) !== "array" ) {
                    _.options.responsive = [ value[item] ];
                } else {
                    l = _.options.responsive.length-1;
                    // loop through the responsive object and splice out duplicates.
                    while( l >= 0 ) {
                        if( _.options.responsive[l].breakpoint === value[item].breakpoint ) {
                            _.options.responsive.splice(l,1);
                        }
                        l--;
                    }
                    _.options.responsive.push( value[item] );
                }
            }
        } else {
            _.options[option] = value;
        }

        if (refresh === true) {
            _.unload();
            _.reinit();
        }

    };

    Slick.prototype.setPosition = function() {

        var _ = this;

        _.setDimensions();
		setTimeout(function(){
		  _.setHeight();
		}, 350);
        

        if (_.options.fade === false) {
            _.setCSS(_.getLeft(_.currentSlide));
        } else {
            _.setFade();
        }

        _.$slider.trigger('setPosition', [_]);

    };

    Slick.prototype.setProps = function() {

        var _ = this,
            bodyStyle = document.body.style;

        _.positionProp = _.options.vertical === true ? 'top' : 'left';

        if (_.positionProp === 'top') {
            _.$slider.addClass('slick-vertical');
        } else {
            _.$slider.removeClass('slick-vertical');
        }

        if (bodyStyle.WebkitTransition !== undefined ||
            bodyStyle.MozTransition !== undefined ||
            bodyStyle.msTransition !== undefined) {
            if (_.options.useCSS === true) {
                _.cssTransitions = true;
            }
        }

        if ( _.options.fade ) {
            if ( typeof _.options.zIndex === 'number' ) {
                if( _.options.zIndex < 3 ) {
                    _.options.zIndex = 3;
                }
            } else {
                _.options.zIndex = _.defaults.zIndex;
            }
        }

        if (bodyStyle.OTransform !== undefined) {
            _.animType = 'OTransform';
            _.transformType = '-o-transform';
            _.transitionType = 'OTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.MozTransform !== undefined) {
            _.animType = 'MozTransform';
            _.transformType = '-moz-transform';
            _.transitionType = 'MozTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.webkitTransform !== undefined) {
            _.animType = 'webkitTransform';
            _.transformType = '-webkit-transform';
            _.transitionType = 'webkitTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.msTransform !== undefined) {
            _.animType = 'msTransform';
            _.transformType = '-ms-transform';
            _.transitionType = 'msTransition';
            if (bodyStyle.msTransform === undefined) _.animType = false;
        }
        if (bodyStyle.transform !== undefined && _.animType !== false) {
            _.animType = 'transform';
            _.transformType = 'transform';
            _.transitionType = 'transition';
        }
        _.transformsEnabled = (_.animType !== null && _.animType !== false);

    };


    Slick.prototype.setSlideClasses = function(index) {

        var _ = this,
            centerOffset, allSlides, indexOffset, remainder;
		
        allSlides = _.$slider
            .find('.slick-slide')
            .removeClass('slick-active slick-center slick-current')
			//.removeClass(x)
            .attr('aria-hidden', 'true');
		
        _.$slides
            .eq(index)
            .addClass('slick-current');
			// _.$slider.find('.slick-slide').find('.slide-caption').fadeOut(); 
			//commented this code to fix issue on this card https://trello.com/c/t6WJKdtG/4450-site-not-loading-on-mobile
			_.$slider.find('.slick-slide').find('.anim').each(function(index, element) {
                var x =$(this).attr('data-animate');
				$(this).removeClass(x);
            });
			
			_.$slider.find('.slick-current').find('.anim').each(function(index, element) {
                var x =$(this).attr('data-animate');
				var y = $(this);
				setTimeout(function(){
					$(y).parents('.slick-current').find('.slide-caption').removeClass('animHidden').show();
				  	$(y).addClass(x);
					isObjOnObj(_.$slider.parents('.dynSlider_'),$(y).parents('.slick-active'));
					var checkBtn = $(y).find('span.ca').find('.btn').length
					if(checkBtn != 0){
						_.$slider.addClass('slide_width_btn');
					}else{
						//_.$slider.removeClass('slide_width_btn');
					}
					setTimeout(function(){
						try{
							_.$slider.find('.slick-current').find('.tpOrbt').each(function(index, element) {
								//console.log('fun to set slide img height')
								var _innerH = $(this).height();
								//console.log('_innerH > '+_innerH)
								$(this).find('img').css('height', _innerH+'px');
							});
						}catch(err) {}
					}, 100);
				}, 300);

				
            });
			/*setTimeout(function(){
				var agentImgAnim = _.$slider.parents('.dynSlider_').find('.sliderAgentImg').attr('data-animate');
				_.$slider.parents('.dynSlider_').find('.sliderAgentImg').parent().removeClass('animHidden').show();
				_.$slider.parents('.dynSlider_').find('.sliderAgentImg').addClass(agentImgAnim);
			}, 400);*/
			
			/*setTimeout(function(){
				var imgWidthSlider = _.$slider.parents('.dynSlider_').find('.sliderAgentImg').find('img').width();
				_.$slider.parents('.dynSlider_').find('.sliderAgentImg').css('width', imgWidthSlider+'px');
			}, 600);*/
			
			//anim 
        if (_.options.centerMode === true) {

            centerOffset = Math.floor(_.options.slidesToShow / 2);

            if (_.options.infinite === true) {

                if (index >= centerOffset && index <= (_.slideCount - 1) - centerOffset) {

                    _.$slides
                        .slice(index - centerOffset, index + centerOffset + 1)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    indexOffset = _.options.slidesToShow + index;
                    allSlides
                        .slice(indexOffset - centerOffset + 1, indexOffset + centerOffset + 2)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

                if (index === 0) {

                    allSlides
                        .eq(allSlides.length - 1 - _.options.slidesToShow)
                        .addClass('slick-center');

                } else if (index === _.slideCount - 1) {

                    allSlides
                        .eq(_.options.slidesToShow)
                        .addClass('slick-center');

                }

            }

            _.$slides
                .eq(index)
                .addClass('slick-center');

        } else {

            if (index >= 0 && index <= (_.slideCount - _.options.slidesToShow)) {

                _.$slides
                    .slice(index, index + _.options.slidesToShow)
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else if (allSlides.length <= _.options.slidesToShow) {

                allSlides
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else {

                remainder = _.slideCount % _.options.slidesToShow;
                indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;

                if (_.options.slidesToShow == _.options.slidesToScroll && (_.slideCount - index) < _.options.slidesToShow) {

                    allSlides
                        .slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    allSlides
                        .slice(indexOffset, indexOffset + _.options.slidesToShow)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

            }

        }

        if (_.options.lazyLoad === 'ondemand') {
            _.lazyLoad();
        }

    };

    Slick.prototype.setupInfinite = function() {

        var _ = this,
            i, slideIndex, infiniteCount;

        if (_.options.fade === true) {
            _.options.centerMode = false;
        }

        if (_.options.infinite === true && _.options.fade === false) {

            slideIndex = null;

            if (_.slideCount > _.options.slidesToShow) {

                if (_.options.centerMode === true) {
                    infiniteCount = _.options.slidesToShow + 1;
                } else {
                    infiniteCount = _.options.slidesToShow;
                }

                for (i = _.slideCount; i > (_.slideCount -
                        infiniteCount); i -= 1) {
                    slideIndex = i - 1;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex - _.slideCount)
                        .prependTo(_.$slideTrack).addClass('slick-cloned');
                }
                for (i = 0; i < infiniteCount; i += 1) {
                    slideIndex = i;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex + _.slideCount)
                        .appendTo(_.$slideTrack).addClass('slick-cloned');
                }
                _.$slideTrack.find('.slick-cloned').find('[id]').each(function() {
                    $(this).attr('id', '');
                });

            }

        }

    };

    Slick.prototype.setPaused = function(paused) {

        var _ = this;

        if (_.options.autoplay === true && _.options.pauseOnHover === true) {
            _.paused = paused;
            if (!paused) {
                _.autoPlay();
            } else {
                _.autoPlayClear();
            }
        }
    };

    Slick.prototype.selectHandler = function(event) {

        var _ = this;

        var targetElement =
            $(event.target).is('.slick-slide') ?
                $(event.target) :
                $(event.target).parents('.slick-slide');

        var index = parseInt(targetElement.attr('data-slick-index'));

        if (!index) index = 0;

        if (_.slideCount <= _.options.slidesToShow) {

            _.setSlideClasses(index);
            _.asNavFor(index);
            return;

        }

        _.slideHandler(index);

    };

    Slick.prototype.slideHandler = function(index, sync, dontAnimate) {

        var targetSlide, animSlide, oldSlide, slideLeft, targetLeft = null,
            _ = this;

        sync = sync || false;

        if (_.animating === true && _.options.waitForAnimate === true) {
            return;
        }

        if (_.options.fade === true && _.currentSlide === index) {
            return;
        }

        if (_.slideCount <= _.options.slidesToShow) {
            return;
        }

        if (sync === false) {
            _.asNavFor(index);
        }

        targetSlide = index;
        targetLeft = _.getLeft(targetSlide);
        slideLeft = _.getLeft(_.currentSlide);

        _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;

        if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > (_.slideCount - _.options.slidesToScroll))) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        }

        if (_.options.autoplay === true) {
            clearInterval(_.autoPlayTimer);
        }

        if (targetSlide < 0) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = _.slideCount - (_.slideCount % _.options.slidesToScroll);
            } else {
                animSlide = _.slideCount + targetSlide;
            }
        } else if (targetSlide >= _.slideCount) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = 0;
            } else {
                animSlide = targetSlide - _.slideCount;
            }
        } else {
            animSlide = targetSlide;
        }

        _.animating = true;

        _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);

        oldSlide = _.currentSlide;
        _.currentSlide = animSlide;

        _.setSlideClasses(_.currentSlide);

        _.updateDots();
        _.updateArrows();

        if (_.options.fade === true) {
            if (dontAnimate !== true) {

                _.fadeSlideOut(oldSlide);

                _.fadeSlide(animSlide, function() {
                    _.postSlide(animSlide);
                });

            } else {
                _.postSlide(animSlide);
            }
            _.animateHeight();
            return;
        }

        if (dontAnimate !== true) {
            _.animateSlide(targetLeft, function() {
                _.postSlide(animSlide);
            });
        } else {
            _.postSlide(animSlide);
        }

    };

    Slick.prototype.startLoad = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.hide();
            _.$nextArrow.hide();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.hide();

        }

        _.$slider.addClass('slick-loading');

    };

    Slick.prototype.swipeDirection = function() {

        var xDist, yDist, r, swipeAngle, _ = this;

        xDist = _.touchObject.startX - _.touchObject.curX;
        yDist = _.touchObject.startY - _.touchObject.curY;
        r = Math.atan2(yDist, xDist);

        swipeAngle = Math.round(r * 180 / Math.PI);
        if (swipeAngle < 0) {
            swipeAngle = 360 - Math.abs(swipeAngle);
        }

        if ((swipeAngle <= 45) && (swipeAngle >= 0)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle <= 360) && (swipeAngle >= 315)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle >= 135) && (swipeAngle <= 225)) {
            return (_.options.rtl === false ? 'right' : 'left');
        }
        if (_.options.verticalSwiping === true) {
            if ((swipeAngle >= 35) && (swipeAngle <= 135)) {
                return 'left';
            } else {
                return 'right';
            }
        }

        return 'vertical';

    };

    Slick.prototype.swipeEnd = function(event) {

        var _ = this,
            slideCount;

        _.dragging = false;

        _.shouldClick = (_.touchObject.swipeLength > 10) ? false : true;

        if (_.touchObject.curX === undefined) {
            return false;
        }

        if (_.touchObject.edgeHit === true) {
            _.$slider.trigger('edge', [_, _.swipeDirection()]);
        }

        if (_.touchObject.swipeLength >= _.touchObject.minSwipe) {

            switch (_.swipeDirection()) {
                case 'left':
                    slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide + _.getSlideCount()) : _.currentSlide + _.getSlideCount();
                    _.slideHandler(slideCount);
                    _.currentDirection = 0;
                    _.touchObject = {};
                    _.$slider.trigger('swipe', [_, 'left']);
                    break;

                case 'right':
                    slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide - _.getSlideCount()) : _.currentSlide - _.getSlideCount();
                    _.slideHandler(slideCount);
                    _.currentDirection = 1;
                    _.touchObject = {};
                    _.$slider.trigger('swipe', [_, 'right']);
                    break;
            }
        } else {
            if (_.touchObject.startX !== _.touchObject.curX) {
                _.slideHandler(_.currentSlide);
                _.touchObject = {};
            }
        }

    };

    Slick.prototype.swipeHandler = function(event) {

        var _ = this;

        if ((_.options.swipe === false) || ('ontouchend' in document && _.options.swipe === false)) {
            return;
        } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
            return;
        }

        _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ?
            event.originalEvent.touches.length : 1;

        _.touchObject.minSwipe = _.listWidth / _.options
            .touchThreshold;

        if (_.options.verticalSwiping === true) {
            _.touchObject.minSwipe = _.listHeight / _.options
                .touchThreshold;
        }

        switch (event.data.action) {

            case 'start':
                _.swipeStart(event);
                break;

            case 'move':
                _.swipeMove(event);
                break;

            case 'end':
                _.swipeEnd(event);
                break;

        }

    };

    Slick.prototype.swipeMove = function(event) {

        var _ = this,
            edgeWasHit = false,
            curLeft, swipeDirection, swipeLength, positionOffset, touches;

        touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;

        if (!_.dragging || touches && touches.length !== 1) {
            return false;
        }

        curLeft = _.getLeft(_.currentSlide);

        _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
        _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;

        _.touchObject.swipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));

        if (_.options.verticalSwiping === true) {
            _.touchObject.swipeLength = Math.round(Math.sqrt(
                Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));
        }

        swipeDirection = _.swipeDirection();

        if (swipeDirection === 'vertical') {
            return;
        }

        if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
            event.preventDefault();
        }

        positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
        if (_.options.verticalSwiping === true) {
            positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
        }


        swipeLength = _.touchObject.swipeLength;

        _.touchObject.edgeHit = false;

        if (_.options.infinite === false) {
            if ((_.currentSlide === 0 && swipeDirection === 'right') || (_.currentSlide >= _.getDotCount() && swipeDirection === 'left')) {
                swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
                _.touchObject.edgeHit = true;
            }
        }

        if (_.options.vertical === false) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        } else {
            _.swipeLeft = curLeft + (swipeLength * (_.$list.height() / _.listWidth)) * positionOffset;
        }
        if (_.options.verticalSwiping === true) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        }

        if (_.options.fade === true || _.options.touchMove === false) {
            return false;
        }

        if (_.animating === true) {
            _.swipeLeft = null;
            return false;
        }

        _.setCSS(_.swipeLeft);

    };

    Slick.prototype.swipeStart = function(event) {

        var _ = this,
            touches;

        if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
            _.touchObject = {};
            return false;
        }

        if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
            touches = event.originalEvent.touches[0];
        }

        _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
        _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;

        _.dragging = true;

    };

    Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function() {

        var _ = this;

        if (_.$slidesCache !== null) {

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.unload = function() {

        var _ = this;

        $('.slick-cloned', _.$slider).remove();

        if (_.$dots) {
            _.$dots.remove();
        }

        if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
            _.$prevArrow.remove();
        }

        if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
            _.$nextArrow.remove();
        }

        _.$slides
            .removeClass('slick-slide slick-active slick-visible slick-current')
            .attr('aria-hidden', 'true')
            .css('width', '');

    };

    Slick.prototype.unslick = function(fromBreakpoint) {

        var _ = this;
        _.$slider.trigger('unslick', [_, fromBreakpoint]);
        _.destroy();

    };

    Slick.prototype.updateArrows = function() {

        var _ = this,
            centerOffset;

        centerOffset = Math.floor(_.options.slidesToShow / 2);

        if ( _.options.arrows === true &&
            _.slideCount > _.options.slidesToShow &&
            !_.options.infinite ) {

            _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            if (_.currentSlide === 0) {

                _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            }

        }

    };

    Slick.prototype.updateDots = function() {

        var _ = this;

        if (_.$dots !== null) {

            _.$dots
                .find('li')
                .removeClass('slick-active')
                .attr('aria-hidden', 'true');

            _.$dots
                .find('li')
                .eq(Math.floor(_.currentSlide / _.options.slidesToScroll))
                .addClass('slick-active')
                .attr('aria-hidden', 'false');

        }

    };

    Slick.prototype.visibility = function() {

        var _ = this;

        if (document[_.hidden]) {
            _.paused = true;
            _.autoPlayClear();
        } else {
            if (_.options.autoplay === true) {
                _.paused = false;
                _.autoPlay();
            }
        }

    };
    Slick.prototype.initADA = function() {
        var _ = this;
        _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
            'aria-hidden': 'true',
            'tabindex': '-1'
        }).find('a, input, button, select').attr({
            'tabindex': '-1'
        });

        _.$slideTrack.attr('role', 'listbox');

        _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function(i) {
            $(this).attr({
                'role': 'option',
                'aria-describedby': 'slick-slide' + _.instanceUid + i + ''
            });
        });

        if (_.$dots !== null) {
            _.$dots.attr('role', 'tablist').find('li').each(function(i) {
                $(this).attr({
                    'role': 'presentation',
                    'aria-selected': 'false',
                    'aria-controls': 'navigation' + _.instanceUid + i + '',
                    'id': 'slick-slide' + _.instanceUid + i + ''
                });
            })
                .first().attr('aria-selected', 'true').end()
                .find('button').attr('role', 'button').end()
                .closest('div').attr('role', 'toolbar');
        }
        _.activateADA();

    };

    Slick.prototype.activateADA = function() {
        var _ = this,
        _isSlideOnFocus =_.$slider.find('*').is(':focus');
        // _isSlideOnFocus = _.$slides.is(':focus') || _.$slides.find('*').is(':focus');

        _.$slideTrack.find('.slick-active').attr({
            'aria-hidden': 'false',
            'tabindex': '0'
        }).find('a, input, button, select').attr({
            'tabindex': '0'
        });

        (_isSlideOnFocus) &&  _.$slideTrack.find('.slick-active').focus();

    };

    Slick.prototype.focusHandler = function() {
        var _ = this;
        _.$slider.on('focus.slick blur.slick', '*', function(event) {
            event.stopImmediatePropagation();
            var sf = $(this);
            setTimeout(function() {
                if (_.isPlay) {
                    if (sf.is(':focus')) {
                        _.autoPlayClear();
                        _.paused = true;
                    } else {
                        _.paused = false;
                        _.autoPlay();
                    }
                }
            }, 0);
        });
    };

    $.fn.slick = function() {
        var _ = this,
            opt = arguments[0],
            args = Array.prototype.slice.call(arguments, 1),
            l = _.length,
            i = 0,
            ret;
        for (i; i < l; i++) {
            if (typeof opt == 'object' || typeof opt == 'undefined')
                _[i].slick = new Slick(_[i], opt);
            else
                ret = _[i].slick[opt].apply(_[i].slick, args);
            if (typeof ret != 'undefined') return ret;
        }
        return _;
    };

}));


function isObjOnObj(slider,current){
	
	/*if($(window).width() > 770 && $(slider).find(current).find('.parentSpan').html() != ''){
		banner = $(slider).find('.banner-slider').width()
		a = $(slider).find('.sliderAgentImg');
		b = $(slider).find(current).find('.parentSpan');
		al = a.offset().left;
		bl = b.offset().left;
		aw = a.width();
		bw = b.width();
		var ar = (banner - (al + aw));
		var br = (banner - (bl + bw));
		if(al == 0 || al < 1) {
			if(aw > bl){
				leftCss = aw-bl;
				$(a).animate({ 'left': '-'+leftCss+'px' }, "medium" );
			}else{
				$(a).animate({ 'left': '0px' }, "medium" );
			}
		}
		if(ar == 0 || ar < 1) {
			if(aw > br){
				leftCss = aw-br;
				$(a).animate({ 'right': '-'+leftCss+'px' }, "medium" );
			}else{
				$(a).animate({ 'right': '0px' }, "medium" );
			}
		}
	}else{
		$(slider).find('.sliderAgentImg').removeAttr('style');
	}*/
}


// fancy box starts
/*!
* fancyBox - jQuery Plugin
* version: 2.1.3 (Tue, 23 Oct 2012)
* @requires jQuery v1.6 or later
*
* Examples at http://fancyapps.com/fancybox/
* License: www.fancyapps.com/fancybox/#license
*
* Copyright 2012 Janis Skarnelis - janis@fancyapps.com
*
*/
!function(e,t,i,n){"use strict";var o=i(e),a=i(t),r=i.fancybox=function(){r.open.apply(this,arguments)},s=null,l=t.createTouch!==n,c=function(e){return e&&e.hasOwnProperty&&e instanceof i},d=function(e){return e&&"string"===i.type(e)},p=function(e){return d(e)&&e.indexOf("%")>0},h=function(e){return e&&!(e.style.overflow&&"hidden"===e.style.overflow)&&(e.clientWidth&&e.scrollWidth>e.clientWidth||e.clientHeight&&e.scrollHeight>e.clientHeight)},f=function(e,t){var i=parseInt(e,10)||0;return t&&p(e)&&(i=r.getViewport()[t]/100*i),Math.ceil(i)},u=function(e,t){return f(e,t)+"px"};i.extend(r,{version:"2.1.3",defaults:{padding:25,margin:0,width:800,height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,autoSize:!0,autoHeight:!1,autoWidth:!1,autoResize:!0,autoCenter:!l,fitToView:!0,aspectRatio:!1,topRatio:.5,leftRatio:.5,scrolling:"auto",wrapCSS:"",arrows:!0,closeBtn:!0,closeClick:!1,nextClick:!1,mouseWheel:!0,autoPlay:!1,playSpeed:3e3,preload:3,modal:!1,loop:!0,ajax:{dataType:"html",headers:{"X-fancyBox":!0}},iframe:{scrolling:"auto",preload:!0},swf:{wmode:"transparent",allowfullscreen:"true",allowscriptaccess:"always"},keys:{next:{13:"left",34:"up",39:"left",40:"up"},prev:{8:"right",33:"down",37:"right",38:"down"},close:[27],play:[32],toggle:[70]},direction:{next:"left",prev:"right"},scrollOutside:!0,index:0,type:null,href:null,content:null,title:null,tpl:{wrap:'<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen'+(i.browser.msie?' allowtransparency="true"':"")+"></iframe>",error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"><span class="a">X</span><span class="b"><i class="ico-cross2 ico-small"></i>Close</span></a>',next:'<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',prev:'<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'},openEffect:"fade",openSpeed:250,openEasing:"swing",openOpacity:!0,openMethod:"zoomIn",closeEffect:"fade",closeSpeed:250,closeEasing:"swing",closeOpacity:!0,closeMethod:"zoomOut",nextEffect:"elastic",nextSpeed:250,nextEasing:"swing",nextMethod:"changeIn",prevEffect:"elastic",prevSpeed:250,prevEasing:"swing",prevMethod:"changeOut",helpers:{overlay:!0,title:!0},onCancel:i.noop,beforeLoad:i.noop,afterLoad:i.noop,beforeShow:i.noop,afterShow:i.noop,beforeChange:i.noop,beforeClose:i.noop,afterClose:i.noop},group:{},opts:{},previous:null,coming:null,current:null,isActive:!1,isOpen:!1,isOpened:!1,wrap:null,skin:null,outer:null,inner:null,player:{timer:null,isActive:!1},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(e,t){return e&&(i.isPlainObject(t)||(t={}),!1!==r.close(!0))?(i.isArray(e)||(e=c(e)?i(e).get():[e]),i.each(e,function(o,a){var s,l,p,h,f,u,g,m={};"object"===i.type(a)&&(a.nodeType&&(a=i(a)),c(a)?(m={href:a.data("fancybox-href")||a.attr("href"),title:a.data("fancybox-title")||a.attr("title"),isDom:!0,element:a},i.metadata&&i.extend(!0,m,a.metadata())):m=a),s=t.href||m.href||(d(a)?a:null),l=t.title!==n?t.title:m.title||"",p=t.content||m.content,h=p?"html":t.type||m.type,!h&&m.isDom&&(h=a.data("fancybox-type"),h||(f=a.prop("class").match(/fancybox\.(\w+)/),h=f?f[1]:null)),d(s)&&(h||(r.isImage(s)?h="image":r.isSWF(s)?h="swf":"#"===s.charAt(0)?h="inline":d(a)&&(h="html",p=a)),"ajax"===h&&(u=s.split(/\s+/,2),s=u.shift(),g=u.shift())),p||("inline"===h?s?p=i(d(s)?s.replace(/.*(?=#[^\s]+$)/,""):s):m.isDom&&(p=a):"html"===h?p=s:h||s||!m.isDom||(h="inline",p=a)),i.extend(m,{href:s,type:h,content:p,title:l,selector:g}),e[o]=m}),r.opts=i.extend(!0,{},r.defaults,t),t.keys!==n&&(r.opts.keys=t.keys?i.extend({},r.defaults.keys,t.keys):!1),r.group=e,r._start(r.opts.index)):void 0},cancel:function(){var e=r.coming;e&&!1!==r.trigger("onCancel")&&(r.hideLoading(),r.ajaxLoad&&r.ajaxLoad.abort(),r.ajaxLoad=null,r.imgPreload&&(r.imgPreload.onload=r.imgPreload.onerror=null),e.wrap&&e.wrap.stop(!0,!0).trigger("onReset").remove(),r.coming=null,r.current||r._afterZoomOut(e))},close:function(e){r.cancel(),!1!==r.trigger("beforeClose")&&(r.unbindEvents(),r.isActive&&(r.isOpen&&e!==!0?(r.isOpen=r.isOpened=!1,r.isClosing=!0,i(".fancybox-item, .fancybox-nav").remove(),r.wrap.stop(!0,!0).removeClass("fancybox-opened"),r.transitions[r.current.closeMethod]()):(i(".fancybox-wrap").stop(!0).trigger("onReset").remove(),r._afterZoomOut())))},play:function(e){var t=function(){clearTimeout(r.player.timer)},n=function(){t(),r.current&&r.player.isActive&&(r.player.timer=setTimeout(r.next,r.current.playSpeed))},o=function(){t(),i("body").unbind(".player"),r.player.isActive=!1,r.trigger("onPlayEnd")},a=function(){r.current&&(r.current.loop||r.current.index<r.group.length-1)&&(r.player.isActive=!0,i("body").bind({"afterShow.player onUpdate.player":n,"onCancel.player beforeClose.player":o,"beforeLoad.player":t}),n(),r.trigger("onPlayStart"))};e===!0||!r.player.isActive&&e!==!1?a():o()},next:function(e){var t=r.current;t&&(d(e)||(e=t.direction.next),r.jumpto(t.index+1,e,"next"))},prev:function(e){var t=r.current;t&&(d(e)||(e=t.direction.prev),r.jumpto(t.index-1,e,"prev"))},jumpto:function(e,t,i){var o=r.current;o&&(e=f(e),r.direction=t||o.direction[e>=o.index?"next":"prev"],r.router=i||"jumpto",o.loop&&(0>e&&(e=o.group.length+e%o.group.length),e%=o.group.length),o.group[e]!==n&&(r.cancel(),r._start(e)))},reposition:function(e,t){var n,o=r.current,a=o?o.wrap:null;a&&(n=r._getPosition(t),e&&"scroll"===e.type?(delete n.position,a.stop(!0,!0).animate(n,200)):(a.css(n),o.pos=i.extend({},o.dim,n)))},update:function(e){var t=e&&e.type,i=!t||"orientationchange"===t;i&&(clearTimeout(s),s=null),r.isOpen&&!s&&(s=setTimeout(function(){var n=r.current;n&&!r.isClosing&&(r.wrap.removeClass("fancybox-tmp"),(i||"load"===t||"resize"===t&&n.autoResize)&&r._setDimension(),"scroll"===t&&n.canShrink||r.reposition(e),r.trigger("onUpdate"),s=null)},i&&!l?0:300))},toggle:function(e){r.isOpen&&(r.current.fitToView="boolean"===i.type(e)?e:!r.current.fitToView,l&&(r.wrap.removeAttr("style").addClass("fancybox-tmp"),r.trigger("onUpdate")),r.update())},hideLoading:function(){a.unbind(".loading"),i("#fancybox-loading").remove()},showLoading:function(){var e,t;r.hideLoading(),e=i('<div class="loader">Loading...</div>').click(r.cancel).appendTo("body"),a.bind("keydown.loading",function(e){27===(e.which||e.keyCode)&&(e.preventDefault(),r.cancel())}),r.defaults.fixed||(t=r.getViewport(),e.css({position:"absolute",top:.5*t.h+t.y,left:.5*t.w+t.x}))},getViewport:function(){var t=r.current&&r.current.locked||!1,i={x:o.scrollLeft(),y:o.scrollTop()};return t?(i.w=t[0].clientWidth,i.h=t[0].clientHeight):(i.w=l&&e.innerWidth?e.innerWidth:o.width(),i.h=l&&e.innerHeight?e.innerHeight:o.height()),i},unbindEvents:function(){r.wrap&&c(r.wrap)&&r.wrap.unbind(".fb"),a.unbind(".fb"),o.unbind(".fb")},bindEvents:function(){var e,t=r.current;t&&(o.bind("orientationchange.fb"+(l?"":" resize.fb")+(t.autoCenter&&!t.locked?" scroll.fb":""),r.update),e=t.keys,e&&a.bind("keydown.fb",function(o){var a=o.which||o.keyCode,s=o.target||o.srcElement;return 27===a&&r.coming?!1:void(o.ctrlKey||o.altKey||o.shiftKey||o.metaKey||s&&(s.type||i(s).is("[contenteditable]"))||i.each(e,function(e,s){return t.group.length>1&&s[a]!==n?(r[e](s[a]),o.preventDefault(),!1):i.inArray(a,s)>-1?(r[e](),o.preventDefault(),!1):void 0}))}),i.fn.mousewheel&&t.mouseWheel&&r.wrap.bind("mousewheel.fb",function(e,n,o,a){for(var s=e.target||null,l=i(s),c=!1;l.length&&!(c||l.is(".fancybox-skin")||l.is(".fancybox-wrap"));)c=h(l[0]),l=i(l).parent();0===n||c||r.group.length>1&&!t.canShrink&&(a>0||o>0?r.prev(a>0?"down":"left"):(0>a||0>o)&&r.next(0>a?"up":"right"),e.preventDefault())}))},trigger:function(e,t){var n,o=t||r.coming||r.current;if(o){if(i.isFunction(o[e])&&(n=o[e].apply(o,Array.prototype.slice.call(arguments,1))),n===!1)return!1;o.helpers&&i.each(o.helpers,function(t,n){n&&r.helpers[t]&&i.isFunction(r.helpers[t][e])&&(n=i.extend(!0,{},r.helpers[t].defaults,n),r.helpers[t][e](n,o))}),i.event.trigger(e+".fb")}},isImage:function(e){return d(e)&&e.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp)((\?|#).*)?$)/i)},isSWF:function(e){return d(e)&&e.match(/\.(swf)((\?|#).*)?$/i)},_start:function(e){var t,n,o,a,s,c={};if(e=f(e),t=r.group[e]||null,!t)return!1;if(c=i.extend(!0,{},r.opts,t),a=c.margin,s=c.padding,"number"===i.type(a)&&(c.margin=[a,a,a,a]),"number"===i.type(s)&&(c.padding=[s,s,s,s]),c.modal&&i.extend(!0,c,{closeBtn:!1,closeClick:!1,nextClick:!1,arrows:!1,mouseWheel:!1,keys:null,helpers:{overlay:{closeClick:!1}}}),c.autoSize&&(c.autoWidth=c.autoHeight=!0),"auto"===c.width&&(c.autoWidth=!0),"auto"===c.height&&(c.autoHeight=!0),c.group=r.group,c.index=e,r.coming=c,!1===r.trigger("beforeLoad"))return void(r.coming=null);if(o=c.type,n=c.href,!o)return r.coming=null,r.current&&r.router&&"jumpto"!==r.router?(r.current.index=e,r[r.router](r.direction)):!1;if(r.isActive=!0,("image"===o||"swf"===o)&&(c.autoHeight=c.autoWidth=!1,c.scrolling="visible"),"image"===o&&(c.aspectRatio=!0),"iframe"===o&&l&&(c.scrolling="scroll"),c.wrap=i(c.tpl.wrap).addClass("fancybox-"+(l?"mobile":"desktop")+" fancybox-type-"+o+" fancybox-tmp "+c.wrapCSS).appendTo(c.parent||"body"),i.extend(c,{skin:i(".fancybox-skin",c.wrap),outer:i(".fancybox-outer",c.wrap),inner:i(".fancybox-inner",c.wrap)}),i.each(["Top","Right","Bottom","Left"],function(e,t){c.skin.css("padding"+t,u(c.padding[e]))}),r.trigger("onReady"),"inline"===o||"html"===o){if(!c.content||!c.content.length)return r._error("content")}else if(!n)return r._error("href");"image"===o?r._loadImage():"ajax"===o?r._loadAjax():"iframe"===o?r._loadIframe():r._afterLoad()},_error:function(e){i.extend(r.coming,{type:"html",autoWidth:!0,autoHeight:!0,minWidth:0,minHeight:0,scrolling:"no",hasError:e,content:r.coming.tpl.error}),r._afterLoad()},_loadImage:function(){var e=r.imgPreload=new Image;e.onload=function(){this.onload=this.onerror=null,r.coming.width=this.width,r.coming.height=this.height,r._afterLoad()},e.onerror=function(){this.onload=this.onerror=null,r._error("image")},e.src=r.coming.href,e.complete!==!0&&r.showLoading()},_loadAjax:function(){var e=r.coming;r.showLoading(),r.ajaxLoad=i.ajax(i.extend({},e.ajax,{url:e.href,error:function(e,t){r.coming&&"abort"!==t?r._error("ajax",e):r.hideLoading()},success:function(t,i){"success"===i&&(e.content=t,r._afterLoad())}}))},_loadIframe:function(){var e=r.coming,t=i(e.tpl.iframe.replace(/\{rnd\}/g,(new Date).getTime())).attr("scrolling",l?"auto":e.iframe.scrolling).attr("src",e.href);i(e.wrap).bind("onReset",function(){try{i(this).find("iframe").hide().attr("src","//about:blank").end().empty()}catch(e){}}),e.iframe.preload&&(r.showLoading(),t.one("load",function(){i(this).data("ready",1),l||i(this).bind("load.fb",r.update),i(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show(),r._afterLoad()})),e.content=t.appendTo(e.inner),e.iframe.preload||r._afterLoad()},_preloadImages:function(){var e,t,i=r.group,n=r.current,o=i.length,a=n.preload?Math.min(n.preload,o-1):0;for(t=1;a>=t;t+=1)e=i[(n.index+t)%o],"image"===e.type&&e.href&&((new Image).src=e.href)},_afterLoad:function(){var e,t,n,o,a,s,l=r.coming,d=r.current,p="fancybox-placeholder";if(r.hideLoading(),l&&r.isActive!==!1){if(!1===r.trigger("afterLoad",l,d))return l.wrap.stop(!0).trigger("onReset").remove(),void(r.coming=null);switch(d&&(r.trigger("beforeChange",d),d.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove()),r.unbindEvents(),e=l,t=l.content,n=l.type,o=l.scrolling,i.extend(r,{wrap:e.wrap,skin:e.skin,outer:e.outer,inner:e.inner,current:e,previous:d}),a=e.href,n){case"inline":case"ajax":case"html":e.selector?t=i("<div>").html(t).find(e.selector):c(t)&&(t.data(p)||t.data(p,i('<div class="'+p+'"></div>').insertAfter(t).hide()),t=t.show().detach(),e.wrap.bind("onReset",function(){i(this).find(t).length&&t.hide().replaceAll(t.data(p)).data(p,!1)}));break;case"image":t=e.tpl.image.replace("{href}",a);break;case"swf":t='<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="'+a+'"></param>',s="",i.each(e.swf,function(e,i){t+='<param name="'+e+'" value="'+i+'"></param>',s+=" "+e+'="'+i+'"'}),t+='<embed src="'+a+'" type="application/x-shockwave-flash" width="100%" height="100%"'+s+"></embed></object>"}c(t)&&t.parent().is(e.inner)||e.inner.append(t),r.trigger("beforeShow"),e.inner.css("overflow","yes"===o?"scroll":"no"===o?"hidden":o),r._setDimension(),r.reposition(),r.isOpen=!1,r.coming=null,r.bindEvents(),r.isOpened?d.prevMethod&&r.transitions[d.prevMethod]():i(".fancybox-wrap").not(e.wrap).stop(!0).trigger("onReset").remove(),r.transitions[r.isOpened?e.nextMethod:e.openMethod](),r._preloadImages()}},_setDimension:function(){var e,t,n,o,a,s,l,c,d,h,g,m,y,v,w,x=r.getViewport(),b=0,k=!1,C=!1,W=r.wrap,O=r.skin,S=r.inner,_=r.current,T=_.width,E=_.height,j=_.minWidth,L=_.minHeight,P=_.maxWidth,M=_.maxHeight,H=_.scrolling,R=_.scrollOutside?_.scrollbarWidth:0,A=_.margin,I=f(A[1]+A[3]),D=f(A[0]+A[2]);if(W.add(O).add(S).width("auto").height("auto").removeClass("fancybox-tmp"),e=f(O.outerWidth(!0)-O.width()),t=f(O.outerHeight(!0)-O.height()),n=I+e,o=D+t,a=p(T)?(x.w-n)*f(T)/100:T,s=p(E)?(x.h-o)*f(E)/100:E,"iframe"===_.type){if(v=_.content,_.autoHeight&&1===v.data("ready"))try{v[0].contentWindow.document.location&&(S.width(a).height(9999),w=v.contents().find("body"),R&&w.css("overflow-x","hidden"),s=w.height())}catch(z){}}else(_.autoWidth||_.autoHeight)&&(S.addClass("fancybox-tmp"),_.autoWidth||S.width(a),_.autoHeight||S.height(s),_.autoWidth&&(a=S.width()),_.autoHeight&&(s=S.height()),S.removeClass("fancybox-tmp"));if(T=f(a),E=f(s),d=a/s,j=f(p(j)?f(j,"w")-n:j),P=f(p(P)?f(P,"w")-n:P),L=f(p(L)?f(L,"h")-o:L),M=f(p(M)?f(M,"h")-o:M),l=P,c=M,_.fitToView&&(P=Math.min(x.w-n,P),M=Math.min(x.h-o,M)),m=x.w-I,y=x.h-D,_.aspectRatio?(T>P&&(T=P,E=f(T/d)),E>M&&(E=M,T=f(E*d)),j>T&&(T=j,E=f(T/d)),L>E&&(E=L,T=f(E*d))):(T=Math.max(j,Math.min(T,P)),_.autoHeight&&"iframe"!==_.type&&(S.width(T),E=S.height()),E=Math.max(L,Math.min(E,M))),_.fitToView)if(S.width(T).height(E),W.width(T+e),h=W.width(),g=W.height(),_.aspectRatio)for(;(h>m||g>y)&&T>j&&E>L&&!(b++>19);)E=Math.max(L,Math.min(M,E-10)),T=f(E*d),j>T&&(T=j,E=f(T/d)),T>P&&(T=P,E=f(T/d)),S.width(T).height(E),W.width(T+e),h=W.width(),g=W.height();else T=Math.max(j,Math.min(T,T-(h-m))),E=Math.max(L,Math.min(E,E-(g-y)));R&&"auto"===H&&s>E&&m>T+e+R&&(T+=R),S.width(T).height(E),W.width(T+e),h=W.width(),g=W.height(),k=(h>m||g>y)&&T>j&&E>L,C=_.aspectRatio?l>T&&c>E&&a>T&&s>E:(l>T||c>E)&&(a>T||s>E),i.extend(_,{dim:{width:u(h),height:u(g)},origWidth:a,origHeight:s,canShrink:k,canExpand:C,wPadding:e,hPadding:t,wrapSpace:g-O.outerHeight(!0),skinSpace:O.height()-E}),!v&&_.autoHeight&&E>L&&M>E&&!C&&S.height("auto")},_getPosition:function(e){var t=r.current,i=r.getViewport(),n=t.margin,o=r.wrap.width()+n[1]+n[3],a=r.wrap.height()+n[0]+n[2],s={position:"absolute",top:n[0],left:n[3]};return t.autoCenter&&t.fixed&&!e&&a<=i.h&&o<=i.w?s.position="fixed":t.locked||(s.top+=i.y,s.left+=i.x),s.top=u(Math.max(s.top,s.top+(i.h-a)*t.topRatio)),s.left=u(Math.max(s.left,s.left+(i.w-o)*t.leftRatio)),s},_afterZoomIn:function(){var e=r.current;e&&(r.isOpen=r.isOpened=!0,r.wrap.css("overflow","visible").addClass("fancybox-opened"),r.update(),(e.closeClick||e.nextClick&&r.group.length>1)&&r.inner.css("cursor","pointer").bind("click.fb",function(t){i(t.target).is("a")||i(t.target).parent().is("a")||(t.preventDefault(),r[e.closeClick?"close":"next"]())}),e.closeBtn&&i(e.tpl.closeBtn).appendTo(r.skin).bind(l?"touchstart.fb":"click.fb",function(e){e.preventDefault(),r.close()}),e.arrows&&r.group.length>1&&((e.loop||e.index>0)&&i(e.tpl.prev).appendTo(r.outer).bind("click.fb",r.prev),(e.loop||e.index<r.group.length-1)&&i(e.tpl.next).appendTo(r.outer).bind("click.fb",r.next)),r.trigger("afterShow"),e.loop||e.index!==e.group.length-1?r.opts.autoPlay&&!r.player.isActive&&(r.opts.autoPlay=!1,r.play()):r.play(!1))},_afterZoomOut:function(e){e=e||r.current,i(".fancybox-wrap").trigger("onReset").remove(),i.extend(r,{group:{},opts:{},router:!1,current:null,isActive:!1,isOpened:!1,isOpen:!1,isClosing:!1,wrap:null,skin:null,outer:null,inner:null}),r.trigger("afterClose",e)}}),r.transitions={getOrigPosition:function(){var e=r.current,t=e.element,i=e.orig,n={},o=50,a=50,s=e.hPadding,l=e.wPadding,d=r.getViewport();return!i&&e.isDom&&t.is(":visible")&&(i=t.find("img:first"),i.length||(i=t)),c(i)?(n=i.offset(),i.is("img")&&(o=i.outerWidth(),a=i.outerHeight())):(n.top=d.y+(d.h-a)*e.topRatio,n.left=d.x+(d.w-o)*e.leftRatio),("fixed"===r.wrap.css("position")||e.locked)&&(n.top-=d.y,n.left-=d.x),n={top:u(n.top-s*e.topRatio),left:u(n.left-l*e.leftRatio),width:u(o+l),height:u(a+s)}},step:function(e,t){var i,n,o,a=t.prop,s=r.current,l=s.wrapSpace,c=s.skinSpace;("width"===a||"height"===a)&&(i=t.end===t.start?1:(e-t.start)/(t.end-t.start),r.isClosing&&(i=1-i),n="width"===a?s.wPadding:s.hPadding,o=e-n,r.skin[a](f("width"===a?o:o-l*i)),r.inner[a](f("width"===a?o:o-l*i-c*i)))},zoomIn:function(){var e=r.current,t=e.pos,n=e.openEffect,o="elastic"===n,a=i.extend({opacity:1},t);delete a.position,o?(t=this.getOrigPosition(),e.openOpacity&&(t.opacity=.1)):"fade"===n&&(t.opacity=.1),r.wrap.css(t).animate(a,{duration:"none"===n?0:e.openSpeed,easing:e.openEasing,step:o?this.step:null,complete:r._afterZoomIn})},zoomOut:function(){var e=r.current,t=e.closeEffect,i="elastic"===t,n={opacity:.1};i&&(n=this.getOrigPosition(),e.closeOpacity&&(n.opacity=.1)),r.wrap.animate(n,{duration:"none"===t?0:e.closeSpeed,easing:e.closeEasing,step:i?this.step:null,complete:r._afterZoomOut})},changeIn:function(){var e,t=r.current,i=t.nextEffect,n=t.pos,o={opacity:1},a=r.direction,s=200;n.opacity=.1,"elastic"===i&&(e="down"===a||"up"===a?"top":"left","down"===a||"right"===a?(n[e]=u(f(n[e])-s),o[e]="+="+s+"px"):(n[e]=u(f(n[e])+s),o[e]="-="+s+"px")),"none"===i?r._afterZoomIn():r.wrap.css(n).animate(o,{duration:t.nextSpeed,easing:t.nextEasing,complete:function(){setTimeout(r._afterZoomIn,20)}})},changeOut:function(){var e=r.previous,t=e.prevEffect,n={opacity:.1},o=r.direction,a=200;"elastic"===t&&(n["down"===o||"up"===o?"top":"left"]=("up"===o||"left"===o?"-":"+")+"="+a+"px"),e.wrap.animate(n,{duration:"none"===t?0:e.prevSpeed,easing:e.prevEasing,complete:function(){i(this).trigger("onReset").remove()}})}},r.helpers.overlay={defaults:{closeClick:!0,speedOut:200,showEarly:!0,css:{},locked:!l,fixed:!0},overlay:null,fixed:!1,create:function(e){e=i.extend({},this.defaults,e),this.overlay&&this.close(),this.overlay=i('<div class="fancybox-overlay"></div>').appendTo("body"),this.fixed=!1,e.fixed&&r.defaults.fixed&&(this.overlay.addClass("fancybox-overlay-fixed"),this.fixed=!0)},open:function(e){var t=this;e=i.extend({},this.defaults,e),this.overlay?this.overlay.unbind(".overlay").width("auto").height("auto"):this.create(e),this.fixed||(o.bind("resize.overlay",i.proxy(this.update,this)),this.update()),e.closeClick&&this.overlay.bind("click.overlay",function(e){i(e.target).hasClass("fancybox-overlay")&&(r.isActive?r.close():t.close())}),this.overlay.css(e.css).show()},close:function(){i(".fancybox-overlay").remove(),o.unbind("resize.overlay"),this.overlay=null,this.margin!==!1&&(i("body").css("margin-right",this.margin),this.margin=!1),this.el&&this.el.removeClass("fancybox-lock")},update:function(){var e,n="100%";this.overlay.width(n).height("100%"),i.browser.msie?(e=Math.max(t.documentElement.offsetWidth,t.body.offsetWidth),a.width()>e&&(n=a.width())):a.width()>o.width()&&(n=a.width()),this.overlay.width(n).height(a.height())},onReady:function(e,n){i(".fancybox-overlay").stop(!0,!0),this.overlay||(this.margin=a.height()>o.height()||"scroll"===i("body").css("overflow-y")?i("body").css("margin-right"):!1,this.el=i(t.all&&!t.querySelector?"html":"body"),this.create(e)),e.locked&&this.fixed&&(n.locked=this.overlay.append(n.wrap),n.fixed=!1),e.showEarly===!0&&this.beforeShow.apply(this,arguments)},beforeShow:function(e,t){t.locked&&(this.el.addClass("fancybox-lock"),this.margin!==!1&&i("body").css("margin-right",f(this.margin)+t.scrollbarWidth)),this.open(e)},onUpdate:function(){this.fixed||this.update()},afterClose:function(e){this.overlay&&!r.isActive&&this.overlay.fadeOut(e.speedOut,i.proxy(this.close,this))}},r.helpers.title={defaults:{type:"float",position:"bottom"},beforeShow:function(e){var t,n,o=r.current,a=o.title,s=e.type;if(i.isFunction(a)&&(a=a.call(o.element,o)),d(a)&&""!==i.trim(a)){switch(t=i('<div class="fancybox-title fancybox-title-'+s+'-wrap">'+a+"</div>"),s){case"inside":n=r.skin;break;case"outside":n=r.wrap;break;case"over":n=r.inner;break;default:n=r.skin,t.appendTo("body"),i.browser.msie&&t.width(t.width()),t.wrapInner('<span class="child"></span>'),r.current.margin[2]+=Math.abs(f(t.css("margin-bottom")))}t["top"===e.position?"prependTo":"appendTo"](n)}}},i.fn.fancybox=function(e){var t,n=i(this),o=this.selector||"",s=function(a){var s,l,c=i(this).blur(),d=t;a.ctrlKey||a.altKey||a.shiftKey||a.metaKey||c.is(".fancybox-wrap")||(s=e.groupAttr||"data-fancybox-group",l=c.attr(s),l||(s="rel",l=c.get(0)[s]),l&&""!==l&&"nofollow"!==l&&(c=o.length?i(o):n,c=c.filter("["+s+'="'+l+'"]'),d=c.index(this)),e.index=d,r.open(c,e)!==!1&&a.preventDefault())};return e=e||{},t=e.index||0,o&&e.live!==!1?a.undelegate(o,"click.fb-start").delegate(o+":not('.fancybox-item, .fancybox-nav')","click.fb-start",s):n.unbind("click.fb-start").bind("click.fb-start",s),this.filter("[data-fancybox-start=1]").trigger("click"),this},a.ready(function(){i.scrollbarWidth===n&&(i.scrollbarWidth=function(){var e=i('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),t=e.children(),n=t.innerWidth()-t.height(99).innerWidth();return e.remove(),n}),i.support.fixedPosition===n&&(i.support.fixedPosition=function(){var e=i('<div style="position:fixed;top:20px;"></div>').appendTo("body"),t=20===e[0].offsetTop||15===e[0].offsetTop;return e.remove(),t}()),i.extend(r.defaults,{scrollbarWidth:i.scrollbarWidth(),fixed:i.support.fixedPosition,parent:i("body")})})}(window,document,jQuery);

//global function to call fancybox with hreff
$('.popup').fancybox({
	width: 500,
	height: 'auto',
	fitToView : false,
	autoSize : false,
});

/*! jQuery UI - v1.11.4 - 2015-11-17
* http://jqueryui.com
* Includes: core.js, widget.js, datepicker.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */

(function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)})(function(e){function t(t,s){var n,a,o,r=t.nodeName.toLowerCase();return"area"===r?(n=t.parentNode,a=n.name,t.href&&a&&"map"===n.nodeName.toLowerCase()?(o=e("img[usemap='#"+a+"']")[0],!!o&&i(o)):!1):(/^(input|select|textarea|button|object)$/.test(r)?!t.disabled:"a"===r?t.href||s:s)&&i(t)}function i(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return"hidden"===e.css(this,"visibility")}).length}function s(e){for(var t,i;e.length&&e[0]!==document;){if(t=e.css("position"),("absolute"===t||"relative"===t||"fixed"===t)&&(i=parseInt(e.css("zIndex"),10),!isNaN(i)&&0!==i))return i;e=e.parent()}return 0}function n(){this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},e.extend(this._defaults,this.regional[""]),this.regional.en=e.extend(!0,{},this.regional[""]),this.regional["en-US"]=e.extend(!0,{},this.regional.en),this.dpDiv=a(e("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))}function a(t){var i="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return t.delegate(i,"mouseout",function(){e(this).removeClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&e(this).removeClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&e(this).removeClass("ui-datepicker-next-hover")}).delegate(i,"mouseover",o)}function o(){e.datepicker._isDisabledDatepicker(u.inline?u.dpDiv.parent()[0]:u.input[0])||(e(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),e(this).addClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&e(this).addClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&e(this).addClass("ui-datepicker-next-hover"))}function r(t,i){e.extend(t,i);for(var s in i)null==i[s]&&(t[s]=i[s]);return t}e.ui=e.ui||{},e.extend(e.ui,{version:"1.11.4",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({scrollParent:function(t){var i=this.css("position"),s="absolute"===i,n=t?/(auto|scroll|hidden)/:/(auto|scroll)/,a=this.parents().filter(function(){var t=e(this);return s&&"static"===t.css("position")?!1:n.test(t.css("overflow")+t.css("overflow-y")+t.css("overflow-x"))}).eq(0);return"fixed"!==i&&a.length?a:e(this[0].ownerDocument||document)},uniqueId:function(){var e=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++e)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(i){return!!e.data(i,t)}}):function(t,i,s){return!!e.data(t,s[3])},focusable:function(i){return t(i,!isNaN(e.attr(i,"tabindex")))},tabbable:function(i){var s=e.attr(i,"tabindex"),n=isNaN(s);return(n||s>=0)&&t(i,!n)}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(t,i){function s(t,i,s,a){return e.each(n,function(){i-=parseFloat(e.css(t,"padding"+this))||0,s&&(i-=parseFloat(e.css(t,"border"+this+"Width"))||0),a&&(i-=parseFloat(e.css(t,"margin"+this))||0)}),i}var n="Width"===i?["Left","Right"]:["Top","Bottom"],a=i.toLowerCase(),o={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+i]=function(t){return void 0===t?o["inner"+i].call(this):this.each(function(){e(this).css(a,s(this,t)+"px")})},e.fn["outer"+i]=function(t,n){return"number"!=typeof t?o["outer"+i].call(this,t):this.each(function(){e(this).css(a,s(this,t,!0,n)+"px")})}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(i){return arguments.length?t.call(this,e.camelCase(i)):t.call(this)}}(e.fn.removeData)),e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),e.fn.extend({focus:function(t){return function(i,s){return"number"==typeof i?this.each(function(){var t=this;setTimeout(function(){e(t).focus(),s&&s.call(t)},i)}):t.apply(this,arguments)}}(e.fn.focus),disableSelection:function(){var e="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.bind(e+".ui-disableSelection",function(e){e.preventDefault()})}}(),enableSelection:function(){return this.unbind(".ui-disableSelection")},zIndex:function(t){if(void 0!==t)return this.css("zIndex",t);if(this.length)for(var i,s,n=e(this[0]);n.length&&n[0]!==document;){if(i=n.css("position"),("absolute"===i||"relative"===i||"fixed"===i)&&(s=parseInt(n.css("zIndex"),10),!isNaN(s)&&0!==s))return s;n=n.parent()}return 0}}),e.ui.plugin={add:function(t,i,s){var n,a=e.ui[t].prototype;for(n in s)a.plugins[n]=a.plugins[n]||[],a.plugins[n].push([i,s[n]])},call:function(e,t,i,s){var n,a=e.plugins[t];if(a&&(s||e.element[0].parentNode&&11!==e.element[0].parentNode.nodeType))for(n=0;a.length>n;n++)e.options[a[n][0]]&&a[n][1].apply(e.element,i)}};var h=0,l=Array.prototype.slice;e.cleanData=function(t){return function(i){var s,n,a;for(a=0;null!=(n=i[a]);a++)try{s=e._data(n,"events"),s&&s.remove&&e(n).triggerHandler("remove")}catch(o){}t(i)}}(e.cleanData),e.widget=function(t,i,s){var n,a,o,r,h={},l=t.split(".")[0];return t=t.split(".")[1],n=l+"-"+t,s||(s=i,i=e.Widget),e.expr[":"][n.toLowerCase()]=function(t){return!!e.data(t,n)},e[l]=e[l]||{},a=e[l][t],o=e[l][t]=function(e,t){return this._createWidget?(arguments.length&&this._createWidget(e,t),void 0):new o(e,t)},e.extend(o,a,{version:s.version,_proto:e.extend({},s),_childConstructors:[]}),r=new i,r.options=e.widget.extend({},r.options),e.each(s,function(t,s){return e.isFunction(s)?(h[t]=function(){var e=function(){return i.prototype[t].apply(this,arguments)},n=function(e){return i.prototype[t].apply(this,e)};return function(){var t,i=this._super,a=this._superApply;return this._super=e,this._superApply=n,t=s.apply(this,arguments),this._super=i,this._superApply=a,t}}(),void 0):(h[t]=s,void 0)}),o.prototype=e.widget.extend(r,{widgetEventPrefix:a?r.widgetEventPrefix||t:t},h,{constructor:o,namespace:l,widgetName:t,widgetFullName:n}),a?(e.each(a._childConstructors,function(t,i){var s=i.prototype;e.widget(s.namespace+"."+s.widgetName,o,i._proto)}),delete a._childConstructors):i._childConstructors.push(o),e.widget.bridge(t,o),o},e.widget.extend=function(t){for(var i,s,n=l.call(arguments,1),a=0,o=n.length;o>a;a++)for(i in n[a])s=n[a][i],n[a].hasOwnProperty(i)&&void 0!==s&&(t[i]=e.isPlainObject(s)?e.isPlainObject(t[i])?e.widget.extend({},t[i],s):e.widget.extend({},s):s);return t},e.widget.bridge=function(t,i){var s=i.prototype.widgetFullName||t;e.fn[t]=function(n){var a="string"==typeof n,o=l.call(arguments,1),r=this;return a?this.each(function(){var i,a=e.data(this,s);return"instance"===n?(r=a,!1):a?e.isFunction(a[n])&&"_"!==n.charAt(0)?(i=a[n].apply(a,o),i!==a&&void 0!==i?(r=i&&i.jquery?r.pushStack(i.get()):i,!1):void 0):e.error("no such method '"+n+"' for "+t+" widget instance"):e.error("cannot call methods on "+t+" prior to initialization; "+"attempted to call method '"+n+"'")}):(o.length&&(n=e.widget.extend.apply(null,[n].concat(o))),this.each(function(){var t=e.data(this,s);t?(t.option(n||{}),t._init&&t._init()):e.data(this,s,new i(n,this))})),r}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,i){i=e(i||this.defaultElement||this)[0],this.element=e(i),this.uuid=h++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=e(),this.hoverable=e(),this.focusable=e(),i!==this&&(e.data(i,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===i&&this.destroy()}}),this.document=e(i.style?i.ownerDocument:i.document||i),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(t,i){var s,n,a,o=t;if(0===arguments.length)return e.widget.extend({},this.options);if("string"==typeof t)if(o={},s=t.split("."),t=s.shift(),s.length){for(n=o[t]=e.widget.extend({},this.options[t]),a=0;s.length-1>a;a++)n[s[a]]=n[s[a]]||{},n=n[s[a]];if(t=s.pop(),1===arguments.length)return void 0===n[t]?null:n[t];n[t]=i}else{if(1===arguments.length)return void 0===this.options[t]?null:this.options[t];o[t]=i}return this._setOptions(o),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,"disabled"===e&&(this.widget().toggleClass(this.widgetFullName+"-disabled",!!t),t&&(this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus"))),this},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_on:function(t,i,s){var n,a=this;"boolean"!=typeof t&&(s=i,i=t,t=!1),s?(i=n=e(i),this.bindings=this.bindings.add(i)):(s=i,i=this.element,n=this.widget()),e.each(s,function(s,o){function r(){return t||a.options.disabled!==!0&&!e(this).hasClass("ui-state-disabled")?("string"==typeof o?a[o]:o).apply(a,arguments):void 0}"string"!=typeof o&&(r.guid=o.guid=o.guid||r.guid||e.guid++);var h=s.match(/^([\w:-]*)\s*(.*)$/),l=h[1]+a.eventNamespace,u=h[2];u?n.delegate(u,l,r):i.bind(l,r)})},_off:function(t,i){i=(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.unbind(i).undelegate(i),this.bindings=e(this.bindings.not(t).get()),this.focusable=e(this.focusable.not(t).get()),this.hoverable=e(this.hoverable.not(t).get())},_delay:function(e,t){function i(){return("string"==typeof e?s[e]:e).apply(s,arguments)}var s=this;return setTimeout(i,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,i,s){var n,a,o=this.options[t];if(s=s||{},i=e.Event(i),i.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),i.target=this.element[0],a=i.originalEvent)for(n in a)n in i||(i[n]=a[n]);return this.element.trigger(i,s),!(e.isFunction(o)&&o.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,i){e.Widget.prototype["_"+t]=function(s,n,a){"string"==typeof n&&(n={effect:n});var o,r=n?n===!0||"number"==typeof n?i:n.effect||i:t;n=n||{},"number"==typeof n&&(n={duration:n}),o=!e.isEmptyObject(n),n.complete=a,n.delay&&s.delay(n.delay),o&&e.effects&&e.effects.effect[r]?s[t](n):r!==t&&s[r]?s[r](n.duration,n.easing,a):s.queue(function(i){e(this)[t](),a&&a.call(s[0]),i()})}}),e.widget,e.extend(e.ui,{datepicker:{version:"1.11.4"}});var u;e.extend(n.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(e){return r(this._defaults,e||{}),this},_attachDatepicker:function(t,i){var s,n,a;s=t.nodeName.toLowerCase(),n="div"===s||"span"===s,t.id||(this.uuid+=1,t.id="dp"+this.uuid),a=this._newInst(e(t),n),a.settings=e.extend({},i||{}),"input"===s?this._connectDatepicker(t,a):n&&this._inlineDatepicker(t,a)},_newInst:function(t,i){var s=t[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");return{id:s,input:t,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:i,dpDiv:i?a(e("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")):this.dpDiv}},_connectDatepicker:function(t,i){var s=e(t);i.append=e([]),i.trigger=e([]),s.hasClass(this.markerClassName)||(this._attachments(s,i),s.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp),this._autoSize(i),e.data(t,"datepicker",i),i.settings.disabled&&this._disableDatepicker(t))},_attachments:function(t,i){var s,n,a,o=this._get(i,"appendText"),r=this._get(i,"isRTL");i.append&&i.append.remove(),o&&(i.append=e("<span class='"+this._appendClass+"'>"+o+"</span>"),t[r?"before":"after"](i.append)),t.unbind("focus",this._showDatepicker),i.trigger&&i.trigger.remove(),s=this._get(i,"showOn"),("focus"===s||"both"===s)&&t.focus(this._showDatepicker),("button"===s||"both"===s)&&(n=this._get(i,"buttonText"),a=this._get(i,"buttonImage"),i.trigger=e(this._get(i,"buttonImageOnly")?e("<img/>").addClass(this._triggerClass).attr({src:a,alt:n,title:n}):e("<button type='button'></button>").addClass(this._triggerClass).html(a?e("<img/>").attr({src:a,alt:n,title:n}):n)),t[r?"before":"after"](i.trigger),i.trigger.click(function(){return e.datepicker._datepickerShowing&&e.datepicker._lastInput===t[0]?e.datepicker._hideDatepicker():e.datepicker._datepickerShowing&&e.datepicker._lastInput!==t[0]?(e.datepicker._hideDatepicker(),e.datepicker._showDatepicker(t[0])):e.datepicker._showDatepicker(t[0]),!1}))},_autoSize:function(e){if(this._get(e,"autoSize")&&!e.inline){var t,i,s,n,a=new Date(2009,11,20),o=this._get(e,"dateFormat");o.match(/[DM]/)&&(t=function(e){for(i=0,s=0,n=0;e.length>n;n++)e[n].length>i&&(i=e[n].length,s=n);return s},a.setMonth(t(this._get(e,o.match(/MM/)?"monthNames":"monthNamesShort"))),a.setDate(t(this._get(e,o.match(/DD/)?"dayNames":"dayNamesShort"))+20-a.getDay())),e.input.attr("size",this._formatDate(e,a).length)}},_inlineDatepicker:function(t,i){var s=e(t);s.hasClass(this.markerClassName)||(s.addClass(this.markerClassName).append(i.dpDiv),e.data(t,"datepicker",i),this._setDate(i,this._getDefaultDate(i),!0),this._updateDatepicker(i),this._updateAlternate(i),i.settings.disabled&&this._disableDatepicker(t),i.dpDiv.css("display","block"))},_dialogDatepicker:function(t,i,s,n,a){var o,h,l,u,d,c=this._dialogInst;return c||(this.uuid+=1,o="dp"+this.uuid,this._dialogInput=e("<input type='text' id='"+o+"' style='position: absolute; top: -100px; width: 0px;'/>"),this._dialogInput.keydown(this._doKeyDown),e("body").append(this._dialogInput),c=this._dialogInst=this._newInst(this._dialogInput,!1),c.settings={},e.data(this._dialogInput[0],"datepicker",c)),r(c.settings,n||{}),i=i&&i.constructor===Date?this._formatDate(c,i):i,this._dialogInput.val(i),this._pos=a?a.length?a:[a.pageX,a.pageY]:null,this._pos||(h=document.documentElement.clientWidth,l=document.documentElement.clientHeight,u=document.documentElement.scrollLeft||document.body.scrollLeft,d=document.documentElement.scrollTop||document.body.scrollTop,this._pos=[h/2-100+u,l/2-150+d]),this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),c.settings.onSelect=s,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),e.blockUI&&e.blockUI(this.dpDiv),e.data(this._dialogInput[0],"datepicker",c),this},_destroyDatepicker:function(t){var i,s=e(t),n=e.data(t,"datepicker");s.hasClass(this.markerClassName)&&(i=t.nodeName.toLowerCase(),e.removeData(t,"datepicker"),"input"===i?(n.append.remove(),n.trigger.remove(),s.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)):("div"===i||"span"===i)&&s.removeClass(this.markerClassName).empty(),u===n&&(u=null))},_enableDatepicker:function(t){var i,s,n=e(t),a=e.data(t,"datepicker");n.hasClass(this.markerClassName)&&(i=t.nodeName.toLowerCase(),"input"===i?(t.disabled=!1,a.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""})):("div"===i||"span"===i)&&(s=n.children("."+this._inlineClass),s.children().removeClass("ui-state-disabled"),s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)),this._disabledInputs=e.map(this._disabledInputs,function(e){return e===t?null:e}))},_disableDatepicker:function(t){var i,s,n=e(t),a=e.data(t,"datepicker");n.hasClass(this.markerClassName)&&(i=t.nodeName.toLowerCase(),"input"===i?(t.disabled=!0,a.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"})):("div"===i||"span"===i)&&(s=n.children("."+this._inlineClass),s.children().addClass("ui-state-disabled"),s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)),this._disabledInputs=e.map(this._disabledInputs,function(e){return e===t?null:e}),this._disabledInputs[this._disabledInputs.length]=t)},_isDisabledDatepicker:function(e){if(!e)return!1;for(var t=0;this._disabledInputs.length>t;t++)if(this._disabledInputs[t]===e)return!0;return!1},_getInst:function(t){try{return e.data(t,"datepicker")}catch(i){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(t,i,s){var n,a,o,h,l=this._getInst(t);return 2===arguments.length&&"string"==typeof i?"defaults"===i?e.extend({},e.datepicker._defaults):l?"all"===i?e.extend({},l.settings):this._get(l,i):null:(n=i||{},"string"==typeof i&&(n={},n[i]=s),l&&(this._curInst===l&&this._hideDatepicker(),a=this._getDateDatepicker(t,!0),o=this._getMinMaxDate(l,"min"),h=this._getMinMaxDate(l,"max"),r(l.settings,n),null!==o&&void 0!==n.dateFormat&&void 0===n.minDate&&(l.settings.minDate=this._formatDate(l,o)),null!==h&&void 0!==n.dateFormat&&void 0===n.maxDate&&(l.settings.maxDate=this._formatDate(l,h)),"disabled"in n&&(n.disabled?this._disableDatepicker(t):this._enableDatepicker(t)),this._attachments(e(t),l),this._autoSize(l),this._setDate(l,a),this._updateAlternate(l),this._updateDatepicker(l)),void 0)},_changeDatepicker:function(e,t,i){this._optionDatepicker(e,t,i)},_refreshDatepicker:function(e){var t=this._getInst(e);t&&this._updateDatepicker(t)},_setDateDatepicker:function(e,t){var i=this._getInst(e);i&&(this._setDate(i,t),this._updateDatepicker(i),this._updateAlternate(i))},_getDateDatepicker:function(e,t){var i=this._getInst(e);return i&&!i.inline&&this._setDateFromField(i,t),i?this._getDate(i):null},_doKeyDown:function(t){var i,s,n,a=e.datepicker._getInst(t.target),o=!0,r=a.dpDiv.is(".ui-datepicker-rtl");if(a._keyEvent=!0,e.datepicker._datepickerShowing)switch(t.keyCode){case 9:e.datepicker._hideDatepicker(),o=!1;break;case 13:return n=e("td."+e.datepicker._dayOverClass+":not(."+e.datepicker._currentClass+")",a.dpDiv),n[0]&&e.datepicker._selectDay(t.target,a.selectedMonth,a.selectedYear,n[0]),i=e.datepicker._get(a,"onSelect"),i?(s=e.datepicker._formatDate(a),i.apply(a.input?a.input[0]:null,[s,a])):e.datepicker._hideDatepicker(),!1;case 27:e.datepicker._hideDatepicker();break;case 33:e.datepicker._adjustDate(t.target,t.ctrlKey?-e.datepicker._get(a,"stepBigMonths"):-e.datepicker._get(a,"stepMonths"),"M");break;case 34:e.datepicker._adjustDate(t.target,t.ctrlKey?+e.datepicker._get(a,"stepBigMonths"):+e.datepicker._get(a,"stepMonths"),"M");break;case 35:(t.ctrlKey||t.metaKey)&&e.datepicker._clearDate(t.target),o=t.ctrlKey||t.metaKey;break;case 36:(t.ctrlKey||t.metaKey)&&e.datepicker._gotoToday(t.target),o=t.ctrlKey||t.metaKey;break;case 37:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,r?1:-1,"D"),o=t.ctrlKey||t.metaKey,t.originalEvent.altKey&&e.datepicker._adjustDate(t.target,t.ctrlKey?-e.datepicker._get(a,"stepBigMonths"):-e.datepicker._get(a,"stepMonths"),"M");break;case 38:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,-7,"D"),o=t.ctrlKey||t.metaKey;break;case 39:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,r?-1:1,"D"),o=t.ctrlKey||t.metaKey,t.originalEvent.altKey&&e.datepicker._adjustDate(t.target,t.ctrlKey?+e.datepicker._get(a,"stepBigMonths"):+e.datepicker._get(a,"stepMonths"),"M");break;case 40:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,7,"D"),o=t.ctrlKey||t.metaKey;break;default:o=!1}else 36===t.keyCode&&t.ctrlKey?e.datepicker._showDatepicker(this):o=!1;o&&(t.preventDefault(),t.stopPropagation())},_doKeyPress:function(t){var i,s,n=e.datepicker._getInst(t.target);return e.datepicker._get(n,"constrainInput")?(i=e.datepicker._possibleChars(e.datepicker._get(n,"dateFormat")),s=String.fromCharCode(null==t.charCode?t.keyCode:t.charCode),t.ctrlKey||t.metaKey||" ">s||!i||i.indexOf(s)>-1):void 0},_doKeyUp:function(t){var i,s=e.datepicker._getInst(t.target);if(s.input.val()!==s.lastVal)try{i=e.datepicker.parseDate(e.datepicker._get(s,"dateFormat"),s.input?s.input.val():null,e.datepicker._getFormatConfig(s)),i&&(e.datepicker._setDateFromField(s),e.datepicker._updateAlternate(s),e.datepicker._updateDatepicker(s))}catch(n){}return!0},_showDatepicker:function(t){if(t=t.target||t,"input"!==t.nodeName.toLowerCase()&&(t=e("input",t.parentNode)[0]),!e.datepicker._isDisabledDatepicker(t)&&e.datepicker._lastInput!==t){var i,n,a,o,h,l,u;i=e.datepicker._getInst(t),e.datepicker._curInst&&e.datepicker._curInst!==i&&(e.datepicker._curInst.dpDiv.stop(!0,!0),i&&e.datepicker._datepickerShowing&&e.datepicker._hideDatepicker(e.datepicker._curInst.input[0])),n=e.datepicker._get(i,"beforeShow"),a=n?n.apply(t,[t,i]):{},a!==!1&&(r(i.settings,a),i.lastVal=null,e.datepicker._lastInput=t,e.datepicker._setDateFromField(i),e.datepicker._inDialog&&(t.value=""),e.datepicker._pos||(e.datepicker._pos=e.datepicker._findPos(t),e.datepicker._pos[1]+=t.offsetHeight),o=!1,e(t).parents().each(function(){return o|="fixed"===e(this).css("position"),!o}),h={left:e.datepicker._pos[0],top:e.datepicker._pos[1]},e.datepicker._pos=null,i.dpDiv.empty(),i.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),e.datepicker._updateDatepicker(i),h=e.datepicker._checkOffset(i,h,o),i.dpDiv.css({position:e.datepicker._inDialog&&e.blockUI?"static":o?"fixed":"absolute",display:"none",left:h.left+"px",top:h.top+"px"}),i.inline||(l=e.datepicker._get(i,"showAnim"),u=e.datepicker._get(i,"duration"),i.dpDiv.css("z-index",s(e(t))+1),e.datepicker._datepickerShowing=!0,e.effects&&e.effects.effect[l]?i.dpDiv.show(l,e.datepicker._get(i,"showOptions"),u):i.dpDiv[l||"show"](l?u:null),e.datepicker._shouldFocusInput(i)&&i.input.focus(),e.datepicker._curInst=i))}},_updateDatepicker:function(t){this.maxRows=4,u=t,t.dpDiv.empty().append(this._generateHTML(t)),this._attachHandlers(t);var i,s=this._getNumberOfMonths(t),n=s[1],a=17,r=t.dpDiv.find("."+this._dayOverClass+" a");r.length>0&&o.apply(r.get(0)),t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),n>1&&t.dpDiv.addClass("ui-datepicker-multi-"+n).css("width",a*n+"em"),t.dpDiv[(1!==s[0]||1!==s[1]?"add":"remove")+"Class"]("ui-datepicker-multi"),t.dpDiv[(this._get(t,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),t===e.datepicker._curInst&&e.datepicker._datepickerShowing&&e.datepicker._shouldFocusInput(t)&&t.input.focus(),t.yearshtml&&(i=t.yearshtml,setTimeout(function(){i===t.yearshtml&&t.yearshtml&&t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml),i=t.yearshtml=null},0))},_shouldFocusInput:function(e){return e.input&&e.input.is(":visible")&&!e.input.is(":disabled")&&!e.input.is(":focus")},_checkOffset:function(t,i,s){var n=t.dpDiv.outerWidth(),a=t.dpDiv.outerHeight(),o=t.input?t.input.outerWidth():0,r=t.input?t.input.outerHeight():0,h=document.documentElement.clientWidth+(s?0:e(document).scrollLeft()),l=document.documentElement.clientHeight+(s?0:e(document).scrollTop());return i.left-=this._get(t,"isRTL")?n-o:0,i.left-=s&&i.left===t.input.offset().left?e(document).scrollLeft():0,i.top-=s&&i.top===t.input.offset().top+r?e(document).scrollTop():0,i.left-=Math.min(i.left,i.left+n>h&&h>n?Math.abs(i.left+n-h):0),i.top-=Math.min(i.top,i.top+a>l&&l>a?Math.abs(a+r):0),i},_findPos:function(t){for(var i,s=this._getInst(t),n=this._get(s,"isRTL");t&&("hidden"===t.type||1!==t.nodeType||e.expr.filters.hidden(t));)t=t[n?"previousSibling":"nextSibling"];return i=e(t).offset(),[i.left,i.top]},_hideDatepicker:function(t){var i,s,n,a,o=this._curInst;!o||t&&o!==e.data(t,"datepicker")||this._datepickerShowing&&(i=this._get(o,"showAnim"),s=this._get(o,"duration"),n=function(){e.datepicker._tidyDialog(o)},e.effects&&(e.effects.effect[i]||e.effects[i])?o.dpDiv.hide(i,e.datepicker._get(o,"showOptions"),s,n):o.dpDiv["slideDown"===i?"slideUp":"fadeIn"===i?"fadeOut":"hide"](i?s:null,n),i||n(),this._datepickerShowing=!1,a=this._get(o,"onClose"),a&&a.apply(o.input?o.input[0]:null,[o.input?o.input.val():"",o]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),e.blockUI&&(e.unblockUI(),e("body").append(this.dpDiv))),this._inDialog=!1)},_tidyDialog:function(e){e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick:function(t){if(e.datepicker._curInst){var i=e(t.target),s=e.datepicker._getInst(i[0]);(i[0].id!==e.datepicker._mainDivId&&0===i.parents("#"+e.datepicker._mainDivId).length&&!i.hasClass(e.datepicker.markerClassName)&&!i.closest("."+e.datepicker._triggerClass).length&&e.datepicker._datepickerShowing&&(!e.datepicker._inDialog||!e.blockUI)||i.hasClass(e.datepicker.markerClassName)&&e.datepicker._curInst!==s)&&e.datepicker._hideDatepicker()}},_adjustDate:function(t,i,s){var n=e(t),a=this._getInst(n[0]);this._isDisabledDatepicker(n[0])||(this._adjustInstDate(a,i+("M"===s?this._get(a,"showCurrentAtPos"):0),s),this._updateDatepicker(a))},_gotoToday:function(t){var i,s=e(t),n=this._getInst(s[0]);this._get(n,"gotoCurrent")&&n.currentDay?(n.selectedDay=n.currentDay,n.drawMonth=n.selectedMonth=n.currentMonth,n.drawYear=n.selectedYear=n.currentYear):(i=new Date,n.selectedDay=i.getDate(),n.drawMonth=n.selectedMonth=i.getMonth(),n.drawYear=n.selectedYear=i.getFullYear()),this._notifyChange(n),this._adjustDate(s)},_selectMonthYear:function(t,i,s){var n=e(t),a=this._getInst(n[0]);a["selected"+("M"===s?"Month":"Year")]=a["draw"+("M"===s?"Month":"Year")]=parseInt(i.options[i.selectedIndex].value,10),this._notifyChange(a),this._adjustDate(n)},_selectDay:function(t,i,s,n){var a,o=e(t);e(n).hasClass(this._unselectableClass)||this._isDisabledDatepicker(o[0])||(a=this._getInst(o[0]),a.selectedDay=a.currentDay=e("a",n).html(),a.selectedMonth=a.currentMonth=i,a.selectedYear=a.currentYear=s,this._selectDate(t,this._formatDate(a,a.currentDay,a.currentMonth,a.currentYear)))},_clearDate:function(t){var i=e(t);this._selectDate(i,"")},_selectDate:function(t,i){var s,n=e(t),a=this._getInst(n[0]);i=null!=i?i:this._formatDate(a),a.input&&a.input.val(i),this._updateAlternate(a),s=this._get(a,"onSelect"),s?s.apply(a.input?a.input[0]:null,[i,a]):a.input&&a.input.trigger("change"),a.inline?this._updateDatepicker(a):(this._hideDatepicker(),this._lastInput=a.input[0],"object"!=typeof a.input[0]&&a.input.focus(),this._lastInput=null)},_updateAlternate:function(t){var i,s,n,a=this._get(t,"altField");a&&(i=this._get(t,"altFormat")||this._get(t,"dateFormat"),s=this._getDate(t),n=this.formatDate(i,s,this._getFormatConfig(t)),e(a).each(function(){e(this).val(n)}))},noWeekends:function(e){var t=e.getDay();return[t>0&&6>t,""]},iso8601Week:function(e){var t,i=new Date(e.getTime());return i.setDate(i.getDate()+4-(i.getDay()||7)),t=i.getTime(),i.setMonth(0),i.setDate(1),Math.floor(Math.round((t-i)/864e5)/7)+1},parseDate:function(t,i,s){if(null==t||null==i)throw"Invalid arguments";if(i="object"==typeof i?""+i:i+"",""===i)return null;var n,a,o,r,h=0,l=(s?s.shortYearCutoff:null)||this._defaults.shortYearCutoff,u="string"!=typeof l?l:(new Date).getFullYear()%100+parseInt(l,10),d=(s?s.dayNamesShort:null)||this._defaults.dayNamesShort,c=(s?s.dayNames:null)||this._defaults.dayNames,p=(s?s.monthNamesShort:null)||this._defaults.monthNamesShort,f=(s?s.monthNames:null)||this._defaults.monthNames,m=-1,g=-1,v=-1,y=-1,b=!1,_=function(e){var i=t.length>n+1&&t.charAt(n+1)===e;return i&&n++,i},x=function(e){var t=_(e),s="@"===e?14:"!"===e?20:"y"===e&&t?4:"o"===e?3:2,n="y"===e?s:1,a=RegExp("^\\d{"+n+","+s+"}"),o=i.substring(h).match(a);if(!o)throw"Missing number at position "+h;return h+=o[0].length,parseInt(o[0],10)},w=function(t,s,n){var a=-1,o=e.map(_(t)?n:s,function(e,t){return[[t,e]]}).sort(function(e,t){return-(e[1].length-t[1].length)});if(e.each(o,function(e,t){var s=t[1];return i.substr(h,s.length).toLowerCase()===s.toLowerCase()?(a=t[0],h+=s.length,!1):void 0}),-1!==a)return a+1;throw"Unknown name at position "+h},k=function(){if(i.charAt(h)!==t.charAt(n))throw"Unexpected literal at position "+h;h++};for(n=0;t.length>n;n++)if(b)"'"!==t.charAt(n)||_("'")?k():b=!1;else switch(t.charAt(n)){case"d":v=x("d");break;case"D":w("D",d,c);break;case"o":y=x("o");break;case"m":g=x("m");break;case"M":g=w("M",p,f);break;case"y":m=x("y");break;case"@":r=new Date(x("@")),m=r.getFullYear(),g=r.getMonth()+1,v=r.getDate();break;case"!":r=new Date((x("!")-this._ticksTo1970)/1e4),m=r.getFullYear(),g=r.getMonth()+1,v=r.getDate();break;case"'":_("'")?k():b=!0;break;default:k()}if(i.length>h&&(o=i.substr(h),!/^\s+/.test(o)))throw"Extra/unparsed characters found in date: "+o;if(-1===m?m=(new Date).getFullYear():100>m&&(m+=(new Date).getFullYear()-(new Date).getFullYear()%100+(u>=m?0:-100)),y>-1)for(g=1,v=y;;){if(a=this._getDaysInMonth(m,g-1),a>=v)break;g++,v-=a}if(r=this._daylightSavingAdjust(new Date(m,g-1,v)),r.getFullYear()!==m||r.getMonth()+1!==g||r.getDate()!==v)throw"Invalid date";return r},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:1e7*60*60*24*(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925)),formatDate:function(e,t,i){if(!t)return"";
var s,n=(i?i.dayNamesShort:null)||this._defaults.dayNamesShort,a=(i?i.dayNames:null)||this._defaults.dayNames,o=(i?i.monthNamesShort:null)||this._defaults.monthNamesShort,r=(i?i.monthNames:null)||this._defaults.monthNames,h=function(t){var i=e.length>s+1&&e.charAt(s+1)===t;return i&&s++,i},l=function(e,t,i){var s=""+t;if(h(e))for(;i>s.length;)s="0"+s;return s},u=function(e,t,i,s){return h(e)?s[t]:i[t]},d="",c=!1;if(t)for(s=0;e.length>s;s++)if(c)"'"!==e.charAt(s)||h("'")?d+=e.charAt(s):c=!1;else switch(e.charAt(s)){case"d":d+=l("d",t.getDate(),2);break;case"D":d+=u("D",t.getDay(),n,a);break;case"o":d+=l("o",Math.round((new Date(t.getFullYear(),t.getMonth(),t.getDate()).getTime()-new Date(t.getFullYear(),0,0).getTime())/864e5),3);break;case"m":d+=l("m",t.getMonth()+1,2);break;case"M":d+=u("M",t.getMonth(),o,r);break;case"y":d+=h("y")?t.getFullYear():(10>t.getYear()%100?"0":"")+t.getYear()%100;break;case"@":d+=t.getTime();break;case"!":d+=1e4*t.getTime()+this._ticksTo1970;break;case"'":h("'")?d+="'":c=!0;break;default:d+=e.charAt(s)}return d},_possibleChars:function(e){var t,i="",s=!1,n=function(i){var s=e.length>t+1&&e.charAt(t+1)===i;return s&&t++,s};for(t=0;e.length>t;t++)if(s)"'"!==e.charAt(t)||n("'")?i+=e.charAt(t):s=!1;else switch(e.charAt(t)){case"d":case"m":case"y":case"@":i+="0123456789";break;case"D":case"M":return null;case"'":n("'")?i+="'":s=!0;break;default:i+=e.charAt(t)}return i},_get:function(e,t){return void 0!==e.settings[t]?e.settings[t]:this._defaults[t]},_setDateFromField:function(e,t){if(e.input.val()!==e.lastVal){var i=this._get(e,"dateFormat"),s=e.lastVal=e.input?e.input.val():null,n=this._getDefaultDate(e),a=n,o=this._getFormatConfig(e);try{a=this.parseDate(i,s,o)||n}catch(r){s=t?"":s}e.selectedDay=a.getDate(),e.drawMonth=e.selectedMonth=a.getMonth(),e.drawYear=e.selectedYear=a.getFullYear(),e.currentDay=s?a.getDate():0,e.currentMonth=s?a.getMonth():0,e.currentYear=s?a.getFullYear():0,this._adjustInstDate(e)}},_getDefaultDate:function(e){return this._restrictMinMax(e,this._determineDate(e,this._get(e,"defaultDate"),new Date))},_determineDate:function(t,i,s){var n=function(e){var t=new Date;return t.setDate(t.getDate()+e),t},a=function(i){try{return e.datepicker.parseDate(e.datepicker._get(t,"dateFormat"),i,e.datepicker._getFormatConfig(t))}catch(s){}for(var n=(i.toLowerCase().match(/^c/)?e.datepicker._getDate(t):null)||new Date,a=n.getFullYear(),o=n.getMonth(),r=n.getDate(),h=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,l=h.exec(i);l;){switch(l[2]||"d"){case"d":case"D":r+=parseInt(l[1],10);break;case"w":case"W":r+=7*parseInt(l[1],10);break;case"m":case"M":o+=parseInt(l[1],10),r=Math.min(r,e.datepicker._getDaysInMonth(a,o));break;case"y":case"Y":a+=parseInt(l[1],10),r=Math.min(r,e.datepicker._getDaysInMonth(a,o))}l=h.exec(i)}return new Date(a,o,r)},o=null==i||""===i?s:"string"==typeof i?a(i):"number"==typeof i?isNaN(i)?s:n(i):new Date(i.getTime());return o=o&&"Invalid Date"==""+o?s:o,o&&(o.setHours(0),o.setMinutes(0),o.setSeconds(0),o.setMilliseconds(0)),this._daylightSavingAdjust(o)},_daylightSavingAdjust:function(e){return e?(e.setHours(e.getHours()>12?e.getHours()+2:0),e):null},_setDate:function(e,t,i){var s=!t,n=e.selectedMonth,a=e.selectedYear,o=this._restrictMinMax(e,this._determineDate(e,t,new Date));e.selectedDay=e.currentDay=o.getDate(),e.drawMonth=e.selectedMonth=e.currentMonth=o.getMonth(),e.drawYear=e.selectedYear=e.currentYear=o.getFullYear(),n===e.selectedMonth&&a===e.selectedYear||i||this._notifyChange(e),this._adjustInstDate(e),e.input&&e.input.val(s?"":this._formatDate(e))},_getDate:function(e){var t=!e.currentYear||e.input&&""===e.input.val()?null:this._daylightSavingAdjust(new Date(e.currentYear,e.currentMonth,e.currentDay));return t},_attachHandlers:function(t){var i=this._get(t,"stepMonths"),s="#"+t.id.replace(/\\\\/g,"\\");t.dpDiv.find("[data-handler]").map(function(){var t={prev:function(){e.datepicker._adjustDate(s,-i,"M")},next:function(){e.datepicker._adjustDate(s,+i,"M")},hide:function(){e.datepicker._hideDatepicker()},today:function(){e.datepicker._gotoToday(s)},selectDay:function(){return e.datepicker._selectDay(s,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth:function(){return e.datepicker._selectMonthYear(s,this,"M"),!1},selectYear:function(){return e.datepicker._selectMonthYear(s,this,"Y"),!1}};e(this).bind(this.getAttribute("data-event"),t[this.getAttribute("data-handler")])})},_generateHTML:function(e){var t,i,s,n,a,o,r,h,l,u,d,c,p,f,m,g,v,y,b,_,x,w,k,T,D,S,N,M,C,A,P,I,H,z,F,E,W,O,L,j=new Date,R=this._daylightSavingAdjust(new Date(j.getFullYear(),j.getMonth(),j.getDate())),Y=this._get(e,"isRTL"),J=this._get(e,"showButtonPanel"),B=this._get(e,"hideIfNoPrevNext"),K=this._get(e,"navigationAsDateFormat"),V=this._getNumberOfMonths(e),U=this._get(e,"showCurrentAtPos"),q=this._get(e,"stepMonths"),G=1!==V[0]||1!==V[1],X=this._daylightSavingAdjust(e.currentDay?new Date(e.currentYear,e.currentMonth,e.currentDay):new Date(9999,9,9)),Q=this._getMinMaxDate(e,"min"),$=this._getMinMaxDate(e,"max"),Z=e.drawMonth-U,et=e.drawYear;if(0>Z&&(Z+=12,et--),$)for(t=this._daylightSavingAdjust(new Date($.getFullYear(),$.getMonth()-V[0]*V[1]+1,$.getDate())),t=Q&&Q>t?Q:t;this._daylightSavingAdjust(new Date(et,Z,1))>t;)Z--,0>Z&&(Z=11,et--);for(e.drawMonth=Z,e.drawYear=et,i=this._get(e,"prevText"),i=K?this.formatDate(i,this._daylightSavingAdjust(new Date(et,Z-q,1)),this._getFormatConfig(e)):i,s=this._canAdjustMonth(e,-1,et,Z)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"e":"w")+"'>"+i+"</span></a>":B?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"e":"w")+"'>"+i+"</span></a>",n=this._get(e,"nextText"),n=K?this.formatDate(n,this._daylightSavingAdjust(new Date(et,Z+q,1)),this._getFormatConfig(e)):n,a=this._canAdjustMonth(e,1,et,Z)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"w":"e")+"'>"+n+"</span></a>":B?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"w":"e")+"'>"+n+"</span></a>",o=this._get(e,"currentText"),r=this._get(e,"gotoCurrent")&&e.currentDay?X:R,o=K?this.formatDate(o,r,this._getFormatConfig(e)):o,h=e.inline?"":"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(e,"closeText")+"</button>",l=J?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(Y?h:"")+(this._isInRange(e,r)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+o+"</button>":"")+(Y?"":h)+"</div>":"",u=parseInt(this._get(e,"firstDay"),10),u=isNaN(u)?0:u,d=this._get(e,"showWeek"),c=this._get(e,"dayNames"),p=this._get(e,"dayNamesMin"),f=this._get(e,"monthNames"),m=this._get(e,"monthNamesShort"),g=this._get(e,"beforeShowDay"),v=this._get(e,"showOtherMonths"),y=this._get(e,"selectOtherMonths"),b=this._getDefaultDate(e),_="",w=0;V[0]>w;w++){for(k="",this.maxRows=4,T=0;V[1]>T;T++){if(D=this._daylightSavingAdjust(new Date(et,Z,e.selectedDay)),S=" ui-corner-all",N="",G){if(N+="<div class='ui-datepicker-group",V[1]>1)switch(T){case 0:N+=" ui-datepicker-group-first",S=" ui-corner-"+(Y?"right":"left");break;case V[1]-1:N+=" ui-datepicker-group-last",S=" ui-corner-"+(Y?"left":"right");break;default:N+=" ui-datepicker-group-middle",S=""}N+="'>"}for(N+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+S+"'>"+(/all|left/.test(S)&&0===w?Y?a:s:"")+(/all|right/.test(S)&&0===w?Y?s:a:"")+this._generateMonthYearHeader(e,Z,et,Q,$,w>0||T>0,f,m)+"</div><table class='ui-datepicker-calendar'><thead>"+"<tr>",M=d?"<th class='ui-datepicker-week-col'>"+this._get(e,"weekHeader")+"</th>":"",x=0;7>x;x++)C=(x+u)%7,M+="<th scope='col'"+((x+u+6)%7>=5?" class='ui-datepicker-week-end'":"")+">"+"<span title='"+c[C]+"'>"+p[C]+"</span></th>";for(N+=M+"</tr></thead><tbody>",A=this._getDaysInMonth(et,Z),et===e.selectedYear&&Z===e.selectedMonth&&(e.selectedDay=Math.min(e.selectedDay,A)),P=(this._getFirstDayOfMonth(et,Z)-u+7)%7,I=Math.ceil((P+A)/7),H=G?this.maxRows>I?this.maxRows:I:I,this.maxRows=H,z=this._daylightSavingAdjust(new Date(et,Z,1-P)),F=0;H>F;F++){for(N+="<tr>",E=d?"<td class='ui-datepicker-week-col'>"+this._get(e,"calculateWeek")(z)+"</td>":"",x=0;7>x;x++)W=g?g.apply(e.input?e.input[0]:null,[z]):[!0,""],O=z.getMonth()!==Z,L=O&&!y||!W[0]||Q&&Q>z||$&&z>$,E+="<td class='"+((x+u+6)%7>=5?" ui-datepicker-week-end":"")+(O?" ui-datepicker-other-month":"")+(z.getTime()===D.getTime()&&Z===e.selectedMonth&&e._keyEvent||b.getTime()===z.getTime()&&b.getTime()===D.getTime()?" "+this._dayOverClass:"")+(L?" "+this._unselectableClass+" ui-state-disabled":"")+(O&&!v?"":" "+W[1]+(z.getTime()===X.getTime()?" "+this._currentClass:"")+(z.getTime()===R.getTime()?" ui-datepicker-today":""))+"'"+(O&&!v||!W[2]?"":" title='"+W[2].replace(/'/g,"&#39;")+"'")+(L?"":" data-handler='selectDay' data-event='click' data-month='"+z.getMonth()+"' data-year='"+z.getFullYear()+"'")+">"+(O&&!v?"&#xa0;":L?"<span class='ui-state-default'>"+z.getDate()+"</span>":"<a class='ui-state-default"+(z.getTime()===R.getTime()?" ui-state-highlight":"")+(z.getTime()===X.getTime()?" ui-state-active":"")+(O?" ui-priority-secondary":"")+"' href='#'>"+z.getDate()+"</a>")+"</td>",z.setDate(z.getDate()+1),z=this._daylightSavingAdjust(z);N+=E+"</tr>"}Z++,Z>11&&(Z=0,et++),N+="</tbody></table>"+(G?"</div>"+(V[0]>0&&T===V[1]-1?"<div class='ui-datepicker-row-break'></div>":""):""),k+=N}_+=k}return _+=l,e._keyEvent=!1,_},_generateMonthYearHeader:function(e,t,i,s,n,a,o,r){var h,l,u,d,c,p,f,m,g=this._get(e,"changeMonth"),v=this._get(e,"changeYear"),y=this._get(e,"showMonthAfterYear"),b="<div class='ui-datepicker-title'>",_="";if(a||!g)_+="<span class='ui-datepicker-month'>"+o[t]+"</span>";else{for(h=s&&s.getFullYear()===i,l=n&&n.getFullYear()===i,_+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",u=0;12>u;u++)(!h||u>=s.getMonth())&&(!l||n.getMonth()>=u)&&(_+="<option value='"+u+"'"+(u===t?" selected='selected'":"")+">"+r[u]+"</option>");_+="</select>"}if(y||(b+=_+(!a&&g&&v?"":"&#xa0;")),!e.yearshtml)if(e.yearshtml="",a||!v)b+="<span class='ui-datepicker-year'>"+i+"</span>";else{for(d=this._get(e,"yearRange").split(":"),c=(new Date).getFullYear(),p=function(e){var t=e.match(/c[+\-].*/)?i+parseInt(e.substring(1),10):e.match(/[+\-].*/)?c+parseInt(e,10):parseInt(e,10);return isNaN(t)?c:t},f=p(d[0]),m=Math.max(f,p(d[1]||"")),f=s?Math.max(f,s.getFullYear()):f,m=n?Math.min(m,n.getFullYear()):m,e.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";m>=f;f++)e.yearshtml+="<option value='"+f+"'"+(f===i?" selected='selected'":"")+">"+f+"</option>";e.yearshtml+="</select>",b+=e.yearshtml,e.yearshtml=null}return b+=this._get(e,"yearSuffix"),y&&(b+=(!a&&g&&v?"":"&#xa0;")+_),b+="</div>"},_adjustInstDate:function(e,t,i){var s=e.drawYear+("Y"===i?t:0),n=e.drawMonth+("M"===i?t:0),a=Math.min(e.selectedDay,this._getDaysInMonth(s,n))+("D"===i?t:0),o=this._restrictMinMax(e,this._daylightSavingAdjust(new Date(s,n,a)));e.selectedDay=o.getDate(),e.drawMonth=e.selectedMonth=o.getMonth(),e.drawYear=e.selectedYear=o.getFullYear(),("M"===i||"Y"===i)&&this._notifyChange(e)},_restrictMinMax:function(e,t){var i=this._getMinMaxDate(e,"min"),s=this._getMinMaxDate(e,"max"),n=i&&i>t?i:t;return s&&n>s?s:n},_notifyChange:function(e){var t=this._get(e,"onChangeMonthYear");t&&t.apply(e.input?e.input[0]:null,[e.selectedYear,e.selectedMonth+1,e])},_getNumberOfMonths:function(e){var t=this._get(e,"numberOfMonths");return null==t?[1,1]:"number"==typeof t?[1,t]:t},_getMinMaxDate:function(e,t){return this._determineDate(e,this._get(e,t+"Date"),null)},_getDaysInMonth:function(e,t){return 32-this._daylightSavingAdjust(new Date(e,t,32)).getDate()},_getFirstDayOfMonth:function(e,t){return new Date(e,t,1).getDay()},_canAdjustMonth:function(e,t,i,s){var n=this._getNumberOfMonths(e),a=this._daylightSavingAdjust(new Date(i,s+(0>t?t:n[0]*n[1]),1));return 0>t&&a.setDate(this._getDaysInMonth(a.getFullYear(),a.getMonth())),this._isInRange(e,a)},_isInRange:function(e,t){var i,s,n=this._getMinMaxDate(e,"min"),a=this._getMinMaxDate(e,"max"),o=null,r=null,h=this._get(e,"yearRange");return h&&(i=h.split(":"),s=(new Date).getFullYear(),o=parseInt(i[0],10),r=parseInt(i[1],10),i[0].match(/[+\-].*/)&&(o+=s),i[1].match(/[+\-].*/)&&(r+=s)),(!n||t.getTime()>=n.getTime())&&(!a||t.getTime()<=a.getTime())&&(!o||t.getFullYear()>=o)&&(!r||r>=t.getFullYear())},_getFormatConfig:function(e){var t=this._get(e,"shortYearCutoff");return t="string"!=typeof t?t:(new Date).getFullYear()%100+parseInt(t,10),{shortYearCutoff:t,dayNamesShort:this._get(e,"dayNamesShort"),dayNames:this._get(e,"dayNames"),monthNamesShort:this._get(e,"monthNamesShort"),monthNames:this._get(e,"monthNames")}},_formatDate:function(e,t,i,s){t||(e.currentDay=e.selectedDay,e.currentMonth=e.selectedMonth,e.currentYear=e.selectedYear);var n=t?"object"==typeof t?t:this._daylightSavingAdjust(new Date(s,i,t)):this._daylightSavingAdjust(new Date(e.currentYear,e.currentMonth,e.currentDay));return this.formatDate(this._get(e,"dateFormat"),n,this._getFormatConfig(e))}}),e.fn.datepicker=function(t){if(!this.length)return this;e.datepicker.initialized||(e(document).mousedown(e.datepicker._checkExternalClick),e.datepicker.initialized=!0),0===e("#"+e.datepicker._mainDivId).length&&e("body").append(e.datepicker.dpDiv);var i=Array.prototype.slice.call(arguments,1);return"string"!=typeof t||"isDisabled"!==t&&"getDate"!==t&&"widget"!==t?"option"===t&&2===arguments.length&&"string"==typeof arguments[1]?e.datepicker["_"+t+"Datepicker"].apply(e.datepicker,[this[0]].concat(i)):this.each(function(){"string"==typeof t?e.datepicker["_"+t+"Datepicker"].apply(e.datepicker,[this].concat(i)):e.datepicker._attachDatepicker(this,t)}):e.datepicker["_"+t+"Datepicker"].apply(e.datepicker,[this[0]].concat(i))},e.datepicker=new n,e.datepicker.initialized=!1,e.datepicker.uuid=(new Date).getTime(),e.datepicker.version="1.11.4",e.datepicker});

/*!
Chosen, a Select Box Enhancer for jQuery and Prototype
by Patrick Filler for Harvest, http://getharvest.com

Version 1.4.1
Full source at https://github.com/harvesthq/chosen
Copyright (c) 2011-2015 Harvest http://getharvest.com

MIT License, https://github.com/harvesthq/chosen/blob/master/LICENSE.md
This file is generated by `grunt build`, do not edit it by hand.
*/

(function() {
  var $, AbstractChosen, Chosen, SelectParser, _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  SelectParser = (function() {
    function SelectParser() {
      this.options_index = 0;
      this.parsed = [];
    }

    SelectParser.prototype.add_node = function(child) {
      if (child.nodeName.toUpperCase() === "OPTGROUP") {
        return this.add_group(child);
      } else {
        return this.add_option(child);
      }
    };

    SelectParser.prototype.add_group = function(group) {
      var group_position, option, _i, _len, _ref, _results;
      group_position = this.parsed.length;
      this.parsed.push({
        array_index: group_position,
        group: true,
        label: this.escapeExpression(group.label),
        title: group.title ? group.title : void 0,
        children: 0,
        disabled: group.disabled,
        classes: group.className
      });
      _ref = group.childNodes;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        option = _ref[_i];
        _results.push(this.add_option(option, group_position, group.disabled));
      }
      return _results;
    };

    SelectParser.prototype.add_option = function(option, group_position, group_disabled) {
		
      if (option.nodeName.toUpperCase() === "OPTION") {
        if (option.text !== "") {
			
          if (group_position != null) {
            this.parsed[group_position].children += 1;
          }
          this.parsed.push({
            array_index: this.parsed.length,
            options_index: this.options_index,
            value: option.value,
            text: option.text,
			image: $(option).attr('dataIcon'),
            html: option.innerHTML,
            title: option.title ? option.title : void 0,
            selected: option.selected,
            disabled: group_disabled === true ? group_disabled : option.disabled,
            group_array_index: group_position,
            group_label: group_position != null ? this.parsed[group_position].label : null,
            classes: option.className,
            style: option.style.cssText
			
          });
        } else {
			
          this.parsed.push({
			  
            array_index: this.parsed.length,
            options_index: this.options_index,
            empty: true
          });
        }
		
        return this.options_index += 1;
      }
    };

    SelectParser.prototype.escapeExpression = function(text) {
      var map, unsafe_chars;
      if ((text == null) || text === false) {
        return "";
      }
      if (!/[\&\<\>\"\'\`]/.test(text)) {
        return text;
      }
      map = {
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "`": "&#x60;"
      };
      unsafe_chars = /&(?!\w+;)|[\<\>\"\'\`]/g;
      return text.replace(unsafe_chars, function(chr) {
        return map[chr] || "&amp;";
      });
    };

    return SelectParser;

  })();

  SelectParser.select_to_array = function(select) {
    var child, parser, _i, _len, _ref;
    parser = new SelectParser();
    _ref = select.childNodes;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      child = _ref[_i];
      parser.add_node(child);
    }
    return parser.parsed;
  };

  AbstractChosen = (function() {
    function AbstractChosen(form_field, options) {
      this.form_field = form_field;
      this.options = options != null ? options : {};
      if (!AbstractChosen.browser_is_supported()) {
        return;
      }
      this.is_multiple = this.form_field.multiple;
      this.set_default_text();
      this.set_default_values();
      this.setup();
      this.set_up_html();
      this.register_observers();
      this.on_ready();
    }

    AbstractChosen.prototype.set_default_values = function() {
      var _this = this;
      this.click_test_action = function(evt) {
        return _this.test_active_click(evt);
      };
      this.activate_action = function(evt) {
        return _this.activate_field(evt);
      };
      this.active_field = false;
      this.mouse_on_container = false;
      this.results_showing = false;
      this.result_highlighted = null;
      this.allow_single_deselect = (this.options.allow_single_deselect != null) && (this.form_field.options[0] != null) && this.form_field.options[0].text === "" ? this.options.allow_single_deselect : false;
      this.disable_search_threshold = this.options.disable_search_threshold || 0;
      this.disable_search = this.options.disable_search || false;
      this.enable_split_word_search = this.options.enable_split_word_search != null ? this.options.enable_split_word_search : true;
      this.group_search = this.options.group_search != null ? this.options.group_search : true;
      this.search_contains = this.options.search_contains || false;
      this.single_backstroke_delete = this.options.single_backstroke_delete != null ? this.options.single_backstroke_delete : true;
      this.max_selected_options = this.options.max_selected_options || Infinity;
      this.inherit_select_classes = this.options.inherit_select_classes || false;
      this.display_selected_options = this.options.display_selected_options != null ? this.options.display_selected_options : true;
      this.display_disabled_options = this.options.display_disabled_options != null ? this.options.display_disabled_options : true;
      return this.include_group_label_in_selected = this.options.include_group_label_in_selected || false;
    };

    AbstractChosen.prototype.set_default_text = function() {
      if (this.form_field.getAttribute("data-placeholder")) {
        this.default_text = this.form_field.getAttribute("data-placeholder");
      } else if (this.is_multiple) {
        this.default_text = this.options.placeholder_text_multiple || this.options.placeholder_text || AbstractChosen.default_multiple_text;		
      } else {
        this.default_text = this.options.placeholder_text_single || this.options.placeholder_text || AbstractChosen.default_single_text;
      }
      return this.results_none_found = this.form_field.getAttribute("data-no_results_text") || this.options.no_results_text || AbstractChosen.default_no_result_text;
    };
    AbstractChosen.prototype.choice_label = function(item) {
      if (this.include_group_label_in_selected && (item.group_label != null)) {
        return "<b class='group-name'>" + item.group_label + "</b>" + item.html;
      } else {
        return item.html;
      }
    };
    AbstractChosen.prototype.mouse_enter = function() {
      return this.mouse_on_container = true;
    };
    AbstractChosen.prototype.mouse_leave = function() {
      return this.mouse_on_container = false;
    };
    AbstractChosen.prototype.input_focus = function(evt) {
      var _this = this;
      if (this.is_multiple) {
        if (!this.active_field) {
          return setTimeout((function() {
            return _this.container_mousedown();
          }), 50);
        }
      } else {
        if (!this.active_field) {
          return this.activate_field();
        }
      }
    };
    AbstractChosen.prototype.input_blur = function(evt) {
      var _this = this;
      if (!this.mouse_on_container) {
        this.active_field = false;
        return setTimeout((function() {
          return _this.blur_test();
        }), 100);
      }
    };
    AbstractChosen.prototype.results_option_build = function(options) {
      var content, data, _i, _len, _ref;
      content = '';
      _ref = this.results_data;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        data = _ref[_i];
        if (data.group) {
          content += this.result_add_group(data);
        } else {
          content += this.result_add_option(data);
        }
        if (options != null ? options.first : void 0) {
          if (data.selected && this.is_multiple) {
            this.choice_build(data);
          } else if (data.selected && !this.is_multiple) {
            this.single_set_selected_text(this.choice_label(data));
          }
        }
      }
      return content;
    };
    AbstractChosen.prototype.result_add_option = function(option) {
      var classes, option_el;
      if (!option.search_match) {
        return '';		
      }
      if (!this.include_option_in_results(option)) {
        return '';
      }
      classes = [];
      if (!option.disabled && !(option.selected && this.is_multiple)) {
        classes.push("active-result");
      }
      if (option.disabled && !(option.selected && this.is_multiple)) {
        classes.push("disabled-result");
      }
	  if (option.value == "AddNewGTag") {
        classes.push("active-result");   
	  }
      if (option.selected) {
        classes.push("result-selected");   
	  }	  
      if (option.group_array_index != null) {
        classes.push("group-option");
      }
      if (option.classes !== "") {
        classes.push(option.classes);
      }
      option_el = document.createElement("li");
      option_el.className = classes.join(" ");
      option_el.style.cssText = option.style;
      option_el.setAttribute("data-option-array-index", option.array_index);
	 	
	//console.log($(this).closest('select').html())
	  if (option.image !== "") {
		option_el.innerHTML = '<i class="'+option.image+'"></i>'+option.search_text
      } else {
	  option_el.innerHTML = option.search_text;
	  }
	  if (option.image == null) {
		  option_el.innerHTML = option.search_text;
	  }
      if (option.title) {
        option_el.title = option.title;
      }
      return this.outerHTML(option_el);
    };

    AbstractChosen.prototype.result_add_group = function(group) {
      var classes, group_el;
      if (!(group.search_match || group.group_match)) {
        return '';
      }
      if (!(group.active_options > 0)) {
        return '';
      }
      classes = [];
      classes.push("group-result");
      if (group.classes) {
        classes.push(group.classes);
      }
      group_el = document.createElement("li");
      group_el.className = classes.join(" ");
      group_el.innerHTML = group.search_text;
      if (group.title) {
        group_el.title = group.title;
      }
      return this.outerHTML(group_el);
    };

    AbstractChosen.prototype.results_update_field = function() {
      this.set_default_text();
      if (!this.is_multiple) {
        this.results_reset_cleanup();
      }
      this.result_clear_highlight();
      this.results_build();
      if (this.results_showing) {
        return this.winnow_results();
      }
    };
    AbstractChosen.prototype.reset_single_select_options = function() {
      var result, _i, _len, _ref, _results;
      _ref = this.results_data;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        result = _ref[_i];
        if (result.selected) {
          _results.push(result.selected = false);
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    };
    AbstractChosen.prototype.results_toggle = function() {
      if (this.results_showing) {
        return this.results_hide();
      } else {
        return this.results_show();
      }
    };
    AbstractChosen.prototype.results_search = function(evt) {
      if (this.results_showing) {
        return this.winnow_results();
      } else {
        return this.results_show();
      }
    };
    AbstractChosen.prototype.winnow_results = function() {
      var escapedSearchText, option, regex, results, results_group, searchText, startpos, text, zregex, _i, _len, _ref;
      this.no_results_clear();
      results = 0;
      searchText = this.get_search_text();
      escapedSearchText = searchText.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
      zregex = new RegExp(escapedSearchText, 'i');
      regex = this.get_search_regex(escapedSearchText);
      _ref = this.results_data;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        option = _ref[_i];
        option.search_match = false;
        results_group = null;
        if (this.include_option_in_results(option)) {
          if (option.group) {
            option.group_match = false;
            option.active_options = 0;
          }
          if ((option.group_array_index != null) && this.results_data[option.group_array_index]) {
            results_group = this.results_data[option.group_array_index];
            if (results_group.active_options === 0 && results_group.search_match) {
              results += 1;
            }
            results_group.active_options += 1;
          }
          option.search_text = option.group ? option.label : option.html;
          if (!(option.group && !this.group_search)) {
            option.search_match = this.search_string_match(option.search_text, regex);
            if (option.search_match && !option.group) {
              results += 1;
            }
            if (option.search_match) {
              if (searchText.length) {
                startpos = option.search_text.search(zregex);
                text = option.search_text.substr(0, startpos + searchText.length) + '</em>' + option.search_text.substr(startpos + searchText.length);
                option.search_text = text.substr(0, startpos) + '<em>' + text.substr(startpos);
              }
              if (results_group != null) {
                results_group.group_match = true;
              }
            } else if ((option.group_array_index != null) && this.results_data[option.group_array_index].search_match) {
              option.search_match = true;
            }
          }
        }
      }
     // this.result_clear_highlight();
      if (results < 1 && searchText.length) {
        this.update_results_content("");
        return this.no_results(searchText);
      } else {
        this.update_results_content(this.results_option_build());
        return this.winnow_results_set_highlight();
      }
    };

    AbstractChosen.prototype.get_search_regex = function(escaped_search_string) {
      var regex_anchor;
      regex_anchor = this.search_contains ? "" : "^";
      return new RegExp(regex_anchor + escaped_search_string, 'i');
    };

    AbstractChosen.prototype.search_string_match = function(search_string, regex) {
      var part, parts, _i, _len;
      if (regex.test(search_string)) {
        return true;
      } else if (this.enable_split_word_search && (search_string.indexOf(" ") >= 0 || search_string.indexOf("[") === 0)) {
        parts = search_string.replace(/\[|\]/g, "").split(" ");
        if (parts.length) {
          for (_i = 0, _len = parts.length; _i < _len; _i++) {
            part = parts[_i];
            if (regex.test(part)) {
              return true;
            }
          }
        }
      }
    };

    AbstractChosen.prototype.choices_count = function() {
      var option, _i, _len, _ref;
      if (this.selected_option_count != null) {
        return this.selected_option_count;
      }
      this.selected_option_count = 0;
      _ref = this.form_field.options;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        option = _ref[_i];
        if (option.selected) {
          this.selected_option_count += 1;
        }
      }
      return this.selected_option_count;
    };

    AbstractChosen.prototype.choices_click = function(evt) {
      evt.preventDefault();
      if (!(this.results_showing || this.is_disabled)) {
        return this.results_show();
      }
    };

    AbstractChosen.prototype.keyup_checker = function(evt) {
      var stroke, _ref;
      stroke = (_ref = evt.which) != null ? _ref : evt.keyCode;
      this.search_field_scale();
      switch (stroke) {
        case 8:
          if (this.is_multiple && this.backstroke_length < 1 && this.choices_count() > 0) {
            return this.keydown_backstroke();
          } else if (!this.pending_backstroke) {
            this.result_clear_highlight();
            return this.results_search();
          }
          break;
        case 13:
          evt.preventDefault();
          if (this.results_showing) {
            return this.result_select(evt);
          }
          break;
        case 27:
          if (this.results_showing) {
            this.results_hide();
          }
          return true;
        case 9:
        case 38:
        case 40:
        case 16:
        case 91:
        case 17:
          break;
        default:
          return this.results_search();
      }
    };

    AbstractChosen.prototype.clipboard_event_checker = function(evt) {
      var _this = this;
      return setTimeout((function() {
        return _this.results_search();
      }), 50);
    };

    AbstractChosen.prototype.container_width = function() {
      if (this.options.width != null) {
        return this.options.width;
      } else {
        return "" + this.form_field.offsetWidth + "px";
      }
    };

    AbstractChosen.prototype.include_option_in_results = function(option) {
      if (this.is_multiple && (!this.display_selected_options && option.selected)) {
        return false;
      }
      if (!this.display_disabled_options && option.disabled) {
        return false;
      }
      if (option.empty) {
        return false;
      }
      return true;
    };

    AbstractChosen.prototype.search_results_touchstart = function(evt) {
      this.touch_started = true;
      return this.search_results_mouseover(evt);
    };

    AbstractChosen.prototype.search_results_touchmove = function(evt) {
      this.touch_started = false;
      return this.search_results_mouseout(evt);
    };

    AbstractChosen.prototype.search_results_touchend = function(evt) {
      if (this.touch_started) {
        return this.search_results_mouseup(evt);
      }
    };

    AbstractChosen.prototype.outerHTML = function(element) {
      var tmp;
      if (element.outerHTML) {
        return element.outerHTML;
      }
      tmp = document.createElement("div");
      tmp.appendChild(element);
      return tmp.innerHTML;
    };

    AbstractChosen.browser_is_supported = function() {
      if (window.navigator.appName === "Microsoft Internet Explorer") {
        return document.documentMode >= 8;
      }
      if (/iP(od|hone)|ipad/i.test(window.navigator.userAgent)) {
        return false;
      }
	  /*if (/iphone|ipod|ipad/.i.test( userAgent )) {
          return false;
        }*/
      if (/Android/i.test(window.navigator.userAgent)) {
        if (/Mobile/i.test(window.navigator.userAgent)) {
          return false;
        }
      }
      return true;
    };

    AbstractChosen.default_multiple_text = "Select Some Options";

    AbstractChosen.default_single_text = "Select a value";

    AbstractChosen.default_no_result_text = "No results match";

    return AbstractChosen;

  })();

  $ = jQuery;

  $.fn.extend({
    chosen: function(options) {
      if (!AbstractChosen.browser_is_supported()) {
        return this;
      }
      return this.each(function(input_field) {
        var $this, chosen;
        $this = $(this);
        chosen = $this.data('chosen');
        if (options === 'destroy' && chosen instanceof Chosen) {
          chosen.destroy();
        } else if (!(chosen instanceof Chosen)) {
          $this.data('chosen', new Chosen(this, options));
        }
      });
    }
  });

  Chosen = (function(_super) {
    __extends(Chosen, _super);

    function Chosen() {
      _ref = Chosen.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Chosen.prototype.setup = function() {
      this.form_field_jq = $(this.form_field);
      this.current_selectedIndex = this.form_field.selectedIndex;
      return this.is_rtl = this.form_field_jq.hasClass("chosen-rtl");
    };

    Chosen.prototype.set_up_html = function() {
      var container_classes, container_props;
      container_classes = ["chosen-container"];
      container_classes.push("chosen-container-" + (this.is_multiple ? "multi" : "single"));
	  
      if (this.inherit_select_classes && this.form_field.className) {
        container_classes.push(this.form_field.className);
      }
      if (this.is_rtl) {
        container_classes.push("chosen-rtl");
      }
      container_props = {
        'class': container_classes.join(' '),
        'style': "width: " + (this.container_width()) + ";",
        'title': this.form_field.title
      };
      if (this.form_field.id.length) {
        container_props.id = this.form_field.id.replace(/[^\w]/g, '_') + "_w4r";
      }
      this.container = $("<div />", container_props);
      if (this.is_multiple) {
        this.container.html('<ul class="chosen-choices"><span class="d"><i class="ico-down-arrow1 ico-xsmall"></i></span><li class="search-field"><input type="text" value="' + this.default_text + '" class="default" autocomplete="off" style="width:25px;" /></li></ul><div class="chosen-drop" id="'+this.form_field.getAttribute('id')+'"><ul class="chosen-results"></ul></div>');
      } else {
        this.container.html('<a class="chosen-single chosen-default" tabindex="-1"><span class="a">' + this.default_text + '</span><span class="d"><i class="ico-down-arrow1 ico-xsmall"></i></span></a><div class="chosen-drop"><div class="chosen-search"><input type="text" autocomplete="off" /></div><ul class="chosen-results"></ul></div>');
      }
      this.form_field_jq.addClass('w4r-fs-chosen').hide().after(this.container);
		$('body').addClass('w4r-fs-chosen-applied')
	 if($(this.form_field_jq).hasClass('_selectType')){
		 $(this.form_field_jq).parents('.Scity').addClass('w4r-fs-chosen-scity');
		 setTimeout(function(){
		 	$('.w4rfs_selectType').remove();
		 },0);
	 }
      this.dropdown = this.container.find('div.chosen-drop').first();
      this.search_field = this.container.find('input').first();
      this.search_results = this.container.find('ul.chosen-results').first();
      this.search_field_scale();
      this.search_no_results = this.container.find('li.no-results').first();
      if (this.is_multiple) {
        this.search_choices = this.container.find('ul.chosen-choices').first();
        this.search_container = this.container.find('li.search-field').first();
      } else {
        this.search_container = this.container.find('div.chosen-search').first();
        this.selected_item = this.container.find('.chosen-single').first();
      }
      this.results_build();
      this.set_tab_index();
      return this.set_label_behavior();	  
	  
    };

    Chosen.prototype.on_ready = function() {
      return this.form_field_jq.trigger("chosen:ready", {
        chosen: this
		
      });
    };

    Chosen.prototype.register_observers = function() {
      var _this = this;
      this.container.bind('touchstart.chosen', function(evt) {
        _this.container_mousedown(evt);
        //return evt.preventDefault();
      });
      this.container.bind('touchend.chosen', function(evt) {
        _this.container_mouseup(evt);
        //return evt.preventDefault();
      });
      this.container.bind('mousedown.chosen', function(evt) {
        _this.container_mousedown(evt);
      });
      this.container.bind('mouseup.chosen', function(evt) {
        _this.container_mouseup(evt);
      });
      this.container.bind('mouseenter.chosen', function(evt) {
        _this.mouse_enter(evt);
      });
      this.container.bind('mouseleave.chosen', function(evt) {
        _this.mouse_leave(evt);
      });
      this.search_results.bind('mouseup.chosen', function(evt) {
        _this.search_results_mouseup(evt);
      });
      this.search_results.bind('mouseover.chosen', function(evt) {
        _this.search_results_mouseover(evt);
      });
      this.search_results.bind('mouseout.chosen', function(evt) {
        _this.search_results_mouseout(evt);
      });
      this.search_results.bind('mousewheel.chosen DOMMouseScroll.chosen', function(evt) {
        _this.search_results_mousewheel(evt);
      });
      this.search_results.bind('touchstart.chosen', function(evt) {
        _this.search_results_touchstart(evt);
      });
      this.search_results.bind('touchmove.chosen', function(evt) {
        _this.search_results_touchmove(evt);
      });
      this.search_results.bind('touchend.chosen', function(evt) {
        _this.search_results_touchend(evt);
      });
      this.form_field_jq.bind("chosen:updated.chosen", function(evt) {
        _this.results_update_field(evt);
      });
      this.form_field_jq.bind("chosen:activate.chosen", function(evt) {
        _this.activate_field(evt);
      });
      this.form_field_jq.bind("chosen:open.chosen", function(evt) {
        _this.container_mousedown(evt);
      });
      this.form_field_jq.bind("chosen:close.chosen", function(evt) {
        _this.input_blur(evt);
      });
      this.search_field.bind('blur.chosen', function(evt) {
        _this.input_blur(evt);
      });
      this.search_field.bind('keyup.chosen', function(evt) {
        _this.keyup_checker(evt);
      });
      this.search_field.bind('keydown.chosen', function(evt) {
        _this.keydown_checker(evt);
      });
      this.search_field.bind('focus.chosen', function(evt) {
        _this.input_focus(evt);
      });
      this.search_field.bind('cut.chosen', function(evt) {
        _this.clipboard_event_checker(evt);
      });
      this.search_field.bind('paste.chosen', function(evt) {
        _this.clipboard_event_checker(evt);
      });
      if (this.is_multiple) {
        return this.search_choices.bind('click.chosen', function(evt) {
          _this.choices_click(evt);
        });
      } else {
        return this.container.bind('click.chosen', function(evt) {
         evt.preventDefault();
        });
      }
    };

    Chosen.prototype.destroy = function() {
      $(this.container[0].ownerDocument).unbind("click.chosen", this.click_test_action);
      if (this.search_field[0].tabIndex) {
        this.form_field_jq[0].tabIndex = this.search_field[0].tabIndex;
      }
      this.container.remove();
      this.form_field_jq.removeData('chosen');
      return this.form_field_jq.show();
    };

    Chosen.prototype.search_field_disabled = function() {
      this.is_disabled = this.form_field_jq[0].disabled;
      if (this.is_disabled) {
        this.container.addClass('chosen-disabled');
        this.search_field[0].disabled = true;
        if (!this.is_multiple) {
          this.selected_item.unbind("focus.chosen", this.activate_action);
        }
        return this.close_field();
      } else {
        this.container.removeClass('chosen-disabled');
        this.search_field[0].disabled = false;
        if (!this.is_multiple) {
          return this.selected_item.bind("focus.chosen", this.activate_action);
        }
      }
    };

    Chosen.prototype.container_mousedown = function(evt) {
      if (!this.is_disabled) {
        if (evt && evt.type === "mousedown" && !this.results_showing) {
          evt.preventDefault();
        }
        if (!((evt != null) && ($(evt.target)).hasClass("search-choice-close"))) {
          if (!this.active_field) {
            if (this.is_multiple) {
              this.search_field.val("");
            }
            $(this.container[0].ownerDocument).bind('click.chosen', this.click_test_action);
            this.results_show();
          } else if (!this.is_multiple && evt && (($(evt.target)[0] === this.selected_item[0]) || $(evt.target).parents("a.chosen-single").length)) {
            evt.preventDefault();
            this.results_toggle();
          }
          return this.activate_field();
        }
      }
    };

    Chosen.prototype.container_mouseup = function(evt) {
      if (evt.target.nodeName === "ABBR" && !this.is_disabled) {
        return this.results_reset(evt);

      }
    };

    Chosen.prototype.search_results_mousewheel = function(evt) {
      var delta;
      if (evt.originalEvent) {
        delta = evt.originalEvent.deltaY || -evt.originalEvent.wheelDelta || evt.originalEvent.detail;
      }
      if (delta != null) {
        evt.preventDefault();
        if (evt.type === 'DOMMouseScroll') {
          delta = delta * 40;
        }
        return this.search_results.scrollTop(delta + this.search_results.scrollTop());
      }
    };

    Chosen.prototype.blur_test = function(evt) {
      if (!this.active_field && this.container.hasClass("chosen-container-active")) {
        return this.close_field();
      }
    };

    Chosen.prototype.close_field = function() {
      $(this.container[0].ownerDocument).unbind("click.chosen", this.click_test_action);
      this.active_field = false;
      this.results_hide();
      this.container.removeClass("chosen-container-active");
      this.clear_backstroke();
      this.show_search_field_default();
      return this.search_field_scale();
    };

    Chosen.prototype.activate_field = function() {
      this.container.addClass("chosen-container-active");
      this.active_field = true;
      this.search_field.val(this.search_field.val());
      return this.search_field.focus();
    };

    Chosen.prototype.test_active_click = function(evt) {
      var active_container;
      active_container = $(evt.target).closest('.chosen-container');
      if (active_container.length && this.container[0] === active_container[0]) {
        return this.active_field = true;
      } else {
        return this.close_field();
      }
    };

    Chosen.prototype.results_build = function() {
      this.parsing = true;
      this.selected_option_count = null;
      this.results_data = SelectParser.select_to_array(this.form_field);
      if (this.is_multiple) {
        this.search_choices.find("li.search-choice").remove();
      } else if (!this.is_multiple) {
        if (this.disable_search || this.form_field.options.length <= this.disable_search_threshold) {
          this.search_field[0].readOnly = true;
          this.container.addClass("chosen-container-single-nosearch");
        } else {
          this.search_field[0].readOnly = false;
          this.container.removeClass("chosen-container-single-nosearch");
        }
      }
      this.update_results_content(this.results_option_build({
        first: true
		
      }));
	 
	  
      this.search_field_disabled();
      this.show_search_field_default();
      this.search_field_scale();
      return this.parsing = false;
    };

    Chosen.prototype.result_do_highlight = function(el) {
      var high_bottom, high_top, maxHeight, visible_bottom, visible_top;
      if (el.length) {
        this.result_clear_highlight();
        this.result_highlight = el;
        this.result_highlight.addClass("highlighted");
        maxHeight = parseInt(this.search_results.css("maxHeight"), 10);
        visible_top = this.search_results.scrollTop();
        visible_bottom = maxHeight + visible_top;
        high_top = this.result_highlight.position().top + this.search_results.scrollTop();
        high_bottom = high_top + this.result_highlight.outerHeight();
        if (high_bottom >= visible_bottom) {
          return this.search_results.scrollTop((high_bottom - maxHeight) > 0 ? high_bottom - maxHeight : 0);
        } else if (high_top < visible_top) {
          return this.search_results.scrollTop(high_top);
        }
      }
    };

    Chosen.prototype.result_clear_highlight = function() {
      if (this.result_highlight) {
        this.result_highlight.removeClass("highlighted");
      }
      return this.result_highlight = null;
    };

    Chosen.prototype.results_show = function() {
      if (this.is_multiple && this.max_selected_options <= this.choices_count()) {
        this.form_field_jq.trigger("chosen:maxselected", {
          chosen: this
        });
        return false;
      }
      this.container.addClass("chosen-with-drop");
      this.results_showing = true;
      this.search_field.focus();	  
      this.search_field.val(this.search_field.val());
      this.winnow_results();
      return this.form_field_jq.trigger("chosen:showing_dropdown", {
        chosen: this
      });
    };

    Chosen.prototype.update_results_content = function(content) {
      return this.search_results.html(content);
    };

    Chosen.prototype.results_hide = function() {
      if (this.results_showing) {
        this.result_clear_highlight();
        this.container.removeClass("chosen-with-drop");
        this.form_field_jq.trigger("chosen:hiding_dropdown", {
          chosen: this
        });
      }
      return this.results_showing = false;
    };

    Chosen.prototype.set_tab_index = function(el) {
      var ti;
      if (this.form_field.tabIndex) {
        ti = this.form_field.tabIndex;
        this.form_field.tabIndex = -1;
        return this.search_field[0].tabIndex = ti;
      }
    };

    Chosen.prototype.set_label_behavior = function() {
      var _this = this;
      this.form_field_label = this.form_field_jq.parents("label");
      if (!this.form_field_label.length && this.form_field.id.length) {
        this.form_field_label = $("label[for='" + this.form_field.id + "']");
      }
      if (this.form_field_label.length > 0) {
        return this.form_field_label.bind('click.chosen', function(evt) {
          if (_this.is_multiple) {
            return _this.container_mousedown(evt);
          } else {
            return _this.activate_field();
          }
        });
      }
    };

    Chosen.prototype.show_search_field_default = function() {
      if (this.is_multiple && this.choices_count() < 1 && !this.active_field) {
        this.search_field.val(this.default_text);
        return this.search_field.addClass("default");
      } else {
        this.search_field.val("");
        return this.search_field.removeClass("default");
      }
    };

    Chosen.prototype.search_results_mouseup = function(evt) {
      var target;
      target = $(evt.target).hasClass("active-result") ? $(evt.target) : $(evt.target).parents(".active-result").first();
      if (target.length) {
        this.result_highlight = target;
        this.result_select(evt);
        return this.search_field.focus();
      }
    };

    Chosen.prototype.search_results_mouseover = function(evt) {
      var target;
      target = $(evt.target).hasClass("active-result") ? $(evt.target) : $(evt.target).parents(".active-result").first();
      if (target) {
        return this.result_do_highlight(target);
      }
    };

    Chosen.prototype.search_results_mouseout = function(evt) {
      if ($(evt.target).hasClass("active-result" || $(evt.target).parents('.active-result').first())) {
        return this.result_clear_highlight();
      }
    };

    Chosen.prototype.choice_build = function(item) {
		
      var choice, close_link,
        _this = this;
	if(item.value != 'AddNewGTag'){		
      choice = $('<li />', {
        "class": "search-choice"
      }).html("<span>" + (this.choice_label(item)) + "</span>");
      if (item.disabled) {
        choice.addClass('search-choice-disabled');
      } else {
        close_link = $('<i />', {
          "class": 'search-choice-close',
          'data-option-array-index': item.array_index
        });
        close_link.bind('click.chosen', function(evt) {
          return _this.choice_destroy_link_click(evt);
        });
        choice.append(close_link);
      }
      return this.search_container.before(choice);
	  
	}
	  
    };

    Chosen.prototype.choice_destroy_link_click = function(evt) {
      evt.preventDefault();
      evt.stopPropagation();
      if (!this.is_disabled) {
        return this.choice_destroy($(evt.target));
      }
    };

    Chosen.prototype.choice_destroy = function(link) {
        try{
      if (this.result_deselect(link[0].getAttribute("data-option-array-index"))) {
        this.show_search_field_default();
        if (this.is_multiple && this.choices_count() > 0 && this.search_field.val().length < 1) {
          this.results_hide();
        }
        link.parents('li').first().remove();
        return this.search_field_scale();
      }
        }catch(aexceplnkcmd){}
    };

    Chosen.prototype.results_reset = function() {
      this.reset_single_select_options();
      this.form_field.options[0].selected = true;
      this.single_set_selected_text();
      this.show_search_field_default();
      this.results_reset_cleanup();
      this.form_field_jq.trigger("change");
      if (this.active_field) {
        return this.results_hide();
      }
    };

    Chosen.prototype.results_reset_cleanup = function() {
      this.current_selectedIndex = this.form_field.selectedIndex;
      return this.selected_item.find("abbr").remove();
    };

    Chosen.prototype.result_select = function(evt) {
      var high, item;
      if (this.result_highlight) {
        high = this.result_highlight;
        this.result_clear_highlight();
        if (this.is_multiple && this.max_selected_options <= this.choices_count()) {
          this.form_field_jq.trigger("chosen:maxselected", {
            chosen: this
          });
          return false;
        }
        if (this.is_multiple) {
          high.removeClass("active-result");
        } else {
          this.reset_single_select_options();
        }
        item = this.results_data[high[0].getAttribute("data-option-array-index")];
        item.selected = true;
        this.form_field.options[item.options_index].selected = true;
        this.selected_option_count = null;
        if (this.is_multiple) {
          this.choice_build(item);
        } else {
			var itemval = this.form_field.options[item.options_index].getAttribute("dataicon");
			var imgicon  ='<i class="'+itemval+'"></i>';			
			if(itemval !== null){
				//console.log('A');
				this.single_set_selected_text(this.choice_label(item),imgicon);
			}else{
				//console.log('B');			
				this.single_set_selected_text(this.choice_label(item),'');
			}          
        }
        if (!((evt.metaKey || evt.ctrlKey) && this.is_multiple)) {
          this.results_hide();
        }
        this.search_field.val("");
        if (this.is_multiple || this.form_field.selectedIndex !== this.current_selectedIndex) {
          this.form_field_jq.trigger("change", {
            'selected': this.form_field.options[item.options_index].value
			
          });
        }
        this.current_selectedIndex = this.form_field.selectedIndex;
        evt.preventDefault();
        return this.search_field_scale();
      }
    };
	
    Chosen.prototype.single_set_selected_text = function(text,image,option) {
		var dataCaption = this.form_field.getAttribute("data-caption");
      if (text == null) {
        text = this.default_text;
      }
      if (text === this.default_text) {
        this.selected_item.addClass("chosen-default");
      } else {
        this.single_deselect_control_build();
        this.selected_item.removeClass("chosen-default");
      }
	  
	  if(dataCaption) {
		  var dcaption = dataCaption;
		  if(dataCaption == 'Bed' || dataCaption == 'Bath'){
			  console.log('text '+text)
			  if(text != '1' && text != 'Any'){
				  dcaption=dataCaption+'s'
			  }
			  return this.selected_item.find("span.a").html('<span class="chosenSmall_caption">'+dcaption+': </span>'+text);
		  }else{
			  return this.selected_item.find("span.a").html('<span class="chosenSmall_caption">'+dataCaption+':</span> '+text);
		  }
	  }else if(image) {
		  return this.selected_item.find("span.a").html(image + text);
	  }else{
		   return this.selected_item.find("span.a").html(text);
	  }
	  
	  
    };

    Chosen.prototype.result_deselect = function(pos) {
      var result_data;
      result_data = this.results_data[pos];
      if (!this.form_field.options[result_data.options_index].disabled) {
        result_data.selected = false;
        this.form_field.options[result_data.options_index].selected = false;
        this.selected_option_count = null;
        this.result_clear_highlight();
        if (this.results_showing) {
          this.winnow_results();
        }
        this.form_field_jq.trigger("change", {
          deselected: this.form_field.options[result_data.options_index].value
        });
        this.search_field_scale();
        return true;
      } else {
        return false;
      }
    };

    Chosen.prototype.single_deselect_control_build = function() {
      if (!this.allow_single_deselect) {
        return;
      }
      if (!this.selected_item.find("abbr").length) {
        this.selected_item.find("span").first().after("<abbr class=\"search-choice-close\"></abbr>");
      }
      return this.selected_item.addClass("chosen-single-with-deselect");
    };

    Chosen.prototype.get_search_text = function() {
      return $('<div/>').text($.trim(this.search_field.val())).html();
    };

    Chosen.prototype.winnow_results_set_highlight = function() {
		//console.log(this);
		
      var do_high, selected_results;
      selected_results = !this.is_multiple ? this.search_results.find(".result-selected.active-result") : [];
      do_high = selected_results.length ? selected_results.first() : this.search_results.find(".active-result").first();
      if (do_high != null) {
        return this.result_do_highlight(do_high);
      }
    };

    Chosen.prototype.no_results = function(terms,option) {
      var no_results_html;
	 
	  	no_results_html = $('<li class="no-results">' + this.results_none_found + ' "<span></span>"</li>');
	  
	  
	  
	  no_results_html.find("span").first().html(terms);
      this.search_results.append(no_results_html);
      return this.form_field_jq.trigger("chosen:no_results", {
        chosen: this
      });
    };

    Chosen.prototype.no_results_clear = function() {
      return this.search_results.find(".no-results").remove();
    };

    Chosen.prototype.keydown_arrow = function() {
      var next_sib;
      if (this.results_showing && this.result_highlight) {
        next_sib = this.result_highlight.nextAll("li.active-result").first();
        if (next_sib) {
          return this.result_do_highlight(next_sib);
        }
      } else {
        return this.results_show();
      }
    };

    Chosen.prototype.keyup_arrow = function() {
      var prev_sibs;
	  
      if (!this.results_showing && !this.is_multiple) {
        return this.results_show();
      } else if (this.result_highlight) {
        prev_sibs = this.result_highlight.prevAll("li.active-result");
        if (prev_sibs.length) {
          return this.result_do_highlight(prev_sibs.first());
        } else {
          if (this.choices_count() > 0) {
            this.results_hide();
          }
          return this.result_clear_highlight();
        }
      }
    };

    Chosen.prototype.keydown_backstroke = function() {
      var next_available_destroy;
      if (this.pending_backstroke) {
        this.choice_destroy(this.pending_backstroke.find("a").first());
        return this.clear_backstroke();
      } else {
        next_available_destroy = this.search_container.siblings("li.search-choice").last();
        if (next_available_destroy.length && !next_available_destroy.hasClass("search-choice-disabled")) {
          this.pending_backstroke = next_available_destroy;
          if (this.single_backstroke_delete) {
            return this.keydown_backstroke();
          } else {
            return this.pending_backstroke.addClass("search-choice-focus");
          }
        }
      }
    };

    Chosen.prototype.clear_backstroke = function() {
      if (this.pending_backstroke) {
        this.pending_backstroke.removeClass("search-choice-focus");
      }
      return this.pending_backstroke = null;
    };

    Chosen.prototype.keydown_checker = function(evt) {
      var stroke, _ref1;
      stroke = (_ref1 = evt.which) != null ? _ref1 : evt.keyCode;
      this.search_field_scale();
      if (stroke !== 8 && this.pending_backstroke) {
        this.clear_backstroke();
      }
      switch (stroke) {
        case 8:
          this.backstroke_length = this.search_field.val().length;
          break;
        case 9:
          if (this.results_showing && !this.is_multiple) {
            this.result_select(evt);
          }
          this.mouse_on_container = false;
          break;
        case 13:
          if (this.results_showing) {
            evt.preventDefault();
          }
          break;
        case 32:
          if (this.disable_search) {
            evt.preventDefault();
          }
          break;
        case 38:
          evt.preventDefault();
          this.keyup_arrow();
          break;
        case 40:
          evt.preventDefault();
          this.keydown_arrow();
          break;
      }
    };

    Chosen.prototype.search_field_scale = function() {
      var div, f_width, h, style, style_block, styles, w, _i, _len;
      if (this.is_multiple) {
        h = 0;
        w = 0;
        style_block = "position:absolute; left: -1000px; top: -1000px; display:none;";
        styles = ['font-size', 'font-style', 'font-weight', 'font-family', 'line-height', 'text-transform', 'letter-spacing'];
        for (_i = 0, _len = styles.length; _i < _len; _i++) {
          style = styles[_i];
          style_block += style + ":" + this.search_field.css(style) + ";";
        }
        div = $('<div />', {
          'style': style_block
        });
        div.text(this.search_field.val());
        $('body').append(div);
        w = div.width() + 25;
        div.remove();
        f_width = this.container.outerWidth();
        if (w > f_width - 10) {
          w = f_width - 10;
        }
        return this.search_field.css({
          'width': w + 'px'
        });
      }
    };

    return Chosen;

  })(AbstractChosen);

}).call(this);

$('.SelectSearch').chosen({search_contains:1});
$('.SelectSimple').chosen({disable_search_threshold:999});


/**
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 * https://www.zellerda.com/projects/jquery/tokenize
 * This software consists of voluntary contributions made by many individuals
 * and is licensed under the new BSD license.
 *
 * @author      David Zeller <me@zellerda.com>
 * @license     http://www.opensource.org/licenses/BSD-3-Clause New BSD license
 * @version     2.5.1
 */
(function($, w4rsearch){

    // Keycodes
    var KEYS = {
        BACKSPACE: 8,
        TAB: 9,
        ENTER: 13,
        ESCAPE: 27,
        ARROW_UP: 38,
        ARROW_DOWN: 40
    };

    // Debounce timeout
    var debounce_timeout = null;

    // Data storage constant
    var DATA = 'w4rsearch';
    var selectType = '';
    var loaderObj = '';
    /**
     * Get w4rsearch object
     *
     * @param {Object} options
     * @param {jQuery} el
     * @returns {$.w4rsearch}
     */
    var getObject = function(options, el){

        if(!el.data(DATA)){
            var obj = new $.w4rsearch($.extend({}, $.fn.w4rsearch.defaults, options));
            el.data(DATA, obj);
            obj.init(el);
        }

        return el.data(DATA);

    };

    /**
     * w4rsearch constructor
     *
     * @param {Object} opts
     */
    $.w4rsearch = function(opts){

        if(opts == undefined){
            opts = $.fn.w4rsearch.defaults;
        }

        this.options = opts;
    };

    $.extend($.w4rsearch.prototype, {

        /**
         * Init w4rsearch object
         *
         * @param {jQuery} el jQuery object of the select
         */
        init: function(el){

            var $this = this;
            this.select = el.attr('multiple', 'multiple').css({margin: 0, padding: 0, border: 0}).hide();
			elementid = $this.select.attr('data-id')+'_w4r'+$this.select.attr('data-map');
			//console.log(elementid);
			var placeholder = 'placeholder="'+this.options.placeholder+'"';
			var fieldsize = '';
			if($this.select.attr('data-id')=='w4raddsearch_ajax'){

					
					//console.log($(this)+"_this");
					$('.w4rsearch_').remove();
					//$('._addresssearch').find('.w4rsearch').remove();
					//$('._addresssearch').each(function(index, element) {
                      //  $('._addresssearch').find('.w4rsearch_').remove();
                   // });
					placeholder = 'placeholder="Type address here..."';
					fieldsize = '18';
			}
			
            this.container = $('<div />')
                .attr('class', this.select.attr('class'))
                .addClass('w4rsearch');

            if(this.options.maxElements == 1){
                this.container.addClass('OnlyOne');
            }

            this.dropdown = $('<ul />')
                .addClass('Dropdown');

            this.tokensContainer = $('<ul />')
                .addClass('TokensContainer');

            if(this.options.autosize){
                this.tokensContainer
                    .addClass('Autosize');
            }

            this.searchToken = $('<li />')
                .addClass('TokenSearch')
                .appendTo(this.tokensContainer);

            this.searchInput = $('<input type="search" name="'+elementid+'" id="'+elementid+'" '+placeholder+' '+fieldsize+' autocomplete="off" />')
                .appendTo(this.searchToken);

            if(this.options.searchMaxLength > 0){
                this.searchInput.attr('maxlength', this.options.searchMaxLength)
            }

            if(this.select.prop('disabled')){
                this.disable();
            }

            if(this.options.sortable){
                if (typeof $.ui != 'undefined'){
                    this.tokensContainer.sortable({
                        items: 'li.Token',
                        cursor: 'move',
                        placeholder: 'Token MovingShadow',
                        forcePlaceholderSize: true,
                        update: function(){
                            $this.updateOrder();
                        },
                        start: function(){
                            $this.searchToken.hide();
                        },
                        stop: function(){
                            $this.searchToken.show();
                        }
                    }).disableSelection();
                } else {
                    this.options.sortable = false;
                    console.log('jQuery UI is not loaded, sortable option has been disabled');
                }
            }

            this.container
                /*.append(this.tokensContainer)
                .append(this.dropdown).append('<span class="viewon-map"><a id="viewOnMap" href=""><i class="ico-pin66"></i>View on map</a></span>')
                .insertAfter(this.select);*/
				.append(this.tokensContainer)
                .append(this.dropdown)
                .insertAfter(this.select);
				if($this.select.attr('data-id')!='w4raddsearch_ajax'){
					$('<span class="viewon-map"><a id="viewOnMap" class="viewOnMap _viewOnMap" data-id="'+$this.select.attr('id')+'" data-map="'+$this.select.attr('data-map')+'" href="javascript:;"><i class="ico-pin66"></i>Select on map</a></span>').insertAfter(this.tokensContainer);
				}

            this.tokensContainer.on('click', function(e){
                e.stopImmediatePropagation();
                $this.searchInput.get(0).focus();
                $this.updatePlaceholder();
                if($this.dropdown.is(':hidden') && $this.searchInput.val() != ''){
                    $this.search();
					
                }
            });

            this.searchInput.on('blur', function(e){
                $this.tokensContainer.removeClass('Focused');
				if($('li', $this.dropdown).length){
					var fasInputval = $this.searchInput.val().toLowerCase().trim().replace(/[^a-zA-Z0-9 ]/g, "");
					var fasLival = $('li:first-child', $this.dropdown).attr('data-value').toLowerCase().trim().replace(/[^a-zA-Z0-9 ]/g, "");
					if(fasInputval == fasLival){
						var element = $('li:first-child', $this.dropdown);
                        e.preventDefault();
                        $this.tokenAdd(element.attr('data-value'), element.attr('data-text'));
					}
				}
            });
			var newflag = "";
             this.searchInput.on('focus click', function(){
				$this.tokensContainer.addClass('Focused');
				if($this.select.attr('data-id') !== 'w4raddsearch_ajax'){					
					if($this.options.displayDropdownOnFocus && $this.options.datas == 'select'){
						$this.search();
					}
				}else {
					if(newflag==""){
						/*$.getScript("https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&libraries=places", function( datas, textStatus, jqxhr ) {
							newflag = 1;
							initialize();
						});*/
					}else{
						//initialize();
					}
					//console.log('place for search address condition--- Shaam it need your attention here');
					
				}
            });
            this.searchInput.on('keydown', function(e){
                $this.resizeSearchInput();
                $this.keydown(e);
            });

            this.searchInput.on('keyup', function(e){
				//Google Street Search--------SHAM--------------\
                                selectType = $this.select.attr('data-id');
				if($this.select.attr('data-id')=='w4raddsearch_ajax'){
					var count = 1;
					$this.dropdownReset();
					
					$('#streetsearch'+$this.select.attr('data-map')).val($this.searchInput.val());
					$('#streetsearch'+$this.select.attr('data-map')).keypress();
					srtAddrArr = [];
                                        var numItems = $('.pac-container div').length;
                                        var text = "";	
                                        var longaddress = "";	
                                        var text1 = "";	
                                        var qryadd = "";	
                                        var html = "";var temp = [];	
                                        $('.pac-container div').each(function(index){
                                                text = $(this).text();
                                                textSame = $(this).text();
                                                text1 = $(this).find('.pac-item-query').text();
                                                //-----------
                                                text = $(this).text();
                                                text1 = $(this).find('.pac-item-query').text();

                                                text        = text.replace(text1, text1+" ");
                                                longaddress = text.replace(text1, text1+" ");
                                                comAdd = text;
                                                //This is for Get the Addres Name Before Comma
                                                strname = text.split(",");
                                                shrstr = "";
                                                //text = text.replace(shrstr, "<span class='w4rlisting-scheme-a'>"+searchstr+"</span>");
                                                qryadd = strname[0];
                                                html = text;
                                                var CompleteStr = qryadd+'_____'+text1+'______'+text+'______'+html;
                                                //$this.dropdownAddItem(textSame, textSame, textSame);
                                                //$this.dropdownAddItem(qryadd, text, html);
//                                              //before it was 09-12-2015 $this.dropdownAddItem(qryadd, text1, html);
                                                var address = encodeURIComponent(text);
                                                $.ajax({
                                                  type: "GET",
                                                  url: "https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&libraries=places&key=AIzaSyDgEVS1bmgtaauzCtP5ixJl5taVmeuai5I",
                                                  dataType: "json"
                                                }).success(function(data){
                                                     var statename = 'w4r';
                                                     var postal_code = 'w4r';
                                                     var country = 'USA';
                                                     //console.log(data);
                                                     var premiseStr='';
                                                     var city1='';
                                                     var sublocalityStr='';
                                                     //document.getElementById('rawdata').innerHTML = JSON.stringify(data);
                                                     var getstreet_number = '';var getroute = '';var getlocality = '';
                                                    for (var ac = 0; ac < data.results[0].address_components.length; ac++) {
                                                        var component = data.results[0].address_components[ac];
                                                        
                                                        try{
                                                        if(component.types[0]=='street_number'){
                                                            getstreet_number = component.short_name;
                                                        }}catch(strEx){}

                                                        try{
                                                        if(component.types[0]=='route'){
                                                            getroute = component.short_name;
                                                        }}catch(routeEx){}

                                                        try{
                                                        if(component.types[0]=='locality'){
                                                            getlocality = component.long_name;
                                                        }}catch(localityEx){}
                    
                                                        if(component.types[0]=='administrative_area_level_1'){
                                                            statename = component.short_name;
                                                        }
                                                        if(component.types[0]=='country'){
                                                            country = component.long_name;
                                                        }
                                                        if(component.types[0]=='postal_code'){
                                                            postal_code = component.short_name;
                                                        }
                                                        if(component.types[0]=='locality'){
                                                            city1 = component.long_name;
                                                        }
                                                        if(component.types[0]=='premise'){
                                                            premiseStr = component.long_name;
                                                        }
                                                        if(component.types[1]=='sublocality'){
                                                            sublocalityStr = component.long_name;
                                                        }
                                                    }
                                                    //NEw METHOD------------------------------------------------
                                                    //console.log(getstreet_number+' '+getroute+' '+getlocality);
                                                    var CompleteAdress = '';
                                                    if(getlocality=='' && getstreet_number!='' && getroute!=''){
                                                         CompleteAdress = getstreet_number+' '+getroute;
                                                    }else if(getlocality!='' && getstreet_number=='' && getroute==''){
                                                         CompleteAdress = getlocality;
                                                    }else{
                                                         CompleteAdress = getstreet_number+' '+getroute+', '+getlocality;
                                                    }

                                                    //----------------------------------------------------------

                                                    if(country=='US' || country=='United States'){
                                                        country='USA';
                                                    }
                                                    city                        = data.results[0].address_components[1].long_name+', ';
                                                    formatted_address           = data.results[0].formatted_address;
                                                    city                        = data.results[0].address_components[0].long_name+', ';
                                                    formatted_address = formatted_address.replace(city+",", ", ");
                                                    combineaddress = formatted_address;
                                                    //combineaddress = formatted_address+city;
                                                    removecountry = formatted_address.replace(", "+country, "");
                                                    removecountry2 = removecountry.replace(", "+statename, "");
                                                    removecountry3 = removecountry2.replace(" "+postal_code, "");

                                                    //Last work after comma
                                                  // mysearcharray[] = combineaddress;
                                                    if($.inArray(combineaddress, temp) === -1) {
                                                        try{
                                                            temp.push(combineaddress);
                                                            //console.log('__sss5460 Yonge Street');
                                                            cityStr = ', '+city1;
                                                            if(city1!=''){
                                                                if(removecountry3.indexOf(cityStr) != -1){
                                                                   //console.log(cityStr + " found");
                                                                   removecountryval = removecountry3;
                                                                   //Do Nothing...
                                                                }else{
                                                                    removecountryval = removecountry3+', '+city1;
                                                                }
                                                            }
                                                            if(premiseStr!=''){
                                                                removecountryval = removecountryval.replace(premiseStr+", ", "");
                                                            }
                                                            if(sublocalityStr!=''){
                                                                removecountryval = removecountryval.replace(", "+sublocalityStr, "");
                                                            }
                                                            $this.dropdownAddItem(CompleteAdress, removecountry3, combineaddress);
                                                        }catch(searchcnt){}
                                                     }else{
                                                        //console.log(combineaddress+" is a duplicate value");
                                                     }
                                                    //console.log(removecountry3+"__"+ combineaddress+'______'+statename);
                                                    
                                                    //console.log(numItems+'___'+count);
                                                })
                                                count++;
                                        });	
					setTimeout(function() {	
                                            if($('li', $this.dropdown).length){
                                                $('li:first', $this.dropdown).addClass('Hover');
                                                $this.dropdownShow();
                                                return true;
                                            }
                                            //$this.dropdownHide();	
					}, 500); 

				}
				//---------------------------------------------
                $this.keyup(e);
            });

            this.searchInput.on('keypress', function(e){
				
                $this.keypress(e);
				//console.log('searching')
				$('.searchLoader').remove();
                                        loaderObj = $(this).parents('.TokensContainer');
				if($('html').hasClass('userCunstom')){
					$(this).parents('.TokensContainer').append('<span class="cLoaderP a searchLoader"><div class="loader">Loading...</div></span>');
				}else{
					$(this).parents('.TokensContainer').append('<span class="tokerLoader searchLoader"><span class="loadingBar"> <div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></span></span>');
				}
					
					
				
            });

            this.searchInput.on('paste', function(){
                setTimeout(function(){ $this.resizeSearchInput(); }, 10);
                setTimeout(function(){
                    var paste_elements = $this.searchInput.val().split(',');
                    if(paste_elements.length > 1){
                        $.each(paste_elements, function(_, value){
                            $this.tokenAdd(value.trim(), '');
                        });
                    }
                }, 20);
            });

            $(document).on('click', function(event){
				$target = $( event.target );
				//console.log('----> '+$this.searchInput.val())
				//console.log('----> '+ $this.options.maxElements);
				if($target.is('button.listingsearchBtn')){
					if($this.searchInput.val() && $this.dropdown.is(':hidden')){
						$this.tokenAdd($this.searchInput.val(), '');
					}
				}
                $this.dropdownHide();
                if($this.options.maxElements == 1){
                    if($this.searchInput.val()){
                        $this.tokenAdd($this.searchInput.val(), '');
                    }
                }
            });

            this.resizeSearchInput();
            this.remap(true);
            this.updatePlaceholder();

        },

        /**
         * Update elements order in the select html element
         */
        updateOrder: function(){

            if(this.options.sortable){
                var previous, current, $this = this;
                $.each(this.tokensContainer.sortable('toArray', {attribute: 'data-value'}), function(k, v){
                    current = $('option[value="' + v + '"]', $this.select);
                    if(previous == undefined){
                        current.prependTo($this.select);
                    } else {
                        previous.after(current);
                    }
                    previous = current;
                });

                this.options.onReorder(this);
            }

        },

        /**
         * Update placeholder visiblity
         */
        updatePlaceholder: function(){

            if(this.options.placeholder != false){
                if(this.placeholder == undefined){
                    this.placeholder = $('<li />').addClass('Placeholder').html(this.options.placeholder);
                    this.placeholder.insertBefore($('li:first-child', this.tokensContainer));
                }

                if(this.searchInput.val().length == 0 && $('li.Token', this.tokensContainer).length == 0){
                    this.placeholder.show();
                } else {
                    this.placeholder.hide();
                }
            }

        },

        /**
         * Display the dropdown
         */
        dropdownShow: function(){
			
            this.dropdown.css('top', this.dropdown.parent('div').children('.TokensContainer').height()).show();
			this.dropdown.parent('div').children('.TokensContainer').addClass('mapLink');
			//$this.dropdown;
			//console.log('searching complete');
			//if($('html').hasClass('userCunstom')){
				$('.searchLoader').remove();
			//}

        },

        /**
         * Move the focus on the dropdown previous element
         */
        dropdownPrev: function(){

            if($('li.Hover', this.dropdown).length > 0){
                if(!$('li.Hover', this.dropdown).is('li:first-child')){
                    $('li.Hover', this.dropdown).removeClass('Hover').prev().addClass('Hover');
                } else {
                    $('li.Hover', this.dropdown).removeClass('Hover');
                    $('li:last-child', this.dropdown).addClass('Hover');
                }
            } else {
                $('li:first', this.dropdown).addClass('Hover');
            }

        },

        /**
         * Move the focus on the dropdown next element
         */
        dropdownNext: function(){

            if($('li.Hover', this.dropdown).length > 0){
                if(!$('li.Hover', this.dropdown).is('li:last-child')){
                    $('li.Hover', this.dropdown).removeClass('Hover').next().addClass('Hover');
                } else {
                    $('li.Hover', this.dropdown).removeClass('Hover');
                    $('li:first-child', this.dropdown).addClass('Hover');
                }
            } else {
                $('li:first', this.dropdown).addClass('Hover');
            }

        },

        /**
         * Add an item to the dropdown
         *
         * @param {string} value The value of the item
         * @param {string} text The display text of the item
         * @param {string|undefined} [html] The html display text of the item (override previous parameter)
         * @return {$.w4rsearch}
         */
        dropdownAddItem: function(value, text, html){
            if(html == undefined){
                html = text;
            }
            if(!$('li[data-value="' + value + '"]', this.tokensContainer).length){
                var $this = this;
                var item = $('<li />')
                    .attr('data-value', value)
                    .attr('data-text', text)
                    .html(html)
                    .on('click', function(e){
                        e.stopImmediatePropagation();
                        $this.tokenAdd($(this).attr('data-value'), $(this).attr('data-text'));
//                        if(selectType=='w4raddsearch_ajax' && $('#w4rauto_users_config_w4rlistings').val()=='1'){
//                            loaderObj.append('<span class="cLoaderP a searchLoader"><div class="loader">Loading...</div></span>');
//                            $.ajax({
//                                url: "w4r_google_get_city_address?address1="+$(this).attr('data-value')+"&address="+$(this).attr('data-text') ,
//                                type: 'POST',
//                                success: function(data) {
//                                    $this.tokenAdd(data, data);
//                                    $('.searchLoader').remove();
//                                },
//                                error: function(e) {
//                                    console.log("Server failure! Is the server turned off?");
//                                }
//                            });
//                        }else{
//                            $this.tokenAdd($(this).attr('data-value'), $(this).attr('data-value'));
//                        }
                    }).on('mouseover', function(){
                        $(this).addClass('Hover');
                    }).on('mouseout', function(){
                        $('li', $this.dropdown).removeClass('Hover');
                    });
                this.dropdown.append(item);
                this.options.onDropdownAddItem(value, text, html, this);
            }
            return this;
        },

        /**
         * Hide dropdown
         */
        dropdownHide: function(){

            this.dropdownReset();
            this.dropdown.hide();
			this.dropdown.removeClass('mapLink');
			
			//console.log('hide dropdown')
				//if($('html').hasClass('userCunstom')){
					$('.searchLoader').remove();
				//}

        },

        /**
         * Reset dropdown
         */
        dropdownReset: function(){

            this.dropdown.html('');
			//console.log('dropdown reset')
			//if($('html').hasClass('userCunstom')){
				$('.searchLoader').remove();
			//}

        },

        /**
         * Resize search input according the value length
         */
        resizeSearchInput: function(){

            this.searchInput.attr('size', Number(this.searchInput.val().length)+45);
            this.updatePlaceholder();

        },

        /**
         * Reset search input
         */
        resetSearchInput: function(){

            this.searchInput.val("");
            this.resizeSearchInput();

        },

        /**
         * Reset pending tokens
         */
        resetPendingTokens: function(){

            $('li.PendingDelete', this.tokensContainer).removeClass('PendingDelete');

        },

        /**
         * Keypress
         *
         * @param {object} e
         */
        keypress: function(e){

            if(String.fromCharCode(e.which) == this.options.delimiter){
                e.preventDefault();
                this.tokenAdd(this.searchInput.val(), '');
            }

        },

        /**
         * Keydown
         *
         * @param {object} e
         */
        keydown: function(e){

            switch(e.keyCode){
                case KEYS.BACKSPACE:
                    if(this.searchInput.val().length == 0){
                        e.preventDefault();
                        if($('li.Token.PendingDelete', this.tokensContainer).length){
                            this.tokenRemove($('li.Token.PendingDelete').attr('data-value'));
                        } else {
                            $('li.Token:last', this.tokensContainer).addClass('PendingDelete');
                        }
                        this.dropdownHide();
                    }
                    break;

                case KEYS.TAB:
                case KEYS.ENTER:
				
                    if($('li.Hover', this.dropdown).length){
                        var element = $('li.Hover', this.dropdown);
                        e.preventDefault();
                        this.tokenAdd(element.attr('data-value'), element.attr('data-text'));
                    } else {
						
                        if(this.searchInput.val()){
                            e.preventDefault();
                            this.tokenAdd(this.searchInput.val(), '');
							
                        }
                    }
					
                    this.resetPendingTokens();
                    break;

                case KEYS.ESCAPE:
                    this.resetSearchInput();
                    this.dropdownHide();
                    this.resetPendingTokens();
                    break;

                case KEYS.ARROW_UP:
                    e.preventDefault();
                    this.dropdownPrev();
                    break;

                case KEYS.ARROW_DOWN:
                    e.preventDefault();
                    this.dropdownNext();
                    break;

                default:
                    this.resetPendingTokens();
                    break;
            }

        },

        /**
         * Keyup
         *
         * @param {object} e
         */
        keyup: function(e){

            this.updatePlaceholder();
            switch(e.keyCode){
                case KEYS.TAB:
                case KEYS.ENTER:
                case KEYS.ESCAPE:
                case KEYS.ARROW_UP:
                case KEYS.ARROW_DOWN:
                    break;

                case KEYS.BACKSPACE:
                    if(this.searchInput.val()){
                        this.search();
						//fasy
                    } else {
                        this.dropdownHide();
                    }
                    break;
                default:
                    if(this.searchInput.val()){
                        this.search();
                    }
                    break;
            }

        },

        /**
         * Search an element in the select or using ajax
         */
        search: function(){

            var $this = this;
            var count = 1;

            if(this.options.maxElements > 0 && $('li.Token', this.tokensContainer).length >= this.options.maxElements){
                return false;
            }

            if(this.options.datas == 'select'){

                var found = false, regexp = new RegExp(this.searchInput.val().replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), 'i');
                this.dropdownReset();

                $('option', this.select).not(':selected, :disabled').each(function(){
                    if(count <= $this.options.nbDropdownElements){
                        if(regexp.test($(this).html())){
                            $this.dropdownAddItem($(this).attr('value'), $(this).html());
                            found = true;
                            count++;
                        }
                    } else {
                        return false;
                    }
                });

                if(found){
                    $('li:first', this.dropdown).addClass('Hover');
                    this.dropdownShow();
                } else {
                    this.dropdownHide();
                }

            } else {

                this.debounce(function(){
                    $.ajax({
                        url: $this.options.datas,
                        data: $this.options.searchParam + "=" + $this.searchInput.val(),
                        dataType: $this.options.dataType,
                        success: function(data){
                            if(data){
                                $this.dropdownReset();
                                $.each(data, function(key, val){
                                    if(count <= $this.options.nbDropdownElements){
                                        var html = undefined;
                                        if(val[$this.options.htmlField]){
                                            html = val[$this.options.htmlField];
                                        }
                                        $this.dropdownAddItem(val[$this.options.valueField], val[$this.options.textField], html);
                                        count++;
                                    } else {
                                        return false;
                                    }
                                });
                                if($('li', $this.dropdown).length){
                                    $('li:first', $this.dropdown).addClass('Hover');
                                    $this.dropdownShow();
                                    return true;
                                }
                            }
                            $this.dropdownHide();
                        },
                        error: function(XHR, textStatus) {
                            console.log("Error : " + textStatus);
                        }
                    });
                }, this.options.debounce);

            }

        },

        /**
         * Debounce method for ajax request
         * @param {function} func
         * @param {number} threshold
         */
        debounce: function(func, threshold){

            var obj = this, args = arguments;
            var delayed = function(){
                func.apply(obj, args);
                debounce_timeout = null;
            };
            if(debounce_timeout){
                clearTimeout(debounce_timeout);
            }
            debounce_timeout = setTimeout(delayed, threshold || this.options.debounce);

        },

        /**
         * Add a token in container
         *
         * @param {string} value The value of the token
         * @param {string|undefined} [text] The label of the token (use value if empty)
         * @param {boolean|undefined} [first] If true, onAddToken event will be not called
         * @return {$.w4rsearch}
         */
        tokenAdd: function(value, text, first,selectid){

            value = this.escape(value);

            if(value == undefined || value == ''){
                return this;
            }

            if(text == undefined || text == ''){
                text = value;
            }

            if(first == undefined){
                first = false;
            }

            if(this.options.maxElements > 0 && $('li.Token', this.tokensContainer).length >= this.options.maxElements){
                this.resetSearchInput();
                return this;
            }

            var $this = this;
            var close_btn = $('<a />')
                .addClass('Close')
                .html("&#215;")
                .on('click', function(e){
                    e.stopImmediatePropagation();
                    $this.tokenRemove(value);
                });

            if($('option[value="' + value + '"]', this.select).length){
                $('option[value="' + value + '"]', this.select).attr('selected', true).prop('selected', true);
            } else if(this.options.newElements || (!this.options.newElements && $('li[data-value="' + value + '"]', this.dropdown).length > 0)) {
                var option = $('<option />')
                    .attr('selected', true)
                    .attr('value', value)
                    .attr('data-type', 'custom')
                    .prop('selected', true)
                    .html(text);
                this.select.append(option);
            } else {
                this.resetSearchInput();
                return this;
            }

            if($('li.Token[data-value="' + value + '"]', this.tokensContainer).length > 0) {
                return this;
            }
			//console.log(selectid)
			if(text == 'exce' && $('body').hasClass('w4rls')){
				$('<li />')
				.attr('id', 'w4rtoken-'+selectid)
                .addClass('Token')
                .append('<span>'+value+' Selected</span>')
                .append('<a class=" delAllSelected" onclick="delAllSelected($(this));">×</a>')
                .insertBefore(this.searchToken);
			}else{
            $('<li />')
                .addClass('Token')
                .attr('data-value', value)
                .append('<span>' + text + '</span>')
                .prepend(close_btn)
                .insertBefore(this.searchToken);
			}

            if(!first){
                this.options.onAddToken(value, text, this);
            }

            this.resetSearchInput();
            this.dropdownHide();
            this.updateOrder();

            return this;

        },

        /**
         * Remove a token
         *
         * @param {string} value The value of the token who has to be removed
         * @returns {$.w4rsearch}
         */
        tokenRemove: function(value){

            var option = $('option[value="' + value + '"]', this.select);

            if(option.attr('data-type') == 'custom'){
                option.remove();
            } else {
                option.removeAttr('selected').prop('selected', false);
            }

            $('li.Token[data-value="' + value + '"]', this.tokensContainer).remove();

            this.options.onRemoveToken(value, this);
            this.resizeSearchInput();
            this.dropdownHide();
            this.updateOrder();

            return this;

        },

        /**
         * Clear tokens
         *
         * @returns {$.w4rsearch}
         */
        clear: function(){

            var $this = this;

            $('li.Token', this.tokensContainer).each(function(){
                $this.tokenRemove($(this).attr('data-value'));
            });

            this.options.onClear(this);
            this.dropdownHide();

            return this;

        },

        /**
         * Disable w4rsearch
         *
         * @returns {$.w4rsearch}
         */
        disable: function(){

            this.select.prop('disabled', true);
            this.searchInput.prop('disabled', true);
            this.container.addClass('Disabled');
            if(this.options.sortable){
                this.tokensContainer.sortable('disable')
            }

            return this;

        },

        /**
         * Enable w4rsearch
         *
         * @returns {$.w4rsearch}
         */
        enable: function(){

            this.select.prop('disabled', false);
            this.searchInput.prop('disabled', false);
            this.container.removeClass('Disabled');
            if(this.options.sortable){
                this.tokensContainer.sortable('enable')
            }

            return this;

        },

        /**
         * Refresh tokens reflecting select options
         *
         * @param {boolean} first If true, onAddToken event will be not called
         * @returns {$.w4rsearch}
         */
        remap: function(first){

            var $this = this;
            var tmp = $("option:selected", this.select);

            if(first == undefined){
                first = false;
            }
			//console.log(this.select.attr('id'))

            this.clear();
			if($('body').hasClass('w4rls')){
				if(tmp.length < 700000){
					tmp.each(function(){
						$this.tokenAdd($(this).val(), $(this).html(), first);
					});
				}else {
					$this.tokenAdd(tmp.length, 'exce', first,this.select.attr('id'));
				}
			}else {
				tmp.each(function(){
						$this.tokenAdd($(this).val(), $(this).html(), first);
					});
			}

            return this;

        },

        /**
         * Retrieve tokens value to an array
         *
         * @returns {Array}
         */
        toArray: function(){

            var output = [];
            $("option:selected", this.select).each(function(){
                output.push($(this).val());
            });
            return output;

        },

        /**
         * Escape double quote
         *
         * @param {string} string
         * @returns {string}
         */
        escape: function(string){

            return String(string).replace(/["]/g, function(){
                return '';
            });

        }

    });

    /**
     * w4rsearch plugin
     *
     * @param {Object|undefined} [options]
     * @returns {$.w4rsearch|jQuery}
     */
    $.fn.w4rsearch = function(options){

        if(options == undefined){
            options = {};
        }

        var selector = this.filter('select');

        if(selector.length > 1){
            selector.each(function(){
                getObject(options, $(this));
            });
            return selector;
        }
        else
        {
            return getObject(options, $(this));
        }
    };

    $.fn.w4rsearch.defaults = {

        datas: 'select',
        placeholder: false,
        searchParam: 'search',
        searchMaxLength: 0,
        debounce: 0,
        delimiter: ',',
        newElements: true,
        autosize: false,
        nbDropdownElements: 50,
        displayDropdownOnFocus: false,
        maxElements: 0,
        sortable: false,
        dataType: 'json',
        valueField: 'value',
        textField: 'text',
        htmlField: 'html',

        onAddToken: function(value, text, e){},
        onRemoveToken: function(value, e){},
        onClear: function(e){},
        onReorder: function(e){},
        onDropdownAddItem: function(value, text, html, e){}

    };

})(jQuery, 'w4rsearch');



/*
    geoxml3.js

    Renders KML on the Google Maps JavaScript API Version 3 
    http://code.google.com/p/geoxml3/

   Copyright 2010 Sterling Udell, Larry Ross

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.

*/
/**
 * A MultiGeometry object that will allow multiple polylines in a MultiGeometry
 * containing LineStrings to be treated as a single object
 *
 * @param {MutiGeometryOptions} anonymous object.  Available properties:
 * map: The map on which to attach the MultiGeometry
 * paths: the individual polylines
 * polylineOptions: options to use when constructing all the polylines
 *
 * @constructor
 */
// only if Google Maps API included
if (!!window.google && !! google.maps) { 
function MultiGeometry(multiGeometryOptions) {
   function createPolyline(polylineOptions, mg) {
     var polyline = new google.maps.Polyline(polylineOptions);
     google.maps.event.addListener(polyline,'click', function(evt) { google.maps.event.trigger(mg,'click',evt);});
     google.maps.event.addListener(polyline,'dblclick', function(evt) { google.maps.event.trigger(mg, 'dblclick', evt);});
     google.maps.event.addListener(polyline,'mousedown', function(evt) { google.maps.event.trigger(mg, 'mousedown', evt);});
     google.maps.event.addListener(polyline,'mousemove', function(evt) { google.maps.event.trigger(mg, 'mousemove', evt);});
     google.maps.event.addListener(polyline,'mouseout', function(evt) { google.maps.event.trigger(mg, 'mouseout', evt);});
     google.maps.event.addListener(polyline,'mouseover', function(evt) { google.maps.event.trigger(mg, 'mouseover', evt);});
     google.maps.event.addListener(polyline,'mouseup', function(evt) { google.maps.event.trigger(mg, 'mouseup', evt);});
     google.maps.event.addListener(polyline,'rightclick', function(evt) { google.maps.event.trigger(mg, 'rightclick', evt);});
     return polyline;
   }
   this.setValues(multiGeometryOptions);
   this.polylines = [];

   for (i=0; i<this.paths.length;i++) {
     var polylineOptions = multiGeometryOptions;
     polylineOptions.path = this.paths[i];
     var polyline = createPolyline(polylineOptions,this);
     // Bind the polyline properties to the MultiGeometry properties
     this.polylines.push(polyline);
   }
}
MultiGeometry.prototype = new google.maps.MVCObject();
MultiGeometry.prototype.changed = function(key) {
    // alert(key+" changed");
    if (this.polylines) {
	for (var i=0; i<this.polylines.length; i++) {
	    this.polylines[i].set(key,this.get(key));
	}
    }
};
MultiGeometry.prototype.setMap = function(map) { this.set('map',map); };
MultiGeometry.prototype.getMap = function() { return this.get('map'); };
}

// Extend the global String object with a method to remove leading and trailing whitespace
if (!String.prototype.trim) {
  String.prototype.trim = function () {
    return this.replace(/^\s+|\s+$/g, '');
  };
}

// Declare namespace
geoXML3 = window.geoXML3 || {instances: []};

// Constructor for the root KML parser object
geoXML3.parser = function (options) {
  // Inherit from Google MVC Object to include event handling   
  google.maps.MVCObject.call(this);   

  // Private variables
  var parserOptions = geoXML3.combineOptions(options, {
    singleInfoWindow: false,
    processStyles: true,
    zoom: true
  });
  var docs = []; // Individual KML documents
  var lastPlacemark;
  var parserName;
  if (typeof parserOptions.suppressInfoWindows == "undefined") parserOptions.suppressInfoWindows = false;
  if (!parserOptions.infoWindow && parserOptions.singleInfoWindow && !!window.google && !!google.maps)
    parserOptions.infoWindow = new google.maps.InfoWindow();

  geoXML3.xhrTimeout = 60000;
  if (!!parserOptions.xhrTimeout) geoXML3.xhrTimeout = parserOptions.xhrTimeout; 

  var parseKmlString = function (kmlString, docSet) {
    // Internal values for the set of documents as a whole
    var internals = {
      parser: this,
      docSet: docSet || [],
      remaining: 1,
      parseOnly: !(parserOptions.afterParse || parserOptions.processStyles)
    };
    thisDoc = new Object();
    thisDoc.internals = internals;
    internals.docSet.push(thisDoc);
    render(geoXML3.xmlParse(kmlString),thisDoc);
  }

  var parse = function (urls, docSet) {
    // Process one or more KML documents
    if (!parserName) {
      parserName = 'geoXML3.instances[' + (geoXML3.instances.push(this) - 1) + ']';
    }
    
    if (typeof urls === 'string') {
      // Single KML document
      urls = [urls];
    }

    // Internal values for the set of documents as a whole
    var internals = {
      parser: this,
      docSet: docSet || [],
      remaining: urls.length,
      parseOnly: !(parserOptions.afterParse || parserOptions.processStyles)
    };
    var thisDoc, j;
    for (var i = 0; i < urls.length; i++) {
      var baseUrl = urls[i].split('?')[0];
      for (j = 0; j < docs.length; j++) {
        if (baseUrl === docs[j].baseUrl) {
          // Reloading an existing document
          thisDoc = docs[j];
          thisDoc.reload    = true;
          break;
        }
      }
      if (j >= docs.length) {
        thisDoc = new Object();
        thisDoc.baseUrl = baseUrl;
        internals.docSet.push(thisDoc);
      }
      thisDoc.url       = urls[i];
      thisDoc.internals = internals;
      var url = thisDoc.url;
      if (parserOptions.proxy) url = parserOptions.proxy+thisDoc.url; 
      fetchDoc(url, thisDoc);
    }
  };

  function fetchDoc(url, doc) {
      geoXML3.fetchXML(url, function (responseXML) { render(responseXML, doc);})
  }

  var hideDocument = function (doc) {
    if (!doc) doc = docs[0];
    // Hide the map objects associated with a document 
    var i;
    if (!!window.google && !!google.maps) {
      if (!!doc.markers) {
        for (i = 0; i < doc.markers.length; i++) {
          if(!!doc.markers[i].infoWindow) doc.markers[i].infoWindow.close();
          doc.markers[i].setVisible(false);
        }
      }
      if (!!doc.ggroundoverlays) {
        for (i = 0; i < doc.ggroundoverlays.length; i++) {
          doc.ggroundoverlays[i].setOpacity(0);
        }
      }
      if (!!doc.gpolylines) {
        for (i=0;i<doc.gpolylines.length;i++) {
          if(!!doc.gpolylines[i].infoWindow) doc.gpolylines[i].infoWindow.close();
          doc.gpolylines[i].setMap(null);
        }
      }
      if (!!doc.gpolygons) {
        for (i=0;i<doc.gpolygons.length;i++) {
          if(!!doc.gpolygons[i].infoWindow) doc.gpolygons[i].infoWindow.close();
         doc.gpolygons[i].setMap(null);
        }
      }
    }
  };
  
  var showDocument = function (doc) {
    if (!doc) doc = docs[0];
    // Show the map objects associated with a document 
    var i;
    if (!!window.google && !!google.maps) {
      if (!!doc.markers) {
        for (i = 0; i < doc.markers.length; i++) {
          doc.markers[i].setVisible(true);
        }
      }
      if (!!doc.ggroundoverlays) {
        for (i = 0; i < doc.ggroundoverlays.length; i++) {
          doc.ggroundoverlays[i].setOpacity(doc.ggroundoverlays[i].percentOpacity_);
        }
      }
      if (!!doc.gpolylines) {
        for (i=0;i<doc.gpolylines.length;i++) {
          doc.gpolylines[i].setMap(parserOptions.map);
        }
      }
      if (!!doc.gpolygons) {
        for (i=0;i<doc.gpolygons.length;i++) {
          doc.gpolygons[i].setMap(parserOptions.map);
        }
      }
    }
  };

var defaultStyle = {
  color: "ff000000", // black
  colorMode: "normal",
  width: 1,
  fill: true,
  outline: true,
  fillcolor: "3fff0000" // blue
};

function processStyle(thisNode, styles, styleID) {
      var nodeValue  = geoXML3.nodeValue;
      styles[styleID] = styles[styleID] || clone(defaultStyle);
      var styleNodes = thisNode.getElementsByTagName('IconStyle');
      if (!!styleNodes && !!styleNodes.length && (styleNodes.length > 0)) {
        styles[styleID].scale = parseFloat(nodeValue(styleNodes[0].getElementsByTagName('scale')[0]));
      }
      if (isNaN(styles[styleID].scale)) styles[styleID].scale = 1.0;
      styleNodes = thisNode.getElementsByTagName('Icon');
      if (!!styleNodes && !!styleNodes.length && (styleNodes.length > 0)) {
        styles[styleID].href = nodeValue(styleNodes[0].getElementsByTagName('href')[0]);
      }
      styleNodes = thisNode.getElementsByTagName('LineStyle');
      if (!!styleNodes && !!styleNodes.length && (styleNodes.length > 0)) {
        styles[styleID].color = nodeValue(styleNodes[0].getElementsByTagName('color')[0],defaultStyle.color);
        styles[styleID].colorMode = nodeValue(styleNodes[0].getElementsByTagName('colorMode')[0], defaultStyle.colorMode);
        styles[styleID].width = nodeValue(styleNodes[0].getElementsByTagName('width')[0],defaultStyle.width);
      }
      styleNodes = thisNode.getElementsByTagName('PolyStyle');
      if (!!styleNodes && !!styleNodes.length && (styleNodes.length > 0)) {
        styles[styleID].outline   = getBooleanValue(styleNodes[0].getElementsByTagName('outline')[0],defaultStyle.outline);
        styles[styleID].fill      = getBooleanValue(styleNodes[0].getElementsByTagName('fill')[0],defaultStyle.fill);
        styles[styleID].colorMode = nodeValue(styleNodes[0].getElementsByTagName('colorMode')[0], defaultStyle.colorMode);
        styles[styleID].fillcolor = nodeValue(styleNodes[0].getElementsByTagName('color')[0],defaultStyle.fillcolor);
      }
      return styles[styleID];
}

// from http://stackoverflow.com/questions/122102/what-is-the-most-efficient-way-to-clone-a-javascript-object
// http://keithdevens.com/weblog/archive/2007/Jun/07/javascript.clone
  function clone(obj){
      if(obj == null || typeof(obj) != 'object') return obj;
      var temp = new obj.constructor(); 
      for(var key in obj) temp[key] = clone(obj[key]);
      return temp;
  }

function processStyleMap(thisNode, styles, styleID) {
  var nodeValue  = geoXML3.nodeValue;
  var pairs = thisNode.getElementsByTagName('Pair');
  var map = new Object();
  // add each key to the map
  for (var pr=0;pr<pairs.length;pr++) {
    var pairkey = nodeValue(pairs[pr].getElementsByTagName('key')[0]);
    var pairstyle = nodeValue(pairs[pr].getElementsByTagName('Style')[0]);
    var pairstyleurl = nodeValue(pairs[pr].getElementsByTagName('styleUrl')[0]);
    if (!!pairstyle) {
      processStyle(pairstyle, map[pairkey], styleID);
    } else if (!!pairstyleurl && !!styles[pairstyleurl]) {
      map[pairkey] = clone(styles[pairstyleurl]);
    }
  }
  if (!!map["normal"]) {
    styles[styleID] = clone(map["normal"]);
  } else {
    styles[styleID] =  clone(defaultStyle);
  }      
  if (!!map["highlight"] && !!parserOptions.processStyles) {
    processStyleID(map["highlight"]);
  }
  styles[styleID].map = clone(map);
}

function getBooleanValue(node) {
  var nodeContents = geoXML3.nodeValue(node);
  if (!nodeContents) return true;
  if (nodeContents) nodeContents = parseInt(nodeContents);
  if (isNaN(nodeContents)) return true;
  if (nodeContents == 0) return false;
  else return true;
}   

function processPlacemarkCoords(node, tag) {
   var parent = node.getElementsByTagName(tag);
var coordListA = [];
  for (var i=0; i<parent.length; i++) {
  var coordNodes = parent[i].getElementsByTagName('coordinates')
  if (!coordNodes) {
    if (coordListA.length > 0) {
      break;
    } else {
      return [{coordinates: []}];
    }
  }

  for (var j=0; j<coordNodes.length;j++) { 
    var coords = geoXML3.nodeValue(coordNodes[j]).trim();
    coords = coords.replace(/,\s+/g, ',');
    var path = coords.split(/\s+/g);
    var pathLength = path.length;
    var coordList = [];
    for (var k = 0; k < pathLength; k++) {
      coords = path[k].split(',');
      if (!isNaN(coords[0]) && !isNaN(coords[1])) {
        coordList.push({
          lat: parseFloat(coords[1]), 
          lng: parseFloat(coords[0]), 
          alt: parseFloat(coords[2])
        });
      }
    }
    coordListA.push({coordinates: coordList});
  }
}
  return coordListA;
}

  var render = function (responseXML, doc) {
    // Callback for retrieving a KML document: parse the KML and display it on the map
    if (!responseXML || responseXML == "failed parse") {
      // Error retrieving the data
      geoXML3.log('Unable to retrieve ' + doc.url);
      if (parserOptions.failedParse) {
        parserOptions.failedParse(doc);
      }
    } else if (!doc) {
      throw 'geoXML3 internal error: render called with null document';
    } else { //no errors
      var i;
      var styles = {};
      doc.placemarks     = [];
      doc.groundoverlays = [];
      doc.ggroundoverlays = [];
      doc.networkLinks   = [];
      doc.gpolygons      = [];
      doc.gpolylines     = [];
      doc.markers        = [];

    // Declare some helper functions in local scope for better performance
    var nodeValue  = geoXML3.nodeValue;

    // Parse styles
    var styleID, styleNodes;
    nodes = responseXML.getElementsByTagName('Style');
    nodeCount = nodes.length;
    for (i = 0; i < nodeCount; i++) {
      thisNode = nodes[i];
      var thisNodeId = thisNode.getAttribute('id');
      if (!!thisNodeId) {
        styleID    = '#' + thisNodeId;
        processStyle(thisNode, styles, styleID);
      }
    }
    // rudamentary support for StyleMap
    // use "normal" mapping only
    nodes = responseXML.getElementsByTagName('StyleMap');
    for (i = 0; i < nodes.length; i++) {
      thisNode = nodes[i];
      var thisNodeId = thisNode.getAttribute('id');
      if (!!thisNodeId) {
        styleID    = '#' + thisNodeId;
	processStyleMap(thisNode, styles, styleID);
      }
    }
    doc.styles = styles;
      if (!!parserOptions.processStyles || !parserOptions.createMarker) {
        // Convert parsed styles into GMaps equivalents
        processStyles(doc);
      }

      // Parse placemarks
      if (!!doc.reload && !!doc.markers) {
        for (i = 0; i < doc.markers.length; i++) {
          doc.markers[i].active = false;
        }
      }
      var placemark, node, coords, path, marker, poly;
      var placemark, coords, path, pathLength, marker, polygonNodes, coordList;
      var placemarkNodes = responseXML.getElementsByTagName('Placemark');
      for (pm = 0; pm < placemarkNodes.length; pm++) {
        // Init the placemark object
        node = placemarkNodes[pm];
        placemark = {
          name:  geoXML3.nodeValue(node.getElementsByTagName('name')[0]),
          description: geoXML3.nodeValue(node.getElementsByTagName('description')[0]),
          styleUrl: geoXML3.nodeValue(node.getElementsByTagName('styleUrl')[0]),
          id: node.getAttribute('id')
        };
        placemark.style = doc.styles[placemark.styleUrl] || clone(defaultStyle);
        // inline style overrides shared style
        var inlineStyles = node.getElementsByTagName('Style');
        if (inlineStyles && (inlineStyles.length > 0)) {
          var style = processStyle(node,doc.styles,"inline");
	  processStyleID(style);
	  if (style) placemark.style = style;
        }
        if (/^https?:\/\//.test(placemark.description)) {
          placemark.description = ['<a href="', placemark.description, '">', placemark.description, '</a>'].join('');
        }

        // process MultiGeometry
        var GeometryNodes = node.getElementsByTagName('coordinates');
        var Geometry = null;
	if (!!GeometryNodes && (GeometryNodes.length > 0)) {
          for (var gn=0;gn<GeometryNodes.length;gn++) {
             if (!GeometryNodes[gn].parentNode ||
                 !GeometryNodes[gn].parentNode.nodeName) {

             } else { // parentNode.nodeName exists
               var GeometryPN = GeometryNodes[gn].parentNode;
               Geometry = GeometryPN.nodeName;
       
        // Extract the coordinates
        // What sort of placemark?
        switch(Geometry) {
          case "Point":
            placemark.Point = processPlacemarkCoords(node, "Point")[0]; 
            if (!!window.google && !!google.maps)
              placemark.latlng = new google.maps.LatLng(placemark.Point.coordinates[0].lat, placemark.Point.coordinates[0].lng);
            pathLength = 1;
            break;
          case "LinearRing":
            // Polygon/line
            polygonNodes = node.getElementsByTagName('Polygon');
            // Polygon
            if (!placemark.Polygon)
              placemark.Polygon = [{
                outerBoundaryIs: {coordinates: []},
                innerBoundaryIs: [{coordinates: []}]
              }];
            for (var pg=0;pg<polygonNodes.length;pg++) {
               placemark.Polygon[pg] = {
                 outerBoundaryIs: {coordinates: []},
                 innerBoundaryIs: [{coordinates: []}]
               }
               placemark.Polygon[pg].outerBoundaryIs = processPlacemarkCoords(polygonNodes[pg], "outerBoundaryIs");
               placemark.Polygon[pg].innerBoundaryIs = processPlacemarkCoords(polygonNodes[pg], "innerBoundaryIs");
            }
            coordList = placemark.Polygon[0].outerBoundaryIs;
            break;

          case "LineString":
            pathLength = 0;
            placemark.LineString = processPlacemarkCoords(node,"LineString");
            break;

          default:
            break;
      }
      } // parentNode.nodeName exists
      } // GeometryNodes loop
      } // if GeometryNodes 
      // call the custom placemark parse function if it is defined
      if (!!parserOptions.pmParseFn) parserOptions.pmParseFn(node, placemark);
      doc.placemarks.push(placemark);
      if (!!window.google && !!google.maps) {
       if (placemark.Point) {
          if (!!window.google && !!google.maps) {
            doc.bounds = doc.bounds || new google.maps.LatLngBounds();
            doc.bounds.extend(placemark.latlng);
          }

          if (!!parserOptions.createMarker) {
            // User-defined marker handler
            parserOptions.createMarker(placemark, doc);
          } else { // !user defined createMarker
            // Check to see if this marker was created on a previous load of this document
            var found = false;
            if (!!doc) {
              doc.markers = doc.markers || [];
              if (doc.reload) {
                for (var j = 0; j < doc.markers.length; j++) {
                    if ((doc.markers[j].id == placemark.id) ||
			// if no id, check position
                        (!doc.markers[j].id && 
                         (doc.markers[j].getPosition().equals(placemark.latlng)))) {
                    found = doc.markers[j].active = true;
                    break;
                  }
                }
              } 
            }

            if (!found) {
              // Call the built-in marker creator
              marker = createMarker(placemark, doc);
              if (marker) { 
                marker.active = true;
                marker.id = placemark.id;
              }
            }
          }
         }
         if (placemark.Polygon) { // poly test 2
          if (!!doc) {
           doc.gpolygons = doc.gpolygons || [];
          }

          if (!!parserOptions.createPolygon) {
           // User-defined polygon handler
            poly = parserOptions.createPolygon(placemark, doc);
          } else {  // ! user defined createPolygon
           // Check to see if this marker was created on a previous load of this document
           poly = createPolygon(placemark,doc);
           poly.active = true;
          }
          if (!!window.google && !!google.maps) {
           doc.bounds = doc.bounds || new google.maps.LatLngBounds();
           doc.bounds.union(poly.bounds);
          }
         } 
         if (placemark.LineString) { // polyline
          if (!!doc) {
           doc.gpolylines = doc.gpolylines || [];
          }
          if (!!parserOptions.createPolyline) {
           // User-defined polyline handler
           poly = parserOptions.createPolyline(placemark, doc);
          } else { // ! user defined createPolyline
           // Check to see if this marker was created on a previous load of this document
           poly = createPolyline(placemark,doc);
           poly.active = true;
          }
          if (!!window.google && !!google.maps) {
           doc.bounds = doc.bounds || new google.maps.LatLngBounds();
           doc.bounds.union(poly.bounds);
          }
         }
       }
      } // placemark loop

      if (!!doc.reload && !!doc.markers) {
        for (i = doc.markers.length - 1; i >= 0 ; i--) {
          if (!doc.markers[i].active) {
            if (!!doc.markers[i].infoWindow) {
              doc.markers[i].infoWindow.close();
            }
            doc.markers[i].setMap(null);
            doc.markers.splice(i, 1);
          }
        }
      }

      // Parse ground overlays
      if (!!doc.reload && !!doc.groundoverlays) {
        for (i = 0; i < doc.groundoverlays.length; i++) {
          doc.groundoverlays[i].active = false;
        }
      }

      if (!!doc) {
        doc.groundoverlays = doc.groundoverlays || [];
      }
      // doc.groundoverlays =[];
      var groundOverlay, color, transparency, overlay;
      var groundNodes = responseXML.getElementsByTagName('GroundOverlay');
      for (i = 0; i < groundNodes.length; i++) {
        node = groundNodes[i];
        
        // Init the ground overlay object
        groundOverlay = {
          name:        geoXML3.nodeValue(node.getElementsByTagName('name')[0]),
          description: geoXML3.nodeValue(node.getElementsByTagName('description')[0]),
          icon: {href: geoXML3.nodeValue(node.getElementsByTagName('href')[0])},
          latLonBox: {
            north: parseFloat(geoXML3.nodeValue(node.getElementsByTagName('north')[0])),
            east:  parseFloat(geoXML3.nodeValue(node.getElementsByTagName('east')[0])),
            south: parseFloat(geoXML3.nodeValue(node.getElementsByTagName('south')[0])),
            west:  parseFloat(geoXML3.nodeValue(node.getElementsByTagName('west')[0]))
          }
        };
        if (!!window.google && !!google.maps) {
          doc.bounds = doc.bounds || new google.maps.LatLngBounds();
          doc.bounds.union(new google.maps.LatLngBounds(
            new google.maps.LatLng(groundOverlay.latLonBox.south, groundOverlay.latLonBox.west),
            new google.maps.LatLng(groundOverlay.latLonBox.north, groundOverlay.latLonBox.east)
          ));
        }

        // Opacity is encoded in the color node
        var colorNode = node.getElementsByTagName('color');
        if ( colorNode && colorNode.length && (colorNode.length > 0)) {
         groundOverlay.opacity = geoXML3.getOpacity(nodeValue(colorNode[0]));
        } else {
         groundOverlay.opacity = 0.45;
        }

        doc.groundoverlays.push(groundOverlay);
        if (!!window.google && !!google.maps) {
         if (!!parserOptions.createOverlay) {
          // User-defined overlay handler
          parserOptions.createOverlay(groundOverlay, doc);
         } else { // ! user defined createOverlay
          // Check to see if this overlay was created on a previous load of this document
          var found = false;
          if (!!doc) {
            doc.groundoverlays = doc.groundoverlays || [];
            if (!!window.google && !!google.maps && doc.reload) {
                overlayBounds = new google.maps.LatLngBounds(
                  new google.maps.LatLng(groundOverlay.latLonBox.south, groundOverlay.latLonBox.west),
                  new google.maps.LatLng(groundOverlay.latLonBox.north, groundOverlay.latLonBox.east));
              var overlays = doc.groundoverlays;
              for (i = overlays.length; i--;) {
                if ((overlays[i].bounds().equals(overlayBounds)) &&
                    (overlays.url_ === groundOverlay.icon.href)) {
                  found = overlays[i].active = true;
                  break;
                }
              }
            } 
          }
  
          if (!found) {
            // Call the built-in overlay creator
            overlay = createOverlay(groundOverlay, doc);
            overlay.active = true;
          }
	 }
         if (!!doc.reload && !!doc.groundoverlays && !!doc.groundoverlays.length) {
          var overlays = doc.groundoverlays;
          for (i = overlays.length; i--;) {
           if (!overlays[i].active) {
            overlays[i].remove();
            overlays.splice(i, 1);
           }
          }
          doc.groundoverlays = overlays;
	 }
	}
      }
      // Parse network links
      var networkLink;
      var docPath = document.location.pathname.split('/');
      docPath = docPath.splice(0, docPath.length - 1).join('/');
      var linkNodes = responseXML.getElementsByTagName('NetworkLink');
      for (i = 0; i < linkNodes.length; i++) {
        node = linkNodes[i];
        
        // Init the network link object
        networkLink = {
          name: geoXML3.nodeValue(node.getElementsByTagName('name')[0]),
          link: {
            href:        geoXML3.nodeValue(node.getElementsByTagName('href')[0]),
            refreshMode:     geoXML3.nodeValue(node.getElementsByTagName('refreshMode')[0])
          }
        };
        
        // Establish the specific refresh mode 
        if (networkLink.link.refreshMode === '') {
          networkLink.link.refreshMode = 'onChange';
        }
        if (networkLink.link.refreshMode === 'onInterval') {
          networkLink.link.refreshInterval = parseFloat(geoXML3.nodeValue(node.getElementsByTagName('refreshInterval')[0]));
          if (isNaN(networkLink.link.refreshInterval)) {
            networkLink.link.refreshInterval = 0;
          }
        } else if (networkLink.link.refreshMode === 'onChange') {
          networkLink.link.viewRefreshMode = geoXML3.nodeValue(node.getElementsByTagName('viewRefreshMode')[0]);
          if (networkLink.link.viewRefreshMode === '') {
            networkLink.link.viewRefreshMode = 'never';
          }
          if (networkLink.link.viewRefreshMode === 'onStop') {
            networkLink.link.viewRefreshTime = geoXML3.nodeValue(node.getElementsByTagName('refreshMode')[0]);
            networkLink.link.viewFormat =      geoXML3.nodeValue(node.getElementsByTagName('refreshMode')[0]);
            if (networkLink.link.viewFormat === '') {
              networkLink.link.viewFormat = 'BBOX=[bboxWest],[bboxSouth],[bboxEast],[bboxNorth]';
            }
          }
        }

        if (!/^[\/|http]/.test(networkLink.link.href)) {
          // Fully-qualify the HREF
          networkLink.link.href = docPath + '/' + networkLink.link.href;
        }

        // Apply the link
        if ((networkLink.link.refreshMode === 'onInterval') && 
            (networkLink.link.refreshInterval > 0)) {
          // Reload at regular intervals
          setInterval(parserName + '.parse("' + networkLink.link.href + '")', 
                      1000 * networkLink.link.refreshInterval); 
        } else if (networkLink.link.refreshMode === 'onChange') {
          if (networkLink.link.viewRefreshMode === 'never') {
            // Load the link just once
            doc.internals.parser.parse(networkLink.link.href, doc.internals.docSet);
          } else if (networkLink.link.viewRefreshMode === 'onStop') {
            // Reload when the map view changes
            
          }
        }
      }
}

      if (!!doc.bounds && !!window.google && !!google.maps) {
        doc.internals.bounds = doc.internals.bounds || new google.maps.LatLngBounds();
        doc.internals.bounds.union(doc.bounds); 
      }
      if (!!doc.markers || !!doc.groundoverlays || !!doc.gpolylines || !!doc.gpolygons) {
        doc.internals.parseOnly = false;
      }

      doc.internals.remaining -= 1;
      if (doc.internals.remaining === 0) {
        // We're done processing this set of KML documents
        // Options that get invoked after parsing completes
	  if (parserOptions.zoom && !!doc.internals.bounds &&
	      !doc.internals.bounds.isEmpty() && !!parserOptions.map) {
          parserOptions.map.fitBounds(doc.internals.bounds); 
        }
        if (parserOptions.afterParse) {
          parserOptions.afterParse(doc.internals.docSet);
        }

        if (!doc.internals.parseOnly) {
          // geoXML3 is not being used only as a real-time parser, so keep the processed documents around
            for (var i=0;i<doc.internals.docSet.length;i++) {
              docs.push(doc.internals.docSet[i]);
            }
        }
        google.maps.event.trigger(doc.internals.parser, 'parsed');   
      }
  };

  var kmlColor = function (kmlIn, colorMode) {
    var kmlColor = {};
    kmlIn = kmlIn || 'ffffffff';  // white (KML 2.2 default)

    var aa = kmlIn.substr(0,2);
    var bb = kmlIn.substr(2,2);
    var gg = kmlIn.substr(4,2);
    var rr = kmlIn.substr(6,2);

    kmlColor.opacity = parseInt(aa, 16) / 256;
    kmlColor.color   = (colorMode === 'random') ? randomColor(rr, gg, bb) : '#' + rr + gg + bb;
    return kmlColor;
  };

  // Implemented per KML 2.2 <ColorStyle> specs
  var randomColor = function(rr, gg, bb) {
    var col = { rr: rr, gg: gg, bb: bb };
    for (var k in col) {
      var v = col[k];
      if (v == null) v = 'ff';

      // RGB values are limiters for random numbers (ie: 7f would be a random value between 0 and 7f)
      v = Math.round(Math.random() * parseInt(rr, 16)).toString(16);
      if (v.length === 1) v = '0' + v;
      col[k] = v;
    }

    return '#' + col.rr + col.gg + col.bb;
  };

  var processStyleID = function (style) {
    if (!!window.google && !!google.maps) {
      var zeroPoint = new google.maps.Point(0,0);
      if (!!style.href) {
        var markerRegEx = /\/(red|blue|green|yellow|lightblue|purple|pink|orange|pause|go|stop)(-dot)?\.png/;
        if (markerRegEx.test(style.href)) {
         //bottom middle
	  var anchorPoint = new google.maps.Point(16*style.scale, 32*style.scale);
	} else {
	  var anchorPoint = new google.maps.Point(16*style.scale, 16*style.scale);
	}
        // Init the style object with a standard KML icon
        style.icon =  new google.maps.MarkerImage(
          style.href,
          new google.maps.Size(32*style.scale, 32*style.scale),
          zeroPoint,
          // bottom middle 
          anchorPoint,
          new google.maps.Size(32*style.scale, 32*style.scale)

        );

        // Look for a predictable shadow
        var stdRegEx = /\/(red|blue|green|yellow|lightblue|purple|pink|orange)(-dot)?\.png/;
        var shadowSize = new google.maps.Size(59, 32);
	var shadowPoint = new google.maps.Point(16,32);
        if (stdRegEx.test(style.href)) {
          // A standard GMap-style marker icon
          style.shadow = new google.maps.MarkerImage(
              'http://maps.google.com/mapfiles/ms/micons/msmarker.shadow.png',
              shadowSize,
              zeroPoint,
              shadowPoint,
              shadowSize);
        } else if (style.href.indexOf('-pushpin.png') > -1) {
          // Pushpin marker icon
          style.shadow = new google.maps.MarkerImage(
            'http://maps.google.com/mapfiles/ms/micons/pushpin_shadow.png',
            shadowSize,
            zeroPoint,
            shadowPoint,
            shadowSize);
        } else {
          // Other MyMaps KML standard icon
          style.shadow = new google.maps.MarkerImage(
            style.href.replace('.png', '.shadow.png'),	      		   
            shadowSize,	   					   
            zeroPoint,					
            shadowPoint,
            shadowSize);
        }
      }
    }
  }
    
  var processStyles = function (doc) {
    for (var styleID in doc.styles) {
      processStyleID(doc.styles[styleID]);
    }
  };

  var createMarker = function (placemark, doc) {
    // create a Marker to the map from a placemark KML object

    // Load basic marker properties
    var markerOptions = geoXML3.combineOptions(parserOptions.markerOptions, {
      map:      parserOptions.map,
      position: new google.maps.LatLng(placemark.Point.coordinates[0].lat, placemark.Point.coordinates[0].lng),
      title:    placemark.name,
      zIndex:   Math.round(placemark.Point.coordinates[0].lat * -100000)<<5,
      icon:     placemark.style.icon,
      shadow:   placemark.style.shadow 
    });
  
    // Create the marker on the map
    var marker = new google.maps.Marker(markerOptions);
    if (!!doc) {
      doc.markers.push(marker);
    }

    // Set up and create the infowindow if it is not suppressed
    if (!parserOptions.suppressInfoWindows) {
      var infoWindowOptions = geoXML3.combineOptions(parserOptions.infoWindowOptions, {
        content: '<div class="geoxml3_infowindow"><h3>' + placemark.name + 
                 '</h3><div>' + placemark.description + '</div></div>',
        pixelOffset: new google.maps.Size(0, 2)
      });
      if (parserOptions.infoWindow) {
        marker.infoWindow = parserOptions.infoWindow;
      } else {
        marker.infoWindow = new google.maps.InfoWindow(infoWindowOptions);
      }
      marker.infoWindowOptions = infoWindowOptions;
      
      // Infowindow-opening event handler
      google.maps.event.addListener(marker, 'click', function() {
        this.infoWindow.close();
        marker.infoWindow.setOptions(this.infoWindowOptions);
        this.infoWindow.open(this.map, this);
      });
    }
    placemark.marker = marker;
    return marker;
  };
  
  var createOverlay = function (groundOverlay, doc) {
    // Add a ProjectedOverlay to the map from a groundOverlay KML object

    if (!window.ProjectedOverlay) {
      throw 'geoXML3 error: ProjectedOverlay not found while rendering GroundOverlay from KML';
    }

    var bounds = new google.maps.LatLngBounds(
        new google.maps.LatLng(groundOverlay.latLonBox.south, groundOverlay.latLonBox.west),
        new google.maps.LatLng(groundOverlay.latLonBox.north, groundOverlay.latLonBox.east)
    );
    var overlayOptions = geoXML3.combineOptions(parserOptions.overlayOptions, {percentOpacity: groundOverlay.opacity*100});
    var overlay = new ProjectedOverlay(parserOptions.map, groundOverlay.icon.href, bounds, overlayOptions);
    
    if (!!doc) {
      doc.ggroundoverlays = doc.ggroundoverlays || [];
      doc.ggroundoverlays.push(overlay);
    }

    return overlay;
  };

// Create Polyline
var createPolyline = function(placemark, doc) {
  var paths = [];
  var bounds = new google.maps.LatLngBounds();
  for (var j=0; j<placemark.LineString.length; j++) {
    var path = [];
    var coords = placemark.LineString[j].coordinates;
    for (var i=0;i<coords.length;i++) {
      var pt = new google.maps.LatLng(coords[i].lat, coords[i].lng);
      path.push(pt);
      bounds.extend(pt);
    }
    paths.push(path);
  }
    
  // point to open the infowindow if triggered 
  var point = paths[0][Math.floor(path.length/2)];
  // Load basic polyline properties
  var kmlStrokeColor = kmlColor(placemark.style.color,placemark.style.colorMode);
  var polyOptions = geoXML3.combineOptions(parserOptions.polylineOptions, {
    map:      parserOptions.map,
    strokeColor: kmlStrokeColor.color,
    strokeWeight: placemark.style.width,
    strokeOpacity: kmlStrokeColor.opacity,
    title:    placemark.name
  });
  if (paths.length > 1) {
    polyOptions.paths = paths;
    var p = new MultiGeometry(polyOptions);
  } else {
    polyOptions.path = paths[0];
    var p = new google.maps.Polyline(polyOptions);
  }
  p.bounds = bounds;
  // setup and create the infoWindow if it is not suppressed
  if (!parserOptions.suppressInfoWindows) {
    var infoWindowOptions = geoXML3.combineOptions(parserOptions.infoWindowOptions, {
      content: '<div class="geoxml3_infowindow"><h3>' + placemark.name + 
               '</h3><div>' + placemark.description + '</div></div>',
      pixelOffset: new google.maps.Size(0, 2)
    });
    if (parserOptions.infoWindow) {
      p.infoWindow = parserOptions.infoWindow;
    } else {
      p.infoWindow = new google.maps.InfoWindow(infoWindowOptions);
    }
    p.infoWindowOptions = infoWindowOptions;
    // Infowindow-opening event handler
    google.maps.event.addListener(p, 'click', function(e) {
      p.infoWindow.close();
      p.infoWindow.setOptions(p.infoWindowOptions);
      if (e && e.latLng) {
        p.infoWindow.setPosition(e.latLng);
      } else {
        p.infoWindow.setPosition(point);
      }
      p.infoWindow.open(p.map || p.polylines[0].map);
    });
  }
  if (!!doc) doc.gpolylines.push(p);
  placemark.polyline = p;
  return p;
}

// Create Polygon
var createPolygon = function(placemark, doc) {
  var bounds = new google.maps.LatLngBounds();
  var pathsLength = 0;
  var paths = [];
  for (var polygonPart=0;polygonPart<placemark.Polygon.length;polygonPart++) {
    for (var j=0; j<placemark.Polygon[polygonPart].outerBoundaryIs.length; j++) {
      var coords = placemark.Polygon[polygonPart].outerBoundaryIs[j].coordinates;
      var path = [];
      for (var i=0;i<coords.length;i++) {
        var pt = new google.maps.LatLng(coords[i].lat, coords[i].lng);
        path.push(pt);
        bounds.extend(pt);
      }
      paths.push(path);
      pathsLength += path.length;
    }
    for (var j=0; j<placemark.Polygon[polygonPart].innerBoundaryIs.length; j++) {
      var coords = placemark.Polygon[polygonPart].innerBoundaryIs[j].coordinates;
      var path = [];
      for (var i=0;i<coords.length;i++) {
        var pt = new google.maps.LatLng(coords[i].lat, coords[i].lng);
        path.push(pt);
        bounds.extend(pt);
      }
      paths.push(path);
      pathsLength += path.length;
    }
  }

  // Load basic polygon properties
  var kmlStrokeColor = kmlColor(placemark.style.color,placemark.style.colorMode);
  var kmlFillColor = kmlColor(placemark.style.fillcolor,placemark.style.colorMode);
  if (!placemark.style.fill) kmlFillColor.opacity = 0.0;
  var strokeWeight = placemark.style.width;
  if (!placemark.style.outline) {
    strokeWeight = 0;
    kmlStrokeColor.opacity = 0.0;
  }
  var polyOptions = geoXML3.combineOptions(parserOptions.polygonOptions, {
    map:      parserOptions.map,
    paths:    paths,
    title:    placemark.name,
    strokeColor: kmlStrokeColor.color,
    strokeWeight: strokeWeight,
    strokeOpacity: kmlStrokeColor.opacity,
    fillColor: kmlFillColor.color,
    fillOpacity: kmlFillColor.opacity
  });
  var p = new google.maps.Polygon(polyOptions);
  p.bounds = bounds;
  if (!parserOptions.suppressInfoWindows) {
    var infoWindowOptions = geoXML3.combineOptions(parserOptions.infoWindowOptions, {
      content: '<div class="geoxml3_infowindow"><h3>' + placemark.name + 
               '</h3><div>' + placemark.description + '</div></div>',
      pixelOffset: new google.maps.Size(0, 2)
    });
    if (parserOptions.infoWindow) {
      p.infoWindow = parserOptions.infoWindow;
    } else {
      p.infoWindow = new google.maps.InfoWindow(infoWindowOptions);
    }
    p.infoWindowOptions = infoWindowOptions;
    // Infowindow-opening event handler
    google.maps.event.addListener(p, 'click', function(e) {
      p.infoWindow.close();
      p.infoWindow.setOptions(p.infoWindowOptions);
      if (e && e.latLng) {
        p.infoWindow.setPosition(e.latLng);
      } else {
        p.infoWindow.setPosition(p.bounds.getCenter());
      }
      p.infoWindow.open(this.map);
    });
  }
  if (!!doc) doc.gpolygons.push(p);
  placemark.polygon = p;
  return p;
}

  return {
    // Expose some properties and methods

    options: parserOptions,
    docs:    docs,
    
    parse:          parse,
    render:         render,
    parseKmlString: parseKmlString,
    hideDocument:   hideDocument,
    showDocument:   showDocument,
    processStyles:  processStyles, 
    createMarker:   createMarker,
    createOverlay:  createOverlay,
    createPolyline: createPolyline,
    createPolygon:  createPolygon
  };
};
// End of KML Parser

// Helper objects and functions
geoXML3.getOpacity = function (kmlColor) {
  // Extract opacity encoded in a KML color value. Returns a number between 0 and 1.
  if (!!kmlColor &&
      (kmlColor !== '') &&
      (kmlColor.length == 8)) {
    var transparency = parseInt(kmlColor.substr(0, 2), 16);
    return transparency / 255;
  } else {
    return 1;
  }
};

// Log a message to the debugging console, if one exists
geoXML3.log = function(msg) {
  if (!!window.console) {
    console.log(msg);
  } else { alert("log:"+msg); }
};

// Combine two options objects: a set of default values and a set of override values 
geoXML3.combineOptions = function (overrides, defaults) {
  var result = {};
  if (!!overrides) {
    for (var prop in overrides) {
      if (overrides.hasOwnProperty(prop)) {
        result[prop] = overrides[prop];
      }
    }
  }
  if (!!defaults) {
    for (prop in defaults) {
      if (defaults.hasOwnProperty(prop) && (result[prop] === undefined)) {
        result[prop] = defaults[prop];
      }
    }
  }
  return result;
};

// Retrieve an XML document from url and pass it to callback as a DOM document
geoXML3.fetchers = [];

// parse text to XML doc
/**
 * Parses the given XML string and returns the parsed document in a
 * DOM data structure. This function will return an empty DOM node if
 * XML parsing is not supported in this browser.
 * @param {string} str XML string.
 * @return {Element|Document} DOM.
 */
geoXML3.xmlParse = function (str) {
  if ((typeof ActiveXObject != 'undefined') || ("ActiveXObject" in window)) {
    var doc = new ActiveXObject('Microsoft.XMLDOM');
    doc.loadXML(str);
    return doc;
  }

  if (typeof DOMParser != 'undefined') {
    return (new DOMParser()).parseFromString(str, 'text/xml');
  }

  return document.createElement('div', null);
}

// from http://stackoverflow.com/questions/11563554/how-do-i-detect-xml-parsing-errors-when-using-javascripts-domparser-in-a-cross
geoXML3.isParseError = function(parsedDocument) {
    if ((typeof ActiveXObject != 'undefined') || ("ActiveXObject" in window))
	return false;
    // parser and parsererrorNS could be cached on startup for efficiency
    var p = new DOMParser(),
        errorneousParse = p.parseFromString('<', 'text/xml'),
        parsererrorNS = errorneousParse.getElementsByTagName("parsererror")[0].namespaceURI;

    if (parsererrorNS === 'http://www.w3.org/1999/xhtml') {
        // In PhantomJS the parseerror element doesn't seem to have a special namespace, so we are just guessing here :(
        return parsedDocument.getElementsByTagName("parsererror").length > 0;
    }

    return parsedDocument.getElementsByTagNameNS(parsererrorNS, 'parsererror').length > 0;
};

geoXML3.fetchXML = function (url, callback) {
  function timeoutHandler() {
    geoXML3.log('XHR timeout');
    callback();
  };

  var xhrFetcher = new Object();
  if (!!geoXML3.fetchers.length) {
    xhrFetcher = geoXML3.fetchers.pop();
  } else {
    if (!!window.XMLHttpRequest) {
      xhrFetcher.fetcher = new window.XMLHttpRequest(); // Most browsers
    } else if (!!window.ActiveXObject) {
      xhrFetcher.fetcher = new window.ActiveXObject('Microsoft.XMLHTTP'); // Some IE
    }
  }

  if (!xhrFetcher.fetcher) {
    geoXML3.log('Unable to create XHR object');
    callback(null);
  } else {
      xhrFetcher.fetcher.open('GET', url, true);
      if (xhrFetcher.fetcher.overrideMimeType) {
        xhrFetcher.fetcher.overrideMimeType('text/xml');
      }
      xhrFetcher.fetcher.onreadystatechange = function () {
      if (xhrFetcher.fetcher.readyState === 4) {
        // Retrieval complete
        if (!!xhrFetcher.xhrtimeout)
          clearTimeout(xhrFetcher.xhrtimeout);
        if (xhrFetcher.fetcher.status >= 400) {
          geoXML3.log('HTTP error ' + xhrFetcher.fetcher.status + ' retrieving ' + url);
          callback();
        } else {
          // Returned successfully
          var xml = geoXML3.xmlParse(xhrFetcher.fetcher.responseText);
          if (xml.parseError && (xml.parseError.errorCode != 0)) {
           geoXML3.log("XML parse error "+xml.parseError.errorCode+", "+xml.parseError.reason+"\nLine:"+xml.parseError.line+", Position:"+xml.parseError.linepos+", srcText:"+xml.parseError.srcText);
           xml = "failed parse"
          } else if (geoXML3.isParseError(xml)) {
           geoXML3.log("XML parse error");
           xml = "failed parse"
          }
          callback(xml);
        }
        // We're done with this fetcher object
        geoXML3.fetchers.push(xhrFetcher);
      }
    };
    xhrFetcher.xhrtimeout = setTimeout(timeoutHandler, geoXML3.xhrTimeout);
    xhrFetcher.fetcher.send(null);
  }
};

//nodeValue: Extract the text value of a DOM node, with leading and trailing whitespace trimmed
geoXML3.nodeValue = function(node, defVal) {
  var retStr="";
  if (!node) {
    return (typeof defVal === 'undefined' || defVal === null) ? '' : defVal;
  }
   if(node.nodeType==3||node.nodeType==4||node.nodeType==2){
      retStr+=node.nodeValue;
   }else if(node.nodeType==1||node.nodeType==9||node.nodeType==11){
      for(var i=0;i<node.childNodes.length;++i){
         retStr+=arguments.callee(node.childNodes[i]);
      }
   }
   return retStr;
};



(function(e) {
    e.fn.validationEngineLanguage = function() {};
    e.validationEngineLanguage = {
        newLang: function() {
            e.validationEngineLanguage.allRules = {
                required: {
                    regex: "none",
                    alertText: "Please fill out this field",
                    alertTextCheckboxMultiple: "Please select an option",
                    alertTextCheckboxe: "This checkbox is required",
                    alertTextDateRange: "Both date range fields are required"
                },
                requiredInFunction: {
                    func: function(e, t, n, r) {
                        return e.val() == "test" ? true : false
                    },
                    alertText: "Field must equal test"
                },
                dateRange: {
                    regex: "none",
                    alertText: "Invalid ",
                    alertText2: "Date Range"
                },
                dateTimeRange: {
                    regex: "none",
                    alertText: "Invalid ",
                    alertText2: "Date Time Range"
                },
                minSize: {
                    regex: "none",
                    alertText: "Minimum ",
                    alertText2: " characters required"
                },
                maxSize: {
                    regex: "none",
                    alertText: "Maximum ",
                    alertText2: " characters allowed"
                },
                groupRequired: {
                    regex: "none",
                    alertText: "You must fill one of the following fields",
                    alertTextCheckboxMultiple: "Please select an option",
                    alertTextCheckboxe: "This checkbox is required"
                },
                min: {
                    regex: "none",
                    alertText: "Minimum value is "
                },
                max: {
                    regex: "none",
                    alertText: "Maximum value is "
                },
                past: {
                    regex: "none",
                    alertText: "Date prior to "
                },
                future: {
                    regex: "none",
                    alertText: "Date past "
                },
                maxCheckbox: {
                    regex: "none",
                    alertText: "Maximum ",
                    alertText2: " options allowed"
                },
                minCheckbox: {
                    regex: "none",
                    alertText: "Please select atleast",
                    alertText2: "GroupTag"
                },
                equals: {
                    regex: "none",
                    alertText: "Password does not match."
                },
                creditCard: {
                    regex: "none",
                    alertText: "Invalid credit card number"
                },
                phone: {
                    regex: /^([\+][0-9]{1,3}([ \.\-])?)?([\(][0-9]{1,6}[\)])?([0-9 \.\-]{1,32})(([A-Za-z \:]{1,11})?[0-9]{1,4}?)$/,
                    alertText: "Invalid phone number"
                },
                email: {
                    regex: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    alertText: "Invalid email address"
                },
				domain: {
                    regex: /^(?!:\/\/)([a-zA-Z0-9]+\.)?[a-zA-Z0-9][a-zA-Z0-9-]+\.[a-zA-Z]{2,6}?$/i,
                    alertText: "Invalid domain"
                },
                fullname: {
                    regex: /^([a-zA-Z]+[\'\,\.\-]?[a-zA-Z ]*)+[ ]([a-zA-Z]+[\'\,\.\-]?[a-zA-Z ]+)+$/,
                    alertText: "Must be first and last name"
                },
                zip: {
                    regex: /^\d{5}$|^\d{5}-\d{4}$/,
                    alertText: "Invalid zip format"
                },
                integer: {
                    regex: /^[\-\+]?\d+$/,
                    alertText: "Not a valid integer"
                },
                number: {
                    regex: /^[\-\+]?((([0-9]{1,3})([,][0-9]{3})*)|([0-9]+))?([\.]([0-9]+))?$/,
                    alertText: "Invalid floating decimal number"
                },
                date: {
                    func: function(e) {
                        var t = new RegExp(/^(\d{4})[\/\-\.](0?[1-9]|1[012])[\/\-\.](0?[1-9]|[12][0-9]|3[01])$/);
                        var n = t.exec(e.val());
                        if (n == null) return false;
                        var r = n[1];
                        var i = n[2] * 1;
                        var s = n[3] * 1;
                        var o = new Date(r, i - 1, s);
                        return o.getFullYear() == r && o.getMonth() == i - 1 && o.getDate() == s
                    },
                    alertText: "Invalid date, must be in YYYY-MM-DD format"
                },
                ipv4: {
                    regex: /^((([01]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))[.]){3}(([0-1]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))$/,
                    alertText: "Invalid IP address"
                },
                url: {
                    regex: /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
                    alertText: "Invalid URL"
                },
				/*urls: {
                    regex: /^([a-zA-Z0-9]+(\.[a-zA-Z0-9]+)+.*)$/i,
                    alertText: "Invalid URL"
                },*/
                onlyNumberSp: {
                    regex: /^[0-9\ ]+$/,
                    alertText: "Numbers only"
                },
                onlyLetterSp: {
                    regex: /^[a-zA-Z\ \']+$/,
                    alertText: "Letters only"
                },
                onlyLetterAccentSp: {
                    regex: /^[a-z\u00C0-\u017F\ ]+$/i,
                    alertText: "Letters only (accents allowed)"
                },
                onlyLetterNumber: {
                    regex: /^[0-9a-zA-Z]+$/,
                    alertText: "No special characters allowed"
                },
                ajaxUserCall: {
                    url: "ajaxValidateFieldUser",
                    extraData: "name=eric",
                    alertText: "This user is already taken",
                    alertTextLoad: "Validating, please wait"
                },
                ajaxUserCallPhp: {
                    url: "phpajax/ajaxValidateFieldUser.php",
                    extraData: "name=eric",
                    alertTextOk: "This username is available",
                    alertText: "This user is already taken",
                    alertTextLoad: "Validating, please wait"
                },
                ajaxNameCall: {
                    url: "ajaxValidateFieldName",
                    alertText: "This name is already taken",
                    alertTextOk: "This name is available",
                    alertTextLoad: "Validating, please wait"
                },
                ajaxNameCallPhp: {
                    url: "phpajax/ajaxValidateFieldName.php",
                    alertText: "This name is already taken",
                    alertTextLoad: "Validating, please wait"
                },
                validate2fields: {
                    alertText: "Please input HELLO"
                },
                dateFormat: {
                    regex: /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(?:(?:0?[1-9]|1[0-2])(\/|-)(?:0?[1-9]|1\d|2[0-8]))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(0?2(\/|-)29)(\/|-)(?:(?:0[48]00|[13579][26]00|[2468][048]00)|(?:\d\d)?(?:0[48]|[2468][048]|[13579][26]))$/,
                    alertText: "Invalid Date"
                },
                dateTimeFormat: {
                    regex: /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1}$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^((1[012]|0?[1-9]){1}\/(0?[1-9]|[12][0-9]|3[01]){1}\/\d{2,4}\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1})$/,
                    alertText: "Invalid Date or Date Format",
                    alertText2: "Expected Format: ",
                    alertText3: "mm/dd/yyyy hh:mm:ss AM|PM or ",
                    alertText4: "yyyy-mm-dd hh:mm:ss AM|PM"
                }
            }
        }
    };
    e.validationEngineLanguage.newLang()
})(jQuery);
(function(e) {
    "use strict";
    var t = {
        init: function(n) {
            var r = this;
            if (!r.data("jqv") || r.data("jqv") == null) {
                n = t._saveOptions(r, n);
                e(document).on("click", ".formError", function() {
                    e(this).fadeOut(150, function() {
                        e(this).closest(".formError").remove()
                    })
                })
            }
            return this
        },
        attach: function(n) {
            var r = this;
            var i;
            if (n) i = t._saveOptions(r, n);
            else i = r.data("jqv");
            i.validateAttribute = r.find("[data-validation-engine*=validate]").length ? "data-validation-engine" : "class";
            if (i.binded) {
                r.on(i.validationEventTrigger, "[" + i.validateAttribute + "*=validate]:not([type=checkbox]):not([type=radio]):not(.datepicker)", t._onFieldEvent);
                r.on("click", "[" + i.validateAttribute + "*=validate][type=checkbox],[" + i.validateAttribute + "*=validate][type=radio]", t._onFieldEvent);
                r.on(i.validationEventTrigger, "[" + i.validateAttribute + "*=validate][class*=datepicker]", {
                    delay: 300
                }, t._onFieldEvent)
            }
            if (i.autoPositionUpdate) {
                e(window).bind("resize", {
                    noAnimation: true,
                    formElem: r
                }, t.updatePromptsPosition)
            }
            r.on("click", "a[data-validation-engine-skip], a[class*='validate-skip'], button[data-validation-engine-skip], button[class*='validate-skip'], input[data-validation-engine-skip], input[class*='validate-skip']", t._submitButtonClick);
            r.removeData("jqv_submitButton");
            r.on("submit", t._onSubmitEvent);
            return this
        },
        detach: function() {
            var n = this;
            var r = n.data("jqv");
            n.off(r.validationEventTrigger, "[" + r.validateAttribute + "*=validate]:not([type=checkbox]):not([type=radio]):not(.datepicker)", t._onFieldEvent);
            n.off("click", "[" + r.validateAttribute + "*=validate][type=checkbox],[" + r.validateAttribute + "*=validate][type=radio]", t._onFieldEvent);
            n.off(r.validationEventTrigger, "[" + r.validateAttribute + "*=validate][class*=datepicker]", t._onFieldEvent);
            n.off("submit", t._onSubmitEvent);
            n.removeData("jqv");
            n.off("click", "a[data-validation-engine-skip], a[class*='validate-skip'], button[data-validation-engine-skip], button[class*='validate-skip'], input[data-validation-engine-skip], input[class*='validate-skip']", t._submitButtonClick);
            n.removeData("jqv_submitButton");
            if (r.autoPositionUpdate) e(window).off("resize", t.updatePromptsPosition);
            return this
        },
        validate: function(n) {
            var r = e(this);
            var i = null;
            var s;
            if (r.is("form") || r.hasClass("validationEngineContainer")) {
                if (r.hasClass("validating")) {
                    return false
                } else {
                    r.addClass("validating");
                    if (n) s = t._saveOptions(r, n);
                    else s = r.data("jqv");
                    var i = t._validateFields(this);
                    setTimeout(function() {
                        r.removeClass("validating")
                    }, 100);
                    if (i && s.onSuccess) {
                        s.onSuccess()
                    } else if (!i && s.onFailure) {
                        s.onFailure()
                    }
                }
            } else if (r.is("form") || r.hasClass("validationEngineContainer")) {
                r.removeClass("validating")
            } else {
                var o = r.closest("form, .validationEngineContainer");
                s = o.data("jqv") ? o.data("jqv") : e.validationEngine.defaults;
                i = t._validateField(r, s);
                if (i && s.onFieldSuccess) s.onFieldSuccess();
                else if (s.onFieldFailure && s.InvalidFields.length > 0) {
                    s.onFieldFailure()
                }
                return !i
            }
            if (s.onValidationComplete) {
                return !!s.onValidationComplete(o, i)
            }
            return i
        },
        updatePromptsPosition: function(n) {
            if (n && this == window) {
                var r = n.data.formElem;
                var i = n.data.noAnimation
            } else var r = e(this.closest("form, .validationEngineContainer"));
            var s = r.data("jqv");
            if (!s) s = t._saveOptions(r, s);
            r.find("[" + s.validateAttribute + "*=validate]").not(":disabled").each(function() {
                var n = e(this);
                if (s.prettySelect && n.is(":hidden")) n = r.find("#" + s.usePrefix + n.attr("id") + s.useSuffix);
                var o = t._getPrompt(n);
                var u = e(o).find(".formErrorContent").html();
                if (o) t._updatePrompt(n, e(o), u, undefined, false, s, i)
            });
            return this
        },
        showPrompt: function(e, n, r, i) {
            var s = this.closest("form, .validationEngineContainer");
            var o = s.data("jqv");
            if (!o) o = t._saveOptions(this, o);
            if (r) o.promptPosition = r;
            o.showArrow = i == true;
            t._showPrompt(this, e, n, false, o);
            return this
        },
        hide: function() {
            var n = e(this).closest("form, .validationEngineContainer");
            var r = n.data("jqv");
            if (!r) r = t._saveOptions(n, r);
            var i = r && r.fadeDuration ? r.fadeDuration : .3;
            var s;
            if (e(this).is("form") || e(this).hasClass("validationEngineContainer")) {
                s = "parentForm" + t._getClassName(e(this).attr("id"))
            } else {
                s = t._getClassName(e(this).attr("id")) + "formError"
            }
            e("." + s).fadeTo(i, 0, function() {
                e(this).closest(".formError").remove()
            });
            return this
        },
        hideAll: function() {
            var t = this;
            var n = t.data("jqv");
            var r = n ? n.fadeDuration : 300;
            e(".formError").fadeTo(r, 0, function() {
                e(this).closest(".formError").remove()
            });
            return this
        },
        _onFieldEvent: function(n) {
            var r = e(this);
            var i = r.closest("form, .validationEngineContainer");
            var s = i.data("jqv");
            if (!s) s = t._saveOptions(i, s);
            s.eventTrigger = "field";
            if (s.notEmpty == true) {
                if (r.val().length > 0) {
                    window.setTimeout(function() {
                        t._validateField(r, s)
                    }, n.data ? n.data.delay : 0)
                }
            } else {
                window.setTimeout(function() {
                    t._validateField(r, s)
                }, n.data ? n.data.delay : 0)
            }
        },
        _onSubmitEvent: function() {
            var n = e(this);
            var r = n.data("jqv");
            if (n.data("jqv_submitButton")) {
                var i = e("#" + n.data("jqv_submitButton"));
                if (i) {
                    if (i.length > 0) {
                        if (i.hasClass("validate-skip") || i.attr("data-validation-engine-skip") == "true") return true
                    }
                }
            }
            r.eventTrigger = "submit";
            var s = t._validateFields(n);
            if (s && r.ajaxFormValidation) {
                t._validateFormWithAjax(n, r);
                return false
            }
            if (r.onValidationComplete) {
                return !!r.onValidationComplete(n, s)
            }
            return s
        },
        _checkAjaxStatus: function(t) {
            var n = true;
            e.each(t.ajaxValidCache, function(e, t) {
                if (!t) {
                    n = false;
                    return false
                }
            });
            return n
        },
        _checkAjaxFieldStatus: function(e, t) {
            return t.ajaxValidCache[e] == true
        },
        _validateFields: function(n) {
            var r = n.data("jqv");
            var i = false;
            n.trigger("jqv.form.validating");
            var s = null;
            n.find("[" + r.validateAttribute + "*=validate]").not(":disabled").each(function() {
                var o = e(this);
                var u = [];
                if (e.inArray(o.attr("name"), u) < 0) {
                    i |= t._validateField(o, r);
                    if (i && s == null)
                        if (o.is(":hidden") && r.prettySelect) s = o = n.find("#" + r.usePrefix + t._jqSelector(o.attr("id")) + r.useSuffix);
                        else {
                            if (o.data("jqv-prompt-at") instanceof jQuery) {
                                o = o.data("jqv-prompt-at")
                            } else if (o.data("jqv-prompt-at")) {
                                o = e(o.data("jqv-prompt-at"))
                            }
                            s = o
                        }
                    if (r.doNotShowAllErrosOnSubmit) return false;
                    u.push(o.attr("name"));
                    if (r.showOneMessage == true && i) {
                        return false
                    }
                }
            });
            n.trigger("jqv.form.result", [i]);
            if (i) {
                if (r.scroll) {
                    var o = s.offset().top;
                    var u = s.offset().left;
                    var a = r.promptPosition;
                    if (typeof a == "string" && a.indexOf(":") != -1) a = a.substring(0, a.indexOf(":"));
                    if (a != "bottomRight" && a != "bottomLeft") {
                        var f = t._getPrompt(s);
                        if (f) {
                            o = f.offset().top
                        }
                    }
                    if (r.scrollOffset) {
                        o -= r.scrollOffset
                    }
                    if (r.isOverflown) {
                        var l = e(r.overflownDIV);
                        if (!l.length) return false;
                        var c = l.scrollTop();
                        var h = -parseInt(l.offset().top);
                        o += c + h - 5;
                        var p = e(r.overflownDIV).filter(":not(:animated)");
                        p.animate({
                            scrollTop: o
                        }, 1100, function() {
                            if (r.focusFirstField) s.focus()
                        })
                    } else {
                        e("html, body").animate({
                            scrollTop: o
                        }, 1100, function() {
                            if (r.focusFirstField) s.focus()
                        });
                        e("html, body").animate({
                            scrollLeft: u
                        }, 1100)
                    }
                } else if (r.focusFirstField) s.focus();
                return false
            }
            return true
        },
        _validateFormWithAjax: function(n, r) {
            var i = n.serialize();
            var s = r.ajaxFormValidationMethod ? r.ajaxFormValidationMethod : "GET";
            var o = r.ajaxFormValidationURL ? r.ajaxFormValidationURL : n.attr("action");
            var u = r.dataType ? r.dataType : "json";
            e.ajax({
                type: s,
                url: o,
                cache: false,
                dataType: u,
                data: i,
                form: n,
                methods: t,
                options: r,
                beforeSend: function() {
                    return r.onBeforeAjaxFormValidation(n, r)
                },
                error: function(e, n) {
                    if (r.onFailure) {
                        r.onFailure(e, n)
                    } else {
                        t._ajaxError(e, n)
                    }
                },
                success: function(i) {
                    if (u == "json" && i !== true) {
                        var s = false;
                        for (var o = 0; o < i.length; o++) {
                            var a = i[o];
                            var f = a[0];
                            var l = e(e("#" + f)[0]);
                            if (l.length == 1) {
                                var c = a[2];
                                if (a[1] == true) {
                                    if (c == "" || !c) {
                                        t._closePrompt(l)
                                    } else {
                                        if (r.allrules[c]) {
                                            var h = r.allrules[c].alertTextOk;
                                            if (h) c = h
                                        }
                                        if (r.showPrompts) t._showPrompt(l, c, "pass", false, r, true)
                                    }
                                } else {
                                    s |= true;
                                    if (r.allrules[c]) {
                                        var h = r.allrules[c].alertText;
                                        if (h) c = h
                                    }
                                    if (r.showPrompts) t._showPrompt(l, c, "", false, r, true)
                                }
                            }
                        }
                        r.onAjaxFormComplete(!s, n, i, r)
                    } else r.onAjaxFormComplete(true, n, i, r)
                }
            })
        },
        _validateField: function(n, r, i) {
            if (!n.attr("id")) {
                n.attr("id", "form-validation-field-" + e.validationEngine.fieldIdCounter);
                ++e.validationEngine.fieldIdCounter
            }
            if (n.hasClass(r.ignoreFieldsWithClass)) return false;
            if (!r.validateNonVisibleFields && (n.is(":hidden") && !r.prettySelect || n.parent().is(":hidden"))) return false;
            var s = n.attr(r.validateAttribute);
            var o = /validate\[(.*)\]/.exec(s);
            if (!o) return false;
            var u = o[1];
            var a = u.split(/\[|,|\]/);
            var f = false;
            var l = n.attr("name");
            var c = "";
            var h = "";
            var p = false;
            var d = false;
            r.isError = false;
            r.showArrow = true;
            if (r.maxErrorsPerField > 0) {
                d = true
            }
            var v = e(n.closest("form, .validationEngineContainer"));
            for (var m = 0; m < a.length; m++) {
                a[m] = a[m].replace(" ", "");
                if (a[m] === "") {
                    delete a[m]
                }
            }
            for (var m = 0, g = 0; m < a.length; m++) {
                if (d && g >= r.maxErrorsPerField) {
                    if (!p) {
                        var y = e.inArray("required", a);
                        p = y != -1 && y >= m
                    }
                    break
                }
                var b = undefined;
                switch (a[m]) {
                    case "required":
                        p = true;
                        b = t._getErrorMessage(v, n, a[m], a, m, r, t._required);
                        break;
                    case "custom":
                        b = t._getErrorMessage(v, n, a[m], a, m, r, t._custom);
                        break;
                    case "groupRequired":
                        var w = "[" + r.validateAttribute + "*=" + a[m + 1] + "]";
                        var E = v.find(w).eq(0);
                        if (E[0] != n[0]) {
                            t._validateField(E, r, i);
                            r.showArrow = true
                        }
                        b = t._getErrorMessage(v, n, a[m], a, m, r, t._groupRequired);
                        if (b) p = true;
                        r.showArrow = false;
                        break;
                    case "ajax":
                        b = t._ajax(n, a, m, r);
                        if (b) {
                            h = "load"
                        }
                        break;
                    case "minSize":
                        b = t._getErrorMessage(v, n, a[m], a, m, r, t._minSize);
                        break;
                    case "maxSize":
                        b = t._getErrorMessage(v, n, a[m], a, m, r, t._maxSize);
                        break;
                    case "min":
                        b = t._getErrorMessage(v, n, a[m], a, m, r, t._min);
                        break;
                    case "max":
                        b = t._getErrorMessage(v, n, a[m], a, m, r, t._max);
                        break;
                    case "past":
                        b = t._getErrorMessage(v, n, a[m], a, m, r, t._past);
                        break;
                    case "future":
                        b = t._getErrorMessage(v, n, a[m], a, m, r, t._future);
                        break;
                    case "dateRange":
                        var w = "[" + r.validateAttribute + "*=" + a[m + 1] + "]";
                        r.firstOfGroup = v.find(w).eq(0);
                        r.secondOfGroup = v.find(w).eq(1);
                        if (r.firstOfGroup[0].value || r.secondOfGroup[0].value) {
                            b = t._getErrorMessage(v, n, a[m], a, m, r, t._dateRange)
                        }
                        if (b) p = true;
                        r.showArrow = false;
                        break;
                    case "dateTimeRange":
                        var w = "[" + r.validateAttribute + "*=" + a[m + 1] + "]";
                        r.firstOfGroup = v.find(w).eq(0);
                        r.secondOfGroup = v.find(w).eq(1);
                        if (r.firstOfGroup[0].value || r.secondOfGroup[0].value) {
                            b = t._getErrorMessage(v, n, a[m], a, m, r, t._dateTimeRange)
                        }
                        if (b) p = true;
                        r.showArrow = false;
                        break;
                    case "maxCheckbox":
                        n = e(v.find("input[name='" + l + "']"));
                        b = t._getErrorMessage(v, n, a[m], a, m, r, t._maxCheckbox);
                        break;
                    case "minCheckbox":
                        n = e(v.find("input[name='" + l + "']"));
                        b = t._getErrorMessage(v, n, a[m], a, m, r, t._minCheckbox);
                        break;
                    case "equals":
                        b = t._getErrorMessage(v, n, a[m], a, m, r, t._equals);
                        break;
                    case "funcCall":
                        b = t._getErrorMessage(v, n, a[m], a, m, r, t._funcCall);
                        break;
                    case "creditCard":
                        b = t._getErrorMessage(v, n, a[m], a, m, r, t._creditCard);
                        break;
                    case "condRequired":
                        b = t._getErrorMessage(v, n, a[m], a, m, r, t._condRequired);
                        if (b !== undefined) {
                            p = true
                        }
                        break;
                    case "funcCallRequired":
                        b = t._getErrorMessage(v, n, a[m], a, m, r, t._funcCallRequired);
                        if (b !== undefined) {
                            p = true
                        }
                        break;
                    default:
                }
                var S = false;
                if (typeof b == "object") {
                    switch (b.status) {
                        case "_break":
                            S = true;
                            break;
                        case "_error":
                            b = b.message;
                            break;
                        case "_error_no_prompt":
                            return true;
                            break;
                        default:
                            break
                    }
                }
                if (m == 0 && u.indexOf("funcCallRequired") == 0 && b !== undefined) {
                    c += b + "<br/>";
                    r.isError = true;
                    g++;
                    S = true
                }
                if (S) {
                    break
                }
                if (typeof b == "string") {
                    c += b + "<br/>";
                    r.isError = true;
                    g++
                }
            }
            if (!p && !n.val() && n.val().length < 1 && e.inArray("equals", a) < 0) r.isError = false;
            var x = n.prop("type");
            var T = n.data("promptPosition") || r.promptPosition;
            if ((x == "radio" || x == "checkbox") && v.find("input[name='" + l + "']").size() > 1) {
                if (T === "inline") {
                    n = e(v.find("input[name='" + l + "'][type!=hidden]:last"))
                } else {
                    n = e(v.find("input[name='" + l + "'][type!=hidden]:first"))
                }
                r.showArrow = r.showArrowOnRadioAndCheckbox
            }
            if (n.is(":hidden") && r.prettySelect) {
                n = v.find("#" + r.usePrefix + t._jqSelector(n.attr("id")) + r.useSuffix)
            }
            if (r.isError && r.showPrompts) {
                t._showPrompt(n, c, h, false, r)
            } else {
                if (!f) t._closePrompt(n)
            }
            if (!f) {
                n.trigger("jqv.field.result", [n, r.isError, c])
            }
            var N = e.inArray(n[0], r.InvalidFields);
            if (N == -1) {
                if (r.isError) r.InvalidFields.push(n[0])
            } else if (!r.isError) {
                r.InvalidFields.splice(N, 1)
            }
            t._handleStatusCssClasses(n, r);
            if (r.isError && r.onFieldFailure) r.onFieldFailure(n);
            if (!r.isError && r.onFieldSuccess) r.onFieldSuccess(n);
            return r.isError
        },
        _handleStatusCssClasses: function(e, t) {
            if (t.addSuccessCssClassToField) e.removeClass(t.addSuccessCssClassToField);
            if (t.addFailureCssClassToField) e.removeClass(t.addFailureCssClassToField);
            if (t.addSuccessCssClassToField && !t.isError) e.addClass(t.addSuccessCssClassToField);
            if (t.addFailureCssClassToField && t.isError) e.addClass(t.addFailureCssClassToField)
        },
        _getErrorMessage: function(n, r, i, s, o, u, a) {
            var f = jQuery.inArray(i, s);
            if (i === "custom" || i === "funcCall" || i === "funcCallRequired") {
                var l = s[f + 1];
                i = i + "[" + l + "]";
                delete s[f]
            }
            var c = i;
            var h = r.attr("data-validation-engine") ? r.attr("data-validation-engine") : r.attr("class");
            var p = h.split(" ");
            var d;
            if (i == "future" || i == "past" || i == "maxCheckbox" || i == "minCheckbox") {
                d = a(n, r, s, o, u)
            } else {
                d = a(r, s, o, u)
            }
            if (d != undefined) {
                var v = t._getCustomErrorMessage(e(r), p, c, u);
                if (v) d = v
            }
            return d
        },
        _getCustomErrorMessage: function(e, n, r, i) {
            var s = false;
            var o = /^custom\[.*\]$/.test(r) ? t._validityProp["custom"] : t._validityProp[r];
            if (o != undefined) {
                s = e.attr("data-errormessage-" + o);
                if (s != undefined) return s
            }
            s = e.attr("data-errormessage");
            if (s != undefined) return s;
            var u = "#" + e.attr("id");
            if (typeof i.custom_error_messages[u] != "undefined" && typeof i.custom_error_messages[u][r] != "undefined") {
                s = i.custom_error_messages[u][r]["message"]
            } else if (n.length > 0) {
                for (var a = 0; a < n.length && n.length > 0; a++) {
                    var f = "." + n[a];
                    if (typeof i.custom_error_messages[f] != "undefined" && typeof i.custom_error_messages[f][r] != "undefined") {
                        s = i.custom_error_messages[f][r]["message"];
                        break
                    }
                }
            }
            if (!s && typeof i.custom_error_messages[r] != "undefined" && typeof i.custom_error_messages[r]["message"] != "undefined") {
                s = i.custom_error_messages[r]["message"]
            }
            return s
        },
        _validityProp: {
            required: "value-missing",
            custom: "custom-error",
            groupRequired: "value-missing",
            ajax: "custom-error",
            minSize: "range-underflow",
            maxSize: "range-overflow",
            min: "range-underflow",
            max: "range-overflow",
            past: "type-mismatch",
            future: "type-mismatch",
            dateRange: "type-mismatch",
            dateTimeRange: "type-mismatch",
            maxCheckbox: "range-overflow",
            minCheckbox: "range-underflow",
            equals: "pattern-mismatch",
            funcCall: "custom-error",
            funcCallRequired: "custom-error",
            creditCard: "pattern-mismatch",
            condRequired: "value-missing"
        },
        _required: function(t, n, r, i, s) {
            switch (t.prop("type")) {
                case "radio":
                case "checkbox":
                    if (s) {
                        if (!t.prop("checked")) {
                            return i.allrules[n[r]].alertTextCheckboxMultiple
                        }
                        break
                    }
                    var o = t.closest("form, .validationEngineContainer");
                    var u = t.attr("name");
                    if (o.find("input[name='" + u + "']:checked").size() == 0) {
                        if (o.find("input[name='" + u + "']:visible").size() == 1) return i.allrules[n[r]].alertTextCheckboxe;
                        else return i.allrules[n[r]].alertTextCheckboxMultiple
                    }
                    break;
                case "text":
                case "password":
                case "textarea":
                case "file":
                case "select-one":
                case "select-multiple":
                default:
                    var a = e.trim(t.val());
                    var f = e.trim(t.attr("data-validation-placeholder"));
                    var l = e.trim(t.attr("placeholder"));
                    if (!a || f && a == f || l && a == l) {
                        return i.allrules[n[r]].alertText
                    }
                    break
            }
        },
        _groupRequired: function(n, r, i, s) {
            var o = "[" + s.validateAttribute + "*=" + r[i + 1] + "]";
            var u = false;
            n.closest("form, .validationEngineContainer").find(o).each(function() {
                if (!t._required(e(this), r, i, s)) {
                    u = true;
                    return false
                }
            });
            if (!u) {
                return s.allrules[r[i]].alertText
            }
        },
        _custom: function(e, t, n, r) {
            var i = t[n + 1];
            var s = r.allrules[i];
            var o;
            if (!s) {
                alert("jqv:custom rule not found - " + i);
                return
            }
            if (s["regex"]) {
                var u = s.regex;
                if (!u) {
                    alert("jqv:custom regex not found - " + i);
                    return
                }
                var a = new RegExp(u);
                if (!a.test(e.val())) return r.allrules[i].alertText
            } else if (s["func"]) {
                o = s["func"];
                if (typeof o !== "function") {
                    alert("jqv:custom parameter 'function' is no function - " + i);
                    return
                }
                if (!o(e, t, n, r)) return r.allrules[i].alertText
            } else {
                alert("jqv:custom type not allowed " + i);
                return
            }
        },
        _funcCall: function(e, t, n, r) {
            var i = t[n + 1];
            var s;
            if (i.indexOf(".") > -1) {
                var o = i.split(".");
                var u = window;
                while (o.length) {
                    u = u[o.shift()]
                }
                s = u
            } else s = window[i] || r.customFunctions[i];
            if (typeof s == "function") return s(e, t, n, r)
        },
        _funcCallRequired: function(e, n, r, i) {
            return t._funcCall(e, n, r, i)
        },
        _equals: function(t, n, r, i) {
            var s = n[r + 1];
            if (t.val() != e("#" + s).val()) return i.allrules.equals.alertText
        },
        _maxSize: function(e, t, n, r) {
            var i = t[n + 1];
            var s = e.val().length;
            if (s > i) {
                var o = r.allrules.maxSize;
                return o.alertText + i + o.alertText2
            }
        },
        _minSize: function(e, t, n, r) {
            var i = t[n + 1];
            var s = e.val().length;
            if (s < i) {
                var o = r.allrules.minSize;
                return o.alertText + i + o.alertText2
            }
        },
        _min: function(e, t, n, r) {
            var i = parseFloat(t[n + 1]);
            var s = parseFloat(e.val());
            if (s < i) {
                var o = r.allrules.min;
                if (o.alertText2) return o.alertText + i + o.alertText2;
                return o.alertText + i
            }
        },
        _max: function(e, t, n, r) {
            var i = parseFloat(t[n + 1]);
            var s = parseFloat(e.val());
            if (s > i) {
                var o = r.allrules.max;
                if (o.alertText2) return o.alertText + i + o.alertText2;
                return o.alertText + i
            }
        },
        _past: function(n, r, i, s, o) {
            var u = i[s + 1];
            var a = e(n.find("*[name='" + u.replace(/^#+/, "") + "']"));
            var f;
            if (u.toLowerCase() == "now") {
                f = new Date
            } else if (undefined != a.val()) {
                if (a.is(":disabled")) return;
                f = t._parseDate(a.val())
            } else {
                f = t._parseDate(u)
            }
            var l = t._parseDate(r.val());
            if (l > f) {
                var c = o.allrules.past;
                if (c.alertText2) return c.alertText + t._dateToString(f) + c.alertText2;
                return c.alertText + t._dateToString(f)
            }
        },
        _future: function(n, r, i, s, o) {
            var u = i[s + 1];
            var a = e(n.find("*[name='" + u.replace(/^#+/, "") + "']"));
            var f;
            if (u.toLowerCase() == "now") {
                f = new Date
            } else if (undefined != a.val()) {
                if (a.is(":disabled")) return;
                f = t._parseDate(a.val())
            } else {
                f = t._parseDate(u)
            }
            var l = t._parseDate(r.val());
            if (l < f) {
                var c = o.allrules.future;
                if (c.alertText2) return c.alertText + t._dateToString(f) + c.alertText2;
                return c.alertText + t._dateToString(f)
            }
        },
        _isDate: function(e) {
            var t = new RegExp(/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(?:(?:0?[1-9]|1[0-2])(\/|-)(?:0?[1-9]|1\d|2[0-8]))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(0?2(\/|-)29)(\/|-)(?:(?:0[48]00|[13579][26]00|[2468][048]00)|(?:\d\d)?(?:0[48]|[2468][048]|[13579][26]))$/);
            return t.test(e)
        },
        _isDateTime: function(e) {
            var t = new RegExp(/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1}$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^((1[012]|0?[1-9]){1}\/(0?[1-9]|[12][0-9]|3[01]){1}\/\d{2,4}\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1})$/);
            return t.test(e)
        },
        _dateCompare: function(e, t) {
            return new Date(e.toString()) < new Date(t.toString())
        },
        _dateRange: function(e, n, r, i) {
            if (!i.firstOfGroup[0].value && i.secondOfGroup[0].value || i.firstOfGroup[0].value && !i.secondOfGroup[0].value) {
                return i.allrules[n[r]].alertText + i.allrules[n[r]].alertText2
            }
            if (!t._isDate(i.firstOfGroup[0].value) || !t._isDate(i.secondOfGroup[0].value)) {
                return i.allrules[n[r]].alertText + i.allrules[n[r]].alertText2
            }
            if (!t._dateCompare(i.firstOfGroup[0].value, i.secondOfGroup[0].value)) {
                return i.allrules[n[r]].alertText + i.allrules[n[r]].alertText2
            }
        },
        _dateTimeRange: function(e, n, r, i) {
            if (!i.firstOfGroup[0].value && i.secondOfGroup[0].value || i.firstOfGroup[0].value && !i.secondOfGroup[0].value) {
                return i.allrules[n[r]].alertText + i.allrules[n[r]].alertText2
            }
            if (!t._isDateTime(i.firstOfGroup[0].value) || !t._isDateTime(i.secondOfGroup[0].value)) {
                return i.allrules[n[r]].alertText + i.allrules[n[r]].alertText2
            }
            if (!t._dateCompare(i.firstOfGroup[0].value, i.secondOfGroup[0].value)) {
                return i.allrules[n[r]].alertText + i.allrules[n[r]].alertText2
            }
        },
        _maxCheckbox: function(e, t, n, r, i) {
            var s = n[r + 1];
            var o = t.attr("name");
            var u = e.find("input[name='" + o + "']:checked").size();
            if (u > s) {
                i.showArrow = false;
                if (i.allrules.maxCheckbox.alertText2) return i.allrules.maxCheckbox.alertText + " " + s + " " + i.allrules.maxCheckbox.alertText2;
                return i.allrules.maxCheckbox.alertText
            }
        },
        _minCheckbox: function(e, t, n, r, i) {
            var s = n[r + 1];
            var o = t.attr("name");
            var u = e.find("input[name='" + o + "']:checked").size();
            if (u < s) {
                i.showArrow = false;
                return i.allrules.minCheckbox.alertText + " " + s + " " + i.allrules.minCheckbox.alertText2
            }
        },
        _creditCard: function(e, t, n, r) {
            var i = false,
                s = e.val().replace(/ +/g, "").replace(/-+/g, "");
            var o = s.length;
            if (o >= 14 && o <= 16 && parseInt(s) > 0) {
                var u = 0,
                    n = o - 1,
                    a = 1,
                    f, l = new String;
                do {
                    f = parseInt(s.charAt(n));
                    l += a++ % 2 == 0 ? f * 2 : f
                } while (--n >= 0);
                for (n = 0; n < l.length; n++) {
                    u += parseInt(l.charAt(n))
                }
                i = u % 10 == 0
            }
            if (!i) return r.allrules.creditCard.alertText
        },
        _ajax: function(n, r, i, s) {
            var o = r[i + 1];
            var u = s.allrules[o];
            var a = u.extraData;
            var f = u.extraDataDynamic;
            var l = {
                fieldId: n.attr("id"),
                fieldValue: n.val()
            };
            if (typeof a === "object") {
                e.extend(l, a)
            } else if (typeof a === "string") {
                var c = a.split("&");
                for (var i = 0; i < c.length; i++) {
                    var h = c[i].split("=");
                    if (h[0] && h[0]) {
                        l[h[0]] = h[1]
                    }
                }
            }
            if (f) {
                var p = [];
                var d = String(f).split(",");
                for (var i = 0; i < d.length; i++) {
                    var v = d[i];
                    if (e(v).length) {
                        var m = n.closest("form, .validationEngineContainer").find(v).val();
                        var g = v.replace("#", "") + "=" + escape(m);
                        l[v.replace("#", "")] = m
                    }
                }
            }
            if (s.eventTrigger == "field") {
                delete s.ajaxValidCache[n.attr("id")]
            }
            if (!s.isError && !t._checkAjaxFieldStatus(n.attr("id"), s)) {
                e.ajax({
                    type: s.ajaxFormValidationMethod,
                    url: u.url,
                    cache: false,
                    dataType: "json",
                    data: l,
                    field: n,
                    rule: u,
                    methods: t,
                    options: s,
                    beforeSend: function() {},
                    error: function(e, n) {
                        if (s.onFailure) {
                            s.onFailure(e, n)
                        } else {
                            t._ajaxError(e, n)
                        }
                    },
                    success: function(r) {
                        var i = r[0];
                        var o = e("#" + i).eq(0);
                        if (o.length == 1) {
                            var a = r[1];
                            var f = r[2];
                            if (!a) {
                                s.ajaxValidCache[i] = false;
                                s.isError = true;
                                if (f) {
                                    if (s.allrules[f]) {
                                        var l = s.allrules[f].alertText;
                                        if (l) {
                                            f = l
                                        }
                                    }
                                } else f = u.alertText;
                                if (s.showPrompts) t._showPrompt(o, f, "", true, s)
                            } else {
                                s.ajaxValidCache[i] = true;
                                if (f) {
                                    if (s.allrules[f]) {
                                        var l = s.allrules[f].alertTextOk;
                                        if (l) {
                                            f = l
                                        }
                                    }
                                } else f = u.alertTextOk;
                                if (s.showPrompts) {
                                    if (f) t._showPrompt(o, f, "pass", true, s);
                                    else t._closePrompt(o)
                                }
                                if (s.eventTrigger == "submit") n.closest("form").submit()
                            }
                        }
                        o.trigger("jqv.field.result", [o, s.isError, f])
                    }
                });
                return u.alertTextLoad
            }
        },
        _ajaxError: function(e, t) {
            if (e.status == 0 && t == null) alert("The page is not served from a server! ajax call failed");
            else if (typeof console != "undefined") console.log("Ajax error: " + e.status + " " + t)
        },
        _dateToString: function(e) {
            return e.getFullYear() + "-" + (e.getMonth() + 1) + "-" + e.getDate()
        },
        _parseDate: function(e) {
            var t = e.split("-");
            if (t == e) t = e.split("/");
            if (t == e) {
                t = e.split(".");
                return new Date(t[2], t[1] - 1, t[0])
            }
            return new Date(t[0], t[1] - 1, t[2])
        },
        _showPrompt: function(n, r, i, s, o, u) {
            if (n.data("jqv-prompt-at") instanceof jQuery) {
                n = n.data("jqv-prompt-at")
            } else if (n.data("jqv-prompt-at")) {
                n = e(n.data("jqv-prompt-at"))
            }
            var a = t._getPrompt(n);
            if (u) a = false;
            if (e.trim(r)) {
                if (a) t._updatePrompt(n, a, r, i, s, o);
                else t._buildPrompt(n, r, i, s, o)
            }
        },
        _buildPrompt: function(n, r, i, s, o) {
            var u = e("<div>");
			//custom error message inside field 
			var fs = '<div class="line1"><!-- --></div><div class="line2"><!-- --></div><div class="line3"><!-- --></div><div class="line4"><!-- --></div><div class="line5"><!-- --></div><div class="line6"><!-- --></div><div class="line7"><!-- --></div><div class="line8"><!-- --></div><div class="line9"><!-- --></div><div class="line10">';
			if(n.attr('data-inside') == 'yes'){
				fs='';
				var j = n.outerWidth() - 4;
				var k = n.outerHeight() - 4;
				u.css({
					width: j+'px',
					height: k+'px'
				});
				u.addClass("fs-insideFrmerror");
				$('<i class="ico-cross2"></i>').appendTo(u);
			}
			
			if(n.hasClass('selectValid')){
				n.parent().addClass('selectValid-error');
			}
			
            u.addClass(t._getClassName(n.attr("id")) + "formError");
            u.addClass("parentForm" + t._getClassName(n.closest("form, .validationEngineContainer").attr("id")));
            u.addClass("formError");
			u.addClass("fs-formError");
            switch (i) {
                case "pass":
                    u.addClass("greenPopup");
                    break;
                case "load":
                    u.addClass("blackPopup");
                    break;
                default:
            }
            if (s) u.addClass("ajaxed");
            var a = e("<div>").addClass("formErrorContent").html(r).appendTo(u);
            var f = n.data("promptPosition") || o.promptPosition;
            if (o.showArrow) {
                var l = e("<div>").addClass("formErrorArrow");
                if (typeof f == "string") {
                    var c = f.indexOf(":");
                    if (c != -1) f = f.substring(0, c)
                }
                switch (f) {
                    case "bottomLeft":
                    case "bottomRight":
                        u.find(".formErrorContent").before(l);
                        l.addClass("formErrorArrowBottom").html(fs);						
                        break;
                    case "topLeft":
                    case "topRight":
                        l.html('<div class="line10"><!-- --></div><div class="line9"><!-- --></div><div class="line8"><!-- --></div><div class="line7"><!-- --></div><div class="line6"><!-- --></div><div class="line5"><!-- --></div><div class="line4"><!-- --></div><div class="line3"><!-- --></div><div class="line2"><!-- --></div><div class="line1"><!-- --></div>');
                        u.append(l);
                        break
                }
            }
            if (o.addPromptClass) u.addClass(o.addPromptClass);
            var h = n.attr("data-required-class");
            if (h !== undefined) {
                u.addClass(h)
            } else {
                if (o.prettySelect) {
                    if (e("#" + n.attr("id")).next().is("select")) {
                        var p = e("#" + n.attr("id").substr(o.usePrefix.length).substring(o.useSuffix.length)).attr("data-required-class");
                        if (p !== undefined) {
                            u.addClass(p)
                        }
                    }
                }
            }
            u.css({
                opacity: 0
            });
            if (f === "inline") {
                u.addClass("inline");
                if (typeof n.attr("data-prompt-target") !== "undefined" && e("#" + n.attr("data-prompt-target")).length > 0) {
                    u.appendTo(e("#" + n.attr("data-prompt-target")))
                } else {
                    n.after(u)
                }
            } else {
                n.before(u)
            }
            var c = t._calculatePosition(n, u, o);
            u.css({
                position: f === "inline" ? "relative" : "absolute",
                top: c.callerTopPosition,
                left: c.callerleftPosition,
                marginTop: c.marginTopSize,
                opacity: 0
            }).data("callerField", n);
            if (o.autoHidePrompt) {
                setTimeout(function() {
                    u.animate({
                        opacity: 0
                    }, function() {
                        u.closest(".formError").remove()
                    })
                }, o.autoHideDelay)
            }
            return u.animate({
                opacity: 1
            })
        },
        _updatePrompt: function(e, n, r, i, s, o, u) {
            if (n) {
                if (typeof i !== "undefined") {
                    if (i == "pass") n.addClass("greenPopup");
                    else n.removeClass("greenPopup");
                    if (i == "load") n.addClass("blackPopup");
                    else n.removeClass("blackPopup")
                }
                if (s) n.addClass("ajaxed");
                else n.removeClass("ajaxed");
                n.find(".formErrorContent").html(r);
                var a = t._calculatePosition(e, n, o);
                var f = {
                    top: a.callerTopPosition,
                    left: a.callerleftPosition,
                    marginTop: a.marginTopSize,
                    opacity: 1
                };
                n.css({
                    opacity: 0,
                    display: "block"
                });
                if (u) n.css(f);
                else n.animate(f)
            }
        },
        _closePrompt: function(e) {
            var n = t._getPrompt(e);
            if (n) n.fadeTo("fast", 0, function() {
                n.closest(".formError").remove()
            })
        },
        closePrompt: function(e) {
            return t._closePrompt(e)
        },
        _getPrompt: function(n) {
            var r = e(n).closest("form, .validationEngineContainer").attr("id");
            var i = t._getClassName(n.attr("id")) + "formError";
            var s = e("." + t._escapeExpression(i) + ".parentForm" + t._getClassName(r))[0];
            if (s) return e(s)
        },
        _escapeExpression: function(e) {
            return e.replace(/([#;&,\.\+\*\~':"\!\^$\[\]\(\)=>\|])/g, "\\$1")
        },
        isRTL: function(t) {
            var n = e(document);
            var r = e("body");
            var i = t && t.hasClass("rtl") || t && (t.attr("dir") || "").toLowerCase() === "rtl" || n.hasClass("rtl") || (n.attr("dir") || "").toLowerCase() === "rtl" || r.hasClass("rtl") || (r.attr("dir") || "").toLowerCase() === "rtl";
            return Boolean(i)
        },
        _calculatePosition: function(e, t, n) {
            var r, i, s;
            var o = e.width();
            var u = e.position().left;
            var a = e.position().top;
            var f = e.height();
            var l = t.height();
            r = i = 0;
            s = -l;
            var c = e.data("promptPosition") || n.promptPosition;
            var h = "";
            var p = "";
            var d = 0;
            var v = 0;
            if (typeof c == "string") {
                if (c.indexOf(":") != -1) {
                    h = c.substring(c.indexOf(":") + 1);
                    c = c.substring(0, c.indexOf(":"));
                    if (h.indexOf(",") != -1) {
                        p = h.substring(h.indexOf(",") + 1);
                        h = h.substring(0, h.indexOf(","));
                        v = parseInt(p);
                        if (isNaN(v)) v = 0
                    }
                    d = parseInt(h);
                    if (isNaN(h)) h = 0
                }
            }
            switch (c) {
                default:
                    case "topRight":
                    i += u + o - 27;r += a;
                break;
                case "topLeft":
                        r += a;i += u;
                    break;
                case "centerRight":
                        r = a + 4;s = 0;i = u + e.outerWidth(true) + 5;
                    break;
                case "centerLeft":
                        i = u - (t.width() + 2);r = a + 4;s = 0;
                    break;
                case "bottomLeft":
                        r = a + e.height() - 5;s = 0;i = u;
						// custom error message position inside field
						if(e.attr('data-inside') == 'yes'){
							r = a + 2 ;s = 0;i = u + 2;
						}
                    break;
                case "bottomRight":
                        i = u + o - 27;r = a + e.height() + 5;s = 0;
                    break;
                case "inline":
                        i = 0;r = 0;s = 0
            }
            i += d;
            r += v;
            return {
                callerTopPosition: r + "px",
                callerleftPosition: i + "px",
                marginTopSize: s + "px"
            }
        },
        _saveOptions: function(t, n) {
            if (e.validationEngineLanguage) var r = e.validationEngineLanguage.allRules;
            else e.error("jQuery.validationEngine rules are not loaded, plz add localization files to the page");
            e.validationEngine.defaults.allrules = r;
            var i = e.extend(true, {}, e.validationEngine.defaults, n);
            t.data("jqv", i);
            return i
        },
        _getClassName: function(e) {
            if (e) return e.replace(/:/g, "_").replace(/\./g, "_")
        },
        _jqSelector: function(e) {
            return e.replace(/([;&,\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g, "\\$1")
        },
        _condRequired: function(e, n, r, i) {
            var s, o;
            for (s = r + 1; s < n.length; s++) {
                o = jQuery("#" + n[s]).first();
                if (o.length && t._required(o, ["required"], 0, i, true) == undefined) {
                    return t._required(e, ["required"], 0, i)
                }
            }
        },
        _submitButtonClick: function(t) {
            var n = e(this);
            var r = n.closest("form, .validationEngineContainer");
            r.data("jqv_submitButton", n.attr("id"))
        }
    };
    e.fn.validationEngine = function(n) {
        var r = e(this);
        if (!r[0]) return r;
        if (typeof n == "string" && n.charAt(0) != "_" && t[n]) {
            if (n != "showPrompt" && n != "hide" && n != "hideAll") t.init.apply(r);
            return t[n].apply(r, Array.prototype.slice.call(arguments, 1))
        } else if (typeof n == "object" || !n) {
            t.init.apply(r, arguments);
            return t.attach.apply(r)
        } else {
            e.error("Method " + n + " does not exist in jQuery.validationEngine")
        }
    };
    e.validationEngine = {
        fieldIdCounter: 0,
        defaults: {
            validationEventTrigger: "",
            scroll: false,
            focusFirstField: true,
            showPrompts: true,
            validateNonVisibleFields: false,
            ignoreFieldsWithClass: "ignoreMe",
            promptPosition: "bottomLeft",
            bindMethod: "bind",
            inlineAjax: false,
            ajaxFormValidation: false,
            ajaxFormValidationURL: false,
            ajaxFormValidationMethod: "get",
            onAjaxFormComplete: e.noop,
            onBeforeAjaxFormValidation: e.noop,
            onValidationComplete: false,
            doNotShowAllErrosOnSubmit: false,
            custom_error_messages: {},
            binded: true,
            notEmpty: false,
            showArrow: true,
            showArrowOnRadioAndCheckbox: false,
            isError: false,
            maxErrorsPerField: false,
            ajaxValidCache: {},
            autoPositionUpdate: false,
            InvalidFields: [],
            onFieldSuccess: false,
            onFieldFailure: false,
            onSuccess: false,
            onFailure: false,
            validateAttribute: "class",
            addSuccessCssClassToField: "",
            addFailureCssClassToField: "",
            autoHidePrompt: true,
            autoHideDelay: 5,
            fadeDuration: 300,
            prettySelect: false,
            addPromptClass: "",
            usePrefix: "",
            useSuffix: "",
            showOneMessage: false
        }
    };
    e(function() {
        e.validationEngine.defaults.promptPosition = t.isRTL() ? "bottomLeft" : "bottomLeft"
    })
})(jQuery)

var urlFormat = /^([a-zA-Z0-9]+(\.[a-zA-Z0-9]+)+.*)$/
function checkLEGAL(field, rules, i, options){
	var match = field.val().match(urlFormat)
	if (!match) return "Invalid URL"
	
}
var fsurlFormat = /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}$/ ///^([a-zA-Z0-9]+(\.[a-zA-Z0-9]+)+.*)$/
function checkLEGALurl(field, rules, i, options){
	var match = field.val().match(fsurlFormat)
	if (!match) return "Invalid URL"
	
}
function checkAnydomain(field, rules, i, options){
	var match = field.val().match(fsurlFormat)
	if (!match) return "Invalid URL"
	
}

var checkdomainformat = /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]$/ ///^([a-zA-Z0-9]+(\.[a-zA-Z0-9]+)+.*)$/
function checkLEGALname(field, rules, i, options){
	var match = field.val().match(checkdomainformat)
	if (!match) return "Invalid domain"
	
}

function checkLEGALdomain(field, rules, i, options){
    nname= $('#userdomain').val();
                nname = nname.replace('http://','');
                nname = nname.replace('https://','');
                nname = nname.replace('www.','');
                
	var match = nname.match(fsurlFormat)
	if (!match) return "Invalid URL"
	
}

var URL_regex = /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i

function checksucialURL(field, rules, i, options){
	var match = field.val().match(URL_regex);
	var errmsg = field.attr('data-errormessage-custom-error');
	fieldVal = field.val().split('.com/');
	fieldVal2 = field.val().split('.com');
	
	if (!match || fieldVal[1] == '' || fieldVal2[1] == '') return errmsg
}

function social_reviewsValidation(field, rules, i, options){
	var errmsg = field.attr('data-errormessage-custom-error');
	var field_value = field.val();
	field_value = field_value.replace('http://','');
	field_value = field_value.replace('https://','');
	field_value = field_value.replace('www.','');
	field_value = field_value.replace('com/','com');
	var fieldVal = field_value.split('.com');
	var type = $('.profile_list li a.active').attr('role').toLowerCase();
	if(fieldVal[0] == type && fieldVal[1] != ''){
	}else{
		return errmsg;
		console.log(errmsg)
	}
}

function url_check(field, rules, i, options){
	var match = field.val().match(URL_regex);
	var errmsg = field.attr('data-errormessage-custom-error');
	if(field.val().charAt(0) == '#'){
	}else{
		if (!match) return errmsg
	}
}

// JavaScript Document
//vow popup function 
$(document).on('click', '.vowBtn', function () {
	$('.frmContent').hide();
	var elem = $(this).attr('data-type');
	if(elem == 'signup'){
		$('#signup').find('button[type=submit]').html('Sign Up');	
		$('#signup').find('.a.vowact').show();
		$('#signup').show().find('header').html(popupHeader[0]['signup']);
		$('#signup').find('.pmsg').html(popMessage[0]['signup']);
	}else if(elem == 'signin'){
		$('#signin').find('header').html(popupHeader[0]['signin']);
		$('#signin').find('.pmsg').html(popMessage[0]['signin']);
		$('.frmContent').hide();
		$('#signin').fadeIn();	
	}else {		
		$('#validate').show().find('header').html(popupHeader[0]['validate']);
		$('#validate').find('.pmsg').html(popMessage[0]['validate']);
		$('#validate').show();
	}
	if($('html').hasClass('mm-opening')){
		$('.navBtn').click();
	}	
	if($('html').hasClass('w4r_menu_Vertical')){
		//$('.navBtn_close ').click();
	}
	$.fancybox({
		href: '#popup',
		width: 620,
		height:'auto',
		fitToView : false,
		autoSize : false,
		afterClose: function() {
			$('#signup').find('.goBack').remove();
		}
	});
	return false;
});


$('._numbField_ a').on('click', function(e) {
	
	var $input = $(this).parent().prev('input');
	var $value = $($input).val();
	if($(this).hasClass('active')){
		//do nothing
	}else {
	$(this).parents('._numbField_').find('a').removeClass('active');
	$(this).addClass('active');
	if($(this).attr('data-type') == 'cell'){
		if($(this).hasClass('digits10')){
			$($input).attr('class', 'cell');
		}else{
			$($input).attr('class', 'cell1');
		}
	}
	/*if($(this).attr('data-type') == 'phone'){
		console.log('sss');
		if($(this).hasClass('digits10')){
			$($input).attr('class', 'phoneMask');
		}else{
			$($input).attr('class', 'phoneMask1');
		}
	}*/
	if($(this).attr('data-type') == 'fax'){
		if($(this).hasClass('digits10')){
			$($input).attr('class', 'fax');
		}else{
			$($input).attr('class', 'fax1');
		}
	}
	numberMasking();
	$($input).val('');
	}
	$($input).focus();
	return false;
});


$(".numeric").keydown(function (e) {
	if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
		(e.keyCode == 65 && e.ctrlKey === true) || 
		(e.keyCode >= 35 && e.keyCode <= 40)) {
		return;
	}
	if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
		e.preventDefault();
	}
}); 
try{
$("form").validationEngine({autoHidePrompt:true,autoHideDelay: 1500,maxErrorsPerField: 1});
}catch(err) {}
$(document.body).on('click', '.vowact' ,function(){
	var elemAction 	= 	$(this).attr('data-action');
	var header		=	$('#'+elemAction).find('header');
	var msg			=	$('#'+elemAction).find('.pmsg');
	var $form 		= 	$(this).parents('form');	
	if(elemAction == 'validate'){
		var valid 	= $form.validationEngine('validate');
	}else {
		var valid 	=  true;
	}
	if(elemAction == 'forgotpin'){
		$('#forgotpin').find('.customErr').remove();
		$('#forgotpin').find('input').val('');
	}
	//$form.validationEngine('validate');
	//var valid 	=  true;
	if(valid == true){
		if(elemAction == 'validate' && $(this).attr('data-type') != 'back'){
			$('#signup').append(loaderDiv);
			$.post('vowsignup', $("#vowsignupFrm").serialize(), function(data) {
				var data = data;
                                if(data=='Error-recaptcha'){
//                                    thisevent.removeAttr('disabled');
//                                    thisevent.html(oldbtntxt);
//                                   //$('#'+FrmId).find('.Error-recaptcha').html('Robot verification failed, please try again.');
                                    captchaError($('#vowsignupFrm'));
                                }else{
                                    if(data=='already'){
                                            $('#vowsignupFrm').find('input[name="email"]').parent().append('<span class="customErr nefta">There is already an account for this email address. <a href="" class="a vowact" data-action="signin"><strong>Log in</strong></a> or <a href="" class="b vowact" data-action="forgotpin"><strong>Forgot Pin</strong></a></span>');
                                    }else{

                                            $('.product-listing').find('.vowBtn').attr('data-type','validate');
                                            $('.pms').find('.vowBtn').attr('data-type','validate');
                                            $('#signup').find('.customErr').remove();
                                            $(header).html(popupHeader[0][elemAction]);
                                            $(msg).html(popMessage[0][elemAction]);
                                            $('.frmContent').hide();
                                            $('#'+elemAction).fadeIn();		
                                            if(elemAction == 'update'){$('#'+elemAction).find('.goBack').attr('data-action', $(this).parents('.frmContent').attr('id'));}
                                            if($('#refreshrecvow').val()==0){
                                                    $('#triggerUpdateInfo').val(0);
                                                    setInterval(refreshvowstatusdata,5000);
                                            }
                                    }
                                }
				$('#signup').find('.cLoaderP').remove();
			});
		}else{
			$(header).html(popupHeader[0][elemAction]);
			$(msg).html(popMessage[0][elemAction]);
			$('.frmContent').hide();
			$('#'+elemAction).fadeIn();	
			if($(this).hasClass('chngEmail')){
				$(header).html(popupHeader[0]['update']);
				$(msg).html(popMessage[0]['signup']);
				$('#triggerUpdateInfo').val(1);
				$('#signup').find('.vowact.mem').hide();
				$('#signup').find('footer').find('.goBack').remove();
				$('#signup').find('footer').prepend('<a href="" class="a vowact goBack" data-action="validate" data-type="back">&lt; Back</a>');
				$('#signup').find('button[type=submit]').html('Update');		
			}
			if(elemAction == 'update'){$('#'+elemAction).find('.goBack').attr('data-action', $(this).parents('.frmContent').attr('id'));}
			
		}
		
		//Call the Ajax
	}else {
		$form.validationEngine();
	}
	return false;
});

function captchaError(elem){
	$(elem).find('.g-recaptcha').append('<div class="Error-recaptcha" onClick="$(this).remove();">Robot verification failed, please try again.</div>').fadeIn();
	setTimeout(function(){
		$(elem).find('.g-recaptcha').find('.Error-recaptcha').fadeOut(function() {
			$('.Error-recaptcha').remove();
		});
	},1500);
}
//For SignIN
$(document.body).on('click', '.vowSigninBtn' ,function(e){
	e.preventDefault();
	var form = $(this).parents('form')[0];
	FrmId = form.id;
	var valid 	= $("#"+FrmId).validationEngine('validate');
	if(valid==true){
		$('#signin').append(loaderDiv);
		$('#signin').find('.customErr').remove();
		var formdata = $("#"+FrmId).serialize()+'&signin=1';
		$.post('vowsignup', formdata, function(data) {
			var arraydata = data.split('_w4r_');
			if(arraydata['0']==1){
                            $.fancybox.close();
                            $('body').removeClass('wowListing');
                            //Search should not reset on vow signin - Against this card - https://trello.com/c/HitPsdJN/5077-vow-login-causes-query-reset
                            $("#loginfromvow").val("1");
                            //--------------------------------------------------
                            $(".listingsearchBtn").trigger("click");

                            //These blow lines for remove vow layer after login user?? But need to recheck this case in listing main page??SHAM
                            $(".vowLayer").remove();
                            $(".product-listing article").removeClass('blur');
                            //change topbar vow layer
                            showsignuplayer(arraydata['1']);
			}else{
				if(data=='Pin entered is not correct.'){
					$('#'+FrmId).find('input[name="phone"]').parent().append('<span class="customErr nefta">'+data+'</span>');
				}else{
					$('#'+FrmId).find('input[name="email"]').parent().append('<span class="customErr nefta">'+data+'</span>');
				}
			}
			$('#signin').find('.cLoaderP').remove();
		});
	}else{
		$("#"+FrmId).validationEngine();
	}
	return false;
});
//For PinCode Reuest
$(document.body).on('click', '.requstPinBtn' ,function(e){
	e.preventDefault();
	var form = $(this).parents('form')[0];
	FrmId = form.id;
	var valid 	= $("#"+FrmId).validationEngine('validate');
	if(valid==true){
		$('#forgotpin').append(loaderDiv);
		$('#forgotpin').find('.customErr').remove();
		var formdata = $("#"+FrmId).serialize()+'&picoderequest=1';
		$.post('vowsignup', formdata, function(data) {
			if(data==1){			
				$(".requstPinBtn,#vowpinFrm .pmsg").hide();
				$("#success").html('<span class="vm2"><i class="ico-checkmark rounded thColor"></i><br>Email sent!</span>');
			}else{
				$('#'+FrmId).find('input[name="email"]').parent().append('<span class="customErr nefta">'+data+'</span>');
			}
			$('#forgotpin').find('.cLoaderP').remove();
		});
	}else{
		$("#"+FrmId).validationEngine();
	}
	return false;
});

var confirmation = '<i class="ico-checkmark rounded thColor"></i><br>Check your email.';
$(document.body).on('click', '.resend' ,function(e){
	var $this = $(this);
	var dataType = $this.attr('data-type');
	$('.vm p').append(loaderDiv);
	$.ajax({
		url: "vowsignup?resendemail=1&dataType="+dataType,
		type: 'POST',
		success: function(data) {
			$this.prop('disabled', true);
			setTimeout(function(){
				$( ".vm p" ).hide().delay(300).html(confirmation).fadeIn();
			}, 1500);
			setTimeout(function(){
			$( ".vm p" ).hide().delay(300).html('You must validate your email before you are able to browse listings. <br>An email has been sent to you.').fadeIn();
			$this.prop('disabled', false);
			}, 2500);
		},
		error: function(e) {
			console.log("Server failure map! Is the server turned off?");
		}
	});
		
	
	return false;
});$(document.body).on('click', '.userLogout' ,function(e){
    var $this = $(this);
    $.ajax({
            url: "vowsignup?vowlogout=1&dataType=1",
            type: 'POST',
            success: function(data) {
                location.reload();
            },
            error: function(e) {
                console.log("Server failure map! Is the server turned off?");
            }
    });
    return false;
});


function refreshvowstatusdata(){
	//For refresh the listing records after validate the emails.
	if($('#refreshrecvow').val()=='0'){
		$.ajax({
			url: "vowsignup?emailvalide=1",
			type: 'POST',
			success: function(data) {
                                var arraydata = data.split('_w4r_');
				if(arraydata['0']==1){
                                    //Now Refresh the Listing data
                                    $.fancybox.close();
                                    $('#refreshrecvow').val(1);
                                    $('body').removeClass('wowListing');
                                    //Search should not reset on vow signin - Against this card - https://trello.com/c/HitPsdJN/5077-vow-login-causes-query-reset
                                    $("#loginfromvow").val("1");
                                    //--------------------------------------------------
                            
                                    $(".listingsearchBtn").trigger("click");
                                    //These blow lines for remove vow layer after login user?? But need to recheck this case in listing main page??SHAM
                                    $(".vowLayer").remove();
                                    $(".vow").remove();
                                    $(".product-listing article").removeClass('blur');
                                    //change topbar vow layer
                                    showsignuplayer(arraydata['1']);
				}else{
                                    $('#refreshrecvow').val(0);
				}
			},
			error: function(e) {
				console.log("Server failure map! Is the server turned off?");
			}
		});
	}
	//--------------------------------------------End Refresh page
}
function showsignuplayer(user_first_name){
    var signoutstring = 'Hi '+user_first_name+' <a class="userDrop"><i class="ico-down-arrow-thick"></i></a><ul class="userUL"><li><a class="userLogout"><i class="ico-exit"></i>Logout</a></li></ul>';
    $('.topbar_vow').html(signoutstring);
}
if($('#vowstate').val()=='1'){
	setInterval(refreshvowstatusdata,5000);
}

/*! jQuery UI - v1.11.4 - 2015-10-25
* http://jqueryui.com
* Includes: core.js, datepicker.js
* Copyright 2015 jQuery Foundation and other contributors; Licensed MIT */

(function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
})(function(e) {
    function t(t, s) {
        var a, n, r, o = t.nodeName.toLowerCase();
        return "area" === o ? (a = t.parentNode, n = a.name, t.href && n && "map" === a.nodeName.toLowerCase() ? (r = e("img[usemap='#" + n + "']")[0], !!r && i(r)) : !1) : (/^(input|select|textarea|button|object)$/.test(o) ? !t.disabled : "a" === o ? t.href || s : s) && i(t)
    }

    function i(t) {
        return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function() {
            return "hidden" === e.css(this, "visibility")
        }).length
    }

    function s(e) {
        for (var t, i; e.length && e[0] !== document;) {
            if (t = e.css("position"), ("absolute" === t || "relative" === t || "fixed" === t) && (i = parseInt(e.css("zIndex"), 10), !isNaN(i) && 0 !== i)) return i;
            e = e.parent()
        }
        return 0
    }

    function a() {
        this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }, this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: !1,
            hideIfNoPrevNext: !1,
            navigationAsDateFormat: !1,
            gotoCurrent: !1,
            changeMonth: !1,
            changeYear: !1,
            yearRange: "c-10:c+10",
            showOtherMonths: !1,
            selectOtherMonths: !1,
            showWeek: !1,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: !0,
            showButtonPanel: !1,
            autoSize: !1,
            disabled: !1
        }, e.extend(this._defaults, this.regional[""]), this.regional.en = e.extend(!0, {}, this.regional[""]), this.regional["en-US"] = e.extend(!0, {}, this.regional.en), this.dpDiv = n(e("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
    }

    function n(t) {
        var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return t.delegate(i, "mouseout", function() {
            e(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && e(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && e(this).removeClass("ui-datepicker-next-hover")
        }).delegate(i, "mouseover", r)
    }

    function r() {
        e.datepicker._isDisabledDatepicker(h.inline ? h.dpDiv.parent()[0] : h.input[0]) || (e(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), e(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && e(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && e(this).addClass("ui-datepicker-next-hover"))
    }

    function o(t, i) {
        e.extend(t, i);
        for (var s in i) null == i[s] && (t[s] = i[s]);
        return t
    }
    e.ui = e.ui || {}, e.extend(e.ui, {
        version: "1.11.4",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }), e.fn.extend({
        scrollParent: function(t) {
            var i = this.css("position"),
                s = "absolute" === i,
                a = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                n = this.parents().filter(function() {
                    var t = e(this);
                    return s && "static" === t.css("position") ? !1 : a.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"))
                }).eq(0);
            return "fixed" !== i && n.length ? n : e(this[0].ownerDocument || document)
        },
        uniqueId: function() {
            var e = 0;
            return function() {
                return this.each(function() {
                    this.id || (this.id = "ui-id-" + ++e)
                })
            }
        }(),
        removeUniqueId: function() {
            return this.each(function() {
                /^ui-id-\d+$/.test(this.id) && e(this).removeAttr("id")
            })
        }
    }), e.extend(e.expr[":"], {
        data: e.expr.createPseudo ? e.expr.createPseudo(function(t) {
            return function(i) {
                return !!e.data(i, t)
            }
        }) : function(t, i, s) {
            return !!e.data(t, s[3])
        },
        focusable: function(i) {
            return t(i, !isNaN(e.attr(i, "tabindex")))
        },
        tabbable: function(i) {
            var s = e.attr(i, "tabindex"),
                a = isNaN(s);
            return (a || s >= 0) && t(i, !a)
        }
    }), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function(t, i) {
        function s(t, i, s, n) {
            return e.each(a, function() {
                i -= parseFloat(e.css(t, "padding" + this)) || 0, s && (i -= parseFloat(e.css(t, "border" + this + "Width")) || 0), n && (i -= parseFloat(e.css(t, "margin" + this)) || 0)
            }), i
        }
        var a = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
            n = i.toLowerCase(),
            r = {
                innerWidth: e.fn.innerWidth,
                innerHeight: e.fn.innerHeight,
                outerWidth: e.fn.outerWidth,
                outerHeight: e.fn.outerHeight
            };
        e.fn["inner" + i] = function(t) {
            return void 0 === t ? r["inner" + i].call(this) : this.each(function() {
                e(this).css(n, s(this, t) + "px")
            })
        }, e.fn["outer" + i] = function(t, a) {
            return "number" != typeof t ? r["outer" + i].call(this, t) : this.each(function() {
                e(this).css(n, s(this, t, !0, a) + "px")
            })
        }
    }), e.fn.addBack || (e.fn.addBack = function(e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function(t) {
        return function(i) {
            return arguments.length ? t.call(this, e.camelCase(i)) : t.call(this)
        }
    }(e.fn.removeData)), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.fn.extend({
        focus: function(t) {
            return function(i, s) {
                return "number" == typeof i ? this.each(function() {
                    var t = this;
                    setTimeout(function() {
                        e(t).focus(), s && s.call(t)
                    }, i)
                }) : t.apply(this, arguments)
            }
        }(e.fn.focus),
        disableSelection: function() {
            var e = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
            return function() {
                return this.bind(e + ".ui-disableSelection", function(e) {
                    e.preventDefault()
                })
            }
        }(),
        enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        },
        zIndex: function(t) {
            if (void 0 !== t) return this.css("zIndex", t);
            if (this.length)
                for (var i, s, a = e(this[0]); a.length && a[0] !== document;) {
                    if (i = a.css("position"), ("absolute" === i || "relative" === i || "fixed" === i) && (s = parseInt(a.css("zIndex"), 10), !isNaN(s) && 0 !== s)) return s;
                    a = a.parent()
                }
            return 0
        }
    }), e.ui.plugin = {
        add: function(t, i, s) {
            var a, n = e.ui[t].prototype;
            for (a in s) n.plugins[a] = n.plugins[a] || [], n.plugins[a].push([i, s[a]])
        },
        call: function(e, t, i, s) {
            var a, n = e.plugins[t];
            if (n && (s || e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType))
                for (a = 0; n.length > a; a++) e.options[n[a][0]] && n[a][1].apply(e.element, i)
        }
    }, e.extend(e.ui, {
        datepicker: {
            version: "1.11.4"
        }
    });
    var h;
    e.extend(a.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        _widgetDatepicker: function() {
            return this.dpDiv
        },
        setDefaults: function(e) {
            return o(this._defaults, e || {}), this
        },
        _attachDatepicker: function(t, i) {
            var s, a, n;
            s = t.nodeName.toLowerCase(), a = "div" === s || "span" === s, t.id || (this.uuid += 1, t.id = "dp" + this.uuid), n = this._newInst(e(t), a), n.settings = e.extend({}, i || {}), "input" === s ? this._connectDatepicker(t, n) : a && this._inlineDatepicker(t, n)
        },
        _newInst: function(t, i) {
            var s = t[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
            return {
                id: s,
                input: t,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: i,
                dpDiv: i ? n(e("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
            }
        },
        _connectDatepicker: function(t, i) {
            var s = e(t);
            i.append = e([]), i.trigger = e([]), s.hasClass(this.markerClassName) || (this._attachments(s, i), s.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(i), e.data(t, "datepicker", i), i.settings.disabled && this._disableDatepicker(t))
        },
        _attachments: function(t, i) {
            var s, a, n, r = this._get(i, "appendText"),
                o = this._get(i, "isRTL");
            i.append && i.append.remove(), r && (i.append = e("<span class='" + this._appendClass + "'>" + r + "</span>"), t[o ? "before" : "after"](i.append)), t.unbind("focus", this._showDatepicker), i.trigger && i.trigger.remove(), s = this._get(i, "showOn"), ("focus" === s || "both" === s) && t.focus(this._showDatepicker), ("button" === s || "both" === s) && (a = this._get(i, "buttonText"), n = this._get(i, "buttonImage"), i.trigger = e(this._get(i, "buttonImageOnly") ? e("<img/>").addClass(this._triggerClass).attr({
                src: n,
                alt: a,
                title: a
            }) : e("<button type='button'></button>").addClass(this._triggerClass).html(n ? e("<img/>").attr({
                src: n,
                alt: a,
                title: a
            }) : a)), t[o ? "before" : "after"](i.trigger), i.trigger.click(function() {
                return e.datepicker._datepickerShowing && e.datepicker._lastInput === t[0] ? e.datepicker._hideDatepicker() : e.datepicker._datepickerShowing && e.datepicker._lastInput !== t[0] ? (e.datepicker._hideDatepicker(), e.datepicker._showDatepicker(t[0])) : e.datepicker._showDatepicker(t[0]), !1
            }))
        },
        _autoSize: function(e) {
            if (this._get(e, "autoSize") && !e.inline) {
                var t, i, s, a, n = new Date(2009, 11, 20),
                    r = this._get(e, "dateFormat");
                r.match(/[DM]/) && (t = function(e) {
                    for (i = 0, s = 0, a = 0; e.length > a; a++) e[a].length > i && (i = e[a].length, s = a);
                    return s
                }, n.setMonth(t(this._get(e, r.match(/MM/) ? "monthNames" : "monthNamesShort"))), n.setDate(t(this._get(e, r.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - n.getDay())), e.input.attr("size", this._formatDate(e, n).length)
            }
        },
        _inlineDatepicker: function(t, i) {
            var s = e(t);
            s.hasClass(this.markerClassName) || (s.addClass(this.markerClassName).append(i.dpDiv), e.data(t, "datepicker", i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(t), i.dpDiv.css("display", "block"))
        },
        _dialogDatepicker: function(t, i, s, a, n) {
            var r, h, l, u, d, c = this._dialogInst;
            return c || (this.uuid += 1, r = "dp" + this.uuid, this._dialogInput = e("<input type='text' id='" + r + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), e("body").append(this._dialogInput), c = this._dialogInst = this._newInst(this._dialogInput, !1), c.settings = {}, e.data(this._dialogInput[0], "datepicker", c)), o(c.settings, a || {}), i = i && i.constructor === Date ? this._formatDate(c, i) : i, this._dialogInput.val(i), this._pos = n ? n.length ? n : [n.pageX, n.pageY] : null, this._pos || (h = document.documentElement.clientWidth, l = document.documentElement.clientHeight, u = document.documentElement.scrollLeft || document.body.scrollLeft, d = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [h / 2 - 100 + u, l / 2 - 150 + d]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), c.settings.onSelect = s, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), e.blockUI && e.blockUI(this.dpDiv), e.data(this._dialogInput[0], "datepicker", c), this
        },
        _destroyDatepicker: function(t) {
            var i, s = e(t),
                a = e.data(t, "datepicker");
            s.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), e.removeData(t, "datepicker"), "input" === i ? (a.append.remove(), a.trigger.remove(), s.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" === i || "span" === i) && s.removeClass(this.markerClassName).empty(), h === a && (h = null))
        },
        _enableDatepicker: function(t) {
            var i, s, a = e(t),
                n = e.data(t, "datepicker");
            a.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), "input" === i ? (t.disabled = !1, n.trigger.filter("button").each(function() {
                this.disabled = !1
            }).end().filter("img").css({
                opacity: "1.0",
                cursor: ""
            })) : ("div" === i || "span" === i) && (s = a.children("." + this._inlineClass), s.children().removeClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = e.map(this._disabledInputs, function(e) {
                return e === t ? null : e
            }))
        },
        _disableDatepicker: function(t) {
            var i, s, a = e(t),
                n = e.data(t, "datepicker");
            a.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), "input" === i ? (t.disabled = !0, n.trigger.filter("button").each(function() {
                this.disabled = !0
            }).end().filter("img").css({
                opacity: "0.5",
                cursor: "default"
            })) : ("div" === i || "span" === i) && (s = a.children("." + this._inlineClass), s.children().addClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = e.map(this._disabledInputs, function(e) {
                return e === t ? null : e
            }), this._disabledInputs[this._disabledInputs.length] = t)
        },
        _isDisabledDatepicker: function(e) {
            if (!e) return !1;
            for (var t = 0; this._disabledInputs.length > t; t++)
                if (this._disabledInputs[t] === e) return !0;
            return !1
        },
        _getInst: function(t) {
            try {
                return e.data(t, "datepicker")
            } catch (i) {
                throw "Missing instance data for this datepicker"
            }
        },
        _optionDatepicker: function(t, i, s) {
            var a, n, r, h, l = this._getInst(t);
            return 2 === arguments.length && "string" == typeof i ? "defaults" === i ? e.extend({}, e.datepicker._defaults) : l ? "all" === i ? e.extend({}, l.settings) : this._get(l, i) : null : (a = i || {}, "string" == typeof i && (a = {}, a[i] = s), l && (this._curInst === l && this._hideDatepicker(), n = this._getDateDatepicker(t, !0), r = this._getMinMaxDate(l, "min"), h = this._getMinMaxDate(l, "max"), o(l.settings, a), null !== r && void 0 !== a.dateFormat && void 0 === a.minDate && (l.settings.minDate = this._formatDate(l, r)), null !== h && void 0 !== a.dateFormat && void 0 === a.maxDate && (l.settings.maxDate = this._formatDate(l, h)), "disabled" in a && (a.disabled ? this._disableDatepicker(t) : this._enableDatepicker(t)), this._attachments(e(t), l), this._autoSize(l), this._setDate(l, n), this._updateAlternate(l), this._updateDatepicker(l)), void 0)
        },
        _changeDatepicker: function(e, t, i) {
            this._optionDatepicker(e, t, i)
        },
        _refreshDatepicker: function(e) {
            var t = this._getInst(e);
            t && this._updateDatepicker(t)
        },
        _setDateDatepicker: function(e, t) {
            var i = this._getInst(e);
            i && (this._setDate(i, t), this._updateDatepicker(i), this._updateAlternate(i))
        },
        _getDateDatepicker: function(e, t) {
            var i = this._getInst(e);
            return i && !i.inline && this._setDateFromField(i, t), i ? this._getDate(i) : null
        },
        _doKeyDown: function(t) {
            var i, s, a, n = e.datepicker._getInst(t.target),
                r = !0,
                o = n.dpDiv.is(".ui-datepicker-rtl");
            if (n._keyEvent = !0, e.datepicker._datepickerShowing) switch (t.keyCode) {
                case 9:
                    e.datepicker._hideDatepicker(), r = !1;
                    break;
                case 13:
                    return a = e("td." + e.datepicker._dayOverClass + ":not(." + e.datepicker._currentClass + ")", n.dpDiv), a[0] && e.datepicker._selectDay(t.target, n.selectedMonth, n.selectedYear, a[0]), i = e.datepicker._get(n, "onSelect"), i ? (s = e.datepicker._formatDate(n), i.apply(n.input ? n.input[0] : null, [s, n])) : e.datepicker._hideDatepicker(), !1;
                case 27:
                    e.datepicker._hideDatepicker();
                    break;
                case 33:
                    e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(n, "stepBigMonths") : -e.datepicker._get(n, "stepMonths"), "M");
                    break;
                case 34:
                    e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(n, "stepBigMonths") : +e.datepicker._get(n, "stepMonths"), "M");
                    break;
                case 35:
                    (t.ctrlKey || t.metaKey) && e.datepicker._clearDate(t.target), r = t.ctrlKey || t.metaKey;
                    break;
                case 36:
                    (t.ctrlKey || t.metaKey) && e.datepicker._gotoToday(t.target), r = t.ctrlKey || t.metaKey;
                    break;
                case 37:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, o ? 1 : -1, "D"), r = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(n, "stepBigMonths") : -e.datepicker._get(n, "stepMonths"), "M");
                    break;
                case 38:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, -7, "D"), r = t.ctrlKey || t.metaKey;
                    break;
                case 39:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, o ? -1 : 1, "D"), r = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(n, "stepBigMonths") : +e.datepicker._get(n, "stepMonths"), "M");
                    break;
                case 40:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, 7, "D"), r = t.ctrlKey || t.metaKey;
                    break;
                default:
                    r = !1
            } else 36 === t.keyCode && t.ctrlKey ? e.datepicker._showDatepicker(this) : r = !1;
            r && (t.preventDefault(), t.stopPropagation())
        },
        _doKeyPress: function(t) {
            var i, s, a = e.datepicker._getInst(t.target);
            return e.datepicker._get(a, "constrainInput") ? (i = e.datepicker._possibleChars(e.datepicker._get(a, "dateFormat")), s = String.fromCharCode(null == t.charCode ? t.keyCode : t.charCode), t.ctrlKey || t.metaKey || " " > s || !i || i.indexOf(s) > -1) : void 0
        },
        _doKeyUp: function(t) {
            var i, s = e.datepicker._getInst(t.target);
            if (s.input.val() !== s.lastVal) try {
                i = e.datepicker.parseDate(e.datepicker._get(s, "dateFormat"), s.input ? s.input.val() : null, e.datepicker._getFormatConfig(s)), i && (e.datepicker._setDateFromField(s), e.datepicker._updateAlternate(s), e.datepicker._updateDatepicker(s))
            } catch (a) {}
            return !0
        },
        _showDatepicker: function(t) {
            if (t = t.target || t, "input" !== t.nodeName.toLowerCase() && (t = e("input", t.parentNode)[0]), !e.datepicker._isDisabledDatepicker(t) && e.datepicker._lastInput !== t) {
                var i, a, n, r, h, l, u;
                i = e.datepicker._getInst(t), e.datepicker._curInst && e.datepicker._curInst !== i && (e.datepicker._curInst.dpDiv.stop(!0, !0), i && e.datepicker._datepickerShowing && e.datepicker._hideDatepicker(e.datepicker._curInst.input[0])), a = e.datepicker._get(i, "beforeShow"), n = a ? a.apply(t, [t, i]) : {}, n !== !1 && (o(i.settings, n), i.lastVal = null, e.datepicker._lastInput = t, e.datepicker._setDateFromField(i), e.datepicker._inDialog && (t.value = ""), e.datepicker._pos || (e.datepicker._pos = e.datepicker._findPos(t), e.datepicker._pos[1] += t.offsetHeight), r = !1, e(t).parents().each(function() {
                    return r |= "fixed" === e(this).css("position"), !r
                }), h = {
                    left: e.datepicker._pos[0],
                    top: e.datepicker._pos[1]
                }, e.datepicker._pos = null, i.dpDiv.empty(), i.dpDiv.css({
                    position: "absolute",
                    display: "block",
                    top: "-1000px"
                }), e.datepicker._updateDatepicker(i), h = e.datepicker._checkOffset(i, h, r), i.dpDiv.css({
                    position: e.datepicker._inDialog && e.blockUI ? "static" : r ? "fixed" : "absolute",
                    display: "none",
                    left: h.left + "px",
                    top: h.top + "px"
                }), i.inline || (l = e.datepicker._get(i, "showAnim"), u = e.datepicker._get(i, "duration"), i.dpDiv.css("z-index", s(e(t)) + 1), e.datepicker._datepickerShowing = !0, e.effects && e.effects.effect[l] ? i.dpDiv.show(l, e.datepicker._get(i, "showOptions"), u) : i.dpDiv[l || "show"](l ? u : null), e.datepicker._shouldFocusInput(i) && i.input.focus(), e.datepicker._curInst = i))
            }
        },
        _updateDatepicker: function(t) {
            this.maxRows = 4, h = t, t.dpDiv.empty().append(this._generateHTML(t)), this._attachHandlers(t);
            var i, s = this._getNumberOfMonths(t),
                a = s[1],
                n = 17,
                o = t.dpDiv.find("." + this._dayOverClass + " a");
            o.length > 0 && r.apply(o.get(0)), t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), a > 1 && t.dpDiv.addClass("ui-datepicker-multi-" + a).css("width", n * a + "em"), t.dpDiv[(1 !== s[0] || 1 !== s[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), t === e.datepicker._curInst && e.datepicker._datepickerShowing && e.datepicker._shouldFocusInput(t) && t.input.focus(), t.yearshtml && (i = t.yearshtml, setTimeout(function() {
                i === t.yearshtml && t.yearshtml && t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml), i = t.yearshtml = null
            }, 0))
        },
        _shouldFocusInput: function(e) {
            return e.input && e.input.is(":visible") && !e.input.is(":disabled") && !e.input.is(":focus")
        },
        _checkOffset: function(t, i, s) {
            var a = t.dpDiv.outerWidth(),
                n = t.dpDiv.outerHeight(),
                r = t.input ? t.input.outerWidth() : 0,
                o = t.input ? t.input.outerHeight() : 0,
                h = document.documentElement.clientWidth + (s ? 0 : e(document).scrollLeft()),
                l = document.documentElement.clientHeight + (s ? 0 : e(document).scrollTop());
            return i.left -= this._get(t, "isRTL") ? a - r : 0, i.left -= s && i.left === t.input.offset().left ? e(document).scrollLeft() : 0, i.top -= s && i.top === t.input.offset().top + o ? e(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + a > h && h > a ? Math.abs(i.left + a - h) : 0), i.top -= Math.min(i.top, i.top + n > l && l > n ? Math.abs(n + o) : 0), i
        },
        _findPos: function(t) {
            for (var i, s = this._getInst(t), a = this._get(s, "isRTL"); t && ("hidden" === t.type || 1 !== t.nodeType || e.expr.filters.hidden(t));) t = t[a ? "previousSibling" : "nextSibling"];
            return i = e(t).offset(), [i.left, i.top]
        },
        _hideDatepicker: function(t) {
            var i, s, a, n, r = this._curInst;
            !r || t && r !== e.data(t, "datepicker") || this._datepickerShowing && (i = this._get(r, "showAnim"), s = this._get(r, "duration"), a = function() {
                e.datepicker._tidyDialog(r)
            }, e.effects && (e.effects.effect[i] || e.effects[i]) ? r.dpDiv.hide(i, e.datepicker._get(r, "showOptions"), s, a) : r.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? s : null, a), i || a(), this._datepickerShowing = !1, n = this._get(r, "onClose"), n && n.apply(r.input ? r.input[0] : null, [r.input ? r.input.val() : "", r]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
                position: "absolute",
                left: "0",
                top: "-100px"
            }), e.blockUI && (e.unblockUI(), e("body").append(this.dpDiv))), this._inDialog = !1)
        },
        _tidyDialog: function(e) {
            e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
        },
        _checkExternalClick: function(t) {
            if (e.datepicker._curInst) {
                var i = e(t.target),
                    s = e.datepicker._getInst(i[0]);
                (i[0].id !== e.datepicker._mainDivId && 0 === i.parents("#" + e.datepicker._mainDivId).length && !i.hasClass(e.datepicker.markerClassName) && !i.closest("." + e.datepicker._triggerClass).length && e.datepicker._datepickerShowing && (!e.datepicker._inDialog || !e.blockUI) || i.hasClass(e.datepicker.markerClassName) && e.datepicker._curInst !== s) && e.datepicker._hideDatepicker()
            }
        },
        _adjustDate: function(t, i, s) {
            var a = e(t),
                n = this._getInst(a[0]);
            this._isDisabledDatepicker(a[0]) || (this._adjustInstDate(n, i + ("M" === s ? this._get(n, "showCurrentAtPos") : 0), s), this._updateDatepicker(n))
        },
        _gotoToday: function(t) {
            var i, s = e(t),
                a = this._getInst(s[0]);
            this._get(a, "gotoCurrent") && a.currentDay ? (a.selectedDay = a.currentDay, a.drawMonth = a.selectedMonth = a.currentMonth, a.drawYear = a.selectedYear = a.currentYear) : (i = new Date, a.selectedDay = i.getDate(), a.drawMonth = a.selectedMonth = i.getMonth(), a.drawYear = a.selectedYear = i.getFullYear()), this._notifyChange(a), this._adjustDate(s)
        },
        _selectMonthYear: function(t, i, s) {
            var a = e(t),
                n = this._getInst(a[0]);
            n["selected" + ("M" === s ? "Month" : "Year")] = n["draw" + ("M" === s ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10), this._notifyChange(n), this._adjustDate(a)
        },
        _selectDay: function(t, i, s, a) {
            var n, r = e(t);
            e(a).hasClass(this._unselectableClass) || this._isDisabledDatepicker(r[0]) || (n = this._getInst(r[0]), n.selectedDay = n.currentDay = e("a", a).html(), n.selectedMonth = n.currentMonth = i, n.selectedYear = n.currentYear = s, this._selectDate(t, this._formatDate(n, n.currentDay, n.currentMonth, n.currentYear)))
        },
        _clearDate: function(t) {
            var i = e(t);
            this._selectDate(i, "")
        },
        _selectDate: function(t, i) {
            var s, a = e(t),
                n = this._getInst(a[0]);
            i = null != i ? i : this._formatDate(n), n.input && n.input.val(i), this._updateAlternate(n), s = this._get(n, "onSelect"), s ? s.apply(n.input ? n.input[0] : null, [i, n]) : n.input && n.input.trigger("change"), n.inline ? this._updateDatepicker(n) : (this._hideDatepicker(), this._lastInput = n.input[0], "object" != typeof n.input[0] && n.input.focus(), this._lastInput = null)
        },
        _updateAlternate: function(t) {
            var i, s, a, n = this._get(t, "altField");
            n && (i = this._get(t, "altFormat") || this._get(t, "dateFormat"), s = this._getDate(t), a = this.formatDate(i, s, this._getFormatConfig(t)), e(n).each(function() {
                e(this).val(a)
            }))
        },
        noWeekends: function(e) {
            var t = e.getDay();
            return [t > 0 && 6 > t, ""]
        },
        iso8601Week: function(e) {
            var t, i = new Date(e.getTime());
            return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), t = i.getTime(), i.setMonth(0), i.setDate(1), Math.floor(Math.round((t - i) / 864e5) / 7) + 1
        },
        parseDate: function(t, i, s) {
            if (null == t || null == i) throw "Invalid arguments";
            if (i = "object" == typeof i ? "" + i : i + "", "" === i) return null;
            var a, n, r, o, h = 0,
                l = (s ? s.shortYearCutoff : null) || this._defaults.shortYearCutoff,
                u = "string" != typeof l ? l : (new Date).getFullYear() % 100 + parseInt(l, 10),
                d = (s ? s.dayNamesShort : null) || this._defaults.dayNamesShort,
                c = (s ? s.dayNames : null) || this._defaults.dayNames,
                p = (s ? s.monthNamesShort : null) || this._defaults.monthNamesShort,
                f = (s ? s.monthNames : null) || this._defaults.monthNames,
                m = -1,
                g = -1,
                v = -1,
                y = -1,
                b = !1,
                _ = function(e) {
                    var i = t.length > a + 1 && t.charAt(a + 1) === e;
                    return i && a++, i
                },
                x = function(e) {
                    var t = _(e),
                        s = "@" === e ? 14 : "!" === e ? 20 : "y" === e && t ? 4 : "o" === e ? 3 : 2,
                        a = "y" === e ? s : 1,
                        n = RegExp("^\\d{" + a + "," + s + "}"),
                        r = i.substring(h).match(n);
                    if (!r) throw "Missing number at position " + h;
                    return h += r[0].length, parseInt(r[0], 10)
                },
                k = function(t, s, a) {
                    var n = -1,
                        r = e.map(_(t) ? a : s, function(e, t) {
                            return [
                                [t, e]
                            ]
                        }).sort(function(e, t) {
                            return -(e[1].length - t[1].length)
                        });
                    if (e.each(r, function(e, t) {
                            var s = t[1];
                            return i.substr(h, s.length).toLowerCase() === s.toLowerCase() ? (n = t[0], h += s.length, !1) : void 0
                        }), -1 !== n) return n + 1;
                    throw "Unknown name at position " + h
                },
                w = function() {
                    if (i.charAt(h) !== t.charAt(a)) throw "Unexpected literal at position " + h;
                    h++
                };
            for (a = 0; t.length > a; a++)
                if (b) "'" !== t.charAt(a) || _("'") ? w() : b = !1;
                else switch (t.charAt(a)) {
                    case "d":
                        v = x("d");
                        break;
                    case "D":
                        k("D", d, c);
                        break;
                    case "o":
                        y = x("o");
                        break;
                    case "m":
                        g = x("m");
                        break;
                    case "M":
                        g = k("M", p, f);
                        break;
                    case "y":
                        m = x("y");
                        break;
                    case "@":
                        o = new Date(x("@")), m = o.getFullYear(), g = o.getMonth() + 1, v = o.getDate();
                        break;
                    case "!":
                        o = new Date((x("!") - this._ticksTo1970) / 1e4), m = o.getFullYear(), g = o.getMonth() + 1, v = o.getDate();
                        break;
                    case "'":
                        _("'") ? w() : b = !0;
                        break;
                    default:
                        w()
                }
                if (i.length > h && (r = i.substr(h), !/^\s+/.test(r))) throw "Extra/unparsed characters found in date: " + r;
            if (-1 === m ? m = (new Date).getFullYear() : 100 > m && (m += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (u >= m ? 0 : -100)), y > -1)
                for (g = 1, v = y;;) {
                    if (n = this._getDaysInMonth(m, g - 1), n >= v) break;
                    g++, v -= n
                }
            if (o = this._daylightSavingAdjust(new Date(m, g - 1, v)), o.getFullYear() !== m || o.getMonth() + 1 !== g || o.getDate() !== v) throw "Invalid date";
            return o
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: 1e7 * 60 * 60 * 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
        formatDate: function(e, t, i) {
            if (!t) return "";
            var s, a = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
                n = (i ? i.dayNames : null) || this._defaults.dayNames,
                r = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
                o = (i ? i.monthNames : null) || this._defaults.monthNames,
                h = function(t) {
                    var i = e.length > s + 1 && e.charAt(s + 1) === t;
                    return i && s++, i
                },
                l = function(e, t, i) {
                    var s = "" + t;
                    if (h(e))
                        for (; i > s.length;) s = "0" + s;
                    return s
                },
                u = function(e, t, i, s) {
                    return h(e) ? s[t] : i[t]
                },
                d = "",
                c = !1;
            if (t)
                for (s = 0; e.length > s; s++)
                    if (c) "'" !== e.charAt(s) || h("'") ? d += e.charAt(s) : c = !1;
                    else switch (e.charAt(s)) {
                        case "d":
                            d += l("d", t.getDate(), 2);
                            break;
                        case "D":
                            d += u("D", t.getDay(), a, n);
                            break;
                        case "o":
                            d += l("o", Math.round((new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime() - new Date(t.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                            break;
                        case "m":
                            d += l("m", t.getMonth() + 1, 2);
                            break;
                        case "M":
                            d += u("M", t.getMonth(), r, o);
                            break;
                        case "y":
                            d += h("y") ? t.getFullYear() : (10 > t.getYear() % 100 ? "0" : "") + t.getYear() % 100;
                            break;
                        case "@":
                            d += t.getTime();
                            break;
                        case "!":
                            d += 1e4 * t.getTime() + this._ticksTo1970;
                            break;
                        case "'":
                            h("'") ? d += "'" : c = !0;
                            break;
                        default:
                            d += e.charAt(s)
                    }
                    return d
        },
        _possibleChars: function(e) {
            var t, i = "",
                s = !1,
                a = function(i) {
                    var s = e.length > t + 1 && e.charAt(t + 1) === i;
                    return s && t++, s
                };
            for (t = 0; e.length > t; t++)
                if (s) "'" !== e.charAt(t) || a("'") ? i += e.charAt(t) : s = !1;
                else switch (e.charAt(t)) {
                    case "d":
                    case "m":
                    case "y":
                    case "@":
                        i += "0123456789";
                        break;
                    case "D":
                    case "M":
                        return null;
                    case "'":
                        a("'") ? i += "'" : s = !0;
                        break;
                    default:
                        i += e.charAt(t)
                }
                return i
        },
        _get: function(e, t) {
            return void 0 !== e.settings[t] ? e.settings[t] : this._defaults[t]
        },
        _setDateFromField: function(e, t) {
            if (e.input.val() !== e.lastVal) {
                var i = this._get(e, "dateFormat"),
                    s = e.lastVal = e.input ? e.input.val() : null,
                    a = this._getDefaultDate(e),
                    n = a,
                    r = this._getFormatConfig(e);
                try {
                    n = this.parseDate(i, s, r) || a
                } catch (o) {
                    s = t ? "" : s
                }
                e.selectedDay = n.getDate(), e.drawMonth = e.selectedMonth = n.getMonth(), e.drawYear = e.selectedYear = n.getFullYear(), e.currentDay = s ? n.getDate() : 0, e.currentMonth = s ? n.getMonth() : 0, e.currentYear = s ? n.getFullYear() : 0, this._adjustInstDate(e)
            }
        },
        _getDefaultDate: function(e) {
            return this._restrictMinMax(e, this._determineDate(e, this._get(e, "defaultDate"), new Date))
        },
        _determineDate: function(t, i, s) {
            var a = function(e) {
                    var t = new Date;
                    return t.setDate(t.getDate() + e), t
                },
                n = function(i) {
                    try {
                        return e.datepicker.parseDate(e.datepicker._get(t, "dateFormat"), i, e.datepicker._getFormatConfig(t))
                    } catch (s) {}
                    for (var a = (i.toLowerCase().match(/^c/) ? e.datepicker._getDate(t) : null) || new Date, n = a.getFullYear(), r = a.getMonth(), o = a.getDate(), h = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, l = h.exec(i); l;) {
                        switch (l[2] || "d") {
                            case "d":
                            case "D":
                                o += parseInt(l[1], 10);
                                break;
                            case "w":
                            case "W":
                                o += 7 * parseInt(l[1], 10);
                                break;
                            case "m":
                            case "M":
                                r += parseInt(l[1], 10), o = Math.min(o, e.datepicker._getDaysInMonth(n, r));
                                break;
                            case "y":
                            case "Y":
                                n += parseInt(l[1], 10), o = Math.min(o, e.datepicker._getDaysInMonth(n, r))
                        }
                        l = h.exec(i)
                    }
                    return new Date(n, r, o)
                },
                r = null == i || "" === i ? s : "string" == typeof i ? n(i) : "number" == typeof i ? isNaN(i) ? s : a(i) : new Date(i.getTime());
            return r = r && "Invalid Date" == "" + r ? s : r, r && (r.setHours(0), r.setMinutes(0), r.setSeconds(0), r.setMilliseconds(0)), this._daylightSavingAdjust(r)
        },
        _daylightSavingAdjust: function(e) {
            return e ? (e.setHours(e.getHours() > 12 ? e.getHours() + 2 : 0), e) : null
        },
        _setDate: function(e, t, i) {
            var s = !t,
                a = e.selectedMonth,
                n = e.selectedYear,
                r = this._restrictMinMax(e, this._determineDate(e, t, new Date));
            e.selectedDay = e.currentDay = r.getDate(), e.drawMonth = e.selectedMonth = e.currentMonth = r.getMonth(), e.drawYear = e.selectedYear = e.currentYear = r.getFullYear(), a === e.selectedMonth && n === e.selectedYear || i || this._notifyChange(e), this._adjustInstDate(e), e.input && e.input.val(s ? "" : this._formatDate(e))
        },
        _getDate: function(e) {
            var t = !e.currentYear || e.input && "" === e.input.val() ? null : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
            return t
        },
        _attachHandlers: function(t) {
            var i = this._get(t, "stepMonths"),
                s = "#" + t.id.replace(/\\\\/g, "\\");
            t.dpDiv.find("[data-handler]").map(function() {
                var t = {
                    prev: function() {
                        e.datepicker._adjustDate(s, -i, "M")
                    },
                    next: function() {
                        e.datepicker._adjustDate(s, +i, "M")
                    },
                    hide: function() {
                        e.datepicker._hideDatepicker()
                    },
                    today: function() {
                        e.datepicker._gotoToday(s)
                    },
                    selectDay: function() {
                        return e.datepicker._selectDay(s, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
                    },
                    selectMonth: function() {
                        return e.datepicker._selectMonthYear(s, this, "M"), !1
                    },
                    selectYear: function() {
                        return e.datepicker._selectMonthYear(s, this, "Y"), !1
                    }
                };
                e(this).bind(this.getAttribute("data-event"), t[this.getAttribute("data-handler")])
            })
        },
        _generateHTML: function(e) {
            var t, i, s, a, n, r, o, h, l, u, d, c, p, f, m, g, v, y, b, _, x, k, w, D, T, S, M, N, C, A, I, P, F, H, j, E, z, O, L, W = new Date,
                R = this._daylightSavingAdjust(new Date(W.getFullYear(), W.getMonth(), W.getDate())),
                Y = this._get(e, "isRTL"),
                J = this._get(e, "showButtonPanel"),
                B = this._get(e, "hideIfNoPrevNext"),
                K = this._get(e, "navigationAsDateFormat"),
                q = this._getNumberOfMonths(e),
                V = this._get(e, "showCurrentAtPos"),
                U = this._get(e, "stepMonths"),
                G = 1 !== q[0] || 1 !== q[1],
                Q = this._daylightSavingAdjust(e.currentDay ? new Date(e.currentYear, e.currentMonth, e.currentDay) : new Date(9999, 9, 9)),
                X = this._getMinMaxDate(e, "min"),
                $ = this._getMinMaxDate(e, "max"),
                Z = e.drawMonth - V,
                et = e.drawYear;
            if (0 > Z && (Z += 12, et--), $)
                for (t = this._daylightSavingAdjust(new Date($.getFullYear(), $.getMonth() - q[0] * q[1] + 1, $.getDate())), t = X && X > t ? X : t; this._daylightSavingAdjust(new Date(et, Z, 1)) > t;) Z--, 0 > Z && (Z = 11, et--);
            for (e.drawMonth = Z, e.drawYear = et, i = this._get(e, "prevText"), i = K ? this.formatDate(i, this._daylightSavingAdjust(new Date(et, Z - U, 1)), this._getFormatConfig(e)) : i, s = this._canAdjustMonth(e, -1, et, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><i class='ico-arrow-left-alt1'></i></a>" : B ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><i class='ico-arrow-right-alt1'></i></a>", a = this._get(e, "nextText"), a = K ? this.formatDate(a, this._daylightSavingAdjust(new Date(et, Z + U, 1)), this._getFormatConfig(e)) : a, n = this._canAdjustMonth(e, 1, et, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + a + "'><i class='ico-arrow-right-alt1'></i></a>" : B ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + a + "'><i class='ico-arrow-right-alt1'></i></a>", r = this._get(e, "currentText"), o = this._get(e, "gotoCurrent") && e.currentDay ? Q : R, r = K ? this.formatDate(r, o, this._getFormatConfig(e)) : r, h = e.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(e, "closeText") + "</button>", l = J ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (Y ? h : "") + (this._isInRange(e, o) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + r + "</button>" : "") + (Y ? "" : h) + "</div>" : "", u = parseInt(this._get(e, "firstDay"), 10), u = isNaN(u) ? 0 : u, d = this._get(e, "showWeek"), c = this._get(e, "dayNames"), p = this._get(e, "dayNamesMin"), f = this._get(e, "monthNames"), m = this._get(e, "monthNamesShort"), g = this._get(e, "beforeShowDay"), v = this._get(e, "showOtherMonths"), y = this._get(e, "selectOtherMonths"), b = this._getDefaultDate(e), _ = "", k = 0; q[0] > k; k++) {
                for (w = "", this.maxRows = 4, D = 0; q[1] > D; D++) {
                    if (T = this._daylightSavingAdjust(new Date(et, Z, e.selectedDay)), S = " ui-corner-all", M = "", G) {
                        if (M += "<div class='ui-datepicker-group", q[1] > 1) switch (D) {
                            case 0:
                                M += " ui-datepicker-group-first", S = " ui-corner-" + (Y ? "right" : "left");
                                break;
                            case q[1] - 1:
                                M += " ui-datepicker-group-last", S = " ui-corner-" + (Y ? "left" : "right");
                                break;
                            default:
                                M += " ui-datepicker-group-middle", S = ""
                        }
                        M += "'>"
                    }
                    for (M += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + S + "'>" + (/all|left/.test(S) && 0 === k ? Y ? n : s : "") + (/all|right/.test(S) && 0 === k ? Y ? s : n : "") + this._generateMonthYearHeader(e, Z, et, X, $, k > 0 || D > 0, f, m) + "</div><table class='ui-datepicker-calendar'><thead>" + "<tr>", N = d ? "<th class='ui-datepicker-week-col'>" + this._get(e, "weekHeader") + "</th>" : "", x = 0; 7 > x; x++) C = (x + u) % 7, N += "<th scope='col'" + ((x + u + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + ">" + "<span title='" + c[C] + "'>" + p[C] + "</span></th>";
                    for (M += N + "</tr></thead><tbody>", A = this._getDaysInMonth(et, Z), et === e.selectedYear && Z === e.selectedMonth && (e.selectedDay = Math.min(e.selectedDay, A)), I = (this._getFirstDayOfMonth(et, Z) - u + 7) % 7, P = Math.ceil((I + A) / 7), F = G ? this.maxRows > P ? this.maxRows : P : P, this.maxRows = F, H = this._daylightSavingAdjust(new Date(et, Z, 1 - I)), j = 0; F > j; j++) {
                        for (M += "<tr>", E = d ? "<td class='ui-datepicker-week-col'>" + this._get(e, "calculateWeek")(H) + "</td>" : "", x = 0; 7 > x; x++) z = g ? g.apply(e.input ? e.input[0] : null, [H]) : [!0, ""], O = H.getMonth() !== Z, L = O && !y || !z[0] || X && X > H || $ && H > $, E += "<td class='" + ((x + u + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (O ? " ui-datepicker-other-month" : "") + (H.getTime() === T.getTime() && Z === e.selectedMonth && e._keyEvent || b.getTime() === H.getTime() && b.getTime() === T.getTime() ? " " + this._dayOverClass : "") + (L ? " " + this._unselectableClass + " ui-state-disabled" : "") + (O && !v ? "" : " " + z[1] + (H.getTime() === Q.getTime() ? " " + this._currentClass : "") + (H.getTime() === R.getTime() ? " ui-datepicker-today" : "")) + "'" + (O && !v || !z[2] ? "" : " title='" + z[2].replace(/'/g, "&#39;") + "'") + (L ? "" : " data-handler='selectDay' data-event='click' data-month='" + H.getMonth() + "' data-year='" + H.getFullYear() + "'") + ">" + (O && !v ? "&#xa0;" : L ? "<span class='ui-state-default'>" + H.getDate() + "</span>" : "<a class='ui-state-default" + (H.getTime() === R.getTime() ? " ui-state-highlight" : "") + (H.getTime() === Q.getTime() ? " ui-state-active" : "") + (O ? " ui-priority-secondary" : "") + "' href='#'>" + H.getDate() + "</a>") + "</td>", H.setDate(H.getDate() + 1), H = this._daylightSavingAdjust(H);
                        M += E + "</tr>"
                    }
                    Z++, Z > 11 && (Z = 0, et++), M += "</tbody></table>" + (G ? "</div>" + (q[0] > 0 && D === q[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), w += M
                }
                _ += w
            }
            return _ += l, e._keyEvent = !1, _
        },
        _generateMonthYearHeader: function(e, t, i, s, a, n, r, o) {
            var h, l, u, d, c, p, f, m, g = this._get(e, "changeMonth"),
                v = this._get(e, "changeYear"),
                y = this._get(e, "showMonthAfterYear"),
                b = "<div class='ui-datepicker-title'>",
                _ = "";
            if (n || !g) _ += "<span class='ui-datepicker-month'>" + r[t] + "</span>";
            else {
                for (h = s && s.getFullYear() === i, l = a && a.getFullYear() === i, _ += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", u = 0; 12 > u; u++)(!h || u >= s.getMonth()) && (!l || a.getMonth() >= u) && (_ += "<option value='" + u + "'" + (u === t ? " selected='selected'" : "") + ">" + o[u] + "</option>");
                _ += "</select>"
            }
            if (y || (b += _ + (!n && g && v ? "" : "&#xa0;")), !e.yearshtml)
                if (e.yearshtml = "", n || !v) b += "<span class='ui-datepicker-year'>" + i + "</span>";
                else {
                    for (d = this._get(e, "yearRange").split(":"), c = (new Date).getFullYear(), p = function(e) {
                            var t = e.match(/c[+\-].*/) ? i + parseInt(e.substring(1), 10) : e.match(/[+\-].*/) ? c + parseInt(e, 10) : parseInt(e, 10);
                            return isNaN(t) ? c : t
                        }, f = p(d[0]), m = Math.max(f, p(d[1] || "")), f = s ? Math.max(f, s.getFullYear()) : f, m = a ? Math.min(m, a.getFullYear()) : m, e.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; m >= f; f++) e.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" : "") + ">" + f + "</option>";
                    e.yearshtml += "</select>", b += e.yearshtml, e.yearshtml = null
                }
            return b += this._get(e, "yearSuffix"), y && (b += (!n && g && v ? "" : "&#xa0;") + _), b += "</div>"
        },
        _adjustInstDate: function(e, t, i) {
            var s = e.drawYear + ("Y" === i ? t : 0),
                a = e.drawMonth + ("M" === i ? t : 0),
                n = Math.min(e.selectedDay, this._getDaysInMonth(s, a)) + ("D" === i ? t : 0),
                r = this._restrictMinMax(e, this._daylightSavingAdjust(new Date(s, a, n)));
            e.selectedDay = r.getDate(), e.drawMonth = e.selectedMonth = r.getMonth(), e.drawYear = e.selectedYear = r.getFullYear(), ("M" === i || "Y" === i) && this._notifyChange(e)
        },
        _restrictMinMax: function(e, t) {
            var i = this._getMinMaxDate(e, "min"),
                s = this._getMinMaxDate(e, "max"),
                a = i && i > t ? i : t;
            return s && a > s ? s : a
        },
        _notifyChange: function(e) {
            var t = this._get(e, "onChangeMonthYear");
            t && t.apply(e.input ? e.input[0] : null, [e.selectedYear, e.selectedMonth + 1, e])
        },
        _getNumberOfMonths: function(e) {
            var t = this._get(e, "numberOfMonths");
            return null == t ? [1, 1] : "number" == typeof t ? [1, t] : t
        },
        _getMinMaxDate: function(e, t) {
            return this._determineDate(e, this._get(e, t + "Date"), null)
        },
        _getDaysInMonth: function(e, t) {
            return 32 - this._daylightSavingAdjust(new Date(e, t, 32)).getDate()
        },
        _getFirstDayOfMonth: function(e, t) {
            return new Date(e, t, 1).getDay()
        },
        _canAdjustMonth: function(e, t, i, s) {
            var a = this._getNumberOfMonths(e),
                n = this._daylightSavingAdjust(new Date(i, s + (0 > t ? t : a[0] * a[1]), 1));
            return 0 > t && n.setDate(this._getDaysInMonth(n.getFullYear(), n.getMonth())), this._isInRange(e, n)
        },
        _isInRange: function(e, t) {
            var i, s, a = this._getMinMaxDate(e, "min"),
                n = this._getMinMaxDate(e, "max"),
                r = null,
                o = null,
                h = this._get(e, "yearRange");
            return h && (i = h.split(":"), s = (new Date).getFullYear(), r = parseInt(i[0], 10), o = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (r += s), i[1].match(/[+\-].*/) && (o += s)), (!a || t.getTime() >= a.getTime()) && (!n || t.getTime() <= n.getTime()) && (!r || t.getFullYear() >= r) && (!o || o >= t.getFullYear())
        },
        _getFormatConfig: function(e) {
            var t = this._get(e, "shortYearCutoff");
            return t = "string" != typeof t ? t : (new Date).getFullYear() % 100 + parseInt(t, 10), {
                shortYearCutoff: t,
                dayNamesShort: this._get(e, "dayNamesShort"),
                dayNames: this._get(e, "dayNames"),
                monthNamesShort: this._get(e, "monthNamesShort"),
                monthNames: this._get(e, "monthNames")
            }
        },
        _formatDate: function(e, t, i, s) {
            t || (e.currentDay = e.selectedDay, e.currentMonth = e.selectedMonth, e.currentYear = e.selectedYear);
            var a = t ? "object" == typeof t ? t : this._daylightSavingAdjust(new Date(s, i, t)) : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
            return this.formatDate(this._get(e, "dateFormat"), a, this._getFormatConfig(e))
        }
    }), e.fn.datepicker = function(t) {
        if (!this.length) return this;
        e.datepicker.initialized || (e(document).mousedown(e.datepicker._checkExternalClick), e.datepicker.initialized = !0), 0 === e("#" + e.datepicker._mainDivId).length && e("body").append(e.datepicker.dpDiv);
        var i = Array.prototype.slice.call(arguments, 1);
        return "string" != typeof t || "isDisabled" !== t && "getDate" !== t && "widget" !== t ? "option" === t && 2 === arguments.length && "string" == typeof arguments[1] ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(i)) : this.each(function() {
            "string" == typeof t ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this].concat(i)) : e.datepicker._attachDatepicker(this, t)
        }) : e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(i))
    }, e.datepicker = new a, e.datepicker.initialized = !1, e.datepicker.uuid = (new Date).getTime(), e.datepicker.version = "1.11.4", e.datepicker
});

// time picker 
!function($){if($.ui.timepicker=$.ui.timepicker||{},!$.ui.timepicker.version){$.extend($.ui,{timepicker:{version:"@@version"}});var Timepicker=function(){this.regional=[],this.regional[""]={currentText:"Now",closeText:"Done",amNames:["AM","A"],pmNames:["PM","P"],timeFormat:"HH:mm",timeSuffix:"",timeOnlyTitle:"Choose Time",timeText:"Time",hourText:"Hour",minuteText:"Minute",secondText:"Second",millisecText:"Millisecond",microsecText:"Microsecond",timezoneText:"Time Zone",isRTL:!1},this._defaults={showButtonPanel:!0,timeOnly:!1,timeOnlyShowDate:!1,showHour:null,showMinute:null,showSecond:null,showMillisec:null,showMicrosec:null,showTimezone:null,showTime:!0,stepHour:1,stepMinute:1,stepSecond:1,stepMillisec:1,stepMicrosec:1,hour:0,minute:0,second:0,millisec:0,microsec:0,timezone:null,hourMin:0,minuteMin:0,secondMin:0,millisecMin:0,microsecMin:0,hourMax:23,minuteMax:59,secondMax:59,millisecMax:999,microsecMax:999,minDateTime:null,maxDateTime:null,maxTime:null,minTime:null,onSelect:null,hourGrid:0,minuteGrid:0,secondGrid:0,millisecGrid:0,microsecGrid:0,alwaysSetTime:!0,separator:" ",altFieldTimeOnly:!0,altTimeFormat:null,altSeparator:null,altTimeSuffix:null,altRedirectFocus:!0,pickerTimeFormat:null,pickerTimeSuffix:null,showTimepicker:!0,timezoneList:null,addSliderAccess:!1,sliderAccessArgs:null,controlType:"select",defaultValue:null,parse:"strict"},$.extend(this._defaults,this.regional[""])};$.extend(Timepicker.prototype,{$input:null,$altInput:null,$timeObj:null,inst:null,hour_slider:null,minute_slider:null,second_slider:null,millisec_slider:null,microsec_slider:null,timezone_select:null,maxTime:null,minTime:null,hour:0,minute:0,second:0,millisec:0,microsec:0,timezone:null,hourMinOriginal:null,minuteMinOriginal:null,secondMinOriginal:null,millisecMinOriginal:null,microsecMinOriginal:null,hourMaxOriginal:null,minuteMaxOriginal:null,secondMaxOriginal:null,millisecMaxOriginal:null,microsecMaxOriginal:null,ampm:"",formattedDate:"",formattedTime:"",formattedDateTime:"",timezoneList:null,units:["hour","minute","second","millisec","microsec"],support:{},control:null,setDefaults:function(e){return extendRemove(this._defaults,e||{}),this},_newInst:function($input,opts){var tp_inst=new Timepicker,inlineSettings={},fns={},overrides,i;for(var attrName in this._defaults)if(this._defaults.hasOwnProperty(attrName)){var attrValue=$input.attr("time:"+attrName);if(attrValue)try{inlineSettings[attrName]=eval(attrValue)}catch(err){inlineSettings[attrName]=attrValue}}overrides={beforeShow:function(e,t){return $.isFunction(tp_inst._defaults.evnts.beforeShow)?tp_inst._defaults.evnts.beforeShow.call($input[0],e,t,tp_inst):void 0},onChangeMonthYear:function(e,t,i){tp_inst._updateDateTime(i),$.isFunction(tp_inst._defaults.evnts.onChangeMonthYear)&&tp_inst._defaults.evnts.onChangeMonthYear.call($input[0],e,t,i,tp_inst)},onClose:function(e,t){tp_inst.timeDefined===!0&&""!==$input.val()&&tp_inst._updateDateTime(t),$.isFunction(tp_inst._defaults.evnts.onClose)&&tp_inst._defaults.evnts.onClose.call($input[0],e,t,tp_inst)}};for(i in overrides)overrides.hasOwnProperty(i)&&(fns[i]=opts[i]||null);tp_inst._defaults=$.extend({},this._defaults,inlineSettings,opts,overrides,{evnts:fns,timepicker:tp_inst}),tp_inst.amNames=$.map(tp_inst._defaults.amNames,function(e){return e.toUpperCase()}),tp_inst.pmNames=$.map(tp_inst._defaults.pmNames,function(e){return e.toUpperCase()}),tp_inst.support=detectSupport(tp_inst._defaults.timeFormat+(tp_inst._defaults.pickerTimeFormat?tp_inst._defaults.pickerTimeFormat:"")+(tp_inst._defaults.altTimeFormat?tp_inst._defaults.altTimeFormat:"")),"string"==typeof tp_inst._defaults.controlType?("slider"===tp_inst._defaults.controlType&&"undefined"==typeof $.ui.slider&&(tp_inst._defaults.controlType="select"),tp_inst.control=tp_inst._controls[tp_inst._defaults.controlType]):tp_inst.control=tp_inst._defaults.controlType;var timezoneList=[-720,-660,-600,-570,-540,-480,-420,-360,-300,-270,-240,-210,-180,-120,-60,0,60,120,180,210,240,270,300,330,345,360,390,420,480,525,540,570,600,630,660,690,720,765,780,840];null!==tp_inst._defaults.timezoneList&&(timezoneList=tp_inst._defaults.timezoneList);var tzl=timezoneList.length,tzi=0,tzv=null;if(tzl>0&&"object"!=typeof timezoneList[0])for(;tzl>tzi;tzi++)tzv=timezoneList[tzi],timezoneList[tzi]={value:tzv,label:$.timepicker.timezoneOffsetString(tzv,tp_inst.support.iso8601)};return tp_inst._defaults.timezoneList=timezoneList,tp_inst.timezone=null!==tp_inst._defaults.timezone?$.timepicker.timezoneOffsetNumber(tp_inst._defaults.timezone):-1*(new Date).getTimezoneOffset(),tp_inst.hour=tp_inst._defaults.hour<tp_inst._defaults.hourMin?tp_inst._defaults.hourMin:tp_inst._defaults.hour>tp_inst._defaults.hourMax?tp_inst._defaults.hourMax:tp_inst._defaults.hour,tp_inst.minute=tp_inst._defaults.minute<tp_inst._defaults.minuteMin?tp_inst._defaults.minuteMin:tp_inst._defaults.minute>tp_inst._defaults.minuteMax?tp_inst._defaults.minuteMax:tp_inst._defaults.minute,tp_inst.second=tp_inst._defaults.second<tp_inst._defaults.secondMin?tp_inst._defaults.secondMin:tp_inst._defaults.second>tp_inst._defaults.secondMax?tp_inst._defaults.secondMax:tp_inst._defaults.second,tp_inst.millisec=tp_inst._defaults.millisec<tp_inst._defaults.millisecMin?tp_inst._defaults.millisecMin:tp_inst._defaults.millisec>tp_inst._defaults.millisecMax?tp_inst._defaults.millisecMax:tp_inst._defaults.millisec,tp_inst.microsec=tp_inst._defaults.microsec<tp_inst._defaults.microsecMin?tp_inst._defaults.microsecMin:tp_inst._defaults.microsec>tp_inst._defaults.microsecMax?tp_inst._defaults.microsecMax:tp_inst._defaults.microsec,tp_inst.ampm="",tp_inst.$input=$input,tp_inst._defaults.altField&&(tp_inst.$altInput=$(tp_inst._defaults.altField),tp_inst._defaults.altRedirectFocus===!0&&tp_inst.$altInput.css({cursor:"pointer"}).focus(function(){$input.trigger("focus")})),(0===tp_inst._defaults.minDate||0===tp_inst._defaults.minDateTime)&&(tp_inst._defaults.minDate=new Date),(0===tp_inst._defaults.maxDate||0===tp_inst._defaults.maxDateTime)&&(tp_inst._defaults.maxDate=new Date),void 0!==tp_inst._defaults.minDate&&tp_inst._defaults.minDate instanceof Date&&(tp_inst._defaults.minDateTime=new Date(tp_inst._defaults.minDate.getTime())),void 0!==tp_inst._defaults.minDateTime&&tp_inst._defaults.minDateTime instanceof Date&&(tp_inst._defaults.minDate=new Date(tp_inst._defaults.minDateTime.getTime())),void 0!==tp_inst._defaults.maxDate&&tp_inst._defaults.maxDate instanceof Date&&(tp_inst._defaults.maxDateTime=new Date(tp_inst._defaults.maxDate.getTime())),void 0!==tp_inst._defaults.maxDateTime&&tp_inst._defaults.maxDateTime instanceof Date&&(tp_inst._defaults.maxDate=new Date(tp_inst._defaults.maxDateTime.getTime())),tp_inst.$input.bind("focus",function(){tp_inst._onFocus()}),tp_inst},_addTimePicker:function(e){var t=this.$altInput&&this._defaults.altFieldTimeOnly?this.$input.val()+" "+this.$altInput.val():this.$input.val();this.timeDefined=this._parseTime(t),this._limitMinMaxDateTime(e,!1),this._injectTimePicker()},_parseTime:function(e,t){if(this.inst||(this.inst=$.datepicker._getInst(this.$input[0])),t||!this._defaults.timeOnly){var i=$.datepicker._get(this.inst,"dateFormat");try{var s=parseDateTimeInternal(i,this._defaults.timeFormat,e,$.datepicker._getFormatConfig(this.inst),this._defaults);if(!s.timeObj)return!1;$.extend(this,s.timeObj)}catch(a){return $.timepicker.log("Error parsing the date/time string: "+a+"\ndate/time string = "+e+"\ntimeFormat = "+this._defaults.timeFormat+"\ndateFormat = "+i),!1}return!0}var n=$.datepicker.parseTime(this._defaults.timeFormat,e,this._defaults);return n?($.extend(this,n),!0):!1},_injectTimePicker:function(){var e=this.inst.dpDiv,t=this.inst.settings,i=this,s="",a="",n=null,r={},l={},o=null,c=0,u=0;if(0===e.find("div.ui-timepicker-div").length&&t.showTimepicker){var m=' style="display:none;"',d='<div style="padding-top:10px" class="ui-timepicker-div'+(t.isRTL?" ui-timepicker-rtl":"")+'"><dl><span class="dpTime"><dt class="ui_tpicker_time_label"'+(t.showTime?"":m)+">"+t.timeText+'</dt><dd class="ui_tpicker_time"'+(t.showTime?"":m)+"></dd></span>";for(c=0,u=this.units.length;u>c;c++){if(s=this.units[c],a=s.substr(0,1).toUpperCase()+s.substr(1),n=null!==t["show"+a]?t["show"+a]:this.support[s],r[s]=parseInt(t[s+"Max"]-(t[s+"Max"]-t[s+"Min"])%t["step"+a],10),l[s]=0,d+='<span class="timeRow"><dt class="ui_tpicker_'+s+'_label"'+(n?"":m)+">"+t[s+"Text"]+'</dt><dd class="ui_tpicker_'+s+'"><div class="ui_tpicker_'+s+'_slider"'+(n?"":m)+"></div>",n&&t[s+"Grid"]>0){if(d+='<div style="padding-left: 1px"><table class="ui-tpicker-grid-label"><tr>',"hour"===s)for(var h=t[s+"Min"];h<=r[s];h+=parseInt(t[s+"Grid"],10)){l[s]++;var p=$.datepicker.formatTime(this.support.ampm?"hht":"HH",{hour:h},t);d+='<td data-for="'+s+'">'+p+"</td>"}else for(var _=t[s+"Min"];_<=r[s];_+=parseInt(t[s+"Grid"],10))l[s]++,d+='<td data-for="'+s+'">'+(10>_?"0":"")+_+"</td>";d+="</tr></table></div>"}d+="</dd></span>"}var f=null!==t.showTimezone?t.showTimezone:this.support.timezone;d+='<dt class="ui_tpicker_timezone_label"'+(f?"":m)+">"+t.timezoneText+"</dt>",d+='<dd class="ui_tpicker_timezone" '+(f?"":m)+"></dd>",d+="</dl></div>";var g=$(d);for(t.timeOnly===!0&&(g.prepend('<div class="ui-widget-header ui-helper-clearfix ui-corner-all"><div class="ui-datepicker-title">'+t.timeOnlyTitle+"</div></div>"),e.find(".ui-datepicker-header, .ui-datepicker-calendar").hide()),c=0,u=i.units.length;u>c;c++)s=i.units[c],a=s.substr(0,1).toUpperCase()+s.substr(1),n=null!==t["show"+a]?t["show"+a]:this.support[s],i[s+"_slider"]=i.control.create(i,g.find(".ui_tpicker_"+s+"_slider"),s,i[s],t[s+"Min"],r[s],t["step"+a]),n&&t[s+"Grid"]>0&&(o=100*l[s]*t[s+"Grid"]/(r[s]-t[s+"Min"]),g.find(".ui_tpicker_"+s+" table").css({width:o+"%",marginLeft:t.isRTL?"0":o/(-2*l[s])+"%",marginRight:t.isRTL?o/(-2*l[s])+"%":"0",borderCollapse:"collapse"}).find("td").click(function(e){var t=$(this),a=t.html(),n=parseInt(a.replace(/[^0-9]/g),10),r=a.replace(/[^apm]/gi),l=t.data("for");"hour"===l&&(-1!==r.indexOf("p")&&12>n?n+=12:-1!==r.indexOf("a")&&12===n&&(n=0)),i.control.value(i,i[l+"_slider"],s,n),i._onTimeChange(),i._onSelectHandler()}).css({cursor:"pointer",width:100/l[s]+"%",textAlign:"center",overflow:"hidden"}));if(this.timezone_select=g.find(".ui_tpicker_timezone").append("<select></select>").find("select"),$.fn.append.apply(this.timezone_select,$.map(t.timezoneList,function(e,t){return $("<option />").val("object"==typeof e?e.value:e).text("object"==typeof e?e.label:e)})),"undefined"!=typeof this.timezone&&null!==this.timezone&&""!==this.timezone){var M=-1*new Date(this.inst.selectedYear,this.inst.selectedMonth,this.inst.selectedDay,12).getTimezoneOffset();M===this.timezone?selectLocalTimezone(i):this.timezone_select.val(this.timezone)}else"undefined"!=typeof this.hour&&null!==this.hour&&""!==this.hour?this.timezone_select.val(t.timezone):selectLocalTimezone(i);this.timezone_select.change(function(){i._onTimeChange(),i._onSelectHandler()});var v=e.find(".ui-datepicker-buttonpane");if(v.length?v.before(g):e.append(g),this.$timeObj=g.find(".ui_tpicker_time"),null!==this.inst){var k=this.timeDefined;this._onTimeChange(),this.timeDefined=k}if(this._defaults.addSliderAccess){var T=this._defaults.sliderAccessArgs,D=this._defaults.isRTL;T.isRTL=D,setTimeout(function(){if(0===g.find(".ui-slider-access").length){g.find(".ui-slider:visible").sliderAccess(T);var e=g.find(".ui-slider-access:eq(0)").outerWidth(!0);e&&g.find("table:visible").each(function(){var t=$(this),i=t.outerWidth(),s=t.css(D?"marginRight":"marginLeft").toString().replace("%",""),a=i-e,n=s*a/i+"%",r={width:a,marginRight:0,marginLeft:0};r[D?"marginRight":"marginLeft"]=n,t.css(r)})}},10)}i._limitMinMaxDateTime(this.inst,!0)}},_limitMinMaxDateTime:function(e,t){var i=this._defaults,s=new Date(e.selectedYear,e.selectedMonth,e.selectedDay);if(this._defaults.showTimepicker){if(null!==$.datepicker._get(e,"minDateTime")&&void 0!==$.datepicker._get(e,"minDateTime")&&s){var a=$.datepicker._get(e,"minDateTime"),n=new Date(a.getFullYear(),a.getMonth(),a.getDate(),0,0,0,0);(null===this.hourMinOriginal||null===this.minuteMinOriginal||null===this.secondMinOriginal||null===this.millisecMinOriginal||null===this.microsecMinOriginal)&&(this.hourMinOriginal=i.hourMin,this.minuteMinOriginal=i.minuteMin,this.secondMinOriginal=i.secondMin,this.millisecMinOriginal=i.millisecMin,this.microsecMinOriginal=i.microsecMin),e.settings.timeOnly||n.getTime()===s.getTime()?(this._defaults.hourMin=a.getHours(),this.hour<=this._defaults.hourMin?(this.hour=this._defaults.hourMin,this._defaults.minuteMin=a.getMinutes(),this.minute<=this._defaults.minuteMin?(this.minute=this._defaults.minuteMin,this._defaults.secondMin=a.getSeconds(),this.second<=this._defaults.secondMin?(this.second=this._defaults.secondMin,this._defaults.millisecMin=a.getMilliseconds(),this.millisec<=this._defaults.millisecMin?(this.millisec=this._defaults.millisecMin,this._defaults.microsecMin=a.getMicroseconds()):(this.microsec<this._defaults.microsecMin&&(this.microsec=this._defaults.microsecMin),this._defaults.microsecMin=this.microsecMinOriginal)):(this._defaults.millisecMin=this.millisecMinOriginal,this._defaults.microsecMin=this.microsecMinOriginal)):(this._defaults.secondMin=this.secondMinOriginal,this._defaults.millisecMin=this.millisecMinOriginal,this._defaults.microsecMin=this.microsecMinOriginal)):(this._defaults.minuteMin=this.minuteMinOriginal,this._defaults.secondMin=this.secondMinOriginal,this._defaults.millisecMin=this.millisecMinOriginal,this._defaults.microsecMin=this.microsecMinOriginal)):(this._defaults.hourMin=this.hourMinOriginal,this._defaults.minuteMin=this.minuteMinOriginal,this._defaults.secondMin=this.secondMinOriginal,this._defaults.millisecMin=this.millisecMinOriginal,this._defaults.microsecMin=this.microsecMinOriginal)}if(null!==$.datepicker._get(e,"maxDateTime")&&void 0!==$.datepicker._get(e,"maxDateTime")&&s){var r=$.datepicker._get(e,"maxDateTime"),l=new Date(r.getFullYear(),r.getMonth(),r.getDate(),0,0,0,0);(null===this.hourMaxOriginal||null===this.minuteMaxOriginal||null===this.secondMaxOriginal||null===this.millisecMaxOriginal)&&(this.hourMaxOriginal=i.hourMax,this.minuteMaxOriginal=i.minuteMax,this.secondMaxOriginal=i.secondMax,this.millisecMaxOriginal=i.millisecMax,this.microsecMaxOriginal=i.microsecMax),e.settings.timeOnly||l.getTime()===s.getTime()?(this._defaults.hourMax=r.getHours(),this.hour>=this._defaults.hourMax?(this.hour=this._defaults.hourMax,this._defaults.minuteMax=r.getMinutes(),this.minute>=this._defaults.minuteMax?(this.minute=this._defaults.minuteMax,this._defaults.secondMax=r.getSeconds(),this.second>=this._defaults.secondMax?(this.second=this._defaults.secondMax,this._defaults.millisecMax=r.getMilliseconds(),this.millisec>=this._defaults.millisecMax?(this.millisec=this._defaults.millisecMax,this._defaults.microsecMax=r.getMicroseconds()):(this.microsec>this._defaults.microsecMax&&(this.microsec=this._defaults.microsecMax),this._defaults.microsecMax=this.microsecMaxOriginal)):(this._defaults.millisecMax=this.millisecMaxOriginal,this._defaults.microsecMax=this.microsecMaxOriginal)):(this._defaults.secondMax=this.secondMaxOriginal,this._defaults.millisecMax=this.millisecMaxOriginal,this._defaults.microsecMax=this.microsecMaxOriginal)):(this._defaults.minuteMax=this.minuteMaxOriginal,this._defaults.secondMax=this.secondMaxOriginal,this._defaults.millisecMax=this.millisecMaxOriginal,this._defaults.microsecMax=this.microsecMaxOriginal)):(this._defaults.hourMax=this.hourMaxOriginal,this._defaults.minuteMax=this.minuteMaxOriginal,this._defaults.secondMax=this.secondMaxOriginal,this._defaults.millisecMax=this.millisecMaxOriginal,this._defaults.microsecMax=this.microsecMaxOriginal)}if(null!==e.settings.minTime){var o=new Date("01/01/1970 "+e.settings.minTime);this.hour<o.getHours()?(this.hour=this._defaults.hourMin=o.getHours(),this.minute=this._defaults.minuteMin=o.getMinutes()):this.hour===o.getHours()&&this.minute<o.getMinutes()?this.minute=this._defaults.minuteMin=o.getMinutes():this._defaults.hourMin<o.getHours()?(this._defaults.hourMin=o.getHours(),this._defaults.minuteMin=o.getMinutes()):this._defaults.hourMin===o.getHours()===this.hour&&this._defaults.minuteMin<o.getMinutes()?this._defaults.minuteMin=o.getMinutes():this._defaults.minuteMin=0}if(null!==e.settings.maxTime){var c=new Date("01/01/1970 "+e.settings.maxTime);this.hour>c.getHours()?(this.hour=this._defaults.hourMax=c.getHours(),this.minute=this._defaults.minuteMax=c.getMinutes()):this.hour===c.getHours()&&this.minute>c.getMinutes()?this.minute=this._defaults.minuteMax=c.getMinutes():this._defaults.hourMax>c.getHours()?(this._defaults.hourMax=c.getHours(),this._defaults.minuteMax=c.getMinutes()):this._defaults.hourMax===c.getHours()===this.hour&&this._defaults.minuteMax>c.getMinutes()?this._defaults.minuteMax=c.getMinutes():this._defaults.minuteMax=59}if(void 0!==t&&t===!0){var u=parseInt(this._defaults.hourMax-(this._defaults.hourMax-this._defaults.hourMin)%this._defaults.stepHour,10),m=parseInt(this._defaults.minuteMax-(this._defaults.minuteMax-this._defaults.minuteMin)%this._defaults.stepMinute,10),d=parseInt(this._defaults.secondMax-(this._defaults.secondMax-this._defaults.secondMin)%this._defaults.stepSecond,10),h=parseInt(this._defaults.millisecMax-(this._defaults.millisecMax-this._defaults.millisecMin)%this._defaults.stepMillisec,10),p=parseInt(this._defaults.microsecMax-(this._defaults.microsecMax-this._defaults.microsecMin)%this._defaults.stepMicrosec,10);this.hour_slider&&(this.control.options(this,this.hour_slider,"hour",{min:this._defaults.hourMin,max:u,step:this._defaults.stepHour}),this.control.value(this,this.hour_slider,"hour",this.hour-this.hour%this._defaults.stepHour)),this.minute_slider&&(this.control.options(this,this.minute_slider,"minute",{min:this._defaults.minuteMin,max:m,step:this._defaults.stepMinute}),this.control.value(this,this.minute_slider,"minute",this.minute-this.minute%this._defaults.stepMinute)),this.second_slider&&(this.control.options(this,this.second_slider,"second",{min:this._defaults.secondMin,max:d,step:this._defaults.stepSecond}),this.control.value(this,this.second_slider,"second",this.second-this.second%this._defaults.stepSecond)),this.millisec_slider&&(this.control.options(this,this.millisec_slider,"millisec",{min:this._defaults.millisecMin,max:h,step:this._defaults.stepMillisec}),this.control.value(this,this.millisec_slider,"millisec",this.millisec-this.millisec%this._defaults.stepMillisec)),this.microsec_slider&&(this.control.options(this,this.microsec_slider,"microsec",{min:this._defaults.microsecMin,max:p,step:this._defaults.stepMicrosec}),this.control.value(this,this.microsec_slider,"microsec",this.microsec-this.microsec%this._defaults.stepMicrosec))}}},_onTimeChange:function(){if(this._defaults.showTimepicker){var e=this.hour_slider?this.control.value(this,this.hour_slider,"hour"):!1,t=this.minute_slider?this.control.value(this,this.minute_slider,"minute"):!1,i=this.second_slider?this.control.value(this,this.second_slider,"second"):!1,s=this.millisec_slider?this.control.value(this,this.millisec_slider,"millisec"):!1,a=this.microsec_slider?this.control.value(this,this.microsec_slider,"microsec"):!1,n=this.timezone_select?this.timezone_select.val():!1,r=this._defaults,l=r.pickerTimeFormat||r.timeFormat,o=r.pickerTimeSuffix||r.timeSuffix;"object"==typeof e&&(e=!1),"object"==typeof t&&(t=!1),"object"==typeof i&&(i=!1),"object"==typeof s&&(s=!1),"object"==typeof a&&(a=!1),"object"==typeof n&&(n=!1),e!==!1&&(e=parseInt(e,10)),t!==!1&&(t=parseInt(t,10)),i!==!1&&(i=parseInt(i,10)),s!==!1&&(s=parseInt(s,10)),a!==!1&&(a=parseInt(a,10)),n!==!1&&(n=n.toString());var c=r[12>e?"amNames":"pmNames"][0],u=e!==parseInt(this.hour,10)||t!==parseInt(this.minute,10)||i!==parseInt(this.second,10)||s!==parseInt(this.millisec,10)||a!==parseInt(this.microsec,10)||this.ampm.length>0&&12>e!=(-1!==$.inArray(this.ampm.toUpperCase(),this.amNames))||null!==this.timezone&&n!==this.timezone.toString();u&&(e!==!1&&(this.hour=e),t!==!1&&(this.minute=t),i!==!1&&(this.second=i),s!==!1&&(this.millisec=s),a!==!1&&(this.microsec=a),n!==!1&&(this.timezone=n),this.inst||(this.inst=$.datepicker._getInst(this.$input[0])),this._limitMinMaxDateTime(this.inst,!0)),this.support.ampm&&(this.ampm=c),this.formattedTime=$.datepicker.formatTime(r.timeFormat,this,r),this.$timeObj&&this.$timeObj.text(l===r.timeFormat?this.formattedTime+o:$.datepicker.formatTime(l,this,r)+o),this.timeDefined=!0,u&&this._updateDateTime()}},_onSelectHandler:function(){var e=this._defaults.onSelect||this.inst.settings.onSelect,t=this.$input?this.$input[0]:null;e&&t&&e.apply(t,[this.formattedDateTime,this])},_updateDateTime:function(e){e=this.inst||e;var t=e.currentYear>0?new Date(e.currentYear,e.currentMonth,e.currentDay):new Date(e.selectedYear,e.selectedMonth,e.selectedDay),i=$.datepicker._daylightSavingAdjust(t),s=$.datepicker._get(e,"dateFormat"),a=$.datepicker._getFormatConfig(e),n=null!==i&&this.timeDefined;this.formattedDate=$.datepicker.formatDate(s,null===i?new Date:i,a);var r=this.formattedDate;if(""===e.lastVal&&(e.currentYear=e.selectedYear,e.currentMonth=e.selectedMonth,e.currentDay=e.selectedDay),this._defaults.timeOnly===!0&&this._defaults.timeOnlyShowDate===!1?r=this.formattedTime:(this._defaults.timeOnly!==!0&&(this._defaults.alwaysSetTime||n)||this._defaults.timeOnly===!0&&this._defaults.timeOnlyShowDate===!0)&&(r+=this._defaults.separator+this.formattedTime+this._defaults.timeSuffix),this.formattedDateTime=r,this._defaults.showTimepicker)if(this.$altInput&&this._defaults.timeOnly===!1&&this._defaults.altFieldTimeOnly===!0)this.$altInput.val(this.formattedTime),this.$input.val(this.formattedDate);else if(this.$altInput){this.$input.val(r);var l="",o=null!==this._defaults.altSeparator?this._defaults.altSeparator:this._defaults.separator,c=null!==this._defaults.altTimeSuffix?this._defaults.altTimeSuffix:this._defaults.timeSuffix;this._defaults.timeOnly||(l=this._defaults.altFormat?$.datepicker.formatDate(this._defaults.altFormat,null===i?new Date:i,a):this.formattedDate,l&&(l+=o)),l+=null!==this._defaults.altTimeFormat?$.datepicker.formatTime(this._defaults.altTimeFormat,this,this._defaults)+c:this.formattedTime+c,this.$altInput.val(l)}else this.$input.val(r);else this.$input.val(this.formattedDate);this.$input.trigger("change")},_onFocus:function(){if(!this.$input.val()&&this._defaults.defaultValue){this.$input.val(this._defaults.defaultValue);var e=$.datepicker._getInst(this.$input.get(0)),t=$.datepicker._get(e,"timepicker");if(t&&t._defaults.timeOnly&&e.input.val()!==e.lastVal)try{$.datepicker._updateDatepicker(e)}catch(i){$.timepicker.log(i)}}},_controls:{slider:{create:function(e,t,i,s,a,n,r){var l=e._defaults.isRTL;return t.prop("slide",null).slider({orientation:"horizontal",value:l?-1*s:s,min:l?-1*n:a,max:l?-1*a:n,step:r,slide:function(t,s){e.control.value(e,$(this),i,l?-1*s.value:s.value),e._onTimeChange()},stop:function(t,i){e._onSelectHandler()}})},options:function(e,t,i,s,a){if(e._defaults.isRTL){if("string"==typeof s)return"min"===s||"max"===s?void 0!==a?t.slider(s,-1*a):Math.abs(t.slider(s)):t.slider(s);var n=s.min,r=s.max;return s.min=s.max=null,void 0!==n&&(s.max=-1*n),void 0!==r&&(s.min=-1*r),t.slider(s)}return"string"==typeof s&&void 0!==a?t.slider(s,a):t.slider(s)},value:function(e,t,i,s){return e._defaults.isRTL?void 0!==s?t.slider("value",-1*s):Math.abs(t.slider("value")):void 0!==s?t.slider("value",s):t.slider("value")}},select:{create:function(e,t,i,s,a,n,r){for(var l='<select class="ui-timepicker-select" data-unit="'+i+'" data-min="'+a+'" data-max="'+n+'" data-step="'+r+'">',o=e._defaults.pickerTimeFormat||e._defaults.timeFormat,c=a;n>=c;c+=r)l+='<option value="'+c+'"'+(c===s?" selected":"")+">",l+="hour"===i?$.datepicker.formatTime($.trim(o.replace(/[^ht ]/gi,"")),{hour:c},e._defaults):"millisec"===i||"microsec"===i||c>=10?c:"0"+c.toString(),l+="</option>";return l+="</select>",t.children("select").remove(),$(l).appendTo(t).change(function(t){e._onTimeChange(),e._onSelectHandler()}),t},options:function(e,t,i,s,a){var n={},r=t.children("select");if("string"==typeof s){if(void 0===a)return r.data(s);n[s]=a}else n=s;return e.control.create(e,t,r.data("unit"),r.val(),n.min||r.data("min"),n.max||r.data("max"),n.step||r.data("step"))},value:function(e,t,i,s){var a=t.children("select");return void 0!==s?a.val(s):a.val()}}}}),$.fn.extend({timepicker:function(e){e=e||{};var t=Array.prototype.slice.call(arguments);return"object"==typeof e&&(t[0]=$.extend(e,{timeOnly:!0})),$(this).each(function(){$.fn.datetimepicker.apply($(this),t)})},datetimepicker:function(e){e=e||{};var t=arguments;return"string"==typeof e?"getDate"===e||"option"===e&&2===t.length&&"string"==typeof t[1]?$.fn.datepicker.apply($(this[0]),t):this.each(function(){var e=$(this);e.datepicker.apply(e,t)}):this.each(function(){var t=$(this);t.datepicker($.timepicker._newInst(t,e)._defaults)})}}),$.datepicker.parseDateTime=function(e,t,i,s,a){var n=parseDateTimeInternal(e,t,i,s,a);if(n.timeObj){var r=n.timeObj;n.date.setHours(r.hour,r.minute,r.second,r.millisec),n.date.setMicroseconds(r.microsec)}return n.date},$.datepicker.parseTime=function(e,t,i){var s=extendRemove(extendRemove({},$.timepicker._defaults),i||{}),a=(-1!==e.replace(/\'.*?\'/g,"").indexOf("Z"),function(e,t,i){var s,a=function(e,t){var i=[];return e&&$.merge(i,e),t&&$.merge(i,t),i=$.map(i,function(e){return e.replace(/[.*+?|()\[\]{}\\]/g,"\\$&")}),"("+i.join("|")+")?"},n=function(e){var t=e.toLowerCase().match(/(h{1,2}|m{1,2}|s{1,2}|l{1}|c{1}|t{1,2}|z|'.*?')/g),i={h:-1,m:-1,s:-1,l:-1,c:-1,t:-1,z:-1};if(t)for(var s=0;s<t.length;s++)-1===i[t[s].toString().charAt(0)]&&(i[t[s].toString().charAt(0)]=s+1);return i},r="^"+e.toString().replace(/([hH]{1,2}|mm?|ss?|[tT]{1,2}|[zZ]|[lc]|'.*?')/g,function(e){var t=e.length;switch(e.charAt(0).toLowerCase()){case"h":return 1===t?"(\\d?\\d)":"(\\d{"+t+"})";case"m":return 1===t?"(\\d?\\d)":"(\\d{"+t+"})";case"s":return 1===t?"(\\d?\\d)":"(\\d{"+t+"})";case"l":return"(\\d?\\d?\\d)";case"c":return"(\\d?\\d?\\d)";case"z":return"(z|[-+]\\d\\d:?\\d\\d|\\S+)?";case"t":return a(i.amNames,i.pmNames);default:return"("+e.replace(/\'/g,"").replace(/(\.|\$|\^|\\|\/|\(|\)|\[|\]|\?|\+|\*)/g,function(e){return"\\"+e})+")?"}}).replace(/\s/g,"\\s?")+i.timeSuffix+"$",l=n(e),o="";s=t.match(new RegExp(r,"i"));var c={hour:0,minute:0,second:0,millisec:0,microsec:0};return s?(-1!==l.t&&(void 0===s[l.t]||0===s[l.t].length?(o="",c.ampm=""):(o=-1!==$.inArray(s[l.t].toUpperCase(),i.amNames)?"AM":"PM",c.ampm=i["AM"===o?"amNames":"pmNames"][0])),-1!==l.h&&("AM"===o&&"12"===s[l.h]?c.hour=0:"PM"===o&&"12"!==s[l.h]?c.hour=parseInt(s[l.h],10)+12:c.hour=Number(s[l.h])),-1!==l.m&&(c.minute=Number(s[l.m])),-1!==l.s&&(c.second=Number(s[l.s])),-1!==l.l&&(c.millisec=Number(s[l.l])),-1!==l.c&&(c.microsec=Number(s[l.c])),-1!==l.z&&void 0!==s[l.z]&&(c.timezone=$.timepicker.timezoneOffsetNumber(s[l.z])),c):!1}),n=function(e,t,i){try{var s=new Date("2012-01-01 "+t);if(isNaN(s.getTime())&&(s=new Date("2012-01-01T"+t),isNaN(s.getTime())&&(s=new Date("01/01/2012 "+t),isNaN(s.getTime()))))throw"Unable to parse time with native Date: "+t;return{hour:s.getHours(),minute:s.getMinutes(),second:s.getSeconds(),millisec:s.getMilliseconds(),microsec:s.getMicroseconds(),timezone:-1*s.getTimezoneOffset()}}catch(n){try{return a(e,t,i)}catch(r){$.timepicker.log("Unable to parse \ntimeString: "+t+"\ntimeFormat: "+e)}}return!1};return"function"==typeof s.parse?s.parse(e,t,s):"loose"===s.parse?n(e,t,s):a(e,t,s)},$.datepicker.formatTime=function(e,t,i){i=i||{},i=$.extend({},$.timepicker._defaults,i),t=$.extend({hour:0,minute:0,second:0,millisec:0,microsec:0,timezone:null},t);var s=e,a=i.amNames[0],n=parseInt(t.hour,10);return n>11&&(a=i.pmNames[0]),s=s.replace(/(?:HH?|hh?|mm?|ss?|[tT]{1,2}|[zZ]|[lc]|'.*?')/g,function(e){switch(e){case"HH":return("0"+n).slice(-2);case"H":return n;case"hh":return("0"+convert24to12(n)).slice(-2);case"h":return convert24to12(n);case"mm":return("0"+t.minute).slice(-2);case"m":return t.minute;case"ss":return("0"+t.second).slice(-2);case"s":return t.second;case"l":return("00"+t.millisec).slice(-3);case"c":return("00"+t.microsec).slice(-3);case"z":return $.timepicker.timezoneOffsetString(null===t.timezone?i.timezone:t.timezone,!1);case"Z":return $.timepicker.timezoneOffsetString(null===t.timezone?i.timezone:t.timezone,!0);case"T":return a.charAt(0).toUpperCase();case"TT":return a.toUpperCase();case"t":return a.charAt(0).toLowerCase();case"tt":return a.toLowerCase();default:return e.replace(/'/g,"")}})},$.datepicker._base_selectDate=$.datepicker._selectDate,$.datepicker._selectDate=function(e,t){var i=this._getInst($(e)[0]),s=this._get(i,"timepicker");s&&i.settings.showTimepicker?(s._limitMinMaxDateTime(i,!0),i.inline=i.stay_open=!0,this._base_selectDate(e,t),i.inline=i.stay_open=!1,this._notifyChange(i),this._updateDatepicker(i)):this._base_selectDate(e,t)},$.datepicker._base_updateDatepicker=$.datepicker._updateDatepicker,$.datepicker._updateDatepicker=function(e){var t=e.input[0];if(!($.datepicker._curInst&&$.datepicker._curInst!==e&&$.datepicker._datepickerShowing&&$.datepicker._lastInput!==t||"boolean"==typeof e.stay_open&&e.stay_open!==!1)){this._base_updateDatepicker(e);var i=this._get(e,"timepicker");i&&i._addTimePicker(e)}},$.datepicker._base_doKeyPress=$.datepicker._doKeyPress,$.datepicker._doKeyPress=function(e){var t=$.datepicker._getInst(e.target),i=$.datepicker._get(t,"timepicker");if(i&&$.datepicker._get(t,"constrainInput")){var s=i.support.ampm,a=null!==i._defaults.showTimezone?i._defaults.showTimezone:i.support.timezone,n=$.datepicker._possibleChars($.datepicker._get(t,"dateFormat")),r=i._defaults.timeFormat.toString().replace(/[hms]/g,"").replace(/TT/g,s?"APM":"").replace(/Tt/g,s?"AaPpMm":"").replace(/tT/g,s?"AaPpMm":"").replace(/T/g,s?"AP":"").replace(/tt/g,s?"apm":"").replace(/t/g,s?"ap":"")+" "+i._defaults.separator+i._defaults.timeSuffix+(a?i._defaults.timezoneList.join(""):"")+i._defaults.amNames.join("")+i._defaults.pmNames.join("")+n,l=String.fromCharCode(void 0===e.charCode?e.keyCode:e.charCode);return e.ctrlKey||" ">l||!n||r.indexOf(l)>-1}return $.datepicker._base_doKeyPress(e)},$.datepicker._base_updateAlternate=$.datepicker._updateAlternate,$.datepicker._updateAlternate=function(e){var t=this._get(e,"timepicker");if(t){var i=t._defaults.altField;if(i){var s=(t._defaults.altFormat||t._defaults.dateFormat,this._getDate(e)),a=$.datepicker._getFormatConfig(e),n="",r=t._defaults.altSeparator?t._defaults.altSeparator:t._defaults.separator,l=t._defaults.altTimeSuffix?t._defaults.altTimeSuffix:t._defaults.timeSuffix,o=null!==t._defaults.altTimeFormat?t._defaults.altTimeFormat:t._defaults.timeFormat;n+=$.datepicker.formatTime(o,t,t._defaults)+l,t._defaults.timeOnly||t._defaults.altFieldTimeOnly||null===s||(n=t._defaults.altFormat?$.datepicker.formatDate(t._defaults.altFormat,s,a)+r+n:t.formattedDate+r+n),$(i).val(e.input.val()?n:"")}}else $.datepicker._base_updateAlternate(e)},$.datepicker._base_doKeyUp=$.datepicker._doKeyUp,$.datepicker._doKeyUp=function(e){var t=$.datepicker._getInst(e.target),i=$.datepicker._get(t,"timepicker");if(i&&i._defaults.timeOnly&&t.input.val()!==t.lastVal)try{$.datepicker._updateDatepicker(t)}catch(s){$.timepicker.log(s)}return $.datepicker._base_doKeyUp(e)},$.datepicker._base_gotoToday=$.datepicker._gotoToday,$.datepicker._gotoToday=function(e){var t=this._getInst($(e)[0]),i=t.dpDiv;this._base_gotoToday(e);var s=this._get(t,"timepicker");selectLocalTimezone(s);var a=new Date;this._setTime(t,a),$(".ui-datepicker-today",i).click()},$.datepicker._disableTimepickerDatepicker=function(e){var t=this._getInst(e);if(t){var i=this._get(t,"timepicker");$(e).datepicker("getDate"),i&&(t.settings.showTimepicker=!1,i._defaults.showTimepicker=!1,i._updateDateTime(t))}},$.datepicker._enableTimepickerDatepicker=function(e){var t=this._getInst(e);if(t){var i=this._get(t,"timepicker");$(e).datepicker("getDate"),
i&&(t.settings.showTimepicker=!0,i._defaults.showTimepicker=!0,i._addTimePicker(t),i._updateDateTime(t))}},$.datepicker._setTime=function(e,t){var i=this._get(e,"timepicker");if(i){var s=i._defaults;i.hour=t?t.getHours():s.hour,i.minute=t?t.getMinutes():s.minute,i.second=t?t.getSeconds():s.second,i.millisec=t?t.getMilliseconds():s.millisec,i.microsec=t?t.getMicroseconds():s.microsec,i._limitMinMaxDateTime(e,!0),i._onTimeChange(),i._updateDateTime(e)}},$.datepicker._setTimeDatepicker=function(e,t,i){var s=this._getInst(e);if(s){var a=this._get(s,"timepicker");if(a){this._setDateFromField(s);var n;t&&("string"==typeof t?(a._parseTime(t,i),n=new Date,n.setHours(a.hour,a.minute,a.second,a.millisec),n.setMicroseconds(a.microsec)):(n=new Date(t.getTime()),n.setMicroseconds(t.getMicroseconds())),"Invalid Date"===n.toString()&&(n=void 0),this._setTime(s,n))}}},$.datepicker._base_setDateDatepicker=$.datepicker._setDateDatepicker,$.datepicker._setDateDatepicker=function(e,t){var i=this._getInst(e),s=t;if(i){"string"==typeof t&&(s=new Date(t),s.getTime()||(this._base_setDateDatepicker.apply(this,arguments),s=$(e).datepicker("getDate")));var a,n=this._get(i,"timepicker");s instanceof Date?(a=new Date(s.getTime()),a.setMicroseconds(s.getMicroseconds())):a=s,n&&a&&(n.support.timezone||null!==n._defaults.timezone||(n.timezone=-1*a.getTimezoneOffset()),s=$.timepicker.timezoneAdjust(s,n.timezone),a=$.timepicker.timezoneAdjust(a,n.timezone)),this._updateDatepicker(i),this._base_setDateDatepicker.apply(this,arguments),this._setTimeDatepicker(e,a,!0)}},$.datepicker._base_getDateDatepicker=$.datepicker._getDateDatepicker,$.datepicker._getDateDatepicker=function(e,t){var i=this._getInst(e);if(i){var s=this._get(i,"timepicker");if(s){void 0===i.lastVal&&this._setDateFromField(i,t);var a=this._getDate(i);return a&&s._parseTime($(e).val(),s.timeOnly)&&(a.setHours(s.hour,s.minute,s.second,s.millisec),a.setMicroseconds(s.microsec),null!=s.timezone&&(s.support.timezone||null!==s._defaults.timezone||(s.timezone=-1*a.getTimezoneOffset()),a=$.timepicker.timezoneAdjust(a,s.timezone))),a}return this._base_getDateDatepicker(e,t)}},$.datepicker._base_parseDate=$.datepicker.parseDate,$.datepicker.parseDate=function(e,t,i){var s;try{s=this._base_parseDate(e,t,i)}catch(a){if(!(a.indexOf(":")>=0))throw a;s=this._base_parseDate(e,t.substring(0,t.length-(a.length-a.indexOf(":")-2)),i),$.timepicker.log("Error parsing the date string: "+a+"\ndate string = "+t+"\ndate format = "+e)}return s},$.datepicker._base_formatDate=$.datepicker._formatDate,$.datepicker._formatDate=function(e,t,i,s){var a=this._get(e,"timepicker");return a?(a._updateDateTime(e),a.$input.val()):this._base_formatDate(e)},$.datepicker._base_optionDatepicker=$.datepicker._optionDatepicker,$.datepicker._optionDatepicker=function(e,t,i){var s,a=this._getInst(e);if(!a)return null;var n=this._get(a,"timepicker");if(n){var r,l=null,o=null,c=null,u=n._defaults.evnts,m={};if("string"==typeof t){if("minDate"===t||"minDateTime"===t)l=i;else if("maxDate"===t||"maxDateTime"===t)o=i;else if("onSelect"===t)c=i;else if(u.hasOwnProperty(t)){if("undefined"==typeof i)return u[t];m[t]=i,s={}}}else if("object"==typeof t){t.minDate?l=t.minDate:t.minDateTime?l=t.minDateTime:t.maxDate?o=t.maxDate:t.maxDateTime&&(o=t.maxDateTime);for(r in u)u.hasOwnProperty(r)&&t[r]&&(m[r]=t[r])}for(r in m)m.hasOwnProperty(r)&&(u[r]=m[r],s||(s=$.extend({},t)),delete s[r]);if(s&&isEmptyObject(s))return;l?(l=0===l?new Date:new Date(l),n._defaults.minDate=l,n._defaults.minDateTime=l):o?(o=0===o?new Date:new Date(o),n._defaults.maxDate=o,n._defaults.maxDateTime=o):c&&(n._defaults.onSelect=c)}return void 0===i?this._base_optionDatepicker.call($.datepicker,e,t):this._base_optionDatepicker.call($.datepicker,e,s||t,i)};var isEmptyObject=function(e){var t;for(t in e)if(e.hasOwnProperty(t))return!1;return!0},extendRemove=function(e,t){$.extend(e,t);for(var i in t)(null===t[i]||void 0===t[i])&&(e[i]=t[i]);return e},detectSupport=function(e){var t=e.replace(/'.*?'/g,"").toLowerCase(),i=function(e,t){return-1!==e.indexOf(t)?!0:!1};return{hour:i(t,"h"),minute:i(t,"m"),second:i(t,"s"),millisec:i(t,"l"),microsec:i(t,"c"),timezone:i(t,"z"),ampm:i(t,"t")&&i(e,"h"),iso8601:i(e,"Z")}},convert24to12=function(e){return e%=12,0===e&&(e=12),String(e)},computeEffectiveSetting=function(e,t){return e&&e[t]?e[t]:$.timepicker._defaults[t]},splitDateTime=function(e,t){var i=computeEffectiveSetting(t,"separator"),s=computeEffectiveSetting(t,"timeFormat"),a=s.split(i),n=a.length,r=e.split(i),l=r.length;return l>1?{dateString:r.splice(0,l-n).join(i),timeString:r.splice(0,n).join(i)}:{dateString:e,timeString:""}},parseDateTimeInternal=function(e,t,i,s,a){var n,r,l;if(r=splitDateTime(i,a),n=$.datepicker._base_parseDate(e,r.dateString,s),""===r.timeString)return{date:n};if(l=$.datepicker.parseTime(t,r.timeString,a),!l)throw"Wrong time format";return{date:n,timeObj:l}},selectLocalTimezone=function(e,t){if(e&&e.timezone_select){var i=t||new Date;e.timezone_select.val(-i.getTimezoneOffset())}};$.timepicker=new Timepicker,$.timepicker.timezoneOffsetString=function(e,t){if(isNaN(e)||e>840||-720>e)return e;var i=e,s=i%60,a=(i-s)/60,n=t?":":"",r=(i>=0?"+":"-")+("0"+Math.abs(a)).slice(-2)+n+("0"+Math.abs(s)).slice(-2);return"+00:00"===r?"Z":r},$.timepicker.timezoneOffsetNumber=function(e){var t=e.toString().replace(":","");return"Z"===t.toUpperCase()?0:/^(\-|\+)\d{4}$/.test(t)?("-"===t.substr(0,1)?-1:1)*(60*parseInt(t.substr(1,2),10)+parseInt(t.substr(3,2),10)):e},$.timepicker.timezoneAdjust=function(e,t){var i=$.timepicker.timezoneOffsetNumber(t);return isNaN(i)||e.setMinutes(e.getMinutes()+-e.getTimezoneOffset()-i),e},$.timepicker.timeRange=function(e,t,i){return $.timepicker.handleRange("timepicker",e,t,i)},$.timepicker.datetimeRange=function(e,t,i){$.timepicker.handleRange("datetimepicker",e,t,i)},$.timepicker.dateRange=function(e,t,i){$.timepicker.handleRange("datepicker",e,t,i)},$.timepicker.handleRange=function(e,t,i,s){function a(a,n){var r=t[e]("getDate"),l=i[e]("getDate"),o=a[e]("getDate");if(null!==r){var c=new Date(r.getTime()),u=new Date(r.getTime());c.setMilliseconds(c.getMilliseconds()+s.minInterval),u.setMilliseconds(u.getMilliseconds()+s.maxInterval),s.minInterval>0&&c>l?i[e]("setDate",c):s.maxInterval>0&&l>u?i[e]("setDate",u):r>l&&n[e]("setDate",o)}}function n(t,i,a){if(t.val()){var n=t[e].call(t,"getDate");null!==n&&s.minInterval>0&&("minDate"===a&&n.setMilliseconds(n.getMilliseconds()+s.minInterval),"maxDate"===a&&n.setMilliseconds(n.getMilliseconds()-s.minInterval)),n.getTime&&i[e].call(i,"option",a,n)}}s=$.extend({},{minInterval:0,maxInterval:0,start:{},end:{}},s);var r=!1;return"timepicker"===e&&(r=!0,e="datetimepicker"),$.fn[e].call(t,$.extend({timeOnly:r,onClose:function(e,t){a($(this),i)},onSelect:function(e){n($(this),i,"minDate")}},s,s.start)),$.fn[e].call(i,$.extend({timeOnly:r,onClose:function(e,i){a($(this),t)},onSelect:function(e){n($(this),t,"maxDate")}},s,s.end)),a(t,i),n(t,i,"minDate"),n(i,t,"maxDate"),$([t.get(0),i.get(0)])},$.timepicker.log=function(e){window.console&&window.console.log(e)},$.timepicker._util={_extendRemove:extendRemove,_isEmptyObject:isEmptyObject,_convert24to12:convert24to12,_detectSupport:detectSupport,_selectLocalTimezone:selectLocalTimezone,_computeEffectiveSetting:computeEffectiveSetting,_splitDateTime:splitDateTime,_parseDateTimeInternal:parseDateTimeInternal},Date.prototype.getMicroseconds||(Date.prototype.microseconds=0,Date.prototype.getMicroseconds=function(){return this.microseconds},Date.prototype.setMicroseconds=function(e){return this.setMilliseconds(this.getMilliseconds()+Math.floor(e/1e3)),this.microseconds=e%1e3,this}),$.timepicker.version="@@version"}}(jQuery);

//
$(document).ready(function(){
	//$("form").validationEngine({autoHidePrompt:true,autoHideDelay: 1500,maxErrorsPerField: 1});
	//$('.cfBtn').click(function(e) {
        //$('.cfBtn').bind('click', function(e) {
        $('body').on('click','.cfBtn',function(e){
		
		
        e.preventDefault();
        var form = $(this).parents('form')[0];
        var thisevent = $(this);
        var oldbtntxt = $(this).html();
        FrmId = form.id;
		
		var	delay = $(this).parents('.pmForms').attr('data-delay');//parseInt()
		var delayTime = 2000;
		var autoHide = true; 
		if(delay){
			delayTime = parseInt(delay);
			if(delay == 'false'){
				delayTime = 20000;
				autoHide=false;
			}
			console.log('inside')
		}
		console.log('validation alert autohide: '+autoHide)
		console.log('validation alert delay time: '+delayTime)
		$('#'+FrmId).validationEngine({autoHidePrompt:autoHide,autoHideDelay: delayTime,maxErrorsPerField: 1});
		
        var valid = $('#'+FrmId).validationEngine('validate');
          
        //Google Tracking Code/Tag --- SHAM - https://trello.com/c/k01W59oF/3130-google-tracking-codes
        FormData = $("#"+FrmId).serializeArray();
        objArray = {};
        $(FormData).each(function(i, field){
          objArray[field.name] = field.value;
        });
        //undefined
		//alert($('#GEventTrackId').val())
        if($('#GEventTrackId').val()!='' && $('#GEventTrackId').val()!='undefined'){
            var eventName='Contact Form';
             try{
                eventName=decodeURIComponent(objArray['gTrackEventAction']);
				ga('send', 'event', eventName, 'Click', decodeURIComponent($('#GEventTrackId').val())); 
			}catch(Gtrack1){console.log(Gtrack1);} 
        }else{
            try{
                console.log(decodeURIComponent(objArray['googletrackingcodes']));
                ga('send', 'event', 'Search Box ', 'Click', decodeURIComponent(objArray['googletrackingcodes']));
            }catch(Gtrack){console.log(Gtrack);}
        }
		//facebook pixel code start
		var fbEventSolo = $(this).parents('form').find('.fbEventSolo').val();
		var fbConversionEvent = $('#fbConversionEvent').val();
		
		if(fbEventSolo != '' && fbEventSolo !='undefined'){
			fbConversionEvent = fbEventSolo
		}
		console.log('facebook conversion event on design/form widget--> '+ fbConversionEvent)
		if(fbConversionEvent!='' && fbConversionEvent!='undefined'){
			
			try{
				fbq('track', fbConversionEvent); 
			}catch(err) {console.log(err+'-----forms.js line 45');}
		}
		//facebook pixel code end
        //------------------------------------------------------------------

	  if(valid == true){
	   $(this).attr('disabled', 'disabled').html('<div class="loader">Loading...</div>');
            $.post($("#w4r_setUrlPath").val()+'w4rcontactform', $("#"+FrmId).serialize(), function(data) {
                if(data=='Error-recaptcha'){
                    console.log('___');
                    thisevent.removeAttr('disabled');
                    thisevent.html(oldbtntxt);
                   //$('#'+FrmId).find('.Error-recaptcha').html('Robot verification failed, please try again.');
				   captchaError($('#'+FrmId));
                }else{
                    $('#'+FrmId)[0].reset();
					var confirmMsg = '<i class="ico-checkmark"></i>Message has been sent!';
					if($('#confirm_'+FrmId).val()){
						confirmMsg = '<i class="ico-checkmark"></i>'+$('#confirm_'+FrmId).val();
					}
                    $('#'+FrmId).find('.btn').addClass('success').css('opacity', 1).html(confirmMsg);
                    //Fasy plz implement the reset checkbox options.
                    $('#'+FrmId).find('input[type="checkbox"]').parent('label').removeClass('active');

                    //$('#'+FrmId).find('.redirect_openin').trigger("click");
                    var href = $('#'+FrmId).find('.redirect_openin').attr('href');
                    var target = $('#'+FrmId).find('.redirect_openin').attr('target');
                    var ids = $('#'+FrmId).find('.redirect_openin').attr('id');
                    console.log(target+'---'+ids);
                    if(href!=''){
                        $('#'+FrmId).find('a').trigger("click");
                        document.getElementById(ids).click();
                    }
                }
                    //window.location.href = href; 
//                                window.open(
//                                    href,
//                                   target // <- This is what makes it open in a new window.
//                                  );
                    //call automail function------------
                    //automail(FrmId);  - Remoe as per discussion with raza bahi - 21-10-2015 Removea automail section
            }); 
	  }else{
		  $('#'+FrmId).validationEngine();
	  }
     return false;
     // alert(form.id); // defined
    //  alert(form.action); // defined
   });
	$('input[type=text],input[type=email],input[type=tel],input[type=password],input[type=number],select,textarea').each(function(index, element) {
		$(this).attr('data-inside', 'yes')
	});
	
	$('input[type=text]').each(function(index, element) {
		if($(this).hasClass('validate[required,custom[email]]')){
			$(this).attr('data-errormessage-value-missing', 'Enter email address').attr('data-errormessage-custom-error', 'Invalid email address');
		}
	});
	
	//if set opotion field label disable from pageManager 
	//pmForms w4rNoLabels
	$('.pmForms').each(function(index, element) {
        if($(this).hasClass('w4rNoLabels')){
			$(this).find('select').each(function(index, element) {
                var _label = $(this).prev('label').text();
				if(!_label){
					_label = $(this).parent('span').prev('label').text();
				}
				$(this).find('option:first-child').text(_label).prop('disabled', true);
            });
			
			$(this).find('textarea').each(function(index, element) {
                var _label = $(this).prev('label').text();
				if(!_label){
					_label = $(this).parent('span').prev('label').text();
				}
				$(this).attr('placeholder', _label);
            });
			
			$(this).find('input').each(function(index, element) {
                var _label = $(this).prev('label').text();
				if(!_label){
					_label = $(this).parent('span').prev('label').text();
				}
				$(this).attr('placeholder', _label);
            });
		}
    });
	
});
function automail(FrmId){
	//$.post($("#w4r_setUrlPath").val()+'quickemailgenerate', $("#"+FrmId).serialize(), function(data) {	});
}

function captchaError(elem){
	$(elem).find('.g-recaptcha').append('<div class="Error-recaptcha" onClick="$(this).remove();">Robot verification failed, please try again.</div>').fadeIn();
	setTimeout(function(){
		$(elem).find('.g-recaptcha').find('.Error-recaptcha').fadeOut(function() {
			$('.Error-recaptcha').remove();
		});
	},1500);
}

$(function() {
	$( ".datepicker" ).datepicker({
		altFieldTimeOnly: false,
		changeMonth: true,
		changeYear: true,
		yearRange: '1900:2020' /*new Date().getFullYear().toString()*/,
		dateFormat: "MM d, yy",
		beforeShow: function(dateText, obj) {
			myglobal = obj.selectedDay
			realDate = new Date();	
				$(this).datepicker('setDate', realDate);
		},
		beforeShowDay: function(date) {return [true, date.getDate() == myglobal ? "highlight-selectedDate" : ""];} 
	});
});


$(".w4rdateAndtimepicker").datetimepicker({
	altFieldTimeOnly: false,
	changeMonth: true,
	changeYear: true,
	yearRange: '1900:2020' /*new Date().getFullYear().toString()*/,
	dateFormat: "MM d, yy",
	timeFormat: "hh:mm tt",
	hour: 10,
	minute: 00,
	ampm: true,		
});

$('.timepicker').timepicker({
	timeFormat: "hh:mm tt",
	//hour: 12,
	//minute: 00,
	ampm: true,
	defaultValue: "12:00 pm",
	stepMinute: 15,
	minuteMax: 30,
	beforeShow: function(dateText, obj) {
			myglobal = obj.selectedDay
			realDate = new Date();	
				$(this).datepicker('setDate', realDate);
		},
		beforeShowDay: function(date) {return [true, date.getDate() == myglobal ? "highlight-selectedDate" : ""];} 
});

//$(".phoneMask").mask("(999) 999-9999");

function MortgageCalculator() {
    doCalcOnForm(document.forms["mortCalFrm"])
}

function clearColumn(e, t) {
    e["downpayment" + t].value = "";
    e["remainingmortgage" + t].value = "";
    e["cmhcGePre" + t].value = "";
    e["totalfinancing" + t].value = "";
    e["monthlypayment" + t].value = "";
    e["monthlyexpenses" + t].value = "";
    e["monthlytotalpayment" + t].value = "";
    e["yearincomerequired" + t].value = ""
}

function clearResults(e) {
    var t = 0;
    for (t = 1; t <= 3; t++) {
        clearColumn(e, t)
    }
}

function checkForm(e) {
    var t = 0;
    var n = 0;
    var r = -1;
    var i = 0;
    for (t = 1; t <= 3; t++) {
        if (e["percentdown" + t].options[e["percentdown" + t].selectedIndex].value == "" || e["percentdown" + t].options[e["percentdown" + t].selectedIndex].value == "other") {
            while (r < 5 || r > 100) {
                n = prompt(decodeMsg("DOWNPAYMENT_PERCENT"), "5");
                if (n == null) {
                    alert("DOWNPAYMENT_REQUIRED");
                    n = "0"
                } else {
                    if (n.indexOf(".") > 0) n = n.substring(0, n.indexOf(".") + 3);
                    r = Number(filterNum("0" + n));
                    if (r < 5 || r > 100) {
                        alert("INVALID_DOWNPAYMENT")
                    }
                }
            }
            if (e["percentdown" + t].options[e["percentdown" + t].selectedIndex].value == "other") {
                i = e["percentdown" + t].selectedIndex + 1
            } else {
                i = e["percentdown" + t].selectedIndex
            }
            e["percentdown" + t].options[i].value = r;
            e["percentdown" + t].options[i].text = r + "%";
            e["percentdown" + t].selectedIndex = i
        }
    }
    validateNum(e.mortCalprice, 0, 1e3, 99999999, true);
    validateNum(e.mortCalinterest, 2, 1, 100);
    validateNum(e.mortCalheating, 0, 0, 99999, true);
    validateNum(e.mortCaltaxes, 0, 0, 99999, true);
    validateNum(e.mortCalcondo, 0, 0, 99999, true);
    validateNum(e.mortCalgds, 2, 1, 100);
    if (e.mortCalprice.value != "" && e.mortCalinterest.value != "" && e.mortCalgds.value != "") {
        return true
    } else {
        return false
    }
}

function CMHCRate(e, t) {
    var n = 0;
    n = Number(100 - Number(e));
    var r = 0;
    r = 0;
    if (t == 40) r = .6;
    else if (t == 35) r = .4;
    else if (t == 30) r = .2;
    if (n <= 65) r = .6;
    else if (n <= 75) r = .75;
    else if (n <= 80) r = 1.25;
    else if (n <= 85) r = r + 1.8;
    else if (n <= 90) r = r + 2.4;
    else if (n <= 95) r = r + 3.15;
    else if (n <= 100) r = r + 3.35;
    return r
}

function mortgagePayment(e, t, n) {
	
	
				   
	//console.log(e+'___:'+ t +'___:'+ n + '___:'+payment);
    var r = n * 12;
    var i = 6;
    return e / (1 / (Math.pow(1 + t / 200, 1 / i) - 1) * (1 - Math.pow(1 + t / 200, -r / i)))
}

function currencyString(e) {
    nNumDec = 0;
    if (e > 99999999) nNumDec = 0;
    var t = "" + Math.round(e * Math.pow(10, nNumDec));
    while (t.length <= nNumDec) {
        t = "0" + t
    }
    var n = t.length - nNumDec;
    var r = commaFmt(t.substring(0, n) + "." + t.substring(n, t.length));
    if (r.charAt(r.length - 1) == ".") r = r.substring(0, r.length - 1);
    return r
}

function doCalcOnForm(e) {
    var t = true;
    var n = 0;
    var r = 0;
    var i = 0;
    var s = 0;
    var o = 0;
    var u = 0;
    var a = 0;
    var f = 0;
    if (checkForm(e)) {
        var l = 0;
        for (l = 1; l <= 1; l++) {
			console.log(Number(e["percentdown" + l].options[e["percentdown" + l].selectedIndex].value) +'_____'+ e.mortCalprice.value);
            n = filterNum(e.mortCalprice.value) * (Number(e["percentdown" + l].options[e["percentdown" + l].selectedIndex].value) / 100);
            e["downpayment" + l].value = currencyString(n);
            r = filterNum(e.mortCalprice.value) - n;
            e["remainingmortgage" + l].value = currencyString(r);
            //console.log(e["percentdown" + l].options[e["percentdown" + l].selectedIndex].value + "_Fun");
            //console.log(e.mortCalamortization.options[e.mortCalamortization.selectedIndex].value + "_MORT");
            if (document.getElementById("MortgageCalculatorflag").value == "") {
                e.mortCalamortization.options[e.mortCalamortization.selectedIndex].value = 25
            }
            var c = $("#amortizationsp").find(".text").text();
            mortcal = parseInt(c);
            i = CMHCRate(Number(e["percentdown" + l].options[e["percentdown" + l].selectedIndex].value), e.mortCalamortization.options[e.mortCalamortization.selectedIndex].value) * r / 100;
            if (l == 1) {
                var h = e["percentdown" + l].options[e["percentdown" + l].selectedIndex].value / 100 * filterNum(e.mortCalprice.value);
                document.getElementById("downloadpaymentcal").innerHTML = "($" + h.toLocaleString() + " down)"
				
				document.getElementById("todalmortgagereq").innerHTML = e["remainingmortgage" + l].value + e["remainingmortgage" + l].value;
            }
            if ($("#percentdown1 option:selected").text() >= 20) {
                document.getElementById("cmhcspan").innerHTML = ""
            } else {
                document.getElementById("cmhcspan").innerHTML = "$"
            }
            if (e["percentdown" + l].options[e["percentdown" + l].selectedIndex].value >= 20) {
                e["cmhcGePre" + l].value = "---"
            } else {
                e["cmhcGePre" + l].value = currencyString(i)
            }
			
			if (l == 1) {
				
				if (e["cmhcGePre" + l].value=='---') {
					todalmortgagereq = Number(filterNum(e["remainingmortgage" + l].value)) ;
				}else {
					todalmortgagereq = Number(filterNum(e["remainingmortgage" + l].value)) + Number(filterNum(e["cmhcGePre" + l].value));
				}
				//console.log(todalmortgagereq);
				document.getElementById("todalmortgagereq").value = currencyString(todalmortgagereq);
            }
			
            s = r + i;
            e["totalfinancing" + l].value = currencyString(s);
            o = mortgagePayment(s, Number(e.mortCalinterest.value), Number(e.mortCalamortization.options[e.mortCalamortization.selectedIndex].value));
            e["monthlypayment" + l].value = currencyString(o);
            u = (Number(filterNum(e.mortCalheating.value)) + Number(filterNum(e.mortCaltaxes.value))) / 12 + Number(filterNum(e.mortCalcondo.value)) / 12;
            e["monthlyexpenses" + l].value = currencyString(u);
			//console.log(u +'_'+ o+'____::' +Number(e.mortCalinterest.value)+ '__'+Number(e.mortCalamortization.options[e.mortCalamortization.selectedIndex].value) +'___'+Number(todalmortgagereq));
            a = u + o;
			
			
			///
			//SHAM Formula - 08-01-2016
			var pointInertest = Number(e.mortCalinterest.value)/100;
			var IRC = 2;
			var IR = pointInertest;
			var APF = Math.round(100*12)/100;
			InRate = Math.pow((1+IR/IRC), (IRC/APF)) - 1;
			
			var payment = -pmt(InRate,   Number(e.mortCalamortization.options[e.mortCalamortization.selectedIndex].value) * 12,  Number(todalmortgagereq),  0, 0);
			//console.log('1::_'+payment);
			
			
			
            //e["monthlytotalpayment" + l].value = currencyString(a);
            vartotalsumup = Number(filterNum(e["monthlymaintenancefee" + l].value)) + Number(payment);
			e["estmonthlymortagepayment" + l].value = currencyString(payment);
			console.log(vartotalsumup+'__'+Number(filterNum(e["monthlymaintenancefee" + l].value))+'--'+payment);
			//e["monthlytotalpayment" + l].value = currencyString(vartotalsumup); Old Before change
			if(Number(filterNum(e["monthlymaintenancefee" + l].value))==0){
				e["monthlytotalpayment" + l].value = currencyString(payment);
			}else{
           		e["monthlytotalpayment" + l].value = currencyString(vartotalsumup);
			}
            f = a * 12 / (Number(e.mortCalgds.value) / 100);
            e["yearincomerequired" + l].value = currencyString(f)
        }
    } else {
        clearResults(e)
    }
}
function PMT2(i, n, p, fn) {
	console.log("Start:"+i+"_"+ n+"_"+ p+"_"+ fn);
	var pmts =  (i * (p * Math.pow((1 + i), n) + fn))/ (1 - Math.pow((1 + i), n));
	
	var periodic_payment = n * (i + (i / (Math.pow(1 + i, p) - 1)));
	//var periodic_payment = principal * (periodic_rate + (periodic_rate / (Math.pow(1 + periodic_rate, total_payments) - 1)));
	var abc = ((0.03/2+1)^(2/12)-1);
	console.log(pmts);
	console.log(periodic_payment);
	console.log(abc);
	return pmts;
}
function PPMT(rate, per, nper, pv, fv, type){
	if (per < 1 || (per >= nper + 1)) return null;
	var pmt = pmt(rate, nper, pv, fv, type);
	var ipmt = IPMT(pv, pmt, rate, per - 1);
	return pmt - ipmt;
}
function IPMT(pv, pmt, rate, per) {
	var tmp = Math.pow(1 + rate, per);
	return 0 - (pv * tmp * rate + pmt * (tmp - 1));
}
function pmt(rate, nper, pv, fv, type){
		
    	if (!fv) fv = 0;
		if (!type) type = 0;

		if (rate == 0) return -(pv + fv)/nper;
		
		var pvif = Math.pow(1 + rate, nper);
		var pmt = rate / (pvif - 1) * -(pv * pvif + fv);

		if (type == 1) {
			pmt /= (1 + rate);
		};

		return pmt;
}
function PMT1(ir, np, pv, fv, type) {
    /*
     * ir   - interest rate per month
     * np   - number of periods (months)
     * pv   - present value
     * fv   - future value
     * type - when the payments are due:
     *        0: end of the period, e.g. end of month (default)
     *        1: beginning of period
     */
    var pmt, pvif;

    fv || (fv = 0);
    type || (type = 0);

    if (ir === 0)
        return -(pv + fv)/np;

    pvif = Math.pow(1 + ir, np);
    pmt = - ir * pv * (pvif + fv) / (pvif - 1);

    if (type === 1)
        pmt /= (1 + ir);

    return pmt;
}
function formatRealNum(e, t) {
    var n = Math.round(parseFloat(filterNum(e.value)) * Math.pow(10, t));
    n = "" + n;
    while (n.length <= t) {
        n = "0" + n
    }
    var r = n.length - t;
    return n.substring(0, r) + "." + n.substring(r, n.length)
}

function formatInteger(e) {
    var t = Math.round(parseFloat(filterNum(e.value)));
    t = "" + t;
    return t
}

function formatNum(e, t, n) {
    var r = "" + e.value;
    if (r == "" || r == "null") {
        e.value = "";
        return false
    }
    if (t == 0) {
        var i = formatInteger(e, t)
    } else {
        var i = formatRealNum(e, t)
    }
    if (n) {
        i = commaFmt(i)
    }
    e.value = i;
    return true
}

function popupIsEmpty(e) {
    var t = e.selectedIndex;
    if (t <= 0) {
        return true
    } else {
        return false
    }
}

function scrub_RollNum(e, t, n) {
    var r = "";
    var s = "";
    t += "";
    if (t == "undefined") t = "";
    s = "0123456789" + t;
    r = scrub_String(e, s);
    for (i = r.length - 1; i >= 0; i--) {
        if (r.charAt(i) != ",") break;
        r = r.substring(0, i)
    }
    if (n) r = parse_Wildcards(r, n);
    return r
}

function scrub_String(e, t, n) {
    var r = "";
    var s = -1;
    var o = "";
    for (i = 0; i <= e.length; i++) {
        theChar = e.charAt(i);
        if (t.indexOf(theChar) != -1) r += theChar;
        else if (n) {
            s = n.indexOf(theChar);
            if (s != -1) {
                r += theChar;
                n = n.substring(0, s) + n.substring(s + 1, n.length)
            }
        }
    }
    return r

}

function filterNum(e) {
    var t = "";
    var n = "";
    if (e.indexOf("-") != -1) t = "-";
    n = scrub_String(e, "0123456789", ".");
    if (n == "") return "";
    else return t + n
}

function commaFmt(e) {
    var t = "" + e;
    var n = t.indexOf(",");
    if (n + 0 >= 0) {
        return e
    }
    var r = "";
    var i = t.indexOf(".");
    if (i != -1) {
        r = t.substring(i, t.length);
        t = t.substring(0, i)
    }
    var s = false;
    if (t.indexOf("-") != -1) {
        s = true;
        t = t.substring(1, t.length)
    }
    if (t.length <= 3) {
        return e
    }
    var o = "";
    var u = 0;
    for (var a = t.length - 1; a >= 0; a--) {
        u++;
        o = t.charAt(a) + o;
        if (u % 3 == 0) {
            if (a - 1 >= 0) {
                o = "," + o
            }
        }
    }
    if (i != -1) o = o + r;
    if (s) o = "-" + o;
    return o
}

function format_Real(e, t) {
    var n = filterNum(e);
    n = Math.round(parseFloat(n) * Math.pow(10, t));
    n = "" + n;
    while (n.length <= t) {
        n = "0" + n
    }
    var r = n.length - t;
    return n.substring(0, r) + "." + n.substring(r, n.length)
}

function format_Integer(e) {
    var t = filterNum(e);
    t = Math.round(parseFloat(t));
    return "" + t
}

function format_Number(e, t, n) {
    var r = "" + e;
    if (r == "" || r == "null") return "";
    if (t == 0) var i = format_Integer(r, t);
    else var i = format_Real(r, t);
    if (n) i = commaFmt(i);
    return i
}

function validateNum(e, t, n, r, i) {
    var s = filterNum(e.value);
    if (s == "" || s == "null") {
        e.value = "";
        return false
    }
    var o = parseFloat(filterNum(e.value));
    if (o < n || o > r) {
        alert("Please enter number between " + n + " and " + r + ".");
        e.value = "";
        e.focus();
        return false
    }
    if (t == 0) {
        var u = formatInteger(e, t)
    } else {
        var u = formatRealNum(e, t)
    }
    if (i) {
        u = commaFmt(u)
    }
    e.value = u;
    return true
}

function validatePrice(e, t, n, r) {
    var i = filterNum(e.value);
    if (i == "" || i == "null") {
        e.value = "";
        return false
    }
    var s = parseFloat(filterNum(e.value));
    if (s < t || s > n) {
        alert("Please enter a number between " + t + " and " + n + ".");
        e.value = "";
        e.focus();
        return false
    }
    if (s < 100) {
        decplaces = 2
    } else {
        decplaces = 0
    }
    if (decplaces == 0) {
        var o = formatInteger(e, decplaces)
    } else {
        var o = formatRealNum(e, decplaces)
    }
    if (r) {
        o = commaFmt(o)
    }
    e.value = o;
    return true
}

function str_Empty(e) {
    if (e.value + "" == "null") return true;
    else if (e.value == "") return true;
    return false
}

function popup_Empty(e) {
    var t = e.selectedIndex;
    if (t == -1) return true;
    else if (e.options[t].value == "") return true;
    else return false
}

function field_Empty(e) {
    if (!e) {
        return false
    }
    var t = e.type;
    if (t.indexOf("select") != -1) return popup_Empty(e);
    else return str_Empty(e)
}

function list_Empty(e) {
    var t = true;
    for (i = 1; i < e.length; i++) {
        if (e.options[i].selected) t = false
    }
    return t
}

function numberRange_OK(e, t) {
    if (e.value == "" || t.value == "") return true;
    var n = parseFloat(filterNum(e.value));
    var r = parseFloat(filterNum(t.value));
    if (r < n) {
        alert(t.name + "  is greater than  " + t.name + "   Please re-enter");
        e.value = "";
        t.value = "";
        e.focus();
        return false
    }
    return true
}

function wildcard_Alert() {
    alert('Wildcard Search Enabled\n  "?" - Searches for any single character.\n' + '  "*" - Searches for any characters of any length.')
}

function scrub_multi_value_field(e, t) {
    var n = "";
    if (e == "" || e == "undefined") return "";
    if (t == "" || t == "undefined") t = 0;
    e = scrub_Text(e, true);
    if (e.indexOf(",") == -1) {
        n = parse_Wildcards(e, t)
    } else {
        var r = e.split(",");
        for (var i = 0; i < r.length; i++) {
            if (r[i] == "") continue;
            if (r[i].charAt(0) == " ") r[i] = r[i].substring(1, r[i].length);
            if (r[i].charAt(r[i].length - 1) == " ") r[i] = r[i].substring(0, r[i].length - 1);
            n = n + parse_Wildcards(r[i], t);
            n = n + ","
        }
        for (sc_i = n.length - 1; sc_i >= 0; sc_i--) {
            if (n.charAt(sc_i) != ",") break;
            n = n.substring(0, sc_i)
        }
    }
    return n
}

function scrub_select_mult(e, t) {
    var n = true;
    var r = 0;
    for (var i = 0; i < e.options.length; i++) {
        if (n) {
            if (e.options[i].selected) {
                r++;
                if (r > t) {
                    n = false;
                    alert("You can select only " + t + " items in the list");
                    e.options[i].selected = false
                }
            }
        } else {
            e.options[i].selected = false
        }
    }
    return n
}

function isNum(e) {
    if (e.length != 1) return false;
    var t = "1234567890";
    if (t.indexOf(e, 0) == -1) return false;
    return true
}

function isChar(e) {
    if (e.length != 1) return false;
    var t = "abcdefghijklmnopqrstuvwxyzABCEDFGHIJKLMNOPQRSTUVWXYZ";
    if (t.indexOf(e, 0) == -1) return false;
    return true
}

function replace_Char(e, t, n) {
    while ((x = n.indexOf(e)) != -1) {
        n = n.substring(0, x) + t + n.substring(x + e.length, n.length)
    }
    return n
}

function scrub_String_Unwanted(e, t) {
    var n = "";
    var r = "";
    var i = true;
    var s = 0;
    for (s = 0; s <= e.length; s++) {
        r = e.charAt(s);
        if (r == '"') n += "`";
        else if (r == "'") n += "`";
        else if (t.indexOf(r) == -1) n += r
    }
    return n
}

function parse_Wildcards(e, t) {
    e = scrub_String_Unwanted(e, "%_");
    if (t == 0) {
        if (e.indexOf("*") != -1 || e.indexOf("?") != -1) {
            alert("Wildcards are not allowed in this field.");
            e = replace_Char("*", "", e);
            e = replace_Char("?", "", e)
        }
    } else {
        var n = e.substring(0, t);
        if (n.indexOf("*") != -1 || n.indexOf("?") != -1) {
            alert("A wildcard can only be used after character " + t + " in this field.");
            e = replace_Char("*", "", e);
            e = replace_Char("?", "", e)
        } else {
            var r = e.indexOf("*");
            if (r != -1) {
                n = e.substring(r + 1, e.length);
                if (n.indexOf("*") != -1) {
                    alert("Only one * wildcard is allowed in this field.");
                    e = replace_Char("*", "", e);
                    e = replace_Char("?", "", e)
                }
            }
        }
    }
    return e
}

function scrub_Text(e, t, n, r) {
    e += "";
    if (e == "null" || e == "") return "";
    for (var i = 0; i < e.length; i++) {
        if (e.charAt(0) != " ") break;
        e = e.substring(1, e.length)
    }
    for (i = e.length - 1; i >= 0; i--) {
        if (e.charAt(i) != " ") break;
        e = e.substring(0, i)
    }
    var s = "";
    if (t) {
        e = e.toUpperCase();
        s = "%_"
    }
    if (r != "true") e = scrub_String_Unwanted(e, s);
    if (n && n > "") e = parse_Wildcards(e, n);
    return e
}

function numberFilter(e) {
    filteredValues = "1234567890";
    var t;
    var n = "";
    for (t = 0; t < e.length; t++) {
        var r = e.charAt(t);
        if (filteredValues.indexOf(r) != -1) n += r
    }
    return n
}

function MortgageCal() {
    MortgageCurrency = numberFilter(document.mortCalculatorFrm.MortgageCurrency.value);
    leftt = MortgageCurrency;
    total_tax = 0;
    toronto_tax = 0;
    if (MortgageCurrency > 55e3) {
        tmp_tax = 55e3 * .005;
        total_tax += tmp_tax;
        MortgageCurrency -= 55e3
    } else {
        tmp_tax = MortgageCurrency * .005;
        total_tax += tmp_tax;
        MortgageCurrency = 0
    }
    if (MortgageCurrency > 195e3) {
        tmp_tax = 195e3 * .01;
        total_tax += tmp_tax;
        MortgageCurrency -= 195e3
    } else {
        tmp_tax = MortgageCurrency * .01;
        total_tax += tmp_tax;
        MortgageCurrency = 0
    }
    if (MortgageCurrency > 15e4) {
        tmp_tax = 15e4 * .015;
        total_tax += tmp_tax;
        MortgageCurrency -= 15e4
    } else {
        tmp_tax = MortgageCurrency * .015;
        total_tax += tmp_tax;
        MortgageCurrency = 0
    }
    if (MortgageCurrency > 0) {
        tmp_tax = MortgageCurrency * .02;
        total_tax += tmp_tax;
        MortgageCurrency = 0
    }
    if (document.mortCalculatorFrm.firsttimehomebuyer.checked == true) {
        if (total_tax > 2e3) total_tax = total_tax - 2e3;
        else total_tax = 0
    }
    total_tax = Math.round(total_tax);
    if (document.mortCalculatorFrm.torontopurchase.checked == true) {
        if (leftt > 55e3) {
            toronto_tax = 275;
            leftt = leftt - 55e3
        } else {
            toronto_tax = leftt * .005;
            leftt = 0
        }
        if (leftt > 345e3) {
            toronto_tax = toronto_tax + 3450;
            leftt = leftt - 345e3
        } else {
            toronto_tax = toronto_tax + leftt * .01;
            leftt = 0
        }
        if (document.mortCalculatorFrm.firsttimehomebuyer.checked == true) toronto_tax = 0;
        if (leftt > 0) {
            toronto_tax = toronto_tax + leftt * .02
        }
        toronto_tax = Math.round(toronto_tax);
        total_tax = total_tax + toronto_tax
    }
    document.mortCalculatorFrm.MortgageCalculatortax.value = total_tax
}

function MM_findObj(e, t) {
    var n, r, i;
    if (!t) t = document;
    if ((n = e.indexOf("?")) > 0 && parent.frames.length) {
        t = parent.frames[e.substring(n + 1)].document;
        e = e.substring(0, n)
    }
    if (!(i = t[e]) && t.all) i = t.all[e];
    for (r = 0; !i && r < t.forms.length; r++) i = t.forms[r][e];
    for (r = 0; !i && t.layers && r < t.layers.length; r++) i = MM_findObj(e, t.layers[r].document);
    if (!i && document.getElementById) i = document.getElementById(e);
    return i
}

//set Amoritization 

function mrtCalculator(type,ajax,listing_id){
	console.log(type);
	//Call The Mor Fun
	if(ajax==1){
		$.ajax({
			url: "ajax_mrtCalculator?mrtCalculator=1&listing_id="+listing_id,
			type: 'POST',
			cache: true,
			success: function(data) {
				console.log(data);
				MortgageCalculator();
				document.getElementById("monthlymaintenancefee1").value = data;
				document.getElementById("monthlymaintenancefee2").value = data;
				document.getElementById("monthlymaintenancefee3").value = data;
				if(data != ''){
					$('.forCondoOnly').show();
				}else {
					$('.forCondoOnly').hide();
				}
				$.fancybox({
					href: '#mrtCalculator',
					width: 620,
					height:'auto',
					fitToView : false,
					autoSize : false,
					afterLoad: function(){
						setTimeout(function(){
							$('#mortCalprice').focus();
						},50);
					},
				});
			},
			error: function(e) {
				console.log("Server failure! Is the server turned off?");
			}
		});
	}else{
		MortgageCalculator();
		if(type != ''){
			$('.forCondoOnly').show();
		}else {
			$('.forCondoOnly').hide();
		}
		$.fancybox({
			href: '#mrtCalculator',
			width: 620,
			height:'auto',
			fitToView : false,
			autoSize : false,
			afterLoad: function(){
				setTimeout(function(){
					$('#mortCalprice').focus();
				},50);
			},
		});
	}
	return false;
}

function _o(o) {
	$('#mortCalamortization option[value="30"]').remove();
	if(o >= 20){
		$('#mortCalamortization').append('<option value="30">30 years</option>');
	}
}

$(document).ready(function(e) {
    $('.cListing').parent('div').addClass('w4rlistings_widget');
});
var streetaddressFlag = '';
var selectonmap = '';
var currentMapid='';
var selectedFrmId='';
var popupMap, outlinesLayer,projOverlay;
// remap jQuery to $
(function($){
	var currentTypeSelect = $('#defaultSearchBy1').val();
	var popupMap, outlinesLayer,projOverlay;
	$('.tabs ul li a').click(function(){
		$(this).parents('.tabs').find('ul li').removeClass('active');
		$(this).parent().addClass('active'); 
		var currentTab = $(this).attr('href'); 
		$(this).parents('.tabs').find('.tab-content').hide();
		$(currentTab).show();
		return false;
	});
	/*$(document).scroll(function() {
	 $('.ui-multiselect-close').click();
	});*/
	//
	var x = '';
	var dropdownHeight = '';
	// below function need to remove after removing multiselect widget js files 
	/*function elSettings(x){
		elType		=	$(x).attr('data-type');
		elChecked 	= 	$(x).multiselect("widget").find("input:checked");
		elLength 	= 	$(x).multiselect("widget").find("input").length;					
		elTotal 	= 	$(x).multiselect("widget").find("input:checked").length;		
		html = '';
		$(elChecked).each(function(){var str = $( this ).val();html += str+', ';});
		if(elLength == elTotal){
			html = 'All';
		}
		else{
			if(elType == 'Type'){
				html = html.replace(/,\s*$/, "");
			}
			if(elType == 'Style'){
				html = elTotal+' Selected';
			}
		}
		$(x).next().children('span').html(html);
	}*/
	// above function need to remove after removing multiselect widget js files 
	$(function(){
		// below function need to remove after removing multiselect widget js files 
		/*var elType = '';	
	   $(".mts.a").multiselect({
			minWidth: 200,
			height:'auto',
			header: false,		   
			selectedText: function(numChecked, numTotal, checkedItems){},		   
			create: function(event, ui) {
				//x = $(this);
				elSettings($(this));
			},
			click: function(event, ui){
				//x = $(this);
				if( $($(this)).multiselect("widget").find("input:checked").length == 0 ){
						return false;
				}
				elSettings($(this));
			}
	   });
		$(".mts.b").multiselect({
			width: 200,
			height: 196,
			header: true,
			noneSelectedText: 'All',	   
			selectedText: function(numChecked, numTotal, checkedItems){
				if(numChecked == numTotal){
					return 'All';
				}
				return numChecked+' Selected';
			},		   
			create: function(event, ui) {
				//x = $(this);
				//elSettings($(this));
			},
			click: function(event, ui){
			},
			checkAll: function(){
				$(this).next().children('span').html('All');
			},
			uncheckAll: function(){
				$(this).next().children('span').html('All');
			}
		});*/
		// above function need to remove after removing multiselect widget js files 
		///////
	   $('.PriceFromFS').change( function() {
		   var _this = $(this);
			z = $(this).children("option:selected").val();
			t = $(this).parents('.priceSelctor').find('.PriceToFS option:selected').val();
			if(parseInt(z) > parseInt(t)){
				t = '';
			}
			if(z != ''){
				$(this).parents('.priceSelctor').find('.PriceToFS option:contains("Any")').removeAttr('disabled').insertAfter($(this).parents('.priceSelctor').find('.PriceToFS option:last-child'));
				var priceToOption = $(this).parents('.priceSelctor').find('.PriceToFS').children('option[value='+z+']');
				$(this).parents('.priceSelctor').find('.PriceToFS option').removeAttr('disabled').removeAttr('selected');
				//$(priceToOption).next().attr('selected','selected');
				$(priceToOption).attr('disabled','disable').prevAll().attr('disabled','disable');
				//alert(t)
				$(this).parents('.priceSelctor').find('.PriceToFS').val(t).chosen('destroy');
				setTimeout(function(){
					$(_this).parents('.priceSelctor').find('.PriceToFS').chosen({disable_search_threshold:999});
				},50);
			}else {
				$(this).parents('.priceSelctor').find('.PriceToFS option:contains("Any")').removeAttr('disabled').insertAfter($(this).parents('.priceSelctor').find('.PriceToFS option:first-child'));
				$(this).parents('.priceSelctor').find('.PriceToFS option').removeAttr('disabled');
				$(this).parents('.priceSelctor').find('.PriceToFS').trigger("chosen:updated");
			}
		});
	   
	   // w4rsearch 
	   function showHidemapLink() {
                $('#'+currentTypeSelect).addClass('ViewOnMap');
                if($('#'+currentTypeSelect).hasClass('ViewOnMap')){
                    //$('#w4rsearch_ajax').next('.w4rsearch').append('<span class="viewon-map"><a href="">View on map</a></span>');
                }
	   }
	   showHidemapLink();
           
	   for(cnt = 1; cnt<=$('#cntSearchWidgets').val();cnt++) {
		   //------------------------------------------
		  	$('select._citysearch'+cnt).w4rsearch({
			   datas:$("#w4r_setUrlPath").val()+"ajaxcitycommunity?cl=1&searchflag=City",
			   placeholder:"Type city name here..."
			}); 
			
			$('select._communitysearch'+cnt).w4rsearch({
			   datas:$("#w4r_setUrlPath").val()+"ajaxcitycommunity?cl=1&searchflag=Community",
			   placeholder:"Type community here..."
			});
			$('select._addresssearch'+cnt).w4rsearch({
				placeholder:"Type address here...",
				onAddToken: function(value, text, e){
					setTimeout(function(){ //fasy & sham please review this code -- 01-04-2016
						$('#w4raddsearch_ajax_w4r'+cnt).val('');
						$('#w4raddsearch_ajax_w4r'+cnt).focus();
					}, 10);
				}
			}); 
			$('select._mlssearch'+cnt).w4rsearch({
				datas:$("#w4r_setUrlPath").val()+"ajaxcitycommunity?cl=1&searchflag=MLS",
			   placeholder:"Type MLS &reg; # here..."
			});
		   //----------New Listing API Dropdown Options-----------------
                   if($('#w4rauto_users_config_w4rlistings').val()=='1'){
                        for(cnta = 1; cnta<=$('#searchinputbox'+cnt).val();cnta++) {
                            //console.log($('#searchinputboxelement'+cnt+'_'+cnta).val());
                            var elementval = $('#searchinputboxelement'+cnt+'_'+cnta).val();
                            displayname = $('#searchinputboxelement'+cnt+'_'+cnta).attr('data-name')
                            var $name = ' name';
                            var lastchar = '';
                            try{
                            parts = displayname.split(' ');
                            lastchar = parts.pop();
                            }catch(ec){}
                            if(displayname == 'MLS Number' || lastchar=='Code' || lastchar=='Number' || lastchar=='number' || lastchar=='code'){
                                $name = '';
                            }
                            $('select._citysearch'+cnt+'_'+cnta).w4rsearch({
                                datas:$("#w4r_setUrlPath").val()+"ajaxcitycommunity?cl=1&w4rauto_users_config_w4rlistings=1&searchflag="+$('#searchinputboxelement'+cnt+'_'+cnta).val()+"&grouped_by="+$('#searchinputboxelement'+cnt+'_'+cnta).attr('data-groupedby')+"&datavow="+$('#searchinputboxelement'+cnt+'_'+cnta).attr('data-vow'),
                                placeholder:"Type "+displayname+$name+" here..."
                            });
                        }
                   }
                   //-----------------------------------------------------------
           
	   }
	   
		
		//NEW GOOGLE MAP CODE - SELECT ON MAP
		//var popupMap, outlinesLayer, projOverlay = new google.maps.OverlayView();
		function addAreaPolygon(placemark) {
		  var polygon = outlinesLayer.createPolygon(placemark);
		  google.maps.event.addListener(polygon, 'click', function(event) {
		  	highlighArea(polygon, !polygon.selected);
		  	setArea(polygon, polygon.selected);
		  });
		  google.maps.event.addListener(polygon, 'mouseover', function(event) {
		  	showTooltip(polygon, true, event);
		  });
		  google.maps.event.addListener(polygon, 'mouseout', function(event) {
		  	showTooltip(polygon, false, event);
		  });
		  return polygon;
		};
		var _navcolor = '';
		if($('.sAction .btn').css('backgroundColor') == 'rgb(255, 255, 255)' || $('.sAction .btn').css('backgroundColor') == '#ffffff'){
			_navcolor = $('.sAction .btn').css('color');
		}else {
			_navcolor = $('.sAction .btn').css('backgroundColor');
		}
		//console.log(_navcolor);
		function showTooltip(polygon, state, event){
			//console.log('tooptip_'+polygon.label+'__'+state);
			var $tooltip = $('.mapTooltip');
			var $mapArea = $('#mapArea');
			if(!$tooltip.length){
				$mapArea.append('<div class="mapTooltip"></div>');
				$tooltip = $('.mapTooltip');
			}
			var projection = projOverlay.getProjection();
			var xy = projection.fromLatLngToContainerPixel(event.latLng);
			if(state){
				$tooltip.css({ 'top': xy.y + 10 + 'px', 'left': xy.x + 10 + 'px' }).html(polygon.label).show();
				if(!polygon.selected){
					polygon.setOptions({
						fillColor: _navcolor,
						fillOpacity: 0.4
					});
				}
			} else {
				$tooltip.hide();
				if(!polygon.selected){
					polygon.setOptions({
						fillColor: _navcolor,
						fillOpacity: 0.1
					});
				}
			}
		}

		function highlighArea(polygon, state){
			if(state){
				polygon.setOptions({
					fillColor: _navcolor,
					fillOpacity: 0.7
				});
			} else {
				polygon.setOptions({
					fillColor: _navcolor,
					fillOpacity: 0.1
				});
			}
			polygon.selected = state;
		};

		function setArea(polygon, state){
			var $mapPopup = $('#View-onMap-Popup');
			if(polygon.selected){
				$mapPopup.find('ul.TokensContainer').append('<li class="Token" data-value="'+polygon.label+'"><a class="Close">&times;</a><span>'+polygon.label+'</span></li>');
			} else {
				$mapPopup.find('ul.TokensContainer li.Token[data-value="'+polygon.label+'"]').remove();
			}
			var selectedAreas = $.map($mapPopup.find('ul.TokensContainer li.Token'), function(val){
				return { label: $(val).find('span').text(), val: $(val).attr("data-value") };
			});
			rebuildPopupList(selectedAreas);
		};

		function setAreasVisibile(doc, state){
			var selectedAreas = getSelectedAreas();
			var ids = $.map(selectedAreas, function(val, i){
				return val.val;
			});
			$(doc.placemarks).each(function(idx){
			  this.polygon.setVisible(state);
			  this.polygon.id = this.name;
			  this.polygon.label = this.name;
			  if($.inArray(this.name, ids) > -1){
			  	highlighArea(this.polygon, 1);
			  } else {
			  	highlighArea(this.polygon, 0);
			  }
			});
		};

		function useTheData(doc){
			//console.log(doc);
		};

		function getArea(id){
			//console.log(id);
			var doc = $("#selectType1").val()=="Community"?outlinesLayer.docs[1]:outlinesLayer.docs[0];
			var result;
			$(doc.placemarks).each(function(idx){
				if(this.name == id){
					result = this;
					return;
				}
			});
			return result;
		};
		/*
		function setArea(polygon){
			if(polygon.selected){
				$('select#w4rsearch_ajax').w4rsearch().tokenAdd(polygon.id, polygon.label);
			} else {
				$('select#w4rsearch_ajax').w4rsearch().tokenRemove(polygon.id);
			}
		};
		*/

		function removeArea(area){			
			var $area = $(area.currentTarget).parent();
			//console.log($area.attr("data-value"));
			var area = getArea($area.attr("data-value"));
			highlighArea(area.polygon, 0);
			$area.remove();		
			
			//ReBuild The Select Items Counting....
			var $mapPopup = $('#View-onMap-Popup');
			var selectedAreas = $.map($mapPopup.find('ul.TokensContainer li.Token'), function(val){
				return { label: $(val).find('span').text(), val: $(val).attr("data-value") };
			});
			var selectedLabel = selectedAreas.length?('('+selectedAreas.length+')'):'';
			$mapPopup.find('h3 span').text(selectedLabel);
				
		};

		function rebuildPopupList(selectedAreas){
			var $mapPopup = $('#View-onMap-Popup');
			var selectedLabel = selectedAreas.length?('('+selectedAreas.length+')'):'';
			
			$mapPopup.find('h3 span').text(selectedLabel);

			var itemList = [];
			$(selectedAreas).each(function(){
				itemList.push('<li class="Token" data-value="'+this.val+'"><a class="Close">&times;</a><span>'+this.label+'</span></li>');
			});
			$mapPopup.find('ul.TokensContainer').html(itemList.join(''));
		};
		
		//Common Fun
		function callviewmapclick(newelement,cnt){
			if(newelement == 1){
				projOverlay = new google.maps.OverlayView();
			}
			$('html').addClass('blocked');
			$('body').append('<div class="fooOverlay"></div>').fadeIn();
			$('#View-onMap-Popup').addClass('loading').fadeIn(function(){
				var $this = $(this);
				if(!popupMap){
					popupMap = new google.maps.Map(document.getElementById('mapArea'), {
					  center: {lat: 44.014596, lng: -79.380615},
					  zoom: 8
					});
					outlinesLayer = new geoXML3.parser({
					  map: popupMap,
					  zoom: false,
					  //afterParse: useTheData,
					  suppressInfoWindows: true,
					  createPolygon: addAreaPolygon
					});
					projOverlay.draw = function() {};
					projOverlay.setMap(popupMap);
					outlinesLayer.parse(['assets/onmap/cities.kml', 'assets/onmap/communities.kml']);
				}
				google.maps.event.trigger(popupMap, 'resize');
				var ca = setInterval(function(){
				  if(outlinesLayer && outlinesLayer.docs.length){
				    clearInterval(ca);
					//console.log(cnt+'shammm');
				    if($('#selectType'+cnt).val()=="Community"){
				    	setAreasVisibile(outlinesLayer.docs[0], false);
				    	setAreasVisibile(outlinesLayer.docs[1], true);
				    } else {
				    	setAreasVisibile(outlinesLayer.docs[1], false);
				    	setAreasVisibile(outlinesLayer.docs[0], true);
				    }
				    $this.removeClass('loading');
				  }
				}, 100);

				var $mapPopup = $('#View-onMap-Popup');
				$mapPopup.find('ul.TokensContainer').delegate("a.Close", "click", removeArea);

				var selectedAreas = getSelectedAreas();
				rebuildPopupList(selectedAreas);
			}).append('<a class="fooPupClose">x</a>');
			$('.fooPupClose,.fooOverlay').on('click', function(e) {
				fooPupClose();
			});
			mapheightEqual();
			dellSelectedCity();
			$(window).on('resize', function(){
			 mapheightEqual();
			});
			$('.pageLoader').hide();
			return false;
		
		}
		
		
			$('._viewOnMap').on('click', function(e) {
				currentTypeSelect  	= $(this).attr('data-id');
				cnt = $(this).attr('data-map');
				//These Below Two Variables for POPUP Change Tabs
				selectedFrmId = $(this).parents('form');
				currentMapid = cnt;
				var selectType 		= $('#selectType'+$(this).attr('data-map')).val();
				if(selectType == 'City'){
					selectType = 'Cities';
					$('#_communitySelection').show();
					$('#_citySelection').hide();
				}else {
					selectType = 'Communities';
					$('#_communitySelection').hide();
					$('#_citySelection').show();
				}
				$('.mapSidebar').find('h3').html('Selected '+selectType+' <span></span>');
				$('.pageLoader').fadeIn(); //show loading element
				if(selectonmap==""){
					$.getScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyDgEVS1bmgtaauzCtP5ixJl5taVmeuai5I&libraries=places", function( datas, textStatus, jqxhr ) {
						selectonmap = 1;
						newelement = 1;
						callviewmapclick(newelement,cnt);
					});
				}else{
					newelement = '';
					callviewmapclick(newelement,cnt)
				}
			});
			
			//_communSelect
			
			$('._searchType .btn').on('click', function(e) {
				var elem  	= $(this).attr('data-type');
				
				
				//--------------		
				$('.pageLoader').fadeIn(); //show loading element		
				cnt = currentMapid;
				currentTypeSelect  	= cnt;
				_form = selectedFrmId;
				$(_form).find('.w4rsearch_ajax').attr('data-type', '');
				//-----------------------------
				console.log('__sss');
				if(elem == 'communitySelection'){
					$('#selectType'+currentMapid).val('Community').trigger("chosen:updated");
					//For Load Communities Map
					$('#filterflag'+cnt).val('Community');streetaddress('Community',cnt);
					$(_form).find( "._searchflag" ).val('Community');
					$(_form).find( "._citysearch,._addresssearch,._mlssearch" ).hide();
					$(_form).find( "._communitysearch,.viewon-map" ).show();
					
					//Remove the Option if have
					$("#w4rsearch_ajax"+cnt+" option").remove();
					$("#w4rmlssearch_ajax"+cnt+" option").remove();
					$("#w4raddsearch_ajax"+cnt+" option").remove();
					
					
					$(_form).find('.TokensContainer .Placeholder').text('Type community here...').css('display', 'list-item');
					$(_form).find('.TokensContainer .Token').remove();
					$(_form).find('.TokenSearch input').val('');
					showHidemapLink();
					currentTypeSelect = 'w4rcommunitysearch_ajax'+cnt;
					selectType = 'Communities';
					//---------------------------------------
					
					$('#_citySelection').show();
					$('#_communitySelection').hide();
					$('.mapSidebar').find('h3').html('Selected Communities <span></span>');
					
				}else {
					$('#selectType'+currentMapid).val('City').trigger("chosen:updated");
					//Load CITY Map
					//For Load Map
					$('#filterflag'+cnt).val('City');streetaddress('City',cnt);
					$(_form).find( "._searchflag" ).val('City');
					$(_form).find( "._citysearch,.viewon-map" ).show();
					$(_form).find( "._communitysearch,._addresssearch,._mlssearch" ).hide();
					
					//Remove the Option if have
					$("#w4rcommunitysearch_ajax"+cnt+" option").remove();
					$("#w4rmlssearch_ajax"+cnt+" option").remove();
					$("#w4raddsearch_ajax"+cnt+" option").remove();
					
					
					$(_form).find('.TokensContainer .Placeholder').text('Type city name here...').css('display', 'list-item');
					$(_form).find('.TokensContainer .Token').remove();
					$(_form).find('.TokenSearch input').val('');
					currentTypeSelect = 'w4rsearch_ajax'+cnt;
					showHidemapLink();
					selectType = 'Cities';					
					$('#_citySelection').hide();
					$('#_communitySelection').show();
					$('.mapSidebar').find('h3').html('Selected Cities <span></span>');
				}
				
				//Load Map As per Click
				newelement = '';
				callviewmapclick(newelement,cnt);
			});
		 

		$('.mapS-Actio button').on('click', function(e) {
			/*
			var selectedCity = $('.selectedC ul').html();
			var searchContainer = $('#w4rsearch_ajax').next().children('ul').children('.TokenSearch');
			$(selectedCity).insertBefore(searchContainer);
			*/
		  $('select#'+currentTypeSelect).w4rsearch().clear(); 

			var $mapPopup = $('#View-onMap-Popup');
			$mapPopup.find('ul.TokensContainer li.Token').each(function(){
				var $this = $(this);
				$('select#'+currentTypeSelect).w4rsearch().tokenAdd($this.attr('data-value'), $this.find('span').text());
			});
			fooPupClose();
			//dellSelectedCity();
		});

		function getSelectedAreas(){
			var $w4rsearch_ajax = $("#"+currentTypeSelect);
			return $.map($w4rsearch_ajax.find('option'), function(val, i){
				return { label: $(val).text(), val: $(val).val() };
			});
		}
		function mapheightEqual(){
			var elem = $('.mapArea');
			var elem2 = $('.mapSidebar');
			var elem3 = $('.selectedC');
			elem.height(elem.parents('#View-onMap-Popup').innerHeight()-40);
			elem2.height(elem.parents('#View-onMap-Popup').innerHeight()-40);
			elem3.height(elem.parents('#View-onMap-Popup').innerHeight()-180);
		}
		function dellSelectedCity() {
			$('.TokensContainer li a.Close').on('click', function(e) {
				$(this).parent('li').remove();
			});
		}
		
		//fooPupClose
		function fooPupClose() { 
		
			$('html').removeClass('blocked');
			$('body').find('.fooOverlay').fadeOut();
			$('#View-onMap-Popup').fadeOut();
			setTimeout(function(){
			  $('body').find('.fooOverlay').remove();
			}, 500);
			return false;
		}

			/*var addressAutocomplete = new google.maps.places.Autocomplete(
			  (document.getElementById('w4rsearch_ajax_address')),
			  {
				types: ['geocode'],
				componentRestrictions: { country: "CA" }
			  }
			);

		  addressAutocomplete.addListener('place_changed', function(){
			var place = addressAutocomplete.getPlace();
			//console.log(place);
		  });*/
		
		//----------------END ALEX GOOGLE MAP CODE-------
		//OLD CODE--------------------------------------
		/*$('#viewOnMap').on('click', function(e) {
			$('html').addClass('blocked');
			$('body').append('<div class="fooOverlay"></div>').fadeIn();
			$('#View-onMap-Popup').fadeIn().append('<a class="fooPupClose">x</a>');
			$('.fooPupClose').on('click', function(e) {
				fooPupClose();
			});
			mapheightEqual();
			dellSelectedCity();
			$(window).on('resize', function(){
			 mapheightEqual();
			});
			return false;
		});
		$('.mapS-Actio button').on('click', function(e) {
			var selectedCity = $('.selectedC ul').html();
			var searchContainer = $('#w4rsearch_ajax').next().children('ul').children('.TokenSearch');
			$(selectedCity).insertBefore(searchContainer);
			fooPupClose();
			dellSelectedCity();
		});
		function mapheightEqual(){
			var elem = $('.mapArea');
			var elem2 = $('.mapSidebar');
			elem.height(elem.parents('#View-onMap-Popup').innerHeight()-40);
			elem2.height(elem.parents('#View-onMap-Popup').innerHeight()-40);
		}
		function dellSelectedCity() {
			$('.TokensContainer li a.Close').on('click', function(e) {
				$(this).parent('li').remove();
			});
		}
		
		
		//fooPupClose
		function fooPupClose() { 
		
			$('html').removeClass('blocked');
			$('body').find('.fooOverlay').fadeOut();
			$('#View-onMap-Popup').fadeOut();
			return false;
		}*/
		
		
		
		// selectType change function 
		//$( "._selectType" ).change(function() {
		$( "._selectType" ).on('change', function(e) {
			cnt = $(this).attr('data-id');
			var elem = $(this).val();
			var _form = $(this).parents('form');
                        var datagroupedby = $('option:selected', this).attr('data-groupedby');
                        $('#groupedby_type'+cnt).val(datagroupedby);
                        
			$(this).parents('form').find('.w4rsearch_ajax').attr('data-type', '');
			if(elem == 'City' && $('#w4rauto_users_config_w4rlistings').val()!='1'){
				$(_form).find( "._searchflag" ).val('City');
				$(_form).find( "._citysearch,.viewon-map" ).show();
				$(_form).find( "._communitysearch,._addresssearch,._mlssearch" ).hide();
				
				//Remove the Option if have
				$("#w4rcommunitysearch_ajax"+cnt+" option").remove();
				$("#w4rmlssearch_ajax"+cnt+" option").remove();
				$("#w4raddsearch_ajax"+cnt+" option").remove();
				
				
				$(_form).find('.TokensContainer .Placeholder').text('Type city name here...').css('display', 'list-item');
				$(_form).find('.TokensContainer .Token').remove();
				$(_form).find('.TokenSearch input').val('');
				currentTypeSelect = 'w4rsearch_ajax'+cnt;
				showHidemapLink();				
			}else if(elem == 'Community'  && $('#w4rauto_users_config_w4rlistings').val()!='1'){
				
				$(_form).find( "._searchflag" ).val('Community');
				$(_form).find( "._citysearch,._addresssearch,._mlssearch" ).hide();
				$(_form).find( "._communitysearch,.viewon-map" ).show();
				
				//Remove the Option if have
				$("#w4rsearch_ajax"+cnt+" option").remove();
				$("#w4rmlssearch_ajax"+cnt+" option").remove();
				$("#w4raddsearch_ajax"+cnt+" option").remove();
				
				
				$(_form).find('.TokensContainer .Placeholder').text('Type community here...').css('display', 'list-item');
				$(_form).find('.TokensContainer .Token').remove();
				$(_form).find('.TokenSearch input').val('');
				showHidemapLink();
				currentTypeSelect = 'w4rcommunitysearch_ajax'+cnt;	
			}else if(elem == 'Address'){
				
				$(_form).find( "._searchflag" ).val('Address');
				$(_form).find( "._addresssearch" ).show();
				$(_form).find( "._citysearch,._communitysearch,._mlssearch,.viewon-map" ).hide();	
				
				//Remove the Option if have
				$("#w4rsearch_ajax"+cnt+" option").remove();
				$("#w4rmlssearch_ajax"+cnt+" option").remove();
				$("#w4rcommunitysearch_ajax"+cnt+" option").remove();
							
				$(_form).find('.TokensContainer .Placeholder').text('Type address here...').css('display', 'list-item');
				$(_form).find('.TokensContainer .Token').remove();
				//$('#w4rsearch_ajax').removeClass('ViewOnMap');
				$(_form).find('.TokenSearch input').val('');
				currentTypeSelect = 'w4raddsearch_ajax'+cnt;	
                                
                                //----------------------------------------------
                                for(cnt = 1; cnt<=$('#cntSearchWidgets').val();cnt++) {
                                    for(cnta = 1; cnta<=$('#searchinputbox'+cnt).val();cnta++) {
                                        //Remove the Option if have
                                        $("#w4rsearch_ajax"+cnt+'_'+cnta+" option").remove();
                                        $("#w4rsearch_ajax"+cnt+'_'+cnta).html('');
                                    }
                                }
                            //----------------------------------------------------
				
			}else if(elem == 'MLS'  && $('#w4rauto_users_config_w4rlistings').val()!='1'){
				$(_form).find( "._searchflag" ).val('Address');
				$(_form).find( "._mlssearch" ).show();
				
				//Remove the Option if have
				$("#w4rsearch_ajax"+cnt+" option").remove();
				$("#w4raddsearch_ajax"+cnt+" option").remove();
				$("#w4rcommunitysearch_ajax"+cnt+" option").remove();
				
				$(_form).find( "._addresssearch,._citysearch,._communitysearch,.viewon-map" ).hide();				
				$(_form).find('.TokensContainer .Placeholder').text('Type MLS &reg; # here...').css('display', 'list-item');
				$(_form).find('.TokensContainer .Token').remove();
				$(_form).find('.w4rsearch_ajax').removeClass('ViewOnMap');
				$(_form).find('.TokenSearch input').val('');
			}else{
                           // console.log(elem+'___'+$('#cntSearchWidgets').val());
                            $(_form).find( "._searchflag" ).val(elem);

                            //Remove the Option if have
                            $("#w4rcommunitysearch_ajax"+cnt+" option").remove();
                            $("#w4rmlssearch_ajax"+cnt+" option").remove();
                            $("#w4raddsearch_ajax"+cnt+" option").remove();
                            
                            for(cnt = 1; cnt<=$('#cntSearchWidgets').val();cnt++) {
                                for(cnta = 1; cnta<=$('#searchinputbox'+cnt).val();cnta++) {
                                    var elementval = $('#searchinputboxelement'+cnt+'_'+cnta).val();
                                    console.log($('#searchinputboxelement'+cnt+'_'+cnta).val() + '____'+elementval+'____'+elem);
                                    if(elementval==elem){
                                       $(_form).find( "#citysearch"+cnt+'_'+cnta ).show(); 
                                    }else{
                                        $(_form).find( "._communitysearch,._addresssearch,._mlssearch" ).hide();
                                        $(_form).find( "#citysearch"+cnt+'_'+cnta ).hide();
                                        
                                        //Remove the Option if have
                                       // console.log("#w4rsearch_ajax"+cnt+'_'+cnta);
                                        $("#w4rsearch_ajax"+cnt+'_'+cnta+" option").remove();
                                        $("#w4rsearch_ajax"+cnt+'_'+cnta).html('');
                                        $(_form).find('.TokensContainer .Token').remove();
                                        $(_form).find('.TokenSearch input').val('');

                                    }
                                }
                            }

                            $(_form).find('.TokensContainer .Placeholder').text('Type '+elem+' name here...').css('display', 'list-item');
                            $(_form).find('.TokensContainer .Token').remove();
                            $(_form).find('.TokenSearch input').val('');
                            currentTypeSelect = 'w4rsearch_ajax'+cnt;
                            showHidemapLink();				
                        }
						var ths = $(this);
						setTimeout(function(){
							mobile_selectTypeFun($(ths).parents('.Scity'));
						},50);
		});
		// listing tab click 
		var forRentOption = '<option value=""></option><option value="Any">Any</option><option value="100" >'+$('#currency').val()+'100</option> <option value="200" >'+$('#currency').val()+'200</option> <option value="300" >'+$('#currency').val()+'300</option> <option value="400" >'+$('#currency').val()+'400</option> <option value="500" >'+$('#currency').val()+'500</option> <option value="600" >'+$('#currency').val()+'600</option> <option value="700" >'+$('#currency').val()+'700</option> <option value="800" >'+$('#currency').val()+'800</option> <option value="900" >'+$('#currency').val()+'900</option> <option value="1000" >'+$('#currency').val()+'1,000</option> <option value="1100" >'+$('#currency').val()+'1,100</option> <option value="1200" >'+$('#currency').val()+'1,200</option> <option value="1300" >'+$('#currency').val()+'1,300</option> <option value="1400" >'+$('#currency').val()+'1,400</option> <option value="1500" >'+$('#currency').val()+'1,500</option> <option value="1600" >'+$('#currency').val()+'1,600</option> <option value="1700" >'+$('#currency').val()+'1,700</option> <option value="1800" >'+$('#currency').val()+'1,800</option> <option value="1900" >'+$('#currency').val()+'1,900</option> <option value="2000" >'+$('#currency').val()+'2,000</option> <option value="2100" >'+$('#currency').val()+'2,100</option> <option value="2200" >'+$('#currency').val()+'2,200</option> <option value="2300" >'+$('#currency').val()+'2,300</option> <option value="2400" >'+$('#currency').val()+'2,400</option> <option value="2500" >'+$('#currency').val()+'2,500</option> <option value="2600" >'+$('#currency').val()+'2,600</option> <option value="2700" >'+$('#currency').val()+'2,700</option> <option value="2800" >'+$('#currency').val()+'2,800</option> <option value="2900" >'+$('#currency').val()+'2,900</option> <option value="3000" >'+$('#currency').val()+'3,000</option> <option value="3100" >'+$('#currency').val()+'3,100</option> <option value="3200" >'+$('#currency').val()+'3,200</option> <option value="3300" >'+$('#currency').val()+'3,300</option> <option value="3400" >'+$('#currency').val()+'3,400</option> <option value="3500" >'+$('#currency').val()+'3,500</option> <option value="3600" >'+$('#currency').val()+'3,600</option> <option value="3700" >'+$('#currency').val()+'3,700</option> <option value="3800" >'+$('#currency').val()+'3,800</option> <option value="3900" >'+$('#currency').val()+'3,900</option> <option value="4000" >'+$('#currency').val()+'4,000</option> <option value="4100" >'+$('#currency').val()+'4,100</option> <option value="4200" >'+$('#currency').val()+'4,200</option> <option value="4300" >'+$('#currency').val()+'4,300</option> <option value="4400" >'+$('#currency').val()+'4,400</option> <option value="4500" >'+$('#currency').val()+'4,500</option> <option value="4600" >'+$('#currency').val()+'4,600</option> <option value="4700" >'+$('#currency').val()+'4,700</option> <option value="4800" >'+$('#currency').val()+'4,800</option> <option value="4900" >'+$('#currency').val()+'4,900</option><option value="5000" >'+$('#currency').val()+'5,000</option><option value="5100" >'+$('#currency').val()+'5,100</option><option value="5200" >'+$('#currency').val()+'5,200</option><option value="5300" >'+$('#currency').val()+'5,300</option><option value="5400" >'+$('#currency').val()+'5,400</option><option value="5500" >'+$('#currency').val()+'5,500</option><option value="5600" >'+$('#currency').val()+'5,600</option><option value="5700" >'+$('#currency').val()+'5,700</option><option value="5800" >'+$('#currency').val()+'5,800</option><option value="5900" >'+$('#currency').val()+'5,900</option><option value="6000" >'+$('#currency').val()+'6,000</option><option value="6100" >'+$('#currency').val()+'6,100</option><option value="6200" >'+$('#currency').val()+'6,200</option><option value="6300" >'+$('#currency').val()+'6,300</option><option value="6400" >'+$('#currency').val()+'6,400</option><option value="6500" >'+$('#currency').val()+'6,500</option><option value="6600" >'+$('#currency').val()+'6,600</option><option value="6700" >'+$('#currency').val()+'6,700</option><option value="6800" >'+$('#currency').val()+'6,800</option><option value="6900" >'+$('#currency').val()+'6,900</option><option value="7000" >'+$('#currency').val()+'7,000</option><option value="7100" >'+$('#currency').val()+'7,100</option><option value="7200" >'+$('#currency').val()+'7,200</option><option value="7300" >'+$('#currency').val()+'7,300</option><option value="7400" >'+$('#currency').val()+'7,400</option><option value="7500" >'+$('#currency').val()+'7,500</option><option value="7600" >'+$('#currency').val()+'7,600</option><option value="7700" >'+$('#currency').val()+'7,700</option><option value="7800" >'+$('#currency').val()+'7,800</option><option value="7900" >'+$('#currency').val()+'7,900</option><option value="8000" >'+$('#currency').val()+'8,000</option><option value="8100" >'+$('#currency').val()+'8,100</option><option value="8200" >'+$('#currency').val()+'8,200</option><option value="8300" >'+$('#currency').val()+'8,300</option><option value="8400" >'+$('#currency').val()+'8,400</option><option value="8500" >'+$('#currency').val()+'8,500</option><option value="8600" >'+$('#currency').val()+'8,600</option><option value="8700" >'+$('#currency').val()+'8,700</option><option value="8800" >'+$('#currency').val()+'8,800</option><option value="8900" >'+$('#currency').val()+'8,900</option><option value="9000" >'+$('#currency').val()+'9,000</option><option value="9100" >'+$('#currency').val()+'9,100</option><option value="9200" >'+$('#currency').val()+'9,200</option><option value="9300" >'+$('#currency').val()+'9,300</option><option value="9400" >'+$('#currency').val()+'9,400</option><option value="9500" >'+$('#currency').val()+'9,500</option><option value="9600" >'+$('#currency').val()+'9,600</option><option value="9700" >'+$('#currency').val()+'9,700</option><option value="9800" >'+$('#currency').val()+'9,800</option><option value="9900" >'+$('#currency').val()+'9,900</option><option value="10000" >'+$('#currency').val()+'10,000</option>';
		
		var forBuyOption = '<option value=""></option><option value="Any">Any</option><option value="50000" >'+$('#currency').val()+'50,000</option> <option value="75000" >'+$('#currency').val()+'75,000</option> <option value="100000" >'+$('#currency').val()+'100,000</option> <option value="125000" >'+$('#currency').val()+'125,000</option> <option value="150000" >'+$('#currency').val()+'150,000</option> <option value="175000" >'+$('#currency').val()+'175,000</option> <option value="200000" >'+$('#currency').val()+'200,000</option> <option value="225000" >'+$('#currency').val()+'225,000</option> <option value="250000" >'+$('#currency').val()+'250,000</option> <option value="275000" >'+$('#currency').val()+'275,000</option> <option value="300000" >'+$('#currency').val()+'300,000</option> <option value="325000" >'+$('#currency').val()+'325,000</option> <option value="350000" >'+$('#currency').val()+'350,000</option> <option value="375000" >'+$('#currency').val()+'375,000</option> <option value="400000" >'+$('#currency').val()+'400,000</option> <option value="425000" >'+$('#currency').val()+'425,000</option> <option value="450000" >'+$('#currency').val()+'450,000</option> <option value="475000" >'+$('#currency').val()+'475,000</option> <option value="500000" >'+$('#currency').val()+'500,000</option> <option value="525000" >'+$('#currency').val()+'525,000</option> <option value="550000" >'+$('#currency').val()+'550,000</option> <option value="575000" >'+$('#currency').val()+'575,000</option> <option value="600000" >'+$('#currency').val()+'600,000</option> <option value="625000" >'+$('#currency').val()+'625,000</option> <option value="650000" >'+$('#currency').val()+'650,000</option> <option value="675000" >'+$('#currency').val()+'675,000</option> <option value="700000" >'+$('#currency').val()+'700,000</option> <option value="725000" >'+$('#currency').val()+'725,000</option> <option value="750000" >'+$('#currency').val()+'750,000</option> <option value="775000" >'+$('#currency').val()+'775,000</option> <option value="800000" >'+$('#currency').val()+'800,000</option> <option value="825000" >'+$('#currency').val()+'825,000</option> <option value="850000" >'+$('#currency').val()+'850,000</option> <option value="875000" >'+$('#currency').val()+'875,000</option> <option value="900000" >'+$('#currency').val()+'900,000</option> <option value="925000" >'+$('#currency').val()+'925,000</option> <option value="950000" >'+$('#currency').val()+'950,000</option> <option value="975000" >'+$('#currency').val()+'975,000</option> <option value="1000000" >'+$('#currency').val()+'1,000,000</option> <option value="1050000" >'+$('#currency').val()+'1,050,000</option> <option value="1100000" >'+$('#currency').val()+'1,100,000</option> <option value="1150000" >'+$('#currency').val()+'1,150,000</option> <option value="1200000" >'+$('#currency').val()+'1,200,000</option> <option value="1250000" >'+$('#currency').val()+'1,250,000</option> <option value="1300000" >'+$('#currency').val()+'1,300,000</option> <option value="1350000" >'+$('#currency').val()+'1,350,000</option> <option value="1400000" >'+$('#currency').val()+'1,400,000</option> <option value="1450000" >'+$('#currency').val()+'1,450,000</option> <option value="1500000" >'+$('#currency').val()+'1,500,000</option> <option value="1550000" >'+$('#currency').val()+'1,550,000</option> <option value="1600000" >'+$('#currency').val()+'1,600,000</option> <option value="1650000" >'+$('#currency').val()+'1,650,000</option> <option value="1700000" >'+$('#currency').val()+'1,700,000</option> <option value="1750000" >'+$('#currency').val()+'1,750,000</option> <option value="1800000" >'+$('#currency').val()+'1,800,000</option> <option value="1850000" >'+$('#currency').val()+'1,850,000</option> <option value="1900000" >'+$('#currency').val()+'1,900,000</option> <option value="1950000" >'+$('#currency').val()+'1,950,000</option> <option value="2000000" >'+$('#currency').val()+'2,000,000</option> <option value="2100000" >'+$('#currency').val()+'2,100,000</option> <option value="2200000" >'+$('#currency').val()+'2,200,000</option> <option value="2300000" >'+$('#currency').val()+'2,300,000</option> <option value="2400000" >'+$('#currency').val()+'2,400,000</option> <option value="2500000" >'+$('#currency').val()+'2,500,000</option> <option value="2600000" >'+$('#currency').val()+'2,600,000</option> <option value="2700000" >'+$('#currency').val()+'2,700,000</option> <option value="2800000" >'+$('#currency').val()+'2,800,000</option> <option value="2900000" >'+$('#currency').val()+'2,900,000</option> <option value="3000000" >'+$('#currency').val()+'3,000,000</option> <option value="3100000" >'+$('#currency').val()+'3,100,000</option> <option value="3200000" >'+$('#currency').val()+'3,200,000</option> <option value="3300000" >'+$('#currency').val()+'3,300,000</option> <option value="3400000" >'+$('#currency').val()+'3,400,000</option> <option value="3500000" >'+$('#currency').val()+'3,500,000</option> <option value="3600000" >'+$('#currency').val()+'3,600,000</option> <option value="3700000" >'+$('#currency').val()+'3,700,000</option> <option value="3800000" >'+$('#currency').val()+'3,800,000</option> <option value="3900000" >'+$('#currency').val()+'3,900,000</option> <option value="4000000" >'+$('#currency').val()+'4,000,000</option> <option value="4200000" >'+$('#currency').val()+'4,200,000</option> <option value="4400000" >'+$('#currency').val()+'4,400,000</option> <option value="4600000" >'+$('#currency').val()+'4,600,000</option> <option value="4800000" >'+$('#currency').val()+'4,800,000</option> <option value="5000000" >'+$('#currency').val()+'5,000,000</option> <option value="5200000" >'+$('#currency').val()+'5,200,000</option> <option value="5400000" >'+$('#currency').val()+'5,400,000</option> <option value="5600000" >'+$('#currency').val()+'5,600,000</option> <option value="5800000" >'+$('#currency').val()+'5,800,000</option> <option value="6000000" >'+$('#currency').val()+'6,000,000</option> <option value="6200000" >'+$('#currency').val()+'6,200,000</option> <option value="6400000" >'+$('#currency').val()+'6,400,000</option> <option value="6600000" >'+$('#currency').val()+'6,600,000</option> <option value="6800000" >'+$('#currency').val()+'6,800,000</option> <option value="7000000" >'+$('#currency').val()+'7,000,000</option> <option value="7200000" >'+$('#currency').val()+'7,200,000</option> <option value="7400000" >'+$('#currency').val()+'7,400,000</option> <option value="7600000" >'+$('#currency').val()+'7,600,000</option> <option value="7800000" >'+$('#currency').val()+'7,800,000</option> <option value="8000000" >'+$('#currency').val()+'8,000,000</option> <option value="8200000" >'+$('#currency').val()+'8,200,000</option> <option value="8400000" >'+$('#currency').val()+'8,400,000</option> <option value="8600000" >'+$('#currency').val()+'8,600,000</option> <option value="8800000" >'+$('#currency').val()+'8,800,000</option> <option value="9000000" >'+$('#currency').val()+'9,000,000</option> <option value="9200000" >'+$('#currency').val()+'9,200,000</option> <option value="9400000" >'+$('#currency').val()+'9,400,000</option> <option value="9600000" >'+$('#currency').val()+'9,600,000</option> <option value="9800000" >'+$('#currency').val()+'9,800,000</option>';
		
		$('.listingTab li > span').on('click', function(e) {
			var elem = $(this).attr('data-type');
			var target= $(this).parents('.listingSrhWidget');
			$(this).parents('.listingTab').find('li').removeClass('active');
			$(this).parent().addClass('active'); 
			//$('#forBuyorRent').append('<div class="cLoaderP"><div class="loader">Loading...</div></div>');
			$(target).find('.priceSelctor').css('opacity', .5);
			if(elem == 'forRent'){
				$(target).find('#PriceFromFS').html(forRentOption);
				$(target).find('#PriceToFS').html(forRentOption).children('option[value=100]').attr('disabled', 'disable');
			}else if(elem == 'forBuy'){
				$(target).find('#PriceFromFS').html(forBuyOption);
				$(target).find('#PriceToFS').html(forBuyOption).children('option[value=50000]').attr('disabled', 'disable');								
			}
				$(target).find('#PriceToFS_w4r .chosen-single').addClass('chosen-default').children('span.a').text('Price to');
				$(target).find('#PriceFromFS_w4r .chosen-single').addClass('chosen-default').children('span.a').text('Price from');			
			//smallLoaderClose();
			setTimeout(function(){
				$(target).find('#PriceFromFS,#PriceToFS').trigger("chosen:updated");
				$(target).find('.priceSelctor').css('opacity', 1);
			}, 1000);
			return false
		});
		
		// small loader close 
		/*function smallLoaderClose() {
			setTimeout(function(){
			  $('.cLoaderP').fadeOut().remove();
			}, 1000);
		}*/
		
		// toggle buttons for gallery and grid view 
		$('.toggleBtn').on('click', function(e) {
			var elem = $(this).attr('data-type');
			var o = $(this).parents('.toggleBtns').attr('data-type')
			$(this).parents('form').find('.toggleBtn').removeClass('active');
			var dataID = $(this).attr('data-id');
			//Dnt Delete I assign the Formid Public So that i can access in Map area
			var form = $(this).parents('form')[0];
			FrmId = form.id;
			//----------------------------------------------------------------------
			
			$(this).addClass('active');
			if(o == 'lstFunction'){
				//$(this).parent().attr('data-type', 'lstFunction');
				if(elem == 'Gallery'){
					$('#listingslist_'+dataID).find('.product-listing').addClass('gridLayout');
					$('#listingslist_'+dataID).find('.product-listing').removeClass('listLayout');
                                        $('.display_brokerage_name_txt').show();$('.displaylogmainpage').show();
				}
				if(elem == 'Detail'){
					$('#listingslist_'+dataID).find('.product-listing').addClass('listLayout');
					$('#listingslist_'+dataID).find('.product-listing').removeClass('gridLayout');
                                        $('.display_brokerage_name_txt').hide();$('.displaylogmainpage').hide();
				}
			}
			if(elem == 'Map'){
				$(this).parents('.toggleBtns').attr('data-type', 'mpFunction');
				//$('.product-listing').removeClass('gridLayout').removeClass('listLayout');
				$(this).parents('.listingHead').addClass('mapOnly');
			}
		
		});
		
		$(".w4rmainlistings").on( "click", ".pagination a", function (e){
			e.preventDefault();			
			var page = $(this).attr("data-page"); //get page number from link
			var form = $(this).parents('.w4rmainlistings').prev('form');
			//console.log(form.attr("class"));
	  		FrmId = form.attr("id");
			var arrID = FrmId.split('_');
			var sectionID = arrID[1];
	  		//console.log(FrmId);
			$('#page_'+sectionID).val(page);
			var _this = $(this);
			if(page!=''){
				$('#listingslist_'+sectionID).find('.cLoaderP').fadeIn(); //show loading element
				$('#listingslist_'+sectionID).find('.product-listing').addClass('loadingList');
				$.post('ajaxPaginationlistings', $("#"+FrmId).serialize(), function(data) {
                                        
					var data = data;							 
					$("#listingslist_"+sectionID).html(data);
					$('.cLoaderP.a').hide();
					$('#listingslist_'+sectionID).find('.product-listing').removeClass('loadingList');
					
					
					//$('html,body').animate({scrollTop: $('.mainlistingFrm').offset().top},'slow');
					var w4rfs_Top = $("#listingslist_"+sectionID).parent().parent().offset().top -50;
					$('html,body').animate({scrollTop: w4rfs_Top},'slow');
					setTimeout(function(){    
					   w4rlazyload();
					}, 1);
                                        
				 }); 
			}
			return false;
		});
		
		//Ajax Listing Map 
		$('.ajaxlistingMap').bind('click', function(e) {
			
			e.preventDefault();
			var form = $(this).parents('form')[0];
			FrmId = form.id;
			var arrID = FrmId.split('_');
			var sectionID = arrID[1];
			//console.log(sectionID);
			$('#listingslist_'+sectionID).find('.cLoaderP').fadeIn();; //show loading element
			$('#page_'+sectionID).val(1);
			//$("#listingslist_"+sectionID).html('<div class="loader">Loading...</div>');
			var searchsection = '';
                        var DefaultMapViewLoad=1;
			listinggooglemap(FrmId,sectionID,searchsection,DefaultMapViewLoad);						
	
		});
	
		//Search Section 
		$('.listingsearchBtn').bind('click', function(e) {			
			e.preventDefault();
			if($('#emptydataload').val()=='lrs'){
				rebuilddatafrm();
			}
			var form = $(this).parents('form')[0];
			FrmId = form.id;
			//console.log(FrmId);
			var arrID = FrmId.split('_');
			var sectionID = arrID[1];
			
                        //Google Tracking Code/Tag --- SHAM - https://trello.com/c/k01W59oF/3130-google-tracking-codes
                        FormData = $("#"+FrmId).serializeArray();
                        objArray = {};
                        $(FormData).each(function(i, field){
                          objArray[field.name] = field.value;
                        });
                        console.log(decodeURIComponent(objArray['googletrackingcodes']));
                        try{
                            ga('send', 'event', 'Search Box ', 'Click', decodeURIComponent(objArray['googletrackingcodes']));
                        }catch(Gtrack){console.log(Gtrack);}
                        //------------------------------------------------------------------
                        
			$(this).parents('form').next('div').find('.cLoaderP.a').fadeIn(); //show loading element
			$('#listingslist_'+sectionID).find('.product-listing').addClass('loadingList');
			$('#page_'+sectionID).val(1);
			if($('#lview'+sectionID).val()=='Map'){
                            var searchsection = 1;
                            var DefaultMapViewLoad=1;
                            listinggooglemap(FrmId,sectionID,searchsection,DefaultMapViewLoad);
			}else{
                            //$('.product-listing').append('<span class="cLoaderP a c"><div class="loader">Loading...</div></span>');
                            
                            
                        //------
                            setTimeout(function(){
                                $.post('ajaxPaginationlistings', $("#"+FrmId).serialize(), function(data) {
                                    //Search should not reset on vow signin - Against this card - https://trello.com/c/HitPsdJN/5077-vow-login-causes-query-reset
                                    $("#loginfromvow").val("");
                                    //--------------------------------------------
                                    
                                    
                                    var data = data;							 
                                    $("#listingslist_"+sectionID).html(data);
                                    
                                    setTimeout(function(){
                                        console.log(sectionID+"llll"+FrmId);
                                        try{
                                            //https://w4rteam.com/admin/space?card_id=7581
                                            //for the listings page the url should adjust based on search criteria
                                             generatelistingURL(FrmId,sectionID);
                                        }catch(ldy){}
                                    }, 1);
                                    
                                    $('.cLoaderP.a').hide();
                                    $('#listingslist_'+sectionID).find('.product-listing').removeClass('loadingList');
                                    $('.toggleBtns').attr('data-type', 'lstFunction');
                                    $('.listingHead').removeClass('mapOnly');
                                    //$('.product-listing').find('.cLoaderP.c').remove();
                                    $('.listingHead > .c').removeClass('cDown');
									
                                    //@shaam i add this condition coz on mobile on search it showing listings in grid layout http://share.web4realty.com/QOPHk1
                                    if($(window).width() < 767){
                                            $('#listingslist_'+sectionID).find('.product-listing').removeClass('gridLayout').addClass('listLayout')
                                    }
                                    setTimeout(function(){
                                        w4rlazyload();
                                    }, 1);
                                    //Empty Flag Btn Click Search
                                    $('#btnSearch'+sectionID).val('');
                                    if($('#emptydataload').val()=='lrs'){
                                            loademptydatafrm();
                                            setTimeout(function(){
                                              if($('#recaptchaElement').val()=='Y'){ console.log('__asdfasdfpppp');
                                                  var recaptchaNew = grecaptcha.render("listingdetailfrmcap", {
                                                    'sitekey' : $('#recaptcha_site_keyElement').val(), //Replace this with your Site key
                                                    'theme' : 'light'
                                                  });

                                                }
                                            }, 10);
                                    }
                                });
                            }, 10);
			}
	
		});
			
		
});


function generatelistingURL(FrmId,sectionID){
    
    console.log("--");
    
        var selectType = $("#"+FrmId+' #selectType'+sectionID).find(":selected").val();
        var numberofbedrooms = $("#"+FrmId+' .numberofbedrooms').find(":selected").val();
        var numberofbathrooms = $("#"+FrmId+' .numberofbathrooms').find(":selected").val();
        numberofbedrooms=numberofbedrooms.replace("+", "p");
        numberofbathrooms=numberofbathrooms.replace("+", "p");

        var limit = $("#"+FrmId+' .viewperpagedropdown').val();
        var sort = $("#"+FrmId+' .mainsortinglist').val();

        UrlStr="";purchase_type="";
        var Optionvalues = "";
        if($('#newmarketapi_detail').val()=='1'){
            selectedItemCls='w4rsearch_ajax';
        }else{
            selectedItemCls='w4rsearch_ajax'+selectType;
            var Type = $("#"+FrmId+' #listingstatus'+sectionID).val();
            if(Type!=''){
                UrlStr+="Type="+Type+"&";
            }
            
            var priceto = $("#"+FrmId+' #PriceFromFS').find(":selected").val();
            if(priceto!=''){
                UrlStr+="priceto="+priceto+"&";
            }
            var pricefrom = $("#"+FrmId+' #PriceToFS').find(":selected").val();
            if(pricefrom!=''){
                UrlStr+="pricefrom="+pricefrom+"&";
            }
        
            
        }
        
        $("#"+FrmId+' .'+selectedItemCls+' > option').each(function() {
            if($(this).val()!=''){
                Optionvalues+=$(this).val()+',';
            }
        });
        Optionvalues=Optionvalues.slice(0, -1);
        if(Optionvalues!=''){
            UrlStr+=selectType+"="+Optionvalues+"&";
        }
        if(numberofbedrooms!=''){
            UrlStr+="beds="+numberofbedrooms+"&";
        }
        if(numberofbathrooms!=''){
            UrlStr+="baths="+numberofbathrooms+"&";
        }
        if($('#newmarketapi_detail').val()=='1'){
            if($('#purchase_type_current').val()!=""){
                if($('#purchase_type_current').val()=="buy((all)(any,any)),rent((all)(any,any))"){
                }else{
                    UrlStr+="purchase_type="+$('#purchase_type_current').val()+"&";
                }
            }
        }
        if(limit!=''){
            UrlStr+="limit="+limit+"&";
        }
        if(sort!=''){
            UrlStr+="sort_by="+sort+"&";
        }
        if($('#newmarketapi_detail').val()==''){
            UrlStr+="p=detail&";
        }
        UrlStr=UrlStr.replace("purchase_type=buy((all)(any,any)),rent((all)(any,any))&", "");

        UrlStr=UrlStr.slice(0,-1);
        listingurl=$('#currentlistingurl').val();
		console.log('listingurl--> '+listingurl);
        var listingurlArr = listingurl.split('?');
        makeurl= listingurlArr[0]+'?'+UrlStr;
        console.log(makeurl);
        window.history.replaceState("", "", makeurl);
    	$('.clearSearch').show();
    //var atLeastOneIsChecked = $('#'+FrmId+' input[name="buyrent[]"]:checked').length > 0;
    //console.log(atLeastOneIsChecked);

//                            buyType="(all)";rentType="(all)";
//                            
//                            var priceto = $("#"+FrmId+' input[name="priceto"]').find(":selected").val();
//                            var pricefrom = $("#"+FrmId+' input[name="pricefrom"]').find(":selected").val();
//                            var pricerentto = $("#"+FrmId+' input[name="pricerentto"]').find(":selected").val();
//                            var pricerentfrom = $("#"+FrmId+' input[name="pricerentfrom"]').find(":selected").val();
//                            //---Price------------------------------------------
//                            PriceBuy="";
//                            if(priceto!="" && pricefrom!=""){
//                                PriceBuy+='('+priceto+','+pricefrom+')';
//                            }else if(priceto=="" && pricefrom!=""){
//                                PriceBuy+='(any,'+pricefrom+')';
//                            } else if(priceto!="" && pricefrom==""){
//                                PriceBuy+='('+priceto+',any)';
//                            }
//                            PriceRent="";
//                            if(pricerentto!="" && pricerentfrom!=""){
//                                PriceRent+='('+pricerentto+','+pricerentfrom+')';
//                            }else if(pricerentto=="" && pricerentfrom!=""){
//                                PriceRent+='(any,'+pricerentfrom+')';
//                            } else if(pricerentto!="" && pricerentfrom==""){
//                                PriceRent+='('+pricerentto+',any)';
//                            }
    //--------------------------------------------------
    //
    //---purchase_type----------------------------------
//                            $('#'+FrmId+' input[name="buyrent[]"]:checked').each(function () {
//                                if($(this).val()=='buy'){
//                                    purchase_type+=$(this).val()+'('+buyType+''+PriceBuy+'),';
//                                }else{
//                                    purchase_type+=$(this).val()+'('+rentType+''+PriceRent+'),';
//                                }
//                            });
//                            if(purchase_type!=""){
//                                purchase_type=purchase_type.slice(0, -1);
//                                purchase_type="&purchase_type="+purchase_type;
//                            }
    //--------------------------------------------------

    
}
var setlistingmapflag = '';
function listinggooglemap(FrmId,sectionID,searchsection,DefaultMapViewLoad){
	//							
	$('#listingscrolling'+sectionID).find('.cLoaderP').remove();
	$('#listingscrolling'+sectionID).append('<span class="cLoaderP a"><div class="loader">Loading...</div></span>');
	list_items_page = 100;list_offset = 0;
        setTimeout(function(){
            $.post($("#w4r_setUrlPath").val()+'ajaxlistingmap', $("#"+FrmId).serialize()+'&mapsection='+searchsection+"&address_val="+$('#address_val_'+sectionID).val(), function(data) {
                var data = data;
                //Call Js Files---
                if($('#mapjsloadalready').val() == ''){// This Flag Set FOr Just load one time all Js
                        mapcallwithjs1(FrmId,sectionID,searchsection,data);
                }else{
                        mapcallwithjs1(FrmId,sectionID,searchsection,data);//
                }
                //End Call Js Files------------
            });
        }, 500);
}


///New Map Load Default

var mapidStr = "";
for(Acma=1;Acma<$('#cntmapsection').val();Acma++){
    //$('#uniquecurrentsectionid').val(Acma);
    try{
       if($('#lview'+Acma).val()=='Map'){
            mapidStr += Acma+',';
        }
        //--------------------
    }catch(exx){}
}

var Mapstr = mapidStr;
var str_array = Mapstr.split(',');
var DefaultMapViewLoad = 1; //This flag becoz google map related files laod one time-
for(var i = 0; i < str_array.length; i++) {
   // Trim the excess whitespace.
   if(str_array[i]!=''){
            console.log(str_array[i]+'_innnnn');
            $('#uniquecurrentsectionid').val(str_array[i]);
            try{
               if($('#lview'+$('#uniquecurrentsectionid').val()).val()=='Map'){
                    var form = $('#lview'+$('#uniquecurrentsectionid').val()).parents('form')[0];
                    FrmId = form.id;
                    var arrID = FrmId.split('_');
                    var sectionID = arrID[1];

                    $('#listingslist_'+sectionID).find('.cLoaderP').fadeIn();; //show loading element //show loading element
                    $('#listingslist_'+sectionID).find('.product-listing').addClass('loadingList');
                    $('#page_'+sectionID).val(1);
                    if($('#lview'+$('#uniquecurrentsectionid').val()).val()=='Map'){
                            var searchsection = 1;
                            listinggooglemap(FrmId,sectionID,searchsection,DefaultMapViewLoad);
                            DefaultMapViewLoad++;
                    }
                }
                //--------------------
            }catch(exx){}

   }
}
//
//
//if($('#lview'+$('#uniquecurrentsectionid').val()).val()=='Map'){
//	
//	var form = $('#lview'+$('#uniquecurrentsectionid').val()).parents('form')[0];
//	FrmId = form.id;
//	var arrID = FrmId.split('_');
//	var sectionID = arrID[1];
//	
//	$('#listingslist_'+sectionID).find('.cLoaderP').fadeIn();; //show loading element //show loading element
//	$('#listingslist_'+sectionID).find('.product-listing').addClass('loadingList');
//	$('#page_'+sectionID).val(1);
//	if($('#lview'+$('#uniquecurrentsectionid').val()).val()=='Map'){
//		var searchsection = 1;
//		listinggooglemap(FrmId,sectionID,searchsection,DefaultMapViewLoadempty);
//	}
//}

$(".moreSearch a").on( "click", function (e){
	e.preventDefault();
	$(this).parent().next(".moreSeOpt").toggleClass('asOpen');
	if ($(this).text() == "- Close") {
		$(this).text("+ Advance Search");
	} else {
		$(this).text("- Close");
	}
});
	
})(window.jQuery);

function mapcallwithoutjs(FrmId,sectionID,searchsection,data){
	
	if(searchsection==3){
		listingid = data;
		initializemap(listingid,sectionID);
	}else{
	
		if($('.listingMap').hasClass('fullScreen')){
			var sorByoptions = document.getElementById('srtByopt');
			$('.listingHead').append(sorByoptions);
		}
		$("#listingslist_"+sectionID).html(data);
		if($('#emptydataload').val()=='lrs'){
			loademptydatafrm();
		}
		mapWidth();
		mpHeight();
		
		listingid = '';
		initializemap(listingid,sectionID);
		$('.cLoaderP.a').hide();
		$('#listingslist_'+sectionID).find('.product-listing').removeClass('loadingList');
		if($('#mapfullscreen'+$('#uniquecurrentsectionid').val()).val()==1){
			fullMap($('.fullMap'));
		}
	}
}
function mapcallwithjs1(FrmId,sectionID,searchsection,data){
    $.getScript("https://api.mapbox.com/mapbox-gl-js/v1.11.1/mapbox-gl.js", function( datas, textStatus, jqxhr ) {
        $.getScript($('#baseUrl').val()+"/application/layouts/scripts/themes/trailblazer/js/map/w4rlstmapbox.js", function( datas, textStatus, jqxhr ) {
          $('head').prepend('<link rel="stylesheet" type="text/css" href="'+$('#baseUrl').val()+'/application/layouts/scripts/themes/trailblazer/css/mapbox-glv1.11.1.css">');
            if(searchsection==3){
                    listingid =data;
                    initializemapbox(listingid,sectionID,'old','width','height');
            }else{
                    if($('#emptydataload').val()=='lrs'){
                            loademptydatafrm();
                    }
                    $("#listingslist_"+sectionID).html(data);
                    mapWidth();
                    mpHeight();
                    listingid = '';
                    initializemapbox(listingid,sectionID,'old','width','height');
            }
            $('#mapjsloadalready').val('1');
            setlistingmapflag = '1';
            if($('#mapfullscreen'+$('#uniquecurrentsectionid').val()).val()==1){
                    fullMap($('.fullMap'));
            }
        });
    });
}
function mapcallwithjs(FrmId,sectionID,searchsection,data){
	$.getScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyDgEVS1bmgtaauzCtP5ixJl5taVmeuai5I&v=3.exp&sensor=false&libraries=places", function( datas, textStatus, jqxhr ) {
		$.getScript("https://www.google.com/jsapi", function( datas, textStatus, jqxhr ) {
			$.getScript($('#baseUrl').val()+"/application/layouts/scripts/themes/trailblazer/js/map/markerclusterer.js", function( datas, textStatus, jqxhr ) {
				
				$.getScript($('#baseUrl').val()+"/application/layouts/scripts/themes/trailblazer/js/map/markers.js", function( datas, textStatus, jqxhr ) {
					
					$.getScript($('#baseUrl').val()+"/application/layouts/scripts/themes/trailblazer/js/map/w4rlstmap.js", function( datas, textStatus, jqxhr ) {
						
						$.getScript($('#baseUrl').val()+"/application/layouts/scripts/themes/trailblazer/js/map/infobox.js", function( datas, textStatus, jqxhr ) {
							
							if(searchsection==3){
								listingid =data;
								initializemap(listingid,sectionID);
							}else{
								if($('#emptydataload').val()=='lrs'){
									loademptydatafrm();
								}
								$("#listingslist_"+sectionID).html(data);
								mapWidth();
								mpHeight();
								listingid = '';
								initializemap(listingid,sectionID);
							}
							$('#mapjsloadalready').val('1');
							setlistingmapflag = '1';
							if($('#mapfullscreen'+$('#uniquecurrentsectionid').val()).val()==1){
								fullMap($('.fullMap'));
							}
						});
						
					});
				});
			});
		});
	});
}

function setglag_ld(serialid,sessionid){
	secData = { 'sessionid': sessionid,  'serialid': serialid};			
	$.ajax({
		type: 'POST',  
		url: "ajax_set_listingdetail_session" ,
		data: secData,
		success: function(data) {
			formphtml 	= data;
		},
		error:function(xhr, ajaxOptions, thrownError){}
	});						
	//alert('A');
}

/*$(".plistAction .e").on( "click", function (e){
	$.fancybox({
		href: '#requestShowing',
		width: 780,
		height:'auto',
		fitToView : false,
		autoSize : false,	
	});
	return false;
});*/

var placeSearch, autocomplete;
var componentForm = {
  street_number: 'short_name',
  route: 'long_name',
};
//For street Search
function initialize(ids) {
	//console.log(ids);
	var input = document.getElementById('w4raddsearch_ajax_w4r'+ids);
	var autoCompleteOptions = {componentRestrictions: {country: $('#address_country_code').val()}};
	autocomplete = new google.maps.places.Autocomplete(input,autoCompleteOptions);
}



function streetaddress(vales,ids){
	//console.log(vales+'sham');
	if(vales=='Address'){
		if(streetaddressFlag==""){
			//  <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDgEVS1bmgtaauzCtP5ixJl5taVmeuai5I&callback=initMap"  type="text/javascript"></script>
			$.getScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyDgEVS1bmgtaauzCtP5ixJl5taVmeuai5I&v=3.exp&sensor=false&libraries=places", function( datas, textStatus, jqxhr ) {
				streetaddressFlag = 1;
				initialize(ids);
			});
		}else{		
			initialize(ids);
		}
	}
}
//If default Address options is selected then Address should work---------------
if($('#defaultSearchByselections1').val()=='Address'){
    streetaddress('Address','1');
}
//------------------------------------------------------------------------------
// [START region_fillform]
function fillInAddress() {
  // Get the place details from the autocomplete object.
  var place = autocomplete.getPlace();
	//console.log(place);
  for (var component in componentForm) {
    document.getElementById(component).value = '';
    document.getElementById(component).disabled = false;
  }

  // Get each component of the address from the place details
  // and fill the corresponding field on the form.
  for (var i = 0; i < place.address_components.length; i++) {
    var addressType = place.address_components[i].types[0];
    if (componentForm[addressType]) {
      var val = place.address_components[i][componentForm[addressType]];
      document.getElementById(addressType).value = val;
    }
  }
}


var phototab = ''; //This flag for load photo tab ajax just one time..
var lightgalleryload = ''; //This flag for load lightgallery just one time..
//View large Images
function photolarge(listing_id,elementId){
	$('.pageLoader').fadeIn(); //show loading element
        if($('#newmarketapi_detail').val()=='1'){
            dynUrlViewLarge="ajax_viewlarge_click?listing_id="+$('#listing_id').val()+"&newmarketapi_object_id="+$('#'+elementId).attr('data-objectid')+"&img_object_name="+$('#'+elementId).attr('data-objectname')+"&img_object_count="+$('#'+elementId).attr('data-objectcount')+"&img_object_feed_id="+$('#'+elementId).attr('data-object_feed_id');
        }else{
            dynUrlViewLarge="ajax_viewlarge_click?listing_id="+listing_id;
        }
   $.ajax({
		url: dynUrlViewLarge ,
		type: 'POST',
		dataType:"json",
		success: function(data) {
			if(lightgalleryload==''){
				$.getScript($('#baseUrl').val()+"/application/layouts/scripts/themes/trailblazer/js/lg/lightgallery.min.js", function( datas, textStatus, jqxhr ) {
					lightgalleryload = 1;
					//-------------------------
					loadgalleryDate(data,elementId);
					$('.pageLoader').hide();
				});
			}else {
				//-------------------------
				loadgalleryDate(data,elementId);
				$('.pageLoader').hide();
			}
			
		},
		error: function(e) {
			console.log("Server failure! Is the server turned off?");
		}
	});
	//---------------------------------------
}
function loadgalleryDate(data,elementId){
	var new_obj = jQuery.makeArray();
	dynamicphoto = '';
	for (var i = 0; i < data.length; i++) {
		var jsonArg 	= new Object();
		jsonArg.src 	= data[i];
		jsonArg.thumb 	= data[i];
		new_obj.push(jsonArg);
	}
	//console.log(parseInt($('#imgselectedindex').val()));
	$('#'+elementId).lightGallery({
		dynamic: true,
		index:0,
		dynamicEl: new_obj
	})
}

// location on map popup 
var map = '';
var popup = '';
function locationonMap(latitude,longitude,address,lid){
	$('#locationOnmap').html('<div id="map_canvas_popup" class="map_canvasclss"><span class="cLoaderP a"><div class="loader">Loading...</div></span></div>');
	$.fancybox({
		href: '#locationOnmap',
		width:800,
		height:400,
		fitToView : false,
		autoSize : false,
	});
	setTimeout(function(){
		
		$('#latitude').val(latitude);
		$('#longitude').val(longitude);
		$('#maptooltiphtml').val(address);
		
		var searchsection = 3; // //This Section for Listing Detail Tab When User Click On 'Location On Google Map' Button
		var FrmId = 'listingsSearchForm_1';
		var listingid = lid;
                
                $.getScript("https://api.tiles.mapbox.com/mapbox-gl-js/v0.40.0/mapbox-gl.js", function( datas, textStatus, jqxhr ) {
                $.getScript($('#baseUrl').val()+"/application/layouts/scripts/themes/trailblazer/js/map/w4rlstmapbox.js", function( datas, textStatus, jqxhr ) {
                  //  $('head').append('<link rel="stylesheet" type="text/css" href="'+$('#baseUrl').val()+'/application/layouts/scripts/themes/trailblazer/css/mapbox-gl.css">');
                    
                    mapboxgl.accessToken = 'pk.eyJ1IjoidzRyIiwiYSI6ImNqdzA0YWw1czA3OG40YnJ3N21mOXE2dXkifQ.n8K8qTDbdQ-Iz1rFw88qvw';  //this key belong to ahtshamasgharb4u@gmail.com
                    ////mapboxgl.accessToken = 'pk.eyJ1IjoiYWh0c2hhbWI0dSIsImEiOiJjajg1eDU5MTcwb2s5MnFzYmpiNjQ5ZGhsIn0.2p6DqRhLuEt1mnQLsU_KZg'; this belong to sham@web4realty.com its 
                    //expire that why use another account 
                    //-----------------------------------------------------------
                   
                var map = new mapboxgl.Map({
                    container: 'map_canvas_popup',
                    style: 'mapbox://styles/mapbox/streets-v11',
                    center: [longitude, latitude],
                    zoom: 11.15
                });
                map.addControl(new mapboxgl.NavigationControl({position: 'top-left'}),'top-left');
                $.srSmoothscroll({
                    target: $('#listingscrolling'+GlobelSectionId),
                    container: $('#scrollPane'+GlobelSectionId)
                    //<div id="container1">
                    // <div id="widget1">
                });
                if($('#w4rauto_users_config_w4rlistings').val()=='1'){
                   var formdata = 'listingdetailTab=1&lid='+listingid+'&preloadapidata='+$('#preloadapidata').html()+"&address_val="+address; 
                }else{
                   var formdata = 'listingdetailTab=1&lid='+listingid+"&address_val="+$('#address_val_'+sectionID).val(); 
                }
                var editorData =    $.getJSON( $("#w4r_setUrlPath").val()+'ajaxlistingmarker', formdata , function(data) {
                layerOptions = [];
                $.each( data.single_locations, function(idx) {
                    map.on('load', function () {
						
						//@sham i remove below all code to place custom icon on place on map
						//reff card is this https://w4rteam.com/admin/space?card_id=311
						
                        // Add a layer showing the places.
                        //map.addLayer({
//                            "id": "places",
//                            "type": "circle",
//                            "source": {
//                                "type": "geojson",
//                                "data": {
//                                    "type": "FeatureCollection",
//                                    "features": [{
//                                        "type": "circle",
//                                        "properties": {
//                                    "phoneFormatted": "(202) 234-7336",
//                                    "phone": "2022347336",
//                                    "address": "1471 P St NW",
//                                    "city": "Washington DC",
//                                    "country": "United States",
//                                    "crossStreet": "at 15th St NW",
//                                    "postalCode": "20005",
//                                    "state": "D.C."
//                                  },
//                                        "geometry": {
//                                            "type": "Point",
//                                            "coordinates": [longitude, latitude]
//                                        }
//                                    }]
//                                }
//                            }
//                        });

                        // When a click event occurs on a feature in the places layer, open a popup at the
                        // location of the feature, with description HTML from its properties.
                        //map.addLayer({
//                            id: "unclustered-point",
//                            type: "circle",
//                            source: "places",
//                            paint: {
//                                "circle-color": "#fgvfdc",
//                                "circle-radius": 4,
//                                "circle-stroke-width": 1,
//                                "circle-stroke-color": "#fff"
//                            }
//                        });

                        // Change the cursor to a pointer when the mouse is over the places layer.
                        //map.on('mouseenter', 'places', function () {
//                            map.getCanvas().style.cursor = 'pointer';
//                        });

                        // Change it back to a pointer when it leaves.
                       // map.on('mouseleave', 'places', function () {
//                            map.getCanvas().style.cursor = '';
//                        });
						
						//sham i added this code to place custom marker -- @fasy
						var monument = [longitude, latitude];
						var el = document.createElement('div');
						el.className = 'mapmarker';
						new mapboxgl.Marker(el)
						.setLngLat(monument)
						.addTo(map);
                    });
                    
                    //createsinglepopup(data.single_locations[idx]);
                   arrayObj =  data.single_locations[idx];
                   console.log(arrayObj.address+arrayObj.image_name);
                    var popUps = document.getElementsByClassName('mapboxgl-popup');
                    if (popUps[0]) popUps[0].remove();

                    //var arrayObj = currentFeature.properties.dataArray;

                    //Create TOOLTIP HTML-------------------------------------------------------
                    if($('#w4rauto_users_config_w4rlistings').val()=='1'){
                        var mediaPhoto = arrayObj.image_name;
                        $('.cLoaderP.a').hide();
                    }else{
                        var mediaPhoto = $('#treblphotos').val()+arrayObj.image_name;
                    }
                       
                    if(!(mediaPhoto!='' && arrayObj.image_available=='1')) mediaPhoto = 'assets/images/e3014066.jpg';
                    var lstprice = "";
                    if(arrayObj.lp_dol!='' && arrayObj.lp_dol!='0'){
                        if($('#w4rauto_users_config_w4rlistings').val()=='1'){
                        }else{
                            lstprice = $('#currency').val();
                        }
                      lstprice += arrayObj.lp_dol;

                      if(arrayObj.pay_freq!=''){
                        lstprice += '/'+arrayObj.pay_freq;
                      } else {
                        if(arrayObj.lp_code!=''){
                          if(!(arrayObj.class=='Com' && arrayObj.lp_code=='For Sale')) lstprice += '/'+arrayObj.lp_code;  
                        } else if(arrayObj.s_r=='Lease' || arrayObj.s_r=='Sub-Lease'){
                          lstprice += '/monthly ';
                        }
                      }
                    } else {
                      lstprice += '--';
                    }

                    if(($.inArray(arrayObj.s_r,['Sale','Rent/Lease','Lease','Sub-Lease']))>-1){
                      var types = classes[arrayObj.class] + ' for ' + arrayObj.s_r + '<span style="height:5px;">&nbsp</span>';
                    } else {
                      var types = classes[arrayObj.class] + arrayObj.s_r + '&nbsp';
                    }
                    var beds = '', bath = '', sqft = '', doms = '';
                    if(arrayObj.br && arrayObj.br!=''){
                      beds =  '<li><i class="ico-bed ico-small grey"></i>'+arrayObj.br; 
                      if(arrayObj.br_plus && arrayObj.br_plus!='') beds += '+'+arrayObj.br_plus;
                      beds += "</li>";
                    } 
                    if(arrayObj.bath_tot && arrayObj.bath_tot!=''){
                      bath =  '<li><i class="ico-shower ico-small grey"></i>'+arrayObj.bath_tot;
                      if(arrayObj.bath_tot1 && arrayObj.bath_tot1!='') bath += '+'+arrayObj.bath_tot1;
                      bath += "</li>";
                    } 
                        Areasqft = '';
                    if(arrayObj.sqft!=''){
                      Areasqft = '<li class="c"><span><b>Area:</b><p>'+arrayObj.sqft+' Sq Ft</p></span></li>';
                    }
                    if(arrayObj.dom && arrayObj.dom!='') doms = '<span style="float:right; color:#000000;font-weight:normal ">DOM:'+arrayObj.dom+' days</span>';
                    if((arrayObj.br=='0' || arrayObj.br==''   || arrayObj.br=='null'   || arrayObj.br==null )){
                                arrayObj.br = '--';
                                arrayObj.br_plus = '';
                        } else if((arrayObj.br=='0' && arrayObj.br_plus=='0') || (arrayObj.br=='' && arrayObj.br_plus=='')  || (arrayObj.br==0 && arrayObj.br_plus=='') || (arrayObj.br=='null' && arrayObj.br_plus=='null')){
                                arrayObj.br = '--';
                                arrayObj.br_plus = '';
                        }
                        if((arrayObj.bath_tot=='0' || arrayObj.bath_tot==''  || arrayObj.bath_tot=='null'   || arrayObj.bath_tot==null  )){
                                arrayObj.bath_tot = '--';
                                arrayObj.bath_tot1 = '';
                        } else if((arrayObj.bath_tot=='0' && arrayObj.bath_tot1=='0') || (arrayObj.bath_tot=='' && arrayObj.bath_tot1=='')  || (arrayObj.bath_tot==0 && arrayObj.bath_tot1=='') || (arrayObj.bath_tot=='null' && arrayObj.bath_tot1=='null')){
                                arrayObj.bath_tot = '--';
                                arrayObj.bath_tot1 = '';
                        }

                        var showvowlayer ='';
                        var showblur = '';
                        vowLayer = vowblocklayer(arrayObj.vowstate);
                        if(arrayObj.source==2 && arrayObj.vowflag==0){showvowlayer =vowLayer;showblur='blur';}else{showvowlayer =''}
                        var combinelatlng = arrayObj.lat+'_'+arrayObj.lng;
                        listingType='';
                        if(arrayObj.newmarketintegration=='1'){
                            listingType=arrayObj.class;   
                            communityStr='<strong>City:</strong>'+arrayObj.municipality;
                            if(arrayObj.display_brokerage!=''){
                                communityStr=communityStr+'<br>'+arrayObj.display_brokerage+'';
                            }
                        }else{
                            listingType=classes[arrayObj.class];
                            communityStr='<strong>Community:</strong>'+arrayObj.community+' - '+arrayObj.municipality;
                        }
                         var tooltipHtml = '<div class="maptooltip" style="overflow:auto;max-height:400px;background-color:#ffffff"><article class="listing_item'+' '+showblur+'"  data-id="'+arrayObj.listing_id+'" data-latlng="'+combinelatlng+'"><a href="'+arrayObj.slug+'" onclick="setglag_ld(2,1);focusMarker('+arrayObj.listing_id+',"'+combinelatlng+'")" target="_blank"></a>'+showvowlayer+'<div class="pThumb"><span class="inNew"> <a href="'+arrayObj.slug+'" onclick="setglag_ld(2,1);focusMarker('+arrayObj.listing_id+',"'+combinelatlng+'")" target="_blank" title="Open in new window."><i class="ico-link-external"></i></a></span><span class="thumb" style="background-image:url('+mediaPhoto+')"></span></div><div class="pList"><div class="pPrice"><span><h3>'+lstprice+'</h3><p>'+arrayObj.address+'</p></span></div><div class="pDesc"><strong>MLS<sup class="sup_">&reg;</sup>#:</strong>'+arrayObj.mls+'<br><strong>Status:</strong>'+' '+(($.inArray(arrayObj.s_r,['Sale','Rent/Lease','Lease','Sub-Lease']))>-1?'For ':'')+' '+arrayObj.s_r+
          '&nbsp; <br><strong>Type:</strong>'+listingType+' <br>'+communityStr+'</div></div><ul class="pBlock"><li><span><i class="ico-bed ico-small grey"></i> <p>'+arrayObj.br+(arrayObj.br_plus?'+'+arrayObj.br_plus:'')+'</p> </span></li> <li><span><i class="ico-shower ico-small grey"></i><p>'+arrayObj.bath_tot+(arrayObj.bath_tot1?('+'+arrayObj.bath_tot1):'')+' </p></span></li>'+Areasqft+'</ul></article></div>';
	
                       //@sham i remove below all code to place custom icon on place on map
						//reff card is this https://w4rteam.com/admin/space?card_id=311
					   // popup = map.on('click', 'places', function (e) {
//                            new mapboxgl.Popup()
//                            .setLngLat(e.features[0].geometry.coordinates)
//                            .setHTML(tooltipHtml)
//                            .addTo(map);
//                        });
					
					//sham i added this code to show tooltip on marker click -- @fasy
					$(document.body).on('click', '.mapmarker' ,function(e){
						new mapboxgl.Popup()
					   .setLngLat([longitude, latitude])
						.setHTML(tooltipHtml)
						.addTo(map);
					});

                    //--------------------------------------------------------------------------
                })
                }); 

                    $('.cLoaderP.a').hide();
                    //-----------------------------------------------------------
                });
            });
                
                
//		if($('#mapjsloadalready').val() == ''){// This Flag Set FOr Just load one time all Js
//			//mapcallwithjs(FrmId,'1',searchsection,listingid);
//                        mapcallwithjs1(FrmId,'1',searchsection,listingid);
//		}else{
//			mapcallwithjs1(FrmId,'1',searchsection,listingid);//
//		}
		//$.getScript($('#baseUrl').val()+"/application/layouts/scripts/themes/trailblazer/js/listingdetailmap.js", function( data ) {
		//});
	}, 1000);
	//---------------------------------------
}
$(document).ready(function(e) {
    $(document.body).on('click', '.tipClose' ,function(){
	 popup.remove();
    });
});
function createsinglepopup(arrayObj){
    
}
//1 for full - 2 for 75 right and left - 3 for 25 - 3 col and 4 col
///Listing Slider----------------- {NOTE: NEED TO REMOVE FROM LISTING DETAIL PAGE AND MAKE THIS ONE FUN---}
function listingslider(elementid,slidesToShow,autoplay,autoplaySpeed,layoutsize){
	var strResponsive = '';
	var slidesToShow ='';
	if(layoutsize==5){
		slidesToShow = 4;
		strResponsive = [{breakpoint: 2000,settings: {slidesToShow: 5,slidesToScroll: 1,infinite: true,}},{breakpoint: 1680,settings: {slidesToShow: 4,slidesToScroll: 1,infinite: true,}},{breakpoint: 1025,settings: {slidesToShow: 3,slidesToScroll: 1,infinite: true, }},{breakpoint: 780,settings: {slidesToShow: 2,slidesToScroll: 1}},{ breakpoint: 590,settings: {slidesToShow: 1,slidesToScroll: 1}}];
	}else{
		slidesToShow = 3;
		strResponsive = [{breakpoint: 2000,settings: {slidesToShow: 4,slidesToScroll: 1,infinite: true,}},{breakpoint: 1900,settings: {slidesToShow: 3,slidesToScroll: 1,infinite: true,}},{breakpoint: 1025,settings: {slidesToShow: 2,slidesToScroll: 1,infinite: true, }},{breakpoint: 780,settings: {slidesToShow: 2,slidesToScroll: 1}},{ breakpoint: 590,settings: {slidesToShow: 1,slidesToScroll: 1}}];
	}
	$('#'+elementid).slick({
	  dots: false,
	  infinite: false,
	  speed: 300,
	  slidesToShow: slidesToShow,
	  slidesToScroll: 1,
	  autoplay: autoplay,
	  autoplaySpeed: autoplaySpeed,
	  responsive: strResponsive
	});
}
var cntClickNext        = 1;
var flagstopsliderajax  ='';
$(document).ready ( function () {
    var offset = 20;
    $('.featured-properties-slider').on('click', '.slick-next-Btn', function() {
       // console.log('next__'+cntClickNext);
        if(cntClickNext==8){
            elementid = $(this).closest(".featured-properties-slider").attr("id");
            var cntId = elementid.replace("listingslider_", "");
            var cntId = cntId.replace($('#currentwebpagename').val(), "");
            console.log(cntId+'----'+elementid+'------'+$('#currentwebpagename').val());
            showNewContent(elementid,cntId,offset);
            offset = offset+20;
        }
        cntClickNext++;
     });
     $('.featured-properties-slider').on('click', '.slick-prev-Btn', function() {
        //console.log('prev');
        //console.log($(this).closest(".featured-properties-slider").attr("id"));
     });
});
var refreshIntervalId;
function showNewContent(elementid,cntId,offset){
    
    $.ajax({
        url: "ajax_listing_slider_more?ajax_listing_slider_more=1&elementid="+elementid+"&cntId="+cntId+"&offset="+offset+"&address_val="+$('#address_val_'+cntId).val()+"&currentwebpagename="+$('#currentwebpagename').val()  ,
        type: 'POST',
        async: false,
        cache: true,
        success: function(data) {
            if(data.trim()=='No'){
                console.log('Null Records - --- '+cntId);flagstopsliderajax=1;
                clearintervalwithloop(cntId)
            }else{
                console.log('Trigger Add Slide '+elementid);
                $('#'+elementid).slick('slickAdd',data);
            }
            cntClickNext = 1;
            setTimeout(function(){    
               w4rlazyload(); 
            }, 1);
        },
        error: function(e) {
            console.log("Server failure! Is the server turned off?");
        }
    });
}
//// FOR MAKE THE UNIQUE ARAE SO THAt thing will load as per repected area like listing seach, listing view mode etc
function uniquecurrentsectionid(id){
	$('#uniquecurrentsectionid').val(id);
}
function clearintervalwithloop(cntId){
    if(cntId=='1'){clearInterval(refreshIntervalId1);}
    if(cntId=='2'){clearInterval(refreshIntervalId2);}
    if(cntId=='3'){clearInterval(refreshIntervalId3);}
    if(cntId=='4'){clearInterval(refreshIntervalId4);}
    if(cntId=='5'){clearInterval(refreshIntervalId5);}
    if(cntId=='6'){clearInterval(refreshIntervalId6);}
    if(cntId=='7'){clearInterval(refreshIntervalId7);}
    if(cntId=='8'){clearInterval(refreshIntervalId8);}
    if(cntId=='9'){clearInterval(refreshIntervalId9);}
    if(cntId=='10'){clearInterval(refreshIntervalId10);}
    if(cntId=='11'){clearInterval(refreshIntervalId11);}
    if(cntId=='12'){clearInterval(refreshIntervalId12);}
    if(cntId=='13'){clearInterval(refreshIntervalId13);}
    if(cntId=='14'){clearInterval(refreshIntervalId14);}
    if(cntId=='15'){clearInterval(refreshIntervalId15);}
    if(cntId=='16'){clearInterval(refreshIntervalId16);}
    if(cntId=='17'){clearInterval(refreshIntervalId17);}
    if(cntId=='18'){clearInterval(refreshIntervalId18);}
    if(cntId=='19'){clearInterval(refreshIntervalId19);}
    if(cntId=='20'){clearInterval(refreshIntervalId20);}
}

//Add Map Sorting  option when we go to map
function addMapSO(val,id){
	if(val=='Map'){
		onboundsupdate = true;
                if($('#w4rauto_users_config_w4rlistings').val()=='1'){}else{
                    $('#currentsorting_'+id).val('Map');
                }
		$('#sortby_'+id).append('<option value="Map" selected>Map</option>');
	}else{
		$("#sortby_"+id+" option[value='Map']").remove();
	}
	$("#sortby_"+id).trigger("chosen:updated");
	////This condition for set the Listing view Flag 
	$.ajax({
		url: "ajax_listing_view_tab?lview="+val ,
		type: 'POST',
		cache: true,
		success: function(data) {},
		error: function(e) {
			console.log("Server failure! Is the server turned off?");
		}
	});
	//---------------------------------------
}

function requestshowing(address,type,cross_st){
	
	if(cross_st!=''){
		cross_st = ' ('+cross_st+')';
	}
	var __header_text = 'When would you like to visit'+address+'?';
	var __textarea_text = 'I would like to see'+address+'.';
	if($('#newmarketapi_detail').val() == '1'){
		__header_text = address;
		__textarea_text = address;
	}
	$('#requestshowingheader').html(__header_text);
	$('#requestshowingmsg').html(__textarea_text);
	$('#lstaddress').val(address);
	$.fancybox({
		href: '#requestShowing',
		width: 780,
		height:'auto',
		fitToView : false,
		autoSize : false,	
	});
	return false;
}
//
$( 'div.w4rsearch ul.TokensContainer,.listingscrollingMAP' ).live( 'mousewheel DOMMouseScroll', function (e) {
	var e0 = e.originalEvent,
		delta = e0.wheelDelta || -e0.detail;    
	this.scrollTop += ( delta < 0 ? 1 : -1 ) * 30;
	e.preventDefault();
});


// listing details popup 
$(document.body).on('click', '.plistAction li a.a' ,function(){
	$.fancybox({
		href: '#_listDeail',
		width: 780,
		height:'auto',
		fitToView : false,
		autoSize : false,	
	});
	return false;
});
// listing details popup 
$(document.body).on('click', '.loadmoremobile' ,function(){
	//Load the Other Listing Data Sections----------
	var morelistingid = $(this).attr('data-value'); 
	$('#listingslist_'+morelistingid).find('.cLoaderP').fadeIn(); //show loading element
        var form = $(this).parents('.w4rmainlistings').prev('form');
        //console.log(form.attr("class"));
        //listingsSearchForm_1
        //console.log(FrmId);
        FrmId = form.attr("id");
        $('#filterflag'+morelistingid).val('City');;
	$.ajax({
		url: "ajax_mobile_morelistings?"+$("#"+FrmId).serialize()+"&LMLM=1&morelistingid="+morelistingid+"&offset="+$('#loadmorelistingoffset_'+morelistingid).val()+"&limit="+$('#currentlimit_'+morelistingid).val()+"&currentwebpagename="+$('#currentwebpagename').val(),
		type: 'POST',
		cache: true,
		success: function(data) {
                        if(data==""){
                            $('#listingslist_'+morelistingid+' .loadmoremobile').hide();
                        }
			$('#loadmoremobile_'+morelistingid).append(data);
			incrementoffset = parseInt($('#loadmorelistingoffset_'+morelistingid).val()) + parseInt($('#currentlimit_'+morelistingid).val());
			console.log(incrementoffset);
			$('#loadmorelistingoffset_'+morelistingid).val(incrementoffset);
			$('.cLoaderP.a').hide();
                        setTimeout(function(){    
                            w4rlazyload();
                        }, 1);
		},
		error: function(e) {
			$('.cLoaderP.a').hide();
			console.log("Server failure! Is the server turned off?");
		}
	});
	//------------------
	return false;
});
// for mobile responsive  - WE NEED TO MAKE DIFFERNET LOGIC FOR THIS SO NO NEED FOR THESE LINES - CONSULT WITH ME SHAM
//dated: 8th July, 2019
// @shaam i make my changes to set listings view on ipad and iphone orientation. as we disscussed on phone > Dated above
// reff card link is this https://w4rteam.com/admin/space?card_id=1723 > Dated above

$(document).load($(window).bind("resize", checkPosition));
function checkPosition() {
   // if (window.matchMedia('(max-width: 767px)').matches) { // previously it has this condition  > Dated above
	var winWidth = $(window).width();
	if(winWidth < 765){ // forcefully make listing layout as details on mobile view 
		$('.w4rmainlistings .product-listing').addClass('listLayout');
		$('.w4rmainlistings .product-listing').removeClass('gridLayout');
    }else{
		$('.w4rlistings_widget').each(function(index, element) { 
            var elem = $(this).find('.listingHead .toggleBtn.active').attr('data-type');
			if(winWidth > 766 && elem == 'Gallery'){
				$(this).find('.product-listing').removeClass('listLayout');
				$(this).find('.product-listing').addClass('gridLayout');
			} else if(winWidth > 766 && elem == 'Detail'){
				$(this).find('.product-listing').addClass('listLayout');
				$(this).find('.product-listing').removeClass('gridLayout');
			}
        });
	}
	
	//else if($(window).width() > 766 && elem == 'Gallery'){// added this condtion for ipad tablet if user selected gallery view on ipad > Dated above
//		$('.product-listing').removeClass('listLayout');
//		$('.product-listing').addClass('gridLayout');
//        //...
//    } else if($(window).width() > 766 && elem == 'Detail'){ // added this condtion for ipad tablet if user selected details view on ipad > Dated above
//		$('.product-listing').addClass('listLayout');
//		$('.product-listing').removeClass('gridLayout');
//        //...
//    }
}
checkPosition();


//For Listings Sliders
//banner sliders 
setTimeout(function(){
	$('.sliderLoader_ > .cLoaderP').fadeOut();
	$('.sliderLoader_ > .row').css('visibility', 'visible');
	$('.sliderLoader_').removeClass('sliderLoader_');
}, 900);
function rebuilddatafrm(){
	var frmdata = document.getElementById('request');
	$('.popupFrmData').append(frmdata);
}

function loademptydatafrm(){
	//$('#request').wrapAll('<div class="_listCform" />') fasy
	var frmdata = document.getElementById('request');
	$('#no_ListingFound_div').prepend(frmdata);
	$('#requestshowingmsg').html('Please help me find a home just for me.');
}

function viewtabclick(cnt,view){
	
	$('#lview'+cnt).val(view);
	addMapSO(view,cnt);
	if($('#srhbtnclick_'+cnt).val()==''){
		$('#srhBtn_'+cnt).trigger('click');
		$('#srhbtnclick_'+cnt).val('');
	}else{
		$('#srhBtn_'+cnt).trigger('click');
	}
	
}

//fs custom multiselect widget starts
$(document).ready ( function () {
	$('.fsc-multiselect .ui-DropDown').bind('click', function(e) {
		if($(this).hasClass('ui-state-active')){
			$(this).removeClass('ui-state-active');
			$(this).next('.w4rdropdown_').hide();
			$('.fsBackdrop').remove();
		}else {
			$(this).addClass('ui-state-active');
			$(this).next('.w4rdropdown_').show();
			$(this).parent().append('<div class="fsBackdrop"></div>')
		}
    });
	$('.fsc-multiselect .multiSelectList li > i').bind('click', function(e) {	
	 
        $('.fsc-multiselect .multiSelectList li > i').attr('class', 'ico-down-arrow-thick');
		$('.fsc-multiselect .multiSelectList.sublist').slideUp();
		$('.fsc-multiselect .multiSelectList li').removeClass('dOpen');
		/*if ($(this).hasClass('ico-down-arrow-thick')){
				$(this).attr('class', 'ico-up-arrow-thick');
				$(this).parent('li').addClass('dOpen');
			}
        else{
            $(this).attr('class', 'ico-down-arrow-thick');
			$(this).parent('li').removeClass('dOpen');
		}
		
        $(this).parent('li').find('ul').each( function () {
			if($(this).is(':hidden'))
            $(this).slideDown();
        });*/
		if($(this).next('ul').is(':hidden')){
			$(this).next('ul').slideDown();
			$(this).attr('class', 'ico-up-arrow-thick');
			$(this).parent('li').addClass('dOpen');
		}
    });
	
	$('.subliststyle').bind('click', function(e) { //This condition if sub list select then auto select the parent Item
		//console.log($(this).val());
		curVal = $(this).val();
		if (curVal.indexOf("res_") >= 0){
			$("#resTypeCls").attr("checked", true);
			$("#resTypeCls").parent().addClass('active');
		}
		if (curVal.indexOf("Condo_") >= 0){
			$("#condoTypeCls").attr("checked", true);
			$("#condoTypeCls").parent().addClass('active');
		}
		if (curVal.indexOf("com_") >= 0){
			$("#comTypeCls").attr("checked", true);
			$("#comTypeCls").parent().addClass('active');
		}
		//console.log('click ho gaya..');
	});
	$('.fsc-multiselect .group-field input').on('change', function(e) {
		
        var set = false,
		$checkbox = $(this);
		//
		if(!$('.fsc-multiselect').hasClass('cat_multiSelect')){
			checkallSelected();
		}else{
			checkallSelected_cat($(this));
		}
		
        if ($checkbox.is(':checked'))
            set = true;
        $(this).parents('li').find('ul li').each( function () {
            var Input = $(this).find('input');
            Input.attr('checked', set);
			if(set == true){
				Input.parent().addClass('active');
				//Input.prop('disabled', false);
			}else {
				Input.parent().removeClass('active');
				//Input.prop('disabled', true); // DNT DISABLED THE CHECKBOX BECOZ IT WILL NOT GET IN SUBMIT REQUEST WHEN FORM SUBMIT - 01-09-2016 SHAM
			}
        });     
    });
	function checkallSelected(){
		var $activebox = $('.fsc-multiselect .ui-state-active').next('.ui-multiselect-menu.a').find('.multiSelectList.prnt').find('.group-field');
		var $txt = '';
		var checklength = $activebox.find('input:checked').length;
		var totallength = $activebox.find('input').length;
		setTimeout(function(){
			$activebox.find('input:checked').prop('disabled', false);
			console.log('checklength-->'+checklength);
			console.log('totallength-->'+totallength);
			if(checklength == totallength){
				$('.fsc-multiselect .ui-state-active').addClass('_allTypes');
			}else {
				$('.fsc-multiselect .ui-state-active').removeClass('_allTypes');
			}
			if(checklength == 1){
			//$activebox.find('input:checked').prop('disabled', true); // DNT DISABLED THE CHECKBOX BECOZ IT WILL NOT GET IN SUBMIT REQUEST WHEN FORM SUBMIT - 01-09-2016 SHAM
			}
			$activebox.each(function(index, element) {
				var selectVal = $(this).find('input:checked').attr('data-type');
				if(selectVal != undefined){
					$txt +='<span class="_'+selectVal+'">'+selectVal +'</span>, ';
					var _txt = $txt.replace(/,\s*$/, "");
					//console.log($txt)
					$('.fsc-multiselect .ui-state-active').find('span.m').html(_txt);
				}
				
            });
            
       }, 50);
	}
	
	
	function checkallSelected_cat(elem){
		//cat_li
		setTimeout(function(){
			var cat_li = $(elem).parents('.cat_g1').find('.cat_li');
			var phtml = '',_phtml='';
			
			$(cat_li).each(function(index, element) {
				var type 				= $(this).find('.cat_head').find('.group-field input:checked').val();
				var priceF 				= '';
				var priceT 				= '';
				var _price				= '';
				var _type				= '';
				
				//if($(this).find('.cat_head').find('.group-field input').is(':checked')){
					priceF 				= $(this).find('.cat_head').find('.PriceFromFS option:selected').text();
					priceT 				= $(this).find('.cat_head').find('.PriceToFS option:selected').text();
				//}
				console.log('priceF')
				console.log(priceF)
				var totalsub			= $(this).find('.sublist li input').length
				var totalsubChecked		= $(this).find('.sublist li input:checked').length
				var sublist				= $(this).find('.sublist li input:checked');
				
				var subArr 				= '';
				$(sublist).each(function(index, element) {
					var selectVal = $(this).next().text();
					if(selectVal != undefined){
						subArr += selectVal +', ';
					}
				});
				
				if(priceF != '' && priceT != ''){
					_price = '<span class="cat_price">('+priceF +' <span>To</span> '+priceT+')</span>'
				}
				
				if(priceF != '' && priceT == ''){
					_price = '<span class="cat_price">('+priceF +' <span>To</span> Any)</span>'
				}
				
				if(priceF == '' && priceT != ''){
					_price = '<span class="cat_price">(<span>Max Price</span> '+priceT+')</span>'
				}
				
				
				var _subArr = ' <span class="cat_items">('+subArr.replace(/,\s*$/, "")+')</span>';
				if(subArr == ''){
					_subArr = '';
				}
				if(totalsubChecked > 3){
					_subArr = ' <span class="cat_items">('+totalsubChecked+' Types)</span>';
				}
				if(totalsub == totalsubChecked ){
					_subArr = ' <span class="cat_items">(All)</span>';
				}
				
				
				//_subArr = '';
				if(type != undefined){
					_type = '<b>'+type+'</b>';
					phtml 	+= '<span class="catSType cat_'+type+'">'+_type+_price+_subArr+'</span>, ';
				}
				
				
			});
			_phtml 	= phtml.replace(/,\s*$/, "");
			$('.fsc-multiselect .ui-state-active').find('span.m').html(_phtml);
			
		},200);
		
		/*var $activebox 		= 	$('.fsc-multiselect .ui-state-active').next('.ui-multiselect-menu.a').find('.multiSelectList.prnt').find('.group-field');
		var $txt 			= 	'';
		var checklength 	= 	$activebox.find('input:checked').length;
		var totallength 	= 	$activebox.find('input').length;
		
		
		console.log('new fun')
		setTimeout(function(){
			
			$activebox.find('input:checked').prop('disabled', false);
			
			if(checklength == totallength){
				$('.fsc-multiselect .ui-state-active').addClass('_allTypes');
			}else {
				$('.fsc-multiselect .ui-state-active').removeClass('_allTypes');
			}
			
			$activebox.each(function(index, element) {
				var selectVal = $(this).find('input:checked').attr('data-type');
				var cat_head = $(this).parents('.cat_head');
				var sublistTotal = $(this).parents('.cat_li').find('.sublist').find('input').length;
				var sublistChecked = $(this).parents('.cat_li').find('.sublist').find('input:checked').length;
				var sublist = $(this).parents('.cat_li').find('.sublist').find('input:checked');
				var selectedHTML = '';
				if(sublistTotal == sublistChecked){
					selectedHTML = 'All';
				}else{
					$(sublist).each(function(index, element) {
                    	_selectedHTML = $(this).parent('label > span').text()+', ';
						var sublist_txt = _selectedHTML.replace(/,\s*$/, "");
						selectedHTML += sublist_txt;
                	});
				}
				
				var _fromPrice = $(cat_head).find('.PriceFromFS option:selected').text();
				var _toPrice = $(cat_head).find('.PriceToFS option:selected').text();
				var priceConcate = '<span class="priceConca">'+_fromPrice+' to '+_toPrice+'</span>';
				
				if(selectVal != undefined){
					$txt +='<span class="_'+selectVal+'">'+selectVal +' ('+selectedHTML+') '+priceConcate+'</span>, ';
					var _txt = $txt.replace(/,\s*$/, "");
					$('.fsc-multiselect .ui-state-active').find('span.m').html(_txt);
				}
            });
			
       }, 50);*/
	   
	}
	
	//cat_li
	//$(document.body).on('click', '.cat_li .sublist input' ,function(){
	$('.cat_li .sublist input').bind('click', function(e) {
		$(this).parents('.cat_li').find('.cat_head').find('.group-field input').prop('checked', true).parent().addClass('active');
		checkallSelected_cat($(this));
	});
	
	//priceSelctor
	$(document.body).on('change', '.cat_li .priceSelctor select' ,function(){
		$(this).parents('.cat_li').find('.cat_head').find('.group-field input').prop('checked', true).parent().addClass('active');
		checkallSelected_cat($(this));
	});
	
	$(document.body).on('click', '.fsc-multiselect .fsBackdrop' ,function(){
		$('.fsc-multiselect .ui-state-active').click();
	});
	
	
});

//function only for smartDevices
function makeCustom_searchType(){
	if($('html').hasClass('smartDevices')){
		$('.Scity').each(function(index, element) {
			var _selectType = '<div class="w4rfs_selectType"><span class="b"></span><i class="ico-down-arrow1 ico-xsmall"></i></div>';
			$('.w4rfs_selectType').remove();
			$(_selectType).insertAfter($(this).find('._selectType'));
			mobile_selectTypeFun($(this));
		});
			
	}
}
makeCustom_searchType();
function adjustSearchType(){
	if(!$('html').hasClass('smartDevices')){
		$('.w4rfs_selectType').remove();
	}
}
function mobile_selectTypeFun(elem){
	if($('html').hasClass('smartDevices')){
            var v = $(elem).find('._selectType option:selected').text();
            $(elem).find('.w4rfs_selectType span.b').html(v);
	}
}
$(window).resize(function(e) {
	makeCustom_searchType();
    adjustSearchType();
});

/*$(document.body).on('click', '.w4rfs_selectType' ,function(){
	$(this).prev('._selectType').click();
	alert('aa');
});*/

//refine your search
/*$(window).scroll(function() {
 	console.log('ofset top '+$('.listingSrhWidget').offset().top)
	console.log('scroll top '+$(window).scrollTop())
	$('.listings_limit_div > div').css('top',$(window).scrollTop()+'px')
});*/
//
function showListingslimit(){
	try{
		var aTop = $('.listingSrhWidget').offset().top;
		var c = $('.w4rmainlistings').offset().top /2
		var b = $('.w4rmainlistings').height() - c;
		var aa = $(window).scrollTop();
		if(aa>=aTop && aa<b){
			$('.listings_limit_div > div').addClass('_fixed');
			$('.listings_limit_div > div').removeClass('_absolute');
		}else if(aa>b){
			$('.listings_limit_div > div').removeClass('_fixed');
			$('.listings_limit_div > div').addClass('_absolute');
		}else{
		$('.listings_limit_div > div').removeClass('_fixed');
			$('.listings_limit_div > div').removeClass('_absolute');
		}
	}catch(err){}
}
$(window).scroll(function(){
    showListingslimit() 
});

$(document.body).on('click', '.listings_limit_div button' ,function(){
    $('html, body').animate({
        scrollTop: $('.listingSrhWidget').offset().top
    }, 200);
});
showListingslimit();
$(document).ready(function(e) {
	$('.multiSelectList.sublist').each(function(index, element) {
		var visibleListItems = $(this).find('li').not('.hide_unselected').length
		if(visibleListItems == 1){
			$(this).addClass('colCount1')
		}else{
			$(this).removeClass('colCount1')
		}
	});
});

//reset search 
function resetSearch(){
	var listingurl=window.location.href;
	var istingurlArr = listingurl.split('?');
    window.history.replaceState("", "", istingurlArr[0]);
	$('.clearSearch').hide();
	window.location.href = istingurlArr[0];
}
function show_resetSearch(){
	var listingurl=window.location.href;
	var istingurlArr = listingurl.split('?');
	if(istingurlArr[1]){
		$('.clearSearch').show();
	}else{
		$('.clearSearch').hide();
	}
}
show_resetSearch();


(function(e) {
    e.fn.validationEngineLanguage = function() {};
    e.validationEngineLanguage = {
        newLang: function() {
            e.validationEngineLanguage.allRules = {
                required: {
                    regex: "none",
                    alertText: "Please fill out this field",
                    alertTextCheckboxMultiple: "Please select an option",
                    alertTextCheckboxe: "This checkbox is required",
                    alertTextDateRange: "Both date range fields are required"
                },
                requiredInFunction: {
                    func: function(e, t, n, r) {
                        return e.val() == "test" ? true : false
                    },
                    alertText: "Field must equal test"
                },
                dateRange: {
                    regex: "none",
                    alertText: "Invalid ",
                    alertText2: "Date Range"
                },
                dateTimeRange: {
                    regex: "none",
                    alertText: "Invalid ",
                    alertText2: "Date Time Range"
                },
                minSize: {
                    regex: "none",
                    alertText: "Minimum ",
                    alertText2: " characters required"
                },
                maxSize: {
                    regex: "none",
                    alertText: "Maximum ",
                    alertText2: " characters allowed"
                },
                groupRequired: {
                    regex: "none",
                    alertText: "You must fill one of the following fields",
                    alertTextCheckboxMultiple: "Please select an option",
                    alertTextCheckboxe: "This checkbox is required"
                },
                min: {
                    regex: "none",
                    alertText: "Minimum value is "
                },
                max: {
                    regex: "none",
                    alertText: "Maximum value is "
                },
                past: {
                    regex: "none",
                    alertText: "Date prior to "
                },
                future: {
                    regex: "none",
                    alertText: "Date past "
                },
                maxCheckbox: {
                    regex: "none",
                    alertText: "Maximum ",
                    alertText2: " options allowed"
                },
                minCheckbox: {
                    regex: "none",
                    alertText: "Please select atleast",
                    alertText2: "GroupTag"
                },
                equals: {
                    regex: "none",
                    alertText: "Password does not match."
                },
                creditCard: {
                    regex: "none",
                    alertText: "Invalid credit card number"
                },
                phone: {
                    regex: /^([\+][0-9]{1,3}([ \.\-])?)?([\(][0-9]{1,6}[\)])?([0-9 \.\-]{1,32})(([A-Za-z \:]{1,11})?[0-9]{1,4}?)$/,
                    alertText: "Invalid phone number"
                },
                email: {
                    regex: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    alertText: "Invalid email address"
                },
				domain: {
                    regex: /^(?!:\/\/)([a-zA-Z0-9]+\.)?[a-zA-Z0-9][a-zA-Z0-9-]+\.[a-zA-Z]{2,6}?$/i,
                    alertText: "Invalid domain"
                },
                fullname: {
                    regex: /^([a-zA-Z]+[\'\,\.\-]?[a-zA-Z ]*)+[ ]([a-zA-Z]+[\'\,\.\-]?[a-zA-Z ]+)+$/,
                    alertText: "Must be first and last name"
                },
                zip: {
                    regex: /^\d{5}$|^\d{5}-\d{4}$/,
                    alertText: "Invalid zip format"
                },
                integer: {
                    regex: /^[\-\+]?\d+$/,
                    alertText: "Not a valid integer"
                },
                number: {
                    regex: /^[\-\+]?((([0-9]{1,3})([,][0-9]{3})*)|([0-9]+))?([\.]([0-9]+))?$/,
                    alertText: "Invalid floating decimal number"
                },
                date: {
                    func: function(e) {
                        var t = new RegExp(/^(\d{4})[\/\-\.](0?[1-9]|1[012])[\/\-\.](0?[1-9]|[12][0-9]|3[01])$/);
                        var n = t.exec(e.val());
                        if (n == null) return false;
                        var r = n[1];
                        var i = n[2] * 1;
                        var s = n[3] * 1;
                        var o = new Date(r, i - 1, s);
                        return o.getFullYear() == r && o.getMonth() == i - 1 && o.getDate() == s
                    },
                    alertText: "Invalid date, must be in YYYY-MM-DD format"
                },
                ipv4: {
                    regex: /^((([01]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))[.]){3}(([0-1]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))$/,
                    alertText: "Invalid IP address"
                },
                url: {
                    regex: /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
                    alertText: "Invalid URL"
                },
				/*urls: {
                    regex: /^([a-zA-Z0-9]+(\.[a-zA-Z0-9]+)+.*)$/i,
                    alertText: "Invalid URL"
                },*/
                onlyNumberSp: {
                    regex: /^[0-9\ ]+$/,
                    alertText: "Numbers only"
                },
                onlyLetterSp: {
                    regex: /^[a-zA-Z\ \']+$/,
                    alertText: "Letters only"
                },
                onlyLetterAccentSp: {
                    regex: /^[a-z\u00C0-\u017F\ ]+$/i,
                    alertText: "Letters only (accents allowed)"
                },
                onlyLetterNumber: {
                    regex: /^[0-9a-zA-Z]+$/,
                    alertText: "No special characters allowed"
                },
                ajaxUserCall: {
                    url: "ajaxValidateFieldUser",
                    extraData: "name=eric",
                    alertText: "This user is already taken",
                    alertTextLoad: "Validating, please wait"
                },
                ajaxUserCallPhp: {
                    url: "phpajax/ajaxValidateFieldUser.php",
                    extraData: "name=eric",
                    alertTextOk: "This username is available",
                    alertText: "This user is already taken",
                    alertTextLoad: "Validating, please wait"
                },
                ajaxNameCall: {
                    url: "ajaxValidateFieldName",
                    alertText: "This name is already taken",
                    alertTextOk: "This name is available",
                    alertTextLoad: "Validating, please wait"
                },
                ajaxNameCallPhp: {
                    url: "phpajax/ajaxValidateFieldName.php",
                    alertText: "This name is already taken",
                    alertTextLoad: "Validating, please wait"
                },
                validate2fields: {
                    alertText: "Please input HELLO"
                },
                dateFormat: {
                    regex: /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(?:(?:0?[1-9]|1[0-2])(\/|-)(?:0?[1-9]|1\d|2[0-8]))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(0?2(\/|-)29)(\/|-)(?:(?:0[48]00|[13579][26]00|[2468][048]00)|(?:\d\d)?(?:0[48]|[2468][048]|[13579][26]))$/,
                    alertText: "Invalid Date"
                },
                dateTimeFormat: {
                    regex: /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1}$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^((1[012]|0?[1-9]){1}\/(0?[1-9]|[12][0-9]|3[01]){1}\/\d{2,4}\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1})$/,
                    alertText: "Invalid Date or Date Format",
                    alertText2: "Expected Format: ",
                    alertText3: "mm/dd/yyyy hh:mm:ss AM|PM or ",
                    alertText4: "yyyy-mm-dd hh:mm:ss AM|PM"
                }
            }
        }
    };
    e.validationEngineLanguage.newLang()
})(jQuery);
(function(e) {
    "use strict";
    var t = {
        init: function(n) {
            var r = this;
            if (!r.data("jqv") || r.data("jqv") == null) {
                n = t._saveOptions(r, n);
                e(document).on("click", ".formError", function() {
                    e(this).fadeOut(150, function() {
                        e(this).closest(".formError").remove()
                    })
                })
            }
            return this
        },
        attach: function(n) {
            var r = this;
            var i;
            if (n) i = t._saveOptions(r, n);
            else i = r.data("jqv");
            i.validateAttribute = r.find("[data-validation-engine*=validate]").length ? "data-validation-engine" : "class";
            if (i.binded) {
                r.on(i.validationEventTrigger, "[" + i.validateAttribute + "*=validate]:not([type=checkbox]):not([type=radio]):not(.datepicker)", t._onFieldEvent);
                r.on("click", "[" + i.validateAttribute + "*=validate][type=checkbox],[" + i.validateAttribute + "*=validate][type=radio]", t._onFieldEvent);
                r.on(i.validationEventTrigger, "[" + i.validateAttribute + "*=validate][class*=datepicker]", {
                    delay: 300
                }, t._onFieldEvent)
            }
            if (i.autoPositionUpdate) {
                e(window).bind("resize", {
                    noAnimation: true,
                    formElem: r
                }, t.updatePromptsPosition)
            }
            r.on("click", "a[data-validation-engine-skip], a[class*='validate-skip'], button[data-validation-engine-skip], button[class*='validate-skip'], input[data-validation-engine-skip], input[class*='validate-skip']", t._submitButtonClick);
            r.removeData("jqv_submitButton");
            r.on("submit", t._onSubmitEvent);
            return this
        },
        detach: function() {
            var n = this;
            var r = n.data("jqv");
            n.off(r.validationEventTrigger, "[" + r.validateAttribute + "*=validate]:not([type=checkbox]):not([type=radio]):not(.datepicker)", t._onFieldEvent);
            n.off("click", "[" + r.validateAttribute + "*=validate][type=checkbox],[" + r.validateAttribute + "*=validate][type=radio]", t._onFieldEvent);
            n.off(r.validationEventTrigger, "[" + r.validateAttribute + "*=validate][class*=datepicker]", t._onFieldEvent);
            n.off("submit", t._onSubmitEvent);
            n.removeData("jqv");
            n.off("click", "a[data-validation-engine-skip], a[class*='validate-skip'], button[data-validation-engine-skip], button[class*='validate-skip'], input[data-validation-engine-skip], input[class*='validate-skip']", t._submitButtonClick);
            n.removeData("jqv_submitButton");
            if (r.autoPositionUpdate) e(window).off("resize", t.updatePromptsPosition);
            return this
        },
        validate: function(n) {
            var r = e(this);
            var i = null;
            var s;
            if (r.is("form") || r.hasClass("validationEngineContainer")) {
                if (r.hasClass("validating")) {
                    return false
                } else {
                    r.addClass("validating");
                    if (n) s = t._saveOptions(r, n);
                    else s = r.data("jqv");
                    var i = t._validateFields(this);
                    setTimeout(function() {
                        r.removeClass("validating")
                    }, 100);
                    if (i && s.onSuccess) {
                        s.onSuccess()
                    } else if (!i && s.onFailure) {
                        s.onFailure()
                    }
                }
            } else if (r.is("form") || r.hasClass("validationEngineContainer")) {
                r.removeClass("validating")
            } else {
                var o = r.closest("form, .validationEngineContainer");
                s = o.data("jqv") ? o.data("jqv") : e.validationEngine.defaults;
                i = t._validateField(r, s);
                if (i && s.onFieldSuccess) s.onFieldSuccess();
                else if (s.onFieldFailure && s.InvalidFields.length > 0) {
                    s.onFieldFailure()
                }
                return !i
            }
            if (s.onValidationComplete) {
                return !!s.onValidationComplete(o, i)
            }
            return i
        },
        updatePromptsPosition: function(n) {
            if (n && this == window) {
                var r = n.data.formElem;
                var i = n.data.noAnimation
            } else var r = e(this.closest("form, .validationEngineContainer"));
            var s = r.data("jqv");
            if (!s) s = t._saveOptions(r, s);
            r.find("[" + s.validateAttribute + "*=validate]").not(":disabled").each(function() {
                var n = e(this);
                if (s.prettySelect && n.is(":hidden")) n = r.find("#" + s.usePrefix + n.attr("id") + s.useSuffix);
                var o = t._getPrompt(n);
                var u = e(o).find(".formErrorContent").html();
                if (o) t._updatePrompt(n, e(o), u, undefined, false, s, i)
            });
            return this
        },
        showPrompt: function(e, n, r, i) {
            var s = this.closest("form, .validationEngineContainer");
            var o = s.data("jqv");
            if (!o) o = t._saveOptions(this, o);
            if (r) o.promptPosition = r;
            o.showArrow = i == true;
            t._showPrompt(this, e, n, false, o);
            return this
        },
        hide: function() {
            var n = e(this).closest("form, .validationEngineContainer");
            var r = n.data("jqv");
            if (!r) r = t._saveOptions(n, r);
            var i = r && r.fadeDuration ? r.fadeDuration : .3;
            var s;
            if (e(this).is("form") || e(this).hasClass("validationEngineContainer")) {
                s = "parentForm" + t._getClassName(e(this).attr("id"))
            } else {
                s = t._getClassName(e(this).attr("id")) + "formError"
            }
            e("." + s).fadeTo(i, 0, function() {
                e(this).closest(".formError").remove()
            });
            return this
        },
        hideAll: function() {
            var t = this;
            var n = t.data("jqv");
            var r = n ? n.fadeDuration : 300;
            e(".formError").fadeTo(r, 0, function() {
                e(this).closest(".formError").remove()
            });
            return this
        },
        _onFieldEvent: function(n) {
            var r = e(this);
            var i = r.closest("form, .validationEngineContainer");
            var s = i.data("jqv");
            if (!s) s = t._saveOptions(i, s);
            s.eventTrigger = "field";
            if (s.notEmpty == true) {
                if (r.val().length > 0) {
                    window.setTimeout(function() {
                        t._validateField(r, s)
                    }, n.data ? n.data.delay : 0)
                }
            } else {
                window.setTimeout(function() {
                    t._validateField(r, s)
                }, n.data ? n.data.delay : 0)
            }
        },
        _onSubmitEvent: function() {
            var n = e(this);
            var r = n.data("jqv");
            if (n.data("jqv_submitButton")) {
                var i = e("#" + n.data("jqv_submitButton"));
                if (i) {
                    if (i.length > 0) {
                        if (i.hasClass("validate-skip") || i.attr("data-validation-engine-skip") == "true") return true
                    }
                }
            }
            r.eventTrigger = "submit";
            var s = t._validateFields(n);
            if (s && r.ajaxFormValidation) {
                t._validateFormWithAjax(n, r);
                return false
            }
            if (r.onValidationComplete) {
                return !!r.onValidationComplete(n, s)
            }
            return s
        },
        _checkAjaxStatus: function(t) {
            var n = true;
            e.each(t.ajaxValidCache, function(e, t) {
                if (!t) {
                    n = false;
                    return false
                }
            });
            return n
        },
        _checkAjaxFieldStatus: function(e, t) {
            return t.ajaxValidCache[e] == true
        },
        _validateFields: function(n) {
            var r = n.data("jqv");
            var i = false;
            n.trigger("jqv.form.validating");
            var s = null;
            n.find("[" + r.validateAttribute + "*=validate]").not(":disabled").each(function() {
                var o = e(this);
                var u = [];
                if (e.inArray(o.attr("name"), u) < 0) {
                    i |= t._validateField(o, r);
                    if (i && s == null)
                        if (o.is(":hidden") && r.prettySelect) s = o = n.find("#" + r.usePrefix + t._jqSelector(o.attr("id")) + r.useSuffix);
                        else {
                            if (o.data("jqv-prompt-at") instanceof jQuery) {
                                o = o.data("jqv-prompt-at")
                            } else if (o.data("jqv-prompt-at")) {
                                o = e(o.data("jqv-prompt-at"))
                            }
                            s = o
                        }
                    if (r.doNotShowAllErrosOnSubmit) return false;
                    u.push(o.attr("name"));
                    if (r.showOneMessage == true && i) {
                        return false
                    }
                }
            });
            n.trigger("jqv.form.result", [i]);
            if (i) {
                if (r.scroll) {
                    var o = s.offset().top;
                    var u = s.offset().left;
                    var a = r.promptPosition;
                    if (typeof a == "string" && a.indexOf(":") != -1) a = a.substring(0, a.indexOf(":"));
                    if (a != "bottomRight" && a != "bottomLeft") {
                        var f = t._getPrompt(s);
                        if (f) {
                            o = f.offset().top
                        }
                    }
                    if (r.scrollOffset) {
                        o -= r.scrollOffset
                    }
                    if (r.isOverflown) {
                        var l = e(r.overflownDIV);
                        if (!l.length) return false;
                        var c = l.scrollTop();
                        var h = -parseInt(l.offset().top);
                        o += c + h - 5;
                        var p = e(r.overflownDIV).filter(":not(:animated)");
                        p.animate({
                            scrollTop: o
                        }, 1100, function() {
                            if (r.focusFirstField) s.focus()
                        })
                    } else {
                        e("html, body").animate({
                            scrollTop: o
                        }, 1100, function() {
                            if (r.focusFirstField) s.focus()
                        });
                        e("html, body").animate({
                            scrollLeft: u
                        }, 1100)
                    }
                } else if (r.focusFirstField) s.focus();
                return false
            }
            return true
        },
        _validateFormWithAjax: function(n, r) {
            var i = n.serialize();
            var s = r.ajaxFormValidationMethod ? r.ajaxFormValidationMethod : "GET";
            var o = r.ajaxFormValidationURL ? r.ajaxFormValidationURL : n.attr("action");
            var u = r.dataType ? r.dataType : "json";
            e.ajax({
                type: s,
                url: o,
                cache: false,
                dataType: u,
                data: i,
                form: n,
                methods: t,
                options: r,
                beforeSend: function() {
                    return r.onBeforeAjaxFormValidation(n, r)
                },
                error: function(e, n) {
                    if (r.onFailure) {
                        r.onFailure(e, n)
                    } else {
                        t._ajaxError(e, n)
                    }
                },
                success: function(i) {
                    if (u == "json" && i !== true) {
                        var s = false;
                        for (var o = 0; o < i.length; o++) {
                            var a = i[o];
                            var f = a[0];
                            var l = e(e("#" + f)[0]);
                            if (l.length == 1) {
                                var c = a[2];
                                if (a[1] == true) {
                                    if (c == "" || !c) {
                                        t._closePrompt(l)
                                    } else {
                                        if (r.allrules[c]) {
                                            var h = r.allrules[c].alertTextOk;
                                            if (h) c = h
                                        }
                                        if (r.showPrompts) t._showPrompt(l, c, "pass", false, r, true)
                                    }
                                } else {
                                    s |= true;
                                    if (r.allrules[c]) {
                                        var h = r.allrules[c].alertText;
                                        if (h) c = h
                                    }
                                    if (r.showPrompts) t._showPrompt(l, c, "", false, r, true)
                                }
                            }
                        }
                        r.onAjaxFormComplete(!s, n, i, r)
                    } else r.onAjaxFormComplete(true, n, i, r)
                }
            })
        },
        _validateField: function(n, r, i) {
            if (!n.attr("id")) {
                n.attr("id", "form-validation-field-" + e.validationEngine.fieldIdCounter);
                ++e.validationEngine.fieldIdCounter
            }
            if (n.hasClass(r.ignoreFieldsWithClass)) return false;
            if (!r.validateNonVisibleFields && (n.is(":hidden") && !r.prettySelect || n.parent().is(":hidden"))) return false;
            var s = n.attr(r.validateAttribute);
            var o = /validate\[(.*)\]/.exec(s);
            if (!o) return false;
            var u = o[1];
            var a = u.split(/\[|,|\]/);
            var f = false;
            var l = n.attr("name");
            var c = "";
            var h = "";
            var p = false;
            var d = false;
            r.isError = false;
            r.showArrow = true;
            if (r.maxErrorsPerField > 0) {
                d = true
            }
            var v = e(n.closest("form, .validationEngineContainer"));
            for (var m = 0; m < a.length; m++) {
                a[m] = a[m].replace(" ", "");
                if (a[m] === "") {
                    delete a[m]
                }
            }
            for (var m = 0, g = 0; m < a.length; m++) {
                if (d && g >= r.maxErrorsPerField) {
                    if (!p) {
                        var y = e.inArray("required", a);
                        p = y != -1 && y >= m
                    }
                    break
                }
                var b = undefined;
                switch (a[m]) {
                    case "required":
                        p = true;
                        b = t._getErrorMessage(v, n, a[m], a, m, r, t._required);
                        break;
                    case "custom":
                        b = t._getErrorMessage(v, n, a[m], a, m, r, t._custom);
                        break;
                    case "groupRequired":
                        var w = "[" + r.validateAttribute + "*=" + a[m + 1] + "]";
                        var E = v.find(w).eq(0);
                        if (E[0] != n[0]) {
                            t._validateField(E, r, i);
                            r.showArrow = true
                        }
                        b = t._getErrorMessage(v, n, a[m], a, m, r, t._groupRequired);
                        if (b) p = true;
                        r.showArrow = false;
                        break;
                    case "ajax":
                        b = t._ajax(n, a, m, r);
                        if (b) {
                            h = "load"
                        }
                        break;
                    case "minSize":
                        b = t._getErrorMessage(v, n, a[m], a, m, r, t._minSize);
                        break;
                    case "maxSize":
                        b = t._getErrorMessage(v, n, a[m], a, m, r, t._maxSize);
                        break;
                    case "min":
                        b = t._getErrorMessage(v, n, a[m], a, m, r, t._min);
                        break;
                    case "max":
                        b = t._getErrorMessage(v, n, a[m], a, m, r, t._max);
                        break;
                    case "past":
                        b = t._getErrorMessage(v, n, a[m], a, m, r, t._past);
                        break;
                    case "future":
                        b = t._getErrorMessage(v, n, a[m], a, m, r, t._future);
                        break;
                    case "dateRange":
                        var w = "[" + r.validateAttribute + "*=" + a[m + 1] + "]";
                        r.firstOfGroup = v.find(w).eq(0);
                        r.secondOfGroup = v.find(w).eq(1);
                        if (r.firstOfGroup[0].value || r.secondOfGroup[0].value) {
                            b = t._getErrorMessage(v, n, a[m], a, m, r, t._dateRange)
                        }
                        if (b) p = true;
                        r.showArrow = false;
                        break;
                    case "dateTimeRange":
                        var w = "[" + r.validateAttribute + "*=" + a[m + 1] + "]";
                        r.firstOfGroup = v.find(w).eq(0);
                        r.secondOfGroup = v.find(w).eq(1);
                        if (r.firstOfGroup[0].value || r.secondOfGroup[0].value) {
                            b = t._getErrorMessage(v, n, a[m], a, m, r, t._dateTimeRange)
                        }
                        if (b) p = true;
                        r.showArrow = false;
                        break;
                    case "maxCheckbox":
                        n = e(v.find("input[name='" + l + "']"));
                        b = t._getErrorMessage(v, n, a[m], a, m, r, t._maxCheckbox);
                        break;
                    case "minCheckbox":
                        n = e(v.find("input[name='" + l + "']"));
                        b = t._getErrorMessage(v, n, a[m], a, m, r, t._minCheckbox);
                        break;
                    case "equals":
                        b = t._getErrorMessage(v, n, a[m], a, m, r, t._equals);
                        break;
                    case "funcCall":
                        b = t._getErrorMessage(v, n, a[m], a, m, r, t._funcCall);
                        break;
                    case "creditCard":
                        b = t._getErrorMessage(v, n, a[m], a, m, r, t._creditCard);
                        break;
                    case "condRequired":
                        b = t._getErrorMessage(v, n, a[m], a, m, r, t._condRequired);
                        if (b !== undefined) {
                            p = true
                        }
                        break;
                    case "funcCallRequired":
                        b = t._getErrorMessage(v, n, a[m], a, m, r, t._funcCallRequired);
                        if (b !== undefined) {
                            p = true
                        }
                        break;
                    default:
                }
                var S = false;
                if (typeof b == "object") {
                    switch (b.status) {
                        case "_break":
                            S = true;
                            break;
                        case "_error":
                            b = b.message;
                            break;
                        case "_error_no_prompt":
                            return true;
                            break;
                        default:
                            break
                    }
                }
                if (m == 0 && u.indexOf("funcCallRequired") == 0 && b !== undefined) {
                    c += b + "<br/>";
                    r.isError = true;
                    g++;
                    S = true
                }
                if (S) {
                    break
                }
                if (typeof b == "string") {
                    c += b + "<br/>";
                    r.isError = true;
                    g++
                }
            }
            if (!p && !n.val() && n.val().length < 1 && e.inArray("equals", a) < 0) r.isError = false;
            var x = n.prop("type");
            var T = n.data("promptPosition") || r.promptPosition;
            if ((x == "radio" || x == "checkbox") && v.find("input[name='" + l + "']").size() > 1) {
                if (T === "inline") {
                    n = e(v.find("input[name='" + l + "'][type!=hidden]:last"))
                } else {
                    n = e(v.find("input[name='" + l + "'][type!=hidden]:first"))
                }
                r.showArrow = r.showArrowOnRadioAndCheckbox
            }
            if (n.is(":hidden") && r.prettySelect) {
                n = v.find("#" + r.usePrefix + t._jqSelector(n.attr("id")) + r.useSuffix)
            }
            if (r.isError && r.showPrompts) {
                t._showPrompt(n, c, h, false, r)
            } else {
                if (!f) t._closePrompt(n)
            }
            if (!f) {
                n.trigger("jqv.field.result", [n, r.isError, c])
            }
            var N = e.inArray(n[0], r.InvalidFields);
            if (N == -1) {
                if (r.isError) r.InvalidFields.push(n[0])
            } else if (!r.isError) {
                r.InvalidFields.splice(N, 1)
            }
            t._handleStatusCssClasses(n, r);
            if (r.isError && r.onFieldFailure) r.onFieldFailure(n);
            if (!r.isError && r.onFieldSuccess) r.onFieldSuccess(n);
            return r.isError
        },
        _handleStatusCssClasses: function(e, t) {
            if (t.addSuccessCssClassToField) e.removeClass(t.addSuccessCssClassToField);
            if (t.addFailureCssClassToField) e.removeClass(t.addFailureCssClassToField);
            if (t.addSuccessCssClassToField && !t.isError) e.addClass(t.addSuccessCssClassToField);
            if (t.addFailureCssClassToField && t.isError) e.addClass(t.addFailureCssClassToField)
        },
        _getErrorMessage: function(n, r, i, s, o, u, a) {
            var f = jQuery.inArray(i, s);
            if (i === "custom" || i === "funcCall" || i === "funcCallRequired") {
                var l = s[f + 1];
                i = i + "[" + l + "]";
                delete s[f]
            }
            var c = i;
            var h = r.attr("data-validation-engine") ? r.attr("data-validation-engine") : r.attr("class");
            var p = h.split(" ");
            var d;
            if (i == "future" || i == "past" || i == "maxCheckbox" || i == "minCheckbox") {
                d = a(n, r, s, o, u)
            } else {
                d = a(r, s, o, u)
            }
            if (d != undefined) {
                var v = t._getCustomErrorMessage(e(r), p, c, u);
                if (v) d = v
            }
            return d
        },
        _getCustomErrorMessage: function(e, n, r, i) {
            var s = false;
            var o = /^custom\[.*\]$/.test(r) ? t._validityProp["custom"] : t._validityProp[r];
            if (o != undefined) {
                s = e.attr("data-errormessage-" + o);
                if (s != undefined) return s
            }
            s = e.attr("data-errormessage");
            if (s != undefined) return s;
            var u = "#" + e.attr("id");
            if (typeof i.custom_error_messages[u] != "undefined" && typeof i.custom_error_messages[u][r] != "undefined") {
                s = i.custom_error_messages[u][r]["message"]
            } else if (n.length > 0) {
                for (var a = 0; a < n.length && n.length > 0; a++) {
                    var f = "." + n[a];
                    if (typeof i.custom_error_messages[f] != "undefined" && typeof i.custom_error_messages[f][r] != "undefined") {
                        s = i.custom_error_messages[f][r]["message"];
                        break
                    }
                }
            }
            if (!s && typeof i.custom_error_messages[r] != "undefined" && typeof i.custom_error_messages[r]["message"] != "undefined") {
                s = i.custom_error_messages[r]["message"]
            }
            return s
        },
        _validityProp: {
            required: "value-missing",
            custom: "custom-error",
            groupRequired: "value-missing",
            ajax: "custom-error",
            minSize: "range-underflow",
            maxSize: "range-overflow",
            min: "range-underflow",
            max: "range-overflow",
            past: "type-mismatch",
            future: "type-mismatch",
            dateRange: "type-mismatch",
            dateTimeRange: "type-mismatch",
            maxCheckbox: "range-overflow",
            minCheckbox: "range-underflow",
            equals: "pattern-mismatch",
            funcCall: "custom-error",
            funcCallRequired: "custom-error",
            creditCard: "pattern-mismatch",
            condRequired: "value-missing"
        },
        _required: function(t, n, r, i, s) {
            switch (t.prop("type")) {
                case "radio":
                case "checkbox":
                    if (s) {
                        if (!t.prop("checked")) {
                            return i.allrules[n[r]].alertTextCheckboxMultiple
                        }
                        break
                    }
                    var o = t.closest("form, .validationEngineContainer");
                    var u = t.attr("name");
                    if (o.find("input[name='" + u + "']:checked").size() == 0) {
                        if (o.find("input[name='" + u + "']:visible").size() == 1) return i.allrules[n[r]].alertTextCheckboxe;
                        else return i.allrules[n[r]].alertTextCheckboxMultiple
                    }
                    break;
                case "text":
                case "password":
                case "textarea":
                case "file":
                case "select-one":
                case "select-multiple":
                default:
                    var a = e.trim(t.val());
                    var f = e.trim(t.attr("data-validation-placeholder"));
                    var l = e.trim(t.attr("placeholder"));
                    if (!a || f && a == f || l && a == l) {
                        return i.allrules[n[r]].alertText
                    }
                    break
            }
        },
        _groupRequired: function(n, r, i, s) {
            var o = "[" + s.validateAttribute + "*=" + r[i + 1] + "]";
            var u = false;
            n.closest("form, .validationEngineContainer").find(o).each(function() {
                if (!t._required(e(this), r, i, s)) {
                    u = true;
                    return false
                }
            });
            if (!u) {
                return s.allrules[r[i]].alertText
            }
        },
        _custom: function(e, t, n, r) {
            var i = t[n + 1];
            var s = r.allrules[i];
            var o;
            if (!s) {
                alert("jqv:custom rule not found - " + i);
                return
            }
            if (s["regex"]) {
                var u = s.regex;
                if (!u) {
                    alert("jqv:custom regex not found - " + i);
                    return
                }
                var a = new RegExp(u);
                if (!a.test(e.val())) return r.allrules[i].alertText
            } else if (s["func"]) {
                o = s["func"];
                if (typeof o !== "function") {
                    alert("jqv:custom parameter 'function' is no function - " + i);
                    return
                }
                if (!o(e, t, n, r)) return r.allrules[i].alertText
            } else {
                alert("jqv:custom type not allowed " + i);
                return
            }
        },
        _funcCall: function(e, t, n, r) {
            var i = t[n + 1];
            var s;
            if (i.indexOf(".") > -1) {
                var o = i.split(".");
                var u = window;
                while (o.length) {
                    u = u[o.shift()]
                }
                s = u
            } else s = window[i] || r.customFunctions[i];
            if (typeof s == "function") return s(e, t, n, r)
        },
        _funcCallRequired: function(e, n, r, i) {
            return t._funcCall(e, n, r, i)
        },
        _equals: function(t, n, r, i) {
            var s = n[r + 1];
            if (t.val() != e("#" + s).val()) return i.allrules.equals.alertText
        },
        _maxSize: function(e, t, n, r) {
            var i = t[n + 1];
            var s = e.val().length;
            if (s > i) {
                var o = r.allrules.maxSize;
                return o.alertText + i + o.alertText2
            }
        },
        _minSize: function(e, t, n, r) {
            var i = t[n + 1];
            var s = e.val().length;
            if (s < i) {
                var o = r.allrules.minSize;
                return o.alertText + i + o.alertText2
            }
        },
        _min: function(e, t, n, r) {
            var i = parseFloat(t[n + 1]);
            var s = parseFloat(e.val());
            if (s < i) {
                var o = r.allrules.min;
                if (o.alertText2) return o.alertText + i + o.alertText2;
                return o.alertText + i
            }
        },
        _max: function(e, t, n, r) {
            var i = parseFloat(t[n + 1]);
            var s = parseFloat(e.val());
            if (s > i) {
                var o = r.allrules.max;
                if (o.alertText2) return o.alertText + i + o.alertText2;
                return o.alertText + i
            }
        },
        _past: function(n, r, i, s, o) {
            var u = i[s + 1];
            var a = e(n.find("*[name='" + u.replace(/^#+/, "") + "']"));
            var f;
            if (u.toLowerCase() == "now") {
                f = new Date
            } else if (undefined != a.val()) {
                if (a.is(":disabled")) return;
                f = t._parseDate(a.val())
            } else {
                f = t._parseDate(u)
            }
            var l = t._parseDate(r.val());
            if (l > f) {
                var c = o.allrules.past;
                if (c.alertText2) return c.alertText + t._dateToString(f) + c.alertText2;
                return c.alertText + t._dateToString(f)
            }
        },
        _future: function(n, r, i, s, o) {
            var u = i[s + 1];
            var a = e(n.find("*[name='" + u.replace(/^#+/, "") + "']"));
            var f;
            if (u.toLowerCase() == "now") {
                f = new Date
            } else if (undefined != a.val()) {
                if (a.is(":disabled")) return;
                f = t._parseDate(a.val())
            } else {
                f = t._parseDate(u)
            }
            var l = t._parseDate(r.val());
            if (l < f) {
                var c = o.allrules.future;
                if (c.alertText2) return c.alertText + t._dateToString(f) + c.alertText2;
                return c.alertText + t._dateToString(f)
            }
        },
        _isDate: function(e) {
            var t = new RegExp(/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(?:(?:0?[1-9]|1[0-2])(\/|-)(?:0?[1-9]|1\d|2[0-8]))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(0?2(\/|-)29)(\/|-)(?:(?:0[48]00|[13579][26]00|[2468][048]00)|(?:\d\d)?(?:0[48]|[2468][048]|[13579][26]))$/);
            return t.test(e)
        },
        _isDateTime: function(e) {
            var t = new RegExp(/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1}$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^((1[012]|0?[1-9]){1}\/(0?[1-9]|[12][0-9]|3[01]){1}\/\d{2,4}\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1})$/);
            return t.test(e)
        },
        _dateCompare: function(e, t) {
            return new Date(e.toString()) < new Date(t.toString())
        },
        _dateRange: function(e, n, r, i) {
            if (!i.firstOfGroup[0].value && i.secondOfGroup[0].value || i.firstOfGroup[0].value && !i.secondOfGroup[0].value) {
                return i.allrules[n[r]].alertText + i.allrules[n[r]].alertText2
            }
            if (!t._isDate(i.firstOfGroup[0].value) || !t._isDate(i.secondOfGroup[0].value)) {
                return i.allrules[n[r]].alertText + i.allrules[n[r]].alertText2
            }
            if (!t._dateCompare(i.firstOfGroup[0].value, i.secondOfGroup[0].value)) {
                return i.allrules[n[r]].alertText + i.allrules[n[r]].alertText2
            }
        },
        _dateTimeRange: function(e, n, r, i) {
            if (!i.firstOfGroup[0].value && i.secondOfGroup[0].value || i.firstOfGroup[0].value && !i.secondOfGroup[0].value) {
                return i.allrules[n[r]].alertText + i.allrules[n[r]].alertText2
            }
            if (!t._isDateTime(i.firstOfGroup[0].value) || !t._isDateTime(i.secondOfGroup[0].value)) {
                return i.allrules[n[r]].alertText + i.allrules[n[r]].alertText2
            }
            if (!t._dateCompare(i.firstOfGroup[0].value, i.secondOfGroup[0].value)) {
                return i.allrules[n[r]].alertText + i.allrules[n[r]].alertText2
            }
        },
        _maxCheckbox: function(e, t, n, r, i) {
            var s = n[r + 1];
            var o = t.attr("name");
            var u = e.find("input[name='" + o + "']:checked").size();
            if (u > s) {
                i.showArrow = false;
                if (i.allrules.maxCheckbox.alertText2) return i.allrules.maxCheckbox.alertText + " " + s + " " + i.allrules.maxCheckbox.alertText2;
                return i.allrules.maxCheckbox.alertText
            }
        },
        _minCheckbox: function(e, t, n, r, i) {
            var s = n[r + 1];
            var o = t.attr("name");
            var u = e.find("input[name='" + o + "']:checked").size();
            if (u < s) {
                i.showArrow = false;
                return i.allrules.minCheckbox.alertText + " " + s + " " + i.allrules.minCheckbox.alertText2
            }
        },
        _creditCard: function(e, t, n, r) {
            var i = false,
                s = e.val().replace(/ +/g, "").replace(/-+/g, "");
            var o = s.length;
            if (o >= 14 && o <= 16 && parseInt(s) > 0) {
                var u = 0,
                    n = o - 1,
                    a = 1,
                    f, l = new String;
                do {
                    f = parseInt(s.charAt(n));
                    l += a++ % 2 == 0 ? f * 2 : f
                } while (--n >= 0);
                for (n = 0; n < l.length; n++) {
                    u += parseInt(l.charAt(n))
                }
                i = u % 10 == 0
            }
            if (!i) return r.allrules.creditCard.alertText
        },
        _ajax: function(n, r, i, s) {
            var o = r[i + 1];
            var u = s.allrules[o];
            var a = u.extraData;
            var f = u.extraDataDynamic;
            var l = {
                fieldId: n.attr("id"),
                fieldValue: n.val()
            };
            if (typeof a === "object") {
                e.extend(l, a)
            } else if (typeof a === "string") {
                var c = a.split("&");
                for (var i = 0; i < c.length; i++) {
                    var h = c[i].split("=");
                    if (h[0] && h[0]) {
                        l[h[0]] = h[1]
                    }
                }
            }
            if (f) {
                var p = [];
                var d = String(f).split(",");
                for (var i = 0; i < d.length; i++) {
                    var v = d[i];
                    if (e(v).length) {
                        var m = n.closest("form, .validationEngineContainer").find(v).val();
                        var g = v.replace("#", "") + "=" + escape(m);
                        l[v.replace("#", "")] = m
                    }
                }
            }
            if (s.eventTrigger == "field") {
                delete s.ajaxValidCache[n.attr("id")]
            }
            if (!s.isError && !t._checkAjaxFieldStatus(n.attr("id"), s)) {
                e.ajax({
                    type: s.ajaxFormValidationMethod,
                    url: u.url,
                    cache: false,
                    dataType: "json",
                    data: l,
                    field: n,
                    rule: u,
                    methods: t,
                    options: s,
                    beforeSend: function() {},
                    error: function(e, n) {
                        if (s.onFailure) {
                            s.onFailure(e, n)
                        } else {
                            t._ajaxError(e, n)
                        }
                    },
                    success: function(r) {
                        var i = r[0];
                        var o = e("#" + i).eq(0);
                        if (o.length == 1) {
                            var a = r[1];
                            var f = r[2];
                            if (!a) {
                                s.ajaxValidCache[i] = false;
                                s.isError = true;
                                if (f) {
                                    if (s.allrules[f]) {
                                        var l = s.allrules[f].alertText;
                                        if (l) {
                                            f = l
                                        }
                                    }
                                } else f = u.alertText;
                                if (s.showPrompts) t._showPrompt(o, f, "", true, s)
                            } else {
                                s.ajaxValidCache[i] = true;
                                if (f) {
                                    if (s.allrules[f]) {
                                        var l = s.allrules[f].alertTextOk;
                                        if (l) {
                                            f = l
                                        }
                                    }
                                } else f = u.alertTextOk;
                                if (s.showPrompts) {
                                    if (f) t._showPrompt(o, f, "pass", true, s);
                                    else t._closePrompt(o)
                                }
                                if (s.eventTrigger == "submit") n.closest("form").submit()
                            }
                        }
                        o.trigger("jqv.field.result", [o, s.isError, f])
                    }
                });
                return u.alertTextLoad
            }
        },
        _ajaxError: function(e, t) {
            if (e.status == 0 && t == null) alert("The page is not served from a server! ajax call failed");
            else if (typeof console != "undefined") console.log("Ajax error: " + e.status + " " + t)
        },
        _dateToString: function(e) {
            return e.getFullYear() + "-" + (e.getMonth() + 1) + "-" + e.getDate()
        },
        _parseDate: function(e) {
            var t = e.split("-");
            if (t == e) t = e.split("/");
            if (t == e) {
                t = e.split(".");
                return new Date(t[2], t[1] - 1, t[0])
            }
            return new Date(t[0], t[1] - 1, t[2])
        },
        _showPrompt: function(n, r, i, s, o, u) {
            if (n.data("jqv-prompt-at") instanceof jQuery) {
                n = n.data("jqv-prompt-at")
            } else if (n.data("jqv-prompt-at")) {
                n = e(n.data("jqv-prompt-at"))
            }
            var a = t._getPrompt(n);
            if (u) a = false;
            if (e.trim(r)) {
                if (a) t._updatePrompt(n, a, r, i, s, o);
                else t._buildPrompt(n, r, i, s, o)
            }
        },
        _buildPrompt: function(n, r, i, s, o) {
            var u = e("<div>");
			//custom error message inside field 
			var fs = '<div class="line1"><!-- --></div><div class="line2"><!-- --></div><div class="line3"><!-- --></div><div class="line4"><!-- --></div><div class="line5"><!-- --></div><div class="line6"><!-- --></div><div class="line7"><!-- --></div><div class="line8"><!-- --></div><div class="line9"><!-- --></div><div class="line10">';
			if(n.attr('data-inside') == 'yes'){
				fs='';
				var j = n.outerWidth() - 4;
				var k = n.outerHeight() - 4;
				u.css({
					width: j+'px',
					height: k+'px'
				});
				u.addClass("fs-insideFrmerror");
				$('<i class="ico-cross2"></i>').appendTo(u);
			}
			
			if(n.hasClass('selectValid')){
				n.parent().addClass('selectValid-error');
			}
			
            u.addClass(t._getClassName(n.attr("id")) + "formError");
            u.addClass("parentForm" + t._getClassName(n.closest("form, .validationEngineContainer").attr("id")));
            u.addClass("formError");
			u.addClass("fs-formError");
            switch (i) {
                case "pass":
                    u.addClass("greenPopup");
                    break;
                case "load":
                    u.addClass("blackPopup");
                    break;
                default:
            }
            if (s) u.addClass("ajaxed");
            var a = e("<div>").addClass("formErrorContent").html(r).appendTo(u);
            var f = n.data("promptPosition") || o.promptPosition;
            if (o.showArrow) {
                var l = e("<div>").addClass("formErrorArrow");
                if (typeof f == "string") {
                    var c = f.indexOf(":");
                    if (c != -1) f = f.substring(0, c)
                }
                switch (f) {
                    case "bottomLeft":
                    case "bottomRight":
                        u.find(".formErrorContent").before(l);
                        l.addClass("formErrorArrowBottom").html(fs);						
                        break;
                    case "topLeft":
                    case "topRight":
                        l.html('<div class="line10"><!-- --></div><div class="line9"><!-- --></div><div class="line8"><!-- --></div><div class="line7"><!-- --></div><div class="line6"><!-- --></div><div class="line5"><!-- --></div><div class="line4"><!-- --></div><div class="line3"><!-- --></div><div class="line2"><!-- --></div><div class="line1"><!-- --></div>');
                        u.append(l);
                        break
                }
            }
            if (o.addPromptClass) u.addClass(o.addPromptClass);
            var h = n.attr("data-required-class");
            if (h !== undefined) {
                u.addClass(h)
            } else {
                if (o.prettySelect) {
                    if (e("#" + n.attr("id")).next().is("select")) {
                        var p = e("#" + n.attr("id").substr(o.usePrefix.length).substring(o.useSuffix.length)).attr("data-required-class");
                        if (p !== undefined) {
                            u.addClass(p)
                        }
                    }
                }
            }
            u.css({
                opacity: 0
            });
            if (f === "inline") {
                u.addClass("inline");
                if (typeof n.attr("data-prompt-target") !== "undefined" && e("#" + n.attr("data-prompt-target")).length > 0) {
                    u.appendTo(e("#" + n.attr("data-prompt-target")))
                } else {
                    n.after(u)
                }
            } else {
                n.before(u)
            }
            var c = t._calculatePosition(n, u, o);
            u.css({
                position: f === "inline" ? "relative" : "absolute",
                top: c.callerTopPosition,
                left: c.callerleftPosition,
                marginTop: c.marginTopSize,
                opacity: 0
            }).data("callerField", n);
            if (o.autoHidePrompt) {
                setTimeout(function() {
                    u.animate({
                        opacity: 0
                    }, function() {
                        u.closest(".formError").remove()
                    })
                }, o.autoHideDelay)
            }
            return u.animate({
                opacity: 1
            })
        },
        _updatePrompt: function(e, n, r, i, s, o, u) {
            if (n) {
                if (typeof i !== "undefined") {
                    if (i == "pass") n.addClass("greenPopup");
                    else n.removeClass("greenPopup");
                    if (i == "load") n.addClass("blackPopup");
                    else n.removeClass("blackPopup")
                }
                if (s) n.addClass("ajaxed");
                else n.removeClass("ajaxed");
                n.find(".formErrorContent").html(r);
                var a = t._calculatePosition(e, n, o);
                var f = {
                    top: a.callerTopPosition,
                    left: a.callerleftPosition,
                    marginTop: a.marginTopSize,
                    opacity: 1
                };
                n.css({
                    opacity: 0,
                    display: "block"
                });
                if (u) n.css(f);
                else n.animate(f)
            }
        },
        _closePrompt: function(e) {
            var n = t._getPrompt(e);
            if (n) n.fadeTo("fast", 0, function() {
                n.closest(".formError").remove()
            })
        },
        closePrompt: function(e) {
            return t._closePrompt(e)
        },
        _getPrompt: function(n) {
            var r = e(n).closest("form, .validationEngineContainer").attr("id");
            var i = t._getClassName(n.attr("id")) + "formError";
            var s = e("." + t._escapeExpression(i) + ".parentForm" + t._getClassName(r))[0];
            if (s) return e(s)
        },
        _escapeExpression: function(e) {
            return e.replace(/([#;&,\.\+\*\~':"\!\^$\[\]\(\)=>\|])/g, "\\$1")
        },
        isRTL: function(t) {
            var n = e(document);
            var r = e("body");
            var i = t && t.hasClass("rtl") || t && (t.attr("dir") || "").toLowerCase() === "rtl" || n.hasClass("rtl") || (n.attr("dir") || "").toLowerCase() === "rtl" || r.hasClass("rtl") || (r.attr("dir") || "").toLowerCase() === "rtl";
            return Boolean(i)
        },
        _calculatePosition: function(e, t, n) {
            var r, i, s;
            var o = e.width();
            var u = e.position().left;
            var a = e.position().top;
            var f = e.height();
            var l = t.height();
            r = i = 0;
            s = -l;
            var c = e.data("promptPosition") || n.promptPosition;
            var h = "";
            var p = "";
            var d = 0;
            var v = 0;
            if (typeof c == "string") {
                if (c.indexOf(":") != -1) {
                    h = c.substring(c.indexOf(":") + 1);
                    c = c.substring(0, c.indexOf(":"));
                    if (h.indexOf(",") != -1) {
                        p = h.substring(h.indexOf(",") + 1);
                        h = h.substring(0, h.indexOf(","));
                        v = parseInt(p);
                        if (isNaN(v)) v = 0
                    }
                    d = parseInt(h);
                    if (isNaN(h)) h = 0
                }
            }
            switch (c) {
                default:
                    case "topRight":
                    i += u + o - 27;r += a;
                break;
                case "topLeft":
                        r += a;i += u;
                    break;
                case "centerRight":
                        r = a + 4;s = 0;i = u + e.outerWidth(true) + 5;
                    break;
                case "centerLeft":
                        i = u - (t.width() + 2);r = a + 4;s = 0;
                    break;
                case "bottomLeft":
                        r = a + e.height() - 5;s = 0;i = u;
						// custom error message position inside field
						if(e.attr('data-inside') == 'yes'){
							r = a + 2 ;s = 0;i = u + 2;
						}
                    break;
                case "bottomRight":
                        i = u + o - 27;r = a + e.height() + 5;s = 0;
                    break;
                case "inline":
                        i = 0;r = 0;s = 0
            }
            i += d;
            r += v;
            return {
                callerTopPosition: r + "px",
                callerleftPosition: i + "px",
                marginTopSize: s + "px"
            }
        },
        _saveOptions: function(t, n) {
            if (e.validationEngineLanguage) var r = e.validationEngineLanguage.allRules;
            else e.error("jQuery.validationEngine rules are not loaded, plz add localization files to the page");
            e.validationEngine.defaults.allrules = r;
            var i = e.extend(true, {}, e.validationEngine.defaults, n);
            t.data("jqv", i);
            return i
        },
        _getClassName: function(e) {
            if (e) return e.replace(/:/g, "_").replace(/\./g, "_")
        },
        _jqSelector: function(e) {
            return e.replace(/([;&,\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g, "\\$1")
        },
        _condRequired: function(e, n, r, i) {
            var s, o;
            for (s = r + 1; s < n.length; s++) {
                o = jQuery("#" + n[s]).first();
                if (o.length && t._required(o, ["required"], 0, i, true) == undefined) {
                    return t._required(e, ["required"], 0, i)
                }
            }
        },
        _submitButtonClick: function(t) {
            var n = e(this);
            var r = n.closest("form, .validationEngineContainer");
            r.data("jqv_submitButton", n.attr("id"))
        }
    };
    e.fn.validationEngine = function(n) {
        var r = e(this);
        if (!r[0]) return r;
        if (typeof n == "string" && n.charAt(0) != "_" && t[n]) {
            if (n != "showPrompt" && n != "hide" && n != "hideAll") t.init.apply(r);
            return t[n].apply(r, Array.prototype.slice.call(arguments, 1))
        } else if (typeof n == "object" || !n) {
            t.init.apply(r, arguments);
            return t.attach.apply(r)
        } else {
            e.error("Method " + n + " does not exist in jQuery.validationEngine")
        }
    };
    e.validationEngine = {
        fieldIdCounter: 0,
        defaults: {
            validationEventTrigger: "",
            scroll: false,
            focusFirstField: true,
            showPrompts: true,
            validateNonVisibleFields: false,
            ignoreFieldsWithClass: "ignoreMe",
            promptPosition: "bottomLeft",
            bindMethod: "bind",
            inlineAjax: false,
            ajaxFormValidation: false,
            ajaxFormValidationURL: false,
            ajaxFormValidationMethod: "get",
            onAjaxFormComplete: e.noop,
            onBeforeAjaxFormValidation: e.noop,
            onValidationComplete: false,
            doNotShowAllErrosOnSubmit: false,
            custom_error_messages: {},
            binded: true,
            notEmpty: false,
            showArrow: true,
            showArrowOnRadioAndCheckbox: false,
            isError: false,
            maxErrorsPerField: false,
            ajaxValidCache: {},
            autoPositionUpdate: false,
            InvalidFields: [],
            onFieldSuccess: false,
            onFieldFailure: false,
            onSuccess: false,
            onFailure: false,
            validateAttribute: "class",
            addSuccessCssClassToField: "",
            addFailureCssClassToField: "",
            autoHidePrompt: true,
            autoHideDelay: 5,
            fadeDuration: 300,
            prettySelect: false,
            addPromptClass: "",
            usePrefix: "",
            useSuffix: "",
            showOneMessage: false
        }
    };
    e(function() {
        e.validationEngine.defaults.promptPosition = t.isRTL() ? "bottomLeft" : "bottomLeft"
    })
})(jQuery)

var urlFormat = /^([a-zA-Z0-9]+(\.[a-zA-Z0-9]+)+.*)$/
function checkLEGAL(field, rules, i, options){
	var match = field.val().match(urlFormat)
	if (!match) return "Invalid URL"
	
}
var fsurlFormat = /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}$/ ///^([a-zA-Z0-9]+(\.[a-zA-Z0-9]+)+.*)$/
function checkLEGALurl(field, rules, i, options){
	var match = field.val().match(fsurlFormat)
	if (!match) return "Invalid URL"
	
}
function checkAnydomain(field, rules, i, options){
	var match = field.val().match(fsurlFormat)
	if (!match) return "Invalid URL"
	
}

var checkdomainformat = /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]$/ ///^([a-zA-Z0-9]+(\.[a-zA-Z0-9]+)+.*)$/
function checkLEGALname(field, rules, i, options){
	var match = field.val().match(checkdomainformat)
	if (!match) return "Invalid domain"
	
}

function checkLEGALdomain(field, rules, i, options){
    nname= $('#userdomain').val();
                nname = nname.replace('http://','');
                nname = nname.replace('https://','');
                nname = nname.replace('www.','');
                
	var match = nname.match(fsurlFormat)
	if (!match) return "Invalid URL"
	
}

var URL_regex = /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i

function checksucialURL(field, rules, i, options){
	var match = field.val().match(URL_regex);
	var errmsg = field.attr('data-errormessage-custom-error');
	fieldVal = field.val().split('.com/');
	fieldVal2 = field.val().split('.com');
	
	if (!match || fieldVal[1] == '' || fieldVal2[1] == '') return errmsg
}

function social_reviewsValidation(field, rules, i, options){
	var errmsg = field.attr('data-errormessage-custom-error');
	var field_value = field.val();
	field_value = field_value.replace('http://','');
	field_value = field_value.replace('https://','');
	field_value = field_value.replace('www.','');
	field_value = field_value.replace('com/','com');
	var fieldVal = field_value.split('.com');
	var type = $('.profile_list li a.active').attr('role').toLowerCase();
	if(fieldVal[0] == type && fieldVal[1] != ''){
	}else{
		return errmsg;
		console.log(errmsg)
	}
}

function url_check(field, rules, i, options){
	var match = field.val().match(URL_regex);
	var errmsg = field.attr('data-errormessage-custom-error');
	if(field.val().charAt(0) == '#'){
	}else{
		if (!match) return errmsg
	}
}

/*! jQuery UI - v1.11.4 - 2015-10-25
* http://jqueryui.com
* Includes: core.js, datepicker.js
* Copyright 2015 jQuery Foundation and other contributors; Licensed MIT */

(function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
})(function(e) {
    function t(t, s) {
        var a, n, r, o = t.nodeName.toLowerCase();
        return "area" === o ? (a = t.parentNode, n = a.name, t.href && n && "map" === a.nodeName.toLowerCase() ? (r = e("img[usemap='#" + n + "']")[0], !!r && i(r)) : !1) : (/^(input|select|textarea|button|object)$/.test(o) ? !t.disabled : "a" === o ? t.href || s : s) && i(t)
    }

    function i(t) {
        return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function() {
            return "hidden" === e.css(this, "visibility")
        }).length
    }

    function s(e) {
        for (var t, i; e.length && e[0] !== document;) {
            if (t = e.css("position"), ("absolute" === t || "relative" === t || "fixed" === t) && (i = parseInt(e.css("zIndex"), 10), !isNaN(i) && 0 !== i)) return i;
            e = e.parent()
        }
        return 0
    }

    function a() {
        this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }, this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: !1,
            hideIfNoPrevNext: !1,
            navigationAsDateFormat: !1,
            gotoCurrent: !1,
            changeMonth: !1,
            changeYear: !1,
            yearRange: "c-10:c+10",
            showOtherMonths: !1,
            selectOtherMonths: !1,
            showWeek: !1,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: !0,
            showButtonPanel: !1,
            autoSize: !1,
            disabled: !1
        }, e.extend(this._defaults, this.regional[""]), this.regional.en = e.extend(!0, {}, this.regional[""]), this.regional["en-US"] = e.extend(!0, {}, this.regional.en), this.dpDiv = n(e("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
    }

    function n(t) {
        var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return t.delegate(i, "mouseout", function() {
            e(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && e(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && e(this).removeClass("ui-datepicker-next-hover")
        }).delegate(i, "mouseover", r)
    }

    function r() {
        e.datepicker._isDisabledDatepicker(h.inline ? h.dpDiv.parent()[0] : h.input[0]) || (e(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), e(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && e(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && e(this).addClass("ui-datepicker-next-hover"))
    }

    function o(t, i) {
        e.extend(t, i);
        for (var s in i) null == i[s] && (t[s] = i[s]);
        return t
    }
    e.ui = e.ui || {}, e.extend(e.ui, {
        version: "1.11.4",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }), e.fn.extend({
        scrollParent: function(t) {
            var i = this.css("position"),
                s = "absolute" === i,
                a = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                n = this.parents().filter(function() {
                    var t = e(this);
                    return s && "static" === t.css("position") ? !1 : a.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"))
                }).eq(0);
            return "fixed" !== i && n.length ? n : e(this[0].ownerDocument || document)
        },
        uniqueId: function() {
            var e = 0;
            return function() {
                return this.each(function() {
                    this.id || (this.id = "ui-id-" + ++e)
                })
            }
        }(),
        removeUniqueId: function() {
            return this.each(function() {
                /^ui-id-\d+$/.test(this.id) && e(this).removeAttr("id")
            })
        }
    }), e.extend(e.expr[":"], {
        data: e.expr.createPseudo ? e.expr.createPseudo(function(t) {
            return function(i) {
                return !!e.data(i, t)
            }
        }) : function(t, i, s) {
            return !!e.data(t, s[3])
        },
        focusable: function(i) {
            return t(i, !isNaN(e.attr(i, "tabindex")))
        },
        tabbable: function(i) {
            var s = e.attr(i, "tabindex"),
                a = isNaN(s);
            return (a || s >= 0) && t(i, !a)
        }
    }), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function(t, i) {
        function s(t, i, s, n) {
            return e.each(a, function() {
                i -= parseFloat(e.css(t, "padding" + this)) || 0, s && (i -= parseFloat(e.css(t, "border" + this + "Width")) || 0), n && (i -= parseFloat(e.css(t, "margin" + this)) || 0)
            }), i
        }
        var a = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
            n = i.toLowerCase(),
            r = {
                innerWidth: e.fn.innerWidth,
                innerHeight: e.fn.innerHeight,
                outerWidth: e.fn.outerWidth,
                outerHeight: e.fn.outerHeight
            };
        e.fn["inner" + i] = function(t) {
            return void 0 === t ? r["inner" + i].call(this) : this.each(function() {
                e(this).css(n, s(this, t) + "px")
            })
        }, e.fn["outer" + i] = function(t, a) {
            return "number" != typeof t ? r["outer" + i].call(this, t) : this.each(function() {
                e(this).css(n, s(this, t, !0, a) + "px")
            })
        }
    }), e.fn.addBack || (e.fn.addBack = function(e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function(t) {
        return function(i) {
            return arguments.length ? t.call(this, e.camelCase(i)) : t.call(this)
        }
    }(e.fn.removeData)), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.fn.extend({
        focus: function(t) {
            return function(i, s) {
                return "number" == typeof i ? this.each(function() {
                    var t = this;
                    setTimeout(function() {
                        e(t).focus(), s && s.call(t)
                    }, i)
                }) : t.apply(this, arguments)
            }
        }(e.fn.focus),
        disableSelection: function() {
            var e = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
            return function() {
                return this.bind(e + ".ui-disableSelection", function(e) {
                    e.preventDefault()
                })
            }
        }(),
        enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        },
        zIndex: function(t) {
            if (void 0 !== t) return this.css("zIndex", t);
            if (this.length)
                for (var i, s, a = e(this[0]); a.length && a[0] !== document;) {
                    if (i = a.css("position"), ("absolute" === i || "relative" === i || "fixed" === i) && (s = parseInt(a.css("zIndex"), 10), !isNaN(s) && 0 !== s)) return s;
                    a = a.parent()
                }
            return 0
        }
    }), e.ui.plugin = {
        add: function(t, i, s) {
            var a, n = e.ui[t].prototype;
            for (a in s) n.plugins[a] = n.plugins[a] || [], n.plugins[a].push([i, s[a]])
        },
        call: function(e, t, i, s) {
            var a, n = e.plugins[t];
            if (n && (s || e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType))
                for (a = 0; n.length > a; a++) e.options[n[a][0]] && n[a][1].apply(e.element, i)
        }
    }, e.extend(e.ui, {
        datepicker: {
            version: "1.11.4"
        }
    });
    var h;
    e.extend(a.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        _widgetDatepicker: function() {
            return this.dpDiv
        },
        setDefaults: function(e) {
            return o(this._defaults, e || {}), this
        },
        _attachDatepicker: function(t, i) {
            var s, a, n;
            s = t.nodeName.toLowerCase(), a = "div" === s || "span" === s, t.id || (this.uuid += 1, t.id = "dp" + this.uuid), n = this._newInst(e(t), a), n.settings = e.extend({}, i || {}), "input" === s ? this._connectDatepicker(t, n) : a && this._inlineDatepicker(t, n)
        },
        _newInst: function(t, i) {
            var s = t[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
            return {
                id: s,
                input: t,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: i,
                dpDiv: i ? n(e("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
            }
        },
        _connectDatepicker: function(t, i) {
            var s = e(t);
            i.append = e([]), i.trigger = e([]), s.hasClass(this.markerClassName) || (this._attachments(s, i), s.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(i), e.data(t, "datepicker", i), i.settings.disabled && this._disableDatepicker(t))
        },
        _attachments: function(t, i) {
            var s, a, n, r = this._get(i, "appendText"),
                o = this._get(i, "isRTL");
            i.append && i.append.remove(), r && (i.append = e("<span class='" + this._appendClass + "'>" + r + "</span>"), t[o ? "before" : "after"](i.append)), t.unbind("focus", this._showDatepicker), i.trigger && i.trigger.remove(), s = this._get(i, "showOn"), ("focus" === s || "both" === s) && t.focus(this._showDatepicker), ("button" === s || "both" === s) && (a = this._get(i, "buttonText"), n = this._get(i, "buttonImage"), i.trigger = e(this._get(i, "buttonImageOnly") ? e("<img/>").addClass(this._triggerClass).attr({
                src: n,
                alt: a,
                title: a
            }) : e("<button type='button'></button>").addClass(this._triggerClass).html(n ? e("<img/>").attr({
                src: n,
                alt: a,
                title: a
            }) : a)), t[o ? "before" : "after"](i.trigger), i.trigger.click(function() {
                return e.datepicker._datepickerShowing && e.datepicker._lastInput === t[0] ? e.datepicker._hideDatepicker() : e.datepicker._datepickerShowing && e.datepicker._lastInput !== t[0] ? (e.datepicker._hideDatepicker(), e.datepicker._showDatepicker(t[0])) : e.datepicker._showDatepicker(t[0]), !1
            }))
        },
        _autoSize: function(e) {
            if (this._get(e, "autoSize") && !e.inline) {
                var t, i, s, a, n = new Date(2009, 11, 20),
                    r = this._get(e, "dateFormat");
                r.match(/[DM]/) && (t = function(e) {
                    for (i = 0, s = 0, a = 0; e.length > a; a++) e[a].length > i && (i = e[a].length, s = a);
                    return s
                }, n.setMonth(t(this._get(e, r.match(/MM/) ? "monthNames" : "monthNamesShort"))), n.setDate(t(this._get(e, r.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - n.getDay())), e.input.attr("size", this._formatDate(e, n).length)
            }
        },
        _inlineDatepicker: function(t, i) {
            var s = e(t);
            s.hasClass(this.markerClassName) || (s.addClass(this.markerClassName).append(i.dpDiv), e.data(t, "datepicker", i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(t), i.dpDiv.css("display", "block"))
        },
        _dialogDatepicker: function(t, i, s, a, n) {
            var r, h, l, u, d, c = this._dialogInst;
            return c || (this.uuid += 1, r = "dp" + this.uuid, this._dialogInput = e("<input type='text' id='" + r + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), e("body").append(this._dialogInput), c = this._dialogInst = this._newInst(this._dialogInput, !1), c.settings = {}, e.data(this._dialogInput[0], "datepicker", c)), o(c.settings, a || {}), i = i && i.constructor === Date ? this._formatDate(c, i) : i, this._dialogInput.val(i), this._pos = n ? n.length ? n : [n.pageX, n.pageY] : null, this._pos || (h = document.documentElement.clientWidth, l = document.documentElement.clientHeight, u = document.documentElement.scrollLeft || document.body.scrollLeft, d = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [h / 2 - 100 + u, l / 2 - 150 + d]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), c.settings.onSelect = s, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), e.blockUI && e.blockUI(this.dpDiv), e.data(this._dialogInput[0], "datepicker", c), this
        },
        _destroyDatepicker: function(t) {
            var i, s = e(t),
                a = e.data(t, "datepicker");
            s.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), e.removeData(t, "datepicker"), "input" === i ? (a.append.remove(), a.trigger.remove(), s.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" === i || "span" === i) && s.removeClass(this.markerClassName).empty(), h === a && (h = null))
        },
        _enableDatepicker: function(t) {
            var i, s, a = e(t),
                n = e.data(t, "datepicker");
            a.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), "input" === i ? (t.disabled = !1, n.trigger.filter("button").each(function() {
                this.disabled = !1
            }).end().filter("img").css({
                opacity: "1.0",
                cursor: ""
            })) : ("div" === i || "span" === i) && (s = a.children("." + this._inlineClass), s.children().removeClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = e.map(this._disabledInputs, function(e) {
                return e === t ? null : e
            }))
        },
        _disableDatepicker: function(t) {
            var i, s, a = e(t),
                n = e.data(t, "datepicker");
            a.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), "input" === i ? (t.disabled = !0, n.trigger.filter("button").each(function() {
                this.disabled = !0
            }).end().filter("img").css({
                opacity: "0.5",
                cursor: "default"
            })) : ("div" === i || "span" === i) && (s = a.children("." + this._inlineClass), s.children().addClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = e.map(this._disabledInputs, function(e) {
                return e === t ? null : e
            }), this._disabledInputs[this._disabledInputs.length] = t)
        },
        _isDisabledDatepicker: function(e) {
            if (!e) return !1;
            for (var t = 0; this._disabledInputs.length > t; t++)
                if (this._disabledInputs[t] === e) return !0;
            return !1
        },
        _getInst: function(t) {
            try {
                return e.data(t, "datepicker")
            } catch (i) {
                throw "Missing instance data for this datepicker"
            }
        },
        _optionDatepicker: function(t, i, s) {
            var a, n, r, h, l = this._getInst(t);
            return 2 === arguments.length && "string" == typeof i ? "defaults" === i ? e.extend({}, e.datepicker._defaults) : l ? "all" === i ? e.extend({}, l.settings) : this._get(l, i) : null : (a = i || {}, "string" == typeof i && (a = {}, a[i] = s), l && (this._curInst === l && this._hideDatepicker(), n = this._getDateDatepicker(t, !0), r = this._getMinMaxDate(l, "min"), h = this._getMinMaxDate(l, "max"), o(l.settings, a), null !== r && void 0 !== a.dateFormat && void 0 === a.minDate && (l.settings.minDate = this._formatDate(l, r)), null !== h && void 0 !== a.dateFormat && void 0 === a.maxDate && (l.settings.maxDate = this._formatDate(l, h)), "disabled" in a && (a.disabled ? this._disableDatepicker(t) : this._enableDatepicker(t)), this._attachments(e(t), l), this._autoSize(l), this._setDate(l, n), this._updateAlternate(l), this._updateDatepicker(l)), void 0)
        },
        _changeDatepicker: function(e, t, i) {
            this._optionDatepicker(e, t, i)
        },
        _refreshDatepicker: function(e) {
            var t = this._getInst(e);
            t && this._updateDatepicker(t)
        },
        _setDateDatepicker: function(e, t) {
            var i = this._getInst(e);
            i && (this._setDate(i, t), this._updateDatepicker(i), this._updateAlternate(i))
        },
        _getDateDatepicker: function(e, t) {
            var i = this._getInst(e);
            return i && !i.inline && this._setDateFromField(i, t), i ? this._getDate(i) : null
        },
        _doKeyDown: function(t) {
            var i, s, a, n = e.datepicker._getInst(t.target),
                r = !0,
                o = n.dpDiv.is(".ui-datepicker-rtl");
            if (n._keyEvent = !0, e.datepicker._datepickerShowing) switch (t.keyCode) {
                case 9:
                    e.datepicker._hideDatepicker(), r = !1;
                    break;
                case 13:
                    return a = e("td." + e.datepicker._dayOverClass + ":not(." + e.datepicker._currentClass + ")", n.dpDiv), a[0] && e.datepicker._selectDay(t.target, n.selectedMonth, n.selectedYear, a[0]), i = e.datepicker._get(n, "onSelect"), i ? (s = e.datepicker._formatDate(n), i.apply(n.input ? n.input[0] : null, [s, n])) : e.datepicker._hideDatepicker(), !1;
                case 27:
                    e.datepicker._hideDatepicker();
                    break;
                case 33:
                    e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(n, "stepBigMonths") : -e.datepicker._get(n, "stepMonths"), "M");
                    break;
                case 34:
                    e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(n, "stepBigMonths") : +e.datepicker._get(n, "stepMonths"), "M");
                    break;
                case 35:
                    (t.ctrlKey || t.metaKey) && e.datepicker._clearDate(t.target), r = t.ctrlKey || t.metaKey;
                    break;
                case 36:
                    (t.ctrlKey || t.metaKey) && e.datepicker._gotoToday(t.target), r = t.ctrlKey || t.metaKey;
                    break;
                case 37:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, o ? 1 : -1, "D"), r = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(n, "stepBigMonths") : -e.datepicker._get(n, "stepMonths"), "M");
                    break;
                case 38:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, -7, "D"), r = t.ctrlKey || t.metaKey;
                    break;
                case 39:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, o ? -1 : 1, "D"), r = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(n, "stepBigMonths") : +e.datepicker._get(n, "stepMonths"), "M");
                    break;
                case 40:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, 7, "D"), r = t.ctrlKey || t.metaKey;
                    break;
                default:
                    r = !1
            } else 36 === t.keyCode && t.ctrlKey ? e.datepicker._showDatepicker(this) : r = !1;
            r && (t.preventDefault(), t.stopPropagation())
        },
        _doKeyPress: function(t) {
            var i, s, a = e.datepicker._getInst(t.target);
            return e.datepicker._get(a, "constrainInput") ? (i = e.datepicker._possibleChars(e.datepicker._get(a, "dateFormat")), s = String.fromCharCode(null == t.charCode ? t.keyCode : t.charCode), t.ctrlKey || t.metaKey || " " > s || !i || i.indexOf(s) > -1) : void 0
        },
        _doKeyUp: function(t) {
            var i, s = e.datepicker._getInst(t.target);
            if (s.input.val() !== s.lastVal) try {
                i = e.datepicker.parseDate(e.datepicker._get(s, "dateFormat"), s.input ? s.input.val() : null, e.datepicker._getFormatConfig(s)), i && (e.datepicker._setDateFromField(s), e.datepicker._updateAlternate(s), e.datepicker._updateDatepicker(s))
            } catch (a) {}
            return !0
        },
        _showDatepicker: function(t) {
            if (t = t.target || t, "input" !== t.nodeName.toLowerCase() && (t = e("input", t.parentNode)[0]), !e.datepicker._isDisabledDatepicker(t) && e.datepicker._lastInput !== t) {
                var i, a, n, r, h, l, u;
                i = e.datepicker._getInst(t), e.datepicker._curInst && e.datepicker._curInst !== i && (e.datepicker._curInst.dpDiv.stop(!0, !0), i && e.datepicker._datepickerShowing && e.datepicker._hideDatepicker(e.datepicker._curInst.input[0])), a = e.datepicker._get(i, "beforeShow"), n = a ? a.apply(t, [t, i]) : {}, n !== !1 && (o(i.settings, n), i.lastVal = null, e.datepicker._lastInput = t, e.datepicker._setDateFromField(i), e.datepicker._inDialog && (t.value = ""), e.datepicker._pos || (e.datepicker._pos = e.datepicker._findPos(t), e.datepicker._pos[1] += t.offsetHeight), r = !1, e(t).parents().each(function() {
                    return r |= "fixed" === e(this).css("position"), !r
                }), h = {
                    left: e.datepicker._pos[0],
                    top: e.datepicker._pos[1]
                }, e.datepicker._pos = null, i.dpDiv.empty(), i.dpDiv.css({
                    position: "absolute",
                    display: "block",
                    top: "-1000px"
                }), e.datepicker._updateDatepicker(i), h = e.datepicker._checkOffset(i, h, r), i.dpDiv.css({
                    position: e.datepicker._inDialog && e.blockUI ? "static" : r ? "fixed" : "absolute",
                    display: "none",
                    left: h.left + "px",
                    top: h.top + "px"
                }), i.inline || (l = e.datepicker._get(i, "showAnim"), u = e.datepicker._get(i, "duration"), i.dpDiv.css("z-index", s(e(t)) + 1), e.datepicker._datepickerShowing = !0, e.effects && e.effects.effect[l] ? i.dpDiv.show(l, e.datepicker._get(i, "showOptions"), u) : i.dpDiv[l || "show"](l ? u : null), e.datepicker._shouldFocusInput(i) && i.input.focus(), e.datepicker._curInst = i))
            }
        },
        _updateDatepicker: function(t) {
            this.maxRows = 4, h = t, t.dpDiv.empty().append(this._generateHTML(t)), this._attachHandlers(t);
            var i, s = this._getNumberOfMonths(t),
                a = s[1],
                n = 17,
                o = t.dpDiv.find("." + this._dayOverClass + " a");
            o.length > 0 && r.apply(o.get(0)), t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), a > 1 && t.dpDiv.addClass("ui-datepicker-multi-" + a).css("width", n * a + "em"), t.dpDiv[(1 !== s[0] || 1 !== s[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), t === e.datepicker._curInst && e.datepicker._datepickerShowing && e.datepicker._shouldFocusInput(t) && t.input.focus(), t.yearshtml && (i = t.yearshtml, setTimeout(function() {
                i === t.yearshtml && t.yearshtml && t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml), i = t.yearshtml = null
            }, 0))
        },
        _shouldFocusInput: function(e) {
            return e.input && e.input.is(":visible") && !e.input.is(":disabled") && !e.input.is(":focus")
        },
        _checkOffset: function(t, i, s) {
            var a = t.dpDiv.outerWidth(),
                n = t.dpDiv.outerHeight(),
                r = t.input ? t.input.outerWidth() : 0,
                o = t.input ? t.input.outerHeight() : 0,
                h = document.documentElement.clientWidth + (s ? 0 : e(document).scrollLeft()),
                l = document.documentElement.clientHeight + (s ? 0 : e(document).scrollTop());
            return i.left -= this._get(t, "isRTL") ? a - r : 0, i.left -= s && i.left === t.input.offset().left ? e(document).scrollLeft() : 0, i.top -= s && i.top === t.input.offset().top + o ? e(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + a > h && h > a ? Math.abs(i.left + a - h) : 0), i.top -= Math.min(i.top, i.top + n > l && l > n ? Math.abs(n + o) : 0), i
        },
        _findPos: function(t) {
            for (var i, s = this._getInst(t), a = this._get(s, "isRTL"); t && ("hidden" === t.type || 1 !== t.nodeType || e.expr.filters.hidden(t));) t = t[a ? "previousSibling" : "nextSibling"];
            return i = e(t).offset(), [i.left, i.top]
        },
        _hideDatepicker: function(t) {
            var i, s, a, n, r = this._curInst;
            !r || t && r !== e.data(t, "datepicker") || this._datepickerShowing && (i = this._get(r, "showAnim"), s = this._get(r, "duration"), a = function() {
                e.datepicker._tidyDialog(r)
            }, e.effects && (e.effects.effect[i] || e.effects[i]) ? r.dpDiv.hide(i, e.datepicker._get(r, "showOptions"), s, a) : r.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? s : null, a), i || a(), this._datepickerShowing = !1, n = this._get(r, "onClose"), n && n.apply(r.input ? r.input[0] : null, [r.input ? r.input.val() : "", r]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
                position: "absolute",
                left: "0",
                top: "-100px"
            }), e.blockUI && (e.unblockUI(), e("body").append(this.dpDiv))), this._inDialog = !1)
        },
        _tidyDialog: function(e) {
            e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
        },
        _checkExternalClick: function(t) {
            if (e.datepicker._curInst) {
                var i = e(t.target),
                    s = e.datepicker._getInst(i[0]);
                (i[0].id !== e.datepicker._mainDivId && 0 === i.parents("#" + e.datepicker._mainDivId).length && !i.hasClass(e.datepicker.markerClassName) && !i.closest("." + e.datepicker._triggerClass).length && e.datepicker._datepickerShowing && (!e.datepicker._inDialog || !e.blockUI) || i.hasClass(e.datepicker.markerClassName) && e.datepicker._curInst !== s) && e.datepicker._hideDatepicker()
            }
        },
        _adjustDate: function(t, i, s) {
            var a = e(t),
                n = this._getInst(a[0]);
            this._isDisabledDatepicker(a[0]) || (this._adjustInstDate(n, i + ("M" === s ? this._get(n, "showCurrentAtPos") : 0), s), this._updateDatepicker(n))
        },
        _gotoToday: function(t) {
            var i, s = e(t),
                a = this._getInst(s[0]);
            this._get(a, "gotoCurrent") && a.currentDay ? (a.selectedDay = a.currentDay, a.drawMonth = a.selectedMonth = a.currentMonth, a.drawYear = a.selectedYear = a.currentYear) : (i = new Date, a.selectedDay = i.getDate(), a.drawMonth = a.selectedMonth = i.getMonth(), a.drawYear = a.selectedYear = i.getFullYear()), this._notifyChange(a), this._adjustDate(s)
        },
        _selectMonthYear: function(t, i, s) {
            var a = e(t),
                n = this._getInst(a[0]);
            n["selected" + ("M" === s ? "Month" : "Year")] = n["draw" + ("M" === s ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10), this._notifyChange(n), this._adjustDate(a)
        },
        _selectDay: function(t, i, s, a) {
            var n, r = e(t);
            e(a).hasClass(this._unselectableClass) || this._isDisabledDatepicker(r[0]) || (n = this._getInst(r[0]), n.selectedDay = n.currentDay = e("a", a).html(), n.selectedMonth = n.currentMonth = i, n.selectedYear = n.currentYear = s, this._selectDate(t, this._formatDate(n, n.currentDay, n.currentMonth, n.currentYear)))
        },
        _clearDate: function(t) {
            var i = e(t);
            this._selectDate(i, "")
        },
        _selectDate: function(t, i) {
            var s, a = e(t),
                n = this._getInst(a[0]);
            i = null != i ? i : this._formatDate(n), n.input && n.input.val(i), this._updateAlternate(n), s = this._get(n, "onSelect"), s ? s.apply(n.input ? n.input[0] : null, [i, n]) : n.input && n.input.trigger("change"), n.inline ? this._updateDatepicker(n) : (this._hideDatepicker(), this._lastInput = n.input[0], "object" != typeof n.input[0] && n.input.focus(), this._lastInput = null)
        },
        _updateAlternate: function(t) {
            var i, s, a, n = this._get(t, "altField");
            n && (i = this._get(t, "altFormat") || this._get(t, "dateFormat"), s = this._getDate(t), a = this.formatDate(i, s, this._getFormatConfig(t)), e(n).each(function() {
                e(this).val(a)
            }))
        },
        noWeekends: function(e) {
            var t = e.getDay();
            return [t > 0 && 6 > t, ""]
        },
        iso8601Week: function(e) {
            var t, i = new Date(e.getTime());
            return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), t = i.getTime(), i.setMonth(0), i.setDate(1), Math.floor(Math.round((t - i) / 864e5) / 7) + 1
        },
        parseDate: function(t, i, s) {
            if (null == t || null == i) throw "Invalid arguments";
            if (i = "object" == typeof i ? "" + i : i + "", "" === i) return null;
            var a, n, r, o, h = 0,
                l = (s ? s.shortYearCutoff : null) || this._defaults.shortYearCutoff,
                u = "string" != typeof l ? l : (new Date).getFullYear() % 100 + parseInt(l, 10),
                d = (s ? s.dayNamesShort : null) || this._defaults.dayNamesShort,
                c = (s ? s.dayNames : null) || this._defaults.dayNames,
                p = (s ? s.monthNamesShort : null) || this._defaults.monthNamesShort,
                f = (s ? s.monthNames : null) || this._defaults.monthNames,
                m = -1,
                g = -1,
                v = -1,
                y = -1,
                b = !1,
                _ = function(e) {
                    var i = t.length > a + 1 && t.charAt(a + 1) === e;
                    return i && a++, i
                },
                x = function(e) {
                    var t = _(e),
                        s = "@" === e ? 14 : "!" === e ? 20 : "y" === e && t ? 4 : "o" === e ? 3 : 2,
                        a = "y" === e ? s : 1,
                        n = RegExp("^\\d{" + a + "," + s + "}"),
                        r = i.substring(h).match(n);
                    if (!r) throw "Missing number at position " + h;
                    return h += r[0].length, parseInt(r[0], 10)
                },
                k = function(t, s, a) {
                    var n = -1,
                        r = e.map(_(t) ? a : s, function(e, t) {
                            return [
                                [t, e]
                            ]
                        }).sort(function(e, t) {
                            return -(e[1].length - t[1].length)
                        });
                    if (e.each(r, function(e, t) {
                            var s = t[1];
                            return i.substr(h, s.length).toLowerCase() === s.toLowerCase() ? (n = t[0], h += s.length, !1) : void 0
                        }), -1 !== n) return n + 1;
                    throw "Unknown name at position " + h
                },
                w = function() {
                    if (i.charAt(h) !== t.charAt(a)) throw "Unexpected literal at position " + h;
                    h++
                };
            for (a = 0; t.length > a; a++)
                if (b) "'" !== t.charAt(a) || _("'") ? w() : b = !1;
                else switch (t.charAt(a)) {
                    case "d":
                        v = x("d");
                        break;
                    case "D":
                        k("D", d, c);
                        break;
                    case "o":
                        y = x("o");
                        break;
                    case "m":
                        g = x("m");
                        break;
                    case "M":
                        g = k("M", p, f);
                        break;
                    case "y":
                        m = x("y");
                        break;
                    case "@":
                        o = new Date(x("@")), m = o.getFullYear(), g = o.getMonth() + 1, v = o.getDate();
                        break;
                    case "!":
                        o = new Date((x("!") - this._ticksTo1970) / 1e4), m = o.getFullYear(), g = o.getMonth() + 1, v = o.getDate();
                        break;
                    case "'":
                        _("'") ? w() : b = !0;
                        break;
                    default:
                        w()
                }
                if (i.length > h && (r = i.substr(h), !/^\s+/.test(r))) throw "Extra/unparsed characters found in date: " + r;
            if (-1 === m ? m = (new Date).getFullYear() : 100 > m && (m += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (u >= m ? 0 : -100)), y > -1)
                for (g = 1, v = y;;) {
                    if (n = this._getDaysInMonth(m, g - 1), n >= v) break;
                    g++, v -= n
                }
            if (o = this._daylightSavingAdjust(new Date(m, g - 1, v)), o.getFullYear() !== m || o.getMonth() + 1 !== g || o.getDate() !== v) throw "Invalid date";
            return o
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: 1e7 * 60 * 60 * 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
        formatDate: function(e, t, i) {
            if (!t) return "";
            var s, a = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
                n = (i ? i.dayNames : null) || this._defaults.dayNames,
                r = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
                o = (i ? i.monthNames : null) || this._defaults.monthNames,
                h = function(t) {
                    var i = e.length > s + 1 && e.charAt(s + 1) === t;
                    return i && s++, i
                },
                l = function(e, t, i) {
                    var s = "" + t;
                    if (h(e))
                        for (; i > s.length;) s = "0" + s;
                    return s
                },
                u = function(e, t, i, s) {
                    return h(e) ? s[t] : i[t]
                },
                d = "",
                c = !1;
            if (t)
                for (s = 0; e.length > s; s++)
                    if (c) "'" !== e.charAt(s) || h("'") ? d += e.charAt(s) : c = !1;
                    else switch (e.charAt(s)) {
                        case "d":
                            d += l("d", t.getDate(), 2);
                            break;
                        case "D":
                            d += u("D", t.getDay(), a, n);
                            break;
                        case "o":
                            d += l("o", Math.round((new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime() - new Date(t.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                            break;
                        case "m":
                            d += l("m", t.getMonth() + 1, 2);
                            break;
                        case "M":
                            d += u("M", t.getMonth(), r, o);
                            break;
                        case "y":
                            d += h("y") ? t.getFullYear() : (10 > t.getYear() % 100 ? "0" : "") + t.getYear() % 100;
                            break;
                        case "@":
                            d += t.getTime();
                            break;
                        case "!":
                            d += 1e4 * t.getTime() + this._ticksTo1970;
                            break;
                        case "'":
                            h("'") ? d += "'" : c = !0;
                            break;
                        default:
                            d += e.charAt(s)
                    }
                    return d
        },
        _possibleChars: function(e) {
            var t, i = "",
                s = !1,
                a = function(i) {
                    var s = e.length > t + 1 && e.charAt(t + 1) === i;
                    return s && t++, s
                };
            for (t = 0; e.length > t; t++)
                if (s) "'" !== e.charAt(t) || a("'") ? i += e.charAt(t) : s = !1;
                else switch (e.charAt(t)) {
                    case "d":
                    case "m":
                    case "y":
                    case "@":
                        i += "0123456789";
                        break;
                    case "D":
                    case "M":
                        return null;
                    case "'":
                        a("'") ? i += "'" : s = !0;
                        break;
                    default:
                        i += e.charAt(t)
                }
                return i
        },
        _get: function(e, t) {
            return void 0 !== e.settings[t] ? e.settings[t] : this._defaults[t]
        },
        _setDateFromField: function(e, t) {
            if (e.input.val() !== e.lastVal) {
                var i = this._get(e, "dateFormat"),
                    s = e.lastVal = e.input ? e.input.val() : null,
                    a = this._getDefaultDate(e),
                    n = a,
                    r = this._getFormatConfig(e);
                try {
                    n = this.parseDate(i, s, r) || a
                } catch (o) {
                    s = t ? "" : s
                }
                e.selectedDay = n.getDate(), e.drawMonth = e.selectedMonth = n.getMonth(), e.drawYear = e.selectedYear = n.getFullYear(), e.currentDay = s ? n.getDate() : 0, e.currentMonth = s ? n.getMonth() : 0, e.currentYear = s ? n.getFullYear() : 0, this._adjustInstDate(e)
            }
        },
        _getDefaultDate: function(e) {
            return this._restrictMinMax(e, this._determineDate(e, this._get(e, "defaultDate"), new Date))
        },
        _determineDate: function(t, i, s) {
            var a = function(e) {
                    var t = new Date;
                    return t.setDate(t.getDate() + e), t
                },
                n = function(i) {
                    try {
                        return e.datepicker.parseDate(e.datepicker._get(t, "dateFormat"), i, e.datepicker._getFormatConfig(t))
                    } catch (s) {}
                    for (var a = (i.toLowerCase().match(/^c/) ? e.datepicker._getDate(t) : null) || new Date, n = a.getFullYear(), r = a.getMonth(), o = a.getDate(), h = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, l = h.exec(i); l;) {
                        switch (l[2] || "d") {
                            case "d":
                            case "D":
                                o += parseInt(l[1], 10);
                                break;
                            case "w":
                            case "W":
                                o += 7 * parseInt(l[1], 10);
                                break;
                            case "m":
                            case "M":
                                r += parseInt(l[1], 10), o = Math.min(o, e.datepicker._getDaysInMonth(n, r));
                                break;
                            case "y":
                            case "Y":
                                n += parseInt(l[1], 10), o = Math.min(o, e.datepicker._getDaysInMonth(n, r))
                        }
                        l = h.exec(i)
                    }
                    return new Date(n, r, o)
                },
                r = null == i || "" === i ? s : "string" == typeof i ? n(i) : "number" == typeof i ? isNaN(i) ? s : a(i) : new Date(i.getTime());
            return r = r && "Invalid Date" == "" + r ? s : r, r && (r.setHours(0), r.setMinutes(0), r.setSeconds(0), r.setMilliseconds(0)), this._daylightSavingAdjust(r)
        },
        _daylightSavingAdjust: function(e) {
            return e ? (e.setHours(e.getHours() > 12 ? e.getHours() + 2 : 0), e) : null
        },
        _setDate: function(e, t, i) {
            var s = !t,
                a = e.selectedMonth,
                n = e.selectedYear,
                r = this._restrictMinMax(e, this._determineDate(e, t, new Date));
            e.selectedDay = e.currentDay = r.getDate(), e.drawMonth = e.selectedMonth = e.currentMonth = r.getMonth(), e.drawYear = e.selectedYear = e.currentYear = r.getFullYear(), a === e.selectedMonth && n === e.selectedYear || i || this._notifyChange(e), this._adjustInstDate(e), e.input && e.input.val(s ? "" : this._formatDate(e))
        },
        _getDate: function(e) {
            var t = !e.currentYear || e.input && "" === e.input.val() ? null : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
            return t
        },
        _attachHandlers: function(t) {
            var i = this._get(t, "stepMonths"),
                s = "#" + t.id.replace(/\\\\/g, "\\");
            t.dpDiv.find("[data-handler]").map(function() {
                var t = {
                    prev: function() {
                        e.datepicker._adjustDate(s, -i, "M")
                    },
                    next: function() {
                        e.datepicker._adjustDate(s, +i, "M")
                    },
                    hide: function() {
                        e.datepicker._hideDatepicker()
                    },
                    today: function() {
                        e.datepicker._gotoToday(s)
                    },
                    selectDay: function() {
                        return e.datepicker._selectDay(s, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
                    },
                    selectMonth: function() {
                        return e.datepicker._selectMonthYear(s, this, "M"), !1
                    },
                    selectYear: function() {
                        return e.datepicker._selectMonthYear(s, this, "Y"), !1
                    }
                };
                e(this).bind(this.getAttribute("data-event"), t[this.getAttribute("data-handler")])
            })
        },
        _generateHTML: function(e) {
            var t, i, s, a, n, r, o, h, l, u, d, c, p, f, m, g, v, y, b, _, x, k, w, D, T, S, M, N, C, A, I, P, F, H, j, E, z, O, L, W = new Date,
                R = this._daylightSavingAdjust(new Date(W.getFullYear(), W.getMonth(), W.getDate())),
                Y = this._get(e, "isRTL"),
                J = this._get(e, "showButtonPanel"),
                B = this._get(e, "hideIfNoPrevNext"),
                K = this._get(e, "navigationAsDateFormat"),
                q = this._getNumberOfMonths(e),
                V = this._get(e, "showCurrentAtPos"),
                U = this._get(e, "stepMonths"),
                G = 1 !== q[0] || 1 !== q[1],
                Q = this._daylightSavingAdjust(e.currentDay ? new Date(e.currentYear, e.currentMonth, e.currentDay) : new Date(9999, 9, 9)),
                X = this._getMinMaxDate(e, "min"),
                $ = this._getMinMaxDate(e, "max"),
                Z = e.drawMonth - V,
                et = e.drawYear;
            if (0 > Z && (Z += 12, et--), $)
                for (t = this._daylightSavingAdjust(new Date($.getFullYear(), $.getMonth() - q[0] * q[1] + 1, $.getDate())), t = X && X > t ? X : t; this._daylightSavingAdjust(new Date(et, Z, 1)) > t;) Z--, 0 > Z && (Z = 11, et--);
            for (e.drawMonth = Z, e.drawYear = et, i = this._get(e, "prevText"), i = K ? this.formatDate(i, this._daylightSavingAdjust(new Date(et, Z - U, 1)), this._getFormatConfig(e)) : i, s = this._canAdjustMonth(e, -1, et, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><i class='ico-arrow-left-alt1'></i></a>" : B ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><i class='ico-arrow-right-alt1'></i></a>", a = this._get(e, "nextText"), a = K ? this.formatDate(a, this._daylightSavingAdjust(new Date(et, Z + U, 1)), this._getFormatConfig(e)) : a, n = this._canAdjustMonth(e, 1, et, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + a + "'><i class='ico-arrow-right-alt1'></i></a>" : B ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + a + "'><i class='ico-arrow-right-alt1'></i></a>", r = this._get(e, "currentText"), o = this._get(e, "gotoCurrent") && e.currentDay ? Q : R, r = K ? this.formatDate(r, o, this._getFormatConfig(e)) : r, h = e.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(e, "closeText") + "</button>", l = J ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (Y ? h : "") + (this._isInRange(e, o) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + r + "</button>" : "") + (Y ? "" : h) + "</div>" : "", u = parseInt(this._get(e, "firstDay"), 10), u = isNaN(u) ? 0 : u, d = this._get(e, "showWeek"), c = this._get(e, "dayNames"), p = this._get(e, "dayNamesMin"), f = this._get(e, "monthNames"), m = this._get(e, "monthNamesShort"), g = this._get(e, "beforeShowDay"), v = this._get(e, "showOtherMonths"), y = this._get(e, "selectOtherMonths"), b = this._getDefaultDate(e), _ = "", k = 0; q[0] > k; k++) {
                for (w = "", this.maxRows = 4, D = 0; q[1] > D; D++) {
                    if (T = this._daylightSavingAdjust(new Date(et, Z, e.selectedDay)), S = " ui-corner-all", M = "", G) {
                        if (M += "<div class='ui-datepicker-group", q[1] > 1) switch (D) {
                            case 0:
                                M += " ui-datepicker-group-first", S = " ui-corner-" + (Y ? "right" : "left");
                                break;
                            case q[1] - 1:
                                M += " ui-datepicker-group-last", S = " ui-corner-" + (Y ? "left" : "right");
                                break;
                            default:
                                M += " ui-datepicker-group-middle", S = ""
                        }
                        M += "'>"
                    }
                    for (M += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + S + "'>" + (/all|left/.test(S) && 0 === k ? Y ? n : s : "") + (/all|right/.test(S) && 0 === k ? Y ? s : n : "") + this._generateMonthYearHeader(e, Z, et, X, $, k > 0 || D > 0, f, m) + "</div><table class='ui-datepicker-calendar'><thead>" + "<tr>", N = d ? "<th class='ui-datepicker-week-col'>" + this._get(e, "weekHeader") + "</th>" : "", x = 0; 7 > x; x++) C = (x + u) % 7, N += "<th scope='col'" + ((x + u + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + ">" + "<span title='" + c[C] + "'>" + p[C] + "</span></th>";
                    for (M += N + "</tr></thead><tbody>", A = this._getDaysInMonth(et, Z), et === e.selectedYear && Z === e.selectedMonth && (e.selectedDay = Math.min(e.selectedDay, A)), I = (this._getFirstDayOfMonth(et, Z) - u + 7) % 7, P = Math.ceil((I + A) / 7), F = G ? this.maxRows > P ? this.maxRows : P : P, this.maxRows = F, H = this._daylightSavingAdjust(new Date(et, Z, 1 - I)), j = 0; F > j; j++) {
                        for (M += "<tr>", E = d ? "<td class='ui-datepicker-week-col'>" + this._get(e, "calculateWeek")(H) + "</td>" : "", x = 0; 7 > x; x++) z = g ? g.apply(e.input ? e.input[0] : null, [H]) : [!0, ""], O = H.getMonth() !== Z, L = O && !y || !z[0] || X && X > H || $ && H > $, E += "<td class='" + ((x + u + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (O ? " ui-datepicker-other-month" : "") + (H.getTime() === T.getTime() && Z === e.selectedMonth && e._keyEvent || b.getTime() === H.getTime() && b.getTime() === T.getTime() ? " " + this._dayOverClass : "") + (L ? " " + this._unselectableClass + " ui-state-disabled" : "") + (O && !v ? "" : " " + z[1] + (H.getTime() === Q.getTime() ? " " + this._currentClass : "") + (H.getTime() === R.getTime() ? " ui-datepicker-today" : "")) + "'" + (O && !v || !z[2] ? "" : " title='" + z[2].replace(/'/g, "&#39;") + "'") + (L ? "" : " data-handler='selectDay' data-event='click' data-month='" + H.getMonth() + "' data-year='" + H.getFullYear() + "'") + ">" + (O && !v ? "&#xa0;" : L ? "<span class='ui-state-default'>" + H.getDate() + "</span>" : "<a class='ui-state-default" + (H.getTime() === R.getTime() ? " ui-state-highlight" : "") + (H.getTime() === Q.getTime() ? " ui-state-active" : "") + (O ? " ui-priority-secondary" : "") + "' href='#'>" + H.getDate() + "</a>") + "</td>", H.setDate(H.getDate() + 1), H = this._daylightSavingAdjust(H);
                        M += E + "</tr>"
                    }
                    Z++, Z > 11 && (Z = 0, et++), M += "</tbody></table>" + (G ? "</div>" + (q[0] > 0 && D === q[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), w += M
                }
                _ += w
            }
            return _ += l, e._keyEvent = !1, _
        },
        _generateMonthYearHeader: function(e, t, i, s, a, n, r, o) {
            var h, l, u, d, c, p, f, m, g = this._get(e, "changeMonth"),
                v = this._get(e, "changeYear"),
                y = this._get(e, "showMonthAfterYear"),
                b = "<div class='ui-datepicker-title'>",
                _ = "";
            if (n || !g) _ += "<span class='ui-datepicker-month'>" + r[t] + "</span>";
            else {
                for (h = s && s.getFullYear() === i, l = a && a.getFullYear() === i, _ += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", u = 0; 12 > u; u++)(!h || u >= s.getMonth()) && (!l || a.getMonth() >= u) && (_ += "<option value='" + u + "'" + (u === t ? " selected='selected'" : "") + ">" + o[u] + "</option>");
                _ += "</select>"
            }
            if (y || (b += _ + (!n && g && v ? "" : "&#xa0;")), !e.yearshtml)
                if (e.yearshtml = "", n || !v) b += "<span class='ui-datepicker-year'>" + i + "</span>";
                else {
                    for (d = this._get(e, "yearRange").split(":"), c = (new Date).getFullYear(), p = function(e) {
                            var t = e.match(/c[+\-].*/) ? i + parseInt(e.substring(1), 10) : e.match(/[+\-].*/) ? c + parseInt(e, 10) : parseInt(e, 10);
                            return isNaN(t) ? c : t
                        }, f = p(d[0]), m = Math.max(f, p(d[1] || "")), f = s ? Math.max(f, s.getFullYear()) : f, m = a ? Math.min(m, a.getFullYear()) : m, e.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; m >= f; f++) e.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" : "") + ">" + f + "</option>";
                    e.yearshtml += "</select>", b += e.yearshtml, e.yearshtml = null
                }
            return b += this._get(e, "yearSuffix"), y && (b += (!n && g && v ? "" : "&#xa0;") + _), b += "</div>"
        },
        _adjustInstDate: function(e, t, i) {
            var s = e.drawYear + ("Y" === i ? t : 0),
                a = e.drawMonth + ("M" === i ? t : 0),
                n = Math.min(e.selectedDay, this._getDaysInMonth(s, a)) + ("D" === i ? t : 0),
                r = this._restrictMinMax(e, this._daylightSavingAdjust(new Date(s, a, n)));
            e.selectedDay = r.getDate(), e.drawMonth = e.selectedMonth = r.getMonth(), e.drawYear = e.selectedYear = r.getFullYear(), ("M" === i || "Y" === i) && this._notifyChange(e)
        },
        _restrictMinMax: function(e, t) {
            var i = this._getMinMaxDate(e, "min"),
                s = this._getMinMaxDate(e, "max"),
                a = i && i > t ? i : t;
            return s && a > s ? s : a
        },
        _notifyChange: function(e) {
            var t = this._get(e, "onChangeMonthYear");
            t && t.apply(e.input ? e.input[0] : null, [e.selectedYear, e.selectedMonth + 1, e])
        },
        _getNumberOfMonths: function(e) {
            var t = this._get(e, "numberOfMonths");
            return null == t ? [1, 1] : "number" == typeof t ? [1, t] : t
        },
        _getMinMaxDate: function(e, t) {
            return this._determineDate(e, this._get(e, t + "Date"), null)
        },
        _getDaysInMonth: function(e, t) {
            return 32 - this._daylightSavingAdjust(new Date(e, t, 32)).getDate()
        },
        _getFirstDayOfMonth: function(e, t) {
            return new Date(e, t, 1).getDay()
        },
        _canAdjustMonth: function(e, t, i, s) {
            var a = this._getNumberOfMonths(e),
                n = this._daylightSavingAdjust(new Date(i, s + (0 > t ? t : a[0] * a[1]), 1));
            return 0 > t && n.setDate(this._getDaysInMonth(n.getFullYear(), n.getMonth())), this._isInRange(e, n)
        },
        _isInRange: function(e, t) {
            var i, s, a = this._getMinMaxDate(e, "min"),
                n = this._getMinMaxDate(e, "max"),
                r = null,
                o = null,
                h = this._get(e, "yearRange");
            return h && (i = h.split(":"), s = (new Date).getFullYear(), r = parseInt(i[0], 10), o = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (r += s), i[1].match(/[+\-].*/) && (o += s)), (!a || t.getTime() >= a.getTime()) && (!n || t.getTime() <= n.getTime()) && (!r || t.getFullYear() >= r) && (!o || o >= t.getFullYear())
        },
        _getFormatConfig: function(e) {
            var t = this._get(e, "shortYearCutoff");
            return t = "string" != typeof t ? t : (new Date).getFullYear() % 100 + parseInt(t, 10), {
                shortYearCutoff: t,
                dayNamesShort: this._get(e, "dayNamesShort"),
                dayNames: this._get(e, "dayNames"),
                monthNamesShort: this._get(e, "monthNamesShort"),
                monthNames: this._get(e, "monthNames")
            }
        },
        _formatDate: function(e, t, i, s) {
            t || (e.currentDay = e.selectedDay, e.currentMonth = e.selectedMonth, e.currentYear = e.selectedYear);
            var a = t ? "object" == typeof t ? t : this._daylightSavingAdjust(new Date(s, i, t)) : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
            return this.formatDate(this._get(e, "dateFormat"), a, this._getFormatConfig(e))
        }
    }), e.fn.datepicker = function(t) {
        if (!this.length) return this;
        e.datepicker.initialized || (e(document).mousedown(e.datepicker._checkExternalClick), e.datepicker.initialized = !0), 0 === e("#" + e.datepicker._mainDivId).length && e("body").append(e.datepicker.dpDiv);
        var i = Array.prototype.slice.call(arguments, 1);
        return "string" != typeof t || "isDisabled" !== t && "getDate" !== t && "widget" !== t ? "option" === t && 2 === arguments.length && "string" == typeof arguments[1] ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(i)) : this.each(function() {
            "string" == typeof t ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this].concat(i)) : e.datepicker._attachDatepicker(this, t)
        }) : e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(i))
    }, e.datepicker = new a, e.datepicker.initialized = !1, e.datepicker.uuid = (new Date).getTime(), e.datepicker.version = "1.11.4", e.datepicker
});

// time picker 
!function($){if($.ui.timepicker=$.ui.timepicker||{},!$.ui.timepicker.version){$.extend($.ui,{timepicker:{version:"@@version"}});var Timepicker=function(){this.regional=[],this.regional[""]={currentText:"Now",closeText:"Done",amNames:["AM","A"],pmNames:["PM","P"],timeFormat:"HH:mm",timeSuffix:"",timeOnlyTitle:"Choose Time",timeText:"Time",hourText:"Hour",minuteText:"Minute",secondText:"Second",millisecText:"Millisecond",microsecText:"Microsecond",timezoneText:"Time Zone",isRTL:!1},this._defaults={showButtonPanel:!0,timeOnly:!1,timeOnlyShowDate:!1,showHour:null,showMinute:null,showSecond:null,showMillisec:null,showMicrosec:null,showTimezone:null,showTime:!0,stepHour:1,stepMinute:1,stepSecond:1,stepMillisec:1,stepMicrosec:1,hour:0,minute:0,second:0,millisec:0,microsec:0,timezone:null,hourMin:0,minuteMin:0,secondMin:0,millisecMin:0,microsecMin:0,hourMax:23,minuteMax:59,secondMax:59,millisecMax:999,microsecMax:999,minDateTime:null,maxDateTime:null,maxTime:null,minTime:null,onSelect:null,hourGrid:0,minuteGrid:0,secondGrid:0,millisecGrid:0,microsecGrid:0,alwaysSetTime:!0,separator:" ",altFieldTimeOnly:!0,altTimeFormat:null,altSeparator:null,altTimeSuffix:null,altRedirectFocus:!0,pickerTimeFormat:null,pickerTimeSuffix:null,showTimepicker:!0,timezoneList:null,addSliderAccess:!1,sliderAccessArgs:null,controlType:"select",defaultValue:null,parse:"strict"},$.extend(this._defaults,this.regional[""])};$.extend(Timepicker.prototype,{$input:null,$altInput:null,$timeObj:null,inst:null,hour_slider:null,minute_slider:null,second_slider:null,millisec_slider:null,microsec_slider:null,timezone_select:null,maxTime:null,minTime:null,hour:0,minute:0,second:0,millisec:0,microsec:0,timezone:null,hourMinOriginal:null,minuteMinOriginal:null,secondMinOriginal:null,millisecMinOriginal:null,microsecMinOriginal:null,hourMaxOriginal:null,minuteMaxOriginal:null,secondMaxOriginal:null,millisecMaxOriginal:null,microsecMaxOriginal:null,ampm:"",formattedDate:"",formattedTime:"",formattedDateTime:"",timezoneList:null,units:["hour","minute","second","millisec","microsec"],support:{},control:null,setDefaults:function(e){return extendRemove(this._defaults,e||{}),this},_newInst:function($input,opts){var tp_inst=new Timepicker,inlineSettings={},fns={},overrides,i;for(var attrName in this._defaults)if(this._defaults.hasOwnProperty(attrName)){var attrValue=$input.attr("time:"+attrName);if(attrValue)try{inlineSettings[attrName]=eval(attrValue)}catch(err){inlineSettings[attrName]=attrValue}}overrides={beforeShow:function(e,t){return $.isFunction(tp_inst._defaults.evnts.beforeShow)?tp_inst._defaults.evnts.beforeShow.call($input[0],e,t,tp_inst):void 0},onChangeMonthYear:function(e,t,i){tp_inst._updateDateTime(i),$.isFunction(tp_inst._defaults.evnts.onChangeMonthYear)&&tp_inst._defaults.evnts.onChangeMonthYear.call($input[0],e,t,i,tp_inst)},onClose:function(e,t){tp_inst.timeDefined===!0&&""!==$input.val()&&tp_inst._updateDateTime(t),$.isFunction(tp_inst._defaults.evnts.onClose)&&tp_inst._defaults.evnts.onClose.call($input[0],e,t,tp_inst)}};for(i in overrides)overrides.hasOwnProperty(i)&&(fns[i]=opts[i]||null);tp_inst._defaults=$.extend({},this._defaults,inlineSettings,opts,overrides,{evnts:fns,timepicker:tp_inst}),tp_inst.amNames=$.map(tp_inst._defaults.amNames,function(e){return e.toUpperCase()}),tp_inst.pmNames=$.map(tp_inst._defaults.pmNames,function(e){return e.toUpperCase()}),tp_inst.support=detectSupport(tp_inst._defaults.timeFormat+(tp_inst._defaults.pickerTimeFormat?tp_inst._defaults.pickerTimeFormat:"")+(tp_inst._defaults.altTimeFormat?tp_inst._defaults.altTimeFormat:"")),"string"==typeof tp_inst._defaults.controlType?("slider"===tp_inst._defaults.controlType&&"undefined"==typeof $.ui.slider&&(tp_inst._defaults.controlType="select"),tp_inst.control=tp_inst._controls[tp_inst._defaults.controlType]):tp_inst.control=tp_inst._defaults.controlType;var timezoneList=[-720,-660,-600,-570,-540,-480,-420,-360,-300,-270,-240,-210,-180,-120,-60,0,60,120,180,210,240,270,300,330,345,360,390,420,480,525,540,570,600,630,660,690,720,765,780,840];null!==tp_inst._defaults.timezoneList&&(timezoneList=tp_inst._defaults.timezoneList);var tzl=timezoneList.length,tzi=0,tzv=null;if(tzl>0&&"object"!=typeof timezoneList[0])for(;tzl>tzi;tzi++)tzv=timezoneList[tzi],timezoneList[tzi]={value:tzv,label:$.timepicker.timezoneOffsetString(tzv,tp_inst.support.iso8601)};return tp_inst._defaults.timezoneList=timezoneList,tp_inst.timezone=null!==tp_inst._defaults.timezone?$.timepicker.timezoneOffsetNumber(tp_inst._defaults.timezone):-1*(new Date).getTimezoneOffset(),tp_inst.hour=tp_inst._defaults.hour<tp_inst._defaults.hourMin?tp_inst._defaults.hourMin:tp_inst._defaults.hour>tp_inst._defaults.hourMax?tp_inst._defaults.hourMax:tp_inst._defaults.hour,tp_inst.minute=tp_inst._defaults.minute<tp_inst._defaults.minuteMin?tp_inst._defaults.minuteMin:tp_inst._defaults.minute>tp_inst._defaults.minuteMax?tp_inst._defaults.minuteMax:tp_inst._defaults.minute,tp_inst.second=tp_inst._defaults.second<tp_inst._defaults.secondMin?tp_inst._defaults.secondMin:tp_inst._defaults.second>tp_inst._defaults.secondMax?tp_inst._defaults.secondMax:tp_inst._defaults.second,tp_inst.millisec=tp_inst._defaults.millisec<tp_inst._defaults.millisecMin?tp_inst._defaults.millisecMin:tp_inst._defaults.millisec>tp_inst._defaults.millisecMax?tp_inst._defaults.millisecMax:tp_inst._defaults.millisec,tp_inst.microsec=tp_inst._defaults.microsec<tp_inst._defaults.microsecMin?tp_inst._defaults.microsecMin:tp_inst._defaults.microsec>tp_inst._defaults.microsecMax?tp_inst._defaults.microsecMax:tp_inst._defaults.microsec,tp_inst.ampm="",tp_inst.$input=$input,tp_inst._defaults.altField&&(tp_inst.$altInput=$(tp_inst._defaults.altField),tp_inst._defaults.altRedirectFocus===!0&&tp_inst.$altInput.css({cursor:"pointer"}).focus(function(){$input.trigger("focus")})),(0===tp_inst._defaults.minDate||0===tp_inst._defaults.minDateTime)&&(tp_inst._defaults.minDate=new Date),(0===tp_inst._defaults.maxDate||0===tp_inst._defaults.maxDateTime)&&(tp_inst._defaults.maxDate=new Date),void 0!==tp_inst._defaults.minDate&&tp_inst._defaults.minDate instanceof Date&&(tp_inst._defaults.minDateTime=new Date(tp_inst._defaults.minDate.getTime())),void 0!==tp_inst._defaults.minDateTime&&tp_inst._defaults.minDateTime instanceof Date&&(tp_inst._defaults.minDate=new Date(tp_inst._defaults.minDateTime.getTime())),void 0!==tp_inst._defaults.maxDate&&tp_inst._defaults.maxDate instanceof Date&&(tp_inst._defaults.maxDateTime=new Date(tp_inst._defaults.maxDate.getTime())),void 0!==tp_inst._defaults.maxDateTime&&tp_inst._defaults.maxDateTime instanceof Date&&(tp_inst._defaults.maxDate=new Date(tp_inst._defaults.maxDateTime.getTime())),tp_inst.$input.bind("focus",function(){tp_inst._onFocus()}),tp_inst},_addTimePicker:function(e){var t=this.$altInput&&this._defaults.altFieldTimeOnly?this.$input.val()+" "+this.$altInput.val():this.$input.val();this.timeDefined=this._parseTime(t),this._limitMinMaxDateTime(e,!1),this._injectTimePicker()},_parseTime:function(e,t){if(this.inst||(this.inst=$.datepicker._getInst(this.$input[0])),t||!this._defaults.timeOnly){var i=$.datepicker._get(this.inst,"dateFormat");try{var s=parseDateTimeInternal(i,this._defaults.timeFormat,e,$.datepicker._getFormatConfig(this.inst),this._defaults);if(!s.timeObj)return!1;$.extend(this,s.timeObj)}catch(a){return $.timepicker.log("Error parsing the date/time string: "+a+"\ndate/time string = "+e+"\ntimeFormat = "+this._defaults.timeFormat+"\ndateFormat = "+i),!1}return!0}var n=$.datepicker.parseTime(this._defaults.timeFormat,e,this._defaults);return n?($.extend(this,n),!0):!1},_injectTimePicker:function(){var e=this.inst.dpDiv,t=this.inst.settings,i=this,s="",a="",n=null,r={},l={},o=null,c=0,u=0;if(0===e.find("div.ui-timepicker-div").length&&t.showTimepicker){var m=' style="display:none;"',d='<div style="padding-top:10px" class="ui-timepicker-div'+(t.isRTL?" ui-timepicker-rtl":"")+'"><dl><span class="dpTime"><dt class="ui_tpicker_time_label"'+(t.showTime?"":m)+">"+t.timeText+'</dt><dd class="ui_tpicker_time"'+(t.showTime?"":m)+"></dd></span>";for(c=0,u=this.units.length;u>c;c++){if(s=this.units[c],a=s.substr(0,1).toUpperCase()+s.substr(1),n=null!==t["show"+a]?t["show"+a]:this.support[s],r[s]=parseInt(t[s+"Max"]-(t[s+"Max"]-t[s+"Min"])%t["step"+a],10),l[s]=0,d+='<span class="timeRow"><dt class="ui_tpicker_'+s+'_label"'+(n?"":m)+">"+t[s+"Text"]+'</dt><dd class="ui_tpicker_'+s+'"><div class="ui_tpicker_'+s+'_slider"'+(n?"":m)+"></div>",n&&t[s+"Grid"]>0){if(d+='<div style="padding-left: 1px"><table class="ui-tpicker-grid-label"><tr>',"hour"===s)for(var h=t[s+"Min"];h<=r[s];h+=parseInt(t[s+"Grid"],10)){l[s]++;var p=$.datepicker.formatTime(this.support.ampm?"hht":"HH",{hour:h},t);d+='<td data-for="'+s+'">'+p+"</td>"}else for(var _=t[s+"Min"];_<=r[s];_+=parseInt(t[s+"Grid"],10))l[s]++,d+='<td data-for="'+s+'">'+(10>_?"0":"")+_+"</td>";d+="</tr></table></div>"}d+="</dd></span>"}var f=null!==t.showTimezone?t.showTimezone:this.support.timezone;d+='<dt class="ui_tpicker_timezone_label"'+(f?"":m)+">"+t.timezoneText+"</dt>",d+='<dd class="ui_tpicker_timezone" '+(f?"":m)+"></dd>",d+="</dl></div>";var g=$(d);for(t.timeOnly===!0&&(g.prepend('<div class="ui-widget-header ui-helper-clearfix ui-corner-all"><div class="ui-datepicker-title">'+t.timeOnlyTitle+"</div></div>"),e.find(".ui-datepicker-header, .ui-datepicker-calendar").hide()),c=0,u=i.units.length;u>c;c++)s=i.units[c],a=s.substr(0,1).toUpperCase()+s.substr(1),n=null!==t["show"+a]?t["show"+a]:this.support[s],i[s+"_slider"]=i.control.create(i,g.find(".ui_tpicker_"+s+"_slider"),s,i[s],t[s+"Min"],r[s],t["step"+a]),n&&t[s+"Grid"]>0&&(o=100*l[s]*t[s+"Grid"]/(r[s]-t[s+"Min"]),g.find(".ui_tpicker_"+s+" table").css({width:o+"%",marginLeft:t.isRTL?"0":o/(-2*l[s])+"%",marginRight:t.isRTL?o/(-2*l[s])+"%":"0",borderCollapse:"collapse"}).find("td").click(function(e){var t=$(this),a=t.html(),n=parseInt(a.replace(/[^0-9]/g),10),r=a.replace(/[^apm]/gi),l=t.data("for");"hour"===l&&(-1!==r.indexOf("p")&&12>n?n+=12:-1!==r.indexOf("a")&&12===n&&(n=0)),i.control.value(i,i[l+"_slider"],s,n),i._onTimeChange(),i._onSelectHandler()}).css({cursor:"pointer",width:100/l[s]+"%",textAlign:"center",overflow:"hidden"}));if(this.timezone_select=g.find(".ui_tpicker_timezone").append("<select></select>").find("select"),$.fn.append.apply(this.timezone_select,$.map(t.timezoneList,function(e,t){return $("<option />").val("object"==typeof e?e.value:e).text("object"==typeof e?e.label:e)})),"undefined"!=typeof this.timezone&&null!==this.timezone&&""!==this.timezone){var M=-1*new Date(this.inst.selectedYear,this.inst.selectedMonth,this.inst.selectedDay,12).getTimezoneOffset();M===this.timezone?selectLocalTimezone(i):this.timezone_select.val(this.timezone)}else"undefined"!=typeof this.hour&&null!==this.hour&&""!==this.hour?this.timezone_select.val(t.timezone):selectLocalTimezone(i);this.timezone_select.change(function(){i._onTimeChange(),i._onSelectHandler()});var v=e.find(".ui-datepicker-buttonpane");if(v.length?v.before(g):e.append(g),this.$timeObj=g.find(".ui_tpicker_time"),null!==this.inst){var k=this.timeDefined;this._onTimeChange(),this.timeDefined=k}if(this._defaults.addSliderAccess){var T=this._defaults.sliderAccessArgs,D=this._defaults.isRTL;T.isRTL=D,setTimeout(function(){if(0===g.find(".ui-slider-access").length){g.find(".ui-slider:visible").sliderAccess(T);var e=g.find(".ui-slider-access:eq(0)").outerWidth(!0);e&&g.find("table:visible").each(function(){var t=$(this),i=t.outerWidth(),s=t.css(D?"marginRight":"marginLeft").toString().replace("%",""),a=i-e,n=s*a/i+"%",r={width:a,marginRight:0,marginLeft:0};r[D?"marginRight":"marginLeft"]=n,t.css(r)})}},10)}i._limitMinMaxDateTime(this.inst,!0)}},_limitMinMaxDateTime:function(e,t){var i=this._defaults,s=new Date(e.selectedYear,e.selectedMonth,e.selectedDay);if(this._defaults.showTimepicker){if(null!==$.datepicker._get(e,"minDateTime")&&void 0!==$.datepicker._get(e,"minDateTime")&&s){var a=$.datepicker._get(e,"minDateTime"),n=new Date(a.getFullYear(),a.getMonth(),a.getDate(),0,0,0,0);(null===this.hourMinOriginal||null===this.minuteMinOriginal||null===this.secondMinOriginal||null===this.millisecMinOriginal||null===this.microsecMinOriginal)&&(this.hourMinOriginal=i.hourMin,this.minuteMinOriginal=i.minuteMin,this.secondMinOriginal=i.secondMin,this.millisecMinOriginal=i.millisecMin,this.microsecMinOriginal=i.microsecMin),e.settings.timeOnly||n.getTime()===s.getTime()?(this._defaults.hourMin=a.getHours(),this.hour<=this._defaults.hourMin?(this.hour=this._defaults.hourMin,this._defaults.minuteMin=a.getMinutes(),this.minute<=this._defaults.minuteMin?(this.minute=this._defaults.minuteMin,this._defaults.secondMin=a.getSeconds(),this.second<=this._defaults.secondMin?(this.second=this._defaults.secondMin,this._defaults.millisecMin=a.getMilliseconds(),this.millisec<=this._defaults.millisecMin?(this.millisec=this._defaults.millisecMin,this._defaults.microsecMin=a.getMicroseconds()):(this.microsec<this._defaults.microsecMin&&(this.microsec=this._defaults.microsecMin),this._defaults.microsecMin=this.microsecMinOriginal)):(this._defaults.millisecMin=this.millisecMinOriginal,this._defaults.microsecMin=this.microsecMinOriginal)):(this._defaults.secondMin=this.secondMinOriginal,this._defaults.millisecMin=this.millisecMinOriginal,this._defaults.microsecMin=this.microsecMinOriginal)):(this._defaults.minuteMin=this.minuteMinOriginal,this._defaults.secondMin=this.secondMinOriginal,this._defaults.millisecMin=this.millisecMinOriginal,this._defaults.microsecMin=this.microsecMinOriginal)):(this._defaults.hourMin=this.hourMinOriginal,this._defaults.minuteMin=this.minuteMinOriginal,this._defaults.secondMin=this.secondMinOriginal,this._defaults.millisecMin=this.millisecMinOriginal,this._defaults.microsecMin=this.microsecMinOriginal)}if(null!==$.datepicker._get(e,"maxDateTime")&&void 0!==$.datepicker._get(e,"maxDateTime")&&s){var r=$.datepicker._get(e,"maxDateTime"),l=new Date(r.getFullYear(),r.getMonth(),r.getDate(),0,0,0,0);(null===this.hourMaxOriginal||null===this.minuteMaxOriginal||null===this.secondMaxOriginal||null===this.millisecMaxOriginal)&&(this.hourMaxOriginal=i.hourMax,this.minuteMaxOriginal=i.minuteMax,this.secondMaxOriginal=i.secondMax,this.millisecMaxOriginal=i.millisecMax,this.microsecMaxOriginal=i.microsecMax),e.settings.timeOnly||l.getTime()===s.getTime()?(this._defaults.hourMax=r.getHours(),this.hour>=this._defaults.hourMax?(this.hour=this._defaults.hourMax,this._defaults.minuteMax=r.getMinutes(),this.minute>=this._defaults.minuteMax?(this.minute=this._defaults.minuteMax,this._defaults.secondMax=r.getSeconds(),this.second>=this._defaults.secondMax?(this.second=this._defaults.secondMax,this._defaults.millisecMax=r.getMilliseconds(),this.millisec>=this._defaults.millisecMax?(this.millisec=this._defaults.millisecMax,this._defaults.microsecMax=r.getMicroseconds()):(this.microsec>this._defaults.microsecMax&&(this.microsec=this._defaults.microsecMax),this._defaults.microsecMax=this.microsecMaxOriginal)):(this._defaults.millisecMax=this.millisecMaxOriginal,this._defaults.microsecMax=this.microsecMaxOriginal)):(this._defaults.secondMax=this.secondMaxOriginal,this._defaults.millisecMax=this.millisecMaxOriginal,this._defaults.microsecMax=this.microsecMaxOriginal)):(this._defaults.minuteMax=this.minuteMaxOriginal,this._defaults.secondMax=this.secondMaxOriginal,this._defaults.millisecMax=this.millisecMaxOriginal,this._defaults.microsecMax=this.microsecMaxOriginal)):(this._defaults.hourMax=this.hourMaxOriginal,this._defaults.minuteMax=this.minuteMaxOriginal,this._defaults.secondMax=this.secondMaxOriginal,this._defaults.millisecMax=this.millisecMaxOriginal,this._defaults.microsecMax=this.microsecMaxOriginal)}if(null!==e.settings.minTime){var o=new Date("01/01/1970 "+e.settings.minTime);this.hour<o.getHours()?(this.hour=this._defaults.hourMin=o.getHours(),this.minute=this._defaults.minuteMin=o.getMinutes()):this.hour===o.getHours()&&this.minute<o.getMinutes()?this.minute=this._defaults.minuteMin=o.getMinutes():this._defaults.hourMin<o.getHours()?(this._defaults.hourMin=o.getHours(),this._defaults.minuteMin=o.getMinutes()):this._defaults.hourMin===o.getHours()===this.hour&&this._defaults.minuteMin<o.getMinutes()?this._defaults.minuteMin=o.getMinutes():this._defaults.minuteMin=0}if(null!==e.settings.maxTime){var c=new Date("01/01/1970 "+e.settings.maxTime);this.hour>c.getHours()?(this.hour=this._defaults.hourMax=c.getHours(),this.minute=this._defaults.minuteMax=c.getMinutes()):this.hour===c.getHours()&&this.minute>c.getMinutes()?this.minute=this._defaults.minuteMax=c.getMinutes():this._defaults.hourMax>c.getHours()?(this._defaults.hourMax=c.getHours(),this._defaults.minuteMax=c.getMinutes()):this._defaults.hourMax===c.getHours()===this.hour&&this._defaults.minuteMax>c.getMinutes()?this._defaults.minuteMax=c.getMinutes():this._defaults.minuteMax=59}if(void 0!==t&&t===!0){var u=parseInt(this._defaults.hourMax-(this._defaults.hourMax-this._defaults.hourMin)%this._defaults.stepHour,10),m=parseInt(this._defaults.minuteMax-(this._defaults.minuteMax-this._defaults.minuteMin)%this._defaults.stepMinute,10),d=parseInt(this._defaults.secondMax-(this._defaults.secondMax-this._defaults.secondMin)%this._defaults.stepSecond,10),h=parseInt(this._defaults.millisecMax-(this._defaults.millisecMax-this._defaults.millisecMin)%this._defaults.stepMillisec,10),p=parseInt(this._defaults.microsecMax-(this._defaults.microsecMax-this._defaults.microsecMin)%this._defaults.stepMicrosec,10);this.hour_slider&&(this.control.options(this,this.hour_slider,"hour",{min:this._defaults.hourMin,max:u,step:this._defaults.stepHour}),this.control.value(this,this.hour_slider,"hour",this.hour-this.hour%this._defaults.stepHour)),this.minute_slider&&(this.control.options(this,this.minute_slider,"minute",{min:this._defaults.minuteMin,max:m,step:this._defaults.stepMinute}),this.control.value(this,this.minute_slider,"minute",this.minute-this.minute%this._defaults.stepMinute)),this.second_slider&&(this.control.options(this,this.second_slider,"second",{min:this._defaults.secondMin,max:d,step:this._defaults.stepSecond}),this.control.value(this,this.second_slider,"second",this.second-this.second%this._defaults.stepSecond)),this.millisec_slider&&(this.control.options(this,this.millisec_slider,"millisec",{min:this._defaults.millisecMin,max:h,step:this._defaults.stepMillisec}),this.control.value(this,this.millisec_slider,"millisec",this.millisec-this.millisec%this._defaults.stepMillisec)),this.microsec_slider&&(this.control.options(this,this.microsec_slider,"microsec",{min:this._defaults.microsecMin,max:p,step:this._defaults.stepMicrosec}),this.control.value(this,this.microsec_slider,"microsec",this.microsec-this.microsec%this._defaults.stepMicrosec))}}},_onTimeChange:function(){if(this._defaults.showTimepicker){var e=this.hour_slider?this.control.value(this,this.hour_slider,"hour"):!1,t=this.minute_slider?this.control.value(this,this.minute_slider,"minute"):!1,i=this.second_slider?this.control.value(this,this.second_slider,"second"):!1,s=this.millisec_slider?this.control.value(this,this.millisec_slider,"millisec"):!1,a=this.microsec_slider?this.control.value(this,this.microsec_slider,"microsec"):!1,n=this.timezone_select?this.timezone_select.val():!1,r=this._defaults,l=r.pickerTimeFormat||r.timeFormat,o=r.pickerTimeSuffix||r.timeSuffix;"object"==typeof e&&(e=!1),"object"==typeof t&&(t=!1),"object"==typeof i&&(i=!1),"object"==typeof s&&(s=!1),"object"==typeof a&&(a=!1),"object"==typeof n&&(n=!1),e!==!1&&(e=parseInt(e,10)),t!==!1&&(t=parseInt(t,10)),i!==!1&&(i=parseInt(i,10)),s!==!1&&(s=parseInt(s,10)),a!==!1&&(a=parseInt(a,10)),n!==!1&&(n=n.toString());var c=r[12>e?"amNames":"pmNames"][0],u=e!==parseInt(this.hour,10)||t!==parseInt(this.minute,10)||i!==parseInt(this.second,10)||s!==parseInt(this.millisec,10)||a!==parseInt(this.microsec,10)||this.ampm.length>0&&12>e!=(-1!==$.inArray(this.ampm.toUpperCase(),this.amNames))||null!==this.timezone&&n!==this.timezone.toString();u&&(e!==!1&&(this.hour=e),t!==!1&&(this.minute=t),i!==!1&&(this.second=i),s!==!1&&(this.millisec=s),a!==!1&&(this.microsec=a),n!==!1&&(this.timezone=n),this.inst||(this.inst=$.datepicker._getInst(this.$input[0])),this._limitMinMaxDateTime(this.inst,!0)),this.support.ampm&&(this.ampm=c),this.formattedTime=$.datepicker.formatTime(r.timeFormat,this,r),this.$timeObj&&this.$timeObj.text(l===r.timeFormat?this.formattedTime+o:$.datepicker.formatTime(l,this,r)+o),this.timeDefined=!0,u&&this._updateDateTime()}},_onSelectHandler:function(){var e=this._defaults.onSelect||this.inst.settings.onSelect,t=this.$input?this.$input[0]:null;e&&t&&e.apply(t,[this.formattedDateTime,this])},_updateDateTime:function(e){e=this.inst||e;var t=e.currentYear>0?new Date(e.currentYear,e.currentMonth,e.currentDay):new Date(e.selectedYear,e.selectedMonth,e.selectedDay),i=$.datepicker._daylightSavingAdjust(t),s=$.datepicker._get(e,"dateFormat"),a=$.datepicker._getFormatConfig(e),n=null!==i&&this.timeDefined;this.formattedDate=$.datepicker.formatDate(s,null===i?new Date:i,a);var r=this.formattedDate;if(""===e.lastVal&&(e.currentYear=e.selectedYear,e.currentMonth=e.selectedMonth,e.currentDay=e.selectedDay),this._defaults.timeOnly===!0&&this._defaults.timeOnlyShowDate===!1?r=this.formattedTime:(this._defaults.timeOnly!==!0&&(this._defaults.alwaysSetTime||n)||this._defaults.timeOnly===!0&&this._defaults.timeOnlyShowDate===!0)&&(r+=this._defaults.separator+this.formattedTime+this._defaults.timeSuffix),this.formattedDateTime=r,this._defaults.showTimepicker)if(this.$altInput&&this._defaults.timeOnly===!1&&this._defaults.altFieldTimeOnly===!0)this.$altInput.val(this.formattedTime),this.$input.val(this.formattedDate);else if(this.$altInput){this.$input.val(r);var l="",o=null!==this._defaults.altSeparator?this._defaults.altSeparator:this._defaults.separator,c=null!==this._defaults.altTimeSuffix?this._defaults.altTimeSuffix:this._defaults.timeSuffix;this._defaults.timeOnly||(l=this._defaults.altFormat?$.datepicker.formatDate(this._defaults.altFormat,null===i?new Date:i,a):this.formattedDate,l&&(l+=o)),l+=null!==this._defaults.altTimeFormat?$.datepicker.formatTime(this._defaults.altTimeFormat,this,this._defaults)+c:this.formattedTime+c,this.$altInput.val(l)}else this.$input.val(r);else this.$input.val(this.formattedDate);this.$input.trigger("change")},_onFocus:function(){if(!this.$input.val()&&this._defaults.defaultValue){this.$input.val(this._defaults.defaultValue);var e=$.datepicker._getInst(this.$input.get(0)),t=$.datepicker._get(e,"timepicker");if(t&&t._defaults.timeOnly&&e.input.val()!==e.lastVal)try{$.datepicker._updateDatepicker(e)}catch(i){$.timepicker.log(i)}}},_controls:{slider:{create:function(e,t,i,s,a,n,r){var l=e._defaults.isRTL;return t.prop("slide",null).slider({orientation:"horizontal",value:l?-1*s:s,min:l?-1*n:a,max:l?-1*a:n,step:r,slide:function(t,s){e.control.value(e,$(this),i,l?-1*s.value:s.value),e._onTimeChange()},stop:function(t,i){e._onSelectHandler()}})},options:function(e,t,i,s,a){if(e._defaults.isRTL){if("string"==typeof s)return"min"===s||"max"===s?void 0!==a?t.slider(s,-1*a):Math.abs(t.slider(s)):t.slider(s);var n=s.min,r=s.max;return s.min=s.max=null,void 0!==n&&(s.max=-1*n),void 0!==r&&(s.min=-1*r),t.slider(s)}return"string"==typeof s&&void 0!==a?t.slider(s,a):t.slider(s)},value:function(e,t,i,s){return e._defaults.isRTL?void 0!==s?t.slider("value",-1*s):Math.abs(t.slider("value")):void 0!==s?t.slider("value",s):t.slider("value")}},select:{create:function(e,t,i,s,a,n,r){for(var l='<select class="ui-timepicker-select" data-unit="'+i+'" data-min="'+a+'" data-max="'+n+'" data-step="'+r+'">',o=e._defaults.pickerTimeFormat||e._defaults.timeFormat,c=a;n>=c;c+=r)l+='<option value="'+c+'"'+(c===s?" selected":"")+">",l+="hour"===i?$.datepicker.formatTime($.trim(o.replace(/[^ht ]/gi,"")),{hour:c},e._defaults):"millisec"===i||"microsec"===i||c>=10?c:"0"+c.toString(),l+="</option>";return l+="</select>",t.children("select").remove(),$(l).appendTo(t).change(function(t){e._onTimeChange(),e._onSelectHandler()}),t},options:function(e,t,i,s,a){var n={},r=t.children("select");if("string"==typeof s){if(void 0===a)return r.data(s);n[s]=a}else n=s;return e.control.create(e,t,r.data("unit"),r.val(),n.min||r.data("min"),n.max||r.data("max"),n.step||r.data("step"))},value:function(e,t,i,s){var a=t.children("select");return void 0!==s?a.val(s):a.val()}}}}),$.fn.extend({timepicker:function(e){e=e||{};var t=Array.prototype.slice.call(arguments);return"object"==typeof e&&(t[0]=$.extend(e,{timeOnly:!0})),$(this).each(function(){$.fn.datetimepicker.apply($(this),t)})},datetimepicker:function(e){e=e||{};var t=arguments;return"string"==typeof e?"getDate"===e||"option"===e&&2===t.length&&"string"==typeof t[1]?$.fn.datepicker.apply($(this[0]),t):this.each(function(){var e=$(this);e.datepicker.apply(e,t)}):this.each(function(){var t=$(this);t.datepicker($.timepicker._newInst(t,e)._defaults)})}}),$.datepicker.parseDateTime=function(e,t,i,s,a){var n=parseDateTimeInternal(e,t,i,s,a);if(n.timeObj){var r=n.timeObj;n.date.setHours(r.hour,r.minute,r.second,r.millisec),n.date.setMicroseconds(r.microsec)}return n.date},$.datepicker.parseTime=function(e,t,i){var s=extendRemove(extendRemove({},$.timepicker._defaults),i||{}),a=(-1!==e.replace(/\'.*?\'/g,"").indexOf("Z"),function(e,t,i){var s,a=function(e,t){var i=[];return e&&$.merge(i,e),t&&$.merge(i,t),i=$.map(i,function(e){return e.replace(/[.*+?|()\[\]{}\\]/g,"\\$&")}),"("+i.join("|")+")?"},n=function(e){var t=e.toLowerCase().match(/(h{1,2}|m{1,2}|s{1,2}|l{1}|c{1}|t{1,2}|z|'.*?')/g),i={h:-1,m:-1,s:-1,l:-1,c:-1,t:-1,z:-1};if(t)for(var s=0;s<t.length;s++)-1===i[t[s].toString().charAt(0)]&&(i[t[s].toString().charAt(0)]=s+1);return i},r="^"+e.toString().replace(/([hH]{1,2}|mm?|ss?|[tT]{1,2}|[zZ]|[lc]|'.*?')/g,function(e){var t=e.length;switch(e.charAt(0).toLowerCase()){case"h":return 1===t?"(\\d?\\d)":"(\\d{"+t+"})";case"m":return 1===t?"(\\d?\\d)":"(\\d{"+t+"})";case"s":return 1===t?"(\\d?\\d)":"(\\d{"+t+"})";case"l":return"(\\d?\\d?\\d)";case"c":return"(\\d?\\d?\\d)";case"z":return"(z|[-+]\\d\\d:?\\d\\d|\\S+)?";case"t":return a(i.amNames,i.pmNames);default:return"("+e.replace(/\'/g,"").replace(/(\.|\$|\^|\\|\/|\(|\)|\[|\]|\?|\+|\*)/g,function(e){return"\\"+e})+")?"}}).replace(/\s/g,"\\s?")+i.timeSuffix+"$",l=n(e),o="";s=t.match(new RegExp(r,"i"));var c={hour:0,minute:0,second:0,millisec:0,microsec:0};return s?(-1!==l.t&&(void 0===s[l.t]||0===s[l.t].length?(o="",c.ampm=""):(o=-1!==$.inArray(s[l.t].toUpperCase(),i.amNames)?"AM":"PM",c.ampm=i["AM"===o?"amNames":"pmNames"][0])),-1!==l.h&&("AM"===o&&"12"===s[l.h]?c.hour=0:"PM"===o&&"12"!==s[l.h]?c.hour=parseInt(s[l.h],10)+12:c.hour=Number(s[l.h])),-1!==l.m&&(c.minute=Number(s[l.m])),-1!==l.s&&(c.second=Number(s[l.s])),-1!==l.l&&(c.millisec=Number(s[l.l])),-1!==l.c&&(c.microsec=Number(s[l.c])),-1!==l.z&&void 0!==s[l.z]&&(c.timezone=$.timepicker.timezoneOffsetNumber(s[l.z])),c):!1}),n=function(e,t,i){try{var s=new Date("2012-01-01 "+t);if(isNaN(s.getTime())&&(s=new Date("2012-01-01T"+t),isNaN(s.getTime())&&(s=new Date("01/01/2012 "+t),isNaN(s.getTime()))))throw"Unable to parse time with native Date: "+t;return{hour:s.getHours(),minute:s.getMinutes(),second:s.getSeconds(),millisec:s.getMilliseconds(),microsec:s.getMicroseconds(),timezone:-1*s.getTimezoneOffset()}}catch(n){try{return a(e,t,i)}catch(r){$.timepicker.log("Unable to parse \ntimeString: "+t+"\ntimeFormat: "+e)}}return!1};return"function"==typeof s.parse?s.parse(e,t,s):"loose"===s.parse?n(e,t,s):a(e,t,s)},$.datepicker.formatTime=function(e,t,i){i=i||{},i=$.extend({},$.timepicker._defaults,i),t=$.extend({hour:0,minute:0,second:0,millisec:0,microsec:0,timezone:null},t);var s=e,a=i.amNames[0],n=parseInt(t.hour,10);return n>11&&(a=i.pmNames[0]),s=s.replace(/(?:HH?|hh?|mm?|ss?|[tT]{1,2}|[zZ]|[lc]|'.*?')/g,function(e){switch(e){case"HH":return("0"+n).slice(-2);case"H":return n;case"hh":return("0"+convert24to12(n)).slice(-2);case"h":return convert24to12(n);case"mm":return("0"+t.minute).slice(-2);case"m":return t.minute;case"ss":return("0"+t.second).slice(-2);case"s":return t.second;case"l":return("00"+t.millisec).slice(-3);case"c":return("00"+t.microsec).slice(-3);case"z":return $.timepicker.timezoneOffsetString(null===t.timezone?i.timezone:t.timezone,!1);case"Z":return $.timepicker.timezoneOffsetString(null===t.timezone?i.timezone:t.timezone,!0);case"T":return a.charAt(0).toUpperCase();case"TT":return a.toUpperCase();case"t":return a.charAt(0).toLowerCase();case"tt":return a.toLowerCase();default:return e.replace(/'/g,"")}})},$.datepicker._base_selectDate=$.datepicker._selectDate,$.datepicker._selectDate=function(e,t){var i=this._getInst($(e)[0]),s=this._get(i,"timepicker");s&&i.settings.showTimepicker?(s._limitMinMaxDateTime(i,!0),i.inline=i.stay_open=!0,this._base_selectDate(e,t),i.inline=i.stay_open=!1,this._notifyChange(i),this._updateDatepicker(i)):this._base_selectDate(e,t)},$.datepicker._base_updateDatepicker=$.datepicker._updateDatepicker,$.datepicker._updateDatepicker=function(e){var t=e.input[0];if(!($.datepicker._curInst&&$.datepicker._curInst!==e&&$.datepicker._datepickerShowing&&$.datepicker._lastInput!==t||"boolean"==typeof e.stay_open&&e.stay_open!==!1)){this._base_updateDatepicker(e);var i=this._get(e,"timepicker");i&&i._addTimePicker(e)}},$.datepicker._base_doKeyPress=$.datepicker._doKeyPress,$.datepicker._doKeyPress=function(e){var t=$.datepicker._getInst(e.target),i=$.datepicker._get(t,"timepicker");if(i&&$.datepicker._get(t,"constrainInput")){var s=i.support.ampm,a=null!==i._defaults.showTimezone?i._defaults.showTimezone:i.support.timezone,n=$.datepicker._possibleChars($.datepicker._get(t,"dateFormat")),r=i._defaults.timeFormat.toString().replace(/[hms]/g,"").replace(/TT/g,s?"APM":"").replace(/Tt/g,s?"AaPpMm":"").replace(/tT/g,s?"AaPpMm":"").replace(/T/g,s?"AP":"").replace(/tt/g,s?"apm":"").replace(/t/g,s?"ap":"")+" "+i._defaults.separator+i._defaults.timeSuffix+(a?i._defaults.timezoneList.join(""):"")+i._defaults.amNames.join("")+i._defaults.pmNames.join("")+n,l=String.fromCharCode(void 0===e.charCode?e.keyCode:e.charCode);return e.ctrlKey||" ">l||!n||r.indexOf(l)>-1}return $.datepicker._base_doKeyPress(e)},$.datepicker._base_updateAlternate=$.datepicker._updateAlternate,$.datepicker._updateAlternate=function(e){var t=this._get(e,"timepicker");if(t){var i=t._defaults.altField;if(i){var s=(t._defaults.altFormat||t._defaults.dateFormat,this._getDate(e)),a=$.datepicker._getFormatConfig(e),n="",r=t._defaults.altSeparator?t._defaults.altSeparator:t._defaults.separator,l=t._defaults.altTimeSuffix?t._defaults.altTimeSuffix:t._defaults.timeSuffix,o=null!==t._defaults.altTimeFormat?t._defaults.altTimeFormat:t._defaults.timeFormat;n+=$.datepicker.formatTime(o,t,t._defaults)+l,t._defaults.timeOnly||t._defaults.altFieldTimeOnly||null===s||(n=t._defaults.altFormat?$.datepicker.formatDate(t._defaults.altFormat,s,a)+r+n:t.formattedDate+r+n),$(i).val(e.input.val()?n:"")}}else $.datepicker._base_updateAlternate(e)},$.datepicker._base_doKeyUp=$.datepicker._doKeyUp,$.datepicker._doKeyUp=function(e){var t=$.datepicker._getInst(e.target),i=$.datepicker._get(t,"timepicker");if(i&&i._defaults.timeOnly&&t.input.val()!==t.lastVal)try{$.datepicker._updateDatepicker(t)}catch(s){$.timepicker.log(s)}return $.datepicker._base_doKeyUp(e)},$.datepicker._base_gotoToday=$.datepicker._gotoToday,$.datepicker._gotoToday=function(e){var t=this._getInst($(e)[0]),i=t.dpDiv;this._base_gotoToday(e);var s=this._get(t,"timepicker");selectLocalTimezone(s);var a=new Date;this._setTime(t,a),$(".ui-datepicker-today",i).click()},$.datepicker._disableTimepickerDatepicker=function(e){var t=this._getInst(e);if(t){var i=this._get(t,"timepicker");$(e).datepicker("getDate"),i&&(t.settings.showTimepicker=!1,i._defaults.showTimepicker=!1,i._updateDateTime(t))}},$.datepicker._enableTimepickerDatepicker=function(e){var t=this._getInst(e);if(t){var i=this._get(t,"timepicker");$(e).datepicker("getDate"),
i&&(t.settings.showTimepicker=!0,i._defaults.showTimepicker=!0,i._addTimePicker(t),i._updateDateTime(t))}},$.datepicker._setTime=function(e,t){var i=this._get(e,"timepicker");if(i){var s=i._defaults;i.hour=t?t.getHours():s.hour,i.minute=t?t.getMinutes():s.minute,i.second=t?t.getSeconds():s.second,i.millisec=t?t.getMilliseconds():s.millisec,i.microsec=t?t.getMicroseconds():s.microsec,i._limitMinMaxDateTime(e,!0),i._onTimeChange(),i._updateDateTime(e)}},$.datepicker._setTimeDatepicker=function(e,t,i){var s=this._getInst(e);if(s){var a=this._get(s,"timepicker");if(a){this._setDateFromField(s);var n;t&&("string"==typeof t?(a._parseTime(t,i),n=new Date,n.setHours(a.hour,a.minute,a.second,a.millisec),n.setMicroseconds(a.microsec)):(n=new Date(t.getTime()),n.setMicroseconds(t.getMicroseconds())),"Invalid Date"===n.toString()&&(n=void 0),this._setTime(s,n))}}},$.datepicker._base_setDateDatepicker=$.datepicker._setDateDatepicker,$.datepicker._setDateDatepicker=function(e,t){var i=this._getInst(e),s=t;if(i){"string"==typeof t&&(s=new Date(t),s.getTime()||(this._base_setDateDatepicker.apply(this,arguments),s=$(e).datepicker("getDate")));var a,n=this._get(i,"timepicker");s instanceof Date?(a=new Date(s.getTime()),a.setMicroseconds(s.getMicroseconds())):a=s,n&&a&&(n.support.timezone||null!==n._defaults.timezone||(n.timezone=-1*a.getTimezoneOffset()),s=$.timepicker.timezoneAdjust(s,n.timezone),a=$.timepicker.timezoneAdjust(a,n.timezone)),this._updateDatepicker(i),this._base_setDateDatepicker.apply(this,arguments),this._setTimeDatepicker(e,a,!0)}},$.datepicker._base_getDateDatepicker=$.datepicker._getDateDatepicker,$.datepicker._getDateDatepicker=function(e,t){var i=this._getInst(e);if(i){var s=this._get(i,"timepicker");if(s){void 0===i.lastVal&&this._setDateFromField(i,t);var a=this._getDate(i);return a&&s._parseTime($(e).val(),s.timeOnly)&&(a.setHours(s.hour,s.minute,s.second,s.millisec),a.setMicroseconds(s.microsec),null!=s.timezone&&(s.support.timezone||null!==s._defaults.timezone||(s.timezone=-1*a.getTimezoneOffset()),a=$.timepicker.timezoneAdjust(a,s.timezone))),a}return this._base_getDateDatepicker(e,t)}},$.datepicker._base_parseDate=$.datepicker.parseDate,$.datepicker.parseDate=function(e,t,i){var s;try{s=this._base_parseDate(e,t,i)}catch(a){if(!(a.indexOf(":")>=0))throw a;s=this._base_parseDate(e,t.substring(0,t.length-(a.length-a.indexOf(":")-2)),i),$.timepicker.log("Error parsing the date string: "+a+"\ndate string = "+t+"\ndate format = "+e)}return s},$.datepicker._base_formatDate=$.datepicker._formatDate,$.datepicker._formatDate=function(e,t,i,s){var a=this._get(e,"timepicker");return a?(a._updateDateTime(e),a.$input.val()):this._base_formatDate(e)},$.datepicker._base_optionDatepicker=$.datepicker._optionDatepicker,$.datepicker._optionDatepicker=function(e,t,i){var s,a=this._getInst(e);if(!a)return null;var n=this._get(a,"timepicker");if(n){var r,l=null,o=null,c=null,u=n._defaults.evnts,m={};if("string"==typeof t){if("minDate"===t||"minDateTime"===t)l=i;else if("maxDate"===t||"maxDateTime"===t)o=i;else if("onSelect"===t)c=i;else if(u.hasOwnProperty(t)){if("undefined"==typeof i)return u[t];m[t]=i,s={}}}else if("object"==typeof t){t.minDate?l=t.minDate:t.minDateTime?l=t.minDateTime:t.maxDate?o=t.maxDate:t.maxDateTime&&(o=t.maxDateTime);for(r in u)u.hasOwnProperty(r)&&t[r]&&(m[r]=t[r])}for(r in m)m.hasOwnProperty(r)&&(u[r]=m[r],s||(s=$.extend({},t)),delete s[r]);if(s&&isEmptyObject(s))return;l?(l=0===l?new Date:new Date(l),n._defaults.minDate=l,n._defaults.minDateTime=l):o?(o=0===o?new Date:new Date(o),n._defaults.maxDate=o,n._defaults.maxDateTime=o):c&&(n._defaults.onSelect=c)}return void 0===i?this._base_optionDatepicker.call($.datepicker,e,t):this._base_optionDatepicker.call($.datepicker,e,s||t,i)};var isEmptyObject=function(e){var t;for(t in e)if(e.hasOwnProperty(t))return!1;return!0},extendRemove=function(e,t){$.extend(e,t);for(var i in t)(null===t[i]||void 0===t[i])&&(e[i]=t[i]);return e},detectSupport=function(e){var t=e.replace(/'.*?'/g,"").toLowerCase(),i=function(e,t){return-1!==e.indexOf(t)?!0:!1};return{hour:i(t,"h"),minute:i(t,"m"),second:i(t,"s"),millisec:i(t,"l"),microsec:i(t,"c"),timezone:i(t,"z"),ampm:i(t,"t")&&i(e,"h"),iso8601:i(e,"Z")}},convert24to12=function(e){return e%=12,0===e&&(e=12),String(e)},computeEffectiveSetting=function(e,t){return e&&e[t]?e[t]:$.timepicker._defaults[t]},splitDateTime=function(e,t){var i=computeEffectiveSetting(t,"separator"),s=computeEffectiveSetting(t,"timeFormat"),a=s.split(i),n=a.length,r=e.split(i),l=r.length;return l>1?{dateString:r.splice(0,l-n).join(i),timeString:r.splice(0,n).join(i)}:{dateString:e,timeString:""}},parseDateTimeInternal=function(e,t,i,s,a){var n,r,l;if(r=splitDateTime(i,a),n=$.datepicker._base_parseDate(e,r.dateString,s),""===r.timeString)return{date:n};if(l=$.datepicker.parseTime(t,r.timeString,a),!l)throw"Wrong time format";return{date:n,timeObj:l}},selectLocalTimezone=function(e,t){if(e&&e.timezone_select){var i=t||new Date;e.timezone_select.val(-i.getTimezoneOffset())}};$.timepicker=new Timepicker,$.timepicker.timezoneOffsetString=function(e,t){if(isNaN(e)||e>840||-720>e)return e;var i=e,s=i%60,a=(i-s)/60,n=t?":":"",r=(i>=0?"+":"-")+("0"+Math.abs(a)).slice(-2)+n+("0"+Math.abs(s)).slice(-2);return"+00:00"===r?"Z":r},$.timepicker.timezoneOffsetNumber=function(e){var t=e.toString().replace(":","");return"Z"===t.toUpperCase()?0:/^(\-|\+)\d{4}$/.test(t)?("-"===t.substr(0,1)?-1:1)*(60*parseInt(t.substr(1,2),10)+parseInt(t.substr(3,2),10)):e},$.timepicker.timezoneAdjust=function(e,t){var i=$.timepicker.timezoneOffsetNumber(t);return isNaN(i)||e.setMinutes(e.getMinutes()+-e.getTimezoneOffset()-i),e},$.timepicker.timeRange=function(e,t,i){return $.timepicker.handleRange("timepicker",e,t,i)},$.timepicker.datetimeRange=function(e,t,i){$.timepicker.handleRange("datetimepicker",e,t,i)},$.timepicker.dateRange=function(e,t,i){$.timepicker.handleRange("datepicker",e,t,i)},$.timepicker.handleRange=function(e,t,i,s){function a(a,n){var r=t[e]("getDate"),l=i[e]("getDate"),o=a[e]("getDate");if(null!==r){var c=new Date(r.getTime()),u=new Date(r.getTime());c.setMilliseconds(c.getMilliseconds()+s.minInterval),u.setMilliseconds(u.getMilliseconds()+s.maxInterval),s.minInterval>0&&c>l?i[e]("setDate",c):s.maxInterval>0&&l>u?i[e]("setDate",u):r>l&&n[e]("setDate",o)}}function n(t,i,a){if(t.val()){var n=t[e].call(t,"getDate");null!==n&&s.minInterval>0&&("minDate"===a&&n.setMilliseconds(n.getMilliseconds()+s.minInterval),"maxDate"===a&&n.setMilliseconds(n.getMilliseconds()-s.minInterval)),n.getTime&&i[e].call(i,"option",a,n)}}s=$.extend({},{minInterval:0,maxInterval:0,start:{},end:{}},s);var r=!1;return"timepicker"===e&&(r=!0,e="datetimepicker"),$.fn[e].call(t,$.extend({timeOnly:r,onClose:function(e,t){a($(this),i)},onSelect:function(e){n($(this),i,"minDate")}},s,s.start)),$.fn[e].call(i,$.extend({timeOnly:r,onClose:function(e,i){a($(this),t)},onSelect:function(e){n($(this),t,"maxDate")}},s,s.end)),a(t,i),n(t,i,"minDate"),n(i,t,"maxDate"),$([t.get(0),i.get(0)])},$.timepicker.log=function(e){window.console&&window.console.log(e)},$.timepicker._util={_extendRemove:extendRemove,_isEmptyObject:isEmptyObject,_convert24to12:convert24to12,_detectSupport:detectSupport,_selectLocalTimezone:selectLocalTimezone,_computeEffectiveSetting:computeEffectiveSetting,_splitDateTime:splitDateTime,_parseDateTimeInternal:parseDateTimeInternal},Date.prototype.getMicroseconds||(Date.prototype.microseconds=0,Date.prototype.getMicroseconds=function(){return this.microseconds},Date.prototype.setMicroseconds=function(e){return this.setMilliseconds(this.getMilliseconds()+Math.floor(e/1e3)),this.microseconds=e%1e3,this}),$.timepicker.version="@@version"}}(jQuery);

//
$(document).ready(function(){
	//$("form").validationEngine({autoHidePrompt:true,autoHideDelay: 1500,maxErrorsPerField: 1});
	//$('.cfBtn').click(function(e) {
        //$('.cfBtn').bind('click', function(e) {
        $('body').on('click','.cfBtn',function(e){
		
		
        e.preventDefault();
        var form = $(this).parents('form')[0];
        var thisevent = $(this);
        var oldbtntxt = $(this).html();
        FrmId = form.id;
		
		var	delay = $(this).parents('.pmForms').attr('data-delay');//parseInt()
		var delayTime = 2000;
		var autoHide = true; 
		if(delay){
			delayTime = parseInt(delay);
			if(delay == 'false'){
				delayTime = 20000;
				autoHide=false;
			}
			console.log('inside')
		}
		console.log('validation alert autohide: '+autoHide)
		console.log('validation alert delay time: '+delayTime)
		$('#'+FrmId).validationEngine({autoHidePrompt:autoHide,autoHideDelay: delayTime,maxErrorsPerField: 1});
		
        var valid = $('#'+FrmId).validationEngine('validate');
          
        //Google Tracking Code/Tag --- SHAM - https://trello.com/c/k01W59oF/3130-google-tracking-codes
        FormData = $("#"+FrmId).serializeArray();
        objArray = {};
        $(FormData).each(function(i, field){
          objArray[field.name] = field.value;
        });
        //undefined
		//alert($('#GEventTrackId').val())
        if($('#GEventTrackId').val()!='' && $('#GEventTrackId').val()!='undefined'){
            var eventName='Contact Form';
             try{
                eventName=decodeURIComponent(objArray['gTrackEventAction']);
				ga('send', 'event', eventName, 'Click', decodeURIComponent($('#GEventTrackId').val())); 
			}catch(Gtrack1){console.log(Gtrack1);} 
        }else{
            try{
                console.log(decodeURIComponent(objArray['googletrackingcodes']));
                ga('send', 'event', 'Search Box ', 'Click', decodeURIComponent(objArray['googletrackingcodes']));
            }catch(Gtrack){console.log(Gtrack);}
        }
		//facebook pixel code start
		var fbEventSolo = $(this).parents('form').find('.fbEventSolo').val();
		var fbConversionEvent = $('#fbConversionEvent').val();
		
		if(fbEventSolo != '' && fbEventSolo !='undefined'){
			fbConversionEvent = fbEventSolo
		}
		console.log('facebook conversion event on design/form widget--> '+ fbConversionEvent)
		if(fbConversionEvent!='' && fbConversionEvent!='undefined'){
			
			try{
				fbq('track', fbConversionEvent); 
			}catch(err) {console.log(err+'-----forms.js line 45');}
		}
		//facebook pixel code end
        //------------------------------------------------------------------

	  if(valid == true){
	   $(this).attr('disabled', 'disabled').html('<div class="loader">Loading...</div>');
            $.post($("#w4r_setUrlPath").val()+'w4rcontactform', $("#"+FrmId).serialize(), function(data) {
                if(data=='Error-recaptcha'){
                    console.log('___');
                    thisevent.removeAttr('disabled');
                    thisevent.html(oldbtntxt);
                   //$('#'+FrmId).find('.Error-recaptcha').html('Robot verification failed, please try again.');
				   captchaError($('#'+FrmId));
                }else{
                    $('#'+FrmId)[0].reset();
					var confirmMsg = '<i class="ico-checkmark"></i>Message has been sent!';
					if($('#confirm_'+FrmId).val()){
						confirmMsg = '<i class="ico-checkmark"></i>'+$('#confirm_'+FrmId).val();
					}
                    $('#'+FrmId).find('.btn').addClass('success').css('opacity', 1).html(confirmMsg);
                    //Fasy plz implement the reset checkbox options.
                    $('#'+FrmId).find('input[type="checkbox"]').parent('label').removeClass('active');

                    //$('#'+FrmId).find('.redirect_openin').trigger("click");
                    var href = $('#'+FrmId).find('.redirect_openin').attr('href');
                    var target = $('#'+FrmId).find('.redirect_openin').attr('target');
                    var ids = $('#'+FrmId).find('.redirect_openin').attr('id');
                    console.log(target+'---'+ids);
                    if(href!=''){
                        $('#'+FrmId).find('a').trigger("click");
                        document.getElementById(ids).click();
                    }
                }
                    //window.location.href = href; 
//                                window.open(
//                                    href,
//                                   target // <- This is what makes it open in a new window.
//                                  );
                    //call automail function------------
                    //automail(FrmId);  - Remoe as per discussion with raza bahi - 21-10-2015 Removea automail section
            }); 
	  }else{
		  $('#'+FrmId).validationEngine();
	  }
     return false;
     // alert(form.id); // defined
    //  alert(form.action); // defined
   });
	$('input[type=text],input[type=email],input[type=tel],input[type=password],input[type=number],select,textarea').each(function(index, element) {
		$(this).attr('data-inside', 'yes')
	});
	
	$('input[type=text]').each(function(index, element) {
		if($(this).hasClass('validate[required,custom[email]]')){
			$(this).attr('data-errormessage-value-missing', 'Enter email address').attr('data-errormessage-custom-error', 'Invalid email address');
		}
	});
	
	//if set opotion field label disable from pageManager 
	//pmForms w4rNoLabels
	$('.pmForms').each(function(index, element) {
        if($(this).hasClass('w4rNoLabels')){
			$(this).find('select').each(function(index, element) {
                var _label = $(this).prev('label').text();
				if(!_label){
					_label = $(this).parent('span').prev('label').text();
				}
				$(this).find('option:first-child').text(_label).prop('disabled', true);
            });
			
			$(this).find('textarea').each(function(index, element) {
                var _label = $(this).prev('label').text();
				if(!_label){
					_label = $(this).parent('span').prev('label').text();
				}
				$(this).attr('placeholder', _label);
            });
			
			$(this).find('input').each(function(index, element) {
                var _label = $(this).prev('label').text();
				if(!_label){
					_label = $(this).parent('span').prev('label').text();
				}
				$(this).attr('placeholder', _label);
            });
		}
    });
	
});
function automail(FrmId){
	//$.post($("#w4r_setUrlPath").val()+'quickemailgenerate', $("#"+FrmId).serialize(), function(data) {	});
}

function captchaError(elem){
	$(elem).find('.g-recaptcha').append('<div class="Error-recaptcha" onClick="$(this).remove();">Robot verification failed, please try again.</div>').fadeIn();
	setTimeout(function(){
		$(elem).find('.g-recaptcha').find('.Error-recaptcha').fadeOut(function() {
			$('.Error-recaptcha').remove();
		});
	},1500);
}

$(function() {
	$( ".datepicker" ).datepicker({
		altFieldTimeOnly: false,
		changeMonth: true,
		changeYear: true,
		yearRange: '1900:2020' /*new Date().getFullYear().toString()*/,
		dateFormat: "MM d, yy",
		beforeShow: function(dateText, obj) {
			myglobal = obj.selectedDay
			realDate = new Date();	
				$(this).datepicker('setDate', realDate);
		},
		beforeShowDay: function(date) {return [true, date.getDate() == myglobal ? "highlight-selectedDate" : ""];} 
	});
});


$(".w4rdateAndtimepicker").datetimepicker({
	altFieldTimeOnly: false,
	changeMonth: true,
	changeYear: true,
	yearRange: '1900:2020' /*new Date().getFullYear().toString()*/,
	dateFormat: "MM d, yy",
	timeFormat: "hh:mm tt",
	hour: 10,
	minute: 00,
	ampm: true,		
});

$('.timepicker').timepicker({
	timeFormat: "hh:mm tt",
	//hour: 12,
	//minute: 00,
	ampm: true,
	defaultValue: "12:00 pm",
	stepMinute: 15,
	minuteMax: 30,
	beforeShow: function(dateText, obj) {
			myglobal = obj.selectedDay
			realDate = new Date();	
				$(this).datepicker('setDate', realDate);
		},
		beforeShowDay: function(date) {return [true, date.getDate() == myglobal ? "highlight-selectedDate" : ""];} 
});

//$(".phoneMask").mask("(999) 999-9999");

/*!
 * Lazy Load - JavaScript plugin for lazy loading images
 *
 * Copyright (c) 2007-2019 Mika Tuupola
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *   https://appelsiini.net/projects/lazyload
 *
 * Version: 2.0.0-rc.2
 *
 */

(function (root, factory) {
    if (typeof exports === "object") {
        module.exports = factory(root);
    } else if (typeof define === "function" && define.amd) {
        define([], factory);
    } else {
        root.LazyLoad = factory(root);
    }
}) (typeof global !== "undefined" ? global : this.window || this.global, function (root) {

    "use strict";

    if (typeof define === "function" && define.amd){
        root = window;
    }

    const defaults = {
        src: "data-original",
        srcset: "data-srcset",
        selector: ".lazyload",
        root: null,
        rootMargin: "0px",
        threshold: 0
    };

    /**
    * Merge two or more objects. Returns a new object.
    * @private
    * @param {Boolean}  deep     If true, do a deep (or recursive) merge [optional]
    * @param {Object}   objects  The objects to merge together
    * @returns {Object}          Merged values of defaults and options
    */
    const extend = function ()  {

        let extended = {};
        let deep = false;
        let i = 0;
        let length = arguments.length;

        /* Check if a deep merge */
        if (Object.prototype.toString.call(arguments[0]) === "[object Boolean]") {
            deep = arguments[0];
            i++;
        }

        /* Merge the object into the extended object */
        let merge = function (obj) {
            for (let prop in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, prop)) {
                    /* If deep merge and property is an object, merge properties */
                    if (deep && Object.prototype.toString.call(obj[prop]) === "[object Object]") {
                        extended[prop] = extend(true, extended[prop], obj[prop]);
                    } else {
                        extended[prop] = obj[prop];
                    }
                }
            }
        };

        /* Loop through each object and conduct a merge */
        for (; i < length; i++) {
            let obj = arguments[i];
            merge(obj);
        }

        return extended;
    };

    function LazyLoad(images, options) {
        this.settings = extend(defaults, options || {});
        this.images = images || document.querySelectorAll(this.settings.selector);
        this.observer = null;
        this.init();
    }

    LazyLoad.prototype = {
        init: function() {

            /* Without observers load everything and bail out early. */
            if (!root.IntersectionObserver) {
                this.loadImages();
                return;
            }

            let self = this;
            let observerConfig = {
                root: this.settings.root,
                rootMargin: this.settings.rootMargin,
                threshold: [this.settings.threshold]
            };

            this.observer = new IntersectionObserver(function(entries) {
                Array.prototype.forEach.call(entries, function (entry) {
					//console.log('hahahaha--> '+entry.target.getAttribute(self.settings.src))
					if(entry.target.getAttribute(self.settings.src)){
						if (entry.isIntersecting) {
							self.observer.unobserve(entry.target);
							let src = entry.target.getAttribute(self.settings.src);
							let srcset = entry.target.getAttribute(self.settings.srcset);
							$(entry.target).not('.w4rfs_fadedIn').hide();
							
							if ("img" === entry.target.tagName.toLowerCase()) {
								//$(entry.target).removeAttr('style');
								$(entry.target).not('.w4rfs_fadedIn').hide();
								if (src) {
									entry.target.src = src;
								}
								if (srcset) {
									entry.target.srcset = srcset;
								}
								
							} else {
								
								/*if($(entry.target).is('.sectionBGview')){
									 entry.target.style.backgroundImage = "url(" + src + ")";
								}else{
									entry.target.style.backgroundImage = "url(" + src + ")";
								}*/
								entry.target.style.backgroundImage = "url('" + src + "')";
								
								//entry.target.style.backgroundImage = "url(" + src + ")";
							}
							$(entry.target).addClass('w4rfs_fadedIn').fadeIn();
							
						}
					}
                });
            }, observerConfig);

            Array.prototype.forEach.call(this.images, function (image) {
                self.observer.observe(image);
            });
        },

        loadAndDestroy: function () {
            if (!this.settings) { return; }
            this.loadImages();
            this.destroy();
        },

        loadImages: function () {
            if (!this.settings) { return; }

            let self = this;
            Array.prototype.forEach.call(this.images, function (image) {
                let src = image.getAttribute(self.settings.src);
                let srcset = image.getAttribute(self.settings.srcset);
                if ("img" === image.tagName.toLowerCase()) {
                    if (src) {
                        image.src = src;
                    }
                    if (srcset) {
                        image.srcset = srcset;
                    }
                } else {
                    image.style.backgroundImage = "url('" + src + "')";
                }
            });
        },

        destroy: function () {
            if (!this.settings) { return; }
            this.observer.disconnect();
            this.settings = null;
        }
    };

    root.lazyload = function(images, options) {
        return new LazyLoad(images, options);
    };

    if (root.jQuery) {
        const $ = root.jQuery;
        $.fn.lazyload = function (options) {
            options = options || {};
            options.attribute = options.attribute || "data-src";
            new LazyLoad($.makeArray(this), options);
            return this;
        };
    }

    return LazyLoad;
});

$("img").lazyload({
	effect : "fadeIn"
});
$(".sectionBGview,.lazyload").lazyload({
	effect : "fadeIn"
});
function w4rlazyload(){
	//console.log('lazyload')
	try{
		$('.pThumb .thumb').lazyload({
			effect : "fadeIn"
		});
		
	}catch(lzld){}
}
w4rlazyload();

$(document).ajaxStop(function() {
	$(".sectionBGview,.post-image > span").lazyload({
	effect : "fadeIn"
});
});

