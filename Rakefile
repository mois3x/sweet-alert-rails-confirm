begin
  require 'bundler/setup'
rescue LoadError
  puts 'You must `gem install bundler` and `bundle install` to run rake tasks'
end

task :default => [:spec]
desc 'run Rspec specs'
task :spec do
  sh 'rspec spec -f d -c'
end

