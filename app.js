/* ======================
   DASHBOARD
====================== */
if (document.getElementById("app")) {
  Vue.createApp({
    data() {
      return {
        newTemplate: "",
        templates: JSON.parse(localStorage.getItem("templates")) || [],
        expired: JSON.parse(localStorage.getItem("expired")) || [
          { id: 1, name: "Food" },
          { id: 2, name: "Syrup" },
          { id: 3, name: "Powder" },
          { id: 4, name: "Beans" }
        ]
      };
    },
    methods: {
      addTemplate() {
        if (!this.newTemplate) return;
        this.templates.push({
          id: Date.now(),
          name: this.newTemplate
        });
        this.newTemplate = "";
        localStorage.setItem("templates", JSON.stringify(this.templates));
      },
      editTemplate(i) {
        const name = prompt("Edit nama template", this.templates[i].name);
        if (name) {
          this.templates[i].name = name;
          localStorage.setItem("templates", JSON.stringify(this.templates));
        }
      },
      deleteTemplate(i) {
        if (confirm("Hapus template?")) {
          this.templates.splice(i, 1);
          localStorage.setItem("templates", JSON.stringify(this.templates));
        }
      },
      openExpired(e) {
        localStorage.setItem("activeExpired", e.name);
        location.href = "expired.html";
      }
    }
  }).mount("#app");
}

/* ======================
   EXPIRED DETAIL
====================== */
if (document.getElementById("expiredApp")) {
  Vue.createApp({
    data() {
      return {
        category: localStorage.getItem("activeExpired"),
        itemName: "",
        selected: "",
        items: JSON.parse(localStorage.getItem("expired_items")) || [],
        options: [
          { label: "24 Jam" },
          { label: "2 Hari" },
          { label: "3 Hari" },
          { label: "7 Hari" },
          { label: "14 Hari" },
          { label: "1 Bulan" },
          { label: "3 Bulan" },
          { label: "6 Bulan" }
        ]
      };
    },
    methods: {
      addItem() {
        if (!this.itemName || !this.selected) return;

        this.items.push({
          name: this.itemName,
          expired: this.selected,
          category: this.category
        });

        localStorage.setItem("expired_items", JSON.stringify(this.items));
        this.itemName = "";
        this.selected = "";
      }
    }
  }).mount("#expiredApp");
}