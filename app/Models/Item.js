export default class Item {
   constructor(itemName) {
      this.itemName = itemName
      this.price = (Math.floor(Math.random() * 10) + 3) * 0.25
      this.itemId = (Math.floor(Math.random() * 100000)).toString()
      this.numAvailable = (Math.floor(Math.random() * 10))
      this.isSoldOut = false
   }

   get Purchase() {
      if(this.numAvailable > 0) {
         this.numAvailable -= 1
         return true
      } else {
         this.isSoldOut = true
         return false
      }
   }

   get Template() {
      this.isSoldOut = ! (this.numAvailable > 0)
      let state = this.isSoldOut ? "btn-warning" : "btn-primary"
      let price = this.isSoldOut ? "SOLD OUT" : '$' + this.price
      
      return /*html*/ `
         <div class="col-3 p-2 h-100">
            <div id="${this.itemId}" class="card shadow p-3 h-100">
               <h3>${this.itemName}</h3>
               
               <button class="btn ${state}" onclick='app.vendingController.buyItem("${this.itemId}")'>
                  ${price}
               </button>
            </div>
         </div>
      `
   }

   get Price() {
      return this.price
   }

   get ItemId() {
      return this.itemId
   }
}