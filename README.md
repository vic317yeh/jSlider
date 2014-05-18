jSlider
=======

jSlider is a simple, light-weighted jQuery plugin for photo display. The entire folder does not exceed 1MB. jSlider is currently a static photo gallery that displays 5 photos.

ps. This is a work in process. It will be updated reguarly.


##How to use?
jSlider is a very simple tool for photo display.

After linking jQuery, bootstrap, jSlider.css and jSlider.js, all you need to do is putting up the following lines.

```ruby
<ul id="jGallery">
	<li><img src="sample-pics/1.jpg"/></li>
	<li><img src="sample-pics/2.jpg"/></li>
	<li><img src="sample-pics/5.jpg"/></li>
	<li><img src="sample-pics/3.jpg"/></li>	
	<li><img src="sample-pics/4.jpg"/></li>
</ul>


<script>
$(document).ready(function(){
	$('#jGallery').jSlide();
});
</script>
```
