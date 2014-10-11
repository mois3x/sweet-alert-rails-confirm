$:.push File.expand_path("../lib", __FILE__)

# Maintain your gem's version:
require "sweet_alert_confirm/version"

# Describe your gem and declare its dependencies:
Gem::Specification.new do |s|
  s.name        = "sweet-alert-rails-confirm"
  s.version     = SweetAlertConfirm::VERSION
  s.authors     = ["Moises Viloria"]
  s.email       = ["Moises Viloria"]
  s.homepage    = "http://www.github.com/mois3x/sweet-alert-rails-confirm"
  s.summary     = "TODO: Summary of SweetRailsConfirm."
  s.description = "TODO: Description of SweetRailsConfirm."
  s.license     = "MIT"

  s.files = Dir["{app,config,db,lib}/**/*", "MIT-LICENSE", "Rakefile", "README.rdoc"]

  s.add_dependency "rails", "~> 4.1.6"
  s.add_development_dependency "rspec-rails"
  s.add_development_dependency "capybara"
  s.add_development_dependency "pry"
  s.add_development_dependency "sqlite3"
end
