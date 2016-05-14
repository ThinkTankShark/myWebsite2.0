tinymce.PluginManager.add("image",function(t){function e(t,e){function i(t,i){n.parentNode&&n.parentNode.removeChild(n),e({width:t,height:i})}var n=document.createElement("img");n.onload=function(){i(Math.max(n.width,n.clientWidth),Math.max(n.height,n.clientHeight))},n.onerror=function(){i()};var a=n.style;a.visibility="hidden",a.position="fixed",a.bottom=a.left=0,a.width=a.height="auto",document.body.appendChild(n),n.src=t}function i(t,e,i){function n(t,i){return i=i||[],tinymce.each(t,function(t){var a={text:t.text||t.title};t.menu?a.menu=n(t.menu):(a.value=t.value,e(a)),i.push(a)}),i}return n(t,i||[])}function n(e){return function(){var i=t.settings.image_list;"string"==typeof i?tinymce.util.XHR.send({url:i,success:function(t){e(tinymce.util.JSON.parse(t))}}):"function"==typeof i?i(e):e(i)}}function a(n){function a(){var t,e,i,n;t=m.find("#width")[0],e=m.find("#height")[0],t&&e&&(i=t.value(),n=e.value(),m.find("#constrain")[0].checked()&&h&&p&&i&&n&&(h!=i?(n=Math.round(i/h*n),isNaN(n)||e.value(n)):(i=Math.round(n/p*i),isNaN(i)||t.value(i))),h=i,p=n)}function r(){function e(e){function i(){e.onload=e.onerror=null,t.selection&&(t.selection.select(e),t.nodeChanged())}e.onload=function(){v.width||v.height||!x||y.setAttribs(e,{width:e.clientWidth,height:e.clientHeight}),i()},e.onerror=i}var i,n;g(),a(),v=tinymce.extend(v,m.toJSON()),v.alt||(v.alt=""),v.title||(v.title=""),""===v.width&&(v.width=null),""===v.height&&(v.height=null),v.style||(v.style=null),v={src:v.src,alt:v.alt,title:v.title,width:v.width,height:v.height,style:v.style,caption:v.caption,"class":v["class"]},t.undoManager.transact(function(){function a(e){return t.schema.getTextBlockElements()[e.nodeName]}if(!v.src)return void(d&&(y.remove(d),t.focus(),t.nodeChanged()));if(""===v.title&&(v.title=null),d?y.setAttribs(d,v):(v.id="__mcenew",t.focus(),t.selection.setContent(y.createHTML("img",v)),d=y.get("__mcenew"),y.setAttrib(d,"id",null)),t.editorUpload.uploadImagesAuto(),v.caption===!1&&y.is(d.parentNode,"figure.image")&&(i=d.parentNode,y.insertAfter(d,i),y.remove(i)),v.caption!==!0)e(d);else if(!y.is(d.parentNode,"figure.image")){n=d,d=d.cloneNode(!0),i=y.create("figure",{"class":"image"}),i.appendChild(d),i.appendChild(y.create("figcaption",{contentEditable:!0},"Caption")),i.contentEditable=!1;var r=y.getParent(n,a);r?y.split(r,n,i):y.replace(i,n),t.selection.select(i)}})}function l(t){return t&&(t=t.replace(/px$/,"")),t}function o(i){var n,a,r,l=i.meta||{};f&&f.value(t.convertURL(this.value(),"src")),tinymce.each(l,function(t,e){m.find("#"+e).value(t)}),l.width||l.height||(n=t.convertURL(this.value(),"src"),a=t.settings.image_prepend_url,r=new RegExp("^(?:[a-z]+:)?//","i"),a&&!r.test(n)&&n.substring(0,a.length)!==a&&(n=a+n),this.value(n),e(t.documentBaseURI.toAbsolute(this.value()),function(t){t.width&&t.height&&x&&(h=t.width,p=t.height,m.find("#width").value(h),m.find("#height").value(p))}))}function s(t){if(t.margin){var e=t.margin.split(" ");switch(e.length){case 1:t["margin-top"]=t["margin-top"]||e[0],t["margin-right"]=t["margin-right"]||e[0],t["margin-bottom"]=t["margin-bottom"]||e[0],t["margin-left"]=t["margin-left"]||e[0];break;case 2:t["margin-top"]=t["margin-top"]||e[0],t["margin-right"]=t["margin-right"]||e[1],t["margin-bottom"]=t["margin-bottom"]||e[0],t["margin-left"]=t["margin-left"]||e[1];break;case 3:t["margin-top"]=t["margin-top"]||e[0],t["margin-right"]=t["margin-right"]||e[1],t["margin-bottom"]=t["margin-bottom"]||e[2],t["margin-left"]=t["margin-left"]||e[1];break;case 4:t["margin-top"]=t["margin-top"]||e[0],t["margin-right"]=t["margin-right"]||e[1],t["margin-bottom"]=t["margin-bottom"]||e[2],t["margin-left"]=t["margin-left"]||e[3]}delete t.margin}return t}function g(){function e(t){return t.length>0&&/^[0-9]+$/.test(t)&&(t+="px"),t}if(t.settings.image_advtab){var i=m.toJSON(),n=y.parseStyle(i.style);n=s(n),i.vspace&&(n["margin-top"]=n["margin-bottom"]=e(i.vspace)),i.hspace&&(n["margin-left"]=n["margin-right"]=e(i.hspace)),i.border&&(n["border-width"]=e(i.border)),m.find("#style").value(y.serializeStyle(y.parseStyle(y.serializeStyle(n))))}}function c(){if(t.settings.image_advtab){var e=m.toJSON(),i=y.parseStyle(e.style);m.find("#vspace").value(""),m.find("#hspace").value(""),i=s(i),(i["margin-top"]&&i["margin-bottom"]||i["margin-right"]&&i["margin-left"])&&(i["margin-top"]===i["margin-bottom"]?m.find("#vspace").value(l(i["margin-top"])):m.find("#vspace").value(""),i["margin-right"]===i["margin-left"]?m.find("#hspace").value(l(i["margin-right"])):m.find("#hspace").value("")),i["border-width"]&&m.find("#border").value(l(i["border-width"])),m.find("#style").value(y.serializeStyle(y.parseStyle(y.serializeStyle(i))))}}var m,d,u,h,p,f,b,v={},y=t.dom,x=t.settings.image_dimensions!==!1;d=t.selection.getNode(),u=y.getParent(d,"figure.image"),u&&(d=y.select("img",u)[0]),d&&("IMG"!=d.nodeName||d.getAttribute("data-mce-object")||d.getAttribute("data-mce-placeholder"))&&(d=null),d&&(h=y.getAttrib(d,"width"),p=y.getAttrib(d,"height"),v={src:y.getAttrib(d,"src"),alt:y.getAttrib(d,"alt"),title:y.getAttrib(d,"title"),"class":y.getAttrib(d,"class"),width:h,height:p,caption:!!u}),n&&(f={type:"listbox",label:"Image list",values:i(n,function(e){e.value=t.convertURL(e.value||e.url,"src")},[{text:"None",value:""}]),value:v.src&&t.convertURL(v.src,"src"),onselect:function(t){var e=m.find("#alt");(!e.value()||t.lastControl&&e.value()==t.lastControl.text())&&e.value(t.control.text()),m.find("#src").value(t.control.value()).fire("change")},onPostRender:function(){f=this}}),t.settings.image_class_list&&(b={name:"class",type:"listbox",label:"Class",values:i(t.settings.image_class_list,function(e){e.value&&(e.textStyle=function(){return t.formatter.getCssText({inline:"img",classes:[e.value]})})})});var w=[{name:"src",type:"filepicker",filetype:"image",label:"Source",autofocus:!0,onchange:o},f];t.settings.image_description!==!1&&w.push({name:"alt",type:"textbox",label:"Image description"}),t.settings.image_title&&w.push({name:"title",type:"textbox",label:"Image Title"}),x&&w.push({type:"container",label:"Dimensions",layout:"flex",direction:"row",align:"center",spacing:5,items:[{name:"width",type:"textbox",maxLength:5,size:3,onchange:a,ariaLabel:"Width"},{type:"label",text:"x"},{name:"height",type:"textbox",maxLength:5,size:3,onchange:a,ariaLabel:"Height"},{name:"constrain",type:"checkbox",checked:!0,text:"Constrain proportions"}]}),w.push(b),t.settings.image_caption&&tinymce.Env.ceFalse&&w.push({name:"caption",type:"checkbox",label:"Caption"}),t.settings.image_advtab?(d&&(d.style.marginLeft&&d.style.marginRight&&d.style.marginLeft===d.style.marginRight&&(v.hspace=l(d.style.marginLeft)),d.style.marginTop&&d.style.marginBottom&&d.style.marginTop===d.style.marginBottom&&(v.vspace=l(d.style.marginTop)),d.style.borderWidth&&(v.border=l(d.style.borderWidth)),v.style=t.dom.serializeStyle(t.dom.parseStyle(t.dom.getAttrib(d,"style")))),m=t.windowManager.open({title:"Insert/edit image",data:v,bodyType:"tabpanel",body:[{title:"General",type:"form",items:w},{title:"Advanced",type:"form",pack:"start",items:[{label:"Style",name:"style",type:"textbox",onchange:c},{type:"form",layout:"grid",packV:"start",columns:2,padding:0,alignH:["left","right"],defaults:{type:"textbox",maxWidth:50,onchange:g},items:[{label:"Vertical space",name:"vspace"},{label:"Horizontal space",name:"hspace"},{label:"Border",name:"border"}]}]}],onSubmit:r})):m=t.windowManager.open({title:"Insert/edit image",data:v,body:w,onSubmit:r})}t.on("preInit",function(){function e(t){var e=t.attr("class");return e&&/\bimage\b/.test(e)}function i(t){return function(i){function n(e){e.attr("contenteditable",t?"true":null)}for(var a,r=i.length;r--;)a=i[r],e(a)&&(a.attr("contenteditable",t?"false":null),tinymce.each(a.getAll("figcaption"),n))}}t.parser.addNodeFilter("figure",i(!0)),t.serializer.addNodeFilter("figure",i(!1))}),t.addButton("image",{icon:"image",tooltip:"Insert/edit image",onclick:n(a),stateSelector:"img:not([data-mce-object],[data-mce-placeholder]),figure.image"}),t.addMenuItem("image",{icon:"image",text:"Insert/edit image",onclick:n(a),context:"insert",prependToContext:!0}),t.addCommand("mceImage",n(a))});