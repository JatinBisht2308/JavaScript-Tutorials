var sellingPrice = 199;
var listingPrice = 799;
 var discountPercent = ((listingPrice - sellingPrice)/listingPrice)*100;
//  console.log(`Discount Percentage is : ${discountPercent}%`);
 var displayDiscountPercent = Math.round(discountPercent);
 console.log(`Discount Percentage is : ${displayDiscountPercent}% off`);
