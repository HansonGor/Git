# Git一. Git：origin代表远程仓库路径
0. git status 查看命令行操作的状况

1. git 创建并转到该分支分支
第一种方法：1.git checkout -b  需要创建的分支名
第二种方法：2. git branch + 需要创建的分支名; git checkout + 转换到该分支

2. 修改 commit 的注释
git commit --amend -m "新的提交信息"

3. .gitignore使用
① **/foo: 忽略/foo, a/foo, a/b/foo等

5. 首次在github创建仓库后的操作
git init .
git add .
git commit -m "提交的信息"
git remote add origin  <远程仓库的URL地址>
git pull --rebase origin master // 拉去首次文件
git push -u origin master

6. 首次在当前分支拉去其他分支代码
   1.  git fetch origin 拉去的分支名
   2.  git merge origin/拉去的分支名

6. git diff 查看分支与分支之间的版本差异