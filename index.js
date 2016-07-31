
var BasicDataComponent = {
    view: function () {
       return (m('div#basic-data', [
               //m("img#main-image", {src:'https://padlet-uploads.s3.amazonaws.com/prod/71384074/2b5377409403c9d04357b543bcc630832112f26e/1092a8130bea0d9a4025ca7155c1d85b.gif'}),
               m("img#main-image", {src:'https://padlet-uploads.s3.amazonaws.com/prod/71384074/9fae251dfbec5c41d45913d69fc341ed53b0e5a1/e82729827a0a6b79bd8db37536a15ad0.gif'}),
               m("h3#main-header.cursive.text-center", m.trust('Deepan & Julianne <br> Get Hitched')),
               m("div.text-center", [
                   m("p", "Sunday, November 6th 2016"),
                   m("p", "Open Farm Community"),
                   m("p", "130E Minden Rd, Singapore 248819"),
                   m("p", "Please arrive by 5. Ceremony starts at 530."),
                   m("p", "Outdoor solemnization, followed by indoor dinner."),
                   m('p', "Free Flow Beer & Wine (Consider not driving)"),
                   m("a[href='/rsvp']",{config: m.route}, "RSVP")
               ]),
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
        return([
                m("ul.nav-list", ctrl.headers.map(function(header){
                    return (m('li', {class: m.route() == header.route ? 'active' : ''}, [
                        m("a[href='" + header.route + "']",
                            {config: m.route},
                            header.text)
                    ]))
                }))
            ]
        )
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
            m("div", [
                m("h3", "Nearby Parking:"),
                m("p", "Off Minden Road, along Sherwood Road"),
                m("p", "Botanic Gardens, along Tyersall Avenue & Cluny Road"),
                m("p", "Dempsey Road, Blk 7A, 8D, 11 - 18, 22"),
                m("p", "Loewen Road, opp Blk 27A")
            ])

        ])
    }
};

m.mount(document.getElementById('nav'),NavComponent);
m.route(document.getElementById('content'), '/', {
    "/": BasicDataComponent,
    "/location": LocationComponent,
    "/rsvp": RSVPComponent
});
