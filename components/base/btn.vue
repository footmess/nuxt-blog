<template>
  <button
    class="base-button"
    :class="[{ block }, { disable }, { plain }, size]"
    type="button"
    @click="clickEvent"
  >
    <span> <slot></slot></span>
  </button>
</template>
<script>
export default {
  name: 'BaseButton',
  props: {
    // 小尺寸、大尺寸、
    size: {
      type: String,
      validator(value) {
        // 这个值必须匹配下列字符串中的一个
        return ['small', 'big'].includes(value)
      },
    },
    // 是否为朴素按钮
    plain: {
      type: Boolean,
      default: false,
    },
    // 是否为block
    block: {
      type: Boolean,
      default: false,
    },
    // 是否禁用
    disable: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    /**
     * 点击事件，e为事件对象
     */
    clickEvent(e) {
      if (!this.disable) {
        this.$emit('click', e)
      }
    },
  },
}
</script>
<style lang="scss">
@import '~@/styles/variables';
.base-button {
  padding: 0 20px;
  height: 30px;
  border: none;
  font-size: 18px;
  cursor: pointer;
  border-radius: 100px;
  background: $normal;
  color: rgba(255, 255, 255, 1);
  box-sizing: border-box;
  outline: none;
}
.base-button > span {
  line-height: 1;
}
.base-button.block {
  height: 44px;
  width: 100%;
  font-size: 18px;
}

.base-button.plain {
  border: 1px solid rgba(255, 255, 255, 1);
  background: none;
}
.base-button.small {
  width: 70px;
  height: 24px;
  border-radius: 100px;
  font-size: 14px;
}
.base-button.big {
  width: 300px;
  height: 44px;
  border-radius: 100px;
}
.base-button:hover {
  background: $hover;
  border: none;
}
.base-button:active {
  background: $active;
}
.base-button.disable {
  color: rgba(255, 255, 255, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.6);
  background: none;
  cursor: not-allowed;
}
</style>
