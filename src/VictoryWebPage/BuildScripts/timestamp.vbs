Function LZ(ByVal Number)
  If Number < 10 Then
    LZ = "0" & CStr(Number)
  Else
    LZ = CStr(Number)
  End If
End Function

Function TimeStamp
  Dim CurrTime
  CurrTime = Now()

  TimeStamp = CStr(Year(CurrTime)) _ 
	& LZ(Month(CurrTime)) _
    & LZ(Day(CurrTime)) & "." _
    & LZ(Hour(CurrTime)) _
    & LZ(Minute(CurrTime)) _
    & LZ(Second(CurrTime))
End Function

WScript.Echo TimeStamp()