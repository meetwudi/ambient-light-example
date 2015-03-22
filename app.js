!function() {
  'use strict';
  
  const MODE_LIGHT = Symbol();
  const MODE_DARK = Symbol();

  var mode = MODE_LIGHT;


  function applyMode(newMode) {
    if (newMode === MODE_DARK) {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    }
    else {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
    }
  }
  
  function applyLux(lux) {
    if (lux <= 50 && mode === MODE_LIGHT) 
      applyMode((mode = MODE_DARK));
    if (lux > 100 && mode === MODE_DARK) 
      applyMode((mode = MODE_LIGHT));
  }

  window.addEventListener('devicelight', function(e) {
    applyLux(e.value);
  });
}();