# WebWing
## a webview C++ + vite starter app

A simple starter application using the [webview](https://github.com/webview/webview) library and the [Vite](https://github.com/vitejs/vite)

## Prerequisites

- macOS (this starter is configured for Darwin/Cocoa)
- `clang++` or `g++`
- WebKit framework (standard on macOS)

## Building

To build the application, run:

```bash
make
```

And inicilase frontend with from it's directory with:
```bash
bun i
```

## Running

Firstly start frontend from its directory with:
```bash
bun run dev
```

To run the application:

```bash
./webwing
```

Or using the make command:

```bash
make run
```

## Project Structure

- `main.cpp`: The main C++ application code.
- `include/webview/`: Contains the `webview` and its dependencies.
- `Makefile`: Build instructions for macOS.
- `webwing`: The compiled executable (generated after build).
