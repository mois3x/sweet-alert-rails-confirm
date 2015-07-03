require 'sweet-alert-confirm/view_helpers'
module SweetAlertConfirm
  class Railtie < Rails::Railtie
    initializer 'sweet_alert_confirm.view_helpers' do
      ActionView::Base.send :include, ViewHelpers
    end
  end
end
