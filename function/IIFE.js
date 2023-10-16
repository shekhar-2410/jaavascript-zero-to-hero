(function() {
    const message = "This is an IIFE";
    console.log(message);
  })();

  (function(x, y) {
    const result = x + y;
    console.log(result);
  })(5, 10); // Outputs: 15
  