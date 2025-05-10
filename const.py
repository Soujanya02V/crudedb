class Person:
    name="souju"
    occ="dev"
   
    def __init__(self,n,o):
        print("I am a person")
        self.name = n
        self.occ = o

    def info(self):
        print(f"{self.name} is a {self.occ}")
a = Person("tuvi","designer")
a.info()


#decorators




def greet(fx):
    def mfx():
        print("morning")
        fx()
        print("thanks")
    return mfx


@greet

def hello():
    print("hello world")


def add(a,b):
    print(a+b)

hello()

#getters and setters

class MyClass:
    def __init__(self,value):
        self._value = value
    def show(self):
        print("in self")


    @property
    def ten_value(self):
        return 10*self._value #getter
    
    @ten_value.setter                  #setter
    def ten_value(self, new_v):
        self._value = new_v/10
        return 10*self._value
        


obj = MyClass(10)
obj.ten_value = 65
print(obj._value)
obj.show()



