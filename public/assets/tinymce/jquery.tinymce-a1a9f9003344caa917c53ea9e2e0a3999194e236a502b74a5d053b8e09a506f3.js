!function(a){function b(){function b(a){"remove"===a&&this.each(function(a,b){var c=e(b);c&&c.remove()}),this.find("span.mceEditor,div.mceEditor").each(function(a,b){var c=tinymce.get(b.id.replace(/_parent$/,""));c&&c.remove()})}function d(a){var c,d=this;if(null!=a)b.call(d),d.each(function(b,c){var d;(d=tinymce.get(c.id))&&d.setContent(a)});else if(d.length>0&&(c=tinymce.get(d[0].id)))return c.getContent()}function e(a){var b=null;return a&&a.id&&g.tinymce&&(b=tinymce.get(a.id)),b}function f(a){return!!(a&&a.length&&g.tinymce&&a.is(":tinymce"))}var h={};a.each(["text","html","val"],function(b,g){var i=h[g]=a.fn[g],j="text"===g;a.fn[g]=function(b){var g=this;if(!f(g))return i.apply(g,arguments);if(b!==c)return d.call(g.filter(":tinymce"),b),i.apply(g.not(":tinymce"),arguments),g;var h="",k=arguments;return(j?g:g.eq(0)).each(function(b,c){var d=e(c);h+=d?j?d.getContent().replace(/<(?:"[^"]*"|'[^']*'|[^'">])*>/g,""):d.getContent({save:!0}):i.apply(a(c),k)}),h}}),a.each(["append","prepend"],function(b,d){var g=h[d]=a.fn[d],i="prepend"===d;a.fn[d]=function(a){var b=this;return f(b)?a!==c?("string"==typeof a&&b.filter(":tinymce").each(function(b,c){var d=e(c);d&&d.setContent(i?a+d.getContent():d.getContent()+a)}),g.apply(b.not(":tinymce"),arguments),b):void 0:g.apply(b,arguments)}}),a.each(["remove","replaceWith","replaceAll","empty"],function(c,d){var e=h[d]=a.fn[d];a.fn[d]=function(){return b.call(this,d),e.apply(this,arguments)}}),h.attr=a.fn.attr,a.fn.attr=function(b,g){var i=this,j=arguments;if(!b||"value"!==b||!f(i))return g!==c?h.attr.apply(i,j):h.attr.apply(i,j);if(g!==c)return d.call(i.filter(":tinymce"),g),h.attr.apply(i.not(":tinymce"),j),i;var k=i[0],l=e(k);return l?l.getContent({save:!0}):h.attr.apply(a(k),j)}}var c,d,e,f=[],g=window;a.fn.tinymce=function(c){function h(){var d=[],f=0;e||(b(),e=!0),l.each(function(a,b){var e,g=b.id,h=c.oninit;g||(b.id=g=tinymce.DOM.uniqueId()),tinymce.get(g)||(e=new tinymce.Editor(g,c,tinymce.EditorManager),d.push(e),e.on("init",function(){var a,b=h;l.css("visibility",""),h&&++f==d.length&&("string"==typeof b&&(a=-1===b.indexOf(".")?null:tinymce.resolve(b.replace(/\.\w+$/,"")),b=tinymce.resolve(b)),b.apply(a||tinymce,d))}))}),a.each(d,function(a,b){b.render()})}var i,j,k,l=this,m="";if(!l.length)return l;if(!c)return window.tinymce?tinymce.get(l[0].id):null;if(l.css("visibility","hidden"),g.tinymce||d||!(i=c.script_url))1===d?f.push(h):h();else{d=1,j=i.substring(0,i.lastIndexOf("/")),-1!=i.indexOf(".min")&&(m=".min"),g.tinymce=g.tinyMCEPreInit||{base:j,suffix:m},-1!=i.indexOf("gzip")&&(k=c.language||"en",i=i+(/\?/.test(i)?"&":"?")+"js=true&core=true&suffix="+escape(m)+"&themes="+escape(c.theme||"modern")+"&plugins="+escape(c.plugins||"")+"&languages="+(k||""),g.tinyMCE_GZ||(g.tinyMCE_GZ={start:function(){function b(a){tinymce.ScriptLoader.markDone(tinymce.baseURI.toAbsolute(a))}b("langs/"+k+".js"),b("themes/"+c.theme+"/theme"+m+".js"),b("themes/"+c.theme+"/langs/"+k+".js"),a.each(c.plugins.split(","),function(a,c){c&&(b("plugins/"+c+"/plugin"+m+".js"),b("plugins/"+c+"/langs/"+k+".js"))})},end:function(){}}));var n=document.createElement("script");n.type="text/javascript",n.onload=n.onreadystatechange=function(b){b=b||window.event,2===d||"load"!=b.type&&!/complete|loaded/.test(n.readyState)||(tinymce.dom.Event.domLoaded=1,d=2,c.script_loaded&&c.script_loaded(),h(),a.each(f,function(a,b){b()}))},n.src=i,document.body.appendChild(n)}return l},a.extend(a.expr[":"],{tinymce:function(a){var b;return!!(a.id&&"tinymce"in window&&(b=tinymce.get(a.id),b&&b.editorManager===tinymce))}})}(jQuery);
