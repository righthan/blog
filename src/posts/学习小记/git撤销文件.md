---
title: git撤销提交的文件
category:
  - 学习小记
tag:
  - Git

contributors: false
editLink: false
comment: false
---

# Git撤销提交的文件

在提交代码到仓库后, 发现把一个不需要的文件也提交了，所以需要将这个文件从仓库中删除, 然后修改 `.gitingore`文件，在使用 `git add`等命令时排除文件

具体的做法如下：

修改 `.gitignore` 文件排除某些文件后，如果文件已经被提交到了 Git 仓库中，可以执行以下步骤来确保这些文件从 Git 仓库中被移除：

1. **从 Git 仓库中移除文件：** 从 Git 仓库中移除不应该被跟踪的文件。

   ```bash
   git rm --cached path/to/ignored_file
   ```

   这个命令会将指定的文件从 Git 仓库中移除，但会保留在工作目录中。

2. **提交更改：** 提交这些更改到 Git 仓库：

   ```bash
   git commit -m "Remove ignored files"
   ```

3. **推送更改到远程仓库：** 将这些更改推送到远程仓库：

   ```bash
   git push origin your-branch
   ```



