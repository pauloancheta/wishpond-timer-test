class TodosController < ApplicationController
  def create
    @todo = Todo.new(todo_params)
    @todo.save!
    redirect_to root_path
  end

  def update
    todo = Todo.find(params[:id])
    todo.update(status: params[:status])
    render nothing: true
  end

  def decrement
    todo = Todo.find(params[:id])
    todo.update(time_left: params[:time_left])
    render nothing: true
  end

  private
  def todo_params
    params.require(:todo).permit(:title, :note, :due_date, :status, :time_left)
  end
end