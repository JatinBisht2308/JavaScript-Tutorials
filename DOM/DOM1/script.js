var fn = document.querySelector(".follower-number");
var f = document.querySelector(".followers");

// illusion of number is being changing
let count = 1000;
setInterval(() => {
  if (count < 10000) {
    count++;
    fn.innerHTML = count;
    if (count == 2000) {
        f.innerHTML = "2k Followers";
      }
      if (count == 5000) {
        f.innerHTML = "5k Followers";
      }
      if (count == 10000) {
        f.innerHTML = "10k Followers";
      }
  }
  
}, 1);

// changing the follower text to some other text after a particular follower gaining
// setTimeout( () => {

// },)
if (count == 2000) {
  f.innerHTML = "insta Followers";
}
