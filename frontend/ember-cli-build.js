/*jshint node:true*/
/* global require, module */
let EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
    let app = new EmberApp(defaults, {
      // Add extra settings here.
    });

    app.import('bower_components/tether/dist/js/tether.min.js');
    app.import('bower_components/bootstrap/dist/js/bootstrap.min.js');
    app.import('bower_components/moment/min/moment.min.js');

    app.import('vendor/dhtmlx/gantt/codebase/dhtmlxgantt.js');
    app.import('vendor/dhtmlx/gantt/codebase/dhtmlxgantt.css');

    app.import('vendor/dhtmlx/gantt/codebase/ext/dhtmlxgantt_marker.js');
    app.import('vendor/dhtmlx/gantt/codebase/ext/dhtmlxgantt_tooltip.js');
    // app.import('vendor/dhtmlx/gantt/codebase/ext/dhtmlxgantt_smart_rendering.js');

    app.import('vendor/bootbox/bootbox.min.js');

    return app.toTree();
};
