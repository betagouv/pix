import Ember from 'ember';

export default Ember.Component.extend({

	didInsertElement: function () {
		Ember.run.scheduleOnce('afterRender', this, function () {
			$('#js-modal-mobile').on('shown.bs.modal', function (e) {
				$('#js-modal-mobile').attr('style', function(i, style)
				{
					return style.replace(/display[^;]+;?/g, '');
				});
			});
		});
	}

});
