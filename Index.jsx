'use strict'
var React = require('react')
var reactDom = require('react-dom') 
var Hello = require('./Hello')

reactDom.render(<Hello />, document.getElementById('content'))
