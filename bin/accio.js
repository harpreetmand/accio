(function(Main, undefined){
  console.log('main js file');
}(window.Main == windowMain||{}));


(function(Controller, undefined)
{
  console.log('controller js file');
  var a  = "Contreoller name";
}(Main.Controller == Main.Controller ||{}));
