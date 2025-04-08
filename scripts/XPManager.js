const XPManager = {
    xp: 0,
    level: 1,
  
    init() {
      this.load();
      this.updateUI();
    },
  
    load() {
      const data = JSON.parse(localStorage.getItem("kazper_xp")) || { xp: 0, level: 1 };
      this.xp = data.xp;
      this.level = data.level;
    },
  
    save() {
      localStorage.setItem("kazper_xp", JSON.stringify({ xp: this.xp, level: this.level }));
    },
  
    gainXP(amount) {
      this.xp += amount;
      this.checkLevelUp();
      this.save();
      this.updateUI();
    },
  
    checkLevelUp() {
      const xpNeeded = this.level * 100;
      if (this.xp >= xpNeeded) {
        this.level++;
        this.xp = this.xp - xpNeeded;
        // optional: show a level-up animation
      }
    },
  
    updateUI() {
      document.getElementById("xpDisplay").innerText = `Level ${this.level} — ${this.xp} XP`;
    }
  };
  
  window.onload = () => XPManager.init();
  