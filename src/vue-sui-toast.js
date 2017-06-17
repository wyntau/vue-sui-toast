import ToastDefine from './toast.vue';

export default function install(Vue){
  const ToastComponent = Vue.extend(ToastDefine);

  Vue.prototype.$toast = function(msg, duration = 2000, extraClass = ''){
    const propsData = { msg, extraClass };

    let instance = new ToastComponent({ propsData });

    let mount = document.createElement('div');
    mount.id = 'vue-sui-toast-' + Date.now();
    document.body.appendChild(mount);

    instance.$mount(mount);
    instance.activate();

    setTimeout(() => {
      instance.deactivate();
    }, duration);
  }
}

if(typeof window !== 'undefined' && window.Vue){
  window.Vue.use(install);
}
