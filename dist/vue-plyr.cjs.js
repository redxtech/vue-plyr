'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var plyr = _interopDefault(require('plyr'));
require('plyr/dist/plyr.css');

var PlyrVideo = { render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('video', { ref: "video", staticClass: "video", attrs: { "id": ("js-player-" + (this.idNumber)), "poster": this.poster } }, [_vm._l(this.videos, function (vid, index) {
      return _c('source', { key: index, attrs: { "src": vid.src, "type": ("video/" + (vid.format)) } });
    }), _vm._v(" "), this.subs ? _c('track', { attrs: { "kind": "captions", "label": this.subs.label, "src": this.subs.src, "srclang": this.subs.srclang, "default": "" } }) : _vm._e()], 2);
  }, staticRenderFns: [],
  name: 'plyr-video',
  props: {
    /** Link to poster to show when video hasn't played yet. */
    poster: {
      type: String,
      required: true
    },
    /** Array of videos to include in the video source. */
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
    /** Object for subtitles track */
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

var PlyrYouTube = { render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: ("js-player-yt-" + (this.idNumber)), attrs: { "data-type": "youtube", "data-video-id": this.id } });
  }, staticRenderFns: [],
  name: 'plyr-youtube',
  props: {
    /** Link or ID of youtube video. */
    id: {
      type: String,
      required: true
    }
  },
  data: function data() {
    return {
      player: {}
    };
  },
  mounted: function mounted() {
    this.player = plyr.setup(document.getElementById(("js-player-yt-" + (this.idNumber))))[0];
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

var PlyrVimeo = { render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: ("js-player-vimeo-" + (this.idNumber)), attrs: { "data-type": "vimeo", "data-video-id": this.id } });
  }, staticRenderFns: [],
  name: 'plyr-vimeo',
  props: {
    /** Link or ID of vimeo video. */
    id: {
      type: String,
      required: true
    }
  },
  data: function data() {
    return {
      player: {}
    };
  },
  mounted: function mounted() {
    this.player = plyr.setup(document.getElementById(("js-player-vimeo-" + (this.idNumber))))[0];
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

var PlyrAudio = { render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('audio', { ref: "audio", attrs: { "id": ("js-player-audio-" + (this.idNumber)) } }, _vm._l(this.tracks, function (track, index) {
      return _c('source', { key: index, attrs: { "src": track.src, "type": ("audio/" + (track.format)) } });
    }));
  }, staticRenderFns: [],
  name: 'plyr-audio',
  props: {
    /** Array of audio tracks to include in the audio source. */
    tracks: {
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
    }
  },
  data: function data() {
    return {
      player: {}
    };
  },
  mounted: function mounted() {
    this.player = plyr.setup(document.getElementById(("js-player-audio-" + (this.idNumber))))[0];
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

var Components = [PlyrVideo, PlyrYouTube, PlyrVimeo, PlyrAudio];

var index = (function (Vue) {
  Components.forEach(function (Component) {
    Vue.component(Component.name, Component);
  });
});

module.exports = index;
