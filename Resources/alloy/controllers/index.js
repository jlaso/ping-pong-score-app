function Controller() {
    function showPounctuationOptions() {
        $.pounctuationOptions.show();
    }
    function pounctuationDialogClick(e) {
        switch (e.index) {
          case 0:
            pounctuation = 7;
            break;

          case 1:
            pounctuation = 11;
            break;

          case 2:
            pounctuation = 21;
            break;

          default:
            return;
        }
        $.pounctuation.setText(pounctuation);
    }
    function playerwins(player) {
        players[player].count++;
        players[player].count >= pounctuation && alert("Player " + players[player].name + " wins the game");
        return players[player].count;
    }
    function player1wins() {
        $.player1_count.setText(playerwins(0));
    }
    function player2wins() {
        $.player2_count.setText(playerwins(1));
    }
    function changePlayer1Name() {}
    function changePlayer2Name() {}
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createTabGroup({
        id: "index"
    });
    $.__views.__alloyId2 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Settings",
        id: "__alloyId2"
    });
    $.__views.__alloyId3 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        text: "Player 1 name",
        top: "20",
        left: "0",
        id: "__alloyId3"
    });
    $.__views.__alloyId2.add($.__views.__alloyId3);
    $.__views.__alloyId4 = Ti.UI.createButton({
        title: "Change",
        top: "20",
        right: "0",
        id: "__alloyId4"
    });
    $.__views.__alloyId2.add($.__views.__alloyId4);
    changePlayer1Name ? $.__views.__alloyId4.addEventListener("click", changePlayer1Name) : __defers["$.__views.__alloyId4!click!changePlayer1Name"] = true;
    $.__views.player1_name = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 40,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        top: "40",
        left: "0",
        id: "player1_name"
    });
    $.__views.__alloyId2.add($.__views.player1_name);
    $.__views.__alloyId5 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        text: "Player 2 name",
        top: "120",
        left: "0",
        id: "__alloyId5"
    });
    $.__views.__alloyId2.add($.__views.__alloyId5);
    $.__views.__alloyId6 = Ti.UI.createButton({
        title: "Change",
        top: "120",
        right: "0",
        id: "__alloyId6"
    });
    $.__views.__alloyId2.add($.__views.__alloyId6);
    changePlayer2Name ? $.__views.__alloyId6.addEventListener("click", changePlayer2Name) : __defers["$.__views.__alloyId6!click!changePlayer2Name"] = true;
    $.__views.player2_name = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 40,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        top: "140",
        left: "0",
        id: "player2_name"
    });
    $.__views.__alloyId2.add($.__views.player2_name);
    $.__views.__alloyId7 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        text: "Pounctuation",
        top: "200",
        left: "0",
        id: "__alloyId7"
    });
    $.__views.__alloyId2.add($.__views.__alloyId7);
    var __alloyId9 = [];
    __alloyId9.push("7");
    __alloyId9.push("11");
    __alloyId9.push("21");
    __alloyId9.push("Cancel");
    var __alloyId15 = [];
    __alloyId15.push("Select");
    __alloyId15.push("Cancel");
    $.__views.pounctuationOptions = Ti.UI.createOptionDialog({
        options: __alloyId9,
        buttonNames: __alloyId15,
        id: "pounctuationOptions",
        title: "Pounctuation",
        cancel: "3"
    });
    pounctuationDialogClick ? $.__views.pounctuationOptions.addEventListener("click", pounctuationDialogClick) : __defers["$.__views.pounctuationOptions!click!pounctuationDialogClick"] = true;
    $.__views.__alloyId18 = Ti.UI.createButton({
        title: "Change",
        top: "200",
        right: "0",
        id: "__alloyId18"
    });
    $.__views.__alloyId2.add($.__views.__alloyId18);
    showPounctuationOptions ? $.__views.__alloyId18.addEventListener("click", showPounctuationOptions) : __defers["$.__views.__alloyId18!click!showPounctuationOptions"] = true;
    $.__views.pounctuation = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 40,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        text: "21",
        top: "240",
        left: "0",
        id: "pounctuation"
    });
    $.__views.__alloyId2.add($.__views.pounctuation);
    $.__views.__alloyId1 = Ti.UI.createTab({
        window: $.__views.__alloyId2,
        title: "Settings",
        icon: "KS_nav_ui.png",
        id: "__alloyId1"
    });
    $.__views.index.addTab($.__views.__alloyId1);
    $.__views.__alloyId20 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Count",
        id: "__alloyId20"
    });
    $.__views.player1wins = Ti.UI.createButton({
        title: "Player 1 wins point",
        id: "player1wins",
        top: "0",
        left: "0",
        width: "100%",
        height: "20%"
    });
    $.__views.__alloyId20.add($.__views.player1wins);
    player1wins ? $.__views.player1wins.addEventListener("click", player1wins) : __defers["$.__views.player1wins!click!player1wins"] = true;
    $.__views.player1_count = Ti.UI.createLabel({
        width: "100%",
        height: Ti.UI.SIZE,
        color: "red",
        font: {
            fontSize: 60,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        text: "0",
        id: "player1_count",
        top: "100",
        left: "0",
        align: "right"
    });
    $.__views.__alloyId20.add($.__views.player1_count);
    $.__views.player2wins = Ti.UI.createButton({
        title: "Player 2 wins point",
        id: "player2wins",
        top: "200",
        left: "0",
        width: "100%",
        height: "20%"
    });
    $.__views.__alloyId20.add($.__views.player2wins);
    player2wins ? $.__views.player2wins.addEventListener("click", player2wins) : __defers["$.__views.player2wins!click!player2wins"] = true;
    $.__views.player2_count = Ti.UI.createLabel({
        width: "100%",
        height: Ti.UI.SIZE,
        color: "red",
        font: {
            fontSize: 60,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        text: "0",
        id: "player2_count",
        top: "300",
        left: "0",
        align: "right"
    });
    $.__views.__alloyId20.add($.__views.player2_count);
    $.__views.__alloyId19 = Ti.UI.createTab({
        window: $.__views.__alloyId20,
        title: "Count",
        icon: "KS_nav_views.png",
        id: "__alloyId19"
    });
    $.__views.index.addTab($.__views.__alloyId19);
    $.__views.index && $.addTopLevelView($.__views.index);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var pounctuation = 21;
    var players = [ {
        name: "player 1",
        count: 0
    }, {
        name: "player 2",
        count: 0
    } ];
    $.pounctuation.setText(pounctuation);
    $.player1_name.setText(players[0].name);
    $.player2_name.setText(players[1].name);
    $.index.open();
    __defers["$.__views.__alloyId4!click!changePlayer1Name"] && $.__views.__alloyId4.addEventListener("click", changePlayer1Name);
    __defers["$.__views.__alloyId6!click!changePlayer2Name"] && $.__views.__alloyId6.addEventListener("click", changePlayer2Name);
    __defers["$.__views.pounctuationOptions!click!pounctuationDialogClick"] && $.__views.pounctuationOptions.addEventListener("click", pounctuationDialogClick);
    __defers["$.__views.__alloyId18!click!showPounctuationOptions"] && $.__views.__alloyId18.addEventListener("click", showPounctuationOptions);
    __defers["$.__views.player1wins!click!player1wins"] && $.__views.player1wins.addEventListener("click", player1wins);
    __defers["$.__views.player2wins!click!player2wins"] && $.__views.player2wins.addEventListener("click", player2wins);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;