//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//
import jsdom from 'jsdom'
import jquery from 'jquery'
import chai, { expect } from 'chai'
import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-dom/test-utils'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from '../src/reducers'
import chaiJquery from 'chai-jquery'
//
// ──────────────────────────────────────────────────────────────────── I ──────────
//   :::::: T E S T   E N V   S E T U P : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────────────────────
// make a testing env to run like a browser in the command line
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>')
global.window = global.document.defaultView // defaultView is from jsdom
const $ = jquery(global.window) // make jquery only responsilble for fake dom, otherwise it will try to attach to browser dom, which it cant
//
// ──────────────────────────────────────────────────────────────────────── II ──────────
//   :::::: R E N D E R   C O M P O N E N T : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────────────────────────
//
const renderComponent = (Component, props, state) => {
  const componentInstance = TestUtils.renderIntoDocument(
    <Provider store={createStore(reducers, state)}>
      <Component {...props} />
    </Provider>
  )

  return $(ReactDOM.findDOMNode(componentInstance)) // produces HTML
}
//
// ────────────────────────────────────────────────────────────────────── III ──────────
//   :::::: E V E N T   S I M U L A T O R : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────────────────
// this wraps every instance in jquery with this simulate function
$.fn.simulate = function (eventName, value) {
  // cannot be arrow func or it will mess up context for jquery
  if (value) this.val(value)
  TestUtils.Simulate[eventName](this[0]) // this in jquery methods is the wrapped jquery el
}
//
// ──────────────────────────────────────────────────────────────────────────── IV ──────────
//   :::::: S E T   U P   C H A I   J Q U E R Y : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────────────────────────────
//
chaiJquery(chai, chai.util, $)
//
// ─── FINAL EXPORT ───────────────────────────────────────────────────────────────
//
export { expect, renderComponent }