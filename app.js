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
    /* =====================
       LOAD DATA (FIX BOCAH)
    ===================== */
    loadData() {
      // TEMPLATE NORMAL
      getAll('templates', data => {
        this.templates = data || [];
      });

      // EXPIRED DASHBOARD
      // ⛔ HANYA yang TIDAK punya parentId
        getAll('expired', data => {
      this.expired = (data || []).filter(x =>
        !('days' in x) && !('openedAt' in x)
      );
    });
    },

    /* =====================
       TEMPLATE
    ===================== */
    addTemplate() {
      if (!this.newTemplate.trim()) return;

      addData('templates', {
        id: Date.now(),
        name: this.newTemplate.trim()
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
        name: name.trim()
      }, this.loadData);
    },

    deleteTemplate(i) {
      if (!confirm('Hapus template?')) return;
      deleteData('templates', this.templates[i].id, this.loadData);
    },

    openTemplate(id) {
      location.href = `template.html?id=${id}`;
    },

    /* =====================
       EXPIRED (PARENT ONLY)
    ===================== */
    addExpired() {
      if (!this.newExpired.trim()) return;

      addData('expired', {
        id: Date.now(),
        name: this.newExpired.trim()
        // ⛔ JANGAN parentId di sini
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
        name: name.trim()
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
