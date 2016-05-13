class BlogsController < ApplicationController
  before_filter :authenticate_user!, except:[:index]

  def index
    @blogs = Blog.all
    # @current_user = User.find(current_user.id)
  end

  def new
    @blog = Blog.new
    render :new
  end

  def show
    @blog = Blog.find(params[:id])
  end
end
