const { createApp } = Vue;

createApp({
  data() {
    return {
      templates: JSON.parse(localStorage.getItem('templates')) || [
        'Daydot Perhari',
        'Template Perminggu',
        'Template Harian All Syrup & Food'
      ],
      expiredItems: JSON.parse(localStorage.getItem('expired')) || [
        'Food','Syrup','Powder','Beans'
      ]
    }
  },

  methods: {
    save() {
      localStorage.setItem('templates', JSON.stringify(this.templates));
      localStorage.setItem('expired', JSON.stringify(this.expiredItems));
    },

    /* NAVIGASI */
    goTemplate() {
      location.href = 'template.html';
    },
    goExpired() {
      location.href = 'expired.html';
    },
    openTemplate(name) {
      alert('Buka template: ' + name);
    },
    openExpired(name) {
      alert('Buka expired: ' + name);
    },

    /* EDIT & DELETE TEMPLATE */
    editTemplate(i) {
      const val = prompt('Edit nama template', this.templates[i]);
      if (val) {
        this.templates[i] = val;
        this.save();
      }
    },
    deleteTemplate(i) {
      if (confirm('Hapus template?')) {
        this.templates.splice(i,1);
        this.save();
      }
    },

    /* EDIT & DELETE EXPIRED */
    editExpired(i) {
      const val = prompt('Edit nama expired item', this.expiredItems[i]);
      if (val) {
        this.expiredItems[i] = val;
        this.save();
      }
    },
    deleteExpired(i) {
      if (confirm('Hapus item?')) {
        this.expiredItems.splice(i,1);
        this.save();
      }
    }
  }
}).mount('#app');