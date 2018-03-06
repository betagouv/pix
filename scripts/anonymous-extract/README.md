Extraction anonyme des réponses aux épreuves
============================================

# Prérequis

- Avoir ouvert un tunnel vers la db de scalingo en utilisant le script `scripts/backup-db/open-tunnel.sh`

# Usage

```shell
python ./scripts/anonymous-extract/main.py
```

Le fichier résultant est dans `anon_dump.csv` 
