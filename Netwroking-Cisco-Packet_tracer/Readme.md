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

### Switch Configuration

```cisco
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

end

wr

sh vlan br
```

### Router Configuration

```cisco
en
config t
hostname R1

int f0/0
ip add 192.168.10.1 255.255.255.0
no sh

int f0/1
ip add 192.168.20.1 255.255.255.0
no sh

end
wr
sh ip int br
```

```cisco

int g0/0/0
switchport access vlan 10
switchport mode access

int g0/0/1
switchport access vlan 10
switchport mode access
```

### What is Intervlan. How it is different from trunk?

In networking, inter-VLAN refers to the communication between different VLANs (Virtual Local Area Networks). VLANs are used to logically separate a network into smaller, isolated segments, and inter-VLAN routing allows these segments to communicate with each other.

Inter-VLAN routing is used to enable communication between devices in different VLANs, which would otherwise be isolated from each other. It allows for better network security, improved performance, and more efficient use of network resources.

On the other hand, a trunk is a network link that carries traffic for multiple VLANs. It is used to connect switches together and allows VLAN traffic to pass between them. Trunks use VLAN tagging to identify which VLAN a packet belongs to when it is transmitted between switches.

The main difference between inter-VLAN and trunk is their purpose and scope. Inter-VLAN routing is concerned with facilitating communication between devices in different VLANs, while a trunk is responsible for carrying traffic for multiple VLANs between switches.

In summary, inter-VLAN routing enables communication between devices in different VLANs, while a trunk is a network link that carries traffic for multiple VLANs between switches.

## Router on the stick inter-vlan

### Switch Configuration

```cisco
en
config t
hostname SW1
valn 10
name sales
vlan 20
name marketing
int range f0/1-4
switchport access vlan 10
switchport mode access

int range f0/5-8
switchport access vlan 20
switchport mode access

int f0/9
switchport mode trunk
```

### Router Configuration

```cisco
config t
hostname R1
int f0/0
no sh

int f0/0.10
encapsulation dot1q 10
ip add 192.168.10.1 255.255.255.0

int f0/0.20
encapsulation dot1q 20
ip add 192.168.20.1 255.255.255.0
```

