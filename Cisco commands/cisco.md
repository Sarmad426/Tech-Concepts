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
