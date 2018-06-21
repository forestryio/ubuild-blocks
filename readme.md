# uBuild Blocks

uBuild is a CSS toolkit for creating modular page components. uBuild was designed to work with [Forestry](https://forestry.io/)'s [Blocks](https://forestry.io/blog/blocks-give-your-editors-the-power-to-build-pages/) feature, and
 provide uniform component styles for the [ubuild-jekyll](https://github.com/forestryio/ubuild-jekyll) theme as well as uBuild themes created for other static site generators.

## Usage

You can load the uBuild stylesheet from the jsdelivr cdn:

```
<link rel="stylesheet" type="text" href="https://cdn.jsdelivr.net/gh/forestryio/ubuild-blocks/dist/css/ubuild.css" />
```

Check out the [examples](https://github.com/forestryio/ubuild-blocks/tree/master/examples) to see what blocks are available.

## Development

Clone this repo and run `npm install`.

Update styles in `src` and run `npm run build` to rebuild the compiled css file.

**Coming soon(ish):** a real development workflow