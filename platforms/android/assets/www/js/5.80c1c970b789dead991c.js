webpackJsonp([5],{548:function(t,e,i){function s(t){i(604)}var a=i(8)(i(606),i(607),s,"data-v-ec111780",null);t.exports=a.exports},554:function(t,e,i){function s(t){i(555)}var a=i(8)(i(557),i(558),s,"data-v-77c0eaa0",null);t.exports=a.exports},555:function(t,e,i){var s=i(556);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);i(542)("47caac28",s,!0)},556:function(t,e,i){e=t.exports=i(541)(!1),e.push([t.i,".music-list[data-v-77c0eaa0]{position:fixed;z-index:100;top:0;left:0;bottom:0;right:0;background:#222}.music-list .back[data-v-77c0eaa0]{position:absolute;top:0;left:6px;z-index:50}.music-list .back .icon-back[data-v-77c0eaa0]{display:block;padding:10px;font-size:22px;color:#ffcd32}.music-list .title[data-v-77c0eaa0]{position:absolute;top:0;left:10%;z-index:40;width:80%;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;text-align:center;line-height:40px;font-size:18px;color:#fff}.music-list .bg-image[data-v-77c0eaa0]{position:relative;width:100%;height:0;padding-top:70%;-webkit-transform-origin:top;transform-origin:top;background-size:cover}.music-list .bg-image .play-wrapper[data-v-77c0eaa0]{position:absolute;bottom:20px;z-index:50;width:100%}.music-list .bg-image .play-wrapper .play[data-v-77c0eaa0]{-webkit-box-sizing:border-box;box-sizing:border-box;width:135px;padding:7px 0;margin:0 auto;text-align:center;border:1px solid #ffcd32;color:#ffcd32;border-radius:100px;font-size:0}.music-list .bg-image .play-wrapper .play .icon-play[data-v-77c0eaa0]{display:inline-block;vertical-align:middle;margin-right:6px;font-size:16px}.music-list .bg-image .play-wrapper .play .text[data-v-77c0eaa0]{display:inline-block;vertical-align:middle;font-size:12px}.music-list .bg-image .filter[data-v-77c0eaa0]{position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(7,17,27,.4)}.music-list .bg-layer[data-v-77c0eaa0]{position:relative;height:100%;background:#222}.music-list .list[data-v-77c0eaa0]{position:absolute;top:0;bottom:0;width:100%;background:#222}.music-list .list .song-list-wrapper[data-v-77c0eaa0]{padding:20px 30px}.music-list .list .loading-container[data-v-77c0eaa0]{position:absolute;width:100%;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}",""])},557:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(54),a=i.n(s),n=i(63),o=i.n(n),l=i(180),r=i.n(l),c=i(177),d=i.n(c),g=i(122),p=i(45),f=i(80),u=Object(g.d)("transform"),m=Object(g.d)("backdrop-filter");e.default={mixins:[f.b],props:{bgImage:{type:String,default:""},songs:{type:Array,default:[]},title:{type:String,default:""},rank:{type:Boolean,default:!1}},data:function(){return{scrollY:0}},created:function(){this.probeType=3,this.listenScroll=!0},mounted:function(){this.imageHeight=this.$refs.bgImage.clientHeight,this.minTranslateY=40-this.imageHeight,this.$refs.list.$el.style.top=this.imageHeight+"px"},computed:{bgStyle:function(){return"background-image:url("+this.bgImage+")"}},methods:a()({handlePlaylist:function(t){var e=t.length>0?"60px":"";this.$refs.list.$el.style.bottom=e,this.$refs.list.refresh()},scroll:function(t){this.scrollY=t.y},back:function(){this.$router.back()},selectItem:function(t,e){this.selectPlay({list:this.songs,index:e})},random:function(){this.randomPlay({list:this.songs})}},Object(p.b)(["selectPlay","randomPlay"])),watch:{scrollY:function(t){var e=Math.max(this.minTranslateY,t),i=0,s=1,a=0;this.$refs.layer.style[u]="translate3d(0,"+e+"px,0)";var n=Math.abs(t/this.imageHeight);t>0?(s=1+n,i=10):a=Math.min(20*n,20),this.$refs.filter.style[m]="blur("+a+"px)",t<this.minTranslateY?(i=10,this.$refs.bgImage.style.paddingTop=0,this.$refs.bgImage.style.height="40px",this.$refs.playBtn.style.display="none"):(this.$refs.bgImage.style.paddingTop="70%",this.$refs.bgImage.style.height=0,this.$refs.playBtn.style.display=""),this.$refs.bgImage.style.zIndex=i,this.$refs.bgImage.style[u]="scale("+s+")"}},components:{Scroll:o.a,SongList:r.a,Loading:d.a}}},558:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"music-list"},[i("div",{staticClass:"back",on:{click:t.back}},[i("i",{staticClass:"icon-back"})]),t._v(" "),i("h1",{staticClass:"title",domProps:{innerHTML:t._s(t.title)}}),t._v(" "),i("div",{ref:"bgImage",staticClass:"bg-image",style:t.bgStyle},[i("div",{staticClass:"play-wrapper"},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.songs.length>0,expression:"songs.length > 0"}],ref:"playBtn",staticClass:"play",on:{click:t.random}},[i("i",{staticClass:"icon-play"}),t._v(" "),i("span",{staticClass:"text"},[t._v("随机播放全部")])])]),t._v(" "),i("div",{ref:"filter",staticClass:"filter"})]),t._v(" "),i("div",{ref:"layer",staticClass:"bg-layer"}),t._v(" "),i("scroll",{ref:"list",staticClass:"list",attrs:{data:t.songs,"probe-type":t.probeType,"listen-scroll":t.listenScroll},on:{scroll:t.scroll}},[i("div",{staticClass:"song-list-wrapper"},[i("song-list",{attrs:{songs:t.songs,rank:t.rank},on:{select:t.selectItem}})],1),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.songs.length,expression:"!songs.length"}],staticClass:"loading-container"},[i("loading")],1)])],1)},staticRenderFns:[]}},559:function(t,e,i){"use strict";function s(){var t=c()({},g.b,{platform:"h5",uin:0,needNewCode:1});return Object(d.a)("https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg",t,g.c)}function a(){var t=u?"/api/getDiscList":"http://ustbhuangyi.com/music/api/getDiscList",e=c()({},g.b,{platform:"yqq",hostUin:0,sin:0,ein:29,sortId:5,needNewCode:0,categoryId:1e7,rnd:Math.random(),format:"json"});return f.a.get(t,{params:e}).then(function(t){return l.a.resolve(t.data)})}function n(t){var e=c()({},g.b,{disstid:t,type:1,json:1,utf8:1,onlysong:0,platform:"yqq",hostUin:0,needNewCode:0});return Object(d.a)("https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg",e,g.c)}e.b=s,e.a=a,e.c=n;var o=i(82),l=i.n(o),r=i(81),c=i.n(r),d=i(178),g=i(62),p=i(181),f=i.n(p),u=!1},604:function(t,e,i){var s=i(605);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);i(542)("0fbbacf5",s,!0)},605:function(t,e,i){e=t.exports=i(541)(!1),e.push([t.i,".slide-enter-active[data-v-ec111780],.slide-leave-active[data-v-ec111780]{-webkit-transition:all .3s;transition:all .3s}.slide-enter[data-v-ec111780],.slide-leave-to[data-v-ec111780]{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}",""])},606:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(54),a=i.n(s),n=i(554),o=i.n(n),l=i(559),r=i(62),c=i(45),d=i(123);e.default={computed:a()({title:function(){return this.disc.dissname},bgImage:function(){return this.disc.imgurl}},Object(c.c)(["disc"])),data:function(){return{songs:[]}},created:function(){this._getSongList()},methods:{_getSongList:function(){var t=this;if(!this.disc.dissid)return void this.$router.push("/recommend");Object(l.c)(this.disc.dissid).then(function(e){e.code===r.a&&(t.songs=t._normalizeSongs(e.cdlist[0].songlist))})},_normalizeSongs:function(t){var e=[];return t.forEach(function(t){t.songid&&t.albummid&&e.push(Object(d.b)(t))}),e}},components:{MusicList:o.a}}},607:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:"slide"}},[i("music-list",{attrs:{title:t.title,"bg-image":t.bgImage,songs:t.songs}})],1)},staticRenderFns:[]}}});