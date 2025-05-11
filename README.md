# 🎮 三模式井字棋

[![Deploy](https://img.shields.io/badge/Deploy-Firebase-orange)]()
[![License](https://img.shields.io/badge/License-MIT-blue)]()

## 功能特性
- 本地双人对战
- 三级难度AI（简单/中等/困难）
- 实时网络对战
- Docker容器化部署

## 快速启动
```bash
# 安装依赖
npm install -g firebase-tools

# 本地运行
firebase emulators:start

# 生产部署
firebase deploy
```

## 技术栈
- **前端**: HTML5/CSS3/ES6
- **实时数据库**: Firebase Realtime Database
- **容器化**: Docker + Nginx