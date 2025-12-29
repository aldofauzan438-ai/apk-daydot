const { createApp } = Vue;

createApp({
  data() {
    return {
      templates: JSON.parse(localStorage.getItem("templates")) || [
        "Daydot Perhari",
        "Template Perminggu",
        "Template Harian All Syrup & Food"
      ],
      expired: JSON.parse(localStorage.getItem("expired")) || [
        "Food",
        "Syrup",
        "Powder",
        "Beans"
      ]
    };
  },

  methods: {
    // NAVIGASI
    go(page) {
      window.location.href = page;
    },

    // ===== TEMPLATE =====
    editTemplate(index) {
      const newName = prompt("Edit nama template", this.templates[index]);
      if (newName) {
        this.templates[index] = newName;
        this.saveTemplates();
      }
    },

    deleteTemplate(index) {
      if (confirm("Hapus template ini?")) {
        this.templates.splice(index, 1);
        this.saveTemplates();
      }
    },

    saveTemplates() {
      localStorage.setItem("templates", JSON.stringify(this.templates));
    },

    // ===== EXPIRED =====
    editExpired(index) {
      const newName = prompt("Edit nama expired item", this.expired[index]);
      if (newName) {
        this.expired[index] = newName;
        this.saveExpired();
      }
    },

    deleteExpired(index) {
      if (confirm("Hapus item ini?")) {
        this.expired.splice(index, 1);
        this.saveExpired();
      }
    },

    saveExpired() {
      localStorage.setItem("expired", JSON.stringify(this.expired));
    }
  }
}).mount("#app");
