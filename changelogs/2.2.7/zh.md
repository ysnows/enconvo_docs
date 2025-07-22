# Enconvo 2.2.7 更新日志 (2025-07-22) 🚀

## 添加语音识别模型 `mlx parakeet-tdt-0.6b-v2`

- [x] Speech-to-Text Provider 添加 `mlx-community/parakeet-tdt-0.6b-v2` 支持，速度更快、质量更好，本地&隐私（第一次使用会比较慢，需要下载模型）

## 新增 AI Model Provider

- [x] [添加 302.ai]:(http://302.ai) llm provider

## 功能优化

- [x] 软件体积优化，从(367m -> 224m)
- [x] moonshot 支持 设置 BaseUrl: [`https://api.moonshot.ai/v1`] or `https://api.moonshot.cn/v1`

## 问题修复

- [x] Online Video Downloader , `audio only` 选项修复、convert to mp4 时间长的问题、不自动带 mp4 后缀问题
- [x] MCP 运行错误的问题
- [x] Summarize youtube/link 响应语言设定不生效的问题
- [x] 解决 [fireworks.ai](http://fireworks.ai) 报错的问题
