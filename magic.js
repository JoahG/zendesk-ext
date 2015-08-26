var do_the_magic = function(){
  setTimeout(function() {
    $('.ember-view.btn-toolbar.pull-right').remove();
  }, 100)
}

var script = document.createElement("script");
script.textContent = "(" + do_the_magic.toString() + "())";
document.documentElement.appendChild(script);