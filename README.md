# ArcGIS Maps SDK for JavaScript + Calcite + Lit Example

This project was started from the LitElement TypeScript starter - see the readme for that [here](https://github.com/lit/lit-element-starter-ts/blob/6abfcfa55e01bbe4e2633dc3024bf7a3469db1b3/README.md).

## Quick start

Clone the repo, then in a terminal:

```bash
npm run build:watch
```

In a second terminal:

```bash
npm run serve
```

## Use the component

The component markup:

```html
<arcgis-js-api-calcite-lit-example
  center="[-90.193206, 38.622486]"
  zoom="18"
  locationLabel="Map currently located at:"
></arcgis-js-api-calcite-lit-example>
```

### Installation

If you're including it in your project, you can install via the typical manner:

```bash
npm install arcgis-js-api-calcite-lit-example
```

If you want to use it for demo purposes in a CDN, you must include the ArcGIS Maps SDK for JavaScriPT like this:

```HTML
<script src="https://js.arcgis.com/4.32/"></script>
<script src="https://esm.sh/arcgis-js-api-calcite-lit-example" type="module"></script>
```

([demo](https://jsbin.com/nuhulal/1/edit?html,output))

or you can use this switch from `esm.sh`:

```html
<script
  src="https://esm.sh/arcgis-js-api-calcite-lit-example?bundle-deps"
  type="module"
></script>
```

([demo](https://jsbin.com/zobegel/1/edit?html,output))
