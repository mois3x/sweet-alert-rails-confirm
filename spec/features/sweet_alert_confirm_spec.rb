require 'spec_helper'

feature 'basic confirms' do
  scenario 'when click on a link with a confirm' do
    visit confirms_page_path
    click_on 'Basic confirm'
    expect(page).should have_content('this is a confirm madafaka')
  end

  scenario 'when click on a link with a confirm and have advanced options' do
    pending

  end

end
