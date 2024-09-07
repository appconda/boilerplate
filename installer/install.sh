pwd
ls -ll
cd /install/data
pwd
ls -ll

docker-compose down
docker-compose up -d

cd /install

docker cp  ./server  realmocean-dev:/usr/src/code/app
docker cp  ./server/services  realmocean-services:/usr/app/src
docker cp  ./server/ai_components  realmocean-ai:/server/src/components

cd ./realmocean/services 

ls -ll

cd /install/data
pwd
docker-compose restart