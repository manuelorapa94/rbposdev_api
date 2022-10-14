## FIX BUG OF MARIADB of Reverint Collations
Execute the following on the HeidiSQL:
FLUSH QUERY CACHE; 
FLUSH TABLES; 
USE rbtech_admindb;

## CLEANUP TRANSACTIONS DATABASE
DELETE FROM sales;
DELETE FROM sale_items;
DELETE FROM sale_payments;
DELETE FROM calendars;

** Delete all customers except the Walk In
DELETE FROM customers WHERE customer_id != 'd7687c16-d733-11ec-9a4d-c43772c964b6'

## GODADDY
{
    "serviceport": 8091,
    "admindb": {
        "host": "localhost",
        "port": 3310,
        "user": "dbappuser",
        "password": "Rigity@2022",
        "databasename": "rbtech_admindb"
    },
    "log": {
        "name": "rbPOSService",
        "path": ".\\Logs",
        "maxsize": "10m",
        "maxfiles": "14d"
    }
}

## AWS
{
    "serviceport": 8091,
    "admindb": {
        "host": "localhost",
        "port": 3310,
        "user": "dbappuser",
        "password": "Rigity@2022",
        "databasename": "rbtech_admindb"
    },
    "log": {
        "name": "rbPOSService",
        "path": ".\\Logs",
        "maxsize": "10m",
        "maxfiles": "14d"
    }
}