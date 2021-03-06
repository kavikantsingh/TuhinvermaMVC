/* 
* VenoBox - jQuery Plugin
* version: 1.3.6
* @requires jQuery
*
* Examples at http://lab.veno.it/venobox/
* License: Creative Commons Attribution 3.0 License
* License URI: http://creativecommons.org/licenses/by/3.0/
* Copyright 2013-2014 Nicola Franchini - @nicolafranchini
*
*/
(function (D) {
    var u, k, n, M, y, G, i, x, z, f, H, c, l, r, J, q, j, P, R, I, t, v, N, C, A, b, g, d, Q, e, O, w, a, o, B, loadingImg;
    D.fn.extend({
        venobox: function (S) {
            var T = {
                framewidth: "",
                frameheight: "",
                border: "0",
                bgcolor: "#fff",
                numeratio: false,
                infinigall: false
            };
            var S = D.extend(T, S);
            return this.each(function () {
                var U = D(this);
                U.addClass("vbox-item");
                U.data("framewidth", S.framewidth);
                U.data("frameheight", S.frameheight);
                U.data("border", S.border);
                U.data("bgcolor", S.bgcolor);
                U.data("numeratio", S.numeratio);
                U.data("infinigall", S.infinigall);
                u = (navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false);
                k = ((document.all && !window.atob) ? true : false);
                U.click(function (V) {
                    V.stopPropagation();
                    V.preventDefault();
                    U = D(this);
                    n = U.data("overlay");
                    J = U.data("framewidth");
                    q = U.data("frameheight");
                    j = U.data("border");
                    P = U.data("bgcolor");
                    A = false;
                    b = false;
                    g = false;
                    z = U.attr("href");
                    f = D(window).scrollTop();
                    f = -f;
                    D("body").wrapInner('<div class="vwrap"></div>');
                    y = D(".vwrap");
                    x = '<div class="vbox-overlay" style="background:' + n + '"><div class="vbox-preloader">Loading...</div><div class="vbox-container"><div class="vbox-content"></div></div><div class="vbox-title"></div><div class="vbox-num">0/0</div><div class="vbox-close">X</div><div class="vbox-next">next</div><div class="vbox-prev">prev</div></div>';

                    D("body").append(x);
                    M = D(".vbox-overlay");
                    G = D(".vbox-container");
                    i = D(".vbox-content");
                    Q = D(".vbox-num");
                    d = D(".vbox-title");
                    loadingImg = D(".vbox-preloader");
                    i.html("");
                    i.css({ "opacity": "0", "top": "-" + S.frameheight });
                    W();
                    M.css("min-height", D(window).outerHeight() + 130);
                    loadingImg.css({ "z-index": 1 });
                    if (k) {
                        M.animate({
                            opacity: 1
                        }, 250, function () {
                            i.animate({ opacity: 1, top: 0 }, 250);
                            M.css({
                                "min-height": D(window).outerHeight(),
                                height: "auto"
                            });
                            if (U.data("type") == "iframe") {
                                h()
                            } else {
                                if (U.data("type") == "inline") {
                                    m()
                                } else {
                                    if (U.data("type") == "ajax") {
                                        L()
                                    } else {
                                        if (U.data("type") == "vimeo") {
                                            p()
                                        } else {
                                            if (U.data("type") == "youtube") {
                                                K()
                                            } else {
                                                i.html('<img src="' + z + '">');
                                                E()
                                            }
                                        }
                                    }
                                }
                            }
                        })
                    } else {
                        M.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function () {
                            i.animate({ opacity: 1, top: 0 }, 250);
                            M.css({
                                "min-height": D(window).outerHeight(),
                                height: "auto"
                            });
                            if (U.data("type") == "iframe") {
                                h()
                            } else {
                                if (U.data("type") == "inline") {
                                    m()
                                } else {
                                    if (U.data("type") == "ajax") {
                                        L()
                                    } else {
                                        if (U.data("type") == "vimeo") {
                                            p()
                                        } else {
                                            if (U.data("type") == "youtube") {
                                                K()
                                            } else {
                                                i.html('<img src="' + z + '">');
                                                E()
                                            }
                                        }
                                    }
                                }
                            }
                        });
                        M.css("opacity", "1")
                    } if (u) {
                        y.css({
                            position: "fixed",
                            top: f,
                            opacity: "0"
                        }).data("top", f)
                    } else {
                        y.css({
                            position: "fixed",
                            top: f
                        }).data("top", f);
                        D(window).scrollTop(0)
                    }

                    function W() {
                        I = U.data("gall");
                        e = U.data("numeratio");
                        B = U.data("infinigall");
                        t = D('.vbox-item[data-gall="' + I + '"]');
                        if (t.length > 0 && e === true) {
                            Q.html(t.index(U) + 1 + " / " + t.length);
                            Q.fadeIn()
                        } else {
                            Q.fadeOut()
                        }
                        v = t.eq(t.index(U) + 1);
                        N = t.eq(t.index(U) - 1);
                        if (U.attr("title")) {
                            C = U.attr("title");
                            d.fadeIn()
                        } else {
                            C = "";
                            d.fadeOut()
                        } if (B === true) {
                            A = true;
                            b = true;
                            if (v.length < 1) {
                                v = t.eq(0)
                            }
                            if (t.index(U) < 1) {
                                N = t.eq(t.index(t.length))
                            }
                        } else {
                            if (v.length > 0) {
                                D(".vbox-next").css("display", "block");
                                A = true
                            } else {
                                D(".vbox-next").css("display", "none");
                                A = false
                            } if (t.index(U) > 0) {
                                D(".vbox-prev").css("display", "block");
                                b = true
                            } else {
                                D(".vbox-prev").css("display", "none");
                                b = false
                            }
                        }
                    }
                    D("body").keydown(function (X) {
                        if (g) {
                            return
                        }
                        if (X.keyCode == 37 && b == true) {
                            g = true;
                            n = N.data("overlay");
                            J = N.data("framewidth");
                            q = N.data("frameheight");
                            j = N.data("border");
                            P = N.data("bgcolor");
                            z = N.attr("href");
                            if (N.attr("title")) {
                                C = N.attr("title")
                            } else {
                                C = ""
                            } if (n === undefined) {
                                n = ""
                            }
                            M.css("min-height", D(window).outerHeight() + 130);
                            i.animate({
                                opacity: 0
                            }, 500, function () {
                                M.css("min-height", D(window).outerHeight()).css("background", n);
                                if (N.data("type") == "iframe") {
                                    h()
                                } else {
                                    if (N.data("type") == "inline") {
                                        m()
                                    } else {
                                        if (N.data("type") == "ajax") {
                                            L()
                                        } else {
                                            if (N.data("type") == "youtube") {
                                                K()
                                            } else {
                                                if (N.data("type") == "vimeo") {
                                                    p()
                                                } else {
                                                    i.html('<img src="' + z + '">');
                                                    E()
                                                }
                                            }
                                        }
                                    }
                                }
                                U = N;
                                W();
                                g = false
                            })
                        }
                        if (X.keyCode == 39 && A == true) {
                            g = true;
                            n = v.data("overlay");
                            J = v.data("framewidth");
                            q = v.data("frameheight");
                            j = v.data("border");
                            P = v.data("bgcolor");
                            z = v.attr("href");
                            if (v.attr("title")) {
                                C = v.attr("title")
                            } else {
                                C = ""
                            } if (n === undefined) {
                                n = ""
                            }
                            M.css("min-height", D(window).outerHeight() + 130);
                            i.animate({
                                opacity: 0
                            }, 500, function () {
                                M.css("min-height", D(window).outerHeight()).css("background", n);
                                if (v.data("type") == "iframe") {
                                    h()
                                } else {
                                    if (v.data("type") == "inline") {

                                        m()
                                    } else {
                                        if (v.data("type") == "ajax") {
                                            L()
                                        } else {
                                            if (v.data("type") == "youtube") {
                                                K()
                                            } else {
                                                if (v.data("type") == "vimeo") {
                                                    p()
                                                } else {
                                                    i.html('<img src="' + z + '">');
                                                    E()
                                                }
                                            }
                                        }
                                    }
                                }
                                U = v;
                                W();
                                g = false
                            })
                        }
                    });
                    D(".vbox-next").click(function () {
                        n = v.data("overlay");
                        J = v.data("framewidth");
                        q = v.data("frameheight");
                        j = v.data("border");
                        P = v.data("bgcolor");
                        z = v.attr("href");
                        if (v.attr("title")) {
                            C = v.attr("title")
                        } else {
                            C = ""
                        } if (n === undefined) {
                            n = ""
                        }
                        M.css("min-height", D(window).outerHeight() + 130);
                        i.animate({
                            opacity: 0
                        }, 500, function () {
                            M.css("min-height", D(window).outerHeight()).css("background", n);
                            if (v.data("type") == "iframe") {
                                h()
                            } else {
                                if (v.data("type") == "inline") {
                                    m()
                                } else {
                                    if (v.data("type") == "ajax") {
                                        L()
                                    } else {
                                        if (v.data("type") == "youtube") {
                                            K()
                                        } else {
                                            if (v.data("type") == "vimeo") {
                                                p()
                                            } else {
                                                i.html('<img src="' + z + '">');
                                                E()
                                            }
                                        }
                                    }
                                }
                            }
                            U = v;
                            W()
                        })
                    });
                    D(".vbox-prev").click(function () {
                        n = N.data("overlay");
                        J = N.data("framewidth");
                        q = N.data("frameheight");
                        j = N.data("border");
                        P = N.data("bgcolor");
                        z = N.attr("href");
                        if (N.attr("title")) {
                            C = N.attr("title")
                        } else {
                            C = ""
                        } if (n === undefined) {
                            n = ""
                        }
                        M.css("min-height", D(window).outerHeight() + 130);
                        i.animate({
                            opacity: 0
                        }, 500, function () {
                            M.css("min-height", D(window).outerHeight()).css("background", n);
                            if (N.data("type") == "iframe") {
                                h()
                            } else {
                                if (N.data("type") == "inline") {
                                    m()
                                } else {
                                    if (N.data("type") == "ajax") {
                                        L()
                                    } else {
                                        if (N.data("type") == "youtube") {
                                            K()
                                        } else {
                                            if (N.data("type") == "vimeo") {
                                                p()
                                            } else {
                                                i.html('<img src="' + z + '">');
                                                E()
                                            }
                                        }
                                    }
                                }
                            }
                            U = N;
                            W()
                        })
                    });
                    D(".vbox-close, .vbox-overlay").click(function (X) {
                        a = ".figlio";
                        w = ".vbox-prev";
                        O = ".vbox-next";
                        o = ".figlio *";
                        i = D('.vbox-content');
                        if (!D(X.target).is(a) && !D(X.target).is(O) && !D(X.target).is(w) && !D(X.target).is(o)) {
                            if (k) {
                                i.animate({ top: "-" + S.frameheight }, 500);
                                M.animate({
                                    opacity: 0
                                }, 500, function () {
                                    M.remove();
                                    D(".vwrap").children().unwrap();
                                    D(window).scrollTop(-f);
                                    g = false
                                })
                            } else {
                                i.animate({ top: "-" + S.frameheight }, 500);
                                M.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd");
                                M.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function () {
                                    M.remove();
                                    if (u) {
                                        D(".vwrap").bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function () {
                                            D(".vwrap").children().unwrap();
                                            D(window).scrollTop(-f)
                                        });
                                        D(".vwrap").css("opacity", "1")
                                    } else {
                                        D(".vwrap").children().unwrap();
                                        D(window).scrollTop(-f)
                                    }
                                    g = false
                                });
                                M.css("opacity", "0")
                            }
                        }
                    });
                    return false
                })
            })
        }
    });

    function L() {
        D.ajax({
            url: z,
            cache: false
        }).done(function (S) {
            i.html('<div class="vbox-inline">' + S + "</div>");
            s(true)
        }).fail(function () {
            i.html('<div class="vbox-inline"><p>Error retrieving contents, please retry</div>');
            s(true)
        })
    }

    function h() {
        i.html('<iframe class="venoframe" id="frame_samar" border="0" src="' + z + '" frameborder="0"></iframe>');
        $('#frame_samar').load(function () {
            loadingImg.css({ "z-index": -1 });
        });
        s();
    }

    function p() {
        var T = z.split("/");
        var S = T[T.length - 1];
        i.html('<iframe class="venoframe" src="http://player.vimeo.com/video/' + S + '"></iframe>');
        s()
    }

    function K() {
        var T = z.split("/");
        var S = T[T.length - 1];
        i.html('<iframe class="venoframe" allowfullscreen src="http://www.youtube.com/embed/' + S + '"></iframe>');
        s()
    }

    function m() {
        i.html('<div class="vbox-inline">' + D(z).html() + "</div>");
        s()
    }

    function E() {
        r = D(".vbox-content").find("img");
        r.one("load", function () {
            s()
        }).each(function () {
            if (this.complete) {
                D(this).load()
            }
        })
    }

    function s(S) {
        S = S || false;
        if (S != true) {
            D(window).scrollTop(0)
        }
        d.html(C);
        i.find(">:first-child").addClass("figlio");
        D(".figlio").css("width", J).css("height", q).css("padding", j).css("background", P);
        H = i.outerHeight();
        c = D(window).height();
        if (H < c) {
            l = (c - H) / 2;
            i.css("margin-top", l);
            i.css("margin-bottom", l)
        } else {
            i.css("margin-top", "40px");
            i.css("margin-bottom", "40px")
        }
        i.animate({
            opacity: "1"
        }, "slow");

       // $('.vbox-overlay').css('height', 'auto');
        

    }

    function F() {
        if (D(".vbox-content").length) {
            H = i.height();
            c = D(window).height();
            if (H < c) {
                l = (c - H) / 2;
                i.css("margin-top", l);
                i.css("margin-bottom", l)
            } else {
                i.css("margin-top", "40px");
                i.css("margin-bottom", "40px")
            }

        }

    }
    D(window).resize(function () {
        F()
    })
})(jQuery);