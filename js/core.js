$(document).ready(function(){

$.fn.modal.Constructor.prototype.enforceFocus = function () {};
Opentip.defaultStyle = "glass";
document.oncontextmenu = function() {return false;};

var slotArray = [
  {id: "ammo", data: ammo},
  {id: "head", data: head},
  {id: "chest", data: body},
  {id: "cape", data: cape},
  {id: "feet", data: feet},
  {id: "hand", data: hand},
  {id: "legs", data: leg},
  {id: "neck", data: neck},
  {id: "ring", data: ring},
  {id: "shield", data: shield},
  {id: "twohand", data: twohand},
  {id: "weapon", data: weapon}
];

loadSets(".set_selector");

createSlots(slotArray);
calculateTotals();

$('[data-toggle="tooltip"]').tooltip();


//check if there is any id params in url first if so load them
var params = checkUrlForParams(window.location.href);
if(params != null)
{
  console.log(params);
  for (var param in params) {
    if (params.hasOwnProperty(param)) {
        //console.log(param, params[param]);
        updateSlot(slotArray, param, params[param]);
    }
  }
  calculateTotals();
}

$('#save-gear-button').on('click', function(event) {
  event.preventDefault();
  /* Act on the event */
  console.log("clicked");

  //get list of item ids for each slot
  var saveObject = {};
  $('[item-id]').each(function(index, el) {
    var itemID = $(el).attr('item-id');
    var itemSlot = $(el).attr('slot');
    //console.log(el);
        saveObject[itemSlot] = itemID;

  });
  console.log(saveObject);
  prompt("URL Generated: ", window.location.href.split('?')[0] + "?" + jQuery.param(saveObject));
});

$('#load-gear-button').on('click', function(event) {
  event.preventDefault();
  /* Act on the event */
  var setID = $('.set_selector').val();
  loadFromSetID(setID);
});

$('.item_holder').on('itemChange', function(event, slotID, newID, currentID) {
  event.preventDefault();
  /* Act on the event */
  // console.log("item changed");
  // console.log("old id " + currentID);
  // console.log("new id " + newID);
  displayDifference(newID, currentID);
  if(currentID === undefined)
  {
    setCompareSlot("item_compare_old", newID);
  }
  else if(currentID && newID)
  {
    console.log("current id and new id are defiend");
    setCompareSlot("item_compare_old", currentID);
    setCompareSlot("item_compare_new", newID);
    compareCompareSlots(currentID, newID);
  }


});


});
