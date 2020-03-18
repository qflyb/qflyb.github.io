![](https://pic3.zhimg.com/80/v2-afa5e965b0c7ffd475cf599c5aa7f5c3_hd.jpg)

# Git命令

创建
```
git init
```

- 项目级别/仓库级别：仅在当前本地库范围内有效
   - git config
   - git config user.name XXX
   - git config user.email XXX
- 系统用户级别：登录当前操作系统的用户范围
   - git config --global
   - git config --global user.name XXX
   - git config --global user.email XXX
- 级别优先级
   - 就近原则：项目级别优先于系统用户级别，二者都有时采用项目级别的签名
   - 如果只有系统用户级别的签名，就以系统用户级别的签名为准
   - 二者都没有不允许
   

`git status`状态查看

`git add [file name]`添加操作

`git commit -m "" [file name]`提交操作

`git log`版本的历史记录

`git log --pretty=oneline`日志只显示一行

`git log --oneline`

`git reflog`

HEAD -> 指向版本的指针

## 版本回退

基于索引值操作

`git reset --hard` [局部索引值]

`git reflog`查看每一步操作记录

使用^符号：只能后退

## 分支

查看分支：`git branch`

创建分支：`git branch `

切换分支：`git checkout `或者`git switch `

创建+切换分支：`git checkout -b `或者`git switch -c `

合并某分支到当前分支：`git merge `

删除分支：`git branch -d `



## tag 标签

创建标签

- 命令`git tag `用于新建一个标签，默认为`HEAD`，也可以指定一个commit id；
- 命令`git tag -a  -m "blablabla..."`可以指定标签信息；
- 命令`git tag`可以查看所有标签。

推送标签

- 命令`git push origin `可以推送一个本地标签；
- 命令`git push origin --tags`可以推送全部未推送过的本地标签；
- 命令`git tag -d `可以删除一个本地标签；
- 命令`git push origin :refs/tags/`可以删除一个远程标签。

# Github

##  创建远程库地址别名 

```shell
 git remote -v 查看当前所有远程地址别名

 git remote add [别名] [远程地址] 

 git push [别名] [分支名]  推送

 git clone[远程地址] 
```

