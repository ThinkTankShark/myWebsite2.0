# -*- encoding: utf-8 -*-
# stub: happy_seed 0.0.19 ruby lib

Gem::Specification.new do |s|
  s.name = "happy_seed"
  s.version = "0.0.19"

  s.required_rubygems_version = Gem::Requirement.new(">= 0") if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib"]
  s.authors = ["Will Schenk", "Ricky Reusser"]
  s.date = "2015-10-08"
  s.description = "HappySeed is a project that will build up a rails apps using some common best practices."
  s.email = ["will@happyfuncorp.com"]
  s.executables = ["happy_seed"]
  s.files = ["bin/happy_seed"]
  s.homepage = "http://seed.happyfuncorp.com"
  s.licenses = ["MIT"]
  s.rubygems_version = "2.5.1"
  s.summary = "HappySeed is a project that will build up a rails apps using some common best practices."

  s.installed_by_version = "2.5.1" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<rails>, ["~> 4.2"])
      s.add_runtime_dependency(%q<thor>, [">= 0"])
      s.add_development_dependency(%q<sqlite3>, [">= 0"])
    else
      s.add_dependency(%q<rails>, ["~> 4.2"])
      s.add_dependency(%q<thor>, [">= 0"])
      s.add_dependency(%q<sqlite3>, [">= 0"])
    end
  else
    s.add_dependency(%q<rails>, ["~> 4.2"])
    s.add_dependency(%q<thor>, [">= 0"])
    s.add_dependency(%q<sqlite3>, [">= 0"])
  end
end
