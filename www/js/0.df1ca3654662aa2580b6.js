webpackJsonp([0],{550:function(t,i,e){function s(t){e(601)}var l=e(8)(e(603),e(614),s,"data-v-76e921e0",null);t.exports=l.exports},601:function(t,i,e){var s=e(602);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);e(541)("37ddc2ea",s,!0)},602:function(t,i,e){i=t.exports=e(540)(!1),i.push([t.i,".list-container[data-v-76e921e0]{position:fixed;top:0;bottom:0;z-index:100;width:100%;background:#fff;color:#333}.list-container.slide-enter-active[data-v-76e921e0],.list-container.slide-leave-active[data-v-76e921e0]{-webkit-transition:all .3s;transition:all .3s}.list-container.slide-enter[data-v-76e921e0],.list-container.slide-leave-to[data-v-76e921e0]{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}.list-container .back[data-v-76e921e0]{position:absolute;top:0;left:6px;z-index:50}.list-container .back .icon-back[data-v-76e921e0]{display:block;padding:10px;font-size:22px;color:#ffcd32}.list-container .text[data-v-76e921e0]{display:block;vertical-align:top;line-height:44px;height:44px;font-size:18px;width:100%;text-align:center}.list-container .scroll-wrapper[data-v-76e921e0]{position:absolute;top:44px;bottom:0;width:100%}.list-container .scroll-wrapper .list-scroll[data-v-76e921e0]{height:100%;overflow:hidden}.list-container .scroll-wrapper .list-scroll .list-inner[data-v-76e921e0]{padding:20px 15px}",""])},603:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=e(604),l=e.n(s),n=["我是第 1 行","我是第 2 行","我是第 3 行","我是第 4 行","我是第 5 行","我是第 6 行","我是第 7 行","我是第 8 行","我是第 9 行","我是第 10 行","我是第 11 行","我是第 12 行","我是第 13 行","我是第 14 行","我是第 15 行","我是第 16 行","我是第 17 行","我是第 18 行","我是第 19 行","我是第 20 行"];i.default={data:function(){return{items:n,scrollbar:!1,pullDownRefresh:!0,pullUpLoad:!0,y:300,itemIndex:n.length}},methods:{back:function(){this.$router.back()},onPullingDown:function(){var t=this;this.loading=!0,setTimeout(function(){t.loading=!1,t.items.unshift("我是新数据: "+ +new Date)},1e3)},onPullingUp:function(){var t=this,i=["我是第 "+ ++this.itemIndex+" 行","我是第 "+ ++this.itemIndex+" 行","我是第 "+ ++this.itemIndex+" 行","我是第 "+ ++this.itemIndex+" 行","我是第 "+ ++this.itemIndex+" 行"];setTimeout(function(){t.items=t.items.concat(i)},1e3)}},components:{ScrollList:l.a}}},604:function(t,i,e){function s(t){e(605)}var l=e(8)(e(607),e(613),s,"data-v-72284919",null);t.exports=l.exports},605:function(t,i,e){var s=e(606);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);e(541)("f285b384",s,!0)},606:function(t,i,e){i=t.exports=e(540)(!1),i.push([t.i,".list-wrapper[data-v-72284919]{position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;background:#fff}.list-wrapper .list-content[data-v-72284919]{position:relative;z-index:10;background:#fff}.list-wrapper .list-content .list-item[data-v-72284919]{height:60px;line-height:60px;font-size:18px;padding-left:20px;border-bottom:1px solid #e5e5e5}.list-wrapper .loading-container[data-v-72284919]{position:absolute;width:100%;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.list-wrapper .pulldown-wrapper[data-v-72284919]{position:absolute;width:100%;left:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-transition:all;transition:all}.list-wrapper .pulldown-wrapper .after-trigger[data-v-72284919]{margin-top:10px}.list-wrapper .pullup-wrapper[data-v-72284919]{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:1rem 0}.list-wrapper .no-result-wrapper[data-v-72284919]{position:absolute;width:100%;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}",""])},607:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=e(180),l=e.n(s),n=e(177),a=e.n(n),r=e(608),o=e.n(r),c=e(182),h=e.n(c);i.default={name:"scroll-list",props:{data:{type:Array,default:[]},scrollbar:{type:Boolean,default:!1},scrollbarFade:{type:Boolean,default:!1},pullDownRefresh:{type:Boolean,default:!1},pullUpLoad:{type:Boolean,default:!1},probeType:{type:Number,default:1},click:{type:Boolean,default:!1},listenScroll:{type:Boolean,default:!1},pullup:{type:Boolean,default:!1},beforeScroll:{type:Boolean,default:!1},refreshDelay:{type:Number,default:20},direction:{type:String,default:"vertical"}},data:function(){return{beforePullDown:!0,isPullingDown:!1,pulling:!1,isPullUpLoad:!1,bubbleY:0}},created:function(){this.pulldownInitTop=-50},mounted:function(){var t=this;setTimeout(function(){t._initScroll()},20)},methods:{_initScroll:function(){var t=this;if(this.$refs.listWrapper){var i={probeType:this.probeType,click:this.click,scrollY:"vertical"===this.direction,scrollX:"horizontal"===this.direction,scrollbar:this.scrollbar,scrollbarFade:this.scrollbarFade,pullDownRefresh:!!this.pullDownRefresh&&{stop:40},pullUpLoad:this.pullUpLoad};this.scroll=new l.a(this.$refs.listWrapper,i),this.listenScroll&&this.scroll.on("scroll",function(i){t.$emit("scroll",i)}),this.beforeScroll&&this.scroll.on("beforeScrollStart",function(){t.$emit("beforeScroll")}),this.pullDownRefresh&&(this.scroll.on("pullingDown",function(){t.$emit("pullingDown"),t.beforePullDown=!1,t.isPullingDown=!0,t.pulling=!0}),this.scroll.on("scroll",function(i){t.beforePullDown?(t.bubbleY=Math.max(0,i.y+t.pulldownInitTop),t.$refs.pulldown.style.transitionDuration="",t.$refs.pulldown.style.top=Math.min(i.y+t.pulldownInitTop,10)+"px"):t.bubbleY=0})),this.pullUpLoad&&this.scroll.on("pullingUp",function(){t.$emit("pullingUp"),t.isPullUpLoad=!0})}},enable:function(){this.scroll&&this.scroll.enable()},disable:function(){this.scroll&&this.scroll.disable()},refresh:function(){this.scroll&&this.scroll.refresh()},scrollTo:function(){this.scroll&&this.scroll.scrollTo.apply(this.scroll,arguments)},scrollToElement:function(){this.scroll&&this.scroll.scrollToElement.apply(this.scroll,arguments)},finishPullDown:function(){this.scroll&&this.scroll.finishPullDown()},finishPullUp:function(){this.scroll&&this.scroll.finishPullUp()}},watch:{data:function(){var t=this;setTimeout(function(){t.pullDownRefresh&&t.isPullingDown?(t.pulling=!1,setTimeout(function(){t.finishPullDown(),t.isPullingDown=!1,setTimeout(function(){t.beforePullDown=!0,t.refresh()},t.scroll.options.bounceTime)},500)):t.pullUpLoad&&t.isPullUpLoad?(t.isPullUpLoad=!1,t.finishPullUp(),t.refresh()):t.refresh()},this.refreshDelay)},isPullingDown:function(t){t||(this.$refs.pulldown.style.top=this.pulldownInitTop+"px",this.$refs.pulldown.style.transitionDuration="700ms",this.$refs.pulldown.style.transitionTimingFunction="cubic-bezier(0.165, 0.84, 0.44, 1)")},scrollbar:function(){this.scroll.destroy(),this._initScroll()},pullDownRefresh:function(){this.scroll.destroy(),this._initScroll()},pullUpLoad:function(){this.scroll.destroy(),this._initScroll()}},components:{Loading:a.a,Bubble:o.a,NoResult:h.a}}},608:function(t,i,e){function s(t){e(609)}var l=e(8)(e(611),e(612),s,"data-v-4e94144a",null);t.exports=l.exports},609:function(t,i,e){var s=e(610);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);e(541)("2fcd189e",s,!0)},610:function(t,i,e){i=t.exports=e(540)(!1),i.push([t.i,"",""])},611:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default={props:{y:{type:Number,default:0}},data:function(){return{width:50,height:80}},computed:{distance:function(){return Math.max(0,Math.min(this.y*this.ratio,this.maxDistance))},style:function(){return"width:"+this.width/this.ratio+"px;height:"+this.height/this.ratio+"px"}},created:function(){this.ratio=window.devicePixelRatio,this.width*=this.ratio,this.height*=this.ratio,this.initRadius=18*this.ratio,this.minHeadRadius=12*this.ratio,this.minTailRadius=5*this.ratio,this.initArrowRadius=10*this.ratio,this.minArrowRadius=6*this.ratio,this.arrowWidth=3*this.ratio,this.maxDistance=40*this.ratio,this.initCenterX=25*this.ratio,this.initCenterY=25*this.ratio,this.headCenter={x:this.initCenterX,y:this.initCenterY}},mounted:function(){this._draw()},methods:{_draw:function(){var t=this.$refs.bubble,i=t.getContext("2d");i.clearRect(0,0,t.width,t.height),this._drawBubble(i),this._drawArrow(i)},_drawBubble:function(t){t.save(),t.beginPath();var i=this.distance/this.maxDistance,e=this.initRadius-(this.initRadius-this.minHeadRadius)*i;this.headCenter.y=this.initCenterY-(this.initRadius-this.minHeadRadius)*i,t.arc(this.headCenter.x,this.headCenter.y,e,0,Math.PI,!0);var s=this.initRadius-(this.initRadius-this.minTailRadius)*i,l={x:this.headCenter.x,y:this.headCenter.y+this.distance},n={x:l.x-s,y:l.y},a={x:n.x,y:n.y-this.distance/2};t.quadraticCurveTo(a.x,a.y,n.x,n.y),t.arc(l.x,l.y,s,Math.PI,0,!0);var r={x:this.headCenter.x+e,y:this.headCenter.y},o={x:l.x+s,y:r.y+this.distance/2};t.quadraticCurveTo(o.x,o.y,r.x,r.y),t.fillStyle="rgb(170,170,170)",t.fill(),t.strokeStyle="rgb(153,153,153)",t.stroke(),t.restore()},_drawArrow:function(t){t.save(),t.beginPath();var i=this.distance/this.maxDistance,e=this.initArrowRadius-(this.initArrowRadius-this.minArrowRadius)*i;t.arc(this.headCenter.x,this.headCenter.y,e-(this.arrowWidth-i),-Math.PI/2,0,!0),t.arc(this.headCenter.x,this.headCenter.y,e,0,3*Math.PI/2,!1),t.lineTo(this.headCenter.x,this.headCenter.y-e-this.arrowWidth/2+i),t.lineTo(this.headCenter.x+2*this.arrowWidth-2*i,this.headCenter.y-e+this.arrowWidth/2),t.lineTo(this.headCenter.x,this.headCenter.y-e+3*this.arrowWidth/2-i),t.fillStyle="rgb(255,255,255)",t.fill(),t.strokeStyle="rgb(170,170,170)",t.stroke(),t.restore()}},watch:{y:function(){this._draw()}}}},612:function(t,i){t.exports={render:function(){var t=this,i=t.$createElement;return(t._self._c||i)("canvas",{ref:"bubble",style:t.style,attrs:{width:t.width,height:t.height}})},staticRenderFns:[]}},613:function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{ref:"listWrapper",staticClass:"list-wrapper"},[e("ul",{staticClass:"list-content"},[t._l(t.data,function(i){return e("li",{staticClass:"list-item"},[t._v("\n      "+t._s(i)+"\n    ")])}),t._v(" "),t.pullUpLoad?e("li",{directives:[{name:"show",rawName:"v-show",value:t.data.length,expression:"data.length"}],staticClass:"pullup-wrapper"},[t.isPullUpLoad?e("div",{staticClass:"after-trigger"},[e("loading")],1):e("div",{staticClass:"before-trigger"},[e("span",[t._v("加载更多")])])]):t._e()],2),t._v(" "),t.pullDownRefresh?e("div",{directives:[{name:"show",rawName:"v-show",value:t.data.length,expression:"data.length"}],ref:"pulldown",staticClass:"pulldown-wrapper"},[t.beforePullDown?e("div",{staticClass:"before-trigger"},[e("bubble",{attrs:{y:t.bubbleY}})],1):e("div",{staticClass:"after-trigger"},[t.pulling?e("div",{staticClass:"loading"},[e("loading")],1):e("div",[e("span",[t._v("刷新成功")])])])]):t._e(),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.data.length,expression:"!data.length"}],staticClass:"loading-container"},[e("loading")],1),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.data.length,expression:"!data.length"}],staticClass:"no-result-wrapper"},[e("no-result",{attrs:{title:"抱歉，暂无数据"}})],1)])},staticRenderFns:[]}},614:function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("transition",{attrs:{name:"slide"}},[e("div",{staticClass:"list-container"},[e("div",{staticClass:"back",on:{click:t.back}},[e("i",{staticClass:"icon-back"})]),t._v(" "),e("h1",{staticClass:"text"},[t._v("List")]),t._v(" "),e("div",{staticClass:"scroll-wrapper"},[e("scroll-list",{ref:"scrollList",attrs:{data:t.items,scrollbar:t.scrollbar,pullDownRefresh:t.pullDownRefresh,pullUpLoad:t.pullUpLoad},on:{pullingDown:t.onPullingDown,pullingUp:t.onPullingUp}})],1)])])},staticRenderFns:[]}}});