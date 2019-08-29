classprefix='verify';function isTypeValidExt(classprefix,type,value){return true;}
var annoy=true;function debug(msg){if(annoy){annoy=confirm(msg);};}
$(document).ready(function(){mustCheck=true;$("."+classprefix+"Cancel").click(function(event){mustCheck=false;});for(var i=0;i<document.forms.length;i++){var fe=document.forms[i].elements;for(var j=0;j<fe.length;j++){if((fe[j]).title.indexOf("**")==0){if((fe[j]).value==""||(fe[j]).value==titleHint){var titleHint=(fe[j]).title.substring(2);(fe[j]).value=titleHint;}}else if(((fe[j]).type=="text"||(fe[j]).type=="password")&&(fe[j]).title.indexOf("*")==0){addHint((fe[j]));$(fe[j]).blur(function(event){addHint(this);});$(fe[j]).focus(function(event){removeHint(this);});}}}
$("FORM").submit(function(event){if(mustCheck){if(!checkForm(this)){event.preventDefault();};}else{mustCheck=!mustCheck;}});});function addHint(field){var titleHint=field.title.substring(1);if(field.value==""||field.value==titleHint){if(field.type=="password"){$(field).addClass("password");var newObject=changeInputType(field,"text")}
$(field).addClass("hint");field.value=titleHint;}}
function removeHint(field){var titleHint=field.title.substring(1);if(field.value==""||field.value==titleHint){$(field).removeClass('hint');field.value="";if($(field).hasClass("password")){var newObject=changeInputType(field,"password");if(newObject){$(newObject).focus();$(newObject).select();}}}}
function changeInputType(oldObject,oType){if(!document.all){oldObject.type=oType;return false;}else{var newObject=document.createElement('input');newObject.type=oType;if(oldObject.size)newObject.size=oldObject.size;if(oldObject.title)newObject.title=oldObject.title;if(oldObject.value)newObject.value=oldObject.value;if(oldObject.name)newObject.name=oldObject.name;if(oldObject.id)newObject.id=oldObject.id;if(oldObject.className)newObject.className=oldObject.className;oldObject.parentNode.replaceChild(newObject,oldObject);return newObject;}}
function checkForm(form){var send=true;var password='';radioGroups=Array();$(form).removeClass("haserrors");inputs=$(form).find('INPUT[class*="'+classprefix+'"], .required INPUT, .required TEXTAREA, .required SELECT');$.each(inputs,function(i,val){input=$(val);if(input.attr('offsetWidth')!=0){switch(input.attr('type')){case'select-one':if(input.get(0)[input.attr('selectedIndex')].text=='SELECT BELOW'||input.get(0)[input.attr('selectedIndex')].text==''){if(send)moveTo(input);showErrorOn(input);send=false;}
break;case'radio':if(window.radioGroups[input.attr('name')]===undefined)radioGroups[input.attr('name')]=new Array();radioGroups[input.attr('name')][radioGroups[input.attr('name')].length]=input;break;case'checkbox':if(!input.attr('checked')){if(send)moveTo(input);showErrorOn(input);send=false;}
break;case'file':if(!isFilled(input)){if(send)moveTo(input);showErrorOn(input);send=false;}
break;case'password':if(input.hasClass(classprefix+'PasswordConfirm')){if(input.val()!=password){if(send)moveTo(input);showErrorOn(input);send=false;}
break;}else{password=input.val();}
case'textarea':case'text':if((isFilled(input)||isRequired(input))&&(!isValid(input))){if(send)moveTo(input);showErrorOn(input);send=false;}
break;default:break;}}});for(var i in radioGroups){for(var j in radioGroups[i]){if(radioGroups[i][j].attr('checked')){break;}}
if(!radioGroups[i][j].attr('checked')){for(var j in radioGroups[i]){if(send)moveTo(radioGroups[i][j]);showErrorOn(radioGroups[i][j]);}
send=false;}}
return send;}
function isRequired(input){return input.parents(".required").length!=0;}
function isFilled(input){hintText='';if(input.attr('placeholder').indexOf("**")==0){var hintText=input.attr('placeholder').substring(2);}else if(input.attr('placeholder').indexOf("*")==0){var hintText=input.attr('placeholder').substring(1);}
return input.val()!=hintText&&input.val()!='';}
function isValid(input){if(!isFilled(input))return false;string=input.attr('class');value=input.val();start=string.indexOf(classprefix);type='';result=true;while(result){if(start==-1||string.charAt((start+classprefix.length))==' '||string.charAt((start+classprefix.length))!=string.charAt((start+classprefix.length)).toUpperCase()){break;}else{for(i=start;i<string.length;i++){if(string.charAt(i)==' '){break;}
type+=string.charAt(i);}
if(!isTypeValid(type,value)){result=false;break;}
start=string.indexOf(classprefix,start+1);}}
return result;}
function isTypeValid(type,value){if(type==classprefix+'Text'){return true;}
if(type==classprefix+'Integer'){return((value.match(/^[\d|,|\.|\s]*$/))&&(value!=''));}
if(type==classprefix+'Url'){return(value.match(/^(https?:\/\/)?(([0-9a-z_!~*'().&=+$%-]+: )?[0-9a-z_!~*'().&=+$%-]+@)?(([0-9]{1,3}\.){3}[0-9]{1,3}|([0-9a-z_!~*'()-]+\.)*([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]\.[a-z]{2,6})(:[0-9]{1,4})?((\/?)|(\/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+\/?)$/));}
if(type==classprefix+'MultipleWords'){return value.match(/^.*[^^]\s[^$].*$/);}
if(type==classprefix+'Mail'){if(value.indexOf("@example.com")>-1){return false;};var emailFilter=/^.+@.+\..{2,}$/;var illegalChars=/[\(\)\<\>\,\;\:\\\/\"\[\]]/
if(!(emailFilter.test(value))||value.match(illegalChars)){return(false);}else{return(true);}
return false;}
if(typeof isTypeValidExt=='function'){fr=isTypeValidExt(classprefix,type,value);if(isTypeValidExt(classprefix,type,value)===false){return false;}else{return true;}}
return true;}
function moveTo(input){input.get(0).focus();}
function showErrorOn(input){if(input.attr('id')=='MemberTerms')
{$('#terms_row').css('border','2px solid #ED1C24');}
else
{input.bind('focus.rmErrorClass',function(){rmErrorClass(this);});input.bind('mousedown.rmErrorClass',function(){rmErrorClass(this);});input.bind('keydown.rmErrorClass',function(){rmErrorClass(this);});input.addClass("error");input.parents(".required, .field, TR").addClass("error");}}
function rmErrorClass(elm){var etag=$(elm).parents(".error");var eform=$(elm).parents('FORM');$(elm).removeClass("error");$(elm).unbind('.rmErrorClass');if(etag){$(etag).removeClass("error");};}