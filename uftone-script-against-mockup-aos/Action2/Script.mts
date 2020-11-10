ExitAction ' comment this out if you want to run this action

Dim BrowserExecutable
Dim BrowserName
Dim BrowserDescription

BrowserName = DataTable.Value("Browser")
BrowserExecutable = BrowserName & ".exe"
BrowserDescription = "version:=" & BrowserName & ".*"

While Browser(BrowserDescription , "CreationTime:=0").Exist(0)   							'Loop to close all open browsers
	Browser(BrowserDescription , "CreationTime:=0").Close 
Wend
SystemUtil.Run BrowserExecutable,"","","",3													'launch the browser specified in the data table
Set AppContext=Browser(BrowserDescription ,	"CreationTime:=0")

AppContext.ClearCache																		'Clear the browser cache to ensure you're getting the latest forms from the application
AppContext.Navigate DataTable.Value("URL")															'Navigate to the application URL
'AppContext.Maximize																			'Maximize the application to give the best chance that the fields will be visible on the screen
AppContext.Sync																				'Wait for the browser to stop spinning
AIUtil.SetContext AppContext																'Tell the AI engine to point at the application
Browser("Browser").Navigate datatable.Value("URL")

'===========================================================================================
'BP:  View products from home page
'===========================================================================================
AIUtil.FindTextBlock("Speakers").Click
AIUtil.FindTextBlock("pvantageDEMO").Click
'===========================================================================================
'BP:  Login
'===========================================================================================
AIUtil("profile").Click
AIUtil("input", "Username").Highlight
AIUtil("input", "Username").Type "Mercury"
AIUtil("input", "Password").Type "Mercury"
AIUtil("button", "Sign In").Click

'===========================================================================================
'BP:  Logout
'===========================================================================================
AIUtil("profile").Click
AIUtil.FindTextBlock("Sign out").Highlight
AIUtil.FindTextBlock("Sign out").Click

AppContext.Close																			'Close the application at the end of your script

