class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception #サイバー攻撃をから守っている
  before_action :authenticate_user! #deviceのヘルパーメソッド ログイン済ユーザーのみアクセスを許可
  before_action :configure_permitted_parameters, if: :devise_controller?

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:name])
  end      
end

