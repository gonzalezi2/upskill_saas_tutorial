class UsersController < ApplicationController
  # Block profiles pages from non-logged in users
  before_action :authenticate_user!
  
  # GET to /users/:id
  def show
    @user = User.find( params[:id] )
  end
end