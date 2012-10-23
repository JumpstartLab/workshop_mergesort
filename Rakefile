def check_application_is_ready!(name)
  app_installed = `which #{name}`
  puts "WARNING: `#{name}` does not appear to be installed!" if app_installed == ""
end

desc "Run the ruby example"
task :ruby do
  puts `ruby ruby/quicksort.rb`
end

desc "Run the coffeescript example"
task :coffee do
  check_application_is_ready! 'coffee'
  puts `coffee coffeescript/quicksort.coffee`
end

desc "Run the javascript example"
task :node do
  check_application_is_ready! 'node'
  puts `node node/quicksort.js`
end

desc "Compile and run the Scala example"
task :scala do
  check_application_is_ready! 'scalac'
  check_application_is_ready! 'scala'
  puts `scalac -d scala scala/QuickSort.scala`
  puts `scala -classpath scala QuickSort`
end

desc "Run the Clojure example"
task :clojure do
  check_application_is_ready! 'clj'
  puts `clj clojure/quicksort.clj`
end

namespace :ruby do
  desc "Run the ruby - mini test example"
  task :minitest do
    puts `ruby ruby/quicksort_minitest.rb`
  end

  desc "Run the ruby - rspec example"
  task :rspec do
    check_application_is_ready! 'rspec'
    puts `rspec -c ruby/quicksort_spec.rb`
  end
end

namespace :js do
  desc "Run the jasmine example"
  task :jasmine do
    `open jasmine/SpecRunner.html`
  end
end

desc "Runs all the examples"
task :all do
  all_tasks = Rake.application.tasks.reject {|task| task.name.to_sym == :all }
  all_tasks.each {|task| task.invoke }
end