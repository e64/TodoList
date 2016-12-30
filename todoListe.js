$("#titreNouvelleTache").keypress(function (event) {
    if (event.which == 13) {
        event.preventDefault();
        var $titreNouvelleTache = $("#titreNouvelleTache").val();
        var $nouvelleTache = $('<div class="item"></div>');
        var $checkBox = $('<div class="ui checkbox"><input type="checkbox"></div>');
        $nouvelleTache.append($checkBox);
        $checkBox.click(function () {
            var estCheckBoxCoche = $(this).is(':checked') ? true : false;
            var color = estCheckBoxCoche ? "#999999" : "#000000";
            $(this).parent().parent().css("color", color);
            var barre = estCheckBoxCoche ? "line-through" : "none";
            $(this).parent().parent().css("text-decoration", barre);
        });
        $nouvelleTache.append('<span>' + $titreNouvelleTache + '</span>');
        $('div.ui.list').append($nouvelleTache);
        $('.ui.checkbox').checkbox();
        $("#titreNouvelleTache").val('');
    }
});

$('#filtrerAFaire').click(function () {
    $('#listeTaches :checkbox ').each(function () {
        if ($(this).is(':checked')) {
            $(this).parent().parent().hide();
        } else {
            $(this).parent().parent().show();
        }
    });
});

$('#filtrerFaites').click(function () {
    $('#listeTaches :checkbox ').each(function () {
        if ($(this).is(':checked')) {
            $(this).parent().parent().show();
        } else {
            $(this).parent().parent().hide();
        }
    });
});

$('#filtrerToutes').click(function () {
    $('#listeTaches :checkbox ').each(function () {
        $(this).parent().parent().show();
    });
});