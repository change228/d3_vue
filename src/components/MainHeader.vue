<template>
  <div class="header">
    <a class="logo">
      <img src="../assets/logo_30x30.png" alt="go to home page">
      <strong>d3Vue</strong>
    </a>
  </div>
</template>
<style lang="scss" scoped="" type="text/css">
.header {
  position: fixed;
  z-index: 999;
  left: 0;
  top: 0;
  display: flex;
  height: 60px;
  width: 100%;
  padding: 0 50px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  background-color: rgba(255, 255, 255, 0.3);
  align-items: center;
  .logo {
    display: flex;
    align-items: center;
    img {
      margin-right: 15px;
    }
    strong {
      font-family: "Microsoft Yehei";
      font-size: 20px;
    }
  }
}
</style>
