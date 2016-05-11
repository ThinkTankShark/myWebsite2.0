class RegistrationsController < Devise::RegistrationsController
  def update_resource(resource, params)
    if resource.encrypted_password.blank? # || params[:password].blank?
      resource.email = params[:email] if params[:email]
      if !params[:password].blank? && params[:password] == params[:password_confirmation]
        logger.info "Updating password"
        resource.password = params[:password]
        resource.save
      end
      if resource.valid?
        resource.update_without_password(params)
      end
    else
      resource.update_with_password(params)
    end
  end

  #for using general sign up
  def sign_up_params
    devise_parameter_sanitizer.sanitize(:sign_up)
  end
  #for using general sign up to update
  def account_update_params
    devise_parameter_sanitizer.sanitize(:account_update)
  end

  private

  def sign_up_params
    params.require(:user).permit(:name, :username, :email, :password, :password_confirmation)
  end

  def account_update_params
    params.require(:user).permit(:name, :username, :email, :password, :password_confirmation, :current_password)
  end
end
