# Source Code vs Byte CODE vs Binary Code

**Example used throughout:** `Chapter_01_JS_Basics/Hello_world.js`

```javascript
console.log("Hello world, welcome to JSand playwright learnings");
```

One line of human code must pass through 3 layers before the CPU can execute it.

---

## 1. Breakdown Table

| Aspect | Source Code | Byte CODE | Binary Code |
|---|---|---|---|
| **What is it?** | Code written by a human in JavaScript, Java, C, etc. | Intermediate, VM-runnable instructions produced from source | Raw 0s and 1s that the CPU executes natively |
| **Who reads it?** | Humans | Virtual machine / interpreter (V8, JVM, CPython) | CPU hardware |
| **Human readable?** | ✅ Yes — plain text | ❌ Mostly no — symbol-like opcodes | ❌ No — only bits/hex |
| **Platform dependent?** | No | No (but needs a matching VM) | Yes — Windows vs Linux vs Mac differ |
| **File extension** | `.js`, `.java`, `.c`, `.py` | `.class` (Java), `.pyc` (Python), or in-memory (V8) | `.exe`, `.bin`, `.out` |
| **Who produces it?** | You, in an editor | Engine/compiler (e.g., V8's Ignition) | JIT/AOT compiler or assembler |
| **When?** | Development time | Run time (JS) or compile time (Java) | Compile time or during execution (JIT) |
| **Editable?** | ✅ Easily | 🔧 Very difficult | ❌ Practically impossible |
| **Execution speed** | Not executed — must be translated first | Faster to start than full compile; still interpreted | 🚀 Fastest — native CPU instructions |

---

## 2. Example Walkthrough — one `Hello_world.js` line through each layer

| # | Layer | What actually happens | What it looks like |
|---|---|---|---|
| **1** | **Source Code** | You write the file in VS Code and save it | `console.log("Hello world, welcome to JSand playwright learnings");` |
| **2** | **Byte CODE** | You run `node Hello_world.js` → V8 parses it, then **Ignition** compiles it to compact byte code | Pseudo-instructions such as:<br>`LdaConstant r0, "Hello world..."` (load string)<br>`Call r0, console.log` (call function)<br>`Return` |
| **3** | **Binary Code** | If this line runs often ("hot code"), **TurboFan** JIT-compiles the byte code to native instructions for your exact CPU | CPU instructions like:<br>`mov rdi, <address of "Hello world...">`<br>`call <printf routine>` — ultimately stored/executed as `10110100 01100001 11001100 ...` |

**Result at every layer:** the same output —

```
Hello world, welcome to JSand playwright learnings
```

---

## 3. Pipeline Diagram

```
    You type in editor                     Node.js / V8 engine                     Your CPU
┌──────────────────────────┐   ┌─────────────────────────────┐   ┌──────────────────────────┐
│    SOURCE CODE           │   │       BYTE CODE             │   │      BINARY CODE         │
│  console.log("Hello...") │──▶│  LdaConstant / Call / Return│──▶│  mov rdi,"Hello..."      │
│  (.js, human-readable)   │   │  (Ignition interpreter)     │   │  call printf → executes  │
│                          │   │  ◀── hot path ──▶           │   │  (TurboFan JIT, 0s & 1s) │
└──────────────────────────┘   │        (byte code →         │   └──────────────────────────┘
                               │         optimized binary)   │
                               └─────────────────────────────┘
```

```
Flow:  source (.js)  →  parse  →  byte code (Ignition)  →  hot?  →  binary code (TurboFan)  →  OUTPUT
```

---

## 4. TL;DR

- **Source code** = what *you* write; humans read it, CPUs can't.
- **Byte CODE** = an in-between, VM-friendly format; fast to start and still optimizable.
- **Binary code** = pure machine instructions; only *this* layer actually runs on the CPU.
- JavaScript is **both interpreted and compiled**: source → byte code at startup, then hot code is JIT-compiled into binary for speed.
- Contrast: **C/C++** skips the byte-code stage (source → binary directly), while **Java** mirrors JS with a `.class` byte-code middle layer run by the JVM.

> Rule of thumb: `source` answers "what should happen?" → `byte code` answers "how, in generic steps?" → `binary code` answers "how, on THIS chip?".
