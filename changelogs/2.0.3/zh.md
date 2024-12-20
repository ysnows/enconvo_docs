# EnConvo 2.0.3 更新日志 (2024-12-20)

1. Chat Window 优化:

   - 新的 UI 样式，更加好看
   - 性能优化，减少 CPU 占用
   - 功能增强，现在可以在 Chat Window 中使用 Voice Input 、 截图 、网络搜索、Live Screen 、 Live Camera 、 上传附件 以及 Realtime Call 功能

2. Youtube 插件:

   - Chat With YouTube : 和 YouTube 视频进行 对话
   - Summarize YouTube : 对 YouTube 视频进行摘要
   - Youtube Transcript Loader : 加载 YouTube 视频的字幕，并可以保存为 SRT，TXT 文件
   - Youtube context awareness : 对 当前浏览器打开 YouTube 视频进行上下文感知，推荐对应的 Commands
   - 源代码开源： https://github.com/Enconvo/YouTube

3. Code Runner 插件:

   - 可以运行 shell、nodejs、python、applescript 代码，让你可以使用自己属性的编程语言自由扩展 Enconvo 的能力
   - 源代码开源： https://github.com/Enconvo/Code-Runner

4. Straico 集成：

   - Straico LLM Provider: 可以使用 Straico 提供的 LLM 服务驱动 enconvo 的功能
   - Straico Image Generate Provider: 可以使用 Straico 提供的图片生成服务来生成图片
   - Straico 插件：
     - Straico Chat : 和 Straico 提供的模型进行对话
     - Create Straico RAG : 创建 Straico RAG
     - Straico RAG : 和 在 Straico 平台创建的 RAG 进行对话
     - Straico Agent : 和 在 Straico 平台创建的 Agent 进行对话
   - 源代码开源： https://github.com/Enconvo/straico

5. Google Gemini 更新： 添加对`gemini-2.0-flash-exp`,`gemini-2.0-flash-thinking-exp-1219` , `gemini-exp-1206`模型的支持

6. X.AI-GROK 更新：添加支持最新的 `grok-2-vision-1212` , `grok-2-1212`

7. 添加设置选项： context message count limit，用于控制上下文消息的长度
