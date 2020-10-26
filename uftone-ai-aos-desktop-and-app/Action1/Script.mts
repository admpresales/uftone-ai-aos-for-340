foo = 1
' context is set completely differently for mobile devices, vs desktop browsers
' I strongly recommend that you have ALL browsers closed before running this test
' Otherwise -browsers are often not unique, then Smart ID significantly slows replay
if datatable.value("Browser") = "" then
	Set oDevice=Device("Class Name:=Device","ostype:=" & datatable.value("device_ostype") ,"id:=" & datatable.value("device_id"))
	Set oApp=oDevice.App("Class Name:=App","identifier:=" & datatable.value("app_identifier") ,"instrumented:=True")		
	Set	LaunchEnvironment=oDevice
	oApp.Launch Install, Restart
	AIUtil.SetContext oDevice
	AIUtil("hamburger_menu").Click
else
	AIUtil.SetContext Browser("Advantage Shopping")
	Browser("Advantage Shopping").Navigate "http://advantageonlineshopping.com"
	Browser("Advantage Shopping").Sync
End If

' here is the key advantage to AI object recognition

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

' for reasons not understood, the AIUtile("Search") on browsers is NOT setting the value for the search string
' This can be seen as a feature - you can always revert to attribute based steps
'if datatable.value("Browser") = "" then
'else
'	Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("mobile_search").Set "17t" @@ script infofile_;_ZIP::ssf1.xml_;_
'	end if
'
'AIUtil("search").Search "17t"
'AIUtil.FindText("HP ENVY -17t").Click
'
' in order to logout on mobile apps, you have to click these to objects to make the profile control visible
if datatable.value("Browser") = "" then
	AIUtil("left_triangle").Click
	AIUtil("hamburger_menu").Click
end if

AIUtil("profile").Click

' and this is a case where the GUI interface looks completely different.
if datatable.value("Browser") = "" then
	AIUtil.FindTextBlock("YES").Click
else
	AIUtil.FindTextBlock("Sign out").Click
End If




