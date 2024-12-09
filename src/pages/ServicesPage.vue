<template>
  <main>
    <!-- Секция 1 -->
    <section class="sec1">
      <img src="@/assets/images/bgus.png" alt="background" class="imgsec1" />
      <div class="textsec1">
        <h1>УСЛУГИ КОТОРЫЕ МЫ ПРЕДОСТАВЛЯЕМ</h1>
      </div>
    </section>

    <!-- Секция каталога услуг слайдер -->
    <section class="sec2">
      <section class="catalog-slider">
        <button class="slider-btn left-btn" @click="prevSlide">❮</button>
        <div class="slider-wrapper" :style="sliderTransform">
          <div
            class="slider-card"
            v-for="(service, index) in services"
            :key="index"
          >
            <img :src="service.image" alt="usl" class="card-image" />
            <div class="card-content">
              <span class="status">Услуга</span>
              <h3 class="game-title">{{ service.title }}</h3>
              <button class="btnsec3" @click="addToCart(service)">Добавить в корзину</button>
            </div>
          </div>
        </div>
        <button class="slider-btn right-btn" @click="nextSlide">❯</button>
      </section>
    </section>

    <!-- Секция записи -->
    <section class="sec3">
      <div class="contentsec3">
        <div class="textsec3">
          <h1>ЗАПИШИТЕСЬ НА ЮРИДИЧЕСКУЮ КОНСУЛЬТАЦИЮ</h1>
          <p>Мы свяжемся с вами в ближайшее время.</p>
        </div>
        <form class="formsec3" action="/submit" method="POST">
          <input
            type="text"
            placeholder="Введите текст"
            class="inputsec3"
            name="name"
            required
          />
          <input
            type="email"
            placeholder="Ваш email"
            class="inputsec3"
            name="email"
            required
          />
          <button type="submit" class="btnsec3">Отправить</button>
        </form>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      services: [
        {
          title: "Юридическое сопровождение бизнеса",
          image: new URL('@/assets/images/block1.png', import.meta.url).href,
        },
        {
          title: "Арбитражные споры",
          image: new URL('@/assets/images/block2.png', import.meta.url).href,
        },
        {
          title: "Банкротство",
          image: new URL('@/assets/images/block3.png', import.meta.url).href,
        },
        {
          title: "Земельные споры",
          image: new URL('@/assets/images/block4.png', import.meta.url).href,
        },
        {
          title: "Корпоративные споры",
          image: new URL('@/assets/images/block5.png', import.meta.url).href,
        },
        {
          title: "Семейные споры",
          image: new URL('@/assets/images/block6.png', import.meta.url).href,
        },
      ],
      currentSlide: 0,
      slidesToShow: 2, // Отображать по 2 карточки за раз
      cart: [], // Корзина
    };
  },
  computed: {
    sliderTransform() {
      const cardWidth = 48; // Увеличена ширина карточки
      const offset = this.currentSlide * cardWidth;
      return {
        transform: `translateX(-${offset}%)`,
      };
    },
  },
  methods: {
    nextSlide() {
      if (this.currentSlide < this.services.length - this.slidesToShow) {
        this.currentSlide++;
      }
    },
    prevSlide() {
      if (this.currentSlide > 0) {
        this.currentSlide--;
      }
    },
    addToCart(service) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(service);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`Услуга "${service.title}" добавлена в корзину!`);
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, Helvetica, sans-serif;
}

.sec1 {
  position: relative;
  width: 100%;
  height: 300px;
}

.imgsec1 {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.textsec1 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
  z-index: 1;
  width: 80%;
}

.textsec1 h1 {
  font-size: 40px;
  margin: 0;
  line-height: 1.2;
}

.sec2 {
  background-color: #0e1014;
  padding: 30px 0;
}

.catalog-slider {
  text-align: center;
  margin: 0 auto;
  max-width: 950px; /* Расширяем контейнер для карточек */
  padding: 10px;
  color: #ffffff;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 8px;
  height: 280px; /* Уменьшение высоты слайдера */
}

.slider-wrapper {
  display: flex;
  transition: transform 0.3s ease-in-out;
  will-change: transform;
}

.slider-card {
  flex: 0 0 48%; /* Увеличена ширина карточек */
  margin: 0 10px;
  border-radius: 10px;
  overflow: hidden;
  background-color: #1a1a1a;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.card-image {
  width: 100%;
  height: 140px; /* Уменьшена высота изображения */
  object-fit: cover;
  display: block;
}

.card-content {
  padding: 10px;
  background: rgba(0, 0, 0, 0.8);
  color: #ffffff;
  text-align: center;
}

.status {
  display: inline-block;
  background-color: #007bff;
  color: #ffffff;
  padding: 3px 8px;
  border-radius: 3px;
  font-size: 12px;
  margin-bottom: 5px;
}

.game-title {
  font-size: 16px;
  margin: 5px 0 10px;
}

.slider-btn {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #007bff;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
}

.left-btn {
  left: 10px;
}

.right-btn {
  right: 10px;
}

.slider-btn:hover {
  color: #0056b3;
}

.btnsec3 {
  padding: 10px 16px; /* Немного уменьшен размер кнопки */
  font-size: 14px;
  background-color: #E0A66E;
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: auto;
  transition: background-color 0.3s ease, transform 0.2s ease;
  margin-top: 10px;
}

.btnsec3:hover {
  background-color: #856140;
  transform: scale(1.05);
}

.sec3 {
  position: relative;
  padding: 4% 10%;
  background-color: #0E1014;
  color: white;
  text-align: center;
  border-top: 1px solid white;
}

.contentsec3 {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.textsec3 h1 {
  font-size: 32px;
  margin-bottom: 20px;
}

.textsec3 p {
  font-size: 16px;
  color: #949494;
  line-height: 1.6;
  margin-bottom: 30px;
}

.formsec3 {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.inputsec3 {
  width: 300px;
  padding: 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  outline: none;
  transition: border-color 0.3s ease;
}

.inputsec3:focus {
  border-color: #007BFF;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}
</style>
