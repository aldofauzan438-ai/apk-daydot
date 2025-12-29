const { createApp } = Vue;

createApp({
  data() {
    return {
      buatBaru: 0,
      template: 1,
      expiredItems: [
        "Food",
        "Syrup",
        "Powder",
        "Beans",
        "Inv Adjustment",
        "Return Order",
        "HQ Order",
        "Records"
      ]
    };
  },
  methods: {
    goTo(page) {
      window.location.href = page;
    }
  }
}).mount('#app');
