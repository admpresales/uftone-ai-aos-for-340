foo = 1 ' in case you want to set a breakpoint
	
' context is set completely differently for mobile devices, vs desktop browsers
' I strongly recommend that you have ALL browsers closed before running this test
' Otherwise -browsers are often not unique, then Smart ID significantly slows replay

if datatable.value("device_ostype", dtGlobalSheet) <> "Browser" then
	Set oDevice=Device("Class Name:=Device","ostype:=" & datatable.value("device_ostype") ,"id:=" & datatable.value("device_id"))
	Set oApp=oDevice.App("Class Name:=App","identifier:=" & datatable.value("app_identifier") ,"instrumented:=True")		
	Set	LaunchEnvironment=oDevice
'	oApp.Launch Install, Restart ' first time to install
	oApp.Launch Restart ' other times to install
	AIUtil.SetContext oDevice
	AIUtil("hamburger_menu").Click
else
	AIUtil.SetContext Browser("Advantage Shopping")
	Browser("Advantage Shopping").Navigate "http://advantageonlineshopping.com"
	Browser("Advantage Shopping").Sync
End If

' here is the key advantage to AI object recognition
If AIUtil.FindTextBlock("Sign out").Exist (3) then ' this can happen if last run didn't succed in logging out
	AIUtil.FindTextBlock("Sign out").Click ' really shouldn't need these
	AIUtil.FindTextBlock("Yes").Click
	wait 2
End If	

'Browser("Advantage Shopping").Highlight

AIUtil("profile").Click
AIUtil("input", "USER NAME").Highlight
AIUtil("input", "USER NAME").Type "Mercury"
AIUtil("input", "PASSWORD").Type "Mercury"
AIUtil("button", "LOGIN").Click
'
' some mobile devices, sometimes have a prompt to allow access
if AIUtil.FindTextBlock("NO").Exist (5) then
	AIUtil.FindTextBlock("NO").Click
	
End If


' Logout is a case where the GUI interface looks completely different
Select case datatable.value("device_ostype")
Case "iOS", "ANDROID"
	AIUtil("hamburger_menu").Click
	AIUtil.FindTextBlock("Sign out").Click
	AIUtil.FindTextBlock("Yes").Click
	oDevice.CloseViewer
Case "Browser"
	AIUtil("profile").Click
	AIUtil.FindTextBlock("Sign out").Click
end Select



