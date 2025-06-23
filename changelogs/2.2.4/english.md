# Enconvo 2.2.4 Changelog (2025-06-21) 🚀

## PopBar (Big Update)

- **Application-Awareness**: PopBar can now detect the current application and display different toolbars accordingly, making PopBar show tools more suitable for the current application's context, improving efficiency
- Built-in `Writing Tools` PopBar Instance that appears when in writing apps (Notes.app, Notions.app, Obsidian.app, etc.), showing writing-related tools
- Added option to automatically replace current text after tool returns result
- Optimized PopBar appearance timing to avoid unnecessary appearances
- Optimized PopBar position to appear in more appropriate locations, enhancing user experience
- Added `Open Link` tool that displays when selected text contains links, clicking opens the link in default browser
- Added `Search Google` tool to perform Google search on selected text
- Added `PopBar disable in this application` feature to quickly disable PopBar in current application
- Added `Duplicate of PopBar Instance` feature to quickly copy current PopBar Instance
- Added `Modifier flags action` feature to set actions when clicking PopBar while holding option/shift/command modifiers, enabling auto-copy results to clipboard or replace selected text with tool execution results

## New Commands

- Added more writing tools: `proofread`, `rewrite`, `changeToneToProfessional`, `makeConcise`, `extractKeyPoints`, `convertToList`, `convertToTable`
- Added `AI Editor` command to edit current text according to user instructions, similar to Cursor.app's `Quick Edit` feature but can be used in any application
- Added `OpenAI Image Generation Bot` command to generate/edit images using OpenAI's `gpt-image-1` model

## New Extension (Fal.ai)

- Added generate video with Veo3
- Fal.ai text-to-video with Minimax Hailuo02 Standard
- Fal.ai text-to-video with Minimax Hailuo02 Pro
- Fal.ai generate video with Bytedance Seedance 1.0 Lite

## Optimized Features

- Added custom bots management in settings for centralized management of user-created bots
- Adjusted Mini SmartBar expansion timing to improve user experience
- Added `PopBar` toggle in menu bar
- Added `MiniSmartBar` toggle in menu bar
- Added `delete command` and `reset configuration` features in settings page
- Optimized Command search UI/UX for easier command search and addition

## Enconvo Cloud Plan New Models

- Claude Sonnet 4
- Opus 4
- O3
- O3 Mini
- O4-Mini
- Gemini 2.5 Pro
- Gemini 2.5 Flash
- Gemini 2.5 Flash Lite Preview

## Workflow

- Added `Generate Video with Veo3` workflow template
- Added `Text to Audio` workflow template