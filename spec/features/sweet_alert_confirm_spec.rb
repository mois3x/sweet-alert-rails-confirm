require 'spec_helper'

describe 'basic confirms', js: true, type: :feature do
  before do
    if ENV['USE_TURBOLINKS']
      visit root_path
      page.execute_script('Turbolinks.visit("/confirms_page");') 
      #find_link('Index').trigger('click')
    else
      visit root_path
      click_link 'Index'
    end
  end

  shared_examples 'Confirm shows correctly' do |is_cow_deleted, is_remote|
    let(:got_cow) { 'You got a pretty cow' }
    let(:deleted_cow) { 'You murdered a silly cow' }
    let(:message) { is_cow_deleted ? deleted_cow : got_cow }

    it 'doesnt follow the link when click' do
      expect(page).to have_content('Are you sure?')
      expect(page).not_to have_content(message)
    end

    it 'doesnt follow the link when click on cancel' do
      sleep 1
      expect(page).to_not have_content(message)
      click_button('Cancel')
      sleep 1
      expect(page).to_not have_content(message)
    end

    it 'goes to the link after accept confirm' do
      #click_on '.confirm'
      expect(page).to_not have_content(message)
      sleep 1
      click_button('Ok')
      expect(page).to have_content(message)
    end unless is_remote
  end



  describe 'normal links' do
    before do
      #visit confirms_page_path
      find_link("Basic confirm").trigger('click')
    end

   it_behaves_like 'Confirm shows correctly'
  end

  describe 'methods links' do
    before do
      find_link("Delete confirm").trigger('click')
      sleep 2
    end

   it_behaves_like 'Confirm shows correctly', true
  end

  describe 'remote links' do
    before do
      find_link("Remote confirm").trigger('click')
      sleep 3
    end

    it_behaves_like 'Confirm shows correctly', true, true


    it 'ajax change content in the page after accept confirm' do
      #click_on '.confirm'
      sleep 3
      expect(page).to_not have_content('You murdered a silly cow with ajax')
      sleep 3
      click_button('Ok')
      expect(page).to have_content('You murdered a silly cow with ajax')
    end
  end

  describe 'Custom confirm' do
    before do
      visit confirms_page_path
    end
    it 'when click on a link with a confirm and have custom options' do
      find_link("Custom confirm").trigger('click')
      sleep 1
      expect(page).to have_css('.confirm', text: 'Im ready')
      expect(page).to have_css('.cancel', text: 'No way')
      expect(page).to have_css('.icon.info')
      expect(page).to have_css('h2', text: 'Are you ready?')
      expect(page).to have_css('p', text: 'This is a subtitle')

    end
  end

  describe 'Submit confirm' do
    before do
      #visit confirms_page_path
      find("#submit-delete").trigger('click')
    end
    it_behaves_like 'Confirm shows correctly', true
  end

  describe 'button_tag links' do
    before do
      #visit confirms_page_path
      find_button("Button_tag confirm").trigger('click')
    end

    it_behaves_like 'Confirm shows correctly', true
  end


end

