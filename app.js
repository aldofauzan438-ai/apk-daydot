const { createApp } = Vue;

createApp({
  data() {
    return {
      templates: JSON.parse(localStorage.getItem("templates")) || [
        { id: Date.now(), name: "Daydot Perhari" },
        { id: Date.now() + 1, name: "Template Perminggu" },
      ],
      expired: JSON.parse(localStorage.getItem("expired")) || [
        { id: Date.now() + 2, name: "Food" },
        { id: Date.now() + 3, name: "Syrup" },
        { id: Date.now() + 4, name: "Powder" },
        { id: Date.now() + 5, name: "Beans" },
      ],
    };
  },

  methods: {
    go(url) {
      window.location.href = url;
    },

    /* ========= TEMPLATE ========= */
    editTemplate(index) {
      const newName = prompt("Edit nama template:", this.templates[index].name);
      if (newName) {
        this.templates[index].name = newName;
        this.save();
      }
    },

    deleteTemplate(index) {
      if (confirm("Hapus template ini?")) {
        this.templates.splice(index, 1);
        this.save();
      }
    },

    /* ========= EXPIRED ========= */
    editExpired(index) {
      const newName = prompt(
        "Edit nama expired item:",
        this.expired[index].name
      );
      if (newName) {
        this.expired[index].name = newName;
        this.save();
      }
    },

    deleteExpired(index) {
      if (confirm("Hapus expired item ini?")) {
        this.expired.splice(index, 1);
        this.save();
      }
    },

    save() {
      localStorage.setItem("templates", JSON.stringify(this.templates));
      localStorage.setItem("expired", JSON.stringify(this.expired));
    },
  },
}).mount("#app");
