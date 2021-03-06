var m = require("mithril")

module.exports = {
    view: function (vnode) {
        const route = m.route.get();
        return m("div.cover-container d-flex h-100 p-3 mx-auto flex-column", [
            m("header.masthead mb-auto", [
                m("div.inner", [
                    m("nav.nav nav-masthead justify-content-center", [
                        m(m.route.Link, {href: "/list", class: 'nav-link' + (route === "/list" ? ' active' : '')}, "Zoeken"),
                        m(m.route.Link, {href: "/popular", class: 'nav-link' + (route === "/popular" ? ' active' : '')}, "Populaire kortingen"),
                        m(m.route.Link, {href: "/add", class: 'nav-link' + (route === "/add" ? ' active' : '')}, "Voeg korting toe")
                    ])
                ])
            ]),
            m("main", vnode.children),
            m("footer.mastfoot mt-auto", [
                m("div.inner", [
                    m("p", "Copyright ", [
                        m("a", {href:"https://github.com/SoftwareForScience/student-saver"}, "Student Saver")
                    ], " 2020")
                ])
            ])

        ])
    }
};
