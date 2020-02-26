var m = require("mithril")

module.exports = {
    view: function (vnode) {
        return m("div.cover-container d-flex h-100 p-3 mx-auto flex-column", [
            m("header.masthead mb-auto", [
                m("div.inner", [
                    m("h3.masthead-brand", "Student Saver"),
                    m("nav.nav nav-masthead justify-content-center", [
                        m("a.nav-link active", "Search"),
                        m("a.nav-link", "Add")
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
}