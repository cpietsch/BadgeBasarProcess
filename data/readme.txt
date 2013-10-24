sqlite3 nzz.sqlite3

sqlite> .headers on
sqlite> .mode csv
sqlite> .output out.csv
sqlite> select * from recherche_badgeinhaber;