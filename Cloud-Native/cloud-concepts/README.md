# Cloud Native concepts

## What is Cloud Native?

Cloud Native is a term that describes the modern way of building and running applications that leverage the advantages of the cloud computing model. It is an approach to building and running applications that fully exploit the advantages of the cloud computing model. Cloud Native applications are designed to be scalable, resilient, and manageable in a dynamic environment.

## What are the key principles of Cloud Native?

The key principles of Cloud Native are:

1. **Microservices Architecture**  
   Break applications into small, independent services that can be developed, deployed, and scaled separately.

2. **Containerization**  
   Package applications and their dependencies into lightweight, portable containers to ensure consistency across environments.

3. **DevOps Automation**  
   Automate the CI/CD pipeline for continuous integration, testing, and delivery, allowing for faster release cycles.

4. **Scalability**  
   Design applications to scale horizontally to meet demand by adding or removing instances without disrupting the system.

5. **API-First**  
   Build services with a focus on APIs to ensure clear, reliable communication between microservices and external systems.

6. **Resilience**  
   Architect for failure by ensuring that services can handle unexpected failures gracefully and recover automatically.

7. **Infrastructure as Code (IaC)**  
   Manage and provision infrastructure using code (e.g., Terraform, CloudFormation) for consistent and repeatable deployment.

8. **Observability**  
   Implement monitoring, logging, and tracing to gain visibility into the health and performance of applications in production.

9. **Immutable Infrastructure**  
   Ensure that once infrastructure is provisioned, it is never modified in place. Updates require provisioning new instances.

10. **Security**  
   Incorporate security practices, such as zero-trust, encryption, and vulnerability scanning, into the development lifecycle.

## What is Load Balancing?

Load balancing is the process of distributing incoming network traffic across multiple servers to ensure that no single server is overwhelmed. It improves the performance, availability, and reliability of applications by distributing the workload evenly across servers.

## Difference between Horizontal and Vertical Scaling

- **Horizontal Scaling** (Scale Out)  
  Horizontal scaling involves adding more machines or instances to your pool of resources to distribute the load. It increases the capacity of the system by adding more nodes.

- **Vertical Scaling** (Scale Up)
  Vertical scaling involves increasing the resources of a single machine, such as adding more CPU, memory, or storage. It increases the capacity of the system by adding more power to the existing node.
