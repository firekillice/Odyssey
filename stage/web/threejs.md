# introduction 

## 使用

## 知识点
* 相机默认是由正z轴看像-z轴（相机镜头对着-z轴方向拍），就是我们由屏幕外向屏幕内看一样。
* sin(x)
* 

## UV
* uvw坐标系，为xyz已经被使用了，uv坐标就是贴图的坐标系，范围0-1
* 无论模型贴图大小如何，UV纹理一般都被归一化到[0，1]
* UV坐标算法 ex: 模型贴图1024 * 1024，贴图某个点的UV坐标 = (x/1024,y/1024)  例如(512，512)  UV坐标= （0.5，0.5）。
* mip mapping，不断的产生缩略图,smaller version,算法: minification filter, magnification filter
* texture space 材质空间, UV坐标所在的空间，因为没有3d图片，所以需要将2d空间的图片资源映射到3d的空间中
## webpack 
* npm init 
* npm install three --save

## 理解
* 选好地方，选好角色，站定位置， 设置好屏幕大小，开始拍照，咔咔咔
* 动画就是不停的拍照, move -> snapshot -> move -> snapshot
* fov(field of view): 就是眼睛睁开的大小
* 糖果的外包装虽然简单，但是如果把它铺开就是将3d转化为了2d；还有纸箱子的2d化。这就是UV UNWRAPPING
* 我们平时理解的几何都是在观察空间，而比如酒瓶的包装，糖果的包装，都需要将一个图片映射到一个3d空间中
* 叠飞机是将2d的空间装换为3d空间的过程
* 我们提供给gpu的就是非常多的3个点的信息，**程序并不用负责连接的过程**

## 资源
###  贴图 
* https://3dtextures.me/   
* https://www.poliigon.com/   
* https://www.arroway-textures.ch/ 
* 地球的贴图 https://upload.wikimedia.org/wikipedia/commons/1/1c/BlueMarble-2001-2002.jpg
### 文章
* https://marmoset.co/posts/basic-theory-of-physically-based-rendering/
* https://marmoset.co/posts/physically-based-rendering-and-you-can-too/
### 工具
* https://tinypng.com/
* substance designer 