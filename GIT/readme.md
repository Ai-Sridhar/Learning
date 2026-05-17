# ============================================
# GIT INSTALLATION & CONFIGURATION
# ============================================

git --version

git config --global user.name "Sridhar"
git config --global user.email "sridhar@gmail.com"

git config --list

git config --global init.defaultBranch main

git config --global core.editor "code --wait"

git config user.name

git config --global --unset user.name


# ============================================
# CREATE LOCAL REPOSITORY
# ============================================

mkdir SmartNotes
cd SmartNotes

git init

git status

echo "# SmartNotes App" > README.md

git add .

git commit -m "Initial commit"


# ============================================
# CREATE & MANAGE FILES
# ============================================

echo "Hello Git" > test.txt

git status

git add test.txt

git add .

git commit -m "Added test file"

echo "New Line" >> test.txt

git diff

git rm test.txt

git mv old.txt new.txt

git restore test.txt


# ============================================
# VIEW HISTORY / AUDIT TRAILS
# ============================================

git log

git log --oneline

git show a12bc

git diff

git diff commit1 commit2

git log MainActivity.kt

git blame MainActivity.kt

git log --graph --oneline --all

git shortlog

git reflog


# ============================================
# GITHUB REMOTE REPOSITORY
# ============================================

git remote add origin https://github.com/username/smartnotes-app.git

git remote -v

git push -u origin main

git pull origin main

git fetch

git remote remove origin

git remote set-url origin NEW_URL

git remote show origin


# ============================================
# CLONE REPOSITORY
# ============================================

git clone https://github.com/user/smartnotes-app.git

cd smartnotes-app


# ============================================
# BRANCHING COMMANDS
# ============================================

git branch

git branch feature-login

git switch feature-login

git checkout feature-login

git checkout -b feature-ui

git checkout -b feature-auth

git add .

git commit -m "Added login feature"

git switch main

git merge feature-login

git merge feature-auth

git branch -d feature-login

git branch -D feature-login

git push origin feature-login

git pull origin main


# ============================================
# PRACTICAL COMPLETE WORKFLOW
# ============================================

mkdir DemoProject

cd DemoProject

git init

echo "Hello Git" > app.txt

git status

git add .

git commit -m "First commit"

echo "Second Line" >> app.txt

git diff

git add .

git commit -m "Updated app file"

git log --oneline

git branch feature-auth

git switch feature-auth

echo "Firebase Login" > auth.txt

git add .

git commit -m "Added Firebase authentication"

git switch main

git merge feature-auth

git branch -d feature-auth


# ============================================
# GITHUB PUSH WORKFLOW
# ============================================

git remote add origin https://github.com/user/demo.git

git push -u origin main


# ============================================
# CLONE WORKFLOW
# ============================================

git clone https://github.com/user/demo.git

cd demo


# ============================================
# ADVANCED LOG COMMANDS
# ============================================

git log --stat

git log --patch

git log --author="Sridhar"

git log --since="7 days ago"

git log --until="2026-05-17"

git diff HEAD~1

git diff HEAD~1 HEAD

git show HEAD

git show HEAD~1


# ============================================
# MERGE CONFLICT RESOLUTION
# ============================================

git status

git add .

git commit -m "Resolved merge conflict"


# ============================================
# CLEANUP COMMANDS
# ============================================

git clean -f

git reset --soft HEAD~1

git reset --hard HEAD~1

git restore .

git checkout -- .


# ============================================
# HELPFUL COMMANDS
# ============================================

git help

git help commit

git --help

git status

git branch

git remote -v

git log --oneline --graph --all