<template>
  <main>
    <!-- Секция 1 -->
    <section class="sec1">
      <img src="@/assets/images/back4.png" alt="background" class="imgsec1" />
      <div class="textsec1">
        <h1>ИНФОРМАЦИЯ О НАШЕЙ КОМПАНИИ</h1>
      </div>
    </section>

    <!-- Секция 2: Юридические услуги -->
    <section class="sec2">
      <img src="@/assets/images/ablock1.png" alt="background" class="imgsec2" />
      <div class="textsec2">
        <h1>Юридические услуги</h1>
        <p>
          Для физических и юридических лиц мы предлагаем услуги опытных юристов
          по составлению исковых заявлений, договоров, жалоб, претензий, защиту
          Ваших интересов в судах. Мы оказываем юридические услуги по вопросам
          наследования, семейного права, трудовых споров, раздела имущества и
          многое другое.
        </p>
      </div>
    </section>

    <!-- Секция 2.1: Бухгалтерские услуги -->
    <section class="sec21">
      <img src="@/assets/images/ablock2.png" alt="background" class="imgsec21" />
      <div class="textsec21">
        <h1>Бухгалтерские услуги</h1>
        <p>
          Для юридических лиц и индивидуальных предпринимателей мы предлагаем
          качественные бухгалтерские услуги, а именно: восстановление и ведение
          бухгалтерского учета, подготовка и сдача бухгалтерской и налоговой
          отчетности и т.д. Работая с нами, Вы сможете сократить свои расходы,
          так как отпадет необходимость держать в штате дорогостоящего
          специалиста.
        </p>
      </div>
    </section>

    <!-- Секция 2.2: Регистрационные услуги -->
    <section class="sec22">
      <img src="@/assets/images/ablock3.png" alt="background" class="imgsec22" />
      <div class="textsec22">
        <h1>Регистрационные услуги</h1>
        <p>
          Юридическая фирма «Ропот и партнеры» оказывает широкий спектр
          комплексных услуг в области кадрового дела, с целью обеспечения
          бизнеса профессиональным ведением и оформлением кадровых документов в
          соответствии с требованиями действующего трудового законодательства.
        </p>
      </div>
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
export default {};
</script>

<style scoped>
/* Общие стили */
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
  left: 30%;
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

/* Секция 2 */
.sec2,
.sec21,
.sec22 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4% 10%;
  background-color: #0e1014;
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 0;
}

.textsec2,
.textsec21,
.textsec22 {
  color: white;
  width: 50%;
  max-width: 1000px;
  text-align: left;
}

.textsec2 h1,
.textsec21 h1,
.textsec22 h1 {
  font-size: 32px;
  margin-bottom: 15px;
}

.textsec2 p,
.textsec21 p,
.textsec22 p {
  font-size: 16px;
  color: #949494;
  line-height: 1.6;
}

.imgsec2,
.imgsec21,
.imgsec22 {
  width: 20%;
  height: auto;
  border-radius: 10px;
  margin-left: 26%;
}

@media (max-width: 768px) {
  .sec2,
  .sec21,
  .sec22 {
    flex-direction: column;
    padding: 4% 5%;
  }

  .textsec2,
  .textsec21,
  .textsec22 {
    width: 100%;
    text-align: center;
    padding: 0 5%;
  }

  .imgsec2,
  .imgsec21,
  .imgsec22 {
    width: 100%;
    margin-top: 20px;
  }
}

/* Секция записи */
.sec3 {
  position: relative;
  padding: 4% 10%;
  background-color: #0e1014;
  color: white;
  text-align: center;
  border-top: 1px solid white;
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
  border-color: #007bff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}

.btnsec3 {
  padding: 12px 20px;
  font-size: 16px;
  background-color: #e0a66e;
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
