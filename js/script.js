var today = new Date().setHours(0,0,0,0);

$('[data-date]').each(function() {
  var el   = $(this),
      date = new Date(el.data('date')).setHours(0,0,0,0);

  if (date < today) el.addClass('old');
  if (date == today) el.addClass('today');

  if (el.data('start') && el.data('end')) {
    var start = new Date(el.data('start')).setHours(0,0,0,0),
        end   = new Date(el.data('end')).setHours(0,0,0,0);

    if (start <= today && today <= end) el.addClass('today');
  }
});
