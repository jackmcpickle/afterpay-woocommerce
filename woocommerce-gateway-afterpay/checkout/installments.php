<?php /** @var $this Afterpay_Afterpay_Block_Form_Payovertime */ ?>
<!-- <ul class="form-list" style="display:none"> -->
<ul class="form-list" style="">
    <li class="form-alt">
        <div class="instalments">
            <p class="header-text">
                <?php echo 'PAY FOUR FORTNIGHLY INSTALMENTS'; ?>
                <?php
                global $woocommerce;
                $order_total = $woocommerce->cart->total;
                echo "$" . number_format( $order_total, 2 );
                ?>
            </p>
            <ul class="cost">
                <li><?php echo "$" . number_format( $order_total / 4, 2 ); ?></li>
                <li><?php echo "$" . number_format( $order_total / 4, 2 ); ?></li>
                <li><?php echo "$" . number_format( $order_total / 4, 2 ); ?></li>
                <li><?php echo "$" . number_format( $order_total / 4, 2 ); ?></li>
            </ul>
            <ul class="icon">
                <li>
                    <img src="<?php echo plugins_url('../images/checkout/circle_1@2x.png', __FILE__ ); ?>" alt="" />
                </li>
                <li>
                    <img src="<?php echo plugins_url('../images/checkout/circle_2@2x.png', __FILE__ ) ?>" alt="" />
                </li>
                <li>
                    <img src="<?php echo plugins_url('../images/checkout/circle_3@2x.png', __FILE__ ) ?>" alt="" />
                </li>
                <li>
                    <img src="<?php echo plugins_url('../images/checkout/circle_4@2x.png', __FILE__ ) ?>" alt="" />
                </li>
            </ul>
            <ul class="instalment">
                <li>First instalment</li>
                <li>2 weeks later</li>
                <li>4 weeks later</li>
                <li>6 weeks later</li>
            </ul>
        </div>
        <div class="instalment-footer">
            <p><?php echo "You'll be redirected to the Afterpay website when you proceed to checkout." ?></p>
            <a href="http://www.afterpay.com.au/terms/" target="_blank"><?php echo 'Terms & Conditions'; ?></a>
        </div>
    </li>
</ul>