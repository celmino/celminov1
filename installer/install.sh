pwd
ls -ll
cd /install/data
pwd
ls -ll

docker-compose down
docker-compose up -d

cd /install

docker cp  ./realmocean  realmocean-dev:/usr/src/code/app
docker cp  ./realmocean/services  realmocean-services:/usr/app/src

cd ./realmocean/services 

ls -ll

cd /install/data
pwd
docker-compose restart