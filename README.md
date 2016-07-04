<h2> Woo Commerce Plugin Installation </h2>
<p>This section outlines the steps to install the Afterpay plugin. As a pre-requisite ensure that Woo Commerce is installed and activated in the WordPress admin page.</p>

<p> If you are upgrading to a new version of the Afterpay Plugin, it is always a good practice to backup your existing plugin before you commence the installation steps. </p>

<p><strong>Wordpress Installation Folder</strong></p>
woocommerce-gateway-afterpay <br/>
    ├── checkout (folder)<br/>
    ├── css (folder) <br/>
    ├── images (folder) <br/>
    ├── js (folder) <br/>
    ├── woo-includes (folder) <br/>
    └── woocommerce-afterpay.php <br/>

<h3> Uploading the Plugin </h3>
<ul>
<li> Upload via FTP / SSH (For developers): Upload the plugin folder (not the ZIP) and files to your WordPress server. Copy the folder 'woocommerce-gateway-afterpay' folder into the path: [wordpress-installation-folder]/wp-content/plugins/
</li>
<li> Upload via Wordpress Admin: Upload the ZIP folder coming with the plugin codes to your WordPress Admin plugin uploader (<em>Plugins - Add New - Upload ZIP file</em>). It should deploy the plugin automatically.
</li>
</ul>

<h3> Configuring the Plugin </h3>
<ol>
<li> Open and login to the WordPress Admin page in your browser, navigate to the plugins page by clicking the 'Plugins' item in the menu on the left side of the screen. </li>
<li> Find the plugin 'WooCommerce Afterpay Gateway' in the plugins list, click 'Activate' link below the plugin name. </li>
<li> Navigate to 'WooCommerce' > 'Settings' page; select the 'Checkout' tab on the top. </li>
<li> Scroll down to the 'Gateway Display Order' section, find 'Afterpay' in the gateway list, and click 'Settings' to open the afterpay woocommerce plugin settings page. </li>
<li> Tick the first checkbox to 'Enable Afterpay'. </li>
<li> The 'Test mode' is selected by default. This affects the actual afterpay api url addresses that the plugin will talk to. </li>
<li> Enter the merchant id and secret key that Afterpay has provided you for teh selected Mode. </li>
</ol>