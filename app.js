const { createApp } = Vue;

createApp({
  data() {
    return {
      templates: [],
      expiredItems: []
    };
  },

  mounted() {
    // load dari localStorage
    this.templates = JSON.parse(localStorage.getItem("templates")) || [
      { id: 1, name: "Daydot Perhari" },
      { id: 2, name: "Template Perminggu" },
      { id: 3, name: "Template Harian All Syrup & Food" }
    ];

    this.expiredItems = JSON.parse(localStorage.getItem("expiredItems")) || [
      { id: 1, name: "Food" },
      { id: 2, name: "Syrup" },
      { id: 3, name: "Powder" },
      { id: 4, name: "Beans" }
    ];
  },

  methods: {
    // ===== TEMPLATE =====
    editTemplate(item) {
      const newName = prompt("Edit nama template:", item.name);
      if (newName) {
        item.name = newName;
        this.saveTemplates();
      }
    },
    deleteTemplate(id) {
      if (confirm("Hapus template ini?")) {
        this.templates = this.templates.filter(t => t.id !== id);
        this.saveTemplates();
      }
    },
    saveTemplates() {
      localStorage.setItem("templates", JSON.stringify(this.templates));
    },

    // ===== EXPIRED =====
    editExpired(item) {
      const newName = prompt("Edit nama expired item:", item.name);
      if (newName) {
        item.name = newName;
        this.saveExpired();
      }
    },
    deleteExpired(id) {
      if (confirm("Hapus item ini?")) {
        this.expiredItems = this.expiredItems.filter(e => e.id !== id);
        this.saveExpired();
      }
    },
    saveExpired() {
      localStorage.setItem("expiredItems", JSON.stringify(this.expiredItems));
    },

    // ===== NAVIGASI =====
    goDetail(type, name) {
      window.location.href = `detail.html?type=${type}&name=${encodeURIComponent(name)}`;
    }
  }
}).mount("#app");