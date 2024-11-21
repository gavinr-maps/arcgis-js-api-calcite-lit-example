/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {ArcGISJSAPICalciteLitExample} from '../arcgis-js-api-calcite-lit-example.js';

import {fixture, assert} from '@open-wc/testing';
import {html} from 'lit/static-html.js';

suite('arcgis-js-api-calcite-lit-example', () => {
  test('is defined', () => {
    const el = document.createElement('arcgis-js-api-calcite-lit-example');
    assert.instanceOf(el, ArcGISJSAPICalciteLitExample);
  });

  test('renders with default values', async () => {
    const el = await fixture(
      html`<arcgis-js-api-calcite-lit-example></arcgis-js-api-calcite-lit-example>`
    );
    assert.shadowDom.equal(
      el,
      `
      <h1>Hello, World!</h1>
      <button part="button">Click Count: 0</button>
      <slot></slot>
    `
    );
  });

  test('renders with a set name', async () => {
    const el = await fixture(
      html`<arcgis-js-api-calcite-lit-example
        name="Test"
      ></arcgis-js-api-calcite-lit-example>`
    );
    assert.shadowDom.equal(
      el,
      `
      <h1>Hello, Test!</h1>
      <button part="button">Click Count: 0</button>
      <slot></slot>
    `
    );
  });

  test('handles a click', async () => {
    const el = (await fixture(
      html`<arcgis-js-api-calcite-lit-example></arcgis-js-api-calcite-lit-example>`
    )) as ArcGISJSAPICalciteLitExample;
    const button = el.shadowRoot!.querySelector('button')!;
    button.click();
    await el.updateComplete;
    assert.shadowDom.equal(
      el,
      `
      <h1>Hello, World!</h1>
      <button part="button">Click Count: 1</button>
      <slot></slot>
    `
    );
  });

  test('styling applied', async () => {
    const el = (await fixture(
      html`<arcgis-js-api-calcite-lit-example></arcgis-js-api-calcite-lit-example>`
    )) as ArcGISJSAPICalciteLitExample;
    await el.updateComplete;
    assert.equal(getComputedStyle(el).paddingTop, '16px');
  });
});
