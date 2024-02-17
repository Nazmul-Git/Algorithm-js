// let second=0,minute=0,hour=0;

const clock = () => {
  let h = 0,m,s=0;
let timeString = '';

while(1){
    for (s; s <= 60; s++) {
      if(s===60){
        for (m=s; m <= 60; m++) {
          // console.log(m);
          if(m===60){
            for (h; h <= 24; h++) {
              timeString = (h < 10 ? "0" + h : h) + ":" + 
                           (m < 10 ? "0" + m : m) + ":" + 
                           (s < 10 ? "0" + s : s);
                           console.log(timeString);
            }
          }
        
      }
      }
        
    }
}
return timeString;
};
console.log(clock());
// console.log(timeString);
