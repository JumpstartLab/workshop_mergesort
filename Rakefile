def check_application_is_ready!(name)
  app_installed = `which #{name}`
  puts "WARNING: `#{name}` does not appear to be installed!" if app_installed == ""
end

def username
  ENV['AUTHOR'] || begin
    STDOUT.puts "Specify your name when executing the rake task, like this:"
    STDOUT.puts "  rake js:jasmine:run AUTHOR=chrismo"
    STDOUT.puts "Or enter your github username (ex: jcasimir OR jcasimir_jessabean for a pair) here:"
    STDIN.gets.chomp.strip.downcase
  end
end

def init_from_template(project)
  FileUtils.mkdir_p "#{project}/solutions"
  target = "#{project}/solutions/#{username}"
  FileUtils.cp_r "#{project}/template", target
  STDOUT.puts "Setup template for #{project} in #{target}"
end

desc "Run the ruby example"
task :ruby do
  puts `ruby ruby/mergesort.rb`
end

desc "Run the coffeescript example"
task :coffee do
  check_application_is_ready! 'coffee'
  puts `coffee coffeescript/mergesort.coffee`
end

desc "Run the javascript example"
task :node do
  check_application_is_ready! 'node'
  puts `node node/mergesort.js`
end

desc "Compile and run the Scala example"
task :scala do
  check_application_is_ready! 'scalac'
  check_application_is_ready! 'scala'
  puts `scalac -d scala scala/MergeSort.scala`
  puts `scala -classpath scala MergeSort`
end

desc "Run the Clojure example"
task :clojure do
  check_application_is_ready! 'clj'
  puts `clj clojure/mergesort.clj`
end

namespace :ruby do
  desc "Run the ruby - mini test example"
  task :minitest do
    puts `ruby ruby/mergesort_minitest.rb`
  end

  desc "Run the ruby - rspec example"
  task :rspec do
    check_application_is_ready! 'rspec'
    puts `rspec -c ruby/mergesort_spec.rb`
  end
end

namespace :js do
  namespace :jasmine do
    desc "Setup for Jasmine work"
    task :init do
      init_from_template('jasmine')
    end

    desc "Run the jasmine example"
    task :run do
      `open jasmine/solutions/#{username}/SpecRunner.html`
    end
  end
end

desc "Runs all the examples"
task :all do
  all_tasks = Rake.application.tasks.reject {|task| task.name.to_sym == :all }
  all_tasks.each {|task| task.invoke }
end