<template>
  <div class="check-button" :class="{check: isChecked}">
  </div>
</template>

<script>
export default {
  name: 'CheckButton',
  props: {
    isChecked: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
  .check-button{
    width: 25px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid #0558f3;
  }

  .check-button img{
    width: 100%;
    height: 100%;
  }

  .check{
    border-color: #dce4f3;
    background-color: #dce4f3;
    background-image: url('../../../assets/image/common/tick.png');
    background-size: contain;
  }
</style>
