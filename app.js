const { createApp } = Vue

createApp({
  data() {
    return {
      newTemplate: '',
      newExpired: '',
      templates: JSON.parse(localStorage.getItem('templates')) || [],
      expired: JSON.parse(localStorage.getItem('expired')) || []
    }
  },

  methods: {
    go(page) {
      window.location.href = page
    },

    /* TEMPLATE */
    addTemplate() {
      if (!this.newTemplate) return
      this.templates.push({
        id: Date.now(),
        name: this.newTemplate
      })
      this.newTemplate = ''
      this.save()
    },

    editTemplate(i) {
      const name = prompt('Edit nama template', this.templates[i].name)
      if (name) {
        this.templates[i].name = name
        this.save()
      }
    },

    deleteTemplate(i) {
      if (confirm('Hapus template?')) {
        this.templates.splice(i, 1)
        this.save()
      }
    },

    /* EXPIRED */
    addExpired() {
      if (!this.newExpired) return
      this.expired.push({
        id: Date.now(),
        name: this.newExpired
      })
      this.newExpired = ''
      this.save()
    },

    editExpired(i) {
      const name = prompt('Edit nama expired item', this.expired[i].name)
      if (name) {
        this.expired[i].name = name
        this.save()
      }
    },

    deleteExpired(i) {
      if (confirm('Hapus expired item?')) {
        this.expired.splice(i, 1)
        this.save()
      }
    },

    openExpired(item) {
      // arahkan ke halaman detail
      localStorage.setItem('currentExpired', JSON.stringify(item))
      window.location.href = 'expired-detail.html'
    },

    save() {
      localStorage.setItem('templates', JSON.stringify(this.templates))
      localStorage.setItem('expired', JSON.stringify(this.expired))
    }
  }
}).mount('#app')
