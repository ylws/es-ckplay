import {LocalVideoPlay} from './src/videosckplayer.babel.min.js'
export default {
 	install: function(Vue) {
	 Object.defineProperty(Vue.prototype, '$CKVideo', { value: LocalVideoPlay });
  }
}