function init_user_edit(obj) {

  var _user_tags_path = obj._user_tags_path;

  var post_tags = $.ajax({
    type: 'GET',
    url: _user_tags_path,
    dataType: "json",
    async: false
  }).responseText;

  $('.plugin-panel-user-tags .tagsinput').tagEditor({
    autocomplete: {delay: 0, position: {collision: 'flip'}, source: $.parseJSON(post_tags)},
    forceLowercase: false,
    placeholder: I18n("button.add_tag") + '...'
  });
}
