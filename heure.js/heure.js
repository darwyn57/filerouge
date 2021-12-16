function date_time(id) {
        date = new Date;
        year = date.getFullYear();
        month = date.getMonth();
        months = new Array('Janvier', 'F&eacute;vrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Ao&ucirc;t', 'Septembre', 'Octobre', 'Novembre', 'D&eacute;cembre');
        d = date.getDate();
        day = date.getDay();
        days = new Array('Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi');
        h = date.getHours();
        if (h < 10) {
                h = "0" + h;
        }
        m = date.getMinutes();
        if (m < 10) {
                m = "0" + m;
        }
        s = date.getSeconds();
        if (s < 10) {
                s = "0" + s;
        }
        resultat = 'Et nous sommes le ' + days[day] + ' ' + d + ' ' + months[month] + ' ' + year + ' il est ' + h + ':' + m + ':' + s;
        document.getElementById(id).innerHTML = resultat;
        setTimeout('date_time("' + id + '");', '1000');
        return true;
}
