# Enconvo 2.2.1 Changelog (2025-06-07) 🚀

## Warning: Due to the need to enable the new Credentials management system, previously configured settings need to be reconfigured, and previously created Commands will be lost. Please save your currently used Prompts and API keys before upgrading.

## Workflow - Build your AI automation workflow using built-in tools and numerous MCP Servers

- Brand new **visual workflow editor**, clearer, more intuitive and faster workflow construction
- Built-in 200+ tools, **native support for using MCP Servers in workflows**, making workflow extensibility endless
- **Smart parameters support**, can automatically generate tool parameters based on workflow context through AI
- New **Workflow Templates Store**, users can quickly install templates with built-in default templates
- Workflow parameter settings support **jinja2** template syntax, making workflow parameter configuration more flexible

## Brand new Credentials Management

- Optimized Credentials management logic, making Credentials management more convenient
- Support for **OAuth 2.0** authentication
- Added more Provider Credentials management

## New Plugins

- New **Gmail** , supports OAuth2 authorization login, supports sending emails, reading emails and other tools
- New **Firecrawl**  (including Enconvo Cloud support), supports web scraping, website crawling and other tools
- New **Gemini TTS**, **Gemini TTS Multi Speaker**  (including Enconvo Cloud support), supports multi-person conversation TTS generation

## MCP Feature Improvements

- MCP can now **individually configure** whether to enable specific tools
- MCP is now bound to Agent, no longer globally applied to all Agents
- MCP management add/delete UI/UX improvements

## Context Awareness Feature Improvements

- Support for more Context awareness, such as current screen screenshots, current application screenshots, clipboard text, etc.
- Users can freely configure the context that each Command can perceive

## Feature Improvements

- Fix Spelling&Grammar supports **text highlight comparison** functionality for modifications
- Stability and performance optimizations
- Settings page UI/UX improvements
- Chat Window new session creation UI/UX improvements
- Mini smartbar automatically shrinks and hides after 1s of no operation
- Mini smartbar automatically snaps to edges
- `Create New Bot` UI/UX improvements
