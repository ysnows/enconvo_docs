# Enconvo 2.2.4 更新日志 (2025-06-21) 🚀

## PopBar (Big Update)

- [x] **Application-Awareness**: PopBar 可以感知当前的应用，从而展示不同的工具栏, 让 PopBar 展示的工具更适合当前应用的场景，提升效率
- [x] 内置 `Writing Tools` PopBar Instance，当在写作类 Apps（Notes.app , Notions.app , Obsibian.app , etc.）出现的时候，会出现针对写作相关的工具栏
- [x] 可以设置在工具返回结果后是否自动 Replace 当前的文字
- [x] 优化 PopBar 出现的时机，避免不必要的出现
- [x] 优化 PopBar 出现的位置，让 PopBar 出现在更合适的位置，提升用户体验
- [x] 添加 `Open Link` 工具，当检测到当前选中的文字包含link的时候，会显示 `Open Link` 工具，点击后会在默认浏览器打开文字包含的链接
- [x] 添加 `Search Google` 工具，对当前选中的文字进行 Google 搜索
- [x] 添加 `PopBar disable in this application` 功能，可以快速设置禁用 PopBar 在当前应用中的使用
- [x] 添加 `Duplicate of PopBar Instance` 功能，可以快速复制当前的 PopBar Instance
- [x] 添加 `Modifier flags action` 功能，可以设置在点击 PopBar 的时候，按住 option / shift / command modifier，从而可以实现可以自动复制结果到剪贴板或者替换选中文本为工具的执行结果

## New Commands

- [x] writing tools 添加更多写作类工具 : `proofread`, `rewrite`, `changeToneToProfessional`, `makeConcise`, `extractKeyPoints`, `convertToList`, `convertToTable`
- [x] 添加 `AI Editor` 命令，可以对当前的文字按照用户指令进行编辑，类似 Cursor.app 中的 `Quick Edit` 功能，但可以在任何应用中使用

## New Extension (Fal.ai)

- [x] 添加 generate video with Veo3
- [x] Fal.ai text-to-video with Minimax Hailuo02 Standard
- [x] Fal.ai text-to-video with Minimax Hailuo02 Pro
- [x] Fal.ai generate video with Bytedance Seedance 1.0 Lite

## Optimized Features

- [x] 设置里添加 custom bots 管理,可以集中管理用户创建的Bot
- [x] 调整 Mini SmartBar 展开时间，提升用户体验
- [x] 菜单栏加上 `PopBar` 开关
- [x] 菜单栏加上 `MiniSmartBar` 开关
- [x] 设置页面添加 `delete command` 和 `reset configuration` 功能
- [x] 优化搜索Command的UI/UX，让用户可以更方便的搜索和添加Command

## Enconvo Cloud Plan 添加新模型

- [x] claude sonnet 4
- [x] opus 4
- [x] o3
- [x] o3 mini
- [x] o4-mini
- [x] Gemini 2.5 pro
- [x] Gemini2.5 flash
- [x] Gemini2.5 flash lite preview

## Workflow

- [x] add `Generate Video with veo3` workflow template
- [x] add `Text to Audio` workflow template


