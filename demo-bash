if [ -d $1 ];  then
  echo 'dir exists'
  exit
else 
  mkdir $1
  cd $1
  mkdir js css
  touch index.html ./js/main.js ./css/style.css
  echo '<!DOCTYPE>
   <title>Hello</title>
   <h1>Hi</h1>
  ' >> index.html
  echo 'h1{color: red;}' >> ./css/style.css
  echo 'var string = "Hello World"
  alert(string) 
  ' >> ./js/main.js 
  echo 'success'
  exit
fi
  
