# vue-plyr
>A Vue.js component that is a plyr video player.

This is useful for when you want a nice video player in your Vue app.

## Installation

```bash
yarn add vue-plyr-simple # or npm i vue-plyr-simple --save
```

### Browser

Include the script file, then register in the components section; e.g.:

```html
<script type="text/javascript" src="https://unpkg.com/vue@latest"></script>
<script type="text/javascript" src="https://unpkg.com/vue-plyr-simple@latest"></script>
<script type="text/javascript">
  new Vue({
    components: {
      VuePlyr
    }
  })
</script>
```

### Module

```js
import VuePlyr from 'vue-plyr-simple';
```

## Usage

Once installed, it can be used in a template as simply as:

```html
<vue-plyr></vue-plyr>
```
