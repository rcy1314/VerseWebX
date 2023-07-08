## 说明

main.js文件内包含web url路径和本地路径，可根据需要自行更改

设定的图标必须是512*512分辨率

## 更新

moveFiles.js中更新了按文件名称后缀分类移动的规则

## 本地使用

一、运行前确保有Node.js环境，可前往[官方网站](https://nodejs.org/)下载和安装Node.js。

1、安装所有依赖项

```
npm install
```

如果报错请尝试`sudo npm install`

2、安装Electron Builder：

```
npm install electron-builder --save-dev
```

二、项目的根目录下运行以下命令来执行打包操作：

```
npm run build
```

或使用

```
npx electron-builder build
```

结束，等待运行构建。

------

注：如果你不需要哪个系统的文件，可以注释或删除掉

如果构建包括linux所有文件类型package-linux.js则需将package-linux.js内的代码替换掉package.js内的

构建linux所需环境依赖：

安装Snapcraft。请按照以下步骤进行操作：

1. 打开终端应用程序。

2. 运行以下命令来安装Homebrew（如果尚未安装）：

   ```bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```

3. 安装Snapcraft，运行以下命令：

   ```bash
   brew install snapcraft
   ```

RPM包需要安装`rpmbuild`工具

```
brew install rpm
```

