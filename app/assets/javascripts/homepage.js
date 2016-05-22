$(document).ready(function() {
  // Using Tool-tip for portfolios
   toolTipPortfolioListener('#project1', 'http://pocketboard.herokuapp.com/')
   toolTipPortfolioListener('#project2', 'https://rubygems.org/gems/guesswhat')
   toolTipPortfolioListener('#project3', 'http://www.sepandassadi.com/')
   toolTipPortfolioListener('#project4', '#', text="Coming Soon")

  // Using Tool-tip for blogs
   toolTipBlogListener('#blog1', '', text="")
   toolTipBlogListener('#blog2', 'http://www.sepandassadi.com/blog/sublime-text-plugins-not-only-for-newbies-1', text="Sublime Text Plugins")
   toolTipBlogListener('#blog3', 'http://www.sepandassadi.com/blog/intro-to-rails-engines', text="Intro To Rails Engines")
   toolTipBlogListener('#blog4', 'http://www.sepandassadi.com/blog/absolute-relative-fixed-positioning-how-do-they-differ2', text="Intro To CSS Positions")
   toolTipBlogListener('#blog5', 'http://www.sepandassadi.com/blog/web-accessibility-and-best-practices', text="Web accessibility & Best Practices")
   toolTipBlogListener('#blog6', 'http://www.sepandassadi.com/blog/benefits-of-using-version-control-systems2', text="Benefits of Using VCS")

});

  // Using Tool-tip for portfolios
  function toolTipPortfolioListener(idName, linkURL, text="Find Out More") {
    $(idName).tooltipster({
      animation: 'fade',
      delay: 200,
      content: `<a target="_blank" href="${linkURL}">${text}</a>`,
      contentAsHTML: true,
      interactive: true,
      theme: 'tooltipster-default',
      touchDevices: true,
      trigger: 'hover',
      position: 'top-left'
      // positionTracker: true
    });
  }

  // Using Tool-tip for blogs
  function toolTipBlogListener(idName, linkURL, text) {
    $(idName).tooltipster({
      animation: 'fade',
      delay: 200,
      content: `<a target="_blank" href="${linkURL}">${text}</a>`,
      contentAsHTML: true,
      interactive: true,
      theme: 'tooltipster-default',
      touchDevices: true,
      trigger: 'hover',
      position: 'top-left'
      // positionTracker: true
    });
  }

