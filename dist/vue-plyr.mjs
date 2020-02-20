import Plyr from 'plyr/dist/plyr.polyfilled.min.js';

//

var script = {
  name: 'VuePlyr',
  props: {
    /** Options object for plyr config. **/
    options: {
      type: Object,
      required: false,
      default () {
        return {}
      }
    },
    /** Array of events to emit from the plyr object **/
    emit: {
      type: Array,
      required: false,
      default () { return [] }
    }
  },
  data () {
    return {
      player: {}
    }
  },
  computed: {
    opts () {
      const options = this.options;
      if (!this.options.hasOwnProperty('hideYouTubeDOMError')) {
        options.hideYouTubeDOMError = true;
      }
      return options
    }
  },
  mounted () {
    this.player = new Plyr(this.$el.firstChild, this.opts);
    this.emit.forEach(element => {
      this.player.on(element, this.emitPlayerEvent);
    });
  },
  beforeDestroy () {
    try {
      this.player.destroy();
    } catch (e) {
      if (!(this.opts.hideYouTubeDOMError && e.message === 'The YouTube player is not attached to the DOM.')) {
        // eslint-disable-next-line no-console
        console.error(e);
      }
    }
  },
  methods: {
    emitPlayerEvent (event) {
      this.$emit(event.type, event);
    }
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

const isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
    return (id, style) => addStyle(id, style);
}
let HEAD;
const styles = {};
function addStyle(id, css) {
    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
    if (!style.ids.has(id)) {
        style.ids.add(id);
        let code = css.source;
        if (css.map) {
            // https://developer.chrome.com/devtools/docs/javascript-debugging
            // this makes source maps inside style tags work properly in Chrome
            code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
            // http://stackoverflow.com/a/26603875
            code +=
                '\n/*# sourceMappingURL=data:application/json;base64,' +
                    btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                    ' */';
        }
        if (!style.element) {
            style.element = document.createElement('style');
            style.element.type = 'text/css';
            if (css.media)
                style.element.setAttribute('media', css.media);
            if (HEAD === undefined) {
                HEAD = document.head || document.getElementsByTagName('head')[0];
            }
            HEAD.appendChild(style.element);
        }
        if ('styleSheet' in style.element) {
            style.styles.push(code);
            style.element.styleSheet.cssText = style.styles
                .filter(Boolean)
                .join('\n');
        }
        else {
            const index = style.ids.size - 1;
            const textNode = document.createTextNode(code);
            const nodes = style.element.childNodes;
            if (nodes[index])
                style.element.removeChild(nodes[index]);
            if (nodes.length)
                style.element.insertBefore(textNode, nodes[index]);
            else
                style.element.appendChild(textNode);
        }
    }
}

/* script */
const __vue_script__ = script;

/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", [_vm._t("default")], 2)
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  const __vue_inject_styles__ = function (inject) {
    if (!inject) return
    inject("data-v-1ddbc47c_0", { source: "@keyframes plyr-progress{to{background-position:25px 0}}@keyframes plyr-popup{0%{opacity:.5;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}@keyframes plyr-fade-in{from{opacity:0}to{opacity:1}}.plyr{-moz-osx-font-smoothing:auto;-webkit-font-smoothing:subpixel-antialiased;align-items:center;direction:ltr;display:flex;flex-direction:column;font-family:Avenir,\"Avenir Next\",\"Helvetica Neue\",\"Segoe UI\",Helvetica,Arial,sans-serif;font-variant-numeric:tabular-nums;font-weight:500;height:100%;line-height:1.7;max-width:100%;min-width:200px;position:relative;text-shadow:none;transition:box-shadow .3s ease;z-index:0}.plyr audio,.plyr iframe,.plyr video{display:block;height:100%;width:100%}.plyr button{font:inherit;line-height:inherit;width:auto}.plyr:focus{outline:0}.plyr--full-ui{box-sizing:border-box}.plyr--full-ui *,.plyr--full-ui ::after,.plyr--full-ui ::before{box-sizing:inherit}.plyr--full-ui a,.plyr--full-ui button,.plyr--full-ui input,.plyr--full-ui label{touch-action:manipulation}.plyr__badge{background:#4a5764;border-radius:2px;color:#fff;font-size:9px;line-height:1;padding:3px 4px}.plyr--full-ui ::-webkit-media-text-track-container{display:none}.plyr__captions{animation:plyr-fade-in .3s ease;bottom:0;color:#fff;display:none;font-size:14px;left:0;padding:10px;position:absolute;text-align:center;transition:transform .4s ease-in-out;width:100%}.plyr__captions .plyr__caption{background:rgba(0,0,0,.8);border-radius:2px;-webkit-box-decoration-break:clone;box-decoration-break:clone;line-height:185%;padding:.2em .5em;white-space:pre-wrap}.plyr__captions .plyr__caption div{display:inline}.plyr__captions span:empty{display:none}@media (min-width:480px){.plyr__captions{font-size:16px;padding:20px}}@media (min-width:768px){.plyr__captions{font-size:18px}}.plyr--captions-active .plyr__captions{display:block}.plyr:not(.plyr--hide-controls) .plyr__controls:not(:empty)~.plyr__captions{transform:translateY(-40px)}.plyr__control{background:0 0;border:0;border-radius:3px;color:inherit;cursor:pointer;flex-shrink:0;overflow:visible;padding:7px;position:relative;transition:all .3s ease}.plyr__control svg{display:block;fill:currentColor;height:18px;pointer-events:none;width:18px}.plyr__control:focus{outline:0}.plyr__control.plyr__tab-focus{box-shadow:0 0 0 5px rgba(0,179,255,.5);outline:0}a.plyr__control{text-decoration:none}a.plyr__control::after,a.plyr__control::before{display:none}.plyr__control.plyr__control--pressed .icon--not-pressed,.plyr__control.plyr__control--pressed .label--not-pressed,.plyr__control:not(.plyr__control--pressed) .icon--pressed,.plyr__control:not(.plyr__control--pressed) .label--pressed{display:none}.plyr--full-ui ::-webkit-media-controls{display:none}.plyr__controls{align-items:center;display:flex;justify-content:flex-end;text-align:center}.plyr__controls .plyr__progress__container{flex:1;min-width:0}.plyr__controls .plyr__controls__item{margin-left:2.5px}.plyr__controls .plyr__controls__item:first-child{margin-left:0;margin-right:auto}.plyr__controls .plyr__controls__item.plyr__progress__container{padding-left:2.5px}.plyr__controls .plyr__controls__item.plyr__time{padding:0 5px}.plyr__controls .plyr__controls__item.plyr__progress__container:first-child,.plyr__controls .plyr__controls__item.plyr__time+.plyr__time,.plyr__controls .plyr__controls__item.plyr__time:first-child{padding-left:0}.plyr__controls:empty{display:none}.plyr [data-plyr=airplay],.plyr [data-plyr=captions],.plyr [data-plyr=fullscreen],.plyr [data-plyr=pip]{display:none}.plyr--airplay-supported [data-plyr=airplay],.plyr--captions-enabled [data-plyr=captions],.plyr--fullscreen-enabled [data-plyr=fullscreen],.plyr--pip-supported [data-plyr=pip]{display:inline-block}.plyr__menu{display:flex;position:relative}.plyr__menu .plyr__control svg{transition:transform .3s ease}.plyr__menu .plyr__control[aria-expanded=true] svg{transform:rotate(90deg)}.plyr__menu .plyr__control[aria-expanded=true] .plyr__tooltip{display:none}.plyr__menu__container{animation:plyr-popup .2s ease;background:rgba(255,255,255,.9);border-radius:4px;bottom:100%;box-shadow:0 1px 2px rgba(0,0,0,.15);color:#4a5764;font-size:16px;margin-bottom:10px;position:absolute;right:-3px;text-align:left;white-space:nowrap;z-index:3}.plyr__menu__container>div{overflow:hidden;transition:height .35s cubic-bezier(.4,0,.2,1),width .35s cubic-bezier(.4,0,.2,1)}.plyr__menu__container::after{border:4px solid transparent;border-top-color:rgba(255,255,255,.9);content:'';height:0;position:absolute;right:15px;top:100%;width:0}.plyr__menu__container [role=menu]{padding:7px}.plyr__menu__container [role=menuitem],.plyr__menu__container [role=menuitemradio]{margin-top:2px}.plyr__menu__container [role=menuitem]:first-child,.plyr__menu__container [role=menuitemradio]:first-child{margin-top:0}.plyr__menu__container .plyr__control{align-items:center;color:#4a5764;display:flex;font-size:14px;padding:4px 11px;-webkit-user-select:none;-ms-user-select:none;user-select:none;width:100%}.plyr__menu__container .plyr__control>span{align-items:inherit;display:flex;width:100%}.plyr__menu__container .plyr__control::after{border:4px solid transparent;content:'';position:absolute;top:50%;transform:translateY(-50%)}.plyr__menu__container .plyr__control--forward{padding-right:28px}.plyr__menu__container .plyr__control--forward::after{border-left-color:rgba(74,87,100,.8);right:5px}.plyr__menu__container .plyr__control--forward.plyr__tab-focus::after,.plyr__menu__container .plyr__control--forward:hover::after{border-left-color:currentColor}.plyr__menu__container .plyr__control--back{font-weight:500;margin:7px;margin-bottom:3px;padding-left:28px;position:relative;width:calc(100% - 14px)}.plyr__menu__container .plyr__control--back::after{border-right-color:rgba(74,87,100,.8);left:7px}.plyr__menu__container .plyr__control--back::before{background:rgba(114,133,151,.2);box-shadow:0 1px 0 #fff;content:'';height:1px;left:0;margin-top:4px;overflow:hidden;position:absolute;right:0;top:100%}.plyr__menu__container .plyr__control--back.plyr__tab-focus::after,.plyr__menu__container .plyr__control--back:hover::after{border-right-color:currentColor}.plyr__menu__container .plyr__control[role=menuitemradio]{padding-left:7px}.plyr__menu__container .plyr__control[role=menuitemradio]::after,.plyr__menu__container .plyr__control[role=menuitemradio]::before{border-radius:100%}.plyr__menu__container .plyr__control[role=menuitemradio]::before{background:rgba(0,0,0,.1);content:'';display:block;flex-shrink:0;height:16px;margin-right:10px;transition:all .3s ease;width:16px}.plyr__menu__container .plyr__control[role=menuitemradio]::after{background:#fff;border:0;height:6px;left:12px;opacity:0;top:50%;transform:translateY(-50%) scale(0);transition:transform .3s ease,opacity .3s ease;width:6px}.plyr__menu__container .plyr__control[role=menuitemradio][aria-checked=true]::before{background:#00b3ff}.plyr__menu__container .plyr__control[role=menuitemradio][aria-checked=true]::after{opacity:1;transform:translateY(-50%) scale(1)}.plyr__menu__container .plyr__control[role=menuitemradio].plyr__tab-focus::before,.plyr__menu__container .plyr__control[role=menuitemradio]:hover::before{background:rgba(0,0,0,.1)}.plyr__menu__container .plyr__menu__value{align-items:center;display:flex;margin-left:auto;margin-right:-5px;overflow:hidden;padding-left:25px;pointer-events:none}.plyr--full-ui input[type=range]{-webkit-appearance:none;background:0 0;border:0;border-radius:26px;color:#00b3ff;display:block;height:19px;margin:0;padding:0;transition:box-shadow .3s ease;width:100%}.plyr--full-ui input[type=range]::-webkit-slider-runnable-track{background:0 0;border:0;border-radius:2.5px;height:5px;-webkit-transition:box-shadow .3s ease;transition:box-shadow .3s ease;-webkit-user-select:none;user-select:none;background-image:linear-gradient(to right,currentColor var(--value,0),transparent var(--value,0))}.plyr--full-ui input[type=range]::-webkit-slider-thumb{background:#fff;border:0;border-radius:100%;box-shadow:0 1px 1px rgba(0,0,0,.15),0 0 0 1px rgba(35,41,47,.2);height:13px;position:relative;-webkit-transition:all .2s ease;transition:all .2s ease;width:13px;-webkit-appearance:none;margin-top:-4px}.plyr--full-ui input[type=range]::-moz-range-track{background:0 0;border:0;border-radius:2.5px;height:5px;-moz-transition:box-shadow .3s ease;transition:box-shadow .3s ease;user-select:none}.plyr--full-ui input[type=range]::-moz-range-thumb{background:#fff;border:0;border-radius:100%;box-shadow:0 1px 1px rgba(0,0,0,.15),0 0 0 1px rgba(35,41,47,.2);height:13px;position:relative;-moz-transition:all .2s ease;transition:all .2s ease;width:13px}.plyr--full-ui input[type=range]::-moz-range-progress{background:currentColor;border-radius:2.5px;height:5px}.plyr--full-ui input[type=range]::-ms-track{background:0 0;border:0;border-radius:2.5px;height:5px;-ms-transition:box-shadow .3s ease;transition:box-shadow .3s ease;-ms-user-select:none;user-select:none;color:transparent}.plyr--full-ui input[type=range]::-ms-fill-upper{background:0 0;border:0;border-radius:2.5px;height:5px;-ms-transition:box-shadow .3s ease;transition:box-shadow .3s ease;-ms-user-select:none;user-select:none}.plyr--full-ui input[type=range]::-ms-fill-lower{background:0 0;border:0;border-radius:2.5px;height:5px;-ms-transition:box-shadow .3s ease;transition:box-shadow .3s ease;-ms-user-select:none;user-select:none;background:currentColor}.plyr--full-ui input[type=range]::-ms-thumb{background:#fff;border:0;border-radius:100%;box-shadow:0 1px 1px rgba(0,0,0,.15),0 0 0 1px rgba(35,41,47,.2);height:13px;position:relative;-ms-transition:all .2s ease;transition:all .2s ease;width:13px;margin-top:0}.plyr--full-ui input[type=range]::-ms-tooltip{display:none}.plyr--full-ui input[type=range]:focus{outline:0}.plyr--full-ui input[type=range]::-moz-focus-outer{border:0}.plyr--full-ui input[type=range].plyr__tab-focus::-webkit-slider-runnable-track{box-shadow:0 0 0 5px rgba(0,179,255,.5);outline:0}.plyr--full-ui input[type=range].plyr__tab-focus::-moz-range-track{box-shadow:0 0 0 5px rgba(0,179,255,.5);outline:0}.plyr--full-ui input[type=range].plyr__tab-focus::-ms-track{box-shadow:0 0 0 5px rgba(0,179,255,.5);outline:0}.plyr__poster{background-color:#000;background-position:50% 50%;background-repeat:no-repeat;background-size:contain;height:100%;left:0;opacity:0;position:absolute;top:0;transition:opacity .2s ease;width:100%;z-index:1}.plyr--stopped.plyr__poster-enabled .plyr__poster{opacity:1}.plyr__time{font-size:14px}.plyr__time+.plyr__time::before{content:'\\2044';margin-right:10px}@media (max-width:767px){.plyr__time+.plyr__time{display:none}}.plyr__tooltip{background:rgba(255,255,255,.9);border-radius:3px;bottom:100%;box-shadow:0 1px 2px rgba(0,0,0,.15);color:#4a5764;font-size:14px;font-weight:500;left:50%;line-height:1.3;margin-bottom:10px;opacity:0;padding:5px 7.5px;pointer-events:none;position:absolute;transform:translate(-50%,10px) scale(.8);transform-origin:50% 100%;transition:transform .2s .1s ease,opacity .2s .1s ease;white-space:nowrap;z-index:2}.plyr__tooltip::before{border-left:4px solid transparent;border-right:4px solid transparent;border-top:4px solid rgba(255,255,255,.9);bottom:-4px;content:'';height:0;left:50%;position:absolute;transform:translateX(-50%);width:0;z-index:2}.plyr .plyr__control.plyr__tab-focus .plyr__tooltip,.plyr .plyr__control:hover .plyr__tooltip,.plyr__tooltip--visible{opacity:1;transform:translate(-50%,0) scale(1)}.plyr .plyr__control:hover .plyr__tooltip{z-index:3}.plyr__controls>.plyr__control:first-child .plyr__tooltip,.plyr__controls>.plyr__control:first-child+.plyr__control .plyr__tooltip{left:0;transform:translate(0,10px) scale(.8);transform-origin:0 100%}.plyr__controls>.plyr__control:first-child .plyr__tooltip::before,.plyr__controls>.plyr__control:first-child+.plyr__control .plyr__tooltip::before{left:16px}.plyr__controls>.plyr__control:last-child .plyr__tooltip{left:auto;right:0;transform:translate(0,10px) scale(.8);transform-origin:100% 100%}.plyr__controls>.plyr__control:last-child .plyr__tooltip::before{left:auto;right:16px;transform:translateX(50%)}.plyr__controls>.plyr__control:first-child .plyr__tooltip--visible,.plyr__controls>.plyr__control:first-child+.plyr__control .plyr__tooltip--visible,.plyr__controls>.plyr__control:first-child+.plyr__control.plyr__tab-focus .plyr__tooltip,.plyr__controls>.plyr__control:first-child+.plyr__control:hover .plyr__tooltip,.plyr__controls>.plyr__control:first-child.plyr__tab-focus .plyr__tooltip,.plyr__controls>.plyr__control:first-child:hover .plyr__tooltip,.plyr__controls>.plyr__control:last-child .plyr__tooltip--visible,.plyr__controls>.plyr__control:last-child.plyr__tab-focus .plyr__tooltip,.plyr__controls>.plyr__control:last-child:hover .plyr__tooltip{transform:translate(0,0) scale(1)}.plyr__progress{left:6.5px;margin-right:13px;position:relative}.plyr__progress input[type=range],.plyr__progress__buffer{margin-left:-6.5px;margin-right:-6.5px;width:calc(100% + 13px)}.plyr__progress input[type=range]{position:relative;z-index:2}.plyr__progress .plyr__tooltip{font-size:14px;left:0}.plyr__progress__buffer{-webkit-appearance:none;background:0 0;border:0;border-radius:100px;height:5px;left:0;margin-top:-2.5px;padding:0;position:absolute;top:50%}.plyr__progress__buffer::-webkit-progress-bar{background:0 0}.plyr__progress__buffer::-webkit-progress-value{background:currentColor;border-radius:100px;min-width:5px;-webkit-transition:width .2s ease;transition:width .2s ease}.plyr__progress__buffer::-moz-progress-bar{background:currentColor;border-radius:100px;min-width:5px;-moz-transition:width .2s ease;transition:width .2s ease}.plyr__progress__buffer::-ms-fill{border-radius:100px;-ms-transition:width .2s ease;transition:width .2s ease}.plyr--loading .plyr__progress__buffer{animation:plyr-progress 1s linear infinite;background-image:linear-gradient(-45deg,rgba(35,41,47,.6) 25%,transparent 25%,transparent 50%,rgba(35,41,47,.6) 50%,rgba(35,41,47,.6) 75%,transparent 75%,transparent);background-repeat:repeat-x;background-size:25px 25px;color:transparent}.plyr--video.plyr--loading .plyr__progress__buffer{background-color:rgba(255,255,255,.25)}.plyr--audio.plyr--loading .plyr__progress__buffer{background-color:rgba(193,201,209,.66)}.plyr__volume{align-items:center;display:flex;max-width:110px;min-width:80px;position:relative;width:20%}.plyr__volume input[type=range]{margin-left:5px;margin-right:5px;position:relative;z-index:2}.plyr--is-ios .plyr__volume{min-width:0;width:auto}.plyr--audio{display:block}.plyr--audio .plyr__controls{background:#fff;border-radius:inherit;color:#4a5764;padding:10px}.plyr--audio .plyr__control.plyr__tab-focus,.plyr--audio .plyr__control:hover,.plyr--audio .plyr__control[aria-expanded=true]{background:#00b3ff;color:#fff}.plyr--full-ui.plyr--audio input[type=range]::-webkit-slider-runnable-track{background-color:rgba(193,201,209,.66)}.plyr--full-ui.plyr--audio input[type=range]::-moz-range-track{background-color:rgba(193,201,209,.66)}.plyr--full-ui.plyr--audio input[type=range]::-ms-track{background-color:rgba(193,201,209,.66)}.plyr--full-ui.plyr--audio input[type=range]:active::-webkit-slider-thumb{box-shadow:0 1px 1px rgba(0,0,0,.15),0 0 0 1px rgba(35,41,47,.2),0 0 0 3px rgba(0,0,0,.1)}.plyr--full-ui.plyr--audio input[type=range]:active::-moz-range-thumb{box-shadow:0 1px 1px rgba(0,0,0,.15),0 0 0 1px rgba(35,41,47,.2),0 0 0 3px rgba(0,0,0,.1)}.plyr--full-ui.plyr--audio input[type=range]:active::-ms-thumb{box-shadow:0 1px 1px rgba(0,0,0,.15),0 0 0 1px rgba(35,41,47,.2),0 0 0 3px rgba(0,0,0,.1)}.plyr--audio .plyr__progress__buffer{color:rgba(193,201,209,.66)}.plyr--video{background:#000;overflow:hidden}.plyr--video.plyr--menu-open{overflow:visible}.plyr__video-wrapper{background:#000;height:100%;margin:auto;overflow:hidden;width:100%}.plyr__video-embed,.plyr__video-wrapper--fixed-ratio{height:0;padding-bottom:56.25%}.plyr__video-embed iframe,.plyr__video-wrapper--fixed-ratio video{border:0;left:0;position:absolute;top:0}.plyr--full-ui .plyr__video-embed>.plyr__video-embed__container{padding-bottom:240%;position:relative;transform:translateY(-38.28125%)}.plyr--video .plyr__controls{background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,.7));border-bottom-left-radius:inherit;border-bottom-right-radius:inherit;bottom:0;color:#fff;left:0;padding:20px 5px 5px;position:absolute;right:0;transition:opacity .4s ease-in-out,transform .4s ease-in-out;z-index:3}@media (min-width:480px){.plyr--video .plyr__controls{padding:35px 10px 10px}}.plyr--video.plyr--hide-controls .plyr__controls{opacity:0;pointer-events:none;transform:translateY(100%)}.plyr--video .plyr__control.plyr__tab-focus,.plyr--video .plyr__control:hover,.plyr--video .plyr__control[aria-expanded=true]{background:#00b3ff;color:#fff}.plyr__control--overlaid{background:rgba(0,179,255,.8);border:0;border-radius:100%;color:#fff;display:none;left:50%;padding:15px;position:absolute;top:50%;transform:translate(-50%,-50%);z-index:2}.plyr__control--overlaid svg{left:2px;position:relative}.plyr__control--overlaid:focus,.plyr__control--overlaid:hover{background:#00b3ff}.plyr--playing .plyr__control--overlaid{opacity:0;visibility:hidden}.plyr--full-ui.plyr--video .plyr__control--overlaid{display:block}.plyr--full-ui.plyr--video input[type=range]::-webkit-slider-runnable-track{background-color:rgba(255,255,255,.25)}.plyr--full-ui.plyr--video input[type=range]::-moz-range-track{background-color:rgba(255,255,255,.25)}.plyr--full-ui.plyr--video input[type=range]::-ms-track{background-color:rgba(255,255,255,.25)}.plyr--full-ui.plyr--video input[type=range]:active::-webkit-slider-thumb{box-shadow:0 1px 1px rgba(0,0,0,.15),0 0 0 1px rgba(35,41,47,.2),0 0 0 3px rgba(255,255,255,.5)}.plyr--full-ui.plyr--video input[type=range]:active::-moz-range-thumb{box-shadow:0 1px 1px rgba(0,0,0,.15),0 0 0 1px rgba(35,41,47,.2),0 0 0 3px rgba(255,255,255,.5)}.plyr--full-ui.plyr--video input[type=range]:active::-ms-thumb{box-shadow:0 1px 1px rgba(0,0,0,.15),0 0 0 1px rgba(35,41,47,.2),0 0 0 3px rgba(255,255,255,.5)}.plyr--video .plyr__progress__buffer{color:rgba(255,255,255,.25)}.plyr:-webkit-full-screen{background:#000;border-radius:0!important;height:100%;margin:0;width:100%}.plyr:-ms-fullscreen{background:#000;border-radius:0!important;height:100%;margin:0;width:100%}.plyr:fullscreen{background:#000;border-radius:0!important;height:100%;margin:0;width:100%}.plyr:-webkit-full-screen video{height:100%}.plyr:-ms-fullscreen video{height:100%}.plyr:fullscreen video{height:100%}.plyr:-webkit-full-screen .plyr__video-wrapper{height:100%;position:static}.plyr:-ms-fullscreen .plyr__video-wrapper{height:100%;position:static}.plyr:fullscreen .plyr__video-wrapper{height:100%;position:static}.plyr:-webkit-full-screen.plyr--vimeo .plyr__video-wrapper{height:0;position:relative;top:50%;transform:translateY(-50%)}.plyr:-ms-fullscreen.plyr--vimeo .plyr__video-wrapper{height:0;position:relative;top:50%;transform:translateY(-50%)}.plyr:fullscreen.plyr--vimeo .plyr__video-wrapper{height:0;position:relative;top:50%;transform:translateY(-50%)}.plyr:-webkit-full-screen .plyr__control .icon--exit-fullscreen{display:block}.plyr:-ms-fullscreen .plyr__control .icon--exit-fullscreen{display:block}.plyr:fullscreen .plyr__control .icon--exit-fullscreen{display:block}.plyr:-webkit-full-screen .plyr__control .icon--exit-fullscreen+svg{display:none}.plyr:-ms-fullscreen .plyr__control .icon--exit-fullscreen+svg{display:none}.plyr:fullscreen .plyr__control .icon--exit-fullscreen+svg{display:none}.plyr:-webkit-full-screen.plyr--hide-controls{cursor:none}.plyr:-ms-fullscreen.plyr--hide-controls{cursor:none}.plyr:fullscreen.plyr--hide-controls{cursor:none}@media (min-width:1024px){.plyr:-webkit-full-screen .plyr__captions{font-size:21px}.plyr:-ms-fullscreen .plyr__captions{font-size:21px}.plyr:fullscreen .plyr__captions{font-size:21px}}.plyr:-webkit-full-screen{background:#000;border-radius:0!important;height:100%;margin:0;width:100%}.plyr:-webkit-full-screen video{height:100%}.plyr:-webkit-full-screen .plyr__video-wrapper{height:100%;position:static}.plyr:-webkit-full-screen.plyr--vimeo .plyr__video-wrapper{height:0;position:relative;top:50%;transform:translateY(-50%)}.plyr:-webkit-full-screen .plyr__control .icon--exit-fullscreen{display:block}.plyr:-webkit-full-screen .plyr__control .icon--exit-fullscreen+svg{display:none}.plyr:-webkit-full-screen.plyr--hide-controls{cursor:none}@media (min-width:1024px){.plyr:-webkit-full-screen .plyr__captions{font-size:21px}}.plyr:-moz-full-screen{background:#000;border-radius:0!important;height:100%;margin:0;width:100%}.plyr:-moz-full-screen video{height:100%}.plyr:-moz-full-screen .plyr__video-wrapper{height:100%;position:static}.plyr:-moz-full-screen.plyr--vimeo .plyr__video-wrapper{height:0;position:relative;top:50%;transform:translateY(-50%)}.plyr:-moz-full-screen .plyr__control .icon--exit-fullscreen{display:block}.plyr:-moz-full-screen .plyr__control .icon--exit-fullscreen+svg{display:none}.plyr:-moz-full-screen.plyr--hide-controls{cursor:none}@media (min-width:1024px){.plyr:-moz-full-screen .plyr__captions{font-size:21px}}.plyr:-ms-fullscreen{background:#000;border-radius:0!important;height:100%;margin:0;width:100%}.plyr:-ms-fullscreen video{height:100%}.plyr:-ms-fullscreen .plyr__video-wrapper{height:100%;position:static}.plyr:-ms-fullscreen.plyr--vimeo .plyr__video-wrapper{height:0;position:relative;top:50%;transform:translateY(-50%)}.plyr:-ms-fullscreen .plyr__control .icon--exit-fullscreen{display:block}.plyr:-ms-fullscreen .plyr__control .icon--exit-fullscreen+svg{display:none}.plyr:-ms-fullscreen.plyr--hide-controls{cursor:none}@media (min-width:1024px){.plyr:-ms-fullscreen .plyr__captions{font-size:21px}}.plyr--fullscreen-fallback{background:#000;border-radius:0!important;height:100%;margin:0;width:100%;bottom:0;display:block;left:0;position:fixed;right:0;top:0;z-index:10000000}.plyr--fullscreen-fallback video{height:100%}.plyr--fullscreen-fallback .plyr__video-wrapper{height:100%;position:static}.plyr--fullscreen-fallback.plyr--vimeo .plyr__video-wrapper{height:0;position:relative;top:50%;transform:translateY(-50%)}.plyr--fullscreen-fallback .plyr__control .icon--exit-fullscreen{display:block}.plyr--fullscreen-fallback .plyr__control .icon--exit-fullscreen+svg{display:none}.plyr--fullscreen-fallback.plyr--hide-controls{cursor:none}@media (min-width:1024px){.plyr--fullscreen-fallback .plyr__captions{font-size:21px}}.plyr__ads{border-radius:inherit;bottom:0;cursor:pointer;left:0;overflow:hidden;position:absolute;right:0;top:0;z-index:-1}.plyr__ads>div,.plyr__ads>div iframe{height:100%;position:absolute;width:100%}.plyr__ads::after{background:rgba(35,41,47,.8);border-radius:2px;bottom:10px;color:#fff;content:attr(data-badge-text);font-size:11px;padding:2px 6px;pointer-events:none;position:absolute;right:10px;z-index:3}.plyr__ads::after:empty{display:none}.plyr__cues{background:currentColor;display:block;height:5px;left:0;margin:-2.5px 0 0;opacity:.8;position:absolute;top:50%;width:3px;z-index:3}.plyr__preview-thumb{background-color:rgba(255,255,255,.9);border-radius:3px;bottom:100%;box-shadow:0 1px 2px rgba(0,0,0,.15);margin-bottom:10px;opacity:0;padding:3px;pointer-events:none;position:absolute;transform:translate(0,10px) scale(.8);transform-origin:50% 100%;transition:transform .2s .1s ease,opacity .2s .1s ease;z-index:2}.plyr__preview-thumb--is-shown{opacity:1;transform:translate(0,0) scale(1)}.plyr__preview-thumb::before{border-left:4px solid transparent;border-right:4px solid transparent;border-top:4px solid rgba(255,255,255,.9);bottom:-4px;content:'';height:0;left:50%;position:absolute;transform:translateX(-50%);width:0;z-index:2}.plyr__preview-thumb__image-container{background:#c1c9d1;border-radius:2px;overflow:hidden;position:relative;z-index:0}.plyr__preview-thumb__image-container img{height:100%;left:0;max-height:none;max-width:none;position:absolute;top:0;width:100%}.plyr__preview-thumb__time-container{bottom:6px;left:0;position:absolute;right:0;white-space:nowrap;z-index:3}.plyr__preview-thumb__time-container span{background-color:rgba(0,0,0,.55);border-radius:2px;color:#fff;font-size:14px;padding:3px 6px}.plyr__preview-scrubbing{bottom:0;filter:blur(1px);height:100%;left:0;margin:auto;opacity:0;overflow:hidden;position:absolute;right:0;top:0;transition:opacity .3s ease;width:100%;z-index:1}.plyr__preview-scrubbing--is-shown{opacity:1}.plyr__preview-scrubbing img{height:100%;left:0;max-height:none;max-width:none;-o-object-fit:contain;object-fit:contain;position:absolute;top:0;width:100%}.plyr--no-transition{transition:none!important}.plyr__sr-only{clip:rect(1px,1px,1px,1px);overflow:hidden;border:0!important;height:1px!important;padding:0!important;position:absolute!important;width:1px!important}.plyr [hidden]{display:none!important}", map: undefined, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__ = undefined;
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__ = normalizeComponent(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    createInjector,
    undefined,
    undefined
  );

__vue_component__.install = (Vue, options = {}) => {
  if (options.plyr) {
    __vue_component__.props.options.default = () => { return { ...options.plyr } };
  }
  if (options.emit) {
    __vue_component__.props.emit.default = () => { return [...options.emit] };
  }
  Vue.component(__vue_component__.name, __vue_component__);
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(__vue_component__);
}

export default __vue_component__;
