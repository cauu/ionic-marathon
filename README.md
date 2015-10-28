###项目简介 
 
*** 
基于Ionic的项目，可用于马拉松报名、查询和活动发布。  主要用来练手。项目将在之前的mean-seed-project基础上，结合[ionic-starter](https://github.com/loicknuchel/ionic-starter/blob/master/package.json)，对依赖的控件、模块进行精简。  
  
###安装项目

***
首先在global scope安装npm、bower和gulp（这里就不赘述），然后按顺序运行以下命令:    
  
1. git clone https://github.com/cauu/ionic-marathon.git  
2. cd ionic-marathon
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