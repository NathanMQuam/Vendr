export default class Item {
   constructor(itemName, isSold = false) {
      this.itemName = itemName
      this.price = (Math.floor(Math.random() * 10) + 3) * 0.25
      this.itemId = (Math.floor(Math.random() * 100000)).toString()
      this.numAvailable = (Math.floor(Math.random() * 10))
      this.isSold = isSold
   }

   get Template() {
      let button = /*html*/ ``
      // this.isSold ? "" : null
      
      return /*html*/ `
         <div class="col-3 p-2">
            <div class="card shadow p-3">
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