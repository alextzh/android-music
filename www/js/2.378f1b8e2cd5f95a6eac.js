webpackJsonp([2],{553:function(t,e,i){function a(t){i(629)}var n=i(8)(i(631),i(637),a,"data-v-857ee090",null);t.exports=n.exports},562:function(t,e,i){"use strict";function a(t){var e={tag:t,ac:"wap",count:20,format:"json_raw",as:"A105395B01A0730",cp:"59B130E75360FE1",min_behot_time:0};return Object(o.a)("https://m.toutiao.com/list/",e,{params:"jsonpCallback"})}function n(t){var e="https://m.toutiao.com/i"+t+"/info/",i={};return Object(o.a)(e,i,{params:"jsonpCallback"})}e.b=a,e.a=n;var o=i(178)},563:function(t,e,i){"use strict";function a(t){var e=Math.floor((new Date).getTime()/1e3),i=void 0,a=e-t;return a<60?i="刚刚":a>=60&&a<=3600?i=Math.floor(a/60)+"分钟前":a>=3600&&a<=86400?i=Math.floor(a/3600)+"小时前":a>=86400&&(i=Math.floor(a/86400)+"天前"),i}function n(t,e){var i=Math.floor(t.getTime()/1e3),a=void 0,n=i-e;return n<60?a="刚刚":n>=60&&n<=3600?a=Math.floor(n/60)+"分钟前":n>=3600&&n<=86400?a=Math.floor(n/3600)+"小时前":n>=86400&&(a=Math.floor(n/86400)+"天前"),a}function o(t){return((t|=0)/60|0)+":"+s(t%60)}function s(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,i=t.toString().length;i<e;)t="0"+t,i++;return t}e.b=a,e.c=n,e.a=o},629:function(t,e,i){var a=i(630);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i(542)("73b6eb30",a,!0)},630:function(t,e,i){e=t.exports=i(541)(!1),e.push([t.i,".slider-enter-active[data-v-857ee090],.slider-leave-active[data-v-857ee090]{-webkit-transition:all .3s;transition:all .3s}.slider-enter[data-v-857ee090],.slider-leave-to[data-v-857ee090]{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}",""])},631:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(54),n=i.n(a),o=i(632),s=i.n(o),r=i(45),l=i(562);e.default={data:function(){return{newsDetail:[]}},computed:n()({title:function(){return this.newsList.source}},Object(r.c)(["newsList"])),created:function(){this._getNewsDetail()},methods:{_getNewsDetail:function(){var t=this;if(!this.newsList.group_id)return this.$router.push("/news"),!1;Object(l.a)(this.newsList.group_id).then(function(e){e.data&&t.newsDetail.push(e.data)})}},components:{ContentList:s.a}}},632:function(t,e,i){function a(t){i(633)}var n=i(8)(i(635),i(636),a,"data-v-f2d9b140",null);t.exports=n.exports},633:function(t,e,i){var a=i(634);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i(542)("971fa630",a,!0)},634:function(t,e,i){e=t.exports=i(541)(!1),e.push([t.i,".news-detail[data-v-f2d9b140]{position:fixed;z-index:100;top:0;left:0;bottom:0;right:0;background:#222}.news-detail .back[data-v-f2d9b140]{position:absolute;top:0;left:6px;z-index:50}.news-detail .back .icon-back[data-v-f2d9b140]{display:block;padding:10px;font-size:22px;color:#ffcd32}.news-detail .top-title[data-v-f2d9b140]{position:absolute;top:0;left:10%;z-index:40;width:80%;text-align:center;line-height:40px;font-size:18px;color:#fff}.news-detail .detail-wrapper[data-v-f2d9b140]{position:fixed;top:40px;bottom:0;width:100%}.news-detail .detail-wrapper .detail-content[data-v-f2d9b140]{height:100%;overflow:hidden}.news-detail .detail-wrapper .detail-content .media[data-v-f2d9b140]{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:10px 15px}.news-detail .detail-wrapper .detail-content .media .icon[data-v-f2d9b140]{-webkit-box-flex:0;-ms-flex:0 0 50px;flex:0 0 50px;width:50px;border-radius:50%;margin-right:15px;overflow:hidden}.news-detail .detail-wrapper .detail-content .media .icon .img[data-v-f2d9b140]{width:50px;height:50px;border-radius:50%}.news-detail .detail-wrapper .detail-content .media .text[data-v-f2d9b140]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-flex:1;-ms-flex:1;flex:1;line-height:20px;overflow:hidden;font-size:14px}.news-detail .detail-wrapper .detail-content .media .text .name[data-v-f2d9b140]{margin-bottom:10px;color:#fff}.news-detail .detail-wrapper .detail-content .media .text .desc[data-v-f2d9b140]{color:hsla(0,0%,100%,.3)}.news-detail .detail-wrapper .detail-content .title[data-v-f2d9b140]{padding:0 15px;font-size:16px;color:#fff;font-weight:600;line-height:1.5}.news-detail .detail-wrapper .detail-content .content[data-v-f2d9b140]{padding:10px 15px;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden}.news-detail .detail-wrapper .detail-content .content p[data-v-f2d9b140]{width:100%;overflow:hidden;font-size:14px;line-height:24px}.news-detail .detail-wrapper .detail-content .content img[data-v-f2d9b140]{display:block;width:100%}",""])},635:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(177),n=i.n(a),o=i(63),s=i.n(o),r=i(563);e.default={props:{title:{type:String,default:""},newsDetail:{type:Array,default:[]}},methods:{back:function(){this.$router.back()},getName:function(t){return t.source},getAvatar:function(t){return t.avatar_url},getDesc:function(t){return t.is_original?'<span style="display: inline-block;padding:2px;border:1px solid #ffcd32;border-radius:4px;color:#ffcd32;font-size:10px;line-height:1;">原创</span>  '+Object(r.b)(t.publish_time):""+Object(r.b)(t.publish_time)},getContent:function(t){return t.content}},components:{Loading:n.a,Scroll:s.a}}},636:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"news-detail"},[i("div",{staticClass:"back",on:{click:t.back}},[i("i",{staticClass:"icon-back"})]),t._v(" "),i("h1",{staticClass:"top-title",domProps:{innerHTML:t._s(t.title)}}),t._v(" "),i("div",{staticClass:"detail-wrapper"},[i("scroll",{ref:"detailContent",staticClass:"detail-content",attrs:{data:t.newsDetail}},[i("ul",{ref:"box",staticClass:"detail-group"},t._l(t.newsDetail,function(e){return i("li",[i("div",{ref:"title",refInFor:!0,staticClass:"title",domProps:{innerHTML:t._s(e.title)}}),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.media_user,expression:"item.media_user"}],ref:"media",refInFor:!0,staticClass:"media"},[i("div",{staticClass:"icon"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.getAvatar(e.media_user),expression:"getAvatar(item.media_user)"}],staticClass:"img"})]),t._v(" "),i("div",{staticClass:"text"},[i("h2",{staticClass:"name",domProps:{innerHTML:t._s(t.getName(e))}}),t._v(" "),i("p",{staticClass:"desc",domProps:{innerHTML:t._s(t.getDesc(e))}})])]),t._v(" "),i("div",{ref:"content",refInFor:!0,staticClass:"content",domProps:{innerHTML:t._s(t.getContent(e))}})])}))]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.newsDetail,expression:"!newsDetail"}],staticClass:"loading-container"},[i("loading")],1)],1)])},staticRenderFns:[]}},637:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:"slider"}},[i("content-list",{attrs:{title:t.title,newsDetail:t.newsDetail}})],1)},staticRenderFns:[]}}});