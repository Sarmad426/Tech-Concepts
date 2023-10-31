# Cisco Packet Tracer Commands

## To connect a computer to another computer

Note that this command works only when the systems share the similar ip address pattern.

`ping 192.168.1.2`
This is only going to work if the computer has `192.168.1.` in its ip.

## Tutorias

Cisco Packet Tracer Commands for Configuration.

```cisco
en
config t
hostname R1
int g0/0/0
ip add 192.168.1.1 255.255.255.0
no sh
````

- `en` Stands for enable.
- `config t` means **Configure Terminal**
- `no sh` Stands for no shutdown.

Type `end` to exit the configuration terminal.

Now press `wr` to save the configuration you made.

> To check the configuration status type.

`sh ip int br`

It stands for **Show IP Interface Brief.**


## Configure DHCP

**DHCP** stands for Dynamic Host Configuration Protocol. It is a network management protocol used to dynamically assign an IP address to any device, or node, on a network so it can communicate using IP.


```cisco
en
config t
ip dhcp pool name
default-router 192.168.1.1
network 192.168.1.1 255.255.255.0
end
wr
```

## Configure VLAN in Cisco Switch

VLAN Stands for **Virtual Local Area Network.** It is used when we don't want
two networks in the same ip to communicate. For this example we will create two
vlans in the same network.

1. sales
2. marketing

```cisco
en
config t
hostname SW1

vlan 10
name sales

vlan 20
name marketing

int range f0/1-4

switchport access vlan 10

int range f0/5-7

switchport access vlan 20

end

wr

sh valn br
```


## Configure Vlan and Trunks

Configuring virtual networks and trunks in cisco packet tracer. Consider we have two switches connected to 2 systems and these switches are also connected to each other within the same ip and default gateway, they can communicated. But to prevent that we use Vlans. But if we want to networks connected to different switches to communicate we can use trunks.

### For Switch 1 

```cisco
en
config t
hostname SW1
vlan 10
name sales
vlan 20
name marketing

int f0/1
switchport mode access
switchport access vlan 10

int f0/2
switchport mode access
switchport access vlan 20

int f0/3
switchport mode trunk

```


## For Switch 2


```cisco
en
config t
hostname SW2
vlan 10
name sales
vlan 20
name marketing

int f0/1
switchport mode access
switchport access vlan 10

int f0/2
switchport mode access
switchport access vlan 20

int f0/3
switchport mode trunk

```

## Configure Inter Vlan

The main purpose of inter-VLAN routing is to enable communication between different VLANs in a network. It improves network performance by reducing congestion and containing broadcast traffic within each VLAN. Inter-VLAN routing enhances security by implementing access control lists and firewall rules to restrict unauthorized access. It provides flexibility and scalability, allowing for easy network expansion and resource sharing. Efficient resource utilization is achieved by sharing servers or printers across multiple VLANs. Inter-VLAN routing simplifies network management by logically grouping users or departments based on requirements. Overall, it offers increased network flexibility, security, and performance.

```
en
config t

hostname SW1

vlan 10
name sales

vlan 20
name marketing

int f0/2
switchport access vlan 10
switchport mode access

int f0/3
switchport access vlan 10
switchport mode access

int f0/4
switchport access vlan 20
switchport mode access

int f0/5
switchport access vlan 20
switchport mode access
```
