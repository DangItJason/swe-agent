# Go Code Editing Agent

This project is a command-line agent built in Go that interacts with the Anthropic Claude API to understand and execute code editing tasks. It allows users to chat with Claude and leverage its capabilities to perform actions on their local filesystem, such as reading files, listing directory contents, and editing files.

## Features

*   **Interactive Chat with Claude:** Engage in a conversation with Anthropic's Claude model directly from your terminal.
*   **Tool Usage:** The agent can be equipped with tools that Claude can use to interact with your local environment:
    *   `read_file`: Reads the content of a specified file.
    *   `list_files`: Lists files and directories at a given path.
    *   `edit_file`: Makes edits to a text file by replacing specified strings or creating new files.
*   **Extensible Toolset:** The agent is designed to be extensible with new tools.

## Prerequisites

*   **Go:** Version 1.21 or higher. You can download it from [golang.org](https://golang.org/dl/).
*   **Anthropic API Key:** You need an API key from Anthropic to use Claude. Set this key as an environment variable:
    ```bash
    export ANTHROPIC_API_KEY="your-api-key-here"
    ```

## Setup and Running

1.  **Clone the repository (if you haven't already):
    ```bash
    git clone https://github.com/DangItJason/swe-agent.git
    cd swe-agent
    ```

2.  **Ensure Go is set up correctly:**
    Make sure your Go installation (1.21+) is active and in your `PATH`.

3.  **Tidy Go modules:**
    ```bash
    go mod tidy
    ```

4.  **Run the agent:**
    ```bash
    go run main.go
    ```

Once running, you can start typing your requests to Claude. For example:

```
You: Can you list the files in the current directory?
```

Claude will then use the `list_files` tool if it deems it appropriate.

## How it Works

The agent maintains a conversation history with the Claude API. When a user provides input, the agent sends the conversation to Claude. If Claude decides to use a tool, the agent executes the tool locally and sends the result back to Claude. Claude then uses this information to formulate its response to the user.

## Project Structure

*   `main.go`: The main application entry point, containing the agent logic, tool definitions, and interaction with the Anthropic API.
*   `go.mod`, `go.sum`: Go module files managing project dependencies.
*   `README.md`: This file.

## Contributing

Feel free to fork the repository and submit pull requests!
