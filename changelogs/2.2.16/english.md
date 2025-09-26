# Enconvo 2.2.16 Changelog (2025-09-26) 🚀

## New Features

- Added Finder right click menu: Add to Enconvo

## SmartBar

- Can configure **Knowledge base used by Bot** on SmartBar.
- Support directly enable **"Create Video"** on the smart bar

## Video Generation Provider Added

- Added `Kling Video v2.5 Turbo Pro` video generation model.
- Added `Wan 2.5 Preview` video generation model.(High demand, long waiting times)

## Apple Shortcuts

- Added `Apple Shortcuts` support , you can use `Apple Shortcuts` in Workflow , Agent , PopBar , SmartBar , etc.


## Workflow

- Optimized the logic of deleting edges and nodes in workflow.
- Added the ability to reconnect edges in workflow.
- Fixed workflow drag variable is undefined

## Chat with File

- Optimized file chat (chat mode can directly chat with files).
- Added `read document type file` tool to agent model, which can read pdf, epub,audio ,video , word , ppt documents.

## New AI Model Provider

- Added `Qwen AI Model Provider` with API Key.

## Improvements

- Safety concern for shell runner (alert before execute sensitive commands(rm , mv))
- Optimized Tool Use UI/UX on SmartBar.
- Support azure (Microsoft speech) as a provider for live closed captions

## Bug Fixes

- Optimized token acquisition for Live Closed Captions, enhancing stability.
- Fixed screen shot translate bug
- Fixed ollama embedding model not showing up bug
- Fixed crash problem from @**Tye Weldon**
- Optimized message structure (solve the problem of tool use in claude thinking mode)
