tinymce.ThemeManager.add("modern",function(e){function t(t,n){var i,o=[];return t?(h(t.split(/[ ,]/),function(t){function r(){function n(e){return function(n,i){for(var o,r=i.parents.length;r--&&(o=i.parents[r].nodeName,"OL"!=o&&"UL"!=o););t.active(n&&o==e)}}var i=e.selection;"bullist"==l&&i.selectorChanged("ul > li",n("UL")),"numlist"==l&&i.selectorChanged("ol > li",n("OL")),t.settings.stateSelector&&i.selectorChanged(t.settings.stateSelector,function(e){t.active(e)},!0),t.settings.disabledStateSelector&&i.selectorChanged(t.settings.disabledStateSelector,function(e){t.disabled(e)})}var l;"|"==t?i=null:m.has(t)?(t={type:t,size:n},o.push(t),i=null):(i||(i={type:"buttongroup",items:[]},o.push(i)),e.buttons[t]&&(l=t,t=e.buttons[l],"function"==typeof t&&(t=t()),t.type=t.type||"button",t.size=n,t=m.create(t),i.items.push(t),e.initialized?r():e.on("init",r)))}),{type:"toolbar",layout:"flow",items:o}):void 0}function n(e){function n(n){return n?(i.push(t(n,e)),!0):void 0}var i=[];if(tinymce.isArray(f.toolbar)){if(0===f.toolbar.length)return;tinymce.each(f.toolbar,function(e,t){f["toolbar"+(t+1)]=e}),delete f.toolbar}for(var o=1;10>o&&n(f["toolbar"+o]);o++);return i.length||f.toolbar===!1||n(f.toolbar||v),i.length?{type:"panel",layout:"stack",classes:"toolbar-grp",ariaRoot:!0,ariaRemember:!0,items:i}:void 0}function i(){function t(t){var n;return"|"==t?{text:"|"}:n=e.menuItems[t]}function n(n){var i,o,r,l,a;if(a=tinymce.makeMap((f.removed_menuitems||"").split(/[ ,]/)),f.menu?(o=f.menu[n],l=!0):o=g[n],o){i={text:o.title},r=[],h((o.items||"").split(/[ ,]/),function(e){var n=t(e);n&&!a[e]&&r.push(t(e))}),l||h(e.menuItems,function(e){e.context==n&&("before"==e.separator&&r.push({text:"|"}),e.prependToContext?r.unshift(e):r.push(e),"after"==e.separator&&r.push({text:"|"}))});for(var s=0;s<r.length;s++)"|"==r[s].text&&(0!==s&&s!=r.length-1||r.splice(s,1));if(i.menu=r,!i.menu.length)return null}return i}var i,o=[],r=[];if(f.menu)for(i in f.menu)r.push(i);else for(i in g)r.push(i);for(var l="string"==typeof f.menubar?f.menubar.split(/[ ,]/):r,a=0;a<l.length;a++){var s=l[a];s=n(s),s&&o.push(s)}return o}function o(t){function n(e){var n=t.find(e)[0];n&&n.focus(!0)}e.shortcuts.add("Alt+F9","",function(){n("menubar")}),e.shortcuts.add("Alt+F10","",function(){n("toolbar")}),e.shortcuts.add("Alt+F11","",function(){n("elementpath")}),t.on("cancel",function(){e.focus()})}function r(t,n){function i(e){return{width:e.clientWidth,height:e.clientHeight}}var o,r,l,a;o=e.getContainer(),r=e.getContentAreaContainer().firstChild,l=i(o),a=i(r),null!==t&&(t=Math.max(f.min_width||100,t),t=Math.min(f.max_width||65535,t),b.setStyle(o,"width",t+(l.width-a.width)),b.setStyle(r,"width",t)),n=Math.max(f.min_height||100,n),n=Math.min(f.max_height||65535,n),b.setStyle(r,"height",n),e.fire("ResizeEditor")}function l(t,n){var i=e.getContentAreaContainer();d.resizeTo(i.clientWidth+t,i.clientHeight+n)}function a(){function n(){return e.contextToolbars||[]}function i(t){var n,i,o;return n=tinymce.DOM.getPos(e.getContentAreaContainer()),i=e.dom.getRect(t),o=e.dom.getRoot(),"BODY"==o.nodeName&&(i.x-=o.ownerDocument.documentElement.scrollLeft||o.scrollLeft,i.y-=o.ownerDocument.documentElement.scrollTop||o.scrollTop),i.x+=n.x,i.y+=n.y,i}function o(){h(e.contextToolbars,function(e){e.panel&&e.panel.hide()})}function r(e,t,n){t=t?t.substr(0,2):"",h({t:"down",b:"up"},function(i,o){e.classes.toggle("arrow-"+i,n(o,t.substr(0,1)))}),h({l:"left",r:"right"},function(i,o){e.classes.toggle("arrow-"+i,n(o,t.substr(1,1)))})}function l(e){return{left:e.x,top:e.y,width:e.w,height:e.h,right:e.x+e.w,bottom:e.y+e.h}}function a(e,t,n,i,o){return o=l({x:e,y:t,w:o.w,h:o.h}),f.inline_toolbar_position_handler&&(o=f.inline_toolbar_position_handler({elementRect:l(n),contentAreaRect:l(i),panelRect:o})),o}function s(e,t){e.moveTo(t.left,t.top)}function c(t){var n,l,c,u,d,f,m;if(!e.removed){if(!t||!t.toolbar.panel)return void o();m=["bc-tc","tc-bc","tl-bl","bl-tl","tr-br","br-tr"],d=t.toolbar.panel,d.show(),c=i(t.element),l=tinymce.DOM.getRect(d.getEl()),u=tinymce.DOM.getRect(e.getContentAreaContainer()||e.getBody()),c.w=t.element.clientWidth,c.h=t.element.clientHeight,e.inline||(u.w=e.getDoc().documentElement.offsetWidth),e.selection.controlSelection.isResizable(t.element)&&(c=y.inflate(c,0,8)),n=y.findBestRelativePosition(l,c,u,m),c=y.clamp(c,u),n?(f=y.relativePosition(l,c,n),s(d,a(f.x,f.y,c,u,l))):(u.h+=40,c=y.intersect(u,c),c?(n=y.findBestRelativePosition(l,c,u,["bc-tc","bl-tl","br-tr"]),n?(f=y.relativePosition(l,c,n),s(d,a(f.x,f.y,c,u,l))):s(d,a(c.x,c.y,c,u,l))):d.hide()),r(d,n,function(e,t){return(!c||c.w>40)&&e===t})}}function u(){function t(){e.selection&&c(g(e.selection.getNode()))}tinymce.util.Delay.requestAnimationFrame(t)}function d(){v||(v=e.selection.getScrollContainer()||e.getWin(),tinymce.$(v).on("scroll",u),e.on("remove",function(){tinymce.$(v).off("scroll")}))}function b(n){var i;return n.toolbar.panel?(n.toolbar.panel.show(),void c(n)):(d(),i=m.create({type:"floatpanel",role:"dialog",classes:"tinymce tinymce-inline arrow",ariaLabel:"Inline toolbar",layout:"flex",direction:"column",align:"stretch",autohide:!1,autofix:!0,fixed:!0,border:1,items:t(n.toolbar.items),oncancel:function(){e.focus()}}),n.toolbar.panel=i,i.renderTo(document.body).reflow(),void c(n))}function p(){tinymce.each(n(),function(e){e.panel&&e.panel.hide()})}function g(t){var i,o,r,l=n();for(r=e.$(t).parents().add(t),i=r.length-1;i>=0;i--)for(o=l.length-1;o>=0;o--)if(l[o].predicate(r[i]))return{toolbar:l[o],element:r[i]};return null}var v;e.on("click keyup setContent",function(t){("setcontent"!=t.type||t.selection)&&tinymce.util.Delay.setEditorTimeout(e,function(){var t;t=g(e.selection.getNode()),t?(p(),b(t)):p()})}),e.on("blur hide",p),e.on("ObjectResizeStart",function(){var t=g(e.selection.getNode());t&&t.toolbar.panel&&t.toolbar.panel.hide()}),e.on("nodeChange ResizeEditor ResizeWindow",u),e.on("remove",function(){tinymce.each(n(),function(e){e.panel&&e.panel.remove()}),e.contextToolbars={}}),e.shortcuts.add("ctrl+shift+e > ctrl+shift+p","",function(){var t=g(e.selection.getNode());t&&t.toolbar.panel&&t.toolbar.panel.items()[0].focus()})}function s(e){return function(){e.initialized?e.fire("SkinLoaded"):e.on("init",function(){e.fire("SkinLoaded")})}}function c(t){function r(){if(h&&h.moveRel&&h.visible()&&!h._fixed){var t=e.selection.getScrollContainer(),n=e.getBody(),i=0,o=0;if(t){var r=b.getPos(n),l=b.getPos(t);i=Math.max(0,l.x-r.x),o=Math.max(0,l.y-r.y)}h.fixed(!1).moveRel(n,e.rtl?["tr-br","br-tr"]:["tl-bl","bl-tl","tr-br"]).moveBy(i,o)}}function l(){h&&(h.show(),r(),b.addClass(e.getBody(),"mce-edit-focus"))}function c(){h&&(h.hide(),p.hideAll(),b.removeClass(e.getBody(),"mce-edit-focus"))}function u(){return h?void(h.visible()||l()):(h=d.panel=m.create({type:y?"panel":"floatpanel",role:"application",classes:"tinymce tinymce-inline",layout:"flex",direction:"column",align:"stretch",autohide:!1,autofix:!0,fixed:!!y,border:1,items:[f.menubar===!1?null:{type:"menubar",border:"0 0 1 0",items:i()},n(f.toolbar_items_size)]}),e.fire("BeforeRenderUI"),h.renderTo(y||document.body).reflow(),o(h),l(),a(),e.on("nodeChange",r),e.on("activate",l),e.on("deactivate",c),void e.nodeChanged())}var h,y;return f.fixed_toolbar_container&&(y=b.select(f.fixed_toolbar_container)[0]),f.content_editable=!0,e.on("focus",function(){t.skinUiCss?tinymce.DOM.styleSheetLoader.load(t.skinUiCss,u,u):u()}),e.on("blur hide",c),e.on("remove",function(){h&&(h.remove(),h=null)}),t.skinUiCss&&tinymce.DOM.styleSheetLoader.load(t.skinUiCss,s(e)),{}}function u(t){function l(){return function(e){"readonly"==e.mode?c.find("*").disabled(!0):c.find("*").disabled(!1)}}var c,u,h;return t.skinUiCss&&tinymce.DOM.styleSheetLoader.load(t.skinUiCss,s(e)),c=d.panel=m.create({type:"panel",role:"application",classes:"tinymce",style:"visibility: hidden",layout:"stack",border:1,items:[f.menubar===!1?null:{type:"menubar",border:"0 0 1 0",items:i()},n(f.toolbar_items_size),{type:"panel",name:"iframe",layout:"stack",classes:"edit-area",html:"",border:"1 0 0 0"}]}),f.resize!==!1&&(u={type:"resizehandle",direction:f.resize,onResizeStart:function(){var t=e.getContentAreaContainer().firstChild;h={width:t.clientWidth,height:t.clientHeight}},onResize:function(e){"both"==f.resize?r(h.width+e.deltaX,h.height+e.deltaY):r(null,h.height+e.deltaY)}}),f.statusbar!==!1&&c.add({type:"panel",name:"statusbar",classes:"statusbar",layout:"flow",border:"1 0 0 0",ariaRoot:!0,items:[{type:"elementpath"},u]}),e.fire("BeforeRenderUI"),e.on("SwitchMode",l()),c.renderBefore(t.targetNode).reflow(),f.readonly&&e.setMode("readonly"),f.width&&tinymce.DOM.setStyle(c.getEl(),"width",f.width),e.on("remove",function(){c.remove(),c=null}),o(c),a(),{iframeContainer:c.find("#iframe")[0].getEl(),editorContainer:c.getEl()}}var d=this,f=e.settings,m=tinymce.ui.Factory,h=tinymce.each,b=tinymce.DOM,y=tinymce.geom.Rect,p=tinymce.ui.FloatPanel,g={file:{title:"File",items:"newdocument"},edit:{title:"Edit",items:"undo redo | cut copy paste pastetext | selectall"},insert:{title:"Insert",items:"|"},view:{title:"View",items:"visualaid |"},format:{title:"Format",items:"bold italic underline strikethrough superscript subscript | formats | removeformat"},table:{title:"Table"},tools:{title:"Tools"}},v="undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image";d.renderUI=function(t){var n=f.skin!==!1?f.skin||"lightgray":!1;if(n){var i=f.skin_url;i=i?e.documentBaseURI.toAbsolute(i):tinymce.baseURL+"/skins/"+n,tinymce.Env.documentMode<=7?t.skinUiCss=i+"/skin.ie7.min.css":t.skinUiCss=i+"/skin.min.css",e.contentCSS.push(i+"/content"+(e.inline?".inline":"")+".min.css")}return e.on("ProgressState",function(e){d.throbber=d.throbber||new tinymce.ui.Throbber(d.panel.getEl("body")),e.state?d.throbber.show(e.time):d.throbber.hide()}),f.inline?c(t):u(t)},d.resizeTo=r,d.resizeBy=l});