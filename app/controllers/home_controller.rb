class HomeController < ApplicationController
  def index
    @task = Todo.new
  end
end