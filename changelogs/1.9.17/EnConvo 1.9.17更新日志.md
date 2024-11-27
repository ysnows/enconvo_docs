
**1. Workflow** ： 全新的Workflow功能，可以将EnConvo中所有的插件组合起来，自由定制成更强大的功能插件。
> 1. 预置workflow: Anime Image Generation

**2. 上下文感知系统**:  感知当前选中的文本、当前浏览器的tab、 Finder选中的文件

**3. All New Knowledge Base**:  重写知识库功能，更稳定和快速，这是一个break changes，以前创建的知识库将作废
> 1. Knowledge Base支持和 Bot绑定
> 2. 添加 预置 EnConvo Help Assistant，提供EnConvo常见问题和使用向导

**4. Voice Input Method**
> 1. 自动换行功能
> 2. 适配Alfred、Raycast应用
> 3. 集成AssemblyAI 语音识别服务
> 4. 添加语音识别语言快速切换的设置

**5. Voice Input Method Push**
> 1. 支持长按快捷键调起语音输入，松开之后自动识别并输入，默认快捷键：长按 FN(function).
> 2. Push模式下，提高 Groq Whisper和Local Whisper识别的速度

**6. Live Closed Captions**
> 1. 系统级的全局自动语音识别生成字幕
> 2. 支持 simultaneous interpretation ，同步翻译字幕为你熟悉的语言

**7. PopBar**： 
> 1. 样式优化，添加毛玻璃效果，更灵动
> 2. 添加Exclude Apps功能，可以指定在某个App中不启动PopBar
> 3. PopBar在Yomu软件中有时候不能出现的问题
> 4. PopBar添加CommandUI交互优化
		
**8. SmartBar**:
> 1. 集成AI Search功能到SmarBar
> 2. 添加Suggestions功能区域，可以根据上下文以及选中的Command自动推荐对应的命令或者Prompts.
> 3.  SmartBar中的输入框重写，支持超大量文本输入
> 4. Placeholder隐藏逻辑
> 5. 非英文输入法下输入英文问题

**9. 动态参数**：
> 1. Prompt支持动态参数： selection_text 、 current_browser_tab 、 date 、time等


**10. Image Generate 插件** ：
> 1. 添加Flux、StableDiffusion图片生成插件
> 2. 添加Together AI提供的图片生成服务
> 3. 添加图片生成服务的EnConvo Cloud Plan支持

**11. 快捷键** 

> 1. 添加双击快捷键支持
> 2. 添加显示所有已设置的快捷键列表，统一管理快捷键 
> 3. 删除快捷键不生效的BUG

**12. 翻译插件优化**
> 1. 添加DeepL翻译插件 ,可以设置自己的DeppL Key
> 2. 添加单独的LLM Translator 插件
> 3. 添加EnConvo Cloud Plan(DeepL) 翻译服


**13. 新的插件**
> 1. *Search News:* 专门为搜索新闻而生的搜索插件
> 2. *Search Github:* 专门搜索github.com代码仓库
> 3. *OCR:* 可以直接识别图片中的文字
> 4. *Add Files From Finder:* 从Finder中快速添加文件作为上下文
> 5. *Input Text Field:* 接收用户的输入文本，可以在*Workflow*中使用
> 6. *Voice Input Method Push*: 支持长按调起松开识别并输入的语音输入功能
> 7. *Live Closed Captions:* 实时字幕&实时翻译功能
> 8. *EnConvo Help Assistant:* EnConvo客服
> 9. *Anime Image Generation:* 预置的*Workflow*插件，可以实现生成Anime风格的图片，并进行压缩
> 10. *Http Request(Beta):* 可以发起网络请求，可以在*Workflow*中使用
> 11. *FLUX.1-dev：* 图片生成 powered by Flux.1-dev
> 12. *FLUX.1-schnell:* 图片生成 powered by Flux.1-schnell
> 13. *Stable Diffusion 3 Large:* 图片生成 powered by Stable Diffusion 3 Large
> 14. *Stable Diffusion 3 Medium:* 图片生成 powered by Stable Diffusion 3 Medium


**14. 其他优化和Bug修复**

> 1. 插件models列表添加接口请求获取模型: togerther.ai , Cloudflare AI 
> 2. 性能优化
> 3. 设置页面功能分区调整

