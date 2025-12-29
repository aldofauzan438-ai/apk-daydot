const { createApp } = Vue;

createApp({
  data() {
    return {
      templates: [
        "Template Harian TJ HI",
        "Template Mingguan",
        "Template Harian All Syrup & Food"
    
      ],
      expiredItems: [
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
      window.location.href = "buat-baru.html";
    },
    openTemplate(name) {
      window.location.href = `detail.html?template=${name}`;
    },
    openExpired(item) {
      window.location.href = `detail.html?item=${item}`;
    }
  }
}).mount("#app");