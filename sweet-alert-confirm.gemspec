$:.push File.expand_path("../lib", __FILE__)

# Maintain your gem's version:
require "sweet-alert-confirm/version"

# Describe your gem and declare its dependencies:
Gem::Specification.new do |s|
  s.name        = "sweet-alert-confirm"
  s.version     = SweetAlertConfirm::VERSION
  s.authors     = ["Moises Viloria"]
  s.email       = ["moisesviloria@gmail.com"]
  s.homepage    = "http://www.github.com/mois3x/sweet-alert-rails-confirm"
  s.summary     = "A Rails confirm replacement with SweetAlert"
  s.description = ""
  s.license     = "MIT"

  #s.files = Dir["{app,config,db,lib}/**/*", "MIT-LICENSE", "Rakefile", "README.rdoc"]
  s.add_dependency "jquery-rails"
  s.add_dependency "sweet-alert"
  s.add_development_dependency "rails"
  s.add_development_dependency "rspec-rails"
  s.add_development_dependency "capybara", "~> 2.1"
  s.add_development_dependency "poltergeist"
  s.add_development_dependency "pry"
  s.files         = `git ls-files`.split("\n")
  s.require_paths = ['lib']
end
