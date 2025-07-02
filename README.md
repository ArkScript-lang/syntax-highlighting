# ArkScript syntax highlighting

This repository is a collection of configuration files for your editor of choice, to provide syntactic coloration when coding in ArkScript.

## VSCode

See [ArkScript-VSC](https://github.com/ArkScript-lang/ArkScript-VSC).

## pygments

TODO

## rainbowjs

A configuration to use with [rainbow.js](https://craig.is/making/rainbows).

1. Include `rainbow.js` first: `<script src="/assets/js/rainbow.js"></script>`
2. Include `arkscript.js` after: `<script src="/assets/js/arkscript.js"></script>`
3. You can highlight code with:

```html
<pre><code data-language="arkscript">
(print "hello world!")
</code></pre>
```

## nano

1. Copy [arkscript.nanorc] to `~/.nano/`
2. Edit `~/.nanorc` to add the following line: `include "~/.nano/arkscript.nanorc"`

## vim / neovim

See [Ark.vim](https://github.com/ArkScript-lang/Ark.vim).

