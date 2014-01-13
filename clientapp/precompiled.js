(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["body.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<div>\n  <header>\n    <nav class=\"top-bar\" data-topbar>\n      <ul class=\"title-area\">\n        <li class=\"name\">\n          <h1><a href=\"#\">Moonboots Sandbox</a></h1>\n        </li>\n        <li class=\"toggle-topbar menu-icon\"><a href=\"#\">Menu</a></li>\n      </ul>\n      <section class=\"top-bar-section\">\n        <ul class=\"left\">\n          <li><a href=\"#\" data-page=\"welcome\">Welcome</a></li>\n          <li><a href=\"#\" data-page=\"instructions\">Instructions</a></li>\n        </ul>\n        <ul class=\"right\">\n          <li class=\"has-dropdown\">\n            <a>Hello, <span class=\"username\"></span></a>\n            <ul class=\"dropdown\">\n              <li><a class=\"login\" href=\"#\">Log in</a></li>\n              <li><a class=\"logout\" href=\"#\">Log out</a></li>\n            </ul>\n          </li>\n        </ul>\n      </section>\n    </nav>\n  </header>\n  <section id=\"pages\">\n  </section>\n</div>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["head.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<title>Moonboots Demo</title>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["pages/instructions.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<section class=\"page row\" id=\"instructions\">\n  <div class=\"small-12 columns\">\n    <h1>Instructions</h1>\n\n    <h2>Login</h2>\n    <p>Login is handled with the Persona Observer API.</p> \n    <p>The app lets Persona manage user state between page refreshes and displays a wait message while \n      synchronization happens. Because routing should otherwise be handled by the client application,\n      this screen should really only be seen by a user when they first visit the app.\n    </p>\n    <p>To see this screen in action, refresh any page. To force a delay add <a href=\"?personaLagMs=3000\">?personaLagMs=3000</a> or some other\n      millisecond value to the url.\n    </p>\n\n    <h2>Route handling</h2>\n    <p>Routes are handled by Backbone.Router using HTML5 pushState support where available. The client app is\n      served from most urls without any server-side rendering, at this point. This has several drawbacks, and \n      alternatives can be explored in future iterations of this sandbox.\n    </p>\n\n    <h2>Templates</h2>\n    <p>Templating uses precompiled nunjucks templates. clientapp/templates.js is a thin wrapper over the nunjucks API to\n      conform to the convention set forth in Human Javascript.\n    </p>\n  </div>\n</section>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["pages/wait.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<section class=\"page row\" id=\"wait\">\n  <div class=\"small-12 columns\">\n    <h1>Wait</h1>\n    <p>This page is shown while you're waiting for Persona to let us know who's logged in.</p>\n    <p>The router will kick in when that sync happens and take you to the appropriate destination for the url.</p>\n  </div>\n</section>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["pages/welcome.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<section class=\"page row\" id=\"welcome\">\n  <div class=\"small-12 columns\">\n    <h1>Welcome</h1>\n    <p>Welcome to Moonboots Sandbox!</p>\n    <p>\n      This project is an exploration of using:\n      <ul>\n        <li><a href=\"https://github.com/henrikjoreteg/moonboots\" target=\"_blank\">moonboots</a></li>\n        <li><a href=\"http://backbonejs.org/\" target=\"_blank\">backbone.js</a></li>\n        <li><a href=\"https://github.com/henrikjoreteg/human-view\" target=\"_blank\">human-view</a></li>\n        <li><a href=\"https://github.com/henrikjoreteg/human-model\" target=\"_blank\">human-model</a></li>\n        <li><a href=\"http://jlongster.github.io/nunjucks/\" target=\"_blank\">nunjucks</a></li>\n        <li><a href=\"https://developer.mozilla.org/en-US/Persona/The_navigator.id_API#The_Observer_API\" target=\"_blank\">the Persona Observer API</a></li>\n        <li><a href=\"http://foundation.zurb.com/\" target=\"_blank\">Foundation</a></li>\n      </ul>\n      together in some sort of sane fashion.\n    </p>\n    <p>It was inspired by the book <a href=\"http://humanjavascript.com/\" target=\"_blank\">Human Javascript</a>\n      and follows many of the conventions set forth therein.\n    </p>\n  </div>\n</section>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
