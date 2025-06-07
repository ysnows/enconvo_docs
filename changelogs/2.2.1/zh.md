# Enconvo 2.2.1 更新日志 (2025-06-07) 🚀

# Warning: 由于需要启用全新的 Credentials 管理，导致之前设定的配置需要重新设置，之前创建的Command会丢失，所有请保存好正在使用的Prompt、apiKey后再进行升级。

## Workflow - 让你使用 build-in tools 以及 众多的 MCP Servers 来构建你的 AI automation workflow

- 全新的**可视化工作流 编辑器**，更清晰，更直观更快速的构建你的 workflow
- 内置 200+ tools, **原生支持可以在 workflow 中使用 MCP Servers**,让 workflow 的可扩展性变得 endless
- 智能变量 支持 ，可以通过 AI 来自动根据 workflow 的 context 来生成 tools 的参数
- 添加 **Workflow Templates Store**，用户可以快速安装 template，内置默认的 templates
- Workflow 中的参数设定支持 **jinja2** 模版语法，让 workflow 的参数设定更加灵活

## 全新的 Credentials 管理

- 优化 Credentials 管理逻辑，让 Credentials 的管理更加方便，可以快速的添加、删除
- 支持 **OAuth 2.0** 认证
- 添加更多的 Provider Credentials 管理

## 新的插件

- 添加 **Gmail** 插件，支持 OAuth2 授权登录，支持 发送邮件，读取邮件 等工具。
- 添加 **Firecrawl** 插件（包含 Enconvo Cloud 支持），支持 爬取网页，爬取网站 等工具。
- 添加 **Gemini TTS** , **Gemini TTS Multi Speacker** 插件,(包含 Enconvo Cloud 支持)，支持 多人对话 TTS 生成。

## MCP 功能优化

- MCP 现在可以**单独设置**是否开启其中的某个工具
- MCP 现在是绑定到 Agent，不再是全局应用与所有 Agent
- MCP management 添加、删除的 UI/UX 优化

## Context Awareness 功能优化

- 支持更多的 Context 感知，比如当前屏幕截图、当前应用截图、剪贴板文本等
- 用户可以设置自由设置每个 Command 可感知的 context

## 功能优化

- Fix Spelling&Grammar 支持 修改的**文字高亮对比**功能
- 稳定、性能优化
- 设置页面 UI/UX 优化
- Chat Window 创建新会话的 UI/UX 优化
- Mini smartbar 1s 没有操作之后自动缩小隐藏
- minismartbar 自动贴边
- `Create New Bot` UI/UX 优化
