# Enconvo 2.2.7 Changelog (2025-07-22) 🚀

## Added Speech Recognition Model `mlx parakeet-tdt-0.6b-v2`

- **Speech-to-Text Provider** - Added `mlx-community/parakeet-tdt-0.6b-v2` support, faster speed and better quality, local & privacy-focused (first use may be slower as it needs to download the model)

## New AI Model Provider

- **302.ai** - Added [302.ai](http://302.ai) LLM provider

## Optimized Features

- **App Size Optimization** - Reduced application size from 367MB to 224MB
- **Moonshot BaseURL Support** - Added support for custom BaseURL settings: [`https://api.moonshot.ai/v1`] or `https://api.moonshot.cn/v1`

## Bug Fixes

- Fixed Online Video Downloader `audio only` option, resolved convert to mp4 long processing time issue, and fixed missing mp4 suffix problem
- Fixed MCP runtime error issues
- Fixed Summarize YouTube/Link response language setting not taking effect
- Resolved [fireworks.ai](http://fireworks.ai) error issues