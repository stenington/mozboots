(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["body.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var t_1;
t_1 = runtime.contextOrFrameLookup(context, frame, "name") || "bud";
frame.set("name", t_1);
if(!frame.parent) {
context.setVariable("name", t_1);
context.addExport("name");
}
output += "\nHey ";
output += runtime.suppressValue(t_1, env.autoesc);
output += ".\n";
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
output += "<title>Wat</title>\n";
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
