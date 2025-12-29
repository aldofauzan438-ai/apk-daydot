const { createApp } = Vue;

createApp({
  data() {
    return {
      templates: JSON.parse(localStorage.getItem('templates')) || [],
      expired: JSON.parse(localStorage.getItem('expired')) || [],
      newTemplate: "",
      newExpired: ""
    };
  },

  watch: {
    templates: {
      handler(val) {
        localStorage.setItem('templates', JSON.stringify(val));
      },
      deep: true
    },
    expired: {
      handler(val) {
        localStorage.setItem('expired', JSON.stringify(val));
      },
      deep: true
    }
  },

  methods: {
    go(page) {
      window.location.href = page;
    },

    // ===== TEMPLATE =====
    addTemplate() {
      if (!this.newTemplate.trim()) return;
      this.templates.push({
        id: Date.now(),
        name: this.newTemplate
      });
      this.newTemplate = "";
    },

    editTemplate(i) {
      const name = prompt("Edit nama template", this.templates[i].name);
      if (name) this.templates[i].name = name;
    },

    deleteTemplate(i) {
      if (confirm("Hapus template?")) {
        this.templates.splice(i, 1);
      }
    },

    // ===== EXPIRED =====
    addExpired() {
      if (!this.newExpired.trim()) return;
      this.expired.push({
        id: Date.now(),
        name: this.newExpired
      });
      this.newExpired = "";
    },

    editExpired(i) {
      const name = prompt("Edit nama expired item", this.expired[i].name);
      if (name) this.expired[i].name = name;
    },

    deleteExpired(i) {
      if (confirm("Hapus expired item?")) {
        this.expired.splice(i, 1);
      }
    }
  }
}).mount("#app");
