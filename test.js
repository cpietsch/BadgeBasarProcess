<script>
! function () {
    function e(e) {
        return function (t) {
            for (var a, n, r, o = t[0][0], i = t[0][1], s = [o, ",", i + e, "v", -2 * e], l = 0, c = t.length; ++l < c;) a = t[l][0], n = t[l][1], r = (i + n) / 2, s.push("C", o, ",", r, " ", a, ",", r, " ", a, ",", n + e, "v", -2 * e), o = a, i = n;
            return s.join("")
        }
    }
    var t = [{
        id: "sec",
        adjust: -1,
        name: "Southeastern Conference"
    }, {
        id: "big-ten",
        adjust: -1,
        name: "Big Ten Conference"
    }, {
        id: "pac-12",
        adjust: 0,
        name: "Pacific-12 Conference"
    }, {
        id: "big-8",
        adjust: -15,
        name: "Big Eight Conference"
    }, {
        id: "big-12",
        adjust: -4,
        name: "Big 12 Conference"
    }, {
        id: "swc",
        adjust: -12,
        name: "Southwest Conference"
    }, {
        id: "mwc",
        adjust: -4,
        name: "Mountain West Conference"
    }, {
        id: "wac",
        adjust: -4,
        name: "Western Athletic Conference"
    }, {
        id: "sun-belt",
        adjust: -14,
        name: "Sun Belt Conference"
    }, {
        id: "big-west",
        adjust: -3,
        name: "Big West Conference"
    }, {
        id: "mvc",
        adjust: -1,
        name: "Missouri Valley Conference"
    }, {
        id: "southern",
        adjust: -28,
        name: "Southern Conference"
    }, {
        id: "cusa",
        adjust: -1,
        name: "Conference USA"
    }, {
        id: "american",
        adjust: -15,
        name: "American Athletic Conference"
    }, {
        id: "big-east",
        adjust: 0,
        name: "Big East Conference"
    }, {
        id: "acc",
        adjust: -1,
        name: "Atlantic Coast Conference"
    }, {
        id: "mac",
        adjust: -5,
        name: "Mid-American Conference"
    }, {
        id: "ivy",
        adjust: 0,
        name: "Ivy League"
    }],
        a = [{
            year: 2015,
            orient: "top",
            label: "SEC",
            id: "sec"
        }, {
            year: 2015,
            orient: "top",
            label: "Big Ten",
            id: "big-ten"
        }, {
            year: 2015,
            orient: "top",
            label: "Pacific-12",
            id: "pac-12"
        }, {
            year: 2015,
            orient: "top",
            label: "Big 12",
            id: "big-12"
        }, {
            year: 2015,
            orient: "top",
            label: "Mountain West",
            id: "mwc"
        }, {
            year: 2015,
            orient: "top",
            label: "Sun Belt",
            id: "sun-belt"
        }, {
            year: 2015,
            orient: "top",
            label: "Conference USA",
            id: "cusa"
        }, {
            year: 2015,
            orient: "top",
            label: "American",
            id: "american"
        }, {
            year: 2015,
            orient: "top",
            label: "A.C.C.",
            id: "acc"
        }, {
            year: 2015,
            orient: "top",
            label: "Mid- American",
            id: "mac"
        }, {
            year: 2012,
            orient: "top",
            label: "Western Athletic",
            id: "wac"
        }, {
            year: 2012,
            orient: "top",
            label: "Big East",
            id: "big-east"
        }, {
            year: 2005,
            orient: "top",
            label: "WAC",
            id: "wac"
        }, {
            year: 2005,
            orient: "top",
            label: "Conference USA",
            id: "cusa"
        }, {
            year: 2005,
            orient: "top",
            label: "Big East",
            id: "big-east"
        }, {
            year: 2005,
            orient: "top",
            label: "A.C.C.",
            id: "acc"
        }, {
            year: 2003,
            orient: "top",
            label: "SEC",
            id: "sec"
        }, {
            year: 2003,
            orient: "top",
            label: "Big Ten",
            id: "big-ten"
        }, {
            year: 2003,
            orient: "top",
            label: "Pac-10",
            id: "pac-12"
        }, {
            year: 2003,
            orient: "top",
            label: "Big 12",
            id: "big-12"
        }, {
            year: 2003,
            orient: "top",
            label: "Mid- American",
            id: "mac"
        }, {
            year: 2001,
            orient: "top",
            label: "Sun Belt",
            id: "sun-belt"
        }, {
            year: 1999,
            orient: "top",
            label: "Mountain West",
            id: "mwc"
        }, {
            year: 1996,
            orient: "top",
            label: "Big 12",
            id: "big-12"
        }, {
            year: 1996,
            orient: "top",
            label: "WAC",
            id: "wac"
        }, {
            year: 1996,
            orient: "top",
            label: "Conference USA",
            id: "cusa"
        }, {
            year: 1996,
            orient: "top",
            label: "A.C.C.",
            id: "acc"
        }, {
            year: 1996,
            orient: "top",
            label: "Mid- American",
            id: "mac"
        }, {
            year: 1995,
            orient: "bottom",
            label: "Southwest",
            id: "swc"
        }, {
            year: 1995,
            orient: "bottom",
            label: "Big Eight",
            id: "big-8"
        }, {
            year: 1995,
            orient: "bottom",
            label: "Big West",
            id: "big-west"
        }, {
            year: 1992,
            orient: "top",
            label: "SEC",
            id: "sec"
        }, {
            year: 1991,
            orient: "top",
            label: "Big East",
            id: "big-east"
        }, {
            year: 1986,
            orient: "top",
            label: "SEC",
            id: "sec"
        }, {
            year: 1986,
            orient: "top",
            label: "Big Ten",
            id: "big-ten"
        }, {
            year: 1986,
            orient: "top",
            label: "Pac-10",
            id: "pac-12"
        }, {
            year: 1986,
            orient: "top",
            label: "Mid- American",
            id: "mac"
        }, {
            year: 1986,
            orient: "top",
            label: "Big Eight",
            id: "big-8"
        }, {
            year: 1986,
            orient: "top",
            label: "Southwest",
            id: "swc"
        }, {
            year: 1986,
            orient: "top",
            label: "WAC",
            id: "wac"
        }, {
            year: 1986,
            orient: "top",
            label: "A.C.C.",
            id: "acc"
        }, {
            year: 1984,
            orient: "top",
            label: "Missouri Valley",
            id: "mvc"
        }, {
            year: 1981,
            orient: "bottom",
            label: "Southern",
            id: "southern"
        }, {
            year: 1980,
            orient: "top",
            label: "Ivy League",
            id: "ivy"
        }, {
            year: 1980,
            orient: "top",
            label: "Pacific Coast",
            id: "big-west"
        }, {
            year: 1978,
            orient: "top",
            label: "Pacific-10",
            id: "pac-12"
        }, {
            year: 1977,
            orient: "bottom",
            label: "WAC",
            id: "wac"
        }, {
            year: 1974,
            orient: "top",
            label: "SEC",
            id: "sec"
        }, {
            year: 1974,
            orient: "top",
            label: "Big Ten",
            id: "big-ten"
        }, {
            year: 1974,
            orient: "top",
            label: "Pac-8",
            id: "pac-12"
        }, {
            year: 1974,
            orient: "top",
            label: "Mid- American",
            id: "mac"
        }, {
            year: 1974,
            orient: "top",
            label: "Big Eight",
            id: "big-8"
        }, {
            year: 1974,
            orient: "top",
            label: "Southwest",
            id: "swc"
        }, {
            year: 1974,
            orient: "top",
            label: "A.C.C.",
            id: "acc"
        }, {
            year: 1974,
            orient: "top",
            label: "Missouri Valley",
            id: "mvc"
        }, {
            year: 1969,
            orient: "bottom",
            label: "Pacific Coast",
            id: "big-west"
        }, {
            year: 1965,
            orient: "bottom",
            label: "SEC",
            id: "sec"
        }, {
            year: 1965,
            orient: "bottom",
            label: "Big Ten",
            id: "big-ten"
        }, {
            year: 1965,
            orient: "bottom",
            label: "Pacific-8",
            id: "pac-12"
        }, {
            year: 1965,
            orient: "bottom",
            label: "Big Eight",
            id: "big-8"
        }, {
            year: 1965,
            orient: "bottom",
            label: "Southwest",
            id: "swc"
        }, {
            year: 1965,
            orient: "bottom",
            label: "WAC",
            id: "wac"
        }, {
            year: 1965,
            orient: "bottom",
            label: "Missouri Valley",
            id: "mvc"
        }, {
            year: 1965,
            orient: "bottom",
            label: "Southern",
            id: "southern"
        }, {
            year: 1965,
            orient: "bottom",
            label: "A.C.C.",
            id: "acc"
        }, {
            year: 1965,
            orient: "bottom",
            label: "Mid- American",
            id: "mac"
        }, {
            year: 1965,
            orient: "bottom",
            label: "Ivy League",
            id: "ivy"
        }],
        n = d3.map();
    t.forEach(function (e, t) {
        e.index = t, n.set(e.id, e)
    });
    var r = 1965,
        o = 2015;
    ! function () {
        function e(e) {
            return e.year = +e.year, e.count = +e.count, e
        }
        var t = {
            top: 0,
            right: 2,
            bottom: 0,
            left: 2
        }, a = 120 - t.left - t.right,
            n = 15 - t.top - t.bottom,
            i = d3.scale.linear().domain([r, o]).range([0, a]),
            s = d3.scale.linear().rangeRound([n, 0]),
            l = d3.svg.area().interpolate("step").x(function (e) {
                return i(e.year)
            }).y1(function (e) {
                return s(e.count)
            }).y0(s(0)),
            c = d3.select("#independents").append("svg").attr("width", a + t.left + t.right).attr("height", n + t.top + t.bottom).append("g").attr("transform", "translate(" + t.left + "," + t.top + ")");
        d3.tsv("http://graphics8.nytimes.com/newsgraphics/2013/11/30/football-conferences/71f2918fd830772afcf6433ebc6744b4e38ef94e/independents.tsv", e, function (e, t) {
            s.domain([0, d3.max(t, function (e) {
                return e.count
            })]), c.append("path").datum(t).attr("class", "area").attr("d", l)
        })
    }(),
    function () {
        var t = {
            top: 40.5,
            right: 35.5,
            bottom: 40.5,
            left: 65.5
        }, i = 2230 - t.left - t.right,
            s = 1096 - t.top - t.bottom,
            l = d3.time.scale().domain([new Date(r, 0, 1), new Date(o, 0, 1)]).range([i, 0]),
            c = d3.scale.linear().rangeRound([20, s]),
            d = d3.svg.line().interpolate(e(4.5)).defined(function (e) {
                return e.conference
            }).y(function (e) {
                return l(e.date)
            }).x(function (e) {
                return c(e.y)
            }),
            p = d3.select("#graphic").append("svg").attr("height", i + t.left + t.right).attr("width", s + t.top + t.bottom).append("g").attr("transform", "translate(" + t.top + "," + t.left + ")");
        p.append("defs").append("marker").attr("id", "arrowhead").attr("viewBox", "-.1 -5 10 10").attr("orient", "auto").attr("markerWidth", 3).attr("markerHeight", 3).append("path").attr("d", "M-.1,-4L3.9,0L-.1,4"), p.append("g").attr("class", "axis axis--minor").attr("transform", "translate(" + s + ",0)").call(d3.svg.axis().scale(l).orient("right").tickSize(-s).ticks(d3.time.year)).selectAll(".tick").attr("class", function (e) {
            return "tick tick--" + (1984 === e.getFullYear() ? 1984 : e.getFullYear() % 10 ? "minor" : "major")
        }), p.append("g").attr("class", "axis axis--major").attr("transform", "translate(" + s + ",0)").call(d3.svg.axis().scale(l).orient("right").tickValues(l.ticks(d3.time.year, 5).concat(l.domain()))), p.append("g").attr("class", "axis axis--major").call(d3.svg.axis().scale(l).orient("left").tickValues(l.ticks(d3.time.year, 5).concat(l.domain())));
        var u = d3.select("#overlay").append("svg").attr("height", i + t.left + t.right).attr("width", s + t.top + t.bottom).append("g").attr("transform", "translate(" + t.top + "," + t.left + ")"),
            h = d3.select("#graphic-subtitle").append("svg").style("position", "absolute").style("margin-top", "-5px").attr("height", 30).attr("width", 30),
            f = h.append("g").attr("class", "school school--switch"),
            y = f.append("linearGradient").attr("id", "school-switch-gradient-key").attr("y1", "100%").attr("y2", "0%").attr("x1", 0).attr("x2", 0);
        y.append("stop").attr("offset", "0%").attr("stop-color", "#d7d7d7"), y.append("stop").attr("offset", "100%").attr("stop-color", "purple"), f.append("path").attr("d", "M" + e(1)([
            [10, 22],
            [20, 8]
        ])).style("stroke", "url(#school-switch-gradient-key)"), d3.tsv("http://graphics8.nytimes.com/newsgraphics/2013/11/30/football-conferences/71f2918fd830772afcf6433ebc6744b4e38ef94e/schools.tsv", function (e, t) {
            function h(e) {
                if (e) {
                    f(e.school.name);
                    var t = c(e.y),
                        a = t > 860;
                    B.style("display", null).attr("transform", "translate(" + (a ? t - 2 : t + 2) + "," + Math.round(l(e.date)) + ")rotate(0)").interrupt().transition().ease("elastic").attr("transform", "translate(" + (a ? t - 2 : t + 2) + "," + Math.round(l(e.date)) + ")rotate(" + (a ? 15 : -15) + ")"), M.style("text-anchor", a ? "end" : "start").attr("x", a ? -10 : 10).text(e.school.name).style("font-weight", "700").append("tspan").style("font-weight", "500").text(" " + e.school.team);
                    var n = M.node().getComputedTextLength() + 5;
                    j.attr("d", a ? "M0,0l-10,-10h" + -n + "v20h" + n + "z" : "M0,0l10,-10h" + n + "v20h-" + n + "z")
                } else f(null), B.style("display", "none")
            }

            function f(e) {
                E.classed("school--hover-hover", function (t) {
                    return t.name === e
                })
            }

            function y(e) {
                d3.selectAll(".school--switch-selected").classed("school--switch-selected", !1).select("stop:first-child").attr("stop-color", "#d7d7d7"), C.classed("school--session-selected", function (t) {
                    return t[0].school.name === e
                }), A.filter(function (t) {
                    return t[0].school.name === e
                }).each(function () {
                    this.parentNode.appendChild(this)
                }).classed("school--switch-selected", !0).select("stop:first-child").attr("stop-color", "orange"), $(".search-select").val(e).trigger("chosen:updated")
            }
            var g = [],
                m = [],
                b = [];
            t = t.filter(function (e) {
                for (var t = r; o >= t; ++t)
                    if (n.get(e[t])) return !0
            }), t.forEach(function (e) {
                for (var t, a = e.years = [], i = [], s = r; o >= s; ++s) {
                    var l = n.get(e[s]),
                        c = {
                            school: e,
                            conference: l,
                            year: s,
                            date: new Date(s, 0, 1)
                        };
                    l ? (t === l && i.forEach(function (e) {
                        e.conference = l
                    }), i = [], t = l) : e[s] || i.push(c), a.push(c), g.push(c)
                }
            }), t.forEach(function (e) {
                var t, a = 0,
                    n = e.years.length,
                    r = e.years[0],
                    o = [r];
                for (r.conference && m.push(o); ++a < n;)
                    if (t = r, r = e.years[a], t.conference === r.conference) o.push(r);
                    else if (o = [r], r.conference) {
                    if (t.conference) b.push([t, r]);
                    else {
                        var i = [r];
                        i.enter = !0, b.push(i)
                    }
                    m.push(o)
                } else {
                    var i = [t];
                    i.exit = !0, b.push(i)
                }
            }), m.forEach(function (e) {
                e.forEach(function (t) {
                    t.session = e
                });
                var t = e.startYear = e[0].year,
                    a = e.endYear = e[e.length - 1].year,
                    r = e[0].school,
                    o = r[t - 1],
                    i = r[a + 1];
                e.previousIndex = n.has(o) ? n.get(o).index : -1, e.nextIndex = n.has(i) ? n.get(i).index : -1
            });
            var v = 6,
                x = d3.nest().key(function (e) {
                    return e.conference.id
                }).sortKeys(function (e, t) {
                    return n.get(e).index - n.get(t).index
                }).key(function (e) {
                    return e.year
                }).sortKeys(function (e, t) {
                    return e - t
                }).entries(g.filter(function (e) {
                    return e.conference
                }));
            x.forEach(function (e) {
                e.maxSize = Math.max(8, d3.max(e.values, function (e) {
                    return e.values.length
                })) + e.values[0].values[0].conference.adjust
            }), c.domain([0, (x.length - 1) * v + d3.sum(x, function (e) {
                return e.maxSize
            })]);
            var w = 0;
            x.forEach(function (e) {
                e.basePosition = w, e.values.forEach(function (e) {
                    e.values.sort(function (e, t) {
                        return d3.ascending(e.session.startYear, t.session.startYear) || d3.ascending(t.session.endYear, e.session.endYear) || d3.ascending(e.session.previousIndex, t.session.previousIndex) || d3.ascending(e.session.nextIndex, t.session.nextIndex) || d3.ascending(e.school.name, t.school.name)
                    }).forEach(function (e, t) {
                        e.y = w + t
                    })
                }), w += e.maxSize + v
            }), d3.select("#search").on("click", function () {
                d3.event.stopPropagation()
            }).append("select").attr("class", "search-select").attr("data-placeholder", "Select a team to highlight.").attr("tabindex", 2).selectAll("option").data([{
                name: "",
                team: ""
            }].concat(t.sort(function (e, t) {
                return d3.ascending(e.name, t.name)
            }))).enter().append("option").attr("value", function (e) {
                return e.name
            }).text(function (e) {
                return e.name + " " + e.team
            }), $(".search-select").chosen({
                width: "100%",
                allow_single_deselect: !0
            }).change(function () {
                y(this.value)
            }), p.append("g").attr("class", "school school--session-halo").selectAll("path").data(m).enter().append("path").attr("d", d);
            var C = p.append("g").attr("class", "school school--session").selectAll("path").data(m).enter().append("path").attr("d", d).classed("school--session-partial", function (e) {
                return "Notre Dame" === e[0].school.name
            });
            p.append("g").attr("class", "school school--switch-halo").selectAll("path").data(b.filter(function (e) {
                return 2 === e.length
            })).enter().append("path").attr("d", d);
            var A = p.append("g").attr("class", "school school--switch").selectAll("g").data(b.sort(function (e, t) {
                return t[t.length - 1].year - e[e.length - 1].year
            })).enter().append("g").attr("class", function (e) {
                return e.enter ? "school--switch--enter" : e.exit ? "school--switch--exit" : null
            }),
                S = A.append("linearGradient").attr("gradientUnits", "userSpaceOnUse").attr("id", function (e, t) {
                    return "school-switch-gradient-" + t
                }).attr("y1", function (e) {
                    return l(e[0].date) + (e[1] ? 0 : e.enter ? -5 : 5)
                }).attr("y2", function (e) {
                    return e[1] ? l(e[1].date) : l(e[0].date) + (e.enter ? 5 : -5)
                }).attr("x1", 0).attr("x2", 0);
            S.append("stop").attr("offset", "0%").attr("stop-color", function (e) {
                return e.enter || e.exit ? "purple" : "#d7d7d7"
            }).attr("stop-opacity", function (e) {
                return e.enter || e.exit ? 0 : 1
            }), S.append("stop").attr("offset", "100%").attr("stop-color", "purple"), A.append("path").attr("d", d).style("stroke", function (e, t) {
                return "url(#school-switch-gradient-" + t + ")"
            });
            var E = p.append("g").attr("class", "school school--hover").selectAll("path").data(t).enter().append("path").attr("d", function (e) {
                return d(e.years)
            });
            p.selectAll(".conference-label").data(a).enter().append("text").attr("class", function (e) {
                return "conference-label conference-label--" + e.year
            }).each(function (e) {
                var t = e.label.split(" ");
                e.labelWords = t.map(function (a, n) {
                    return {
                        word: a,
                        offset: "top" === e.orient ? n - t.length : n + 1.71
                    }
                })
            }).attr("transform", function (e) {
                var t = Math.max(0, Math.min(i, l(new Date(e.year, 0, 1)))),
                    a = x.filter(function (t) {
                        return t.key === e.id
                    })[0].values.filter(function (t) {
                        return t.key == e.year
                    })[0].values;
                return a = (a[0].y + a[a.length - 1].y) / 2, "translate(" + c(a) + "," + t + ")"
            }).selectAll("tspan").data(function (e) {
                return e.labelWords
            }).enter().append("tspan").attr("x", 0).attr("y", function (e) {
                return 1.1 * e.offset + "em"
            }).text(function (e) {
                return e.word
            }), p.append("line").attr("class", "annotation-line").attr("x1", 865).attr("y1", 25).attr("x2", 890).attr("y2", 25), p.append("line").attr("class", "annotation-line").attr("x1", 855).attr("y1", 428).attr("x2", 975).attr("y2", 428), p.append("line").attr("class", "annotation-line").attr("x1", 185).attr("y1", 1320).attr("x2", 185).attr("y2", 1370);
            var B = u.append("g").attr("class", "tooltip").style("display", "none"),
                j = B.append("path"),
                M = B.append("text").attr("dy", ".35em").attr("x", 10);
            u.append("g").attr("class", "voronoi").selectAll("path").data(d3.geom.voronoi().y(function (e) {
                return l(e.date)
            }).x(function (e) {
                return c(e.y)
            }).clipExtent([
                [-40, -40],
                [s + 40, i + 40]
            ])(g.filter(function (e) {
                return !isNaN(e.y)
            }))).enter().append("path").attr("d", function (e) {
                return "M" + e.join("L") + "Z"
            }).on("mouseover", function (e) {
                h(e.point)
            }).on("mouseout", function () {
                h(null)
            }).on("click", function (e) {
                f(null), y(e.point.school.name), d3.event.stopPropagation()
            }), d3.select(window).on("click", function () {
                y(null)
            })
        })
    }()
}(window);
</script>



(function() {

var width = 970,
    height = 1500,
    mugDiameter = 40,
    mugSize = 80;

var bounds = d3.geom.polygon([
  [0, 0],
  [0, height],
  [width, height],
  [width, 0]
]);

var awardType = {
  "Best Actor": "actor",
  "Best Actress": "actor",
  "Best Supporting Actor": "actor",
  "Best Supporting Actress": "actor",
  "Best Picture": "producer",
  "Best Director": "director"
};

var awardRank = {
  "Best Picture": 1,
  "Best Director": 2,
  "Best Actor": 3,
  "Best Actress": 3,
  "Best Supporting Actor": 4,
  "Best Supporting Actress": 4
};

var color = self.color = d3.scale.ordinal()
    .domain(["actor", "producer", "director"])
    .range(["#3182bd", "#42a48d", "#7d4098", "#969696", "#969696", "#969696", "#969696", "#969696"]);

var svg = d3.select(".g-graphic").insert("svg", ".g-note")
    .attr("width", width)
    .attr("height", height);

svg.append("defs").append("clipPath")
    .attr("id", "g-mug-clip")
  .append("circle")
    .attr("r", mugDiameter / 2);

var tooltip = d3.select(".g-graphic").append("div")
    .attr("class", "g-tooltip")
    .style("display", "none");

var tooltipPath = tooltip.append("svg")
    .attr("class", "g-tooltip-path");

tooltipPath.append("path");

var tooltipContent = tooltip.append("div")
    .style("position", "relative")
    .style("z-index", 2)
    .style("padding", "8px");

var tooltipName = tooltipContent.append("div")
    .attr("class", "g-name");

var tooltipDescription = tooltipContent.append("div")
    .attr("class", "g-description");

var overlay = d3.select(".g-graphic").append("svg")
    .attr("width", width)
    .attr("height", height)
    .style("z-index", 3);

d3.json("http://graphics8.nytimes.com/newsgraphics/2013/01/07/movie-network/72ae3b8d92ecc7a67c00babd2a75f34bfdacb3a7/network.json", function(error, network) {

  network.persons.forEach(function(a, i) {
    a.index = i;
    a.links = [];
  });

  network.movies.forEach(function(m, i) {
    m.index = i;
    m.nominations = [];
    m.links.forEach(function(l) {
      var p = l.person = network.persons[l.person];
      l.movie = m;
      p.links.push(l);
      return p;
    });
  });

  network.persons.forEach(function(a, i) {
    a.nominations.forEach(function(n) {
      n.movie = network.movies[n.movie];
      n.movie.nominations.push(n);
      n.person = a;
    });
  });

  svg.append("g")
      .attr("class", "g-movie-clips")
    .selectAll("clipPath")
      .data(network.movies)
    .enter().append("clipPath")
      .attr("id", function(d, i) { return "g-movie-clip-" + i; })
    .append("circle")
      .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; })
      .attr("r", 80);

  svg.append("g")
      .attr("class", "g-person-hulls")
    .selectAll("path")
      .data(d3.merge(network.persons.map(function(p) { return p.links; })))
    .enter().append("path")
      .sort(function(a, b) { return d3.descending(a.role, b.role); })
      .style("stroke", function(d) { return d3.interpolate(color(d.role), "#fff")(.75); })
      .attr("d", movieToPersonLink);

  svg.append("g")
      .attr("class", "g-movie-links")
    .selectAll("path")
      .data(d3.merge(network.movies.map(function(m) { return m.links; })))
    .enter().append("path")
      .classed("g-current-nomination", currentNomination)
      .classed("g-win", win)
      .attr("d", movieToPersonLink);

  svg.append("g")
      .attr("class", "g-movie-dots")
    .selectAll("circle")
      .data(network.movies)
    .enter().append("circle")
      .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; })
      .classed("g-current-nomination", function(m) { return m.links.some(currentNomination); })
      .classed("g-win", function(m) { return m.links.some(win); })
      .attr("r", function(m) { return m.links.some(currentNomination) ? 5 : 3; });

  svg.append("g")
      .attr("class", "g-movie-labels")
    .selectAll("text")
      .data(network.movies.filter(function(m) {
        return m.links.some(currentNomination)
            || m.links.some(win);
      }))
    .enter().append("text")
      .attr("transform", function(d) { return "translate(" + d.label.x + "," + d.label.y + ")"; })
      .classed("g-current-best-picture-nomination", function(m) { return m.links.some(currentBestPictureNomination); })
      .classed("g-current-nomination", function(m) { return m.links.some(currentNomination); })
      .classed("g-win", function(m) { return m.links.some(win); })
      .attr("dy", ".35em")
      .text(function(m) { return m.name; });

  var movieTarget = overlay.append("g")
      .attr("class", "g-voronoi")
    .selectAll("path")
      .data(d3.geom.voronoi(network.movies.map(function(d) { return [d.x, d.y]; })).map(function(d) { return bounds.clip(d); }))
    .enter().append("path")
      .attr("clip-path", function(d, i) { return "url(#g-movie-clip-" + i + ")"; })
      .attr("d", function(d) { return "M" + d.join("L") + "Z"; })
      .datum(function(d, i) { return network.movies[i]; })
      .on("mouseover", mouseoverMovie)
      .on("mouseout", mouseout)
      .on("click", click);

  var personTarget = overlay.selectAll(".g-person-target")
      .data(network.persons)
    .enter().append("circle")
      .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; })
      .attr("class", "g-person-target")
      .attr("r", mugDiameter / 2 + 2.5)
      .style("stroke-width", 5)
      .on("mouseover", mouseoverPerson)
      .on("mouseout", mouseout);

  var personDot = svg.append("g")
      .attr("class", "g-person-dots")
    .selectAll("g")
      .data(network.persons)
    .enter().append("g")
      .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

  personDot.append("circle")
      .attr("r", mugDiameter / 2 + 2.5)
      .style("stroke", function(d) { return d3.lab(color(d.type)).darker(.2); })
      .style("stroke-width", 5);

  personDot.append("image")
      .attr("xlink:href", "http://graphics8.nytimes.com/newsgraphics/2013/01/07/movie-network/72ae3b8d92ecc7a67c00babd2a75f34bfdacb3a7/mugs.jpg")
      .attr("x", function(d, i) { return -mugDiameter / 2 - mugDiameter * (i % 9); })
      .attr("y", function(d, i) { return -mugDiameter / 2 - mugDiameter * (i / 9 | 0); })
      .attr("width", 9 * mugDiameter)
      .attr("height", 6 * mugDiameter)
      .attr("clip-path", "url(#g-mug-clip)")
      .style("pointer-events", "none");

  var personLabel = svg.append("g")
      .attr("class", "g-person-labels")
    .selectAll("g")
      .data(network.persons)
    .enter().append("g")
      .attr("transform", function(d) { return "translate(" + d.label.x + "," + d.label.y + ")"; })
      .style("pointer-events", "none");

  personLabel.append("text")
      .attr("class", "g-halo")
      .attr("dy", ".35em")
      .text(function(d) { return d.name; });

  personLabel.append("text")
      .attr("dy", ".35em")
      .style("fill", function(d) { return d3.lab(color(d.type)).darker(.2); })
      .text(function(d) { return d.name; });

  var gkey = svg.append("g")
      .attr("class", "g-key")
      .attr("transform", "translate(" + (width - 180) + ",16)");

  gkey.append("text")
      .style("font-weight", "bold")
      .attr("y", -6)
      .text("Current nominations");

  var key = gkey.selectAll("g")
      .data(color.domain().slice(0, 3).concat(["Multiple roles"]))
    .enter().append("g")
      .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

  key.append("circle")
      .attr("r", 6)
      .attr("cx", 9)
      .attr("cy", 9)
      // .style("fill-opacity", .5)
      .style("opacity", .6)
      .style("fill", "none")
      .style("stroke", function(d) { return d3.lab(color(d)).darker(.2); })
      .style("stroke-width", 5);

  key.append("text")
      .attr("x", 23)
      .attr("y", 9)
      .attr("dy", ".35em")
      .text(function(d) {
        var first = d.substring(0, 1), rest = d.substring(1);
        return first.toUpperCase() + rest.replace(/-/g, " and ");
      });

  function mouseoverPerson(p) {
    var g = svg.insert("g", ".g-movie-dots")
        .attr("class", "g-movie-links g-active");

    g.selectAll("path")
        .data(p.links)
      .enter().append("path")
        .attr("d", personToMovieLink)
        .style("stroke-dasharray", "0,250")
      .transition()
        .ease("cubic-in")
        .style("stroke-dasharray", "250,250");

    d3.selectAll(".g-person-dots circle")
        .filter(function(o) { return o === p; })
        .classed("g-active", true);
  }

  function mouseoverMovie(m) {
    var g = svg.insert("g", ".g-movie-dots")
        .attr("class", "g-movie-links g-active");

    g.selectAll("path")
        .data(m.links)
      .enter().append("path")
        .attr("d", movieToPersonLink)
        .style("stroke-dasharray", "0,250")
      .transition()
        .ease("cubic-in")
        .style("stroke-dasharray", "250,250");

    d3.selectAll(".g-movie-dots circle")
        .filter(function(o) { return o === m; })
        .classed("g-active", true);

    d3.selectAll(".g-person-dots circle")
        .filter(function(p) { return p.links.some(function(l) { return l.movie === m; }); })
        .classed("g-active", true);

    tooltip
        .style("display", null);

    tooltipName
        .text(m.name + " (" + m.year + ")");

    tooltipDescription
        .html(m.nominations.length
            ? "\n" + d3.nest()
                .key(function(n) { return n.name; })
                .sortKeys(function(a, b) {
                  return d3.ascending(awardRank[a] || 100, awardRank[b] || 100)
                      || d3.ascending(a, b);
                })
                .entries(m.nominations)
                .map(function(n) {
                  return n.key
                      + " - <span class=g-" + awardType[n.key] + ">" + n.values.map(function(n) { return n.person.name; }).join(", ") + "</span>"
                      + (n.values.some(function(n) { return n.won; }) ? "\xa0\u2713" : "");
                }).join("<br>")
            : "");

    var tooltipRect = tooltipContent.node().getBoundingClientRect(),
        tooltipOrient = d3.mean(m.links, function(d) { return d.person.y; }) < m.y ? "bottom" : "top";

    switch (tooltipOrient) {
      case "top": {
        tooltipPath
            .attr("width", tooltipRect.width + 4)
            .attr("height", tooltipRect.height + 10)
            .style("margin-left", "-2px")
            .style("margin-top", null)
          .select("path")
            .attr("transform", "translate(2,0)")
            .attr("d", "M0,6"
                + "a6,6 0 0,1 6,-6"
                + "H" + (tooltipRect.width - 6)
                + "a6,6 0 0,1 6,6"
                + "v" + (tooltipRect.height - 12)
                + "a6,6 0 0,1 -6,6"
                + "H" + (tooltipRect.width / 2 + 6)
                + "l-6,6"
                + "l-6,-6"
                + "H6"
                + "a6,6 0 0,1 -6,-6"
                + "z");

        tooltip
            .style("left", (m.x - tooltipRect.width / 2) + "px")
            .style("top", (m.y - tooltipRect.height - 10) + "px");
        break;
      }
      case "bottom": {
        tooltipPath
            .attr("width", tooltipRect.width + 4)
            .attr("height", tooltipRect.height + 10)
            .style("margin-left", "-2px")
            .style("margin-top", "-10px")
          .select("path")
            .attr("transform", "translate(2,10)")
            .attr("d", "M0,6"
                + "a6,6 0 0,1 6,-6"
                + "H" + (tooltipRect.width / 2 - 6)
                + "l6,-6"
                + "l6,6"
                + "H" + (tooltipRect.width - 6)
                + "a6,6 0 0,1 6,6"
                + "v" + (tooltipRect.height - 12)
                + "a6,6 0 0,1 -6,6"
                + "H6"
                + "a6,6 0 0,1 -6,-6"
                + "z");

        tooltip
            .style("left", (m.x - tooltipRect.width / 2) + "px")
            .style("top", (m.y + 10) + "px");
        break;
      }
    }
  }

  function click() {
    tooltip.style("display", "none");
  }

  function mouseout() {
    d3.selectAll(".g-movie-links.g-active")
        .remove();

    d3.selectAll(".g-active")
        .classed("g-active", false)
        .style("stroke-dasharray", null);

    tooltip.style("display", "none");
  }

  function movieToPersonLink(d) {
    return "M" + d.movie.x + "," + d.movie.y
         + "S" + d.x + "," + d.y
         + " " + d.person.x + "," + d.person.y;
  }

  function personToMovieLink(d) {
    return "M" + d.person.x + "," + d.person.y
         + "C" + d.x + "," + d.y
         + " " + d.movie.x + "," + d.movie.y
         + " " + d.movie.x + "," + d.movie.y;
  }

  // function hull(p) {
  //   return p.links.map(movieToPersonLink).join("");
  // }

  function currentNomination(l) {
    return l.person.nominations.some(function(n) {
      return n.year === 2013 && n.movie === l.movie;
    });
  }

  function currentBestPictureNomination(l) {
    return l.person.nominations.some(function(n) {
      return n.year === 2013 && n.movie === l.movie && n.name === "Best Picture";
    });
  }

  function win(l) {
    return l.person.nominations.some(function(n) {
      return n.won && n.movie === l.movie;
    });
  }
});

})()