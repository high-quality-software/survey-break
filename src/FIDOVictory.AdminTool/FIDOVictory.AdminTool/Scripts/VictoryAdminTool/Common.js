$(document).ready(function () {
    $(".btn-toggle-radio button").click(function () {

        //  do the Bootstrap formatting
        $(this).siblings().removeClass("active btn-success");
        $(this).siblings().addClass("btn-default");
        $(this).removeClass("btn-default");
        $(this).addClass("active btn-success");

        //  get the data attribute that matches the model field name
        var checkboxToUpdate = $(this).attr("data-model-field");
        var selectedOption = $(this).val();
        $("#" + checkboxToUpdate).val(selectedOption);

    });
});

