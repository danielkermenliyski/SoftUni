function solve( distance, people, price ) {

   let fuel = (people * 0.100) + (distance /100 * 7);

   let totalPrice = fuel* price;


   console.log(`Needed money for that trip is ${totalPrice}lv.`)

}