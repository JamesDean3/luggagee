javascript: (function () {
    var el = document.createElement('div'),
        b = document.getElementsByTagName('body')[0],
        otherlib = false,
        msg = '';
    el.style.position = 'fixed';
    el.style.height = '32px';
    el.style.width = '220px';
    el.style.marginLeft = '-110px';
    el.style.top = '0';
    el.style.left = '50%';
    el.style.zIndex = 1001;
    el.style.fontSize = '25px';
    var tab = document.getElementById("ctl00_ctl00_contentPlaceHolder_listPlaceHolder_dg"),
        n = tab.rows.length,
        result = "",
        resultCTC = "",
        row, added = 0,
        totalSel = 0;
    for (row = 0; row < n; ++row) {
        if (row > 1 && tab.rows[row].cells[17].children[1].checked) {
            ++totalSel;
        }
    }
    for (row = 0; row < n; ++row) {
        if (row > 1 && tab.rows[row].cells[17].children[1].checked) {
            ++added;
            var rowText = "";
            if (added == 1) {
                rowText = "https://www.google.com/maps/dir/?api=1&travelmode=driving&origin=";
            } else if (added == totalSel) {
                rowText += "&destination=";
            } else if (added == 2) {
                rowText += "&waypoints=";
            } else {
                rowText += "|";
            }
            rowText += encodeURI(tab.rows[row].cells[4].innerText + "," + tab.rows[row].cells[3].innerText + "CA," + tab.rows[row].cells[5].innerText);
            result += rowText;
        }
    }
    el.innerHTML = "<a href='" + result + "' target='_blank'>google link<\a></br>";
    b.appendChild(el);
}());