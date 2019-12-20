class MainController < ApplicationController
  def greeter
    @name = params[:name]
    render 'greeter.html.erb'
  end

  # Initial version of a method that renders html directly
  # def answer
  #   render html: "To get to the other side."
  # end

  # Updated version of a method that renders a view in 'app/views/main'
  def answer
    @answer = "To get to the other side."
    render 'answer.html.erb'
  end

  def question
    @question = "Why did the chicken cross the road?"
    render 'question.html.erb'
  end
end
