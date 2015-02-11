$('document').ready(function(){

	var lists = [];


	function filterCard() {
		$('.list-card-position strong:first-child').each(function(i) {
			lists[i] = $(this).text();
		});

		var i = lists.length;
		lists.sort();
		while (i--) {
			if (lists[i] == lists[i-1]) {
				lists.splice(i, 1);
			};
		};

		$('.window-module.gutter').append($('<div />').attr('id', 'showOnly').html('<label>Show only<label>').css('color', '#8c8c8c')); 
		for (var i = 0; i < lists.length; i++) {
			$('#showOnly').append($('<input>').addClass('filterChecbox').attr('type', 'checkbox').attr('id', lists[i]).attr('checked', '').css('vertical-align', 'middle').css('min-height', '1px').css('margin-right', '7px').css('margin-bottom', '0px')).append($('<label />').attr('for', lists[i]).text(lists[i]).css('display', 'inline-block').css('margin-right', '50px').css('vertical-align', 'middle').css('margin-bottom', '0px'))
		};

		$('.filterChecbox').on('click', function() {
			var filter = (this.id);
			if (this.checked) {
				console.log('true')
				$('.list-card-position strong:first-child').each(function(i) {
					var list = $(this).text();
					if (list == filter) {
						$(this).closest('.list-card-container').css('display', 'block').removeClass('hideJS');
					};
				})
			} else{
				console.log('false')
				$('.list-card-position strong:first-child').each(function(i) {
					var list = $(this).text();
					if (list == filter) {
						$(this).closest('.list-card-container').css('display', 'none').addClass('hideJS');
					};
				})
			};
			$('.js-cards-content .window-module').each(function(i) {
				var allCard = $(this).find(".list-card-container").length;
				var blockCard = $(this).find(".list-card-container.hideJS").length;
				if (allCard == blockCard) {
					$(this).css('display', 'none')
				} else {
					$(this).css('display', 'block')
				}
			})
		})
	};

	setTimeout(filterCard, 1500)

})