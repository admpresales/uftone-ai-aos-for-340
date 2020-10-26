set mySendKeys = CreateObject("WScript.shell")
' starting at 175% zoom
For Iterator = 1 To 4 Step 1
		
	AIUtil.SetContext Browser("Advantage Shopping")
	
	AIUtil("profile").Click
	AIUtil("input","Username").Highlight
	AIUtil("input","Username").Type "Mercury"
	AIUtil("input","Password").Type "Mercury"
	AIUtil.FindTextBlock("SIGN IN").Click
	AIUtil("profile").Click
	AIUtil.FindTextBlock("Sign out").Click
	
	mySendKeys.SendKeys("^-") ' reduce zoom
	mySendKeys.SendKeys("^-") ' reduce zoom

Next
