$(".phone").each(function(){window.intlTelInput(this,{utilsScript:"https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js",separateDialCode:!0})}),$(document).ready(function(){$(".select").select2()}),$(".select").select2().change(function(){$(this).valid()}),$("#fileUpload").change(function(){$(this).parents(".file-upload-form").find(".add-clone-text").clone();var e=$("#fileUpload")[0].files[0].name;$(this).parents(".file-upload-form").find(".add-clone-text").text(e)});var uploadField=document.getElementById("fileUpload");uploadField.onchange=function(){this.files[0].size>3e6&&(alert("File is too big! Select file no more than 3MB"),this.value="")},$(function(){$.validator.addMethod("emailRegex",function(e,i){return this.optional(i)||/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i.test(e)},"")}),$(function(){$(".form_meest_contact").validate({rules:{name:{required:!0},last_name:{required:!0},phone:{required:!0,number:!0,min:10},email:{required:!0,emailRegex:!0},topic:{required:!0}},messages:{name:{required:"Required field"},last_name:{required:"Required field"},phone:{required:"Required field",number:"Enter only number",min:"Enter full phone number"},email:{required:"Required field",emailRegex:"Please, enter valid email address"},topic:{required:"Required field"}}})});