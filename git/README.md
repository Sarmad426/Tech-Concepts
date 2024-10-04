# Git

Git is the free and open source distributed version control system that's responsible for everything GitHub related that happens locally on your computer. This cheat sheet features the most important and commonly used Git commands for easy reference.

## Setup

Configure your user information for all local repositories:

- **Set your name:**

```bash
git config --global user.name "[firstname lastname]"
```

- **Set your email:**

```bash
git config --global user.email "[valid-email]"
```

- **Enable color in Git:**

```bash
git config --global color.ui auto
```

## Setup & Init

Initialize and clone repositories:

- **Initialize a Git repository:**

```bash
git init
```

- **Clone a repository:**

```bash
git clone [url]
```

## Stage & Snapshot

Work with snapshots and the staging area:

- **Check the status:**

```bash
git status
```

- **Stage a file:**

```bash
git add [file]
```

- **Unstage a file:**

```bash
git reset [file]
```

- **Show changes (unstaged):**

```bash
git diff
```

- **Show changes (staged):**

```bash
git diff --staged
```

- **Commit your changes:**

```bash
git commit -m "[descriptive message]"
```

## Branch & Merge

Isolate work in branches and integrate changes:

- **List branches:**

```bash
git branch
```

- **Create a new branch:**

```bash
git branch [branch-name]
```

- **Switch to a branch:**

```bash
git checkout [branch-name]
```

- **Merge a branch:**

```bash
git merge [branch-name]
```

- **View commit history:**

```bash
git log
```

## Share & Update

Retrieve updates from another repository and update local repositories:

- **Add a remote repository:**

```bash
git remote add [alias] [url]
```

- **Fetch from a remote repository:**

```bash
git fetch [alias]
```

- **Merge a remote branch:**

```bash
git merge [alias]/[branch]
```

- **Push to a remote repository:**

```bash
git push [alias] [branch]
```

- **Pull from a remote repository:**

  ```bash
  git pull
  ```

## Tracking Path Changes

Version file removals and path changes:

- **Remove a file:**

  ```bash
  git rm [file]
  ```

- **Move or rename a file:**

  ```bash
  git mv [existing-path] [new-path]
  ```

- **View commit logs with path changes:**

  ```bash
  git log --stat -M
  ```

## Temporary Commits

Temporarily store modified, tracked files to change branches:

- **Stash changes:**

  ```bash
  git stash
  ```

- **List stashed changes:**

  ```bash
  git stash list
  ```

- **Apply stashed changes:**

  ```bash
  git stash pop
  ```

- **Discard stashed changes:**

  ```bash
  git stash drop
  ```

## Rewrite History

Rewrite branches, update commits, and clear history:

- **Rebase onto another branch:**

  ```bash
  git rebase [branch]
  ```

- **Reset to a previous commit:**

  ```bash
  git reset --hard [commit]
  ```

## Inspect & Compare

Examine logs, diffs, and object information:

- **Show commit history:**

  ```bash
  git log
  ```

- **Show commits on branchA but not on branchB:**

  ```bash
  git log branchB..branchA
  ```

- **Show commits that changed a file:**

  ```bash
  git log --follow [file]
  ```

- **Show differences between branches:**

  ```bash
  git diff branchB...branchA
  ```

- **Show any object in Git:**

  ```bash
  git show [SHA]
  ```

## Ignoring Patterns

Prevent unintentional staging or committing of files:

- **Set a global ignore file:**

  ```bash
  git config --global core.excludesfile [file]
  ```

- **Example .gitignore file:**

  ```bash
  logs/
  *.notes
  pattern*/
  ```

## Installation & GUIs

Platform-specific installers and GUIs:

- **GitHub for Windows:**  
  [https://windows.github.com](https://windows.github.com)

- **GitHub for Mac:**  
  [https://mac.github.com](https://mac.github.com)

- **Git for All Platforms:**  
  [http://git-scm.com](http://git-scm.com)
