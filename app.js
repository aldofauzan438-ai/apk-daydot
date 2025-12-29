const { createApp } = Vue;

createApp({
  data() {
    return {
      items: [
        "Food",
        "Syrup",
        "Powder",
        "Beans",
        
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