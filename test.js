#!/usr/bin/env -S node --experimental-modules
const test = require('ava');
const blinkenlights = require('./index.js');


test('main', t => {
  t.is(blinkenlights.text.title(), 'Achtung!');
});
