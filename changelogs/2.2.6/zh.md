# Enconvo 2.2.6 更新日志 (2025-07-18) 🚀

## Knowledge Base

- [x] 优化知识库的 UI/UX，让用户可以更方便的创建、编辑、删除知识库
- [x] 支持导入带字幕的Youtube视频
- [x] 支持导入图片，基于OCR识别图片中的文字
- [x] 支持导入音频文件，基于Speech-to-Text识别音频中的文字
- [x] 支持导入视频文件，基于Speech-to-Text识别视频中的文字
- [x] 支持导入Single Web Page，基于Jina或者Firecrawl抓取网页内容
- [x] 支持导入Whole Website，基于Firecrawl抓取整个网站内容
- [x] 支持直接添加文本到知识库


## New AI Models

- [x]  添加 Grok 4支持，包括Enconvo Cloud Plan 和 使用自己的Key 
- [x]  添加 Kimi K2支持，包括Enconvo Cloud Plan 和 使用自己的Key(moonshot) 

## TTS

- [x] 支持预览TTS Voice 的声音


## New Features

- [x] `Link Reader Provider` 添加Firecrawl
- [x] 添加 `Website Crawl provider` 支持
- [x] 添加 `Translator (Interactive)` 


## Optimized Features

- [x] 优化 Summarize Url / Chat with Url 的继续对话的逻辑
- [x] 优化youtube视频下载、字幕下载逻辑，更稳定 
- [x] 优化 `Chat with Youtube` 逻辑、优化 `Summarize youtube` prompt
- [x] elevenlabs V3 （v3的api还没有开放，获取models列表已经替换成动态获取了）

## Bug Fixes

- [x] 粘帖、复制 适配 Ukrainian 语言，fallback使用模拟键盘 实现 复制、粘帖
- [x] 下载的视频播放问题， 默认下载质量是best
