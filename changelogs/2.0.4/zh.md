# EnConvo 2.0.4 更新日志 (2025-01-24)

1. Agent 功能:

   - Jarvis : Jarvis 现在可以使用工具根据你的需求自动完成任务， 默认可以使用的工具：

     - 代码执行：
       - AppleScript：执行 AppleScript 自动化任务
       - Shell：执行 Shell 命令和脚本
       - Python：运行 Python 代码和脚本
       - NodeJS：执行 NodeJS 代码
     - 图像生成：AI 辅助图像创建
     - Apple 日历：管理和创建日历事件
     - Apple 提醒事项：设置和管理提醒
     - 图像压缩：优化图像大小和质量
     - HTTP 请求：发送各类网络请求
     - 文本朗读：将文本转换为语音
     - TTS：文本到语音转换
     - 音视频转写：将音频和视频转换为文本
     - 视频压缩：优化视频文件大小
     - 网络搜索：搜索互联网信息
     - 链接阅读器：快速阅读和总结网页内容
     - YouTube 加载器：下载和处理 YouTube 视频内容
     - 文件系统操作：文件和目录的管理与操作

   - 添加 `Create New Agent` 功能， 可以创建新的 Agent ，为 Agent 指定 Prompt，设置工具
   - Agent功能需要模型支持Tool Use，推荐 Claude 3.5 Sonnet 模型

2. MCP(Model Context Protocol) 支持:

   - Enconvo 作为 MCP Client，支持安装和使用任意 MCP Server，可在 Agent 和 Workflow 中直接调用已安装的 Server
   - MCP 设置页面功能：
     - 实时查看 Server 运行状态
     - 修改 Server 配置（修改后自动自动生效）

3. DeepSeek r1 模型支持:

   - 添加对 DeepSeek r1 模型的支持
   - 添加 Thinking 交互模式，实时显示模型思考过程

4. 新的 Video Utils 插件：
   - 添加对视频文件的压缩功能（Video Compress）
   - 从视频中提取音频(Extract Audio)

5. 新的 Audio Utils 插件：
   - 添加对音频文件的压缩功能

6. 新的 Transcription 插件：
   - 添加对音频/视频文件的转写功能

7. Code Runner 插件优化：
   - 添加 Python Code Runner 支持
   - 添加 NodeJS Code Runner 支持
   - 添加 Shell Script Executor 支持
   - 添加 AppleScript Executor 支持

8. 海螺TTS 支持：
   - 添加对海螺TTS 的支持

9. Google LLM Provider:
   - 更新最新 gemini-2.0-flash-thinking-exp-01-21
   - 原生支持 发送音频 类型消息

10. 优化：
   - 优化 TTS 效果
   - 初始化 Python环境优化
   - 在 Workflow 中添加参数展示
   - 其他优化


