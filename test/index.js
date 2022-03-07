const express = require("express");
const app = express();
const port = 4000;


app.get('/', (req, res) => {
    res.send('Hello World!')
  })


  var claculator = function() {

      var total,
      firstN,
      secondN;

      return {

         add : function(firstN,secondN){

          total = firstN + secondN
          return total;
         },
         subtract : function(firstN,secondN){

            total = firstN - secondN
            return total;
           },
           divise : function(firstN,secondN){

            total = firstN / secondN
            return total;
           },
           multiply : function(firstN,secondN){

            total = firstN * secondN
            return total;
           }
      }
      
  }

  module.exports = claculator();








app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
