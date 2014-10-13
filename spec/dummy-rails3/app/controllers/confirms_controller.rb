class ConfirmsController < ApplicationController

  def delete_cow
    respond_to do |format|
      format.html {}
      format.js {}
    end
  end
end
