aList = ['one', 'two', 'three', 'four']
aList.append('five')
oList = ['six', 'seven', 'eight', 'nine']
res = aList.copy()
res.clear()
res = aList.count('three')
aList.extend(oList)
res = aList.index('three')
aList.insert(2, 3)
aList.pop(2)
aList.remove('six')
aList.reverse()
aList.sort()
print(aList)
print(res)
