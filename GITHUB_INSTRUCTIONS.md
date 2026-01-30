# How to Upload Your Project to GitHub

It looks like **Git is not installed** or not recognized on your system. You'll need to install it first.

## Step 1: Install Git
1.  Download Git for Windows: [https://git-scm.com/download/win](https://git-scm.com/download/win)
2.  Install it (you can just click "Next" through the defaults).
3.  **Restart your terminal/VS Code** after installing for the command to work.

## Step 2: Create a Repository on GitHub
1.  Go to [GitHub.com](https://github.com) and sign in.
2.  Click the **+** icon in the top right -> **New repository**.
3.  Name it `jobgenius` (or whatever you like).
4.  Make it **Public** or **Private**.
5.  **Do NOT** check "Add a README" or .gitignore (we already have those).
6.  Click **Create repository**.

## Step 3: Push Your Code
Once Git is installed, open your terminal (VS Code: `Ctrl + ~`) and run these commands one by one:

```bash
# 1. Initialize Git in your project
git init

# 2. Add all your files
git add .

# 3. Commit your changes
git commit -m "Initial launch of JobGenius"

# 4. Rename branch to main
git branch -M main

# 5. Link to your GitHub repo (Replace YOUR_USERNAME with your actual GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/jobgenius.git

# 6. Push the code
git push -u origin main
```

## Troubleshooting
- If `git push` fails, it might ask you to sign in. A browser window should pop up to authenticate you.
- If you see "remote origin already exists", run `git remote remove origin` and try step 5 again.
