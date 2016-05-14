(function(){rivets.binders.input={publishes:!0,routine:rivets.binders.value.routine,bind:function(e){return $(e).bind("input.rivets",this.publish)},unbind:function(e){return $(e).unbind("input.rivets")}},rivets.configure({prefix:"rv",adapter:{subscribe:function(e,t,i){return i.wrapped=function(e,t){return i(t)},e.on("change:"+t,i.wrapped)},unsubscribe:function(e,t,i){return e.off("change:"+t,i.wrapped)},read:function(e,t){return"cid"===t?e.cid:e.get(t)},publish:function(e,t,i){return e.cid?e.set(t,i):e[t]=i}}})}).call(this),function(){var e,t,i,n,o,s,r,l,a,p,d,c={}.hasOwnProperty,u=function(e,t){function i(){this.constructor=e}for(var n in t)c.call(t,n)&&(e[n]=t[n]);return i.prototype=t.prototype,e.prototype=new i,e.__super__=t.prototype,e};o=function(e){function t(){return r=t.__super__.constructor.apply(this,arguments)}return u(t,e),t.prototype.sync=function(){},t.prototype.indexInDOM=function(){var e,t=this;return e=$(".fb-field-wrapper").filter(function(e,i){return $(i).data("cid")===t.cid}),$(".fb-field-wrapper").index(e)},t.prototype.is_input=function(){return null!=i.inputFields[this.get(i.options.mappings.FIELD_TYPE)]},t}(Backbone.DeepModel),n=function(e){function t(){return l=t.__super__.constructor.apply(this,arguments)}return u(t,e),t.prototype.initialize=function(){return this.on("add",this.copyCidToModel)},t.prototype.model=o,t.prototype.comparator=function(e){return e.indexInDOM()},t.prototype.copyCidToModel=function(e){return e.attributes.cid=e.cid},t}(Backbone.Collection),s=function(e){function t(){return a=t.__super__.constructor.apply(this,arguments)}return u(t,e),t.prototype.className="fb-field-wrapper",t.prototype.events={"click .subtemplate-wrapper":"focusEditView","click .js-duplicate":"duplicate","click .js-clear":"clear"},t.prototype.initialize=function(e){return this.parentView=e.parentView,this.listenTo(this.model,"change",this.render),this.listenTo(this.model,"destroy",this.remove)},t.prototype.render=function(){return this.$el.addClass("response-field-"+this.model.get(i.options.mappings.FIELD_TYPE)).data("cid",this.model.cid).html(i.templates["view/base"+(this.model.is_input()?"":"_non_input")]({rf:this.model})),this},t.prototype.focusEditView=function(){return this.parentView.createAndShowEditView(this.model)},t.prototype.clear=function(e){var t,n,o=this;switch(e.preventDefault(),e.stopPropagation(),t=function(){return o.parentView.handleFormUpdate(),o.model.destroy()},n=i.options.CLEAR_FIELD_CONFIRM,typeof n){case"string":if(confirm(n))return t();break;case"function":return n(t);default:return t()}},t.prototype.duplicate=function(){var e;return e=_.clone(this.model.attributes),delete e.id,e.label+=" Copy",this.parentView.createField(e,{position:this.model.indexInDOM()+1})},t}(Backbone.View),t=function(e){function t(){return p=t.__super__.constructor.apply(this,arguments)}return u(t,e),t.prototype.className="edit-response-field",t.prototype.events={"click .js-add-option":"addOption","click .js-remove-option":"removeOption","click .js-default-updated":"defaultUpdated","input .option-label-input":"forceRender"},t.prototype.initialize=function(e){return this.parentView=e.parentView,this.listenTo(this.model,"destroy",this.remove)},t.prototype.render=function(){return console.log(this.model),this.$el.html(i.templates["edit/base"+(this.model.is_input()?"":"_non_input")]({rf:this.model})),this.$el.find(".fields-cid").html(this.model.attributes.cid),rivets.bind(this.$el,{model:this.model}),this},t.prototype.remove=function(){return this.parentView.editView=void 0,this.parentView.$el.find('[data-target="#addField"]').click(),t.__super__.remove.apply(this,arguments)},t.prototype.addOption=function(e){var t,n,o,s;return t=$(e.currentTarget),n=this.$el.find(".option").index(t.closest(".option")),s=this.model.get(i.options.mappings.OPTIONS)||[],o={label:"",checked:!1},n>-1?s.splice(n+1,0,o):s.push(o),this.model.set(i.options.mappings.OPTIONS,s),this.model.trigger("change:"+i.options.mappings.OPTIONS),this.forceRender()},t.prototype.removeOption=function(e){var t,n,o;return t=$(e.currentTarget),n=this.$el.find(".js-remove-option").index(t),o=this.model.get(i.options.mappings.OPTIONS),o.splice(n,1),this.model.set(i.options.mappings.OPTIONS,o),this.model.trigger("change:"+i.options.mappings.OPTIONS),this.forceRender()},t.prototype.defaultUpdated=function(e){var t;return t=$(e.currentTarget),"checkboxes"!==this.model.get(i.options.mappings.FIELD_TYPE)&&this.$el.find(".js-default-updated").not(t).attr("checked",!1).trigger("change"),this.forceRender()},t.prototype.forceRender=function(){return this.model.trigger("change")},t}(Backbone.View),e=function(e){function o(){return d=o.__super__.constructor.apply(this,arguments)}return u(o,e),o.prototype.SUBVIEWS=[],o.prototype.events={"click .js-save-form":"saveForm","click .fb-tabs a":"showTab","click .fb-add-field-types a":"addField","mouseover .fb-add-field-types":"lockLeftWrapper","mouseout .fb-add-field-types":"unlockLeftWrapper"},o.prototype.initialize=function(e){var t;return t=e.selector,this.formBuilder=e.formBuilder,this.bootstrapData=e.bootstrapData,null!=t&&this.setElement($(t)),this.collection=new n,this.collection.bind("add",this.addOne,this),this.collection.bind("reset",this.reset,this),this.collection.bind("change",this.handleFormUpdate,this),this.collection.bind("destroy add reset",this.hideShowNoResponseFields,this),this.collection.bind("destroy",this.ensureEditViewScrolled,this),this.render(),this.collection.reset(this.bootstrapData),this.bindSaveEvent()},o.prototype.bindSaveEvent=function(){var e=this;return this.formSaved=!0,this.saveFormButton=this.$el.find(".js-save-form"),this.saveFormButton.attr("disabled",!0).text(i.options.dict.ALL_CHANGES_SAVED),i.options.AUTOSAVE&&setInterval(function(){return e.saveForm.call(e)},5e3),$(window).bind("beforeunload",function(){return e.formSaved?void 0:i.options.dict.UNSAVED_CHANGES})},o.prototype.reset=function(){return this.$responseFields.html(""),this.addAll()},o.prototype.render=function(){var e,t,n,o;for(this.$el.html(i.templates.page()),this.$fbLeft=this.$el.find(".fb-left"),this.$responseFields=this.$el.find(".fb-response-fields"),this.bindWindowScrollEvent(),this.hideShowNoResponseFields(),o=this.SUBVIEWS,t=0,n=o.length;n>t;t++)e=o[t],new e({parentView:this}).render();return this},o.prototype.bindWindowScrollEvent=function(){var e=this;return $(window).on("scroll",function(){var t,i;if(e.$fbLeft.data("locked")!==!0)return i=Math.max(0,$(window).scrollTop()-e.$el.offset().top),t=e.$responseFields.height(),e.$fbLeft.css({})})},o.prototype.showTab=function(e){var t,i,n;return t=$(e.currentTarget),n=t.data("target"),t.closest("li").addClass("active").siblings("li").removeClass("active"),$(n).addClass("active").siblings(".fb-tab-pane").removeClass("active"),"#editField"!==n&&this.unlockLeftWrapper(),"#editField"===n&&!this.editView&&(i=this.collection.models[0])?this.createAndShowEditView(i):void 0},o.prototype.addOne=function(e,t,i){var n,o;return o=new s({model:e,parentView:this}),null!=i.$replaceEl?i.$replaceEl.replaceWith(o.render().el):null==i.position||-1===i.position?this.$responseFields.append(o.render().el):0===i.position?this.$responseFields.prepend(o.render().el):(n=this.$responseFields.find(".fb-field-wrapper").eq(i.position))[0]?n.before(o.render().el):this.$responseFields.append(o.render().el)},o.prototype.setSortable=function(){var e=this;return this.$responseFields.hasClass("ui-sortable")&&this.$responseFields.sortable("destroy"),this.$responseFields.sortable({forcePlaceholderSize:!0,placeholder:"sortable-placeholder",stop:function(t,n){var o;return n.item.data("field-type")&&(o=e.collection.create(i.helpers.defaultFieldAttrs(n.item.data("field-type")),{$replaceEl:n.item}),e.createAndShowEditView(o)),e.handleFormUpdate(),!0},update:function(t,i){return i.item.data("field-type")?void 0:e.ensureEditViewScrolled()}}),this.setDraggable()},o.prototype.setDraggable=function(){var e,t=this;return e=this.$el.find("[data-field-type]"),e.draggable({connectToSortable:this.$responseFields,helper:function(){var e;return e=$("<div class='response-field-draggable-helper' />"),e.css({width:t.$responseFields.width(),height:"80px"}),e}})},o.prototype.addAll=function(){return this.collection.each(this.addOne,this),this.setSortable()},o.prototype.hideShowNoResponseFields=function(){return this.$el.find(".fb-no-response-fields")[this.collection.length>0?"hide":"show"]()},o.prototype.addField=function(e){var t;return t=$(e.currentTarget).data("field-type"),this.createField(i.helpers.defaultFieldAttrs(t))},o.prototype.createField=function(e,t){var i;return i=this.collection.create(e,t),this.createAndShowEditView(i),this.handleFormUpdate()},o.prototype.createAndShowEditView=function(e){var i,n;if(n=this.$el.find(".fb-field-wrapper").filter(function(){return $(this).data("cid")===e.cid}),n.addClass("editing").siblings(".fb-field-wrapper").removeClass("editing"),this.editView){if(this.editView.model.cid===e.cid)return this.$el.find('.fb-tabs a[data-target="#editField"]').click(),void this.scrollLeftWrapper(n);this.editView.remove()}return this.editView=new t({model:e,parentView:this}),i=this.editView.render().$el,this.$el.find(".fb-edit-field-wrapper").html(i),this.$el.find('.fb-tabs a[data-target="#editField"]').click(),this.scrollLeftWrapper(n),this},o.prototype.ensureEditViewScrolled=function(){return this.editView?this.scrollLeftWrapper($(".fb-field-wrapper.editing")):void 0},o.prototype.scrollLeftWrapper=function(e){var t=this;return this.unlockLeftWrapper(),e[0]?$.scrollWindowTo(this.$el.offset().top+e.offset().top-this.$responseFields.offset().top,200,function(){return t.lockLeftWrapper()}):void 0},o.prototype.lockLeftWrapper=function(){return this.$fbLeft.data("locked",!0)},o.prototype.unlockLeftWrapper=function(){return this.$fbLeft.data("locked",!1)},o.prototype.handleFormUpdate=function(){return this.updatingBatch?void 0:(this.formSaved=!1,this.saveFormButton.removeAttr("disabled").text(i.options.dict.SAVE_FORM))},o.prototype.saveForm=function(){var e;if(!this.formSaved)return this.formSaved=!0,this.saveFormButton.attr("disabled",!0).text(i.options.dict.ALL_CHANGES_SAVED),this.collection.sort(),e=JSON.stringify({fields:this.collection.toJSON()}),i.options.HTTP_ENDPOINT&&this.doAjaxSave(e),this.formBuilder.trigger("save",e)},o.prototype.doAjaxSave=function(e){var t=this;return $.ajax({url:i.options.HTTP_ENDPOINT,type:i.options.HTTP_METHOD,data:e,contentType:"application/json",success:function(e){var i,n,o,s;for(t.updatingBatch=!0,n=0,o=e.length;o>n;n++)i=e[n],null!=(s=t.collection.get(i.cid))&&s.set({id:i.id}),t.collection.trigger("sync");return t.updatingBatch=void 0}})},o}(Backbone.View),i=function(){function t(t){var i;null==t&&(t={}),_.extend(this,Backbone.Events),i=_.extend(t,{formBuilder:this}),this.mainView=new e(i)}return t.helpers={defaultFieldAttrs:function(e){var i,n;return i={},i[t.options.mappings.LABEL]="Untitled",i[t.options.mappings.FIELD_TYPE]=e,i[t.options.mappings.REQUIRED]=!0,i.field_options={},("function"==typeof(n=t.fields[e]).defaultAttributes?n.defaultAttributes(i):void 0)||i},simple_format:function(e){return null!=e?e.replace(/\n/g,"<br />"):void 0}},t.options={BUTTON_CLASS:"btn btn-default",HTTP_ENDPOINT:"",HTTP_METHOD:"POST",AUTOSAVE:!0,CLEAR_FIELD_CONFIRM:!1,mappings:{FIELD_CLASS:"field_options.field_class",SIZE:"field_options.size",UNITS:"field_options.units",LABEL:"label",FIELD_TYPE:"field_type",REQUIRED:"required",ADMIN_ONLY:"admin_only",OPTIONS:"field_options.options",DESCRIPTION:"field_options.description",INCLUDE_OTHER:"field_options.include_other_option",INCLUDE_BLANK:"field_options.include_blank_option",INTEGER_ONLY:"field_options.integer_only",MIN:"field_options.min",MAX:"field_options.max",MINLENGTH:"field_options.minlength",MAXLENGTH:"field_options.maxlength",LENGTH_UNITS:"field_options.min_max_length_units"},dict:{ALL_CHANGES_SAVED:"All changes saved",SAVE_FORM:"Save form",UNSAVED_CHANGES:"You have unsaved changes. If you leave this page, you will lose those changes!"}},t.fields={},t.inputFields={},t.nonInputFields={},t.registerField=function(e,i){var n,o,s,r;for(r=["view","edit"],o=0,s=r.length;s>o;o++)n=r[o],i[n]=_.template(i[n]);return i.field_type=e,t.fields[e]=i,"non_input"===i.type?t.nonInputFields[e]=i:t.inputFields[e]=i},t}(),window.Formbuilder=i,"undefined"!=typeof module&&null!==module?module.exports=i:window.Formbuilder=i}.call(this),function(){Formbuilder.registerField("checkboxes",{order:10,view:"<% for (i in (rf.get(Formbuilder.options.mappings.OPTIONS) || [])) { %>\n  <div>\n    <label class='fb-option'>\n      <input class='rf-clase-<%= rf.get(Formbuilder.options.mappings.FIELD_CLASS) %>'  type='checkbox' <%= rf.get(Formbuilder.options.mappings.OPTIONS)[i].checked && 'checked' %> onclick=\"javascript: return false;\" />\n      <%= rf.get(Formbuilder.options.mappings.OPTIONS)[i].label %>\n    </label>\n  </div>\n<% } %>\n\n<% if (rf.get(Formbuilder.options.mappings.INCLUDE_OTHER)) { %>\n  <div class='other-option'>\n    <label class='fb-option'>\n      <input type='checkbox' />\n      Other\n    </label>\n\n    <input type='text' />\n  </div>\n<% } %>",edit:"<%= Formbuilder.templates['edit/class']() %>\n<%= Formbuilder.templates['edit/options']() %>",addButton:'<span class="symbol"><span class="fa fa-square-o"></span></span> Checkboxes',defaultAttributes:function(e){return e.field_options.options=[{label:"",checked:!1},{label:"",checked:!1}],e.field_options.field_class="default",e}})}.call(this),function(){Formbuilder.registerField("dropdown",{order:24,view:"<select class='rf-clase-<%= rf.get(Formbuilder.options.mappings.FIELD_CLASS) %>'>\n  <% if (rf.get(Formbuilder.options.mappings.INCLUDE_BLANK)) { %>\n    <option value=''></option>\n  <% } %>\n\n  <% for (i in (rf.get(Formbuilder.options.mappings.OPTIONS) || [])) { %>\n    <option <%= rf.get(Formbuilder.options.mappings.OPTIONS)[i].checked && 'selected' %>>\n      <%= rf.get(Formbuilder.options.mappings.OPTIONS)[i].label %>\n    </option>\n  <% } %>\n</select>",edit:"<%= Formbuilder.templates['edit/class']() %>\n<%= Formbuilder.templates['edit/options']() %>",addButton:'<span class="symbol"><span class="fa fa-caret-down"></span></span> Dropdown',defaultAttributes:function(e){return e.field_options.options=[{label:"",checked:!1},{label:"",checked:!1}],e.field_options.include_blank_option=!1,e.field_options.field_class="default",e}})}.call(this),function(){Formbuilder.registerField("email",{order:40,view:"<input type='text' class='rf-size-<%= rf.get(Formbuilder.options.mappings.SIZE) %> rf-clase-<%= rf.get(Formbuilder.options.mappings.FIELD_CLASS) %>' />",edit:"<%= Formbuilder.templates['edit/class']() %>\n",addButton:'<span class="symbol"><span class="fa fa-envelope-o"></span></span> Email',defaultAttributes:function(e){return e.field_options.field_class="default",e}})}.call(this),function(){}.call(this),function(){Formbuilder.registerField("paragraph",{cid:"",order:5,view:"<textarea class='rf-size-<%= rf.get(Formbuilder.options.mappings.SIZE) %> rf-clase-<%= rf.get(Formbuilder.options.mappings.FIELD_CLASS) %> '></textarea>",edit:"<%= Formbuilder.templates['edit/class']() %>",addButton:'<span class="symbol">&#182;</span> Textarea',defaultAttributes:function(e){return e.field_options.size="small",e.field_options.field_class="default",e}})}.call(this),function(){Formbuilder.registerField("radio",{order:15,view:"<% for (i in (rf.get(Formbuilder.options.mappings.OPTIONS) || [])) { %>\n  <div>\n    <label class='fb-option'>\n      <input class='rf-clase-<%= rf.get(Formbuilder.options.mappings.FIELD_CLASS) %>' type='radio' <%= rf.get(Formbuilder.options.mappings.OPTIONS)[i].checked && 'checked' %> onclick=\"javascript: return false;\" />\n      <%= rf.get(Formbuilder.options.mappings.OPTIONS)[i].label %>\n    </label>\n  </div>\n<% } %>\n\n<% if (rf.get(Formbuilder.options.mappings.INCLUDE_OTHER)) { %>\n  <div class='other-option'>\n    <label class='fb-option'>\n      <input type='radio' />\n      Other\n    </label>\n\n    <input type='text' />\n  </div>\n<% } %>",edit:"<%= Formbuilder.templates['edit/class']() %>\n<%= Formbuilder.templates['edit/options']() %>",addButton:'<span class="symbol"><span class="fa fa-circle-o"></span></span> Multiple Choice',defaultAttributes:function(e){return e.field_options.options=[{label:"",checked:!1},{label:"",checked:!1}],e.field_options.field_class="default",e}})}.call(this),function(){Formbuilder.registerField("text",{order:0,view:"<input type='text' class='rf-size-<%= rf.get(Formbuilder.options.mappings.SIZE) %> rf-clase-<%= rf.get(Formbuilder.options.mappings.FIELD_CLASS) %>' />",edit:"<%= Formbuilder.templates['edit/class']() %>",addButton:"<span class='symbol'><span class='fa fa-font'></span></span> Text",defaultAttributes:function(e){return e.field_options.size="small",e.field_options.field_class="default",e}})}.call(this),function(){Formbuilder.registerField("captcha",{order:45,view:"<input type='text' placeholder='' class='rf-clase-<%= rf.get(Formbuilder.options.mappings.FIELD_CLASS) %>' />",edit:"<%= Formbuilder.templates['edit/class']() %>\n",addButton:'<span class="symbol"><span class="glyphicon glyphicon-barcode"></span></span> Captcha',defaultAttributes:function(e){return e.field_options.field_class="default",e}})}.call(this),function(){Formbuilder.registerField("file",{order:54,view:"<input type='file' placeholder='' class='rf-clase-<%= rf.get(Formbuilder.options.mappings.FIELD_CLASS) %>' multiple />",edit:"<%= Formbuilder.templates['edit/class']() %>\n",addButton:'<span class="symbol"><span class="glyphicon glyphicon-barcode"></span></span> Upload File',defaultAttributes:function(e){return e.field_options.field_class="default",e}})}.call(this),function(){Formbuilder.registerField("website",{order:35,view:"<input type='text' placeholder='http://' class='rf-clase-<%= rf.get(Formbuilder.options.mappings.FIELD_CLASS) %>' />",edit:"<%= Formbuilder.templates['edit/class']() %>\n",addButton:'<span class="symbol"><span class="fa fa-link"></span></span> Website',defaultAttributes:function(e){return e.field_options.field_class="default",e}})}.call(this),this.Formbuilder=this.Formbuilder||{},this.Formbuilder.templates=this.Formbuilder.templates||{},this.Formbuilder.templates["edit/base"]=function(obj){obj||(obj={});var __t,__p="";_.escape;with(obj)__p+=(null==(__t=Formbuilder.templates["edit/base_header"]())?"":__t)+"\n"+(null==(__t=Formbuilder.templates["edit/common"]())?"":__t)+"\n"+(null==(__t=Formbuilder.fields[rf.get(Formbuilder.options.mappings.FIELD_TYPE)].edit({rf:rf}))?"":__t)+"\n";return __p},this.Formbuilder.templates["edit/base_header"]=function(obj){obj||(obj={});var __t,__p="";_.escape;with(obj)__p+="<div class='fb-field-label'>\n  <span data-rv-text=\"model."+(null==(__t=Formbuilder.options.mappings.LABEL)?"":__t)+"\"></span>\n  <code class='field-type' data-rv-text='model."+(null==(__t=Formbuilder.options.mappings.FIELD_TYPE)?"":__t)+"'></code>\n  <span class='fa fa-arrow-right pull-right'></span>\n cid: <span class='fields-cid'></span>\n</div>";return __p},this.Formbuilder.templates["edit/base_non_input"]=function(obj){obj||(obj={});var __t,__p="";_.escape;with(obj)__p+=(null==(__t=Formbuilder.templates["edit/base_header"]())?"":__t)+"\n"+(null==(__t=Formbuilder.fields[rf.get(Formbuilder.options.mappings.FIELD_TYPE)].edit({rf:rf}))?"":__t)+"\n";return __p},this.Formbuilder.templates["edit/checkboxes"]=function(obj){obj||(obj={});var __t,__p="";_.escape;with(obj)__p+="<label>\n  <input type='checkbox' data-rv-checked='model."+(null==(__t=Formbuilder.options.mappings.REQUIRED)?"":__t)+"' />\n  Required\n</label>\n<!-- label>\n  <input type='checkbox' data-rv-checked='model."+(null==(__t=Formbuilder.options.mappings.ADMIN_ONLY)?"":__t)+"' />\n  Admin only\n</label -->";return __p},this.Formbuilder.templates["edit/common"]=function(obj){obj||(obj={});var __t,__p="";_.escape;with(obj)__p+="<div class='fb-edit-section-header'>Label</div>\n\n<div class='fb-common-wrapper'>\n  <div class='fb-label-description'>\n    "+(null==(__t=Formbuilder.templates["edit/label_description"]())?"":__t)+"\n  </div>\n  <div class='fb-common-checkboxes'>\n    "+(null==(__t=Formbuilder.templates["edit/checkboxes"]())?"":__t)+"\n  </div>\n  <div class='fb-clear'></div>\n</div>\n";return __p},this.Formbuilder.templates["edit/integer_only"]=function(obj){obj||(obj={});var __t,__p="";_.escape;with(obj)__p+="<div class='fb-edit-section-header'>Integer only</div>\n<label>\n  <input type='checkbox' data-rv-checked='model."+(null==(__t=Formbuilder.options.mappings.INTEGER_ONLY)?"":__t)+"' />\n  Only accept integers\n</label>\n";return __p},this.Formbuilder.templates["edit/label_description"]=function(obj){obj||(obj={});var __t,__p="";_.escape;with(obj)__p+="<input type='text' data-rv-input='model."+(null==(__t=Formbuilder.options.mappings.LABEL)?"":__t)+"' />\n<br><br><textarea data-rv-input='model."+(null==(__t=Formbuilder.options.mappings.DESCRIPTION)?"":__t)+"'\n  placeholder='Add a longer description to this field'></textarea>";return __p},this.Formbuilder.templates["edit/min_max"]=function(obj){obj||(obj={});var __t,__p="";_.escape;with(obj)__p+='<div class=\'fb-edit-section-header\'>Minimum / Maximum</div>\n\nAbove\n<input type="text" data-rv-input="model.'+(null==(__t=Formbuilder.options.mappings.MIN)?"":__t)+'" style="width: 30px" />\n\n&nbsp;&nbsp;\n\nBelow\n<input type="text" data-rv-input="model.'+(null==(__t=Formbuilder.options.mappings.MAX)?"":__t)+'" style="width: 30px" />\n';return __p},this.Formbuilder.templates["edit/min_max_length"]=function(obj){obj||(obj={});var __t,__p="";_.escape;with(obj)__p+='<div class=\'fb-edit-section-header\'>Length Limit</div>\n\nMin\n<input type="text" data-rv-input="model.'+(null==(__t=Formbuilder.options.mappings.MINLENGTH)?"":__t)+'" style="width: 30px" />\n\n&nbsp;&nbsp;\n\nMax\n<input type="text" data-rv-input="model.'+(null==(__t=Formbuilder.options.mappings.MAXLENGTH)?"":__t)+'" style="width: 30px" />\n\n&nbsp;&nbsp;\n\n<select data-rv-value="model.'+(null==(__t=Formbuilder.options.mappings.LENGTH_UNITS)?"":__t)+'" style="width: auto;">\n  <option value="characters">characters</option>\n  <option value="words">words</option>\n</select>\n';return __p},this.Formbuilder.templates["edit/options"]=function(obj){obj||(obj={});var __t,__p="";_.escape,Array.prototype.join;with(obj)__p+="<div class='fb-edit-section-header'>Options</div>\n\n","undefined"!=typeof includeBlank&&(__p+="\n  <label>\n    <input type='checkbox' data-rv-checked='model."+(null==(__t=Formbuilder.options.mappings.INCLUDE_BLANK)?"":__t)+"' />\n    Include blank\n  </label>\n"),__p+="\n\n<div class='option' data-rv-each-option='model."+(null==(__t=Formbuilder.options.mappings.OPTIONS)?"":__t)+'\'>\n  <input type="checkbox" class=\'js-default-updated\' data-rv-checked="option:checked" />\n  <input type="text" data-rv-input="option:label" class=\'option-label-input\' />\n  <a class="js-add-option '+(null==(__t=Formbuilder.options.BUTTON_CLASS)?"":__t)+'" title="Add Option"><i class=\'fa fa-plus-circle\'></i></a>\n  <a class="js-remove-option '+(null==(__t=Formbuilder.options.BUTTON_CLASS)?"":__t)+'" title="Remove Option"><i class=\'fa fa-minus-circle\'></i></a>\n</div>\n\n',"undefined"!=typeof includeOther&&(__p+="\n  <label>\n    <input type='checkbox' data-rv-checked='model."+(null==(__t=Formbuilder.options.mappings.INCLUDE_OTHER)?"":__t)+'\' />\n    Include "other"\n  </label>\n'),__p+="\n\n<div class='fb-bottom-add'>\n  <a class=\"js-add-option "+(null==(__t=Formbuilder.options.BUTTON_CLASS)?"":__t)+'">Add option</a>\n</div>\n';return __p},this.Formbuilder.templates["edit/size"]=function(obj){obj||(obj={});var __t,__p="";_.escape;with(obj)__p+="<div class='fb-edit-section-header'>Size</div>\n<select data-rv-value=\"model."+(null==(__t=Formbuilder.options.mappings.SIZE)?"":__t)+'">\n  <option value="small">Small</option>\n  <option value="medium">Medium</option>\n  <option value="large">Large</option>\n</select>\n';return __p},this.Formbuilder.templates["edit/class"]=function(obj){obj||(obj={});var __t,__p="";_.escape;with(obj)__p+='<div class=\'fb-edit-section-header\'>Custom Class</div>\n<input type="text" data-rv-input="model.'+(null==(__t=Formbuilder.options.mappings.FIELD_CLASS)?"":__t)+'" />\n';return __p},this.Formbuilder.templates["edit/units"]=function(obj){obj||(obj={});var __t,__p="";_.escape;with(obj)__p+='<div class=\'fb-edit-section-header\'>Units</div>\n<input type="text" data-rv-input="model.'+(null==(__t=Formbuilder.options.mappings.UNITS)?"":__t)+'" />\n';return __p},this.Formbuilder.templates.page=function(obj){obj||(obj={});var __t,__p="";_.escape;with(obj)__p+=(null==(__t=Formbuilder.templates["partials/save_button"]())?"":__t)+"\n"+(null==(__t=Formbuilder.templates["partials/left_side"]())?"":__t)+"\n"+(null==(__t=Formbuilder.templates["partials/right_side"]())?"":__t)+"\n<div class='fb-clear'></div>\n</div>";return __p},this.Formbuilder.templates["partials/add_field"]=function(obj){obj||(obj={});var __t,__p="";_.escape,Array.prototype.join;with(obj)__p+="<div class='fb-tab-pane active' id='addField'>\n  <div class='fb-add-field-types'>\n    <div class='section'>\n      ",_.each(_.sortBy(Formbuilder.inputFields,"order"),function(e){__p+='\n        <a data-field-type="'+(null==(__t=e.field_type)?"":__t)+'" class="'+(null==(__t=Formbuilder.options.BUTTON_CLASS)?"":__t)+'">\n          '+(null==(__t=e.addButton)?"":__t)+"\n        </a>\n      "}),__p+="\n    </div>\n\n    <div class='section'>\n      ",_.each(_.sortBy(Formbuilder.nonInputFields,"order"),function(e){__p+='\n        <a data-field-type="'+(null==(__t=e.field_type)?"":__t)+'" class="'+(null==(__t=Formbuilder.options.BUTTON_CLASS)?"":__t)+'">\n          '+(null==(__t=e.addButton)?"":__t)+"\n        </a>\n      "}),__p+="\n    </div>\n  </div>\n</div>\n";return __p},this.Formbuilder.templates["partials/edit_field"]=function(obj){obj||(obj={});var __p="";_.escape;with(obj)__p+="<div class='fb-tab-pane' id='editField'>\n  <div class='fb-edit-field-wrapper'></div>\n</div>\n";return __p},this.Formbuilder.templates["partials/left_side"]=function(obj){obj||(obj={});var __p="";_.escape;with(obj)__p+="<div class='row'>\n<div class='col-md-7 fb-left'>\n  <div class='panel panel-default'>\n<div class='panel-heading'>\n<h3 class='panel-title'>Edit Field</h3>\n<ul class='panel-controls'>\n<li>\n<a href='#' class='panel-collapse'>\n<span class='fa fa-angle-down'></span>\n</a>\n</li>\n</ul></div>\n<div class='panel-body'>\n<div class='fb-no-response-fields'>No response fields</div>\n  <div class='fb-response-fields'></div>\n</div>\n</div>\n</div>";return __p},this.Formbuilder.templates["partials/right_side"]=function(obj){obj||(obj={});var __t,__p="";_.escape;with(obj)__p+="<div class='col-md-5 fb-right'>\n <div class='panel panel-default'>\n<div class='panel-heading'><h3 class='panel-title'>Add Field</h3>\n<ul class='panel-controls'>\n<li>\n<a href='#' class='panel-collapse'>\n<span class='fa fa-angle-down'></span>\n</a>\n</li>\n</ul></div>\n<div class='panel-body'>\n <ul class='fb-tabs'>\n    <li class='active'><a data-target='#addField'>Add new field</a></li>\n<li><a data-target='#editField'>Edit field</a></li>\n  </ul>\n\n  <div class='fb-tab-content'>\n    "+(null==(__t=Formbuilder.templates["partials/add_field"]())?"":__t)+"\n    "+(null==(__t=Formbuilder.templates["partials/edit_field"]())?"":__t)+"\n  </div>\n</div>\n</div>\n</div>";return __p},this.Formbuilder.templates["partials/save_button"]=function(obj){obj||(obj={});var __t,__p="";_.escape;with(obj)__p+="<div class='row fb-save-wrapper'>\n  <button class='js-save-form "+(null==(__t=Formbuilder.options.BUTTON_CLASS)?"":__t)+"'></button>\n</div>";return __p},this.Formbuilder.templates["view/base"]=function(obj){obj||(obj={});var __t,__p="";_.escape;with(obj)__p+="<div class='subtemplate-wrapper'>\n  <div class='cover'></div>\n  "+(null==(__t=Formbuilder.templates["view/label"]({rf:rf}))?"":__t)+"\n\n  "+(null==(__t=Formbuilder.fields[rf.get(Formbuilder.options.mappings.FIELD_TYPE)].view({rf:rf}))?"":__t)+"\n\n  "+(null==(__t=Formbuilder.templates["view/description"]({rf:rf}))?"":__t)+"\n  "+(null==(__t=Formbuilder.templates["view/duplicate_remove"]({rf:rf}))?"":__t)+"\n</div>\n";return __p},this.Formbuilder.templates["view/base_non_input"]=function(obj){obj||(obj={});var __p="";_.escape;with(obj)__p+="";return __p},this.Formbuilder.templates["view/description"]=function(obj){obj||(obj={});var __t,__p="";_.escape;with(obj)__p+="<span class='help-block'>\n  "+(null==(__t=Formbuilder.helpers.simple_format(rf.get(Formbuilder.options.mappings.DESCRIPTION)))?"":__t)+"\n</span>\n";return __p},this.Formbuilder.templates["view/duplicate_remove"]=function(obj){obj||(obj={});var __t,__p="";_.escape;with(obj)__p+="<div class='actions-wrapper'>\n  <a class=\"js-duplicate "+(null==(__t=Formbuilder.options.BUTTON_CLASS)?"":__t)+'" title="Duplicate Field"><i class=\'fa fa-plus-circle\'></i></a>\n  <a class="js-clear '+(null==(__t=Formbuilder.options.BUTTON_CLASS)?"":__t)+'" title="Remove Field"><i class=\'fa fa-minus-circle\'></i></a>\n</div>';return __p},this.Formbuilder.templates["view/label"]=function(obj){obj||(obj={});var __t,__p="";_.escape,Array.prototype.join;with(obj)__p+="<label>\n  <span>"+(null==(__t=Formbuilder.helpers.simple_format(rf.get(Formbuilder.options.mappings.LABEL)))?"":__t)+"\n  ",rf.get(Formbuilder.options.mappings.REQUIRED)&&(__p+="\n    <abbr title='required'>*</abbr>\n  "),__p+="\n</label>\n";return __p};