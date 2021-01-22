import { init } from 'snabbdom/build/package/init'
import { classModule } from 'snabbdom/build/package/modules/class'
import { propsModule } from 'snabbdom/build/package/modules/props'
import { styleModule } from 'snabbdom/build/package/modules/style'
import { eventListenersModule } from 'snabbdom/build/package/modules/eventlisteners'
import { h } from 'snabbdom/build/package/h' // helper function for creating vnodes

var patch = init([ // Init patch function with chosen modules
  classModule, // makes it easy to toggle classes
  propsModule, // for setting properties on DOM elements
  styleModule, // handles styling on elements with support for animations
  eventListenersModule, // attaches event listeners
])

var container = document.getElementById('container')

var vnode = h('div#container.two.classes', { on: { click: function(){alert("click 1")} } }, [
  h('span', { style: { fontWeight: 'bold' } }, 'This is bold'),
  ' and this is just normal text',
  h('a', { props: { href: '/foo' } }, 'I\'ll take you places!')
])
// Patch into empty DOM element – this modifies the DOM as a side effect
patch(container, vnode)

var newVnode = h('div#container.two.classes', { on: { click: function(){alert("click 2")} } }, [
  h('span', '123')
//   h('span', { style: { fontWeight: 'normal', fontStyle: 'italic' } }, 'This is now italic type'),
//   ' and this is still just normal text',
//   h('a', { props: { href: '/bar' } }, 'I\'ll take you places!')
])
// Second `patch` invocation
setTimeout(function(){
    patch(vnode, newVnode) 
}, 2000)
// Snabbdom efficiently updates the old view to the new state