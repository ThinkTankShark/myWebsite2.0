# -*- encoding: utf-8 -*-
# stub: bh 1.3.6 ruby lib

Gem::Specification.new do |s|
  s.name = "bh"
  s.version = "1.3.6"

  s.required_rubygems_version = Gem::Requirement.new(">= 0") if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib"]
  s.authors = ["Claudio Baccigalupo"]
  s.date = "2016-03-11"
  s.description = "Bh - Bootstrap Helpers"
  s.email = ["claudio@fullscreen.net"]
  s.homepage = "http://github.com/Fullscreen/bh"
  s.licenses = ["MIT"]
  s.required_ruby_version = Gem::Requirement.new(">= 1.9.3")
  s.rubygems_version = "2.5.1"
  s.summary = "Bh provides a set of powerful helpers that streamlines the use of Bootstrap components in Rails views."

  s.installed_by_version = "2.5.1" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<activesupport>, [">= 0"])
      s.add_runtime_dependency(%q<actionpack>, [">= 0"])
      s.add_development_dependency(%q<bundler>, ["~> 1.1"])
      s.add_development_dependency(%q<rspec>, ["~> 3.1"])
      s.add_development_dependency(%q<rake>, ["~> 10.3"])
      s.add_development_dependency(%q<yard>, ["~> 0.8.7"])
      s.add_development_dependency(%q<coveralls>, ["~> 0.8.13"])
      s.add_development_dependency(%q<activemodel>, [">= 0"])
      s.add_development_dependency(%q<middleman-core>, [">= 0"])
      s.add_development_dependency(%q<padrino-helpers>, ["~> 0.12.4"])
      s.add_development_dependency(%q<padrino-routing>, ["~> 0.5.0"])
    else
      s.add_dependency(%q<activesupport>, [">= 0"])
      s.add_dependency(%q<actionpack>, [">= 0"])
      s.add_dependency(%q<bundler>, ["~> 1.1"])
      s.add_dependency(%q<rspec>, ["~> 3.1"])
      s.add_dependency(%q<rake>, ["~> 10.3"])
      s.add_dependency(%q<yard>, ["~> 0.8.7"])
      s.add_dependency(%q<coveralls>, ["~> 0.8.13"])
      s.add_dependency(%q<activemodel>, [">= 0"])
      s.add_dependency(%q<middleman-core>, [">= 0"])
      s.add_dependency(%q<padrino-helpers>, ["~> 0.12.4"])
      s.add_dependency(%q<padrino-routing>, ["~> 0.5.0"])
    end
  else
    s.add_dependency(%q<activesupport>, [">= 0"])
    s.add_dependency(%q<actionpack>, [">= 0"])
    s.add_dependency(%q<bundler>, ["~> 1.1"])
    s.add_dependency(%q<rspec>, ["~> 3.1"])
    s.add_dependency(%q<rake>, ["~> 10.3"])
    s.add_dependency(%q<yard>, ["~> 0.8.7"])
    s.add_dependency(%q<coveralls>, ["~> 0.8.13"])
    s.add_dependency(%q<activemodel>, [">= 0"])
    s.add_dependency(%q<middleman-core>, [">= 0"])
    s.add_dependency(%q<padrino-helpers>, ["~> 0.12.4"])
    s.add_dependency(%q<padrino-routing>, ["~> 0.5.0"])
  end
end
