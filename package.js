'use strict';

Package.describe({
  name: 'csats:libxmljs',
  summary: 'Wrapper for libxmljs npm package',
  version: '1.0.0',
  git: 'https://github.com/csats/meteor-npm-libxmljs'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles([
    'lib/xml.js',
  ], 'server');
  api.export('XML');
});

Package.onTest(function(api) {
  api.use('csats:libxmljs');
  api.use('tinytest@1.0.0');
  api.addFiles('test/xml.js', 'server');
});

Npm.depends({
  'libxmljs': '0.14.0'
});
