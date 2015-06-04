class TodosController < ApplicationController
  def create
    @todo = Todo.new(todo_params)
    @todo.save!
    redirect_to root_path
  end

  def update
  end

  private
  def todo_params
    params.require(:todo).permit(:title, :note, :due_date)
  end
end