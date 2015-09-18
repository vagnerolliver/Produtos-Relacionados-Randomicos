var data_size = parseInt($(".view-also .relacionados").data('size'));

var uniqueRandoms = [];
var numRandoms = data_size;

function makeUniqueRandom() {
  // refill the array if needed
  if (!uniqueRandoms.length) {
      for (var i = 0; i < numRandoms; i++) {
          uniqueRandoms.push(i);
      }
  }

  var index = Math.floor(Math.random() * uniqueRandoms.length);
  var val = uniqueRandoms[index];

  // now remove that value from the array
  uniqueRandoms.splice(index, 1);

  return val;

}
// esse 3, vair depender de quantos produtos devem aparecer na lista;
for (var i = 0; i < 3; i++) {
    var rand = makeUniqueRandom();
    if (i % numRandoms == 0) {
        // $("#results").append("----<br>");
        console.log("numRandoms"+rand)
    }
    console.log(rand)
    $("li.item_"+rand+"").removeClass("hide")
}
