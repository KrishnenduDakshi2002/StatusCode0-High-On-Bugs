echo "Enter the name of the file"
read file_name
cd ./apps/crypto-bank-backend/src/app
nest g controller $file_name & nest g service $file_name & nest g module $file_name
