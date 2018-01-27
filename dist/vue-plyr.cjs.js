'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var plyr = _interopDefault(require('plyr'));
require('plyr/dist/plyr.css');

var Component = { render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "plyr-container" }, [_c('video', { ref: "video", staticClass: "video", attrs: { "id": ("js-player-" + (this.idNumber)), "poster": this.poster, "preload": "auto" } }, [_vm._l(this.videos, function (vid, index) {
      return _c('source', { key: index, attrs: { "src": vid.src, "type": ("video/" + (vid.format)) } });
    }), _vm._v(" "), this.subs ? _c('track', { attrs: { "kind": "captions", "label": this.subs.label, "src": this.subs.src, "srclang": this.subs.srclang, "default": "" } }) : _vm._e()], 2)]);
  }, staticRenderFns: [],
  name: 'vue-plyr',
  props: {
    poster: {
      type: String,
      required: true
    },
    videos: {
      type: Array,
      required: true,
      validator: function (value) {
        var valid = true;
        value.forEach(function (vid) {
          var hasProps = vid.hasOwnProperty('src') && vid.hasOwnProperty('format');
          if (!hasProps) {
            valid = false;
          }
        });
        return valid;
      }
    },
    subs: {
      type: Object,
      required: false,
      validator: function (value) {
        return value.hasOwnProperty('label') && value.hasOwnProperty('src') && value.hasOwnProperty('srclang');
      }
    }
  },
  data: function data() {
    return {
      player: {}
    };
  },
  mounted: function mounted() {
    this.player = plyr.setup(document.getElementById(("js-player-" + (this.idNumber))))[0];
  },
  beforeDestroy: function beforeDestroy() {
    this.player.destroy();
  },
  computed: {
    idNumber: function idNumber() {
      return Math.floor(Math.random() * (100000 - 1)) + 1;
    }
  }
};

var index = (function (Vue) { return Vue.component(Component.name, Component); });

module.exports = index;
