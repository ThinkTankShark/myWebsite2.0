# -*- encoding: utf-8 -*-
# stub: dateslices 0.0.4 ruby lib

Gem::Specification.new do |s|
  s.name = "dateslices"
  s.version = "0.0.4"

  s.required_rubygems_version = Gem::Requirement.new(">= 0") if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib"]
  s.authors = ["Will Schenk"]
  s.date = "2016-03-29"
  s.description = "A Rails 4 ActiveRecord plugin that adds group_by_day, group_by_month, etc. Not timezone aware, but supports sqlite."
  s.email = ["will@happyfuncorp.com"]
  s.homepage = "https://github.com/sublimeguile/dateslices"
  s.licenses = ["MIT"]
  s.rubygems_version = "2.5.1"
  s.summary = "A Rails 4 ActiveRecord plugin that adds group_by_day, group_by_month, etc."

  s.installed_by_version = "2.5.1" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<rails>, ["> 4"])
      s.add_development_dependency(%q<sqlite3>, [">= 0"])
      s.add_development_dependency(%q<pg>, [">= 0"])
      s.add_development_dependency(%q<mysql>, [">= 0"])
      s.add_development_dependency(%q<rspec-rails>, [">= 0"])
      s.add_development_dependency(%q<rspec-autotest>, [">= 0"])
      s.add_development_dependency(%q<autotest-rails>, [">= 0"])
    else
      s.add_dependency(%q<rails>, ["> 4"])
      s.add_dependency(%q<sqlite3>, [">= 0"])
      s.add_dependency(%q<pg>, [">= 0"])
      s.add_dependency(%q<mysql>, [">= 0"])
      s.add_dependency(%q<rspec-rails>, [">= 0"])
      s.add_dependency(%q<rspec-autotest>, [">= 0"])
      s.add_dependency(%q<autotest-rails>, [">= 0"])
    end
  else
    s.add_dependency(%q<rails>, ["> 4"])
    s.add_dependency(%q<sqlite3>, [">= 0"])
    s.add_dependency(%q<pg>, [">= 0"])
    s.add_dependency(%q<mysql>, [">= 0"])
    s.add_dependency(%q<rspec-rails>, [">= 0"])
    s.add_dependency(%q<rspec-autotest>, [">= 0"])
    s.add_dependency(%q<autotest-rails>, [">= 0"])
  end
end
