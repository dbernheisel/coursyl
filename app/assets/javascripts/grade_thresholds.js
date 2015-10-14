function addGradeThreshold() {
  $(".association").last().slideToggle("fast");
  $(".new-association").children().first().toggleClass("fa-minus")
}

function hideDeletedRowForDestroy() {
  var cb = $(this).parent().find(".destroy").first()[0];
  if(cb){ cb.checked = true };
  $(this).closest(".association.container").first().slideToggle();
}

$(function (){
  $(".association").last().hide();
  $(".delete-association").on("click", hideDeletedRowForDestroy );
  $(".flush-association").on("click", hideDeletedRowForDestroy );
  $(".new-association").on("click", addGradeThreshold );

  $('input[type=submit]').on("click", function() {
    $(this).attr('disabled', true);
    $(this).parents('form').submit()
  });

});
