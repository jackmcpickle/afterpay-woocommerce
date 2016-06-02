jQuery(document).ready(function($) {
	
	checkout_payment_type();

	function checkout_payment_type() {
		$('input[type="radio"][name="afterpay_payment_type"]').on('change',function() {
			if ($('input[type="radio"][name="afterpay_payment_type"]:checked').val() == "PAD") {
				$('.afterpay_pad_description').slideDown(300);
				$('.afterpay_pbi_description').slideUp(300);
			} else {
				$('.afterpay_pad_description').slideUp(300);
				$('.afterpay_pbi_description').slideDown(300);
			}
		});

		$('input[name="afterpay_payment_type"]').trigger('change');
	}
});