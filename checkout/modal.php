<img src="<?php echo plugins_url('../images/afterpay_logo.png', __FILE__ ) ?>" class="v-middle" id="afterpay-logo" />
<span id="afterpay-callout"><?php echo 'Pay four interest-free payments every 2 weeks.'; ?></span>

<a href="#afterpay-what-is-modal" id="what-is-afterpay-trigger">
    <?php echo 'What is Afterpay?'; ?>
</a>

<div id="afterpay-what-is-modal" style="display:none;">
    <a href="https://www.afterpay.com.au/terms/" target="_blank" style="border: none">
        <img class="afterpay-modal-image" src="https://static.secure-afterpay.com.au/banner-large.png" alt="Afterpay" />
        <img class="afterpay-modal-image-mobile" src="https://static.secure-afterpay.com.au/modal-mobile.png" alt="Afterpay" />
    </a>
</div>

<script type="text/javascript">
    // included inline as this template is loaded through an ajax request
    jQuery('#what-is-afterpay-trigger').fancybox();
</script>