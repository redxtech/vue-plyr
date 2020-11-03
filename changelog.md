# Changelog

#### 7.0.0
- Vue 3 support.
- Updated plyr version.
- Removed `emit` option.
- Removed unnecessary `<div>` wrapper for components.
- Completely redid the bundling process.
  - Added polyfilled versions.
- Updated examples and added some more of them.
- Some other things.
- Maybe some other small thi ngs I've forgotten about.

#### 6.0.4
- Remove useless nuxt plugin.

#### 6.0.3
- Update docs.
- Bump version number.

#### 6.0.1
- Fix `vue-runtime-helper` being a dependency by bundling it.
- Reorganize exports (yeah breaking but I honestly don't want to bump the version again).
- Add nuxt plugin file.

### 6.0.0
- Change import to be more natural.
- Move to esm export.
- Change demo.
- Revamp how using the plugin works.
- Remove player event.

#### 5.1.2
- Fix readme because I forgot to bump it previously.

#### 5.1.1
- Update plyr to [3.5.2](https://github.com/sampotts/plyr/blob/master/changelog.md#v352).

#### 5.1.0
- Remove auto import of CSS within JS to prevent CJS errors.
- Import CSS with `<style src="plyr.css"></style>` so bili would find it.
- Restructure demos.
- Add nuxt demo.
- Change all &amp; to be &.
- Change `refs="player"` to `refs="plyr"` in readme.
- Update nuxt usage in readme.
- Update dependencies to latest version.

#### 5.0.4
- Update documentation to include new and better methods to access
player instance and events.
- Slightly reorganize readme.

#### 5.0.3
- Prevent default option from being accidentally overwritten.
- Fix readme footer.
- Update readme to reflect installation methods.
- Re-Add named exports.

#### 5.0.2
- Fix default export.
- Fix component not registered issue.

#### 5.0.1
- Update Plyr version.

#### 5.0.0
- Major change because of breaking fix.
- Change import scheme to be more common (`Vue.use(VuePlyr)`)
- Remove sass/scss from dependencies because it wasn't needed.
- Update dependencies to latest versions.
- Remove demo build
- Remove 1440p video from demo (CDN no longer hosted video file)
- Add and refactor some tests
- Streamline installation by adding from NPM.
- Streamline installation by including in `<script>` tag
- Change link on demo from `Home` to `Video`.

#### 4.0.0
- Renamed main component from `<plyr>` to `<vue-plyr>`.
- Removed other components in favour of the main component.
- Added SSR support.
- Used `this.$el` instead of `document.getElementById('plyr-container-' + this.idNumber)` for element selection.
- Removed `this.idNumber` from ID and computed (related to above).
- Covert to vue cli 3 except for building.
- Update plyr dependency from `3.0.2` to `3.3.22`.
- Move testing to jest.
- Change import procedure from `import VuePlyr from 'vue-plyr'` & `Vue.use(VuePlyr)` to just `import 'vue-plyr'`.
- Update some eslint rules.
- Removed storybook in favour of of vue cli 3's serve and a demo app.
- Added `hideYouTubeDOMError` option.

#### 3.0.0
- Update to plyr v3.
- Add progressive enhancement support.

#### 2.1.1
- Add event emitting.
- Fix some prop validation.

#### 2.0.0
- Convert from old vue-plyr to currently maintained version.
