export default class Item {
   constructor(itemName, isSold = false) {
      this.itemName = itemName
      this.price = (Math.floor(Math.random() * 10) + 3) * 0.25
      this.itemId = (Math.floor(Math.random() * 100000)).toString()
      this.numAvailable = (Math.floor(Math.random() * 10))
      this.isSold = isSold
   }

   get Template() {
      let button = /*html*/ `<button class="btn btn-primary" onclick='app.vendingController.buyItem("${this.itemId}")'>Buy</button>`
      // this.isSold ? "" : null
      
      return /*html*/ `
         <div class="col-3 p-2">
            <div class="card shadow p-3">
               <h2>${this.itemName}</h2>
               <p>${this.price}</p>
               ${button}
            </div>
         </div>
      `
   }
}