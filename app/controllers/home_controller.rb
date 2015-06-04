class HomeController < ApplicationController
  def index
    @task = Todo.new
    @tasks = Todo.all
  end
end