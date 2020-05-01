class A {
  a() {
    console.log('this:', this)
    return this
  }
  b = () => {
    console.log('this:', this)
    return this
  }
}

const a = new A()

const c = a.a
const d = a.b
c()
d()