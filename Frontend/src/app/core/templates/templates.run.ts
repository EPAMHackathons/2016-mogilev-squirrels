angular.module("app.core.templates").run(["$templateCache", function($templateCache) {$templateCache.put("core/404.tpl.html","<h1>404</h1>");
$templateCache.put("calendar/calendar.tpl.html","<div id=\"graphContainer\" class=\"graphContainer\">\r\n</div>");
$templateCache.put("gallery/gallery.tpl.html","");
$templateCache.put("success/success.tpl.html","<h1>Успех</h1>");
$templateCache.put("core/navbar/navbar.tpl.html","<nav class=\"navbar navbar-default\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"navbar-header\">\r\n            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\"\r\n            aria-controls=\"navbar\">\r\n                <span class=\"sr-only\">Toggle navigation</span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n            </button>\r\n            <a class=\"navbar-brand\" href=\"#\">Project name</a>\r\n        </div>\r\n        <div id=\"navbar\" class=\"navbar-collapse collapse\">\r\n            <ul class=\"nav navbar-nav\">\r\n                <li class=\"active\"><a href=\"#\">Home</a></li>\r\n                <li><a href=\"#\">About</a></li>\r\n                <li><a href=\"#\">Contact</a></li>\r\n                <li class=\"dropdown\">\r\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Dropdown <span class=\"caret\"></span></a>\r\n                    <ul class=\"dropdown-menu\">\r\n                        <li><a href=\"#\">Action</a></li>\r\n                        <li><a href=\"#\">Another action</a></li>\r\n                        <li><a href=\"#\">Something else here</a></li>\r\n                        <li role=\"separator\" class=\"divider\"></li>\r\n                        <li class=\"dropdown-header\">Nav header</li>\r\n                        <li><a href=\"#\">Separated link</a></li>\r\n                        <li><a href=\"#\">One more separated link</a></li>\r\n                    </ul>\r\n                </li>\r\n            </ul>\r\n            <ul class=\"nav navbar-nav navbar-right\">\r\n                <li class=\"active\"><a href=\"./\">Default <span class=\"sr-only\">(current)</span></a></li>\r\n                <li><a href=\"../navbar-static-top/\">Static top</a></li>\r\n                <li><a href=\"../navbar-fixed-top/\">Fixed top</a></li>\r\n            </ul>\r\n        </div>\r\n        <!--/.nav-collapse -->\r\n    </div>\r\n    <!--/.container-fluid -->\r\n</nav>");
$templateCache.put("pages/main/main.tpl.html","<div class=\"jumbotron\">\r\n    <video id=\"video-background\" preload muted autoplay loop>\r\n        <source src=\"http://www.w3schools.com/html/mov_bbb.mp4\" type=\"video/mp4\">\r\n        <source src=\"http://www.w3schools.com/html/mov_bbb.ogg\" type=\"video/ogg\">\r\n    </video>\r\n    <div class=\"container\">\r\n        Hello World\r\n    </div>\r\n</div>\r\n\r\n<h1 class=\"success\">Наши успехи</h1>\r\n\r\n<div ng-repeat=\"success in ctrl.successes\">\r\n    <hd-success success=\"success\"></hd-success>\r\n</div>");}]);
$templateCache.put("success/success.tpl.html","<h1>Наши успехи</h1>");
$templateCache.put("core/navbar/navbar.tpl.html","<nav class=\"navbar navbar-default navbar-fixed-top\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"navbar-header\">\r\n            <div class=\"university-name\" ng-bind=\"vm.universityName\"></div>\r\n        </div>\r\n        <ul class=\"nav navbar-nav pull-right\">\r\n            <li>\r\n                <img src=\"/assets/profile.png\" class=\"profile-image pull-left\" alt=\"\">\r\n                <a href=\"/profile\" class=\"pull-right\">Profile</a>\r\n            </li>\r\n            <li>\r\n                <div class=\"text\" ng-click=\"vm.logout()\">Log out</div>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</nav>");
$templateCache.put("pages/main/main.tpl.html","<h1>Main page</h1>");
$templateCache.put("pages/timeline/timeline.tpl.html","<hd-calendar></hd-calendar>");}]);