# libxmljs Meteor package

[![Build Status](https://travis-ci.org/csats/meteor-npm-libxmljs.svg?branch=master)](https://travis-ci.org/csats/meteor-npm-libxmljs)

This Meteor package wraps the [libxmljs npm package](https://www.npmjs.com/package/libxmljs).

## Install

    meteor add csats:libxmljs

## Usage

This package exports `XML`. Example usage:

    if (Meteor.isServer) {
      var xml = '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n'
        + '<QuestionFormAnswers xmlns="http://mechanicalturk.amazonaws.com/AWSMechanicalTurkDataSchemas/2005-10-01/QuestionFormAnswers.xsd">\n'
        + '  <Answer>\n'
        + '    <QuestionIdentifier>Q2</QuestionIdentifier>\n'
        + '    <FreeText>Change your thoughts and you change the world.</FreeText>\n'
        + '  </Answer>\n'
        + '</QuestionFormAnswers>\n';
      // Warning: synchronous!
      var xmlDoc = XML.parseXml(xml);
      var actual = xmlDoc.get('//xmlns:FreeText', 'http://mechanicalturk.amazonaws.com/AWSMechanicalTurkDataSchemas/2005-10-01/QuestionFormAnswers.xsd').text();
      var expected = 'Change your thoughts and you change the world.';
      var assert = Npm.require('assert');
      assert.equal(actual, expected);
    }

## No Windows support

Sorry, this package doesn't work on Windows. see
[polotek/libxmljs#309](https://github.com/polotek/libxmljs/issues/309).

## See also

* [upstream npm package](https://www.npmjs.com/package/libxmljs)
* [perak:xmlkit](https://atmospherejs.com/perak/xmlkit) - provides older version of
  libxmljs and also provides node\_xslt

# License

MIT
