# Enconvo 2.1.1 更新日志 (2025-02-22)

1. 新增功能：

   - 新增 Online Video Downloader 工具，支持下载主流平台视频(TikTok、YouTube、Twitter、Instagram、Reddit、Vimeo、Pornhub、XVideos)
   - 新增 App Context Awareness 功能，可将当前应用内容和截图作为上下文
   - 新增命令执行后post action设置，支持粘贴、插入和复制
   - 新增 PopBar 显示样式设置，可选择显示/隐藏图标和文字

2. 功能优化：

   - 优化 AI Web Search 功能，输出结果的时候添加引用来源
   - 优化 Chat Window 的新建对话和清空记录逻辑，更易用
   - 优化 Speech-to-text Deepgram Provider，新增 Nova 3 模型支持
   - 优化 DeepSeek R1 模型速度、稳定性
   - 支持自定义 Google Gemini LLM Provider BaseUrl
   - 支持自定义 DeepSeek LLM Provider BaseUrl


3. Bug 修复：

   - 修复 Preview.app 中 使用SmartBar 导致的自动复制问题
   - 修复 Voice Input Method 使用 Local Whisper 和 Stream Insert 时，无法正常输入文字的问题
   - 修复 Claude 图片格式不兼容问题
   - 修复 Insert Below 兼容性问题
   - 修复 / 切换模型后 右上角模型不刷新的问题
