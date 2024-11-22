/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css, PropertyValues} from 'lit';
import {customElement, property, query} from 'lit/decorators.js';

import '@arcgis/map-components/dist/components/arcgis-map';
import '@arcgis/map-components/dist/components/arcgis-legend';
import {ArcgisMap} from '@arcgis/map-components/dist/components/arcgis-map';

@customElement('arcgis-js-api-calcite-lit-example')
export class ArcGISJSAPICalciteLitExample extends LitElement {
  static override styles = css`
    :host {
      display: flex;
      flex-direction: column;
      gap: 10px;
      height: 100%;
      position: relative;
      border: solid 1px gray;
      padding: 16px;
    }

    arcgis-map {
      display: block;
      height: 100%;
    }
  `;

  /**
   * The name to say "Hello" to.
   */
  @property()
  locationLabel = 'Here we are:';

  @property({type: Array})
  center = [0.0, 0.0];

  @query('#centerInputBox')
  centerInputBox!: HTMLInputElement;

  handleArcGISViewChange(evt: Event) {
    const target = evt.target as ArcgisMap;

    if (target?.center && target.stationary === true) {
      this.center = [target.center.longitude, target.center.latitude];
    }
  }

  isValidFloat = (v: number) => {
    if (typeof v === 'number' && !isNaN(v) && isFinite(v)) {
      return true;
    }
    return false;
  };

  getLngLatFromString(str: string): [number, number] | undefined {
    if (str && str.includes(',')) {
      const [lng, lat] = str.split(',').map((v) => parseFloat(v));
      if (this.isValidFloat(lng) && this.isValidFloat(lat)) {
        return [lng, lat];
      }
      return undefined;
    }
    return undefined;
  }

  protected override willUpdate(_changedProperties: PropertyValues): void {
    if (_changedProperties.has('center')) {
      this.dispatchEvent(
        new CustomEvent('center-changed', {
          detail: _changedProperties.get('center'),
        })
      );
    }
  }

  override render() {
    return html`
      <link
        rel="stylesheet"
        href="https://js.arcgis.com/4.31/@arcgis/core/assets/esri/themes/light/main.css"
      />

      <arcgis-map
        item-id="e691172598f04ea8881cd2a4adaa45ba"
        @arcgisViewChange=${this.handleArcGISViewChange}
        .center=${this.center}
      >
        <arcgis-legend position="top-right"></arcgis-legend>
      </arcgis-map>

      <div>
        ${this.locationLabel}
        <input id="centerInputBox" type="text" .value=${String(this.center)} />
        <button @click=${this._goToClickHandler} part="button">Go</button>
      </div>

      <slot></slot>
    `;
  }

  private _goToClickHandler() {
    if (this.centerInputBox.value && this.centerInputBox.value !== '') {
      const lngLat = this.getLngLatFromString(this.centerInputBox.value);
      if (lngLat) {
        this.center = lngLat;
      }
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'arcgis-js-api-calcite-lit-example': ArcGISJSAPICalciteLitExample;
  }
}
