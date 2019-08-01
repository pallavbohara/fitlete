@ECHO OFF
echo NOTHING >> README.md
git config --global user.email "pallavbohara@gmail.com"
git init
git add README.md
git add .
git commit -m "first commit"
git remote add origin https://github.com/pallavbohara/fitlete.git
git push -u origin master
PAUSE