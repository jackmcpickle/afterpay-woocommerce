jQuery(document).ready(function($) {

    $(document).on('change', 'input[name="afterpay_payment_type"]', function() {
        if ($('input[type="radio"][name="afterpay_payment_type"]:checked').val() == 'PAD') {
            $('.afterpay_pad_description').slideDown(300);
            $('.afterpay_pbi_description').slideUp(300);
        } else {
            $('.afterpay_pad_description').slideUp(300);
            $('.afterpay_pbi_description').slideDown(300);
        }
    });

    $('input[name="afterpay_payment_type"]').trigger('change');

    $(document).on('click', '#what-is-afterpay-trigger', function(e) {
        e.preventDefault();
        jQuery(e.currentTarget).fancybox();
    });
});
