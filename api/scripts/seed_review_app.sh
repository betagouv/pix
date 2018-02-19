#! /bin/bash
echo $NODE_ENV
if [ $NODE_ENV = "development" ]
then
  echo "RUN"
  npm run db:seed
fi
