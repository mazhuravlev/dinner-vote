"use strict";
var PathTranslator = (function () {
    function PathTranslator() {
    }

    PathTranslator.templatePath = function (componentName) {
        return "app/components/" + componentName + "/" + componentName + ".component.html";
    };
    PathTranslator.stylePath = function (componentName, style) {
        return "app/components/" + componentName + "/" + (style ? style : componentName) + ".component.css";
    };
    return PathTranslator;
}());
exports.PathTranslator = PathTranslator;
//# sourceMappingURL=PathTranslator.js.map