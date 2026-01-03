const { createApp } = Vue;

createApp({
  data() {
    return {
      newTemplate: '',
      newExpired: '',
      templates: [],
      expired: []
    };
  },

  methods: {
    /* LOAD DATA */
    loadData() {
      getAll('templates', data => this.templates = data);
      getAll('expired', data => this.expired = data);
    },

    /* TEMPLATE */
    addTemplate() {
      if (!this.newTemplate.trim()) return;

      addData('templates', {
        id: Date.now(),
        name: this.newTemplate
      }, () => {
        this.newTemplate = '';
        this.loadData();
      });
    },

    editTemplate(i) {
      const name = prompt('Edit nama template', this.templates[i].name);
      if (!name) return;

      addData('templates', {
        ...this.templates[i],
        name
      }, this.loadData);
    },

    deleteTemplate(i) {
      if (!confirm('Hapus template?')) return;

      deleteData('templates', this.templates[i].id, this.loadData);
    },

    openTemplate(id) {
      location.href = `template.html?id=${id}`;
    },

    /* EXPIRED */
    addExpired() {
      if (!this.newExpired.trim()) return;

      addData('expired', {
        id: Date.now(),
        name: this.newExpired
      }, () => {
        this.newExpired = '';
        this.loadData();
      });
    },

    editExpired(i) {
      const name = prompt('Edit nama expired item', this.expired[i].name);
      if (!name) return;

      addData('expired', {
        ...this.expired[i],
        name
      }, this.loadData);
    },

    deleteExpired(i) {
      if (!confirm('Hapus item?')) return;

      deleteData('expired', this.expired[i].id, this.loadData);
    },

    openExpired(id) {
      location.href = `expired_detail.html?id=${id}`;
    }
  },

  mounted() {
    openDB(() => {
      this.loadData();
    });
  }
}).mount('#app');
