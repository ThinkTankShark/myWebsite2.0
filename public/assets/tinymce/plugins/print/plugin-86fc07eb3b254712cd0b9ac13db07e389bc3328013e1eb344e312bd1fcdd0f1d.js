tinymce.PluginManager.add("print",function(a){a.addCommand("mcePrint",function(){a.getWin().print()}),a.addButton("print",{title:"Print",cmd:"mcePrint"}),a.addShortcut("Meta+P","","mcePrint"),a.addMenuItem("print",{text:"Print",cmd:"mcePrint",icon:"print",shortcut:"Meta+P",context:"file"})});
