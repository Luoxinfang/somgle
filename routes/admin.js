/*
 * GET admin page.
 */

exports.index = function(req, res){
  res.render('admin', { title: 'Somgle' });
};