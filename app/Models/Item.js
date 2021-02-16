export default class Item {
   constructor(itemName, isSold = false) {
      this.itemName = itemName
      this.price = (Math.floor(Math.random() * 10) + 3) * 0.25
      this.itemId = (Math.floor(Math.random() * 100000)).toString()
      this.numAvailable = (Math.floor(Math.random() * 10))
      this.isSold = isSold
   }

   get Purchase() {
      if(this.numAvailable > 0) {
         this.numAvailable -= 1
         return true
      } else {
         return false
      }
   }

   get Template() {
      //let button = /*html*/ ``
      // this.isSold ? "" : null
      
      return /*html*/ `
         <div class="col-3 p-2 h-100">
            <div id="${this.itemId}" class="card shadow p-3 h-100">
               <h3>${this.itemName}</h3>
               <p>$${this.price}</p>
               <button class="btn btn-primary" onclick='app.vendingController.buyItem("${this.itemId}")'>Buy</button>
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