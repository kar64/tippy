
// MoveTo

const moveto = new MoveTo({
  duration: 3000,
  tolerance: 200,
});
// new MoveTo({
//   tolerance: 0,
//   duration: 800,
//   easing: 'easeOutQuart',
//   container: window
// })
const link=document.querySelectorAll('a');
link.forEach(aa=>moveto.registerTrigger(aa))

const btn=document.querySelectorAll('button');
btn.forEach(bb=>moveto.registerTrigger(bb))

// Tippy

tippy('[data-tippy-content]',{
  theme: 'light',
  animation:'scale'
});
// tippy('button', {
//   duration: 0,
//   arrow: false,
//   delay: [1000, 200],
// });
// theme:
// light
// light-border
// material
// translucent