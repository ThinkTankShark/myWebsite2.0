$(document).ready(function() {
  // Using Tool-tip for portfolios
   toolTipPortfolioListener('#project1', 'http://pocketboard.herokuapp.com/', text="Pocket Board")
   toolTipPortfolioListener('#project2', 'http://www.sepandassadi.com/', text="sepandassadi.com")
   toolTipPortfolioListener('#project3', 'https://rubygems.org/gems/guesswhat', text="GuessWhat Ruby Gem")
   toolTipPortfolioListener('#project4', '', text="Coming Soon")
   toolTipPortfolioListener('#project5', 'http://www.managedoffice.co/', text="ManagedOffice Website Design")
   toolTipPortfolioListener('#project6', '', text="iTechChimp Website & Logo Design")
   toolTipPortfolioListener('#project7', 'http://www.readybuzz.com/', text="readyBUZZ Website Design")
   toolTipPortfolioListener('#project8', 'https://github.com/ThinkTankShark/MVC-User-Login-Sinatra-Skeleton', text="Sinatra Skeleton With Auth + CSS")

  // Using Tool-tip for blogs
   toolTipBlogListener('#blog1', 'http://www.sepandassadi.com/blog/how-to-create-a-lightbox-image-in-javascript', text="Create a Lightbox Image")
   toolTipBlogListener('#blog2', 'http://www.sepandassadi.com/blog/sublime-text-plugins-not-only-for-newbies-1', text="Sublime Text Plugins")
   toolTipBlogListener('#blog3', 'http://www.sepandassadi.com/blog/intro-to-rails-engines', text="Intro To Rails Engines")
   toolTipBlogListener('#blog4', 'http://www.sepandassadi.com/blog/absolute-relative-fixed-positioning-how-do-they-differ2', text="Intro To CSS Positions")
   toolTipBlogListener('#blog5', 'http://www.sepandassadi.com/blog/web-accessibility-and-best-practices', text="Web accessibility & Best Practices")
   toolTipBlogListener('#blog6', 'http://www.sepandassadi.com/blog/benefits-of-using-version-control-systems2', text="Benefits of Using VCS")

});

  // Using Tool-tip for portfolios
  function toolTipPortfolioListener(idName, linkURL, text) {
    $(idName).tooltipster({
      animation: 'fade',
      delay: 200,
      content: `<a target="_blank" href="${linkURL}" style="color:white">${text}</a>`,
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
      content: `<a target="_blank" href="${linkURL}" style="color:white">${text}</a>`,
      contentAsHTML: true,
      interactive: true,
      theme: 'tooltipster-default',
      touchDevices: true,
      trigger: 'hover',
      position: 'top-left'
      // positionTracker: truee
    });
  }

