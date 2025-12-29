const app = Vue.createApp({
  data() {
    return {
      expiredItems: [
        "Food",
        "Syrup",
        "Powder",
        "Beans",
        
      ]
    }
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