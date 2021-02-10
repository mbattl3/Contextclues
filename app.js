$(document).ready(function () {

    var friend = ['Timmy', 'Tommy', 'Billy', 'Bobby', 'Jimmy'];

    var location = ['Shed','basement','attic','bathroom','dungeon','closet','garage','barn','crawlspace','porch'];

    var tool = ['Tape measure','adjustable spanner','electric drill','hammer','hacksaw','ladder','utility knife','wire','mallet','pliers','screwdriver','wrench','chisel','gloves','wheelbarrow','axe','bolt cutter','box cutter','shovel','chainsaw'];
   
    for (var i = 1; i <= 100; i++) {
        var cardFront = ('Accusation ' + i);
        var $card = $('<h3>' + cardFront + '</h3>')
        $($card).appendTo('body');
        $($card).click(showCard(i))
    }


    function showCard(i) {
        var friendName = friend[i % friend.length];
        var locationName = location[i % location.length];
        var toolName = tool[i % tool.length];

        function makeAccusation() {
            alert(`I accuse ${friendName}, with the ${toolName} in the ${locationName}`)
        }
        return makeAccusation;
    }

})