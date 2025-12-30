const { createApp } = Vue;

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
    save() {
      localStorage.setItem('templates', JSON.stringify(this.templates));
      localStorage.setItem('expired', JSON.stringify(this.expired));
    },

    go(page) {
      window.location.href = page;
    },

    /* TEMPLATE */
    addTemplate() {
      if (!this.newTemplate.trim()) return;
      this.templates.push({
        id: Date.now(),
        name: this.newTemplate
      });
      this.newTemplate = '';
      this.save();
    },

    editTemplate(i) {
      const name = prompt('Edit nama template', this.templates[i].name);
      if (name) {
        this.templates[i].name = name;
        this.save();
      }
    },

    deleteTemplate(i) {
      if (confirm('Hapus template?')) {
        this.templates.splice(i,1);
        this.save();
      }
    },

    openTemplate(id) {
      window.location.href = `template.html?id=${id}`;
    },

    /* EXPIRED */
    addExpired() {
  if (!this.newExpired.trim()) return;
  this.expired.push({
    id: Date.now(),
    name: this.newExpired,
    date: '' // tanggal expired
  });
  this.newExpired = '';
  this.save();
},


    editExpired(i) {
      const name = prompt('Edit nama expired item', this.expired[i].name);
      if (name) {
        this.expired[i].name = name;
        this.save();
      }
    },

    deleteExpired(i) {
      if (confirm('Hapus item?')) {
        this.expired.splice(i,1);
        this.save();
      }
    },

    openExpired(id) {
      window.location.href = `expired.html?id=${id}`;
    }
  }
}).mount('#app');
