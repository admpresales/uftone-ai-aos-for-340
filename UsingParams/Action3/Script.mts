RunAction "Create Order", oneIteration,  datatable("outBound",dtlocalsheet),      	datatable("InBound" ,dtlocalsheet)   ,      datatable("newOrder",dtlocalsheet)
RunAction "Modify Order", oneIteration,  datatable("newOrder",dtlocalsheet)

ncurRow = Datatable.GetSheet(dtlocalsheet).GetCurrentRow
nRows = Datatable.GetSheet(dtlocalsheet).GetRowCount

If ncurRow = nRows Then
	testDir = Environment.Value("TestDir")
	Set curSheet = datatable.GetSheet(dtlocalsheet)
	msgbox curSheet.name & "xxxxx"

	datatable.AddSheet  curSheet.name & "xxxxx"
	' here you would have to put in looping structures to read ll existing parameters in local, and put them into the "new"local
	datatable.Export testDir & "\\default.xlsx"

End If


var_Value = Environment.Value("TestDir")

