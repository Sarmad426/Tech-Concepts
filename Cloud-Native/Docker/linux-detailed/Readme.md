# Linux Commands

First see the basic commands [Linux](/Terminal/Linux/Readme.md)

> **Note:** Linux is case sensitive. (Uppercase, Lowercase)

**Prompt:**

- `#` in prompt represents the admin
- `/` represents the root directory

**History:**

- `history` gives the history of commands that are executed.

**Run any history command:**

- `!2` runs the command in history at index 2

## Packages

- `apt` **Advance Package Manager** is a linux package manager.
- `apt-get` is an old linux package manager.

- `apt list` lists all the packages installed & not installed.

**Installing a package:**

Lets install nano. Which is a text editor. First update the package database.

- `apt update` Updates the package database

- `apt install nano`

- `nano` opens the nano editor.

**Uninstall a package:**

- `apt remove nano`

## Linux directories

> **Note:** In linux everything is a file. (Devices, Directories, Network sockets)

- `/` Root directory
- `bin` Binaries or programs
- `boot` Files for booting
- `dev` Devices
- `etc` Editable text configuration (Config files)
- `home` Home directories & users
- `root` Home directory for root user. Only root user can access this.
- `lib` Library (Software library dependency)
- `var` Files that update frequently. (lock files, application data)
- `proc` Files that represent running devices

## Basic commands

- `pwd` Print working directory. (Current location)
- `ls` lists the files in current directory
- `ls -1` represent each file on new line
- `ls -l` gives more detials
- `cd` Change directory
- `cd ~` moves to the root directory for corresponding user

## Working with folder/files

> Refer to this guide [Linux](/Terminal/Linux/Readme.md)

- `rm file*` deletes the files starting with "file"
- `rm -r folder_name` Deletes the folder '-r' (recursively)

## Editing files

**See file content:**

- `cat file.txt` **Cat** stands for concatenate. It displays the content of the file. It can also concatenate two or more files. But it is not useful to use *cat* when the file is too big.

**To view larger file:**

- `more file.txt` adds a scrollbar to view the file. The problem is that you can only scroll down, not up. To exit press *q*

**For better file view:**

First install packages *less*

- `apt install less`

- `less file.txt` Scroll down and scroll up. (space key to go page to page)

**Top file from head section:**

- `head -n 5 file.txt` shows first 5 lines of the file

**Bottom files:**

- `tail -n 5 file.txt` shows last 5 lines of the file

## Redirection

**Add content of one file into another:**

- `cat file1.txt > file2.txt` it will read content from *file1* and write it to *file2*.

- `cat file1.txt file2.txt` prints both files content.

- `cat file1.txt file2.txt > combined.txt` Adds *file1* & *file2* content into *combined* file.

**Exercise:**

printing content of a folder into a file

```bash
ls -l /etc > files.txt
```
