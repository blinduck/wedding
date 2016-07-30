
var BasicDataComponent = {
    controller: function () {

    },
    view: function () {
       return (m('div.row', [
           m("div.col-xs-12", [
               m("img#main-image.img-rounded", {src:'hitched.gif'}),
               m("h3#main-header.cursive.text-center", m.trust('Deepan & Julianne <br> Get Hitched')),
               m("div.text-center.lead", [
                   m("p", "Friday, November 6th 2016"),
                   m("p", "Open Farm Community"),
                   m("p", "130E Minden Rd, Singapore 248819"),
                   m("p", "Please arrive by 5. Ceremony starts at 530."),
                   m("p", "Outdoor solemnization followed by indoor dinner"),
                   m('p', "Free Flow Beer & Wine (Don't drive?)"),
               ]),

           ])
       ]))
    }


};

var NavComponent = {
    controller: function () {
        this.headers = [
            {route: '/', text: 'home'},
            {route: '/location', text: 'map'},
            {route: '/rsvp', text: 'rsvp'}
        ]
    },
    view: function(ctrl) {
        return(m("ul", ctrl.headers.map(function(header){
            return (m('li', {class: m.route() == header.route ? 'active' : ''}, [
                m("a[href='" + header.route + "']",
                    {config: m.route},
                    header.text)
            ]))
        })))
    }

};

var RSVPComponent = {
    view: function (ctrl) {
        return m.trust('<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdT9xiirANiKVjxLEpm_AfGnIRnpJPjFRe0_Q2bjkXwM2VZ3A/viewform?embedded=true" width="100%" height="1000px" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>')
    }
};

var LocationComponent = {
    view: function (ctrl) {
        return m('div.text-center', [
            m.trust('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5480.40373304769!2d103.81478595870996!3d1.3049512767508944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1a224e7f6a3b%3A0x3c9a08c69ab33461!2sOpen+Farm+Community!5e0!3m2!1sen!2ssg!4v1469800540533" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'),
        ])
    }

};

m.mount(document.getElementById('nav'),NavComponent);
m.route(document.getElementById('content'), '/', {
    "/": BasicDataComponent,
    "/location": LocationComponent,
    "/rsvp": RSVPComponent
});
