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
output += "<section class=\"page row\" id=\"instructions\">\n  <div class=\"small-12 columns\">\n    <h1>Instructions</h1>\n\n    <h2>Login</h2>\n    <p>Login is handled with the Persona Observer API.</p> \n    <p>The app lets Persona manage user state between page refreshes and displays a wait message while \n      synchronization happens. Because routing should otherwise be handled by the client application,\n      this screen should really only be seen by a user when they first visit the app.\n    </p>\n    <p>To see this screen in action, refresh any page. To force a delay add <a href=\"?personaLagMs=3000\">?personaLagMs=3000</a> or some other\n      millisecond value to the url.\n    </p>\n\n    <h2>Stuff</h2>\n  </div>\n</section>\n";
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
output += "<section class=\"page row\" id=\"welcome\">\n  <div class=\"small-12 columns\">\n    <h1>Welcome</h1>\n    <p>Welcome to Moonboots Sandbox!</p>\n    <p>\n      This project is an exploration of using:\n      <ul>\n        <li>moonboots,</li>\n        <li>backbone.js</li>\n        <li>nunjucks</li>\n        <li>the Persona Observer API, and</li>\n        <li>Foundation</li>\n      </ul>\n      together in some sort of sane fashion. \n    </p>\n  </div>\n</section>\n";
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
