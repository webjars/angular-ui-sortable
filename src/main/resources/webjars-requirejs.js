requirejs.config({
    paths: { "ui-sortable": webjars.path("ui-sortable", "sortable") },
    shim: { "ui-sortable": [ "jquery-ui" ] }
});
