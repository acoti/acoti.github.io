//
// Page Initialization
//

jQuery(document).ready(function() {
    setWindowLinks();
    setRollovers();
    setShareLinks();
});

jQuery(window).on("load",function() {
    createGraphs();
});






//
// Set External Links
//

function setWindowLinks() {
    jQuery("a[class='newWindow']").each(function() {
        jQuery(this).attr("target","_blank");
        jQuery(this).attr("rel","noopener");
    });
};






//
// Set and Execute Rollovers
//

function setRollovers() {
    jQuery("img[class='rollover']").each(function() {
        jQuery(this).on("mouseover focus", function() {
            src = jQuery(this).attr("src");
            src = src.replace("-off", "-ovr");
            jQuery(this).attr("src",src);
        });
    });

    jQuery("img[class='rollover']").each(function() {
        jQuery(this).on("mouseout blur", function() {
            src = jQuery(this).attr("src");
            src = src.replace("-ovr", "-off");
            jQuery(this).attr("src",src);
        });
    });
};






//
// Set Social Media Links
//

function setShareLinks() {
    var pageUrl = encodeURIComponent(document.URL);
    var tweet = encodeURIComponent(jQuery("meta[property='og:description']").attr("content"));

    jQuery(".social-share.facebook").on("click", function() {
        url = "https://www.facebook.com/sharer.php?u=" + pageUrl;
        socialWindow(url);
    });

    jQuery(".social-share.twitter").on("click", function() {
        url = "https://twitter.com/intent/tweet?url=" + pageUrl + "&text=" + tweet;
        socialWindow(url);
    });

    jQuery(".social-share.linkedin").on("click", function() {
        url = "https://www.linkedin.com/shareArticle?mini=true&url=" + pageUrl;
        socialWindow(url);
    });

    jQuery(".social-share.email").on("click", function() {
        mail = 'mailto:' + "" + '?subject=' + tweet + '&body=' + pageUrl;
        window.location.href = mail;
    });
};

function socialWindow(url) {
    var left = (screen.width - 570) / 2;
    var top = (screen.height - 570) / 2;
    var params = "menubar=no,toolbar=no,status=no,width=570,height=570,top=" + top + ",left=" + left;
    window.open(url,"NewWindow",params);
};






function createGraphs() {
    var waypoint1 = new Waypoint({
        element: document.getElementById('number-of-sets'),
        handler: function(direction) {
            jQuery('table.number-of-sets').highchartTable();
            this.destroy()
        },
        offset: 'bottom-in-view'
    });

    var waypoint2 = new Waypoint({
        element: document.getElementById('length-of-match'),
        handler: function(direction) {
            jQuery('table.length-of-match').highchartTable();
            this.destroy()
        },
        offset: 'bottom-in-view'
    });

    var waypoint3 = new Waypoint({
        element: document.getElementById('length-of-match-venue'),
        handler: function(direction) {
            jQuery('table.length-of-match-venue').highchartTable();
            this.destroy()
        },
        offset: 'bottom-in-view'
    });

    var waypoint4 = new Waypoint({
        element: document.getElementById('duration-of-match-venue'),
        handler: function(direction) {
            jQuery('table.duration-of-match-venue').highchartTable();
            this.destroy()
        },
        offset: 'bottom-in-view'
    });

    var waypoint5 = new Waypoint({
        element: document.getElementById('walkover-major'),
        handler: function(direction) {
            jQuery('table.walkover-major').highchartTable();
            this.destroy()
        },
        offset: 'bottom-in-view'
    });

    var waypoint6 = new Waypoint({
        element: document.getElementById('number-of-sets-trend'),
        handler: function(direction) {
            jQuery('table.number-of-sets-trend').highchartTable();
            this.destroy()
        },
        offset: 'bottom-in-view'
    });

    var waypoint7 = new Waypoint({
        element: document.getElementById('number-of-sets-trend2'),
        handler: function(direction) {
            jQuery('table.number-of-sets-trend2').highchartTable();
            this.destroy()
        },
        offset: 'bottom-in-view'
    });

    var waypoint8 = new Waypoint({
        element: document.getElementById('duration-of-match-trend'),
        handler: function(direction) {
            jQuery('table.duration-of-match-trend').highchartTable();
            this.destroy()
        },
        offset: 'bottom-in-view'
    });
}

function chartPercent(value) {
    return value + '%'
}

function chartMin(value) {
    var hr = Math.floor(value/60);
    var mn = Math.round(value % 60);
    //return value + ' min'
    //return hr + ":" + mn;
    return hr + "h " + mn + "m";
}

