# Command Prompt

Built in windows CLI (command line interface) Tool. It is not case sensitive.

## Commands

## Change the color

These are the hexadecimal colors

```cmd
COLOR 70
```

or anything up to hexadecimal characters.

## Create a Folder

``` cmd
MKDIR folder_name
```

## Change Path

``` cmd
CD folder_name
```

### Nested path

```cmd
CD path/folder/new_folder
```

## Create a File

```cmd
TYPE nul> file.txt
```

## open a file

Simply type the name of the file. It will be open automatically by its configured software.

- **In this Case**

`file.txt`

It will be opened by notepad by default.

## List the Directories and files in current location

`DIR`

## Delete a file

`DEL file.txt`

### Or delete multiple files of same extension

``` cmd
DEL *.txt
```

## Delete a Folder

```cmd
RMDIR folder_name
```

**Note**:
 > This command only deletes the folder if the folder is empty.

## Copy folder or file

``` cmd
COPY folder_name 'path/new_location'
```

Similar for files.

## Cut the folder or file

```cmd
move file_name 'path/new_location'
```

## Change the Title

```cmd
TITLE My new Title
```

It appears on top of the command prompt window.

## Change Prompt

```cmd
PROMPT Mr. Hacker
```

It appears on the path place.

**To change it simply type `PROMPT` again**

### To learn more simply type HELP

`HELP`

Or to learn about a specific command type `HELP`` command-name

```cmd
HELP dir
```

Check the cmd help.txt file in the current location

## To get the long script in a file

- type double angle brackets >> after the command and name the file with extension.

``` cmd
HELP >> "cmd help.txt"
```

## Windows 11 Specific

These commands may work in windows 10 in latest updates.

## See the wifi ever connected to the OS

```cmd
netsh wlan show profile
```

## To see the password of any wifi

```cmd
netsh wlan show profile "wifi_name" key=clear
```

## Check system information

```cmd
systeminfo
```

## Open Explorer in the current location

```cmd
explorer .
```

## start a website

```cmd
start https://github.com/sarmad426
```

## Curl

Windows 11 has built in Curl.

## Check the weather inside command prompt

```cmd
curl wttr.in/Lahore
```

Lahore is just a location.

## Check the status of a website

```cmd
curl -Is https://github.com
```

## Check public IP for a specific domain

```cmd
curl checkip.amazonaws.com
```

- **Note:**

It is a sensitive information. 💀⚡

## Create a QR Code for any domain in command prompt

```cmd
curl qrenco.de/https://github.com/sarmad426
```

## Define an English word

```cmd
curl dict.org/d:Achievement
```

Achievement is just a word. Update this to get the one you desire for.

### Networking Commands

- `hostname`

Gives the name of the System.

- `ipconfig`

Gives the ip address

- `ipconfig`

Gives ip as well as mac address

- `getmac`

Gives mac address

MAC stands for **Media Access Control**. It is a physical address comes built-in from the manufacturer and cannot be muted later.

- `ping`

Gives information about the connection between two systems in same or in different networks.

- `ping (ip of 2nd system)`

**Example:**

- `ping 192.168.1.2`

Or it can also be used to check connection for a domain.

**For Example:**

- `ping https://github.com`

- `netstat`
netstat stands for **Network Statistics.**

- `nslookup`

Gives the ip of given domain

**Example:**

`nslookup https://github.com`
