# !/bin/bash
echo "What is your commit message?"
read NAME
if test "$NAME" = pull ; then
   git add -A
   git commit -m "Just Pulled"
   git pull
else
   git add -A
   git commit -m "$NAME"
   git pull
   git push
fi
