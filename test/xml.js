'use strict';

Tinytest.add('basic XML parsing test', function (test) {
  var xml = '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n'
    + '<QuestionFormAnswers xmlns="http://mechanicalturk.amazonaws.com/AWSMechanicalTurkDataSchemas/2005-10-01/QuestionFormAnswers.xsd">\n'
    + '  <Answer>\n'
    + '    <QuestionIdentifier>Q2</QuestionIdentifier>\n'
    + '    <FreeText>Change your thoughts and you change the world.</FreeText>\n'
    + '  </Answer>\n'
    + '</QuestionFormAnswers>\n';
  var xmlDoc = XML.parseXml(xml);
  var actual = xmlDoc.get('//xmlns:FreeText', 'http://mechanicalturk.amazonaws.com/AWSMechanicalTurkDataSchemas/2005-10-01/QuestionFormAnswers.xsd').text();
  var expected = 'Change your thoughts and you change the world.';
  var assert = Npm.require('assert');
  test.equal(actual, expected);
});
