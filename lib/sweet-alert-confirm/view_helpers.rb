module SweetAlertConfirm
  module ViewHelpers
    def link_to(*args, &block)
      html_options = args[block_given? ? 1 : 2] || {}

      if options_has_confirm?(html_options)
        html_options['data-sweet-alert-confirm'] = html_options.delete(:confirm) ||
                    html_options[:data].delete(:confirm)
      end
      super *args, &block
    end

    def submit_tag(value = "Save changes", options = {})
      options['data-sweet-alert-confirm'] = options.delete(:confirm) || options[:data].delete(:confirm) if options_has_confirm?(options)
      super value, options
    end

  def button_tag(*args, &block)
    html_options = args[block_given? ? 0 : 1] || {}

    if options_has_confirm?(html_options)
      html_options['data-sweet-alert-confirm'] = html_options.delete(:confirm) ||
                  html_options[:data].delete(:confirm)
    end
    super *args, &block
  end 

    protected
    def options_has_confirm?(options)
      if (options[:confirm] || (options[:data] && options[:data][:confirm]))
        true
      else
        false
      end
    end
  end
end
