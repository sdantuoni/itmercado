jQuery( window ).load( function() {

	// Equal Heights Elements
	jQuery( '.fusion-events-shortcode' ).each( function() {
		jQuery( this ).find( '.fusion-events-meta' ).equalHeights();
	});

	jQuery( window ).on( 'resize', function() {
		jQuery( '.fusion-events-shortcode' ).each( function() {
			jQuery( this ).find( '.fusion-events-meta' ).equalHeights();
		});
	});
});
