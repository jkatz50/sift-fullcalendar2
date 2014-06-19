Package.describe({
    summary: "Full-sized drag and drop event calendar (jQuery plugin)"
});

Package.on_use(function (api) {
    api.use('jquery-ui', 'client');
    api.add_files([
        'css/fullcalendar.css',
        'lib/fullcalendar.js',
        'lib/lang-all.js',
        'lib/gcal.js',
    ], 'client');
});
