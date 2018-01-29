'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var plyr = _interopDefault(require('plyr'));
require('plyr/dist/plyr.css');

var PlyrVideo = { render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('video', { ref: "video", staticClass: "video", attrs: { "id": ("js-player-video-" + (this.idNumber)), "poster": this.poster, "crossorigin": this.crossorigin } }, [_vm._l(this.videos, function (vid, index) {
      return _c('source', { key: index, attrs: { "src": vid.src, "type": ("video/" + (vid.format)) } });
    }), _vm._v(" "), this.subtitles ? _c('track', { attrs: { "kind": "captions", "label": this.subtitles.label, "src": this.subtitles.src, "srclang": this.subtitles.srclang, "default": "" } }) : _vm._e()], 2);
  }, staticRenderFns: [],
  name: 'plyr-video',
  props: {
    /** Options object for plyr config. */
    options: {
      type: Object,
      required: false,
      default: function default$1() {
        return {};
      }
    },
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
    /** Object for subtitles track. */
    subtitles: {
      type: Object,
      required: false,
      validator: function (value) {
        return value.hasOwnProperty('label') && value.hasOwnProperty('src') && value.hasOwnProperty('srclang');
      }
    },
    /** Boolean for whether to put crossorigin attribute on the video element. */
    crossorigin: {
      type: Boolean,
      required: false
    }
  },
  data: function data() {
    return {
      player: {}
    };
  },
  mounted: function mounted() {
    this.player = plyr.setup(document.getElementById(("js-player-video-" + (this.idNumber))), this.options)[0];
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
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { attrs: { "id": ("js-player-yt-" + (this.idNumber)), "data-type": "youtube", "data-video-id": this.id } });
  }, staticRenderFns: [],
  name: 'plyr-youtube',
  props: {
    /** Options object for plyr config. */
    options: {
      type: Object,
      required: false,
      default: function default$1() {
        return {};
      }
    },
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
    this.player = plyr.setup(document.getElementById(("js-player-yt-" + (this.idNumber))), this.options)[0];
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
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { attrs: { "id": ("js-player-vimeo-" + (this.idNumber)), "data-type": "vimeo", "data-video-id": this.id } });
  }, staticRenderFns: [],
  name: 'plyr-vimeo',
  props: {
    /** Options object for plyr config. */
    options: {
      type: Object,
      required: false,
      default: function default$1() {
        return {};
      }
    },
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
    this.player = plyr.setup(document.getElementById(("js-player-vimeo-" + (this.idNumber))), this.options)[0];
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
    /** Options object for plyr config. */
    options: {
      type: Object,
      required: false,
      default: function default$1() {
        return {};
      }
    },
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
    this.player = plyr.setup(document.getElementById(("js-player-audio-" + (this.idNumber))), this.options)[0];
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
