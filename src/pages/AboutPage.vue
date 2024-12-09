<template>
  <main class="cart-page">
    <h1>Корзина</h1>
    <div class="cart-container">
      <!-- Список товаров в корзине -->
      <div class="cart-items">
        <div
          v-for="(item, index) in cart"
          :key="index"
          class="cart-item"
        >
          <h3>{{ item.title }}</h3>
          <p>{{ item.description || "Описание услуги отсутствует." }}</p>
          <button @click="removeFromCart(index)" class="remove-btn">
            Удалить
          </button>
        </div>
      </div>

      <!-- Условие заказа -->
      <div class="cart-summary">
        <h2>Условие заказа</h2>
        <p>Итого: {{ cart.length }} услуги</p>
        <p>От {{ totalPrice }} руб</p>
        <button class="checkout-btn" @click="checkout">Оформить заявку</button>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      cart: [],
    };
  },
  computed: {
    totalPrice() {
      return this.cart.reduce((sum, item) => sum + (item.price || 0), 0);
    },
  },
  methods: {
    removeFromCart(index) {
      this.cart.splice(index, 1);
    },
    checkout() {
      alert("Заявка оформлена!");
      this.cart = [];
    },
  },
  mounted() {
    if (localStorage.getItem('cart')) {
      this.cart = JSON.parse(localStorage.getItem('cart'));
    }
  },
  watch: {
    cart: {
      handler(newCart) {
        localStorage.setItem('cart', JSON.stringify(newCart));
      },
      deep: true,
    },
  },
};
</script>

<style scoped>
.cart-page {
  padding: 20px;
  color: #fff;
  background-color: #0e1014;
  min-height: calc(100vh - 60px); /* Убедиться, что футер остаётся внизу */
  box-sizing: border-box;
}

.cart-container {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}

.cart-items,
.cart-summary {
  background-color: #242A33;
  padding: 20px;
  border-radius: 10px;
}

.cart-items {
  flex: 2;
}

.cart-item {
  background-color: #242A33;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 8px;
}

.cart-item h3 {
  margin-bottom: 10px;
  font-size: 18px;
}

.remove-btn {
  background-color: #e74c3c;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
}

.remove-btn:hover {
  background-color: #c0392b;
}

.cart-summary {
  flex: 1;
  text-align: center;
}

.cart-summary h2 {
  margin-bottom: 20px;
}

.checkout-btn {
  background-color: #007bff;
  color: #fff;
  padding: 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.checkout-btn:hover {
  background-color: #0056b3;
}
</style>
