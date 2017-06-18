(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.vueSuiToast = global.vueSuiToast || {})));
}(this, (function (exports) { 'use strict';

(function(){ if(document){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" .vue-sui-toast[data-v-692f669e]{ display: block; box-sizing: border-box; -webkit-tap-highlight-color: transparent; -webkit-touch-callout: none; position: fixed; top: 50%; left: 50%; text-align: center; z-index: 11000; transform: translate3d(-50%, -50%, 0); background: rgba(0, 0, 0, 0.8); border-radius: 20px; color: white; padding: 0 16px; height: 40px; line-height: 40px; font-size: 16px; font-family: \"Helvetica Neue\", Helvetica, sans-serif; width: auto; max-width: 100%; } .vue-sui-toast.v-enter[data-v-692f669e]{ opacity: 0; transform: translate3d(-50%, -50%, 0) scale(1.185); } .vue-sui-toast.v-enter-active[data-v-692f669e]{ transition-property: transform, opacity; transition-duration: .4s; } .vue-sui-toast.v-leave-active[data-v-692f669e]{ opacity: 0; z-index: 10999; transform: translate3d(-50%, -50%, 0) scale(0.815); transition-property: transform, opacity; transition-duration: .4s; } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();



















































var ToastDefine = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{on:{"afterLeave":_vm.afterLeave}},[(_vm.shown)?_c('div',{staticClass:"vue-sui-toast",class:_vm.extraClass},[_vm._v(_vm._s(_vm.msg))]):_vm._e()])},staticRenderFns: [],_scopeId: 'data-v-692f669e',
  props: {
    msg: {
      type: String,
      required: true
    },
    extraClass: {
      type: String,
      default: ''
    }
  },
  data: function data(){
    return {
      shown: false
    }
  },
  methods: {
    activate: function activate(){
      this.shown = true;
    },
    deactivate: function deactivate(){
      this.shown = false;
    },
    afterLeave: function afterLeave(){
      this.$el.parentNode.removeChild(this.$el);
      this.$destroy();
    }
  }
};

function install(Vue){
  var ToastComponent = Vue.extend(ToastDefine);

  Vue.prototype.$toast = function(msg, duration, extraClass){
    if ( duration === void 0 ) duration = 2000;
    if ( extraClass === void 0 ) extraClass = '';

    var propsData = { msg: msg, extraClass: extraClass };

    var instance = new ToastComponent({ propsData: propsData });

    var mount = document.createElement('div');
    mount.id = 'vue-sui-toast-' + Date.now();
    document.body.appendChild(mount);

    instance.$mount(mount);
    instance.activate();

    setTimeout(function () {
      instance.deactivate();
    }, duration);
  };
}

if(typeof window !== 'undefined' && window.Vue){
  window.Vue.use(install);
}

exports['default'] = install;

Object.defineProperty(exports, '__esModule', { value: true });

})));
