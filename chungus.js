
    function blinkify(intervalms){

                setInterval(function(){
                    var tags = document.getElementsByTagName("blink");
                    var blinks = [].slice.call(tags);
                    blinks.forEach(function(el){
                        el.style.visibility = el.style.visibility === "hidden" ? "visible" : "hidden";
                    });
                }, intervalms);
    }
