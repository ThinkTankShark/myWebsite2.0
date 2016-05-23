class ContactMailer < ApplicationMailer

  # Welcome email to user
  def welcome_email(user)
    @user = user
    mail(to: @user[:email], subject: 'SA | Thanks For Reaching Out!')
  end

  # Email to site owner
  def contact_owner(user)
    @user = user
    mail(to: 'contact@sepandassadi.com', subject: 'Contact Us Form | Prospect Reached Out!')
  end

end
