# 1.原生js文件导出实例化方法（可传参）
	export function LocalVideoPlay(param) {
		return new LocalVideoPlay(param)
	}
# 2.npm包index文件接收LocalVideoPlay参数，并把该参数添加到vue原型对象里面
	import {LocalVideoPlay} from './src/videosckplayer.babel.min.js'
	export default {
	 	install: function(Vue) {
 		 Object.defineProperty(Vue.prototype, '$CKVideo', { value: LocalVideoPlay });
	  }
	}
# 3.发布npm包（eg:LocalVideoPlay）
# 4.npm安装LocalVideoPlay
# 5.在路由中引入LocalVideoPlay,并使用vue.use()安装js插件（安装 Vue.js 插件。如果插件是一个对象，必须提供 install 方法。如果插件是一个函数，它会被作为 install 方法。install 方法将被作为 Vue 的参数调用。）
	import LocalVideoPlay from 'cfcmckplay'
	Vue.use(LocalVideoPlay)
# 6.定义scroll.vue文件如下（需要注意的是，使用方法一定要放到mounted方法里面）
	
	<script type="text/javascript">
	export default {
	  name: 'CKVideo',
	  data () {
	    return {
	      msg: '信息'
	    }
	  },
	  mounted: function () {
	    console.log(this.$CKVideo())
	  }
	}
	</script>
# 7.将该单文件放置到需要嵌入的组件即可。
# 注意事项：
	样式表需要自行引入。
	以上说明针对vue使用