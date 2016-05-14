module ApplicationHelper

  def flash_class(level)
    case level.to_sym
      # allow either standard rails flash category symbols...
      when :notice then "info"
      when :success then "success"
      when :alert then "warning"
      when :error then "danger"
      # ... or bootstrap class symbols
      when :info then "info"
      when :warning then "warning"
      when :danger then "danger"
      # and default to being alarming
      else "danger"
    end
  end

  def page_title
    @title || controller_name.gsub( /Controller/, "" ).humanize
  end

  def have_identity?
    return User.find(current_user.id).identities
  end

  #Return true if person logged in using oAuth
  # def provider?
  #   user = find_current_user
  #           debugger

  #   return true unless user.provider.blank?
  # end
  #Return true if current_user is also an admin
  # def admin?
  #   return true if !AdminUser.find_by(email: "info@sepandassadi.com").blank?
  # end
end
