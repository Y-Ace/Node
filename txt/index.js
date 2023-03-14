
			//找到所有的li
			var lis=document.querySelectorAll(".img-list li");
			var btnLeft=document.querySelector(".btn-left");
			var btnRight=document.querySelector(".btn-right");
			var classList=["one","two","three","four","five","six","seven"];
			var maxIndex=classList.length-1;
			//;console.log(maxIndex)
			//事件元素 事件类型 事件功能
			btnRight.onclick=function(){
				//向右翻动.第一张到第二张图片位置,第二张图到第三图片的位置
				//将最后一张图片放在第一张的位置
				SwitchImg(maxIndex);
			}
			btnLeft.onclick=function(){
				SwitchImg(0);
			}
			function SwitchImg(index){
				var className=classList[index];
				classList.splice(index,1);
					
				if(index==0){
					classList.push(className);
				}else if(index==maxIndex){
					classList.unshift(className);
				}
				for(var i=0;i<=maxIndex;i++){
					lis[i].className=classList[i];
				}
			}
		