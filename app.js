Vue.createApp({
  data() {
    return {
      templates: JSON.parse(localStorage.getItem('templates')) || [],
      expired: JSON.parse(localStorage.getItem('expired')) || []
    }
  },
  methods: {
    go(page) {
      location.href = page
    },

    editTemplate(i) {
      const name = prompt('Edit Template', this.templates[i])
      if (name) {
        this.templates[i] = name
        localStorage.setItem('templates', JSON.stringify(this.templates))
      }
    },

    deleteTemplate(i) {
      if (confirm('Hapus template?')) {
        this.templates.splice(i,1)
        localStorage.setItem('templates', JSON.stringify(this.templates))
      }
    },

    editExpired(i) {
      const name = prompt('Edit Item', this.expired[i])
      if (name) {
        this.expired[i] = name
        localStorage.setItem('expired', JSON.stringify(this.expired))
      }
    },

    deleteExpired(i) {
      if (confirm('Hapus item?')) {
        this.expired.splice(i,1)
        localStorage.setItem('expired', JSON.stringify(this.expired))
      }
    }
  }
}).mount('#app')