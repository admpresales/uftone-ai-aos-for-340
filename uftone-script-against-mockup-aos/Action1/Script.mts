ExitAction ' comment this out if you want to run this action

Dim BrowserExecutable
Dim BrowserName
Dim BrowserDescription

BrowserName = DataTable.Value("Browser")
BrowserExecutable = BrowserName & ".exe"
BrowserDescription = "version:=" & BrowserName & ".*"
 																				'Comment out this line if you want this action to actually run
While Browser(BrowserDescription , "CreationTime:=0").Exist(0)   							'Loop to close all open browsers
	Browser(BrowserDescription , "CreationTime:=0").Close 
Wend
SystemUtil.Run BrowserExecutable,"","","",3													'launch the browser specified in the data table
Set AppContext=Browser(BrowserDescription ,	"CreationTime:=0")

AppContext.ClearCache																		'Clear the browser cache to ensure you're getting the latest forms from the application
AppContext.Navigate DataTable.Value("URL")													'Navigate to the application URL
AppContext.Maximize																			'Maximize the application to give the best chance that the fields will be visible on the screen
AppContext.Sync																				'Wait for the browser to stop spinning
AIUtil.SetContext AppContext																'Tell the AI engine to point at the application
															
'===========================================================================================
'BP:  View products from home page
'===========================================================================================

'===========================================================================================
'BP:  Login
'===========================================================================================

'===========================================================================================
'BP:  Logout
'===========================================================================================

AppContext.Close 'Close the application at the end of your script
