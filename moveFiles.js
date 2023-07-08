const fs = require('fs');
const path = require('path');

const outputDir = path.join(__dirname, 'build');

// 获取操作系统名称
function getPlatform() {
  const platform = process.platform;
  if (platform === 'darwin') {
    return 'mac';
  } else if (platform === 'win32') {
    return 'win';
  } else if (platform === 'linux') {
    return 'linux';
  } else {
    throw new Error(`Unsupported platform: ${platform}`);
  }
}

// 创建操作系统文件夹
function createPlatformDir(platform) {
  const platformDir = path.join(outputDir, platform);
  if (!fs.existsSync(platformDir)) {
    fs.mkdirSync(platformDir);
  }
  return platformDir;
}

// 获取文件名后缀
function getFileExtension(filename) {
  return path.extname(filename).slice(1);
}

// 移动文件到操作系统文件夹
function moveFilesToPlatformDir() {
  const files = fs.readdirSync(outputDir);
  files.forEach((file) => {
    const filePath = path.join(outputDir, file);
    const stats = fs.statSync(filePath);
    if (stats.isFile()) {
      const platform = getPlatform();
      const fileExtension = getFileExtension(file);
      const platformDir = createPlatformDir(fileExtension);
      fs.renameSync(filePath, path.join(platformDir, file));
    }
  });
  console.log('文件移动成功！');
}

moveFilesToPlatformDir();
