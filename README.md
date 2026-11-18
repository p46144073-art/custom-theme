# custom-theme

A Claude Code mod that adds a `/custom-theme` command. It lists and switches between 17 color themes, most with an animated SVG background, in the Claude desktop app.

一個 Claude Code mod，新增 `/custom-theme` 指令，可以在 17 個配色主題之間切換，大部分附有動態 SVG 背景。

## Install / 安裝

At the prompt of a terminal session:

```
/plugin install custom-theme --marketplace p46144073-art/custom-theme
```

From a shell:

```
claude plugin install custom-theme --marketplace p46144073-art/custom-theme
```

In the desktop app, where `/plugin` does not run: click + next to the prompt box, then Plugins, Add marketplace with `p46144073-art/custom-theme`, then Add plugin.

在桌面版：按提示框旁的「+」，選 Plugins，Add marketplace 輸入 `p46144073-art/custom-theme`，再 Add plugin。

## Use / 使用

| Command | What it does |
|---|---|
| `/custom-theme` or `/custom-theme list` | Show the list, the current theme is marked with ● |
| `/custom-theme 12` | Switch by number |
| `/custom-theme 櫻花` | Switch by name or id |
| `/custom-theme next` | Switch to the next theme |
| `/custom-theme off` | Turn off, back to the app's own look |

Your choice is remembered for the next session. The first time, `autumn-maple` is applied.

## Themes / 主題

| id | 名稱 | Mode | Background |
|---|---|---|---|
| `starry-night` | 星夜 | dark | twinkling stars and a moon |
| `sunset-beach` | 海邊日落 | dark | sunset, waves, sun glints |
| `sakura-blossom` | 櫻花 | light | blossom branches, falling petals |
| `rainy-window-night` | 下雨的窗邊夜晚 | dark | rain, window drops, neon bokeh |
| `forest-mist` | 森林晨霧 | light | pine forest, drifting fog, light rays |
| `aurora-borealis` | 極光 | dark | swaying aurora curtains |
| `autumn-maple` | 秋天楓葉 | light | maple branches, falling leaves |
| `paper-notebook` | 紙本筆記 | light | still paper, no animation |
| `deep-sea` | 海底 | dark | light shafts, bubbles, fish, kelp |
| `desert-stars` | 沙漠星空 | dark | milky way, dunes, shooting stars |
| `snowy-cabin` | 雪夜小屋 | dark | snowfall, warm cabin window, smoke |
| `cyber-city` | 賽博城市夜景 | dark | neon signs, city lights, rain |
| `nebula` | 宇宙星雲 | dark | slowly rotating nebula |
| `coffee-afternoon` | 咖啡館午後 | light | window light, rising steam |
| `plain-minimal` | 純色極簡淺色 | light | colors only |
| `plain-minimal-dark` | 純色極簡深色 | dark | colors only |
| `beach-day` | 海浪沙灘 | light | waves washing up the sand |

## Notes / 注意

- Backgrounds are drawn by the Claude desktop and mobile apps only. The terminal and editor extensions draw no theme.
- Each theme is light or dark only, so switching changes the whole interface mode.
- 背景只有 Claude 桌面版和手機版會畫，終端機和編輯器外掛不會顯示。
- 每個主題只做淺色或深色其中一種，切換時整個介面模式會跟著變。

## Adding a theme / 新增主題

A theme is one file in `hooks/themes/`, added to the list in `hooks/themes.js`. Copy an existing file, change the colors passed to `makeColors` and the SVG in `scene`.
