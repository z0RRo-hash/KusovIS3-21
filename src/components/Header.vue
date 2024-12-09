<template>
  <header>
    <a href="/">
      <img src="@/assets/images/logo.png" alt="logo" id="logo" />
    </a>
    <nav>
      <router-link to="/uslugi" class="hedbut">Услуги</router-link>
      <router-link to="/about" class="hedbut">Корзина</router-link>
      <router-link to="/price" class="hedbut">О нас</router-link>
    </nav>
    <div class="phone">
      <img src="@/assets/images/phone.png" alt="phone" />
      <span>+7 (999)-359-93-43</span>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  background-color: #0E1014;
  display: flex;
  align-items: center;
  padding: 1rem 20px;
  border-bottom: 1px solid white;
}

header img#logo {
  height: 50px;
  width: auto;
  margin-right: 20px;
  margin-left: 70px;
}

.hedbut {
  text-decoration: none;
  color: white;
  font-size: 1.2rem;
  margin-right: 15px;
}

.hedbut:hover {
  color: aquamarine;
}

.phone {
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: 70px;
  color: white;
}

.phone span {
  font-size: 0.9rem;
  margin-left: 10px;
}

.phone img {
  height: 20px;
  width: auto;
}
</style>