f = open("statesraw.txt", "r")
newf = open("statesdict.txt", "w")
for line in f:
    #print(line)
    mylist = line.split()
    mydict = "{lat: " + mylist[-2] +", lng: " + mylist[-1] + "},"
    #print(mydict)
    newf.write(mydict)

f.close()
newf.close()

