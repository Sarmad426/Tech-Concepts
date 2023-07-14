# Command Prompt
Built in windows CLI (command line interface) Tool.It is not case sensitive.

# Commands 

## Change the color

These are the hexadecimal colors
```
COLOR 70
```
or anything up to hexadecimal characters.
## Create a Folder

```
MKDIR folder_name
```

## Change Path

```
CD folder_name
```

### Nested path

```
CD path/folder/new_folder
```

## Create a File

```
TYPE nul> file.txt
```

## open a file

Simply type the name of the file. It will be open automatically by its configured software.
- **In this Case**

```
file.txt
```
It will be opened by notepad by default.

## List the Directories and files in current location

```
DIR
```

## Delete a file

```
DEL file.txt
```

### Or delete multiple files of same extension

```
DEL *.txt
```

## Delete a Folder 
```
RMDIR folder_name
```
**Note**:
 > This command only deletes the folder if the folder is empty.
## Copy folder or file

```
COPY folder_name 'path/new_location'
```

Similar for files.

## Cut the folder or file

```
move file_name 'path/new_location'
```
## Change the Title

```
TITLE My new Title
```
It appears on top of the command prompt window.

## Change Prompt

```
PROMPT Mr. Hacker
```
It appears on the path place.

**To change it simply type `PROMPT` again**
# To learn more simply type HELP

```
HELP
```

**Or to learn about a specific command type HELP command-name**

```
HELP dir
```

**Check the cmd help.txt file in the current location**

## To get the long script in a file 

- type double angle brackets >> after the command and name the file with extension.
 
``` 
HELP >> "cmd help.txt"
```

# Windows 11 Specific

## See the wifi ever connected to the OS

```
netsh wlan show profile
```

## To see the password of any wifi

```
netsh wlan show profile "wifi_name" key=clear
```

## Check system information

```
systeminfo
```

## Open Explorer in the current location

```
explorer .
```

## start a website

```
start https://github.com/sarmad426
```

## Curl 

Windows 11 has built in Curl.

## Check the weather inside command prompt

```
curl wttr.in/Lahore
```

Lahore is just a location.

## Check the status of a website

```
curl -Is https://github.com
```

## Check public IP for a specific domain

```
curl checkip.amazonaws.com
```
- **Note**:
> It is a sensitive information.

## Create a QR Code for any domain in command prompt
```
curl qrenco.de/https://github.com/sarmad426
```

## Define an English word

```
curl dict.org/d:Achievement
```
Achievement is just a word. Update this to get the one you desire for.