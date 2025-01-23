# EnConvo 2.0.4 Changelog (2025-01-24) 🚀


## Agent Features 🤖

- Jarvis: Jarvis can now automatically complete tasks using tools based on your needs. Default available tools include:

  - Code Execution:
    - AppleScript: Execute AppleScript automation tasks
    - Shell: Run Shell commands and scripts  
    - Python: Execute Python code and scripts
    - NodeJS: Run NodeJS code
  - Image Generation: AI-assisted image creation
  - Apple Calendar: Manage and create calendar events
  - Apple Reminders: Set up and manage reminders
  - Image Compression: Optimize image size and quality
  - HTTP Requests: Send various network requests
  - Text-to-Speech: Convert text to speech
  - TTS: Text-to-speech conversion
  - Audio/Video Transcription: Convert audio and video to text
  - Video Compression: Optimize video file size
  - Web Search: Search internet information
  - Link Reader: Quick reading and summarizing webpage content
  - YouTube Loader: Download and process YouTube video content
  - File System Operations: File and directory management

- Added "Create New Agent" feature to create new agents, specify prompts, and configure tools
- Agent functionality requires models that support Tool Use, Claude 3.5 Sonnet model recommended


## MCP (Model Context Protocol) Support 🔌

- EnConvo as MCP Client supports installation and use of any MCP Server, with direct server calls in Agents and Workflows
- MCP Settings page features:
  - Real-time server status monitoring
  - Server configuration modification (changes apply automatically)


## DeepSeek r1 Model Support 🧠

- Added support for DeepSeek r1 model
- Added Thinking interaction mode to display model thought process in real-time


## New Video Utils Plugin 🎥

- *Video Compress*: Added video file compression functionality
- *Extract Audio*: Added audio extraction from video


## New Audio Utils Plugin 🎵

- *Audio Compress*: Added audio file compression functionality


## New Transcription Plugin 📝

- *Transcribe Audio/Video Files*: Added transcription support for audio/video files


## Code Runner Plugin Enhancements 💻

- *Python Code Runner*: Added Python Code Runner support
- *NodeJS Code Runner*: Added NodeJS Code Runner support
- *Shell Script Executor*: Added Shell Script Executor support
- *AppleScript Executor*: Added AppleScript Executor support


## Conch TTS Support 🐚

- Added support for Conch TTS


## Google LLM Provider Updates 🔄

- Updated to latest gemini-2.0-flash-thinking-exp-01-21
- Native support for audio message types


## Optimizations ⚡

- Improved TTS performance
- Optimized Python environment initialization
- Added parameter display in Workflows
- Other general improvements
