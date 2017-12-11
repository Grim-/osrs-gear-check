var Util =
{
  createTooltip: createTooltipStats,
  icons: icons
};


var icons = [];
icons["stab-attack"] = "img/icons/stab-icon.png";
icons["slash-attack"] = "img/icons/slash-icon.png";
icons["crush-attack"] = "img/icons/crush-icon.png";
icons["magic-attack"] = "img/icons/magic-icon.png";
icons["ranged-attack"] = "img/icons/ranged-icon.png";

icons["stab-defence"] = "img/icons/stab-icon.png";
icons["slash-defence"] = "img/icons/slash-icon.png";
icons["crush-defence"] = "img/icons/crush-icon.png";
icons["magic-defence"] = "img/icons/magic-icon.png";
icons["ranged-defence"] = "img/icons/ranged-icon.png";

icons["prayer-bonus"] = "img/icons/prayer-icon";
icons["strength-bonus"] = "img/icons/strength-icon";
icons["ranged-strength"] = "img/icons/rangedstrength-icon";
icons["magic-strength"] = "img/icons/magicdamage-icon";




function createTooltipStats(stats, data)
{
  //  console.log("CREATING TOOLTIP");
  //console.log(stats);
  var elementStart = "<div class='item-name'>"
  var elementEnd ="</div>";
  var string = "<div class='row'>";
  string += "<h4 class='padding-left:15px;'>" + data["description"] +"</h4>";
  string += "<div class='col-sm-6'>";
  string += "<h4>Attack Stats</h4>";
  string += elementStart + "<img src='img/icons/stab-icon.png'> " + stats["stab-attack"] + elementEnd;
  string += elementStart + "<img src='img/icons/slash-icon.png'> "  + stats["slash-attack"] + elementEnd;
  string += elementStart + "<img src='img/icons/crush-icon.png'> "  + stats["crush-attack"] + elementEnd;
  string += elementStart + "<img src='img/icons/magic-icon.png'> "  + stats["magic-attack"] + elementEnd;
  string += elementStart + "<img src='img/icons/ranged-icon.png'> "  + stats["ranged-attack"] + elementEnd;
  string += "</div>";

  string += "<div class='col-sm-6'>";
  string += "<h4>Defence Stats</h4>";
  string += elementStart + "<img src='img/icons/stab-icon.png'> "  + stats["stab-defence"] + elementEnd;
  string += elementStart + "<img src='img/icons/slash-icon.png'> "  + stats["slash-defence"] + elementEnd;
  string += elementStart + "<img src='img/icons/crush-icon.png'> "  + stats["crush-defence"] + elementEnd;
  string += elementStart + "<img src='img/icons/magic-icon.png'> "  + stats["magic-defence"] + elementEnd;
  string += elementStart + "<img src='img/icons/ranged-icon.png'> "  + stats["ranged-defence"] + elementEnd;
  string += "</div>";

  string += "<div class='col-sm-12'>";
  string += "<h4>Other Stats</h4>";
  string += "</div>";

  string += "<div class='col-sm-6'>";
  string += elementStart + "<img src='img/icons/strenght-icon.png'> "  + stats["strength-bonus"] + elementEnd;
  string += elementStart + "<img src='img/icons/prayer-icon.png'> "  + stats["prayer-bonus"] + elementEnd;
  string += elementStart + "<img src='img/icons/rangedstrength-icon.png'> "  + stats["ranged-strength"] + elementEnd;
  string += elementStart + "<img src='img/icons/magicdamage-icon.png'> "  + stats["magic-strength"] + elementEnd;
  string += "</div>";

  string += "</div>";
  return string;
}

function calculateTotals()
{
    var cAtTotal = 0, stAtTotal= 0, slAtTotal= 0, rAtTotal= 0, mAtTotal= 0, cDeTotal= 0, stDeTotal= 0, slDeTotal= 0, rDeTotal= 0, mDeTotal= 0, prBonusTotal= 0, strBonusTotal= 0, rBonusTotal= 0, mBonusTotal = 0;
    if($('[item-id]').length === 0)
    {
      //console.log("no item ids");
      var zero = "0";
      $('#stAtTotal').html("<img src='img/icons/stab-icon.png'> " + zero)
      $('#slAtTotal').html("<img src='img/icons/slash-icon.png'> " + zero)
      $('#cAtTotal').html("<img src='img/icons/crush-icon.png'> " + zero)
      $('#mAtTotal').html("<img src='img/icons/magic-icon.png'> " + zero)
      $('#rAtTotal').html("<img src='img/icons/ranged-icon.png'> " + zero)


      $('#stDeTotal').html("<img src='img/icons/stab-icon.png'> " + zero)
      $('#slDeTotal').html("<img src='img/icons/slash-icon.png'> " + zero)
      $('#cDeTotal').html("<img src='img/icons/crush-icon.png'> " + zero)
      $('#mDeTotal').html("<img src='img/icons/magic-icon.png'> " + zero)
      $('#rDeTotal').html("<img src='img/icons/ranged-icon.png'> " + zero)

      $('#stBTotal').html("<img src='img/icons/strenght-icon.png'> " + zero);
      $('#prBTotal').html("<img src='img/icons/prayer-icon.png'> " + zero);
      $('#mBTotal').html("<img src='img/icons/magicdamage-icon.png'> " + zero);
      $('#rBTotal').html("<img src='img/icons/rangedstrength-icon.png'> " + zero);
    }

    $('[item-id]').each(function(index, el) {
      var itemID = $(el).attr('item-id');
      //console.log(data);

      if(itemID != undefined)
      {
        var results = $.grep(all, function(e){
          //console.log(e.id);
          return e.id == itemID;
        });
        //console.log(results);
        if(results != undefined)
        {
          var itemData = results[0];
          var stats = itemData.stats;
          var desc = itemData.description;

          var cAt = parseInt(stats["crush-attack"]);
            cAtTotal += cAt;
          var stAt = parseInt(stats["stab-attack"]);
            stAtTotal += stAt;
          var slAt = parseInt(stats["slash-attack"]);
            slAtTotal += slAt;
          var rAt = parseInt(stats["ranged-attack"]);
            rAtTotal += rAt;
          var mAt = parseInt(stats["magic-attack"]);
            mAtTotal += mAt;


          var cDe = parseInt(stats["crush-defence"]);
            cDeTotal += cDe;
          var stDe = parseInt(stats["stab-defence"]);
            stDeTotal += stDe;
          var slDe = parseInt(stats["slash-defence"]);
            slDeTotal += slDe;
          var rDe = parseInt(stats["ranged-defence"]);
            rDeTotal += rDe;
          var mDe = parseInt(stats["magic-defence"]);
            mDeTotal += mDe;
          var prBonus = parseInt(stats["prayer-bonus"]);
            prBonusTotal += prBonus;
          var strBonus = parseInt(stats["strength-bonus"]);
            strBonusTotal += strBonus;
          var rBonus = parseInt(stats["ranged-strength"]);
            rBonusTotal += rBonus;
          var mBonus = parseInt(stats["magic-strength"]);
            mBonusTotal += mBonus;

          $('#stAtTotal').html("<img src='img/icons/stab-icon.png'> " + stAtTotal)
          $('#slAtTotal').html("<img src='img/icons/slash-icon.png'> " + slAtTotal)
          $('#cAtTotal').html("<img src='img/icons/crush-icon.png'> " + cAtTotal)
          $('#mAtTotal').html("<img src='img/icons/magic-icon.png'> " + mAtTotal)
          $('#rAtTotal').html("<img src='img/icons/ranged-icon.png'> " + rAtTotal)


          $('#stDeTotal').html("<img src='img/icons/stab-icon.png'> " + stDeTotal)
          $('#slDeTotal').html("<img src='img/icons/slash-icon.png'> " + slDeTotal)
          $('#cDeTotal').html("<img src='img/icons/crush-icon.png'> " + cDeTotal)
          $('#mDeTotal').html("<img src='img/icons/magic-icon.png'> " + mDeTotal)
          $('#rDeTotal').html("<img src='img/icons/ranged-icon.png'> " + rDeTotal)

          $('#stBTotal').html("<img src='img/icons/strenght-icon.png'> " + strBonusTotal);
          $('#prBTotal').html("<img src='img/icons/prayer-icon.png'> " + prBonusTotal);
          $('#mBTotal').html("<img src='img/icons/magicdamage-icon.png'> " + mBonusTotal);
          $('#rBTotal').html("<img src='img/icons/rangedstrength-icon.png'> " + rBonusTotal);
        }
        else {
          alert("NO items for " + itemID);
        }

      }


    });

}



$('.item_holder').on('contentChange', function(event, data) {
  event.preventDefault();
  /* Act on the event */
  console.log("Content change trigged");
  calculateTotals();
});

function createSlots(slotArray)
{
  var lastID;
  var connector;
  slotArray.forEach(function(el){

    $('#'+el.id+' .item_holder').mousedown(function(event) {
        switch (event.which) {
            case 3:
            //if right clicking on the weapon slot
            if(el.id === "weapon")
            {
              console.log("This is the weapon slot on right click");
              var wep = $('#weapon');

              //and the weapon slot has the twohand atrrib
              if($('#weapon').attr('twohand'))
              {
                console.log("Its a two handed weapon we are removing");
                //then we should display the shield slot again
                $('#shield').css('display','inherit');
              }
            }
            var oldID = $('#'+el.id+' .item_holder').attr('item-id');
            $('#'+el.id+' .item_holder').attr('src', "");
            $('#'+el.id+' .item_holder').removeAttr('item-id');
            $('#'+el.id+' .item_holder').trigger("contentChange");
            $('#'+el.id+' .item_holder').trigger("itemChange", [el.id, undefined, oldID]);
            clearCompareSlots();
            //$('#'+el.id).data("tooltip").deactivate();
            break;
        }
    });

  $('#'+el.id).click(function(event) {
    var currentID = '#'+el.id;
    var slot = $(currentID);
    var offset = slot.offset();
    var selectCtrl;
    var tip;


    $(currentID + ' .eqp_slot').addClass('item_selected');
    //if connector exists

    if(currentID != lastID)
    {
      $(lastID + ' .eqp_slot').removeClass('item_selected');
      clearCompareSlots();
    }


    if(connector != undefined)
    {
      connector._jsPlumb.instance.deleteEveryConnection();
      connector = createConnectorToSelector(currentID, "color");
    }
    else
    {
      //console.log(connector);
      connector = createConnectorToSelector(currentID, "color");
    }

    selectCtrl =  $('.selector').selectize({
        options: el.data,
        labelField: "name",
        valueField : "id",
        maxItems : 1,
        dataAttr: 'data-stats',
        searchField: ["name", "attack-stab"],
        onChange: function(id) {
          //var id = $('.selector').val();
          if(id)
          {
            //console.log(id);

            var results = $.grep(el.data, function(e){ return e.id == id; });
            //console.log(results);
            var itemData = results[0];
            var stats = itemData.stats;
            var desc = itemData.description;
            var name = selectCtrl[0].selectize.getItem(selectCtrl[0].selectize.getValue()).text();
            //selectCtrl.selectize.setValue(selectCtrl[0].selectize.getValue());

            var formatted = name.split(" ").join("_");
            setItemSlot(el.id, id);
            //$('#'+el.id).data("tooltip", new Opentip('#'+el.id+' .item_holder', createTooltipStats(stats, itemData), name));

            //if this is for the weapon slot
            if(el.id == "weapon")
            {
              //console.log("This is the weapon slot");
              //and if the weapon is two handed
              if(itemData.twohand == true)
              {
                //console.log("This is a 2h wep");
                setTwohanded();
              }
              else if(itemData.twohand == undefined)
              {
                clearTwoHanded();
              }

            }

            $('.item_holder').trigger("contentChange");

          }

        },
        render : {
          option : function(item, escape)
          {
            var display = "";
            var iconElementStart = "<b>";
            var iconElementEnd = "</b>";
            var itemNameElementStart = "<div class='item-name'>";
            var itemNameElementEnd = "</div>";
             //#C8C8C8
              display += "<div class='row' ";
              display += "data-stats='"+JSON.stringify(item.stats)+"' ";
              // display += "data-attack-slash='"+item.stats["slash-attack"]+"' ";
              // display += "data-attack-crush='"+item.stats["crush-attack"]+"' ";
              // display += "data-attack-magic='"+item.stats["magic-attack"]+"' ";
              // display += "data-attack-ranged='"+item.stats["ranged-attack"]+"' ";
              //
              // display += "data-defence-stab='"+item.stats["stab-defence"]+"' ";
              // display += "data-defence-slash='"+item.stats["slash-defence"]+"' ";
              // display += "data-defence-crush='"+item.stats["crush-defence"]+"' ";
              // display += "data-defence-magic='"+item.stats["magic-defence"]+"' ";
              // display += "data-defence-ranged='"+item.stats["ranged-defence"]+"' ";
              //
              //
              // display += "data-bonus-strength='"+item.stats["strength-bonus"]+"' ";
              // display += "data-bonus-prayer='"+item.stats["prayer-bonus"]+"' ";
              // display += "data-bonus-magic='"+item.stats["magic-strength"]+"' ";
              // display += "data-bonus-ranged='"+item.stats["ranged-strength"]+"' ";
              display += ">";

               display += "<div class='col-xs-12 text-center'>"+itemNameElementStart+"<img src='img/item_img/"+item.id+".png' >" + item.name + "</div>" + itemNameElementEnd;
                display += "<div class='col-xs-12 text-center' style='padding:0'>";
                 display += "<img src='img/icons/stab-icon.png'>" + iconElementStart + item.stats["stab-attack"] + iconElementEnd;
                 display += "<img src='img/icons/slash-icon.png'>" + iconElementStart + item.stats["slash-attack"] + iconElementEnd;
                 display += "<img src='img/icons/crush-icon.png'>" + iconElementStart + item.stats["crush-attack"] + iconElementEnd;
                 display += "<img src='img/icons/magic-icon.png'>" + iconElementStart + item.stats["magic-attack"] + iconElementEnd;
                 display += "<img src='img/icons/ranged-icon.png'>" + iconElementStart + item.stats["ranged-attack"] + iconElementEnd;
                display += "</div>";

                display += "<div class='col-xs-12 text-center' style='padding:0'>";
                 display += "<img src='img/icons/stab-icon.png'>"  + iconElementStart + item.stats["stab-defence"] + iconElementEnd;
                 display += "<img src='img/icons/slash-icon.png'>"  + iconElementStart + item.stats["slash-defence"] + iconElementEnd;
                 display += "<img src='img/icons/crush-icon.png'>"  + iconElementStart + item.stats["crush-defence"] + iconElementEnd;
                 display += "<img src='img/icons/magic-icon.png'>"  + iconElementStart + item.stats["magic-defence"] + iconElementEnd;
                 display += "<img src='img/icons/ranged-icon.png'>"  + iconElementStart + item.stats["ranged-defence"] + iconElementEnd;
                display += "</div>";

                display += "<div class='col-xs-12 text-center' style='padding:0'>";
                 display += "<img src='img/icons/strenght-icon.png'>"  + iconElementStart + item.stats["strength-bonus"] + iconElementEnd;
                 display += "<img src='img/icons/prayer-icon.png'>"  + iconElementStart + item.stats["prayer-bonus"] + iconElementEnd;
                 display += "<img src='img/icons/magicdamage-icon.png'>"  + iconElementStart + item.stats["magic-strength"] + iconElementEnd;
                 display += "<img src='img/icons/rangedstrength-icon.png'>"  + iconElementStart + item.stats["ranged-strength"] + iconElementEnd;
                display += "</div>";

              display += "</div>";

            return display;
          },
          item : function(item, escape)
          {
            var display = "<div>";
            display += "<img src='img/item_img/"+item.id+".png'>";
            display += "<b>"+item.name+"</b>";
            display += "</div>"
            return display;
          }
        }
      });
    lastID = currentID;
  });
  //end of click event
});
//end of for each slot
}

function createConnectorToSelector(sourceID, color)
{
  var container = document.body;
  var connector;
  jsPlumb.setContainer(container);
  connector = jsPlumb.connect({
      source: container.querySelector(sourceID),
      target: container.querySelector("#selector"),
      anchors:["Center", "Left"],
      endpoint: "Blank",
      connector: "Flowchart",
      paintStyle:{ strokeWidth: 2, stroke: 'rgb(70,130,180)'}
    });

    return connector;
}

function removeConnector(sourceID)
{
    jsPlumb.remove(sourceID);
}

function updateSlot(slotArray, slotID, itemID)
{
  var id = itemID;
  var data = $.grep(slotArray, function(e){ return e.id == slotID; });
  var iData = data[0].data;
  var results = $.grep(iData, function(e){ return e.id == id; });
  var itemData = results[0];
  var stats = itemData.stats;
  var desc = itemData.description;

  if(slotID === "weapon")
  {
    console.log("This is the weapon slot");
    //and if the weapon is two handed
    if(itemData.twohand == true)
    {
      setTwohanded();
    }
    else if(itemData.twohand == undefined)
    {
      clearTwoHanded();
    }

    //this is a weapon make sure to hide shield slot and clear it if the weapon is two handed
    $('#'+slotID+' .item_holder').attr('src', "img/item_img/" + id + ".png");
    $('#'+slotID+' .item_holder').attr('item-id', id);
    //tip = new Opentip('#'+slotID+' .item_holder', createTooltipStats(stats, itemData), name);
  }
  else
  {
    $('#'+slotID+' .item_holder').attr('src', "img/item_img/" + id + ".png");
    $('#'+slotID+' .item_holder').attr('item-id', id);
    //tip = new Opentip('#'+slotID+' .item_holder', createTooltipStats(stats, itemData), name);
  }

}

var zeroStats = [];
zeroStats["stab-attack"] = "0";
zeroStats["slash-attack"]= "0";
zeroStats["crush-attack"]= "0";
zeroStats["magic-attack"]= "0";
zeroStats["ranged-attack"]= "0";
zeroStats["stab-defence"]= "0";
zeroStats["slash-defence"]= "0";
zeroStats["crush-defence"]= "0";
zeroStats["magic-defence"]= "0";
zeroStats["ranged-defence"]= "0";
zeroStats["strength-bonus"]= "0";
zeroStats["prayer-bonus"]= "0";
zeroStats["ranged-strength"]= "0";
zeroStats["magic-strength"]= "0";

function compareItemsByID(itemOneID, itemTwoID)
{
  var differenceArray = [];

  var itemOne = $.grep(all, function(e){
    return e.id == itemOneID;
  });

  var itemTwo = $.grep(all, function(e){
    return e.id == itemTwoID;
  });


  var itemOneStats;
  var itemTwoStats;

  if(itemOneID === undefined)
  {
    console.log("item id one is null");
    itemOneStats = zeroStats;
  }
  else
  {
    itemOneStats = itemOne[0].stats;
  }

  if(itemTwoID === undefined)
  {
    console.log("item id two is null");
    itemTwoStats = zeroStats;
  }
  else
  {
    itemTwoStats = itemTwo[0].stats;
  }


  for (var stat in itemOneStats)
  {
    if (itemOneStats.hasOwnProperty(stat))
    {
      var itemStatDiff = parseInt(itemOneStats[stat]) - parseInt(itemTwoStats[stat]);
      //console.log(itemStatDiff);
      if(itemStatDiff != 0)
      {
        differenceArray[stat] = itemStatDiff;
      }
    }
  }

  return differenceArray;
}


//probably a much nicer way to do this
//TODO: this
function displayDifference(newID, oldID)
{
    var itemDiff = compareItemsByID(newID, oldID);
    console.log(itemDiff);

    for (var stat in itemDiff)
    {
      if (itemDiff.hasOwnProperty(stat))
      {
        var color = itemDiff[stat] > 0 ? 'green' : 'red';

        switch (stat)
        {
          //attack bonuses
          case "stab-attack":
            $('#stAtDiff').text("(" +  itemDiff["stab-attack"]  + ")");
            $('#stAtDiff').css('color', color);
            $('#stAtDiff').css('position', 'absolute');
            $('#stAtDiff').animate({top: -100}, 3500, function(){
              $('#stAtDiff').text("");
              $('#stAtDiff').css('top', 0);
            });
          break;
          case "slash-attack":
            $('#slAtDiff').text("(" +  itemDiff["slash-attack"]  + ")");
            $('#slAtDiff').css('color', color);
            $('#slAtDiff').css('position', 'absolute');
            $('#slAtDiff').animate({top: -100}, 3500, function(){
              $('#slAtDiff').text("");
              $('#slAtDiff').css('top', 0);
            });
          break;
          case "crush-attack":
          $('#cAtDiff').text("(" +  itemDiff["crush-attack"]  + ")");
          $('#cAtDiff').css('color', color);
          $('#cAtDiff').css('position', 'absolute');
          $('#cAtDiff').animate({top: -100}, 3500, function(){
            $('#cAtDiff').text("");
            $('#cAtDiff').css('top', 0);
          });
          break;
          case "magic-attack":
          $('#mAtDiff').text("(" +  itemDiff["magic-attack"]  + ")");
          $('#mAtDiff').css('color', color);
          $('#mAtDiff').css('position', 'absolute');
          $('#mAtDiff').animate({top: -100}, 3500, function(){
            $('#mAtDiff').text("");
            $('#mAtDiff').css('top', 0);
          });
          break;
          case "ranged-attack":
          $('#rAtDiff').text("(" +  itemDiff["ranged-attack"]  + ")");
          $('#rAtDiff').css('color', color);
          $('#rAtDiff').css('position', 'absolute');
          $('#rAtDiff').animate({top: -100}, 3500, function(){
            $('#rAtDiff').text("");
            $('#rAtDiff').css('top', 0);
          });
          break;

          //defence Bonuses

          case "stab-defence":
          $('#stDeDiff').text("(" +  itemDiff["stab-defence"]  + ")");
          $('#stDeDiff').css('color', color);
          $('#stDeDiff').css('position', 'absolute');
          $('#stDeDiff').animate({top: -100}, 3500, function(){
            $('#stDeDiff').text("");
            $('#stDeDiff').css('top', 0);
          });
          break;

          case "slash-defence":
          $('#slDeDiff').text("(" +  itemDiff["slash-defence"]  + ")");
          $('#slDeDiff').css('color', color);
          $('#slDeDiff').css('position', 'absolute');
          $('#slDeDiff').animate({top: -100}, 3500, function(){
            $('#slDeDiff').text("");
            $('#slDeDiff').css('top', 0);
          });
          break;

          case "crush-defence":
          $('#cDeDiff').text("(" +  itemDiff["crush-defence"]  + ")");
          $('#cDeDiff').css('color', color);
          $('#cDeDiff').css('position', 'absolute');
          $('#cDeDiff').animate({top: -100}, 3500, function(){
            $('#cDeDiff').text("");
            $('#cDeDiff').css('top', 0);
          });
          break;

          case "magic-defence":
          $('#mDeDiff').text("(" +  itemDiff["magic-defence"]  + ")");
          $('#mDeDiff').css('color', color);
          $('#mDeDiff').css('width', 150);
          $('#mDeDiff').css('position', 'absolute');
          $('#mDeDiff').animate({top: -100}, 3500, function(){
            $('#mDeDiff').text("");
            $('#mDeDiff').css('top', 0);
          });
          break;

          case "ranged-defence":
          $('#rDeDiff').text("(" +  itemDiff["ranged-defence"]  + ")");
          $('#rDeDiff').css('color', color);
          $('#rDeDiff').css('position', 'absolute');
          $('#rDeDiff').animate({top: -100}, 3500, function(){
            $('#rDeDiff').text("");
            $('#rDeDiff').css('top', 0);
          });
          break;
        }

      }
    }

}

$('.item_holder').on('itemChange', function(event, slotID, newID, currentID) {
  event.preventDefault();
  /* Act on the event */
  console.log("item changed");
  console.log("old id " + currentID);
  console.log("new id " + newID);
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
  }
});

function clearCompareSlots()
{
  var oldId = "item_compare_old";
  var newId = "item_compare_new";

  $('#'+oldId+' .compare_slot_img').attr('src', "");
  $('#'+oldId+' .compare_slot_name').text("");
  $('#'+oldId+' .compare-st-at').text("");
  $('#'+oldId+' .compare-sl-at').text("");
  $('#'+oldId+' .compare-cr-at').text("");
  $('#'+oldId+' .compare-mg-at').text("");
  $('#'+oldId+' .compare-rg-at').text("");
  //Defence
  $('#'+oldId+' .compare-st-df').text("");
  $('#'+oldId+' .compare-sl-df').text("");
  $('#'+oldId+' .compare-cr-df').text("");
  $('#'+oldId+' .compare-mg-df').text("");
  $('#'+oldId+' .compare-rg-df').text("");
  //bonuses
  $('#'+oldId+' .compare-st-b').text("");
  $('#'+oldId+' .compare-pr-b').text("");
  $('#'+oldId+' .compare-md-b').text("");
  $('#'+oldId+' .compare-rd-b').text("");

  $('#'+newId+' .compare_slot_img').attr('src', "");
  $('#'+newId+' .compare_slot_name').text("");
  $('#'+newId+' .compare-st-at').text("");
  $('#'+newId+' .compare-sl-at').text("");
  $('#'+newId+' .compare-cr-at').text("");
  $('#'+newId+' .compare-mg-at').text("");
  $('#'+newId+' .compare-rg-at').text("");
  //Defence
  $('#'+newId+' .compare-st-df').text("");
  $('#'+newId+' .compare-sl-df').text("");
  $('#'+newId+' .compare-cr-df').text("");
  $('#'+newId+' .compare-mg-df').text("");
  $('#'+newId+' .compare-rg-df').text("");
  //bonuses
  $('#'+newId+' .compare-st-b').text("");
  $('#'+newId+' .compare-pr-b').text("");
  $('#'+newId+' .compare-md-b').text("");
  $('#'+newId+' .compare-rd-b').text("");
}
function updateCompareSlots(newID, oldID)
{
  setCompareSlot("item_compare_old", oldID);

}



function setCompareSlot(slot, itemID)
{
  var itemInfo;
  console.log(itemID);
  if(itemID === undefined)
  {
    console.log("no item id to compare to for slot " + slot);
    itemInfo = zeroStats;
  }
  else
  {
    itemInfo = getItemInfo(itemID);
    $('#'+slot+' .compare_slot_img').attr('src', "img/item_img/" + itemID + ".png");
    $('#'+slot+' .compare_slot_name').text(itemInfo.name);
    $('#'+slot+' .compare-st-at').text(itemInfo.stats["stab-attack"]);
    $('#'+slot+' .compare-sl-at').text(itemInfo.stats["slash-attack"]);
    $('#'+slot+' .compare-cr-at').text(itemInfo.stats["crush-attack"]);
    $('#'+slot+' .compare-mg-at').text(itemInfo.stats["magic-attack"]);
    $('#'+slot+' .compare-rg-at').text(itemInfo.stats["ranged-attack"]);
    //Defence
    $('#'+slot+' .compare-st-df').text(itemInfo.stats["stab-defence"]);
    $('#'+slot+' .compare-sl-df').text(itemInfo.stats["slash-defence"]);
    $('#'+slot+' .compare-cr-df').text(itemInfo.stats["crush-defence"]);
    $('#'+slot+' .compare-mg-df').text(itemInfo.stats["magic-defence"]);
    $('#'+slot+' .compare-rg-df').text(itemInfo.stats["ranged-defence"]);
    //bonuses
    $('#'+slot+' .compare-st-b').text(itemInfo.stats["strength-bonus"]);
    $('#'+slot+' .compare-pr-b').text(itemInfo.stats["prayer-bonus"]);
    $('#'+slot+' .compare-md-b').text(itemInfo.stats["magic-strength"]);
    $('#'+slot+' .compare-rd-b').text(itemInfo.stats["ranged-strength"]);
  }

}


function compareCompareSlots()
{
  var oldId = "item_compare_old";
  var newId = "item_compare_new";
}

function getItemInfo(itemID)
{
  var results = $.grep(all, function(e){ return e.id == itemID; });
  return results[0];
}

function setItemSlot(slotID, newID)
{
  var oldID =  $('#'+slotID+' .item_holder').attr('item-id');
  // if there was an id set when changing this then display the stat differences
  $('#'+slotID+' .item_holder').trigger('itemChange', [slotID, newID, oldID]);
  $('#'+slotID+' .item_holder').attr('src', "img/item_img/" + newID + ".png");
  $('#'+slotID+' .item_holder').attr('item-id', newID);
  $('#'+slotID+' .item_holder').attr('slot', slotID);
  $('#'+slotID+' .item_holder').trigger("contentChange");
}

function clearItemSlot(slotID)
{
  var oldID =  $('#'+slotID+' .item_holder').attr('item-id');
  $('#'+slotID+' .item_holder').trigger('itemChange', [slotID, newID, oldID]);
  $('#'+slotID+' .item_holder').attr('src', "");
  $('#'+slotID+' .item_holder').removeAttr('item-id');
  $('#'+slotID+' .item_holder').trigger("contentChange");
}

function enableSlot(slotID)
{
  //display shield again
  $('#shield').css('display','');
  //remove two hand attrib from weapon
  $('#weapon').removeAttr('twohand');
}

function setTwohanded()
{
  //console.log("This is a 2h wep");
  //remove all shield properties so it isnt counted in count totals and hide it
  //hide shield slot
  $('#shield').css('display','none');
  //remove the img src
  $('#shield .item_holder').attr('src', "");
  //remove the item id attrib on the shield because there is no shield with a 2 hand wep
  $('#shield .item_holder').removeAttr('item-id');
  //set wep property twohand true
  $('#weapon').attr('twohand', true);
}
function clearTwoHanded()
{
  //this is a one handed weapon display shield slot
  //console.log("This is a 1h wep");
  //display shield again
  $('#shield').css('display','');
  //remove two hand attrib from weapon
  $('#weapon').removeAttr('twohand');
}

function getURLParameters(url){

    var result = {};
    var searchIndex = url.indexOf("?");
    if (searchIndex == -1 ) return result;
    var sPageURL = url.substring(searchIndex +1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++)
    {
        var sParameterName = sURLVariables[i].split('=');
        result[sParameterName[0]] = sParameterName[1];
    }
    return result;
}


$.extend({
  getUrlVars: function(){
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
      hash = hashes[i].split('=');
      vars.push(hash[0]);
      vars[hash[0]] = hash[1];
    }
    return vars;
    //console.log(hashes);
  },
  getUrlVar: function(name){
    return $.getUrlVars()[name];
  }
});


function checkUrlForParams(url)
{
    var params = getURLParameters(url);
    if(!jQuery.isEmptyObject(params))
    {
      return params;
    }
    else{
      return null;
    }
}
