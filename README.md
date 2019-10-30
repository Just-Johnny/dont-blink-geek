# Repository for [Don't Blink Geek](https://www.dontblinkgeek.com).



**Requirements**
Node.js, npm, Gulp 4.x

**Features**

- Concatenate, minify, and lint JavaScript.
- Compile, minify, autoprefix, and lint Sass.
- Optimize images and SVGs.
- Copy static files and folders into your `dist` directory.
- Automatically add headers and project details to JS and CSS files.
- Watch for file changes, and automatically recompile build and reload webpages.
- Turn tasks on and off in gulpfile.js

**Notice**

The original starter files can be found at [https://travis-ci.org/cferdinandi/gulp-boilerplate](https://travis-ci.org/cferdinandi/gulp-boilerplate). However, I have made changes to fit my personal preferences and needs.

This is my personal website but feel free to use this as a starting point for your own. You are free to copy the assets over and reuse everything with the exception of the logo, image files and video. If you're wondering why I don't .gitignore those files, it's due to the fact the host I use is directly referencing the files.

If you have questions or encounter any bugs, please leave a comment in the Issues section of the project. I will do my best to respond. However, I cannot provide assistance in setting up your work station if this is your first time using npm. There are plenty of resources already available online.

[Buy the video here.](https://videohive.net/item/space-galaxy-/11419190)
[Buy the Hipster Dude here.](https://graphicriver.net/item/hipster-character-pack/9863942)

## Getting Started

### Dependencies

*__Note:__ if you've previously installed Gulp globally, run `npm rm --global gulp` to remove it. [Details here.](https://medium.com/gulpjs/gulp-sips-command-line-interface-e53411d4467)*

Make sure these are installed first.

- [Node.js](http://nodejs.org)
- [Gulp Command Line Utility](http://gulpjs.com) `npm install --global gulp-cli`

### Quick Start

1. In bash/terminal/command line, `cd` into your project directory.
2. Run `npm install` to install required files and dependencies.
3. When it's done installing, run one of the task runners to get going:
	- `gulp` manually compiles files.
	- `gulp watch` automatically compiles files and applies changes using [BrowserSync](https://browsersync.io/) when you make changes to your source files.

**Try it out.** After installing, run `gulp` to compile some test files into the `dist` directory. Or, run `gulp watch` and make some changes to see them recompile automatically.



## Documentation

Add your source files to the appropriate `src` subdirectories. Gulp will process and and compile them into `dist`.

- JavaScript files in the `src/js` directory will be compiled to `dist/js`. Files in subdirectories under the `js` folder will be concatenated. For example, files in `js/detects` will compile into `detects.js`.
- Files in the `src/sass` directory will be compiled to `dist/css`.
- Image & SVG files placed in the `src/img` directory will be optimized with SVGO and compiled into `dist/img`.
- Files and folders placed in the `copy` directory will be copied as-is into the `dist` directory.

### package.json

The `package.json` file holds all of the details about your project.

Some information is automatically pulled in from it and added to a header that's injected into the top of your JavaScript and CSS files.

```json
{
	"name": "project-name",
	"version": "0.0.1",
	"description": "A description for your project.",
	"main": "./dist/your-main-js-file.js",
	"author": {
		"name": "YOUR NAME",
		"url": "http://link-to-your-website.com"
	},
	"license": "MIT",
	"repository": {
		"type": "git",
		"url": "http://link-to-your-git-repo.com"
	},
	"devDependencies": {}
}
```

*__Note:__ `devDependencies` are the dependencies Gulp uses. Don't change these or you'll break things.*

### JavaScript

Put your JavaScript files in the `src/js` directory.

Files placed directly in the `js` folder will compile directly to `dist/js` as both minified and unminified files. Files placed in subdirectories under `src/js` will also be concatenated into a single file. For example, files in `js/detects` will compile into `detects.js`.

### Sass

Put your [Sass](https://sass-lang.com/) files in the `src/sass` directory.

Gulp generates minified and unminified CSS files. It also includes [autoprefixer](https://github.com/postcss/autoprefixer), which adds vendor prefixes for you.

### Images & SVGs

Place images & SVG files in the `src/img` directory.

These files will be optimized with [gulp-imagemin](https://github.com/sindresorhus/gulp-imagemin) and compiled into `dist/img`.

### Copy Files

Files and folders placed in the `src/copy` directory will be copied as-is into `dist`.

This is a great place to put HTML files and pre-compiled assets.



## Options & Settings

Options and settings are located at the top of the `gulpfile.js`.

### Settings

Set features under the `settings` variable to `true` to turn them on (default), and `false` to turn them off.

```js
/**
 * Settings
 * Turn on/off build features
 */

var settings = {
  clean: true,
  scripts: true,
  styles: true,
  images: true,
  copy: true,
  reload: true
};
```

### Paths

Adjust the `input` and `output` paths for all of the Gulp tasks under the `paths` variable. Paths are relative to the root project folder.

```js
/**
 * Paths to project folders
 */

var paths = {
  input: 'src/',
  output: 'dist/',
  scripts: {
    input: 'src/js/*',
    output: 'dist/js/'
  },
  styles: {
    input: 'src/sass/**/*.{scss,sass}',
    output: 'dist/css/'
  },
  images: {
    input: 'src/img/*.{jpg,gif,png,jpeg,svg}',
    output: 'dist/img/'
  },
  copy: {
    input: 'src/copy/**/*',
    output: 'dist/'
  },
  reload: './dist/'
};
```

### Header

Gulp auto-injects a header into all of your JavaScript and CSS files with details from your `package.json` file.

Unminified versions get a fat header, while minified files get a one-liner. You can change what's included under the `banner` variable.

```js
/**
 * Template for banner to add to file headers
 */

var banner = {
	full:
		'/*!\n' +
		' * <%= package.name %> v<%= package.version %>\n' +
		' * <%= package.description %>\n' +
		' * (c) ' + new Date().getFullYear() + ' <%= package.author.name %>\n' +
		' * <%= package.license %> License\n' +
		' * <%= package.repository.url %>\n' +
		' */\n\n',
	min:
		'/*!' +
		' <%= package.name %> v<%= package.version %>' +
		' | (c) ' + new Date().getFullYear() + ' <%= package.author.name %>' +
		' | <%= package.license %> License' +
		' | <%= package.repository.url %>' +
		' */\n'
};
```



## License

The code is available under the [MIT License](LICENSE.md).
