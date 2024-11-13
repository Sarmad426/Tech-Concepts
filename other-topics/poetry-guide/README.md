# Project Setup Guide with Poetry

Poetry is a package manager for Python that simplifies dependency management and packaging. It is a lightweight tool that allows you to create new projects, manage dependencies, and package your code.

## 1. Install Poetry

Run the following command in Command Prompt or PowerShell to install Poetry:

```bash
curl -sSL https://install.python-poetry.org | python3 -
```

If you are on *Windows* change `python3` to just `python`. Make sure python is already installed.

Verify the installation:

```bash
poetry --version
```

### 2. Set Up a New Project

Navigate to the desired project directory and initialize a new project:

```bash
poetry new project-name
```

Alternatively, to create just a `pyproject.toml` file in the current folder:

```bash
poetry init
```

### 3. Create and Activate Virtual Environment

To create a virtual environment and install dependencies, run:

```bash
poetry install
```

Activate the virtual environment:

```bash
poetry shell
```

### 4. Get Virtual Environment Info

To display the virtual environment path:

```bash
poetry env info --path
```

### 5. Deactivate Virtual Environment

To exit the virtual environment:

```bash
exit
```
