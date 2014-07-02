var today = new Date().setHours(0,0,0,0);

$('[data-date]').each(function() {
  var el   = $(this),
      date = new Date(el.data('date')).setHours(0,0,0,0);

  if (date < today) el.addClass('old');
  if (date == today) el.addClass('today');
});
