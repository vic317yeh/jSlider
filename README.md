jSlider
=======

This is a jQuery slider plugin that I built recently. The entire folder does not exceed 1MB. Currently the slider can only hold a maximum of 5 photos. 

ps. The project is not yet complete. It will be updated reguarly.


##How to use?
jSlider is a extremely simple tool for photo display.

After linking jQuery, bootstrap, jSlider.css and jSlider.js, all you need to do is put in the following lines.

```ruby
<ul id="jGallery">
	<li><img src="sample-pics/1.jpg"/></li>
	<li><img src="sample-pics/2.jpg"/></li>
	<li><img src="sample-pics/5.jpg"/></li>
	<li><img src="sample-pics/3.jpg"/></li>	
	<li><img src="sample-pics/4.jpg"/></li>
</ul>


<script>
$('#jGallery').jSlide();
</script>

```
