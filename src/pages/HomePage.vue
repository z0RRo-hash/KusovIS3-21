<template>
  <main>
    <!-- Секция 1 -->
    <section class="sec1">
      <img src="@/assets/images/back1.png" alt="background" class="imgsec1" />
      <div class="textsec1">
        <h1>ЮРИДИЧЕСКАЯ КОМПАНИЯ</h1>
        <h1>“КУРДИ ЮР”</h1>
        <p>
          Широкий спектр юридических услуг, как организациям<br />
          и индивидуальным предпринимателям, так и населению.
        </p>
      </div>
    </section>

    <!-- Секция 2 -->
    <section class="sec2">
      <div class="textsec2">
        <h1>ДОБРО ПОЖАЛОВАТЬ</h1>
        <p>
          Уважаемые посетители официального сайта юридической компании «КУРДИЮР», рады приветствовать Вас.<br /><br />
          На сайте Вы сможете ознакомиться с направлениями нашей работы в сфере юридических услуг, узнать об услугах и
          ценах, прочитать отзывы реальных людей, получить полезную и актуальную информацию в области права.<br /><br />
          Мы работаем уже более 16 лет на рынке юридических услуг в Калуге. Имеем огромный опыт с физическими лицами,
          бизнесменами и государственными органами. Будем рады помочь разрешить Ваши проблемы и направить в нужное
          русло.
        </p>
      </div>
      <img src="@/assets/images/back2.png" alt="background" class="imgsec2" />
    </section>

    <!-- Секция 3 -->
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
export default {};
</script>

<style scoped>

html, body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 100%;
  overflow-x: hidden; /* Убираем горизонтальную прокрутку */
}

.sec1 {
  position: relative;
  width: 100%;
  height: 500px;
}

.imgsec1 {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.textsec1 {
  position: absolute;
  top: 50%;
  left: 5%;
  transform: translateY(-50%);
  color: white;
  text-align: left;
  z-index: 1;
  width: 80%;
}

.textsec1 h1 {
  font-size: 40px;
  margin: 0;
  line-height: 1.2;
}

.textsec1 p {
  font-size: 18px;
  color: #949494;
  margin-top: 10px;
}

.sec2 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4% 10%;
  background-color: #0E1014;
  font-family: Arial, Helvetica, sans-serif;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
}

.textsec2 {
  color: white;
  width: 50%;
  max-width: 600px;
  text-align: left;
}

.textsec2 h1 {
  font-size: 32px;
  margin-bottom: 15px;
}

.textsec2 p {
  font-size: 16px;
  color: #949494;
  line-height: 1.6;
}

.imgsec2 {
  width: 40%;
  height: auto;
  border-radius: 10px;
}

.sec3 {
  position: relative;
  padding: 4% 10%;
  background-color: #0E1014;
  color: white;
  text-align: center;
  border-top: 1px solid white;
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
  outline: none;
  transition: border-color 0.3s ease;
}

.inputsec3:focus {
  border-color: #007BFF;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}

.btnsec3 {
  padding: 12px 20px;
  font-size: 16px;
  background-color: #E0A66E;
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 200px;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.btnsec3:hover {
  background-color: #856140;
  transform: scale(1.05);
}
</style>