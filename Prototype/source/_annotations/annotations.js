{
  "comments": [
    {
      "el": "header[role=banner]",
      "title" : "Masthead",
      "comment": "The main header of the site doesn't take up too much screen real estate in order to keep the focus on the core content. It's using a linear CSS gradient instead of a background image to give greater design flexibility and reduce HTTP requests."
    },
    {
      "el": ".c-logo-link",
      "title" : "Logo",
      "comment": "The logo image is an SVG file, which ensures that the logo displays crisply even on high resolution displays. A PNG fallback is provided for browsers that don't support SVG images.</p><p>Further reading: <a href=\"http://bradfrostweb.com/blog/mobile/hi-res-optimization/\">Optimizing Web Experiences for High Resolution Screens</a></p>"
    },
    {
      "el": "#nav",
      "title" : "Navigation",
      "comment": "<p>Navigation for adaptive web experiences can be tricky. Top navigations are typical on desktop sites, but mobile screen sizes don't give us the luxury of space. We're dealing with this situation by creating a simple menu anchor that toggles the main navigation on small screens. This is just one method. <a href=\"http://bagcheck.com/\">Bagcheck</a> and <a href=\"http://contentsmagazine.com/\">Contents Magazine</a> add an anchor in the header that jumps users to the navigation which is placed in the footer. This solution works well because it doesn't require any Javascript in order to work. Other methods exist too. For example, <a href=\"http://m.espn.com\">ESPN's mobile navigation</a> overlays the main content of the page.</p><p>The nav is only hidden when a certain level of javascript is supported in order to ensure that users with little/poor javascript support can still access the navigation. Once the screen size is large enough to accommodate the nav, we show the main navigation links and hide the menu anchor.<p><p>See also: <a href=\"http://bradfrostweb.com/blog/web/responsive-nav-patterns/\">Responsive Navigation Patterns</a></p>"
    },
    {
      "el": ".c-header",
      "title" : "Header",
      "comment": "<p>This is a comment about the header</p>"
    },
    {
      "el": ".article-header h1",
      "title" : "Article Header",
      "comment": "<p>The article header should be no more than 140 characters. </p>"
    },
    {
      "el": ".c-hero",
      "title" : "Hero",
      "comment": "<p>The hero area highlights one major story using a large image and a captivating headline.</p>"
    }
  ]
}
