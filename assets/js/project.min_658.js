! function(a) {
    "use strict";
    let t = a("body"),
        o = !1,
        r = !1;

    function n(t, e) {
        var n, i = t;
        e && (n = new URL(t), i = function(t) {
            const e = new URL(t),
                n = new URLSearchParams;
            return e.searchParams.forEach((t, e) => {
                n.has(e) ? n.set(e, n.get(e) + "," + t) : n.set(e, t)
            }), `${e.origin}${e.pathname}?${n}`
        }(i = "" !== n.search ? t + "&" + e : t + "?" + e)), o && o.abort(), o = a.ajax({
            type: "GET",
            url: i,
            beforeSend: function() {
                a(".project-archive-content").addClass("preloader")
            },
            success: function(t) {
                let e = a(t);
                a("#main .project-archive-content").replaceWith(e.find("#main .project-archive-content")), r || window.history.pushState(null, null, i), o = !1, a("html, body").animate({
                    scrollTop: a("#main").offset().top - 100
                }, 400), a(document).trigger("spaciaz-project-loaded")
            }
        })
    }
    t.on("click", ".pagination a.page-numbers", function(t) {
        t.preventDefault();
        t = a(this).attr("href");
        r = !1, n(t)
    }), t.on("change ", ".project-form-filter input[type=checkbox]", function(t) {
        if (a(this).is(":checked")) {
            let t = a(this).closest("ul");
            (a(this).val() ? t.find('input[value=""]') : t.find('input:not([value=""])')).prop("checked", !1)
        }
    }), a(t).on("submit", "form.project-form-filter", function(t) {
        t.preventDefault(), a(this).find(":input").filter(function() {
            return !this.value
        }).attr("disabled", "disabled"), a(this).find("select:not([disabled])").each(function() {
            var t = a(this).attr("name");
            1 < a(this).closest("form").find('select[name="' + t + '"]').length && a(this).closest("form").find('select[name="' + t + '"]').attr("disabled", "disabled")
        });
        var e = a(this).attr("action"),
            t = a(this).serialize();
        r = !1, n(e, t)
    }), a(window).on("popstate", function() {
        r = !0, n(window.location.href)
    })
}(jQuery);