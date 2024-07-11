# Linux Command Line Documentation

This documentation provides a guide to common file and folder operations on the Linux command line. The examples given are applicable to any Linux distribution. In this guide, we'll cover the following topics:

1. Creating a File
2. Creating a Folder
3. Renaming a File or Folder
4. Replacing the Contents of a File
5. Deleting a File or Folder
6. Writing to a File

## 1. Creating a File

To create a new file in the Linux command line, you can use the `touch` command:

```bash
touch filename.txt
```

This will create a new empty file named `filename.txt`.

## 2. Creating a Folder

To create a new folder (directory) in the Linux command line, you can use the `mkdir` command:

```bash
mkdir my_folder
```

This will create a new folder named `my_folder`.

## 3. Renaming a File or Folder

To rename a file or folder, you can use the `mv` (move) command. To rename a file, use the following syntax:

```bash
mv old_filename.txt new_filename.txt
```

To rename a folder, use the same `mv` command with the folder names:

```bash
mv old_folder new_folder
```

## 4. Replacing the Contents of a File

To replace the contents of a file, you can use a text editor like `nano`, `vim`, or `echo` to overwrite the file. Here's an example using `echo`:

```bash
echo "This is the new content" > filename.txt
```

This will replace the existing content of `filename.txt` with the new text.

## 5. Deleting a File or Folder

To delete a file, use the `rm` (remove) command:

```bash
rm filename.txt
```

To delete an empty folder, use the `rmdir` command:

```bash
rmdir my_folder
```

To delete a folder and its contents, including subdirectories, use the `rm` command with the `-r` (recursive) option:

```bash
rm -r my_folder
```

**Be very cautious when using the `rm` command with the `-r` option, as it can permanently delete files and folders.**

## 6. Writing to a File

To write to a file using a text editor, you can use commands like `nano` or `vim`. For example, to open a file for editing using `nano`:

```bash
nano filename.txt
```

After making your changes, press `Ctrl + O` to save the file and `Ctrl + X` to exit the editor.

These commands and examples should help you perform common file and folder operations on the Linux command line. Please exercise caution, especially when deleting files or folders, to avoid accidental data loss.

## Linux Networking Commands

1. **ping** - Test Network Connectivity

   The `ping` command is used to test network connectivity to a remote host by sending ICMP echo request packets.

   Example:

   ```bash
   ping google.com
   ```

   Explanation: This command sends ICMP packets to google.com to check if it's reachable and measures the round-trip time.

2. **ifconfig (or ip addr)** - Display Network Interface Information

   The `ifconfig` (or `ip addr`) command displays information about network interfaces on your system.

   Example:

   ```bash
   ifconfig
   ```

   Explanation: This command provides information about network interfaces, including IP addresses, MAC addresses, and more.

3. **netstat** - Network Statistics

   The `netstat` command displays network statistics and information about network connections, routing tables, and interface statistics.

   Example:

   ```bash
   netstat -tuln
   ```

   Explanation: This command shows a list of all listening TCP and UDP ports on your system.

4. **ss** - Socket Statistics

   The `ss` command is an alternative to `netstat` and provides detailed socket statistics.

   Example:

   ```bash
   ss -tuln
   ```

   Explanation: Similar to `netstat`, this command displays listening TCP and UDP ports, but it's more efficient.

5. **ifup / ifdown** - Bring Network Interface Up or Down

   The `ifup` and `ifdown` commands are used to bring a network interface up or down, respectively.

   Example:

   ```bash
   sudo ifdown eth0
   ```

   Explanation: This command deactivates the network interface `eth0`.

6. **ifconfig (or ip) up / down** - Bring Network Interface Up or Down

   You can also use `ifconfig` or `ip` to bring a network interface up or down.

   Example:

   ```bash
   ifconfig eth0 down
   ```

   Explanation: This command deactivates the network interface `eth0`.

7. **traceroute** - Trace the Route to a Host

   The `traceroute` command traces the route taken by packets to reach a destination host.

   Example:

   ```bash
   traceroute google.com
   ```

   Explanation: This command shows the route taken by packets to reach google.com, displaying the IP addresses of intermediate hops.

8. **nslookup (or dig)** - DNS Query

   The `nslookup` or `dig` command is used to query DNS (Domain Name System) for information about hostnames and IP addresses.

   Example:

   ```bash
   nslookup google.com
   ```

   Explanation: This command queries DNS to find the IP address associated with `google.com`.

9. **route** - Display or Modify the Kernel Routing Table

   The `route` command is used to display or modify the kernel routing table.

   Example:

   ```bash
   route -n
   ```

   Explanation: This command displays the routing table with numeric IP addresses.

10. **nmap** - Network Mapper

    The `nmap` command is a powerful network scanning tool used to discover hosts and services on a network.

    Example:

    ```bash
    nmap -p 80-100 192.168.1.1
    ```

    Explanation: This command scans ports 80 to 100 on the host with IP address 192.168.1.1.

These networking commands are useful for managing and diagnosing network-related issues on a Linux system. Please note that some of these commands may require superuser privileges (sudo) to run.

## Wifi Network details using terminal

1. **Check Available Wi-Fi Networks**:

   To view a list of available Wi-Fi networks, you can use the `iwlist` or `nmcli` commands.

   - Using `iwlist`:

     ```bash
     sudo iwlist <interface> scan
     ```

     Replace `<interface>` with the name of your Wi-Fi interface, typically something like `wlan0`. This command will scan for available Wi-Fi networks and display their details.

   - Using `nmcli` (NetworkManager Command-Line Tool):

     ```bash
     nmcli device wifi list
     ```

     This command lists available Wi-Fi networks along with their details.

2. **Check Your Current Wi-Fi Connection**:

   To check the details of your current Wi-Fi connection, you can use the following commands:

   - Using `iwconfig`:

     ```bash
     iwconfig
     ```

     This command will display information about your wireless interface, including the SSID, signal strength, and more.

   - Using `nmcli`:

     ```bash
     nmcli connection show --active
     ```

     This command lists active network connections, including the current Wi-Fi connection.

3. **Check Wi-Fi Interface Information**:

   To get detailed information about your Wi-Fi interface, you can use the `iw` command.

   ```bash
   sudo iw dev <interface> info
   ```

   Replace `<interface>` with your Wi-Fi interface name (e.g., `wlan0`). This command provides information about the Wi-Fi interface itself, such as its capabilities and supported modes.

4. **Check IP Address and Gateway**:

   To check the IP address and default gateway for your Wi-Fi connection, you can use the `ip` command.

   ```bash
   ip addr show <interface>
   ip route show
   ```

   Replace `<interface>` with your Wi-Fi interface name. The first command will display your IP address, and the second command will show your default gateway.

5. **Check Wi-Fi Signal Strength**:

   To check the signal strength of your Wi-Fi connection, you can use the `iw` or `nmcli` commands.

   - Using `iw`:

     ```bash
     iw dev <interface> link
     ```

     This command displays the signal strength and quality of your Wi-Fi connection.

   - Using `nmcli`:

     ```bash
     nmcli -f SIGNAL,BARS device wifi
     ```

     This command lists available Wi-Fi networks with signal strength and signal bars.

By following these steps and using the provided commands, you can easily check Wi-Fi details using the terminal in Linux. Make sure to replace `<interface>` with the name of your actual Wi-Fi interface, which you can find using the `ifconfig` or `ip addr` commands.

## Manage users and their roles `chmod`

Certainly! Let's provide a more comprehensive explanation of the `chmod` commands, including `chmod 440` and `chmod 660`, and how they are used to set file permissions in Linux:

**1. `chmod 440`**

- `chmod` stands for "change mode" and is used to modify file permissions in Linux.
- The argument `440` is a numeric representation of the file permission settings.
- In the numeric representation, each digit represents permission for different categories: user (owner), group, and others. Each digit is a combination of read (4), write (2), and execute (1) permissions.
- Specifically, `440` can be broken down as follows:
  - The first digit (`4`) represents the owner's permissions, allowing read access.
  - The second digit (`4`) represents the group's permissions, also allowing read access.
  - The third digit (0) represents others, indicating no permissions.
- So, `chmod 440` sets the file's permissions to read-only for the owner and the group but denies access to others. This is useful when you want to restrict write and execute permissions, making the file readable but not modifiable by the owner and the group.

**2. `chmod 660`**

- Similar to the previous command, `chmod 660` is used to change file permissions.
- The argument `660` is another numeric representation of file permission settings.
- In this case, `660` can be explained as follows:
  - The first digit (`6`) represents the owner's permissions, allowing read and write access.
  - The second digit (`6`) represents the group's permissions, also allowing read and write access.
  - The third digit (0) represents others, indicating no permissions.
- Therefore, `chmod 660` sets the file's permissions to read and write for both the owner and the group while denying access to others. This is useful when you want to give full read and write access to the owner and the group but no access to anyone else.

File permissions are crucial for controlling access to files in a Linux system. In the numeric notation:

- 4 represents read permission.
- 2 represents write permission.
- 1 represents execute permission.
- 0 represents no permission.

Here's a summary of the common numeric permissions:

- `400`: Read permission for the owner only.
- `440`: Read permission for the owner and the group.
- `600`: Read and write permission for the owner only.
- `660`: Read and write permission for the owner and the group.
- `755`: Read, write, and execute permission for the owner, and read and execute permission for the group and others (common for executable files).
- `777`: Read, write, and execute permission for everyone (use with caution).

These numeric notations provide a concise way to set file permissions in Linux, where the owner, group, and others can have different levels of access to files and directories.

## Manage permissions and user management

In Linux, you can manage users and their roles (permissions) using various commands and tools in the terminal. User management typically involves creating and managing user accounts, assigning groups, and defining user permissions. Here's a guide on how to manage users and their roles, including read-only and write access:

1. **Create a User**:

   To create a new user, you can use the `useradd` command. For example, to create a user named "john":

   ```bash
   sudo useradd john
   ```

2. **Set a Password**:

   To set a password for the newly created user, use the `passwd` command:

   ```bash
   sudo passwd john
   ```

3. **Create User Groups**:

   You can organize users into groups using the `groupadd` command. For example, to create a group named "writers":

   ```bash
   sudo groupadd writers
   ```

4. **Add User to a Group**:

   To add a user to a specific group, use the `usermod` command. For example, to add the user "john" to the "writers" group:

   ```bash
   sudo usermod -aG writers john
   ```

5. **Assign Permissions**:

   You can control read and write permissions through file permissions (file access control) and sudo privileges (system-wide access control).

   - **File Permissions**: Use the `chmod` command to change file permissions. For example, to grant read-only access to a file for a group:

     ```bash
     chmod 440 filename  # Read-only for owner and group
     ```

     To allow write access:

     ```bash
     chmod 660 filename  # Read and write for owner and group
     ```

   - **Sudo Privileges**: To grant a user or group write access to specific commands, you can edit the `/etc/sudoers` file using the `visudo` command. Be cautious when editing this file, as it controls system-wide permissions.

     For example, to allow a user or group to run a specific command with elevated privileges, you can add an entry to the `/etc/sudoers` file:

     ```bash
     sudo visudo
     ```

     Then, add a line like this to the file, replacing `john` with the username, and `command` with the specific command you want to grant access to:

     ```text
     john ALL=(ALL) NOPASSWD: /path/to/command
     ```

6. **Test User Permissions**:

   After setting up user groups and permissions, you can test user permissions by logging in as the user and trying to perform read or write actions. For example, if you've granted write access to the "writers" group, you can create and edit files as a member of that group.

Keep in mind that proper user and permission management is essential for maintaining security and data integrity. Be cautious when using the `sudo` command and editing system files to avoid causing system instability or security vulnerabilities. Always follow best practices for user management and access control.
