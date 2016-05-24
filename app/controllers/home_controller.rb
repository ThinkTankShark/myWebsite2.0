class HomeController < ApplicationController
  before_filter :authenticate_user!, except:[:index, :contact]

  def index
  end

  def contact
      if request.xhr?

        # ActionMailer::Base.mail(:from => "contact@sepandassadi.com", :to => params["email"], :subject => "test", :body => "test").deliver
        first_name = /^\w+/.match(params["name"]).to_s
        @prospect = { name: first_name, email: params["email"], message: params["message"] }
        ContactMailer.welcome_email(@prospect).deliver_now
        ContactMailer.contact_owner(@prospect).deliver_now

        render :nothing => true
        return 200

      else

        render :nothing => true
        return 500

      end
  end
end
