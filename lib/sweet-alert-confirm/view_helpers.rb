module SweetAlertConfirm
  module ViewHelpers
    def link_to(*args, &block)
      html_options = args[block_given? ? 1 : 2] || {}
      if (html_options[:confirm] || (html_options[:data] && html_options[:data][:confirm]) &&
                                                           !html_options[:remote])

        html_options['data-sweet-alert-confirm'] = html_options.delete(:confirm) ||
                    html_options[:data].delete(:confirm)
      end
      super *args, &block
    end
  end
end
