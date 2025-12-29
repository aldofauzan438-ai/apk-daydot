const { createApp } = Vue;

createApp({
  data() {
    return {
      items: [
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
    goTemplate() {
      window.location.href = "template.html";
    },
    goExpired() {
      window.location.href = "detail.html";
    }
  }
}).mount("#app");