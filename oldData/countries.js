var xmlHttp = createXmlHttpRequestObject();
function createXmlHttpRequestObject()
{
   var xmlHttp;
   try
   {
      xmlHttp = new XMLHttpRequest();
   }
   catch (e)
   {
   xmlHttp = false;
   }

   if(!xmlHttp)
   {
   alert(Failed to create request object!);
   }
   else {
   return xmlHttp;
   }
}
function processRequest(filename)
{
   if(xmlHttp.readyState == 4 || xmlHttp.readyState == 4)
   {
      var countryinfo =
   }
   else
   {

   }
}
{var selected_index = oForm.elements["country"].selectedIndex;

if(selected_index > 0)
{
   var selected_option_value = oForm.elements["country"].options[selected_index].value;
   var selected_option_text = oForm.elements["country"].options[selected_index].text;
}
else
{
   alert('Please select a country from the drop down list');
}
}
