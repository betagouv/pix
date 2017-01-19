import json, sqlite3
conn = sqlite3.connect('../api/db/dev.sqlite3')

with open('records.json') as f:
    scenarios = json.load(f)['scenarios']

c = conn.cursor()
c.executemany('INSERT INTO scenarios VALUES (NULL, ?, ?, ?, datetime("now"), datetime("now"))', scenarios)

conn.commit()
conn.close()
