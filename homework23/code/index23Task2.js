const btnContainer = document.getElementById('btn-group');
class ButtonHandlers {

   constructor(el) {
     this._el = el;
     el.onclick = this.onClick.bind(this);
   }

   firstBtn() {
     console.log("Клікнуто на кнопці: Кнопка 1.");
   }

   secondBtn() {
     console.log("Клікнуто на кнопці: Кнопка 2.");
   }

   thirdBtn() {
     console.log("Клікнуто на кнопці: Кнопка 3.");
   }

    onClick(e) {
       const action = e.target.dataset.action;
       if (action) {
           this[action]()
       }
   }
}

new ButtonHandlers(btnContainer);