<template>
  <SpinnerIcon/>
</template>

<script>
  import SpinnerIcon from './icons/Spinner.vue';
  export default {
      name: 'Loader',
      components: {
        SpinnerIcon,
    },
  }
</script>

<style  lang="scss" scoped>
  @keyframes rotation {
    from { transform: rotate(0); }
    to { transform: rotate(360deg); }
  }

  svg {
    display: block;
    margin: 0 auto 25px;
    width: 100px;
    animation: rotation 2s infinite;
  }
</style>
