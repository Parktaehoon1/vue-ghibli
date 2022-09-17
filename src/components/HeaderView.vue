<template>
  <header class="header">
    <div class="logo-wrap">
    <a href="https://www.ghibli.jp/" target="_blank"></a>
    </div>
    <h2>Studio Ghibli</h2>
  </header>
</template>

<script>
export default {

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
    .header{
      position: relative;
      display: flex;
    }
    .logo-wrap{
      position: relative;
      display: block;
      width: 100px;
      height: 70px;
      margin-left: 30px;
    }
    
    h2{
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        height: 70px;
        line-height: 70px;
        color: #e9e9e9;
        display: block;
        text-align: center;
        font-size: 30px;
        font-weight: 800;
        font-family: 'Roboto';
        text-transform: uppercase;
        background: transparent;
        z-index: 9;
    }
    a{
      position: relative;
      display: block;
      width: 100%;
      height: 100%;
      background: url('@/assets/Studio_Ghibli.webp') no-repeat center;
      background-size: contain;
      z-index: 99;
    }
</style>