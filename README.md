# Daisy Fang — Personal Website

## 文件结构

```
Personal_Website/
├── index.html            首页
├── projects/
│   └── imppets.html      ImpPets 案例页（其他项目页之后照这个模板做）
├── css/style.css         所有样式。改颜色、字体看最上面的 :root
├── js/main.js            动效：M1 标题上滑、M2 淡入、M3 线条生长、M4 图片跟随
└── assets/
    ├── img/              所有图片
    └── Daisy_Fang_CV.pdf ← 把你的 CV 放在这里，用这个文件名
```

## 怎么预览

双击 `index.html`，它会在浏览器里打开。改完文件保存后，刷新浏览器就能看到变化。

## 常见修改

- **改文字**：用编辑器（推荐 VS Code）打开 `index.html`，直接改 `<h1>`、`<p>` 里的英文。
- **改颜色**：打开 `css/style.css`，改 `--accent` 等变量。
- **换图片**：把新图放进 `assets/img/`，再把 HTML 里 `src="..."` 改成新文件名。

## 还需要你补的

- [ ] `assets/Daisy_Fang_CV.pdf`：你的 CV
- [ ] `index.html` 里的 LinkedIn 链接：把 `https://www.linkedin.com/` 换成你自己的主页
