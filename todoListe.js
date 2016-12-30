$("#titreNouvelleTache").keypress(function (event) {
    if (event.which == 13) {
        event.preventDefault();
        var $titreNouvelleTache = $("#titreNouvelleTache").val();
        var $nouvelleTache = $('<li></li>');
        var $checkBox = $('<input type="checkbox">');
        $nouvelleTache.append($checkBox);
        $checkBox.click(function () {
            var estCheckBoxCoche = $(this).is(':checked') ? true : false;
            var color = estCheckBoxCoche ? "#999999" : "#000000";
            $(this).parent().css("color", color);
            var barre = estCheckBoxCoche ? "line-through" : "none";
            $(this).parent().css("text-decoration", barre);
        });
        $nouvelleTache.append('<span>' + $titreNouvelleTache + '</span>');
        $('ul').append($nouvelleTache);
        $("#titreNouvelleTache").val('');
    }
});

$('#filtrerAFaire').click(function () {
    $('#listeTaches :checkbox ').each(function () {
        if ($(this).is(':checked')) {
            $(this).parent().hide();
        } else {
            $(this).parent().show();
        }
    });
});

$('#filtrerFaites').click(function () {
    $('#listeTaches :checkbox ').each(function () {
        if ($(this).is(':checked')) {
            $(this).parent().show();
        } else {
            $(this).parent().hide();
        }
    });
});

$('#filtrerToutes').click(function () {
    $('#listeTaches :checkbox ').each(function () {
        $(this).parent().show();
    });
});