
$(function() {

        var a = $(".question-cont"),

        e = $(".toggle_block"),

        h = $(".info_name"),

        f = ["читать подробнее", "скрыть"];

        e.css("height", "285px");

        a.each(function(a, g) {

          var c = $(".info_name", g);

          c.click(function(b) {

            b.preventDefault();

            b = $(".toggle_block", g);

            e.not(b).animate({

              height: "285px"

            }, 800, function() {

              h.not(c).text(f[0])

            });

            var d = b[0],

            a = d.clientHeight < d.scrollHeight ? d.scrollHeight + "px" : "285px";

            b.animate({

              height: a

            },

            1000,

            function() {

              c.text(f[+("285px" != a)])

            })

          })

        })

      });