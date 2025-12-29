const { createApp } = Vue;

createApp({
  data() {
    return {
      newTemplate: "",
      newExpired: "",

      templates: JSON.parse(localStorage.getItem("templates")) || [],
      expired: JSON.parse(localStorage.getItem("expired")) || [],
    };
  },

  methods: {
    /* ================= NAVIGASI ================= */
    go(page) {
      window.location.href = page;
    },

    /* ================= TEMPLATE ================= */
    addTemplate() {
      if (!this.newTemplate.trim()) return;

      this.templates.push({
        id: Date.now(),
        name: this.newTemplate,
      });

      this.newTemplate = "";
      this.save();
    },

    editTemplate(index) {
      const name = prompt("Edit nama template", this.templates[index].name);
      if (name) {
        this.templates[index].name = name;
        this.save();
      }
    },

    deleteTemplate(index) {
      if (confirm("Hapus template ini?")) {
        this.templates.splice(index, 1);
        this.save();
      }
    },

    /* ================= EXPIRED ================= */
    addExpired() {
      if (!this.newExpired.trim()) return;

      this.expired.push({
        id: Date.now(),
        name: this.newExpired,
      });

      this.newExpired = "";
      this.save();
    },

    editExpired(index) {
      const name = prompt(
        "Edit nama expired item",
        this.expired[index].name
      );
      if (name) {
        this.expired[index].name = name;
        this.save();
      }
    },

    deleteExpired(index) {
      if (confirm("Hapus item ini?")) {
        this.expired.splice(index, 1);
        this.save();
      }
    },

    /* ================= STORAGE ================= */
    save() {
      localStorage.setItem("templates", JSON.stringify(this.templates));
      localStorage.setItem("expired", JSON.stringify(this.expired));
    },
  },
}).mount("#app");
