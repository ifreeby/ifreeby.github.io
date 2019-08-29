$(function(){var $focusMe,$wrapper;$('form .errorRow').each(function(){if($(this).html()!==''){$wrapper=$(this).parents('.formLabel,.inputWrapper').eq(0);if(!$wrapper.length){$wrapper=$(this).prev();}
$focusMe=$wrapper.find('input,select').eq(0);return false;}});if(!$focusMe||!$focusMe.length){$focusMe=$('#MemberEmail');if(!$focusMe.length){$focusMe=$('input').eq(0);}}
$focusMe.focus();});