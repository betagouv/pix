#! /bin/bash
#
# This file is used to DESTROY a database, then create a new one, then re-run the migrations
#
# Usage: ./administrative_tasks/reboot_database.sh <db_name>
#

DATABASE_NAME=$1

[ -z "$DATABASE_NAME" ] && {
    echo "Usage: ./reboot_database.sh <db_name>"
    exit 1
}

DOKKU_DIR=/var/lib/dokku/services/postgres/$DATABASE_NAME
MOUNT_POINT=/mnt/$DATABASE_NAME

[ -d "$DOKKU_DIR" ] || {
    echo "The database doesn't exists"
    exit 2
}

[ -d "$MOUNT_POINT" ] || {
    echo "This script has been written for databases mounted in external volumes"
    exit 3
}

dokku postgres:destroy $DATABASE_NAME

rm -rf $MOUNT_POINT/*
unlink $DOKKU_DIR

dokku postgres:create $DATABASE_NAME
dokku postgres:stop $DATABASE_NAME
mv $DOKKU_DIR/* $MOUNT_POINT/
rmdir $DOKKU_DIR
ln -s $MOUNT_POINT $DOKKU_DIR
dokku postgres:start $DATABASE_NAME


