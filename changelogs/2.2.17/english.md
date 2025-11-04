# Enconvo 2.2.17 Changelog (2025-11-04) 🚀

## Context Optimization

- Support obtaining the content of application windows as context.
- Improved interaction settings.
- Support selecting available contexts with the `#` character when inputting text.
- You can use `@` to specify which tool to use when you input text.

## Global Sidebar Panel

- A new always-on-top sidebar panel opens on the right side.
- The SideBar supports invoking features with `@`, `#`, and `>`.
- Default shortcut: `Shift + Command + U`.

## Application Sidebar Panel

- Launches an always-on-top sidebar panel on the right within the current application.
- Automatically switches to the Bot dedicated to the current Application (such as Finder) for context-specific actions.
- SideBar supports invoking features with `@`, `#`, and `>`.
- Default shortcut: `Shift + Command + T`.

## Multitasking

- Multiple tasks can now run simultaneously in the background.
- Create a new session with `Command + N`.
- Switch between different tasks by inputting `>`.

## Voice Command

- Run a voice command to trigger voice input. When you run it again, the set command will be executed in the specified panel.
- You can specify Window Mode to choose whether the command runs in the Smart Bar or Side Bar.
- Set a Default Command to decide which Bot should handle your input after voice transcription.
- Default shortcut: `Shift + Command + A`.

## My Profile Settings

- You can set your personal description as context to provide to the AI Model.
- You can set a global reply language.
- Location: Settings > Account > My Profile.

## Variables (Dynamic Parameters)

- When editing prompts, you can specify dynamic Variables.
- Supported Variables are viewable under Settings > Extensions > Variables.
- While editing a prompt, activate the Variables list by typing `{{ ` (double curly brace + space).

## Custom Bot Creation Optimization

- Improved workflow for creating Custom Bots.
- Support for `Duplicate Command`: Create a new command based on an existing one.
- Set reply language independently.
- Option to use `My Profile` or not.

## Application Support

- Search all installed applications from the SmartBar and press Enter to open.
- Every application is an Agent. Use `@` to begin a conversation with an application.

## Screenshot Explain

- Support for taking a screenshot first, then running Explain on it.

## PopBar Popup Issue (@**@mhs.us**)

- Fixes and optimizations for PopBar popup behavior.
