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
