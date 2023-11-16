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

9. **Question:** What is Git branching, and why is it important in collaborative development?

   **Answer:** Git branching is the practice of diverging from the main line of development to work on different features or fixes. It's important as it allows parallel development, isolation of features, and easy collaboration.

10. **Question:** How does Git handle conflicts during a merge operation?

   **Answer:** Git marks conflicting sections in the files and requires manual resolution. After resolving conflicts, changes are committed, and the merge is completed.

## Bonus Questions

1. **Question:** Explain the purpose of Git hooks.

   **Answer:** Git hooks are scripts that can be triggered at certain points in Git's execution. They are used to automate tasks like code linting, testing, and formatting.

2. **Question:** What is the difference between `git fetch` and `git pull`?

   **Answer:** `git fetch` retrieves changes from the remote repository but does not merge them, while `git pull` fetches and merges changes in one command.

3. **Question:** How can you revert a commit that has already been pushed to the remote repository?

   **Answer:** Use the command: `git revert <commit-hash>` and then push the new commit.

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

13. **Question:** What does the command `git rebase` do?

    - [ ] A. Create a new branch.
    - [x] B. Combine a sequence of commits into a new base commit.
    - [ ] C. Switch to a different branch.

14. **Question:** Which Git command is used to show the changes between the working directory and the staging area?

    - [x] A. `git diff`
    - [ ] B. `git status`
    - [ ] C. `git show`

15. **Question:** When resolving a merge conflict, what does the command `git mergetool` do?

    - [ ] A. Display a summary of conflicts.
    - [x] B. Open a visual tool to help resolve conflicts.
    - [ ] C. Automatically resolve conflicts.

16. **Question:** How can you unstage changes in Git?

    - [ ] A. `git reset --soft`
    - [ ] B. `git reset --hard`
    - [x] C. `git reset`

17. **Question:** What is the purpose of the `git cherry-pick` command?

    - [ ] A. Move the current branch to a specific commit.
    - [x] B. Apply changes from a specific commit to the current branch.
    - [ ] C. Create a new branch from a specific commit.

18. **Question:** How can you see the details of a specific commit?

    - [ ] A. `git show HEAD`
    - [x] B. `git log -1 commit-hash`
    - [ ] C. `git details commit-hash`

19. **Question:** What does the command `git bisect` help you with?

    - [ ] A. Switch between branches.
    - [x] B. Perform a binary search to find the commit that introduced a bug.
    - [ ] C. Merge two branches.

20. **Question:** How can you squash multiple commits into a single commit?

    - [ ] A. `git merge --squash`
    - [ ] B. `git commit --squash`
    - [x] C. `git rebase -i`

21. **Question:** What is the purpose of the `git remote prune` command?

    - [ ] A. Rename a remote repository.
    - [ ] B. Delete a remote branch.
    - [x] C. Remove remote tracking branches that no longer exist on the remote.

22. **Question:** How do you amend a specific commit in Git?

    - [ ] A. `git commit --amend -c <commit-hash>`
    - [x] B. `git rebase -i <commit-hash>`
    - [ ] C. `git commit --fix <commit-hash>`
