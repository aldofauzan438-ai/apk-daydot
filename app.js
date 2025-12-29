const { createApp } = Vue;

createApp({
  data() {
    return {
      newTemplate: "",
      templates: [],
      expired: []
    };
  },

  mounted() {
    this.templates = JSON.parse(localStorage.getItem("templates")) || [];
    this.expired = JSON.parse(localStorage.getItem("expired")) || [];
  },

  methods: {
    /* ======================
       NAVIGASI
    ====================== */
    go(page) {
      window.location.href = page;
    },

    /* ======================
       TEMPLATE
    ====================== */
    addTemplate() {
      if (!this.newTemplate.trim()) return;

      this.templates.push({
        id: Date.now(),
        name: this.newTemplate
      });

      this.newTemplate = "";
      this.saveTemplates();
    },

    editTemplate(index) {
      const name = prompt(
        "Edit nama template",
        this.templates[index].name
      );

      if (name !== null && name.trim() !== "") {
        this.templates[index].name = name;
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
      localStorage.setItem(
        "templates",
        JSON.stringify(this.templates)
      );
    },

    /* ======================
       EXPIRED ITEM
    ====================== */
    editExpired(index) {
      const name = prompt(
        "Edit nama expired item",
        this.expired[index].name
      );

      if (name !== null && name.trim() !== "") {
        this.expired[index].name = name;
        this.saveExpired();
      }
    },

    deleteExpired(index) {
      if (confirm("Hapus expired item ini?")) {
        this.expired.splice(index, 1);
        this.saveExpired();
      }
    },

    saveExpired() {
      localStorage.setItem(
        "expired",
        JSON.stringify(this.expired)
      );
    }
  }
}).mount("#app");
