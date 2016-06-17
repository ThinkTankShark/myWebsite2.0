$(document).ready(function() {
  // Using Tool-tip for portfolios
   toolTipPortfolioListener('#project1', 'http://pocketboard.herokuapp.com/', text="Pocket Board")
   toolTipPortfolioListener('#project2', 'http://www.sepandassadi.com/', text="sepandassadi.com")
   toolTipPortfolioListener('#project3', 'https://rubygems.org/gems/guesswhat', text="GuessWhat Ruby Gem")
   toolTipPortfolioListener('#project4', '', text="P.L.U.S - Coming Soon")
   toolTipPortfolioListener('#project5', 'http://www.managedoffice.co/', text="ManagedOffice Website Design")
   toolTipPortfolioListener('#project6', '', text="iTechChimp Website & Logo Design")
   toolTipPortfolioListener('#project7', 'http://www.readybuzz.com/', text="readyBUZZ Website Design")
   toolTipPortfolioListener('#project8', 'https://github.com/ThinkTankShark/MVC-User-Login-Sinatra-Skeleton', text="Sinatra Skeleton With Auth + CSS")

  // Using Tool-tip for blogs
   toolTipBlogListener('#blog1', 'http://blogs.sepandassadi.com/2016/06/array-vs-linked-list-for-stacks-and.html', text="Array vs Linked List For Stacks and Queues")
   toolTipBlogListener('#blog2', 'http://blogs.sepandassadi.com/2016/06/make-your-sublime-setup-bit-more-react.html', text="Make Your Sublime Setup a Bit More React-Friendly")
   toolTipBlogListener('#blog3', 'http://blogs.sepandassadi.com/2016/06/6-must-have-dev-gems-to-install-rails_8.html', text="6 Must Have Dev Gems to Install-Rails App")
   toolTipBlogListener('#blog4', 'http://blogs.sepandassadi.com/2016/05/top-10-rails-asset-pipelinetips-part-2.html', text="Top 10 Rails Asset PipelineTips-Part 2")
   toolTipBlogListener('#blog5', 'http://blogs.sepandassadi.com/2016/05/rails-4-fixing-assets-pipeline-on.html', text="Rails 4 - Fixing Assets Pipeline on Heroku-Part 1")
   toolTipBlogListener('#blog6', 'http://blogs.sepandassadi.com/2016/05/how-to-create-lightbox-image-in.html', text="How To Create a Lightbox Image in JavaScript")
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

