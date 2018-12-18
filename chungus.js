
    function blinkify(intervalms){

                setInterval(function(){
                    var tags = document.getElementsByTagName("blink");
                    var blinks = [].slice.call(tags);
                    blinks.forEach(function(el){
                        el.style.visibility = el.style.visibility === "hidden" ? "visible" : "hidden";
                    });
                }, intervalms);
    }


    var degrees = 0;
    var looper;

    function spinification(id, intervalms){

        var el = document.getElementById(id);

        if(navigator.userAgent.match("Chrome")){
            el.style.WebkitTransform = "rotate("+degrees+"deg)";
        } else if(navigator.userAgent.match("Firefox")){
            el.style.MozTransform = "rotate("+degrees+"deg)";
        } else if(navigator.userAgent.match("MSIE")){
            el.style.msTransform = "rotate("+degrees+"deg)";
        } else if(navigator.userAgent.match("Opera")){
            el.style.OTransform = "rotate("+degrees+"deg)";
        } else {
            el.style.transform = "rotate("+degrees+"deg)";
        }

        looper = setTimeout('spinification(\''+id+'\','+intervalms+')',intervalms);
        degrees++;
        if(degrees > 359){
            degrees = 1;
        }
        
    }


    function marquee(a, b) {
        var width = b.width();
        var start_pos = a.width();
        var end_pos = -width;
    
        function scroll() {
            if (b.position().left <= -width) {
                b.css('left', start_pos);
                scroll();
            }
            else {
                time = (parseInt(b.position().left, 10) - end_pos) *
                    (10000 / (start_pos - end_pos)); // Increase or decrease speed by changing value 10000
                b.animate({
                    'left': -width
                }, time, 'linear', function() {
                    scroll();
                });
            }
        }
    
        b.css({
            'width': width,
            'left': start_pos
        });
        scroll(a, b);
        
    }