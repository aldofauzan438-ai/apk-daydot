const { createApp } = Vue

createApp({
  data() {
    return {
      templates: JSON.parse(localStorage.getItem("templates")) || [
        { id: 1, name: "Daydot Harian" },
        { id: 2, name: "Template Perminggu" }
      ],
      expired: JSON.parse(localStorage.getItem("expired")) || [
        { id: 1, name: "Food" },
        { id: 2, name: "Syrup" },
        { id: 3, name: "Powder" },
        { id: 4, name: "Beans" }
      ]
    }
  },

  methods: {
    go(page) {
      window.location.href = page
    },

    // TEMPLATE
    editTemplate(index) {
      const newName = prompt("Edit nama template", this.templates[index].name)
      if (newName) {
        this.templates[index].name = newName
        this.saveTemplates()
      }
    },

    deleteTemplate(index) {
      if (confirm("Hapus template ini?")) {
        this.templates.splice(index, 1)
        this.saveTemplates()
      }
    },

    saveTemplates() {
      localStorage.setItem("templates", JSON.stringify(this.templates))
    },

    // EXPIRED
    editExpired(index) {
      const newName = prompt("Edit nama expired item", this.expired[index].name)
      if (newName) {
        this.expired[index].name = newName
        this.saveExpired()
      }
    },

    deleteExpired(index) {
      if (confirm("Hapus item ini?")) {
        this.expired.splice(index, 1)
        this.saveExpired()
      }
    },

    saveExpired() {
      localStorage.setItem("expired", JSON.stringify(this.expired))
    }
  }
}).mount("#app")