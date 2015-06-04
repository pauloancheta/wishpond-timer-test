class TodosController < ApplicationController
  def create
    @todo = Todo.new(todo_params)
    @todo.save!
    render nothing: true
  end

  def update
  end

  private
  def todo_params
    params.require(:todos).permit(:title, :note, :due_date, :time_left, :status)
  end
end