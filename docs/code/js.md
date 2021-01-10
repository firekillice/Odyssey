# js
## 介绍
* JavaScript 是一种基于原型而不是基于类的基于对象(object-based)语言。
* 基于类的面向对象语言，比如 Java 和 C++，是构建在两个不同实体之上的：类和实例。基于原型的语言（如 JavaScript）并不存在这种区别：它只有对象。基于原型的语言具有所谓原型对象(prototypical object)的概念。就是更加灵活的组织对象的结构，一切解释对象，失去了c++、java等的严格要求。
```
function Employee () {
  this.name = "";
  this.dept = "general";
}

function Manager() {
  Employee.call(this);
  this.reports = [];
}
Manager.prototype = Object.create(Employee.prototype);

function WorkerBee() {
  Employee.call(this);
  this.projects = [];
}
WorkerBee.prototype = Object.create(Employee.prototype);
---------------------------------------------------------------------------------------------
public class Employee {
   public String name = "";
   public String dept = "general";
}
public class Manager extends Employee {
   public Employee[] reports = new Employee[0];
}



public class WorkerBee extends Employee {
   public String[] projects = new String[0];
}
```
