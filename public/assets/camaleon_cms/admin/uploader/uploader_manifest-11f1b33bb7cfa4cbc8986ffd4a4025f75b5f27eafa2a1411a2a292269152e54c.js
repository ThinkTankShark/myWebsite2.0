/*!
 * jQuery Form Plugin
 * version: 3.51.0-2014.06.20
 * Requires jQuery v1.5 or later
 * Copyright (c) 2014 M. Alsup
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Project repository: https://github.com/malsup/form
 * Dual licensed under the MIT and GPL licenses.
 * https://github.com/malsup/form#copyright-and-license
 */
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):e("undefined"!=typeof jQuery?jQuery:window.Zepto)}(function(e){"use strict";function t(t){var a=t.data;t.isDefaultPrevented()||(t.preventDefault(),e(t.target).ajaxSubmit(a))}function a(t){var a=t.target,r=e(a);if(!r.is("[type=submit],[type=image]")){var i=r.closest("[type=submit]");if(0===i.length)return;a=i[0]}var o=this;if(o.clk=a,"image"==a.type)if(void 0!==t.offsetX)o.clk_x=t.offsetX,o.clk_y=t.offsetY;else if("function"==typeof e.fn.offset){var n=r.offset();o.clk_x=t.pageX-n.left,o.clk_y=t.pageY-n.top}else o.clk_x=t.pageX-a.offsetLeft,o.clk_y=t.pageY-a.offsetTop;setTimeout(function(){o.clk=o.clk_x=o.clk_y=null},100)}function r(){if(e.fn.ajaxSubmit.debug){var t="[jquery.form] "+Array.prototype.join.call(arguments,"");window.console&&window.console.log?window.console.log(t):window.opera&&window.opera.postError&&window.opera.postError(t)}}var i={};i.fileapi=void 0!==e("<input type='file'/>").get(0).files,i.formdata=void 0!==window.FormData;var o=!!e.fn.prop;e.fn.attr2=function(){if(!o)return this.attr.apply(this,arguments);var e=this.prop.apply(this,arguments);return e&&e.jquery||"string"==typeof e?e:this.attr.apply(this,arguments)},e.fn.ajaxSubmit=function(t){function a(a){var r,i,o=e.param(a,t.traditional).split("&"),n=o.length,s=[];for(r=0;n>r;r++)o[r]=o[r].replace(/\+/g," "),i=o[r].split("="),s.push([decodeURIComponent(i[0]),decodeURIComponent(i[1])]);return s}function n(r){for(var i=new FormData,o=0;o<r.length;o++)i.append(r[o].name,r[o].value);if(t.extraData){var n=a(t.extraData);for(o=0;o<n.length;o++)n[o]&&i.append(n[o][0],n[o][1])}t.data=null;var s=e.extend(!0,{},e.ajaxSettings,t,{contentType:!1,processData:!1,cache:!1,type:l||"POST"});t.uploadProgress&&(s.xhr=function(){var a=e.ajaxSettings.xhr();return a.upload&&a.upload.addEventListener("progress",function(e){var a=0,r=e.loaded||e.position,i=e.total;e.lengthComputable&&(a=Math.ceil(r/i*100)),t.uploadProgress(e,r,i,a)},!1),a}),s.data=null;var d=s.beforeSend;return s.beforeSend=function(e,a){t.formData?a.data=t.formData:a.data=i,d&&d.call(this,e,a)},e.ajax(s)}function s(a){function i(e){var t=null;try{e.contentWindow&&(t=e.contentWindow.document)}catch(a){r("cannot get iframe.contentWindow document: "+a)}if(t)return t;try{t=e.contentDocument?e.contentDocument:e.document}catch(a){r("cannot get iframe.contentDocument: "+a),t=e.document}return t}function n(){function t(){try{var e=i(g).readyState;r("state = "+e),e&&"uninitialized"==e.toLowerCase()&&setTimeout(t,50)}catch(a){r("Server abort: ",a," (",a.name,")"),s(k),y&&clearTimeout(y),y=void 0}}var a=c.attr2("target"),o=c.attr2("action"),n="multipart/form-data",d=c.attr("enctype")||c.attr("encoding")||n;C.setAttribute("target",m),l&&!/post/i.test(l)||C.setAttribute("method","POST"),o!=p.url&&C.setAttribute("action",p.url),p.skipEncodingOverride||l&&!/post/i.test(l)||c.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"}),p.timeout&&(y=setTimeout(function(){x=!0,s(D)},p.timeout));var u=[];try{if(p.extraData)for(var f in p.extraData)p.extraData.hasOwnProperty(f)&&(e.isPlainObject(p.extraData[f])&&p.extraData[f].hasOwnProperty("name")&&p.extraData[f].hasOwnProperty("value")?u.push(e('<input type="hidden" name="'+p.extraData[f].name+'">').val(p.extraData[f].value).appendTo(C)[0]):u.push(e('<input type="hidden" name="'+f+'">').val(p.extraData[f]).appendTo(C)[0]));p.iframeTarget||v.appendTo("body"),g.attachEvent?g.attachEvent("onload",s):g.addEventListener("load",s,!1),setTimeout(t,15);try{C.submit()}catch(h){var b=document.createElement("form").submit;b.apply(C)}}finally{C.setAttribute("action",o),C.setAttribute("enctype",d),a?C.setAttribute("target",a):c.removeAttr("target"),e(u).remove()}}function s(t){if(!b.aborted&&!E){if(L=i(g),L||(r("cannot access response document"),t=k),t===D&&b)return b.abort("timeout"),void S.reject(b,"timeout");if(t==k&&b)return b.abort("server abort"),void S.reject(b,"error","server abort");if(L&&L.location.href!=p.iframeSrc||x){g.detachEvent?g.detachEvent("onload",s):g.removeEventListener("load",s,!1);var a,o="success";try{if(x)throw"timeout";var n="xml"==p.dataType||L.XMLDocument||e.isXMLDoc(L);if(r("isXml="+n),!n&&window.opera&&(null===L.body||!L.body.innerHTML)&&--A)return r("requeing onLoad callback, DOM not available"),void setTimeout(s,250);var l=L.body?L.body:L.documentElement;b.responseText=l?l.innerHTML:null,b.responseXML=L.XMLDocument?L.XMLDocument:L,n&&(p.dataType="xml"),b.getResponseHeader=function(e){var t={"content-type":p.dataType};return t[e.toLowerCase()]},l&&(b.status=Number(l.getAttribute("status"))||b.status,b.statusText=l.getAttribute("statusText")||b.statusText);var d=(p.dataType||"").toLowerCase(),u=/(json|script|text)/.test(d);if(u||p.textarea){var c=L.getElementsByTagName("textarea")[0];if(c)b.responseText=c.value,b.status=Number(c.getAttribute("status"))||b.status,b.statusText=c.getAttribute("statusText")||b.statusText;else if(u){var m=L.getElementsByTagName("pre")[0],h=L.getElementsByTagName("body")[0];m?b.responseText=m.textContent?m.textContent:m.innerText:h&&(b.responseText=h.textContent?h.textContent:h.innerText)}}else"xml"==d&&!b.responseXML&&b.responseText&&(b.responseXML=$(b.responseText));try{j=M(b,d,p)}catch(_){o="parsererror",b.error=a=_||o}}catch(_){r("error caught: ",_),o="error",b.error=a=_||o}b.aborted&&(r("upload aborted"),o=null),b.status&&(o=b.status>=200&&b.status<300||304===b.status?"success":"error"),"success"===o?(p.success&&p.success.call(p.context,j,"success",b),S.resolve(b.responseText,"success",b),f&&e.event.trigger("ajaxSuccess",[b,p])):o&&(void 0===a&&(a=b.statusText),p.error&&p.error.call(p.context,b,o,a),S.reject(b,"error",a),f&&e.event.trigger("ajaxError",[b,p,a])),f&&e.event.trigger("ajaxComplete",[b,p]),f&&!--e.active&&e.event.trigger("ajaxStop"),p.complete&&p.complete.call(p.context,b,o),E=!0,p.timeout&&clearTimeout(y),setTimeout(function(){p.iframeTarget?v.attr("src",p.iframeSrc):v.remove(),b.responseXML=null},100)}}}var d,u,p,f,m,v,g,b,_,w,x,y,C=c[0],S=e.Deferred();if(S.abort=function(e){b.abort(e)},a)for(u=0;u<h.length;u++)d=e(h[u]),o?d.prop("disabled",!1):d.removeAttr("disabled");if(p=e.extend(!0,{},e.ajaxSettings,t),p.context=p.context||p,m="jqFormIO"+(new Date).getTime(),p.iframeTarget?(v=e(p.iframeTarget),w=v.attr2("name"),w?m=w:v.attr2("name",m)):(v=e('<iframe name="'+m+'" src="'+p.iframeSrc+'" />'),v.css({position:"absolute",top:"-1000px",left:"-1000px"})),g=v[0],b={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(t){var a="timeout"===t?"timeout":"aborted";r("aborting upload... "+a),this.aborted=1;try{g.contentWindow.document.execCommand&&g.contentWindow.document.execCommand("Stop")}catch(i){}v.attr("src",p.iframeSrc),b.error=a,p.error&&p.error.call(p.context,b,a,t),f&&e.event.trigger("ajaxError",[b,p,a]),p.complete&&p.complete.call(p.context,b,a)}},f=p.global,f&&0===e.active++&&e.event.trigger("ajaxStart"),f&&e.event.trigger("ajaxSend",[b,p]),p.beforeSend&&p.beforeSend.call(p.context,b,p)===!1)return p.global&&e.active--,S.reject(),S;if(b.aborted)return S.reject(),S;_=C.clk,_&&(w=_.name,w&&!_.disabled&&(p.extraData=p.extraData||{},p.extraData[w]=_.value,"image"==_.type&&(p.extraData[w+".x"]=C.clk_x,p.extraData[w+".y"]=C.clk_y)));var D=1,k=2,T=e("meta[name=csrf-token]").attr("content"),F=e("meta[name=csrf-param]").attr("content");F&&T&&(p.extraData=p.extraData||{},p.extraData[F]=T),p.forceSync?n():setTimeout(n,10);var j,L,E,A=50,$=e.parseXML||function(e,t){return window.ActiveXObject?(t=new ActiveXObject("Microsoft.XMLDOM"),t.async="false",t.loadXML(e)):t=(new DOMParser).parseFromString(e,"text/xml"),t&&t.documentElement&&"parsererror"!=t.documentElement.nodeName?t:null},I=e.parseJSON||function(e){return window.eval("("+e+")")},M=function(t,a,r){var i=t.getResponseHeader("content-type")||"",o="xml"===a||!a&&i.indexOf("xml")>=0,n=o?t.responseXML:t.responseText;return o&&"parsererror"===n.documentElement.nodeName&&e.error&&e.error("parsererror"),r&&r.dataFilter&&(n=r.dataFilter(n,a)),"string"==typeof n&&("json"===a||!a&&i.indexOf("json")>=0?n=I(n):("script"===a||!a&&i.indexOf("javascript")>=0)&&e.globalEval(n)),n};return S}if(!this.length)return r("ajaxSubmit: skipping submit process - no element selected"),this;var l,d,u,c=this;"function"==typeof t?t={success:t}:void 0===t&&(t={}),l=t.type||this.attr2("method"),d=t.url||this.attr2("action"),u="string"==typeof d?e.trim(d):"",u=u||window.location.href||"",u&&(u=(u.match(/^([^#]+)/)||[])[1]),t=e.extend(!0,{url:u,success:e.ajaxSettings.success,type:l||e.ajaxSettings.type,iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},t);var p={};if(this.trigger("form-pre-serialize",[this,t,p]),p.veto)return r("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),this;if(t.beforeSerialize&&t.beforeSerialize(this,t)===!1)return r("ajaxSubmit: submit aborted via beforeSerialize callback"),this;var f=t.traditional;void 0===f&&(f=e.ajaxSettings.traditional);var m,h=[],v=this.formToArray(t.semantic,h);if(t.data&&(t.extraData=t.data,m=e.param(t.data,f)),t.beforeSubmit&&t.beforeSubmit(v,this,t)===!1)return r("ajaxSubmit: submit aborted via beforeSubmit callback"),this;if(this.trigger("form-submit-validate",[v,this,t,p]),p.veto)return r("ajaxSubmit: submit vetoed via form-submit-validate trigger"),this;var g=e.param(v,f);m&&(g=g?g+"&"+m:m),"GET"==t.type.toUpperCase()?(t.url+=(t.url.indexOf("?")>=0?"&":"?")+g,t.data=null):t.data=g;var b=[];if(t.resetForm&&b.push(function(){c.resetForm()}),t.clearForm&&b.push(function(){c.clearForm(t.includeHidden)}),!t.dataType&&t.target){var _=t.success||function(){};b.push(function(a){var r=t.replaceTarget?"replaceWith":"html";e(t.target)[r](a).each(_,arguments)})}else t.success&&b.push(t.success);if(t.success=function(e,a,r){for(var i=t.context||this,o=0,n=b.length;n>o;o++)b[o].apply(i,[e,a,r||c,c])},t.error){var w=t.error;t.error=function(e,a,r){var i=t.context||this;w.apply(i,[e,a,r,c])}}if(t.complete){var x=t.complete;t.complete=function(e,a){var r=t.context||this;x.apply(r,[e,a,c])}}var y=e("input[type=file]:enabled",this).filter(function(){return""!==e(this).val()}),C=y.length>0,S="multipart/form-data",D=c.attr("enctype")==S||c.attr("encoding")==S,k=i.fileapi&&i.formdata;r("fileAPI :"+k);var T,F=(C||D)&&!k;t.iframe!==!1&&(t.iframe||F)?t.closeKeepAlive?e.get(t.closeKeepAlive,function(){T=s(v)}):T=s(v):T=(C||D)&&k?n(v):e.ajax(t),c.removeData("jqxhr").data("jqxhr",T);for(var j=0;j<h.length;j++)h[j]=null;return this.trigger("form-submit-notify",[this,t]),this},e.fn.ajaxForm=function(i){if(i=i||{},i.delegation=i.delegation&&e.isFunction(e.fn.on),!i.delegation&&0===this.length){var o={s:this.selector,c:this.context};return!e.isReady&&o.s?(r("DOM not ready, queuing ajaxForm"),e(function(){e(o.s,o.c).ajaxForm(i)}),this):(r("terminating; zero elements found by selector"+(e.isReady?"":" (DOM not ready)")),this)}return i.delegation?(e(document).off("submit.form-plugin",this.selector,t).off("click.form-plugin",this.selector,a).on("submit.form-plugin",this.selector,i,t).on("click.form-plugin",this.selector,i,a),this):this.ajaxFormUnbind().bind("submit.form-plugin",i,t).bind("click.form-plugin",i,a)},e.fn.ajaxFormUnbind=function(){return this.unbind("submit.form-plugin click.form-plugin")},e.fn.formToArray=function(t,a){var r=[];if(0===this.length)return r;var o,n=this[0],s=this.attr("id"),l=t?n.getElementsByTagName("*"):n.elements;if(l&&!/MSIE [678]/.test(navigator.userAgent)&&(l=e(l).get()),s&&(o=e(':input[form="'+s+'"]').get(),o.length&&(l=(l||[]).concat(o))),!l||!l.length)return r;var d,u,c,p,f,m,h;for(d=0,m=l.length;m>d;d++)if(f=l[d],c=f.name,c&&!f.disabled)if(t&&n.clk&&"image"==f.type)n.clk==f&&(r.push({name:c,value:e(f).val(),type:f.type}),r.push({name:c+".x",value:n.clk_x},{name:c+".y",value:n.clk_y}));else if(p=e.fieldValue(f,!0),p&&p.constructor==Array)for(a&&a.push(f),u=0,h=p.length;h>u;u++)r.push({name:c,value:p[u]});else if(i.fileapi&&"file"==f.type){a&&a.push(f);var v=f.files;if(v.length)for(u=0;u<v.length;u++)r.push({name:c,value:v[u],type:f.type});else r.push({name:c,value:"",type:f.type})}else null!==p&&"undefined"!=typeof p&&(a&&a.push(f),r.push({name:c,value:p,type:f.type,required:f.required}));if(!t&&n.clk){var g=e(n.clk),b=g[0];c=b.name,c&&!b.disabled&&"image"==b.type&&(r.push({name:c,value:g.val()}),r.push({name:c+".x",value:n.clk_x},{name:c+".y",value:n.clk_y}))}return r},e.fn.formSerialize=function(t){return e.param(this.formToArray(t))},e.fn.fieldSerialize=function(t){var a=[];return this.each(function(){var r=this.name;if(r){var i=e.fieldValue(this,t);if(i&&i.constructor==Array)for(var o=0,n=i.length;n>o;o++)a.push({name:r,value:i[o]});else null!==i&&"undefined"!=typeof i&&a.push({name:this.name,value:i})}}),e.param(a)},e.fn.fieldValue=function(t){for(var a=[],r=0,i=this.length;i>r;r++){var o=this[r],n=e.fieldValue(o,t);null===n||"undefined"==typeof n||n.constructor==Array&&!n.length||(n.constructor==Array?e.merge(a,n):a.push(n))}return a},e.fieldValue=function(t,a){var r=t.name,i=t.type,o=t.tagName.toLowerCase();if(void 0===a&&(a=!0),a&&(!r||t.disabled||"reset"==i||"button"==i||("checkbox"==i||"radio"==i)&&!t.checked||("submit"==i||"image"==i)&&t.form&&t.form.clk!=t||"select"==o&&-1==t.selectedIndex))return null;if("select"==o){var n=t.selectedIndex;if(0>n)return null;for(var s=[],l=t.options,d="select-one"==i,u=d?n+1:l.length,c=d?n:0;u>c;c++){var p=l[c];if(p.selected){var f=p.value;if(f||(f=p.attributes&&p.attributes.value&&!p.attributes.value.specified?p.text:p.value),d)return f;s.push(f)}}return s}return e(t).val()},e.fn.clearForm=function(t){return this.each(function(){e("input,select,textarea",this).clearFields(t)})},e.fn.clearFields=e.fn.clearInputs=function(t){var a=/^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;return this.each(function(){var r=this.type,i=this.tagName.toLowerCase();a.test(r)||"textarea"==i?this.value="":"checkbox"==r||"radio"==r?this.checked=!1:"select"==i?this.selectedIndex=-1:"file"==r?/MSIE/.test(navigator.userAgent)?e(this).replaceWith(e(this).clone(!0)):e(this).val(""):t&&(t===!0&&/hidden/.test(r)||"string"==typeof t&&e(this).is(t))&&(this.value="")})},e.fn.resetForm=function(){return this.each(function(){("function"==typeof this.reset||"object"==typeof this.reset&&!this.reset.nodeType)&&this.reset()})},e.fn.enable=function(e){return void 0===e&&(e=!0),this.each(function(){this.disabled=!e})},e.fn.selected=function(t){return void 0===t&&(t=!0),this.each(function(){var a=this.type;if("checkbox"==a||"radio"==a)this.checked=t;else if("option"==this.tagName.toLowerCase()){var r=e(this).parent("select");t&&r[0]&&"select-one"==r[0].type&&r.find("option").selected(!1),this.selected=t}})},e.fn.ajaxSubmit.debug=!1}),/*!
 * jQuery Upload File Plugin
 * version: 4.0.8
 * @requires jQuery v1.5 or later & form plugin
 * Copyright (c) 2013 Ravishanker Kusuma
 * http://hayageek.com/
 */
!function(e){void 0==jQuery.fn.ajaxForm&&e.getScript(("https:"==document.location.protocol?"https://":"http://")+"malsup.github.io/jquery.form.js");var t={};t.fileapi=void 0!==e("<input type='file'/>").get(0).files,t.formdata=void 0!==window.FormData,e.fn.uploadFile=function(a){function r(){C||(C=!0,function e(){if(g.sequential||(g.sequentialCount=99999),0==x.length&&0==y.length)g.afterUploadAll&&g.afterUploadAll(_),C=!1;else{if(y.length<g.sequentialCount){var t=x.shift();void 0!=t&&(y.push(t),t.submit())}window.setTimeout(e,100)}}())}function i(t,a,r){r.on("dragenter",function(t){t.stopPropagation(),t.preventDefault(),e(this).addClass(a.dragDropHoverClass)}),r.on("dragover",function(t){t.stopPropagation(),t.preventDefault();var r=e(this);r.hasClass(a.dragDropContainerClass)&&!r.hasClass(a.dragDropHoverClass)&&r.addClass(a.dragDropHoverClass)}),r.on("drop",function(r){r.preventDefault(),e(this).removeClass(a.dragDropHoverClass),t.errorLog.html("");var i=r.originalEvent.dataTransfer.files;return!a.multiple&&i.length>1?void(a.showError&&e("<div class='"+a.errorClass+"'>"+a.multiDragErrorStr+"</div>").appendTo(t.errorLog)):void(0!=a.onSelect(i)&&s(a,t,i))}),r.on("dragleave",function(){e(this).removeClass(a.dragDropHoverClass)}),e(document).on("dragenter",function(e){e.stopPropagation(),e.preventDefault()}),e(document).on("dragover",function(t){t.stopPropagation(),t.preventDefault();var r=e(this);r.hasClass(a.dragDropContainerClass)||r.removeClass(a.dragDropHoverClass)}),e(document).on("drop",function(t){t.stopPropagation(),t.preventDefault(),e(this).removeClass(a.dragDropHoverClass)})}function o(e){var t="",a=e/1024;if(parseInt(a)>1024){var r=a/1024;t=r.toFixed(2)+" MB"}else t=a.toFixed(2)+" KB";return t}function n(t){var a=[];a="string"==jQuery.type(t)?t.split("&"):e.param(t).split("&");var r,i,o=a.length,n=[];for(r=0;o>r;r++)a[r]=a[r].replace(/\+/g," "),i=a[r].split("="),n.push([decodeURIComponent(i[0]),decodeURIComponent(i[1])]);return n}function s(t,a,r){for(var i=0;i<r.length;i++)if(l(a,t,r[i].name))if(t.allowDuplicates||!d(a,r[i].name))if(-1!=t.maxFileSize&&r[i].size>t.maxFileSize)t.showError&&e("<div class='"+t.errorClass+"'><b>"+r[i].name+"</b> "+t.sizeErrorStr+o(t.maxFileSize)+"</div>").appendTo(a.errorLog);else if(-1!=t.maxFileCount&&a.selectedFiles>=t.maxFileCount)t.showError&&e("<div class='"+t.errorClass+"'><b>"+r[i].name+"</b> "+t.maxFileCountErrorStr+t.maxFileCount+"</div>").appendTo(a.errorLog);else{a.selectedFiles++,a.existingFileNames.push(r[i].name);var s=t,u=new FormData,c=t.fileName.replace("[]","");u.append(c,r[i]);var p=t.formData;if(p)for(var f=n(p),m=0;m<f.length;m++)f[m]&&u.append(f[m][0],f[m][1]);s.fileData=u;var g=new h(a,t),b="";b=t.showFileCounter?a.fileCounter+t.fileCounterStyle+r[i].name:r[i].name,t.showFileSize&&(b+=" ("+o(r[i].size)+")"),g.filename.html(b);var _=e("<form style='display:block; position:absolute;left: 150px;' class='"+a.formGroup+"' method='"+t.method+"' action='"+t.url+"' enctype='"+t.enctype+"'></form>");_.appendTo("body");var w=[];w.push(r[i].name),v(_,s,g,w,a,r[i]),a.fileCounter++}else t.showError&&e("<div class='"+t.errorClass+"'><b>"+r[i].name+"</b> "+t.duplicateErrorStr+"</div>").appendTo(a.errorLog);else t.showError&&e("<div class='"+t.errorClass+"'><b>"+r[i].name+"</b> "+t.extErrorStr+t.allowedTypes+"</div>").appendTo(a.errorLog)}function l(e,t,a){var r=t.allowedTypes.toLowerCase().split(/[\s,]+/g),i=a.split(".").pop().toLowerCase();return!("*"!=t.allowedTypes&&jQuery.inArray(i,r)<0)}function d(e,t){var a=!1;if(e.existingFileNames.length)for(var r=0;r<e.existingFileNames.length;r++)(e.existingFileNames[r]==t||g.duplicateStrict&&e.existingFileNames[r].toLowerCase()==t.toLowerCase())&&(a=!0);return a}function u(e,t){if(e.existingFileNames.length)for(var a=0;a<t.length;a++){var r=e.existingFileNames.indexOf(t[a]);-1!=r&&e.existingFileNames.splice(r,1)}}function c(e,t){if(e){t.show();var a=new FileReader;a.onload=function(e){t.attr("src",e.target.result)},a.readAsDataURL(e)}}function p(t,a){if(t.showFileCounter){var r=e(a.container).find(".ajax-file-upload-filename").length;a.fileCounter=r+1,e(a.container).find(".ajax-file-upload-filename").each(function(){var a=e(this).html().split(t.fileCounterStyle),i=(parseInt(a[0])-1,r+t.fileCounterStyle+a[1]);e(this).html(i),r--})}}function f(a,r,i,o){var n="ajax-upload-id-"+(new Date).getTime(),d=e("<form method='"+i.method+"' action='"+i.url+"' enctype='"+i.enctype+"'></form>"),u="<input type='file' id='"+n+"' name='"+i.fileName+"' accept='"+i.acceptFiles+"'/>";i.multiple&&(i.fileName.indexOf("[]")!=i.fileName.length-2&&(i.fileName+="[]"),u="<input type='file' id='"+n+"' name='"+i.fileName+"' accept='"+i.acceptFiles+"' multiple/>");var c=e(u).appendTo(d);c.change(function(){a.errorLog.html("");var n=(i.allowedTypes.toLowerCase().split(","),[]);if(this.files){for(b=0;b<this.files.length;b++)n.push(this.files[b].name);if(0==i.onSelect(this.files))return}else{var u=e(this).val(),c=[];if(n.push(u),!l(a,i,u))return void(i.showError&&e("<div class='"+i.errorClass+"'><b>"+u+"</b> "+i.extErrorStr+i.allowedTypes+"</div>").appendTo(a.errorLog));if(c.push({name:u,size:"NA"}),0==i.onSelect(c))return}if(p(i,a),o.unbind("click"),d.hide(),f(a,r,i,o),d.addClass(r),i.serialize&&t.fileapi&&t.formdata){d.removeClass(r);var m=this.files;d.remove(),s(i,a,m)}else{for(var g="",b=0;b<n.length;b++)g+=i.showFileCounter?a.fileCounter+i.fileCounterStyle+n[b]+"<br>":n[b]+"<br>",a.fileCounter++;if(-1!=i.maxFileCount&&a.selectedFiles+n.length>i.maxFileCount)return void(i.showError&&e("<div class='"+i.errorClass+"'><b>"+g+"</b> "+i.maxFileCountErrorStr+i.maxFileCount+"</div>").appendTo(a.errorLog));a.selectedFiles+=n.length;var _=new h(a,i);_.filename.html(g),v(d,i,_,n,a,null)}}),i.nestedForms?(d.css({margin:0,padding:0}),o.css({position:"relative",overflow:"hidden",cursor:"default"}),c.css({position:"absolute",cursor:"pointer",top:"0px",width:"100%",height:"100%",left:"0px","z-index":"100",opacity:"0.0",filter:"alpha(opacity=0)","-ms-filter":"alpha(opacity=0)","-khtml-opacity":"0.0","-moz-opacity":"0.0"}),d.appendTo(o)):(d.appendTo(e("body")),d.css({margin:0,padding:0,display:"block",position:"absolute",left:"-250px"}),-1!=navigator.appVersion.indexOf("MSIE ")?o.attr("for",n):o.click(function(){c.click()}))}function m(t,a){return this.statusbar=e("<div class='ajax-file-upload-statusbar'></div>").width(a.statusBarWidth),this.preview=e("<img class='ajax-file-upload-preview' />").width(a.previewWidth).height(a.previewHeight).appendTo(this.statusbar).hide(),this.filename=e("<div class='ajax-file-upload-filename'></div>").appendTo(this.statusbar),this.progressDiv=e("<div class='ajax-file-upload-progress'>").appendTo(this.statusbar).hide(),this.progressbar=e("<div class='ajax-file-upload-bar'></div>").appendTo(this.progressDiv),this.abort=e("<div>"+a.abortStr+"</div>").appendTo(this.statusbar).hide(),this.cancel=e("<div>"+a.cancelStr+"</div>").appendTo(this.statusbar).hide(),this.done=e("<div>"+a.doneStr+"</div>").appendTo(this.statusbar).hide(),this.download=e("<div>"+a.downloadStr+"</div>").appendTo(this.statusbar).hide(),this.del=e("<div>"+a.deletelStr+"</div>").appendTo(this.statusbar).hide(),this.abort.addClass("ajax-file-upload-red"),this.done.addClass("ajax-file-upload-green"),this.download.addClass("ajax-file-upload-green"),this.cancel.addClass("ajax-file-upload-red"),this.del.addClass("ajax-file-upload-red"),this}function h(t,a){var r=null;return r=a.customProgressBar?new a.customProgressBar(t,a):new m(t,a),r.abort.addClass(t.formGroup),r.abort.addClass(a.abortButtonClass),r.cancel.addClass(t.formGroup),r.cancel.addClass(a.cancelButtonClass),a.extraHTML&&(r.extraHTML=e("<div class='extrahtml'>"+a.extraHTML()+"</div>").insertAfter(r.filename)),"bottom"==a.uploadQueuOrder?e(t.container).append(r.statusbar):e(t.container).prepend(r.statusbar),r}function v(a,i,o,s,l,d){var f={cache:!1,contentType:!1,processData:!1,forceSync:!1,type:i.method,data:i.formData,formData:i.fileData,dataType:i.returnType,beforeSubmit:function(t,r,d){if(0!=i.onSubmit.call(this,s)){if(i.dynamicFormData){var c=n(i.dynamicFormData());if(c)for(var f=0;f<c.length;f++)c[f]&&(void 0!=i.fileData?d.formData.append(c[f][0],c[f][1]):d.data[c[f][0]]=c[f][1])}return i.extraHTML&&e(o.extraHTML).find("input,select,textarea").each(function(){void 0!=i.fileData?d.formData.append(e(this).attr("name"),e(this).val()):d.data[e(this).attr("name")]=e(this).val()}),!0}return o.statusbar.append("<div class='"+i.errorClass+"'>"+i.uploadErrorStr+"</div>"),o.cancel.show(),a.remove(),o.cancel.click(function(){x.splice(x.indexOf(a),1),u(l,s),o.statusbar.remove(),i.onCancel.call(l,s,o),l.selectedFiles-=s.length,p(i,l)}),!1},beforeSend:function(e){o.progressDiv.show(),o.cancel.hide(),o.done.hide(),i.showAbort&&(o.abort.show(),o.abort.click(function(){u(l,s),e.abort(),l.selectedFiles-=s.length,i.onAbort.call(l,s,o)})),o.progressbar.width(t.formdata?"1%":"5%")},uploadProgress:function(e,t,a,r){r>98&&(r=98);var n=r+"%";r>1&&o.progressbar.width(n),i.showProgress&&(o.progressbar.html(n),o.progressbar.css("text-align","center"))},success:function(t,r,n){if(o.cancel.remove(),y.pop(),"json"==i.returnType&&"object"==e.type(t)&&t.hasOwnProperty(i.customErrorKeyStr)){o.abort.hide();var d=t[i.customErrorKeyStr];return i.onError.call(this,s,200,d,o),i.showStatusAfterError?(o.progressDiv.hide(),o.statusbar.append("<span class='"+i.errorClass+"'>ERROR: "+d+"</span>")):(o.statusbar.hide(),o.statusbar.remove()),l.selectedFiles-=s.length,void a.remove()}l.responses.push(t),o.progressbar.width("100%"),i.showProgress&&(o.progressbar.html("100%"),o.progressbar.css("text-align","center")),o.abort.hide(),i.onSuccess.call(this,s,t,n,o),i.showStatusAfterSuccess?(i.showDone?(o.done.show(),o.done.click(function(){o.statusbar.hide("slow"),o.statusbar.remove()})):o.done.hide(),i.showDelete?(o.del.show(),o.del.click(function(){o.statusbar.hide().remove(),i.deleteCallback&&i.deleteCallback.call(this,t,o),l.selectedFiles-=s.length,p(i,l)})):o.del.hide()):(o.statusbar.hide("slow"),o.statusbar.remove()),i.showDownload&&(o.download.show(),o.download.click(function(){i.downloadCallback&&i.downloadCallback(t)})),a.remove()},error:function(e,t,r){o.cancel.remove(),y.pop(),o.abort.hide(),"abort"==e.statusText?(o.statusbar.hide("slow").remove(),p(i,l)):(i.onError.call(this,s,t,r,o),i.showStatusAfterError?(o.progressDiv.hide(),o.statusbar.append("<span class='"+i.errorClass+"'>ERROR: "+r+"</span>")):(o.statusbar.hide(),o.statusbar.remove()),l.selectedFiles-=s.length),a.remove()}};i.showPreview&&null!=d&&"image"==d.type.toLowerCase().split("/").shift()&&c(d,o.preview),i.autoSubmit?(a.ajaxForm(f),x.push(a),r()):(i.showCancel&&(o.cancel.show(),o.cancel.click(function(){x.splice(x.indexOf(a),1),u(l,s),a.remove(),o.statusbar.remove(),i.onCancel.call(l,s,o),l.selectedFiles-=s.length,p(i,l)})),a.ajaxForm(f))}var g=e.extend({url:"",method:"POST",enctype:"multipart/form-data",returnType:null,allowDuplicates:!0,duplicateStrict:!1,allowedTypes:"*",acceptFiles:"*",fileName:"file",formData:!1,dynamicFormData:!1,maxFileSize:-1,maxFileCount:-1,multiple:!0,dragDrop:!0,autoSubmit:!0,showCancel:!0,showAbort:!0,showDone:!1,showDelete:!1,showError:!0,showStatusAfterSuccess:!0,showStatusAfterError:!0,showFileCounter:!0,fileCounterStyle:"). ",showFileSize:!0,showProgress:!1,nestedForms:!0,showDownload:!1,onLoad:function(){},onSelect:function(){return!0},onSubmit:function(){},onSuccess:function(){},onError:function(){},onCancel:function(){},onAbort:function(){},downloadCallback:!1,deleteCallback:!1,afterUploadAll:!1,serialize:!0,sequential:!1,sequentialCount:2,customProgressBar:!1,abortButtonClass:"ajax-file-upload-abort",cancelButtonClass:"ajax-file-upload-cancel",dragDropContainerClass:"ajax-upload-dragdrop",dragDropHoverClass:"state-hover",errorClass:"ajax-file-upload-error",uploadButtonClass:"ajax-file-upload",dragDropStr:"<span><b>Drag & Drop Files</b></span>",uploadStr:"Upload",abortStr:"Abort",cancelStr:"Cancel",deletelStr:"Delete",doneStr:"Done",multiDragErrorStr:"Multiple File Drag & Drop is not allowed.",extErrorStr:"is not allowed. Allowed extensions: ",duplicateErrorStr:"is not allowed. File already exists.",sizeErrorStr:"is not allowed. Allowed Max size: ",uploadErrorStr:"Upload is not allowed",maxFileCountErrorStr:" is not allowed. Maximum allowed files are:",downloadStr:"Download",customErrorKeyStr:"jquery-upload-file-error",showQueueDiv:!1,statusBarWidth:400,dragdropWidth:400,showPreview:!1,previewHeight:"auto",previewWidth:"100%",extraHTML:!1,uploadQueuOrder:"top"},a);this.fileCounter=1,this.selectedFiles=0;var b="ajax-file-upload-"+(new Date).getTime();this.formGroup=b,this.errorLog=e("<div></div>"),this.responses=[],this.existingFileNames=[],t.formdata||(g.dragDrop=!1),t.formdata||(g.multiple=!1),e(this).html("");var _=this,w=e("<div>"+g.uploadStr+"</div>");e(w).addClass(g.uploadButtonClass),function S(){if(e.fn.ajaxForm){if(g.dragDrop){var t=e('<div class="'+g.dragDropContainerClass+'" style="vertical-align:top;"></div>').width(g.dragdropWidth);e(_).append(t),e(t).append(w),e(t).append(e(g.dragDropStr)),i(_,g,t)}else e(_).append(w);e(_).append(_.errorLog),_.container=g.showQueueDiv?e("#"+g.showQueueDiv):e("<div class='ajax-file-upload-container'></div>").insertAfter(e(_)),g.onLoad.call(this,_),f(_,b,g,w)}else window.setTimeout(S,10)}(),this.startUpload=function(){e("form").each(function(){e(this).hasClass(_.formGroup)&&x.push(e(this))}),x.length>=1&&r()},this.getFileCount=function(){return _.selectedFiles},this.stopUpload=function(){e("."+g.abortButtonClass).each(function(){e(this).hasClass(_.formGroup)&&e(this).click()}),e("."+g.cancelButtonClass).each(function(){e(this).hasClass(_.formGroup)&&e(this).click()})},this.cancelAll=function(){e("."+g.cancelButtonClass).each(function(){e(this).hasClass(_.formGroup)&&e(this).click()})},this.update=function(t){g=e.extend(g,t)},this.reset=function(e){_.fileCounter=1,_.selectedFiles=0,_.errorLog.html(""),0!=e&&_.container.html("")},this.remove=function(){_.container.html(""),e(_).remove()},this.createProgress=function(e,t,a){var r=new h(this,g);r.progressDiv.show(),r.progressbar.width("100%");var i="";i=g.showFileCounter?_.fileCounter+g.fileCounterStyle+e:e,g.showFileSize&&(i+=" ("+o(a)+")"),r.filename.html(i),_.fileCounter++,_.selectedFiles++,g.showPreview&&(r.preview.attr("src",t),r.preview.show()),g.showDownload&&(r.download.show(),r.download.click(function(){g.downloadCallback&&g.downloadCallback.call(_,[e])})),g.showDelete&&(r.del.show(),r.del.click(function(){r.statusbar.hide().remove();var t=[e];g.deleteCallback&&g.deleteCallback.call(this,t,r),_.selectedFiles-=1,p(g,_)}))},this.getResponses=function(){return this.responses};var x=[],y=[],C=!1;return this}}(jQuery),function(){window.cama_init_media=function(media_panel){var customFileData,media_info,media_info_tab_info,media_link_tab_upload,p_upload,show_file;return media_info=media_panel.find(".media_file_info"),media_info_tab_info=media_panel.find(".media_file_info_col .nav-tabs .link_media_info"),media_link_tab_upload=media_panel.find(".media_file_info_col .nav-tabs .link_media_upload"),show_file=function(item){var _hh,_ww,btn,cut,data,hh,tpl,ww;return item.addClass("selected").siblings().removeClass("selected"),data=eval("("+item.find(".data_value").val()+")"),media_info_tab_info.click(),tpl="<div class='p_thumb'></div><div class='p_label'><b>"+I18n("button.name")+": </b><br> <span>"+data.name+"</span></div><div class='p_body'><div><b>"+I18n("button.url")+":</b><br> <a target='_blank' href='"+data.url+"'>"+data.url+"</a></div><div><b>"+I18n("button.size")+":</b> <span>"+cama_humanFileSize(data.size)+"</span></div></div>",window.callback_media_uploader&&(!media_panel.attr("data-formats")||media_panel.attr("data-formats")&&($.inArray(data.format,media_panel.attr("data-formats").split(","))>=0||$.inArray(data.url.split(".").pop().toLowerCase(),media_panel.attr("data-formats").split(","))>=0))&&(tpl+="<div class='p_footer'><button class='btn btn-primary insert_btn'>"+I18n("button.insert")+"</button></div>"),media_info.html(tpl),media_info.find(".p_thumb").html(item.find(".thumb").html()),"image"===data.format&&(ww=parseInt(data.dimension.split("x")[0]),hh=parseInt(data.dimension.split("x")[1]),media_info.find(".p_body").append("<div class='cdimension'><b>"+I18n("button.dimension")+": </b><span>"+ww+"x"+hh+"</span></div>"),media_panel.attr("data-dimension")&&(btn=media_info.find(".p_footer .insert_btn"),btn.prop("disabled",!0),_ww=parseInt(media_panel.attr("data-dimension").split("x")[0]),_hh=parseInt(media_panel.attr("data-dimension").split("x")[1]),_ww===ww&&_hh===hh?btn.prop("disabled",!1):(media_info.find(".cdimension").css("color","red"),cut=$("<button class='btn btn-info pull-right'><i class='fa fa-crop'></i> "+I18n("button.crop_image")+"</button>").click(function(){return $.fn.upload_url({url:data.url})}),btn.after(cut)))),window.callback_media_uploader?media_info.find(".insert_btn").click(function(){return data.mime=data.type,window.callback_media_uploader(data),window.callback_media_uploader=null,media_panel.closest(".modal").modal("hide"),!1}):void 0},media_panel.on("click",".file_item",function(){return show_file($(this)),!1}),p_upload=media_panel.find(".cama_media_fileuploader"),customFileData=function(){return{folder:media_panel.attr("data-folder").replace(/\/{2,}/g,"/"),formats:media_panel.attr("data-formats")}},p_upload.uploadFile({url:p_upload.attr("data-url"),fileName:"file_upload",uploadButtonClass:"btn btn-primary btn-block",dragDropStr:'<span style="display: block;"><b>'+p_upload.attr("data-dragDropStr")+"</b></span>",uploadStr:p_upload.attr("data-uploadStr"),dynamicFormData:customFileData,onSuccess:function(e,t,a,r){return t.search("media_item")>=0?(media_panel.trigger("add_file",{item:t,selected:0===$(r.statusbar).siblings().not(".error_file_upload").size()}),$(r.statusbar).remove()):$(r.statusbar).find(".ajax-file-upload-progress").html("<span style='color: red;'>"+t+"</span>")},onError:function(e,t,a,r){return $(r.statusbar).addClass("error_file_upload").find(".ajax-file-upload-filename").append(" <i class='fa fa-times btn btn-danger btn-xs' onclick='$(this).closest(\".ajax-file-upload-statusbar\").remove();'></i>")}}),media_panel.find(".media_folder_breadcrumb").on("click","a",function(){return media_panel.trigger("navigate_to",{folder:$(this).attr("data-path")}),!1}),media_panel.on("click",".folder_item",function(){var e;return e=media_panel.attr("data-folder")+"/"+$(this).attr("data-key"),$(this).attr("data-key").search("/")>=0&&(e=$(this).attr("data-key")),media_panel.trigger("navigate_to",{folder:e.replace(/\/{2,}/g,"/")})}),media_panel.bind("update_breadcrumb",function(){var e,t,a,r,i,o,n,s,l;for(t=media_panel.attr("data-folder").replace("//","/"),r=[],a="/"===t||""===t?["/"]:t.split("/"),e=[],i=o=0,n=a.length;n>o;i=++o)l=a[i],s=l,"/"!==l&&""!==l||(s=I18n("button.root")),i===a.length-1?e.push("<li><span>"+s+"</span></li>"):(r.push(l),e.push("<li><a data-path='"+(r.join("/")||"/").replace(/\/{2,}/g,"/")+"' href='#'>"+s+"</a></li>"));return media_panel.find(".media_folder_breadcrumb").html(e.join(""))}).trigger("update_breadcrumb"),media_panel.bind("navigate_to",function(e,t){var a;return t.folder&&media_panel.attr("data-folder",t.folder),a=media_panel.attr("data-folder"),media_panel.trigger("update_breadcrumb"),media_info.html(""),media_link_tab_upload.click(),showLoading(),$.get(media_panel.attr("data-url"),{folder:a.replace(/\/{2,}/g,"/"),partial:!0,media_formats:media_panel.attr("data-formats")},function(e){return media_panel.find(".media_browser_list").html(e),hideLoading()})}).bind("add_file",function(e,t){var a;return a=$(t.item),media_panel.find(".media_browser_list").prepend(a),t.selected===!0||void 0===t.selected?a.click():void 0}),media_panel.find("#cama_search_form").submit(function(){return showLoading(),$.get(media_panel.attr("data-url"),{search:$(this).find("input:text").val(),partial:!0,media_formats:media_panel.attr("data-formats")},function(e){return media_panel.find(".media_browser_list").html(e),hideLoading()}),!1}),media_panel.find(".cam_media_reload").click(function(e){return showLoading(),$.get(media_panel.attr("data-url"),{partial:!0,media_formats:media_panel.attr("data-formats"),folder:media_panel.attr("data-folder"),cama_media_reload:$(this).attr("data-action")},function(e){return media_panel.find(".media_browser_list").html(e),hideLoading()}),e.preventDefault()}),media_panel.on("click","a.add_folder",function(){var e,t;return t=$("<form><div><label for=''>"+I18n("button.folder")+": </label> <div class='input-group'><input name='folder' class='form-control required' placeholder='Folder name..'><span class='input-group-btn'><button class='btn btn-primary' type='submit'>"+I18n("button.create")+"</button></span></div></div> </form>"),e=function(e){var t,a;return t=e.find(".btn-primary"),a=e.find("input").keyup(function(){return $(this).val()?t.removeAttr("disabled"):t.attr("disabled","true")}).trigger("keyup"),e.find("form").submit(function(){return showLoading(),$.post(media_panel.attr("data-url_actions"),{folder:media_panel.attr("data-folder")+"/"+a.val().replace(/\/{2,}/g,"/"),media_action:"new_folder"},function(t){return hideLoading(),e.modal("hide"),t.search("folder_item")>=0?media_panel.find(".media_browser_list").append(t):$.fn.alert({type:"error",content:t,title:"Error"})}),!1})},open_modal({title:"New Folder",content:t,callback:e}),!1}),media_panel.on("click","a.del_item, a.del_folder",function(){var e,t;return confirm(I18n("msg.delete_item"))?(t=$(this),e=t.closest(".media_item"),showLoading(),$.post(media_panel.attr("data-url_actions"),{folder:media_panel.attr("data-folder")+"/"+e.attr("data-key").replace(/\/{2,}/g,"/"),media_action:t.hasClass("del_folder")?"del_folder":"del_file"},function(t){return hideLoading(),t?$.fn.alert({type:"error",content:t,title:I18n("button.error")}):(e.remove(),media_info.html(""))}).error(function(){return $.fn.alert({type:"error",content:I18n("msg.internal_error"),title:I18n("button.error")})}),!1):!1}),media_panel.find("#cama_media_external").submit(function(){return $(this).valid()?($.fn.upload_url({url:$(this).find("input").val(),callback:function(){return media_panel.find("#cama_media_external")[0].reset()}}),!1):!1}).validate()},$(function(){return $.fn.upload_url=function(e){var t,a,r;return a=$("#cama_media_gallery"),t={folder:a.attr("data-folder").replace(/\/{2,}/g,"/"),media_action:"crop_url",formats:a.attr("data-formats"),onerror:function(e){return $.fn.alert({type:"error",content:e,title:I18n("msg.error_uploading")})}},$.extend(t,e),r=t.onerror,delete t.onerror,showLoading(),$.post(a.attr("data-url_actions"),t,function(e){return hideLoading(),e.search("media_item")>=0?(a.trigger("add_file",{item:e}),t.callback?t.callback(e):void 0):$.fn.alert({type:"error",content:e,title:I18n("button.error")})}).error(function(){return $.fn.alert({type:"error",content:I18n("msg.internal_error"),title:I18n("button.error")})})}}),$(function(){return $.fn.upload_filemanager=function(e){return e=e||{},open_modal({title:e.title||I18n("msg.media_title"),id:"cama_modal_file_uploader",modal_size:"modal-lg",mode:"ajax",url:root_admin_url+"/media/ajax",ajax_params:{media_formats:e.formats,dimension:e.dimension},callback:function(t){return e.selected&&(window.callback_media_uploader=e.selected),t.css("z-index",e.zindex||99999).children(".modal-dialog").css("width","90%")}})}}),window.cama_humanFileSize=function(e){var t,a;for(a=["B","KB","MB","GB","TB","PB","EB","ZB","YB"],t=0;e>=1024;)e/=1024,++t;return e.toFixed(1)+" "+a[t]}}.call(this);