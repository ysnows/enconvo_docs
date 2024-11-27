
<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EnConvo 更新日志</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
            padding: 0;
        }
        h1 {
            font-size: 2em;
            margin-bottom: 10px;
        }
        h2 {
            font-size: 1.5em;
            margin-top: 20px;
        }
        h3 {
            font-size: 1.2em;
            margin: 15px 0 5px;
        }
        ul {
            margin: 10px 0;
            padding-left: 20px;
        }
        blockquote {
            margin: 0;
            padding-left: 10px;
            border-left: 2px solid #ddd;
        }
    </style>
</head>
<body>

    <h1>EnConvo 更新日志</h1>

    <h2>1. Workflow</h2>
    <p>全新的Workflow功能，可以将EnConvo中所有的插件组合起来，自由定制成更强大的功能插件。</p>
    <ul>
        <li>预置workflow: Anime Image Generation</li>
    </ul>

    <h2>2. 上下文感知系统</h2>
    <p>感知当前选中的文本、当前浏览器的tab、 Finder选中的文件</p>

    <h2>3. All New Knowledge Base</h2>
    <p>重写知识库功能，更稳定和快速，这是一个break changes，以前创建的知识库将作废</p>
    <ul>
        <li>Knowledge Base支持和 Bot绑定</li>
        <li>添加 预置 EnConvo Help Assistant，提供EnConvo常见问题和使用向导</li>
    </ul>

    <h2>4. Voice Input Method</h2>
    <ul>
        <li>自动换行功能</li>
        <li>适配Alfred、Raycast应用</li>
        <li>集成AssemblyAI 语音识别服务</li>
        <li>添加语音识别语言快速切换的设置</li>
    </ul>

    <h2>5. Voice Input Method Push</h2>
    <ul>
        <li>支持长按快捷键调起语音输入，松开之后自动识别并输入，默认快捷键：长按 FN(function).</li>
        <li>Push模式下，提高 Groq Whisper和Local Whisper识别的速度</li>
    </ul>

    <h2>6. Live Closed Captions</h2>
    <ul>
        <li>系统级的全局自动语音识别生成字幕</li>
        <li>支持 simultaneous interpretation ，同步翻译字幕为你熟悉的语言</li>
    </ul>

    <h2>7. PopBar</h2>
    <ul>
        <li>样式优化，添加毛玻璃效果，更灵动</li>
        <li>添加Exclude Apps功能，可以指定在某个App中不启动PopBar</li>
        <li>PopBar在Yomu软件中有时候不能出现的问题</li>
        <li>PopBar添加CommandUI交互优化</li>
    </ul>

    <h2>8. SmartBar</h2>
    <ul>
        <li>集成AI Search功能到SmarBar</li>
        <li>添加Suggestions功能区域，可以根据上下文以及选中的Command自动推荐对应的命令或者Prompts.</li>
        <li>SmartBar中的输入框重写，支持超大量文本输入</li>
        <li>Placeholder隐藏逻辑</li>
        <li>非英文输入法下输入英文问题</li>
    </ul>

    <h2>9. 动态参数</h2>
    <ul>
        <li>Prompt支持动态参数： selection_text 、 current_browser_tab 、 date 、time等</li>
    </ul>

    <h2>10. Image Generate 插件</h2>
    <ul>
        <li>添加Flux、StableDiffusion图片生成插件</li>
        <li>添加Together AI提供的图片生成服务</li>
        <li>添加图片生成服务的EnConvo Cloud Plan支持</li>
    </ul>

    <h2>11. 快捷键</h2>
    <ul>
        <li>添加双击快捷键支持</li>
        <li>添加显示所有已设置的快捷键列表，统一管理快捷键</li>
        <li>删除快捷键不生效的BUG</li>
    </ul>

    <h2>12. 翻译插件优化</h2>
    <ul>
        <li>添加DeepL翻译插件 ,可以设置自己的DeppL Key</li>
        <li>添加单独的LLM Translator 插件</li>
        <li>添加EnConvo Cloud Plan(DeepL) 翻译服</li>
    </ul>

    <h2>13. 新的插件</h2>
    <ul>
        <li><em>Search News:</em> 专门为搜索新闻而生的搜索插件</li>
        <li><em>Search Github:</em> 专门搜索github.com代码仓库</li>
        <li><em>OCR:</em> 可以直接识别图片中的文字</li>
        <li><em>Add Files From Finder:</em> 从Finder中快速添加文件作为上下文</li>
        <li><em>Input Text Field:</em> 接收用户的输入文本，可以在<em>Workflow</em>中使用</li>
        <li><em>Voice Input Method Push:</em> 支持长按调起松开识别并输入的语音输入功能</li>
        <li><em>Live Closed Captions:</em> 实时字幕&实时翻译功能</li>
        <li><em>EnConvo Help Assistant:</em> EnConvo客服</li>
        <li><em>Anime Image Generation:</em> 预置的<em>Workflow</em>插件，可以实现生成Anime风格的图片，并进行压缩</li>
        <li><em>Http Request(Beta):</em> 可以发起网络请求，可以在<em>Workflow</em>中使用</li>
        <li><em>FLUX.1-dev：</em> 图片生成 powered by Flux.1-dev</li>
        <li><em>FLUX.1-schnell:</em> 图片生成 powered by Flux.1-schnell</li>
        <li><em>Stable Diffusion 3 Large:</em> 图片生成 powered by Stable Diffusion 3 Large</li>
        <li><em>Stable Diffusion 3 Medium:</em> 图片生成 powered by Stable Diffusion 3 Medium</li>
    </ul>

    <h2>14. 其他优化和Bug修复</h2>
    <ul>
        <li>插件models列表添加接口请求获取模型: togerther.ai , Cloudflare AI</li>
        <li>性能优化</li>
        <li>设置页面功能分区调整</li>
    </ul>

</body>
</html>
