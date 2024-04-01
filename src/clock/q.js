const myArray = [
  "You Always Fear What You Don't Understand.",
  "I Believe What Doesn't Kill You Simply Makes You... Stranger.",
  "And Why Do We Fall, So That We Can Learn To Pick Ourselves Up.",
  "It's Not Who I Am Underneath But What I Do That Defines Me.",
  "You Either Die A Hero Or Live Long Enough To See Yourself Become The Villain.",
  "Some Men Just Want To Watch The World Burn.",
];
const randomIndex = Math.floor(Math.random() * myArray.length);
document.getElementById("random").textContent = myArray[randomIndex];
