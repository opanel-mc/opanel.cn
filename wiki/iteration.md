# OPanel 项目迭代流程

本文档描述本项目在GitHub上的标准迭代流程。

## 总览

1. 在[Issues](https://github.com/opanel-mc/opanel/issues)中整理需求和bug；在[Projects](https://github.com/opanel-mc/opanel/projects?query=is%3Aopen)中维护待办清单。
2. 使用[Milestone](https://github.com/opanel-mc/opanel/milestones)规划版本范围，将相关Issue和PR归档到对应的里程碑。
3. 以功能或bug修复为单位创建独立分支或直接使用fork，提交代码并发起Pull Request（PR）。
4. 代码评审、CI/CD通过后合并到主仓库`main`分支。

## 分支与fork

- 主分支：`main`分支作为稳定发布分支，保持可发布状态。
- 开发分支：以功能/修复为单位创建短生命周期的分支，分支名称遵循：`feature/...`或`fix/...`。
- 提交信息遵循[Conventional Commits](https://conventionalcommits.org/zh-hans/v1.0.0/)规范。

## Pull Request 流程

1. 以最新的`main`分支为基底创建新分支或fork，然后提交代码。
2. 创建PR，通过`close`关键字链接该PR能解决的issue，并简要说明该PR的内容和改动。
3. 将PR添加到对应的Milestone和Projects，并在Projects中将该PR置为`In Progress`。
4. 等待CI/CD成功通过。
5. 由项目负责人review后即可合并到`main`分支。（项目组负责人的PR除外）

:::warning 注意

若涉及重大改动（Breaking Change），无论项目组负责人还是其他成员，都应有一个以上的review通过后方可合并。

:::
