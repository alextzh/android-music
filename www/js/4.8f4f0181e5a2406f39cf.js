webpackJsonp([4],{542:function(e,t,i){function s(e){i(559)}var n=i(8)(i(561),i(567),s,"data-v-74b4415a",null);e.exports=n.exports},556:function(e,t,i){"use strict";function s(){var e=l()({},m.b,{platform:"h5",uin:0,needNewCode:1});return Object(c.a)("https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg",e,m.c)}function n(){var e=f?"/api/getDiscList":"http://ustbhuangyi.com/music/api/getDiscList",t=l()({},m.b,{platform:"yqq",hostUin:0,sin:0,ein:29,sortId:5,needNewCode:0,categoryId:1e7,rnd:Math.random(),format:"json"});return u.a.get(e,{params:t}).then(function(e){return a.a.resolve(e.data)})}function r(e){var t=l()({},m.b,{disstid:e,type:1,json:1,utf8:1,onlysong:0,platform:"yqq",hostUin:0,needNewCode:0});return Object(c.a)("https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg",t,m.c)}t.b=s,t.a=n,t.c=r;var o=i(82),a=i.n(o),d=i(81),l=i.n(d),c=i(178),m=i(62),h=i(181),u=i.n(h),f=!1},559:function(e,t,i){var s=i(560);"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);i(541)("e79dec6c",s,!0)},560:function(e,t,i){t=e.exports=i(540)(!1),t.push([e.i,".recommend[data-v-74b4415a]{position:fixed;width:100%;top:88px;bottom:0}.recommend .recommend-content[data-v-74b4415a]{height:100%;overflow:hidden}.recommend .recommend-content .slider-wrapper[data-v-74b4415a]{position:relative;width:100%;height:0;padding-top:40%;overflow:hidden}.recommend .recommend-content .slider-wrapper .slider-content[data-v-74b4415a]{position:absolute;top:0;left:0;width:100%;height:100%}.recommend .recommend-content .recommend-list .list-title[data-v-74b4415a]{height:65px;line-height:65px;text-align:center;font-size:14px;color:#ffcd32}.recommend .recommend-content .recommend-list .item[data-v-74b4415a]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0 20px 20px}.recommend .recommend-content .recommend-list .item .icon[data-v-74b4415a]{-webkit-box-flex:0;-ms-flex:0 0 60px;flex:0 0 60px;width:60px;padding-right:20px}.recommend .recommend-content .recommend-list .item .text[data-v-74b4415a]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-flex:1;-ms-flex:1;flex:1;line-height:20px;overflow:hidden;font-size:14px}.recommend .recommend-content .recommend-list .item .text .name[data-v-74b4415a]{margin-bottom:10px;color:#fff}.recommend .recommend-content .recommend-list .item .text .desc[data-v-74b4415a]{color:hsla(0,0%,100%,.3)}.recommend .recommend-content .loading-container[data-v-74b4415a]{position:absolute;width:100%;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}",""])},561:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i(54),n=i.n(s),r=i(562),o=i.n(r),a=i(177),d=i.n(a),l=i(63),c=i.n(l),m=i(556),h=i(80),u=i(62),f=i(45);t.default={mixins:[h.b],data:function(){return{recommends:[],discList:[]}},created:function(){this._getRecommend(),this._getDiscList()},activated:function(){var e=this;setTimeout(function(){e.$refs.slider&&e.$refs.slider.refresh()},20)},methods:n()({handlePlaylist:function(e){var t=e.length>0?"60px":"";this.$refs.recommend.style.bottom=t,this.$refs.scroll.refresh()},loadImage:function(){var e=this;this.checkloaded||(this.checkloaded=!0,setTimeout(function(){e.$refs.scroll.refresh()},20))},selectItem:function(e){this.$router.push({path:"/recommend/"+e.dissid}),this.setDisc(e)},_getRecommend:function(){var e=this;Object(m.b)().then(function(t){t.code===u.a&&(e.recommends=t.data.slider)})},_getDiscList:function(){var e=this;Object(m.a)().then(function(t){t.code===u.a&&(e.discList=t.data.list)})}},Object(f.d)({setDisc:"SET_DISC"})),components:{Slider:o.a,Loading:d.a,Scroll:c.a}}},562:function(e,t,i){function s(e){i(563)}var n=i(8)(i(565),i(566),s,"data-v-d589a78a",null);e.exports=n.exports},563:function(e,t,i){var s=i(564);"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);i(541)("96be0598",s,!0)},564:function(e,t,i){t=e.exports=i(540)(!1),t.push([e.i,".slider[data-v-d589a78a]{min-height:1px}.slider .slider-group[data-v-d589a78a]{position:relative;overflow:hidden;white-space:nowrap}.slider .slider-group .slider-item[data-v-d589a78a]{float:left;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden;text-align:center}.slider .slider-group .slider-item a[data-v-d589a78a]{display:block;width:100%;overflow:hidden;text-decoration:none}.slider .slider-group .slider-item img[data-v-d589a78a]{display:block;width:100%}.slider .dots[data-v-d589a78a]{position:absolute;right:0;left:0;bottom:12px;-webkit-transform:translateZ(1px);transform:translateZ(1px);text-align:center;font-size:0}.slider .dots .dot[data-v-d589a78a]{display:inline-block;margin:0 4px;width:8px;height:8px;border-radius:50%;background:hsla(0,0%,100%,.5)}.slider .dots .dot.active[data-v-d589a78a]{width:20px;border-radius:5px;background:hsla(0,0%,100%,.8)}",""])},565:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i(122),n=i(180),r=i.n(n);t.default={name:"slider",props:{loop:{type:Boolean,default:!0},autoPlay:{type:Boolean,default:!0},interval:{type:Number,default:4e3}},data:function(){return{dots:[],currentPageIndex:0}},mounted:function(){var e=this;setTimeout(function(){e._setSliderWidth(),e._initDots(),e._initSlider(),e.autoPlay&&e._play()},20),window.addEventListener("resize",function(){e.slider&&e.slider.enabled&&(clearTimeout(e.resizeTimer),e.resizeTimer=setTimeout(function(){e.slider.isInTransition?e._onScrollEnd():e.autoPlay&&e._play(),e.refresh()},60))})},activated:function(){this.slider.enable();var e=this.slider.getCurrentPage().pageX;e>this.dots.length&&(e%=this.dots.length),this.slider.goToPage(e,0,0),this.loop&&(e-=1),this.currentPageIndex=e,this.autoPlay&&this._play()},deactivated:function(){this.slider.disable(),clearTimeout(this.timer)},beforeDestroy:function(){this.slider.disable(),clearTimeout(this.timer)},methods:{refresh:function(){this.slider&&(this._setSliderWidth(!0),this.slider.refresh())},_setSliderWidth:function(e){this.children=this.$refs.sliderGroup.children;for(var t=0,i=this.$refs.slider.clientWidth,n=0;n<this.children.length;n++){var r=this.children[n];Object(s.a)(r,"slider-item"),r.style.width=i+"px",t+=i}this.loop&&!e&&(t+=2*i),this.$refs.sliderGroup.style.width=t+"px"},_initSlider:function(){var e=this;this.slider=new r.a(this.$refs.slider,{scrollX:!0,scrollY:!1,momentum:!1,snap:{loop:this.loop,threshold:.3,speed:400}}),this.slider.on("scrollEnd",this._onScrollEnd),this.slider.on("touchend",function(){e.autoPlay&&e._play()}),this.slider.on("beforeScrollStart",function(){e.autoPlay&&clearTimeout(e.timer)})},_onScrollEnd:function(){var e=this.slider.getCurrentPage().pageX;this.loop&&(e-=1),this.currentPageIndex=e,this.autoPlay&&this._play()},_initDots:function(){this.dots=new Array(this.children.length)},_play:function(){var e=this,t=this.slider.getCurrentPage().pageX+1;clearTimeout(this.timer),this.timer=setTimeout(function(){e.slider.goToPage(t,0,400)},this.interval)}}}},566:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{ref:"slider",staticClass:"slider"},[i("div",{ref:"sliderGroup",staticClass:"slider-group"},[e._t("default")],2),e._v(" "),i("div",{staticClass:"dots"},e._l(e.dots,function(t,s){return i("span",{staticClass:"dot",class:{active:e.currentPageIndex===s}})}))])},staticRenderFns:[]}},567:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{ref:"recommend",staticClass:"recommend"},[i("scroll",{ref:"scroll",staticClass:"recommend-content",attrs:{data:e.discList}},[i("div",[e.recommends.length?i("div",{staticClass:"slider-wrapper"},[i("div",{staticClass:"slider-content"},[i("slider",{ref:"slider"},e._l(e.recommends,function(t){return i("div",[i("a",{attrs:{href:t.linkUrl}},[i("img",{staticClass:"needsclick",attrs:{src:t.picUrl},on:{load:e.loadImage}})])])}))],1)]):e._e(),e._v(" "),i("div",{staticClass:"recommend-list"},[i("h1",{staticClass:"list-title"},[e._v("热门歌单推荐")]),e._v(" "),i("ul",e._l(e.discList,function(t){return i("li",{staticClass:"item",on:{click:function(i){e.selectItem(t)}}},[i("div",{staticClass:"icon"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.imgurl,expression:"item.imgurl"}],attrs:{width:"60",height:"60"}})]),e._v(" "),i("div",{staticClass:"text"},[i("h2",{staticClass:"name",domProps:{innerHTML:e._s(t.creator.name)}}),e._v(" "),i("p",{staticClass:"desc",domProps:{innerHTML:e._s(t.dissname)}})])])}))])]),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!e.discList.length,expression:"!discList.length"}],staticClass:"loading-container"},[i("loading")],1)]),e._v(" "),i("router-view")],1)},staticRenderFns:[]}}});