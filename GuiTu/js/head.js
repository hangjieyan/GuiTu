 window.onload=function(){
	 var menu_dropdown_panel=document.getElementById("menu-dropdown-panel");
	 menu_sub_me=document.getElementById('menu-sub-me');
	 
	 
	 /*������Ƶ�menu_sub_meʱ��ʾ�����˵�*/
	 menu_sub_me.onmouseover=function(){
		 menu_dropdown_panel.style.display='block';
	 };
	 
	 /*������Ƴ�menu_sub_me����menu_dropdown_panelʱ���������˵�*/
	 menu_sub_me.onmouseout=function(){
		 menu_dropdown_panel.style.display='none';
	 };
	 menu_dropdown_panel.onmouseout=function(){
		 menu_dropdown_panel.style.display='none';
	 };
 }