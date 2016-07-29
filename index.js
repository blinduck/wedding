
var BasicDataComponent = {
    controller: function () {

    },
    view: function () {
       return (m('div.row', [
           m("div.col-xs-12", [
               m("p", "November 6th"),
               m("p", "Open Farm Community"),
               m("p", "Guests to start arriving at 5PM"),
               m("p", "Ceremony starts at 5.30PM on the dot")
           ])
       ]))
    }


}

var NavComponent = {
    controller: function () {

    },
    view: function (ctrl) {
        return m("div", 'testing')
    }

}

m.mount(document.getElementById('content'), BasicDataComponent);
