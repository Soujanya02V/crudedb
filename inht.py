#inheritance
class Employee:
    def __init__(self,name,id):
        self.name = name
        self.id = id
    def showDet(self):
        print(f"name:{self.name} \n id:{self.id}")

e = Employee("souju" , 185)
e.showDet()


class Programmer(Employee):
    def showLang(self):
        print("python")


e2 = Programmer("tuvi",186)
e2.showLang()
e2.showDet()


# access modifiers
# if they are declared with 2 underscore they would be private but can be accessed
# ex: self.__name

class Emp:
    def __init__(self):
        self.__name = "mango"

a = Emp()
print(a._Emp__name)
#name mangling
print(a.__dir__())