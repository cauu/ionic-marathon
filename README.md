###项目简介 
 
*** 
基于Ionic的种子项目。项目在之前的mean-seed-project基础上，结合[ionic-starter](https://github.com/loicknuchel/ionic-starter/blob/master/package.json)，对依赖的控件、模块进行精简。抛弃foundation for app，拥抱ionic。
  
###安装项目

***
首先在global scope安装npm、bower和gulp（这里就不赘述），然后按顺序运行以下命令:    
  
1. git clone https://github.com/cauu/ionic-seed.git  
2. cd ionic-seed
3. npm install
4. bower install
5. gulp default
  
上述步骤完成后，你应该可以在浏览器中运行实例代码了。当然你也可以一次行执行所有这些命令：
  
```
git clone https://github.com/cauu/ionic-marathon.git && cd ionic-marathon && npm install && bower install && gulp default
```
  
之后，如果你希望在ios模拟器上打包运行程序，执行如下命令:  
  
1. npm install -g ios-sim
2. ionic platform add ios
3. ionic resources
4. ionic run ios
  
同样，你也可以调用: 
  
```
npm install -g ios-sim && ionic platform add ios && ionic resources && ionic run ios
```
  
###修改文件

***
你可能需要修改一些描述信息，包括: 
  
* config.xml (widget id, name, description, author)
* www/index.html (title)
* bower.json (name, homepage, author & description)
* package.json (name & description)
* ionic.project (name¡)
  
###目录结构
  
***
之前的mean-seed-prj采用了“按照类型划分目录”的方式，随着项目变得越来越大，每次添加内容时，都不能在第一时间找到需要修改的文件，这带来了很大的困扰。因此，在这个seed-prj中，我果断将目录结构改为“按功能点划分”。这意味着，每当有新的页面需要被添加，我只需要新建一个新的文件夹，插入新的内容即可，而不必再去三个目录下，分别插入其对应的内容。在项目初期，你可能体会不到这样的便利，然而这一举措绝对是必要的。
  
### 参考

***
强烈推荐[Angular-Style-Guide](https://github.com/johnpapa/angular-styleguide¡)