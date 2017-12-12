    function toJalaali(gy, gm, gd) { if (Object.prototype.toString.call(gy) === '[object Date]') { gd = gy.getDate(); gm = gy.getMonth() + 1; gy = gy.getFullYear(); } return d2j(g2d(gy, gm, gd)); }; 

    function toGregorian(jy, jm, jd) { return d2g(j2d(jy, jm, jd)); }; function isValidJalaaliDate(jy, jm, jd) { return jy >= -61 && jy <= 3177 && jm >= 1 && jm <= 12 && jd >= 1 && jd <= 

    jalaaliMonthLength(jy, jm) }; function isLeapJalaaliYear(jy) { return jalCal(jy).leap === 0; } function jalaaliMonthLength(jy, jm) { if (jm <= 6) return 31; if (jm <= 11) return 30; if 

    (isLeapJalaaliYear(jy)) return 30; return 29; } function jalCal(jy) { var breaks = [ -61, 9, 38, 199, 426, 686, 756, 818, 1111, 1181, 1210 , 1635, 2060, 2097, 2192, 2262, 2324, 2394, 2456, 

    3178 ] , bl = breaks.length , gy = jy + 621 , leapJ = -14 , jp = breaks[0] , jm , jump , leap , leapG , march , n , i; if (jy < jp || jy >= breaks[bl - 1]) throw new Error('Invalid Jalaali year ' + jy); for 

    (i = 1; i < bl; i += 1) { jm = breaks[i]; jump = jm - jp; if (jy < jm) break; leapJ = leapJ + div(jump, 33) * 8 + div(mod(jump, 33), 4); jp = jm; } n = jy - jp; leapJ = leapJ + div(n, 33) * 8 + div(mod

    (n, 33) + 3, 4); if (mod(jump, 33) === 4 && jump - n === 4) leapJ += 1; leapG = div(gy, 4) - div((div(gy, 100) + 1) * 3, 4) - 150; march = 20 + leapJ - leapG; if (jump - n < 6) n = n - jump + div

    (jump + 4, 33) * 33; leap = mod(mod(n + 1, 33) - 1, 4); if (leap === -1) { leap = 4; } return { leap: leap , gy: gy , march: march }; } function j2d(jy, jm, jd) { var r = jalCal(jy); return g2d(r.gy, 3, 

    r.march) + (jm - 1) * 31 - div(jm, 7) * (jm - 7) + jd - 1; } function d2j(jdn) { var gy = d2g(jdn).gy , jy = gy - 621 , r = jalCal(jy) , jdn1f = g2d(gy, 3, r.march) , jd , jm , k; k = jdn - jdn1f; if (k >= 

    0) { if (k <= 185) { jm = 1 + div(k, 31); jd = mod(k, 31) + 1; return { jy: jy , jm: jm , jd: jd }; } else { k -= 186; } } else { jy -= 1; k += 179; if (r.leap === 1) k += 1; } jm = 7 + div(k, 30); jd = 

    mod(k, 30) + 1; return { jy: jy , jm: jm , jd: jd }; } function g2d(gy, gm, gd) { var d = div((gy + div(gm - 8, 6) + 100100) * 1461, 4) + div(153 * mod(gm + 9, 12) + 2, 5) + gd - 34840408; d = d - 

    div(div(gy + 100100 + div(gm - 8, 6), 100) * 3, 4) + 752; return d; } function d2g(jdn) { var j , i , gd , gm , gy; j = 4 * jdn + 139361631; j = j + div(div(4 * jdn + 183187720, 146097) * 3, 4) * 4 - 

    3908; i = div(mod(j, 1461), 4) * 5 + 308; gd = div(mod(i, 153), 5) + 1; gm = mod(div(i, 153), 12) + 1; gy = div(j, 1461) - 100100 + div(8 - gm, 6); return { gy: gy , gm: gm , gd: gd }; } function 

    div(a, b) { return ~~(a / b); } function mod(a, b) { return a - ~~(a / b) * b; } 


    style = document.createElement('style');
    style.innerHTML = `table.calendar{direction:rtl !important;} .d,.e,.m,.today{font-family:tahoma } .d,.today{font-size:16px !important;} 
    .btns-left {direction: rtl }
    .calendar-overlay{direction:ltr !important;}
    .btns-left>a>span{
        direction: rtl;
    }
    .btns-left>a>span>i{
        transform: rotate(180deg);
    }`; 
    
    document.head.append(style); 
    
    var dayNames = ['شنبه', 'یکشنبه', 'دوشنبه', 'سه شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه'];
    var monthNames = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'];
    var dayNamesConverter ={ "SAT":"شنبه", "SUN":"یکشنبه", "MON":"دوشنبه", "TUE":"سه شنبه", "WED":"چهارشنبه", "THU":"پنجشنبه", "FRI":"جمعه"}; 
    var monthNamesG = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
    
    function makePersian2() {
        var startDate = currentDate - ((days == 7 ? 4 : 2) * 24 * 60 * 60 * 1000)+30*60*1000;
        var headers = document.querySelectorAll('div.day,div.today');
        
        for (i = 0; i < days; i++){
            let eng = new Date(startDate + i * 24 * 60 * 60 * 1000);
            let per = toJalaali(eng.getFullYear(), eng.getMonth() + 1, eng.getDate());
            console.log(` ${eng} \t\t ${per.jy}-${per.jm}-${per.jd}`);

            if (headers[i].classList.contains('today')) {
                headers[i].innerHTML = "امروز";
            }
            else {
                headers[i].children[2].innerHTML = dayNames[(eng.getDay() + 1) % 7];
                headers[i].children[1].innerHTML = monthNames[per.jm - 1];
                headers[i].children[0].innerHTML =  per.jd;
            }
        }
    }
    orgEndCalendarAnimation = endCalendarAnimation; endCalendarAnimation = function (date) { orgEndCalendarAnimation(date); makePersian2(); };
    orgCalendar = calendar;
    calendar = (date, slideDirection) => { let newDirection = slideDirection === 'right' ? 'left' : 'right'; orgCalendar(date, newDirection); };
    makePersian2();

    $('.episode-tile').each(function (e) { $(this).on('shown.bs.popover',function(){   if(  $($(this).parent().children()[1]).position().left<0 ) { $($(this).parent().children()[1]).offset({left:0})}  })});
   
    
    function makePersian() { 
        let todayIndex = (new Date(today).getDay() + 1) % 7;
        let base = 4;
        let range = days === 7 ? 3 : 1;

        let r = todayIndex - range;
        r = r >= 0 ? r : 7 + r;
        let start = currentDate - ((base - r) * 24 * 60 * 60 * 1000);

        headers = document.querySelectorAll('div.day,div.today');

        for (i = 0; i <= range * 2; i++){
            let gri = new Date(start + i * (24 * 60 * 60 * 1000));
            let per = toJalaali(gri.getFullYear(), gri.getMonth() + 1, gri.getDate());
            let perDayName = dayNames[(gri.getDay() + 1) % 7];
            let perMonthName = monthNames[per["jm"] - 1];
            let perDay = per["jd"];

            console.log(perDayName + ' ' + perDay + ' ' + perMonthName);

           

        }
    }

    org = endCalendarAnimation; endCalendarAnimation = function (date) { org(date); makePersian(); };


    makePersian();

 // if (headers[i].children.length>0) {
            //     headers[i].children[0].innerHTML = dayNames[(gri.getDay()+1) % 7];
            //     headers[i].children[1].innerHTML = monthNames[per["jm"] - 1];
            //     headers[i].children[2].innerHTML = per["jd"];
            // }
            // else {
            //     headers[i].innerHTML = "امروز";
            // }


Array.from(document.querySelectorAll('a.episode-tile').values()).forEach((a) => { let current = a.getAttribute('data-palcement'); a.setAttribute('data-placement', current=='right'?'left':'right' )  });

$('.episode-tile').each(function () { initPopover($(this), leftOffset) });
            

function initPopover(popover, doOffset, leftOffset) {
    var offset = popover.position()
    var popovered;
    if (doOffset) {
        popovered = popover.popover({
            placement: doOffset && offset.left > leftOffset ? 'left' : 'right'
        })
    } else {
        popovered = popover.popover()
    }
    popovered.mouseenter(function(e) {
        var $this = $(this);
        var showPopover = setTimeout(function() {
            popupTimeStamp = (new Date()).getTime();
            var popover = $this.data('popover');
            var shown = popover && popover.tip().is(':visible');
            if (shown)
                return;
            $this.popover('show');
            popover = $this.next('.popover');
            popover.mouseleave(function(popOutEvent) {
                if ($(popOutEvent.relatedTarget).parents('.video-tile').next('.popover')[0] == this) {
                    return;
                } else {
                    $this.popover('hide');
                }
            });
        }, 500);
        $this.mouseleave(function() {
            clearTimeout(showPopover);
        });
    }).mouseleave(function(e) {
        var $this = $(this);
        var popover = $this.next('.popover');
        if ($(e.relatedTarget).parents('.popover')[0] == popover[0]) {
            return;
        }
        var hidePopover = setTimeout(function() {
            $this.popover('hide');
        }, 200);
        popover.mouseenter(function() {
            clearTimeout(hidePopover);
        });
    });
}            