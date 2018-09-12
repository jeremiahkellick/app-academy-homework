class UserMailer < ApplicationMailer
  default from: 'from@example.com'

  def welcome_email(user)
    @user = user
    @url = 'http://localhost:3000/'
    mail to: 'everybody@appacademy.io', subject: 'Welcome to 99 Cats!'
  end
end
