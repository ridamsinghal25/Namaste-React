# Monolith

In the past, we used to build large projects where everything was bundled
together. Imagine building an entire application where all the code—APIs, user
interface, database connections, authentication, even notification services—
resides in one massive project with single code base.

## Microservices

The idea is to split your application into a set of smaller, interconnected
services instead of building a single monolithic application. Each service handles
a specific job, like handling user accounts or managing payments. Inside each
service, there's a mini-world of its own, with its own set of rules (business
logic) and tools (adapters). Some services talk to each other in different ways,
like using REST or messaging.

# useEffect

It is called after the component is rendered.

# NOTE

Whenever a state variable updates, react triggers a reconciliation cycle(re-renders the component)
