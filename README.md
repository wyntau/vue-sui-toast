## vue-sui-toast

> Vue 2.x port of sui mobile toast component

### Install

```sh
vue install vue-sui-toast
```

### Usage

```js
import Vue from 'vue';
import vueSuiToast from 'vue-sui-toast';

Vue.use(vueSuiToast);

new Vue({
    el: '#container',
    methods: {
        toast(){
            this.$toast('success');
        }
    }
});
```

### API

```js
vm.$toast(msg[, duration, extraClass]);
```

- msg, the toast message, required
- duration, toast duration, default to `2000`ms
- extraClass, extrasClass added to toast, default to empty

### Thanks To

- [SUI-Mobile](https://github.com/sdc-alibaba/SUI-Mobile)

### License

MIT
