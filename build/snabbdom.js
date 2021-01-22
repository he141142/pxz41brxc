(function (init, _class, props, style, eventlisteners, h) {
  'use strict';

  var patch = init.init([// Init patch function with chosen modules
  _class.classModule, // makes it easy to toggle classes
  props.propsModule, // for setting properties on DOM elements
  style.styleModule, // handles styling on elements with support for animations
  eventlisteners.eventListenersModule // attaches event listeners
  ]);
  var container = document.getElementById('container');
  var vnode = h.h('div#container.two.classes', {
    on: {
      click: function click() {
        alert("click 1");
      }
    }
  }, [h.h('span', {
    style: {
      fontWeight: 'bold'
    }
  }, 'This is bold'), ' and this is just normal text', h.h('a', {
    props: {
      href: '/foo'
    }
  }, 'I\'ll take you places!')]); // Patch into empty DOM element – this modifies the DOM as a side effect

  patch(container, vnode);
  var newVnode = h.h('div#container.two.classes', {
    on: {
      click: function click() {
        alert("click 2");
      }
    }
  }, [h.h('span', '123') //   h('span', { style: { fontWeight: 'normal', fontStyle: 'italic' } }, 'This is now italic type'),
  //   ' and this is still just normal text',
  //   h('a', { props: { href: '/bar' } }, 'I\'ll take you places!')
  ]); // Second `patch` invocation

  setTimeout(function () {
    patch(vnode, newVnode);
  }, 2000); // Snabbdom efficiently updates the old view to the new state

}(init, _class, props, style, eventlisteners, h));
