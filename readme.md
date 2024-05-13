从custom-element 中，可以yarn dev。可以看到 custom-element运行正常。
改文件夹相当于组件库 可调试。


custom-element 的引入：
在vue应用main中：
index.html文件中加了一系列的 script 和 css。
在about页面中 引入了  costom-element。正常运行。

在原始的html 应用中。同理引入即可。
然后在页面中引入了 custom。可正常运行。

custom-element 的打包体积 2k左右。
其他文件全部通过 外部引入，可以共用依赖文件。