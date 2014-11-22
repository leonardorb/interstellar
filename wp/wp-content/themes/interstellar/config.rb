require 'fileutils'

http_path = "/"
css_dir = "assets/css"
sass_dir = "assets/css"
images_dir = "assets/img"
javascripts_dir = "assets/js"
fonts_dir = "assets/fonts"
line_comments = false

relative_assets = true

preferred_syntax = :sass

on_stylesheet_saved do |file|
  if File.exists?(file) && File.basename(file) == "style.css"
    puts "Moving: #{file}"
    FileUtils.mv(file, File.dirname(file) + "/../" + File.basename(file))
  end
end