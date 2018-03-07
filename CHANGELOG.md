# Afterpay Gateway Change Log
Copyright (c) 2017 AfterPay (http://afterpay.com.au/)

Platform: WooCommerce
Supported Editions and Versions:
- WooCommerce version 2.1 and later

### Release version 1.3.4

Release date: 06 Mar 2018

- Fix incorrect use of `is_callable` in `WC_Gateway_Afterpay->reciept_page()`

### Release version: 1.3.3

Release date: 24 Oct 2017

- Various bug fixes

### Release version: 1.3.2

Release date: 24 Oct 2017

- Fix issue fix minimumAmount not set
- Fix order methods called incorrectly in WooCommerce 3.

Release Summary
Version 1.3.1 of the Afterpay-WooCommerce plugin delivers:
- 	Enhancement to support the product data changes introduced in WooCommerce v3.0.0 (released 04 Apr 2017, https://woocommerce.wordpress.com/2017/04/04/say-hello-to-woocommerce-3-0-bionic-butterfly).

Compability Enhancements

Release Details
Product Data Retrieval Changes
-	Implemented improved checkout handling to avoid "Invalid Product" exception introduced in WooCommerce 3.0.0.
-	Implemented Products Data Retrieval as recommended in WooCommerce 3.0.0 Class specifications (https://docs.woocommerce.com/wc-apidocs/class-WC_Product_Variation.html)
-	Implemented backwards compatibility handling for Products Data Retrieval for WooCommerce 2.6.14 down to 2.1



2016.06.15 - version 1.3.0
 * Major changes on Admin area to make it less cluttered
 * Instalments code not non-editable
 * Environment configurations can be edited outside the plugin core codes
 * What is Afterpay Lightbox contents now coming directly from AWS

2016.06.03 - version 1.2.2
 * Fallback for transaction limits

2016.05.20 - version 1.2.1
 * Backwards compatibility for WooCommerce 2.1.x

2015.10.24 - version 1.2
 * Using WC Receipt page to load AfterPay JS API

2015.09.17 - version 1.1
 * Fix: won't notify Afterpay of shipping for non-Afterpay orders
 * Fix: don't check cart limits if running available gateways hook in admin
 * Fix: return url when siteurl is http on https site

2015.08.16 - version 1.0
 * First Release


Important Notes:
 * Browser "Back" attempt after Transaction Successful will be blocked and might cause unexpected behaviour
 * Abandoned transactions (where user close the browser / window during Afterpay processing) will stay up until 45 mins before set as Cancelled transaction by CRON jobs
 * Server cURL and CRON must be running for Afterpay to work properly
