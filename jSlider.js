(function($){
   $.fn.jSlide = function() {
		$this=$(this);
		var curIndex=0;
		var curImgSrc=$this.find('li img')[0].src;
		var temp=new Image;
		temp.src=curImgSrc;
  		$this.find("li:first").before("<div id=\"display-container\"><img id=\"display\"/></div>");
		$this.find("#display").before("<span id=\"left-pointer\" class=\"glyphicon glyphicon-chevron-left\"></span>");
		$this.find("#display").before("<span id=\"right-pointer\" class=\"glyphicon glyphicon-chevron-right\"></span>");
		$this.find('li').eq(curIndex).children().css({"background-color":"#aaa","border-color":"#aaa"});
		$this.find("#display").attr("src",curImgSrc);

 		$("#left-pointer").click(function(){
			if (curIndex>0)
				curIndex--;
			else curIndex=4;
			
			curImgSrc=$this.find('li img')[curIndex].src;
			$this.find("#display").attr("src",curImgSrc);
			$this.find('li').eq(curIndex).children().css({"background-color":"#aaa","border-color":"#aaa"});
			if (curIndex==4)
				$this.find('li').eq(0).children().css({"background-color":"#fff","border-color":"#021a40"});
			else
				$this.find('li').eq(curIndex+1).children().css({"background-color":"#fff","border-color":"#021a40"});

			//uncomment to stop fade-in animation
			var oldImage=$("#jGallery #display-container img");
			var newImage=$('<img id="display"  src="'+curImgSrc+'">');
			newImage.hide();
			$("#jGallery #display-container").append(newImage);
			newImage.fadeIn(500);
			oldImage.fadeOut(1,function(){
				$(this).remove();
			});
		});
		

		 $("#right-pointer").click(function(){
			if (curIndex<4)
				curIndex++;
			else curIndex=0;
				
		    curImgSrc=$this.find('li img')[curIndex].src;
			$this.find("#display").attr("src",curImgSrc);
			$this.find('li').eq(curIndex).children().css({"background-color":"#aaa","border-color":"#aaa"});
			if (curIndex==0)
				$this.find('li').eq(4).children().css({"background-color":"#fff","border-color":"#021a40"});
			else
				$this.find('li').eq(curIndex-1).children().css({"background-color":"#fff","border-color":"#021a40"});
				
			//uncomment to stop fade-in animation
			var oldImage=$("#jGallery #display-container img");
			var newImage=$('<img id="display" src="'+curImgSrc+'">');
			newImage.hide();
			$("#jGallery #display-container").append(newImage);
			newImage.fadeIn(500);
			oldImage.fadeOut(1,function(){
				$(this).remove();
			});
			
		});	
		
		$this.find("li img").click(function(){
			var $that=$(this);
			var oldIndex=curIndex;
			curIndex=$that.parent().index()-1;
			
			curImgSrc=$this.find('li img')[curIndex].src;
			$this.find("#display").attr("src",curImgSrc);
			$this.find('li').eq(oldIndex).children().css({"background-color":"#fff","border-color":"#021a40"});
			$this.find('li').eq(curIndex).children().css({"background-color":"#aaa","border-color":"#aaa"});
	
			//uncomment to stop fade-in animation
			var oldImage=$("#jGallery #display-container img");
			var newImage=$('<img id="display" src="'+curImgSrc+'">');
			newImage.hide();
			$("#jGallery #display-container").append(newImage);
			newImage.fadeIn(500);
			oldImage.fadeOut(1,function(){
				$(this).remove();
			});

		});
		
	return this;
   }; 
})(jQuery);