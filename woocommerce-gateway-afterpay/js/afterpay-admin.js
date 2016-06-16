jQuery(document).ready(function($) {

	$("input#woocommerce_afterpay_pay-over-time").closest("tr").hide().checked;

	$('input#woocommerce_afterpay_pay-over-time').on('change',function() {
		if ($(this).is(':checked')) {
			$('input#woocommerce_afterpay_pay-over-time-limit-min').closest('tr').show();
			$('input#woocommerce_afterpay_pay-over-time-limit-max').closest('tr').show();
			$('label[for=payovertimedisplay]').closest('tr').show();
		} else {
			$('input#woocommerce_afterpay_pay-over-time-limit-min').closest('tr').hide();
			$('input#woocommerce_afterpay_pay-over-time-limit-max').closest('tr').hide();
			$('label[for=payovertimedisplay]').closest('tr').hide();
		}
	});

	$('input#woocommerce_afterpay_pay-after-delivery').on('change',function() {
		if ($(this).is(':checked')) {
			$('input#woocommerce_afterpay_pay-after-delivery-limit-min').closest('tr').show();
			$('input#woocommerce_afterpay_pay-after-delivery-limit-max').closest('tr').show();
			$('label[for=payafterdeliverydisplay]').closest('tr').show();
		} else {
			$('input#woocommerce_afterpay_pay-after-delivery-limit-min').closest('tr').hide();
			$('input#woocommerce_afterpay_pay-after-delivery-limit-max').closest('tr').hide();
			$('label[for=payafterdeliverydisplay]').closest('tr').hide();
		}
	});

	$('select#woocommerce_afterpay_testmode').on('change',function() {
		if ( $(this).val() != 'production' ) {
			$('input#woocommerce_afterpay_prod-id').closest('tr').hide();
			$('input#woocommerce_afterpay_prod-secret-key').closest('tr').hide();
			$('input#woocommerce_afterpay_test-id').closest('tr').show();
			$('input#woocommerce_afterpay_test-secret-key').closest('tr').show();
		} else {
			$('input#woocommerce_afterpay_prod-id').closest('tr').show();
			$('input#woocommerce_afterpay_prod-secret-key').closest('tr').show();
			$('input#woocommerce_afterpay_test-id').closest('tr').hide();
			$('input#woocommerce_afterpay_test-secret-key').closest('tr').hide();
		}
	});

	$('input#woocommerce_afterpay_show-info-on-category-pages').on('change',function() {
		if ($(this).is(':checked')) {
			$('input#woocommerce_afterpay_category-pages-info-text').closest('tr').show();
		} else {
			$('input#woocommerce_afterpay_category-pages-info-text').closest('tr').hide();
		}
	});

	$('input#woocommerce_afterpay_show-info-on-product-pages').on('change',function() {
		if ($(this).is(':checked')) {
			$('input#woocommerce_afterpay_product-pages-info-text').closest('tr').show();
		} else {
			$('input#woocommerce_afterpay_product-pages-info-text').closest('tr').hide();
		}
	});
	
	$('input#woocommerce_afterpay_pay-over-time, #woocommerce_afterpay_pay-after-delivery, select#woocommerce_afterpay_testmode, input#woocommerce_afterpay_show-info-on-product-pages, input#woocommerce_afterpay_show-info-on-category-pages').trigger('change');
});