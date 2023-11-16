# Git Technical Interview Guide

## Short Questions

1. **Question:** What does VCS stand for, and how does Git serve as a VCS?

   **Answer:** Version Control System (VCS) tracks changes in a project over time. Git does this by creating a snapshot of the project at each commit, allowing users to navigate and revert to specific versions.

2. **Question:** Explain the difference between Git and GitHub.

   **Answer:** Git is a version control system, while GitHub is a web-based platform that hosts Git repositories. GitHub provides additional collaboration features like issue tracking, pull requests, and more.

3. **Question:** What is the purpose of a Git repository?

   **Answer:** A Git repository is a storage location that holds the history, branches, and snapshots of a project. It allows collaborative development and version control.

4. **Question:** How do you create a new branch in Git?

   **Answer:** Use the command: `git checkout -b branch-name`

5. **Question:** What is a merge conflict, and how can it be resolved in Git?

   **Answer:** A merge conflict occurs when Git cannot automatically merge changes. It is resolved by manually editing the conflicting files, marking them as resolved, and committing the changes.

6. **Question:** How can you undo the last Git commit?

   **Answer:** Use the command: `git reset HEAD~1`

7. **Question:** Explain the purpose of `.gitignore` file.

   **Answer:** It specifies intentionally untracked files that Git should ignore. This is useful for excluding files like build artifacts and logs from version control.

8. **Question:** What is the command to view the commit history in Git?

   **Answer:** Use the command: `git log`

### Multiple Choice Questions (MCQs)

1. **Question:** What does `git pull` do?

   - [ ] A. Pushes changes to the remote repository.
   - [x] B. Fetches changes from the remote repository and merges them into the local branch.
   - [ ] C. Deletes the local repository.

2. **Question:** Which command is used to discard changes in a specific file?

    - [ ] A. `git reset`
    - [ ] B. `git commit`
    - [x] C. `git checkout -- file-name`

3. **Question:** What does the command `git remote -v` display?

    - [ ] A. Current branch name.
    - [ ] B. List of local branches.
    - [x] C. URLs of the remote repositories.

4. **Question:** What is the purpose of the command `git clone`?

    - [ ] A. Create a new branch.
    - [x] B. Copy a repository from a remote source to the local machine.
    - [ ] C. Merge two branches.

5. **Question:** How do you rename a remote in Git?

    - [ ] A. `git rename-remote`
    - [x] B. `git remote rename`
    - [ ] C. `git move-remote`

6. **Question:** What does the acronym "HEAD" represent in Git?

    - [ ] A. Repository directory.
    - [x] B. Pointer to the latest commit in the current branch.
    - [ ] C. Name of a branch.

7. **Question:** How can you view the changes between two commits?

    - [ ] A. `git show commit1 commit2`
    - [ ] B. `git diff commit1 commit2`
    - [x] C. `git log commit1..commit2`

8. **Question:** What is the purpose of the command `git stash`?

    - [ ] A. Discard changes in the working directory.
    - [x] B. Temporarily save changes that are not ready to be committed.
    - [ ] C. Create a new branch.
9. **Question:** Which option is used to force-push changes in Git?

    - [ ] A. `git push -f`
    - [ ] B. `git push --force`
    - [x] C. Both A and B.

10. **Question:** How do you delete a remote branch?

    - [x] A. `git push origin --delete branch-name`
    - [ ] B. `git delete-branch branch-name`
    - [ ] C. `git remove-remote-branch branch-name`

11. **Question:** What does the command `git tag` do?

    - [ ] A. Create a new branch.
    - [x] B. Add a lightweight reference to a specific commit.
    - [ ] C. Delete a tag.

12. **Question:** How can you amend the last commit message?

    - [ ] A. `git commit --amend-message`
    - [ ] B. `git commit --edit`
    - [x] C. `git commit --amend`
