echo "Enter the name of the file"
read file_name
cd ../src/app
nest g controller $file_name & nest g service $file_name & nest g module $file_name
mkdir interface pipe schemas