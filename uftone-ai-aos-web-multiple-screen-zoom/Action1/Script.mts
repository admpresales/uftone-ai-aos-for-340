set mySendKeys = CreateObject("WScript.shell")
' starting with AOS open and at 175% zoom
Browser("Advantage Shopping").Navigate "http://advantageonlineshopping.com"
Browser("Advantage Shopping").Maximize

For Iterator = 1 To 4 Step 1
		
	AIUtil.SetContext Browser("Advantage Shopping")
	
	AIUtil("profile").Highlight
	AIUtil("profile").Click
	AIUtil.FindTextBlock("Username").Highlight
	AIUtil.FindTextBlock("Username").Type "Mercury"
	AIUtil.FindTextBlock("Password").Type "Mercury"

'	AIUtil("input","Username").Type "Mercury"
'	AIUtil("input","Password").Type "Mercury"
	AIUtil.FindTextBlock("SIGN IN").Click
	AIUtil("profile").Click
	AIUtil.FindTextBlock("Sign out").Click
	
	mySendKeys.SendKeys("^-") ' reduce zoom
	mySendKeys.SendKeys("^-") ' reduce zoom

Next
