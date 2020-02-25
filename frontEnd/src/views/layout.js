var m = require("mithril")

module.exports = {
    view: function(vnode) {
        return m("header.masthead mb-auto", [
            m("div.inner", [
                m("h3.masthead-brand", "Student Saver", [
                    m("nav.nav nav-masthead justify-content-center", [
                        m("a.nav-link active", "Search"),
                        m("a.nav-link", "Add")
                    ]
                    )
                ])
            ],
            m("section", vnode.children))
        ])
    }
}