# TypeScript Concepts

A comprehensive guide and reference for learning TypeScript fundamentals and advanced concepts.

## Table of Contents

- [Introduction](#introduction)
- [Core Concepts](#core-concepts)
- [Type System](#type-system)
- [Functions](#functions)
- [Interfaces](#interfaces)
- [Classes](#classes)
- [Generics](#generics)
- [Enums](#enums)
- [Unions and Intersections](#unions-and-intersections)
- [Utility Types](#utility-types)
- [Advanced Topics](#advanced-topics)

## Introduction

TypeScript is a strongly typed programming language that builds on JavaScript, adding static type checking and advanced features. This repository contains examples and explanations of key TypeScript concepts.

## Core Concepts

### Basic Types

TypeScript supports fundamental types:

- **string**: Text data
- **number**: Numeric values
- **boolean**: True/false values
- **any**: Disables type checking
- **unknown**: Type-safe version of any
- **never**: Never returns a value

```typescript
let name: string = "John";
let age: number = 30;
let isActive: boolean = true;
```

### Type Inference

TypeScript automatically infers types when not explicitly declared:

```typescript
let message = "Hello"; // inferred as string
let count = 42; // inferred as number
```

## Type System

### Literal Types

Restrict values to specific literals:

```typescript
type Direction = "up" | "down" | "left" | "right";
type HttpStatus = 200 | 404 | 500;
```

### Type Aliases

Create reusable type definitions:

```typescript
type Point = {
  x: number;
  y: number;
};

type ID = string | number;
```

## Functions

### Function Types

Define parameter and return types:

```typescript
function add(a: number, b: number): number {
  return a + b;
}

const multiply: (a: number, b: number) => number = (a, b) => a * b;
```

### Optional and Default Parameters

```typescript
function greet(name: string, greeting?: string): string {
  return `${greeting || "Hello"}, ${name}!`;
}

function sayHello(name: string = "World"): void {
  console.log(`Hello, ${name}`);
}
```

### Rest Parameters

```typescript
function sum(...numbers: number[]): number {
  return numbers.reduce((a, b) => a + b, 0);
}
```

## Interfaces

Define object contracts:

```typescript
interface User {
  id: number;
  name: string;
  email?: string; // optional property
  readonly createdAt: Date; // readonly property
}

interface Admin extends User {
  permissions: string[];
}
```

### Function Interfaces

```typescript
interface Callback {
  (data: string): void;
}

const handler: Callback = (data) => {
  console.log(data);
};
```

## Classes

### Basic Class Structure

```typescript
class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  speak(): void {
    console.log(`${this.name} makes a sound`);
  }
}
```

### Access Modifiers

```typescript
class Vehicle {
  public brand: string; // accessible everywhere
  protected color: string; // accessible in subclasses
  private engine: string; // only in this class

  constructor(brand: string, color: string, engine: string) {
    this.brand = brand;
    this.color = color;
    this.engine = engine;
  }
}
```

### Inheritance and Abstract Classes

```typescript
abstract class Shape {
  abstract getArea(): number;

  describe(): string {
    return `Area: ${this.getArea()}`;
  }
}

class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }

  getArea(): number {
    return Math.PI * this.radius ** 2;
  }
}
```

## Generics

Create flexible, reusable components with type parameters:

```typescript
// Generic function
function getFirstElement<T>(array: T[]): T {
  return array[0];
}

// Generic class
class Container<T> {
  constructor(private value: T) {}

  getValue(): T {
    return this.value;
  }
}

// Generic constraints
function merge<T extends object, U extends object>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}
```

## Enums

Define a set of named constants:

```typescript
// Numeric enum
enum Direction {
  Up = 1,
  Down = 2,
  Left = 3,
  Right = 4,
}

// String enum
enum Status {
  Active = "ACTIVE",
  Inactive = "INACTIVE",
  Pending = "PENDING",
}

// Heterogeneous enum
enum Mixed {
  No = 0,
  Yes = "YES",
}
```

## Unions and Intersections

### Union Types

Allow values of multiple types:

```typescript
type Result = string | number;
type Response = "success" | "error" | "pending";

function process(input: string | number): void {
  if (typeof input === "string") {
    console.log(input.toUpperCase());
  } else {
    console.log(input * 2);
  }
}
```

### Intersection Types

Combine multiple types:

```typescript
type Admin = { isAdmin: true; permissions: string[] };
type User = { name: string; email: string };
type AdminUser = Admin & User;

const admin: AdminUser = {
  isAdmin: true,
  permissions: ["read", "write"],
  name: "John",
  email: "john@example.com",
};
```

## Utility Types

### Common Utility Types

```typescript
// Partial<T>: All properties optional
type PartialUser = Partial<User>;

// Required<T>: All properties required
type RequiredUser = Required<User>;

// Readonly<T>: All properties readonly
type ReadonlyUser = Readonly<User>;

// Pick<T, K>: Select specific properties
type UserPreview = Pick<User, "id" | "name">;

// Omit<T, K>: Exclude specific properties
type UserWithoutEmail = Omit<User, "email">;

// Record<K, T>: Map keys to values
type UserRoles = Record<"admin" | "user" | "guest", string>;

// Exclude<T, U>: Remove types from union
type NonString = Exclude<string | number | boolean, string>;

// Extract<T, U>: Select types from union
type OnlyString = Extract<string | number | boolean, string>;
```

## Advanced Topics

### Conditional Types

```typescript
type IsString<T> = T extends string ? true : false;

type A = IsString<"hello">; // true
type B = IsString<42>; // false
```

### Mapped Types

```typescript
type Getters<T> = {
  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
};

type Person = { name: string; age: number };
type PersonGetters = Getters<Person>;
// { getName: () => string; getAge: () => number }
```

### Type Guards

```typescript
function isPrimitive(value: unknown): value is string | number | boolean {
  return typeof value === "string" || typeof value === "number" || typeof value === "boolean";
}

function isUser(obj: unknown): obj is User {
  return obj !== null && typeof obj === "object" && "id" in obj && "name" in obj;
}
```

### Module Declaration

```typescript
declare module "custom-module" {
  export function customFunction(): void;
}
```

## Best Practices

1. **Use strict mode**: Enable `strict: true` in `tsconfig.json`
2. **Prefer interfaces over types**: Use interfaces for object shapes, types for unions
3. **Avoid `any`**: Use `unknown` or more specific types
4. **Use generics**: Create reusable, type-safe components
5. **Leverage utility types**: Reduce code duplication
6. **Type your callbacks**: Always specify callback parameter types
7. **Use readonly**: Mark immutable data appropriately
8. **Document complex types**: Add JSDoc comments for clarity

## Getting Started

1. Clone this repository
2. Install TypeScript: `npm install -g typescript`
3. Compile: `tsc types.ts`
4. Run: `node types.js`

## Resources

- [TypeScript Official Documentation](https://www.typescriptlang.org/docs/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/)
- [TypeScript Playground](https://www.typescriptlang.org/play)

## License

This project is open source and available under the MIT License.
