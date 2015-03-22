!function() {
  'use strict';

  

  function applyMode(newMode) {
    if (newMode === 'dark') {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    }
    else {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
    }
  }


  var mode = 'light';
  window.addEventListener('devicelight', function(e) {
    if (e.value <= 50 && mode === 'light') {
      applyMode('dark');
      mode = 'dark';
    }
    if (e.value > 50 && mode === 'dark') {
      applyMode('light');
      mode = 'light';
    }
  });

}();