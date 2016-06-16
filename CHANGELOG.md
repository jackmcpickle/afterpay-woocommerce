*** Afterpay Gateway Change Log ***

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