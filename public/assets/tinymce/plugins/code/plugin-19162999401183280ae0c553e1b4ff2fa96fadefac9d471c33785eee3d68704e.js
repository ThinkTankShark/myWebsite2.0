tinymce.PluginManager.add("code",function(e){function o(){var o=e.windowManager.open({title:"Source code",body:{type:"textbox",name:"code",multiline:!0,minWidth:e.getParam("code_dialog_width",600),minHeight:e.getParam("code_dialog_height",Math.min(tinymce.DOM.getViewPort().h-200,500)),spellcheck:!1,style:"direction: ltr; text-align: left"},onSubmit:function(o){e.focus(),e.undoManager.transact(function(){e.setContent(o.data.code)}),e.selection.setCursorLocation(),e.nodeChanged()}});o.find("#code").value(e.getContent({source_view:!0}))}e.addCommand("mceCodeEditor",o),e.addButton("code",{icon:"code",tooltip:"Source code",onclick:o}),e.addMenuItem("code",{icon:"code",text:"Source code",context:"tools",onclick:o})});